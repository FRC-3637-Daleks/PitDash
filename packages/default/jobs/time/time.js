/**
 * Job: time
 */
var moment = require('moment');

module.exports = function(config, dependencies, job_callback) {
    job_callback(null, { title: config.widgetTitle, time: moment().format("HH:mm:ss"), date: moment().format("MM-DD-YYYY") });
};
