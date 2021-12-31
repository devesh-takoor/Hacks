let grade = prompt("Please enter your grade!").toLowerCase();
console.log(grade);

if (grade>90 && grade<=100){
	console.log("A");
}
else if (grade>80 && grade<=90){
	console.log("B");
}
else if (grade>=70 && grade<=80){
	console.log("C");
}
else if (grade<70){
	console.log("D");
}
else{
	console.log("Enter a grade between 0-100")
}
