var sec=0
var min=0
var hour=0
var intervalo
function twodig(digit){
    if(digit<10){
        return(`0`+digit)
    } else{
        return(digit)
    }
}

function startbnt(){
   intervalo = setInterval(counter,1)
}
function pausebnt(){
    clearInterval(intervalo)
}
function stopbnt(){
    clearInterval(intervalo)
    sec=0
    min=0
        document.getElementById(`time`).innerText="00:00"

}

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    if(min==60){
        hour++
        min=0
    }
    document.getElementById(`time`).innerText=twodig(hour)+ ": "+ twodig(min)+ ": "+ twodig(sec)
}