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
clickMenu.classList.add('click-menu-div');
nav.appendChild(clickMenu);
//nav > clickMenu > Menubutton
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.textContent = 'EXPLORE MENU';
clickMenu.appendChild(menuButton);

//nav clickMenu > dropDown-content
const dropdownContent = document.createElement('div');
dropdownContent.classList.add('dropdownContent');
clickMenu.appendChild(dropdownContent);

//nav > clickMenu > dropDown-content > links
const link1 = document.createElement('a');
link1.href = '#';
link1.textContent = 'Fluff Screamer';
dropdownContent.appendChild(link1);

//nav > clickMenu > dropDown-content > links
const link2 = document.createElement('a');
link2.href = '#';
link2.textContent = 'Nut Burger';
dropdownContent.appendChild(link2);

//nav > clickMenu > dropDown-content > links
const link3 = document.createElement('a');
link3.href = '#';
link3.textContent = 'Poached Burger';
dropdownContent.appendChild(link3);

//nav > clickMenu > dropDown-content > links
const link4 = document.createElement('a');
link4.href = '#';
link4.textContent = 'Olive Burger';
dropdownContent.appendChild(link4);

//nav > clickMenu > dropDown-content > links
const link5 = document.createElement('a');
link5.href = '#';
link5.textContent = 'Beef Burger';
dropdownContent.appendChild(link5);

//nav > clickMenu > dropDown-content > links
const link6 = document.createElement('a');
link6.href = '#';
link6.textContent = 'Elk Burger';
dropdownContent.appendChild(link6);

//nav > clickMenu > dropDown-content > links
const link7 = document.createElement('a');
link7.href = '#';
link7.textContent = 'Portobello Mushroom Burger';
dropdownContent.appendChild(link7);

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
subTitle.textContent = 'Where every bite is a taste sensation!';
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
footerLink.textContent = 'Project By: ';
footer.appendChild(footerLink);
//footer > p > a
const footerLinkA = document.createElement('a');
footerLinkA.href = 'https://github.com/abyebin';
footerLinkA.textContent = 'Ebin Aliyas';
footerLink.appendChild(footerLinkA);

//nav > logo-div > img > onliclick
logoDiv.addEventListener('click', clearPage);

// page clearing function
function clearPage() {
  main.replaceChildren();
}

console.log('Hello?');

// clickMenu.addEventListener('click',function(){
//   dropdownContent.setAttribute('style','display: "')
// })

// menuButton.addEventListener('click', function(){
//   const list = document.createElement('ul');
//   for (let i = 0; i < 5; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `Item ${i+1}`;
//     list.appendChild(listItem);
//   }
//   dropDownDiv.appendChild(list);
//   dropDownDiv.classList.toggle('show');
// });
