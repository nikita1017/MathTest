// 1. Дописать функцию getExample() чтобы она выводила рандомные примеры.
// 2. Сделать так, чтобы по нажатию на кнопки выводились разные примеры.
// 3. По нажатию на кнопку проверить - выводить в консоль верно или неверно был дан ответ


let adding = document.getElementById("adding");
let exampleTitle = document.getElementById("exampleTitle");
let timerTitle = document.getElementById("timerTitle")
let scoreTitle = document.getElementById("scoreTitle")
let sign,correct,time,timer;
let okButton = document.getElementById("okButton");
let score = 0;
okButton.disabled = true;
let recordTitle = document.getElementById("recordTitle");
let record = 0

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setTimer(){
    clearInterval(timer)
    okButton.disabled = false;
    time = 60;
    userInput.value = ""
    userInput.select()
    score = 0;
    scoreTitle.innerHTML = "Счет: "+score;
    timer = setInterval(function(){
    time = time-1;
    timerTitle.innerHTML= "Время: "+time
    if (time == 0) {
        clearInterval(timer)
        okButton.disabled = true;
        if (score > record) {
            record = score
            recordTitle.innerHTML= "Рекорд: "+record
        }
        
    }
    },1000);
    

}

function getExample(){
    let firstNumber = getRandom(100,200);
    let secondNumber = getRandom(1,100);
    let example = firstNumber + sign + secondNumber;
    correct = eval(example);
    exampleTitle.innerHTML = example 
}

adding.onclick = function (event) {
    event.preventDefault();
sign = "+";
getExample()
setTimer()
}
subtracting.onclick = function (event) {
    event.preventDefault();
    sign = "-";
    getExample()
    setTimer()
}
dividing.onclick = function (event) {
    event.preventDefault();
    sign = "/";
    getExample()
    setTimer()
}
multiplying.onclick = function (event) {
    event.preventDefault();
    sign = "*";
    getExample()
    setTimer()
}
okButton.onclick = function (event) {

    event.preventDefault();
    if (correct == userInput.value) {
        console.log("Yes");
        score = score +1;
        scoreTitle.innerHTML = "Счет: "+score;
        
        
    }
    else {
        console.log("No");
    }   
    getExample();
    userInput.value = ""
    userInput.select()
}
// recordTitle {
//     if (correct == userInput.value) {
//         console.log("Yes");
//         recordTitle = +1
//     }
// }
