//function specific task can be called multiple times optionally takes input as parameters and optionally returns  value

//function declaration
function isPositive(num){//parameter
    return num>0;

}
console.log(isPositive(-1));

function sayHello(){
     console.log("hello");
}
sayHello();

// console.log
function findProduct(a,b){
    return a*b;
}

console.log(findProduct)
console.log(findProduct(3,4))
console.log(typeof findProduct)

//defult paramter
function greet(name="Chmii"){
    console.log("Hi",name);
}

greet('Ram');
greet();
greet('rrraaa');

//recursion-factor calling itself
//functinal-product of 1st n number
//5!=5*4*3*2*1

function factorial(n){
    if(n==1)
        return 1
    else 
        return n * factorial (n-1)
}
console.log(factorial(5));


// function expression  another way to write function
// assigned to value as a Object
let a=100
// console.log(isEvent(2))//not work in this type of function delaration

let isEven=function(num){
    return num%2==0
}
console.log(isEven(3))
console.log(isEven)

let arr=[2,3,4,5.6];
// let findSum=function(array){
//     let sum=0;
//     for (let val of array){
//            sum+=val;
//     }
//     return sum;
// }
// console.log(findSum(arr))

// let volume=function(l,b,h){
//     return l*b*h;
// }

//arrow function
let volume=(l,b,h) => {
    // one definition have only one lin so no need return and paranthesis
    return l*b*h;
}
console.log(volume(2,3,4))


let volume1=(l,b,h) => l*b*h;
console.log(volume1(2,3,5))

//input have one then no need paranthesis and if input have 0 put empty  paranthesis
let findSum= array =>{
    let sum=0;
    for (let val of array){
           sum+=val;
    }
    return sum;
}
console.log(findSum(arr))

//area of circle
let areaCircle = rad =>  Math.PI * rad * rad;
console.log(areaCircle(5))

//variable argumnents -reeeeest parameter more than one paramters nirreyye...
let prod= function(...args){
    // console.log(prod);
    // console.log(args);
let result = 1
    for(let val of args)
        result *=val
    return result
}
console.log(prod(2,3,4));
console.log(prod(2,3,4,5));
console.log(prod(2,3,4.5,6));


//2nd methods
//like behave like internal varaible

let prod2=function(){
    let result=1
    console.log(arguments);
    for (i=0;i<arguments.length;i++)
        result *= arguments[i]
    return result
}
console.log(prod2(7,6,5,4))

//Generators - generates value one by one
function*  indexGenerators(){
    let index = 1
    while (true){
        yield index ++
    }
}

const gen =indexGenerators();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);