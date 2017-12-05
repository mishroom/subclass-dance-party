describe('LineDancer', function() {

  var lineDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lineDancer = new StormTrooper(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(lineDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates the node', function() {
    sinon.spy(lineDancer.$node, 'animate');
    lineDancer.step();
    expect(lineDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(lineDancer, 'step');
      expect(lineDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(lineDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lineDancer.step.callCount).to.be.equal(2);
    });
  });
});