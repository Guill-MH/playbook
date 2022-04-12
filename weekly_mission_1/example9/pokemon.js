class Pokemon {
constructor (name) {
    this.name = name
 }
 sayHello(message) {
     console.log(`Mi pokemon ${this.name} ${message}`)
 }
 sayMessage(message) {
    console.log(`Mi pokemon ${this.name} ${message}`)
 }
 
}
module.exports = Pokemon