let number=document.getElementsByClassName('number')
let display=document.getElementById('display')
let equal=document.getElementById('equal')
let ac=document.getElementById('ac')
let del=document.getElementById('del')
let decimal=document.getElementById('decimal')
console.log('over')
let waitingForSecondNumber = false;
let secondNumber=null;
Array.from(number).forEach(function(button){
    button.addEventListener('click',function(){
        if (waitingForSecondNumber){
            display.textContent=button.textContent
            waitingForSecondNumber=false
        }
        else if (display.textContent==='00'||display.textContent==='0'){
            display.textContent=button.textContent
        }
        else{
        display.textContent+=button.textContent
        }
        
    })
})
del.addEventListener('click',function(){
    console.log('del pressed')
    if (display.textContent.length==1){
        display.textContent='00'
    }
    else{
        display.textContent=display.textContent.slice(0,-1)
    }
})
let firstNumber=null
let operator = null;
let operators=document.getElementsByClassName('function')
Array.from(operators).forEach(function(button){
    button.addEventListener('click',function(){
        operator=button.textContent
        firstNumber=display.textContent;
        waitingForSecondNumber=true;
    })
})

equal.addEventListener('click',function(){
    secondNumber=display.textContent;
    if (operator==='+'){
        display.textContent=parseFloat(firstNumber)+parseFloat(secondNumber)
    }
    if (operator==='-'){
        display.textContent=parseFloat(firstNumber)-parseFloat(secondNumber)
    }
     if (operator==='*'){
        display.textContent=parseFloat(firstNumber)*parseFloat(secondNumber)
    }
     if (operator==='/'){
        display.textContent=parseFloat(firstNumber)/parseFloat(secondNumber)
    }
})
ac.addEventListener('click',function(){
    display.textContent='00'
    firstNumber=null
    secondNumber=null
    waitingForSecondNumber=false
    operator=null
})

decimal.addEventListener('click',function(){
    if (waitingForSecondNumber) {
        // Start fresh with "0."
        display.textContent = '0.' // What should it be?
        waitingForSecondNumber = false  // Reset flag
    }
    else if (!display.textContent.includes('.')) {
        // Add decimal to existing number
        display.textContent += '.'
    }
})