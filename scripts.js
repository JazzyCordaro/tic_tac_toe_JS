console.log('JS is sourced');

$(document).ready(function(){
  var o = 'O';
  var x = 'X';
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
       slot3.hasClass('O') && slot5.hasClass('O') && slot7.hasClass('O'))
    {
      alert('Winner is O!');
      $('#gameBoard li').text(' ');
      // $('#gameBoard li').removeClass('disable');
      $('#gameBoard li').removeClass('O');
      $('#gameBoard li').removeClass('X');

    }else if(
       slot1.hasClass('X') && slot2.hasClass('X') && slot3.hasClass('X') ||
       slot4.hasClass('X') && slot5.hasClass('X') && slot6.hasClass('X') ||
       slot7.hasClass('X') && slot8.hasClass('X') && slot9.hasClass('X') ||
       slot1.hasClass('X') && slot4.hasClass('X') && slot7.hasClass('X') ||
       slot2.hasClass('X') && slot5.hasClass('X') && slot8.hasClass('X') ||
       slot3.hasClass('X') && slot6.hasClass('X') && slot9.hasClass('X') ||
       slot1.hasClass('X') && slot5.hasClass('X') && slot9.hasClass('X') ||
       slot3.hasClass('X') && slot5.hasClass('X') && slot7.hasClass('X'))
    {
      alert('Winner is X!');
      $('#gameBoard li').text(' ');
      // $('#gameBoard li').removeClass('disable');
      $('#gameBoard li').removeClass('O');
      $('#gameBoard li').removeClass('X');
    }else if(whoseTurn == 9){
      alert("It's a tie!");
      $('#gameBoard li').text(' ');
      // $('#gameBoard li').removeClass('disable');
      $('#gameBoard li').removeClass('O');
      $('#gameBoard li').removeClass('X');
      whoseTurn = 0;
    }else if($(this).hasClass('disable')){
      alert('This spot has already been filled, please select another.');
    }else if (whoseTurn%2 == 0){
      whoseTurn++;
      $(this).text(o);
      $(this).addClass('disable O');
      if(slot1.hasClass('O') && slot2.hasClass('O') && slot3.hasClass('O') ||
         slot4.hasClass('O') && slot5.hasClass('O') && slot6.hasClass('O') ||
         slot7.hasClass('O') && slot8.hasClass('O') && slot9.hasClass('O') ||
         slot1.hasClass('O') && slot4.hasClass('O') && slot7.hasClass('O') ||
         slot2.hasClass('O') && slot5.hasClass('O') && slot8.hasClass('O') ||
         slot3.hasClass('O') && slot6.hasClass('O') && slot9.hasClass('O') ||
         slot1.hasClass('O') && slot5.hasClass('O') && slot9.hasClass('O') ||
         slot3.hasClass('O') && slot5.hasClass('O') && slot7.hasClass('O'))
         {
           alert("Winner is O!");
           whoseTurn = 0;
    }else{
      whoseTurn++;
      $(this).text(x);
      $(this).addClass('disable X');
      if(slot1.hasClass('X') && slot2.hasClass('X') && slot3.hasClass('X') ||
        slot4.hasClass('X') && slot5.hasClass('X') && slot6.hasClass('X') ||
        slot7.hasClass('X') && slot8.hasClass('X') && slot9.hasClass('X') ||
        slot1.hasClass('X') && slot4.hasClass('X') && slot7.hasClass('X') ||
        slot2.hasClass('X') && slot5.hasClass('X') && slot8.hasClass('X') ||
        slot3.hasClass('X') && slot6.hasClass('X') && slot9.hasClass('X') ||
        slot1.hasClass('X') && slot5.hasClass('X') && slot9.hasClass('X') ||
        slot3.hasClass('X') && slot5.hasClass('X') && slot7.hasClass('X'))
          {
            alert("Winner is X!");
            whoseTurn = 0;
          }
      }
      //reset button
      $('#resetButton').click(function(){
        $('#gameBoard li').text(' ');
        // $('#gameBoard li').removeClass('disable');
        $('#gameBoard li').removeClass('O');
        $('#gameBoard li').removeClass('X');
        whoseTurn = 0;
      });
    }
  });
});
