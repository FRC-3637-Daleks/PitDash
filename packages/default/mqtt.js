/**
 * MQTT global data store
 */
var mqtt = require('mqtt'),
    NodeCache = require('node-cache');

var cache = new NodeCache({ stdTTL: 0, checkperiod: 0 });

var client = mqtt.connect('mqtt://roboRIO-3637.local:1180');

client.subscribe('#');

client.on('connect', function() {
  console.log("MQTT Connected");
  cache.set('connected/mqtt', '1');
});
client.on('offline', function() {
  cache.set('connected/mqtt', '0');
});
client.on('error', function() {
  cache.set('connected/mqtt', '0');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic.toString() + ": " + message.toString());
  cache.set(topic.toString(), message.toString());
});

module.exports = cache;
module.exports.client = client;
