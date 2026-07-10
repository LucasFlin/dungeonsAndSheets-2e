var database = require("../database/config");

function buscarPersonagensPorPlayer(playerId) {

  var instrucaoSql = `SELECT p.id, p.nome, p.raca, p.classe, p.forc, p.des, p.cons, p.intel, p.sab, p.car, p.hp_total, p.hp_atual, pe.acrobacia, pe.lidar_animais, pe.arcanismo, pe.atletismo, pe.atuacao, pe.blefar, pe.furtividade, pe.historia, pe.intimidacao, pe.intuicao, pe.investigacao, pe.medicina, pe.natureza, pe.percepcao, pe.persuasao, pe.prestidigitacao, pe.religiao, pe.sobrevivencia FROM personagem p join pericias pe on p.id = pe.id_personagem WHERE p.id_player = ${playerId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarPersonagem(playerId, nome, raca, classe, forc, des, cons, intel, sab, car, hp_total) {
  
  var instrucaoSql = `insert into personagem (nome, raca, classe, forc, des, cons, intel, sab, car, hp_total, hp_atual, id_player) value ('${nome}','${raca}','${classe}',${forc},${des},${cons},${intel},${sab},${car},${hp_total},${hp_total},${playerId});`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarPericias(nome, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia) {

  var instrucaoSql = `update pericias set acrobacia = ${acrobacia}, lidar_animais = ${lidar_animais}, arcanismo = ${arcanismo}, atletismo = ${atletismo}, atuacao = ${atuacao}, blefar = ${blefar}, furtividade = ${furtividade}, historia = ${historia}, intimidacao = ${intimidacao}, intuicao = ${intuicao}, investigacao = ${investigacao}, medicina = ${medicina}, natureza = ${natureza}, percepcao = ${percepcao}, persuasao = ${persuasao}, prestidigitacao = ${prestidigitacao}, religiao = ${religiao}, sobrevivencia = ${sobrevivencia} where id_personagem = (select case when (select nome from personagem order by nome desc limit 1) = '${nome}' then (select id from personagem order by nome desc limit 1) else (select count(id)+1 from personagem) end from personagem limit 1)`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarVida(personagemId, hp){
  var instrucaoSQL = `update personagem set hp_atual = ${hp} where id = ${personagemId};`

  console.log(`Executando a instrução: ${instrucaoSQL}`)
  return database.executar(instrucaoSQL)
}
module.exports = {
  buscarPersonagensPorPlayer,
  cadastrarPersonagem,
  cadastrarPericias,
  atualizarVida
}