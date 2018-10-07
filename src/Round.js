function Round(number = 1) {
  this.pins = 10
  this.number = number
  this.one = 0
  this.two = 0
  this.bonus = 0
  this.spare = false
  
}



Round.prototype.addOne = function(result) {
  if (result == 10) {
    this.pins -= result
    this.one = result
  } else {
    this.one = result 
    this.pins -= result
  }
}


Round.prototype.addTwo = function(result) {
  if (this.one + result == 10) {
    this.two = result
    this.pins -= result
    this.spare = true
  } else { 
    this.two = result
    this.pins -= result
  }
}

Round.prototype.addBonus = function(result) {
  this.bonus += result
}

Round.prototype.roundTally = function() {
  var total = this.one + this.two + this.bonus
  return total
}

Round.prototype.roundOver = function() {
  if (this.pins === 0) {
    return true
  } else {
    this.nextBall()
    return false
 }
}

Round.prototype.nextBall = function() {
  this.addTwo()
}

