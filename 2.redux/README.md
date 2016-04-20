# React.js + redux

## Installation

1. `echo 'export NODE_TLS_REJECT_UNAUTHORIZED=0' >> ~/.bash_profile && source ~/.bash_profile`
1. Install [nodejs](https://nodejs.org/en/) (it comes with an older version of `npm`)
1. Upgrade your version of npm: `npm install -g npm@3.6.0`
    - `npm -v` to check
1. `git clone git@gitlab.global.dish.com:pivotal-ofm/react-redux-context.git ~/workspace/react-redux-context`
1. `cd ~/workspace/react-redux-context`
1. `npm install`
1. `npm install -g gulp`

## Problem

This is the same problem as `1.react` - this time, implement with state 
being stored and passed by redux.

## Running the app

1. `gulp js`
1. `open index.html`