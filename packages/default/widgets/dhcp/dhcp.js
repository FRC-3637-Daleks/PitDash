widget = {
    //runs when we receive data from the job
    onData: function(el, data) {
        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        $('.dhcp_cont').html('');
        $.each(data.clients, function( index, client ) {
          if (client.host == '*') {
            client.host = '';
          } else {
            client.host = '(' + client.host + ')';
          }
          $('.dhcp_cont').append('<div class="client">' +
              '<span class="ip">' +client.ip + '</span>' +
              '<span class="host"> ' +client.host + '</span><br>' +
              '<span class="mac">' +client.mac + '</span>' +
              '</div>');
        });
    }
};
