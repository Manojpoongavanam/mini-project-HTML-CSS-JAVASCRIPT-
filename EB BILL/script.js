function EBrate(){
            

    const unit= Number(document.getElementById("input").value)
    
    if (unit<=50)
    rate= 0.75*unit
    else if(unit >=50 && unit<=150)
    rate=(unit-50)*1+(37.5)
    else if(unit >=151 && unit<=250)
    rate=((unit-150)*1.30)+137.5
    else if(unit>250)
    rate=unit*1.50

    let result=document.querySelector('#result')
    result.innerHTML=`your unit rate is  ${rate}`
}
