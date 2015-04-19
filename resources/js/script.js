/*
 * 
 * Author: Dennis Sesma
 * 
 * 
 */

/***  Animations ***/
bobbingAnimations = ["bobbing1 2s linear infinite normal",
                     "bobbing2 2s linear infinite normal",
                     "bobbing3 2s linear infinite normal"];

swimAnimation = "swim 4s linear normal";

//ducks
ducks = document.getElementsByClassName("duck");

//set animation end eventhandlers
ducks[0].addEventListener("webkitAnimationEnd", function(){ changeAnimation(ducks[0], bobbingAnimations[0]); });
ducks[1].addEventListener("webkitAnimationEnd", function(){ changeAnimation(ducks[1], bobbingAnimations[1]); });
ducks[2].addEventListener("webkitAnimationEnd", function(){ changeAnimation(ducks[2], bobbingAnimations[2]); });


document.getElementById('startButton').addEventListener('click', startRace);

/*MAIN*/
function startRace()
{
    
    for(i = 0; i < ducks.length; i++)
    {
        
        changeAnimation(ducks[i], swimAnimation);
        ducks[i].style.webkitAnimationDuration = randomIntFromRange(2,10).toString() + "s";
    }    
}


/*** FUNCTIONS ***/

//Changes animation of given object
//@param object - the object we are setting animation on
//@param animation - string conataining the animation shorthand property
function changeAnimation(object, animation)
{
    object.style.webkitAnimation = animation;
}
/**
 * Returns a random number from min - max inclusive
 * @param {int} min - lowest number in range
 * @param {int} max - highest number in range
 * @returns {Number}
 */
function randomIntFromRange(min,max)
{ return Math.floor(Math.random()*(max-min+1)+min); }