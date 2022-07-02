console.log("Welcome to Spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('drake.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementById('songItems'));
let songs = [
    {songName: "popstar", filePath: "spotifyclone.mp3", coverPath:"cover/1.jpg"},
    {songName: "popstar", filePath: "spotifyclone.mp3", coverPath:"cover/1.jpg"},
    {songName: "popstar", filePath: "spotifyclone.mp3", coverPath:"cover/1.jpg"},
    {songName: "popstar", filePath: "spotifyclone.mp3", coverPath:"cover/1.jpg"},
    {songName: "popstar", filePath: "spotifyclone.mp3", coverPath:"cover/1.jpg"},
]

//songItems.forEach((element, i)=>{
    // console.log(element,i);
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    //Element.getElementByClassName("songName")[0].innerText = songs[i].songName;
// })
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    
})  


// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgress.value = progress;
})
myProgress.addEventListener('change', ()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
})

//  const makeAllPlays = ()=>{
//     element.classList.remove('fa-pause-circle');
//     element.classList.add('fa-play-circle');
//     Array.from(document.getElementByClassName('songItemPlay')).forEach(element=>{

//      })
// }

// Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e.target);
//         makeAllPlays();
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//     })

// })
