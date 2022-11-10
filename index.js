const express = require ('express')
const Container = require('./container/archivos.Container.js')

const app = express()
const PORT = 8080

const archivo = new Container('productos.txt')

app.get('/productos', async (req, res) => {
    const prods = await archivo.getAll()
    console.log(prods)
    console.log('holaaaaaa')
    
    res.send({Productos: prods})
})

app.get('/productosRandom', async (req, res) => {
    const prods = await archivo.getAll()
    const random = parseInt(Math.random() * prods.length)
    res.send({Productos: prods[random]})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
// async function ejecutar(){

    // await productos.save(objeto1)
    // await productos.save(objeto2)
    // await productos.getById(2).then(id=>console.log(id))
    // await productos.deleteById(1)
// }
// ejecutar()
