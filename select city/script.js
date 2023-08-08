const button=document.querySelector('button')
//event listener
button.addEventListener('click',displayCity)

function displayCity(){
const input = document.getElementById("input")
const city =input.options[input.selectedIndex].value 
let population = 0,religion = '',liferate=0
switch(city){
    case 'chennai':
        population = 63572
religion='hindu'
liferate=80
break
case 'pattur':
    population = 64572
religion='muslim'
liferate=85
break
case 'avadi':population = 34672
religion='christ'
liferate=70
break
case 'pamal':population = 35572
religion='budha'
liferate=75
}
let text = `the tamilnadu state of ${city} has a population of ${population} and the religion is ${religion} and liferate is ${liferate}` 
document.getElementById('result').innerHTML=text


} 