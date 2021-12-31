function move(){
  console.log("move");

  let pos = 0;
  let red_box = document.getElementById('inner');
  console.log(red_box);
  let black_box = document.getElementById('outer');
  let black_width = black_box.getBoundingClientRect().width;
  let red_width = red_box.getBoundingClientRect().width;

  let move_it = setInterval(function(){
    if (pos === (black_width-red_width)){
      clearInterval(move_it);
    }
    else{
      red_box.style.left = pos + 'px';
      red_box.style.top = pos + 
}