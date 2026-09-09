function exe1() {
    let nac = prompt("Sua nacionalidade");
    nac = nac.toLowerCase();
    let resposta = document.getElementById("resposta1");
    if (nac == "brasileiro") {
        resposta.innerText = "Você é brasileiro!";
    } else {
        resposta.innerText = "Você não é brasileiro!";
    }
}
function exe2 (){
    let n1= Number(prompt("Digite sua nota av1"))
    let n2= Number(prompt("Digite sua nota av2"))
    let n3= Number(prompt("Digite sua nota av3"))
    let n4= Number(prompt("Digite sua nota av4"))
    const media = (n1+n2+n3+n4)/4
    let resposta = document.getElementById("resposta2")
    if (media >= 7){
        resposta.innerText=`Você foi Aprovado!!!!!!!!!!!!!! (${media})`
    } else if(media<=6,9){
        resposta.innerText = `Vocé esta de recuperação (${media})`
    }
    else if(media<=5){
        resposta.innerText=`Vocé está Reprovado!!!!!!!!! (${media})`
    }
}
function exe3(){
let name = prompt("Qual seu nome?")
let idade = Number(prompt("Qual a sua idade?"))

let resposta = document.getElementById("resposta3")

if (idade >= 50) {

    resposta.innerText = `${name}, você é um Idoso ${idade}`

} else if (idade >= 24) {

    resposta.innerText = `${name}, você é um Adulto ${idade}`

} else if (idade >= 18) {

    resposta.innerText = `${name}, você é um jovem ${idade}`

} else if (idade >= 12) {

    resposta.innerText = `${name}, você é uma Criança ${idade}`

}
}
function exe4(){
    
}