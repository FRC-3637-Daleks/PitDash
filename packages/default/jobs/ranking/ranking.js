/**
 * Job: ranking
 */

module.exports = function(config, dependencies, job_callback) {

    var options = {
        url: "http://www.thebluealliance.com/api/v2/event/" + config.event + "/rankings",
        headers: {
            "X-TBA-App-Id": config.team + ":pitdash:1"
        }
    };


    dependencies.request(options, function( err, response, body) {
        var rank = JSON.parse(body);
        var teams = [];
        for (var i = 0; i < rank.length; i++) {
            // Do not try to parse header
            if (rank[i][0] != "Rank") {
                teams.push({
                    rank: rank[i][0],
                    team: rank[i][1],
                    avg: rank[i][2],
                    us: (rank[i][1] == config.team)
                });
            }
        }
        job_callback(err, { title: config.widgetTitle, rankings: teams });
    });
};
