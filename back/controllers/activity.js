/* Import des modules nécessaires */
const DB = require('../db.config')
const Activity = DB.Activity

/* Routage de la ressource Activity */

exports.getAllActivities = (req, res) => {
    Activity.findAll({ paranoid: false })
        .then(activities => res.json({ data: activities }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}

exports.getActivity = async (req, res) => {
    let activityId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!activityId) {
        return res.status(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'activité
        let activity = await Activity.findOne({ where: { id: activityId } })

        // Test si résultat
        if (activity === null) {
            return res.status(404).json({ message: 'This activity does not exist !' })
        }

        // Renvoi de l'activité trouvée
        return res.json({ data: activity })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.addActivity = async (req, res) => {
    
    const { title, cover } = req.body

    // Validation des données reçues
    if (!title || !cover) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try {
        // Vérification si l'activité existe
        let activity = await Activity.findOne({ where: { title: title }, raw: true })

        if (activity !== null) {
            return res.status(409).json({ message: `The activity ${title} already exists !` })
        }

        // Création de l'activité
        activity = await Activity.create(req.body)
        
        return res.json({ message: 'Activity Created', data: activity })

    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.updateActivity = async (req, res) => {
    let activityId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!activityId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try {
        // Recherche de l'activité et vérification
        let activity = await Activity.findOne({ where: { id: activityId }, raw: true })
        if (activity === null) {
            return res.status(404).json({ message: 'This activity does not exist !' })
        }

        // Mise à jour de l'activité
        await Activity.update(req.body, { where: { id: activityId } })
        return res.json({ message: 'Activity Updated' })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.deleteActivity = (req, res) => {
    let activityId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!activityId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'activité
    Activity.destroy({ where: { id: activityId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}
