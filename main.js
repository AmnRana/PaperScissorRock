// Creating a simple Javascript Paper Scissor Rock Game 
// --------------------***--------------------------------

let GameAsseset = ['Paper', 'Scissor', 'Rock'];
let UserInputValue
let htmlPaper = document.querySelector(".Paper")
let htmlScissor = document.querySelector(".Scissor")
let htmlRock = document.querySelector(".Rock")
let ComputerGeneratedSign =document.querySelector(".ComputerGeneratedSign")
let displayResult=document.querySelector(".displayResult")
let StartButton=document.querySelector(".start")
let ComputerGeneratedNumber;


htmlPaper.addEventListener('click',()=>{
    UserInputValue=0
})

htmlScissor.addEventListener('click',()=>{
    UserInputValue = 1
})

htmlRock.addEventListener('click',()=>{
    UserInputValue=2
})

StartButton.addEventListener('click', () => playGame())

function playGame(){
    ComputerGeneratedNumber= Math.floor(Math.random()*3)
    console.log(ComputerGeneratedNumber)
    console.log(UserInputValue)
    if(UserInputValue==undefined && UserInputValue==null ){
        //do nothing to not add any image
    }else if (ComputerGeneratedNumber==0){
        ComputerGeneratedSign.style.background="url('./paper.svg')"
        ComputerGeneratedSign.style.backgroundRepeat="no-repeat"
    }else if(ComputerGeneratedNumber==1){
          ComputerGeneratedSign.style.background="url('./scssior.svg')"
          ComputerGeneratedSign.style.backgroundRepeat="no-repeat"
    }else{
        ComputerGeneratedSign.style.background="url('./rock.svg')"
        ComputerGeneratedSign.style.backgroundRepeat="no-repeat"
    }

    if(UserInputValue==undefined || UserInputValue==null){
        displayResult.innerHTML="Please select any sign to play"
    }else if (UserInputValue == 0){
        if(ComputerGeneratedNumber==1){
            console.log('you loose')
            displayResult.innerHTML="You Lose"
        }
        else if(ComputerGeneratedNumber==2){
            console.log('you win')
            displayResult.innerHTML="You Win"
        }
        else{
            console.log('tie')
            displayResult.innerHTML="Tie"
        }
    }
    
    else if(UserInputValue == 1){
        if(ComputerGeneratedNumber==2){
            console.log('you loose')
            displayResult.innerHTML="You Lose"
        }
        else if(ComputerGeneratedNumber==0){
            console.log('you win')
            displayResult.innerHTML="You Win"
        }
        else{
            console.log('tie')
            displayResult.innerHTML="Tie"
        }
    }
    else{
        if(ComputerGeneratedNumber==0){
            console.log('you loose')
            displayResult.innerHTML="You Lose"
        }
        else if(ComputerGeneratedNumber==1){
            console.log('you win')
            displayResult.innerHTML="You Win"
        }
        else{
            console.log('tie')
            displayResult.innerHTML="Tie"
        }
    }
    UserInputValue = null
}






