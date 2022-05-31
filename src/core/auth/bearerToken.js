const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

const { DateTime } = require("luxon");
const ms = require("ms");

const { sequelizeDev } = include('./core/database');
const initModels = include('./app/init-models');
const { UserAuthToken } = initModels(sequelizeDev);

class BearerToken {

    async generateNewToken(username, userId, roleId, expiresIn = "1h") {
        await UserAuthToken.create(
            {
                isActive: true,
                roleId: roleId,
                expDate: DateTime.now().plus(ms(expiresIn)),
                userId: userId
            }
        );
        return jwt.sign({
                userId,
                username,
                roleId
            },
            JWT_PRIVATE_KEY,
            {
                algorithm: 'RS256',
                expiresIn: expiresIn
            }
        );
    }

    generateTokenStringCustom() {
        // const hash = crypto.createHash('sha512');
        // const hashedValue = hash.update(rawValue, 'utf-8');
        // return hashedValue.digest('hex');
    }
}

module.exports = BearerToken;