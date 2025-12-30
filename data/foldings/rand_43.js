// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'folding' + divNumber );
var scene = new THREE.Scene();
scene.background = null;
var renderer = foldingRenderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
//renderer.setClearColor(backgroundColor, 1);
three.insertBefore(renderer.domElement, three.childNodes[0]);
// COMMON_CODE_BLOCK_BEGIN

const intervalLength = 25; // for automatic animations
const explodableModel = false;
const modelContains = { points: false, pointlabels: false, lines: false, edgelabels: false, faces: false, arrowheads: false };
const foldables = [];

var frustumSize = 4;
var cameras = [new THREE.PerspectiveCamera(zoom, rendererWidth/rendererHeight, 0.1, 1000)];
cameras.forEach(function(cam) {
    cam.position.set(0, 0, 5);
    cam.lookAt(0, 0, 0);
    cam.up.set(0, 1, 0);
});
var controls = [new THREE.TrackballControls(cameras[0], three)];

var camera = cameras[0];
var control = controls[0];

controls[0].zoomSpeed = 0.2;
controls[0].rotateSpeed = 4;


// class to allow move points together with labels and spheres
var PMPoint = function (x,y,z) {
   this.vector = new THREE.Vector3(x,y,z);
   this.sprite = null;
   this.sphere = null;
}
PMPoint.prototype.addLabel = function(labelsprite) {
   this.sprite = labelsprite;
   this.sprite.position.copy(this.vector);
}
PMPoint.prototype.addSphere = function(spheremesh) {
   this.sphere = spheremesh;
   this.sphere.position.copy(this.vector);
}
PMPoint.prototype.set = function(x,y,z) {
   this.vector.set(x,y,z);
   if (this.sprite) {
      this.sprite.position.copy(this.vector);
   }
   if (this.sphere) {
      this.sphere.position.copy(this.vector);
   }
}
PMPoint.prototype.radius = function() {
   if (this.sphere) {
      return this.sphere.geometry.parameters.radius;
   } else {
      return 0;
   }
};
// COMMON_CODE_BLOCK_END

