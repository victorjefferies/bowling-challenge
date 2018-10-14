$( document ).ready(function() {

card = new Scorecard()  
card.makeRound()

$( '#button2' ).hide()
$( '#button3' ).hide() 


$( '#button1' ).click(function() {
  var num = Number($( '#mySelect' ).val())
  console.log(num)
  card.game[card.roundNumber - 1].addOne(num) 
  if (num === 10) {
    $( '#roll' + String( card.tagOne() ) ).html(card.game[card.roundNumber - 1].one)
    $( '#roll' + String( card.tagTwo() ) ).html(card.game[card.roundNumber - 1].two)
    $( '#roll' + String( card.tagTotal() ) ).html( card.calculateScore() )    
    
  } else {
    $( '#roll' + String( card.tagOne() ) ).html(card.game[card.roundNumber - 1].one)
  }
  $( '#button1' ).hide()
  $( '#button2' ).show()

}) 

$('#button2').click(function() {
  var num = $( '#mySelect' ).val()
  card.game[card.roundNumber - 1].addTwo(Number(num))
  $('#roll' + String( card.tagTwo() ) ).html( card.game[card.roundNumber - 1].two )
  $('#roll' + String( card.tagTotal() ) ).html( card.calculateScore() )
  card.makeRound()
  $( '#button2' ).hide()
  $( '#button1' ).show()
  console.log('finished')
 
})


$( '#nextframe' ).click(function() {
  card.makeRound()
  console.log('inside click event')
})

})
