function convert(){
    let celval= Number( document.getElementById("input").value)
let fahrenheit =(celval*1.8)+32
let result=document.getElementById("result")
result.innerHTML = fahrenheit+" Fahrenheit"
}