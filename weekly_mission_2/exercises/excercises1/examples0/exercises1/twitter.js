const user = {
    name: "Guillber",
    username: "Guill",
    age: 22
}
const post = {
    description: "Que musica recomiendan",
    Privacy: "public",

    getPost: function () {
        return `${user.name}
         privacy: ${post.Privacy}
         ${post.description}
         `
    }
}
const biography = {
    numberPost: 5,
    imagesProfile: 10,
    Nickname: "Guill XD",

    getInfo: function() {
        return `Number post: ${biography.numberPost} Image's profile: ${biography.imagesProfile}
        Nickname: ${biography.Nickname}
        `
    }

}

console.log("Socialmedia: Twitter")
console.log(post.getPost())
console.log(biography.getInfo())