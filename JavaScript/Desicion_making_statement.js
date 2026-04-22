// Decision making
//if and else
    // its is a decition making statement

//Loops:
    // It can execute/repeat the block of codes in number of time until a condition become false.
    //this helps to avoid writing the same code again and again 


//if and else    
let age=30;
if(age>=18&&age<=50){
    console.log("he is eligible for vote");
    
}
else{
    console.log("he is not eligible for vote");
    
}

let username="admin";
let password="12345"
if(username==="admin"&&password==="12345"){
console.log("login successfully");
}
else{
    console.log("invalid credential");
    
}

// else if

let mark=40;
 if (mark>=90&&mark<=99){
    console.log("its comes under 90s");
    
 }
 else if (mark>=80&&mark<90){
    console.log("its comex under 80s");
    
 }
 else if (mark>=70&&mark<80){
    console.log("its comes under 70s");
    
 }
  else{
    console.log("other comes under 60s");
    
  }
// Control flow statement

//reserve number loop
//loops
for(let i=5; i>0; i--)
{
    console.log(i);
    
}

//forword loop

for(let i=1; i<=5; i++)
{
    console.log(i);
    //console.log("javascript");
    
}

// while loop

let b=1;
while(b<=5){
    console.log(b);
    b++;
    
};
console.log("***********");

//do while

// do while --> its will print the first values, (if the condtion is true or false , it will print first values)
// after thet it will prin the values based on the condition
let  c=1;
do{
    console.log(c);
    c++;
    
}
while(c<=5);


//  let students=["arun,"bala","sona"];
//     for (let i=0;i<students.length;i++){
//         console.log(students(i));
        
//     }

  
// for of ---> Array --> it will iterate the array--> its will print each index ("sun", "mon," "tue") = 0,1,2

//syntax:: for (varibale of iterate) {code to be executed}
//Its is used to itrate the loop in strings, array, map, set etc.
//Its return the value

let days=["sun","mon","tue"];
//console.log(days);

for (result of days)
{
    console.log(result);
    
}

let word="sunday"/// its will print likr s,u,n,d,a,y
for (day of word){
    console.log(day);
    
}


// for in --> object -- its will print only key not a values

//syntax:: for (key in obj) {code to be executed}--> obj
//It is used for obj and it returns the key/indexes

let=obj={
    name: "basha",
    place: "chennai",
    num: "123456789"
}
for(res in obj){
    //console.log(res);
    console.log(res+":"+obj[res]);
    
    
}
