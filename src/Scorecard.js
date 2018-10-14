function Scorecard() {

  this.game = new Array()
  this.roundNumber = 1
  this.roll1 = 1
  this.roll2 = 2
  this.roll3 = 3
  this.index = 0
}



Scorecard.prototype.makeRound = function() {
  for(i = 0; i < 9 ; i++) {
    this.game[i] = new Round()
  }
}

Scorecard.prototype.increaseIndex = function () {
  this.index ++
  // this.increaseRoundCount()
}

Scorecard.prototype.increaseRoundCount = function() {
  this.roundNumber ++
}

Scorecard.prototype.tagOne = function() {
  return ((this.index + 1) * 3) - 2
}

Scorecard.prototype.tagTwo = function() {
  return ((this.index + 1) * 3) - 1
}

Scorecard.prototype.tagTotal = function() {
  return (this.index + 1) * 3
}

Scorecard.prototype.calculateBasicScore =  function() {
  var score = 0
  for ( i = 0; i < 9; i ++ ) {
    score = score + this.game[i].roundTally()
  }
  return score
}

Scorecard.prototype.returnStrikes = function() {
  var strikeScore = 0
  for (i = 0; i < 8 ; i ++) {
    if (this.game[i].strike && this.game[i + 1].one == 10) {
      strikeScore =  strikeScore + this.game[i + 1].one + this.game[i + 2].one
    } else if (this.game[i].strike && !this.game[i + 1].strike) {
      strikeScore =  strikeScore + this.game[i + 1].one + this.game[i + 1].two
    }
  }
  // console.log(`strikescore ${strikeScore}`)}
  return strikeScore
}

Scorecard.prototype.returnSpare = function() {
  var spareScore = 0
  for (i = 0; i < 9 ; i ++ ) {
    if (this.game[i].spare) {
      spareScore = spareScore + this.game[i + 1].one
    }
  }
  return spareScore
}



Scorecard.prototype.calculateScore = function () {
  return this.calculateBasicScore() + this.returnStrikes() + this.returnSpare()
  // total = total + this.returnStrikes()
  // return total
}
// Scorecard.prototype.calculateScore = function() {
//   var score = 0
//   for( i = 0 ; i < this.roundNumber ; i ++ ) {
//     // if (this.game[i].strike && this.game[i+ 1] != undefined && this.game[i + 1].strike){
//     //   score = score + this.game[i].roundTally() + this.game[i + 1].one + this.game[i + 2].one
//     // } else if (this.game[i].strike && this.game[i + 1] != undefined ) {
//     //   score = score + this.game[i].roundTally() + this.game[i + 1].one + this.game[i + 1].two
//     // } else {
//       score = score + this.game[i].roundTally() + this.returnStrike(i)
      
//     // }
//   }
//   return score
// }

// Scorecard.prototype.returnStrike = function(i) {
//   if ( this.game[i - 2] != undefined && this.game[i - 2].strike && this.game[i - 1].strike) {
//     // var tem this.game[i - 1].one + this.game[i].one
//     var temp = this.game[i -1 ].one + this.game[i].one
//     if ( !this.game[i].strike) {
//       return temp + this.game[i].one + this.game[i].two 
//     } else {
//       return temp
//     }
//   } else if ( this.game[i - 1] != undefined && this.game[i - 1].strike) {
//     return this.game[i].one + this.game[i].two 
//   } else {
//     return 0
//   }
// }
