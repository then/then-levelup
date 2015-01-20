'use strict';

var assert = require('assert');
var db = require('./')(require('levelup')({
  db: require('memdown'),
  encoding: 'json'
}));

db.put('foo', 'bar').then(function () {
  return db.get('foo');
}).then(function (value) {
  assert(value === 'bar');
}).done(function () {
  console.log('tests passed');
});
