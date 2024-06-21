// Creating a simple Javascript Paper Scissor Rock Game 
// --------------------***--------------------------------


let GameAsseset = ['Paper', 'Scissor', 'Rock'];

let ComputerGeneratedNumber= Math.floor(Math.random()*3);


let UserInputValue = 'Scissor'
let IndexOfUserinput = GameAsseset.indexOf(UserInputValue)
console.log(IndexOfUserinput)
console.log(ComputerGeneratedNumber)

if (IndexOfUserinput == 0){
    if(ComputerGeneratedNumber==1){
        console.log('you loose')
    }
}else if(IndexOfUserinput == 1){
    if(ComputerGeneratedNumber==2){
        console.log('you loose')
    }
}
else{
    if(ComputerGeneratedNumber==0){
        console.log('you loose')
    }
}




