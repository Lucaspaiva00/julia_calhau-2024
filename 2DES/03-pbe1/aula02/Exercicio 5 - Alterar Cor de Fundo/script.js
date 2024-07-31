cor1 = document.querySelector('.cor1')
exibeNomeCor = document.querySelector('.nome-cor')
    
function mudarCorDeFundo() { 
    cor1 = getRandomColor();
    novaCor = document.body.style.backgroundColor = cor1;  
    exibeNomeCor.innerText = `Cor Selecionada: ${novaCor}`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}