function startUp() {
    var button = document.getElementById("learn");
    var sutton = document.getElementById("earn");
    var grove = document.getElementById("arn");
    console.log(button);
    console.log(sutton);
    console.log(grove);

    button.onmousedown = function() {
        button.style.width = "145px";
    }
    button.onmouseup = function() {
        button.style.width = "150px";
    }
    
    sutton.onmousedown = function() {
        sutton.style.width = "145px";
    }
    sutton.onmouseup = function() {
        sutton.style.width = "150px";
    }
    
    grove.onmousedown = function() {
        grove.style.width = "145px";
    }
    grove.onmouseup = function() {
        grove.style.width = "150px";
    }
}



window.onload = function() {
    startUp();
}



