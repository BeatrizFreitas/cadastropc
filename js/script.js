new Vue({
    el: '#formulario',
    data() {
        return {
            nomeInput:'',
            placaMaeMarcaInput: '', 
            placaMaeModeloInput: '',
            fonteMarcaInput: '',
            fonteModeloInput: '',
            memoriaQuantidadeInput: '',
            memoriaCapacidadeInput: [
                {value: "250 Mb", text:"250 Mb"},
                {value: "500 Mb", text:"500 Mb"},
                {value: "1 Gb", text:"1 Gb"},
                {value: "2 Gb", text:"2 Gb"},
                {value: "4 Gb", text:"4 Gb"},
                {value: "8 Gb", text:"8 Gb"},
            ],
            selecionado: '',
            hdQuantidadeInput: '',
            hdCapacidadeInput: '',
            processadorMarcaInput: '',
            processadorVelocidadeInput: ''
        }
    },
    methods: {
        cadastraComputador: function() {
            obj = {
                Nome : this.nomeInput,
                PlacaMaeMarca : this.placaMaeMarcaInput, 
                PlacaMaeModelo : this.placaMaeModeloInput,
                FonteMarca : this.fonteMarcaInput,
                FonteModelo : this.fonteModeloInput,
                MemoriaQuantidade : this.memoriaQuantidadeInput,
                MemoriaCapacidade : this.selecionado,
                HdQuantidade : this.hdQuantidadeInput,
                HdCapacidade : this.hdCapacidadeInput,
                ProcessadorMarca : this.processadorMarcaInput,
                PorcessadorVelocidade : this.processadorVelocidadeInput,
            }
            if (localStorage.getItem("cadastroVue") === null) {
                var arrayDeCadastro = [ obj ];
                localStorage.setItem("cadastroVue", JSON.stringify(arrayDeCadastro)); 
                } else {
                    var arrayDeCadastro = JSON.parse(localStorage.getItem("cadastroVue"));
                    arrayDeCadastro.push(obj);
                    localStorage.setItem("cadastroVue",JSON.stringify(arrayDeCadastro));
                }
        }
    }
})





/*
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
        MemoriaQuantidade: memoriaCapacidade,
        MemoriaCapacidade: memoriaCapacidade,
        HdQuantidade: hdQuantidade,
        HdCapacidade: hdCapacidade,
        ProcessadorMarca: processadorMarca,
        ProcessadorVelocidade: processadorVelocidade,
    }

    if(localStorage.getItem("Cadastro") === null) {
        var arrayDeObjetosCadatrados = [objetoDeCadastro];
        localStorage.setItem("Cadastro",JSON.stringify(arrayDeObjetosCadatrados));
    } else {
        var arrayDeObjetosCadatrados = JSON.parse(localStorage.getItem("Cadastro"));
        arrayDeObjetosCadatrados.push(objetoDeCadastro);
        localStorage.setItem("Cadastro",JSON.stringify(arrayDeObjetosCadatrados));

    }   
}*/