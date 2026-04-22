//class--> is like a blue print of the object, its defines property and methods. 
// example for class -> The car bule print define the property (like color, model) and action like (drive etc...) Key word including object and constactor or methods

//object--> an instance create from the a class. It represents the real entity.
//new:
// It is like a hiring a factory to take the blueprint and build a car for you.

//constructor--> It is special type of function used to create a object

// It helps to setup the initial property of the object like giving the starting information
// it is like a setup process to runs when you create an object from a class

// mehtods();
// a method like a object or behavior that object can perform

class car{
    brand(){
        console.log("BMW");
        
    }
    price(){
        console.log("1 crore");
        
    }
    color(){
        console.log("black");
        
    }

}
const finalcar=new car();
finalcar.brand;
finalcar.price;
finalcar.color;


// class - like a blue print
// Constructor --> initialize value  (`` use batticks for print the values in Constructor)

//  use this \n to print the same line values to next line

class  phone {
    constructor(model,price,ram,rom){
        this.model=model;
        this.price=price;
        this.ram=ram;
        this.rom=rom;
    }
    mobile(){
        console.log(`i need ${this.model} model\n i need ${this.price} price\n i need ${this.ram} ram\n i need ${this.rom} rom`);
        
    }
}
const output=new phone("Nokia","25000","128gb","16gb");
output.mobile();
