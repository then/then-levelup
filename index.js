'use strict';

var Promise = require('promise');

module.exports = then;
function then(db) {
  function batch(ops) {
    if (ops) {
      return Promise.denodeify(db.batch.bind(db)).apply(this, arguments);
    } else {
      var b = db.batch();
      return {
        put: b.put.bind(b),
        del: b.del.bind(b),
        clear: b.clear.bind(b),
        write: Promise.denodeify(b.write.bind(b))
      };
    }
  }
  return {
    open: Promise.denodeify(db.open.bind(db)),
    close: Promise.denodeify(db.close.bind(db)),
    put: Promise.denodeify(db.put.bind(db)),
    get: Promise.denodeify(db.get.bind(db)),
    del: Promise.denodeify(db.del.bind(db)),
    batch: batch,
    isOpen: db.isOpen.bind(db),
    isClosed: db.isClosed.bind(db),
    createReadStream: db.createReadStream.bind(db),
    createKeyStream: db.createKeyStream.bind(db),
    createValueStream: db.createValueStream.bind(db),
    createWriteStream: db.createWriteStream && db.createWriteStream.bind(db)
  };
}
