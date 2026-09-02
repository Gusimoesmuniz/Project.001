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