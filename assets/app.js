// let character = document.querySelector(".character")

// let jump = 150
// let moveToLeft = 150
// let moveToRight=150
// let movement = 1

// document.body.addEventListener('keydown', (e)=>{

//     console.log(e.key); 
// if(e.key==="ArrowLeft"){
//         movement = movement-moveToLeft
//     console.log("AeD", movement);
// character.style.translate= `${movement}px`

//   }
//   if(e.key==="ArrowRight"){
//     movement = movement+moveToRight
//     console.log("AeD", movement);
// character.style.translate= `${movement}px`
//   }
// })


// document.body.addEventListener('keypress', (e)=>{

//     if(e.key===' '){

//         console.log(jump);      
//         character.style.transform = `translateY(-${jump}px)`
//         jump*=2

//     }
    
// if(e.key==="ArrowLeft"){
//     movement = movement-moveToLeft
// console.log("AeD", movement);
// character.style.translate= `${movement}px`

// }
// if(e.key==="ArrowRight"){
// movement = movement+moveToRight
// console.log("AeD", movement);
// character.style.translate= `${movement}px`
// }
// })


// document.body.addEventListener('keyup', (e)=>{
//     if(e.key===' '){
//         setTimeout(() => {
//             character.style.transform = `translateY(-${0}px)` 
//             jump=150
//            }, 600);
//     }
// })



document.addEventListener('DOMContentLoaded', (e)=>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let isGameOver = false
    let platformCount = 5
    let platforms =[]
    let upTimerId
    let downTimeId

    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150

    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add("doodler")
        doodler.style.left =  doodlerLeftSpace+'px'
        doodler.style.bottom = doodlerBottomSpace+'px'

    }
     class Platform {
        constructor(newPlatButton){
            this.bottom = newPlatButton
            this.left = Math.random()*315
            this.visual = document.createElement('div')
             
            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left= this.left +'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
     }
    const createPlatforms =()=>{
        for(let i =0; i<=platformCount;i++){
            let platformGap = 600/platformCount
            let newPlatButton = 100 + i * platformGap
            let newPlatform = new Platform(newPlatButton) 
            platforms.push(newPlatform)
        }
    }

    const movePlatforms = ()=> {
           if(doodlerBottomSpace> 200){
            platforms.forEach(platform =>{
                platform.bottom -=4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + "px"

            })
           }
    }

    const gameOver=()=>{
        console.log('over');
        isGameOver= true
        clearInterval(upTimerId)
        clearInterval(downTimeId)
        

    }
    const fall=()=>{
        clearInterval(upTimerId)
        downTimeId =    setInterval(()=>{
            doodlerBottomSpace -=5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if(doodlerBottomSpace<=0){
                isGameOver()
            }
        },30)
    }
    const jump =()=>{
        clearInterval(downTimeId)
        upTimerId = setInterval(()=>{
           doodlerBottomSpace +=20
           doodler.style.bottom = doodlerBottomSpace+'px'
        },30)
        if(doodlerBottomSpace <350){
            fall()
        }
    }
    
   const start =()=>{
    if(!isGameOver) {
        createDoodler()
        createPlatforms()
        setInterval(movePlatforms,30)
        jump()
    }}

    start()
})

