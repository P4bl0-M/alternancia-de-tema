const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Opcional: mudar texto do botão
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Modo Claro';
  } else {
    toggleBtn.textContent = 'Modo Escuro';
  }
});

//*----SALVA PREFARENCIA DO USUARIO----*

// const toggleBtn = document.getElementById('toggle-btn');
// const body = document.body;

// // Função para aplicar o tema salvo
// function aplicarTemaSalvo() {
//   const temaSalvo = localStorage.getItem('tema');

//   if (temaSalvo === 'dark') {
//     body.classList.add('dark-mode');
//     body.classList.remove('light-mode');
//     toggleBtn.textContent = 'Modo Claro';
//   } else {
//     body.classList.add('light-mode');
//     body.classList.remove('dark-mode');
//     toggleBtn.textContent = 'Modo Escuro';
//   }
// }

// // Executa ao carregar a página
// aplicarTemaSalvo();

// // Listener de clique no botão
// toggleBtn.addEventListener('click', () => {
//   // Alternar os temas
//   const estaNoModoEscuro = body.classList.contains('dark-mode');

//   if (estaNoModoEscuro) {
//     body.classList.remove('dark-mode');
//     body.classList.add('light-mode');
//     localStorage.setItem('tema', 'light'); // Salva no localStorage
//     toggleBtn.textContent = 'Modo Escuro';
//   } else {
//     body.classList.remove('light-mode');
//     body.classList.add('dark-mode');
//     localStorage.setItem('tema', 'dark'); // Salva no localStorage
//     toggleBtn.textContent = 'Modo Claro';
//   }
// });

