import AnimalApi from './index'

describe('animal-api', () => {
  it('get dogs', () => {
    return AnimalApi.getDog().then((e) => {
      expect(e.imageSrc).not.toBeUndefined()
      expect(e.text).toBe('DOG')
    })
  })
})