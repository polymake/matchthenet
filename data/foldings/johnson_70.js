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
obj0.userData.points.push(new PMPoint(0.335313, 0, 0));
obj0.userData.points.push(new PMPoint(0.167656, 0.290389, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -0.197092, 0));
obj0.userData.points.push(new PMPoint(-0.374891, -0.515993, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -0.834895, 0));
obj0.userData.points.push(new PMPoint(0, -1.03199, 0));
obj0.userData.points.push(new PMPoint(0.335313, -1.03199, 0));
obj0.userData.points.push(new PMPoint(0.606587, -0.834895, 0));
obj0.userData.points.push(new PMPoint(0.710204, -0.515993, 0));
obj0.userData.points.push(new PMPoint(0.606587, -0.197092, 0));
obj0.userData.points.push(new PMPoint(0.132607, 0.623865, 0));
obj0.userData.points.push(new PMPoint(-0.0917614, 0.873051, 0));
obj0.userData.points.push(new PMPoint(-0.419747, 0.942767, 0));
obj0.userData.points.push(new PMPoint(-0.72607, 0.806383, 0));
obj0.userData.points.push(new PMPoint(-0.893727, 0.515993, 0));
obj0.userData.points.push(new PMPoint(-0.858677, 0.182517, 0));
obj0.userData.points.push(new PMPoint(-0.634309, -0.0666686, 0));
obj0.userData.points.push(new PMPoint(-0.306324, -0.136384, 0));
obj0.userData.points.push(new PMPoint(0.641636, -0.136384, 0));
obj0.userData.points.push(new PMPoint(0.969622, -0.0666686, 0));
obj0.userData.points.push(new PMPoint(1.19399, 0.182517, 0));
obj0.userData.points.push(new PMPoint(1.22904, 0.515993, 0));
obj0.userData.points.push(new PMPoint(1.06138, 0.806383, 0));
obj0.userData.points.push(new PMPoint(0.75506, 0.942767, 0));
obj0.userData.points.push(new PMPoint(0.427074, 0.873051, 0));
obj0.userData.points.push(new PMPoint(0.202706, 0.623865, 0));
obj0.userData.points.push(new PMPoint(1.03819, -0.585709, 0));
obj0.userData.points.push(new PMPoint(0.934572, -0.266807, 0));
obj0.userData.points.push(new PMPoint(-0.599259, -0.266807, 0));
obj0.userData.points.push(new PMPoint(-0.702877, -0.585709, 0));
obj0.userData.points.push(new PMPoint(0.925488, -0.938512, 0));
obj0.userData.points.push(new PMPoint(1.02911, -0.619611, 0));
obj0.userData.points.push(new PMPoint(-0.693793, -0.619611, 0));
obj0.userData.points.push(new PMPoint(-0.590175, -0.938512, 0));
obj0.userData.points.push(new PMPoint(0.641636, -1.16837, 0));
obj0.userData.points.push(new PMPoint(0.91291, -0.971279, 0));
obj0.userData.points.push(new PMPoint(-0.577597, -0.971279, 0));
obj0.userData.points.push(new PMPoint(-0.306324, -1.16837, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -1.22908, 0));
obj0.userData.points.push(new PMPoint(-0.374891, -1.54798, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -1.86688, 0));
obj0.userData.points.push(new PMPoint(0, -2.06397, 0));
obj0.userData.points.push(new PMPoint(0.335313, -2.06397, 0));
obj0.userData.points.push(new PMPoint(0.606587, -1.86688, 0));
obj0.userData.points.push(new PMPoint(0.710204, -1.54798, 0));
obj0.userData.points.push(new PMPoint(0.606587, -1.22908, 0));
obj0.userData.points.push(new PMPoint(-1.10786, -0.0418506, 0));
obj0.userData.points.push(new PMPoint(-0.883495, -0.291037, 0));
obj0.userData.points.push(new PMPoint(-1.165, 0.318901, 0));
obj0.userData.points.push(new PMPoint(-1.12995, -0.0145745, 0));
obj0.userData.points.push(new PMPoint(-0.76112, 1.13986, 0));
obj0.userData.points.push(new PMPoint(-0.985488, 1.38904, 0));
obj0.userData.points.push(new PMPoint(-1.31347, 1.45876, 0));
obj0.userData.points.push(new PMPoint(-1.6198, 1.32238, 0));
obj0.userData.points.push(new PMPoint(-1.78745, 1.03199, 0));
obj0.userData.points.push(new PMPoint(-1.7524, 0.698511, 0));
obj0.userData.points.push(new PMPoint(-1.52804, 0.449325, 0));
obj0.userData.points.push(new PMPoint(-1.20005, 0.379609, 0));
obj0.userData.points.push(new PMPoint(-0.691021, 1.13986, 0));
obj0.userData.points.push(new PMPoint(0.214562, 1.00944, 0));
obj0.userData.points.push(new PMPoint(0.382219, 1.29982, 0));
obj0.userData.points.push(new PMPoint(0.347169, 1.6333, 0));
obj0.userData.points.push(new PMPoint(0.122801, 1.88249, 0));
obj0.userData.points.push(new PMPoint(-0.205185, 1.9522, 0));
obj0.userData.points.push(new PMPoint(-0.511508, 1.81582, 0));
obj0.userData.points.push(new PMPoint(-0.679165, 1.52543, 0));
obj0.userData.points.push(new PMPoint(-0.644115, 1.19195, 0));
obj0.userData.points.push(new PMPoint(0.236224, 0.942767, 0));
obj0.userData.points.push(new PMPoint(1.21881, -0.291037, 0));
obj0.userData.points.push(new PMPoint(1.44318, -0.0418506, 0));
obj0.userData.points.push(new PMPoint(1.46526, -0.0145745, 0));
obj0.userData.points.push(new PMPoint(1.50031, 0.318901, 0));
obj0.userData.points.push(new PMPoint(1.53536, 0.379609, 0));
obj0.userData.points.push(new PMPoint(1.86335, 0.449325, 0));
obj0.userData.points.push(new PMPoint(2.08772, 0.698511, 0));
obj0.userData.points.push(new PMPoint(2.12277, 1.03199, 0));
obj0.userData.points.push(new PMPoint(1.95511, 1.32238, 0));
obj0.userData.points.push(new PMPoint(1.64879, 1.45876, 0));
obj0.userData.points.push(new PMPoint(1.3208, 1.38904, 0));
obj0.userData.points.push(new PMPoint(1.09643, 1.13986, 0));
obj0.userData.points.push(new PMPoint(1.02633, 1.13986, 0));
obj0.userData.points.push(new PMPoint(1.19676, -1.1356, 0));
obj0.userData.points.push(new PMPoint(1.46804, -0.938512, 0));
obj0.userData.points.push(new PMPoint(1.36442, -0.619611, 0));
obj0.userData.points.push(new PMPoint(-1.02911, -0.619611, 0));
obj0.userData.points.push(new PMPoint(-1.13272, -0.938512, 0));
obj0.userData.points.push(new PMPoint(-0.861449, -1.1356, 0));
obj0.userData.points.push(new PMPoint(0.838728, -1.43964, 0));
obj0.userData.points.push(new PMPoint(1.11, -1.24255, 0));
obj0.userData.points.push(new PMPoint(-0.774689, -1.24255, 0));
obj0.userData.points.push(new PMPoint(-0.503416, -1.43964, 0));
obj0.userData.points.push(new PMPoint(-0.702877, -1.47826, 0));
obj0.userData.points.push(new PMPoint(-0.599259, -1.79717, 0));
obj0.userData.points.push(new PMPoint(0.167656, -2.35436, 0));
obj0.userData.points.push(new PMPoint(-0.606587, -1.86688, 0));
obj0.userData.points.push(new PMPoint(-0.87786, -2.06397, 0));
obj0.userData.points.push(new PMPoint(-0.981478, -2.38288, 0));
obj0.userData.points.push(new PMPoint(-0.87786, -2.70178, 0));
obj0.userData.points.push(new PMPoint(-0.606587, -2.89887, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -2.89887, 0));
obj0.userData.points.push(new PMPoint(0, -2.70178, 0));
obj0.userData.points.push(new PMPoint(0.103617, -2.38288, 0));
obj0.userData.points.push(new PMPoint(0.231695, -2.38288, 0));
obj0.userData.points.push(new PMPoint(0.335313, -2.70178, 0));
obj0.userData.points.push(new PMPoint(0.606587, -2.89887, 0));
obj0.userData.points.push(new PMPoint(0.9419, -2.89887, 0));
obj0.userData.points.push(new PMPoint(1.21317, -2.70178, 0));
obj0.userData.points.push(new PMPoint(1.31679, -2.38288, 0));
obj0.userData.points.push(new PMPoint(1.21317, -2.06397, 0));
obj0.userData.points.push(new PMPoint(0.9419, -1.86688, 0));
obj0.userData.points.push(new PMPoint(0.934572, -1.79717, 0));
obj0.userData.points.push(new PMPoint(1.03819, -1.47826, 0));
obj0.userData.points.push(new PMPoint(-1.49848, 0.283852, 0));
obj0.userData.points.push(new PMPoint(-1.46343, -0.0496242, 0));
obj0.userData.points.push(new PMPoint(-1.14582, 1.74915, 0));
obj0.userData.points.push(new PMPoint(-1.18087, 2.08263, 0));
obj0.userData.points.push(new PMPoint(-1.40524, 2.33181, 0));
obj0.userData.points.push(new PMPoint(-1.73322, 2.40153, 0));
obj0.userData.points.push(new PMPoint(-2.03954, 2.26514, 0));
obj0.userData.points.push(new PMPoint(-2.2072, 1.97475, 0));
obj0.userData.points.push(new PMPoint(-2.17215, 1.64128, 0));
obj0.userData.points.push(new PMPoint(-1.94778, 1.39209, 0));
obj0.userData.points.push(new PMPoint(-1.95511, 1.32238, 0));
obj0.userData.points.push(new PMPoint(-1.85602, 0.379609, 0));
obj0.userData.points.push(new PMPoint(-1.63165, 0.130423, 0));
obj0.userData.points.push(new PMPoint(-1.08911, 1.70795, 0));
obj0.userData.points.push(new PMPoint(0.0191834, 2.20139, 0));
obj0.userData.points.push(new PMPoint(1.79874, -0.0496242, 0));
obj0.userData.points.push(new PMPoint(1.83379, 0.283852, 0));
obj0.userData.points.push(new PMPoint(2.29042, 1.32238, 0));
obj0.userData.points.push(new PMPoint(1.96697, 0.130423, 0));
obj0.userData.points.push(new PMPoint(2.19133, 0.379609, 0));
obj0.userData.points.push(new PMPoint(1.39385, -1.40688, 0));
obj0.userData.points.push(new PMPoint(1.66513, -1.20979, 0));
obj0.userData.points.push(new PMPoint(-1.32981, -1.20979, 0));
obj0.userData.points.push(new PMPoint(-1.05854, -1.40688, 0));
obj0.userData.points.push(new PMPoint(0.0350497, -3.03525, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 28, 27, 28, 3, 29, 4, 30, 29, 30, 8, 31, 9, 32, 31, 32, 4, 33, 5, 34, 33, 34, 7, 35, 8, 36, 35, 36, 5, 37, 6, 38, 37, 38, 6, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 7, 46, 45, 46, 16, 47, 17, 48, 47, 48, 15, 49, 16, 50, 49, 50, 14, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 15, 58, 57, 58, 13, 59, 14, 59, 12, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 13, 67, 66, 67, 11, 68, 12, 68, 20, 69, 21, 70, 69, 70, 21, 71, 22, 72, 71, 72, 22, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 23, 80, 79, 80, 23, 81, 24, 81, 31, 82, 82, 83, 32, 84, 83, 84, 33, 85, 85, 86, 34, 87, 86, 87, 35, 88, 36, 89, 88, 89, 37, 90, 38, 91, 90, 91, 40, 92, 41, 93, 92, 93, 42, 94, 43, 94, 41, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 42, 102, 101, 102, 43, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 44, 110, 109, 110, 44, 111, 45, 112, 111, 112, 49, 113, 50, 114, 113, 114, 53, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120, 120, 121, 54, 122, 121, 122, 54, 123, 55, 123, 56, 124, 57, 125, 124, 125, 52, 126, 53, 126, 63, 127, 64, 127, 71, 128, 72, 129, 128, 129, 76, 130, 77, 130, 74, 131, 75, 132, 131, 132, 82, 133, 83, 134, 133, 134, 86, 135, 87, 136, 135, 136, 100, 137, 101, 137];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [28, 10, 9, 27], [3, 29, 30, 4], [21, 20, 69, 70], [17, 16, 47, 48], [9, 8, 31, 32], [5, 4, 33, 34], [33, 85, 86, 87, 34], [8, 7, 35, 36], [6, 5, 37, 38], [117, 118, 119, 120, 121, 122, 54, 53, 115, 116], [38, 37, 90, 91], [83, 82, 133, 134], [135, 136, 87, 86], [41, 40, 92, 93], [43, 42, 94], [137, 101, 100], [97, 98, 99, 100, 101, 102, 42, 41, 95, 96], [55, 54, 123], [77, 76, 130], [107, 108, 109, 110, 44, 43, 103, 104, 105, 106], [45, 44, 111, 112], [57, 56, 124, 125], [75, 74, 131, 132], [7, 6, 39, 40, 41, 42, 43, 44, 45, 46], [35, 88, 89, 36], [49, 113, 114, 50], [52, 126, 53], [63, 127, 64], [72, 71, 128, 129], [84, 32, 31, 82, 83], [16, 15, 49, 50], [22, 21, 71, 72], [15, 14, 51, 52, 53, 54, 55, 56, 57, 58], [23, 22, 73, 74, 75, 76, 77, 78, 79, 80], [14, 13, 59], [24, 23, 81], [60, 61, 62, 63, 64, 65, 66, 67, 13, 12], [11, 68, 12], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[101,100],
      [87,86],
      [83,82],
      [75,74],
      [77,76],
      [72,71],
      [64,63],
      [53,52],
      [57,56],
      [55,54],
      [54,53],
      [50,49],
      [45,44],
      [44,43],
      [42,41],
      [43,42],
      [41,40],
      [38,37],
      [36,35],
      [34,33],
      [32,31],
      [24,23],
      [23,22],
      [22,21],
      [21,20],
      [12,11],
      [13,12],
      [14,13],
      [15,14],
      [16,15],
      [17,16],
      [7,6],
      [6,5],
      [8,7],
      [5,4],
      [9,8],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.48923451380542,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380542,
      2.77672882547631,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.0344439357957,
      2.77672882547631,
      2.48923451380543,
      2.0344439357957,
      2.0344439357957,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.58801829469275,
      2.48923451380542,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.58801829469275,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

obj0.userData.subtrees = [[137],
      [135,136],
      [133,134],
      [131,132],
      [130],
      [128,129],
      [127],
      [126],
      [124,125],
      [123],
      [115,116,117,118,119,120,121,122],
      [113,114],
      [111,112],
      [103,104,105,106,107,108,109,110],
      [95,96,97,98,99,100,101,102,137],
      [94],
      [92,93],
      [90,91],
      [88,89],
      [85,86,87,135,136],
      [82,83,84,133,134],
      [81],
      [73,74,75,76,77,78,79,80,130,131,132],
      [71,72,128,129],
      [69,70],
      [68],
      [60,61,62,63,64,65,66,67,127],
      [59],
      [51,52,53,54,55,56,57,58,115,116,117,118,119,120,121,122,123,124,125,126],
      [49,50,113,114],
      [47,48],
      [39,40,41,42,43,44,45,46,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,137],
      [37,38,90,91],
      [35,36,88,89],
      [33,34,85,86,87,135,136],
      [31,32,82,83,84,133,134],
      [29,30],
      [27,28],
      [19,20,21,22,23,24,25,26,69,70,71,72,73,74,75,76,77,78,79,80,81,128,129,130,131,132],
      [11,12,13,14,15,16,17,18,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,133,134,135,136,137]];

obj0.userData.polytoperoot = [[0.877860488177303,-0.167656434551577,-0.36298618098355],
      [2.61803398874989,0,-1],
      [0.335312869103155,0,0.877860488177303]];

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
