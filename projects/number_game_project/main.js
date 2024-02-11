// 사이트 접속시 1~100의 랜덤한 숫자 부여
// 사용자가 1~100의 숫자 입력 후 Go 클릭
// 숫자가 랜덤숫자보다 크면: Down!!, chance 차감
// 숫자가 랜덤숫자보다 작으면: Up!!, chance 차감
// 숫자가 맞으면: Correct
// 숫자가 1~100범위가 넘어가면: 1~100사이의 범위를 입력해주세요, chance 미차감
// Chance 숫자가 <1 되면: 실패! 마셔라 마셔라! go버튼 disabled
// 리셋버튼 클릭시 랜덤숫자와 chance 초기화

let randomNum = 0
let resultArea = document.getElementById("result-area")
let userValue = document.getElementById("user-value")
let playButton = document.getElementById("play-button")
playButton.addEventListener("click", play)

function generateRandomNum(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log(randomNum)
}
generateRandomNum()

function play(){
    let userInput = userValue.value;
    console.log(userInput)
    if(userInput < randomNum){
        console.log("up")
        resultArea.textContent = "Up!!"
    }else if(userInput > randomNum){
        console.log("down")
        resultArea.textContent = "Down!!"
    }else{
        resultArea.textContent = "Correct!!"
    }
}