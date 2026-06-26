function mostrarEmpresas(){

    lista.innerHTML = "";

    for(let empresa of empresas){

        lista.innerHTML += `
            <div class="empresa">

                <p><strong>Empresa:</strong> ${empresa.nome}</p>

                <p><strong>Quantidade:</strong> ${empresa.quantidade} toneladas</p>

                <p><strong>Valor a Receber:</strong>
                R$ ${empresa.valorReceber.toFixed(2)}</p>

                <p><strong>Premiação:</strong>
                ${
                    empresa.premio == 0
                    ? "Abaixo da Meta"
                    : "R$ " + empresa.premio.toFixed(2)
                }</p>

                <p><strong>Valor Final:</strong>
                R$ ${empresa.valorFinal.toFixed(2)}</p>

                <hr>

            </div>
        `;
    }

}