const btn=document.getElementById('btn')
const colorText=document.getElementById('color')
const wrap=document.getElementById('wrap')
const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
colourHex="#"
for(i=1;i<=6;i++){
    colourHex+=randHexValue()
}wrap.style.backgroundColor=colourHex
colorText.innerHTML=colourHex
}
)

 
function randHexValue(){
    let randomValue = Math.floor(Math.random()*16)

    return hex[randomValue]
   
}