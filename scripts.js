console.log('JS is sourced');

$(document).ready(function(){
  var x = 'X';
  var o = 'O';
  var whoseTurn = 0;
  //slot variables
  var slot1 = $('#slot1');
  var slot2 = $('#slot2');
  var slot3 = $('#slot3');
  var slot4 = $('#slot4');
  var slot5 = $('#slot5');
  var slot6 = $('#slot6');
  var slot7 = $('#slot7');
  var slot8 = $('#slot8');
  var slot9 = $('#slot9');

  $('#gameBoard li').on('click', function(){
    if(slot1.hasClass('O') && slot2.hasClass('O') && slot3.hasClass('O') ||
       slot4.hasClass('O') && slot5.hasClass('O') && slot6.hasClass('O') ||
       slot7.hasClass('O') && slot8.hasClass('O') && slot9.hasClass('O') ||
       slot1.hasClass('O') && slot4.hasClass('O') && slot7.hasClass('O') ||
       slot2.hasClass('O') && slot5.hasClass('O') && slot8.hasClass('O') ||
       slot3.hasClass('O') && slot6.hasClass('O') && slot9.hasClass('O') ||
       slot1.hasClass('O') && slot5.hasClass('O') && slot9.hasClass('O') ||
       slot3.hasClass('O') && slot5.hasClass('O') && slot7.hasClass('O') ||
  ){
    alert('Winner is 0!');
    $('#gameBoard li').text(' ');
    $('#gameBoard li').removeClass('disable');
    $('#gameBoard li').removeClass('O');
    $('#gameBoard li').removeClass('X');
    }
  });
});
