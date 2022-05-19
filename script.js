let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =()=>Math.floor(Math.random()
)

const compareGuesses = ( human ,computer, target)=>{
  const humanDiff = Math.abs(target - human)
  const computerDiff = Math.abs( target - computer)
  if (humanDiff <= computer ){
    return true
  } 
  else {
    return false
  }
}

const updateScore= winner=>{
if (winner ==='human'){
  humanScore ++}
  else if (winner ==='computer') {
    computerScore ++ }

}

const advanceRound=()=> currentRoundNumber ++ 

console.log(advanceRound())
