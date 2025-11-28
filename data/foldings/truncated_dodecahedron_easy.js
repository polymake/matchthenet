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
obj0.userData.points.push(new PMPoint(0.336763, 0, 0));
obj0.userData.points.push(new PMPoint(0.168381, 0.291645, 0));
obj0.userData.points.push(new PMPoint(-0.272447, -0.197944, 0));
obj0.userData.points.push(new PMPoint(-0.376512, -0.518225, 0));
obj0.userData.points.push(new PMPoint(-0.272447, -0.838505, 0));
obj0.userData.points.push(new PMPoint(0, -1.03645, 0));
obj0.userData.points.push(new PMPoint(0.336763, -1.03645, 0));
obj0.userData.points.push(new PMPoint(0.60921, -0.838505, 0));
obj0.userData.points.push(new PMPoint(0.713275, -0.518225, 0));
obj0.userData.points.push(new PMPoint(0.60921, -0.197944, 0));
obj0.userData.points.push(new PMPoint(0.13318, 0.626563, 0));
obj0.userData.points.push(new PMPoint(-0.0921582, 0.876827, 0));
obj0.userData.points.push(new PMPoint(-0.421562, 0.946844, 0));
obj0.userData.points.push(new PMPoint(-0.72921, 0.80987, 0));
obj0.userData.points.push(new PMPoint(-0.897591, 0.518225, 0));
obj0.userData.points.push(new PMPoint(-0.86239, 0.183307, 0));
obj0.userData.points.push(new PMPoint(-0.637052, -0.0669568, 0));
obj0.userData.points.push(new PMPoint(-0.307648, -0.136974, 0));
obj0.userData.points.push(new PMPoint(0.644411, -0.136974, 0));
obj0.userData.points.push(new PMPoint(0.973815, -0.0669568, 0));
obj0.userData.points.push(new PMPoint(1.19915, 0.183307, 0));
obj0.userData.points.push(new PMPoint(1.23435, 0.518225, 0));
obj0.userData.points.push(new PMPoint(1.06597, 0.80987, 0));
obj0.userData.points.push(new PMPoint(0.758325, 0.946844, 0));
obj0.userData.points.push(new PMPoint(0.428921, 0.876827, 0));
obj0.userData.points.push(new PMPoint(0.203583, 0.626563, 0));
obj0.userData.points.push(new PMPoint(0.938613, -0.267961, 0));
obj0.userData.points.push(new PMPoint(0.713275, -1.15879, 0));
obj0.userData.points.push(new PMPoint(0.985722, -1.35673, 0));
obj0.userData.points.push(new PMPoint(1.32248, -1.35673, 0));
obj0.userData.points.push(new PMPoint(1.59493, -1.15879, 0));
obj0.userData.points.push(new PMPoint(1.699, -0.838505, 0));
obj0.userData.points.push(new PMPoint(1.59493, -0.518225, 0));
obj0.userData.points.push(new PMPoint(1.32248, -0.32028, 0));
obj0.userData.points.push(new PMPoint(0.985722, -0.32028, 0));
obj0.userData.points.push(new PMPoint(0.644411, -1.17342, 0));
obj0.userData.points.push(new PMPoint(-0.648959, -0.32028, 0));
obj0.userData.points.push(new PMPoint(-0.985722, -0.32028, 0));
obj0.userData.points.push(new PMPoint(-1.25817, -0.518225, 0));
obj0.userData.points.push(new PMPoint(-1.36223, -0.838505, 0));
obj0.userData.points.push(new PMPoint(-1.25817, -1.15879, 0));
obj0.userData.points.push(new PMPoint(-0.985722, -1.35673, 0));
obj0.userData.points.push(new PMPoint(-0.648959, -1.35673, 0));
obj0.userData.points.push(new PMPoint(-0.376512, -1.15879, 0));
obj0.userData.points.push(new PMPoint(-0.601851, -0.267961, 0));
obj0.userData.points.push(new PMPoint(-0.307648, -1.17342, 0));
obj0.userData.points.push(new PMPoint(-0.272447, -1.23439, 0));
obj0.userData.points.push(new PMPoint(-0.376512, -1.55467, 0));
obj0.userData.points.push(new PMPoint(-0.272447, -1.87495, 0));
obj0.userData.points.push(new PMPoint(0, -2.0729, 0));
obj0.userData.points.push(new PMPoint(0.336763, -2.0729, 0));
obj0.userData.points.push(new PMPoint(0.60921, -1.87495, 0));
obj0.userData.points.push(new PMPoint(0.713275, -1.55467, 0));
obj0.userData.points.push(new PMPoint(0.60921, -1.23439, 0));
obj0.userData.points.push(new PMPoint(0.21549, 1.0138, 0));
obj0.userData.points.push(new PMPoint(0.383871, 1.30545, 0));
obj0.userData.points.push(new PMPoint(0.34867, 1.64036, 0));
obj0.userData.points.push(new PMPoint(0.123332, 1.89063, 0));
obj0.userData.points.push(new PMPoint(-0.206072, 1.96064, 0));
obj0.userData.points.push(new PMPoint(-0.51372, 1.82367, 0));
obj0.userData.points.push(new PMPoint(-0.682102, 1.53203, 0));
obj0.userData.points.push(new PMPoint(-0.6469, 1.19711, 0));
obj0.userData.points.push(new PMPoint(0.237246, 0.946844, 0));
obj0.userData.points.push(new PMPoint(-0.764411, 1.14479, 0));
obj0.userData.points.push(new PMPoint(-0.98975, 1.39505, 0));
obj0.userData.points.push(new PMPoint(-1.31915, 1.46507, 0));
obj0.userData.points.push(new PMPoint(-1.6268, 1.32809, 0));
obj0.userData.points.push(new PMPoint(-1.79518, 1.03645, 0));
obj0.userData.points.push(new PMPoint(-1.75998, 0.701531, 0));
obj0.userData.points.push(new PMPoint(-1.53464, 0.451268, 0));
obj0.userData.points.push(new PMPoint(-1.20524, 0.381251, 0));
obj0.userData.points.push(new PMPoint(-0.694009, 1.14479, 0));
obj0.userData.points.push(new PMPoint(-1.17004, 0.32028, 0));
obj0.userData.points.push(new PMPoint(1.542, 0.381251, 0));
obj0.userData.points.push(new PMPoint(1.87141, 0.451268, 0));
obj0.userData.points.push(new PMPoint(2.09674, 0.701531, 0));
obj0.userData.points.push(new PMPoint(2.13195, 1.03645, 0));
obj0.userData.points.push(new PMPoint(1.96356, 1.32809, 0));
obj0.userData.points.push(new PMPoint(1.65592, 1.46507, 0));
obj0.userData.points.push(new PMPoint(1.32651, 1.39505, 0));
obj0.userData.points.push(new PMPoint(1.10117, 1.14479, 0));
obj0.userData.points.push(new PMPoint(1.5068, 0.32028, 0));
obj0.userData.points.push(new PMPoint(1.03077, 1.14479, 0));
obj0.userData.points.push(new PMPoint(1.1541, -1.64837, 0));
obj0.userData.points.push(new PMPoint(1.21842, -1.67701, 0));
obj0.userData.points.push(new PMPoint(1.32248, -1.99729, 0));
obj0.userData.points.push(new PMPoint(1.59493, -2.19523, 0));
obj0.userData.points.push(new PMPoint(1.93169, -2.19523, 0));
obj0.userData.points.push(new PMPoint(2.20414, -1.99729, 0));
obj0.userData.points.push(new PMPoint(2.30821, -1.67701, 0));
obj0.userData.points.push(new PMPoint(2.20414, -1.35673, 0));
obj0.userData.points.push(new PMPoint(1.93169, -1.15879, 0));
obj0.userData.points.push(new PMPoint(1.92434, -1.08877, 0));
obj0.userData.points.push(new PMPoint(-1.59493, -1.15879, 0));
obj0.userData.points.push(new PMPoint(-1.86738, -1.35673, 0));
obj0.userData.points.push(new PMPoint(-1.97144, -1.67701, 0));
obj0.userData.points.push(new PMPoint(-1.86738, -1.99729, 0));
obj0.userData.points.push(new PMPoint(-1.59493, -2.19523, 0));
obj0.userData.points.push(new PMPoint(-1.25817, -2.19523, 0));
obj0.userData.points.push(new PMPoint(-0.985722, -1.99729, 0));
obj0.userData.points.push(new PMPoint(-0.881656, -1.67701, 0));
obj0.userData.points.push(new PMPoint(-0.817341, -1.64837, 0));
obj0.userData.points.push(new PMPoint(-1.58757, -1.08877, 0));
obj0.userData.points.push(new PMPoint(0.168381, -2.36454, 0));
obj0.userData.points.push(new PMPoint(-0.0376906, 2.25229, 0));
obj0.userData.points.push(new PMPoint(-0.0728919, 2.58721, 0));
obj0.userData.points.push(new PMPoint(-0.29823, 2.83747, 0));
obj0.userData.points.push(new PMPoint(-0.627634, 2.90749, 0));
obj0.userData.points.push(new PMPoint(-0.935282, 2.77051, 0));
obj0.userData.points.push(new PMPoint(-1.10366, 2.47887, 0));
obj0.userData.points.push(new PMPoint(-1.06846, 2.14395, 0));
obj0.userData.points.push(new PMPoint(-0.843124, 1.89369, 0));
obj0.userData.points.push(new PMPoint(0.0192663, 2.21091, 0));
obj0.userData.points.push(new PMPoint(-0.850483, 1.82367, 0));
obj0.userData.points.push(new PMPoint(-1.96356, 1.32809, 0));
obj0.userData.points.push(new PMPoint(2.30033, 1.32809, 0));
obj0.userData.points.push(new PMPoint(2.23934, -2.33221, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 27, 8, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 9, 35, 34, 35, 7, 36, 8, 36, 4, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 5, 44, 43, 44, 3, 45, 4, 45, 5, 46, 6, 46, 6, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 53, 7, 54, 53, 54, 12, 55, 55, 56, 56, 57, 57, 58, 58, 59, 59, 60, 60, 61, 13, 62, 61, 62, 11, 63, 12, 63, 14, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 15, 71, 70, 71, 13, 72, 14, 72, 15, 73, 16, 73, 22, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 23, 81, 80, 81, 21, 82, 22, 82, 23, 83, 24, 83, 29, 84, 30, 84, 30, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 31, 92, 91, 92, 31, 93, 32, 93, 41, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 42, 101, 100, 101, 42, 102, 43, 102, 40, 103, 41, 103, 50, 104, 51, 104, 59, 105, 105, 106, 106, 107, 107, 108, 108, 109, 109, 110, 110, 111, 60, 112, 111, 112, 58, 113, 59, 113, 60, 114, 61, 114, 67, 115, 68, 115, 77, 116, 78, 116, 88, 117, 89, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [27, 10, 9], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26], [105, 106, 107, 108, 109, 110, 111, 112, 60, 59], [34, 35, 9, 8, 28, 29, 30, 31, 32, 33], [8, 7, 36], [55, 56, 57, 58, 59, 60, 61, 62, 13, 12], [23, 22, 74, 75, 76, 77, 78, 79, 80, 81], [11, 63, 12], [78, 77, 116], [30, 29, 84], [37, 38, 39, 40, 41, 42, 43, 44, 5, 4], [3, 45, 4], [15, 14, 64, 65, 66, 67, 68, 69, 70, 71], [31, 30, 85, 86, 87, 88, 89, 90, 91, 92], [22, 21, 82], [6, 5, 46], [24, 23, 83], [7, 6, 47, 48, 49, 50, 51, 52, 53, 54], [14, 13, 72], [94, 95, 96, 97, 98, 99, 100, 101, 42, 41], [16, 15, 73], [68, 67, 115], [58, 113, 59], [32, 31, 93], [43, 42, 102], [61, 60, 114], [40, 103, 41], [51, 50, 104], [89, 88, 117]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[89,88],
      [78,77],
      [68,67],
      [61,60],
      [59,58],
      [60,59],
      [51,50],
      [41,40],
      [43,42],
      [42,41],
      [32,31],
      [31,30],
      [30,29],
      [24,23],
      [22,21],
      [23,22],
      [16,15],
      [14,13],
      [15,14],
      [12,11],
      [13,12],
      [7,6],
      [6,5],
      [4,3],
      [5,4],
      [8,7],
      [9,8],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543];

