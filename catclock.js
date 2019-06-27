var morningtime = 7;
var noon = 12;
var lunchtime = 12;
var afternoontime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () 
{ // display the string on the webpage

    var clock = document. getElementById ("clock");
    
    var currentTime = new Date();

    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();

    var seconds = currentTime.getSeconds();

    var meridian = "AM";

// Set hours
if (hours >= noon) {

    meridian = "PM";
}
if (hours > noon) {
   
    hours = hours - 12; 
}

// Set Minutes

if (minutes < 10) {

    minutes = "0" + minutes;

}

// Set Seconds
if (seconds < 10) {

    seconds = "0" + seconds;
}

 // put together the string that displays the time

 var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

 clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures

var updateClock = function() {
    var time = new Date().getHours();
    var messageText; 
    var image = "https://s3.amazonaws.com/tinycards/image/60b875fb863ae8660d695520d0c87907"; 


var timeEventJS = 
document.getElementById("timeEvent");

var lolcatImageJS = 
document.getElementById("lolcatImage");
 if (time == "partytime") {
     image = "https://i.imgur.com/665nscC.jpg";
     messageText = "Let's Party!";
 }
 else if (time == morningtime) {
     image = "https://cdn.designbyhumans.com/user_store_banner/3639418.jpg";
     messageText = "Wake Up!";
 }

 else if (time == lunchtime) {
     image = "https://s3.amazonaws.com/wevv-com-44a/wp-content/uploads/FEzxylpk.jpg";
     messageText = "Let's have some lunch!";
 }
else if (time == afternoontime) {
image = "https://teeshirtpalace-production.s3.amazonaws.com/spree/images/SC225245-BLACK-POST/large/SC225245-BLACK-POST.jpg?1508989832";
messageText = "Good Afternoon";
}

else if (time < noon) {
image = "https://i.pinimg.com/originals/70/eb/40/70eb409a2ed3f0c5782767c8794ad0ea.jpg";
messageText = "Good morning!";
}

else if (time >= evening) {
    image = "https://teeshirtpalace-production.s3.amazonaws.com/spree/images/LCM25245-BLACK-POST/large/LCM25245-BLACK-POST.jpg?1523991216";
    messageText = "Good evening!";
}

else {
    image = "https://teeshirtpalace-production.s3.amazonaws.com/spree/images/SC225245-BLACK-POST/large/SC225245-BLACK-POST.jpg?1508989832";
    messageText = "What's up space cat?";
}

console.log(messageText);
timeEventJS.innerText = messageText;
lolcatImage.src = image;

showCurrentTime();
};

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work

var partyButton = 
document.getElementById ("partyTimeButton");

var partyEvent = function () 
{
    if (partytime < 0)
    
    { 
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else 
    {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var morningTimeSelector =  document.getElementById("morningTimeSelector");

var morningTimeEvent = function()
{
    morningtime = morningTimeSelector.value;
};

morningTimeSelector.addEventListener("change", morningTimeEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var afternoonTimeSelector =  document.getElementById("afternoonTimeSelector");

var afternoonTimeEvent = function()
{
    afternoontime = afternoonTimeSelector.value;
};

afternoonTimeSelector.addEventListener("change", afternoonTimeEvent);