var Yoda = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('yoda');
  this.setPosition(top, left);
  this.$node.html('<img src = "Master_Yoda.png" height="240px">');
  this.isCalled = false;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Yoda.prototype = Object.create(Dancer.prototype);
Yoda.prototype.constructor = Yoda;
Yoda.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    right: left
  };
  this.$node.css(styleSettings);
};
Yoda.prototype.step = function() {
  if (!this.isCalled) {  
    Dancer.prototype.step.call(this);
    this.$node.animate({
      //top: top
      //left: [ 'toggle']
      'right': 'toggle'}
    );
    // this.$node.animate({
    //   //top: top
    //   //left: [ 'toggle']
    //   'right': 'toggle'}
    // );
  }
};

Yoda.prototype.lineUp = function() {
  this.$node.animate({'right': '0'});
  this.isCalled = true;
  
};