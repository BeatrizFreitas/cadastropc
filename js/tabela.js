function criaTabela() {

    var cadastros = JSON.parse(localStorage.getItem('Cadastro'));
    var qtdCadastros = cadastros.length; // retorna tamanho do array de objetos

    var tabela = document.querySelector('tbody');

    for( var i = 0 ; i < qtdCadastros ; i++ ) {
        var linha = tabela.insertRow(i);


        var celulaNome = linha.insertCell(0);
        var celulaMarcaPlacaMae = linha.insertCell(1);
        var celulaModeloPlacaMae = linha.insertCell(2);
        var celulaMarcaFonte = linha.insertCell(3);
        var celulaModeloFonte = linha.insertCell(4);
        var celulaQuantidadeMemoria = linha.insertCell(5);
        var celulaCapacidadeMemoria = linha.insertCell(6);
        var celulaQuantidadeHD = linha.insertCell(7);
        var celulaCapacidadeHD = linha.insertCell(8);
        var celulaMarcaProcessador = linha.insertCell(9);
        var celulaVelocidadeProcessador = linha.insertCell(10);       
        
        celulaNome.innerHTML = cadastros[i].Nome;
        celulaMarcaPlacaMae.innerHTML = cadastros[i].PlacaMaeMarca;
        celulaModeloPlacaMae.innerHTML = cadastros[i].PlacaMaeModelo;
        celulaMarcaFonte.innerHTML = cadastros[i].FonteMarca;
        celulaModeloFonte.innerHTML = cadastros[i].FonteModelo;
        celulaQuantidadeMemoria.innerHTML = cadastros[i].MemoriaQuantidade;
        celulaCapacidadeMemoria.innerHTML = cadastros[i].MemoriaCapacidade;
        celulaQuantidadeHD.innerHTML = cadastros[i].HdQuantidade;
        celulaCapacidadeHD.innerHTML = cadastros[i].HdCapadiade;
        celulaMarcaProcessador.innerHTML = cadastros[i].ProcessadorMarca;
        celulaVelocidadeProcessador.innerHTML = cadastros[i].ProcessadorVelocidade;


    }

}