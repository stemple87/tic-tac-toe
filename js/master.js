function TicTacToeBox(gridLocation) {
  this.location = gridLocation;
  this.mark = null;

}

var winCheck = function(boxArray) {
  var win = "win";
  if(boxArray[0].mark === boxArray[1] && boxArray[1].mark === boxArray[2] && boxArray[0].mark != null) {
    alert(boxArray[1].mark + " Wins!");
    return win;
  } else if (boxArray[3].mark === boxArray[4].mark && boxArray[4].mark === boxArray[5].mark && boxArray[3].mark != null) {
    alert(boxArray[3].mark + " Wins!");
    return win;
  } else if (boxArray[6].mark === boxArray[7].mark && boxArray[7].mark === boxArray[8].mark && boxArray[6].mark != null) {
    alert(boxArray[6].mark + " Wins!");
    return win;
  } else if (boxArray[0].mark === boxArray[3].mark && boxArray[3].mark === boxArray[6].mark && boxArray[0].mark != null) {
    alert(boxArray[0].mark + " Wins!");
    return win;
  } else if (boxArray[1].mark === boxArray[4].mark && boxArray[4].mark === boxArray[7].mark && boxArray[1].mark != null) {
    alert(boxArray[1].mark + " Wins!");
    return win;
  } else if (boxArray[2].mark === boxArray[5].mark && boxArray[5].mark === boxArray[8].mark && boxArray[2].mark != null) {
    alert(boxArray[2].mark + " Wins!");
    return win;
  } else if (boxArray[0].mark === boxArray[4].mark && boxArray[4].mark === boxArray[8].mark && boxArray[0].mark != null) {
    alert(boxArray[0].mark + " Wins!");
    return win;
  } else if (boxArray[6].mark === boxArray[4].mark && boxArray[4].mark === boxArray[2].mark && boxArray[6].mark != null) {
    alert(boxArray[6].mark + " Wins!");
    return win;
  }
}

var reset = function(boxArray) {
  for (var i = 0; i < boxArray.length; i++) {
    boxArray[i].mark = null;
    var divLocation = "#" + i;
    $(divLocation).empty();
  }
}

$(document).ready(function(){
  var playerTurn = 1;
  var boxArray = [];
  var playerCount = null;
  for(i = 0; i < 9; i++) {
    var currentBox = new TicTacToeBox(0);
    boxArray.push(currentBox);

  }
  $("#1player").click(function(){
    playerCount = 1;
    $("#gameArea").show();
  });

  $("#2player").click(function(){
    playerCount = 2;
    $("#gameArea").show();
  });

  $(".box").click(function(event) {
    var currentMark = null;
    if(playerTurn % 2 === 0) {
      currentMark = "o";
      $("#playerTurn").text("O");
    } else {
      currentMark = "x";
      $("#playerTurn").text("X");
    }

    if(boxArray[event.target.id].mark === null) {
      playerTurn += 1;
      var target = "#" + event.target.id;
      $(target).text(currentMark);
      boxArray[event.target.id].mark = currentMark;
    }

    if (winCheck(boxArray) === "win") {
      reset(boxArray, playerTurn);
      playerTurn = 1;
    }


    // one player

    if(playerCount === 1) {
      var currentMark = null;
      if(playerTurn % 2 === 0) {
        currentMark = "o";
        $("#playerTurn").text("O");
      } else {
        currentMark = "x";
        $("#playerTurn").text("X");
      }

      var availableTargets = []
      for(i = 9; i >= 0; i--) {
        var randomNumber = Math.floor((Math.random() * (i - 1)));
        if (boxArray[randomNumber].mark === null) {
          playerTurn += 1;
          var target = "#" + randomNumber;
          $(target).text(currentMark);
          boxArray[event.target.id].mark = currentMark;
          break;
        }
      }
    }
  });
});
