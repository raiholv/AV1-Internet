
function addNum(inputNum) {
    let inputMult = document.getElementById('multiplicador');
    let currValue = String(inputMult.value);
    let newValue = currValue + String(inputNum);
    inputMult.value = Number(newValue);
}

function calcular() {
    let inputMult = document.getElementById('multiplicador');
    let resultEl = document.getElementById('resultado');
    let currValue = inputMult.value;
    let total = Number(currValue) * 8;
    resultEl.innerHTML = String(total);
}

function apagar() {
    let apagar = document.getElementById('multiplicador')
    let currValue = String(apagar.value);
    let final = currValue.substring(0,currValue.length-1)
    apagar.value = Number(final)

}