// 1, 2, 3, 4
function alertFromInput() {
    let inputSearchArea = document.getElementById('inputSearch').value;
    if (inputSearchArea === 'google') {
        alert('Яндекс круче, но это не точно')
    } else {
        alert(inputSearchArea);
    }
}
document.getElementById('inputButt').addEventListener('click', alertFromInput);


//  5
var arrayMayar = [
    {name: 'Gendalf', age: 100500},
    {name: 'Saruman', age: 100002},
    {name: 'Radagast', age: 122312}
];
function alertFromInputTwo() {
    let m = arrayMayar[0]["name"];
    let inputSearchAreaTwo = document.getElementById('inputSearchTwo').value;
    if (inputSearchAreaTwo === 'google') {
        alert('Яндекс круче, но это не точно' + ' ' +m)
    } else {
        alert(inputSearchAreaTwo + ' ' +m);
    }
}
document.getElementById('inputButtTwo').addEventListener('click', alertFromInputTwo);


//6
function superSum() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    let sum = Number(inputA) + Number(inputB);
    alert(sum);
}
document.getElementById('inputButtThree').addEventListener('click', superSum);


//7,9,10
findMax = () => {
    let getNum = document.getElementById('inputArray').value;
    let newNumArray = getNum.split(',');
    let convertToNum = newNumArray.map(function(item) {
        return +item;
    });
    let bValue = convertToNum[0];
    for (let i = 0, len = convertToNum.length; i < len; i++) {
            if (convertToNum[i] > bValue) {
                bValue = convertToNum[i];
            }
    }
    alert(bValue);
};

showResultFindMax = () => {
    setTimeout(function () {
        findMax();
    }, 3 * 1000);

};

findMin = () => {
    let getNum = document.getElementById('inputArray').value;
    let newNumArray = getNum.split(',');
    let convertToNum = newNumArray.map(function(item) {
        return +item;
    });
    let mValue = convertToNum[0];
    for (let i = 0, len = convertToNum.length; i < len; i++) {
            if (convertToNum[i] < mValue) {
                mValue = convertToNum[i];
            }
    }
    alert(mValue);
};

showResultFindMin = () => {
    setTimeout(function () {
        findMin();
    }, 3 * 1000);

};
document.getElementById('iB').addEventListener('click', showResultFindMax);
document.getElementById('iC').addEventListener('click', showResultFindMin);


//8
let divA = document.createElement('input');
let divB = document.createElement('input');

function revers() {
    let a = document.getElementById('inA').value;
    let b = document.getElementById('inB').value;
    let c = b;
    b = a;
    a = c;
    divA = outputArea_A.cloneNode(true);
    divA.querySelector('p').innerHTML = a;
    outputArea_A.after(divA);
    divB = outputArea_B.cloneNode(true);
    divB.querySelector('p').innerHTML = b;
    outputArea_B.after(divB);
}
document.getElementById('inC').addEventListener('click', revers)