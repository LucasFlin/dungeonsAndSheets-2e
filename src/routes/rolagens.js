var express = require("express")
var router = express.Router()

var rolagemController = require('../controllers/rolagemController')

router.post("/registrar", function (req, res) {
    rolagemController.registrar(req, res)
})

router.get("/:playerId", function (req, res) {
    rolagemController.listar(req, res)
})

module.exports = router;