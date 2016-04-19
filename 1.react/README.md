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

`Franc` is a library which guesses at the language of a phrase. For 
instance, `franc.all('O Brasil caiu 26 posições');` will return an array
that looks like this: 

```
/*
 * [
 *  [ 'por', 1 ],
 *  [ 'src', 0.8948665297741273 ],
 *  [ 'glg', 0.8862422997946612 ],
 *  [ 'snn', 0.8804928131416838 ],
 *  [ 'bos', 0.8394250513347022 ],
 *  [ 'hrv', 0.8336755646817249 ],
 *  [ 'lav', 0.833264887063655 ],
 *  [ 'cat', 0.8303901437371664 ],
 *  [ 'spa', 0.8242299794661191 ],
 *  [ 'bam', 0.8242299794661191 ],
 *  [ 'sco', 0.8069815195071869 ],
 *  [ 'rmy', 0.7839835728952772 ],
 *   ...
 * ]
 */
 ```
 
(`[ 'spa', 0.8242299794661191 ]` means 'spanish' with 82% confidence)
 
For this problem, build a page with a single input for the user to
enter phrases, and a single table which displays the results that Franc
returns.