//event.preventDefault*** don't forget 
var hour = $('#hour');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var saveButton = $('.saveBtn');
var textArea = $('.textarea');
var textInput;

var currentTime = moment().hour()+ moment().minute();
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
        if (blockTime > currentTime) $(this).addClass("past");
        else if(blockTime === currentTime) $(this).addClass("present");
        else if(blockTime < currentTime) $(this).addClass("future");
        console.log($(this));
    }
    );
}  
changeColors();   
// if (hour.text < currentTime)addClass(".past");
// else if(hour.text === currentTime)addClass('.present');
// else if(hour.text > currentTime)addClass('.future');

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
    var textInput = localStorage.getItem('row.id');

    $('row.id').text = textInput;
}

//function pageLoad () {
   // var savedTextAreaContentNine = JSON.parse(localStorage.getItem("textareanine"));
   // nineText.text(savedTextAreaContentNine);

saveButton.on('click', function (event) {
    event.preventDefault();

    var textInput = $('row.id').value;
    localStorage.setItem('row.id', JSON.stringify(eventText.val()));
    renderTextArea
});
renderTextArea();

function init() {
    $(renderTextArea).val(JSON.parse(localStorage.getItem('row.id')));
  }
  
init();
    
//WHEN I refresh the page
//THEN the saved events persist