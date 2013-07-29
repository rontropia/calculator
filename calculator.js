//focus will be handled by the browser thus will not be a problem


$(document).ready(function(){
	var gPrev = $('tbody').find('td').first().text();
	var gInput;
	var gOutput;

	$('.buttons').click(function(){
		gInput = $(this).text();
		gOutput = gPrev+gInput;
		//eto yung display
		$('tbody').find('td').first().text(gOutput);
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
		if((event.which >= 40) && (event.which <=57)){
			if(event.which != 44){
				//console.log('yataaaa');
				gInput = String.fromCharCode(event.which);
				gOutput = gPrev+gInput;
				//eto yung display
				$('tbody').find('td').first().text(gOutput);
				gPrev = gOutput;
				gOutput = '';
				gInput = '';
			}
		}
		if(event.which == 13){
			$('#eval').click();
		}
		
	});
	$('#eval').click(function(){
		try{
			$('thead').find('td').first().text(gPrev);
			$('tbody').find('td').first().text(eval(gPrev));
		}catch(err){
			console.log('Syntax Error!');
		}
	});
	$('#clear').click(function(){
		$('thead').find('td').first().text('');
		$('tbody').find('td').first().text('');
		gPrev = '';
		gOutput = '';
		gInput = '';
	});
	$('#del').click(function(){
		if(gPrev != null){
			gOutput = gPrev.substring(0,gPrev.length - 1);
			$('tbody').find('td').first().text(gOutput);
		}
		gPrev = gOutput;
		gOutput = '';
		gInput = '';
	});
});