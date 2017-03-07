// copyright Loho, Lorenz, Joswig, Raber & polymake team


//----------- DESIGN -------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


const backgroundColor = "hsla(222, 100%, 97%, 1)";
var redColor = "rgba(255,0,18,1)";
var yellowColor = "hsla(48, 100%, 60%, 1)";
var greenColor = "hsla(118,80%,40%,1)";
var yellowGradient = "linear-gradient(hsl(57, 90%, 74%), hsl(49, 90%, 55%))";
var yellowGradientRev = "linear-gradient(hsl(49, 90%, 55%), hsl(57, 90%, 74%))";
var greenGradient = "linear-gradient(hsl(112, 51%, 89%),rgb(29, 185, 70))";
var greenGradientRev = "linear-gradient(rgb(29, 185, 70), hsl(112, 51%, 89%))";
var blueColor = 'hsla(208, 100%, 74%, 1)';
var greyColor = 'hsla(0, 0%, 75%, 1)';
document.body.style.backgroundColor = backgroundColor;



//---------- BUTTONS --------------------------------


function buttonDown(event){
	event.currentTarget.style.boxShadow = 'none';
	if (event.currentTarget != centerButton){
		event.currentTarget.style.transform = 'translate(0.1vw,0.1vw)';
	}
}

function buttonUp(event){
	event.currentTarget.style.boxShadow = '0.2vw 0.2vw 1vw hsl(209, 0%, 33%)';
	if (event.currentTarget != centerButton){
		event.currentTarget.style.transform = 'translate(-0.1vw,-0.1vw)';
	}
}

function buttonOver(event){
	event.currentTarget.style.opacity = '0.5';
}

function buttonOut(event){
	event.currentTarget.style.opacity = '0.35';
}

function difficultyOver(event){
	if (event.currentTarget != selectedDifficulty){
		event.currentTarget.style.opacity = '0.7';
	}
}

function difficultyOut(event){
	if (event.currentTarget != selectedDifficulty){
		event.currentTarget.style.opacity = '0.4';
	}
}

function settingsOver(event){
	event.currentTarget.style.opacity = '0.15';
}

function settingsOut(event){
	event.currentTarget.style.opacity = '0.1';
}

//-------------- NETS ---------------------------------------
function mouseOver(evt){
  if (evt.target != currentSelection){
    evt.target.style.opacity = '1';
  }
}

function mouseOut(evt){
  if (evt.target != currentSelection){
    evt.target.style.opacity = '0.6';
  }
}


//------------ RENDERER SIZES FOR POLYTOPES -------------------
var rendererFactors = [2.5,2.5,2.8,3.4];
var arrowWidths = ['6vmin','5.5vmin','4vmin','3vmin'];
var netHeights= ['34vmin','34vmin','32vmin','30vmin'];
var netRowHeights= ['42vmin','42vmin','38vmin','36vmin'];
var equalsRowHeights= ['6vmin','6vmin','8vmin','15vmin'];
var lineWidthFactor = 1300;


function rendererWidth(){
	return Math.min(window.innerWidth, window.innerHeight)/rendererFactor;
}

function rendererHeight(){
	return Math.min(window.innerWidth, window.innerHeight)/rendererFactor;
}

function polytopeLineWidth(){
	return Math.min(window.innerWidth, window.innerHeight)/lineWidthFactor;
}

function foldingLineWidth(){
	return Math.min(window.innerWidth, window.innerHeight)/lineWidthFactor;
}
