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
    score = score + this.game[i].roundTally()
  }
  return score
}

Scorecard.prototype.strike = function() {
  
  var result = new Promise(function( resolve, reject ) {
    console.log('£££££££')
    console.log(result)
    if ( this.game[this.roundNumber - 1].strike ) {
      resolve( this.game[this.roundNumber + 1] == !null)  //trying to say resolve when this happens
    } else {
     reject( 'no strike' ) 
    }
  })
  console.log(result)

  result.then(function(fromResolve) {
    return fromResolve
  }).catch(function(fromReject) {
    return this.calculateScore()
    
  })
}






