'use strict';

//Getting the references---------

let check=document.querySelector(".check");
let message=document.querySelector(".message");
let number=document.querySelector(".number");
let Score=document.querySelector(".score");
let Highscore=document.querySelector(".highscore");
let again=document.querySelector(".again");


let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


check.addEventListener("click",function(){
    let guess=Number(document.querySelector(".guess").value);

    if(!guess)
    {
        message.textContent="No number😒😒";
    }
    else if(guess===secretNumber)
    {
        message.textContent="Correct Number💯😍👏";
        number.textContent=secretNumber;
        document.querySelector("body").style.backgroundImage=`url("img7.png")`;
        number.style.width="30rem";

        if(score>highscore)
        {
            highscore=score;
            Highscore.textContent=score;
        }

    }
    else if(guess>secretNumber)
    {
        if(score>1)
        {
        message.textContent="Too High😁";
        score--;
        Score.textContent=score;
      
        }
        else
        {
            Score.textContent=0;
            message.textContent="You lost the game😂";
        }

    }
    else if(guess<secretNumber)
    {
        if(score>1)
        {
        message.textContent="Too Low😢";
        score--;
        Score.textContent=score;
       
        }
        else
        {
            Score.textContent=0;
            message.textContent="You lost the game😂"

        }
    }

});

again.addEventListener("click",function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector(".guess").value="";
    Score.textContent=score;
    number.textContent="?";
    message.textContent="Start guessing...";
    document.querySelector("body").style.backgroundImage=`url(img3.png)`;
    number.style.width="15rem";

});

//Music Start here------
let song=document.querySelector("#song");
let music=document.querySelector(".creator");
        music.onclick=function()
        {
            if (song.paused)
            {
                song.play();
            }
            else
            {
                song.pause();
            }
        }
//-----end----------------



