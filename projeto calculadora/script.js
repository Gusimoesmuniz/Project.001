function calcular(){
    let nome = document.getElementById(`nome`).value
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)
    let alturametros= altura/100

    let imc = peso/(alturametros*alturametros)

    let imcforma= imc.toFixed(2)
    let resultado = document.getElementById("resultado")
    resultado.innerText = `Olá, ${nome}! Seu IMC é ${imcforma}`
}