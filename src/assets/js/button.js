function active() {
  var buttons = document.getElementsByClassName("btn");

  for (var i = 0; i < buttons.length; i++) {
    console.log("inside For loop");
    buttons[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      console.log(current);
      if(current.length > 0){
        console.log("Current length is > 0");
        console.log(current);
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}
