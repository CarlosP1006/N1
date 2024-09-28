var arr = []; // Array para armazenar os itens

// Função para adicionar um novo item ao array e atualizar o localStorage
function addItem() {
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoNome = document.getElementById("entrada1").value; // Certifique-se de que o input com id 'entrada1' exista
    arr.push(novoNome);
    document.getElementById("entrada1").value = "";
    localStorage.meuArr = JSON.stringify(arr);
}

// Função para mostrar os itens na tabela
function showItems() {
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

    const tableBody = document.getElementById('animalTable').getElementsByTagName('tbody')[0];
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        if (i < arr.length) { // Verifica se ainda há itens para adicionar
            rows[i].cells[2].innerHTML = arr[i]; // Adiciona o item à última coluna
        } else {
            rows[i].cells[2].innerHTML = ""; // Limpa a célula se não houver mais itens
        }
    }
}

// Limpa todos os itens armazenados
function clearItems() {
    arr = [];
    localStorage.meuArr = JSON.stringify(arr);
    showItems(); // Atualiza a tabela após limpar os itens
}

// Função para iniciar o jogo
function startGame() {
    clearItems(); // Chama a função para limpar os itens
    window.location.href = './animal1.html'; // Redireciona para animal1.html
}
