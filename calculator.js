//focus will be handled by the browser thus will not be a problem


$(document).ready(function(){
	var gPrev = $('tbody').find('td').first().text();
	var gInput;
	var gOutput;

	$('.button').click(function(){
		gInput = $(this).text();
		gOutput = gPrev+gInput;
		//eto yung display
		$('#display').text(gOutput);
		gPrev = gOutput;
		gOutput = '';
		gInput = '';
	});
	$('html').keydown(function(event){
		if(event.which == 8){
			$('#del').click();
		}
	});
	$('html').keypress(function(event){
		if((event.which >= 40) && (event.which <=57) && (event.which != 44)){
			gInput = String.fromCharCode(event.which);
			gOutput = gPrev+gInput;
			//eto yung display
			$('#display').text(gOutput);
			gPrev = gOutput;
			gOutput = '';
			gInput = '';
		}else if(event.which == 13){
			$('#eval').click();
		}
	});
	$('#eval').click(function(){
		try{
			gPrev = gPrev.replace(/^0+/, '');
			$('thead').find('td').first().text(gPrev);
			$('#display').text(eval(gPrev));
		}catch(err){
			console.log('Syntax Error!');
		}
	});
	$('#clear').click(function(){
		$('thead').find('td').first().text('');
		$('#display').text('');
		gPrev = '';
		gOutput = '';
		gInput = '';
	});
	$('#del').click(function(){
		if(gPrev != null){
			gOutput = gPrev.substring(0,gPrev.length - 1);
			$('#display').text(gOutput);
		}
		gPrev = gOutput;
		gOutput = '';
		gInput = '';
	});
});