obj0.userData.subtrees = [[117],
      [116],
      [115],
      [114],
      [113],
      [105,106,107,108,109,110,111,112],
      [104],
      [103],
      [102],
      [94,95,96,97,98,99,100,101],
      [93],
      [85,86,87,88,89,90,91,92,117],
      [84],
      [83],
      [82],
      [74,75,76,77,78,79,80,81,116],
      [73],
      [72],
      [64,65,66,67,68,69,70,71,115],
      [63],
      [55,56,57,58,59,60,61,62,105,106,107,108,109,110,111,112,113,114],
      [47,48,49,50,51,52,53,54,104],
      [46],
      [45],
      [37,38,39,40,41,42,43,44,94,95,96,97,98,99,100,101,102,103],
      [36],
      [28,29,30,31,32,33,34,35,84,85,86,87,88,89,90,91,92,93,117],
      [27],
      [19,20,21,22,23,24,25,26,74,75,76,77,78,79,80,81,82,83,116],
      [11,12,13,14,15,16,17,18,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,105,106,107,108,109,110,111,112,113,114,115],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,117]];

obj0.userData.polytoperoot = [[0.44082824368491,0.88165648736982,-0.168381405886714],
      [1.13422859619989,2.9694490158634,0],
      [0.5,-0.190983005625053,0.927050983124842]];

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
