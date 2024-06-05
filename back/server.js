//import des modules//
const express = require('express')
const cors = require('cors')


//import de la connexion à la base de données//
let DB = require('./db.config')

//initialisation de l'aPI//
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//import des routes//
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(501).send('Page not found')
})

//lancement du serveur avec test DB//


//lancement du serveur avec test DB//

/*DB.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Welcome to the real world, your are listenning on port ${process.env.SERVER_PORT}`)
        })
    })

    .catch(err => console.error('Unable to connect to the database:', err))
*/

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Welcome to the real world, your are listenning on port ${process.env.SERVER_PORT}`)
})