//Q1
function vartype(variable)
{
return typeof variable;
}
console.log(vartype(145)); //number
console.log(vartype("walaa"));//string
console.log(vartype(true));//boolean
console.log(vartype());//undefine
 
//Q2
function add(x,y)
{
    return x+y;   //5+8=13
}
function subtract(x,y)
{
    return x-y;  //9-4=5
}

function multiply(x,y)
{
    return x*y; //2*5=10
}  
function divide(x,y)
{
    return x/y;  //20/4=5
}


//Q3
function isValueNaN(value) {
  return Number.isNaN(value);
}

//Q4
function isEven(num)
{
    return num%2==0;
}
console.log(isEven(4));//true
console.log(isEven(7));//false

//Q5

function conCat(str1,str2)
{
    return str1+""+str2;
}
console.log(conCat("Walaa","Magdy")); //WalaaMagdy

//Q6
function toUpperCase(str)
{
    return str.toUpperCase();
}
console.log(toUpperCase("hello"));//HELLO

//Q7

function charAtIndex(str,index)
{
    return str.charAt(index);
}
console.log(charAtIndex("frontend",5));   //e

//Q8
function greet(name)
{
    return `Hello , ${name}!`;
}
console.log(greet("walaa"));

//Q9
function isNullOrUndefined(value) {
	return value === null || value === undefined;
}
console.log(isNullOrUndefined(null)); // true
console.log(isNullOrUndefined(undefined)); // true
console.log(isNullOrUndefined(0));