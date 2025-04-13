let gameSeq=[];
let userSeq=[];
let start=false;
let highscore=-1;
let level=0;

let colors=["red","blue","pink","yellow"]

let h3=document.querySelector("h3");
document.addEventListener("keydown",(event)=>{
    if(start==false){
        start=true;
        console.log("Game started");
        levelup();
    }
});
    function levelup(){
        userSeq=[];
        level++;
        h3.innerText=`Level = ${level}`;
        let randIdx=Math.floor(Math.random()*4);
        let randclr=colors[randIdx];
        let randBtn=document.querySelector(`.${randclr}`);
        gameSeq.push(randclr);
        console.log(gameSeq);
        gameFlash(randBtn);
    }
    function gameFlash(btn){
        btn.classList.add("gameFlash");
        setTimeout(()=>{
            btn.classList.remove("gameFlash");
        },250);
    }
    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(()=>{
            btn.classList.remove("userFlash");
        },250);
    }
    let btns=document.querySelectorAll(".btn");
    for(btn of btns){
        btn.addEventListener("click",btnPressFn);
    }
    function btnPressFn(){
        let curr=this;
        userFlash(curr);
        let clr=curr.getAttribute("id");
        userSeq.push(clr);
        checkSeq(userSeq.length-1);

    }
    function checkSeq(idx){
        if(userSeq[idx]==gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(()=>{
                    levelup();
                },1000);
            }
        }else{
            HighUpdate(level);
            h3.innerText=`Game over.\n your score is: ${level}\n Press any key to continue`;
            let body=(document.querySelector("body").style.backgroundColor="red");
            setTimeout(()=>{
                document.querySelector("body").style.backgroundColor="black";
            },5000);
            reset();
        }
    }
        function reset(){
            start=false;
            userSeq=[];
            gameSeq=[];
            level=0;
            highscore=-1;
        }
        function HighUpdate(level){
            if(highscore<level){
                highscore=level;
            }
        
        let h2=document.querySelector("h2");
        h2.innerText=`HighScore is: ${highscore}`;
         }

