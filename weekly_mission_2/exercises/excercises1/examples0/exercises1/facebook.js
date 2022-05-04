const user = {
    user: "Perla",
    username: "perl Soto",
    gender: "female",
    age: 21,
    getUser: function(){
       return  `username: ${this.username}  gender: ${this.gender}` 
    }
}
const treding_topic = {
    title: "El mariana",
    position: 2,
}
    const hashTag = {
    name: "los mejor de yt",
    type: "videogame",
    number: 3
}




console.log("---------------------------------------------------")
console.log("Social Media: Facebook")
console.log(user.getUser())
console.log(`Treding: ${treding_topic.title} Position: ${treding_topic.position}
hashtag: ${hashTag.name}
type: ${hashTag.type}
`)