

//0,음수,양수 판독 프로그램
let temp = -1

if(temp == 0){
    console.log("0입니다.")
} else if(temp >= 0){
    console.log("양수입니다.")
} else{
    console.log("음수입니다.")
}

// 레포트 등급 프로그램
let score = 70

if(score >= 90 && score<=100){
    console.log("A")
} else if(score >= 80 && score<=89){
    console.log("B")
} else if(score >= 70 && score<=79){
    console.log("C")
} else if(score >= 60 && score<=69){
    console.log("D")
} else{
    console.log("F")
}

// 인사 프로그램

let skills = ["HTML", "CSS", "Javascript", "React"]

if(skills.includes("Javascript") == true && skills.includes("React") == true){
    console.log("합격!")
} else if(skills.includes("Javascript") == true || skills.includes("React") == true){
    console.log("예비")
} else {
    console.log("탈락")
}