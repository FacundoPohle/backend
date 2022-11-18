const express = require ('express')
const router = require('./src/router')

const app = express()
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api/productos', router);

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error corriendo en el servidor ${error}`)
})