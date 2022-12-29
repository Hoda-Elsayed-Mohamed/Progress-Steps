const prev = document.getElementById('previous')
const next = document.getElementById('next')
const circles =document.querySelectorAll('.circle')
var i=0;

function moveForword(){

    circles[i].classList.add('active')
    
    }
function moveBackword(){

    circles[i].classList.remove('active')
}
prev.addEventListener('click', ()=>{
    
    i--
    if(i<1){
        
        prev.disabled = true;
        next.disabled = false;
    }else{
        moveBackword()
    }
})

next.addEventListener('click', ()=>{
    
    i++
    if(i>circles.length-1){
        i == circles.length
        next.disabled = true;
        prev.disabled = false;
    }else{
        moveForword()
    }
})


