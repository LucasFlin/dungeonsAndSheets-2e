var rolagemModel = require('../models/rolagemModel')

function listar(req, res){
    var playerId = req.body.playerId
    
    if (playerId == undefined) {
        res.status(400).send('Seu ID está undefined!');
    }

    rolagemModel.listar(olayerId).then(function(resultado){
        res.status(200).json
        (resultado)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage)
    })
}

function registrar(req, res) {
    var playerId = req.body.playerId
    var dado = req.body.dado
    var personagemId = req.body.personagemId

    if (playerId == undefined) {
        res.status(400).send('Seu ID está undefined!');
    } else if (dado == undefined){
        res.status(400).send('O Dado está undefined!');
    } else if (personagemId == undefined){
        res.status(400).send('O id do personagem está undefined!');
    }

    rolagemModel.registrar(playerId, dado, personagemId).then(function(resposta){
        res.status(200).send('Dado registrado com sucesso');
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    registrar
}