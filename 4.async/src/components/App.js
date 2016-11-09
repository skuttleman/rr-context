import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../actions/actions'

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
    this.props.dispatch(actions.getLikelihood(this.state.phrase, language))
  }

  submit(event) {
    event.preventDefault()
    const phrase = event.target.phrase.value
    // console.log(phrase)
    this.setState({ phrase })
    this.props.dispatch(actions.getLanguages(phrase))
  }
}

export default connect(store => store)(App)
