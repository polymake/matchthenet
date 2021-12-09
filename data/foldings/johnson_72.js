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
obj0.userData.points.push(new PMPoint(0.586227, 0.425919, 0));
obj0.userData.points.push(new PMPoint(0.223919, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-0.13839, 0.425919, 0));
obj0.userData.points.push(new PMPoint(0, -0.447838, 0));
obj0.userData.points.push(new PMPoint(0.447838, -0.447838, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.01215, 0.28753, 0));
obj0.userData.points.push(new PMPoint(0.84946, 0.788228, 0));
obj0.userData.points.push(new PMPoint(0.487152, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 0.788228, 0));
obj0.userData.points.push(new PMPoint(-0.438052, 0.0931107, 0));
obj0.userData.points.push(new PMPoint(-0.13839, -0.873757, 0));
obj0.userData.points.push(new PMPoint(0.223919, -1.13699, 0));
obj0.userData.points.push(new PMPoint(0.586227, -0.873757, 0));
obj0.userData.points.push(new PMPoint(0.835677, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.447838, 0, 0));
obj0.userData.points.push(new PMPoint(-0.447838, -0.447838, 0));
obj0.userData.points.push(new PMPoint(0.919036, 0.725581, 0));
obj0.userData.points.push(new PMPoint(1.23607, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.59837, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.45998, 0.28753, 0));
obj0.userData.points.push(new PMPoint(1.21177, 1.05146, 0));
obj0.userData.points.push(new PMPoint(1.07338, 1.47738, 0));
obj0.userData.points.push(new PMPoint(0.625541, 1.47738, 0));
obj0.userData.points.push(new PMPoint(0.0417669, 1.09827, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 0.524995, 0));
obj0.userData.points.push(new PMPoint(-0.500698, 0.162687, 0));
obj0.userData.points.push(new PMPoint(-0.438052, -0.540949, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -1.4993, 0));
obj0.userData.points.push(new PMPoint(1.01215, -0.735368, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.309448, 0));
obj0.userData.points.push(new PMPoint(0.487152, -1.4993, 0));
obj0.userData.points.push(new PMPoint(0.84946, -1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.873757, 0.13839, 0));
obj0.userData.points.push(new PMPoint(-1.13699, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.873757, -0.586227, 0));
obj0.userData.points.push(new PMPoint(1.4502, 0.38064, 0));
obj0.userData.points.push(new PMPoint(1.35709, 0.818692, 0));
obj0.userData.points.push(new PMPoint(2.02429, 0, 0));
obj0.userData.points.push(new PMPoint(1.8859, 0.425919, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.763931, 0));
obj0.userData.points.push(new PMPoint(1.86161, -0.500698, 0));
obj0.userData.points.push(new PMPoint(1.07338, 1.92522, 0));
obj0.userData.points.push(new PMPoint(0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(1.4993, 1.61577, 0));
obj0.userData.points.push(new PMPoint(0.199622, 1.61577, 0));
obj0.userData.points.push(new PMPoint(0.0612323, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.810742, 0.606076, 0));
obj0.userData.points.push(new PMPoint(-0.77086, -0.840611, 0));
obj0.userData.points.push(new PMPoint(-0.471198, -1.17342, 0));
obj0.userData.points.push(new PMPoint(0.406071, -1.54611, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -1.92522, 0));
obj0.userData.points.push(new PMPoint(0.919036, -1.17342, 0));
obj0.userData.points.push(new PMPoint(0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.07338, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.21177, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-1.4993, -0.487152, 0));
obj0.userData.points.push(new PMPoint(-1.23607, -0.84946, 0));
obj0.userData.points.push(new PMPoint(-1.23607, 0.401622, 0));
obj0.userData.points.push(new PMPoint(-1.4993, 0.0393136, 0));
obj0.userData.points.push(new PMPoint(1.78301, 0.680303, 0));
obj0.userData.points.push(new PMPoint(2.47213, 0, 0));
obj0.userData.points.push(new PMPoint(2.61052, 0.425919, 0));
obj0.userData.points.push(new PMPoint(2.24821, 0.689152, 0));
obj0.userData.points.push(new PMPoint(1.93118, -0.438052, 0));
obj0.userData.points.push(new PMPoint(0.237702, 1.7013, 0));
obj0.userData.points.push(new PMPoint(1.21177, 2.35114, 0));
obj0.userData.points.push(new PMPoint(0.84946, 2.61437, 0));
obj0.userData.points.push(new PMPoint(0.487152, 2.35114, 0));
obj0.userData.points.push(new PMPoint(1.46122, 1.7013, 0));
obj0.userData.points.push(new PMPoint(-1.01338, 1.7013, 0));
obj0.userData.points.push(new PMPoint(-1.41377, 1.879, 0));
obj0.userData.points.push(new PMPoint(-1.77608, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.90925, -1.26653, 0));
obj0.userData.points.push(new PMPoint(-0.0861254, -1.94468, 0));
obj0.userData.points.push(new PMPoint(0.359259, -1.99149, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -2.06361, 0));
obj0.userData.points.push(new PMPoint(0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.07338, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.4993, -2.06361, 0));
obj0.userData.points.push(new PMPoint(1.63769, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.54611, -0.0417669, 0));
obj0.userData.points.push(new PMPoint(2.89805, -0.13839, 0));
obj0.userData.points.push(new PMPoint(3.03644, 0.28753, 0));
obj0.userData.points.push(new PMPoint(2.87375, 0.788228, 0));
obj0.userData.points.push(new PMPoint(2.51144, 1.05146, 0));
obj0.userData.points.push(new PMPoint(0.586227, 2.97668, 0));
obj0.userData.points.push(new PMPoint(0.223919, 2.71345, 0));
obj0.userData.points.push(new PMPoint(1.475, 2.71345, 0));
obj0.userData.points.push(new PMPoint(1.11269, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-1.677, 2.24131, 0));
obj0.userData.points.push(new PMPoint(-2.03931, 1.97808, 0));
obj0.userData.points.push(new PMPoint(0.0960267, -2.3538, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -3.06221, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-1.01338, -2.14914, 0));
obj0.userData.points.push(new PMPoint(1.46122, -2.14914, 0));
obj0.userData.points.push(new PMPoint(2.94333, 0.725581, 0));
obj0.userData.points.push(new PMPoint(1.03161, 3.02349, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 10, 9, 10, 3, 11, 4, 12, 11, 12, 0, 13, 4, 13, 5, 14, 14, 15, 6, 16, 15, 16, 1, 17, 6, 17, 0, 18, 5, 19, 18, 19, 2, 20, 8, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 24, 25, 10, 26, 25, 26, 3, 27, 10, 27, 11, 28, 28, 29, 12, 30, 29, 30, 12, 31, 4, 32, 31, 32, 5, 33, 14, 33, 14, 34, 15, 35, 34, 35, 16, 36, 6, 37, 36, 37, 15, 38, 16, 39, 38, 39, 18, 40, 40, 41, 19, 42, 41, 42, 8, 43, 20, 44, 43, 44, 22, 45, 23, 46, 45, 46, 21, 47, 22, 48, 47, 48, 25, 49, 26, 50, 49, 50, 24, 51, 25, 52, 51, 52, 26, 53, 10, 54, 53, 54, 28, 55, 29, 56, 55, 56, 29, 57, 30, 58, 57, 58, 12, 59, 30, 59, 33, 60, 14, 61, 60, 61, 15, 62, 35, 62, 34, 63, 63, 64, 35, 65, 64, 65, 16, 66, 36, 66, 38, 67, 67, 68, 39, 69, 68, 69, 41, 70, 42, 71, 70, 71, 40, 72, 41, 73, 72, 73, 43, 74, 44, 74, 45, 75, 75, 76, 46, 77, 76, 77, 22, 78, 45, 78, 26, 79, 50, 79, 49, 80, 80, 81, 50, 82, 81, 82, 25, 83, 49, 83, 29, 84, 56, 84, 57, 85, 85, 86, 58, 87, 86, 87, 60, 88, 61, 88, 35, 89, 62, 90, 89, 90, 64, 91, 65, 92, 91, 92, 63, 93, 64, 94, 93, 94, 67, 95, 68, 96, 95, 96, 68, 97, 69, 98, 97, 98, 41, 99, 70, 99, 75, 100, 76, 101, 100, 101, 76, 102, 77, 103, 102, 103, 81, 104, 82, 105, 104, 105, 80, 106, 81, 107, 106, 107, 85, 108, 86, 109, 108, 109, 89, 110, 90, 110, 91, 111, 111, 112, 92, 113, 112, 113, 64, 114, 91, 114, 68, 115, 96, 115, 76, 116, 101, 116, 81, 117, 104, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [33, 60, 61, 14], [5, 33, 14], [6, 5, 14, 15, 16], [2, 1, 7, 8], [17, 1, 6], [42, 41, 70, 71], [60, 88, 61], [15, 14, 34, 35], [37, 6, 16, 36], [2, 8, 20], [58, 57, 85, 86, 87], [10, 9, 24, 25, 26], [29, 28, 55, 56], [29, 56, 84], [26, 50, 79], [82, 81, 104, 105], [26, 25, 49, 50], [86, 85, 108, 109], [50, 49, 80, 81, 82], [25, 24, 51, 52], [81, 117, 104], [25, 83, 49], [68, 67, 95, 96], [69, 68, 97, 98], [46, 45, 75, 76, 77], [76, 75, 100, 101], [76, 101, 116], [68, 96, 115], [77, 76, 102, 103], [81, 80, 106, 107], [113, 92, 91, 111, 112], [22, 78, 45], [90, 89, 110], [43, 74, 44], [23, 22, 45, 46], [69, 39, 38, 67, 68], [114, 91, 64], [65, 64, 91, 92], [22, 21, 47, 48], [90, 62, 35, 89], [8, 43, 44, 20], [36, 16, 66], [15, 35, 62], [16, 15, 38, 39], [93, 94, 64, 63], [8, 7, 21, 22, 23], [35, 34, 63, 64, 65], [10, 26, 53, 54], [30, 29, 57, 58], [99, 70, 41], [3, 10, 27], [3, 2, 9, 10], [12, 11, 28, 29, 30], [12, 30, 59], [72, 73, 41, 40], [4, 3, 11, 12], [0, 4, 13], [4, 12, 31, 32], [18, 40, 41, 42, 19], [0, 18, 19, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xBA3B26, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[104,81],
      [76,101],
      [68,96],
      [91,64],
      [92,91],
      [90,89],
      [86,85],
      [81,80],
      [82,81],
      [77,76],
      [76,75],
      [70,41],
      [69,68],
      [68,67],
      [64,63],
      [65,64],
      [62,35],
      [61,60],
      [58,57],
      [29,56],
      [49,25],
      [50,49],
      [26,50],
      [45,22],
      [46,45],
      [44,43],
      [41,40],
      [42,41],
      [39,38],
      [36,16],
      [35,34],
      [15,35],
      [14,33],
      [12,30],
      [30,29],
      [29,28],
      [10,26],
      [25,24],
      [26,25],
      [22,21],
      [23,22],
      [20,8],
      [19,18],
      [16,15],
      [6,16],
      [15,14],
      [14,5],
      [4,12],
      [12,11],
      [3,10],
      [10,9],
      [8,7],
      [2,8],
      [5,0],
      [1,6],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
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
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275];

obj0.userData.subtrees = [[117],
      [116],
      [115],
      [114],
      [111,112,113],
      [110],
      [108,109],
      [106,107],
      [104,105,117],
      [102,103],
      [100,101,116],
      [99],
      [97,98],
      [95,96,115],
      [93,94],
      [91,92,111,112,113,114],
      [89,90,110],
      [88],
      [85,86,87,108,109],
      [84],
      [83],
      [80,81,82,104,105,106,107,117],
      [79],
      [78],
      [75,76,77,100,101,102,103,116],
      [74],
      [72,73],
      [70,71,99],
      [67,68,69,95,96,97,98,115],
      [66],
      [63,64,65,91,92,93,94,111,112,113,114],
      [62,89,90,110],
      [60,61,88],
      [59],
      [57,58,85,86,87,108,109],
      [55,56,84],
      [53,54],
      [51,52],
      [49,50,79,80,81,82,83,104,105,106,107,117],
      [47,48],
      [45,46,75,76,77,78,100,101,102,103,116],
      [43,44,74],
      [40,41,42,70,71,72,73,99],
      [38,39,67,68,69,95,96,97,98,115],
      [36,37,66],
      [34,35,62,63,64,65,89,90,91,92,93,94,110,111,112,113,114],
      [33,60,61,88],
      [31,32],
      [28,29,30,55,56,57,58,59,84,85,86,87,108,109],
      [27],
      [24,25,26,49,50,51,52,53,54,79,80,81,82,83,104,105,106,107,117],
      [21,22,23,45,46,47,48,75,76,77,78,100,101,102,103,116],
      [20,43,44,74],
      [18,19,40,41,42,70,71,72,73,99],
      [17],
      [14,15,16,33,34,35,36,37,38,39,60,61,62,63,64,65,66,67,68,69,88,89,90,91,92,93,94,95,96,97,98,110,111,112,113,114,115],
      [13],
      [11,12,28,29,30,31,32,55,56,57,58,59,84,85,86,87,108,109],
      [9,10,24,25,26,27,49,50,51,52,53,54,79,80,81,82,83,104,105,106,107,117],
      [7,8,20,21,22,23,43,44,45,46,47,48,74,75,76,77,78,100,101,102,103,116],
      [5,6,14,15,16,17,18,19,33,34,35,36,37,38,39,40,41,42,60,61,62,63,64,65,66,67,68,69,70,71,72,73,88,89,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115]];

obj0.userData.polytoperoot = [[0.948536019861961,-0.223918979794513,0.223918979794513],
      [1.61803398874989,-1,0],
      [-0.13838954023921,-0.223918979794513,-0.81014647962275]];

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
