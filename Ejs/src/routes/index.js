const express = require("express")
const { Router } = express
const router = Router()
const ProductControler = require("../container/archivos.Container")
const productClass = new ProductControler()

router.get("/", productClass.getAll)
router.get("/:id", productClass.getById)
router.post("/", productClass.create)
router.put("/:id", productClass.updateById)
router.delete("/:id", productClass.deleteById)

module.exports = router