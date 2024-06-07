/*** Import des module nécessaires */
const express = require('express')
//const checkTokenMiddleware = require('../jsonwebtoken/check')
const lodgingCtrl = require('../controllers/lodging')

/* Récupération du routeur d'express */
let router = express.Router()

/* Middleware pour logger dates de requete */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('Lodging Time:', event.toString())
    next()
})

/* Routage de la ressource Lodging */

router.get('', lodgingCtrl.getAllLodgings)

//router.get('/:id', lodgingCtrl.getLodging)

router.put('', lodgingCtrl.addLodging)

//router.put('', checkTokenMiddleware, lodgingCtrl.addLodging)

//router.patch('/:id', checkTokenMiddleware, lodgingCtrl.updateLodging)

//router.post('/untrash/:id', checkTokenMiddleware, lodgingCtrl.untrashLodging)
    
//router.delete('/trash/:id', checkTokenMiddleware, lodgingCtrl.trashLodging)

//router.delete('/:id', checkTokenMiddleware, lodgingCtrl.deleteLodging)

module.exports = router