var Pew = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pew');
  this.setPosition(top, left);
  this.$node.html('<img src = "pewpew.png" class="pewImg" height="20px">');
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
  //console.log("Pew",this.$node);
  // $(this.$node).on('click', function(event) {
  //   console.log(this);
  //   this.$node.html('<img src = "pewpew.png" height="2000px">');
    
  //   // this.html('<img src = "pewpew.png" height="5000px">');
  // });
  // this.$node.animate({
  //  //top: top
  //   //left: [ 'toggle']
  //   "height": 'toggle'}, "slow")
  $('.pewImg').animate({'height': '500px'});
  $('.pewImg').animate({'height': '0px'});
  this.$node.remove();
    
};

Pew.prototype.lineUp = function() {
  
};