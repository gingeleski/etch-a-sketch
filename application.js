//makes the initial grid
$(document).ready(function() {
    for (var i = 1; i <= 144; i++) {
    	$('<div />', {
        	'class' : 'blocks',
        	'id'    : 'block' + i
    	}).appendTo('#grid');
	}
});

//clears the current grid
$(".clear").click(function(){
	$(".blocks").css({
		"background-color":"#D8D8D8", 
		"opacity":"1"});
});
