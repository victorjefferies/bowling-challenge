function Scorecard(roundNumber = 1) {
  this._roundOne = new Round()
  this._roundTwo = new Round()
  this._roundThree = new Round()
  this._roundFour = new Round()
  this._roundFive = new Round()
  this._roundSix = new Round()
  this._roundSeven = new Round()
  this._roundEight = new Round()
  this._roundNine = new Round()
  this._roundTen = new Round()
  this._total = 0
  roundNumber = roundNumber
}

Scorecard.prototype.score = function() {
  return this._total
}

Scorecard.prototype.addTally = function(result) {
  this._total += result
}


