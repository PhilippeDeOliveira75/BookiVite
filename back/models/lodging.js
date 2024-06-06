
/* Import des modules nécessaires */
const { DataTypes } = require('sequelize')

/* Définition du modèle Lodigng */
module.exports = (sequelize) => {

    return Lodging = sequelize.define('Lodging', {

        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        cover: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
            validate: {
                isUrl: true
            }
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0
            }
        },

        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isFloat: true,
                min: 1,
                max: 5
            }
        }
    }, { paranoid: true })
    
}