
var clickColor = document.getElementById("button");
clickColor.addEventListener("click", randomColor);

function randomColor() {
    var color1 = Math.floor(Math.random() * 256);
    var color2 = Math.floor(Math.random() * 256);
    var color3 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}
