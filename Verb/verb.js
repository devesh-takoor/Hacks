let verb=prompt("enter a verb");
let sub="ing"
console.log(verb);
//lengh of string 3 and doesnot end with ing then add ing 
let len=verb.length;
console.log(len);
if (len>=3){
    if (verb.indexOf(sub) !== -1){
        console.log((verb)+"ly")
    }  
    else{
        console.log((verb)+(sub))
    }
}  
else{
    console.log(verb)
}