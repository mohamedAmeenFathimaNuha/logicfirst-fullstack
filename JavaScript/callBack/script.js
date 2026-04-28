//callback - Function passed as argument


function greetConsole(name){
    console.log('hello',name);
}

function greetHeading(name){
    const heading=document.querySelector('h1');
    heading.innerHTML='hello'+name
}

function greet(callBack){
    console.log(callBack);
    callBack('Ram')
}

greet(greetConsole)
greet(greetHeading)

 greet( name => {
    const heading=document.querySelector('h1');
    heading.innerHTML='HEllO'+name
    
})

arr=['deepa','suaresh','ramya']
arr.forEach(print)

function print(val){
    console.log(val.toUpperCase())
}

arr.forEach(val => console.log(val.toUpperCase()))

arr.forEach((val,index,arr) =>{
    arr[index]=val.toUpperCase()
})
console.log(arr)

arr=['ECE','IT','CSC','EEE']

arr.forEach( val => {
    const opt =document.createElement('option')
    opt.textContent=val
    opt.val=val
    document.getElementById('branch').appendChild(opt)
});