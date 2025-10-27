// Assignment operator

// | Operator | Example  | Same As   |
// |-----------|-----------|-----------|
// | =         | x = 5     | x = 5     |
// | +=        | x += 5    | x = x + 5 |
// | -=        | x -= 5    | x = x - 5 |
// | *=        | x *= 5    | x = x * 5 |
// | /=        | x /= 5    | x = x / 5 |
// | %=        | x %= 5    | x = x % 5 |
// | **=       | x **= 3   | x = x ** 3|


let a = 10

console.log(a = 5);
a += 2;
console.log(a);
console.log(a -= 4);
console.log(a *= 6);
console.log(a /= 2);
console.log(a %= 3);
console.log(a **= 4);



//bitwise and example

let a4 = 8;
let b = 16;
console.log(a4 & b)

// bitwise OR example 
let a1 = 10
let b1 = 2
console.log(a1 | b1);


// //bitwise XOR example

let a2 = 10
let b2 = 2
console.log(a2 ^ b2);


// //bitwise NOT example 

let a3 = 10
console.log(~a3);  // (~x) = -(x=1)

// array

let cfi = ["kaif","kamran","rayyan","zoheb"];
console.log(typeof cfi);




// comparision operator 

let k = 3;
let l = 2;
console.log(k < l);
console.log(k > l);




// Types 
let a11 = 10 // number
let b11 = 2 // number
let c1 = "10"  //string 
let d1 = "2"  //string 
let e1 = true  // boolean
let f = false  //boolean

//equal to ==
// not equal to !=
// strictly equal to ===
// strictly not equal to !==


let a5 = 5;
let b5= 3;
let c = "3";
let d = 2;
let e = 5


console.log(a == e);
console.log(a == b);
console.log(a != d);
console.log(a === b);
console.log(a !== b);
console.log(a > c);
console.log(a >= c);
console.log(a < c);
console.log(a <= c);





// Typeof operator

let firstName = "Rayyan";
let age = 10;
let isAlive = true;
let bankBalance = 9879879879798n
let sleeping = null;
let laptop;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isAlive);
console.log(typeof bankBalance);
console.log(typeof sleeping);
console.log(typeof laptop);



let myDetails = {
    fullName: "Rayyan Shaji Ansari",
    aadhaarCard: 318375390019,
    phone : "9573109741",
    age:23,
    isAlive:true
}


console.log(typeof myDetails);


// array

let cfi1 = ["kaif","kamran","rayyan","zoheb"];
console.log(typeof cfi1);

// Note : by default all non primitive data types are object 
// in non primitive we have objects and arrays
