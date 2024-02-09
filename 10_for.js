for (let i = 1, j = 0; i<=100;i++){
    console.log(j+i)
}

//369게임
for(let i = 1; i<=50; i++){
    if(i.toString().includes("3")){
        console.log("짝")
    }else if(i.toString().includes("6")){
        console.log("짝")
    }else if(i.toString().includes("9")){
        console.log("짝")
    }else{
        console.log(i)
    }
}


for(let i =1; i<=50; i++){
    //33, 66, 99 와 같은 숫자는 박수를 두번 쳐야함
    let claps = ""
    for(j=0; j<=i.length; j++){
        if(i.toString()[j]=== "3" || i.toString()[j]=== "6" || i.toString()[j] === "9"){
            claps = claps + "짝"
            console.log(claps)
        }else{console.log(i)}
    }
}
//소수 판독 프로그램
let checker = 0;
for(let i = 20, j = 2; j<i; j++ ){
    if(i%j==0){
        checker = 1
    }else{}
}
if(checker == 1){
    console.log("소수가 아닙니다")
}else{
    console.log("소수입니다")
}