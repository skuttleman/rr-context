# React.js + redux

## Installation

1. `echo 'export NODE_TLS_REJECT_UNAUTHORIZED=0' >> ~/.bash_profile && source ~/.bash_profile`
1. __OFF__ the VPN
1. `brew update && brew install node`
    If node is already installed, you should
     ```
     brew uninstall --force node
     sudo rm -fr /usr/local/share/doc/node
     sudo rm -fr /usr/local/share/systemtap
     sudo rm -rf /usr/local/lib/node_modules
     brew install node
     ```
1. `git clone git@gitlab.global.dish.com:pivotal-ofm/react-redux-context.git ~/workspace/react-redux-context`
1. `cd ~/workspace/react-redux-context`
1. Copy `1.react/.npmrc` to your home directory `cp client/.npmrc ~/`
1. `npm install`
1. `npm install -g gulp`

## Problem

This is the same problem as `1.react` - this time, implement with state 
being stored and passed by redux.

## Running the app

1. `gulp js`
1. `open index.html`

## Resources

- [Redux Documentation](http://redux.js.org/index.html)

## Instructions and Hints

Bring over your code from step 1.

Move your text input to its own React Component.

Text input handler will now need to `dispatch` an `action`.

Introduce a `reducer` to call `lingua` and populate the `state`.

Use the resulting `state` to populate the results table.