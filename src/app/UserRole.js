const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return UserRole.init(sequelize, DataTypes);
}

class UserRole extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          userId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'user',
                    key: 'id'
               }
          },
          roleId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'role',
                    key: 'id'
               }
          }
     }, {
          sequelize,
          tableName: 'userRole',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_userRole",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
