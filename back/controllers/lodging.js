/* Import des module nécessaires */
const DB = require('../db.config')
const Lodging = DB.Lodging

/* Routage de la ressource Lodging */

exports.getAllLodgings = (req, res) => {
    Lodging.findAll({paranoid: false})
        .then(lodgings => res.json({ data: lodgings }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}

exports.getLodging = async (req, res) => {
    
    let lodgingId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!lodgingId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération du lodging
        let lodging = await Lodging.findOne({ where: { id: lodgingId } })

        // Test si résultat
        if (lodging === null) {
            return res.status(404).json({ message: 'This lodging does not exist !' })
        }

        // Renvoi du Lodging trouvé
        return res.json({ data: lodging })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.addLodging = async (req, res) => {

    const { title, cover, price, rating } = req.body

    // Validation des données reçues
    if (!title || !cover || !price || !rating) {

        return res.status(400).json({ message: 'Missing Data' })
    }

    try {

        // Vérification si le lodging existe
        let lodging = await Lodging.findOne({ where: { title: title }, raw: true })

        if (lodging !== null) {

            return res.status(409).json({ message: `The lodging ${title} already exists !` })

        }

        // Céation du lodging
        lodging = await Lodging.create(req.body)
        
        return res.json({ message: 'Lodigng Created', data: lodging })

    } 
    
    catch(err) {

        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.updateLodging = async (req, res) => {

    let lodgingId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!lodgingId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche du lodging et vérification
        let lodging = await Lodging.findOne({ where: { id: lodgingId }, raw: true })
        if (lodging === null) {
            return res.status(404).json({ message: 'This lodging does not exist !' })
        }

        // Mise à jour du lodging
        await Lodging.update(req.body, { where: { id: lodgingId } })
        return res.json({ message: 'Lodiging Updated' })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
}


exports.deleteLodging = (req, res) => {

    let lodgingId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!lodgingId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression du lodging
    Lodging.destroy({ where: { id: lodgingId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}