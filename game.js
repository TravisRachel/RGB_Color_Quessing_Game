var colors = colorGenerator(6);
var box = document.querySelectorAll(".box");
var pickedColor = pick();
var colorDisplay = document.getElementById("colorDis");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function(){
    colors = colorGenerator(6);
    pickedColor = pick();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < box.length; i++){
    box[i].style.backgroundColor = colors[i];
}
    h1.style.backgroundColor = "LightGrey";
    this.textContent = "New Colors";


});


colorDisplay.textContent = pickedColor;

//give each box a color by looping through the box class and colors arr
for(var i = 0; i < box.length; i++){
    box[i].style.backgroundColor = colors[i];
//add click events to each box
    box[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            msg.textContent = "Correct!!!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play again";
            msg.textContent = " "
        }
        else{
            this.style.backgroundColor = "LightGrey";
            msg.textContent = "Try again";
        }
    });
}


function changeColors(colors){
    for(var i = 0; i < box.length; i++){
        box[i].style.backgroundColor = colors;
    }
}

function pick(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}


function colorGenerator(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", "  + g + ", " + b +")";
}
