//globulars
var t = 0
var d = new Date();

var hour = 3600000

const vids = {
'interest':	['iJyweEcpsGc', 'FG4s0yxE5pY', 'qnKtglBqe78', 'Qaptvhky8IQ', '-I-umggx8Gc', 'owWtVVOSW0c','RQSBj2LKkWg'],
'spooky':	['eZRu3Ao6zK8','SpeSpA3e56A', 'PSFY4k7KeQI', 'kKS4nm4Na-s', 'j_YznrHxphc'],
'gaming':	['',''],
'tsuki':	['qO3ZTe9YENY','HlnaIqf4Nys','s7JrLG2D358','RqovLOG2SnY','BWsUzY50POQ','Z99f_Y0ZYkQ','0-aBfM2_k4Q','nRGxQikzmpQ','hBdOfKPAfNE','s6UMSc8ZS5s','4ESB_KjztRw','l94xbILThFM']
};

  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {

    t = d.getTime();
    t = t - (t % hour)
    
    document.getElementById("shneg").innerHTML = t

    player = new YT.Player('videobox', {
          height: '390',
          width: '640',
          videoId: vids.tsuki[0],//this is a placeholder
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }//ev
    });//videobox

    nextVid()
  }//func

  function onPlayerReady(ebent) {
    document.getElementById('shneg').innerHTML = t;//test
  }

  function onPlayerStateChange(ebent) {
    if (ebent.data == YT.PlayerState.ENDED) {
        nextVid()
    }
  }

function nextVid() {
    var tp = d.getTime();
    var tt = tp - (tp % hour)
    if ( tt === t - (t % hour) ) {
        t = t + 1;
    }
    var vib = ""
    var rnd = 0

    switch (Math.floor(tp / hour) % 7) {
        case 0://interest
            rnd = seedRand(t, vids.interest.length)
            vib = vids.interest[rnd]
            loadVid(vib)
            break;
        case 1://spooky
            rnd = seedRand(t, vids.spooky.length)
            vib = vids.spooky[rnd]
            loadVid(vib)
            break;
        case 2://gaming
            rnd = seedRand(t, vids.gaming.length)
            vib = vids.gaming[rnd]
            loadVid(vib)
            break;
        case 3://interest
            rnd = seedRand(t, vids.interest.length)
            vib = vids.interest[rnd]
            loadVid(vib)
            break;
        case 4://gaming
            rnd = seedRand(t, vids.gaming.length)
            vib = vids.gaming[rnd]
            loadVid(vib)
            break;
        case 5://interest
            rnd = seedRand(t, vids.interest.length)
            vib = vids.interest[rnd]
            loadVid(vib)
            break;
        default://spooky
            rnd = seedRand(t, vids.spooky.length)
            vib = vids.spooky[rnd]
            loadVid(vib)
            break;
    //already i've thought of a better
    
    }//sw
}

/////
function nextID() {
 t = (t + 1) % 12
 loadVid(vids.tsuki[t])
}

function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
    //player.setAttribute('src', "https://www.youtube.com/embed/" + tsuki[t]);
    player.loadVideoById(vid);
}


//sneeded rand
function seedRand(seed, mod){
 sneed = seed.toString()
 let hash = 0;
 for (let i = 0, len = sneed.length; i < len; i++){
  let chr = sneed.charCodeAt(i);
  hash =  (hash << 5) - hash + chr;
  hash |= 0;//I don't know what this does!
 }
let ss = hash % mod;
while (ss < 0) {
 ss += mod;
 }
return ss;//feckin negatives
}
