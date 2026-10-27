//// broswer first loads HTML > simltaneously loads JS from the defer preference > code shows modal (popup) > audio init


// document.body.style.backgroundColor = "red";
//// FIND MY TEST BUTTON
const testButton = document.getElementById("test-button");

//// FIND POPUP
const popup = document.getElementById("popup");
// console.log(popup);
// console.log("test");

//// FIND CLOSE POPUP
const popupCloseButton = document.getElementById("popupClose");

//// CREATE INSTRUMENT
const synth = new Tone.Synth();

//// CONNECT INSTRUMENT TO AUDIO
function toneInit(){
    synth.connect(Tone.Destination);
}
// enables the audio after the popup gets closed
popup.addEventListener("close", toneInit);

//// SHOW POPUP
popup.showModal();

//// CLOSE POPUP
function closePopupAction(){popup.close();}
popupCloseButton.addEventListener("click", closePopupAction);

//// PLAY TEST NOTE
testButton.addEventListener("click", playTestNote);

function playTestNote(){
    synth.triggerAttackRelease("C4", "8n");
}

// AUDIO FILE PLAYBACK
const playbackButton = document.getElementById("playbackButton");
const audioTrack = document.getElementById("audioTrack")
function playPauseAudio(){
    if(audioTrack.paused === true){
    audioTrack.play();
    } else {
        audioTrack.pause();
    }
}

playbackButton.addEventListener("click", playPauseAudio);

// randomly scrub to location
const randomButton = document.getElementById("randomLocation");

function randomLocation(){
    let trackLength = audioTrack.duration;
    audioTrack.currentTime = trackLength * Math.random();
}
randomButton.addEventListener("click", randomLocation);
