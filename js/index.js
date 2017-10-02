// Make your API request:
var apiUrl = "https://derek-vaz.elemeno.io";
//put the correct method where the underscore is:
$.get(apiUrl, function(data) {
    $('body').html("<h1>It works!</h1>");
});
