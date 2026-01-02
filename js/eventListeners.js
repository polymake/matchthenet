// copyright Loho, Lorenz, Joswig, Raber & polymake team


//========= EVENT LISTENERS ==============================================================

function setEventListeners(){
	okButton.addEventListener('click', okButtonClick);
	startGameButton.addEventListener('click', startGame);
	moreButton.addEventListener('click', showMoreScreen);
	closeMoreButton.addEventListener('click', hideMoreScreen);
	settingsButton.addEventListener('click', showSettings);
	closeSettingsButton.addEventListener('click', hideSettings);
	closeSettingsButton.addEventListener('click', setControls);
	resetButton.addEventListener('click', resetButtonClick);
	newGameButton.addEventListener('click', newGameButtonClick);
	nextButton.addEventListener('click', nextRound);
	//infoButton.addEventListener('click', toggleInfoScreen);
	solutionButton.addEventListener('click', function(){
		foldingActivated = true;
		createFoldings();
		solutionButton.style.display = 'none';
      //hideInfoScreen();
	});
	window.onresize = function(){
		if (!gameIsOver){
			createPolytopes();
			if (foldingActivated) createFoldings();
		}
	};

	window.oncontextmenu = function(event) { return false; }

	for (var i=0; i<arrows.length; i++){
		arrows[i].addEventListener('click', swapNets);
		arrows[i].addEventListener('mousemove', highlightArrow);
		arrows[i].addEventListener('mouseout', unhighlightArrow);
	}

	for (var i=0; i<notDraggables.length; i++){
		notDraggables[i].ondragstart = function() { return false; };
	}

	for (var i=0; i<startDifficulties.length; i++){
		startDifficulties[i].addEventListener('click', selectDifficulty);
	};


	for (var i=0; i<gameDifficulties.length; i++){
		gameDifficulties[i].addEventListener('click', showRestartHint);
	};
	
	for (var i=0; i<numOfPolysDivs.length; i++){
		numOfPolysDivs[i].addEventListener('click', selectNumOfPolys);
	};
	for (var i=0; i<infoHints.length; i++){
      infoHints[i].addEventListener('click', toggleInfoBox);
		infoHints[i].addEventListener('touchstart', toggleInfoBox);
		infoHints[i].addEventListener('mouseenter', toggleInfoBox);
		infoHints[i].addEventListener('mouseleave', toggleInfoBox);
   }
   languageOpt.addEventListener('change', changeLanguage);
};

function setNetEventListeners(){
	for (var i=0; i<numberOfPolytopes; i++){
		nets[i].onmousemove = mouseOver;
		nets[i].onmouseout = mouseOut;
		nets[i].style.cursor = 'move';
	}
}
