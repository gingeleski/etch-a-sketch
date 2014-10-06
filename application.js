$(function() {
  buildGrid();
  hover();
  clear();
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
