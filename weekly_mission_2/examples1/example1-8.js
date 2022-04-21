// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95, age: 2 },
    { name: 'L', score: 98, age: 3 },
    { name: 'M', score: 80, age: 4 },
    { name: 'E', score: 50, age: 6 },
    { name: 'M', score: 85, age: 10 },
    { name: 'J', score: 100, age: 3 },
  ]
  
  const scoresGreaterEighty = scores.filter((age) => age.age > 4)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)