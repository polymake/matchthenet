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
obj0.userData.points.push(new PMPoint(0.890758, 0, 0));
obj0.userData.points.push(new PMPoint(0.733949, 0.386256, 0));
obj0.userData.points.push(new PMPoint(0.0520246, 0.799234, 0));
obj0.userData.points.push(new PMPoint(-0.605278, -0.24533, 0));
obj0.userData.points.push(new PMPoint(0.0157092, -1.10692, 0));
obj0.userData.points.push(new PMPoint(0.455091, -1.22021, 0));
obj0.userData.points.push(new PMPoint(1.21368, -0.441248, 0));
obj0.userData.points.push(new PMPoint(0.545251, 1.24171, 0));
obj0.userData.points.push(new PMPoint(0.163173, 1.14215, 0));
obj0.userData.points.push(new PMPoint(-0.0399436, 1.00231, 0));
obj0.userData.points.push(new PMPoint(1.4317, -0.0797416, 0));
obj0.userData.points.push(new PMPoint(1.74356, 0.558443, 0));
obj0.userData.points.push(new PMPoint(0.949732, 1.48054, 0));
obj0.userData.points.push(new PMPoint(0.637626, 1.25697, 0));
obj0.userData.points.push(new PMPoint(-0.0509975, 0.996932, 0));
obj0.userData.points.push(new PMPoint(-0.415866, 0.926, 0));
obj0.userData.points.push(new PMPoint(-0.583186, 0.870056, 0));
obj0.userData.points.push(new PMPoint(-0.933489, 0.320114, 0));
obj0.userData.points.push(new PMPoint(-0.646758, -0.0908463, 0));
obj0.userData.points.push(new PMPoint(-1.09479, -0.352468, 0));
obj0.userData.points.push(new PMPoint(-1.1139, -0.535853, 0));
obj0.userData.points.push(new PMPoint(-0.479234, -1.44338, 0));
obj0.userData.points.push(new PMPoint(0.868037, -1.80784, 0));
obj0.userData.points.push(new PMPoint(1.49669, -1.91426, 0));
obj0.userData.points.push(new PMPoint(1.64026, -1.0092, 0));
obj0.userData.points.push(new PMPoint(-0.288972, -1.62203, 0));
obj0.userData.points.push(new PMPoint(-0.332223, -1.91369, 0));
obj0.userData.points.push(new PMPoint(0.383032, -1.9348, 0));
obj0.userData.points.push(new PMPoint(0.703136, 1.59167, 0));
obj0.userData.points.push(new PMPoint(0.262198, 2.50509, 0));
obj0.userData.points.push(new PMPoint(-0.0740243, 2.09523, 0));
obj0.userData.points.push(new PMPoint(-0.0232742, 1.52401, 0));
obj0.userData.points.push(new PMPoint(-0.0728643, 1.49552, 0));
obj0.userData.points.push(new PMPoint(-0.407796, 1.05565, 0));
obj0.userData.points.push(new PMPoint(2.31131, 1.27775, 0));
obj0.userData.points.push(new PMPoint(1.82298, 2.27332, 0));
obj0.userData.points.push(new PMPoint(1.53202, 2.31102, 0));
obj0.userData.points.push(new PMPoint(-1.00799, 1.79385, 0));
obj0.userData.points.push(new PMPoint(-1.32412, 0.791541, 0));
obj0.userData.points.push(new PMPoint(-1.06839, 0.445799, 0));
obj0.userData.points.push(new PMPoint(-1.19249, -0.958653, 0));
obj0.userData.points.push(new PMPoint(-1.01348, -1.69127, 0));
obj0.userData.points.push(new PMPoint(-0.662249, -1.67455, 0));
obj0.userData.points.push(new PMPoint(0.52046, -2.43332, 0));
obj0.userData.points.push(new PMPoint(0.641045, -2.76363, 0));
obj0.userData.points.push(new PMPoint(1.69357, -3.00553, 0));
obj0.userData.points.push(new PMPoint(0.147086, 2.77494, 0));
obj0.userData.points.push(new PMPoint(-0.931188, 2.71451, 0));
obj0.userData.points.push(new PMPoint(-1.15359, 1.99388, 0));
obj0.userData.points.push(new PMPoint(-0.105621, 2.07344, 0));
obj0.userData.points.push(new PMPoint(-0.209157, 2.05255, 0));
obj0.userData.points.push(new PMPoint(-0.232704, 2.02224, 0));
obj0.userData.points.push(new PMPoint(-0.583788, 1.06799, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 5, 6, 1, 7, 6, 7, 2, 8, 8, 9, 3, 10, 9, 10, 1, 11, 11, 12, 12, 13, 2, 14, 13, 14, 3, 15, 15, 16, 16, 17, 17, 18, 0, 19, 18, 19, 4, 20, 20, 21, 5, 22, 21, 22, 6, 23, 23, 24, 7, 25, 24, 25, 5, 26, 26, 27, 6, 28, 27, 28, 8, 29, 29, 30, 30, 31, 9, 32, 31, 32, 9, 33, 10, 34, 33, 34, 12, 35, 35, 36, 13, 37, 36, 37, 17, 38, 38, 39, 18, 40, 39, 40, 21, 41, 41, 42, 22, 43, 42, 43, 23, 44, 44, 45, 24, 46, 45, 46, 30, 47, 47, 48, 48, 49, 31, 50, 49, 50, 33, 51, 51, 52, 34, 53, 52, 53];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [4, 20, 21, 22, 5], [24, 23, 44, 45, 46], [13, 12, 35, 36, 37], [8, 29, 30, 31, 32, 9], [25, 7, 6, 23, 24], [21, 41, 42, 43, 22], [7, 1, 0, 4, 5, 6], [3, 2, 8, 9, 10], [53, 34, 33, 51, 52], [2, 1, 11, 12, 13, 14], [10, 9, 33, 34], [0, 3, 15, 16, 17, 18, 19], [6, 5, 26, 27, 28], [18, 17, 38, 39, 40], [30, 47, 48, 49, 50, 31]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[34,33],
      [31,30],
      [24,23],
      [22,21],
      [18,17],
      [13,12],
      [10,9],
      [9,8],
      [6,5],
      [7,6],
      [5,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

obj0.userData.angles = [3.01564452168372,
      1.9126649260047,
      2.0436379598492,
      2.89907534037651,
      1.84293008836174,
      2.32922860777183,
      2.23862388121126,
      2.21271856253552,
      1.87887865406089,
      1.85988959757445,
      1.98440765851479,
      2.7790547001455,
      2.09515261209851,
      2.81021939147365,
      1.96200780902828];

obj0.userData.subtrees = [[51,52,53],
      [47,48,49,50],
      [44,45,46],
      [41,42,43],
      [38,39,40],
      [35,36,37],
      [33,34,51,52,53],
      [29,30,31,32,47,48,49,50],
      [26,27,28],
      [23,24,25,44,45,46],
      [20,21,22,41,42,43],
      [15,16,17,18,19,38,39,40],
      [11,12,13,14,35,36,37],
      [8,9,10,29,30,31,32,33,34,47,48,49,50,51,52,53],
      [4,5,6,7,20,21,22,23,24,25,26,27,28,41,42,43,44,45,46]];

obj0.userData.polytoperoot = [[0.521982544451498,0.168497717264692,-0.781254980048561],
      [1.10803333915357,-1.05680201800437,-0.767604279320831],
      [-0.373657749885567,-1.1056023649626,0.98276883860527]];

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
