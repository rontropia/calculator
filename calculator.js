function infixToPostfix(input){
	var n = input.split(' ');

	//Define a stack
	var stack;
	var output;

	//alert(n[0] + n[1]);

	//Go through each character in the string
	//If it is between 0 to 9, append it to output string.
	//If it is left brace push to stack
	//If it is operator *+-/ then 
	//      If the stack is empty push it to the stack
	//      If the stack is not empty then start a loop:
	//                         If the top of the stack has higher precedence
	//                         Then pop and append to output string
	//                         Else break
	//                 Push to the stack
/*
	$.each(n,function(index,value){
		if(value == '('){
			stack.push(value);
		}
		if(value == ('*' || '/' || '+' || '-')){
			if(stack == ''){

			}
		}
	});
*/

	//If it is right brace then
	//        While stack not empty and top not equal to left brace
	//        Pop from stack and append to output string
	//        Finally pop out the left brace.

	//If there is any input in the stack pop and append to the output string.

}

$(document).ready(function(){
	$('.buttons').click(function(){
		var prevInput = $('table').data('input');
		var currentInput = $(this).text();

		if((currentInput == '*') || (currentInput == '/') || (currentInput == '+') || (currentInput == '-'))
			$('table').data('input',prevInput+' '+currentInput+' ');
		else
			$('table').data('input',prevInput+''+currentInput);
		
		

		//eto yung display
		$('tbody').find('td').first().text($('table').data('input'));
		
		//alert($(this).text());
	});
	$('#eval').click(function(){
		infixToPostfix($('table').data('input'));
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