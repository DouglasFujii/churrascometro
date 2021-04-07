// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja 1200 ml por pessoa + 6 horas - 2000m ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
// Criança vale por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 1000;
    let qtdTotalFrango = (frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas)) / 1000;
    let qtdPaoAlho = Math.ceil((paoPP(duracao) * adultos + (paoPP(duracao) / 2 * criancas)) / 500);
    let qtdTotalCerveja = Math.ceil((cervejaPP(duracao) * adultos) / 355);
    let qtdTotalBebidas = Math.ceil((bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)) / 2000);

    resultado.innerHTML = `<p>Seu churrasco precisará de:</p>`
    resultado.innerHTML += `<p>${qtdTotalCarne}kg de carne</p>`
    resultado.innerHTML += `<p>${qtdTotalFrango}kg de frango`
    resultado.innerHTML += `<p>${qtdPaoAlho} pacotes de Pão de Alho`
    resultado.innerHTML += `<p>${qtdTotalCerveja} latas de cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas} garrafas de 2L de bebidas</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 550;
    } else {
        return 300;
    }

}

function frangoPP(duracao) {
    if (duracao >= 6) {
        return 400;
    } else {
        return 200;
    }
}

function paoPP(duracao) {
    if (duracao >= 6) {
        return 300;
    } else {
        return 200;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }

}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}