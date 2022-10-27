class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        return this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        return this.libros.push(
            {
                nombre: nombre,
                autor: autor
            }
        )
    }
    getBooksNames(){
        return console.log(this.libros.map((el) => el.nombre))
    }

}

const libros = [
    {
        nombre: 'Rich, poor dad',
        autor: 'James long'
    },
    {
        nombre: 'Las 7 reglas de la vida',
        autor: 'deepak chopra'
    }
]
const mascotas = ['perro', 'gato', 'aguila']

const usuario = new Usuario ('Facundo', 'Pohle', libros, mascotas)

console.log(usuario)

usuario.addMascota('lagartija')
usuario.addBook('el señor de los anillos', 'lebron james')

console.log(usuario)
usuario.getFullName()
usuario.getBooksNames()

