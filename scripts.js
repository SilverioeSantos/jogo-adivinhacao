//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) 

// Funções
// Função callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")


        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
    } 

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert(`Observação: Coloque apenas números de 0 a 10.`)
    }

    inputNumber.value = ""
    xAttempts++;
}

function handleResetClick(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10);
}