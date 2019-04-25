$(document).ready(function(){
//Global Variables
var input = $("#input");
var submit = $("#submit");
var imgBody = $('#imgBody');


//Capture the search value when the user clicks submit
    submit.on("click", function(event){
        event.preventDefault();
        console.log(input.val());
        var inputValue = input.val();
        getGifs(inputValue);
        buttons.push(input.val());
    });

//make a GET request to the Giphy API with the value from the search input

var url = 'http://api.giphy.com/v1/gifs/search?q='
var apiKey = 'BkfiElo6kR2Oe1QyHQSEBAc296u2Dj7m'


function getGifs(inputValue){
    $.get(`${url}${inputValue}&api_key=${apiKey}&limit=10`)
    .done(function(response){
        for(var i = 0 ; i < 10 ; i++){
            var imgSrc = response.data[i].images.downsized.url;
            createBox(imgSrc);
        };
        
    });
};

const createBox = (imgSrc) => {
    const newImg = $('<img>');
    newImg.attr('src', imgSrc);
    newImg.addClass('img-box');
    imgBody.append(newImg);
};


//The below was coded with Justin during office hours. 

/*
let buttons = ["Johnny Depp","Lucy Liu","Salma Hayak","Chris Hemsworth"];

buttons.forEach(button => {
    $("#buttons").append(`<button>${button.toUpperCase()}</button>`)
});

$("button").on("click", () => {
    let val = $(this).val();
    getGifs(val);
});
*/


});//END OF CODE 