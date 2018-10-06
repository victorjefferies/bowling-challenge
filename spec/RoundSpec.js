'use strict';

describe('Round', function(){

  var round
  
  beforeEach(function() {
    round = new Round()
  })

  it('score should be 0,0,0 when created', function() {
    expect(round.one).toEqual(0)
    expect(round.two).toEqual(0)
    expect(round.bonus).toEqual(0)
  })

  describe('addOne', function() {
    it('should change the score for the required bowl', function() {
      round.addOne(2)
      expect(round.one).toEqual(2)
    })
  })
  describe('addOne', function() {
    it('should change the score for the required bowl', function() {
      round.addOne(2)
      expect(round.one).toEqual(2)
    })
  })
  describe('addOne', function() {
    it('should change the score for the required bowl', function() {
      round.addOne(2)
      expect(round.one).toEqual(2)      
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