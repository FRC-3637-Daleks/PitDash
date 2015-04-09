/**
 * Job: matches
 */
var moment = require('moment');

module.exports = function(config, dependencies, job_callback) {

    var options = {
        url: "http://www.thebluealliance.com/api/v2/team/" + config.team + "/event/" + config.event + "/matches",
	//url: "http://www.thebluealliance.com/api/v2/event/" + config.event + "/matches",
        headers: {
            "X-TBA-App-Id": config.team + ":pitdash:1"
        }
    };


    dependencies.request(options, function( err, response, body) {
        var sched = JSON.parse(body);
        for (var i = 0; i < sched.length; i++) {
            sched[i].time_pretty = moment.unix(sched[i].time).format('h:mm A');
            for(var j = 0; j < 3; j++) {
                sched[i].alliances.red.teams[j] = sched[i].alliances.red.teams[j].substring(3,sched[i].alliances.red.teams[j].length);
                sched[i].alliances.blue.teams[j] = sched[i].alliances.blue.teams[j].substring(3,sched[i].alliances.blue.teams[j].length);
            }

            if (sched[i].alliances.red.score == -1)
                sched[i].alliances.red.score = "-";

            if (sched[i].alliances.blue.score == -1)
                sched[i].alliances.blue.score = "-";
        }
        job_callback(err, { title: config.widgetTitle, matches: sched });
    });
};
