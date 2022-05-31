const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return UserInformation.init(sequelize, DataTypes);
}

class UserInformation extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            genderId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'gender',
                    key: 'id'
                }
            },
            firstName: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            lastName: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            phoneNumber: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            dateOfBirth: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                field: 'DateOfBirth'
            },
            isPhoneVerified: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            sequelize,
            tableName: 'userInformation',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "PK_userInformation",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
