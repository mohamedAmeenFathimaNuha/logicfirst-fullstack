let arr=[1,1,2,3,4,5,5,5,5,10,8]
let myset1=new Set(arr)
console.log(arr)
console.log(myset1)

let mySet2=new Set()
mySet2.add(4)
mySet2.add(5)
mySet2.add(3)
mySet2.add(2)
mySet2.add('pqr')
mySet2.add({'a':1,'b':2})
mySet2.add(6)  //already irukkurathulle not add 2nd type

console.log(mySet2)
let obj={'a':1,'b':2}
mySet2.add(obj)
console.log(mySet2)

console.log(mySet2.size)
console.log(mySet2.has(6))
console.log(mySet2.delete(4))

let arr2=Array.from(mySet2)
console.log(arr2)
//console.clear



//map
//map objects are collections of key-value pairs
//A key in the map only occur once
//key or value can be