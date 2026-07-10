var personagemModel = require("../models/personagemModel");

function buscarPersonagensPorPlayer(req, res) {
  var playerId = req.params.playerId;

  personagemModel.buscarPersonagensPorPlayer(playerId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os Personagens: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrarPersonagem(req, res) {
  var playerId = req.body.playerId;
  var nome = req.body.nome;
  var raca = req.body.raca;
  var classe = req.body.classe;
  var forc = req.body.forc;
  var des = req.body.des;
  var cons = req.body.cons;
  var intel = req.body.intel;
  var sab = req.body.sab;
  var car = req.body.car;
  var hp_total = req.body.hp_total;

  if (nome == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (playerId == undefined) {
    res.status(400).send("playerId está undefined!");
  }else if (raca == undefined) {
    res.status(400).send("raca está undefined!");
  }else if (classe == undefined) {
    res.status(400).send("classe está undefined!");
  }else if (forc == undefined) {
    res.status(400).send("forc está undefined!");
  }else if (des == undefined) {
    res.status(400).send("des está undefined!");
  }else if (cons == undefined) {
    res.status(400).send("cons está undefined!");
  }else if (intel == undefined) {
    res.status(400).send("intel está undefined!");
  }else if (sab == undefined) {
    res.status(400).send("sab está undefined!");
  }else if (car == undefined) {
    res.status(400).send("car está undefined!");
  }else if (hp_total == undefined) {
    res.status(400).send("hp_total está undefined!");
  } else {
    personagemModel.cadastrarPersonagem(playerId, nome, raca, classe, forc, des, cons, intel, sab, car, hp_total)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarPericias (req, res) {

  var nome = req.body.nome
  var acrobacia = req.body.acrobacia
  var lidar_animais = req.body.lidar_animais
  var arcanismo = req.body.arcanismo
  var atletismo = req.body.atletismo
  var atuacao = req.body.atuacao
  var blefar = req.body.blefar
  var furtividade = req.body.furtividade
  var historia = req.body.historia
  var intimidacao = req.body.intimidacao
  var intuicao = req.body.intuicao
  var investigacao = req.body.investigacao
  var medicina = req.body.medicina
  var natureza = req.body.natureza
  var percepcao = req.body.percepcao
  var persuasao = req.body.persuasao
  var prestidigitacao = req.body.prestidigitacao
  var religiao = req.body.religiao
  var sobrevivencia = req.body.sobrevivencia

  if (nome == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (acrobacia == undefined) {
    res.status(400).send("acrobacia está undefined!");
  } else if (lidar_animais == undefined) {
    res.status(400).send("lidar_animais está undefined!");
  } else if (arcanismo == undefined) {
    res.status(400).send("arcanismo está undefined!");
  } else if (atletismo == undefined) {
    res.status(400).send("atletismo está undefined!");
  } else if (atuacao == undefined) {
    res.status(400).send("atuacao está undefined!");
  } else if (blefar == undefined) {
    res.status(400).send("blefar está undefined!");
  } else if (furtividade == undefined) {
    res.status(400).send("furtividade está undefined!");
  } else if (historia == undefined) {
    res.status(400).send("historia está undefined!");
  } else if (intimidacao == undefined) {
    res.status(400).send("intimidacao está undefined!");
  } else if (intuicao == undefined) {
    res.status(400).send("intuicao está undefined!");
  } else if (investigacao == undefined) {
    res.status(400).send("investigacao está undefined!");
  } else if (medicina == undefined) {
    res.status(400).send("medicina está undefined!");
  } else if (natureza == undefined) {
    res.status(400).send("natureza está undefined!");
  } else if (percepcao == undefined) {
    res.status(400).send("percepcao está undefined!");
  } else if (persuasao == undefined) {
    res.status(400).send("persuasao está undefined!");
  } else if (prestidigitacao == undefined) {
    res.status(400).send("prestidigitacao está undefined!");
  } else if (religiao == undefined) {
    res.status(400).send("religiao está undefined!");
  } else if (sobrevivencia == undefined) {
    res.status(400).send("sobrevivencia está undefined!");
  } else {
    personagemModel.cadastrarPericias(nome, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia).then(function (resultado) {
      res.json(resultado)
    }).catch(function (erro) {
      console.log(erro)
      console.log("Houve um erro ao atualizar as pericias")
    })
  }
}

function atualizarVida (req, res) {
  var personagemId = req.body.personagemId
  var hp = req.body.vida

  if (personagemId == undefined) {
    res.status(400).send("personagemId está undefined!");
  } else if (hp == undefined) {
    res.status(400).send("hp está undefined!");
  } else {
    personagemModel.atualizarVida(personagemId, hp).then(function (resultado) {
      res.json(resultado)
    }).catch(function (erro) {
      console.log(erro)
      console.log("Houve um erro ao atualizar as pericias")
    })
  }
}

module.exports = {
  buscarPersonagensPorPlayer,
  cadastrarPersonagem,
  cadastrarPericias,
  atualizarVida
}