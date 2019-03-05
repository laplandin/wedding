var timeend = new Date(2016,06,16,15,30,00);


var timer;

var comingSoon = document.querySelector(".coming p");
var onAir = document.querySelector(".soon");
var sliderBkg = document.querySelector(".slider");

time();
function time() {
  var todayStat = new Date();
  if (todayStat > timeend) {
    document.getElementById('day').innerHTML=0;
    document.getElementById('hour').innerHTML=0;
    document.getElementById('min').innerHTML=0;
    document.getElementById('sec').innerHTML=0;

    comingSoon.classList.add("soon");
    onAir.classList.remove("visible");
    onAir.classList.add("visible");
    sliderBkg.classList.remove("slider");
    sliderBkg.classList.add("slider-onAir");
    clearTimeout(timer);
    return true;
  } else {

    var today = new Date();

    today=Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if (tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if (tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);

    document.getElementById('day').innerHTML=today;
    document.getElementById('hour').innerHTML=thour;
    document.getElementById('min').innerHTML=tmin;
    document.getElementById('sec').innerHTML=tsec;

    var timer = setTimeout("time()",1000);
      }
}



var portraithe=document.querySelector(".js-ava-he");
var portraitshe=document.querySelector(".js-ava-she");
var overlay=document.querySelector(".overlay");
var popuphim=document.querySelector(".popup-him");
var popupher=document.querySelector(".popup-her");
var closehe=document.querySelector(".close-he");
var closeher=document.querySelector(".close-her");


portraithe.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay-on");
  popuphim.classList.add("click-popup");
}) // клик на аве, создающий затемнение и показывающий поп-ап для него
portraitshe.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay-on");
  popupher.classList.add("click-popup");
}) // клик на аве, создающий затемнение и показывающий поп-ап для неe
closeher.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay-on");
  popupher.classList.remove("click-popup");
})
closehe.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay-on");
  popuphim.classList.remove("click-popup");
}) // закрытие затемнения и поп-апа по нажатию на крестик
overlay.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay-on");
  popuphim.classList.remove("click-popup");
  popupher.classList.remove("click-popup");
}) // закрытие затменения и поп-апа по нажатию на затемнение
