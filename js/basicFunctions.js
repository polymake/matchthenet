// copyright Loho, Lorenz, Joswig, Raber & polymake team


// --------------- BASIC FUNCTIONS ---------------------------------------------------

// get the maximum of an array
function max(arr){
	var currMax = arr[0];
	for (var i=0; i<arr.length; i++){
		if (arr[i] > currMax) currMax = arr[i];
	}
	return currMax;
}


// get an array [0,1,...,i-1]
function range(i){
	var a = [];
	for (var j=0; j<i; j++){
		a.push(j);
	}
	return a
}

// matrix-vector multiplication A*x
function multiply(A,x){
	result = new Array(A.length);
	for (var i=0; i<A.length; i++){
		var s = 0;
		for (var j=0; j<x.length; j++){
			s+=A[i][j]*x[j];
		}

		result[i] = s;
	}
	return result;
}


// transform degrees to radians
function toRadians (angle) {
  return angle * (Math.PI / 180);
}


// return a random permutation of [0,1,..,n-1]
function randomPermutation(){
	var perm = range(numberOfPolytopes);
	shuffle(perm);
	return perm;
}


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
