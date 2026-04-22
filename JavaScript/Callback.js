// Callback method

// if you do not want to execute the call back , you can comment the call back

//call back:

// multiple function executes at the same time using callback function.the asychorous value will change into synchorous value

//meaning:
// a call back is like some one, call me back let me know

// Definition: 
// a call back function is simplify a function then you pass a argument to another function

// a callback hell:
// a many call back function will call  again and again

function gokul (Callback){
    setTimeout(()=>{
        console.log("helo gokul");
        Callback()
    },3000)
}
function aravid (Callback){
    setTimeout(()=>{
        console.log("helo aravid");
        Callback()
    },3000)
}
function theend (Callback){
    setTimeout(()=>{
        console.log("Frds added");
        Callback()
    },4000)
}
gokul(()=>{
    aravid(()=>{
        theend(()=>{
            console.log("task completed");
            
        })
    

    })
})