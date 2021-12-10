// copyright Loho, Lorenz, Joswig, Raber & polymake team


// -------------- GETTING THE DATA --------------------------

// get a data tuple containing the names of the chosen polytopes and their corresponding nets
function getTuple(round, difficulty){
	var polyData = data[difficulty];
	var tuples = polyData['tuples'];
	// get the data randomly from the collection with probability 0.9 and from tuples with probability 0.1
	if (polyData['collection'].length){
		if(polyData['tuples'].length){
			var rndnum = randomNumber(10);
			if(rndnum<1 && numberOfPolytopes==3){ 
				tuple = tuples[randomNumber(tuples.length)];
			}else{
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
		}
	}
		// get the data from the predefined tuples if no data in collection
	else{
		tuple = tuples[randomNumber(tuples.length)];
	}	
	return tuple	
}
			

function randomNumber(size){
	return Math.floor(Math.random()*size);
} 
