let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para o sorteio.");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let nome = amigos[i];
        let possiveis = sorteio.filter(n => n !== nome);
        
        if (possiveis.length === 0) {
            alert("Não foi possível sortear sem repetir. Tente novamente.");
            return;
        }
        
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado.push(`O amigo secreto de ${nome} é: ${sorteado}`);
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}
