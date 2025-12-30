// copyright Loho, Lorenz, Joswig, Raber & polymake team


//=========== VARIABLES =====================================================
//===========================================================================
//
// the settings variables
var testMode = false;
var calibration= false;
var difficulty = 1;
var difficultyOffset = 3;
var numOfRounds = 5;
var logfile = false;
var selectTime = true;
var enableFoldingMode = false;

var initialRotationTime = 0.5;
var initialRotationSpeed = 0.2;
var maxRotationTime = 8000;
var maxRotationSpeed= 5;
var rotationSpeed = maxRotationSpeed * initialRotationSpeed;
var rotationTime = maxRotationTime * initialRotationTime;

var selectNumOfPolys = document.getElementById('selectNumOfPolys');
var selectedDifficulty = document.getElementById('difficulty1');

//----------- the game elements ------------------------
var game = document.getElementById('game');
var settings = document.getElementById('settings');
var animations = document.getElementsByClassName('animation');
var animationsDiv = document.getElementById('animations');
var equals = document.getElementsByClassName('equal');
var nets = document.getElementsByClassName('net');
var arrows= document.getElementsByClassName('arrow');
var polytopes= document.getElementsByClassName('polytope');
var containers = document.getElementsByClassName('container');
var buttons = document.getElementsByClassName('buttonType1');
var buttons2 = document.getElementsByClassName('buttonType2');
var buttonsDiv = document.getElementById('buttons');
var okButton = document.getElementById('ok');
var moreButton = document.getElementById('more');
var closeMoreButton = document.getElementById('closeMoreButton');
var startGameButton = document.getElementById('startGame');
var resetButton = document.getElementById('reset');
var settingsButton = document.getElementById('settingsButton');
var settingsOkButton = document.getElementById('settingsOkButton');
var notDraggables= document.getElementsByClassName('notDraggable');
var buttonBackgrounds = document.getElementsByClassName('buttonBackground');
var gameDifficulties= document.getElementsByClassName('gameDifficulty');
var difficultyDivs = document.getElementsByClassName('difficulty');
var pointsDiv = document.getElementById('numPoints');
var bestScoreDiv= document.getElementById('numBestScore');
var pointsWord = document.getElementById('points');
var bestScoreWord = document.getElementById('bestScore');
var polyScripts = document.getElementById('polyScripts');
var addPointsDiv = document.getElementById('addPointsDiv');
var addPointsDivs = document.getElementsByClassName('addPoints');
var pointsNumber= document.getElementById('pointsNumber');
var bestScoreNumber= document.getElementById('numBestScore');
var roundDiv = document.getElementById('roundDiv');
var roundNumber = document.getElementById('roundNumber');
var netsDiv = document.getElementById('nets');
var timeDiv = document.getElementById('timeDiv');
var numberOfPolytopes = 3;
const maxNumberOfPolytopes = 5;
var timeCol = document.getElementsByClassName('timeCol');
var dragHint = document.getElementById('dragHint');
var restartHint = document.getElementById('restartHint');

// the start screen variables
var startScreen = document.getElementById('startScreen');
var moreScreen = document.getElementById('moreScreen');
var settingsScreen = document.getElementById('settingsScreen');
var startDifficulties= document.getElementsByClassName('startDifficulty');
var numOfPolysDivs = document.getElementsByClassName('numOfPolys');
var languageOpt;
var currDifficulty;

var rotSpeedRange = document.getElementById('controlsRotationSpeed');
var zoomSpeedRange = document.getElementById('controlsZoomSpeed');
var panEnabledCheckbox = document.getElementById('controlsPanEnabled');
var zoomEnabledCheckbox = document.getElementById('controlsZoomEnabled');
var hideCursorCheckbox = document.getElementById('hideCursor');

//the folding mode variables
var foldingDiv = document.getElementById('folding');
var nextButton = document.getElementById('next');
var infoButton = document.getElementById('info');
var infoScreen = document.getElementById('infoScreen');
var infoContainer = document.getElementById('infoContainer');
var infoScreenShown = false;
var infoScripts = document.getElementById('infoScripts');
var descriptions = [];
var infoHints = document.getElementsByClassName('infoHint');
var solutionButton = document.getElementById('solution');
var foldingRenderId;
var closeFoldingButton = document.getElementById('closeFoldingButton');
var centerButton = document.getElementById('centerButton');
var foldingRenderIds = new Array(maxNumberOfPolytopes);
var foldingPolytopeRoots= new Array(maxNumberOfPolytopes);
var foldingCreators;
var foldingRenderers = [];
for (var i=0; i<maxNumberOfPolytopes; i++){
	foldingRenderers.push(new THREE.WebGLRenderer({antialias: true, alpha: true}));
}
var foldingControls= Array(maxNumberOfPolytopes);
var foldingAxes = Array(maxNumberOfPolytopes);
var foldingEdgeGroups = Array(maxNumberOfPolytopes);
var foldingAngles= Array(maxNumberOfPolytopes);
var foldingSubtrees= Array(maxNumberOfPolytopes);
var foldingAllpoints= Array(maxNumberOfPolytopes);
var foldingObjects= Array(maxNumberOfPolytopes);
var foldingScripts = document.getElementById('foldingScripts');
var foldings = document.getElementsByClassName('folding');
var foldingCameras = new Array(maxNumberOfPolytopes);
var oldPositions= new Array(maxNumberOfPolytopes);
var oldUps= new Array(maxNumberOfPolytopes);
var foldingActivated = false;
var intervals = [];
//var rotIntervals = [];
var timeouts = [];
var foldScale;
var unfoldScale;
var firstFolding;
//var rotScale;

// for the threejs animations
var renderers = [];
var polytopeCameras = new Array(maxNumberOfPolytopes);
var polytopeObjects = new Array(maxNumberOfPolytopes);
var polytopeControls = new Array(maxNumberOfPolytopes);
var polyRotations = new Array(maxNumberOfPolytopes);
for (var i=0; i<maxNumberOfPolytopes; i++){
	renderers.push(new THREE.WebGLRenderer({antialias: true, alpha: true}));
}
var renderIds = new Array(maxNumberOfPolytopes);
var polytopeCreators;
var currScrNum;
var currFoldingScrNum;
var animating = true;
var controlsRotationSpeed;
var controlsZoomSpeed;
var controlsNoPan;
var controlsNoZoom;


// ------------ variables and data for the game -----------------------------
var currentSelection; // the net which is currently selected
var round = 1;
var halfRounds;
var points = 0;
var addPoints = 0;
var time = 0;
var roundTime;
var roundStartTime;
var countingTime = false;
var correctMatches;
var allCorrect;

//-------------- the game over elements -------------------
var gameOver = document.getElementById('gameOver');
var gameIsOver = false;
var highscore = 0;
var highscoreTime = 100000;
var endpoints = document.getElementsByClassName('endpoints');
var endpointsWords = document.getElementsByClassName('endpointsWords');
var highscoreDiv = document.getElementById('numOfHighscore');
var highscoreTimeDiv = document.getElementById('numOfHighscoreTime');
var yourPointsDiv = document.getElementById('numOfYourPoints');
var yourTimeDiv = document.getElementById('numOfYourTime');
var newGameButton = document.getElementById('newGame');
