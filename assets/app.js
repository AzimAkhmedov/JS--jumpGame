let character = document.querySelector(".character")

let jump = 300
document.body.addEventListener('keydown', (e)=>{
    if(e.key ===" "){
        
            
        
        character.style.transform = `translateY(-${jump}px)`
        jump+=100
         

       setTimeout(() => {
        character.style.transform = `translateY(-${0}px)`
        
       }, 600);
    }
    else(
        character.style.transform = `translateY(${0}px)`
    )
})