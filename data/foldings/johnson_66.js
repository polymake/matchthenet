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
obj0.userData.points.push(new PMPoint(0.558042, 0, 0));
obj0.userData.points.push(new PMPoint(0.952637, 0.394595, 0));
obj0.userData.points.push(new PMPoint(0.952637, 0.952637, 0));
obj0.userData.points.push(new PMPoint(0.558042, 1.34723, 0));
obj0.userData.points.push(new PMPoint(0, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-0.394595, 0.952637, 0));
obj0.userData.points.push(new PMPoint(-0.394595, 0.394595, 0));
obj0.userData.points.push(new PMPoint(-0.394595, -0.394595, 0));
obj0.userData.points.push(new PMPoint(-0.394595, -0.952637, 0));
obj0.userData.points.push(new PMPoint(0, -1.34723, 0));
obj0.userData.points.push(new PMPoint(0.558042, -1.34723, 0));
obj0.userData.points.push(new PMPoint(0.952637, -0.952637, 0));
obj0.userData.points.push(new PMPoint(0.952637, -0.394595, 0));
obj0.userData.points.push(new PMPoint(1.34723, 0, 0));
obj0.userData.points.push(new PMPoint(1.90527, 0, 0));
obj0.userData.points.push(new PMPoint(2.29987, 0.394595, 0));
obj0.userData.points.push(new PMPoint(2.29987, 0.952637, 0));
obj0.userData.points.push(new PMPoint(1.90527, 1.34723, 0));
obj0.userData.points.push(new PMPoint(1.34723, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-0.78919, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-1.34723, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-1.74183, 0.952637, 0));
obj0.userData.points.push(new PMPoint(-1.74183, 0.394595, 0));
obj0.userData.points.push(new PMPoint(-1.34723, 0, 0));
obj0.userData.points.push(new PMPoint(-0.78919, 0, 0));
obj0.userData.points.push(new PMPoint(0.952637, 1.74183, 0));
obj0.userData.points.push(new PMPoint(0.952637, 2.29987, 0));
obj0.userData.points.push(new PMPoint(0.558042, 2.69446, 0));
obj0.userData.points.push(new PMPoint(0, 2.69446, 0));
obj0.userData.points.push(new PMPoint(-0.394595, 2.29987, 0));
obj0.userData.points.push(new PMPoint(-0.394595, 1.74183, 0));
obj0.userData.points.push(new PMPoint(-0.539027, -0.144432, 0));
obj0.userData.points.push(new PMPoint(1.09707, -0.144432, 0));
obj0.userData.points.push(new PMPoint(-0.539027, 1.49166, 0));
obj0.userData.points.push(new PMPoint(1.09707, 1.49166, 0));
obj0.userData.points.push(new PMPoint(-0.539027, -1.49166, 0));
obj0.userData.points.push(new PMPoint(1.09707, -1.49166, 0));
obj0.userData.points.push(new PMPoint(0.279021, -1.83051, 0));
obj0.userData.points.push(new PMPoint(2.4443, 1.49166, 0));
obj0.userData.points.push(new PMPoint(2.78315, 0.673616, 0));
obj0.userData.points.push(new PMPoint(-1.88626, 1.49166, 0));
obj0.userData.points.push(new PMPoint(-2.22511, 0.673616, 0));
obj0.userData.points.push(new PMPoint(0.279021, 3.17774, 0));
obj0.userData.points.push(new PMPoint(-0.394595, -2.03069, 0));
obj0.userData.points.push(new PMPoint(0.144432, -1.88626, 0));
obj0.userData.points.push(new PMPoint(0.41361, -1.88626, 0));
obj0.userData.points.push(new PMPoint(0.952637, -2.03069, 0));
obj0.userData.points.push(new PMPoint(2.8389, 0.808205, 0));
obj0.userData.points.push(new PMPoint(2.98333, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-2.42529, 1.34723, 0));
obj0.userData.points.push(new PMPoint(-2.28085, 0.808205, 0));
obj0.userData.points.push(new PMPoint(-0.250163, -2.56972, 0));
obj0.userData.points.push(new PMPoint(0.288864, -2.42529, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 0, 7, 6, 7, 0, 8, 8, 9, 9, 10, 10, 11, 11, 12, 1, 13, 12, 13, 2, 14, 14, 15, 15, 16, 16, 17, 17, 18, 3, 19, 18, 19, 6, 20, 20, 21, 21, 22, 22, 23, 23, 24, 7, 25, 24, 25, 4, 26, 26, 27, 27, 28, 28, 29, 29, 30, 5, 31, 30, 31, 0, 32, 7, 32, 1, 33, 2, 33, 5, 34, 6, 34, 3, 35, 4, 35, 9, 36, 10, 36, 11, 37, 12, 37, 10, 38, 11, 38, 17, 39, 18, 39, 16, 40, 17, 40, 21, 41, 22, 41, 22, 42, 23, 42, 28, 43, 29, 43, 36, 44, 10, 45, 44, 45, 11, 46, 37, 47, 46, 47, 17, 48, 39, 49, 48, 49, 41, 50, 22, 51, 50, 51, 44, 52, 45, 53, 52, 53];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5, 6, 7], [18, 17, 39], [13, 1, 0, 8, 9, 10, 11, 12], [3, 2, 14, 15, 16, 17, 18, 19], [9, 36, 10], [7, 6, 20, 21, 22, 23, 24, 25], [21, 41, 22], [5, 4, 26, 27, 28, 29, 30, 31], [0, 7, 32], [37, 12, 11], [17, 16, 40], [2, 1, 33], [6, 5, 34], [4, 3, 35], [11, 10, 38], [17, 48, 49, 39], [36, 44, 45, 10], [29, 28, 43], [23, 22, 42], [41, 50, 51, 22], [37, 11, 46, 47], [53, 45, 44, 52]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[45,44],
      [22,41],
      [39,17],
      [37,11],
      [10,36],
      [29,28],
      [23,22],
      [22,21],
      [17,16],
      [18,17],
      [11,10],
      [12,11],
      [10,9],
      [4,3],
      [6,5],
      [2,1],
      [0,7],
      [5,4],
      [7,6],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.35619449019234,
      2.97167419886273,
      2.97167419886273,
      2.97167419886273,
      2.97167419886273,
      2.52611294491941,
      2.52611294491941,
      2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      1.5707963267949,
      1.5707963267949,
      1.5707963267949,
      1.5707963267949];

obj0.userData.subtrees = [[52,53],
      [50,51],
      [48,49],
      [46,47],
      [44,45,52,53],
      [43],
      [42],
      [41,50,51],
      [40],
      [39,48,49],
      [38],
      [37,46,47],
      [36,44,45,52,53],
      [35],
      [34],
      [33],
      [32],
      [26,27,28,29,30,31,43],
      [20,21,22,23,24,25,41,42,50,51],
      [14,15,16,17,18,19,39,40,48,49],
      [8,9,10,11,12,13,36,37,38,44,45,46,47,52,53]];

obj0.userData.polytoperoot = [[0.279020853107925,0.673615927758064,-0.826217499530664],
      [0,0,-3.58396151707414],
      [-1.4142135623731,-1.4142135623731,0]];

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
