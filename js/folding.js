// copyright Loho, Lorenz, Joswig, Raber & polymake team



// rotate point p around axis defined by points p1 and p2 by given angle
function rotate(p, p1, p2, angle ){   

	// rotate such that folded polytope coincide with the predefined polytope
	angle = -angle;

	var x = p.x, y = p.y, z = p.z, 
		a = p1.x, b = p1.y, c = p1.z, 
		u = p2.x-p1.x, v = p2.y-p1.y, w = p2.z-p1.z;
	var result = [];
	var L = u*u + v*v + w*w;
	var sqrt = Math.sqrt;
	var cos = Math.cos;
	var sin = Math.sin;

	result[0] = ((a*(v*v+w*w)-u*(b*v+c*w-u*x-v*y-w*z))*(1-cos(angle))+L*x*cos(angle)+sqrt(L)*(-c*v+b*w-w*y+v*z)*sin(angle))/L;
	result[1] = ((b*(u*u+w*w)-v*(a*u+c*w-u*x-v*y-w*z))*(1-cos(angle))+L*y*cos(angle)+sqrt(L)*(c*u-a*w+w*x-u*z)*sin(angle))/L;
	result[2] = ((c*(u*u+v*v)-w*(a*u+b*v-u*x-v*y-w*z))*(1-cos(angle))+L*z*cos(angle)+sqrt(L)*(-b*u+a*v-v*x+u*y)*sin(angle))/L;

	return result;
}


function startFolding(){
		foldScale = 0;
		intervals.push(setInterval(foldingInterval, 25));
}


function foldingInterval(){
	foldScale += 0.025;
	if (foldScale <= 1) fold(foldScale);
	else{
		fold(1);
		clearIntervals();
		timeouts.push(setTimeout(startUnfolding, 3000));
	}
}


function startUnfolding(){
	firstFolding = false;
	unfoldScale = 1;
	intervals.push(setInterval(unfoldingInterval, 25));
}

function unfoldingInterval(){
	unfoldScale -= 0.025;
	if (unfoldScale >= 0)	fold(unfoldScale);
	else {
		fold(0);
		clearIntervals();
		timeouts.push(setTimeout(startFolding, 3000));
	}
}



var oldScale = 0;

// fold net to polytope or vice versa
function fold(event){

	// this is needed if we reset the folding to 0
	if (typeof(event) == 'number'){ 
		var x = event;
	}

	else var x = Number(event.currentTarget.value);

	var scale = x - oldScale;

	// fold the net 
	for (var nr=0; nr<numberOfPolytopes; nr++){
			var axes = foldingAxes[nr];
			for (var j=0; j<axes.length; j++){
				rotateVertices(j, scale, nr);
			}
	}

	// update the vertex position in the animation
	update();

	// update the old scale
	oldScale += scale;

	// move polytope to the barycenter such that is can rotate around the barycenter
	moveToBaryCenter();
	
	// update zoom of cameras such that the nets always fit into the divs
	updateZoom();
	// update the position of the cameras such that the endposition coincides with the polytopes

	if (scale > 0) resetPolytopeCameras(scale);
	else if (scale < 0) resetFoldingCameras(scale);
	
	if (firstFolding){
		var eulerAngles = eulerAnglesForRotationAlign();
		alignRotations(scale, eulerAngles);
	}
	
}


function saveOldFoldingCameras(){
	for (var i=0; i<numberOfPolytopes; i++){
		oldPositions[i] = foldingCameras[i].position.clone();
		oldUps[i] = foldingCameras[i].up.clone();
	}
}
	

function resetPolytopeCameras(scale){
	if (oldScale != 1) scale = scale/(1-oldScale);
	else scale = 1;

	for (var i=0; i<numberOfPolytopes; i++){
		var ind = dataTuple.indexOf(nets[i].name);
		var oldPos = polytopeCameras[i].position;
		var oldUp = polytopeCameras[i].up;
		var newPos= new THREE.Vector3(0,0,5);
		var newUp= new THREE.Vector3(0,1,0);
		oldPos.multiplyScalar(1-scale);
		oldUp.multiplyScalar(1-scale);
		newPos.multiplyScalar(scale);
		newUp.multiplyScalar(scale);
		newPos.add(oldPos).normalize().multiplyScalar(5);
		newUp.add(oldUp);
		polytopeCameras[i].position.set(newPos.x, newPos.y, newPos.z);
		polytopeCameras[i].up.set(newUp.x, newUp.y, newUp.z);
	}
}

