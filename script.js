console.log("welcome to spotify");
let songindex=0;
let audioElement=new Audio('song.mp3.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let clone=[
{songname:"maahi jinna sona",filePath:"clone/song.mp3.mp3",coverPath:"clone /cover1.jpg"},
{songname:"husn tera tauba",filePath:"clone/song1.mp3",coverPath:"clone/cover2.jpg"},
{songname:"yimmy yimmy",filePath:"clone/song2.mp3",coverPath:"clone/cover3.jpg"},


]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=clone[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=clone[i].songname;
})
masterplay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle' );
    gif.style.opacity=1;
}

else{
    audioElement.pause();
    masterplay.classList.remove( 'fa-pause-circle');
    masterplay.classList.add ('fa-play-circle' );
    gif.style.opacity=0;
}
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);    

myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})
const makeALLplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{   
    element.classList.remove(' fa-circle-pause');
element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
console.log(e.target);
makeALLplays();
e.target.classList.remove(' fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src='clone/song2.mp3';
audioElement.play();
audioElement.currentTime=0;
    })
})  