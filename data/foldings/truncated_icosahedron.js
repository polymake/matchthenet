// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'folding' + divNumber );
var scene = new THREE.Scene();
var renderer = foldingRenderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(backgroundColor, 1);
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
obj0.userData.points.push(new PMPoint(0.403548, 0, 0));
obj0.userData.points.push(new PMPoint(0.528251, 0.383797, 0));
obj0.userData.points.push(new PMPoint(0.201774, 0.620997, 0));
obj0.userData.points.push(new PMPoint(-0.124703, 0.383797, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -0.349483, 0));
obj0.userData.points.push(new PMPoint(0, -0.698966, 0));
obj0.userData.points.push(new PMPoint(0.403548, -0.698966, 0));
obj0.userData.points.push(new PMPoint(0.605322, -0.349483, 0));
obj0.userData.points.push(new PMPoint(-0.519433, 0.4677, 0));
obj0.userData.points.push(new PMPoint(-0.789459, 0.167805, 0));
obj0.userData.points.push(new PMPoint(-0.664756, -0.215992, 0));
obj0.userData.points.push(new PMPoint(-0.270026, -0.299895, 0));
obj0.userData.points.push(new PMPoint(0.159592, 1.02233, 0));
obj0.userData.points.push(new PMPoint(-0.209068, 1.18647, 0));
obj0.userData.points.push(new PMPoint(-0.535545, 0.949273, 0));
obj0.userData.points.push(new PMPoint(-0.493363, 0.547935, 0));
obj0.userData.points.push(new PMPoint(0.673575, -0.299895, 0));
obj0.userData.points.push(new PMPoint(1.0683, -0.215992, 0));
obj0.userData.points.push(new PMPoint(1.19301, 0.167805, 0));
obj0.userData.points.push(new PMPoint(0.922981, 0.4677, 0));
obj0.userData.points.push(new PMPoint(0.896911, 0.547935, 0));
obj0.userData.points.push(new PMPoint(0.939093, 0.949273, 0));
obj0.userData.points.push(new PMPoint(0.612616, 1.18647, 0));
obj0.userData.points.push(new PMPoint(0.243956, 1.02233, 0));
obj0.userData.points.push(new PMPoint(0.673575, -0.998861, 0));
obj0.userData.points.push(new PMPoint(1.04223, -0.834723, 0));
obj0.userData.points.push(new PMPoint(1.00005, -0.433385, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -1.04845, 0));
obj0.userData.points.push(new PMPoint(0, -1.39793, 0));
obj0.userData.points.push(new PMPoint(0.403548, -1.39793, 0));
obj0.userData.points.push(new PMPoint(0.605322, -1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.596504, -0.433385, 0));
obj0.userData.points.push(new PMPoint(-0.638686, -0.834723, 0));
obj0.userData.points.push(new PMPoint(-0.270026, -0.998861, 0));
obj0.userData.points.push(new PMPoint(-1.18419, 0.251707, 0));
obj0.userData.points.push(new PMPoint(-1.45422, -0.0481876, 0));
obj0.userData.points.push(new PMPoint(-1.32951, -0.431985, 0));
obj0.userData.points.push(new PMPoint(-0.934783, -0.515887, 0));
obj0.userData.points.push(new PMPoint(-0.721207, 0.817183, 0));
obj0.userData.points.push(new PMPoint(-1.11594, 0.73328, 0));
obj0.userData.points.push(new PMPoint(-1.15812, 0.331943, 0));
obj0.userData.points.push(new PMPoint(-0.25125, 1.58781, 0));
obj0.userData.points.push(new PMPoint(-0.61991, 1.75195, 0));
obj0.userData.points.push(new PMPoint(-0.946387, 1.51475, 0));
obj0.userData.points.push(new PMPoint(-0.904205, 1.11341, 0));
obj0.userData.points.push(new PMPoint(0.429618, 1.32223, 0));
obj0.userData.points.push(new PMPoint(0.227844, 1.67171, 0));
obj0.userData.points.push(new PMPoint(-0.166886, 1.58781, 0));
obj0.userData.points.push(new PMPoint(1.33833, -0.515887, 0));
obj0.userData.points.push(new PMPoint(1.73306, -0.431985, 0));
obj0.userData.points.push(new PMPoint(1.85776, -0.0481876, 0));
obj0.userData.points.push(new PMPoint(1.58774, 0.251707, 0));
obj0.userData.points.push(new PMPoint(1.56167, 0.331943, 0));
obj0.userData.points.push(new PMPoint(1.51949, 0.73328, 0));
obj0.userData.points.push(new PMPoint(1.12476, 0.817183, 0));
obj0.userData.points.push(new PMPoint(1.30775, 1.11341, 0));
obj0.userData.points.push(new PMPoint(1.34994, 1.51475, 0));
obj0.userData.points.push(new PMPoint(1.02346, 1.75195, 0));
obj0.userData.points.push(new PMPoint(0.654798, 1.58781, 0));
obj0.userData.points.push(new PMPoint(0.631392, -1.4002, 0));
obj0.userData.points.push(new PMPoint(0.95787, -1.6374, 0));
obj0.userData.points.push(new PMPoint(1.32653, -1.47326, 0));
obj0.userData.points.push(new PMPoint(1.36871, -1.07192, 0));
obj0.userData.points.push(new PMPoint(-0.124703, -1.78173, 0));
obj0.userData.points.push(new PMPoint(0.201774, -2.01893, 0));
obj0.userData.points.push(new PMPoint(0.528251, -1.78173, 0));
obj0.userData.points.push(new PMPoint(-0.605322, -1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.807096, -1.39793, 0));
obj0.userData.points.push(new PMPoint(-0.605322, -1.74742, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -1.74742, 0));
obj0.userData.points.push(new PMPoint(-1.85776, -0.0481876, 0));
obj0.userData.points.push(new PMPoint(-1.98247, -0.431985, 0));
obj0.userData.points.push(new PMPoint(-1.65599, -0.669184, 0));
obj0.userData.points.push(new PMPoint(-1.30889, 0.635504, 0));
obj0.userData.points.push(new PMPoint(-1.70362, 0.719407, 0));
obj0.userData.points.push(new PMPoint(-1.97365, 0.419512, 0));
obj0.userData.points.push(new PMPoint(-1.84895, 0.0357148, 0));
obj0.userData.points.push(new PMPoint(-0.744613, 2.13574, 0));
obj0.userData.points.push(new PMPoint(-1.14816, 2.13574, 0));
obj0.userData.points.push(new PMPoint(-1.27286, 1.75195, 0));
obj0.userData.points.push(new PMPoint(0.0752273, 1.82501, 0));
obj0.userData.points.push(new PMPoint(0.033045, 2.22635, 0));
obj0.userData.points.push(new PMPoint(-0.335615, 2.39048, 0));
obj0.userData.points.push(new PMPoint(-0.662092, 2.15329, 0));
obj0.userData.points.push(new PMPoint(2.05954, -0.669184, 0));
obj0.userData.points.push(new PMPoint(2.38602, -0.431985, 0));
obj0.userData.points.push(new PMPoint(2.26131, -0.0481876, 0));
obj0.userData.points.push(new PMPoint(2.25249, 0.0357148, 0));
obj0.userData.points.push(new PMPoint(2.3772, 0.419512, 0));
obj0.userData.points.push(new PMPoint(2.10717, 0.719407, 0));
obj0.userData.points.push(new PMPoint(1.71244, 0.635504, 0));
obj0.userData.points.push(new PMPoint(1.67641, 1.75195, 0));
obj0.userData.points.push(new PMPoint(1.55171, 2.13574, 0));
obj0.userData.points.push(new PMPoint(1.14816, 2.13574, 0));
obj0.userData.points.push(new PMPoint(0.915687, -2.03874, 0));
obj0.userData.points.push(new PMPoint(1.24216, -2.27594, 0));
obj0.userData.points.push(new PMPoint(1.61082, -2.1118, 0));
obj0.userData.points.push(new PMPoint(1.65301, -1.71046, 0));
obj0.userData.points.push(new PMPoint(-0.493363, -1.94587, 0));
obj0.userData.points.push(new PMPoint(-0.535545, -2.3472, 0));
obj0.userData.points.push(new PMPoint(-0.209068, -2.5844, 0));
obj0.userData.points.push(new PMPoint(0.159592, -2.42027, 0));
obj0.userData.points.push(new PMPoint(-2.12779, 0.251707, 0));
obj0.userData.points.push(new PMPoint(-2.52252, 0.167805, 0));
obj0.userData.points.push(new PMPoint(-2.64722, -0.215992, 0));
obj0.userData.points.push(new PMPoint(-2.3772, -0.515887, 0));
obj0.userData.points.push(new PMPoint(-0.542839, 2.48523, 0));
obj0.userData.points.push(new PMPoint(-0.744613, 2.83471, 0));
obj0.userData.points.push(new PMPoint(-1.14816, 2.83471, 0));
obj0.userData.points.push(new PMPoint(-1.34994, 2.48523, 0));
obj0.userData.points.push(new PMPoint(2.78075, -0.515887, 0));
obj0.userData.points.push(new PMPoint(3.05077, -0.215992, 0));
obj0.userData.points.push(new PMPoint(2.92607, 0.167805, 0));
obj0.userData.points.push(new PMPoint(2.53134, 0.251707, 0));
obj0.userData.points.push(new PMPoint(1.28435, -2.67727, 0));
obj0.userData.points.push(new PMPoint(1.67908, -2.76118, 0));
obj0.userData.points.push(new PMPoint(1.88085, -2.41169, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 6, 7, 1, 8, 7, 8, 4, 9, 9, 10, 10, 11, 0, 12, 11, 12, 3, 13, 13, 14, 14, 15, 4, 16, 15, 16, 1, 17, 17, 18, 18, 19, 2, 20, 19, 20, 2, 21, 21, 22, 22, 23, 3, 24, 23, 24, 7, 25, 25, 26, 8, 27, 26, 27, 6, 28, 28, 29, 29, 30, 7, 31, 30, 31, 5, 32, 32, 33, 6, 34, 33, 34, 10, 35, 35, 36, 36, 37, 11, 38, 37, 38, 9, 39, 39, 40, 10, 41, 40, 41, 14, 42, 42, 43, 43, 44, 15, 45, 44, 45, 13, 46, 46, 47, 14, 48, 47, 48, 18, 49, 49, 50, 50, 51, 19, 52, 51, 52, 19, 53, 53, 54, 20, 55, 54, 55, 22, 56, 56, 57, 57, 58, 23, 59, 58, 59, 25, 60, 60, 61, 61, 62, 26, 63, 62, 63, 29, 64, 64, 65, 30, 66, 65, 66, 28, 67, 67, 68, 68, 69, 29, 70, 69, 70, 36, 71, 71, 72, 37, 73, 72, 73, 35, 74, 74, 75, 75, 76, 36, 77, 76, 77, 43, 78, 78, 79, 44, 80, 79, 80, 42, 81, 81, 82, 82, 83, 43, 84, 83, 84, 50, 85, 85, 86, 51, 87, 86, 87, 51, 88, 88, 89, 89, 90, 52, 91, 90, 91, 57, 92, 92, 93, 58, 94, 93, 94, 61, 95, 95, 96, 96, 97, 62, 98, 97, 98, 64, 99, 99, 100, 100, 101, 65, 102, 101, 102, 71, 103, 103, 104, 104, 105, 72, 106, 105, 106, 78, 107, 107, 108, 108, 109, 79, 110, 109, 110, 86, 111, 111, 112, 112, 113, 87, 114, 113, 114, 96, 115, 115, 116, 97, 117, 116, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [19, 18, 49, 50, 51, 52], [8, 1, 0, 5, 6, 7], [27, 8, 7, 25, 26], [26, 25, 60, 61, 62, 63], [7, 6, 28, 29, 30, 31], [51, 50, 85, 86, 87], [5, 32, 33, 34, 6], [62, 61, 95, 96, 97, 98], [30, 29, 64, 65, 66], [67, 68, 69, 70, 29, 28], [99, 100, 101, 102, 65, 64], [103, 104, 105, 106, 72, 71], [37, 36, 71, 72, 73], [97, 96, 115, 116, 117], [74, 75, 76, 77, 36, 35], [44, 43, 78, 79, 80], [107, 108, 109, 110, 79, 78], [11, 10, 35, 36, 37, 38], [87, 86, 111, 112, 113, 114], [9, 39, 40, 41, 10], [58, 57, 92, 93, 94], [15, 14, 42, 43, 44, 45], [81, 82, 83, 84, 43, 42], [0, 4, 9, 10, 11, 12], [52, 51, 88, 89, 90, 91], [13, 46, 47, 48, 14], [4, 3, 13, 14, 15, 16], [23, 22, 56, 57, 58, 59], [20, 19, 53, 54, 55], [2, 1, 17, 18, 19, 20], [3, 2, 21, 22, 23, 24]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[97,96],
      [87,86],
      [79,78],
      [72,71],
      [65,64],
      [62,61],
      [58,57],
      [52,51],
      [51,50],
      [43,42],
      [44,43],
      [36,35],
      [37,36],
      [29,28],
      [30,29],
      [26,25],
      [23,22],
      [20,19],
      [19,18],
      [14,13],
      [15,14],
      [10,9],
      [11,10],
      [6,5],
      [7,6],
      [8,7],
      [3,2],
      [2,1],
      [4,3],
      [0,4],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.41186499736282,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.48923451380543,
      2.41186499736282,
      2.48923451380542,
      2.41186499736282,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542];

obj0.userData.subtrees = [[115,116,117],
      [111,112,113,114],
      [107,108,109,110],
      [103,104,105,106],
      [99,100,101,102],
      [95,96,97,98,115,116,117],
      [92,93,94],
      [88,89,90,91],
      [85,86,87,111,112,113,114],
      [81,82,83,84],
      [78,79,80,107,108,109,110],
      [74,75,76,77],
      [71,72,73,103,104,105,106],
      [67,68,69,70],
      [64,65,66,99,100,101,102],
      [60,61,62,63,95,96,97,98,115,116,117],
      [56,57,58,59,92,93,94],
      [53,54,55],
      [49,50,51,52,85,86,87,88,89,90,91,111,112,113,114],
      [46,47,48],
      [42,43,44,45,78,79,80,81,82,83,84,107,108,109,110],
      [39,40,41],
      [35,36,37,38,71,72,73,74,75,76,77,103,104,105,106],
      [32,33,34],
      [28,29,30,31,64,65,66,67,68,69,70,99,100,101,102],
      [25,26,27,60,61,62,63,95,96,97,98,115,116,117],
      [21,22,23,24,56,57,58,59,92,93,94],
      [17,18,19,20,49,50,51,52,53,54,55,85,86,87,88,89,90,91,111,112,113,114],
      [13,14,15,16,42,43,44,45,46,47,48,78,79,80,81,82,83,84,107,108,109,110],
      [9,10,11,12,35,36,37,38,39,40,41,71,72,73,74,75,76,77,103,104,105,106],
      [5,6,7,8,25,26,27,28,29,30,31,32,33,34,60,61,62,63,64,65,66,67,68,69,70,95,96,97,98,99,100,101,102,115,116,117]];

obj0.userData.polytoperoot = [[0.652954723657609,-0.730025574164002,-0.201774106167599],
      [1.61803398874989,-1,3.01282016719861e-15],
      [0.124703255661205,0.201774106167599,0.730025574164001]];

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
    geometry.setAttribute('position',bufattr);
    if (Array.isArray(materials)) {
        var tricount = 0;
        var facet;
        for (var i=0; i<facets.length; i++) {
            facet = facets[i];
            geometry.addGroup(tricount,(facet.length-2)*3,i);
            tricount += (facet.length-2)*3;
        }
    }
    var mesh = new THREE.Mesh(geometry, materials);
    mesh.name = "faces";
    obj.add(mesh); 
    updateFacesPosition(obj);
}
// //INITIALIZING


function updateFacesPosition(obj) {
    var points = obj.userData.points;
    var indices = obj.userData.triangleindices;
    var faces = obj.getObjectByName("faces");
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
