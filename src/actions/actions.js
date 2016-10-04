//***************LIST OF ACTIONS**********
//Generates random number(Guess button)
//Generate new number and restart game (New Game)
//count # of guesses (Counter)
//displays if hot or cold(feedback)
//list of old guesses (Array)


var GUESS_NUMBER="GUESS";
var makeAGuess= function(guess){
    console.log('makeAGuess called', guess)
    return {
        type: GUESS_NUMBER,
        payload:guess
    }
}
var CURRENT_FEEDBACK="CURRENT_FEEDBACK";
var currentFeedback= function(feedback){
    return{
    type:CURRENT_FEEDBACK,
    payload: feedback
    }
    
} 

var IS_ACTIVE ='IS_ACTIVE'
var isActive = function(){
    return {
    type: IS_ACTIVE
        
    }
}

var RANDOM_NUMBER = "RANDOM_NUMBER ";
var randomNumber= function(){
    return{
        type: RANDOM_NUMBER
    }
}

var NEW_GAME = "NEW_GAME";
var newGame = function() {
    return {
        type: NEW_GAME
    }
}

var COUNT = "COUNT";
var count = function(number) {
    return {
        type: COUNT,
        payload: number
    }
}

exports.GUESS_NUMBER=GUESS_NUMBER;
exports.makeAGuess=makeAGuess;
exports.RANDOM_NUMBER=RANDOM_NUMBER;
exports.randomNumber=randomNumber;
exports.IS_ACTIVE=IS_ACTIVE;
exports.isActive=isActive;
exports.CURRENT_FEEDBACK=CURRENT_FEEDBACK;
exports.currentFeedback=currentFeedback;
exports.NEW_GAME=NEW_GAME;
exports.newGame=newGame;
exports.COUNT=COUNT;
exports.count=count;
