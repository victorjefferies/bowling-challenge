'use strict';

describe('Round', function(){

  var round;
  
  beforeEach(function() {
    round = new Round()
  })



  it('score should be 0,0,0 when created', function() {
    expect(round.number).toEqual(1)
    expect(round.one).toEqual(0)
    expect(round.two).toEqual(0)
    expect(round.bonus).toEqual(0)
    expect(round.roundOver).toEqual(false)
  })

  describe('addOne', function() {
    it('should change the score for the required bowl', function() {
      round.addOne(9)
      expect(round.one).toEqual(9)
    })
    it('should return 10', function() {
      round.addOne(10)
      expect(round.roundOver).toEqual(true)
      expect(round.one).toEqual(10)      
    })
  })
  describe('addTwo', function() {
    it('should return 10', function() {
      round.addOne(8)
      round.addTwo(2)
      expect(round.roundOver).toEqual(true)
      expect(round.two).toEqual(2)  
      expect(round.spare).toEqual(true)    
    })
  })
  describe('addBonus', function() {
    it('should change the score for the required bowl', function() {
      round.addBonus(2)
      expect(round.bonus).toEqual(2)      
    })
  })

  describe('roundTally', function() {
    it('should tally the result of the round', function() {
      round.addOne(5)
      round.addTwo(5)
      round.addBonus(5)
      expect(round.roundTally()).toEqual(15)
    })
  })
})