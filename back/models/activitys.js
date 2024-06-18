/* Import des modules nécessaires */
const { DataTypes } = require('sequelize');

/* Définition du modèle Activity */
module.exports = (sequelize) => {

    const Activity = sequelize.define('Activity', {

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
        },

    }, { paranoid: true })

    return Activity

}