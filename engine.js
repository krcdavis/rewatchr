//globulars
var t = 0
var hour = 3600000;
var bonus = false;

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
        var snoig = Date.now();
        if (seedRand(snoig, 4) === 0)
            { bonus = true; }
    }
}


function loadVid(vid) {
    document.getElementById("shneg").innerHTML = t//test
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