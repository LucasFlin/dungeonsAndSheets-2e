var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/:playerId", function (req, res) {
  personagemController.buscarPersonagensPorPlayer(req, res);
});

router.post("/cadastrarPersonagem", function (req, res) {
  personagemController.cadastrarPersonagem(req, res);
})

router.put("/cadastrarPericias", function (req, res) {
    personagemController.cadastrarPericias(req, res);
});

router.post('/atualizarVida', function (req, res) {
  personagemController.atualizarVida(req, res)
})

module.exports = router;