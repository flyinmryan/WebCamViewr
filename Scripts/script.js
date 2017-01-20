
var Weather = {

    getWeather: function (location, callback) {

        $.ajax({
            url: 'http://api.wunderground.com/api/d11a514cdba4d242/webcams/q/' + location + ".json",
            type: "GET",
            success: function (response) {
                callback(response);
            }
        })

    },

    getWebcams: function (location, numberOfCams) {
        Weather.getWeather(location, Weather.displayCams);
    },

    displayCams: function (weather) {
        $("#webcams").empty();

        for (var i = 0; i < 21; i++){
            
            var randomIndex = Math.floor(Math.random() * weather.webcams.length) + 1;
            var webcam = weather.webcams[randomIndex];
            
            var camImg = $("<img />", {
                src: webcam.CURRENTIMAGEURL,
                title: webcam.neighborhood + " " + webcam.city + " " + webcam.state,
                height: 260,
                width: 352
            });

            $("#webcams").append($("<div>", {
                id: webcam.camid,
                css: { display: "inline-block" }
                }).append(camImg)
            )
        }
    }
}

$(document).ready(function () {

    //Weather.getWebcams("Davis,CA");
})