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
obj0.userData.points.push(new PMPoint(0.447838, 0, 0));
obj0.userData.points.push(new PMPoint(0.447838, 0.447838, 0));
obj0.userData.points.push(new PMPoint(0, 0.447838, 0));
obj0.userData.points.push(new PMPoint(0.223919, -0.387839, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.13699, 0.223919, 0));
obj0.userData.points.push(new PMPoint(0.873757, 0.586227, 0));
obj0.userData.points.push(new PMPoint(0.223919, 0.835677, 0));
obj0.userData.points.push(new PMPoint(-0.425919, 0.586227, 0));
obj0.userData.points.push(new PMPoint(-0.689152, 0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.425919, -0.13839, 0));
obj0.userData.points.push(new PMPoint(0.611758, -0.611758, 0));
obj0.userData.points.push(new PMPoint(0.835677, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.387839, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.16392, -0.611758, 0));
obj0.userData.points.push(new PMPoint(1.4993, 0.487152, 0));
obj0.userData.points.push(new PMPoint(1.23607, 0.84946, 0));
obj0.userData.points.push(new PMPoint(1.23607, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.0393136, 0));
obj0.userData.points.push(new PMPoint(0.735368, 1.01215, 0));
obj0.userData.points.push(new PMPoint(0.309448, 0.873757, 0));
obj0.userData.points.push(new PMPoint(-0.16392, 1.0596, 0));
obj0.userData.points.push(new PMPoint(-0.387839, 0.671757, 0));
obj0.userData.points.push(new PMPoint(-0.788228, 0.84946, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 0.487152, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -0.0393136, 0));
obj0.userData.points.push(new PMPoint(-0.788228, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.0596, -0.611758, 0));
obj0.userData.points.push(new PMPoint(-0.108889, -0.687501, 0));
obj0.userData.points.push(new PMPoint(0.0732626, -1.09662, 0));
obj0.userData.points.push(new PMPoint(0.518647, -1.04981, 0));
obj0.userData.points.push(new PMPoint(-0.611758, -0.611758, 0));
obj0.userData.points.push(new PMPoint(0.826945, 1.03161, 0));
obj0.userData.points.push(new PMPoint(1.54611, 0.0417669, 0));
obj0.userData.points.push(new PMPoint(1.92522, 0.625541, 0));
obj0.userData.points.push(new PMPoint(1.92522, 1.07338, 0));
obj0.userData.points.push(new PMPoint(1.4993, 1.21177, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.763931, 0));
obj0.userData.points.push(new PMPoint(1.92522, -0.625541, 0));
obj0.userData.points.push(new PMPoint(1.92522, -0.177703, 0));
obj0.userData.points.push(new PMPoint(0.735368, 1.45998, 0));
obj0.userData.points.push(new PMPoint(0.309448, 1.59837, 0));
obj0.userData.points.push(new PMPoint(0.0462159, 1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.611758, 1.0596, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 1.21177, 0));
obj0.userData.points.push(new PMPoint(-1.47738, 1.07338, 0));
obj0.userData.points.push(new PMPoint(-1.47738, 0.625541, 0));
obj0.userData.points.push(new PMPoint(-1.09827, 0.0417669, 0));
obj0.userData.points.push(new PMPoint(-1.47738, -0.177703, 0));
obj0.userData.points.push(new PMPoint(-1.47738, -0.625541, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -0.763931, 0));
obj0.userData.points.push(new PMPoint(0.611758, -1.0596, 0));
obj0.userData.points.push(new PMPoint(1.0596, -1.0596, 0));
obj0.userData.points.push(new PMPoint(0.120074, -1.54201, 0));
obj0.userData.points.push(new PMPoint(0.565459, -1.49519, 0));
obj0.userData.points.push(new PMPoint(-0.51801, -0.869653, 0));
obj0.userData.points.push(new PMPoint(-0.335858, -1.27877, 0));
obj0.userData.points.push(new PMPoint(1.41822, 1.25858, 0));
obj0.userData.points.push(new PMPoint(1.0091, 1.44073, 0));
obj0.userData.points.push(new PMPoint(1.99149, 0.0885787, 0));
obj0.userData.points.push(new PMPoint(1.94468, 0.533963, 0));
obj0.userData.points.push(new PMPoint(2.37306, 0.625541, 0));
obj0.userData.points.push(new PMPoint(2.37306, 1.07338, 0));
obj0.userData.points.push(new PMPoint(2.06361, 1.4993, 0));
obj0.userData.points.push(new PMPoint(1.63769, 1.63769, 0));
obj0.userData.points.push(new PMPoint(2.37306, -0.625541, 0));
obj0.userData.points.push(new PMPoint(2.37306, -0.177703, 0));
obj0.userData.points.push(new PMPoint(1.63769, -1.18985, 0));
obj0.userData.points.push(new PMPoint(2.06361, -1.05146, 0));
obj0.userData.points.push(new PMPoint(0.873757, 1.8859, 0));
obj0.userData.points.push(new PMPoint(0.447838, 2.02429, 0));
obj0.userData.points.push(new PMPoint(-0.0528601, 1.86161, 0));
obj0.userData.points.push(new PMPoint(-0.316093, 1.4993, 0));
obj0.userData.points.push(new PMPoint(-1.61577, 0.199622, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 0.0612323, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.61577, 1.4993, 0));
obj0.userData.points.push(new PMPoint(-1.92522, 1.07338, 0));
obj0.userData.points.push(new PMPoint(-1.92522, 0.625541, 0));
obj0.userData.points.push(new PMPoint(-1.61577, -1.05146, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.18985, 0));
obj0.userData.points.push(new PMPoint(-1.92522, -0.177703, 0));
obj0.userData.points.push(new PMPoint(-1.92522, -0.625541, 0));
obj0.userData.points.push(new PMPoint(0.835677, -1.44744, 0));
obj0.userData.points.push(new PMPoint(0.0269637, -1.98006, 0));
obj0.userData.points.push(new PMPoint(0.414803, -2.20398, 0));
obj0.userData.points.push(new PMPoint(0.747611, -1.90431, 0));
obj0.userData.points.push(new PMPoint(-0.289046, -1.35985, 0));
obj0.userData.points.push(new PMPoint(1.37141, 1.70397, 0));
obj0.userData.points.push(new PMPoint(2.3538, 0.351811, 0));
obj0.userData.points.push(new PMPoint(2.79897, 0.487152, 0));
obj0.userData.points.push(new PMPoint(3.06221, 0.84946, 0));
obj0.userData.points.push(new PMPoint(2.79897, 1.21177, 0));
obj0.userData.points.push(new PMPoint(2.14914, 1.46122, 0));
obj0.userData.points.push(new PMPoint(2.32684, 1.86161, 0));
obj0.userData.points.push(new PMPoint(2.06361, 2.22392, 0));
obj0.userData.points.push(new PMPoint(1.63769, 2.08553, 0));
obj0.userData.points.push(new PMPoint(2.14914, -1.01338, 0));
obj0.userData.points.push(new PMPoint(0.00978633, 1.93118, 0));
obj0.userData.points.push(new PMPoint(-1.91543, 0.53243, 0));
obj0.userData.points.push(new PMPoint(-1.91543, 1.16649, 0));
obj0.userData.points.push(new PMPoint(-2.35114, 1.21177, 0));
obj0.userData.points.push(new PMPoint(-2.61437, 0.84946, 0));
obj0.userData.points.push(new PMPoint(-2.35114, 0.487152, 0));
obj0.userData.points.push(new PMPoint(-1.91543, -0.718652, 0));
obj0.userData.points.push(new PMPoint(0.714465, -2.53679, 0));
obj0.userData.points.push(new PMPoint(1.04727, -2.23712, 0));
obj0.userData.points.push(new PMPoint(-0.196955, -2.3679, 0));
obj0.userData.points.push(new PMPoint(0.190884, -2.59182, 0));
obj0.userData.points.push(new PMPoint(3.42452, 1.11269, 0));
obj0.userData.points.push(new PMPoint(3.16128, 1.475, 0));
obj0.userData.points.push(new PMPoint(2.66059, 1.63769, 0));
obj0.userData.points.push(new PMPoint(2.23467, 1.4993, 0));
obj0.userData.points.push(new PMPoint(2.68915, 2.12484, 0));
obj0.userData.points.push(new PMPoint(2.42592, 2.48715, 0));
obj0.userData.points.push(new PMPoint(0.276413, -2.6299, 0));
obj0.userData.points.push(new PMPoint(2.75216, 1.65715, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 4, 1, 5, 5, 6, 2, 7, 6, 7, 2, 8, 3, 8, 3, 9, 9, 10, 0, 11, 10, 11, 4, 12, 1, 13, 12, 13, 0, 14, 4, 15, 14, 15, 6, 16, 7, 17, 16, 17, 5, 18, 6, 19, 18, 19, 7, 20, 2, 21, 20, 21, 8, 22, 3, 23, 22, 23, 9, 24, 10, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 28, 4, 29, 29, 30, 12, 31, 30, 31, 14, 32, 15, 32, 7, 33, 17, 33, 6, 34, 16, 34, 16, 35, 35, 36, 17, 37, 36, 37, 18, 38, 38, 39, 19, 40, 39, 40, 20, 41, 41, 42, 21, 43, 42, 43, 22, 44, 23, 44, 24, 45, 45, 46, 25, 47, 46, 47, 10, 48, 25, 48, 26, 49, 49, 50, 27, 51, 50, 51, 12, 52, 28, 53, 52, 53, 30, 54, 31, 55, 54, 55, 29, 56, 30, 57, 56, 57, 17, 58, 33, 59, 58, 59, 34, 60, 16, 61, 60, 61, 35, 62, 36, 63, 62, 63, 36, 64, 37, 65, 64, 65, 39, 66, 40, 67, 66, 67, 38, 68, 39, 69, 68, 69, 41, 70, 42, 71, 70, 71, 42, 72, 43, 73, 72, 73, 47, 74, 25, 75, 74, 75, 45, 76, 46, 77, 76, 77, 46, 78, 47, 79, 78, 79, 50, 80, 51, 81, 80, 81, 49, 82, 50, 83, 82, 83, 52, 84, 53, 84, 54, 85, 85, 86, 55, 87, 86, 87, 30, 88, 54, 88, 58, 89, 59, 89, 60, 90, 61, 90, 62, 91, 91, 92, 63, 93, 92, 93, 36, 94, 63, 94, 64, 95, 95, 96, 65, 97, 96, 97, 39, 98, 66, 98, 42, 99, 71, 99, 47, 100, 74, 100, 46, 101, 77, 101, 78, 102, 102, 103, 79, 104, 103, 104, 50, 105, 80, 105, 86, 106, 87, 107, 106, 107, 85, 108, 86, 109, 108, 109, 92, 110, 93, 111, 110, 111, 93, 112, 63, 113, 112, 113, 95, 114, 96, 115, 114, 115, 86, 116, 106, 116, 93, 117, 111, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [4, 1, 0], [13, 1, 4, 12], [2, 1, 5, 6, 7], [3, 8, 22, 23], [3, 2, 8], [12, 52, 53, 28], [13, 12, 28], [25, 47, 74, 75], [51, 50, 80, 81], [52, 84, 53], [21, 20, 41, 42, 43], [19, 18, 38, 39, 40], [7, 6, 16, 17], [7, 17, 33], [6, 34, 16], [17, 58, 59, 33], [34, 60, 61, 16], [42, 41, 70, 71], [17, 16, 35, 36, 37], [40, 39, 66, 67], [58, 89, 59], [60, 90, 61], [96, 95, 114, 115], [93, 92, 110, 111], [62, 91, 92, 93, 63], [63, 93, 112, 113], [36, 63, 94], [93, 111, 117], [36, 35, 62, 63], [37, 36, 64, 65], [65, 64, 95, 96, 97], [86, 116, 106], [46, 77, 101], [39, 98, 66], [87, 86, 106, 107], [79, 78, 102, 103, 104], [42, 71, 99], [46, 45, 76, 77], [86, 85, 108, 109], [47, 46, 78, 79], [39, 38, 68, 69], [50, 105, 80], [47, 100, 74], [50, 49, 82, 83], [43, 42, 72, 73], [55, 54, 85, 86, 87], [25, 24, 45, 46, 47], [6, 5, 18, 19], [2, 7, 20, 21], [23, 22, 44], [30, 88, 54], [31, 30, 54, 55], [10, 25, 48], [10, 9, 24, 25], [27, 26, 49, 50, 51], [30, 29, 56, 57], [12, 4, 29, 30, 31], [14, 32, 15], [11, 10, 26, 27], [0, 14, 15, 4], [0, 3, 9, 10, 11]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[93,111],
      [106,86],
      [96,95],
      [63,93],
      [93,92],
      [86,85],
      [87,86],
      [80,50],
      [79,78],
      [46,77],
      [74,47],
      [42,71],
      [66,39],
      [65,64],
      [36,63],
      [63,62],
      [61,60],
      [59,58],
      [54,30],
      [55,54],
      [53,52],
      [50,49],
      [51,50],
      [47,46],
      [46,45],
      [25,47],
      [43,42],
      [42,41],
      [39,38],
      [40,39],
      [37,36],
      [36,35],
      [16,34],
      [33,17],
      [30,29],
      [31,30],
      [28,12],
      [27,26],
      [10,25],
      [25,24],
      [23,22],
      [21,20],
      [19,18],
      [17,16],
      [16,6],
      [7,17],
      [15,14],
      [12,4],
      [13,12],
      [11,10],
      [10,9],
      [3,8],
      [2,7],
      [6,5],
      [7,6],
      [4,0],
      [1,4],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469274,
      2.77672882547631,
      2.77672882547632,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

obj0.userData.subtrees = [[117],
      [116],
      [114,115],
      [112,113],
      [110,111,117],
      [108,109],
      [106,107,116],
      [105],
      [102,103,104],
      [101],
      [100],
      [99],
      [98],
      [95,96,97,114,115],
      [94],
      [91,92,93,110,111,112,113,117],
      [90],
      [89],
      [88],
      [85,86,87,106,107,108,109,116],
      [84],
      [82,83],
      [80,81,105],
      [78,79,102,103,104],
      [76,77,101],
      [74,75,100],
      [72,73],
      [70,71,99],
      [68,69],
      [66,67,98],
      [64,65,95,96,97,114,115],
      [62,63,91,92,93,94,110,111,112,113,117],
      [60,61,90],
      [58,59,89],
      [56,57],
      [54,55,85,86,87,88,106,107,108,109,116],
      [52,53,84],
      [49,50,51,80,81,82,83,105],
      [48],
      [45,46,47,74,75,76,77,78,79,100,101,102,103,104],
      [44],
      [41,42,43,70,71,72,73,99],
      [38,39,40,66,67,68,69,98],
      [35,36,37,62,63,64,65,91,92,93,94,95,96,97,110,111,112,113,114,115,117],
      [34,60,61,90],
      [33,58,59,89],
      [32],
      [29,30,31,54,55,56,57,85,86,87,88,106,107,108,109,116],
      [28,52,53,84],
      [26,27,49,50,51,80,81,82,83,105],
      [24,25,45,46,47,48,74,75,76,77,78,79,100,101,102,103,104],
      [22,23,44],
      [20,21,41,42,43,70,71,72,73,99],
      [18,19,38,39,40,66,67,68,69,98],
      [16,17,33,34,35,36,37,58,59,60,61,62,63,64,65,89,90,91,92,93,94,95,96,97,110,111,112,113,114,115,117],
      [14,15,32],
      [12,13,28,29,30,31,52,53,54,55,56,57,84,85,86,87,88,106,107,108,109,116],
      [9,10,11,24,25,26,27,45,46,47,48,49,50,51,74,75,76,77,78,79,80,81,82,83,100,101,102,103,104,105],
      [8,22,23,44],
      [5,6,7,16,17,18,19,20,21,33,34,35,36,37,38,39,40,41,42,43,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,89,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115,117],
      [4,12,13,14,15,28,29,30,31,32,52,53,54,55,56,57,84,85,86,87,88,106,107,108,109,116]];

obj0.userData.polytoperoot = [[0.948536019861961,0.223918979794513,-0.223918979794513],
      [2.61803398874989,1,-1.61803398874989],
      [-0.724617040067447,1.17245499965647,-0.447837959589026]];

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
