$( document ).ready(function() {
  
round = new Round()


$('#testbutton').click(function() {
  var x = $( '#mySelect' ).val()
  round.addOne(Number(x))
  round.addOne(2)

  $('#output').html(round.one)
  
  
}) 

})