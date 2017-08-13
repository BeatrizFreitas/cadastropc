function cadastraComputador() {
    var nome = document.querySelector('#nome_pc').value;
    var placaMaeMarca = document.querySelector('#placamae_marca').value;
    var placaMaeModelo = document.querySelector('#placamae_modelo').value;
    var fonteMarca = document.querySelector('#fonte_marca').value;
    var fonteModelo = document.querySelector('#fonte_modelo').value;
    var memoriaQuantidade = document.querySelector('#memoria_quantidade').value;

    var tagDaMemoriaCapacidade = document.querySelector('#memoria_capacidade'); //recebe o array de opções
    var indexSelecionadoDaMemoria = tagDaMemoriaCapacidade.selectedIndex; //recebe o index selecionado
    var memoriaCapacidade = tagDaMemoriaCapacidade[indexSelecionadoDaMemoria].text //recebe o texto da opção selecionada
    
    var hdQuantidade = document.querySelector('#hd_quantidade').value;
    var hdCapacidade = document.querySelector('#hd_capacidade').value;
    var processadorMarca = document.querySelector('#marca_processador').value;
    var processadorVelocidade = document.querySelector('#velocidade_processador').value;
    
    var objetoDeCadastro = {
        Nome: nome,
        PlacaMaeMarca: placaMaeMarca,
        PlacaMaeModelo: placaMaeModelo,
        FonteMarca: fonteMarca,
        FonteModelo: fonteModelo,
        MemoriaCapacidade: memoriaCapacidade,
        HdQuantidade: hdQuantidade,
        HdCapacidade: hdCapacidade,
        ProcessadorMarca: processadorMarca,
        ProcessadorVelocidade: processadorVelocidade,
    }

    if(localStorage.getItem("Cadastro") === null) {
        var objetoConvertidoParaString = JSON.stringify(objetoDeCadastro);
        var arrayParaCadastroNoLocalStorage = [objetoConvertidoParaString];
        localStorage.setItem("Cadastro",arrayParaCadastroNoLocalStorage);
    }



    
}