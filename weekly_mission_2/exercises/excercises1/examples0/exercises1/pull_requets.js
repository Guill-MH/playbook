const pullRequest = {
    title: "new",
    branchName: "develop",
    dateCreated: "27-04-2022",
    status: "open",
    repositoryNameAssociated: "Launch-X",

    getStatus: function(){
        return this.status
    },
   
    getTitleAndAutor: function(){
        return `Titulo: ${this.title} Autor: Andres Hernandez`
    }
}
console.log("Estado: " + pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())