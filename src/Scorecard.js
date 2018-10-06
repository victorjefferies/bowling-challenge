function Scorecard() {
  this._roundOne = 0
  this._roundTwo = 0
  this._roundThree = 0
  this._roundFour = 0
  this._roundFive = 0
  this._roundSix = 0
  this._roundSeven = 0
  this._roundEight = 0
  this._roundNine = 0
  this._roundTen = 0
  this._total = 0
}

Scorecard.prototype.score = function() {
  return this._total
}

Scorecard.prototype.addTally = function(result) {
  this._total += result
}

