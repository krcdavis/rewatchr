//globulars
var t = 0
var hour = 3600000;
var bonusflag = false;

  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {

    player = new YT.Player('videobox', {
          height: '540',
          width: '960',
          videoId: "sCvszgwu10w",//this is a placeholder sCvszgwu10w
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
    var tp = Date.now();
    //various things
    var tt = tp - (tp % hour)
    if ( tt == t - (t % hour) ) {
        t = t + 1;
    }
    else {
        t = tt
    }
    var sbeve;
    //if bonus, set sbeve to bonus and continue, else-
    var num = Math.floor(tp / hour) % 7//going up to 11 next
    if (bonusflag) { num = -1; }

    switch (num) {
        case -1:
            sbeve = bonus
            break;
        case 0://interest
            sbeve = interest
            break;
        case 1://spooky
            sbeve = spooky
            break;
        case 2://gaming
            sbeve = gaming
            break;
        case 3://interest
            sbeve = interest
            break;
        case 4://gaming
            sbeve = gaming
            break;
        case 5://interest
            sbeve = gameplay
            break;
        default://6: spooky
            sbeve = spooky
            break;
    }//sw
//TESTING PURPOSES
//sbeve = test1

    var rnd = seedRand(t, sbeve.length)
    var vib = sbeve[rnd]
    loadVid(vib)

    if (bonusflag) { bonusflag = false; }
    else {
        var snoig = Date.now();
        if (seedRand(snoig, 4) === 0)
            { bonusflag = true; }
    }
}


function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
    //if has end, start ?? 0
    //player.loadVideoById(vid.id);


if ( Object.hasOwn(vid, 'end') ) {
player.loadVideoById({'videoId': vid.id,
               'startSeconds': vid.start ?? 0,
               'endSeconds': vid.end});
}
else{
player.loadVideoById({'videoId': vid.id,
               'startSeconds': vid.start ?? 0});

}

}


//const crypto = require('crypto');
import crypto from "crypto";

//sneeded rand
//let's fix this.
function seedRand(seed, mod){
 //sneed = seed.toString()
 const hash = crypto.createHash('md5');
 hash.update(seed);
 const dig = hash.digest('hex');
//i don't know if i'm using it wrong or what, but for whatever reason these results have like 74 trailing zeroes in binary which rather limits the variety of outputs... so...
 const newhash = Math.floor( parseInt(`0x${dig}`,16) / Math.pow(2,75) );

let ss = newhash % mod;
//md5 hash produces a buffer of bytes which can't technically be negative, probably, but...
while (ss < 0) {
 ss += mod;
 }
return ss;//feckin negatives
}


