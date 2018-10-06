function Round() {
  this.one = 0
  this.two = 0
  this.bonus = 0
}

Round.prototype.addOne = function(result) {
  this.one += result 
}

Round.prototype.addTwo = function(result) {
  this.two += result
}

Round.prototype.addBonus = function(result) {
  this.bonus += result
}

Round.prototype.roundTally = function() {
  var total = this.one + this.two + this.bonus
  return total
}