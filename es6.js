// 1. es6문법을 사용하여 재작성하기
let name = "my fruit store"
let fruits = ["banana", "apple", "mango"]
let address = "Seoul"

let store = {name, fruits, address}
console.log(store)

// 2. es6문법을 이용하여 다음과 같이 출력
console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`)

// 3. Destructoring
function calculate(obj){
    let {a,b,c,} = obj
    return a+b+c
}
calculate({a:1,b:2,c:3})

// 4. 정답이 ture가 나오게 하시오
let name2 = "noona store"
let fruits2 = ["banana", "apple", "mango"]
let address2 = {
    country: "Korea",
    city : "Seoul"
}

function findStore(obj){
    let {name2, address2:{city}} = obj
    return name2="noona store" && city == "Seoul"
}
console.log(findStore({name2,fruits2,address2}))

// 5. 다음과 같이 프린트되게 코드를 바꾸시오

function getNumber(){
    let array = [1,2,3,4,5,6]
    let [first,,third,,forth]=array
    return {first, third, forth}
}
console.log(getNumber())

// 6. 다음의 결과가 true가 되게 하시오

function getCalendar(first, ...rest) {
    return (
      first === "January" &&
      rest[0] === "February" &&
      rest[1] === "March" &&
      rest[2] === undefined
    );
  }
  
  console.log(getCalendar("January","February","March")); // 여기를 바꾸시오
  
// 7. 두 어레이중 최소값을 찾는 함수를 완성하시오
function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min(...a,...b)
}

console.log(getMinimum())

// 8. 다음 함수를 화살표 함수로 바꾸시오
sumNumber = ()=>{
    const sum = (a,b) => a+b
    return sum(40,10)
}
console.log(sumNumber())

// 8. 다음의 함수를 화살표 함수로 바꾸시오
function sumNumber2() {
    //여기를 바꾸시오
   
   let addNumber=(a)=>(b)=> (c)=> a + b + c;
   return addNumber(1)(2)(3);
     
  }
  
  console.log(sumNumber2())