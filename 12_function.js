function greet(){
    console.log("안녕 내 이름은 제시카야")
}
greet()

function greet2(name){
    console.log("안녕 내 이름은",name,"(이)야")
}
greet2("마이크")

function return_name(name){
    return name
}
console.log(return_name("마이크"))

function meetAt(year = "", month ="", day = ""){
    // 함수에서 선언한 매개변수는 3개지만, 월, 일만 나타내려할때 2가지 인자만 발생
    //year는 무조건 4자리이기 때문에 첫번째(year)매개변수가 4자리가 안된다면 자동으로 year에 들어온 매개변수를 월로 넘기는 if 문을 만들어줌
    let year_str = year.toString()
    if (year_str.length != 4){
        let month_ = year.toString()
        let day = month.toString()
        result = console.log(month_+"월"+" "+day+"일")
    }else{
        if(month === "" && day === ""){
            result = console.log(year.toString()+"년")
        }else if(day ===""){
            result = console.log(year.toString()+"년"+" "+month.toString()+"월")
        }else {
            result = console.log(year.toString()+"/"+month.toString()+"/"+day.toString())
        }
    return result
    }
}
meetAt(2022)

function findSmallestElement(arr){
    let arr_ = arr
    if (arr_.index === 0){
        console.log(arr_.index)
        result = 0
    }else{
        result = Math.min(...arr_);
    }
    return console.log(result)
}
findSmallestElement([100,0,15,34])

// 최소 지폐와 동전 갯수 구하기
// 딱 떨어지는 숫자가 아닌, 1원단위의 숫자가 들어올수도 있으니 1원까지 추가
let bill_list = [50000,10000,5000,1000,500,100,10,5,1]

function get_least_change(money){
    for(let i = 0; i<bill_list.length; i++){
        let quotient = Math.floor(money/bill_list[i])
        console.log(bill_list[i]," X ", quotient)
        //잔돈 업데이트
        money = money - (bill_list[i]*quotient)
    }
}
get_least_change(1243)