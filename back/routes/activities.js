/*** Import des modules nécessaires */
const express = require('express')
const activityCtrl = require('../controllers/activity')

/* Récupération du routeur d'express */
let router = express.Router()

/* Middleware pour logger dates de requete */
router.use((req, res, next) => {
    const event = new Date()
    console.log('Activity Time:', event.toString())
    next()
})

/* Routage de la ressource Activity */

router.get('', activityCtrl.getAllActivities)

router.get('/:id', activityCtrl.getActivity)

router.post('', activityCtrl.addActivity)

router.put('/:id', activityCtrl.updateActivity)

router.delete('/:id', activityCtrl.deleteActivity)

module.exports = router
