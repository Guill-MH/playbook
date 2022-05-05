const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


//1.-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
 const countExplorers = explorers.forEach(explo => {
       console.log(explo.name)
});

//2.-Imprime el stack de cada explorer, usa FOR EACH
const stackExplorer = explorers.forEach(stacks =>  {
  console.log(`Nombre: ${stacks.name} Pila: ${stacks.stack}`)
});

//3.-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const newList = explorers.map(function(list) {
  return list.stack 
});
console.log(newList)

//4.-Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stackFilter = explorers.filter((stackss) => // esta es una función
stackss.stack.includes('js') // indicación para solo filtrar elementos que incluyan "land"
)
console.log(stackFilter)