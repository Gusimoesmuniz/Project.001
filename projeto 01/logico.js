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
function exe5(){
    var n1= Number(prompt("digite um numero"))
    var resposta= document.getElementById("resposta5")
    if(n1%2==0){
        resposta.innerText=("seu numero é par")
    }else{
        resposta.innerText=("seu numero é impar")
    }
}
function exe6() {
    let pergunta = prompt("Qual seu nome?");

    let p2 = prompt("Você prefere Messi ou Ronaldo?")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let p3 = prompt("Você prefere Real ou Barça?")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let resposta = document.getElementById("resposta6");
    let botao = document.getElementById("bnt6");
    if (p2 == "messi" && p3 == "barca") {
    resposta.innerText = `${pergunta} você é inteligente`;

    botao.innerHTML =
        '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZrqQIrFzwwZ7zPICRF6y7y4Lcmkf8jSB3DMHu0VeAyBuO_kOvlMn3wtQ&s=10" width="90" alt="Ícone">';
} else if (p2 == "" || p3 == "") {
    resposta.innerText = "Tente novamente!";
} else {
    resposta.innerText = `${pergunta} você é imbecil`;
     botao.innerHTML =
        '<img src="https://i.redd.it/ekizj5pwugj71.jpg" width="90" alt="Ícone">';
}
}