function resetFoldingCameras(scale){
	if (oldScale != 0) scale = -scale/oldScale;
	else scale = 1;

	for (var i=0; i<numberOfPolytopes; i++){
		var ind = dataTuple.indexOf(nets[i].name);
		var oldPos = foldingCameras[i].position;
		var oldUp = foldingCameras[i].up;
		var newPos= oldPositions[i].clone();
		var newUp= oldUps[i].clone();
		oldPos.multiplyScalar(1-scale);
		oldUp.multiplyScalar(1-scale);
		newPos.multiplyScalar(scale);
		newUp.multiplyScalar(scale);
		newPos.add(oldPos).normalize().multiplyScalar(5);
		newUp.add(oldUp);
		foldingCameras[i].position.set(newPos.x, newPos.y, newPos.z);
		foldingCameras[i].up.set(newUp.x, newUp.y, newUp.z);
	}
}



// update zoom of cameras of folded nets
function updateZoom(){
	for (var i=0; i<numberOfPolytopes; i++){
		foldingCameras[i].zoom = 0.50*oldScale + 0.5;
		foldingCameras[i].updateProjectionMatrix();
	}
}


// move the controls to the barycenter such that the polytope rotates around the barycenter
function moveToBaryCenter(){
	for (var nr=0; nr<numberOfPolytopes; nr++){
		var bary = barycenter(nr);
		//foldingControls[nr].target.set(bary.x,bary.y,bary.z);
		//bary.add(new THREE.Vector3(0,0,5));
		//foldingCameras[nr].position.set(bary.x,bary.y,bary.z);
		bary.multiplyScalar(-1);
		foldingObjects[nr].position.set(bary.x, bary.y, bary.z);

	}
}


// compute the barycenter of the folded net
// nr is the number of the net on the webpage
function barycenter(nr){
	allpoints = foldingAllpoints[nr];
	var center = new THREE.Vector3(0,0,0);
	for (var i=0; i<allpoints.length; i++){
		center.add(allpoints[i].vector);
	}
	center.divideScalar(allpoints.length);	
	return center;
}


function movePointsToBaryCenter(barycenters){
	for (var nr=0; nr<numberOfPolytopes; nr++){
		allpoints = foldingAllpoints[nr];
		for (var i=0; i<allpoints.length; i++){
			var newPlace = allpoints[i].vector.sub(barycenters[nr]);
			allpoints[i].set(newPlace.x, newPlace.y, newPlace.z);
		}
	}
}




// rotate the net around edge by scale
// nr is the number of the net on the webpage
function rotateVertices(edge, scale, nr){
	var subtrees = foldingSubtrees[nr];
	var angles = foldingAngles[nr];
	var axes = foldingAxes[nr];
	var allpoints = foldingAllpoints[nr];
	if (edge < axes.length){
		for (var j=0; j<subtrees[edge].length; j++){
			var rotP = rotate(allpoints[subtrees[edge][j]].vector, allpoints[axes[edge][0]].vector,allpoints[axes[edge][1]].vector , scale * (Math.PI - angles[edge]));
			allpoints[subtrees[edge][j]].set(rotP[0],rotP[1],rotP[2]);
		}
	}
	foldingAllpoints[nr] = allpoints;
}



// update the positions of all vertices and edges in the threejs animation
function update(){
	for (var nr=0; nr<numberOfPolytopes; nr++){
		obj = foldingObjects[nr];
		for (index = 0; index < obj.children.length; ++index) { 
			if (obj.children[index] instanceof THREE.Line || obj.children[index] instanceof THREE.Mesh) {
				obj.children[index].geometry.verticesNeedUpdate=true; 
			} 
		}
	}
}



function eulerAnglesForRotationAlign(){

	var eulerAngles = [];

	for (var nr = 0; nr < numberOfPolytopes; nr++){

		var zaxis = new THREE.Vector3(0,0,1);
		var yaxis = new THREE.Vector3(0,1,0);
		var n1 = new THREE.Vector3();
		var n2 = new THREE.Vector3();
		n1.fromArray(foldingPolytopeRoots[nr][1]).normalize();
		n2.fromArray(foldingPolytopeRoots[nr][2]).normalize();

		var quaternion1 = new THREE.Quaternion().setFromUnitVectors( n1, zaxis );
		n2.applyQuaternion(quaternion1);
		var quaternion2 = new THREE.Quaternion().setFromUnitVectors( n2, yaxis );
		quaternion2.multiply(quaternion1);

		var euler = new THREE.Euler();
		euler.setFromQuaternion(quaternion2);

		eulerAngles.push(euler);

	}

	return eulerAngles;
}



function alignRotations(scale,eulerAngles){
	if (oldScale != 1) scale = scale/(1 - oldScale);
	else scale = 1;

	for (var i=0; i<numberOfPolytopes; i++){
		var ind = dataTuple.indexOf(nets[i].name);
		var eul = eulerAngles[i].toVector3();
		var oldEul = polytopeObjects[ind].rotation.toVector3();
		eul.multiplyScalar(scale);
		oldEul.multiplyScalar(1-scale);
		eul.add(oldEul);
		polytopeObjects[ind].rotation.set(eul.x,eul.y,eul.z);
	} 
}
