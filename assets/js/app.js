const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // / identificar clase
const $b = document.querySelector('.blog'); // identificar clase
const $l = document.querySelector('.location'); // identificar clase

const noBlog = 'No blog disponible'; // agregar el mensaje
const noLocation = 'No location available'; // agregar el mensaje

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  const data = await response.json();
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}' || noBlog; // mostrar el mensaje
  $l.textContent = '${data.location}' || noLocation; // mostrar el mensaje
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // agregar el $ a $n
}

displayUser('stolinski').catch(handleError);