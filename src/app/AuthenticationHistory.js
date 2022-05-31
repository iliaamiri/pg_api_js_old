const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return AuthenticationHistory.init(sequelize, DataTypes);
}

class AuthenticationHistory extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          authenticationActionId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'authenticationAction',
                    key: 'id'
               }
          },
          userId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'user',
                    key: 'id'
               }
          },
          date: {
               type: DataTypes.DATE,
               allowNull: false
          },
          ipAddress: {
               type: DataTypes.STRING(200),
               allowNull: true
          },
          userAgent: {
               type: DataTypes.STRING(200),
               allowNull: true
          }
     }, {
          sequelize,
          tableName: 'authenticationHistory',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_authenticationHistory",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
