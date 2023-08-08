function calculate(){
    const value= document.getElementById('input').value
  
    const expression=/\+|\-|\*|\//
    let val = value.split(expression)
    let exp=value.match(expression)
    const result = document.getElementById('result')
 let op1=+val[0]
 let op2=+val[1]
 let opn=exp[0]
  switch(opn){
     case '+':
     result.innerHTML = op1+op2
  break
  case '-':
     result.innerHTML= op1-op2
  break
  case '*':
     result.innerHTML = op1*op2
  break
  case '/':
     result.innerHTML = op1/op2
  break
  
     } console.log(result)
    
   
     
 }