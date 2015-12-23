# then-levelup

Promise based leveldb interface

[![Build Status](https://img.shields.io/travis/then/then-levelup/master.svg)](https://travis-ci.org/then/then-levelup)
[![Dependency Status](https://img.shields.io/david/then/then-levelup.svg)](https://david-dm.org/then/then-levelup)
[![NPM version](https://img.shields.io/npm/v/then-levelup.svg)](https://www.npmjs.org/package/then-levelup)

## Installation

    npm install then-levelup

## Usage

```js
// having run npm install level
var db = require('then-levelup')(require('level')('./mydb'));

// use like level-up except APIs return promises instead of taking callbacks
db.put('foo', 'bar').then(function () {
  return db.get('foo');
}).then(function (value) {
  assert(value === 'bar');
}).done(function () {
  console.log('tests passed');
});
```

## License

  MIT
