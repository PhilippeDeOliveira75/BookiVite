/* Import des modules nécessaires */
const express = require('express')
const cors = require('cors')
const checkTokenMiddleware = require('./jsonwebtoken/check')

/* Import de la connexion à la DB */
let DB = require('./db.config')

/* Initialisation de l'API */
const app = express()

app.use(cors({
   origin: "*",
   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
   allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Import des modules de routage */
const userRouter = require('./routes/users')
const lodgingRouter = require('./routes/lodgings')
const activityRouter = require('./routes/activities')
const authRouter = require('./routes/auth')

/* Mise en place du routage */

app.get('/', (req, res) => res.send(`Jusqu'ici tout va bien !`))

app.use('/users', userRouter)
app.use('/lodgings', lodgingRouter)
app.use('/activities', activityRouter)
app.use('/auth', authRouter)

app.get('*', (req, res) => res.status(501).send(`Tu n'as rien à foutre là`))

module.exports = app

/* Start serveur avec test DB */
DB.sequelize.authenticate()
    .then(() => console.log('Database connection OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Au boulot feignasse!`)
        })
    })
    .catch(err => console.log(`Database Error`, err))