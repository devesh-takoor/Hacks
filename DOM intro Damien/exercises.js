// Exercise XP - 1
let nav = document.getElementById('navBar');
nav.setAttribute('id', 'socialNetworkNavigation');

let li_elem = document.createElement('li');
let li_text = document.createTextNode("Logout");
li_elem.appendChild(li_text);

let ul = document.getElementsByTagName('ul');
ul[0].appendChild(li_elem);

console.log(ul[0].firstElementChild.textContent);
console.log(ul[0].lastElementChild.textContent);