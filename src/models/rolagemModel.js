var database = require('../database/config')

function listar(playerId) {
    var instrucao = `select p.nome, r.dado from rolagens r join personagem p on r.id_personagem = p.id where r.id_player = ${playerId} order by data_rolagem desc limit 10;`
    console.log(`Executando instrução SQL: ${instrucao}`)
    return database.executar(instrucao)
}

function registrar(playerId, dado, personagemId){
    var instrucao = `insert into rolagens (id_player, id_personagem, dado) value (${playerId}, ${personagemId}, ${dado});`
    console.log(`Executando a instrução: ${instrucao}`)
    return database.executar(instrucao)
}

module.exports = {
    registrar,
    listar
}