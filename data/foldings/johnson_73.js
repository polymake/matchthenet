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
obj0.userData.points.push(new PMPoint(1.89804, 0.194419, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.763931, 0));
obj0.userData.points.push(new PMPoint(1.86161, -0.500698, 0));
obj0.userData.points.push(new PMPoint(1.07338, 1.92522, 0));
obj0.userData.points.push(new PMPoint(0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(1.51143, 1.38427, 0));
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
obj0.userData.points.push(new PMPoint(1.88825, 0.473751, 0));
obj0.userData.points.push(new PMPoint(1.79514, 0.911803, 0));
obj0.userData.points.push(new PMPoint(1.93118, -0.438052, 0));
obj0.userData.points.push(new PMPoint(2.23084, -0.105243, 0));
obj0.userData.points.push(new PMPoint(0.237702, 1.7013, 0));
obj0.userData.points.push(new PMPoint(1.21177, 2.35114, 0));
obj0.userData.points.push(new PMPoint(0.84946, 2.61437, 0));
obj0.userData.points.push(new PMPoint(0.487152, 2.35114, 0));
obj0.userData.points.push(new PMPoint(1.52122, 1.47738, 0));
obj0.userData.points.push(new PMPoint(1.52122, 1.92522, 0));
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
obj0.userData.points.push(new PMPoint(1.51143, -1.83211, 0));
obj0.userData.points.push(new PMPoint(-1.54611, -0.0417669, 0));
obj0.userData.points.push(new PMPoint(2.33363, 0.426939, 0));
obj0.userData.points.push(new PMPoint(2.51579, 0.83606, 0));
obj0.userData.points.push(new PMPoint(2.18298, 1.13572, 0));
obj0.userData.points.push(new PMPoint(0.586227, 2.97668, 0));
obj0.userData.points.push(new PMPoint(0.223919, 2.71345, 0));
obj0.userData.points.push(new PMPoint(1.51143, 2.01833, 0));
obj0.userData.points.push(new PMPoint(1.475, 2.71345, 0));
obj0.userData.points.push(new PMPoint(1.11269, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-1.677, 2.24131, 0));
obj0.userData.points.push(new PMPoint(-2.03931, 1.97808, 0));
obj0.userData.points.push(new PMPoint(0.0960267, -2.3538, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -3.06221, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-1.01338, -2.14914, 0));
obj0.userData.points.push(new PMPoint(1.52122, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.52122, -1.92522, 0));
obj0.userData.points.push(new PMPoint(2.81545, 1.16887, 0));
obj0.userData.points.push(new PMPoint(2.48264, 1.46853, 0));
obj0.userData.points.push(new PMPoint(1.03161, 3.02349, 0));
obj0.userData.points.push(new PMPoint(0.00749825, -3.24436, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 10, 9, 10, 3, 11, 4, 12, 11, 12, 0, 13, 4, 13, 5, 14, 14, 15, 6, 16, 15, 16, 1, 17, 6, 17, 0, 18, 5, 19, 18, 19, 2, 20, 8, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 24, 25, 10, 26, 25, 26, 3, 27, 10, 27, 11, 28, 28, 29, 12, 30, 29, 30, 12, 31, 4, 32, 31, 32, 5, 33, 14, 33, 14, 34, 15, 35, 34, 35, 16, 36, 6, 37, 36, 37, 15, 38, 16, 39, 38, 39, 18, 40, 40, 41, 19, 42, 41, 42, 8, 43, 20, 44, 43, 44, 22, 45, 23, 45, 21, 46, 22, 47, 46, 47, 25, 48, 26, 49, 48, 49, 24, 50, 25, 50, 26, 51, 10, 52, 51, 52, 28, 53, 29, 54, 53, 54, 29, 55, 30, 56, 55, 56, 12, 57, 30, 57, 33, 58, 14, 59, 58, 59, 15, 60, 35, 60, 34, 61, 61, 62, 35, 63, 62, 63, 16, 64, 36, 64, 38, 65, 65, 66, 39, 67, 66, 67, 41, 68, 42, 69, 68, 69, 40, 70, 41, 71, 70, 71, 43, 72, 44, 73, 72, 73, 22, 74, 45, 75, 74, 75, 26, 76, 49, 76, 48, 77, 77, 78, 49, 79, 78, 79, 25, 80, 48, 81, 80, 81, 29, 82, 54, 82, 55, 83, 83, 84, 56, 85, 84, 85, 58, 86, 59, 86, 35, 87, 60, 88, 87, 88, 62, 89, 63, 90, 89, 90, 61, 91, 62, 92, 91, 92, 65, 93, 66, 94, 93, 94, 66, 95, 67, 95, 41, 96, 68, 96, 72, 97, 97, 98, 73, 99, 98, 99, 78, 100, 79, 101, 100, 101, 48, 102, 77, 102, 77, 103, 78, 104, 103, 104, 83, 105, 84, 106, 105, 106, 87, 107, 88, 107, 89, 108, 108, 109, 90, 110, 109, 110, 62, 111, 89, 111, 94, 112, 66, 113, 112, 113, 98, 114, 99, 115, 114, 115, 78, 116, 100, 116, 109, 117, 110, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [33, 58, 59, 14], [5, 33, 14], [6, 5, 14, 15, 16], [2, 1, 7, 8], [17, 1, 6], [42, 41, 68, 69], [58, 86, 59], [15, 14, 34, 35], [37, 6, 16, 36], [2, 8, 20], [56, 55, 83, 84, 85], [10, 9, 24, 25, 26], [29, 28, 53, 54], [29, 54, 82], [26, 49, 76], [79, 78, 100, 101], [26, 25, 48, 49], [84, 83, 105, 106], [49, 48, 77, 78, 79], [25, 24, 50], [78, 116, 100], [25, 80, 81, 48], [66, 65, 93, 94], [67, 66, 95], [72, 97, 98, 99, 73], [66, 94, 112, 113], [110, 109, 117], [99, 98, 114, 115], [48, 102, 77], [78, 77, 103, 104], [110, 90, 89, 108, 109], [22, 74, 75, 45], [88, 87, 107], [23, 22, 45], [43, 72, 73, 44], [67, 39, 38, 65, 66], [111, 89, 62], [63, 62, 89, 90], [22, 21, 46, 47], [88, 60, 35, 87], [8, 43, 44, 20], [36, 16, 64], [15, 35, 60], [16, 15, 38, 39], [91, 92, 62, 61], [8, 7, 21, 22, 23], [35, 34, 61, 62, 63], [10, 26, 51, 52], [30, 29, 55, 56], [96, 68, 41], [3, 10, 27], [3, 2, 9, 10], [12, 11, 28, 29, 30], [12, 30, 57], [70, 71, 41, 40], [4, 3, 11, 12], [0, 4, 13], [4, 12, 31, 32], [18, 40, 41, 42, 19], [0, 18, 19, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xBA3B26, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[110,109],
      [100,78],
      [99,98],
      [66,94],
      [89,62],
      [90,89],
      [88,87],
      [84,83],
      [78,77],
      [77,48],
      [79,78],
      [73,72],
      [68,41],
      [67,66],
      [66,65],
      [62,61],
      [63,62],
      [60,35],
      [59,58],
      [56,55],
      [29,54],
      [48,25],
      [49,48],
      [26,49],
      [45,22],
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

obj0.userData.angles = [2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.67794504458899,
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
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
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
      [114,115],
      [112,113],
      [111],
      [108,109,110,117],
      [107],
      [105,106],
      [103,104],
      [102],
      [100,101,116],
      [97,98,99,114,115],
      [96],
      [95],
      [93,94,112,113],
      [91,92],
      [89,90,108,109,110,111,117],
      [87,88,107],
      [86],
      [83,84,85,105,106],
      [82],
      [80,81],
      [77,78,79,100,101,102,103,104,116],
      [76],
      [74,75],
      [72,73,97,98,99,114,115],
      [70,71],
      [68,69,96],
      [65,66,67,93,94,95,112,113],
      [64],
      [61,62,63,89,90,91,92,108,109,110,111,117],
      [60,87,88,107],
      [58,59,86],
      [57],
      [55,56,83,84,85,105,106],
      [53,54,82],
      [51,52],
      [50],
      [48,49,76,77,78,79,80,81,100,101,102,103,104,116],
      [46,47],
      [45,74,75],
      [43,44,72,73,97,98,99,114,115],
      [40,41,42,68,69,70,71,96],
      [38,39,65,66,67,93,94,95,112,113],
      [36,37,64],
      [34,35,60,61,62,63,87,88,89,90,91,92,107,108,109,110,111,117],
      [33,58,59,86],
      [31,32],
      [28,29,30,53,54,55,56,57,82,83,84,85,105,106],
      [27],
      [24,25,26,48,49,50,51,52,76,77,78,79,80,81,100,101,102,103,104,116],
      [21,22,23,45,46,47,74,75],
      [20,43,44,72,73,97,98,99,114,115],
      [18,19,40,41,42,68,69,70,71,96],
      [17],
      [14,15,16,33,34,35,36,37,38,39,58,59,60,61,62,63,64,65,66,67,86,87,88,89,90,91,92,93,94,95,107,108,109,110,111,112,113,117],
      [13],
      [11,12,28,29,30,31,32,53,54,55,56,57,82,83,84,85,105,106],
      [9,10,24,25,26,27,48,49,50,51,52,76,77,78,79,80,81,100,101,102,103,104,116],
      [7,8,20,21,22,23,43,44,45,46,47,72,73,74,75,97,98,99,114,115],
      [5,6,14,15,16,17,18,19,33,34,35,36,37,38,39,40,41,42,58,59,60,61,62,63,64,65,66,67,68,69,70,71,86,87,88,89,90,91,92,93,94,95,96,107,108,109,110,111,112,113,117]];

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
