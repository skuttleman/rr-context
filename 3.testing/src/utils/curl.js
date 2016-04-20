import randomWords from 'random-words'

export default {
  curl(url) {
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        const sentence = randomWords(30).join(' ')
        resolve(sentence)
      }, Math.random() * 2000 + 1000)
    })
  }
}