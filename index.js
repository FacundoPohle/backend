const Container = require('./data2.js')
const productos = new Container('./productos.json')

async function ejecutar(){

    const objeto1 = {
        nombre: 'zapatilla roja y negra',
        precio: 6000,
        thumbnail: 'url'
    }

    const objeto2 = {
        nombre: 'zapatilla verde y violeta',
        precio: 4000,
        thumbnail: 'url'
    }

    const objeto3 = {
        nombre: 'azul y turquesa',
        precio: 7000,
        thumbnail: 'url'
    }
    // await productos.save(objeto1)
    // await productos.save(objeto2)
    // await productos.getById(2).then(id=>console.log(id))
    await productos.deleteById(1)
}
ejecutar()