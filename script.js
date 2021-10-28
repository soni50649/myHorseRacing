"use strict"

class Horse{
    element
    x

constructor(element,y,color){
    element.style.top= y + "px"
    element.style.backgroundColor=color
    element.classList.add("horse")
    document.body.appendChild(element)

    this.element=element
    this.x=0
}

move(){
    this.element.style.left=this.x + "px"
    this.x += Math.floor(Math.random()*10)
}

checkForWin(){
    if(this.x >=finish){
        alert("$(colors[h]) horse wins")
        resetRace();
    }
}

reset(){
    this.x=0
    }
}
const numHorses = 10
let horses=[]


let colors=["red","blue","Cyan","magenta","yellow","Black","turqouise","gray","lilac","white"]

function startRace(){
    setInterval(moveHorses,50)
}

function setupHorses(){
for(let h=0;h<numHorses;h++){
    horses.push(new Horse(document.createElement("div"), 50 + h * 45, colors[h]))
    }
}

const finish=500

function moveHorses(){
   for(let h=0;h<numHorses;h++){
    let horse=horses[h]
    horse.move()
    horse.checkForWin()
   } 
}
function resetRace() {
    for(let h=0;h<numHorses;h++){
    horse[h].reset()
    }
}

setupHorses()
/*function startRace(){

    setInterval(move,50)  
    alert("On Your Marks. Get Set. GO!")
    clearInterval()
}


let firstname=prompt("What's your name cuz?")
let lastname=prompt("Tell me your last name G!")
let birthyear=prompt("What year you were born broski?")

let str = "firstname"
alert(firstname.substr(0,2)+ lastname+ birthyear.slice(2,4))
*/









