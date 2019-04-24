$(document).ready(function(){
//Global Variables
var input = $("#input");
var submit = $("#submit");


//Capture the search value when the user clicks submit
    submit.on("click", function(event){
        event.preventDefault();
        console.log(input.val());
        var inputValue = input.val();
        getGifs(inputValue);
    });

//make a GET request to the Giphy API with the value from the search input

var url = 'http://api.giphy.com/v1/gifs/search?q='
var apiKey = 'BkfiElo6kR2Oe1QyHQSEBAc296u2Dj7m'


function getGifs(inputValue){
    $.get(url + inputValue + '&api_key=' + apiKey + '&limit=5')
    .done(function(data){
        console.log(data);
    })
}








});//END OF CODE 