var Promise = require('promise');
var db = require('./db.js');

module.exports = createStore;

function createStore() {
  return new Store();
}

function Store() {
}

Store.prototype.start = function() {
}

Store.prototype.getAllItems = function() {
  return db.getAllItems().then(addMetaData);
}

function addMetaData(items) {
  return {items: items, count: items.length};  
}