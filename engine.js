//globulars
var t = 0
var d = new Date();
//var player

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


window.onload = function () {
//    player = document.getElementById("veeb");

    //okay fine i'll do whatever the heck this is
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    t = d.getTime();
    t = Math.floor(t / 600000)//ten minutes
    t = t % 12
    document.getElementById("shneg").innerHTML = t

//    player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
//    player.addEventListener("ended", nextID);


      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('videobox', {
          height: '390',
          width: '640',
          videoId: tsuki[t],
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

});

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

function nextID() {
 t = (t + 1) % 12
 loadVid(tsuki[t])
}

function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
    player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
    console.log("help me")
}