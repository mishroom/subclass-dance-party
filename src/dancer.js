
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  left = left;
  

  // use jQuery to create an HTML <span> tag
  $node = $('<span class="dancer"></span>');
  //console.log(this);
 
  makeDancer.prototype.step();



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  makeDancer.prototype.setPosition(this.top, this.left);

};
makeDancer.prototype.constructor = makeDancer;

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  console.log('this', this);
  $node.css(styleSettings);
};