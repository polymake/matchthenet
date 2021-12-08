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
obj0.userData.points.push(new PMPoint(0.566606, 0, 0));
obj0.userData.points.push(new PMPoint(0.56208, 0.348372, 0));
obj0.userData.points.push(new PMPoint(0.56208, -0.348372, 0));
obj0.userData.points.push(new PMPoint(0.520678, 1.03398, 0));
obj0.userData.points.push(new PMPoint(1.09208, 0.0294698, 0));
obj0.userData.points.push(new PMPoint(0.873274, 0.515241, 0));
obj0.userData.points.push(new PMPoint(0.520678, -1.03398, 0));
obj0.userData.points.push(new PMPoint(0.873274, -0.515241, 0));
obj0.userData.points.push(new PMPoint(1.09208, -0.0294698, 0));
obj0.userData.points.push(new PMPoint(-0.0480866, 0.654, 0));
obj0.userData.points.push(new PMPoint(0.855291, 0.545132, 0));
obj0.userData.points.push(new PMPoint(1.48434, 0.409486, 0));
obj0.userData.points.push(new PMPoint(1.20781, 0.652961, 0));
obj0.userData.points.push(new PMPoint(-0.0480866, -0.654, 0));
obj0.userData.points.push(new PMPoint(0.855291, -0.545132, 0));
obj0.userData.points.push(new PMPoint(1.20781, -0.652961, 0));
obj0.userData.points.push(new PMPoint(1.48434, -0.409486, 0));
obj0.userData.points.push(new PMPoint(-0.631979, 0.918139, 0));
obj0.userData.points.push(new PMPoint(-0.619251, 0.944641, 0));
obj0.userData.points.push(new PMPoint(1.15293, 0.750778, 0));
obj0.userData.points.push(new PMPoint(1.91112, 0.888804, 0));
obj0.userData.points.push(new PMPoint(1.58066, -0.214586, 0));
obj0.userData.points.push(new PMPoint(1.7306, 0.128028, 0));
obj0.userData.points.push(new PMPoint(-0.631979, -0.918139, 0));
obj0.userData.points.push(new PMPoint(-0.619251, -0.944641, 0));
obj0.userData.points.push(new PMPoint(1.15293, -0.750778, 0));
obj0.userData.points.push(new PMPoint(1.91112, -0.888804, 0));
obj0.userData.points.push(new PMPoint(-0.589996, 0.281597, 0));
obj0.userData.points.push(new PMPoint(-0.0997173, 1.32386, 0));
obj0.userData.points.push(new PMPoint(1.74611, 1.19621, 0));
obj0.userData.points.push(new PMPoint(1.76276, 0.159795, 0));
obj0.userData.points.push(new PMPoint(2.16769, -0.473984, 0));
obj0.userData.points.push(new PMPoint(-0.589996, -0.281597, 0));
obj0.userData.points.push(new PMPoint(-0.0997173, -1.32386, 0));
obj0.userData.points.push(new PMPoint(1.74611, -1.19621, 0));
obj0.userData.points.push(new PMPoint(-1.12687, -0.0629465, 0));
obj0.userData.points.push(new PMPoint(-0.154481, 2.00645, 0));
obj0.userData.points.push(new PMPoint(-0.186703, 2.00309, 0));
obj0.userData.points.push(new PMPoint(1.05683, 1.46847, 0));
obj0.userData.points.push(new PMPoint(2.32699, -0.325087, 0));
obj0.userData.points.push(new PMPoint(-0.154481, -2.00645, 0));
obj0.userData.points.push(new PMPoint(-0.186703, -2.00309, 0));
obj0.userData.points.push(new PMPoint(1.05683, -1.46847, 0));
obj0.userData.points.push(new PMPoint(-1.16886, 0.573596, 0));
obj0.userData.points.push(new PMPoint(0.474516, 1.72254, 0));
obj0.userData.points.push(new PMPoint(-0.721964, 1.57722, 0));
obj0.userData.points.push(new PMPoint(0.962328, 2.15207, 0));
obj0.userData.points.push(new PMPoint(2.47534, 0.403922, 0));
obj0.userData.points.push(new PMPoint(0.474516, -1.72254, 0));
obj0.userData.points.push(new PMPoint(-0.721964, -1.57722, 0));
obj0.userData.points.push(new PMPoint(0.962328, -2.15207, 0));
obj0.userData.points.push(new PMPoint(-1.74597, 0.880732, 0));
obj0.userData.points.push(new PMPoint(-1.75885, 0.855193, 0));
obj0.userData.points.push(new PMPoint(-1.34079, 1.79421, 0));
obj0.userData.points.push(new PMPoint(-1.33018, 1.82236, 0));
obj0.userData.points.push(new PMPoint(1.61744, 1.92676, 0));
obj0.userData.points.push(new PMPoint(2.54216, 0.771892, 0));
obj0.userData.points.push(new PMPoint(2.75377, 0.154231, 0));
obj0.userData.points.push(new PMPoint(-1.34079, -1.79421, 0));
obj0.userData.points.push(new PMPoint(-1.33018, -1.82236, 0));
obj0.userData.points.push(new PMPoint(1.61744, -1.92676, 0));
obj0.userData.points.push(new PMPoint(-0.827062, 2.2515, 0));
obj0.userData.points.push(new PMPoint(1.96342, 1.80008, 0));
obj0.userData.points.push(new PMPoint(1.54068, 2.2803, 0));
obj0.userData.points.push(new PMPoint(2.77992, 0.186901, 0));
obj0.userData.points.push(new PMPoint(3.07389, 0.647189, 0));
obj0.userData.points.push(new PMPoint(3.0303, -0.089244, 0));
obj0.userData.points.push(new PMPoint(-0.827062, -2.2515, 0));
obj0.userData.points.push(new PMPoint(1.54068, -2.2803, 0));
obj0.userData.points.push(new PMPoint(-0.550292, 2.47079, 0));
obj0.userData.points.push(new PMPoint(-1.15748, 2.362, 0));
obj0.userData.points.push(new PMPoint(2.10997, 2.3262, 0));
obj0.userData.points.push(new PMPoint(1.57868, 2.28645, 0));
obj0.userData.points.push(new PMPoint(3.10518, 0.0138203, 0));
obj0.userData.points.push(new PMPoint(3.39889, 0.225031, 0));
obj0.userData.points.push(new PMPoint(-0.550292, -2.47079, 0));
obj0.userData.points.push(new PMPoint(-1.15748, -2.362, 0));
obj0.userData.points.push(new PMPoint(-0.909149, 2.86458, 0));
obj0.userData.points.push(new PMPoint(-1.14496, 2.39407, 0));
obj0.userData.points.push(new PMPoint(3.66317, 0.459217, 0));
obj0.userData.points.push(new PMPoint(3.57837, 0.797139, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 6, 5, 6, 0, 7, 3, 7, 3, 8, 1, 9, 8, 9, 0, 10, 4, 10, 2, 11, 4, 11, 5, 12, 6, 13, 12, 13, 0, 14, 7, 14, 3, 15, 7, 15, 8, 16, 9, 17, 16, 17, 0, 18, 10, 18, 4, 19, 10, 19, 4, 20, 11, 20, 12, 21, 13, 21, 5, 22, 12, 23, 22, 23, 0, 24, 14, 24, 7, 25, 14, 25, 7, 26, 15, 26, 16, 27, 17, 27, 0, 28, 18, 28, 4, 29, 19, 29, 4, 30, 20, 30, 12, 31, 21, 31, 22, 32, 23, 32, 0, 33, 24, 33, 7, 34, 25, 34, 7, 35, 26, 35, 18, 36, 28, 36, 4, 37, 29, 37, 19, 38, 29, 38, 4, 39, 30, 39, 21, 40, 31, 40, 7, 41, 34, 41, 25, 42, 34, 42, 7, 43, 35, 43, 18, 44, 36, 44, 4, 45, 37, 45, 19, 46, 38, 46, 30, 47, 39, 47, 21, 48, 40, 48, 7, 49, 41, 49, 25, 50, 42, 50, 35, 51, 43, 51, 18, 52, 44, 52, 36, 53, 44, 53, 19, 54, 46, 54, 38, 55, 46, 55, 30, 56, 47, 56, 21, 57, 48, 57, 40, 58, 48, 58, 25, 59, 50, 59, 42, 60, 50, 60, 35, 61, 51, 61, 38, 62, 55, 62, 30, 63, 56, 63, 47, 64, 56, 64, 48, 65, 57, 66, 65, 66, 40, 67, 58, 67, 42, 68, 60, 68, 51, 69, 61, 69, 38, 70, 62, 70, 55, 71, 62, 71, 63, 72, 56, 73, 72, 73, 65, 74, 66, 75, 74, 75, 42, 76, 68, 76, 60, 77, 68, 77, 70, 78, 62, 79, 78, 79, 75, 80, 66, 81, 80, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [0, 2, 4], [0, 4, 10], [3, 0, 7], [2, 11, 4], [7, 0, 14], [11, 20, 4], [0, 10, 18], [15, 3, 7], [0, 18, 28], [15, 7, 26], [14, 0, 24], [13, 12, 21], [10, 4, 19], [0, 33, 24], [12, 31, 21], [19, 4, 29], [17, 16, 27], [20, 30, 4], [7, 14, 25], [23, 22, 32], [4, 30, 39], [7, 25, 34], [29, 4, 37], [26, 7, 35], [28, 18, 36], [4, 45, 37], [35, 7, 43], [36, 18, 44], [7, 34, 41], [19, 29, 38], [31, 40, 21], [49, 7, 41], [19, 38, 46], [21, 40, 48], [44, 18, 52], [34, 25, 42], [39, 30, 47], [19, 46, 54], [42, 25, 50], [47, 30, 56], [36, 44, 53], [21, 48, 57], [35, 43, 51], [25, 59, 50], [30, 63, 56], [35, 51, 61], [48, 40, 58], [46, 38, 55], [58, 40, 67], [55, 38, 62], [47, 56, 64], [50, 60, 42], [38, 70, 62], [42, 60, 68], [61, 51, 69], [76, 42, 68], [55, 62, 71], [60, 77, 68], [2, 1, 5, 6], [6, 5, 12, 13], [12, 5, 22, 23], [9, 8, 16, 17], [9, 1, 3, 8], [48, 65, 66, 57], [65, 74, 75, 66], [66, 75, 80, 81], [70, 78, 79, 62], [63, 72, 73, 56]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[66,75],
      [62,70],
      [68,60],
      [42,68],
      [66,65],
      [56,63],
      [55,62],
      [62,38],
      [61,51],
      [42,60],
      [58,40],
      [57,48],
      [47,56],
      [56,30],
      [55,38],
      [35,51],
      [42,50],
      [50,25],
      [48,40],
      [21,48],
      [47,30],
      [46,38],
      [19,46],
      [36,44],
      [44,18],
      [35,43],
      [42,25],
      [7,41],
      [21,40],
      [39,30],
      [19,38],
      [37,4],
      [36,18],
      [35,7],
      [34,25],
      [7,34],
      [21,31],
      [4,30],
      [19,29],
      [29,4],
      [28,18],
      [26,7],
      [7,25],
      [24,0],
      [23,22],
      [21,12],
      [4,20],
      [19,4],
      [0,18],
      [17,16],
      [15,7],
      [7,14],
      [14,0],
      [12,5],
      [13,12],
      [4,11],
      [10,4],
      [0,10],
      [9,8],
      [3,7],
      [7,0],
      [6,5],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.81155791102099,
      2.80989797248191,
      2.80658930677266,
      2.80513845532099,
      2.80572252282887,
      2.80283273385548,
      2.80658930677266,
      2.80513845532099,
      2.79080697432692,
      2.81238049006229,
      2.78178757347871,
      2.79833874699333,
      2.79080697432692,
      2.78695010465272,
      2.81238049006229,
      2.79080697432692,
      2.81633962903857,
      2.81957293944472,
      2.77726246654796,
      2.77726246654796,
      2.79080697432692,
      2.81633962903857,
      2.81957293944472,
      2.82608537044345,
      2.82608537044345,
      2.79220976930169,
      2.81633962903857,
      2.80513845532099,
      2.77544578012184,
      2.79220976930169,
      2.81633962903857,
      2.80513845532099,
      2.827106343065,
      2.79080697432692,
      2.81504792694992,
      2.81238049006229,
      2.77726246654796,
      2.79080697432692,
      2.81504792694992,
      2.81238049006229,
      2.82608537044345,
      2.79080697432692,
      2.81633962903857,
      2.82328947883089,
      2.79833874699333,
      2.78178757347871,
      2.79080697432692,
      2.81633962903857,
      2.82328947883089,
      2.80283273385548,
      2.79670544643057,
      2.81633962903857,
      2.81873110569582,
      2.80572252282887,
      2.80283273385548,
      2.79670544643057,
      2.81633962903857,
      2.81873110569582,
      2.81155791102099,
      2.805138455321,
      2.81238049006229,
      2.81155791102099,
      2.805138455321,
      2.81238049006229,
      2.81064027780127,
      2.80658930677266,
      2.81064027780127,
      2.80658930677266,
      2.80420724493163];

obj0.userData.subtrees = [[80,81],
      [78,79],
      [77],
      [76],
      [74,75,80,81],
      [72,73],
      [71],
      [70,78,79],
      [69],
      [68,76,77],
      [67],
      [65,66,74,75,80,81],
      [64],
      [63,72,73],
      [62,70,71,78,79],
      [61,69],
      [60,68,76,77],
      [59],
      [58,67],
      [57,65,66,74,75,80,81],
      [56,63,64,72,73],
      [55,62,70,71,78,79],
      [54],
      [53],
      [52],
      [51,61,69],
      [50,59,60,68,76,77],
      [49],
      [48,57,58,65,66,67,74,75,80,81],
      [47,56,63,64,72,73],
      [46,54,55,62,70,71,78,79],
      [45],
      [44,52,53],
      [43,51,61,69],
      [42,50,59,60,68,76,77],
      [41,49],
      [40,48,57,58,65,66,67,74,75,80,81],
      [39,47,56,63,64,72,73],
      [38,46,54,55,62,70,71,78,79],
      [37,45],
      [36,44,52,53],
      [35,43,51,61,69],
      [34,41,42,49,50,59,60,68,76,77],
      [33],
      [32],
      [31,40,48,57,58,65,66,67,74,75,80,81],
      [30,39,47,56,63,64,72,73],
      [29,37,38,45,46,54,55,62,70,71,78,79],
      [28,36,44,52,53],
      [27],
      [26,35,43,51,61,69],
      [25,34,41,42,49,50,59,60,68,76,77],
      [24,33],
      [22,23,32],
      [21,31,40,48,57,58,65,66,67,74,75,80,81],
      [20,30,39,47,56,63,64,72,73],
      [19,29,37,38,45,46,54,55,62,70,71,78,79],
      [18,28,36,44,52,53],
      [16,17,27],
      [15,26,35,43,51,61,69],
      [14,24,25,33,34,41,42,49,50,59,60,68,76,77],
      [12,13,21,22,23,31,32,40,48,57,58,65,66,67,74,75,80,81],
      [11,20,30,39,47,56,63,64,72,73],
      [10,18,19,28,29,36,37,38,44,45,46,52,53,54,55,62,70,71,78,79],
      [8,9,16,17,27],
      [7,14,15,24,25,26,33,34,35,41,42,43,49,50,51,59,60,61,68,69,76,77],
      [5,6,12,13,21,22,23,31,32,40,48,57,58,65,66,67,74,75,80,81],
      [4,10,11,18,19,20,28,29,30,36,37,38,39,44,45,46,47,52,53,54,55,56,62,63,64,70,71,72,73,78,79],
      [3,7,8,9,14,15,16,17,24,25,26,27,33,34,35,41,42,43,49,50,51,59,60,61,68,69,76,77]];

obj0.userData.polytoperoot = [[0,-0.914055828296715,-0.564917569502306],
      [-0.178352654009402,-1.04409462252229,-0.0807891760747517],
      [-0.593358834445571,0.100754547817277,0.00779611036045558]];

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
