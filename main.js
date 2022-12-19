x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

screen_width = window.innerWidth;
screen_height = window.innerHeight;

var to_number = Number(content);
if (Number.isInteger(to_number)) {
  true{
    document.getElementById("status").innerHTML = "Started drawing a fruit ";
  }
  else{
    document.getElementById("status").innerHTML = "The system has not interpreted a fruit ";
  }
}

function preload() {
img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJXsEoisyZW_cOrxYGcrg0IOBT8arB6dYDQ&usqp=CAU,https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg,https://media.istockphoto.com/id/1154935375/photo/peeled-banana-on-white-background-photo-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=SHJRSAfuF0-MGDNMM-CVS3_2Vt24Wvy3m8GZT3SaS2o=,https://freshpointlocal.co.uk/wp-content/uploads/2018/08/PackhamPear.jpg'); 
}

function setup() {
 Image(img, 75, 75);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function draw() {
  if(draw_orange == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_pear = "";
  }
}

function draw() {
  if(draw_banana == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_pear = "";
  }
}

function draw() {
  if(draw_pear == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_pear = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function createCanavs(){
height = 720
width = 1080
}
