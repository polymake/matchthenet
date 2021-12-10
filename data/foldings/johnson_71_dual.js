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
obj0.userData.points.push(new PMPoint(0.592542, 0, 0));
obj0.userData.points.push(new PMPoint(0.591565, 0.349496, 0));
obj0.userData.points.push(new PMPoint(0.59189, -0.354397, 0));
obj0.userData.points.push(new PMPoint(0.570624, 1.02081, 0));
obj0.userData.points.push(new PMPoint(1.11429, 0.0344668, 0));
obj0.userData.points.push(new PMPoint(0.900644, 0.507384, 0));
obj0.userData.points.push(new PMPoint(0.569173, -1.07142, 0));
obj0.userData.points.push(new PMPoint(0.912912, -0.512884, 0));
obj0.userData.points.push(new PMPoint(1.11493, -0.0227092, 0));
obj0.userData.points.push(new PMPoint(-0.00945496, 0.685808, 0));
obj0.userData.points.push(new PMPoint(0.884081, 0.536291, 0));
obj0.userData.points.push(new PMPoint(1.48503, 0.403188, 0));
obj0.userData.points.push(new PMPoint(1.22342, 0.634942, 0));
obj0.userData.points.push(new PMPoint(-0.0376852, -0.688847, 0));
obj0.userData.points.push(new PMPoint(0.895485, -0.544143, 0));
obj0.userData.points.push(new PMPoint(1.25353, -0.632802, 0));
obj0.userData.points.push(new PMPoint(1.5089, -0.377491, 0));
obj0.userData.points.push(new PMPoint(-0.598549, 1.0047, 0));
obj0.userData.points.push(new PMPoint(-0.582742, 1.03231, 0));
obj0.userData.points.push(new PMPoint(1.17437, 0.726534, 0));
obj0.userData.points.push(new PMPoint(1.87671, 0.847816, 0));
obj0.userData.points.push(new PMPoint(1.59382, -0.191667, 0));
obj0.userData.points.push(new PMPoint(1.72427, 0.14173, 0));
obj0.userData.points.push(new PMPoint(-0.331711, -0.490993, 0));
obj0.userData.points.push(new PMPoint(-0.0504143, -1.04663, 0));
obj0.userData.points.push(new PMPoint(1.2032, -0.733119, 0));
obj0.userData.points.push(new PMPoint(1.94881, -0.814505, 0));
obj0.userData.points.push(new PMPoint(-0.600976, 0.333055, 0));
obj0.userData.points.push(new PMPoint(-0.00268095, 1.36552, 0));
obj0.userData.points.push(new PMPoint(1.73564, 1.12286, 0));
obj0.userData.points.push(new PMPoint(1.75139, 0.169416, 0));
obj0.userData.points.push(new PMPoint(2.17026, -0.420177, 0));
obj0.userData.points.push(new PMPoint(-0.620764, -0.294532, 0));
obj0.userData.points.push(new PMPoint(-0.605333, -0.936568, 0));
obj0.userData.points.push(new PMPoint(-0.0860716, -1.04358, 0));
obj0.userData.points.push(new PMPoint(-0.0660859, -1.4074, 0));
obj0.userData.points.push(new PMPoint(1.80801, -1.12124, 0));
obj0.userData.points.push(new PMPoint(-0.89853, 0.511715, 0));
obj0.userData.points.push(new PMPoint(0.0195874, 2.0341, 0));
obj0.userData.points.push(new PMPoint(-0.0116199, 2.03441, 0));
obj0.userData.points.push(new PMPoint(1.11397, 1.4126, 0));
obj0.userData.points.push(new PMPoint(2.30445, -0.2875, 0));
obj0.userData.points.push(new PMPoint(-0.924619, -0.462253, 0));
obj0.userData.points.push(new PMPoint(-0.65235, -0.904027, 0));
obj0.userData.points.push(new PMPoint(-0.531903, -1.46163, 0));
obj0.userData.points.push(new PMPoint(-0.177386, -1.39295, 0));
obj0.userData.points.push(new PMPoint(-0.0830661, -2.12584, 0));
obj0.userData.points.push(new PMPoint(1.17391, -1.46148, 0));
obj0.userData.points.push(new PMPoint(-1.19395, 0.693883, 0));
obj0.userData.points.push(new PMPoint(0.594473, 1.69026, 0));
obj0.userData.points.push(new PMPoint(-0.593244, 1.70209, 0));
obj0.userData.points.push(new PMPoint(1.06458, 2.08064, 0));
obj0.userData.points.push(new PMPoint(2.41851, 0.420757, 0));
obj0.userData.points.push(new PMPoint(-1.21101, -0.658307, 0));
obj0.userData.points.push(new PMPoint(-1.16543, -1.00482, 0));
obj0.userData.points.push(new PMPoint(-0.416051, -2.0708, 0));
obj0.userData.points.push(new PMPoint(-1.06757, -1.181, 0));
obj0.userData.points.push(new PMPoint(-0.889007, -1.48713, 0));
obj0.userData.points.push(new PMPoint(0.553842, -1.79088, 0));
obj0.userData.points.push(new PMPoint(1.16456, -2.18103, 0));
obj0.userData.points.push(new PMPoint(-1.76593, 1.07458, 0));
obj0.userData.points.push(new PMPoint(-1.19703, 2.02746, 0));
obj0.userData.points.push(new PMPoint(-1.1809, 2.05576, 0));
obj0.userData.points.push(new PMPoint(1.6782, 1.80754, 0));
obj0.userData.points.push(new PMPoint(2.4644, 0.772171, 0));
obj0.userData.points.push(new PMPoint(2.6954, 0.193807, 0));
obj0.userData.points.push(new PMPoint(-1.75312, -1.08046, 0));
obj0.userData.points.push(new PMPoint(-0.883904, -1.52696, 0));
obj0.userData.points.push(new PMPoint(-1.57885, -1.48049, 0));
obj0.userData.points.push(new PMPoint(1.797, -1.83979, 0));
obj0.userData.points.push(new PMPoint(-0.580974, 2.3907, 0));
obj0.userData.points.push(new PMPoint(1.99334, 1.65643, 0));
obj0.userData.points.push(new PMPoint(1.63721, 2.15218, 0));
obj0.userData.points.push(new PMPoint(2.71668, 0.222585, 0));
obj0.userData.points.push(new PMPoint(2.97962, 0.682959, 0));
obj0.userData.points.push(new PMPoint(2.97647, -0.0329067, 0));
obj0.userData.points.push(new PMPoint(-1.55967, -1.66578, 0));
obj0.userData.points.push(new PMPoint(1.78433, -2.20067, 0));
obj0.userData.points.push(new PMPoint(-0.272248, 2.54928, 0));
obj0.userData.points.push(new PMPoint(-0.882386, 2.56762, 0));
obj0.userData.points.push(new PMPoint(2.1892, 2.14124, 0));
obj0.userData.points.push(new PMPoint(1.67044, 2.15453, 0));
obj0.userData.points.push(new PMPoint(3.0392, 0.0601642, 0));
obj0.userData.points.push(new PMPoint(3.32507, 0.280785, 0));
obj0.userData.points.push(new PMPoint(-1.12189, -2.19896, 0));
obj0.userData.points.push(new PMPoint(1.77457, -2.55855, 0));
obj0.userData.points.push(new PMPoint(-0.531211, 2.99898, 0));
obj0.userData.points.push(new PMPoint(-0.864034, 2.5957, 0));
obj0.userData.points.push(new PMPoint(-1.18885, 2.74559, 0));
obj0.userData.points.push(new PMPoint(3.58026, 0.531891, 0));
obj0.userData.points.push(new PMPoint(3.46858, 0.868232, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 6, 5, 6, 0, 7, 3, 7, 3, 8, 1, 9, 8, 9, 0, 10, 4, 10, 2, 11, 4, 11, 5, 12, 6, 13, 12, 13, 0, 14, 7, 14, 3, 15, 7, 15, 8, 16, 9, 17, 16, 17, 0, 18, 10, 18, 4, 19, 10, 19, 4, 20, 11, 20, 12, 21, 13, 21, 5, 22, 12, 23, 22, 23, 0, 24, 14, 24, 7, 25, 14, 25, 7, 26, 15, 26, 16, 27, 17, 27, 0, 28, 18, 28, 4, 29, 19, 29, 4, 30, 20, 30, 12, 31, 21, 31, 22, 32, 23, 32, 0, 33, 24, 33, 24, 34, 14, 35, 34, 35, 7, 36, 25, 36, 7, 37, 26, 37, 18, 38, 28, 38, 4, 39, 29, 39, 19, 40, 29, 40, 4, 41, 30, 41, 21, 42, 31, 42, 33, 43, 24, 44, 43, 44, 34, 45, 35, 46, 45, 46, 7, 47, 36, 47, 7, 48, 37, 48, 18, 49, 38, 49, 4, 50, 39, 50, 19, 51, 40, 51, 30, 52, 41, 52, 21, 53, 42, 53, 43, 54, 44, 55, 54, 55, 45, 56, 46, 56, 34, 57, 45, 58, 57, 58, 7, 59, 47, 59, 37, 60, 48, 60, 18, 61, 49, 61, 19, 62, 51, 62, 40, 63, 51, 63, 30, 64, 52, 64, 21, 65, 53, 65, 42, 66, 53, 66, 54, 67, 55, 67, 45, 68, 56, 68, 57, 69, 58, 69, 37, 70, 60, 70, 40, 71, 63, 71, 30, 72, 64, 72, 52, 73, 64, 73, 53, 74, 65, 75, 74, 75, 42, 76, 66, 76, 56, 77, 68, 77, 60, 78, 70, 78, 40, 79, 71, 79, 63, 80, 71, 80, 72, 81, 64, 82, 81, 82, 74, 83, 75, 84, 83, 84, 56, 85, 77, 85, 60, 86, 78, 86, 79, 87, 71, 88, 87, 88, 63, 89, 80, 89, 84, 90, 75, 91, 90, 91];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [0, 2, 4], [0, 4, 10], [3, 0, 7], [2, 11, 4], [7, 0, 14], [11, 20, 4], [0, 10, 18], [15, 3, 7], [0, 18, 28], [15, 7, 26], [14, 0, 24], [13, 12, 21], [10, 4, 19], [0, 33, 24], [12, 31, 21], [19, 4, 29], [17, 16, 27], [20, 30, 4], [7, 14, 25], [23, 22, 32], [4, 30, 41], [7, 25, 36], [29, 4, 39], [26, 7, 37], [28, 18, 38], [4, 50, 39], [37, 7, 48], [38, 18, 49], [7, 36, 47], [19, 29, 40], [31, 42, 21], [59, 7, 47], [19, 40, 51], [21, 42, 53], [49, 18, 61], [46, 45, 56], [41, 30, 52], [19, 51, 62], [45, 68, 56], [52, 30, 64], [54, 67, 55], [21, 53, 65], [37, 48, 60], [57, 69, 58], [30, 72, 64], [37, 60, 70], [53, 42, 66], [51, 40, 63], [66, 42, 76], [63, 40, 71], [52, 64, 73], [68, 77, 56], [40, 79, 71], [85, 56, 77], [70, 60, 78], [78, 60, 86], [63, 71, 80], [63, 80, 89], [2, 1, 5, 6], [6, 5, 12, 13], [12, 5, 22, 23], [9, 8, 16, 17], [9, 1, 3, 8], [53, 74, 75, 65], [74, 83, 84, 75], [75, 84, 90, 91], [79, 87, 88, 71], [72, 81, 82, 64], [14, 24, 34, 35], [35, 34, 45, 46], [34, 57, 58, 45], [43, 54, 55, 44], [33, 43, 44, 24]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[75,84],
      [63,80],
      [71,79],
      [78,60],
      [56,77],
      [75,74],
      [64,72],
      [63,71],
      [71,40],
      [70,60],
      [56,68],
      [66,42],
      [65,53],
      [52,64],
      [64,30],
      [63,40],
      [37,60],
      [58,57],
      [56,45],
      [55,54],
      [53,42],
      [21,53],
      [52,30],
      [51,40],
      [19,51],
      [49,18],
      [37,48],
      [7,47],
      [45,34],
      [46,45],
      [44,43],
      [21,42],
      [41,30],
      [19,40],
      [39,4],
      [38,18],
      [37,7],
      [7,36],
      [35,34],
      [24,33],
      [21,31],
      [4,30],
      [19,29],
      [29,4],
      [28,18],
      [26,7],
      [7,25],
      [14,24],
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

obj0.userData.angles = [2.81713173183941,
      2.80366936866243,
      2.81761137964303,
      2.79590505971916,
      2.79880239183631,
      2.81713173183941,
      2.81743494868872,
      2.80767600514749,
      2.80871915703927,
      2.79317434637608,
      2.7980174961163,
      2.79590505971916,
      2.81377087022845,
      2.80871915703927,
      2.80767600514749,
      2.81069674658737,
      2.79086369950562,
      2.81377087022845,
      2.79590505971916,
      2.81743494868872,
      2.7980174961163,
      2.80019059273487,
      2.81069674658737,
      2.81303849271716,
      2.81303849271716,
      2.80871915703927,
      2.78995622358571,
      2.79086369950562,
      2.81713173183941,
      2.81149791857006,
      2.82169079834798,
      2.79880239183631,
      2.81180144039733,
      2.81485346541789,
      2.81485346541789,
      2.80794347021035,
      2.79086369950562,
      2.79317434637608,
      2.81713173183941,
      2.81743494868872,
      2.80019059273487,
      2.81069674658737,
      2.81552859573866,
      2.81552859573866,
      2.80871915703927,
      2.79317434637608,
      2.79590505971916,
      2.81377087022845,
      2.80366936866243,
      2.81382434776769,
      2.80366936866243,
      2.80871915703927,
      2.81485346541789,
      2.81069674658737,
      2.81149791857006,
      2.79590505971916,
      2.7980174961163,
      2.80019059273487,
      2.82012286618519,
      2.81743494868872,
      2.80794347021035,
      2.81303849271716,
      2.81180144039733,
      2.81713173183941,
      2.7980174961163,
      2.79880239183631,
      2.82169079834798,
      2.80871915703927,
      2.81069674658737,
      2.81377087022845,
      2.80019059273487,
      2.81743494868872,
      2.80767600514749,
      2.80366936866243];

obj0.userData.subtrees = [[90,91],
      [89],
      [87,88],
      [86],
      [85],
      [83,84,90,91],
      [81,82],
      [80,89],
      [79,87,88],
      [78,86],
      [77,85],
      [76],
      [74,75,83,84,90,91],
      [73],
      [72,81,82],
      [71,79,80,87,88,89],
      [70,78,86],
      [69],
      [68,77,85],
      [67],
      [66,76],
      [65,74,75,83,84,90,91],
      [64,72,73,81,82],
      [63,71,79,80,87,88,89],
      [62],
      [61],
      [60,70,78,86],
      [59],
      [57,58,69],
      [56,68,77,85],
      [54,55,67],
      [53,65,66,74,75,76,83,84,90,91],
      [52,64,72,73,81,82],
      [51,62,63,71,79,80,87,88,89],
      [50],
      [49,61],
      [48,60,70,78,86],
      [47,59],
      [45,46,56,57,58,68,69,77,85],
      [43,44,54,55,67],
      [42,53,65,66,74,75,76,83,84,90,91],
      [41,52,64,72,73,81,82],
      [40,51,62,63,71,79,80,87,88,89],
      [39,50],
      [38,49,61],
      [37,48,60,70,78,86],
      [36,47,59],
      [34,35,45,46,56,57,58,68,69,77,85],
      [33,43,44,54,55,67],
      [32],
      [31,42,53,65,66,74,75,76,83,84,90,91],
      [30,41,52,64,72,73,81,82],
      [29,39,40,50,51,62,63,71,79,80,87,88,89],
      [28,38,49,61],
      [27],
      [26,37,48,60,70,78,86],
      [25,36,47,59],
      [24,33,34,35,43,44,45,46,54,55,56,57,58,67,68,69,77,85],
      [22,23,32],
      [21,31,42,53,65,66,74,75,76,83,84,90,91],
      [20,30,41,52,64,72,73,81,82],
      [19,29,39,40,50,51,62,63,71,79,80,87,88,89],
      [18,28,38,49,61],
      [16,17,27],
      [15,26,37,48,60,70,78,86],
      [14,24,25,33,34,35,36,43,44,45,46,47,54,55,56,57,58,59,67,68,69,77,85],
      [12,13,21,22,23,31,32,42,53,65,66,74,75,76,83,84,90,91],
      [11,20,30,41,52,64,72,73,81,82],
      [10,18,19,28,29,38,39,40,49,50,51,61,62,63,71,79,80,87,88,89],
      [8,9,16,17,27],
      [7,14,15,24,25,26,33,34,35,36,37,43,44,45,46,47,48,54,55,56,57,58,59,60,67,68,69,70,77,78,85,86],
      [5,6,12,13,21,22,23,31,32,42,53,65,66,74,75,76,83,84,90,91],
      [4,10,11,18,19,20,28,29,30,38,39,40,41,49,50,51,52,61,62,63,64,71,72,73,79,80,81,82,87,88,89],
      [3,7,8,9,14,15,16,17,24,25,26,27,33,34,35,36,37,43,44,45,46,47,48,54,55,56,57,58,59,60,67,68,69,70,77,78,85,86]];

obj0.userData.polytoperoot = [[0,-0.958662183214029,-0.592485812955447],
      [-0.214028222304165,-1.03430363344176,-0.0142656929055524],
      [-0.612926806846598,0.126808685287292,0.00174901615306682]];

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
