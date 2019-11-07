var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
//generate random colors
numSquares = 3;
colors = generateRandomColors(numSquares);
//pick random colors
pickedColor = pickColor();
//update color display
colorDisplay.textContent=pickedColor;
//change square colors
for (var i = 0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
//pick random colors
pickedColor = pickColor();
//update color display
colorDisplay.textContent=pickedColor;
//change square colors
for (var i = 0; i<squares.length; i++) {
		squares[i].style.background=colors[i];
		squares[i].style.display = "block";
	}
});



reset.addEventListener("click", function(){
	colors= generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	message.textContent = "";

	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background=colors[i];
		}
		h1.style.background = "steelblue";
		reset.textContent = "New Colors";
	}

);

colorDisplay.textContent = pickedColor;
for (var i = squares.length - 1; i >= 0; i--) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to listers
	squares[i].addEventListener("click", function() {
		var clickColor = this.style.background;
		if(clickColor === pickedColor){
			message.textContent ="Correct!";
			reset.textContent = "Play Again?";
			changeColors(clickColor);
			h1.style.background = clickColor;
			
		} else {
			this.style.background = "grey";
			message.textContent ="Try again";
		}
	});
}


function changeColors(color) {
	//loop through all squares
	/*for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = color;
	}*/
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background=color;
	}
}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return  colors[random];
	}

	function generateRandomColors(num){

		var arr = []

		for(var i=0; i<num; i++){
			arr.push(randomColor());
		}

		return arr;
	}

	function randomColor(){
		//pick a red from 0-255
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0-255
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0-255
		var b = Math.floor(Math.random() * 256);

		return "rgb(" + r + ", " + g + ", " + b + ")";
	}