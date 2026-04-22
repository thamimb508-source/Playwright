

//Return --> Is a key word  --> its return the values
// use of return is you have declaer the return , the you have to use the value in another function and method

// you have use one function value , to outside of the function

//


// Promise chening

// Promise.all



const alltsp = tsp
        .map(text => text.trim())
        .map(text => text.replace(/,/g, ''))          // remove commas
        .map(text => text.replace(/[^0-9]/g, ''))     // remove Rs., ₹
        .map(Number)
        .filter(num => !isNaN(num));                  // remove invalid


        const alltsp = tsp.map(text => text.trim())
        .map(text => text.replace(/,/g, ''))
        .map(text => text.replace(/[^0-9]/g, ''))
        .map(Number).filter(num => !isNaN(num));
