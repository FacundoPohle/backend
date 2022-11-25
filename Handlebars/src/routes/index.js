const express = require("express")
const { Router } = express
const router = Router()
const Contenedor = require("../container/archivos.Container")
const container = new Contenedor()

router.get("/", container.getAll)
router.get("/:id", container.getById)
router.post("/",container.create)
router.put("/:id", container.updateById)
router.delete("/:id", container.deleteById)

module.exports = router
