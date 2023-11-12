const Benevole = require('../models/benevole');

exports.createBenevole = (req, res, next) => {
    const benevole = new Benevole({
        admin : req.body.admin,
        referent : req.body.referent,
        nom : req.body.nom,
        prenom : req.body.prenom,
        pseudo : req.body.pseudo,
        association : req.body.association,
        taille_tshirt : req.body.taille_tshirt,
        vegetarien : req.body.vegetarien,
        mail : req.body.mail,
        hébergement : req.body.hébergement,
    });
    benevole.save()
    .then(() => {res.status(201).json({message: 'Benevole créé !'})})
    .catch((error) => {res.status(400).json({error: error})})
};

exports.getOneBenevole = (req, res, next) => {
    Benevole.findOne({_id: req.params.id})
    .then((benevole) => {res.status(200).json(benevole)})
    .catch((error) => {res.status(404).json({error: error})})
};

exports.modifyBenevole = (req, res, next) => {
    const benevole = new Benevole({
        _id: req.params.id,
        admin : req.body.admin,
        referent : req.body.referent,
        nom : req.body.nom,
        prenom : req.body.prenom,
        pseudo : req.body.pseudo,
        association : req.body.association,
        taille_tshirt : req.body.taille_tshirt,
        vegetarien : req.body.vegetarien,
        mail : req.body.mail,
        hébergement : req.body.hébergement,
    });
    Benevole.updateOne({_id: req.params.id}, benevole)
    .then(() => {res.status(201).json({message: 'Benevole modifié !'})})
    .catch((error) => {res.status(400).json({error: error})})
};

exports.deleteBenevole = (req, res, next) => {
    Benevole.deleteOne({_id: req.params.id})
    .then(() => {res.status(200).json({message: 'Benevole supprimé !'})})
    .catch((error) => {res.status(400).json({error: error})})
};

exports.getAllBenevole = (req, res, next) => {
    Benevole.find()
    .then((benevoles) => {res.status(200).json(benevoles)})
    .catch((error) => {res.status(400).json({error: error})})
};