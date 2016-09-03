console.log(this === window);

function checkThis(){
   'use strict';
  console.log(this);
}
checkThis();

function Chair(style, color) {
  console.log(this);
  this.style = style;
  this.color = color;
}
var sofa = new Chair("sofa", "green");

var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};

console.log(couch.f());
