'use strict';

describe("Scorecard", function() {

  var card

  beforeEach (function() {
    card = new Scorecard()
  })
   
  describe('score', function() {
    it('should output the score', function() {
      expect(card.score()).toEqual(0)
    })
  })

  describe('addTally', function(){
    it('should add the number of pins that get knocked over', function() {
      card.addTally(5)
      expect(card.score()).toEqual(5)
    })
  })  
})
