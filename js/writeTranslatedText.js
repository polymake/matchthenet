function generateLanguageButtons() {
   var div = document.getElementById('startSelectLanguage');
   for (var i=0; i < showLanguages.length; i++) {
		var langspan = document.createElement('span');
		langspan.className = 'bordered language';
      langspan.textContent = translation[showLanguages[i]]['name'];
      langspan.setAttribute('alt',showLanguages[i]);
      if (i==0) {
		   langspan.style.backgroundColor = blueColor;
         language = showLanguages[i];
      }
		div.appendChild(langspan);
   }
   languageDivs = document.getElementsByClassName('language');
   selectLanguage = document.getElementById('selectLanguage');
}

generateLanguageButtons();

function writeTranslatedText(){
	document.getElementById('controlsText').innerHTML= translation[language]['Controls'];
	document.getElementById('difficultyTextEasy').innerHTML= translation[language]['Easy'];
	document.getElementById('startDifficultyTextEasy').innerHTML= translation[language]['Easy'];
	document.getElementById('difficultyTextDifficult').innerHTML= translation[language]['Difficult'];
	document.getElementById('startDifficultyTextDifficult').innerHTML= translation[language]['Difficult'];
	document.getElementById('difficultyText').innerHTML= translation[language]['Difficulty'];
	document.getElementById('startNumOfPolysText').innerHTML= translation[language]['Number of polytopes'];
	document.getElementById('scoreWord').innerHTML= translation[language]['Score'];
	document.getElementById('bestScoreWord').innerHTML= translation[language]['Best score'];
	document.getElementById('youText').innerHTML= translation[language]['You'];
	document.getElementById('highscoreText').innerHTML= translation[language]['Highscore'];
	document.getElementById('newGame').innerHTML= translation[language]['Restart'];
	document.getElementById('ok').innerHTML= translation[language]['Submit'];
	document.getElementById('next').innerHTML= translation[language]['Next'];
	document.getElementById('reset').innerHTML= translation[language]['Restart'];
	document.getElementById('solution').innerHTML= translation[language]['Solution'];
	document.getElementById('startGame').innerHTML= translation[language]['Play'];
	document.getElementById('more').innerHTML= translation[language]['More'];
	document.getElementById('closeMoreButton').innerHTML= translation[language]['Close'];
	document.getElementById('closeSettingsButton').innerHTML= translation[language]['Close'];
	document.getElementById('startSelectLanguageText').innerHTML= translation[language]['Select language'];
	document.getElementById('congrats').innerHTML= translation[language]['Congratulations'];
	document.getElementById('completedGame').innerHTML= translation[language]['Completed game'];
	document.getElementById('intro').innerHTML= translation[language]['intro'];
	document.getElementById('dragText').innerHTML= translation[language]['Swap'];
	document.getElementById('zoomSpeedText').innerHTML= translation[language]['Zoom speed'];
	document.getElementById('rotationSpeedText').innerHTML= translation[language]['Rotation speed'];
	document.getElementById('restartHint').innerHTML= translation[language]['Restart hint'];
	document.getElementById('zoomEnabledText').innerHTML= translation[language]['Zoom enabled'];
}
