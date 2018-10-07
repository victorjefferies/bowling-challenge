function Round(number = 1) {
  this.pins = 10
  this.number = number
  this.one = 0
  this.two = 0
  this.bonus = 0
  this.roundOver = false
  this.spare = false
  
}

Round.prototype.addOne = function(result) {
  if (result == 10) {
    this.pins -= result
    this.one = result
    this.roundOver = true
  } else {
    this.one += result 
  }
}

Round.prototype.addTwo = function(result) {
  if (this.one + result == 10) {
    this.two = result
    this.roundOver = true
    this.spare = true
  } else { 
    this.two += result
    this.roundOver = true 
  }
}

Round.prototype.addBonus = function(result) {
  this.bonus += result
}

Round.prototype.roundTally = function() {
  var total = this.one + this.two + this.bonus
  return total
}

