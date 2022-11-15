
import{ nanoid } from "nanoid"; //importando biblioteca
import './style.css'
import copy from 'clipboard-copy';


const passwwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwwordBtnEl.addEventListener('click', ()=> displayPasswordEl
.innerHTML= nanoid());

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});