var obj0 = new THREE.Object3D();
obj0.name = "planar_net_";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(0, 0, 0));
obj0.userData.points.push(new PMPoint(1.40858, 0, 0));
obj0.userData.points.push(new PMPoint(0.665205, 0.804743, 0));
obj0.userData.points.push(new PMPoint(0.43585, 0.863415, 0));
obj0.userData.points.push(new PMPoint(0.0577955, 0.520749, 0));
obj0.userData.points.push(new PMPoint(-0.135172, -0.542303, 0));
obj0.userData.points.push(new PMPoint(-0.117945, -0.563112, 0));
obj0.userData.points.push(new PMPoint(1.0333, -0.690685, 0));
obj0.userData.points.push(new PMPoint(1.41685, -0.00557957, 0));
obj0.userData.points.push(new PMPoint(1.07467, 1.12524, 0));
obj0.userData.points.push(new PMPoint(1.07643, 1.25873, 0));
obj0.userData.points.push(new PMPoint(0.529475, 1.4529, 0));
obj0.userData.points.push(new PMPoint(-0.896885, 0.872799, 0));
obj0.userData.points.push(new PMPoint(-0.841482, 0.208019, 0));
obj0.userData.points.push(new PMPoint(-0.438392, -0.346665, 0));
obj0.userData.points.push(new PMPoint(1.41819, -0.00267582, 0));
obj0.userData.points.push(new PMPoint(1.78956, 0.494731, 0));
obj0.userData.points.push(new PMPoint(1.14166, 1.01298, 0));
obj0.userData.points.push(new PMPoint(0.188948, 1.40683, 0));
obj0.userData.points.push(new PMPoint(-0.552233, 2.32053, 0));
obj0.userData.points.push(new PMPoint(-0.602124, 1.29526, 0));
obj0.userData.points.push(new PMPoint(-0.70199, -0.928144, 0));
obj0.userData.points.push(new PMPoint(-0.646938, -1.6103, 0));
obj0.userData.points.push(new PMPoint(-0.2576, -1.57095, 0));
obj0.userData.points.push(new PMPoint(-0.0778765, -1.44804, 0));
obj0.userData.points.push(new PMPoint(0.299888, -1.34421, 0));
obj0.userData.points.push(new PMPoint(0.985316, -1.25123, 0));
obj0.userData.points.push(new PMPoint(1.24856, -1.21047, 0));
obj0.userData.points.push(new PMPoint(1.40744, -1.24389, 0));
obj0.userData.points.push(new PMPoint(1.5604, -1.20495, 0));
obj0.userData.points.push(new PMPoint(2.21189, -0.829331, 0));
obj0.userData.points.push(new PMPoint(2.14519, -0.49219, 0));
obj0.userData.points.push(new PMPoint(1.97435, -0.278566, 0));
obj0.userData.points.push(new PMPoint(1.86341, 0.867878, 0));
obj0.userData.points.push(new PMPoint(1.95261, 1.12646, 0));
obj0.userData.points.push(new PMPoint(1.18722, 1.47899, 0));
obj0.userData.points.push(new PMPoint(1.17573, 1.4844, 0));
obj0.userData.points.push(new PMPoint(0.595439, 2.69194, 0));
obj0.userData.points.push(new PMPoint(0.537246, 2.6294, 0));
obj0.userData.points.push(new PMPoint(-1.60046, 1.62024, 0));
obj0.userData.points.push(new PMPoint(-1.68451, 1.63552, 0));
obj0.userData.points.push(new PMPoint(-1.92608, 1.49411, 0));
obj0.userData.points.push(new PMPoint(-1.52403, 0.257993, 0));
obj0.userData.points.push(new PMPoint(-0.191103, -2.07523, 0));
obj0.userData.points.push(new PMPoint(0.373036, -2.05393, 0));
obj0.userData.points.push(new PMPoint(0.440352, -1.90619, 0));
obj0.userData.points.push(new PMPoint(-1.67196, -2.40966, 0));
obj0.userData.points.push(new PMPoint(-1.16668, -2.60024, 0));
obj0.userData.points.push(new PMPoint(-0.640009, -2.34962, 0));
obj0.userData.points.push(new PMPoint(-0.282534, -2.07898, 0));
obj0.userData.points.push(new PMPoint(2.1573, -1.79674, 0));
obj0.userData.points.push(new PMPoint(2.71456, -1.96896, 0));
obj0.userData.points.push(new PMPoint(3.29127, -1.45093, 0));
obj0.userData.points.push(new PMPoint(3.83125, -1.44419, 0));
obj0.userData.points.push(new PMPoint(4.0015, -1.222, 0));
obj0.userData.points.push(new PMPoint(2.97719, -0.358474, 0));
obj0.userData.points.push(new PMPoint(1.65918, -1.7492, 0));
obj0.userData.points.push(new PMPoint(2.09529, -1.85334, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 6, 7, 1, 8, 7, 8, 2, 9, 9, 10, 3, 11, 10, 11, 4, 12, 12, 13, 0, 14, 13, 14, 1, 15, 15, 16, 2, 17, 16, 17, 3, 18, 18, 19, 4, 20, 19, 20, 5, 21, 21, 22, 22, 23, 6, 24, 23, 24, 6, 25, 7, 26, 25, 26, 7, 27, 27, 28, 28, 29, 29, 30, 30, 31, 8, 32, 31, 32, 9, 33, 33, 34, 10, 35, 34, 35, 10, 36, 36, 37, 11, 38, 37, 38, 12, 39, 39, 40, 40, 41, 13, 42, 41, 42, 23, 43, 43, 44, 24, 45, 44, 45, 22, 46, 46, 47, 47, 48, 23, 49, 48, 49, 29, 50, 30, 51, 50, 51, 30, 52, 52, 53, 53, 54, 31, 55, 54, 55, 28, 56, 29, 57, 56, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [44, 45, 24, 23, 43], [12, 39, 40, 41, 42, 13], [9, 33, 34, 35, 10], [8, 1, 0, 5, 6, 7], [11, 10, 36, 37, 38], [5, 21, 22, 23, 24, 6], [30, 29, 50, 51], [3, 2, 9, 10, 11], [0, 4, 12, 13, 14], [7, 6, 25, 26], [2, 1, 15, 16, 17], [31, 30, 52, 53, 54, 55], [22, 46, 47, 48, 49, 23], [4, 3, 18, 19, 20], [29, 28, 56, 57], [32, 8, 7, 27, 28, 29, 30, 31]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[29,28],
      [31,30],
      [30,29],
      [23,22],
      [24,23],
      [13,12],
      [11,10],
      [10,9],
      [8,7],
      [7,6],
      [6,5],
      [4,3],
      [2,1],
      [0,4],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.21553144338447,
      1.71758433012737,
      2.2943283238903,
      2.31540039496096,
      2.18882540894768,
      2.35365974144984,
      2.92860249856344,
      2.63887621402056,
      1.94761534269284,
      2.32279882214549,
      1.58944261652855,
      1.90542289094657,
      2.28197306519935,
      1.8053968737551,
      2.01384787732991,
      2.34801765972755];

obj0.userData.subtrees = [[56,57],
      [52,53,54,55],
      [50,51],
      [46,47,48,49],
      [43,44,45],
      [39,40,41,42],
      [36,37,38],
      [33,34,35],
      [27,28,29,30,31,32,50,51,52,53,54,55,56,57],
      [25,26],
      [21,22,23,24,43,44,45,46,47,48,49],
      [18,19,20],
      [15,16,17],
      [12,13,14,39,40,41,42],
      [9,10,11,33,34,35,36,37,38],
      [5,6,7,8,21,22,23,24,25,26,27,28,29,30,31,32,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]];

obj0.userData.polytoperoot = [[0.381306098449611,0.952332269897363,0.43112508752176],
      [1.17974685194531,0.500911985348525,0.169604332517711],
      [0.164035634299599,0.223097295182486,-1.79991057832011]];

obj0.userData.oldscale = 0;
foldables.push(obj0);
init_object(obj0);
scene.add(obj0);

// COMMON_CODE_BLOCK_BEGIN
function textSpriteMaterial(message, parameters) {
    if ( parameters === undefined ) parameters = {};
    var fontface = "Helvetica";
    var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 15;
    fontsize = fontsize*10;
    var lines = message.split('\\n');
    var size = 512;
    for(var i = 0; i<lines.length; i++){
        var tmp = lines[i].length;
        while(tmp*fontsize > size){
           fontsize--;
        }
    }

    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext('2d');
    context.fillStyle = "rgba(255, 255, 255, 0)";
    context.fill();
    context.font = fontsize + "px " + fontface;

    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)";
     for(var i = 0; i<lines.length; i++){
        context.fillText(lines[i], size/2, size/2+i*fontsize);
     }

    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial({map: texture, depthTest: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: 1 });
    return spriteMaterial;
}


