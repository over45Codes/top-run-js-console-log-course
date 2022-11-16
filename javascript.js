//JS Examples from The Odin Project & Other learning resources 

// let helloWorld= "Hello, World!";
// console.log(helloWorld)
// 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// let javascriptIsFun= true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);

// javascriptIsFun = "Yes!"

// console.log(typeof javascriptIsFun);

// const firstName = 'Jonas';
// const lastName = 'Peters';
// console.log(firstName + ' ' + lastName);

// The two numbers can be literals
// let c = 100 + 50;
// console.log(c);

// let a = 100;
// let b = 50;
// let x = a + b;
// document.getElementById("demo").innerHTML = x;

// let d = 3;
// let e = (100 + 50) * d;
// document.getElementById("demo1").innerHTML = e;

// let f = 5;
// let y = 2;
// let z = f + y;
// document.getElementById("demo2").innerHTML = z;

// Basic operators, math by Javascript.info/operator webpage / https://javascript.info/operators#numeric-conversion-unary See below: 

//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
// let g = 1;
// g = -g;
// alert( g ); // -1, unary negation

// let k = 1, l = 3;
// alert( l - k ); //2, binary minus subtracts values

// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:

// alert ( 5 % 2 ); // 1, a remainder of 5 divided by 2;

// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3;

// Exponentiation**
 // The exponentiation operator a ** b raises a to the power of b.

// In school maths, we write that as ab.

// For instance:

// alert ( 2 ** 2 ); // 2² = 4
// alert ( 2 ** 3 ); // 2³ = 8
// alert ( 2 ** 4 ); // 2⁴ = 16

// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// For example, a square root is an exponentiation by ½:

// alert ( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert ( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +
// Let’s meet the features of JavaScript operators that are beyond school arithmetics.

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:

// let s = "my" + "string";
// alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// See, it doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex example:

 // alert( 2 + 2 + '1' ); // "41 and not "221"

//  Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// alert('1' + 2 + 2); // "122 and not "14"

// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

 // alert( 6 - '2' ); // 4, converts '2' to a number 
// alert( '6' / '2' ); // 3, converts both operands to numbers

// ****** left off here on 11/16/2022 *****


// TOP Assignment // Fundamentals Part 1 / Foundations Course 
// Try the following exercises (and don’t forget to use console.log()!):

// Add 2 numbers together! (just type console.log(23 + 97) into your html file)
//  console.log(23 + 97);

//Add a sequence of 6 different numbers together.
// console.log(4 + 5 + 6 + 4 + 5 + 6);

// Print the solution to the following equation: (4 + 6 + 9) / 77
//   console.log((4 + 6 + 9) / 77);
//    Answer should be approximately 0.24675

// Let’s use variables!

// Type this statement at the top of the script tag: let a = 10
// in the console console.log(a) should print 10
// let a = 10;
// console.log(a);

// Try the following in the console: 9 * a
//  console.log(9 * a);
// and this: let b = 7 * a (returns undefined *) and then console.log(b)
//  let b = 7 * a;
//  console.log(b);
// note: * As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line. = Done in the console.

// You should be getting the hang of this by now… try this sequence:

// Declare a constant variable max with the value 57
//  const max = 57;
// Set another variable actual to max - 13
//   let actual = max - 13;
// Set another variable percentage to actual / max
//   let percentage = actual / max;
// If you type percentage in the console and press enter you should see a value like 0.7719
//    typed percentage in the console and I got 0.7719298245614035

// Done!!!!! 11/15/2022 

// JavaScript Variables https://javascript.info/variables

// let admin, name; 
// name = "John";
// admin = name;
// alert( admin );




