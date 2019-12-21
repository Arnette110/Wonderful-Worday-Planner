// time variables
var dateTime = "";
var date = "";

// function to dynamically update the time displayed
function update() {
    date = moment();
    dateTime.html(date.format("dddd, MMMM Do YYYY, H:mm:ss"));
};

// function waits for document to load before running other functions
$(document).ready(function(){
    
    
    dateTime = $("#currentDay");
    update();
    setInterval(update, 1000);
    changeColorTxtArea();
    setInterval(changeColorTxtArea, 15000);
    
});

// variables 
var timeBlock = $(".time-block");
var hourEl = $(".hour");
var saveBtn = $(".saveBtn");
var txtArea = $("textarea");

// variable to monitor the hour of the day
var hourTime = moment().hour();

// function loops through the available text areas and sets the css for each text area based on its data-value compared to the hour
function changeColorTxtArea(){
    for (var i = 0; i < txtArea.length; i++){
        var txtAreaDataVal = txtArea[i].dataset.value;
        if (hourTime > txtAreaDataVal){
            $(txtArea[i]).addClass("past");
        }
        else if (hourTime == txtAreaDataVal){
            $(txtArea[i]).addClass("present");
        }
        else {
            $(txtArea[i]).addClass("future");
        }
    }
};

// when save btn is clicked the text in the corresponding textarea is saved to local storage
$(saveBtn).on("click", function(event) {
   var txtData = $(this).siblings("textarea").val();
   var txtDataAttr = $(this).siblings("textarea").attr("data-value");
    localStorage.setItem(txtDataAttr, txtData);
    
    }
    
);




// function to retrieve stored data from localStorage
function getLS () {
    $("txtArea, #9").val(localStorage.getItem("9"));
    $("txtArea, #10").val(localStorage.getItem("10"));
    $("txtArea, #11").val(localStorage.getItem("11"));
    $("txtArea, #12").val(localStorage.getItem("12"));
    $("txtArea, #13").val(localStorage.getItem("13"));
    $("txtArea, #14").val(localStorage.getItem("14"));
    $("txtArea, #15").val(localStorage.getItem("15"));
    $("txtArea, #16").val(localStorage.getItem("16"));
    $("txtArea, #17").val(localStorage.getItem("17"));

}
// executes function getLS
getLS();

