let redBtn = document.querySelector(".red");
let greenBtn = document.querySelector(".green");
let blueBtn = document.querySelector(".blue");

console.log(redBtn)
console.log(greenBtn)
console.log(blueBtn)

redBtn.addEventListener('click',() => redBtn.style.backgroundColor='red')
greenBtn.addEventListener('click',() => greenBtn.style.backgroundColor='green' )
blueBtn.addEventListener('click',() => blueBtn.style.backgroundColor='blue' )

