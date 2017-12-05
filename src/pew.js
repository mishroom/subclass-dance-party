var Pew = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pew');
  this.setPosition(top, left);
  this.$node.html('<img src = "pewpew.png" height="10px">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

Pew.prototype = Object.create(Dancer.prototype);
Pew.prototype.constructor = Pew;
// Pew.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     right: left
//   };
//   this.$node.css(styleSettings);
// };
Pew.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
   'height': '100px'}
  );
};

