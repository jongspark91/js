console.log(20 + 30) /*50*/
console.log("20" + "30") /*"2030"*/
console.log("Hello" + " "+ 2021) /*"Hello 2021" <- 파이선은 에러 뜨는데 JS는 되네*/
console.log(1+2*3) /*7*/
console.log((1+3)**2) /*16*/
console.log(1/0) /*Infinity* <- Dvisiion by zero 에러가 뜨지 않고 Infinity가 뜸*/
console.log(6%2) /*0*/
console.log(7.5%2) /*1.5*/
console.log(5==5) /*True*/
console.log(5===5) /*True*/
console.log(5=="5") /*False가 나올줄 알았는데 True가 나와서 놀랐다. JS 는 == 와 ===가 있는데 ==는 값이 같나를 확인하고 ===는 데이터 타입까지 확인한다고 한다.*/
console.log(5==="5") /*False*/
console.log(5!=5.0) /*False*/
console.log(5!== 5.0) /*False*/
console.log("true"===true) /*False*/
console.log(5<=5.0) /*True*/
console.log(5>=5) /*True*/
console.log(true||true) /*True*/
console.log(true||false) /*True*/
console.log(true&&true) /*True*/
console.log(true&&false) /*false*/
console.log(!true) /*false*/
console.log(!false) /*true*/