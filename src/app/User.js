const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return User.init(sequelize, DataTypes);
}

class User extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          username: {
               type: DataTypes.STRING(150),
               allowNull: false
          },
          email: {
               type: DataTypes.STRING(200),
               allowNull: false
          },
          passwordHash: {
               type: DataTypes.STRING(500),
               allowNull: false
          },
          passwordSalt: {
               type: DataTypes.STRING(500),
               allowNull: false
          },
          isEmailVerified: {
               type: DataTypes.INTEGER,
               allowNull: false,
               defaultValue: 0
          }
     }, {
          sequelize,
          tableName: 'user',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "IX_user_email",
                    unique: true,
                    fields: [
                         { name: "email" },
                    ]
               },
               {
                    name: "IX_user_username",
                    unique: true,
                    fields: [
                         { name: "username" },
                    ]
               },
               {
                    name: "PK_user",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
