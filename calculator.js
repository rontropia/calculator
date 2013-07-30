$(document).ready(function(){
	var previous_equation = $('tbody').find('td').first().text();

	$('.button').click(function(){
		if(previous_equation != null){
			gInput = $(this).text();
			gOutput = previous_equation+gInput;
			$('#display').text(gOutput);
			previous_equation = gOutput;	
		}
	});
	$('html').keydown(function(event){
		if(event.which == 8){
			$('#del').click();
		}
	});
	$('html').keypress(function(event){
		if((event.which >= 40) && (event.which <=57) && (event.which != 44)){
			gInput = String.fromCharCode(event.which);
			gOutput = previous_equation+gInput;
			$('#display').text(gOutput);
			previous_equation = gOutput;
		}else if(event.which == 13){
			$('#eval').click();
		}
	});
	$('#eval').click(function(){
		try{
			previous_equation = previous_equation.replace(/^0+/, '');
			$('thead').find('td').first().text(previous_equation);
			$('#display').text(eval(previous_equation));
		}catch(err){
			$('thead').find('td').first().text('Syntax Error! '+err);
		}
	});
	$('#clear').click(function(){
		$('thead').find('td').first().text('');
		$('#display').text('');
		previous_equation = '';
	});
	$('#del').click(function(){
		if(previous_equation != null){
			gOutput = previous_equation.substring(0,previous_equation.length - 1);
			$('#display').text(gOutput);
		}
		previous_equation = gOutput;
	});
});