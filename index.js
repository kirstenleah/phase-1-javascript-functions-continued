// code your solution here
function saturdayFun(activity1 = "roller-skate") {
    return `This Saturday, I want to ${activity1}!`;
}
saturdayFun();

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  
  
//Implement a function called wrapAdjective:

//It should return a function
//This "inner" function should:
//take a single parameter that should default to "special". Name it however you wish.
//return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
//It should take as parameter a String that will be used to create visual flair
//You may call the parameter whatever you like, but its default value should be "*"
//Call example: const encouragingPromptFunction = wrapAdjective("!!!")

//Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"

let wrapAdjective = function(flair="*") {
    return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
    }
}