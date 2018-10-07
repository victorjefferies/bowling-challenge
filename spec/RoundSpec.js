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
    expect(round.pins).toEqual(10)
  })

  describe('addOne', function() {
    it('should change the score for the required bowl', function() {
      round.addOne(9)
      expect(round.one).toEqual(9)
      expect(round.pins).toEqual(1)
      expect(round.round).toEqual(2)
    })
    it('should return 10', function() {
      round.addOne(10)
      expect(round.one).toEqual(10)      
    })
  })
  describe('addTwo', function() {
    it('should return 10', function() {
      round.addOne(8)
      round.addTwo(2)
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

  describe('roundOver', function() {
    it('Should return false if the round is not finished', function() {
      round.addOne(5)
      expect(round.roundOver()).toEqual(false)
    })
    it('Should return true if the round is finished', function(){
      round.addOne(10)
      console.log(round)
      expect(round.roundOver()).toEqual(true)
    })
  })

  describe('nextBall', function(){
    it('Should return the next ball if roundOver is false', function() {
      spyOn(round, 'nextBall')
      round.addOne(5)
      round.roundOver()
      expect(round.nextBall).toHaveBeenCalled()
    })
  })
})

