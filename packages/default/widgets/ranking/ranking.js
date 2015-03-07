widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        data.rankings.sort(function(a,b) {
            return a.rank - b.rank;
        });

        $('#rankings').html('');

        $.each(data.rankings, function( index, team ) {
            $('#rankings').append('<tr class="team">' +
                '<td class="rank">' + team.rank + '</td>' +
                '<td class="team">' + team.team + '</td>' +
                '<td class="avg">' + team.avg + '</td>' +
             '</tr>');
            if (team.us)
                $('#rankings > tr:last').addClass('us');
        });
    }
};
