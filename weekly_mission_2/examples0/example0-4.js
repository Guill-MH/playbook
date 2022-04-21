// Ejemplo 4: Crear un objeto con métodos


const myObj = {
  name: "Jose",
  age: 22,
    // Esta es una función que se guarda como propiedad
  myMethod: function(params) {
    // ...hacer algo
  console.log(`${this.name} tiene ${this.age} años`)
  }
};

console.log("Ejemplo 4: Crear un onjeto con metodos")
myObj.myMethod();