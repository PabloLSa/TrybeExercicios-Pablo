// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const BASE_URL = "https://akabab.github.io/superhero-api/api/id/";



// Adicionamos o eventListener 'click' no nosso botão
button.addEventListener('click', () => {

  const randomId =  Math.floor(Math.random() * 200);
  const id = randomId;

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função
  fetch(`${BASE_URL}${id}.json`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, vamos recuperar as informações
      // que precisamos. No caso, a imagem e o nome
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});