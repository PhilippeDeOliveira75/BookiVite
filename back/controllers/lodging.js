/* Import des module nécessaires */
const DB = require('../db.config')
const Lodging = DB.Lodging

/* Routage de la ressource Lodging */

exports.getAllLodgings = (req, res) => {
    Lodging.findAll({paranoid: false})
        .then(lodgings => res.json({ data: lodgings }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}

/*exports.getLodging = async (req, res) => {
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
}*/

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

/*exports.updateCocktail = async (req, res) => {
    let cocktailId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!cocktailId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche du cocktail et vérification
        let cocktail = await Cocktail.findOne({ where: { id: cocktailId }, raw: true })
        if (cocktail === null) {
            return res.status(404).json({ message: 'This cocktail does not exist !' })
        }

        // Mise à jour du cocktail
        await Cocktail.update(req.body, { where: { id: cocktailId } })
        return res.json({ message: 'Cocktail Updated' })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
}*/

/*exports.untrashCocktail = (req, res) => {
    let cocktailId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!cocktailId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    Cocktail.restore({ where: { id: cocktailId } })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}*/

/*exports.trashCocktail = (req, res) => {
    let cocktailId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!cocktailId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression du cocktail
    Cocktail.destroy({ where: { id: cocktailId } })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}*/

/*exports.deleteCocktail = (req, res) => {
    let cocktailId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!cocktailId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression du cocktail
    Cocktail.destroy({ where: { id: cocktailId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}*/