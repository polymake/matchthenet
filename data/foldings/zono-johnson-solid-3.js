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
obj0.userData.points.push(new PMPoint(0.484499, 0, 0));
obj0.userData.points.push(new PMPoint(0.90217, 0.24554, 0));
obj0.userData.points.push(new PMPoint(0.417671, 0.24554, 0));
obj0.userData.points.push(new PMPoint(0.0668274, -0.364883, 0));
obj0.userData.points.push(new PMPoint(0.551326, -0.364883, 0));
obj0.userData.points.push(new PMPoint(0.611809, -0.348422, 0));
obj0.userData.points.push(new PMPoint(1.02948, -0.102882, 0));
obj0.userData.points.push(new PMPoint(1.06089, 0.580823, 0));
obj0.userData.points.push(new PMPoint(0.576387, 0.580823, 0));
obj0.userData.points.push(new PMPoint(0.110929, 0.454142, 0));
obj0.userData.points.push(new PMPoint(-0.306742, 0.208602, 0));
obj0.userData.points.push(new PMPoint(-0.224523, -0.429335, 0));
obj0.userData.points.push(new PMPoint(-0.157695, -0.794218, 0));
obj0.userData.points.push(new PMPoint(-0.125301, -0.809659, 0));
obj0.userData.points.push(new PMPoint(0.359197, -0.809659, 0));
obj0.userData.points.push(new PMPoint(1.44062, -0.359213, 0));
obj0.userData.points.push(new PMPoint(1.31331, -0.0107907, 0));
obj0.userData.points.push(new PMPoint(1.00285, -0.63448, 0));
obj0.userData.points.push(new PMPoint(1.42052, -0.388941, 0));
obj0.userData.points.push(new PMPoint(1.38667, 0.24554, 0));
obj0.userData.points.push(new PMPoint(1.54538, 0.580823, 0));
obj0.userData.points.push(new PMPoint(0.280962, 0.805167, 0));
obj0.userData.points.push(new PMPoint(0.122247, 0.469884, 0));
obj0.userData.points.push(new PMPoint(0.768515, 0.809133, 0));
obj0.userData.points.push(new PMPoint(0.284017, 0.809133, 0));
obj0.userData.points.push(new PMPoint(0.247267, 0.799131, 0));
obj0.userData.points.push(new PMPoint(-0.170405, 0.553592, 0));
obj0.userData.points.push(new PMPoint(-0.724414, -0.0369373, 0));
obj0.userData.points.push(new PMPoint(-0.417671, -0.24554, 0));
obj0.userData.points.push(new PMPoint(-0.595348, -0.419608, 0));
obj0.userData.points.push(new PMPoint(-0.52852, -0.784491, 0));
obj0.userData.points.push(new PMPoint(0.133655, -1.21915, 0));
obj0.userData.points.push(new PMPoint(0.618154, -1.21915, 0));
obj0.userData.points.push(new PMPoint(0.632423, -1.20977, 0));
obj0.userData.points.push(new PMPoint(0.824552, -0.764992, 0));
obj0.userData.points.push(new PMPoint(1.75536, -0.162897, 0));
obj0.userData.points.push(new PMPoint(1.62805, 0.185526, 0));
obj0.userData.points.push(new PMPoint(0.987132, -1.11872, 0));
obj0.userData.points.push(new PMPoint(1.4048, -0.873185, 0));
obj0.userData.points.push(new PMPoint(1.96306, 0.826363, 0));
obj0.userData.points.push(new PMPoint(1.47856, 0.826363, 0));
obj0.userData.points.push(new PMPoint(0.960644, 1.25391, 0));
obj0.userData.points.push(new PMPoint(0.476145, 1.25391, 0));
obj0.userData.points.push(new PMPoint(1.28541, 1.01016, 0));
obj0.userData.points.push(new PMPoint(0.993038, 1.23847, 0));
obj0.userData.points.push(new PMPoint(-0.581542, 0.809922, 0));
obj0.userData.points.push(new PMPoint(-0.717879, 0.464933, 0));
obj0.userData.points.push(new PMPoint(-0.14377, 1.08519, 0));
obj0.userData.points.push(new PMPoint(-0.561441, 0.83965, 0));
obj0.userData.points.push(new PMPoint(-0.791241, 0.208602, 0));
obj0.userData.points.push(new PMPoint(-1.20891, -0.0369373, 0));
obj0.userData.points.push(new PMPoint(-0.918071, -1.07257, 0));
obj0.userData.points.push(new PMPoint(-0.547246, -1.0823, 0));
obj0.userData.points.push(new PMPoint(-0.98875, -0.702403, 0));
obj0.userData.points.push(new PMPoint(-0.921923, -1.06729, 0));
obj0.userData.points.push(new PMPoint(-0.398527, -1.20977, 0));
obj0.userData.points.push(new PMPoint(-0.139571, -1.61926, 0));
obj0.userData.points.push(new PMPoint(-0.125301, -1.62864, 0));
obj0.userData.points.push(new PMPoint(0.359197, -1.62864, 0));
obj0.userData.points.push(new PMPoint(2.23782, -0.207313, 0));
obj0.userData.points.push(new PMPoint(2.11051, 0.141109, 0));
obj0.userData.points.push(new PMPoint(1.92243, -0.410136, 0));
obj0.userData.points.push(new PMPoint(2.23718, -0.213819, 0));
obj0.userData.points.push(new PMPoint(1.84311, -1.07964, 0));
obj0.userData.points.push(new PMPoint(1.85883, -0.595393, 0));
obj0.userData.points.push(new PMPoint(1.4179, -1.34049, 0));
obj0.userData.points.push(new PMPoint(1.83557, -1.09496, 0));
obj0.userData.points.push(new PMPoint(1.89623, 1.19125, 0));
obj0.userData.points.push(new PMPoint(1.41173, 1.19125, 0));
obj0.userData.points.push(new PMPoint(0.20292, 1.65402, 0));
obj0.userData.points.push(new PMPoint(0.0107907, 1.20924, 0));
obj0.userData.points.push(new PMPoint(0.701688, 1.6634, 0));
obj0.userData.points.push(new PMPoint(0.217189, 1.6634, 0));
obj0.userData.points.push(new PMPoint(-1.05684, 0.903905, 0));
obj0.userData.points.push(new PMPoint(-1.19318, 0.558915, 0));
obj0.userData.points.push(new PMPoint(-0.128057, 1.56943, 0));
obj0.userData.points.push(new PMPoint(-0.545728, 1.32389, 0));
obj0.userData.points.push(new PMPoint(-0.843315, -1.55127, 0));
obj0.userData.points.push(new PMPoint(-0.47249, -1.56099, 0));
obj0.userData.points.push(new PMPoint(-1.38215, -0.985199, 0));
obj0.userData.points.push(new PMPoint(-1.31533, -1.35008, 0));
obj0.userData.points.push(new PMPoint(0.566881, -2.06636, 0));
obj0.userData.points.push(new PMPoint(0.825837, -1.65688, 0));
obj0.userData.points.push(new PMPoint(0.0668274, -2.07341, 0));
obj0.userData.points.push(new PMPoint(0.551326, -2.07341, 0));
obj0.userData.points.push(new PMPoint(2.72028, -0.251729, 0));
obj0.userData.points.push(new PMPoint(2.59297, 0.0966928, 0));
obj0.userData.points.push(new PMPoint(2.10059, -0.860691, 0));
obj0.userData.points.push(new PMPoint(2.41533, -0.664375, 0));
obj0.userData.points.push(new PMPoint(1.47768, -1.82129, 0));
obj0.userData.points.push(new PMPoint(1.89535, -1.57575, 0));
obj0.userData.points.push(new PMPoint(2.18758, 1.2557, 0));
obj0.userData.points.push(new PMPoint(2.12075, 1.62058, 0));
obj0.userData.points.push(new PMPoint(2.08836, 1.63602, 0));
obj0.userData.points.push(new PMPoint(1.60386, 1.63602, 0));
obj0.userData.points.push(new PMPoint(0.960644, 2.07289, 0));
obj0.userData.points.push(new PMPoint(0.476145, 2.07289, 0));
obj0.userData.points.push(new PMPoint(-0.683744, 1.28352, 0));
obj0.userData.points.push(new PMPoint(-1.15904, 1.3775, 0));
obj0.userData.points.push(new PMPoint(-1.19381, 1.36864, 0));
obj0.userData.points.push(new PMPoint(-1.33015, 1.02365, 0));
obj0.userData.points.push(new PMPoint(-0.55882, 1.7912, 0));
obj0.userData.points.push(new PMPoint(-0.976491, 1.54566, 0));
obj0.userData.points.push(new PMPoint(-0.943065, -2.02539, 0));
obj0.userData.points.push(new PMPoint(-0.57224, -2.03511, 0));
obj0.userData.points.push(new PMPoint(-1.09623, -1.52313, 0));
obj0.userData.points.push(new PMPoint(-1.02147, -2.00182, 0));
obj0.userData.points.push(new PMPoint(-1.75298, -0.975472, 0));
obj0.userData.points.push(new PMPoint(-1.68615, -1.34036, 0));
obj0.userData.points.push(new PMPoint(-0.225543, -2.30172, 0));
obj0.userData.points.push(new PMPoint(0.258956, -2.30172, 0));
obj0.userData.points.push(new PMPoint(3.03503, -0.055413, 0));
obj0.userData.points.push(new PMPoint(2.90772, 0.293009, 0));
obj0.userData.points.push(new PMPoint(2.63123, -0.490109, 0));
obj0.userData.points.push(new PMPoint(3.11368, -0.534525, 0));
obj0.userData.points.push(new PMPoint(2.42686, -1.21886, 0));
obj0.userData.points.push(new PMPoint(2.7416, -1.02255, 0));
obj0.userData.points.push(new PMPoint(1.84542, -1.86994, 0));
obj0.userData.points.push(new PMPoint(2.2631, -1.6244, 0));
obj0.userData.points.push(new PMPoint(0.268462, 2.51062, 0));
obj0.userData.points.push(new PMPoint(0.00950562, 2.10113, 0));
obj0.userData.points.push(new PMPoint(0.768515, 2.51766, 0));
obj0.userData.points.push(new PMPoint(0.284017, 2.51766, 0));
obj0.userData.points.push(new PMPoint(-0.6186, 2.272, 0));
obj0.userData.points.push(new PMPoint(-1.03627, 2.02646, 0));
obj0.userData.points.push(new PMPoint(-1.403, -1.73167, 0));
obj0.userData.points.push(new PMPoint(-1.32825, -2.21037, 0));
obj0.userData.points.push(new PMPoint(-1.9775, -1.40481, 0));
obj0.userData.points.push(new PMPoint(-1.91067, -1.76969, 0));
obj0.userData.points.push(new PMPoint(-0.0668274, -2.63701, 0));
obj0.userData.points.push(new PMPoint(0.417671, -2.63701, 0));
obj0.userData.points.push(new PMPoint(0.422181, -2.63483, 0));
obj0.userData.points.push(new PMPoint(0.714551, -2.40652, 0));
obj0.userData.points.push(new PMPoint(3.12792, -0.513584, 0));
obj0.userData.points.push(new PMPoint(3.44267, -0.317268, 0));
obj0.userData.points.push(new PMPoint(3.44617, -0.311743, 0));
obj0.userData.points.push(new PMPoint(3.31886, 0.0366787, 0));
obj0.userData.points.push(new PMPoint(1.87852, -2.23941, 0));
obj0.userData.points.push(new PMPoint(2.29619, -1.99387, 0));
obj0.userData.points.push(new PMPoint(0.835343, 2.88255, 0));
obj0.userData.points.push(new PMPoint(0.350844, 2.88255, 0));
obj0.userData.points.push(new PMPoint(-0.861129, 2.55269, 0));
obj0.userData.points.push(new PMPoint(-1.2788, 2.30715, 0));
obj0.userData.points.push(new PMPoint(0.350844, -2.88255, 0));
obj0.userData.points.push(new PMPoint(0.835343, -2.88255, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 2, 8, 3, 9, 8, 9, 3, 10, 0, 11, 10, 11, 0, 12, 4, 13, 12, 13, 4, 14, 5, 15, 14, 15, 7, 16, 2, 17, 16, 17, 6, 18, 7, 19, 18, 19, 2, 20, 8, 21, 20, 21, 9, 22, 3, 23, 22, 23, 8, 24, 9, 25, 24, 25, 10, 26, 11, 27, 26, 27, 11, 28, 0, 29, 28, 29, 12, 30, 13, 31, 30, 31, 14, 32, 15, 33, 32, 33, 15, 34, 5, 35, 34, 35, 16, 36, 17, 37, 36, 37, 18, 38, 19, 39, 38, 39, 21, 40, 8, 41, 40, 41, 24, 42, 25, 43, 42, 43, 8, 44, 24, 45, 44, 45, 27, 46, 11, 47, 46, 47, 26, 48, 27, 49, 48, 49, 11, 50, 28, 51, 50, 51, 31, 52, 13, 53, 52, 53, 30, 54, 31, 55, 54, 55, 14, 56, 32, 57, 56, 57, 32, 58, 33, 59, 58, 59, 36, 60, 37, 61, 60, 61, 16, 62, 36, 63, 62, 63, 39, 64, 19, 65, 64, 65, 38, 66, 39, 67, 66, 67, 40, 68, 41, 69, 68, 69, 43, 70, 25, 71, 70, 71, 42, 72, 43, 73, 72, 73, 46, 74, 47, 75, 74, 75, 48, 76, 49, 77, 76, 77, 52, 78, 53, 79, 78, 79, 54, 80, 55, 81, 80, 81, 59, 82, 33, 83, 82, 83, 58, 84, 59, 85, 84, 85, 60, 86, 61, 87, 86, 87, 62, 88, 63, 89, 88, 89, 66, 90, 67, 91, 90, 91, 40, 92, 68, 93, 92, 93, 68, 94, 69, 95, 94, 95, 72, 96, 73, 97, 96, 97, 46, 98, 74, 99, 98, 99, 74, 100, 75, 101, 100, 101, 76, 102, 77, 103, 102, 103, 78, 104, 79, 105, 104, 105, 52, 106, 78, 107, 106, 107, 80, 108, 81, 109, 108, 109, 84, 110, 85, 111, 110, 111, 86, 112, 87, 113, 112, 113, 60, 114, 86, 115, 114, 115, 88, 116, 89, 117, 116, 117, 90, 118, 91, 119, 118, 119, 97, 120, 73, 121, 120, 121, 96, 122, 97, 123, 122, 123, 102, 124, 103, 125, 124, 125, 106, 126, 107, 127, 126, 127, 108, 128, 109, 129, 128, 129, 110, 130, 111, 131, 130, 131, 111, 132, 85, 133, 132, 133, 86, 134, 112, 135, 134, 135, 112, 136, 113, 137, 136, 137, 118, 138, 119, 139, 138, 139, 122, 140, 123, 141, 140, 141, 124, 142, 125, 143, 142, 143, 130, 144, 131, 145, 144, 145];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [2, 7, 16, 17], [5, 1, 0, 4], [2, 1, 6, 7], [3, 2, 8, 9], [8, 2, 20, 21], [4, 0, 12, 13], [5, 4, 14, 15], [0, 3, 10, 11], [7, 6, 18, 19], [15, 14, 32, 33], [11, 10, 26, 27], [35, 5, 15, 34], [3, 9, 22, 23], [12, 30, 31, 13], [37, 36, 60, 61], [0, 11, 28, 29], [19, 39, 64, 65], [8, 21, 40, 41], [9, 8, 24, 25], [25, 24, 42, 43], [19, 18, 38, 39], [17, 16, 36, 37], [85, 84, 110, 111], [62, 88, 89, 63], [68, 40, 92, 93], [13, 31, 52, 53], [25, 43, 70, 71], [32, 14, 56, 57], [53, 52, 78, 79], [24, 8, 44, 45], [11, 27, 46, 47], [47, 46, 74, 75], [27, 26, 48, 49], [28, 11, 50, 51], [36, 16, 62, 63], [39, 38, 66, 67], [33, 32, 58, 59], [73, 97, 120, 121], [41, 40, 68, 69], [30, 54, 55, 31], [86, 134, 135, 112], [46, 98, 99, 74], [83, 33, 59, 82], [79, 78, 104, 105], [49, 48, 76, 77], [106, 126, 127, 107], [88, 116, 117, 89], [87, 86, 112, 113], [67, 66, 90, 91], [61, 60, 86, 87], [113, 112, 136, 137], [75, 74, 100, 101], [59, 58, 84, 85], [97, 96, 122, 123], [43, 42, 72, 73], [123, 122, 140, 141], [60, 114, 115, 86], [69, 68, 94, 95], [55, 54, 80, 81], [77, 76, 102, 103], [91, 90, 118, 119], [111, 110, 130, 131], [52, 106, 107, 78], [133, 85, 111, 132], [73, 72, 96, 97], [80, 108, 109, 81], [145, 131, 130, 144], [103, 102, 124, 125], [119, 118, 138, 139], [108, 128, 129, 109], [125, 124, 142, 143]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[131,130],
      [125,124],
      [123,122],
      [119,118],
      [113,112],
      [112,86],
      [85,111],
      [111,110],
      [109,108],
      [107,106],
      [103,102],
      [97,96],
      [73,97],
      [91,90],
      [89,88],
      [86,60],
      [87,86],
      [85,84],
      [81,80],
      [78,52],
      [79,78],
      [77,76],
      [75,74],
      [74,46],
      [73,72],
      [69,68],
      [68,40],
      [67,66],
      [63,62],
      [61,60],
      [59,58],
      [33,59],
      [55,54],
      [53,52],
      [49,48],
      [47,46],
      [43,42],
      [25,43],
      [41,40],
      [39,38],
      [19,39],
      [36,16],
      [37,36],
      [33,32],
      [32,14],
      [31,30],
      [13,31],
      [28,11],
      [27,26],
      [11,27],
      [24,8],
      [25,24],
      [8,21],
      [19,18],
      [17,16],
      [5,15],
      [15,14],
      [13,12],
      [0,11],
      [11,10],
      [9,8],
      [3,9],
      [8,2],
      [7,6],
      [2,7],
      [5,4],
      [4,0],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.72733977414191,
      2.83032172604847,
      2.83032172604847,
      2.92342531916852,
      2.94032472719166,
      3.00503955893601,
      2.94032472719166,
      2.92342531916852,
      2.94032472719166,
      2.72733977414191,
      2.86517901847884,
      2.86517901847884,
      2.84064557471887,
      2.63010371521047,
      2.75059237240233,
      2.72733977414191,
      3.00503955893601,
      2.63010371521047,
      3.00503955893601,
      2.30895442888264,
      2.75059237240233,
      2.84064557471887,
      2.66717644114298,
      2.83032172604847,
      2.84064557471887,
      2.83032172604847,
      2.66717644114298,
      2.86517901847884,
      2.66717644114298,
      2.01547474818493,
      2.86517901847884,
      2.84064557471887,
      2.01547474818493,
      2.66717644114298,
      2.86517901847884,
      2.75059237240233,
      2.86517901847884,
      2.86517901847884,
      2.30895442888264,
      2.84064557471887,
      2.86517901847884,
      2.94032472719166,
      3.00503955893601,
      2.84064557471887,
      2.86517901847884,
      3.00503955893601,
      2.94032472719166,
      2.72733977414191,
      2.63010371521047,
      2.66717644114298,
      2.66717644114298,
      2.63010371521047,
      2.72733977414191,
      2.86517901847884,
      2.94032472719166,
      2.86517901847884,
      2.86517901847884,
      2.94032472719166,
      2.01547474818493,
      2.92342531916852,
      2.92342531916852,
      3.00503955893601,
      2.01547474818493,
      2.83032172604847,
      2.66717644114298,
      2.83032172604847,
      2.66717644114298,
      2.72733977414191,
      2.72733977414191,
      2.30895442888264,
      2.30895442888264];

