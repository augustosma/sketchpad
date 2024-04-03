const screenSize = 960;

main();

function main() {
	const body = document.querySelector('body');
	drawSquares(body, 16); //initial number of squares per side
	addShadow();
	addNewGameBtn(body);
	addIncrDrkBtn(body);
}

function drawSquares(body, nBoxes) {
	const cont = document.createElement('div');
	body.appendChild(cont);
	cont.classList.add('container');
	drawGrid(cont, nBoxes);	
	//div.style.cssText = "background-color: yellow";
	//div.textContent = "hello";
}

function drawGrid(cont, nBoxes){
	for(let i = 0; i < nBoxes; i++){
		drawLine(cont, nBoxes);
	}
}

function drawLine(cont, nBoxes) {
	const line = document.createElement('div');
	line.classList.add('line');
	const size = screenSize/nBoxes;
	for(let i = 0; i < nBoxes; i++){
		const box = document.createElement('div');
		box.classList.add('box');
		box.style.cssText = `height: ${size}px; width: ${size}px; ` ;
		//box.textContent = "empty";
		//box.style.cssText = "	border: solid 1px black; height: 20px; width: 20px;";
		line.appendChild(box);
	}
	cont.appendChild(line);
}

function boxFunc(event) {
	const box = event.target;
	box.classList.add('marked');
}	

function addShadow(){
	const boxes = document.querySelectorAll('.box');
	boxes.forEach( (box) => {
		box.addEventListener('mouseenter', boxFunc);
	});
}

function addNewGameBtn(body){
	const btn = document.createElement('button');
	btn.classList.add('addBtn');
	btn.textContent = "New Board";	
	body.insertBefore(btn, body.firstElementChild);
	
	btn.addEventListener('click', () => {
		let input = 0
		while (!(input > 0 & input <= 100)){
			input = prompt("What size should the board be? (1-100)");
		}
		body.removeChild(body.lastElementChild)
		drawSquares(body, input);
		addShadow();		
	});
}

function addIncrDrkBtn(body){
	
}
