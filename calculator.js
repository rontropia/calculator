$(document).ready(function(){
	$('.buttons').click(function(){
		var prevInput = $('table').data('input');
		var currentInput = $(this).text();

		//if((currentInput == '*') || (currentInput == '/') || (currentInput == '+') || (currentInput == '-'))
		//	$('table').data('input',prevInput+' '+currentInput+' ');
		//else
			$('table').data('input',prevInput+''+currentInput);
		//eto yung display
		$('tbody').find('td').first().text($('table').data('input'));
	});
	$('#eval').click(function(){
		var userInput = $('table').data('input');
		$('thead').find('td').first().text(userInput);
		$('tbody').find('td').first().text(eval(userInput));
	});
	$('#clear').click(function(){
		$('table').data('input','');
		$('tbody').find('td').first().text($('table').data('input'));
	});
	$('#del').click(function(){
		var oldInput = $('table').data('input');
		if(oldInput != null){
			$('table').data('input',oldInput.substring(0,oldInput.length - 1));
			$('tbody').find('td').first().text($('table').data('input'));
		}
	});
});