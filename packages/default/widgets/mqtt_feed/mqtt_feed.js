widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        $('.mqtt_feed_cont').html('');
        $.each(data.items, function( index, value ) {
          $('.mqtt_feed_cont').append('<span>' + value + '</span><br>');
        });
    }
};
