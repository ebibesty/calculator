console.log('hello World');
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
// console.log('button');
function square () {
	Math.pow(button, 2);
	return ;
}

buttons.map( button => {


	button.addEventListener('click', (e) => {
		
		switch(e.target.innerText){
			case 'C':
				display.innerText = '';
				break;
			case '←':
				if(display.innerText){
				display.innerText = display.innerText.slice(0,-1);
				}
				break;
			case 'π':
				if(display.innerText){
				display.innerText+= innerText = 3.142;
				}
				break;
			case '**':
				if(display.innerText){
				display.innerText+= square(display.innerText);
				}
				break;
			// case '²':
			// 	if(display.innerText){
			// 		display.innerText = square(display.innerText);
			// 		}
			// 	break;

			case '=':
				try{
					display.innerText = eval(display.innerText);
			 	} 
			 	catch {
					display.innerText = 'Error!';
				}
				
				break;
			default:
				display.innerText += e.target.innerText;			
	}

		
	});
});
// console.log('clicked');
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.innerText);