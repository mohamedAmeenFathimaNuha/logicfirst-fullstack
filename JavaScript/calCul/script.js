const operand1=Number(document.getElementById("input").value)
const operand2=Number(document.getElementById("input").value)
const operator=Number(document.getElementById("input").value)
 
let resultdiv=document.createElement('div');
resultdiv.id='result'
document.getElementById('Wrapper').appendChild(resultdiv)

switch(""){
    case '+' :
         resultdiv = operand1 + operand2;
    case '-' :
         resultdiv = operand1 - operand2;
    case '*' :
         resultdiv = operand1 * operand2;
    case '/' :
         resultdiv = operand1 / operand2;
    defult :
      console.log("Enter valid operator")

}
text=`Your elements say ${operand1} ${operator} ${operand2} answer is ${resultdiv}`
document.getElementById('result').innerHTML=text



