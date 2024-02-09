let bill_list = [50000,10000,5000,1000,500,100,10,5,1]

function get_least_change(money){
    for(let i = 0; i<bill_list.length; i++){
        let quotient = Math.floor(money/bill_list[i])
        console.log(bill_list[i]," X ", quotient)
        money = money - (bill_list[i]*quotient)
    }
}

get_least_change(1243)