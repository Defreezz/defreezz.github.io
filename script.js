
function alertFromInput() {
    let inputSearchArea = document.getElementById('inputSearch').value;
    if (inputSearchArea === 'google') {
        alert('Яндекс круче, но это не точно')
    } else {
        alert(inputSearchArea);
    }

}
document.getElementById('inputButt').addEventListener('click', alertFromInput);