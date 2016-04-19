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
    1. Note: is npm taking forever? Probably timeout. Try `npm install -g gulp --fetch-retry-mintimeout=100 --fetch-retry-maxtimeout=10000 --fetch-retry-factor=2`

## Problem

This is the same problem as `1.react` - this time, implement with state 
being stored and passed by redux.