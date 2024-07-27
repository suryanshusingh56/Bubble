function makebubble(){
    var bubble = "";
    for (var i = 1; i <= 308; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bottom").innerHTML = bubble;
}

function runTimer(){
    timer=10;
    var timerint= setInterval(function()
    {
       if(timer>0){
        timer--;
        document.querySelector("#timerval").innerHTML=timer;
       }
       else{
        clearInterval(timerint);
        var a=document.querySelector(".bottom");
        a.innerHTML="Your Score is:"+ score;
       }
    },1000)
}
score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scorecard").textContent=score;
}
var hitnum;
function getNewHit(){    
    hitnum=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=hitnum;
}

document.querySelector(".bottom").addEventListener("click",function(details){
    var clickdown=Number(details.target.textContent);
    if(hitnum===clickdown){
        increaseScore();
        makebubble();
        getNewHit();
    }
})
makebubble()
runTimer();
getNewHit();
