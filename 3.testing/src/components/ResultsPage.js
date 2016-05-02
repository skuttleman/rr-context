import React, {Component} from 'react'
import {connect} from 'react-redux'

import {someAction} from '../actions/actions'

const ResultsPage = React.createClass({
  render() {
    return (
      <div className="resultsPage">Hello from ResultsPage.js!</div>
    )
  },

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(someAction())
  }
})

export default connect((state) => state)(ResultsPage)
