const DataTypes = require("sequelize").DataTypes;
const _AuthenticationAction = require("./AuthenticationAction");
const _AuthenticationHistory = require("./AuthenticationHistory");
const _Permission = require("./Permission");
const _Role = require("./Role");
const _RolePermission = require("./RolePermission");
const _UserAuthToken = require("./UserAuthToken");
const _UserRole = require("./UserRole");
const _User = require("./User");
const _UserInformation = require("./UserInformation");
const _Gender = require("./Gender");

function initModels(sequelize) {
     const User = _User(sequelize, DataTypes);
     const UserInformation = _UserInformation(sequelize, DataTypes);
     const Gender = _Gender(sequelize, DataTypes);
     const AuthenticationAction = _AuthenticationAction(sequelize, DataTypes);
     const AuthenticationHistory = _AuthenticationHistory(sequelize, DataTypes);
     const Permission = _Permission(sequelize, DataTypes);
     const Role = _Role(sequelize, DataTypes);
     const RolePermission = _RolePermission(sequelize, DataTypes);
     const UserAuthToken = _UserAuthToken(sequelize, DataTypes);
     const UserRole = _UserRole(sequelize, DataTypes);

     UserInformation.hasMany(Gender, { as: 'userInformation', foreignKey: "genderId"});

     User.hasOne(UserInformation, { as: 'user', foreignKey: "userInformationId"});
     UserInformation.belongsTo(User, { as: 'user', foreignKey: "userInformationId"})

     AuthenticationHistory.belongsTo(AuthenticationAction, { as: "authenticationAction", foreignKey: "authenticationActionId"});
     AuthenticationAction.hasMany(AuthenticationHistory, { as: "authenticationHistories", foreignKey: "authenticationActionId"});

     RolePermission.belongsTo(Permission, { as: "permission", foreignKey: "permissionId"});
     Permission.hasMany(RolePermission, { as: "rolePermissions", foreignKey: "permissionId"});

     RolePermission.belongsTo(Role, { as: "role", foreignKey: "roleId"});
     Role.hasMany(RolePermission, { as: "rolePermissions", foreignKey: "roleId"});

     UserRole.belongsTo(Role, { as: "role", foreignKey: "roleId"});
     Role.hasMany(UserRole, { as: "userRoles", foreignKey: "roleId"});

     AuthenticationHistory.belongsTo(User, { as: "user", foreignKey: "userId"});
     User.hasMany(AuthenticationHistory, { as: "authenticationHistories", foreignKey: "userId"});

     UserAuthToken.belongsTo(User, { as: "user", foreignKey: "userId"});
     User.hasMany(UserAuthToken, { as: "userAuthTokens", foreignKey: "userId"});

     UserAuthToken.hasMany(UserRole, { as: "role", foreignKey: "roleId" });

     UserRole.belongsTo(User, { as: "user", foreignKey: "userId"});
     User.hasMany(UserRole, { as: "userRoles", foreignKey: "userId"});

     return {
          AuthenticationAction,
          AuthenticationHistory,
          Permission,
          Role,
          RolePermission,
          UserAuthToken,
          UserRole,
          User,
          Gender
     };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
