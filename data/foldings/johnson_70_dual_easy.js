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
obj0.userData.points.push(new PMPoint(0.478445, 0, 0));
obj0.userData.points.push(new PMPoint(0.65391, 0.306271, 0));
obj0.userData.points.push(new PMPoint(0.569604, 0.353035, 0));
obj0.userData.points.push(new PMPoint(0.569604, -0.353035, 0));
obj0.userData.points.push(new PMPoint(0.65391, -0.306271, 0));
obj0.userData.points.push(new PMPoint(0.527647, 1.04782, 0));
obj0.userData.points.push(new PMPoint(0.824927, 0.621103, 0));
obj0.userData.points.push(new PMPoint(0.562328, 1.04904, 0));
obj0.userData.points.push(new PMPoint(0.668562, -0.297398, 0));
obj0.userData.points.push(new PMPoint(1.1028, 0.0151533, 0));
obj0.userData.points.push(new PMPoint(0.527647, -1.04782, 0));
obj0.userData.points.push(new PMPoint(0.562328, -1.04904, 0));
obj0.userData.points.push(new PMPoint(0.824927, -0.621103, 0));
obj0.userData.points.push(new PMPoint(-0.0487302, 0.662754, 0));
obj0.userData.points.push(new PMPoint(1.19044, 0.629795, 0));
obj0.userData.points.push(new PMPoint(1.18794, 0.730478, 0));
obj0.userData.points.push(new PMPoint(1.13274, 0.0675831, 0));
obj0.userData.points.push(new PMPoint(1.19041, 0.611456, 0));
obj0.userData.points.push(new PMPoint(0.88796, -0.580647, 0));
obj0.userData.points.push(new PMPoint(1.24714, -0.512377, 0));
obj0.userData.points.push(new PMPoint(-0.0487302, -0.662754, 0));
obj0.userData.points.push(new PMPoint(1.18794, -0.730478, 0));
obj0.userData.points.push(new PMPoint(1.19044, -0.629795, 0));
obj0.userData.points.push(new PMPoint(-0.640438, 0.930428, 0));
obj0.userData.points.push(new PMPoint(-0.627539, 0.957284, 0));
obj0.userData.points.push(new PMPoint(1.56491, 0.639261, 0));
obj0.userData.points.push(new PMPoint(1.83289, 1.11665, 0));
obj0.userData.points.push(new PMPoint(1.81081, 1.15135, 0));
obj0.userData.points.push(new PMPoint(1.67372, 0.196702, 0));
obj0.userData.points.push(new PMPoint(1.56117, 0.557999, 0));
obj0.userData.points.push(new PMPoint(1.60449, -0.400021, 0));
obj0.userData.points.push(new PMPoint(1.6575, -0.0253308, 0));
obj0.userData.points.push(new PMPoint(-0.640438, -0.930428, 0));
obj0.userData.points.push(new PMPoint(-0.627539, -0.957284, 0));
obj0.userData.points.push(new PMPoint(1.83289, -1.11665, 0));
obj0.userData.points.push(new PMPoint(1.56491, -0.639261, 0));
obj0.userData.points.push(new PMPoint(1.81081, -1.15135, 0));
obj0.userData.points.push(new PMPoint(-0.597893, 0.285366, 0));
obj0.userData.points.push(new PMPoint(-0.101052, 1.34158, 0));
obj0.userData.points.push(new PMPoint(1.75412, 0.311538, 0));
obj0.userData.points.push(new PMPoint(1.84435, 0.362832, 0));
obj0.userData.points.push(new PMPoint(1.12693, 1.46173, 0));
obj0.userData.points.push(new PMPoint(2.03147, -0.74266, 0));
obj0.userData.points.push(new PMPoint(1.76037, -0.0391824, 0));
obj0.userData.points.push(new PMPoint(-0.597893, -0.285366, 0));
obj0.userData.points.push(new PMPoint(-0.101052, -1.34158, 0));
obj0.userData.points.push(new PMPoint(1.12693, -1.46173, 0));
obj0.userData.points.push(new PMPoint(-1.14196, -0.0637891, 0));
obj0.userData.points.push(new PMPoint(-0.156549, 2.0333, 0));
obj0.userData.points.push(new PMPoint(-0.189202, 2.0299, 0));
obj0.userData.points.push(new PMPoint(2.50815, 0.00539969, 0));
obj0.userData.points.push(new PMPoint(1.02917, 2.1542, 0));
obj0.userData.points.push(new PMPoint(1.06581, 2.15839, 0));
obj0.userData.points.push(new PMPoint(-0.156549, -2.0333, 0));
obj0.userData.points.push(new PMPoint(-0.189202, -2.0299, 0));
obj0.userData.points.push(new PMPoint(1.02917, -2.1542, 0));
obj0.userData.points.push(new PMPoint(1.06581, -2.15839, 0));
obj0.userData.points.push(new PMPoint(-1.1845, 0.581273, 0));
obj0.userData.points.push(new PMPoint(-0.731627, 1.59833, 0));
obj0.userData.points.push(new PMPoint(2.49669, 0.759221, 0));
obj0.userData.points.push(new PMPoint(1.71749, 1.89726, 0));
obj0.userData.points.push(new PMPoint(-0.731627, -1.59833, 0));
obj0.userData.points.push(new PMPoint(1.71749, -1.89726, 0));
obj0.userData.points.push(new PMPoint(-1.76934, 0.89252, 0));
obj0.userData.points.push(new PMPoint(-1.7824, 0.866639, 0));
obj0.userData.points.push(new PMPoint(-1.35873, 1.81822, 0));
obj0.userData.points.push(new PMPoint(-1.34799, 1.84675, 0));
obj0.userData.points.push(new PMPoint(2.58378, 0.815684, 0));
obj0.userData.points.push(new PMPoint(2.38007, 1.13459, 0));
obj0.userData.points.push(new PMPoint(2.77613, 0.482792, 0));
obj0.userData.points.push(new PMPoint(2.58692, 0.810516, 0));
obj0.userData.points.push(new PMPoint(2.02163, 1.65659, 0));
obj0.userData.points.push(new PMPoint(1.79832, 1.95734, 0));
obj0.userData.points.push(new PMPoint(1.79491, 1.96167, 0));
obj0.userData.points.push(new PMPoint(1.5608, 2.2425, 0));
obj0.userData.points.push(new PMPoint(-1.35873, -1.81822, 0));
obj0.userData.points.push(new PMPoint(-1.34799, -1.84675, 0));
obj0.userData.points.push(new PMPoint(1.79832, -1.95734, 0));
obj0.userData.points.push(new PMPoint(2.02163, -1.65659, 0));
obj0.userData.points.push(new PMPoint(1.5608, -2.2425, 0));
obj0.userData.points.push(new PMPoint(1.79491, -1.96167, 0));
obj0.userData.points.push(new PMPoint(-0.838133, 2.28164, 0));
obj0.userData.points.push(new PMPoint(3.03116, 1.14611, 0));
obj0.userData.points.push(new PMPoint(2.57814, 1.45253, 0));
obj0.userData.points.push(new PMPoint(3.14957, 0.512131, 0));
obj0.userData.points.push(new PMPoint(3.08629, 1.05538, 0));
obj0.userData.points.push(new PMPoint(1.68516, 2.5785, 0));
obj0.userData.points.push(new PMPoint(1.59446, 2.61117, 0));
obj0.userData.points.push(new PMPoint(2.18596, 2.34403, 0));
obj0.userData.points.push(new PMPoint(1.70186, 2.57185, 0));
obj0.userData.points.push(new PMPoint(-0.838133, -2.28164, 0));
obj0.userData.points.push(new PMPoint(1.59446, -2.61117, 0));
obj0.userData.points.push(new PMPoint(1.68516, -2.5785, 0));
obj0.userData.points.push(new PMPoint(1.70186, -2.57185, 0));
obj0.userData.points.push(new PMPoint(2.18596, -2.34403, 0));
obj0.userData.points.push(new PMPoint(-0.856974, 2.37619, 0));
obj0.userData.points.push(new PMPoint(-1.20215, 2.30243, 0));
obj0.userData.points.push(new PMPoint(2.22245, 2.87782, 0));
obj0.userData.points.push(new PMPoint(1.8695, 2.88246, 0));
obj0.userData.points.push(new PMPoint(-1.20215, -2.30243, 0));
obj0.userData.points.push(new PMPoint(-0.856974, -2.37619, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 0, 6, 3, 6, 2, 7, 3, 8, 7, 8, 1, 9, 2, 10, 9, 10, 0, 11, 4, 11, 4, 12, 5, 13, 12, 13, 0, 14, 6, 14, 7, 15, 8, 16, 15, 16, 2, 17, 7, 18, 17, 18, 9, 19, 10, 20, 19, 20, 0, 21, 11, 21, 12, 22, 13, 23, 22, 23, 0, 24, 14, 24, 6, 25, 14, 25, 15, 26, 16, 27, 26, 27, 8, 28, 16, 28, 17, 29, 18, 30, 29, 30, 20, 31, 10, 32, 31, 32, 0, 33, 21, 33, 11, 34, 21, 34, 22, 35, 23, 36, 35, 36, 12, 37, 22, 37, 0, 38, 24, 38, 6, 39, 25, 39, 26, 40, 27, 41, 40, 41, 8, 42, 28, 42, 31, 43, 32, 44, 43, 44, 0, 45, 33, 45, 11, 46, 34, 46, 12, 47, 37, 47, 24, 48, 38, 48, 6, 49, 39, 49, 25, 50, 39, 50, 27, 51, 41, 51, 8, 52, 42, 52, 28, 53, 42, 53, 11, 54, 46, 54, 34, 55, 46, 55, 12, 56, 47, 56, 37, 57, 47, 57, 24, 58, 48, 58, 25, 59, 50, 59, 27, 60, 51, 60, 28, 61, 53, 61, 34, 62, 55, 62, 37, 63, 57, 63, 24, 64, 58, 64, 48, 65, 58, 65, 25, 66, 59, 66, 50, 67, 59, 67, 60, 68, 27, 69, 68, 69, 51, 70, 60, 71, 70, 71, 28, 72, 61, 73, 72, 73, 61, 74, 53, 75, 74, 75, 34, 76, 62, 76, 55, 77, 62, 77, 63, 78, 37, 79, 78, 79, 57, 80, 63, 81, 80, 81, 50, 82, 67, 82, 68, 83, 69, 84, 83, 84, 70, 85, 71, 86, 85, 86, 75, 87, 53, 88, 87, 88, 74, 89, 75, 90, 89, 90, 55, 91, 77, 91, 57, 92, 80, 93, 92, 93, 80, 94, 81, 95, 94, 95, 82, 96, 67, 97, 96, 97, 89, 98, 90, 99, 98, 99, 77, 100, 91, 101, 100, 101];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [0, 3, 6], [0, 6, 14], [4, 0, 11], [3, 2, 7, 8], [11, 0, 21], [8, 7, 15, 16], [0, 14, 24], [5, 4, 12, 13], [0, 24, 38], [23, 13, 12, 22], [21, 0, 33], [16, 15, 26, 27], [14, 6, 25], [0, 45, 33], [26, 40, 41, 27], [25, 6, 39], [23, 22, 35, 36], [8, 16, 28], [11, 21, 34], [32, 31, 43, 44], [8, 28, 42], [11, 34, 46], [39, 6, 49], [22, 12, 37], [38, 24, 48], [8, 42, 52], [37, 12, 47], [48, 24, 58], [11, 46, 54], [25, 39, 50], [41, 51, 27], [47, 12, 56], [25, 50, 59], [27, 51, 60], [58, 24, 64], [46, 34, 55], [42, 28, 53], [25, 59, 66], [55, 34, 62], [53, 28, 61], [48, 58, 65], [27, 60, 68, 69], [37, 47, 57], [34, 76, 62], [61, 28, 72, 73], [37, 57, 63], [60, 51, 70, 71], [59, 50, 67], [37, 63, 78, 79], [67, 50, 82], [53, 61, 74, 75], [55, 62, 77], [53, 75, 87, 88], [55, 77, 91], [63, 57, 80, 81], [80, 57, 92, 93], [82, 96, 97, 67], [101, 91, 77, 100], [2, 1, 9, 10], [2, 17, 18, 7], [18, 17, 29, 30], [10, 20, 31, 32], [10, 9, 19, 20], [71, 70, 85, 86], [81, 80, 94, 95], [90, 89, 98, 99], [75, 74, 89, 90], [69, 68, 83, 84]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[91,77],
      [90,89],
      [67,82],
      [81,80],
      [80,57],
      [55,77],
      [75,74],
      [53,75],
      [71,70],
      [69,68],
      [67,50],
      [63,57],
      [37,63],
      [55,62],
      [62,34],
      [53,61],
      [61,28],
      [60,51],
      [27,60],
      [59,50],
      [25,59],
      [48,58],
      [58,24],
      [37,57],
      [55,34],
      [53,28],
      [27,51],
      [25,50],
      [48,24],
      [37,47],
      [47,12],
      [46,34],
      [11,46],
      [42,28],
      [8,42],
      [27,41],
      [25,39],
      [39,6],
      [38,24],
      [37,12],
      [11,34],
      [33,0],
      [32,31],
      [8,28],
      [27,26],
      [25,6],
      [0,24],
      [22,12],
      [23,22],
      [11,21],
      [21,0],
      [10,20],
      [18,17],
      [8,16],
      [16,15],
      [14,6],
      [0,14],
      [13,12],
      [11,0],
      [10,9],
      [7,2],
      [8,7],
      [0,6],
      [5,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.80658930677266,
      2.81356823138406,
      2.80658930677266,
      2.80660395582342,
      2.79670544643057,
      2.81238049006229,
      2.80660395582342,
      2.79670544643057,
      2.79972394015752,
      2.79972394015752,
      2.81238049006229,
      2.79080697432692,
      2.78695010465272,
      2.81633962903857,
      2.81957293944472,
      2.79080697432692,
      2.78695010465272,
      2.77726246654796,
      2.77726246654796,
      2.81633962903857,
      2.81957293944472,
      2.82608537044345,
      2.82608537044345,
      2.79080697432692,
      2.81633962903857,
      2.79080697432692,
      2.77544578012185,
      2.81633962903857,
      2.827106343065,
      2.79220976930169,
      2.79670544643057,
      2.81504792694992,
      2.81238049006229,
      2.79220976930169,
      2.79670544643057,
      2.77726246654796,
      2.81504792694992,
      2.81238049006229,
      2.82608537044345,
      2.79080697432692,
      2.81633962903857,
      2.82328947883089,
      2.79972394015752,
      2.79080697432692,
      2.78178757347871,
      2.81633962903857,
      2.82328947883089,
      2.79080697432692,
      2.7889312857112,
      2.81633962903857,
      2.81873110569582,
      2.80857140898441,
      2.80857140898441,
      2.79080697432692,
      2.7889312857112,
      2.81633962903857,
      2.81873110569582,
      2.79670544643057,
      2.81238049006229,
      2.81356823138406,
      2.80736897866073,
      2.79670544643057,
      2.81238049006229,
      2.80224822907373,
      2.80658930677266,
      2.81152041629594,
      2.80224822907373,
      2.80658930677266,
      2.80420724493163];

obj0.userData.subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [91,100,101],
      [89,90,98,99],
      [87,88],
      [85,86],
      [83,84],
      [82,96,97],
      [80,81,92,93,94,95],
      [78,79],
      [77,91,100,101],
      [76],
      [74,75,87,88,89,90,98,99],
      [72,73],
      [70,71,85,86],
      [68,69,83,84],
      [67,82,96,97],
      [66],
      [65],
      [64],
      [63,78,79,80,81,92,93,94,95],
      [62,76,77,91,100,101],
      [61,72,73,74,75,87,88,89,90,98,99],
      [60,68,69,70,71,83,84,85,86],
      [59,66,67,82,96,97],
      [58,64,65],
      [57,63,78,79,80,81,92,93,94,95],
      [56],
      [55,62,76,77,91,100,101],
      [54],
      [53,61,72,73,74,75,87,88,89,90,98,99],
      [52],
      [51,60,68,69,70,71,83,84,85,86],
      [50,59,66,67,82,96,97],
      [49],
      [48,58,64,65],
      [47,56,57,63,78,79,80,81,92,93,94,95],
      [46,54,55,62,76,77,91,100,101],
      [45],
      [43,44],
      [42,52,53,61,72,73,74,75,87,88,89,90,98,99],
      [40,41,51,60,68,69,70,71,83,84,85,86],
      [39,49,50,59,66,67,82,96,97],
      [38,48,58,64,65],
      [37,47,56,57,63,78,79,80,81,92,93,94,95],
      [35,36],
      [34,46,54,55,62,76,77,91,100,101],
      [33,45],
      [31,32,43,44],
      [29,30],
      [28,42,52,53,61,72,73,74,75,87,88,89,90,98,99],
      [26,27,40,41,51,60,68,69,70,71,83,84,85,86],
      [25,39,49,50,59,66,67,82,96,97],
      [24,38,48,58,64,65],
      [22,23,35,36,37,47,56,57,63,78,79,80,81,92,93,94,95],
      [21,33,34,45,46,54,55,62,76,77,91,100,101],
      [19,20,31,32,43,44],
      [17,18,29,30],
      [15,16,26,27,28,40,41,42,51,52,53,60,61,68,69,70,71,72,73,74,75,83,84,85,86,87,88,89,90,98,99],
      [14,24,25,38,39,48,49,50,58,59,64,65,66,67,82,96,97],
      [12,13,22,23,35,36,37,47,56,57,63,78,79,80,81,92,93,94,95],
      [11,21,33,34,45,46,54,55,62,76,77,91,100,101],
      [9,10,19,20,31,32,43,44],
      [7,8,15,16,17,18,26,27,28,29,30,40,41,42,51,52,53,60,61,68,69,70,71,72,73,74,75,83,84,85,86,87,88,89,90,98,99],
      [6,14,24,25,38,39,48,49,50,58,59,64,65,66,67,82,96,97],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,45,46,47,54,55,56,57,62,63,76,77,78,79,80,81,91,92,93,94,95,100,101]];

obj0.userData.polytoperoot = [[0,-0.926290369168284,-0.572478931597686],
      [-0.175996953348291,-1.03030411065018,-0.0797221041180882],
      [-0.494417839145641,0.0839539970150791,0.00649612985329364]];

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