// ---------------------- INITIALIZING OBJECTS--------------------------------------
// ---------------------------------------------------------------------------------

function init_object(obj) {
    if (obj.userData.hasOwnProperty("pointmaterial")) {
        init_points(obj);
        modelContains.points = true;
    }
    if (obj.userData.hasOwnProperty("pointlabels")) {
        init_pointlabels(obj);
        modelContains.pointlabels = true;
    }
    if (obj.userData.hasOwnProperty("edgematerial")) {
        init_lines(obj);
        modelContains.lines = true;
    }
    if (obj.userData.hasOwnProperty("edgelabels")) {
        init_edgelabels(obj);
        modelContains.edgelabels = true;
    }
    if (obj.userData.hasOwnProperty("arrowstyle")) {
        init_arrowheads(obj);
        modelContains.arrowheads = true;
    }
    if (obj.userData.hasOwnProperty("facetmaterial")) {
        init_faces(obj);
        modelContains.faces = true;
    }
}

function init_points(obj) {
    var pointgroup = new THREE.Group();
    pointgroup.name = "points";
    var points = obj.userData.points;
    var radii = obj.userData.pointradii;
    var materials = obj.userData.pointmaterial;
    var geometry,material;
    if (!Array.isArray(radii)) {
        geometry = new THREE.SphereBufferGeometry(radii);
    }
    if (!Array.isArray(materials)) {
        material = materials;
    }
    for (var i=0; i<points.length; i++) {
        var point = points[i];
        if (Array.isArray(radii)) {
            if (radii[i] == 0) {
                continue;
            }
            geometry = new THREE.SphereBufferGeometry(radii[i]);
        }
        if (Array.isArray(materials)) {
            material = materials[i];
        }
        var sphere = new THREE.Mesh(geometry, material);
        point.addSphere(sphere);
        pointgroup.add(sphere);
    }
    obj.add(pointgroup);
}

function init_pointlabels(obj) {
    var points = obj.userData.points;
    var labels = obj.userData.pointlabels;
    var pointlabels = new THREE.Group();
    pointlabels.name = "pointlabels";
    if (Array.isArray(labels)) {
        for (var i=0; i<points.length; i++) {
            var point = points[i];
            var spriteMaterial = textSpriteMaterial( labels[i] );
	        var sprite = new THREE.Sprite(spriteMaterial);
            point.addLabel(sprite);
            pointlabels.add(sprite);
        }
    } else {
        var spriteMaterial = textSpriteMaterial( labels );
        for (var i=0; i<points.length; i++) {
            var point = points[i];
	        var sprite = new THREE.Sprite(spriteMaterial);
            point.addLabel(sprite);
            pointlabels.add(sprite);
        }
    }
    obj.add(pointlabels);
}

