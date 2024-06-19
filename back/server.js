/*** IMPORT */
const app = require('./app.js')
const DB = require('./db.config.js')

/* Start serveur avec test DB */
DB.sequelize.authenticate()
    .then(() => console.log('Database connection OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Au boulot feignasse!`)
        })
    })
    .catch(err => console.log(`Database Error`, err))