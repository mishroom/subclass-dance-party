var Dancer = function(top, left, timeBetweenSteps) {
  // this.isClicked = false;
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
// this.clearTimeout(thisTime);
};

Dancer.prototype.step = function() {
  //if (!this.isClicked) {
  var steppytime = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // var that = this;
  // setTimeout(function() {
  //   that.step();
  // }, this.timeBetweenSteps);
  
  //}
  clearTimeout(steppytime);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

