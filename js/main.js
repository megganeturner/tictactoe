$(document).ready(function() {
  var checkForWin = function() {
    var playerOneScore;
    var playerTwoScore;

    var playerOneWins = function() {
      $('#message').css('visibility', 'visible').html('<p>Player One Wins!</p>');
      playerOneScore = playerOneScore + 1;
      $('#player-one .score').html(playerOneScore);
    };
    var playerTwoWins = function() {
      $('#message').css('visibility', 'visible').html('<p>Player Two Wins!</p>');
      playerTwoScore = playerTwoScore + 1;
      $('#player-two .score').html(playerTwoScore);
    };

    // First Row
    if (($('.rowFirst').find('.xValue').length) === 3) {
      playerOneWins();
    } else if (($('.rowFirst').find('.oValue').length) === 3) {
      playerTwoWins();
    };

    // Second Row
    if (($('.rowSecond').find('.xValue').length) === 3) {
      playerOneWins();
    } else if (($('.rowSecond').find('.oValue').length) === 3) {
      playerTwoWins();
    };

    // Third Row
    if (($('.rowThird').find('.xValue').length) === 3) {
      playerOneWins();
    } else if (($('.rowThird').find('.oValue').length) === 3) {
      playerTwoWins();
    };

    // First Column
    if($('.columnFirst.xValue').length === 3) {
      playerOneWins();
    } else if ($('.columnFirst.oValue').length === 3) {
      playerTwoWins();
    }

    // Second Column
    if($('.columnSecond.xValue').length === 3) {
      playerOneWins();
    } else if ($('.columnSecond.oValue').length === 3) {
      playerTwoWins();
    }

    // Third Column
    if($('.columnThird.xValue').length === 3) {
      playerOneWins();
    } else if ($('.columnThird.oValue').length === 3) {
      playerTwoWins();
    }

    // Left diagonal (from top left)
    if ($('.leftDiag.xValue').length === 3) {
      playerOneWins();
    } else if ($('.leftDiag.oValue').length === 3) {
      playerTwoWins();
    }

    // Right diagonal (from top right)
    if ($('.rightDiag.xValue').length === 3) {
      playerOneWins();
    } else if ($('.rightDiag.oValue').length === 3) {
      playerTwoWins();
    }

  }

  var togglePlayers = function() {
    $('#player-one').toggleClass('active');
    $('#player-two').toggleClass('active');
  }

  $('td').on('click', function() {
    if ($(this).hasClass('complete')) {
      console.log('Please pick a vacant square');
    } else {
      if ($('#player-one').hasClass('active')) {
        $(this).html('x').addClass('xValue');
      } else {
        $(this).html('o').addClass('oValue');
      }
      checkForWin();
      togglePlayers();
      $(this).addClass('complete');
    }
  });


  $('.reset').on('click', function() {
    $('td').empty().removeClass('complete xValue oValue');
    $('#message').css('visibility', 'hidden');
  });

});
