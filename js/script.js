const empresas = [];

const form = document.getElementById("form-empresa");
const lista = document.getElementById("div-lista-empresas");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("empresa").value;
    const quantidade = Number(document.getElementById("quantidade").value);

    const valorReceber = quantidade * 220;

    let percentual = 0;

    if(quantidade <= 1000){
        percentual = 0;
    }else if(quantidade <= 10000){
        percentual = 0.08;
    }else if(quantidade <= 15000){
        percentual = 0.10;
    }else if(quantidade <= 25000){
        percentual = 0.15;
    }else{
        percentual = 0.20;
    }

    const premio = valorReceber * percentual;
    const valorFinal = valorReceber + premio;

    empresas.push({
        nome,
        quantidade,
        valorReceber,
        premio,
        valorFinal
    });

    mostrarEmpresas();

    form.reset();

});