var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', importData, endJob, true, 'Europe/Berlin');
var db = require('./store.js');

function importData() {
  console.log('starting import');
  db.addItem({title: new Date().getTime()})
  .then(function() { console.log('import done'); });
}

function endJob() {
  console.log('import job stopped');
}