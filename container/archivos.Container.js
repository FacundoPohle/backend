const ERROR = { error: "producto no encontrado" };

class Contenedor {
    constructor(){
        this.products = [];
    }

    getAll() {
        return this.products;
    }

    getById(id) {
        const obj = this.products.find((product) => product.id === id);
        obj ? obj : ERROR;
    }

    create(obj) {
        const arrayOfIds = this.products.map((product) => product.id);
        const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
        const id = maxId + 1;
        const newObj = { id, ...obj};
        this.products.push(newObj);
        return newObj;
    }

    updateById(id, obj) {
        const foundObj = this.products.map((product) => product.id === id);
        if(foundObj) {
            const filteredProducts = this.products.filter((product) => product.id != id);
        const newObj = {id, ...obj};
        this.products = {...filteredProducts, newObj};
        return newObj; 
        } else{
        return         ERROR;
        }
    }

    deleteById(id) {
       const obj =  this.products.filter((product) => product.id!== Number(id))
       return obj
    }
}

module.exports = Contenedor