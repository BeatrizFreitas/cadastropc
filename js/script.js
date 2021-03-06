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
            selecionado: '', //recebe o que foi selecionado no select de capacidade de memória
            hdQuantidadeInput: '',
            hdCapacidadeInput: '',
            processadorMarcaInput: '',
            processadorVelocidadeInput: ''
        }
    },
    created: function() {
        //initialize do materialize
        $(".button-collapse").sideNav();
        $('.collapsible').collapsible();
        $('select').material_select();
    },
    methods: {
        cadastraComputador: function() {
            //o obj recebe os dados inputados no form
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
                ProcessadorVelocidade : this.processadorVelocidadeInput,
            }

            //verifica se há cadastro no local storage
            //caso não haja, insere o objeto com os dados em um array
            //e os armazena no local storage
            if (localStorage.getItem("cadastroVue") === null) {
                var arrayDeCadastro = [ obj ];
                localStorage.setItem("cadastroVue", JSON.stringify(arrayDeCadastro)); 
            } 
            else
            {
                //caso haja cadastro, atribui a arrayDeCadastro o que foi armazenado
                var arrayDeCadastro = JSON.parse(localStorage.getItem("cadastroVue"));
                var qtdDeCadastros = arrayDeCadastro.length;
                var cadastrado = "0";
                
                //verifica se o computador com o nome inputado já foi cadastrado anteriormente
                //caso tenha sido, não armazena novamente
                for (var i=0 ; i<qtdDeCadastros ; i++){
                    if (this.nomeInput === arrayDeCadastro[i].Nome) {
                        alert("Computador já cadastrado");
                        var cadastrado = "1";
                        event.preventDefault();
                    }
                }
                
                //caso não exista computador com esse nome, insere no array com push
                //e faz o setItem novamente para sobrescrever no local storage
                if (cadastrado === "0") {
                    arrayDeCadastro.push(obj);
                    localStorage.setItem("cadastroVue",JSON.stringify(arrayDeCadastro));
                }

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