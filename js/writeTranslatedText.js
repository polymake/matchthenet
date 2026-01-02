function generateLanguageButtons() {
   if (navigator.languages) {
      for (var i = navigator.languages.length-1; i >= 0; i--) {
         var langtag = navigator.languages[i].split('-')[0];
         for (var j = 0; j < showLanguages.length; j++) {
            if (showLanguages[j] == langtag) {
               language = langtag;
               break;
            }
         }
      }
   }

   var div = document.getElementById('startSelectLanguage');
   var sellang = document.createElement('select');
   sellang.className = 'bordered language';
   sellang.id = 'optSelectLanguage';
   for (var i=0; i < showLanguages.length; i++) {
		var langopt = document.createElement('option');
      var l = showLanguages[i];
      langopt.textContent = translation[showLanguages[i]]['name'];
      langopt.value = l;
      if (l == language) {
         langopt.toggleAttribute('selected', true);
      }
		sellang.appendChild(langopt);
   }
   div.appendChild(sellang);
   languageOpt = document.getElementById('optSelectLanguage');
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
//	document.getElementById('info').innerHTML= translation[language]['Info'];
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
