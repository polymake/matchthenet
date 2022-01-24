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
obj0.userData.points.push(new PMPoint(0.777985, 0, 0));
obj0.userData.points.push(new PMPoint(0.664051, 0.769597, 0));
obj0.userData.points.push(new PMPoint(0.0881227, 0.595252, 0));
obj0.userData.points.push(new PMPoint(0.0881227, -0.595252, 0));
obj0.userData.points.push(new PMPoint(0.664051, -0.769597, 0));
obj0.userData.points.push(new PMPoint(0.332026, 1.47317, 0));
obj0.userData.points.push(new PMPoint(-0.315341, 1.04169, 0));
obj0.userData.points.push(new PMPoint(1.35391, 0.174345, 0));
obj0.userData.points.push(new PMPoint(1.44204, 0.769597, 0));
obj0.userData.points.push(new PMPoint(-0.412589, 0.928985, 0));
obj0.userData.points.push(new PMPoint(-0.744614, 0.22541, 0));
obj0.userData.points.push(new PMPoint(-0.315341, -1.04169, 0));
obj0.userData.points.push(new PMPoint(0.332026, -1.47317, 0));
obj0.userData.points.push(new PMPoint(1.44204, -0.769597, 0));
obj0.userData.points.push(new PMPoint(1.35391, -0.174345, 0));
obj0.userData.points.push(new PMPoint(-0.744614, -0.22541, 0));
obj0.userData.points.push(new PMPoint(-0.412589, -0.928985, 0));
obj0.userData.points.push(new PMPoint(-0.189609, 2.05037, 0));
obj0.userData.points.push(new PMPoint(-0.572149, 1.58588, 0));
obj0.userData.points.push(new PMPoint(1.31142, 1.20108, 0));
obj0.userData.points.push(new PMPoint(0.907954, 1.64752, 0));
obj0.userData.points.push(new PMPoint(1.85462, -0.159389, 0));
obj0.userData.points.push(new PMPoint(2.18665, 0.544187, 0));
obj0.userData.points.push(new PMPoint(-0.988517, 1.10333, 0));
obj0.userData.points.push(new PMPoint(-1.39198, 0.656892, 0));
obj0.userData.points.push(new PMPoint(-0.572149, -1.58588, 0));
obj0.userData.points.push(new PMPoint(-0.189609, -2.05037, 0));
obj0.userData.points.push(new PMPoint(0.907954, -1.64752, 0));
obj0.userData.points.push(new PMPoint(1.31142, -1.20108, 0));
obj0.userData.points.push(new PMPoint(-1.39198, -0.656892, 0));
obj0.userData.points.push(new PMPoint(-0.988517, -1.10333, 0));
obj0.userData.points.push(new PMPoint(-0.856104, 2.45167, 0));
obj0.userData.points.push(new PMPoint(-1.15548, 1.7336, 0));
obj0.userData.points.push(new PMPoint(0.714565, 1.93767, 0));
obj0.userData.points.push(new PMPoint(0.457757, 2.48185, 0));
obj0.userData.points.push(new PMPoint(1.806, 1.80162, 0));
obj0.userData.points.push(new PMPoint(1.13951, 2.20292, 0));
obj0.userData.points.push(new PMPoint(2.43055, -0.333734, 0));
obj0.userData.points.push(new PMPoint(2.83402, 0.112705, 0));
obj0.userData.points.push(new PMPoint(-1.15548, -1.7336, 0));
obj0.userData.points.push(new PMPoint(-0.856104, -2.45167, 0));
obj0.userData.points.push(new PMPoint(0.457757, -2.48185, 0));
obj0.userData.points.push(new PMPoint(0.714565, -1.93767, 0));
obj0.userData.points.push(new PMPoint(0.109762, 2.76845, 0));
obj0.userData.points.push(new PMPoint(-0.473564, 2.91617, 0));
obj0.userData.points.push(new PMPoint(2.10537, 2.5197, 0));
obj0.userData.points.push(new PMPoint(1.52205, 2.66741, 0));
obj0.userData.points.push(new PMPoint(-0.473564, -2.91617, 0));
obj0.userData.points.push(new PMPoint(0.109762, -2.76845, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 2, 6, 3, 7, 6, 7, 1, 8, 2, 9, 8, 9, 3, 10, 0, 11, 10, 11, 4, 12, 5, 13, 12, 13, 5, 14, 1, 15, 14, 15, 0, 16, 4, 17, 16, 17, 6, 18, 7, 19, 18, 19, 2, 20, 6, 21, 20, 21, 8, 22, 9, 23, 22, 23, 10, 24, 11, 25, 24, 25, 12, 26, 13, 27, 26, 27, 13, 28, 5, 29, 28, 29, 16, 30, 17, 31, 30, 31, 18, 32, 19, 33, 32, 33, 6, 34, 18, 35, 34, 35, 20, 36, 21, 37, 36, 37, 22, 38, 23, 39, 38, 39, 26, 40, 27, 41, 40, 41, 27, 42, 13, 43, 42, 43, 18, 44, 32, 45, 44, 45, 36, 46, 37, 47, 46, 47, 41, 48, 27, 49, 48, 49];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [4, 12, 13, 5], [12, 26, 27, 13], [40, 41, 27, 26], [19, 18, 32, 33], [7, 6, 18, 19], [3, 2, 6, 7], [2, 1, 8, 9], [15, 1, 5, 14], [29, 5, 13, 28], [43, 13, 27, 42], [49, 27, 41, 48], [18, 44, 45, 32], [6, 34, 35, 18], [2, 20, 21, 6], [9, 8, 22, 23], [23, 22, 38, 39], [20, 36, 37, 21], [36, 46, 47, 37], [11, 10, 24, 25], [0, 3, 10, 11], [16, 30, 31, 17], [0, 16, 17, 4]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[27,41],
      [37,36],
      [32,18],
      [13,27],
      [27,26],
      [23,22],
      [21,20],
      [18,6],
      [19,18],
      [17,16],
      [5,13],
      [13,12],
      [11,10],
      [9,8],
      [6,2],
      [7,6],
      [4,0],
      [1,5],
      [5,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341];

obj0.userData.subtrees = [[48,49],
      [46,47],
      [44,45],
      [42,43],
      [40,41,48,49],
      [38,39],
      [36,37,46,47],
      [34,35],
      [32,33,44,45],
      [30,31],
      [28,29],
      [26,27,40,41,42,43,48,49],
      [24,25],
      [22,23,38,39],
      [20,21,36,37,46,47],
      [18,19,32,33,34,35,44,45],
      [16,17,30,31],
      [14,15],
      [12,13,26,27,28,29,40,41,42,43,48,49],
      [10,11,24,25],
      [8,9,22,23,38,39],
      [6,7,18,19,20,21,32,33,34,35,36,37,44,45,46,47],
      [4,5,12,13,14,15,16,17,26,27,28,29,30,31,40,41,42,43,48,49]];

obj0.userData.polytoperoot = [[-0.508242911564665,-0.508242911564665,0.718764018514738],
      [-0.407495660980206,-0.983781551346603,0.407495660980206],
      [0.792893218813452,-0.378679656440357,-0.121320343559642]];

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
