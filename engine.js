//globulars
var t = 0
var d = new Date();

var hour = 3600000;

var bonus = false;

const vids = {
'interest':	['iJyweEcpsGc', 'FG4s0yxE5pY', 'qnKtglBqe78', 'Qaptvhky8IQ', '-I-umggx8Gc', 'owWtVVOSW0c','RQSBj2LKkWg'],
'spooky':	['eZRu3Ao6zK8','SpeSpA3e56A', 'PSFY4k7KeQI', 'kKS4nm4Na-s', 'j_YznrHxphc'],
'gaming':	['AzTi_Gt-eSI', 'UdDf36LskNQ', 'YJEPdn_5ya4', 'OG8aTcZlyds', 'uHQ4WCU1WQc', 'Zr6xVy-9F7Q', 'mI3Xig4IfqI', 'yXbJe-rUNP8'],
'bonus':	['PpJqrKAYFF8', 'EShUeudtaFg', '15nNY7uofNw', '29vjQwnt-Fw', 'ls3qDfTP0mw', 'PXx9TGsiwV0'],

'tsuki':	['qO3ZTe9YENY', 'HlnaIqf4Nys', 's7JrLG2D358', 'RqovLOG2SnY', 'BWsUzY50POQ', 'Z99f_Y0ZYkQ', '0-aBfM2_k4Q', 'nRGxQikzmpQ', 'hBdOfKPAfNE', 's6UMSc8ZS5s', '4ESB_KjztRw', 'l94xbILThFM']
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
  }//func

  function onPlayerReady(ebent) {
    player.setVolume(50)
    nextVid()
  }

  function onPlayerStateChange(ebent) {
    if (ebent.data == YT.PlayerState.ENDED) {
        nextVid()
    }
  }

function nextVid() {
    var dd = new Date();
    var tp = dd.getTime();
    //if hour of day == 4 and t % hour == 0: t += 1; tsuki[day % 12]
    var tt = tp - (tp % hour)
console.log(tp)
console.log(tt)
console.log(t - (t % hour))
    if ( tt == t - (t % hour) ) {
        t = t + 1;
    }
    else {
        t = tt
    }
    var sbeve;
    //if bonus, set sbeve to bonus and continue, else-
    var num = Math.floor(tp / hour) % 7
    if (bonus) { num = -1; }

    switch (num) {
        case -1:
            sbeve = vids.bonus
            break;
        case 0://interest
            sbeve = vids.interest
            break;
        case 1://spooky
            sbeve = vids.spooky
            break;
        case 2://gaming
            sbeve = vids.gaming
            break;
        case 3://interest
            sbeve = vids.interest
            break;
        case 4://gaming
            sbeve = vids.gaming
            break;
        case 5://interest
            sbeve = vids.interest
            break;
        default://6: spooky
            sbeve = vids.spooky
            break;
    }//sw

    var rnd = seedRand(t, sbeve.length)
    var vib = sbeve[rnd]
    loadVid(vib)

    if (bonus) { bonus = false; }
    else {
        var snoig = d.getTime();
        if (seedRand(snoig, 4) === 0)
            { bonus = true; }
    }
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