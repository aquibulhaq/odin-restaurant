const aboutContentDiv = document.createElement('div');
aboutContentDiv.classList.add('about-content');

const title = document.createElement('h1');
title.textContent = 'About';
aboutContentDiv.appendChild(title);

const name = document.createElement('h2');
name.textContent = 'Gulshan Banani';
aboutContentDiv.appendChild(name);

const para = document.createElement('p');

para.appendChild(document.createTextNode('Manager'));
para.appendChild(document.createElement('br'));

para.appendChild(document.createTextNode('01555555555'));
para.appendChild(document.createElement('br'));

para.appendChild(document.createTextNode('chocolatey.goodness@fakemail.com'));

aboutContentDiv.appendChild(para);

export function getAboutContent() {
  return aboutContentDiv;
}
