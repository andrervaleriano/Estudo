

function Calculator(){

// inicio do programa

    this.start = function () {
        this.captureClick();
        this.captureEnter(); 
     }

// acessando o display

    this.display = document.querySelector('.display');

//capturando tecla ENTER

     this.captureEnter = function (){
        document.addEventListener('keypress',  (e) => {
            if (e.key !== 'Enter'){
                return;
            } else {
                this.equal();
            }
     })
     }

//capturando o click

    this.captureClick = function (){
        var self = this;
        document.addEventListener('click', function(event){
            const element = event.target;
            if(element.classList.contains('btn-num')){
                self.addNumDisplay(element);
            }
            if(element.classList.contains('btn-delete')){
                self.delete(element);
            }
            if(element.classList.contains('btn-equal')){
                self.equal(element);
            }
            if(element.classList.contains('btn-reset')){
                self.reset(element);
            }
        });
    }
//Sinal de Igual (realizando a operação)
    this.equal = function (element){
        try {
            //utilizando o eval para verificar valores no display e calcular

            const oper = eval(this.display.value)

            //caso o usuario não digite valores validos sera emitido um alert

            if (!oper){
                alert("Conta Invalida, por favor tente novamente!");
                return
            }
            this.display.value = oper; 
        } 
        catch (e) {
            alert("Conta Invalida, por favor tente novamente!");
            return
        }
        
    }

// adicionando o botão de reset, para limpar o display

    this.reset = function (element){
        this.display.value = '';
    }

//adicionando o delete, para limpar numeros individualmente   

    this.delete = function (element){
        this.display.value = this.display.value.slice(0, -1);

    }

// adicionando ao display a tecla dos respectivo numero que esta dentro do codigo html

    this.addNumDisplay = function(element){
        this.display.value += element.innerText;
        /* quando se pressionava ENTER o navegador selecionava o ultimo numero clicado
        então adicionei um focus para sempre focar no display e quando pressionar
        a tecla ENTER a operação sera realizada */
        this.display.focus();

    }

}
//chamando o objeto Calculator
const calculator = new Calculator();
calculator.start();
