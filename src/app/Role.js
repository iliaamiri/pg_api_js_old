const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     return Role.init(sequelize, DataTypes);
}

class Role extends Sequelize.Model {
     static init(sequelize, DataTypes) {
     return super.init({
          id: {
               autoIncrement: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
          },
          roleName: {
               type: DataTypes.STRING(250),
               allowNull: false
          },
          roleColour: {
               type: DataTypes.STRING(150),
               allowNull: false
          }
     }, {
          sequelize,
          tableName: 'role',
          schema: 'dbo',
          timestamps: false,
          indexes: [
               {
                    name: "PK_role",
                    unique: true,
                    fields: [
                         { name: "id" },
                    ]
               },
          ]
     });
     }
}
