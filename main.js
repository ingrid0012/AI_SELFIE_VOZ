var SpeechRecognition = window.webkitSpeechRecognition; //API

var recognition= new SpeechRecognition(); //NEW es una palabra clave

function start()
{
    document.getElementById("textbox").innerHTML=""; //vacio nuestra text area 
    recognition.start(); 
}

recognition.onresult = function(event)
{
    console.log(event);
    var Content= event.results[0] [0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
}
