import './style.css';
import logo1 from '../src/assets/food-icon.svg';
import mainImg1 from '../src/assets/food-main.jpg';

const content = document.querySelector('.content');
// nav
const nav = document.createElement('div');
nav.classList.add('nav');
content.appendChild(nav);

//nav > clickmenu
const clickMenu = document.createElement('div');
clickMenu.classList.add('click-menu');
nav.appendChild(clickMenu);
//nav > clickMenu > Menubutton
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.textContent = 'EXPLORE MENU';
clickMenu.appendChild(menuButton);
//nav > clickMenu > MenuButton > dropDown menu
const dropDownDiv = document.createElement('div');
dropDownDiv.classList.add('dropDown-div');
menuButton.appendChild(dropDownDiv);

//nav > logo-div
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo-div');
nav.appendChild(logoDiv);
//nav > logo-div > img
const logo = document.createElement('img');
logo.src = logo1;
logoDiv.appendChild(logo);

//nav > logo-text
const logoText = document.createElement('div');
logoText.classList.add('logo-text');
nav.appendChild(logoText);
//nav > logo-text > h1
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'EA Restaurant';
logoText.appendChild(title);
//nav > logo-text > p
const subTitle = document.createElement('p');
subTitle.classList.add('sub-title');
subTitle.textContent = '"Where every bite is a taste sensation!"';
logoText.appendChild(subTitle);

//main
const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);
// main > figure
const fig = document.createElement('figure');
main.appendChild(fig);
//main > figure > img
const mainImg = document.createElement('img');
mainImg.classList.add('main-img');
mainImg.src = mainImg1;
fig.appendChild(mainImg);

//main > figure > figCaption
const figCap = document.createElement('figcaption');
figCap.textContent = 'Photo Credit: ';
fig.appendChild(figCap);

//main > figure > figCaption
const creditLink = document.createElement('a');
creditLink.href = 'https://unsplash.com/@pablomerchanm';
creditLink.textContent = 'Pablo Merchán Montes';
figCap.appendChild(creditLink);

//main > quote
const quote = document.createElement('div');
quote.classList.add('quote');
main.appendChild(quote);
//main > quote > h2
const h2quote = document.createElement('h2');
quote.appendChild(h2quote);
//main > quote > h2 > em
const quoteEm = document.createElement('em');
quoteEm.textContent =
  '"Food is our common ground, a universal experience" - James Beard"';
h2quote.appendChild(quoteEm);

//footer
const footer = document.createElement('footer');
content.appendChild(footer);
//footer > p
const footerLink = document.createElement('p');
footerLink.textContent = 'Project By';
footer.appendChild(footerLink);
//footer > p > a
const footerLinkA = document.createElement('a');
footerLinkA.href = 'https://github.com/abyebin';
footerLinkA.textContent = 'Ebin Aliyas';
footerLink.appendChild(footerLinkA);

console.log('click?');
