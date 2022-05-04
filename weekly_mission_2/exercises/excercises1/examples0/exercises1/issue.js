const issue = {
    title: "Create class in JS",
    respositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfCommets: 4,
    labels: "question",
    author: "Marco Andrade",
    dateCreated: "27-04-2022",
    lastUpdated: "28-04-2022",

    getTitleAndAuthor: function(){
       return  `Titulo: ${this.title}  Autor: ${this.author}` 
    },

    getGeneralInfo: function(){
      return `Repositorio: ${this.respositoryNameAssociated} 
      Status: ${this.status}
      Numero de commits: ${this.numberOfCommets}
      Labels: ${this.labels}
      Fecha de creacion: ${this.dateCreated}
      Actualizada: ${this.lastUpdated} 
      `
    }
}
console.log(issue.getTitleAndAuthor())
console.log("---------------------------------------------------")
console.log(issue.getGeneralInfo())