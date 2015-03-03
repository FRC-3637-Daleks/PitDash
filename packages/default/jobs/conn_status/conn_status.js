/**
 * Job: conn_status
 */
var mqtt = require('../../mqtt');

module.exports = function(config, dependencies, job_callback) {
    job_callback(null, { title: config.widgetTitle,
        mqtt: mqtt.get(config.key_mqtt)[config.key_mqtt],
        robot: mqtt.get(config.key_robot)[config.key_robot] });
};
