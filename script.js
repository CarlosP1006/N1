const ANIMALS = [
  { a: "Bicho-Preguiça", b: "Sapo" },
  { a: "Cachorro",        b: "Morcego" },
  { a: "Cavalo",          b: "Peixe" },
  { a: "Girafa",          b: "Tigre" },
  { a: "Tubarão",         b: "Jacaré" },
  { a: "Urso",            b: "Camaleão" },
  { a: "Leão",            b: "Foca" },
  { a: "Lobo",            b: "Porco" },
  { a: "Panda",           b: "Canguru" },
  { a: "Pinguim",         b: "Cervo" },
  { a: "Porquinho da Índia", b: "Coruja" },
  { a: "Rato",            b: "Gato" },
  { a: "Tigre",           b: "Jacaré" },
  { a: "Hipopótamo",      b: "Cobra" },
  { a: "Urso",            b: "Abelha" },
  { a: "Leão",            b: "Águia" },
];

function getCurrentN() {
  return parseInt(new URLSearchParams(window.location.search).get('n') || '1', 10);
}

function loadAnimalPage() {
  const n = getCurrentN();
  const animal = ANIMALS[n - 1];
  if (!animal) {
    window.location.href = './index.html';
    return;
  }

  const img = document.getElementById('animal-img');
  img.src = `./BancodeDados/${n}.jpeg`;
  img.alt = `Híbrido de ${animal.a} e ${animal.b}`;

  const input = document.getElementById('entrada1');
  input.focus();
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') submitAndAdvance();
  });
}

function submitAndAdvance() {
  const n = getCurrentN();
  const saved = JSON.parse(localStorage.getItem('meuArr') || '[]');
  saved[n - 1] = document.getElementById('entrada1').value.trim();
  localStorage.setItem('meuArr', JSON.stringify(saved));

  if (n >= ANIMALS.length) {
    window.location.href = './tabelaFinal.html';
  } else {
    window.location.href = `./animal.html?n=${n + 1}`;
  }
}

function startGame() {
  localStorage.setItem('meuArr', JSON.stringify([]));
  window.location.href = './animal.html?n=1';
}

function showResults() {
  const saved = JSON.parse(localStorage.getItem('meuArr') || '[]');
  const tbody = document.querySelector('#animalTable tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  ANIMALS.forEach(function (pair, i) {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = pair.a;
    row.insertCell(1).textContent = pair.b;
    row.insertCell(2).textContent = saved[i] || '—';
  });
}
