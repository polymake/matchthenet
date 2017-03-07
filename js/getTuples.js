// copyright Loho, Lorenz, Joswig, Raber & polymake team


// -------------- GETTING THE DATA --------------------------

// get a data tuple containing the names of the chosen polytopes and their corresponding nets
function getTuple(round, difficulty){
	var polyData = data[difficulty];

	// get the data randomly from the collection
	if (polyData['collection'].length){
			var collection = polyData['collection'];	
			var numOfPolys = collection.length;
			var tuple = [];
      var tupleNum = [];
			for (var i=0; i<numberOfPolytopes; i++){
				var temp = randomNumber(numOfPolys);
				if (tupleNum.indexOf(temp) > -1) {
					i--;
					continue;
				}
				tupleNum.push(temp);
				tuple.push(collection[temp]);
			}
		} 

		// get the data from the predefined tuples
		else{
			var tuples = polyData['tuples'];
			tuple = tuples[randomNumber(tuples.length)];
		}
	
	return tuple
}
			

function randomNumber(size){
	return Math.floor(Math.random()*size);
} 
