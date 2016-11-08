import { getLanguages, getLikelihood } from '../lib/lingua'
import Promise from 'promise'

const fakeHttp = response => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: response }), Math.random() * 500)
  })
}

export default {
  getLanguages(phrase) {
    return fakeHttp(getLanguages(phrase))
  },
  getLikelihood(phrase, language) {
    return fakeHttp(getLikelihood(phrase, language))
  }
}
