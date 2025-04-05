import { getHomeContent } from './home/home.js';

console.log('Hello, Odin Restaurant!');

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(getHomeContent());
