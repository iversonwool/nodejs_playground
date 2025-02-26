import axios from 'axios'

const getDog = () => {
  return axios.get('https://random.dog/woof.json')
    .then(r => {
      return {
        imageSrc: r.data.url,
        text: 'DOG'
      }
    })
}

const getCat = () => {
  return axios.get('https://aws.random.cat/meow')
    .then(r => {
      return {
        imageSrc: r.data.file,
        text: 'CAT'
      }
    })
}

const getGoat = () => {
  return Promise.resolve({
    imageSrc: 'http://placegoat.com/200',
    text: 'GOAT'
  })
}

export default {
  getCat,
  getDog,
  getGoat
}
