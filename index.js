function contador() {
    let inicio = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let resposta = document.getElementById("resposta");

    // Condição para seguir processo ou apresentar janela de erro
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert(`[ERRO] faltam dados`);
        resposta.innerHTML = 'Impossível contar \u{1F615}';
    } else {
        resposta.innerHTML = "Contando: <br>";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
    
        if (i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1F449} `;
            }
        }
        resposta.innerHTML += '\u{1F3C1}';
    }
}