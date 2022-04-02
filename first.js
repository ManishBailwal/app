 const computerChoiceDisplay = document.getElementById('ComputerChoice')
 const userChoiceDisplay = document.getElementById('UserChoice')
 const ResultDisplay = document.getElementById('Result')
 const possibleChoices = document.querySelectorAll('button')
 let UserChoice
 let ComputerChoice
 let result
 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    UserChoice  = e.target.id
    userChoiceDisplay.innerHTML  = UserChoice
    
    generateComputerChoice()
    getResult()

 }))

 function generateComputerChoice()
 {
        
        const randomNumber = Math.floor(Math.random() * 3) + 1  //or you can use possibleChoices.length
        if(randomNumber === 1)
        {
            ComputerChoice = 'rock'
        }
        if(randomNumber === 2)
        {
            ComputerChoice = 'scissors'
        }
        if(randomNumber === 3)
        {
            ComputerChoice = 'paper'
        }
        computerChoiceDisplay.innerHTML = ComputerChoice
 }
 function getResult()
 {
     if(ComputerChoice === UserChoice)
     {
         result = 'its a draw!'
     }
     if(ComputerChoice === 'rock ' && UserChoice === 'paper')
     {
         result = 'you win'
     }
     if(ComputerChoice === 'rock' && UserChoice === 'scissors')
     {
         result = 'you lost'
     }
     if (ComputerChoice === 'paper' && UserChoice  === 'rock')
     {
         result = 'you lost'
     }
     
     if (ComputerChoice === 'paper' && UserChoice  === 'scissors')
     {
         result = 'you win'
     }
     
     if (ComputerChoice === 'scissors' && UserChoice  === 'rock')
     {
         result = 'you win'
     }
     
     if (ComputerChoice === 'scissors' && UserChoice  === 'paper')
     {
         result = 'you lost'
     }
     ResultDisplay.innerHTML = result
 }