/* Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/* Définition du modèle User */
module.exports = (sequelize) => {

    const User = sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        nom:{
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },

        prenom:{
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },

        email:{
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        },

        password:{
            type: DataTypes.STRING(64),
            is: /^[0-9a-f]{64}$/i 
        }

    }, { paranoid: true })
    
    User.beforeCreate( async (user, options) => {

        let hash = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT_ROUND))
        user.password = hash

    })
    
    User.checkPassword = async (password, originel) => {

        return await bcrypt.compare(password, originel)

    }

    return User
    
}