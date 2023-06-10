let pianoKeys = document.querySelectorAll(".buttons .key");
let audioVolume = document.getElementById("range");
let sound = new Audio("a.wav");

let pianoSound = (key)=>{
sound.src = `${key}.wav`;
sound.play();  //paling Audio
}
let handelVolume = (e)=>{
    sound.volume = e.target.value;
}
let hideAlpahkeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("none"));
}
// click to listen sound piano
pianoKeys.forEach((key)=>{
key.addEventListener("click",()=> pianoSound(key.dataset.key));

console.log(key.dataset.key)
});
// control to sound volume -------------------------------------------------------------------------------
audioVolume.addEventListener("input",handelVolume);
//to hide alphabet in piano keys --------------------------------------------------------------------------
document.getElementById("circle").addEventListener("click", hideAlpahkeys)








