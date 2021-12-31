let names = ["john", "sarah", 23, "Rudolf",34];

for (let i of names){

  if ( typeof i !== 'string') {
    
    
  }
  else{
    
     if (i == i.toUpperCase()) {
            console.log('upper case true');
        }
     else if (i == i.toLowerCase()){
            console.log(i.charAt(0).toUpperCase() + i.slice(1));
            
        }
  }
  
}