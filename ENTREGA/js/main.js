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

  // Constantes y mensajes para cada clase
  const message1 = {
    title: '¡AAAAAHH!',
    text: 'Todos deberan gemir cada vez que alguien pierde.',
    color: '#FFFFFF',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backgroundUrl: null,
    backdrop: `
    rgba(200, 200, 200, 0.6)`
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen2');
    if (imagen) {
      message1.backgroundUrl = imagen.url;
      message1.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message2 = {
    title: '¡Caricias cercanas del 3er tipo!',
    text: 'Mostra la cola y elegi un participante para que te bese una nalga.',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message2.backgroundUrl = imagen.url;
      message2.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message3 = {
    title: '¡calentando motores!',
    text: 'Pasar un hielo por el cuerpo del jugador de la derecha y seguir el rastro con la lengua',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4) `,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message3.backgroundUrl = imagen.url;
      message3.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message4 = {
    title: '¡Juguito fresco compe!',
    text: 'Todos los jugadores deberan pasarse el mismo hielo hasta llegar al final de la fila, quien se le cae pierde!',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(100, 133, 133, 0.4)`,
  };

  const message5 = {
    title: '¡SAFASTE!',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(200, 200, 200, 0.6)`
  };

  const message6 = {
    title: '¡El PanDulce!',
    text: 'Acariciar las partes intimas del jugador de la izquierda, quien se niegue pierde!',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message6.backgroundUrl = imagen.url;
      message6.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message7 = {
    title: '¡Quiere que le baile?!',
    text: 'Hacer un baile iper-mega-recontra-sexi a la persona del mismo sexo que siga en la ronda',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message7.backgroundUrl = imagen.url;
      message7.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message8 = {
    title: '¡Carrera Oral!',
    text: 'Vos y el jugador de la izquierda compiten a ver quien es el primero en conseguir un beso de un desconocido',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(100, 133, 133, 0.4)`,
  };

  const message9 = {
    title: '¡SHOT, SHOT!',
    text: 'Y basicamente debes tomar un shot',
    color: '#FFFFFF',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backgroundUrl: null,
    backdrop: `
    rgba(200, 200, 200, 0.6)`
  };
  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen2');
    if (imagen) {
      message9.backgroundUrl = imagen.url;
      message9.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message10 = {
    title: '¡Covid Positivo!',
    text: 'Darle un beso al participante de la izquierda y la derecha al mismo tiempo',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null, 
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };
  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message10.backgroundUrl = imagen.url;
      message10.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message11 = {
    title: '¡Streep competition!',
    text: 'Vos y el jugador de la izquierda se tienen que turnar para quitarse una prenda de ropa por vez el primero en negarse a seguir pierde!',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(100, 133, 133, 0.4)`,
  };

  const message12 = {
    title: '¡Ni lento ni peresozo!',
    text: 'La ultima persona en mostrar la ropa interior por completo pierde!',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(200, 200, 200, 0.6`
  };

  const message13 = {
    title: '¡BANANITADOLCA!',
    text: 'Tienes que poner duro el miembro del siguiente participante en poseerlo',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };

  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message13.backgroundUrl = imagen.url;
      message13.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message14 = {
    title: '¡BESANDING!',
    text: 'Deberas darle un beso a todos los jugadores',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)`,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };
  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message14.backgroundUrl = imagen.url;
      message14.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message15 = {
    title: '¡KISSME!',
    text: 'Darle un beso a la persona que mas te guste quien se niega pierde',
    width: 500,
    padding: '3em',
    color: '#fffff',
    backgroundUrl: null,
    backdrop: `
    rgba(183, 76, 55, 0.4)
  `,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
  };
  fetch('./data/imagenes.json') 
  .then(response => response.json())
  .then(data => {
    const imagen = data.imagenes.find(imagen => imagen.nombre === 'imagen1');
    if (imagen) {
      message15.backgroundUrl = imagen.url;
      message15.background = `#fff url(${imagen.url})`;
    } else {
      console.error('No se encontró la imagen de fondo en el archivo JSON');
    }
  })
  .catch(error => {
    console.error('Error al obtener la URL de la imagen de fondo:', error);
  });

  const message16 = {
    title: '¡NALGAZO!',
    text: 'Vos y el jugador de la derecha compiten para ver quien es el primero en conseguir una nalgada de 3 desconocidos',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    backdrop: `
    rgba(100, 133, 133, 0.4)
  `,
  };

  if (ruletaImg.classList.contains('girando1')) {
    setTimeout(() => {
      Swal.fire(message1);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando2')) {
    setTimeout(() => {
      Swal.fire(message2);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando3')) {
    setTimeout(() => {
      Swal.fire(message3);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando4')) {
    setTimeout(() => {
      Swal.fire(message4);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando5')) {
    setTimeout(() => {
      Swal.fire(message5);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando6')) {
    setTimeout(() => {
      Swal.fire(message6);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando7')) {
    setTimeout(() => {
      Swal.fire(message7);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando8')) {
    setTimeout(() => {
      Swal.fire(message8);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando9')) {
    setTimeout(() => {
      Swal.fire(message9);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando10')) {
    setTimeout(() => {
      Swal.fire(message10);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando11')) {
    setTimeout(() => {
      Swal.fire(message11);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando12')) {
    setTimeout(() => {
      Swal.fire(message12);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando13')) {
    setTimeout(() => {
      Swal.fire(message13);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando14')) {
    setTimeout(() => {
      Swal.fire(message14);
    }, 3000);

  } else if (ruletaImg.classList.contains('girando15')) {
    setTimeout(() => {
      Swal.fire(message15);
    }, 3000);
  } else if (ruletaImg.classList.contains('girando16')) {
    setTimeout(() => {
      Swal.fire(message16);
    }, 3000);
  }

  ruletaImg.addEventListener('animationend', () => {
    ruletaImg.classList.remove(`girando${randomNum}`);
  });
});

// Rotacion del logo

const flechas = document.querySelector(".img-container-logo img:first-child");

const velocidadRotacion = 5;

function rotarImagen() {

  let angulo = flechas.dataset.angulo || 0;

  angulo = parseInt(angulo) + velocidadRotacion;

  flechas.dataset.angulo = angulo;

  flechas.style.transform = `rotate(${angulo}deg)`;
}

setInterval(rotarImagen, 50);



