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
obj0.userData.points.push(new PMPoint(0.934572, -0.266807, 0));
obj0.userData.points.push(new PMPoint(-0.599259, -0.266807, 0));
obj0.userData.points.push(new PMPoint(0.934572, -0.765179, 0));
obj0.userData.points.push(new PMPoint(-0.599259, -0.765179, 0));
obj0.userData.points.push(new PMPoint(0.641636, -1.16837, 0));
obj0.userData.points.push(new PMPoint(-0.306324, -1.16837, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -1.22908, 0));
obj0.userData.points.push(new PMPoint(-0.374891, -1.54798, 0));
obj0.userData.points.push(new PMPoint(-0.271274, -1.86688, 0));
obj0.userData.points.push(new PMPoint(0, -2.06397, 0));
obj0.userData.points.push(new PMPoint(0.335313, -2.06397, 0));
obj0.userData.points.push(new PMPoint(0.606587, -1.86688, 0));
obj0.userData.points.push(new PMPoint(0.710204, -1.54798, 0));
obj0.userData.points.push(new PMPoint(0.606587, -1.22908, 0));
obj0.userData.points.push(new PMPoint(-0.962295, -0.136384, 0));
obj0.userData.points.push(new PMPoint(-1.165, 0.318901, 0));
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
obj0.userData.points.push(new PMPoint(1.29761, -0.136384, 0));
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
obj0.userData.points.push(new PMPoint(0.95939, -0.740362, 0));
obj0.userData.points.push(new PMPoint(1.18376, -0.491176, 0));
obj0.userData.points.push(new PMPoint(-0.848445, -0.491176, 0));
obj0.userData.points.push(new PMPoint(-0.624077, -0.740362, 0));
obj0.userData.points.push(new PMPoint(0.676302, -1.16288, 0));
obj0.userData.points.push(new PMPoint(1.00429, -1.09316, 0));
obj0.userData.points.push(new PMPoint(-0.668975, -1.09316, 0));
obj0.userData.points.push(new PMPoint(-0.340989, -1.16288, 0));
obj0.userData.points.push(new PMPoint(-0.599259, -1.29879, 0));
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
obj0.userData.points.push(new PMPoint(0.934572, -1.29879, 0));
obj0.userData.points.push(new PMPoint(-1.17758, 0.286135, 0));
obj0.userData.points.push(new PMPoint(-1.2812, -0.0327667, 0));
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
obj0.userData.points.push(new PMPoint(-1.42442, 0.130423, 0));
obj0.userData.points.push(new PMPoint(-1.08911, 1.70795, 0));
obj0.userData.points.push(new PMPoint(0.0191834, 2.20139, 0));
obj0.userData.points.push(new PMPoint(1.61651, -0.0327667, 0));
obj0.userData.points.push(new PMPoint(1.51289, 0.286135, 0));
obj0.userData.points.push(new PMPoint(2.29042, 1.32238, 0));
obj0.userData.points.push(new PMPoint(2.19133, 0.379609, 0));
obj0.userData.points.push(new PMPoint(1.75973, 0.130423, 0));
obj0.userData.points.push(new PMPoint(1.12705, -1.03075, 0));
obj0.userData.points.push(new PMPoint(1.45503, -0.961036, 0));
obj0.userData.points.push(new PMPoint(1.49008, -0.62756, 0));
obj0.userData.points.push(new PMPoint(-1.15477, -0.62756, 0));
obj0.userData.points.push(new PMPoint(-1.11972, -0.961036, 0));
obj0.userData.points.push(new PMPoint(-0.791734, -1.03075, 0));
obj0.userData.points.push(new PMPoint(-0.848445, -1.52316, 0));
obj0.userData.points.push(new PMPoint(-0.624077, -1.77235, 0));
obj0.userData.points.push(new PMPoint(-0.91291, -1.7305, 0));
obj0.userData.points.push(new PMPoint(0.0350497, -3.03525, 0));
obj0.userData.points.push(new PMPoint(1.24822, -1.7305, 0));
obj0.userData.points.push(new PMPoint(1.18376, -1.5728, 0));
obj0.userData.points.push(new PMPoint(0.95939, -1.32361, 0));
obj0.userData.points.push(new PMPoint(-1.78631, 0.0516239, 0));
obj0.userData.points.push(new PMPoint(-1.45832, 0.121339, 0));
obj0.userData.points.push(new PMPoint(1.79363, 0.121339, 0));
obj0.userData.points.push(new PMPoint(2.12162, 0.0516239, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 27, 3, 28, 4, 28, 8, 29, 9, 29, 4, 30, 5, 30, 7, 31, 8, 31, 5, 32, 6, 32, 6, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 7, 40, 39, 40, 16, 41, 17, 41, 15, 42, 16, 42, 14, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 15, 50, 49, 50, 13, 51, 14, 51, 12, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 13, 59, 58, 59, 11, 60, 12, 60, 20, 61, 21, 61, 21, 62, 22, 62, 22, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 23, 70, 69, 70, 23, 71, 24, 71, 9, 72, 27, 73, 72, 73, 28, 74, 4, 75, 74, 75, 8, 76, 29, 77, 76, 77, 30, 78, 5, 79, 78, 79, 33, 80, 34, 80, 34, 81, 35, 81, 36, 82, 37, 82, 35, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 36, 90, 89, 90, 37, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 38, 98, 97, 98, 38, 99, 39, 99, 39, 100, 40, 100, 16, 101, 41, 102, 101, 102, 45, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 46, 110, 109, 110, 46, 111, 47, 111, 48, 112, 49, 112, 49, 113, 50, 113, 44, 114, 45, 114, 55, 115, 56, 115, 61, 116, 21, 117, 116, 117, 66, 118, 67, 118, 64, 119, 65, 119, 63, 120, 64, 120, 72, 121, 121, 122, 73, 123, 122, 123, 74, 124, 124, 125, 75, 126, 125, 126, 80, 127, 34, 128, 127, 128, 83, 129, 84, 129, 88, 130, 89, 130, 97, 131, 98, 131, 99, 132, 39, 133, 132, 133, 112, 134, 49, 135, 134, 135, 64, 136, 119, 137, 136, 137];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [27, 10, 9], [3, 28, 4], [21, 20, 61], [21, 61, 116, 117], [17, 16, 41], [28, 74, 75, 4], [9, 8, 29], [27, 9, 72, 73], [5, 4, 30], [5, 30, 78, 79], [74, 124, 125, 126, 75], [8, 7, 31], [6, 5, 32], [105, 106, 107, 108, 109, 110, 46, 45, 103, 104], [34, 33, 80], [34, 80, 127, 128], [98, 97, 131], [39, 99, 132, 133], [84, 83, 129], [49, 112, 134, 135], [35, 34, 81], [37, 36, 82], [130, 89, 88], [85, 86, 87, 88, 89, 90, 36, 35, 83, 84], [47, 46, 111], [67, 66, 118], [95, 96, 97, 98, 38, 37, 91, 92, 93, 94], [39, 38, 99], [49, 48, 112], [65, 64, 119], [7, 6, 33, 34, 35, 36, 37, 38, 39, 40], [40, 39, 100], [8, 76, 77, 29], [50, 49, 113], [16, 101, 102, 41], [44, 114, 45], [55, 115, 56], [64, 63, 120], [64, 136, 137, 119], [73, 72, 121, 122, 123], [16, 15, 42], [22, 21, 62], [15, 14, 43, 44, 45, 46, 47, 48, 49, 50], [23, 22, 63, 64, 65, 66, 67, 68, 69, 70], [14, 13, 51], [24, 23, 71], [52, 53, 54, 55, 56, 57, 58, 59, 13, 12], [11, 60, 12], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[119,64],
      [49,112],
      [39,99],
      [98,97],
      [89,88],
      [84,83],
      [34,80],
      [75,74],
      [73,72],
      [64,63],
      [65,64],
      [67,66],
      [21,61],
      [56,55],
      [45,44],
      [50,49],
      [49,48],
      [47,46],
      [46,45],
      [41,16],
      [40,39],
      [39,38],
      [38,37],
      [36,35],
      [37,36],
      [35,34],
      [34,33],
      [5,30],
      [29,8],
      [4,28],
      [27,9],
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

obj0.userData.angles = [3.04280887270247,
      3.04280887270247,
      3.04280887270247,
      2.68680207558007,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.48923451380543,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.48923451380542,
      2.68680207558007,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.77672882547631,
      2.68680207558007,
      2.48923451380542,
      2.0344439357957,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
      2.68680207558007,
      2.77672882547631,
      2.77672882547631,
      3.04280887270247,
      3.04280887270247,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.68680207558007,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542];

obj0.userData.subtrees = [[136,137],
      [134,135],
      [132,133],
      [131],
      [130],
      [129],
      [127,128],
      [124,125,126],
      [121,122,123],
      [120],
      [119,136,137],
      [118],
      [116,117],
      [115],
      [114],
      [113],
      [112,134,135],
      [111],
      [103,104,105,106,107,108,109,110],
      [101,102],
      [100],
      [99,132,133],
      [91,92,93,94,95,96,97,98,131],
      [83,84,85,86,87,88,89,90,129,130],
      [82],
      [81],
      [80,127,128],
      [78,79],
      [76,77],
      [74,75,124,125,126],
      [72,73,121,122,123],
      [71],
      [63,64,65,66,67,68,69,70,118,119,120,136,137],
      [62],
      [61,116,117],
      [60],
      [52,53,54,55,56,57,58,59,115],
      [51],
      [43,44,45,46,47,48,49,50,103,104,105,106,107,108,109,110,111,112,113,114,134,135],
      [42],
      [41,101,102],
      [33,34,35,36,37,38,39,40,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,127,128,129,130,131,132,133],
      [32],
      [31],
      [30,78,79],
      [29,76,77],
      [28,74,75,124,125,126],
      [27,72,73,121,122,123],
      [19,20,21,22,23,24,25,26,61,62,63,64,65,66,67,68,69,70,71,116,117,118,119,120,136,137],
      [11,12,13,14,15,16,17,18,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,134,135],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,121,122,123,124,125,126,127,128,129,130,131,132,133]];

obj0.userData.polytoperoot = [[0.877860488151632,-0.167656434546675,-0.362986180972935],
      [2.6180339887499,0,-1],
      [0.335312869093349,0,0.877860488151633]];

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
