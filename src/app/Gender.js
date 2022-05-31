const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return Gender.init(sequelize, DataTypes);
}

class Gender extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            genderName: {
                type: DataTypes.CHAR(10),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'gender',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "PK_gender",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}
