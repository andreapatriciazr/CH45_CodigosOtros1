const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

const noBlog = 'No blog disponible';
const noLocation = 'No location available';

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  const data = await response.json();
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}' || noBlog;
  $l.textContent = '${data.location}' || noLocation;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);