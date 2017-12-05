var StormTrooper = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('line');
  this.setPosition(top, left);
  this.$node.html('<img src = "stormtrooper_head.png" height="50px" width="50px">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

StormTrooper.prototype = Object.create(Dancer.prototype);
StormTrooper.prototype.constructor = StormTrooper;
StormTrooper.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
   //top: top
    //left: [ 'toggle']
    "left": 'toggle'}
  );
};