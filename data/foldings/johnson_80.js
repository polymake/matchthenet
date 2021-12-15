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
obj0.userData.points.push(new PMPoint(0.447838, 0, 0));
obj0.userData.points.push(new PMPoint(0.810146, 0.263233, 0));
obj0.userData.points.push(new PMPoint(0.948536, 0.689152, 0));
obj0.userData.points.push(new PMPoint(0.810146, 1.11507, 0));
obj0.userData.points.push(new PMPoint(0.447838, 1.3783, 0));
obj0.userData.points.push(new PMPoint(0, 1.3783, 0));
obj0.userData.points.push(new PMPoint(-0.362309, 1.11507, 0));
obj0.userData.points.push(new PMPoint(-0.500698, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-0.362309, 0.263233, 0));
obj0.userData.points.push(new PMPoint(-0.13839, -0.425919, 0));
obj0.userData.points.push(new PMPoint(0.223919, -0.689152, 0));
obj0.userData.points.push(new PMPoint(0.586227, -0.425919, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -0.099076, 0));
obj0.userData.points.push(new PMPoint(-0.263233, -0.362309, 0));
obj0.userData.points.push(new PMPoint(0.711071, -0.362309, 0));
obj0.userData.points.push(new PMPoint(1.07338, -0.099076, 0));
obj0.userData.points.push(new PMPoint(-0.948536, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-1.08693, 0.263233, 0));
obj0.userData.points.push(new PMPoint(-0.724617, 0, 0));
obj0.userData.points.push(new PMPoint(1.17245, 0, 0));
obj0.userData.points.push(new PMPoint(1.53476, 0.263233, 0));
obj0.userData.points.push(new PMPoint(1.39637, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-0.788228, 1.25346, 0));
obj0.userData.points.push(new PMPoint(-0.926617, 0.827541, 0));
obj0.userData.points.push(new PMPoint(-0.13839, 1.80422, 0));
obj0.userData.points.push(new PMPoint(-0.586227, 1.80422, 0));
obj0.userData.points.push(new PMPoint(-0.724617, 1.3783, 0));
obj0.userData.points.push(new PMPoint(1.37446, 0.827541, 0));
obj0.userData.points.push(new PMPoint(1.23607, 1.25346, 0));
obj0.userData.points.push(new PMPoint(1.17245, 1.3783, 0));
obj0.userData.points.push(new PMPoint(1.03407, 1.80422, 0));
obj0.userData.points.push(new PMPoint(0.586227, 1.80422, 0));
obj0.userData.points.push(new PMPoint(0.447838, 1.82614, 0));
obj0.userData.points.push(new PMPoint(0, 1.82614, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -0.788228, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -1.05146, 0));
obj0.userData.points.push(new PMPoint(0.487152, -1.05146, 0));
obj0.userData.points.push(new PMPoint(0.84946, -0.788228, 0));
obj0.userData.points.push(new PMPoint(-0.672353, -0.544461, 0));
obj0.userData.points.push(new PMPoint(1.12019, -0.544461, 0));
obj0.userData.points.push(new PMPoint(-1.35016, -0.099076, 0));
obj0.userData.points.push(new PMPoint(-0.98785, -0.362309, 0));
obj0.userData.points.push(new PMPoint(-1.37446, 0.827541, 0));
obj0.userData.points.push(new PMPoint(-1.51284, 0.401622, 0));
obj0.userData.points.push(new PMPoint(1.43569, -0.362309, 0));
obj0.userData.points.push(new PMPoint(1.798, -0.099076, 0));
obj0.userData.points.push(new PMPoint(1.96068, 0.401622, 0));
obj0.userData.points.push(new PMPoint(1.82229, 0.827541, 0));
obj0.userData.points.push(new PMPoint(-1.22628, 1.16035, 0));
obj0.userData.points.push(new PMPoint(-0.13839, 2.25206, 0));
obj0.userData.points.push(new PMPoint(-0.586227, 2.25206, 0));
obj0.userData.points.push(new PMPoint(-1.01215, 1.94261, 0));
obj0.userData.points.push(new PMPoint(-1.15054, 1.51669, 0));
obj0.userData.points.push(new PMPoint(1.67412, 1.16035, 0));
obj0.userData.points.push(new PMPoint(1.59837, 1.51669, 0));
obj0.userData.points.push(new PMPoint(1.45998, 1.94261, 0));
obj0.userData.points.push(new PMPoint(1.03407, 2.25206, 0));
obj0.userData.points.push(new PMPoint(0.586227, 2.25206, 0));
obj0.userData.points.push(new PMPoint(0.223919, 2.21398, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -1.47738, 0));
obj0.userData.points.push(new PMPoint(0.406071, -1.09827, 0));
obj0.userData.points.push(new PMPoint(0.625541, -1.47738, 0));
obj0.userData.points.push(new PMPoint(1.07338, -1.47738, 0));
obj0.userData.points.push(new PMPoint(1.21177, -1.05146, 0));
obj0.userData.points.push(new PMPoint(-1.53231, 0.310044, 0));
obj0.userData.points.push(new PMPoint(-1.73676, 1.09077, 0));
obj0.userData.points.push(new PMPoint(-2.09907, 0.827541, 0));
obj0.userData.points.push(new PMPoint(-1.96068, 0.401622, 0));
obj0.userData.points.push(new PMPoint(1.98015, 0.310044, 0));
obj0.userData.points.push(new PMPoint(2.40852, 0.401622, 0));
obj0.userData.points.push(new PMPoint(2.54691, 0.827541, 0));
obj0.userData.points.push(new PMPoint(2.1846, 1.09077, 0));
obj0.userData.points.push(new PMPoint(-0.974067, 2.02814, 0));
obj0.userData.points.push(new PMPoint(0, 2.67798, 0));
obj0.userData.points.push(new PMPoint(-0.362309, 2.94121, 0));
obj0.userData.points.push(new PMPoint(-0.724617, 2.67798, 0));
obj0.userData.points.push(new PMPoint(1.12718, 2.24227, 0));
obj0.userData.points.push(new PMPoint(0.248216, -1.61577, 0));
obj0.userData.points.push(new PMPoint(0.386606, -1.18985, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.18985, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -1.61577, 0));
obj0.userData.points.push(new PMPoint(-0.98785, -1.74061, 0));
obj0.userData.points.push(new PMPoint(-1.12624, -2.16653, 0));
obj0.userData.points.push(new PMPoint(-0.98785, -2.59245, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -2.85568, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -2.85568, 0));
obj0.userData.points.push(new PMPoint(0.184605, -2.59245, 0));
obj0.userData.points.push(new PMPoint(0.322995, -2.16653, 0));
obj0.userData.points.push(new PMPoint(0.184605, -1.74061, 0));
obj0.userData.points.push(new PMPoint(1.4993, -1.61577, 0));
obj0.userData.points.push(new PMPoint(1.63769, -1.18985, 0));
obj0.userData.points.push(new PMPoint(-2, 1.45308, 0));
obj0.userData.points.push(new PMPoint(-2.3623, 1.18985, 0));
obj0.userData.points.push(new PMPoint(2.81014, 1.18985, 0));
obj0.userData.points.push(new PMPoint(2.44783, 1.45308, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 0, 9, 8, 9, 0, 10, 10, 11, 1, 12, 11, 12, 9, 13, 0, 14, 13, 14, 1, 15, 2, 16, 15, 16, 8, 17, 17, 18, 9, 19, 18, 19, 2, 20, 20, 21, 3, 22, 21, 22, 7, 23, 8, 24, 23, 24, 6, 25, 25, 26, 7, 27, 26, 27, 3, 28, 4, 29, 28, 29, 4, 30, 30, 31, 5, 32, 31, 32, 5, 33, 6, 34, 33, 34, 10, 35, 11, 36, 35, 36, 11, 37, 12, 38, 37, 38, 13, 39, 14, 39, 15, 40, 16, 40, 18, 41, 19, 42, 41, 42, 17, 43, 18, 44, 43, 44, 20, 45, 21, 46, 45, 46, 21, 47, 22, 48, 47, 48, 23, 49, 24, 49, 25, 50, 26, 51, 50, 51, 26, 52, 27, 53, 52, 53, 28, 54, 29, 54, 30, 55, 31, 56, 55, 56, 31, 57, 32, 58, 57, 58, 33, 59, 34, 59, 35, 60, 60, 61, 36, 62, 61, 62, 11, 63, 36, 63, 37, 64, 64, 65, 38, 66, 65, 66, 18, 67, 41, 67, 43, 68, 68, 69, 44, 70, 69, 70, 21, 71, 46, 71, 47, 72, 72, 73, 48, 74, 73, 74, 26, 75, 51, 75, 50, 76, 76, 77, 51, 78, 77, 78, 31, 79, 56, 79, 62, 80, 36, 81, 80, 81, 60, 82, 61, 83, 82, 83, 61, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 62, 91, 90, 91, 65, 92, 66, 93, 92, 93, 68, 94, 69, 95, 94, 95, 73, 96, 74, 97, 96, 97];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [12, 1, 0, 10, 11], [0, 9, 13, 14], [35, 60, 61, 62, 36], [11, 10, 35, 36], [2, 1, 15, 16], [9, 8, 17, 18, 19], [80, 81, 36, 62], [14, 13, 39], [19, 18, 41, 42], [66, 38, 37, 64, 65], [12, 11, 37, 38], [3, 2, 20, 21, 22], [29, 28, 54], [8, 7, 23, 24], [11, 36, 63], [82, 83, 61, 60], [16, 15, 40], [90, 91, 62, 61, 84, 85, 86, 87, 88, 89], [18, 17, 43, 44], [26, 51, 75], [21, 20, 45, 46], [7, 6, 25, 26, 27], [18, 67, 41], [26, 25, 50, 51], [94, 95, 69, 68], [43, 68, 69, 70, 44], [4, 3, 28, 29], [24, 23, 49], [5, 4, 30, 31, 32], [27, 26, 52, 53], [34, 33, 59], [66, 65, 92, 93], [6, 5, 33, 34], [22, 21, 47, 48], [21, 46, 71], [31, 30, 55, 56], [31, 56, 79], [32, 31, 57, 58], [48, 47, 72, 73, 74], [50, 76, 77, 78, 51], [74, 73, 96, 97]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xBA3B26, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[74,73],
      [69,68],
      [66,65],
      [62,61],
      [61,60],
      [36,62],
      [31,56],
      [51,50],
      [26,51],
      [48,47],
      [21,46],
      [44,43],
      [41,18],
      [38,37],
      [11,36],
      [36,35],
      [34,33],
      [32,31],
      [31,30],
      [29,28],
      [27,26],
      [26,25],
      [24,23],
      [22,21],
      [21,20],
      [18,17],
      [19,18],
      [16,15],
      [14,13],
      [12,11],
      [11,10],
      [6,5],
      [5,4],
      [4,3],
      [7,6],
      [8,7],
      [3,2],
      [9,8],
      [2,1],
      [0,9],
      [1,0]];

