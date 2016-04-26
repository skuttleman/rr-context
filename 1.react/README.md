# React.js

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

`Franc` is a library which guesses at the language of a phrase.
`Lingua` is a wrapper around Franc that provides full language names. For 
instance, `lingua('O Brasil caiu 26 posições');` will return an array
that looks like this: 

```
[
    {
        language: 'Portuguese',
        likelihood: 1
    },
    {
        language: 'Logudorese Sardinian',
        likelihood: 0.8948665297741273
    },
    {
        language: 'Galician',
        likelihood: 0.8862422997946612
    },
    {
        language: 'Siona',
        likelihood: 0.8804928131416838
    },
    {
        language: 'Bosnian',
        likelihood: 0.8394250513347022
    },
    {
        language: 'Croatian',
        likelihood: 0.8336755646817249
    },
]
```
 
For this problem, build a page with a single input for the user to
enter phrases, and a single table which displays the results that Lingua
returns.