function init_lines(obj) {
    var edgeindices = obj.userData.edgeindices;
    var points = obj.userData.points;
    var materials = obj.userData.edgematerial;
    var geometry = new THREE.BufferGeometry();
    var bufarr = new Float32Array( obj.userData.edgeindices.length * 3 );
    var bufattr = new THREE.Float32BufferAttribute( bufarr, 3 );
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', bufattr);
    if (Array.isArray(materials)) {
        for (var i=0; i<materials.length; i++) {
            geometry.addGroup(2*i,2,i);
        }
    }
    var lines = new THREE.LineSegments(geometry, materials);
    lines.name = "lines";
    obj.add(lines);
    updateEdgesPosition(obj);
}

function init_edgelabels(obj) {
    var points = obj.userData.points;
    var edgeindices = obj.userData.edgeindices;
    var labels = obj.userData.edgelabels;
    var edgelabels = new THREE.Group();
    edgelabels.name = "edgelabels";
    if (Array.isArray(labels)) {
        for (var i=0; i<edgeindices.length/2; i++) {
            var spriteMaterial = textSpriteMaterial( labels[i] );
            var sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.copy(new THREE.Vector3().addVectors(points[edgeindices[2*i]].vector,points[edgeindices[2*i+1]].vector).multiplyScalar(0.5));
            edgelabels.add(sprite);
        }
    } else {
        var spriteMaterial = textSpriteMaterial( labels );
        for (var i=0; i<edgeindices.length/2; i++) {
            var sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.copy(new THREE.Vector3().addVectors(points[edgeindices[2*i]].vector,points[edgeindices[2*i+1]].vector).multiplyScalar(0.5));
            edgelabels.add(sprite);
        }
    }
    obj.add(edgelabels);
}

function init_arrowheads(obj) {
    var arrowheads = new THREE.Group();
    arrowheads.name = "arrowheads";
    var arrowstyle = obj.userData.arrowstyle;
    var edgeindices = obj.userData.edgeindices;
    var edgematerials = obj.userData.edgematerial;
    var points = obj.userData.points;
    var material;
    if (!Array.isArray(edgematerials)) {
        material = new THREE.MeshBasicMaterial( {color: edgematerials.color} );
    }

    for (var i=0; i<edgeindices.length; i=i+2) {
        var start = points[edgeindices[i]];
        var end = points[edgeindices[i+1]];
        var dist = start.vector.distanceTo( end.vector ) - start.radius() - end.radius();
        if (dist <= 0) {
            continue;
        }
        var dir = new THREE.Vector3().subVectors(end.vector,start.vector);
        dir.normalize();
        var axis = new THREE.Vector3().set(dir.z,0,-dir.x);
        axis.normalize();
        var radians = Math.acos( dir.y );
        var radius = dist/25;
        var height = dist/5;
        var geometry = new THREE.ConeBufferGeometry(radius,height);
        var position = new THREE.Vector3().addVectors(start.vector,dir.clone().multiplyScalar(start.radius()+dist-height/2));
        if (Array.isArray(edgematerials)) {
            material = new THREE.MeshBasicMaterial( {color: edgematerials[i].color} );
        }
        var cone = new THREE.Mesh( geometry, material );
        cone.quaternion.setFromAxisAngle(axis,radians);;
        cone.position.copy(position);;
        arrowheads.add(cone);
    }
    obj.add(arrowheads);
}

function init_faces(obj) {
    var points = obj.userData.points;
    var facets = obj.userData.facets;
    obj.userData.triangleindices = [];
    for (var i=0; i<facets.length; i++) {
        facet = facets[i];
        for (var t=0; t<facet.length-2; t++) {
            obj.userData.triangleindices.push(facet[0],facet[t+1],facet[t+2]);
        }
    }
    var bufarr = new Float32Array( obj.userData.triangleindices.length * 3 );
    var bufattr = new THREE.Float32BufferAttribute(bufarr,3);

    var materials = obj.userData.facetmaterial;
    var geometry = new THREE.BufferGeometry();
    var frontmaterials = [];
    var backmaterials = [];
    geometry.setAttribute('position',bufattr);
    if (Array.isArray(materials)) {
        var tricount = 0;
        var facet;
        for (var i=0; i<facets.length; i++) {
            facet = facets[i];
            geometry.addGroup(tricount,(facet.length-2)*3,i);
            tricount += (facet.length-2)*3;
        }
        for (var j=0; j<materials.length; j++) {
            var fmat = materials[j].clone()
            fmat.side = THREE.FrontSide;
            frontmaterials.push(fmat);
            var bmat = materials[j].clone()
            bmat.side = THREE.BackSide;
            backmaterials.push(bmat);
        }
    } else if (materials instanceof THREE.Material) {
        frontmaterials = materials.clone()
        frontmaterials.side = THREE.FrontSide;
        backmaterials = materials.clone()
        backmaterials.side = THREE.BackSide;
    }
    // duplicating the object with front and back should avoid transparency issues
    //var mesh = new THREE.Mesh(geometry, materials);
    var frontmesh = new THREE.Mesh(geometry, frontmaterials);
    var backmesh = new THREE.Mesh(geometry, backmaterials);
    frontmesh.name = "frontfaces";
    backmesh.name = "backfaces";
    backmesh.renderOrder = -100;
    frontmesh.renderOrder = 100;
    obj.add(backmesh);
    obj.add(frontmesh);
    updateFacesPosition(obj);
}
// //INITIALIZING


