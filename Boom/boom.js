let str = (prompt("Please enter a number!"));
console.log(str);

let n = ("o")
let m = ("O")
let x = ("!");
let number = n.repeat(str)
let mumber = m.repeat(str)

if (str <=2){
	if(str % 2===0){
	console.log("Boom" + x)
}
	else{console.log("Boom")
}
}


else if(str > 2){
	if(str % 2===0){
	console.log("B" + number + "m" + x)

		if(str %5===0){
		console.log("B"+ mumber +"M" + x)
}
		else{console.log("B" + number + "m")}
}
	else{console.log("B" + number + "m")
	
		if(str %5===0){
		console.log("B"+ mumber +"M" + x)
}
		else{console.log("B" + number + "M")}
}
}


