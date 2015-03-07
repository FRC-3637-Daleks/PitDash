widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        data.matches.sort(function(a,b) {
            return a.time - b.time;
        });

        $('#matches').html('');

        $.each(data.matches, function( index, match ) {
            $('#matches').append('<tr class="match">' +
                '<td class="matchclass">' + match.comp_level + '</td>' +
                '<td class="matchnum">' + match.match_number + '</td>' +
                '<td class="time">' + match.time_pretty + '</td>' +
                '<td class="blueall">' + match.alliances.blue.teams[0] + '</td>' +
                '<td class="blueall">' + match.alliances.blue.teams[1] + '</td>' +
                '<td class="blueall">' + match.alliances.blue.teams[2] + '</td>' +
                '<td class="redall">' + match.alliances.red.teams[0] + '</td>' +
                '<td class="redall">' + match.alliances.red.teams[1] + '</td>' +
                '<td class="redall">' + match.alliances.red.teams[2] + '</td>' +
                '<td class="bluescore">' + match.alliances.blue.score + '</td>' +
                '<td class="redscore">' + match.alliances.red.score + '</td>' +
             '</tr>');
        });
    }
};