function updateFacesPosition(obj) {
    var points = obj.userData.points;
    var indices = obj.userData.triangleindices;
    var faces = obj.getObjectByName("frontfaces");
    var ba = faces.geometry.getAttribute("position");
    for (var i=0; i<indices.length; i++) {
        ba.setXYZ(i, points[indices[i]].vector.x, points[indices[i]].vector.y ,points[indices[i]].vector.z);
    }
    faces.geometry.attributes.position.needsUpdate = true;

}

function updateEdgesPosition(obj) {
    var points = obj.userData.points;
    var indices = obj.userData.edgeindices;
    var lines = obj.getObjectByName("lines");
    var ba = lines.geometry.getAttribute("position");
    for (var i=0; i<indices.length; i++) {
        ba.setXYZ(i, points[indices[i]].vector.x, points[indices[i]].vector.y ,points[indices[i]].vector.z);
    }
    lines.geometry.attributes.position.needsUpdate = true;
}

function onWindowResize() {
    renderer.setSize(rendererWidth, rendererHeight);
    //svgRenderer.setSize( three.clientWidth, three.clientHeight );
    //updateCamera();
}

function updateCamera() {
    var width = three.clientWidth;
    var height = three.clientHeight;
    var aspect = width / height;
    if (camera.type == "OrthographicCamera") {
        camera.left = frustumSize * aspect / - 2;
        camera.right = frustumSize * aspect / 2;
        camera.top = frustumSize / 2;
        camera.bottom = - frustumSize / 2;
    } else if (camera.type == "PerspectiveCamera") {
        camera.aspect = aspect;
    }
    camera.updateProjectionMatrix();
}

function changeCamera(event) {
    var selindex = event.currentTarget.selectedIndex;
    camera = cameras[selindex];
    control = controls[selindex];
    control.enabled = true;
    for (var i=0; i<controls.length; i++) {
        if (i!=selindex) {
            controls[i].enabled = false;
        }
    }
    updateCamera();
}

//var camtypenode = document.getElementById('cameraType_OUTPUTID');
//camtypenode.onchange = changeCamera;
//camtypenode.dispatchEvent(new Event('change'));

//onWindowResize();
//window.addEventListener('resize', onWindowResize);


var xRotationEnabled = false;
var yRotationEnabled = false;
var zRotationEnabled = false;
var rotationSpeedFactor = 1;
var settingsShown = false;
var labelsShown = true;
var intervals = [];
var timeouts = [];
var explodingSpeed = 0.05;
var explodeScale = 0;
var svgElement;
var renderId;

	var render = function () {
		foldingRenderIds[divNumber]= requestAnimationFrame(render);
		control.update();
		renderer.render(scene, camera);
	};
if ( THREE.WEBGL.isWebGLAvailable() ) {
	render();
} else {
	var warning = WEBGL.getWebGLErrorMessage();
	three.appendChild( warning );
}
   obj0.userData.updatefaces = updateFacesPosition;
   obj0.userData.updateedges = updateEdgesPosition;
   foldingSubtrees[divNumber] = obj0.userData.subtrees;
   foldingAngles[divNumber] = obj0.userData.angles;
   foldingAxes[divNumber] = obj0.userData.axes;
   foldingAllpoints[divNumber] = obj0.userData.points;
   foldingObjects[divNumber] = obj0;
   foldingControls[divNumber] = controls;
   foldingCameras[divNumber] = camera;
   foldingPolytopeRoots[divNumber] = obj0.userData.polytoperoot;
});
appendFoldingScript();
