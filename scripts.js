console.log('JS is sourced');

$(document).ready(function(){
  //declaring variables
  var o = 'o';
  var x = 'x';
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
    if(slot1.hasClass('o') && slot2.hasClass('o') && slot3.hasClass('o') ||
       slot4.hasClass('o') && slot5.hasClass('o') && slot6.hasClass('o') ||
       slot7.hasClass('o') && slot8.hasClass('o') && slot9.hasClass('o') ||
       slot1.hasClass('o') && slot4.hasClass('o') && slot7.hasClass('o') ||
       slot2.hasClass('o') && slot5.hasClass('o') && slot8.hasClass('o') ||
       slot3.hasClass('o') && slot6.hasClass('o') && slot9.hasClass('o') ||
       slot1.hasClass('o') && slot5.hasClass('o') && slot9.hasClass('o') ||
       slot3.hasClass('o') && slot5.hasClass('o') && slot7.hasClass('o'))
    {
      alert('Winner is O!');
      $('#gameBoard li').text(' ');
      $('#gameBoard li').removeClass('disable');
      $('#gameBoard li').removeClass('o');
      $('#gameBoard li').removeClass('x');

    }else if(
       slot1.hasClass('x') && slot2.hasClass('x') && slot3.hasClass('x') ||
       slot4.hasClass('x') && slot5.hasClass('x') && slot6.hasClass('x') ||
       slot7.hasClass('x') && slot8.hasClass('x') && slot9.hasClass('x') ||
       slot1.hasClass('x') && slot4.hasClass('x') && slot7.hasClass('x') ||
       slot2.hasClass('x') && slot5.hasClass('x') && slot8.hasClass('x') ||
       slot3.hasClass('x') && slot6.hasClass('x') && slot9.hasClass('x') ||
       slot1.hasClass('x') && slot5.hasClass('x') && slot9.hasClass('x') ||
       slot3.hasClass('x') && slot5.hasClass('x') && slot7.hasClass('x'))
    {
      alert('Winner is X!');
      $('#gameBoard li').text(' ');
      $('#gameBoard li').removeClass('disable');
      $('#gameBoard li').removeClass('o');
      $('#gameBoard li').removeClass('x');

    }else if(whoseTurn == 8){
      alert("It's a tie!");
      whoseTurn = 0;
      // $('#gameBoard li').text(' ');
      // $('#gameBoard li').removeClass('disable');
      // $('#gameBoard li').removeClass('o');
      // $('#gameBoard li').removeClass('x');
      whoseTurn = 0;
    }else if($(this).hasClass('disable')){
      alert('This spot has already been used, please select another.');
    }else if (whoseTurn%2 === 0){
      whoseTurn++;
      $(this).text(o);
      $(this).addClass('disable o');
      if(slot1.hasClass('o') && slot2.hasClass('o') && slot3.hasClass('o') ||
         slot4.hasClass('o') && slot5.hasClass('o') && slot6.hasClass('o') ||
         slot7.hasClass('o') && slot8.hasClass('o') && slot9.hasClass('o') ||
         slot1.hasClass('o') && slot4.hasClass('o') && slot7.hasClass('o') ||
         slot2.hasClass('o') && slot5.hasClass('o') && slot8.hasClass('o') ||
         slot3.hasClass('o') && slot6.hasClass('o') && slot9.hasClass('o') ||
         slot1.hasClass('o') && slot5.hasClass('o') && slot9.hasClass('o') ||
         slot3.hasClass('o') && slot5.hasClass('o') && slot7.hasClass('o'))
       {
           alert("Winner is O!");
           whoseTurn = 0;
         }
    }else{
      whoseTurn++;
      $(this).text(x);
      $(this).addClass('disable x');
      if(slot1.hasClass('x') && slot2.hasClass('x') && slot3.hasClass('x') ||
        slot4.hasClass('x') && slot5.hasClass('x') && slot6.hasClass('x') ||
        slot7.hasClass('x') && slot8.hasClass('x') && slot9.hasClass('x') ||
        slot1.hasClass('x') && slot4.hasClass('x') && slot7.hasClass('x') ||
        slot2.hasClass('x') && slot5.hasClass('x') && slot8.hasClass('x') ||
        slot3.hasClass('x') && slot6.hasClass('x') && slot9.hasClass('x') ||
        slot1.hasClass('x') && slot5.hasClass('x') && slot9.hasClass('x') ||
        slot3.hasClass('x') && slot5.hasClass('x') && slot7.hasClass('x'))
          {
            alert("Winner is X!");
            whoseTurn = 0;
          }
      }
      //reset button to reset the game
      $('#resetButton').click(function(){
        console.log( 'reset button clicked' );
        $('#gameBoard li').text(' ');
        $('#gameBoard li').removeClass('disable');
        $('#gameBoard li').removeClass('o');
        $('#gameBoard li').removeClass('x');
        whoseTurn = 0;
      });
    });
  });
