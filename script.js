

var timerint=0;

function makeBubble(){
var clutter=" ";

for(var i=1; i<121; i++){
    var rn= Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm1").innerHTML=clutter;
}


var timer=60;
function runTimer(){
    setInterval(function(){
        if(timer>0){
        timer--;
        
        document.querySelector("#timerval").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm1").innerHTML="";
        }
    },1000);
}

var hitrn;
function getnewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

var score=0;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent= score;

}

//jispe click karoge wo element par event raise hoga, aur event listener na milne par event ke parent pr listner dhudhega, agar wha bhi nhi mila hoga to parent ke parent ke parent pr dhudhega

document.querySelector("#pbtm1").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    //number is added to convert string to number
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getnewHit();
    }


})



makeBubble();
runTimer();
getnewHit();
//increaseScore();   // by default value of score is zero.


