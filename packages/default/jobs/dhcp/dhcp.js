/**
 * Job: dhcp
 */
var mqtt = require('../../mqtt');

module.exports = function(config, dependencies, job_callback) {
    var mykeys = mqtt.keys();
    var leases = [];
    mykeys.forEach(function(item) {
      if (item.match(/^dnsmasq\/client\/.*\/ip/) != null) {
        var mac = item.match(/([A-Za-z0-9]{2}:){5}[A-Za-z0-9]{2}/)[0]
        var host_key = item.match(/.*(?=ip)/)[0] + "host"
        leases.push({
          mac: mac,
          ip: mqtt.get(item)[item],
          host: mqtt.get(host_key)[host_key]
        });
      }
    });
    job_callback(null, { title: config.widgetTitle, clients: leases});
};
