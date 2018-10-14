$( document ).ready(function() {

card = new Scorecard()  
card.makeRound()

$( '#button2' ).hide()
$( '#button3' ).hide() 


$( '#button1' ).click(function() {
  var num = Number($( '#mySelect' ).val())
  card.game[card.index].addOne(num) 
  if (num === 10) {
    $( '#roll' + String( card.tagOne() ) ).html(card.game[card.index].one)
    $( '#roll' + String( card.tagTwo() ) ).html(card.game[card.index].two)
    $( '#roll' + String( card.tagTotal() ) ).html( "X" )    
    card.increaseIndex()
    $( '#button1' ).show()
    $( '#button2' ).hide()
  } else {
    $( '#roll' + String( card.tagOne() ) ).html(card.game[card.index].one)
    $( '#button1' ).hide()
    $( '#button2' ).show()
    }
  }) 

$('#button2').click(function() {
  var num = $( '#mySelect' ).val()
  card.game[card.index].addTwo(Number(num))
  $('#roll' + String( card.tagTwo() ) ).html( card.game[card.index].two )
  if (card.game[card.index].roundTally() === 10) {
    $('#roll' + String( card.tagTotal() ) ).html( "/" )  
  } else {
    $('#roll' + String( card.tagTotal() ) ).html( card.calculateScore() )
  }
  card.increaseIndex()
  $( '#button2' ).hide()
  $( '#button1' ).show()

 
})


})
