import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLanguages, getLikelihood} from '../actions/actions'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <form onSubmit={event => this.submit(event)}>
          <div><input name="phrase" placeholder="enter a phrase" /></div>
          <div><input type="submit" /></div>
        </form>
        <ul>
          {this.mapLanguages(this.props.languages)}
        </ul>
      </div>
    )
  }

  mapLanguages(languages) {
    return languages.map((language, key) => {
      return (
        <li key={key} onClick={() => this.clickLanguage(language)}>
          <span>{language}: </span>
          <span>{this.props.likelihood[language]}</span>
        </li>
      )
    })
  }

  clickLanguage(language) {
    console.log('click')
    this.props.dispatch(getLikelihood(this.state.phrase, language)).then(() => console.log(this.props)).catch(console.error)
  }

  submit(event) {
    event.preventDefault()
    const phrase = event.target.phrase.value
    console.log(phrase)
    this.setState({ phrase })
    this.props.dispatch(getLanguages(phrase)).catch(console.error)
  }
}

export default connect(store => store)(App)
