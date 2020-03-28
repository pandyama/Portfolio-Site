
function active(){
var buttons = document.getElementsByClassName("btn");

console.log(window.location.href);

for(var i = 0; i < buttons.length; i++){
    console.log("inside For loop");
    console.log(buttons);
    buttons[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        console.log(current);
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
}