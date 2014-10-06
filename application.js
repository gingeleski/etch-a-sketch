$(function() {
  buildGrid();
  hover();
  clear();
  randomColor();
  randomColorHover();
  backToGray();
  trail();
  gradient();
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
      $(this).css("opacity", "1");
    }, function() {
      $(this).css("background-color", randomColor());
      $(this).css("opacity", "1");
    });
  });
}

//set sketch color back to the default gray
function backToGray() {
  $(".default").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", "#a9a9a9");
      $(this).css("opacity", "1");
    }, function() {
      $(this).css("background-color", "#a9a9a9");
      $(this).css("opacity", "1")
    });
  });
}

//a white kind of trail will follow the sketch mouse around
function trail() {
  $(".trail").click(function() {
    $("td").hover(function() {
      $(this).css("opacity", "0");
    },

    function() {
      $(this).fadeTo("slow", 1);
    });
  });
};

//when you sketch the blocks gradually change color
function gradient() {
  $(".gradient").click(function() {
    $("td").hover(function() {
      $(this).css("opacity", $(this).css("opacity") * 0.75);
    }, function() {
      $(this).css("opacity", $(this).css("opacity") * 0.75);
    });
  });
}
