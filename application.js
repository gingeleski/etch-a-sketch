$(document).ready(function() {

    for (var i = 1; i <= 144; i++) {
    	$('<div />', {
        	'class' : 'blocks',
        	'id'    : 'block' + i
    	}).appendTo('#grid');
	}

});