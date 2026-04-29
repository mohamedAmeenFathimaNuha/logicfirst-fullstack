/*returning functions - higher order function
lexical scoping - inner scope can access parent scope variables

A closure is the combination of a 
function bundled together (enclosed) 
with references to its surrounding state 
(the lexical environment). 
In other words, a closure gives you 
access to an outer function's scope from
an inner function.let a=10
*/
function func1(){
   console.log('a is ',a)
}
func1()
a=200
func2()

function outer(){
    let outerVariable='Bread'
    function inner(){
        let innervariable='Butter'
             console.log('inner variable',innerVariable)
             console.log('outer variable',outerVariable)
             console.log('a is ',a)
             console.log('hello',name)
    }
     inner();
}
outer();
//inner(); can't call

function outer1(){
    let outerVariable='Bread'
    function inner(){
        let innervariable='Butter'
             console.log('inner variable',innerVariable)
             console.log('outer variable',outerVariable)
             console.log('a is ',a)
             console.log('hello',name)
    }
    return inner
}
let call1=outer1()
call1()

function outer3(name){
    let outerVariable='Bread'
    function inner(){
        let innervariable='Butter'
             console.log('inner variable',innerVariable)
             console.log('outer variable',outerVariable)
             console.log('a is ',a)
             console.log('hello',name)
    }
    return inner
}

let call2=outer3('see')
let call3=outer3('john')
call3()
call2()