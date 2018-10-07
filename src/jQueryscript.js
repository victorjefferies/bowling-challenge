$( document ).ready(function() {
  
round = new Round()


$('#button1').click(function() {
  var num = Number($( '#mySelect' ).val())
  round.addOne(num)  
  if (num === 10) {
    $( '#output' ).html(round.one)
    $( '#output2' ).html(round.two)
    $( '#output3' ).html(round.one)
    
  } else {
    $( '#output' ).html(round.one)
  }
}) 

$('#button2').click(function() {
  var num = $( '#mySelect' ).val()
  round.addTwo(Number(num))
  $('#output2').html(round.two)
  $('#output3').html(round.two + round.one)
})

})