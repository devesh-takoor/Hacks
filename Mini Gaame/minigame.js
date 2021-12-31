function playTheGame(){
	
	if(confirm("Would you like to play the Game?")){
		let num = parseInt(Math.round(prompt("Please enter a number between 0 - 10!")));
		console.log(num)
		if(isNaN(num)){
			alert("Sorry Not a number, Goodbye!")
		}
		else{
			if((num)<0 || (num)>10){
				alert("Sorry it's not a good number,Goodbye!")
			}
			else{
				let computerNumber = (Math.round(Math.random()*10 + 1))
				console.log(computerNumber)
				test(num,computerNumber)
			}
			
		}

	}
	else{
		alert("No problem,Goodbye")	
	}
}


function test(userNumber,computerNumber){
	if (userNumber === computerNumber){
		alert("WINNER!")
	}
	else if(userNumber > computerNumber){
		alert("Your number is bigger than the Computer!")
		let anotherNum = (parseInt(prompt("Guess another Number!")))

	}
	else if(userNumber < computerNumber){
		alert("Your number is smaller than the Computer!")
		let anotherNum = (parseInt(prompt("Guess another Number!")))
		console.log(anotherNum);
	}




}
