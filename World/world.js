let language = prompt("Please enter your language!").toLowerCase();


console.log(language);

switch(language){
	case "english":
	console.log("Hello");
	break;

	case "french":
	console.log("Bonjour");
	break;

	case "hebrew":
	console.log("Shalom");
	break;

	default:
	console.log("01110011 01101111 01110010 01110010 01111001");
	break;
}