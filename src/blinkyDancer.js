// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
 
//   var oldStep = this.step;
//   console.log(this);
//   this.step = function() {
   
//   };
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function () {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();

// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = makeDancer.prototype.step;  
   // console.log(oldStep);

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //console.log(that);
  this.step(timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //makeDancer.bind(this, this.step);
  // this.oldStep = makeDancer.step;
  // console.log(makeDancer.step);
  // console.log(this.step);
  

  //return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
// console.log(this);
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  
  
  // this.call(this, oldStep);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};