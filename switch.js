menu = 2;

switch (menu){
    case 1:
        console.log("사기")
        break;
    case 2:
        console.log("확인")
        break;
    case 3:
        console.log("히스토리")
        break;
    default:
        console.log("홈으로")
}

let answer = menu < 3? "3보다 작습니다" : "3보다 큽니다"

console.log(answer)