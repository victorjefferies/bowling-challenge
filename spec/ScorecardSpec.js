'use strict';

describe('Scorecard', function() {

  var card

  beforeEach (function() {
    card = new Scorecard()
    card.makeRound()
    
  })

  describe('makeRound', function() {
    it('should create 9 arrays', function() {
      card.makeRound()
      expect(card.game.length).toEqual(9)
    })
  })

  describe('increaseRoundCount', function(){
    it('should increase the round count by one', function() {
      card.makeRound()
      expect(card.roundNumber).toEqual(1)
    })
  })

  describe('tagOne', function() {
    it('should calculate the html tag number of the first ball of the round', function() {
      expect( card.tagOne() ).toEqual(1)
    })
  })

  describe('tagTwo', function() {
    it('should calculate the html tag no. of the second ball of the round', function() {
      card.makeRound()
      expect( card.tagTwo() ).toEqual(2)
    })
  })

  describe('tagTotal', function() {
    it('should calculate the value of the total html tag number', function() {
      card.makeRound()
      expect( card.tagTotal() ).toEqual(3)
    })
  })

  describe('increaseIndex', function() {
    it('should increase the index number by one', function() {
      expect(card.index).toEqual(0)
      card.increaseIndex()
      expect(card.index).toEqual(1)
    })
  })
  describe('calculateScore', function() {
    it('should calcutate the total score so far', function() {
      
      card.game[0].addOne(3)
      card.game[0].addTwo(5)
      
      card.game[1].addOne(4)
      card.game[1].addTwo(2)
      expect(card.calculateScore() ).toEqual(14)
    })
    it('if a strike it should add the score of the next two bowled balls', function() {
      card.game[0].addOne(10)
      card.game[1].addOne(3)
      card.game[1].addTwo(5)
      expect( card.calculateScore() ).toEqual(26)
    })
    it('should add the result of the next two strikes if strikes bowled', function() {
      card.game[0].addOne(10)
      card.game[1].addOne(10)    
      card.game[2].addOne(10)      
      card.game[3].addOne(1)
      card.game[3].addTwo(1)
      expect( card.calculateScore() ).toEqual(65)
    })
  })

  describe('returnSpare', function() {
    it('should add the bonus of a spare to the total', function() {
      card.game[0].addOne(5)
      card.game[0].addTwo(5)
      card.game[1].addOne(3)
      expect(card.returnSpare()).toEqual(3)
    })
  })
})
