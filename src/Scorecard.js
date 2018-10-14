function Scorecard() {

  this.game = new Array()
  this.roundNumber = 0
  this.roll1 = 1
  this.roll2 = 2
  this.roll3 = 3
}


Scorecard.prototype.makeRound = function() {
  if (this.roundNumber < 9 ) {
   this.game[this.roundNumber] = new Round()
   this.increaseRoundCount()

  } else {
    return "add final round"
  }
}

Scorecard.prototype.increaseRoundCount = function() {
  this.roundNumber ++
}

Scorecard.prototype.tagOne = function() {
  return (this.roundNumber * 3) - 2
}

Scorecard.prototype.tagTwo = function() {
  return (this.roundNumber * 3) - 1
}

Scorecard.prototype.tagTotal = function() {
  return this.roundNumber * 3
}

Scorecard.prototype.calculateScore = function() {
  var score = 0
  for( i = 0 ; i < this.roundNumber ; i ++ ) {
    // if (this.game[i].strike && this.game[i+ 1] != undefined && this.game[i + 1].strike){
    //   score = score + this.game[i].roundTally() + this.game[i + 1].one + this.game[i + 2].one
    // } else if (this.game[i].strike && this.game[i + 1] != undefined ) {
    //   score = score + this.game[i].roundTally() + this.game[i + 1].one + this.game[i + 1].two
    // } else {
      score = score + this.game[i].roundTally() + this.returnStrike(i)
      
    // }
  }
  return score
}

Scorecard.prototype.returnStrike = function(i) {
  if ( this.game[i - 2] != undefined && this.game[i - 2].strike && this.game[i - 1].strike) {
    // var tem this.game[i - 1].one + this.game[i].one
    var temp = this.game[i -1 ].one + this.game[i].one
    if ( !this.game[i].strike) {
      return temp + this.game[i].one + this.game[i].two 
    } else {
      return temp
    }
  } else if ( this.game[i - 1] != undefined && this.game[i - 1].strike){
    return this.game[i].one + this.game[i].two 
  } else {
    return 0
  }
}













