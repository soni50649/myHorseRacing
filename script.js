"use strict"
const numHorses = 10
let horses=[]
let horseX=[]

let colors=["red","blue","Cyan","magenta","yellow","Black","turqouise","gray","lilac","white"]

function startRace(){
    setInterval(move,50)
}

for(let h=0;h<numHorses;h++){
    horses[h]= document.createElement("div")
    horses[h].classList.add("horse")
    horses[h].style.top= 50 + h*18 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])
}

const finish=500

function move(){
   for(let h=0;h<numHorses;h++){
       horses[h].style.left=horseX[h] +"px"
       horseX[h]+= Math.floor(Math.random()*10)
       if(horseX[h] >=finish){alert(` ${colors[h]} horse wins`);resetRace();}
   } 
    
}

function startRace(){

    setInterval(move,50)  
    alert("On Your Marks. Get Set. GO!")
    clearInterval()
}


let firstname=prompt("What's your name cuz?")
let lastname=prompt("Tell me your last name G!")
let birthyear=prompt("What year you were born broski?")

let str = "firstname"
alert(firstname.substr(0,2)+ lastname+ birthyear.slice(2,4))

function resetRace() {
    for(let h=0;h<numHorses;h++)
    horseX[h]=0
}








