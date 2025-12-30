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
obj0.userData.points.push(new PMPoint(0.334129, 0, 0));
obj0.userData.points.push(new PMPoint(0.167064, 0.289364, 0));
obj0.userData.points.push(new PMPoint(-0.270316, -0.196396, 0));
obj0.userData.points.push(new PMPoint(-0.373567, -0.514171, 0));
obj0.userData.points.push(new PMPoint(-0.270316, -0.831947, 0));
obj0.userData.points.push(new PMPoint(0, -1.02834, 0));
obj0.userData.points.push(new PMPoint(0.334129, -1.02834, 0));
obj0.userData.points.push(new PMPoint(0.604445, -0.831947, 0));
obj0.userData.points.push(new PMPoint(0.707696, -0.514171, 0));
obj0.userData.points.push(new PMPoint(0.604445, -0.196396, 0));
obj0.userData.points.push(new PMPoint(0.132138, 0.621662, 0));
obj0.userData.points.push(new PMPoint(-0.0914374, 0.869969, 0));
obj0.userData.points.push(new PMPoint(-0.418265, 0.939438, 0));
obj0.userData.points.push(new PMPoint(-0.723507, 0.803535, 0));
obj0.userData.points.push(new PMPoint(-0.890571, 0.514171, 0));
obj0.userData.points.push(new PMPoint(-0.855645, 0.181873, 0));
obj0.userData.points.push(new PMPoint(-0.632069, -0.0664331, 0));
obj0.userData.points.push(new PMPoint(-0.305242, -0.135902, 0));
obj0.userData.points.push(new PMPoint(0.639371, -0.135902, 0));
obj0.userData.points.push(new PMPoint(0.966198, -0.0664331, 0));
obj0.userData.points.push(new PMPoint(1.18977, 0.181873, 0));
obj0.userData.points.push(new PMPoint(1.2247, 0.514171, 0));
obj0.userData.points.push(new PMPoint(1.05764, 0.803535, 0));
obj0.userData.points.push(new PMPoint(0.752394, 0.939438, 0));
obj0.userData.points.push(new PMPoint(0.425566, 0.869969, 0));
obj0.userData.points.push(new PMPoint(0.20199, 0.621662, 0));
obj0.userData.points.push(new PMPoint(0.931272, -0.265865, 0));
obj0.userData.points.push(new PMPoint(-0.597143, -0.265865, 0));
obj0.userData.points.push(new PMPoint(-0.643883, -0.317775, 0));
obj0.userData.points.push(new PMPoint(-0.978012, -0.317775, 0));
obj0.userData.points.push(new PMPoint(-1.24833, -0.514171, 0));
obj0.userData.points.push(new PMPoint(-1.35158, -0.831947, 0));
obj0.userData.points.push(new PMPoint(-1.24833, -1.14972, 0));
obj0.userData.points.push(new PMPoint(-0.978012, -1.34612, 0));
obj0.userData.points.push(new PMPoint(-0.643883, -1.34612, 0));
obj0.userData.points.push(new PMPoint(-0.373567, -1.14972, 0));
obj0.userData.points.push(new PMPoint(0.931272, -0.762477, 0));
obj0.userData.points.push(new PMPoint(0.639371, -1.16425, 0));
obj0.userData.points.push(new PMPoint(-0.305242, -1.16425, 0));
obj0.userData.points.push(new PMPoint(-0.270316, -1.22474, 0));
obj0.userData.points.push(new PMPoint(-0.373567, -1.54251, 0));
obj0.userData.points.push(new PMPoint(-0.270316, -1.86029, 0));
obj0.userData.points.push(new PMPoint(0, -2.05669, 0));
obj0.userData.points.push(new PMPoint(0.334129, -2.05669, 0));
obj0.userData.points.push(new PMPoint(0.604445, -1.86029, 0));
obj0.userData.points.push(new PMPoint(0.707696, -1.54251, 0));
obj0.userData.points.push(new PMPoint(0.604445, -1.22474, 0));
obj0.userData.points.push(new PMPoint(-1.16089, 0.317775, 0));
obj0.userData.points.push(new PMPoint(-1.05764, 0.803535, 0));
obj0.userData.points.push(new PMPoint(-0.688581, 1.13583, 0));
obj0.userData.points.push(new PMPoint(0.213804, 1.00587, 0));
obj0.userData.points.push(new PMPoint(0.380869, 1.29524, 0));
obj0.userData.points.push(new PMPoint(0.345943, 1.62753, 0));
obj0.userData.points.push(new PMPoint(0.122367, 1.87584, 0));
obj0.userData.points.push(new PMPoint(-0.20446, 1.94531, 0));
obj0.userData.points.push(new PMPoint(-0.509702, 1.80941, 0));
obj0.userData.points.push(new PMPoint(-0.676766, 1.52004, 0));
obj0.userData.points.push(new PMPoint(-0.641841, 1.18774, 0));
obj0.userData.points.push(new PMPoint(0.23539, 0.939438, 0));
obj0.userData.points.push(new PMPoint(1.29303, -0.135902, 0));
obj0.userData.points.push(new PMPoint(1.49502, 0.317775, 0));
obj0.userData.points.push(new PMPoint(1.52994, 0.378269, 0));
obj0.userData.points.push(new PMPoint(1.85677, 0.447738, 0));
obj0.userData.points.push(new PMPoint(2.08034, 0.696044, 0));
obj0.userData.points.push(new PMPoint(2.11527, 1.02834, 0));
obj0.userData.points.push(new PMPoint(1.94821, 1.31771, 0));
obj0.userData.points.push(new PMPoint(1.64296, 1.45361, 0));
obj0.userData.points.push(new PMPoint(1.31614, 1.38414, 0));
obj0.userData.points.push(new PMPoint(1.09256, 1.13583, 0));
obj0.userData.points.push(new PMPoint(1.02271, 1.13583, 0));
obj0.userData.points.push(new PMPoint(0.956002, -0.737747, 0));
obj0.userData.points.push(new PMPoint(1.17958, -0.489441, 0));
obj0.userData.points.push(new PMPoint(-0.810948, -1.63548, 0));
obj0.userData.points.push(new PMPoint(-1.58246, -1.14972, 0));
obj0.userData.points.push(new PMPoint(-1.85277, -1.34612, 0));
obj0.userData.points.push(new PMPoint(-1.95602, -1.66389, 0));
obj0.userData.points.push(new PMPoint(-1.85277, -1.98167, 0));
obj0.userData.points.push(new PMPoint(-1.58246, -2.17806, 0));
obj0.userData.points.push(new PMPoint(-1.24833, -2.17806, 0));
obj0.userData.points.push(new PMPoint(-0.978012, -1.98167, 0));
obj0.userData.points.push(new PMPoint(-0.874761, -1.66389, 0));
obj0.userData.points.push(new PMPoint(-1.57516, -1.08025, 0));
obj0.userData.points.push(new PMPoint(-1.57516, -0.583641, 0));
obj0.userData.points.push(new PMPoint(0.673914, -1.15877, 0));
obj0.userData.points.push(new PMPoint(1.00074, -1.0893, 0));
obj0.userData.points.push(new PMPoint(0.167064, -2.34605, 0));
obj0.userData.points.push(new PMPoint(0.230877, -2.37446, 0));
obj0.userData.points.push(new PMPoint(0.334129, -2.69224, 0));
obj0.userData.points.push(new PMPoint(0.604445, -2.88863, 0));
obj0.userData.points.push(new PMPoint(0.938574, -2.88863, 0));
obj0.userData.points.push(new PMPoint(1.20889, -2.69224, 0));
obj0.userData.points.push(new PMPoint(1.31214, -2.37446, 0));
obj0.userData.points.push(new PMPoint(1.20889, -2.05669, 0));
obj0.userData.points.push(new PMPoint(0.938574, -1.86029, 0));
obj0.userData.points.push(new PMPoint(0.931272, -1.79082, 0));
obj0.userData.points.push(new PMPoint(0.931272, -1.29421, 0));
obj0.userData.points.push(new PMPoint(-1.08697, 0.784487, 0));
obj0.userData.points.push(new PMPoint(-1.35728, 0.588091, 0));
obj0.userData.points.push(new PMPoint(-0.723507, 1.13766, 0));
obj0.userData.points.push(new PMPoint(-1.05764, 1.13766, 0));
obj0.userData.points.push(new PMPoint(-0.0373958, 2.23467, 0));
obj0.userData.points.push(new PMPoint(-0.0723218, 2.56697, 0));
obj0.userData.points.push(new PMPoint(-0.295898, 2.81528, 0));
obj0.userData.points.push(new PMPoint(-0.622725, 2.88475, 0));
obj0.userData.points.push(new PMPoint(-0.927967, 2.74884, 0));
obj0.userData.points.push(new PMPoint(-1.09503, 2.45948, 0));
obj0.userData.points.push(new PMPoint(-1.06011, 2.12718, 0));
obj0.userData.points.push(new PMPoint(-0.836529, 1.87888, 0));
obj0.userData.points.push(new PMPoint(-0.843831, 1.80941, 0));
obj0.userData.points.push(new PMPoint(0.0191156, 2.19362, 0));
obj0.userData.points.push(new PMPoint(-0.947082, 1.32365, 0));
obj0.userData.points.push(new PMPoint(1.6108, -0.032651, 0));
obj0.userData.points.push(new PMPoint(1.50755, 0.285124, 0));
obj0.userData.points.push(new PMPoint(2.28234, 1.31771, 0));
obj0.userData.points.push(new PMPoint(2.1836, 0.378269, 0));
obj0.userData.points.push(new PMPoint(1.75352, 0.129963, 0));
obj0.userData.points.push(new PMPoint(1.12307, -1.02711, 0));
obj0.userData.points.push(new PMPoint(1.44989, -0.957642, 0));
obj0.userData.points.push(new PMPoint(1.48482, -0.625344, 0));
obj0.userData.points.push(new PMPoint(-2.1796, -1.41559, 0));
obj0.userData.points.push(new PMPoint(-1.8877, -2.31397, 0));
obj0.userData.points.push(new PMPoint(-1.8877, -1.01382, 0));
obj0.userData.points.push(new PMPoint(-1.59989, -0.608371, 0));
obj0.userData.points.push(new PMPoint(-1.82346, -0.856677, 0));
obj0.userData.points.push(new PMPoint(1.24382, -1.72439, 0));
obj0.userData.points.push(new PMPoint(1.17958, -1.56724, 0));
obj0.userData.points.push(new PMPoint(0.956002, -1.31894, 0));
obj0.userData.points.push(new PMPoint(-1.19022, 1.10226, 0));
obj0.userData.points.push(new PMPoint(-1.52435, 1.10226, 0));
obj0.userData.points.push(new PMPoint(-1.6276, 0.784487, 0));
obj0.userData.points.push(new PMPoint(-1.16336, 1.80941, 0));
obj0.userData.points.push(new PMPoint(-1.13319, 1.64234, 0));
obj0.userData.points.push(new PMPoint(-0.966131, 1.35298, 0));
obj0.userData.points.push(new PMPoint(1.7873, 0.120911, 0));
obj0.userData.points.push(new PMPoint(2.11413, 0.0514416, 0));
obj0.userData.points.push(new PMPoint(-1.92224, -1.01929, 0));
obj0.userData.points.push(new PMPoint(-2.24907, -1.08876, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 27, 3, 28, 4, 28, 4, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 5, 36, 35, 36, 8, 37, 9, 37, 7, 38, 8, 38, 5, 39, 6, 39, 6, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 7, 47, 46, 47, 15, 48, 16, 48, 14, 49, 15, 49, 13, 50, 14, 50, 12, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 13, 58, 57, 58, 11, 59, 12, 59, 20, 60, 21, 60, 21, 61, 22, 61, 22, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 23, 69, 68, 69, 23, 70, 24, 70, 9, 71, 27, 72, 71, 72, 34, 73, 35, 73, 33, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 34, 81, 80, 81, 32, 82, 33, 82, 31, 83, 32, 83, 8, 84, 37, 85, 84, 85, 43, 86, 44, 86, 44, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 45, 94, 93, 94, 45, 95, 46, 95, 46, 96, 47, 96, 15, 97, 48, 98, 97, 98, 14, 99, 49, 100, 99, 100, 55, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 56, 108, 107, 108, 56, 109, 57, 109, 54, 110, 55, 110, 57, 111, 58, 111, 60, 112, 21, 113, 112, 113, 65, 114, 66, 114, 63, 115, 64, 115, 62, 116, 63, 116, 71, 117, 117, 118, 72, 119, 118, 119, 75, 120, 76, 120, 77, 121, 78, 121, 74, 122, 75, 122, 32, 123, 82, 124, 123, 124, 93, 125, 94, 125, 95, 126, 46, 127, 126, 127, 97, 128, 128, 129, 98, 130, 129, 130, 107, 131, 108, 131, 109, 132, 57, 133, 132, 133, 63, 134, 115, 135, 134, 135, 75, 136, 120, 137, 136, 137];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [27, 10, 9], [3, 28, 4], [21, 20, 60], [21, 60, 112, 113], [29, 30, 31, 32, 33, 34, 35, 36, 5, 4], [9, 8, 37], [27, 9, 71, 72], [97, 128, 129, 130, 98], [8, 7, 38], [6, 5, 39], [101, 102, 103, 104, 105, 106, 107, 108, 56, 55], [108, 107, 131], [57, 109, 132, 133], [94, 93, 125], [46, 95, 126, 127], [120, 76, 75], [35, 34, 73], [44, 43, 86], [121, 78, 77], [34, 33, 74, 75, 76, 77, 78, 79, 80, 81], [66, 65, 114], [91, 92, 93, 94, 45, 44, 87, 88, 89, 90], [46, 45, 95], [75, 74, 122], [120, 75, 136, 137], [33, 32, 82], [64, 63, 115], [7, 6, 40, 41, 42, 43, 44, 45, 46, 47], [47, 46, 96], [8, 84, 85, 37], [32, 31, 83], [32, 123, 124, 82], [57, 56, 109], [54, 110, 55], [63, 62, 116], [63, 134, 135, 115], [72, 71, 117, 118, 119], [16, 15, 48], [58, 57, 111], [14, 99, 100, 49], [22, 21, 61], [15, 14, 49], [15, 97, 98, 48], [23, 22, 62, 63, 64, 65, 66, 67, 68, 69], [14, 13, 50], [24, 23, 70], [51, 52, 53, 54, 55, 56, 57, 58, 13, 12], [11, 59, 12], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[120,75],
      [115,63],
      [57,109],
      [108,107],
      [98,97],
      [46,95],
      [94,93],
      [82,32],
      [75,74],
      [78,77],
      [76,75],
      [72,71],
      [63,62],
      [64,63],
      [66,65],
      [21,60],
      [58,57],
      [55,54],
      [57,56],
      [56,55],
      [49,14],
      [48,15],
      [47,46],
      [46,45],
      [45,44],
      [44,43],
      [37,8],
      [32,31],
      [33,32],
      [34,33],
      [35,34],
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
      [7,6],
      [6,5],
      [8,7],
      [9,8],
      [5,4],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [3.04280887270247,
      3.04280887270247,
      3.04280887270247,
      2.68680207558007,
      2.58801829469275,
      3.04280887270247,
      2.68680207558007,
      3.04280887270247,
      2.68680207558007,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.68680207558007,
      2.48923451380543,
      2.48923451380542,
      2.77672882547631,
      2.68680207558007,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.77672882547631,
      3.04280887270247,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.77672882547631,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      3.04280887270247,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543];

obj0.userData.subtrees = [[136,137],
      [134,135],
      [132,133],
      [131],
      [128,129,130],
      [126,127],
      [125],
      [123,124],
      [122],
      [121],
      [120,136,137],
      [117,118,119],
      [116],
      [115,134,135],
      [114],
      [112,113],
      [111],
      [110],
      [109,132,133],
      [101,102,103,104,105,106,107,108,131],
      [99,100],
      [97,98,128,129,130],
      [96],
      [95,126,127],
      [87,88,89,90,91,92,93,94,125],
      [86],
      [84,85],
      [83],
      [82,123,124],
      [74,75,76,77,78,79,80,81,120,121,122,136,137],
      [73],
      [71,72,117,118,119],
      [70],
      [62,63,64,65,66,67,68,69,114,115,116,134,135],
      [61],
      [60,112,113],
      [59],
      [51,52,53,54,55,56,57,58,101,102,103,104,105,106,107,108,109,110,111,131,132,133],
      [50],
      [49,99,100],
      [48,97,98,128,129,130],
      [40,41,42,43,44,45,46,47,86,87,88,89,90,91,92,93,94,95,96,125,126,127],
      [39],
      [38],
      [37,84,85],
      [29,30,31,32,33,34,35,36,73,74,75,76,77,78,79,80,81,82,83,120,121,122,123,124,136,137],
      [28],
      [27,71,72,117,118,119],
      [19,20,21,22,23,24,25,26,60,61,62,63,64,65,66,67,68,69,70,112,113,114,115,116,134,135],
      [11,12,13,14,15,16,17,18,48,49,50,51,52,53,54,55,56,57,58,59,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,128,129,130,131,132,133],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,117,118,119,120,121,122,123,124,125,126,127,136,137]];

obj0.userData.polytoperoot = [[0.874760616278226,-0.167064411699239,-0.437380308139113],
      [2.6180339887499,0,-1],
      [0.334128823398478,0,0.874760616278226]];

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
