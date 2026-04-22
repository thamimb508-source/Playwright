// String oprations

//length

let str = "hello world"
console.log(str.length);
console.log(str.toUpperCase);
console.log(str.toLowerCase);

// char At (index) -- index start with 0, 1 , hence it will get the 7 char from the index
let ch= "hello gokul";
console.log(ch.charAt(8));

//indexof
let id="hello gokul goodmorning"
console.log(id.indexOf("a"));

//lastindexof 
let lind="hello world gokul" //-- > it will print from last o values
console.log(lind.lastIndexOf("o"));

// slice
//it will slice after the 13 value
let sli="hello world good morning happy coding";
console.log(sli.slice(13));

//substring
// it will give from 3 to 10 in between values
let sub="hello world good morning happy coding"
console.log(sub.substring(3,10));

//trim
//it will trim the first and last sapce from the string

let tr=" hello raja "
console.log(tr);
console.log(tr.trim());

//split
// it will split the every single value ()
let sp="mehrubasha";
console.log(sp.split("")); //result --> ['m', 'e', 'h', 'r', 'u', 'b', 'a', 's', 'h', 'a']
//  join --> its used to join the splited word
console.log(sp.split("").join(""));

// concat --> join two or more string
let h1= "thamim";
let h2= "basha";
console.log(h1.concat(h2));
console.log(h1.concat(" "),(h2));


//test --> update the c to C for all the word

let word="chennai city center";
let lu=word.replaceAll("c","C");
console.log(lu);


