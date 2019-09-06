//Função (function) e Arrow function (=>) no javascript

//Função (function)
const calculo = function(valor){
    return valor * 3;
}
console.log(calculo(4));

//Arrow function
const calculo2 = (valor) => valor * 3;
console.log(calculo2(5));

//exemplo function
const oldWay1 = function(nome, apelido) {
    // `` server pra colocar uma string com uma expressão javascript
    return `Meu nome é ${apelido}, ${nome}`;
}
console.log(oldWay1('James Bond', 'Bond'));


//arrow function
const oldWay2 = (nome, apelido) => `Meu nome é ${apelido}, ${nome}`;
console.log(oldWay2('James Bond', 'Bond'));

//definição de um OBJETO
//criando função sem arrow function
//objeto
const sandwich = {
    //atributos
    bread: 'integral',
    cheese: 'white',
    //metodos
    prepare: function() {
        return `Eu quero um sandwich com farinha ${this.bread} e queijo ${this.cheese}`;
    },
    make: function() {
        const that = this;
        setTimeout(function(){
            console.log(that.prepare());
        }, 1000);
    }
}
sandwich.make();


//criando função com arrow function
//objeto
const sandwich2 = {
    //atributos
    bread: 'integral',
    cheese: 'white',
    //metodos
    prepare()  {
        return `Eu quero um sandwich com farinha ${this.bread} e queijo ${this.cheese}`;
    },
    make: function() {
        setTimeout( () => console.log(this.prepare()), 1000);
    }
}
sandwich2.make();


//Array
const exemplo01 = [1, 2, 3, 4, 5];
// metodo map faz o papel de um Laço, para percorrer todo o vetor(poderia usar um For, mas é mais trabalho)
// item * 2 faz com que multiplique todos os números dentro do Array
const calcArray01 = exemplo01.map((item) => item * 2);
console.log(calcArray01);

const exemplo02 = ['Joao', 'Maria', 'Ana', 'Jose', 'Antonio'];
// metodo map faz o papel de um Laço, para percorrer todo o vetor(poderia usar um For, mas é mais trabalho)
// item.length serve para contar a quantidade de letras da string (No caso string de Array)
const calcArray02 = exemplo02.map((item) => item.length);
console.log(calcArray02);


//Diferença entre VAR, LET, CONST
var exibeMsg = function(){
    var msgForaDoIF = 'varJavascript';
    if(msgForaDoIF == 'varJavascript'){
        let msgDentroDoIF = 'letJavascript';
        console.log(msgDentroDoIF);
        console.log(msgForaDoIF)
    }
    //console.log(msgDentroDoIF);
    console.log(msgForaDoIF)
}

//Qual a saída acima?
console.log(exibeMsg());