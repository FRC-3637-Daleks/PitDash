widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        $('#status-mqtt', el).removeClass("indicator-red indicator-green");
        $('#status-robot', el).removeClass("indicator-red indicator-green");

        $('#status-mqtt', el).addClass((data.mqtt == "1") ? "indicator-green" : "indicator-red");
        $('#status-robot', el).addClass((data.robot == "1") ? "indicator-green" : "indicator-red");
    }
};