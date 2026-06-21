const AnimalApi = require('../lib/animal-api').default
// console.log('animal-api', AnimalApi)
AnimalApi.getDog().then(animal => {
  console.log(animal)
})