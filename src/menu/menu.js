import cookiesImage from './chocolate-chip-cookies.jpg';
import cocoaImage from './hot-cocoa.jpg';

const items = [
  {
    image: cookiesImage,
    name: 'Chocolate Chip Cookies',
    desc: 'Eat delicious cookies with crisp edges and chewy middles loaded with chocolate chips!',
    price: '৳49.99',
  },
  {
    image: cocoaImage,
    name: 'Hot Cocoa',
    desc: 'Cozy up with a hot mug of hot chocolate!',
    price: '৳49.99',
  },
];

const menuContentDiv = document.createElement('div');
menuContentDiv.classList.add('menu-content');

const menuHead = document.createElement('h1');
menuHead.textContent = 'Menu';
menuContentDiv.appendChild(menuHead);

for (const item of items) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');

  const itemImage = document.createElement('img');
  itemImage.src = item.image;
  itemImage.alt = item.name;
  itemImage.classList.add('item-image');
  itemDiv.appendChild(itemImage);

  const itemTextDiv = document.createElement('div');
  itemTextDiv.classList.add('item-text');

  const itemNameHead = document.createElement('h2');
  itemNameHead.textContent = item.name;
  itemNameHead.classList.add('item-name');
  itemTextDiv.appendChild(itemNameHead);

  const itemDescPara = document.createElement('p');
  itemDescPara.textContent = item.desc;
  itemDescPara.classList.add('item-desc');
  itemTextDiv.appendChild(itemDescPara);

  const itemPricePara = document.createElement('p');
  itemPricePara.textContent = item.price;
  itemPricePara.classList.add('item-price');
  itemTextDiv.appendChild(itemPricePara);

  itemDiv.appendChild(itemTextDiv);

  menuContentDiv.appendChild(itemDiv);
}

export function getMenuContent() {
  return menuContentDiv;
}
