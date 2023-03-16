//globulars
var t = 0
var d = new Date();
var player

const tsuki = ['qO3ZTe9YENY',
'HlnaIqf4Nys',
's7JrLG2D358',
'RqovLOG2SnY',
'BWsUzY50POQ',
'Z99f_Y0ZYkQ',
'0-aBfM2_k4Q',
'nRGxQikzmpQ',
'hBdOfKPAfNE',
's6UMSc8ZS5s',
'4ESB_KjztRw',
'l94xbILThFM'];


$(document).ready(function() {
    player = document.getElementById("veeb");

    t = d.getTime();
    t = Math.floor(t / 600000)//ten minutes
    t = t % 12
    document.getElementById("shneg").innerHTML = t
    player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
    player.addEventListener("ended", nextID);
});

function nextID() {
 t = (t + 1) % 12
 loadVid(tsuki[t])
}

function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
    player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
    console.log("help me")
}
