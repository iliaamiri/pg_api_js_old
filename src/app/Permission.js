const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return Permission.init(sequelize, DataTypes);
}

class Permission extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          permissionName: {
               type: DataTypes.STRING(200),
               allowNull: false
          }
     }, {
          sequelize,
          tableName: 'permission',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_permission",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
