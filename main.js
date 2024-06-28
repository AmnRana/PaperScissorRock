// Creating a simple Javascript Paper Scissor Rock Game 
// --------------------***--------------------------------
console.log("hello")

let GameAsseset = ['Paper', 'Scissor', 'Rock'];
let UserInputValue
let htmlPaper = document.querySelector(".Paper")
let htmlScissor = document.querySelector(".Scissor")
let htmlRock = document.querySelector(".Rock")
let ComputerGeneratedSign =document.querySelector(".ComputerGeneratedSign")
let ComputerGeneratedNumber;


htmlPaper.addEventListener('click',()=>{
    UserInputValue=0
    ComputerGeneratedNumber= Math.floor(Math.random()*3)
    console.log(UserInputValue)
    console.log(ComputerGeneratedNumber)
    playGame()
})

htmlScissor.addEventListener('click',()=>{
    UserInputValue = 1
    ComputerGeneratedNumber= Math.floor(Math.random()*3)
    console.log(UserInputValue)
    console.log(ComputerGeneratedNumber)
    playGame()
})

htmlRock.addEventListener('click',()=>{
    UserInputValue=2
    ComputerGeneratedNumber= Math.floor(Math.random()*3)
    console.log(UserInputValue)
    console.log(ComputerGeneratedNumber)
    playGame()
})

function playGame(){
    // ComputerGeneratedNumber= Math.floor(Math.random()*3)
    if (ComputerGeneratedNumber==0){
        ComputerGeneratedSign.style.background="url('./paper.svg')"
    }else if(ComputerGeneratedNumber==1){
          ComputerGeneratedSign.style.background="url('./scssior.svg')"
    }
    else{
        ComputerGeneratedSign.style.background="url('./rock.svg')"
    }

    if (UserInputValue == 0){
        if(ComputerGeneratedNumber==1){
            console.log('you loose')
        }
        else if(ComputerGeneratedNumber==2){
            console.log('you win')
        }
        else{
            console.log('tie')
        }
    }
    
    else if(UserInputValue == 1){
        if(ComputerGeneratedNumber==2){
            console.log('you loose')
        }
        else if(ComputerGeneratedNumber==0){
            console.log('you win')
        }
        else{
            console.log('tie')
        }
    }
    else{
        if(ComputerGeneratedNumber==0){
            console.log('you loose')
        }
        else if(ComputerGeneratedNumber==1){
            console.log('you win')
        }
        else{
            console.log('tie')
        }
    }
    UserInputValue = null
}






