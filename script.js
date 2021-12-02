function random(min, max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}

let maxNum = +prompt('Введите наибольшее число');

let minNum = +prompt('Введите наименьшее число');

// let randomNum1 = random(maxNum, minNum);
// let randomNum2 = random(maxNum, minNum);






for (let i = 1; i <= 10; i++) {
    let randomNum1 = random(maxNum, minNum);
    let randomNum2 = random(maxNum, minNum);
    let num = +prompt(randomNum1 + ' + ' + randomNum2)
    let numResult = randomNum1 + randomNum2
    if (num === numResult) {
        console.log(num + ' You are doing fine! ');
    } else if (num != numResult) {
        console.log(num + ' is wrong answer = ' + ' Right answer is = ' + numResult);
    }
}



