new Vue({
    el:'#tabela',
    data() {
        return {
            linhas: '',
            array: '',
        }
    },
    mounted: function() {
        this.linhas = JSON.parse(localStorage.getItem("cadastroVue"));
        $(".button-collapse").sideNav();
    },
    created: function() {
        $('select').material_select();
        // $(".button-collapse").sideNav();
    },
    methods: {
        excluirCadastro: function(nome) {
            var computadoresCadastrados = JSON.parse(localStorage.getItem("cadastroVue"));
            var qtdDeCadastro = computadoresCadastrados.length;

            for (var i=0 ; i<qtdDeCadastro ; i++){
                if (nome === computadoresCadastrados[i].Nome) {
                    var deletarCadastro = computadoresCadastrados.splice(i,1);
                    break;
                }
            }
            this.linhas = computadoresCadastrados;
            localStorage.setItem("cadastroVue",JSON.stringify(computadoresCadastrados));
        },
        editarCadastro: function(cadastro){
            $('#modal1').modal('open');
            this.array = cadastro; // ???
        },
        substituirCadastro: function(){
            var cadastrados = JSON.parse(localStorage.getItem("cadastroVue"));
            var qtdComputadores = cadastrados.length;

            for (var i=0 ; i< qtdComputadores ; i++){
                if (this.array.Nome === cadastrados[i].Nome) {
                    var posicaoDoCadastro = i;
                    break;
                }
            }
            objCadastradoAnteriormente = cadastrados[posicaoDoCadastro];

            cadastrados[posicaoDoCadastro].PlacaMaeMarca = this.array.PlacaMaeMarca; 
            cadastrados[posicaoDoCadastro].PlacaMaeModelo = this.array.PlacaMaeModelo;
            cadastrados[posicaoDoCadastro].FonteMarca= this.array.FonteMarca;
            cadastrados[posicaoDoCadastro].FonteModelo= this.array.FonteModelo;
            cadastrados[posicaoDoCadastro].MemoriaQuantidade= this.array.MemoriaQuantidade;
            cadastrados[posicaoDoCadastro].MemoriaCapacidade= this.array.MemoriaCapacidade;
            cadastrados[posicaoDoCadastro].HdQuantidade= this.array.HdQuantidade;
            cadastrados[posicaoDoCadastro].HdCapacidade= this.array.HdCapacidade;
            cadastrados[posicaoDoCadastro].ProcessadorMarca= this.array.ProcessadorMarca;
            cadastrados[posicaoDoCadastro].ProcessadorVelocidade= this.array.ProcessadorVelocidade;            
        
            
            //this.array = objCadastradoAnteriormente;
            localStorage.setItem("cadastroVue",JSON.stringify(cadastrados));
            //event.preventDefault();
            
        }
    }
})   
        
        
        
        
        
        
        
        
        

        







        
        
        
        // editarCadastro: function(nome) {
        //     var cadastros = JSON.parse(localStorage.getItem("cadastroVue"));
        //     var qtdDeCadastros = cadastros.length;

        //     for( var i = 0 ; i < qtdDeCadastros ; i++) {
        //         if( nome === cadastros[i].Nome) {
        //             alert(cadastros[i].PlacaMaeModelo);
        //             console.log(cadastros[i]);
        //         }
        //     }

        // }   
   




/*
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
*/