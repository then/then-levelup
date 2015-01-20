# then-levelup

Promise based leveldb interface

[![Build Status](https://img.shields.io/travis/ForbesLindesay/then-levelup/master.svg)](https://travis-ci.org/ForbesLindesay/then-levelup)
[![Dependency Status](https://img.shields.io/gemnasium/ForbesLindesay/then-levelup.svg)](https://gemnasium.com/ForbesLindesay/then-levelup)
[![NPM version](https://img.shields.io/npm/v/then-levelup.svg)](https://www.npmjs.org/package/then-levelup)

## Installation

    npm install then-levelup

## Usage

```js
var level = require('level'); // having run npm install level
var thenLevelup = require('then-levelup');
var db = level('./mydb');
// use like level-up except APIs return promises instead of taking callbacks
```

## License

  MIT
