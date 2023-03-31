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


  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {

    t = d.getTime();
    t = Math.floor(t / 600000)//ten minutes
    t = t % 12
    document.getElementById("shneg").innerHTML = t

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
        }//ev
    });//videobox
  }//func

  function onPlayerReady(event) {
    document.getElementById('shneg').innerHTML = t;//test
  }

  function onPlayerStateChange(ebent) {
    if (ebent.data == YT.PlayerState.ENDED) {
        nextID()
    }
  }

function nextID() {
 t = (t + 1) % 12
 loadVid(tsuki[t])
}

function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
    //player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
    console.log("help me")
}
