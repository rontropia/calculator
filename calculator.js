$(document).ready(function(){
	var previous_equation = $('tbody').find('td').first().text();
	$('.button').click(function(){
		if(previous_equation != null){
			gInput = $(this).text();
			console.log(this);
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
		previous_equation = previous_equation.replace("*"," * ").replace("/"," / ").replace("+"," + ").replace("-"," - ").replace("("," ( ").replace(")"," ) ")
		var unprocessedInput = previous_equation.split(" ");
		$.each(unprocessedInput,function(index,element){
			if((element != '*')||(element != '/')||(element != '+')||(element != '-')||(element != '(')||(element != ')')){
				//console.log('shit just got real!');
				unprocessedInput[index] = element.replace(/^0{2}/, '');
			}
		});
		var processedInput = unprocessedInput.join('');
		try{
			previous_equation = eval(processedInput)
			$('thead').find('td').first().text(processedInput);
		}catch(err){
			$('thead').find('td').first().text("Syntax Error!");
			previous_equation = processedInput;
		}
		$('#display').text(previous_equation);
	});
	$('#clear').click(function(){
		$('thead').find('td').first().text('');
		$('#display').text('');
		previous_equation = '';
	});
	$('#del').click(function(){
		if(previous_equation != null){
			var stringEquation = String(previous_equation);
			gOutput = stringEquation.substring(0,stringEquation.length - 1);
			$('#display').text(gOutput);
		}
		previous_equation = gOutput;
	});
});