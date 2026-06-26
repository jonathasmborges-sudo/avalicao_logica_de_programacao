const empresas = [];

// FUNÇÃO PARA CALCULAR A PREMIAÇÃO
const calcularPremiacao = (quantidade, valorReceber) => {

    let premio = 0;

    if (quantidade <= 1000) {
        premio = 0;
    } else if (quantidade <= 10000) {
        premio = valorReceber * 0.08;
    } else if (quantidade <= 15000) {
        premio = valorReceber * 0.10;
    } else if (quantidade <= 25000) {
        premio = valorReceber * 0.15;
    } else {
        premio = valorReceber * 0.20;
    }

    return premio;
}

// FUNÇÃO PARA FORMATAR VALORES EM REAIS
const formatarMoeda = (valor) => {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

const form = document.getElementById("form-empresa");
const lista = document.getElementById("div-lista-empresas");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("empresa").value;
    const quantidade = Number(document.getElementById("quantidade").value);

    const valorReceber = quantidade * 220;

    const premio = calcularPremiacao(quantidade, valorReceber);

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

function mostrarEmpresas(){

    lista.innerHTML = "";

    for(let empresa of empresas){

        lista.innerHTML += `
            <div class="empresa">

                <p><strong>Empresa:</strong> ${empresa.nome}</p>

                <p><strong>Quantidade:</strong> ${empresa.quantidade} toneladas</p>

                <p><strong>Valor a Receber:</strong> ${formatarMoeda(empresa.valorReceber)}</p>

                <p><strong>Premiação:</strong>
                ${
                    empresa.premio === 0
                    ? "Abaixo da Meta"
                    : formatarMoeda(empresa.premio)
                }</p>

                <p><strong>Valor Final:</strong> ${formatarMoeda(empresa.valorFinal)}</p>

                <hr>

            </div>
        `;
    }

}