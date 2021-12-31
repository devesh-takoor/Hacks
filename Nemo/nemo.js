let str = prompt("Please enter a sentence containing the word 'Nemo'!");
console.log (str);

let lower = str.toLowerCase().replace(",","").split(" ");
console.log(lower);

let position = lower.indexOf("nemo");

if (position >= 0){
  console.log("Nemo is at position " + position + " !");
}
else{
  console.log("Nemo not found!");
}

let fish = str.replace("nemo","clown").split(" ");




let position1 = fish.indexOf("nemo");

if (position1 >= 0){
  console.log("Nemo is at position " + position1 + " !");
}
