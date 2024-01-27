var text = "I am Vengeance, I am the Night, I am Batman.";
var i = 0;
var speed = 70;
var wait = 1000;
var audio = document.getElementById("audio");
var video = document.getElementById("video");

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) == ",") {
            speed = wait;
        } else {
            speed = 70;
        }
        document.getElementById("main-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function startAudio() {
    audio.play();
    audio.loop = true;
    audio.autoplay = true;
    audio.volume = 0.1;
}

function transition() {
    document.getElementById("main-text").style.opacity = "0";
    document.getElementById("main-text").style.transition = "all 2s";
    video.style.opacity = "0.7";
    video.style.transition = "all 2s";

}

function startVideo() {
    video.play();
    video.loop = true;
    video.autoplay = true;
    transition();
}


document.getElementById("main-text").style.display = "none";
document.getElementById("btn").onclick = function () {
    document.body.style.cursor = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("main-text").style.display = "block";
    typeWriter();
    setTimeout(startAudio, 5500);
    setTimeout(startVideo, 5500);
};

