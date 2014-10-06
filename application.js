$(function() {
  buildGrid();
  hover();
  clear();
  randomColor();
  randomColorHover();
  backToGray();
});

// makes the table for grid
function buildGrid() {

  var boxSize = 25;

  $(".grid").append("<table><tbody></table></tbody>");

  for(var i = 0; i < 18; i++) {
    $("tbody").append("<tr></tr>")
  };

  for(var i = 0; i < 18; i++) {
    $("tr").append("<td></td>");
    $("td").css("height", boxSize);
    $("td").css("width", boxSize);
  };
};

//changes color to the default gray
function hover() {
  $("td").hover(function() {
    $(this).css("background-color", "#a9a9a9");
  },

  function() {
    $(this).css("background-color", "#a9a9a9");
  });
};

//clears the current grid
function clear() {
	$(".clear").click(function(){
		$("td").css({
			"background-color":"#d8d8d8", 
			"opacity":"1"});
	});
};

//computes a random color in RGB for the random mode
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," +  g + ","+ b + ")"
};

//random mode - instead of turning blocks gray they turn random colors
function randomColorHover() {
  $(".randomness").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", randomColor());
    }, function() {
      $(this).css("background-color", randomColor());
    });
  });
}

function backToGray() {
  $(".default").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", "#a9a9a9");
    }, function() {
      $(this).css("background-color", "#a9a9a9");
    });
  });
}
