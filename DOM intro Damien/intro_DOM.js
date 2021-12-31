// console.log("DOM")

let body = document.body;
console.log(body);              // body of the element
console.log(body.childNodes);   // List of elements inside body
console.log(body.firstChild);   // A space appearing as text - else if you remove it, you get h1
console.log(body.firstElementChild);
console.log(body.lastChild);    // <script>
console.log(body.lastElementChild);

// Get by Id
let div = document.getElementById('div1');
console.log(div);
console.log(div.firstChild);
console.log(div.lastChild);

let p1d3 = document.getElementById('p1-div3');
console.log(p1d3);
// Manipulate element
p1d3.innerText = "New Text";
p1d3.style.color = "red";

// by Tag Name
let divs = document.getElementsByTagName('div');
// Careful: Elements means all elements with the tag
console.log(divs);
// for(let i=0; i < divs.length; i++){
//     divs[i].innerText = "DIV at index " + i;
// }

// by Class Name
let elems_class = document.getElementsByClassName('color-red');
console.log(elems_class);

// Query selector
let elem = document.querySelector('#div2 .color-red');
console.log(elem); // First element matched

let elems = document.querySelectorAll('#div2 .color-red');
console.log(elems); // All elements matched

let p_all = document.querySelectorAll('p');
console.log(p_all); // All elements with tag <p>

// InnerText and InnerHTML
let elem_test = document.querySelector('#div2 .color-red');
console.log(elem_test)
// Careful when you use these two
// They override existing HTML code
elem_test.innerText = "Hello P1";
elem_test.innerHTML = "<h1>Hi There</h1>";

// Attribute - retrieve and change value
let div2 = document.getElementById('div2');
console.log(div2.getAttribute('username'));
div2.setAttribute('username', 'Sebastien');
console.log(div2.getAttribute('username'));

// Set new Attribute
div2.setAttribute('newAttrib', 'something');
console.log(div2.getAttribute('newAttrib'));

console.log(div2.getAttributeNames());

div2.style.backgroundColor = 'yellow';
div2.className = 'bg-red';

// Create and Add Element
let div1 = document.getElementById('div1');
console.log(div1);

let h2_elem = document.createElement('h2');
h2_elem.innerText="Hello Part-Time Students";
div1.appendChild(h2_elem);

let p_elem = document.createElement('p');
p_elem.innerText = "Continue the good work!";
div1.appendChild(p_elem);

// Remove an Element
/*
let div3 = document.getElementById('div3');
let p1div3 = document.getElementById('p1-div3');
div3.removeChild(p1div3);
*/

// Replace an Element
let div_2 = document.getElementById('div2');
let p1div2 = document.getElementById('p1-div2');
let p1div3 = document.getElementById('p1-div3');

console.log(p1div2);
console.log(p1div3);

div_2.replaceChild(p1div3, p1div2);





