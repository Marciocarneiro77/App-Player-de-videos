let proximo = document.getElementById("prox");
let anterior = document.getElementById("ant");
let player = document.getElementById("player");
let source = document.getElementById("playerdevideo");
let pausar = document.getElementById("pausar");

let videos =  ["video.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4"];

videoinicio = 1;

window.addEventListener("load", ()=>{
  loadMusic(videoinicio);
})

function loadMusic(indexNumb){
  source.src = videos[indexNumb -1];
}

proximo.addEventListener("click",function(){
  videoinicio++;
  videoinicio > videos.length ? videoinicio = 1 : videoinicio = videoinicio;
  loadMusic(videoinicio);

});

anterior.addEventListener("click",function(){
  videoinicio--;
  videoinicio < 1 ? videoinicio = videos.length : videoinicio = videoinicio;
  loadMusic(videoinicio);
});

player.addEventListener("click",function(){
  source.play();
});

pausar.addEventListener("click",function(){
  source.pause();
});