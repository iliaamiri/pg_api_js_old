const Controller = require("../../core/Controller.js");
const UserAuthException = require("../../core/exceptions/UserAuthException.js");

const Decimal = require("decimal.js");

const crypto = require('crypto');
const { v4: uuid } = require('uuid');

const { sequelizeDev } = include('./core/database');
const initModels = include('./app/init-models');
const { UserAuthToken, User, UserRole, Role } = initModels(sequelizeDev);

const {getRandomNumberBetweenTwoNumbers} = require("../../core/utils.js");
const BearerToken = require("../../core/auth/bearerToken.js");
const { emailPregMatch, usernamePregMatch } = require("../../core/pregs.js")

async function verifyUsernameAndPasswordParameters(username, password) {
    if (username === undefined || username.length < 3 || username.length > 150 || username.match(usernamePregMatch) === null) {
        throw new UserAuthException('INVALID_USERNAME');
    }
    if (password === undefined || password.length > 500) {
        throw new UserAuthException('INVALID_PASSWORD');
    }
}

const UserAuthController = {
    ...Controller,

    async login(req, res) {
        const requestParams = req.body;

        const username = requestParams['username'];
        const hashedPassword_layer1 = requestParams['password'];

        await verifyUsernameAndPasswordParameters(username, hashedPassword_layer1);

        const foundUser = await User.findOne({where: { username: username }});

        if (foundUser === null)
            throw new UserAuthException('USER_NOT_EXIST');

        const passwordHash_layer2 = crypto.createHash('sha512');
        passwordHash_layer2.update(hashedPassword_layer1 + process.env.PASSWORD_PEPPER + foundUser.passwordSalt);
        const passwordHash_layer2_string = passwordHash_layer2.digest('hex');

        if (foundUser.passwordHash !== passwordHash_layer2_string) {
            throw new UserAuthException('INVALID_PASSWORD');
        }

        // getting all the roles of the user.
        const userRoles = await foundUser
            .getUserRoles();

        // getting the first available role and remove it from the userRoles array.
        let firstRole = await userRoles.shift().getRole();

        // attempting to find the highest ranked role based on the number of permissions it has. (not the best idea) // TODO: improve this part
        let highestRole = {
            roleObj: firstRole,
            rolePermissions: await firstRole.getRolePermissions()
        };

        userRoles.map(async userRole => {
            let role = await userRole.getRole();
            let rolePermissions = await role.getRolePermissions();
            if (rolePermissions.length > role.rolePermissions) {
                highestRole.roleObj = role;
                highestRole.rolePermissions = rolePermissions;
            }
        });

        const bearerToken = new BearerToken();
        const newToken = await bearerToken.generateNewToken(foundUser.username, foundUser.id, highestRole.roleObj.id);

        return res.json({
            status: true,
            token: newToken
        });
    },

    async forgotPassword(req, res, next) {

    },

    async register(req, res) {
        const requestParams = req.body;

        const email = requestParams['email'];
        const username = requestParams['username'];
        const passwordHash_layer1 = requestParams['password'];

        if (email === undefined || email.match(emailPregMatch) === null) {
            throw new UserAuthException('INVALID_EMAIL');
        }

        await verifyUsernameAndPasswordParameters(username, passwordHash_layer1);

        const foundUserWithEmail = await User.findOne({ where: { email: email } });

        if (foundUserWithEmail) {
            throw new UserAuthException('EMAIL_ALREADY_TAKEN');
        }

        const foundUserWithUsername = await User.findOne({ where: { username: username } });

        if (foundUserWithUsername) {
            throw new UserAuthException('USERNAME_ALREADY_TAKEN');
        }

        const passwordSalt = crypto.createHash('sha512');
        passwordSalt.update(uuid());
        const passwordSalt_string = passwordSalt.digest('hex');

        const passwordHash_layer2 = crypto.createHash('sha512');
        passwordHash_layer2.update(passwordHash_layer1 + process.env.PASSWORD_PEPPER + passwordSalt_string);
        const passwordHash_layer2_string = passwordHash_layer2.digest('hex');

        try {
            const createdUser = await User.create(
                {
                    username: username,
                    email: email,
                    passwordHash: passwordHash_layer2_string,
                    passwordSalt: passwordSalt_string
                }
            );

            const playerRole = await Role.findOne({ where: { roleName: "Player" } });

            if (!playerRole) {
                console.log("Player Role Id is not found.");
                console.log("SQL SAID: ", playerRole);
                throw "SQL ERROR";
            }

            const newUserRole = await UserRole.create(
                {
                    userId: createdUser.id,
                    roleId: playerRole.id
                }
            );
            console.log("UserAuthController - created new UserRole many:many. newUserRole: ", newUserRole); // DEBUG

            const bearerToken = new BearerToken();
            const token = await bearerToken.generateNewToken(createdUser.username, createdUser.id, playerRole.id);

            res.json({
                status: true,
                token
            });
        } catch (err) {
            console.log(err);
            throw new UserAuthException('INTERNAL_ERROR');
        }
    },

    async verifyEmail(req, res, next) {
        const requestParams = req.body;


    },

    async logout(req, res, next) {

    },
}

module.exports = UserAuthController;