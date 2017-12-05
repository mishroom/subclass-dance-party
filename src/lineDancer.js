var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;
LineDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};