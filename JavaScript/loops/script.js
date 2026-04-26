//loops
//  console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')


// for,while
// mostly loos  counter Want

for(let i=1;i<=5;i++){
    console.log('hello')
}

let i
for(let i=1;i<=5;i++){
    console.log(i)
}

console.log('outside loop ', i)
console.log(i)
console.log(i)

//print 10 to 1
console.log('For Loop')
for(i=10;i>=1;i--){
    console.log(i)
}
console.log(i)



console.log('While Loop')
// inizilazation
i=10
// inside brackect condition only
while(i>=1){
  console.log(i)
  i--;
}
//i=0
console.log('outside loop ', i)


console.log('doWhile Loop')
i=10
do{
    console.log(i)
    i--;
}while(i>=1)
console.log('outside loop ', i)

// differ between do and do-while
// console.log('While Loop')
// // inizilazation
// i=0
// // inside brackect condition only
// while(i>=1){
//   console.log(i)
//   i--;
// }
// //i=0
// console.log('outside loop ', i)


// console.log('doWhile Loop')
// i=0
// do{
//     console.log(i)
//     i--;
// }while(i>=1)
// console.log('outside loop ', i)


//break-stops the loop
while(true){
    let num=Number(prompt('enter a number'))
    if(!isNaN(num))
        break;
}

console.log('continue demo')
//continue -skips the current iteration
for(i=1;i<=10;i++){
    if(i%3==0)
        continue
    console.log(i)
}

console.log('continue demo')
//continue -skips the current iteration
for(i=1;i<=10;i++){
    if(i%3==0) 
    console.log(i)
continue;
}



//for ...of
let arr=['apple','orange','grapes','mango']
for(i=0;i<arr.length;i++)
  console.log(arr)
  console.log(arr[i].toUpperCase())

//   specal array..
  for(let fruit of arr)
    console.log(fruit)


//   for in
item ={
    name:"phonnni",
    age:25,
    quantity:1,
    price:250000
}
  for  (let key in item )
    console.log(item)
    console.log(item[key])
    console.log(key)