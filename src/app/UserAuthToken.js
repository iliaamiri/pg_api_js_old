const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return UserAuthToken.init(sequelize, DataTypes);
}

class UserAuthToken extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          isActive: {
               type: DataTypes.BOOLEAN,
               allowNull: false,
               defaultValue: true
          },
          userId: {
               type: DataTypes.INTEGER,
               allowNull: true,
               references: {
                    model: 'user',
                    key: 'id'
               }
          },
          expDate: {
               type: DataTypes.DATE,
               allowNull: true,
          },
          roleId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'role',
                    key: 'id'
               }
          },
     }, {
          sequelize,
          tableName: 'userAuthToken',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_userAuthToken",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
