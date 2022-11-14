
import{ nanoid } from "nanoid"; //importando biblioteca
import './style.css'

const passwwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwwordBtnEl.addEventListener('click', ()=> displayPasswordEl
.innerHTML= nanoid());
