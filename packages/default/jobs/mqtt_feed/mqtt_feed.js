/**
 * Job: mqtt_feed
 */
var mqtt = require('../../mqtt');
var buffer = [];

mqtt.client.on('message', function (topic, message) {
  if (topic.toString().indexOf("roborio/console") == 0)
    buffer.push(message.toString());
});

module.exports = function(config, dependencies, job_callback) {
  job_callback(null, { title: config.widgetTitle, items: buffer });
  buffer = [];
};
