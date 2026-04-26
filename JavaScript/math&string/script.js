
        // w3schools.com/js/js_math.asp

        //String:Group of Characters
        let str1="   Strive not to be a Success,   "
        let str2="but rather to be a value"


 /*
Partitioning String
slice(start,end)
substring(start,end)
substr(start,length)
*/
        let str3="Strive not to be a Success,  Strive not to be a Success,,Strive not to be a Success,,,Strive not to be a Success "
/*
str3.replace("Strive","Aim"):'Aim not to be a Success,  Strive not to be a Success,,Strive not to be a Success,,,Strive not to be a Success '
str3.replaceAll("Strive","Aim"):'Aim not to be a Success,  Aim not to be a Success,,Aim not to be a Success,,,Aim not to be a Success '*/

// length= properties...
str1+str2
str2.concat('*',str2)
str2.slice(4,10)
str2.slice(-5)
str2.substr(4,10)
str2.substring(4,10)
str1.replace('Strive','Aim')
str1[1]
str1[10]
str1.charCodeAt
str1.indexOf('e')
str1.search('not')
str1.search('nott')
str1.includes('not')
str1.startsWith('s')




//Template literals
//Introduced in 2015 with ECMAScript6 or ES6
let FirstName="Ramya"
let LastName="Murail"
let city="Chennai"
console.log(FirstName +"  " +LastName +"  " +Lives in +city)

//blocktick
//string interpolation
let msg=`${FirstName} ${lastName} lives ${city} `
console.log(msg)


//multiline string 
/* let mg=' Happy 
   BirthDay '
*/
let mgg=` happy 
birth 
Day `
console.log(mgg)

// single and double quotes in string..
mssg="cat's name is toto"
msssg=` cat's name is "toto" `
console.log(msssg)

//arrays
let num=20;
let name="widhya"

let cities=["Chennai","Madurai","Trichy"]
let marks=[38, 56, 67, 54, 98]

//length - total elements  in the array
console.log(marks,length)

//access 3rd element in array
console.log(cities[3])

//access 2nd element from strat-index starts  with 0.
console.log(cities[1])

//last element
console.log(marks[marks.length])

//last element
console.log(marks[marks.length-1])

//mix of int and string
let arr=[5,6,7,'a','abc']

//array in array
let arrr=[5,6,7,'a',"aaba",[3,4]]
console.log(arrr)
console.log(arrr[5])
console.log(arrr[0][2])
console.log(arrr[6][2])
console.log(arrr[6][1])

//2d array 
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[0])
console.log(matrix[2][1])
console.log(matrix[0][3])

//array methods
let array=['a','b','c','d','e']

//push -add element to the end and returs new length
array.push('f')
console.log(array)

//pop-removes element from the end returned and
//returns removed value
console.log(array.pop())

//shift-removes element from strat of the array
//returns removed value
console.log(array.shift())
console.log(array)

//unshift -adds element to the start of the array
//returns new length
console.log(array.unshift('a'))
console.log(array)

//delete
//delete array[2]
//console.log(array[2])


//splice
//1st parameter -
//2nd parameter-no. of elements to be deleted from starting index
//3rd (or more) parameter -values to be inserted from starting index
array.splice(2,2) //deletes 2 elements starting at index 2
console.log(array)

array.splice(1,1,'m')// replace -deletes element at index 1 and inserts 'm'
console.log(array)

array.splice(1,2,'x','y')//deletes elements at position 1 and 2 and inserts 'x' ,'y'
console.log(array)

//reverse  
array.reverse();
console.log(array)



//join-converts array to string

let str =array.join();
console.log(str)

//split-converts string to array
let str4="g,r,t,e"
let arr3=str4.splict(",")
console.log(arr3)

//concat and spread operator
let firstArr=[1,2,3]
let secondArr=[4,5,6]


let joinedArr=[firstArr,secondArr]
console.log(joinedArr)

joinedArr=firstArr.concat(secondArr)
console.log(joinedArr)

let joined=[...firstArr,...secondArr]
console.log(joined)






