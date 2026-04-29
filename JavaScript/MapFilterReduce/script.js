// MAP - converts each value
let priceUSD = [20, 35, 13];

let priceINR = priceUSD.map(x => x * 83);
console.log(priceINR);

// using function
function convert(val) {
    return val * 83;
}
priceINR = priceUSD.map(convert);
console.log(priceINR);


// FILTER - values less than 100
let cost = [35, 234, 12, 34, 54, 123];

let lessThan100 = cost.filter(x => x < 100);
console.log(lessThan100);


// REDUCE - total sum
let cartTotal = cost.reduce((total, el) => total + el, 0);
console.log(cartTotal);


// 2D array count
let arr2d = [
    ["a", "b", "c"],
    ["c", "e", "f"],
    ["d", "f", "i"]
];

let count = arr2d.flat().reduce((acc, currVal) => {
    if (acc[currVal]) {
        acc[currVal]++;
    } else {
        acc[currVal] = 1;
    }
    return acc;
}, {});

console.log(count);


// REMOVE DUPLICATES
let arrr = [4,5,3,4,5,3,2,4,5,6,7,8,9,5,9,5,1,8,0,3];

let removeDuplicate = arrr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(removeDuplicate);

let array=[1,-3,4,5,-6,-7,8,3,6];

let positiveNumber = array.filter((value) => {
    return value>0
});

console.log(positiveNumber);

//Sum of positive numbers only
let sum = array
  .filter(value => value > 0)
  .reduce((acc, val) => acc + val, 0);

console.log(sum); 

//Abbreviation (First letters only)
let name = "Robert Andrew George";

let result = name
  .split(" ")
  .map(word => word[0])
  .join("");

console.log(result); 
