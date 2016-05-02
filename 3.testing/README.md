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

## Running tests

1. `npm test`
1. Navigate to `http://localhost:9876/debug.html`

## Problem

Let's test the code we wrote in `2.redux`.

**NOTE** `Lingua` is now invoked with `lingua.lingua` to make it easier
to test.

**HINT** You can override methods on `fakeStore` in the `ResultsPageSpec` to spy
on `dispatch` as well as provide state to the component.

## Resources

- [Jasmine](http://jasmine.github.io/2.4/introduction.html)
- [React TestUtils](https://facebook.github.io/react/docs/test-utils.html)
