// Promise method --> A promise is like a guarantee to complete the task
//definition:  ->A promise is used to handle things that take time, like fatch data from the internet,
// waiting for timer or reading file
//
// The promise says that i will either give you the result or i will tell you if there is a error

//

//Syntax
// Promise ((resolve,reject)=>){
    //("Code to be executed") })

    //handling the promise by using
    //1.then method
    //2.catch method
    //based on a Boolean function if it is true go with then otherwise go with catch method


    //dis advantage:
    //it will execute all the value of the function either true or false. to overcome this we use 
    // async and await method (like exception handling).

    // async--> is executing the function based on timing
    // await--> it await the function

    // to overcome with try and catch method

    function go(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const shop=true;
                if(shop){
                    resolve("going to shop")
                }else{
                    reject("I am going to shop")
                }
            },4000)
        })
    }
    function buy(){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                const product=true
                if(product){
                    resolve("buy the product")
                }
                else{
                    reject("cant buy the product")
                }
            },3000)
        })
    }
    function change(){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                const back=true
                if (back){
                    resolve("keep the change")
                }
                else{
                    reject("cant keep the change")
                }
            },4000)
        })
    }

    async function gokul() {
        try{
            const a = await go();
            console.log(a);
            const b = await buy();
            console.log(b);
            const c = await change();
            console.log(c);
   
        }
        catch (error){
            console.log(error);
        }
        
    }gokul();