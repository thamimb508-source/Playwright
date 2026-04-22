//push method --> add the new element in end of the array

let pu= [10,20,30,40,50];
pu.push(60);
console.log(pu);

//pop method --> remove the last element of the array

let po=[20,30,40,50,60,70];
po.pop();
console.log(po);

//shift method --> remove the first element from array

let sh=[202,303,404,4654];
sh.shift();
console.log(sh);

//unshift method --> add a new elements to be begining of the array

let uns=[122,39,647,7638];
uns.unshift(111);
console.log(uns);

//sort method --> sort the element like from a to z, A to Z , decending order to assending order

let sr=['a','S','f','g','H','B','z'];
sr.sort();


//Map method --> create a new array by providing function of each element of orininal array
//syntax : variable name.map((value, index, accumlator)=>)
//value
let ma=[10,20,30,40,50];
console.log(ma);
let resultval=ma.map((val,ind,acc)=> val*3); // need to multiple value
console.log(resultval);
//index 
let ma1=[10,20,30,40,50];
console.log(ma1);
let resultind=ma1.map((val,ind,acc)=> ind*3); // need to multiple index value is [0,1,2,3,4,5]
console.log(resultind);


//Filter method --> Its creates new array with elements that pass a certain condition.
//Its acts like a filter that only less through the items that meet the criteria.

//Syntax:: variable name. filter((value, index, accumlator)=>)

let fill=[11,23,40,50,55,60,70,687979];
let out=fill.filter((val,ind,acc)=>val>50);
console.log(out);


//Reduce --> Reduce an array to a single value

//Syntax:: varibale name. reduce((accumlater, currect value))
let red=[11,23,3748,456,6383,12345];
let arr=red.reduce((acc,ccv)=>acc+ccv);
console.log(arr);


//Splice 

//It has two value index and value (0,1)
//0= is uesd add the value in the index place
//1= is used to add value in the index place but its remove the existing values

//Syntax:: Variable name. splice (index, splaice, value) {}

//Reverse

//It is used to reverse the order of the element in the array



