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

//7

