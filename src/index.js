import './style.css';
import { getHomeContent } from './home/home.js';
import { getMenuContent } from './menu/menu.js';

console.log('Hello, Odin Restaurant!');

const contentDiv = document.querySelector('#content');

const navDiv = document.querySelector('nav');
navDiv.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName.toLowerCase() !== 'button')
    return;

  contentDiv.textContent = '';

  if (target.classList.contains('home-button'))
    contentDiv.appendChild(getHomeContent());
  else if (target.classList.contains('menu-button'))
    contentDiv.appendChild(getMenuContent());
});

contentDiv.appendChild(getHomeContent());
