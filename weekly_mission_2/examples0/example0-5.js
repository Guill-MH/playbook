// Ejemplo 5: Crear un objeto que reciba parametros
const myObj = {
  name: "Fernando",
  //este es un metodo que recibe parametros
  myMthod: function (yourAge) {
    console.log(`${this.name} tiene ${yourAge} años de edad`)
  }
}
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myObj.myMthod(22)