function consultarendereco() {
    let cep = document.getElementById('cep').value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    if (cep.length !== 8) {
        alert("CEP Inválido!!");
        return;
    }

    fetch(url).then(function (response) {
        response.json().then(mostrardados)
    })

}

function mostrardados(dados) {
    let resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = `Não foi possível localizar o endereço`
    } else {
        resultado.innerHTML = `
        <p>Endereço: ${dados.localidade}</p>
        <p>Logradouro: ${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Estado: ${dados.estado}</p>
        <p>Região: ${dados.regiao}</p>
        <p>DDD: ${dados.ddd}</p>
        `
    }
}