obj0.userData.subtrees = [[144,145],
      [142,143],
      [140,141],
      [138,139],
      [136,137],
      [134,135],
      [132,133],
      [130,131,144,145],
      [128,129],
      [126,127],
      [124,125,142,143],
      [122,123,140,141],
      [120,121],
      [118,119,138,139],
      [116,117],
      [114,115],
      [112,113,134,135,136,137],
      [110,111,130,131,132,133,144,145],
      [108,109,128,129],
      [106,107,126,127],
      [104,105],
      [102,103,124,125,142,143],
      [100,101],
      [98,99],
      [96,97,120,121,122,123,140,141],
      [94,95],
      [92,93],
      [90,91,118,119,138,139],
      [88,89,116,117],
      [86,87,112,113,114,115,134,135,136,137],
      [84,85,110,111,130,131,132,133,144,145],
      [82,83],
      [80,81,108,109,128,129],
      [78,79,104,105,106,107,126,127],
      [76,77,102,103,124,125,142,143],
      [74,75,98,99,100,101],
      [72,73,96,97,120,121,122,123,140,141],
      [70,71],
      [68,69,92,93,94,95],
      [66,67,90,91,118,119,138,139],
      [64,65],
      [62,63,88,89,116,117],
      [60,61,86,87,112,113,114,115,134,135,136,137],
      [58,59,82,83,84,85,110,111,130,131,132,133,144,145],
      [56,57],
      [54,55,80,81,108,109,128,129],
      [52,53,78,79,104,105,106,107,126,127],
      [50,51],
      [48,49,76,77,102,103,124,125,142,143],
      [46,47,74,75,98,99,100,101],
      [44,45],
      [42,43,70,71,72,73,96,97,120,121,122,123,140,141],
      [40,41,68,69,92,93,94,95],
      [38,39,64,65,66,67,90,91,118,119,138,139],
      [36,37,60,61,62,63,86,87,88,89,112,113,114,115,116,117,134,135,136,137],
      [34,35],
      [32,33,56,57,58,59,82,83,84,85,110,111,130,131,132,133,144,145],
      [30,31,52,53,54,55,78,79,80,81,104,105,106,107,108,109,126,127,128,129],
      [28,29,50,51],
      [26,27,46,47,48,49,74,75,76,77,98,99,100,101,102,103,124,125,142,143],
      [24,25,42,43,44,45,70,71,72,73,96,97,120,121,122,123,140,141],
      [22,23],
      [20,21,40,41,68,69,92,93,94,95],
      [18,19,38,39,64,65,66,67,90,91,118,119,138,139],
      [16,17,36,37,60,61,62,63,86,87,88,89,112,113,114,115,116,117,134,135,136,137],
      [14,15,32,33,34,35,56,57,58,59,82,83,84,85,110,111,130,131,132,133,144,145],
      [12,13,30,31,52,53,54,55,78,79,80,81,104,105,106,107,108,109,126,127,128,129],
      [10,11,26,27,28,29,46,47,48,49,50,51,74,75,76,77,98,99,100,101,102,103,124,125,142,143],
      [8,9,20,21,22,23,24,25,40,41,42,43,44,45,68,69,70,71,72,73,92,93,94,95,96,97,120,121,122,123,140,141],
      [6,7,16,17,18,19,36,37,38,39,60,61,62,63,64,65,66,67,86,87,88,89,90,91,112,113,114,115,116,117,118,119,134,135,136,137,138,139],
      [4,5,12,13,14,15,30,31,32,33,34,35,52,53,54,55,56,57,58,59,78,79,80,81,82,83,84,85,104,105,106,107,108,109,110,111,126,127,128,129,130,131,132,133,144,145]];

obj0.userData.polytoperoot = [[-0.954973779838036,0.697865454497026,0.0367297607630014],
      [-6.05019519882283,3.02509759941141,3.02509759941141],
      [2,1.33333333333333,2.66666666666667]];

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
