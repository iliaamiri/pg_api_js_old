const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return AuthenticationAction.init(sequelize, DataTypes);
}

class AuthenticationAction extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          actionName: {
               type: DataTypes.STRING(150),
               allowNull: true
          }
     }, {
          sequelize,
          tableName: 'authenticationAction',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_authenticationAction",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
