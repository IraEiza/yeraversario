const starwarsSoundtrack = new Audio('./assets/starwarsSoundtrack.mp3')
starwarsSoundtrack.volume = 0.2

const notificationSound = new Audio('./assets/notificationSound.wav')
notificationSound.volume = 0.2

document.addEventListener('DOMContentLoaded', () => {
  const saludos = [
      "Hola Yeray",
      "¿Qué tal?",
      "¿Pensabas que íbamos a olvidarnos...",
      "...de tu rebootversario?",
      "¡JA!",
      "Vaya... parece que has recibido algo...",
  ];

  const mensajes = [
    { 
      nombre: "Ira", 
      mensaje: `
      "Eres un grande Yera!"` 
    },
    { 
      nombre: "Raúl", 
      mensaje: `
      "Me enseñaste algo más que a programar, me enseñaste a confiar en mi mismo. 
      Gran parte de lo que soy y lo que he conseguido ha sido gracias a ti. Te aprecié mucho 
      como profesor y te aprecio aún más como compañero. Por más tiempo motivando a gente!"`
    },
    { 
      nombre: "Nisa", 
      mensaje: `
      "Super Yera!!! Enhorabuena por tu primer año en Reboot!! Espero que estés tan a 
      gusto como nos haces sentir al resto, has sido un fichaje TOP, por muchos años más🥳♥️"` 
    },
    { 
      nombre: "Juanan", 
      mensaje: `
      "Enhorabuena señor! Por muchos años más donde pueda seguir aprendiendo de tí, 
      y tú sigas pareciendo más joven que yo. Muchas gracias por ser como eres!!!"` 
    },
    { 
      nombre: "Theshia", 
      mensaje: `
      "Te he estado esperando, Obi-Wan. Nos volvemos a encontrar, por fin. El círculo está 
      ahora completo. Cuando te dejé, no era más que el aprendiz; ahora soy el maestro"` 
    },
    { 
      nombre: "Pedro", 
      mensaje: `
      "Hay dos tipos de personas en el mundo, según Einstein, y justo encima de todo eso 
      están aquellas que son como Yeray."` 
    },
    
];

  const masMensajes = [
      "Son tus compis que quieren decirte algo 👀",
      "Siéntate y ponte cómodo porque esto va para largo 🍿"
      // Añade aquí más frases de la segunda ronda...
  ];

  mostrarSaludos(saludos, () => {
      mostrarSobre(() => {
          mostrarMasMensajes(masMensajes, () => {
            apagarLuces(() => {
              mostrarMensajesStarWars(mensajes, () => {
                mostrarFelicidades()
              });
            });
          });
      });
  });
});

function mostrarSaludos(saludos, callback) {
  let indice = 0;
  const saludoDiv = document.getElementById('saludo');

  const intervalo = setInterval(() => {
      saludoDiv.textContent = saludos[indice];
      indice++;
      if(indice === 5) saludoDiv.style.fontSize = '100px';
      if(indice === 6) saludoDiv.style.fontSize = '';
      if (indice > saludos.length) {
          clearInterval(intervalo);
          saludoDiv.style.display = 'none';
          callback();
      }
  }, 3500);
}

function mostrarSobre(callback) {
  notificationSound.play()
  const sobre = document.getElementById('sobre');
  sobre.classList.remove('hidden');
  // Aquí se añadiría la animación del sobre
  setTimeout(() => {
      sobre.classList.add('hidden');
      callback();
  }, 3500); // Duración de la animación del sobre
}

function mostrarMasMensajes(masMensajes, callback) {
  const saludoDiv = document.getElementById('saludo');
  saludoDiv.style.display = 'block';
  let indice = 0;

  // Mostrar el primer mensaje inmediatamente
  saludoDiv.textContent = masMensajes[indice];
  indice++;

  const intervalo = setInterval(() => {
      if (indice < masMensajes.length) {
          saludoDiv.textContent = masMensajes[indice];
          indice++;
      } else {
          clearInterval(intervalo);
          saludoDiv.style.display = 'none';
          callback();
      }
  }, 3500); // Mantener 3500 ms para los siguientes mensajes
}

function mostrarMensajesCompaneros(mensajes) {
  const mensajesDiv = document.getElementById('mensajes');
  let indice = 0;

  // Mostrar el primer mensaje de los compañeros inmediatamente
  if (mensajes.length > 0) {
      mensajesDiv.innerHTML = `<p class="blur-text-lento">${mensajes[0].nombre}: "${mensajes[0].mensaje}"</p>`;
      indice++;
  }

  const intervalo = setInterval(() => {
      if (indice < mensajes.length) {
          const mensaje = mensajes[indice];
          mensajesDiv.innerHTML = `<div class="blur-text-lento"><p>"${mensaje.mensaje}"</p><p>${    mensaje.nombre}</p></div>`;
          indice++;
      } else {
          clearInterval(intervalo);
          mensajesDiv.style.display = 'none';
      }
  }, 12000); // Mantener 12000 ms para los siguientes mensajes
}

function apagarLuces(callback) {
  const dimmer = document.getElementById('dimmer');
  dimmer.style.opacity = '1'; // Comienza el oscurecimiento
  setTimeout(callback, 2000); // Espera 2 segundos antes de llamar al callback
}

function mostrarMensajesStarWars(mensajes, callback) {
  starwarsSoundtrack.play()
  let textoCompleto = mensajes.map(mensaje => 
      `${mensaje.mensaje}\n\n       - ${mensaje.nombre}`
  ).join('\n\n');

  const starwarsDiv = document.getElementById('starwars-text');
  starwarsDiv.textContent = textoCompleto;

  // Mostrar la introducción tipo Star Wars
  document.getElementById('starwars-intro').style.display = 'block';
  setTimeout(callback, 60000) // Muestra la carátula de felicidades!
}

function mostrarFelicidades () {
  const felicidadesDiv = document.getElementById('felicidades');
  felicidadesDiv.style.display = 'block'
}

