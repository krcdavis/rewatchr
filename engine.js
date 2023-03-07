//globulars
var t = 0
var d = new Date();

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

const firsthalf = '<iframe class="vibeo" id = "veeb" src="//www.youtube.com/embed/'
const sndhalf = '?enablejsapi=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>'


$(document).ready(function() {
    t = d.getTime();
    t = Math.floor(t / 600000)//ten minutes
    t = t % 12
    document.getElementById("shneg").innerHTML = t
    document.getElementById('cond').innerHTML = firsthalf + tsuki[t] + sndhalf
    veeb.addEventListener("onStateChange", "nextID"):Void
});

function onLoad() {
 
}

function nextID() {
 t = (t + 1) % 12
 loadVid(tsuki[t])
}

function loadVid(vid) {
 document.getElementById('continent').innerHTML=firsthalf + vid + sndhalf
}
