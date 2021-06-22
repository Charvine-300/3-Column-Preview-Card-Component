function startUp() {
    var button = document.getElementById("learn");
    console.log(button);

    button.onmousedown = function() {
        button.style.width = "145px";
    }
    button.onmouseup = function() {
        button.style.width = "150px";
    }
}



window.onload = function() {
    startUp();
}



