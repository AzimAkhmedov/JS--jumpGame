let character = document.querySelector(".character")

let jump = 300
let moveToLeft = 150
let moveToRight=150
let movement = 1

document.body.addEventListener('keydown', (e)=>{

    console.log(e.key); 
if(e.key==="ArrowLeft"){
        movement = movement-moveToLeft
    console.log("AeD", movement);
character.style.translate= `${movement}px`

  }
  if(e.key==="ArrowRight"){
    movement = movement+moveToRight
    console.log("AeD", movement);
character.style.translate= `${movement}px`

  }
    if(e.key ===" "){
        character.style.transform.translateY = `-${jump}px`
    }
   
})


document.body.addEventListener('keypress', (e)=>{
   
//   if(e.key==="ArrowRight"){
//     movement = movement+moveToRight

//     console.log("AD", movement);
//   }
//       if(e.key==="ArrowLeft"){
//         movement = movement-moveToLeft
//     console.log("AD", movement);
//   }
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


