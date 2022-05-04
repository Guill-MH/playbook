const profile = {
    username: "Alberto",
    lastName: "Rosas",
    age: 30
}

const travel = {
    numberTravel:43,
    locations:["secction 4","zaragoza","avenida poniente"],
    starts: 5,

    getInfo: function(){
        return  `Travels: ${travel.numberTravel} 
        Number Locations: ${this.locations.length}
        Start's: ${travel.starts}
        `
    }


}
console.log("Uber App")
console.log(profile.name)
console.log(travel.getInfo())