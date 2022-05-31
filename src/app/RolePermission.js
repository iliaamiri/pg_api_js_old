const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return RolePermission.init(sequelize, DataTypes);
}

class RolePermission extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          roleId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'role',
                    key: 'id'
               }
          },
          permissionId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                    model: 'permission',
                    key: 'id'
               }
          }
     }, {
          sequelize,
          tableName: 'rolePermission',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_rolePermission",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
