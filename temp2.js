let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
    
      let num = Math.floor(money / unit[i])
      console.log(unit[i]+"X"+num)
      money = money - (unit[i]*num)
    
  }
}

changeCalculate(12300)