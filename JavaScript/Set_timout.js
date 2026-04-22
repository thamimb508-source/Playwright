// SetTimeout
// To set time for function with execution

//types
// 1. synchorous - it executive the flow of function value
// 2.asynchorous - when we set timeout the value will asynchorous.. 


// SETTIME OUT();
// it is a java script function that allows a delay the execution of block of code for a specified amount of time

// set time out - it delay the execution of the function accourding to specific time

//settimeout(()=>{},seconds)

function morning (){
    setTimeout(()=>{
        console.log("goodmorning");
    },3000)
}
function afternoon (){
    setTimeout(()=>{
        console.log("goodafternoon");
        
    },2000)
}
function night (){
    setTimeout(()=>{
        console.log("goodnight");
        
    },5000)
}
morning();
afternoon();
night();