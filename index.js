var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
var result1 = "images/" + num1 + ".png";
var result2 = "images/" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", result1);
document.querySelectorAll("img")[1].setAttribute("src", result2);


//Title
if(num1 > num2){
  document.querySelector("h1").textContent = "Player 1 wins !!!!";
}else if(num1 < num2){
  document.querySelector("h1").textContent = "Player 2 wins !!!!";
}else{
  document.querySelector("h1").textContent = "Draw !!!!";
}