obj0.userData.angles = [2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.0344439357957,
      2.12437068569194,
      2.12437068569194,
      2.0344439357957];

obj0.userData.subtrees = [[96,97],
      [94,95],
      [92,93],
      [84,85,86,87,88,89,90,91],
      [82,83],
      [80,81],
      [79],
      [76,77,78],
      [75],
      [72,73,74,96,97],
      [71],
      [68,69,70,94,95],
      [67],
      [64,65,66,92,93],
      [63],
      [60,61,62,80,81,82,83,84,85,86,87,88,89,90,91],
      [59],
      [57,58],
      [55,56,79],
      [54],
      [52,53],
      [50,51,75,76,77,78],
      [49],
      [47,48,72,73,74,96,97],
      [45,46,71],
      [43,44,68,69,70,94,95],
      [41,42,67],
      [40],
      [39],
      [37,38,64,65,66,92,93],
      [35,36,60,61,62,63,80,81,82,83,84,85,86,87,88,89,90,91],
      [33,34,59],
      [30,31,32,55,56,57,58,79],
      [28,29,54],
      [25,26,27,50,51,52,53,75,76,77,78],
      [23,24,49],
      [20,21,22,45,46,47,48,71,72,73,74,96,97],
      [17,18,19,41,42,43,44,67,68,69,70,94,95],
      [15,16,40],
      [13,14,39],
      [10,11,12,35,36,37,38,60,61,62,63,64,65,66,80,81,82,83,84,85,86,87,88,89,90,91,92,93]];

obj0.userData.polytoperoot = [[0.223918979794513,0.948536019861961,0.223918979794513],
      [3.61298981943098,2.23295050941569,0],
      [0.809016994374947,-1.30901699437495,-1.1180339887499]];

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
