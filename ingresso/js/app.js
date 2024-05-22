function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    
    if(tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
    
}

function comprarPista(quantidadeIngresso){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidadeIngresso > qtdPista) {
        alert('Quantidade indisponivel para tipo pista!')
    } else {
        qtdPista = qtdPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(quantidadeIngresso){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidadeIngresso > qtdSuperior) {
        alert('Quantidade indisponivel para tipo cadeira superior!')
    } else {
        qtdSuperior = qtdSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!')
    }
}

function comprarInferior(quantidadeIngresso){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidadeIngresso > qtdInferior) {
        alert('Quantidade indisponivel para tipo cadeira inferior!')
    } else {
        qtdInferior = qtdInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!')
    }
}












//let pista = document.getElementById('qtd-pista');
    //pista.innerHTML = pista.innerHTML - quantidadeIngresso;

    //let cadeiraSuperior = document.getElementById('qtd-superior');
    //cadeiraSuperior.innerHTML = cadeiraSuperior.innerHTML - quantidadeIngresso;

    //let cadeiraInferior = document.getElementById('qtd-inferior');
    //cadeiraInferior.innerHTML = cadeiraInferior.innerHTML - quantidadeIngresso;
