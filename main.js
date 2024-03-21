var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout (function() {
        takeSnapshot1();
        save1();
        var synth = window.speechSynthesis;
        speak_data = "Taking your selfie in another five seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
    }, 5000);

    setTimeout (function() {
        takeSnapshot2();
        save2();
        var synth = window.speechSynthesis;
        speak_data = "Taking your selfie in another five seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        console.log(speak_data);
        Webcam.attach(camera);
    }, 10000);

    setTimeout (function() {
        takeSnapshot3();
        save3();
        var synth = window.speechSynthesis;
        speak_data = "Your selfies are downloaded also";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
    }, 15000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

function takeSnapshot1() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = "<img id='selfie_image1' src='" + data_uri + "'>";
    });
}

function takeSnapshot2() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML = "<img id='selfie_image2' src='" + data_uri + "'>";
    });
}

function takeSnapshot3() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result3").innerHTML = "<img id='selfie_image3' src='" + data_uri + "'>";
    });
}

function save1() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image1").src;
    link.href = image;
    link.click();
}

function save2() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image2").src;
    link.href = image;
    link.click();
}

function save3() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image3").src;
    link.href = image;
    link.click();
}
