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
obj0.userData.points.push(new PMPoint(0.33337, 0, 0));
obj0.userData.points.push(new PMPoint(0.166685, 0.288707, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -0.19595, 0));
obj0.userData.points.push(new PMPoint(-0.372719, -0.513004, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -0.830058, 0));
obj0.userData.points.push(new PMPoint(0, -1.02601, 0));
obj0.userData.points.push(new PMPoint(0.33337, -1.02601, 0));
obj0.userData.points.push(new PMPoint(0.603072, -0.830058, 0));
obj0.userData.points.push(new PMPoint(0.706089, -0.513004, 0));
obj0.userData.points.push(new PMPoint(0.603072, -0.19595, 0));
obj0.userData.points.push(new PMPoint(0.131838, 0.620251, 0));
obj0.userData.points.push(new PMPoint(-0.0912298, 0.867993, 0));
obj0.userData.points.push(new PMPoint(-0.417315, 0.937305, 0));
obj0.userData.points.push(new PMPoint(-0.721864, 0.801711, 0));
obj0.userData.points.push(new PMPoint(-0.888549, 0.513004, 0));
obj0.userData.points.push(new PMPoint(-0.853702, 0.18146, 0));
obj0.userData.points.push(new PMPoint(-0.630634, -0.0662823, 0));
obj0.userData.points.push(new PMPoint(-0.304549, -0.135594, 0));
obj0.userData.points.push(new PMPoint(0.637919, -0.135594, 0));
obj0.userData.points.push(new PMPoint(0.964004, -0.0662823, 0));
obj0.userData.points.push(new PMPoint(1.18707, 0.18146, 0));
obj0.userData.points.push(new PMPoint(1.22192, 0.513004, 0));
obj0.userData.points.push(new PMPoint(1.05523, 0.801711, 0));
obj0.userData.points.push(new PMPoint(0.750685, 0.937305, 0));
obj0.userData.points.push(new PMPoint(0.4246, 0.867993, 0));
obj0.userData.points.push(new PMPoint(0.201532, 0.620251, 0));
obj0.userData.points.push(new PMPoint(1.03217, -0.582316, 0));
obj0.userData.points.push(new PMPoint(0.929158, -0.265262, 0));
obj0.userData.points.push(new PMPoint(-0.595787, -0.265262, 0));
obj0.userData.points.push(new PMPoint(-0.698805, -0.582316, 0));
obj0.userData.points.push(new PMPoint(0.920126, -0.933075, 0));
obj0.userData.points.push(new PMPoint(1.02314, -0.616021, 0));
obj0.userData.points.push(new PMPoint(-0.689773, -0.616021, 0));
obj0.userData.points.push(new PMPoint(-0.586756, -0.933075, 0));
obj0.userData.points.push(new PMPoint(0.637919, -1.1616, 0));
obj0.userData.points.push(new PMPoint(0.907621, -0.965652, 0));
obj0.userData.points.push(new PMPoint(-0.574251, -0.965652, 0));
obj0.userData.points.push(new PMPoint(-0.304549, -1.1616, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -1.22196, 0));
obj0.userData.points.push(new PMPoint(-0.372719, -1.53901, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -1.85607, 0));
obj0.userData.points.push(new PMPoint(0, -2.05202, 0));
obj0.userData.points.push(new PMPoint(0.33337, -2.05202, 0));
obj0.userData.points.push(new PMPoint(0.603072, -1.85607, 0));
obj0.userData.points.push(new PMPoint(0.706089, -1.53901, 0));
obj0.userData.points.push(new PMPoint(0.603072, -1.22196, 0));
obj0.userData.points.push(new PMPoint(-1.10144, -0.0416082, 0));
obj0.userData.points.push(new PMPoint(-0.878376, -0.289351, 0));
obj0.userData.points.push(new PMPoint(-1.15825, 0.317054, 0));
obj0.userData.points.push(new PMPoint(-1.1234, -0.0144901, 0));
obj0.userData.points.push(new PMPoint(-0.756711, 1.13326, 0));
obj0.userData.points.push(new PMPoint(-0.979779, 1.381, 0));
obj0.userData.points.push(new PMPoint(-1.30586, 1.45031, 0));
obj0.userData.points.push(new PMPoint(-1.61041, 1.31472, 0));
obj0.userData.points.push(new PMPoint(-1.7771, 1.02601, 0));
obj0.userData.points.push(new PMPoint(-1.74225, 0.694464, 0));
obj0.userData.points.push(new PMPoint(-1.51918, 0.446722, 0));
obj0.userData.points.push(new PMPoint(-1.1931, 0.37741, 0));
obj0.userData.points.push(new PMPoint(-0.687017, 1.13326, 0));
obj0.userData.points.push(new PMPoint(0.213319, 1.00359, 0));
obj0.userData.points.push(new PMPoint(0.380004, 1.29229, 0));
obj0.userData.points.push(new PMPoint(0.345157, 1.62384, 0));
obj0.userData.points.push(new PMPoint(0.122089, 1.87158, 0));
obj0.userData.points.push(new PMPoint(-0.203996, 1.94089, 0));
obj0.userData.points.push(new PMPoint(-0.508545, 1.8053, 0));
obj0.userData.points.push(new PMPoint(-0.67523, 1.51659, 0));
obj0.userData.points.push(new PMPoint(-0.640383, 1.18505, 0));
obj0.userData.points.push(new PMPoint(0.234855, 0.937305, 0));
obj0.userData.points.push(new PMPoint(1.21175, -0.289351, 0));
obj0.userData.points.push(new PMPoint(1.43481, -0.0416082, 0));
obj0.userData.points.push(new PMPoint(1.45677, -0.0144901, 0));
obj0.userData.points.push(new PMPoint(1.49162, 0.317054, 0));
obj0.userData.points.push(new PMPoint(1.52647, 0.37741, 0));
obj0.userData.points.push(new PMPoint(1.85255, 0.446722, 0));
obj0.userData.points.push(new PMPoint(2.07562, 0.694464, 0));
obj0.userData.points.push(new PMPoint(2.11047, 1.02601, 0));
obj0.userData.points.push(new PMPoint(1.94378, 1.31472, 0));
obj0.userData.points.push(new PMPoint(1.63923, 1.45031, 0));
obj0.userData.points.push(new PMPoint(1.31315, 1.381, 0));
obj0.userData.points.push(new PMPoint(1.09008, 1.13326, 0));
obj0.userData.points.push(new PMPoint(1.02039, 1.13326, 0));
obj0.userData.points.push(new PMPoint(1.18983, -1.12903, 0));
obj0.userData.points.push(new PMPoint(1.45953, -0.933075, 0));
obj0.userData.points.push(new PMPoint(1.35651, -0.616021, 0));
obj0.userData.points.push(new PMPoint(-1.02314, -0.616021, 0));
obj0.userData.points.push(new PMPoint(-1.12616, -0.933075, 0));
obj0.userData.points.push(new PMPoint(-0.856458, -1.12903, 0));
obj0.userData.points.push(new PMPoint(0.833869, -1.4313, 0));
obj0.userData.points.push(new PMPoint(1.10357, -1.23535, 0));
obj0.userData.points.push(new PMPoint(-0.770201, -1.23535, 0));
obj0.userData.points.push(new PMPoint(-0.500499, -1.4313, 0));
obj0.userData.points.push(new PMPoint(-0.698805, -1.4697, 0));
obj0.userData.points.push(new PMPoint(-0.595787, -1.78675, 0));
obj0.userData.points.push(new PMPoint(0.166685, -2.34072, 0));
obj0.userData.points.push(new PMPoint(-0.603072, -1.85607, 0));
obj0.userData.points.push(new PMPoint(-0.872775, -2.05202, 0));
obj0.userData.points.push(new PMPoint(-0.975792, -2.36907, 0));
obj0.userData.points.push(new PMPoint(-0.872775, -2.68612, 0));
obj0.userData.points.push(new PMPoint(-0.603072, -2.88207, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -2.88207, 0));
obj0.userData.points.push(new PMPoint(0, -2.68612, 0));
obj0.userData.points.push(new PMPoint(0.103017, -2.36907, 0));
obj0.userData.points.push(new PMPoint(0.230353, -2.36907, 0));
obj0.userData.points.push(new PMPoint(0.33337, -2.68612, 0));
obj0.userData.points.push(new PMPoint(0.603072, -2.88207, 0));
obj0.userData.points.push(new PMPoint(0.936443, -2.88207, 0));
obj0.userData.points.push(new PMPoint(1.20614, -2.68612, 0));
obj0.userData.points.push(new PMPoint(1.30916, -2.36907, 0));
obj0.userData.points.push(new PMPoint(1.20614, -2.05202, 0));
obj0.userData.points.push(new PMPoint(0.936443, -1.85607, 0));
obj0.userData.points.push(new PMPoint(0.929158, -1.78675, 0));
obj0.userData.points.push(new PMPoint(1.03217, -1.4697, 0));
obj0.userData.points.push(new PMPoint(-1.4898, 0.282207, 0));
obj0.userData.points.push(new PMPoint(-1.45495, -0.0493367, 0));
obj0.userData.points.push(new PMPoint(-1.7771, 1.60342, 0));
obj0.userData.points.push(new PMPoint(-1.94378, 1.31472, 0));
obj0.userData.points.push(new PMPoint(-1.84527, 0.37741, 0));
obj0.userData.points.push(new PMPoint(-1.6222, 0.129668, 0));
obj0.userData.points.push(new PMPoint(-1.44146, 1.75486, 0));
obj0.userData.points.push(new PMPoint(-1.74601, 1.61926, 0));
obj0.userData.points.push(new PMPoint(-1.0828, 1.69805, 0));
obj0.userData.points.push(new PMPoint(-1.40888, 1.76736, 0));
obj0.userData.points.push(new PMPoint(-0.33959, 2.24544, 0));
obj0.userData.points.push(new PMPoint(-0.644139, 2.10985, 0));
obj0.userData.points.push(new PMPoint(0.0190722, 2.18863, 0));
obj0.userData.points.push(new PMPoint(-0.307013, 2.25795, 0));
obj0.userData.points.push(new PMPoint(1.78832, -0.0493367, 0));
obj0.userData.points.push(new PMPoint(1.82317, 0.282207, 0));
obj0.userData.points.push(new PMPoint(2.27715, 1.31472, 0));
obj0.userData.points.push(new PMPoint(2.11047, 1.60342, 0));
obj0.userData.points.push(new PMPoint(2.07938, 1.61926, 0));
obj0.userData.points.push(new PMPoint(1.77483, 1.75486, 0));
obj0.userData.points.push(new PMPoint(1.95557, 0.129668, 0));
obj0.userData.points.push(new PMPoint(2.17864, 0.37741, 0));
obj0.userData.points.push(new PMPoint(1.38578, -1.39873, 0));
obj0.userData.points.push(new PMPoint(1.65548, -1.20278, 0));
obj0.userData.points.push(new PMPoint(-1.32211, -1.20278, 0));
obj0.userData.points.push(new PMPoint(-1.05241, -1.39873, 0));
obj0.userData.points.push(new PMPoint(-0.603072, -3.21544, 0));
obj0.userData.points.push(new PMPoint(-0.269702, -3.21544, 0));
obj0.userData.points.push(new PMPoint(-0.234855, -3.21362, 0));
obj0.userData.points.push(new PMPoint(0.0348467, -3.01767, 0));
obj0.userData.points.push(new PMPoint(0.603072, -3.21544, 0));
obj0.userData.points.push(new PMPoint(0.936443, -3.21544, 0));
obj0.userData.points.push(new PMPoint(-1.4763, 2.0864, 0));
obj0.userData.points.push(new PMPoint(-1.80239, 2.15571, 0));
obj0.userData.points.push(new PMPoint(-1.96908, 1.86701, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 28, 27, 28, 3, 29, 4, 30, 29, 30, 8, 31, 9, 32, 31, 32, 4, 33, 5, 34, 33, 34, 7, 35, 8, 36, 35, 36, 5, 37, 6, 38, 37, 38, 6, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 7, 46, 45, 46, 16, 47, 17, 48, 47, 48, 15, 49, 16, 50, 49, 50, 14, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 15, 58, 57, 58, 13, 59, 14, 59, 12, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 13, 67, 66, 67, 11, 68, 12, 68, 20, 69, 21, 70, 69, 70, 21, 71, 22, 72, 71, 72, 22, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 23, 80, 79, 80, 23, 81, 24, 81, 31, 82, 82, 83, 32, 84, 83, 84, 33, 85, 85, 86, 34, 87, 86, 87, 35, 88, 36, 89, 88, 89, 37, 90, 38, 91, 90, 91, 40, 92, 41, 93, 92, 93, 42, 94, 43, 94, 41, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 42, 102, 101, 102, 43, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 44, 110, 109, 110, 44, 111, 45, 112, 111, 112, 49, 113, 50, 114, 113, 114, 54, 115, 55, 116, 115, 116, 56, 117, 57, 118, 117, 118, 53, 119, 54, 120, 119, 120, 52, 121, 53, 122, 121, 122, 64, 123, 65, 124, 123, 124, 63, 125, 64, 126, 125, 126, 71, 127, 72, 128, 127, 128, 76, 129, 77, 130, 129, 130, 77, 131, 78, 132, 131, 132, 74, 133, 75, 134, 133, 134, 82, 135, 83, 136, 135, 136, 86, 137, 87, 138, 137, 138, 99, 139, 100, 140, 139, 140, 100, 141, 101, 142, 141, 142, 105, 143, 106, 144, 143, 144, 119, 145, 145, 146, 120, 147, 146, 147];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [28, 10, 9, 27], [3, 29, 30, 4], [21, 20, 69, 70], [17, 16, 47, 48], [9, 8, 31, 32], [5, 4, 33, 34], [33, 85, 86, 87, 34], [8, 7, 35, 36], [6, 5, 37, 38], [65, 64, 123, 124], [38, 37, 90, 91], [83, 82, 135, 136], [137, 138, 87, 86], [41, 40, 92, 93], [99, 139, 140, 100], [43, 42, 94], [142, 101, 100, 141], [106, 105, 143, 144], [97, 98, 99, 100, 101, 102, 42, 41, 95, 96], [55, 54, 115, 116], [77, 76, 129, 130], [107, 108, 109, 110, 44, 43, 103, 104, 105, 106], [145, 146, 147, 120, 119], [45, 44, 111, 112], [57, 56, 117, 118], [54, 53, 119, 120], [78, 77, 131, 132], [75, 74, 133, 134], [7, 6, 39, 40, 41, 42, 43, 44, 45, 46], [35, 88, 89, 36], [49, 113, 114, 50], [52, 121, 122, 53], [63, 125, 126, 64], [72, 71, 127, 128], [84, 32, 31, 82, 83], [16, 15, 49, 50], [22, 21, 71, 72], [15, 14, 51, 52, 53, 54, 55, 56, 57, 58], [23, 22, 73, 74, 75, 76, 77, 78, 79, 80], [14, 13, 59], [24, 23, 81], [60, 61, 62, 63, 64, 65, 66, 67, 13, 12], [11, 68, 12], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[120,119],
      [106,105],
      [101,100],
      [100,99],
      [87,86],
      [83,82],
      [75,74],
      [78,77],
      [77,76],
      [72,71],
      [64,63],
      [65,64],
      [53,52],
      [54,53],
      [57,56],
      [55,54],
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

obj0.userData.angles = [2.58801829469275,
      2.58801829469275,
      2.48923451380542,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.77672882547631,
      2.48923451380543,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.0344439357957,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
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
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

obj0.userData.subtrees = [[145,146,147],
      [143,144],
      [141,142],
      [139,140],
      [137,138],
      [135,136],
      [133,134],
      [131,132],
      [129,130],
      [127,128],
      [125,126],
      [123,124],
      [121,122],
      [119,120,145,146,147],
      [117,118],
      [115,116],
      [113,114],
      [111,112],
      [103,104,105,106,107,108,109,110,143,144],
      [95,96,97,98,99,100,101,102,139,140,141,142],
      [94],
      [92,93],
      [90,91],
      [88,89],
      [85,86,87,137,138],
      [82,83,84,135,136],
      [81],
      [73,74,75,76,77,78,79,80,129,130,131,132,133,134],
      [71,72,127,128],
      [69,70],
      [68],
      [60,61,62,63,64,65,66,67,123,124,125,126],
      [59],
      [51,52,53,54,55,56,57,58,115,116,117,118,119,120,121,122,145,146,147],
      [49,50,113,114],
      [47,48],
      [39,40,41,42,43,44,45,46,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,139,140,141,142,143,144],
      [37,38,90,91],
      [35,36,88,89],
      [33,34,85,86,87,137,138],
      [31,32,82,83,84,135,136],
      [29,30],
      [27,28],
      [19,20,21,22,23,24,25,26,69,70,71,72,73,74,75,76,77,78,79,80,81,127,128,129,130,131,132,133,134],
      [11,12,13,14,15,16,17,18,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,113,114,115,116,117,118,119,120,121,122,123,124,125,126,145,146,147],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,135,136,137,138,139,140,141,142,143,144]];

obj0.userData.polytoperoot = [[0.908009793223684,-0.166685108168695,-0.422928616047803],
      [2.61803398874989,0,-1],
      [0.33337021633739,0,0.872774557208193]];

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
