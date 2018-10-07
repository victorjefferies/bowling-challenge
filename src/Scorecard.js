function Scorecard(roundNumber = 1) {
  this.roundOne = new Round()
  this.roundTwo = new Round()
  this.roundThree = new Round()
  this.roundFour = new Round()
  this.roundFive = new Round()
  this.roundSix = new Round()
  this.roundSeven = new Round()
  this.roundEight = new Round()
  this.roundNine = new Round()
  this.roundTen = new Round()
  this.total_ = 0
  roundNumber = roundNumber
}

Scorecard.prototype.score = function() {
  return this._total
}

Scorecard.prototype.addTally = function(result) {
  this._total += result
}




