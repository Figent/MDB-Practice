$(document).ready(function(){

    //every millisecond call updateDisplay
setInterval(updateDisplay, 1); 

function updateDisplay() {
    var value = parseInt($("#timer").find("#value").text(), 10);
    value++;
    console.log(value);
    $("#timer").find("#value").text(value);
}

});

