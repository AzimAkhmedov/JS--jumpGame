let character = document.querySelector(".character")

let jump = 300
let move = 1

document.body.addEventListener('keydown', (e)=>{

    console.log(e.key); 
if(e.key==="ArrowLeft"){
    move+=50       
    character.style.translate= `-${move}px`
    console.log("AD", move);
  }
  if(e.key==="ArrowRight"){
    move-=50       
    character.style.translate= `${move}px`
    console.log("AD", move);
  }

    if(e.key ===" "){
        character.style.transform.translateY = `-${jump}px`
    }
   
})


document.body.addEventListener('keypress', (e)=>{
    if(e.key==="ArrowLeft"){
        move+=50       
        character.style.translate= `${move}px`
        console.log("AD", move);
      }
      if(e.key==="ArrowRight"){
        move-=50      
        character.style.translate= `${move}px`
      }
    if(e.key===' '){
        jump+=200

        console.log(jump);      
        character.style.transform = `translateY(-${jump}px)`
    }
})


document.body.addEventListener('keyup', (e)=>{
    if(e.key===' '){
        setTimeout(() => {
            character.style.transform = `translateY(-${0}px)` 
            jump=300
           }, 600);
    }
})

