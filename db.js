var Promise = require('promise');

var readFile = Promise.denodeify(require('fs').readFile);
var writeFile = Promise.denodeify(require('fs').writeFile);

module.exports = new Db();

var ids = 1;

function Db() {
}

Db.prototype.getAllItems = function() {
  return readFile('./data/items.json', 'utf8').then(JSON.parse);
}

Db.prototype.addItem = function(item) {
  return readFile('./data/items.json', 'utf8')
    .then(JSON.parse)
    .then(function(items) {
      items.push({id: ids, title: item.title});
      ids++;
      return items;
    })
    .then(function(items) {
      return writeFile('./data/items.json', JSON.stringify(items));
    });
}