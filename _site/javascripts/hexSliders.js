document.addEventListener("DOMContentLoaded", main());
let dynVar = 0;

function main(){
  "use strict";
  var slider = new hx.Slider('#slider', {"min": -1, "max": 1});
  console.log(slider);
  console.log(slider.value());
  slider.on("change", function(value){
    dynVar = value
    console.log(value);
  })
}

function getValue(){
  return dynVar;
}
