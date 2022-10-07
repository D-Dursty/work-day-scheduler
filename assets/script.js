//event.preventDefault*** don't forget 
var hour = $('#hour');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var saveButton = $('.saveBtn');
var textArea = $('.textarea');
var textInput;

var button8 = $('#button8')
var text8 = $('#8');

var button9 = $('#button9')
var text9 = $('#9');

var button10 = $('#button10')
var text10 = $('#10');

var button11 = $('#button11')
var text11 = $('#11');

var button12 = $('#button12')
var text12 = $('#12');

var button13 = $('#button13')
var text13 = $('#13');

var button14 = $('#button14')
var text14 = $('#14');

var button15 = $('#button15')
var text15 = $('#15');

var currentTime = moment().hour();
//THEN the current day is displayed at the top of the calendar    
var timeEl = $('#timeEl');
var dayEl = $('#current-day');

setInterval(displayTime, 1000);
        
function displayTime() {
        var time = moment().hour()+":"+ moment().minute();
        timeEl.text(time) 
}

setInterval(displayDay);

function displayDay() {
    var day = moment().format('MMMM DD YYYY')
    dayEl.text(day)
}
//THEN I am presented with timeblocks for standard business hours
    //vertical grid of cards
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function changeColors() {
    textArea.each(function (index, textAreaContents) {
        var blockTime = textAreaContents.id 
        if (blockTime < currentTime) $(this).addClass("past");
        else if(blockTime == currentTime) $(this).addClass("present");
        else if(blockTime > currentTime) $(this).addClass("future");
        console.log($(this));
    }
    );
}  
changeColors();   
    //if time < current time (color past), if time = current time (color present), if time is > current time (future color)
    //if hour.text < timeEL then setattribute past, if hour.text = timeEl then setattribute present if hour.text > timeEl then setatrribute.future

    //WHEN I click into a timeblock
  //click event for each timeblock
//THEN I can enter an event
    //add and append text
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
    //click event for 'save button' linked to local storage
function renderTextArea() {
 var savedTextArea8 = JSON.parse(localStorage.getItem("8oclocktext"));
 text8.text(savedTextArea8);
 
 var savedTextArea9 = JSON.parse(localStorage.getItem("9oclocktext"));
 text9.text(savedTextArea9);
 
 var savedTextArea10 = JSON.parse(localStorage.getItem("10oclocktext"));
 text10.text(savedTextArea10);
 
 var savedTextArea11 = JSON.parse(localStorage.getItem("11oclocktext"));
 text11.text(savedTextArea11);

 var savedTextArea12 = JSON.parse(localStorage.getItem("12oclocktext"));
 text12.text(savedTextArea12);
 
 var savedTextArea13 = JSON.parse(localStorage.getItem("13oclocktext"));
 text13.text(savedTextArea13);
 
 var savedTextArea14 = JSON.parse(localStorage.getItem("14oclocktext"));
 text14.text(savedTextArea14);
 
 var savedTextArea15 = JSON.parse(localStorage.getItem("15oclocktext"));
 text15.text(savedTextArea15);


}
renderTextArea();

//function pageLoad () {
   // var savedTextAreaContentNine = JSON.parse(localStorage.getItem("textareanine"));
   // nineText.text(savedTextAreaContentNine);

// saveButton.on('click', function (event) {
//     event.preventDefault();

//     var textInput = $(textArea).value;
//     localStorage.setItem('textarea', JSON.stringify(textInput));
//     renderTextArea
// });
button8.on('click', function() {
    localStorage.setItem("8oclocktext", JSON.stringify(text8.val())) 
})   

button9.on('click', function() {
    localStorage.setItem("9oclocktext", JSON.stringify(text9.val())) 
})   
button10.on('click', function() {
    localStorage.setItem("10oclocktext", JSON.stringify(text10.val())) 
})   

button11.on('click', function() {
    localStorage.setItem("11oclocktext", JSON.stringify(text11.val())) 
})   

button12.on('click', function() {
    localStorage.setItem("12oclocktext", JSON.stringify(text12.val())) 
})   

button13.on('click', function() {
    localStorage.setItem("13oclocktext", JSON.stringify(text13.val())) 
})   
button14.on('click', function() {
    localStorage.setItem("14oclocktext", JSON.stringify(text14.val())) 
})   

button15.on('click', function() {
    localStorage.setItem("15oclocktext", JSON.stringify(text15.val())) 
})   




//WHEN I refresh the page
//THEN the saved events persist