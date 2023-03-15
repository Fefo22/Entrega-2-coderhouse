let participantes = [];

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const quitarBtn = document.querySelector('#quitar');

// Recuperar los nombres de los participantes de Local Storage al cargar la página
if (localStorage.getItem('participantes')) {
  participantes = JSON.parse(localStorage.getItem('participantes'));
  participantes.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#nombre');
  const nombre = input.value.trim();

  // Verificar 
  if (nombre !== '' && typeof nombre === 'string') {
    participantes.push(nombre);
    localStorage.setItem('participantes', JSON.stringify(participantes));
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  }

  input.value = '';
});

quitarBtn.addEventListener('click', () => {
  if (participantes.length > 0) {
    participantes.pop();
    localStorage.setItem('participantes', JSON.stringify(participantes));
    ul.removeChild(ul.lastChild);
  }
});

const ruletaImg = document.querySelector('.img-ruleta');
const tirarBtn = document.querySelector('.btn-tirar');

tirarBtn.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 16) + 1;
  ruletaImg.classList.remove('girando1', 'girando2', 'girando3', 'girando4', 'girando5', 'girando6', 'girando7', 'girando8', 'girando9', 'girando10', 'girando11', 'girando12', 'girando13', 'girando14', 'girando15', 'girando16');
  ruletaImg.classList.add(`girando${randomNum}`);
});