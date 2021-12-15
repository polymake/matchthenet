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
obj0.userData.points.push(new PMPoint(0.463857, 0, 0));
obj0.userData.points.push(new PMPoint(0.607197, 0.441154, 0));
obj0.userData.points.push(new PMPoint(0.231928, 0.713802, 0));
obj0.userData.points.push(new PMPoint(-0.14334, 0.441154, 0));
obj0.userData.points.push(new PMPoint(0.231928, -0.401712, 0));
obj0.userData.points.push(new PMPoint(-0.45372, 0.0964413, 0));
obj0.userData.points.push(new PMPoint(-0.191826, 0.90247, 0));
obj0.userData.points.push(new PMPoint(0.917577, 0.0964413, 0));
obj0.userData.points.push(new PMPoint(0.655683, 0.90247, 0));
obj0.userData.points.push(new PMPoint(0.695785, -0.401712, 0));
obj0.userData.points.push(new PMPoint(-0.231928, -0.401712, 0));
obj0.userData.points.push(new PMPoint(-0.59706, 0.537595, 0));
obj0.userData.points.push(new PMPoint(-0.310381, -0.344713, 0));
obj0.userData.points.push(new PMPoint(-0.567094, 0.629822, 0));
obj0.userData.points.push(new PMPoint(0.183442, 1.17512, 0));
obj0.userData.points.push(new PMPoint(0.774238, -0.344713, 0));
obj0.userData.points.push(new PMPoint(1.06092, 0.537595, 0));
obj0.userData.points.push(new PMPoint(0.280415, 1.17512, 0));
obj0.userData.points.push(new PMPoint(1.03095, 0.629822, 0));
obj0.userData.points.push(new PMPoint(0.0885888, -0.842866, 0));
obj0.userData.points.push(new PMPoint(0.463857, -1.11551, 0));
obj0.userData.points.push(new PMPoint(0.839125, -0.842866, 0));
obj0.userData.points.push(new PMPoint(0, -0.803424, 0));
obj0.userData.points.push(new PMPoint(-0.907441, 0.192883, 0));
obj0.userData.points.push(new PMPoint(-0.917577, 0.0964413, 0));
obj0.userData.points.push(new PMPoint(-1.06092, -0.344713, 0));
obj0.userData.points.push(new PMPoint(-0.685649, -0.617361, 0));
obj0.userData.points.push(new PMPoint(-0.335166, 1.34362, 0));
obj0.userData.points.push(new PMPoint(-0.799022, 1.34362, 0));
obj0.userData.points.push(new PMPoint(-0.942362, 0.90247, 0));
obj0.userData.points.push(new PMPoint(-0.240312, 1.36379, 0));
obj0.userData.points.push(new PMPoint(1.22796, -0.248272, 0));
obj0.userData.points.push(new PMPoint(1.29285, -0.176207, 0));
obj0.userData.points.push(new PMPoint(1.66811, 0.0964413, 0));
obj0.userData.points.push(new PMPoint(1.52477, 0.537595, 0));
obj0.userData.points.push(new PMPoint(1.03095, 1.17512, 0));
obj0.userData.points.push(new PMPoint(0.887611, 1.61627, 0));
obj0.userData.points.push(new PMPoint(0.423754, 1.61627, 0));
obj0.userData.points.push(new PMPoint(1.07944, 1.09114, 0));
obj0.userData.points.push(new PMPoint(0.887611, -1.30418, 0));
obj0.userData.points.push(new PMPoint(1.14951, -0.498153, 0));
obj0.userData.points.push(new PMPoint(0.0401025, -1.30418, 0));
obj0.userData.points.push(new PMPoint(-0.463857, -0.803424, 0));
obj0.userData.points.push(new PMPoint(-1.05078, 0.634037, 0));
obj0.userData.points.push(new PMPoint(-1.1094, -0.806029, 0));
obj0.userData.points.push(new PMPoint(-1.3713, 0, 0));
obj0.userData.points.push(new PMPoint(-1.25274, 1.24718, 0));
obj0.userData.points.push(new PMPoint(-0.567094, 1.74534, 0));
obj0.userData.points.push(new PMPoint(0.134956, 1.63643, 0));
obj0.userData.points.push(new PMPoint(1.7166, -0.364875, 0));
obj0.userData.points.push(new PMPoint(1.29285, 0.939307, 0));
obj0.userData.points.push(new PMPoint(1.97849, 0.441154, 0));
obj0.userData.points.push(new PMPoint(1.34133, 1.51983, 0));
obj0.userData.points.push(new PMPoint(0.655683, 2.01798, 0));
obj0.userData.points.push(new PMPoint(0.512343, -1.57683, 0));
obj0.userData.points.push(new PMPoint(1.26288, -1.03153, 0));
obj0.userData.points.push(new PMPoint(1.29285, -0.939307, 0));
obj0.userData.points.push(new PMPoint(-0.335166, -1.03153, 0));
obj0.userData.points.push(new PMPoint(0.415371, -1.57683, 0));
obj0.userData.points.push(new PMPoint(-1.36116, 0.289324, 0));
obj0.userData.points.push(new PMPoint(-0.734135, -1.07868, 0));
obj0.userData.points.push(new PMPoint(-1.48467, -0.53338, 0));
obj0.userData.points.push(new PMPoint(-1.51464, -0.441154, 0));
obj0.userData.points.push(new PMPoint(-1.39608, 0.806029, 0));
obj0.userData.points.push(new PMPoint(-1.1094, 1.68834, 0));
obj0.userData.points.push(new PMPoint(-1.03095, 1.74534, 0));
obj0.userData.points.push(new PMPoint(-0.103237, 1.74534, 0));
obj0.userData.points.push(new PMPoint(2.09187, -0.0922263, 0));
obj0.userData.points.push(new PMPoint(1.7567, 0.939307, 0));
obj0.userData.points.push(new PMPoint(2.12183, 0, 0));
obj0.userData.points.push(new PMPoint(1.83515, 0.882308, 0));
obj0.userData.points.push(new PMPoint(1.19799, 1.96099, 0));
obj0.userData.points.push(new PMPoint(1.11954, 2.01798, 0));
obj0.userData.points.push(new PMPoint(0.191826, 2.01798, 0));
obj0.userData.points.push(new PMPoint(0.936097, -1.7655, 0));
obj0.userData.points.push(new PMPoint(1.03095, -1.74534, 0));
obj0.userData.points.push(new PMPoint(1.49481, -1.74534, 0));
obj0.userData.points.push(new PMPoint(1.63815, -1.30418, 0));
obj0.userData.points.push(new PMPoint(-0.335166, -1.57683, 0));
obj0.userData.points.push(new PMPoint(-0.191826, -2.01798, 0));
obj0.userData.points.push(new PMPoint(0.272031, -2.01798, 0));
obj0.userData.points.push(new PMPoint(-1.53316, -0.994696, 0));
obj0.userData.points.push(new PMPoint(-1.74657, 0.272648, 0));
obj0.userData.points.push(new PMPoint(-2.12183, 0, 0));
obj0.userData.points.push(new PMPoint(-1.97849, -0.441154, 0));
obj0.userData.points.push(new PMPoint(-1.56312, 1.5919, 0));
obj0.userData.points.push(new PMPoint(-0.423754, 2.18649, 0));
obj0.userData.points.push(new PMPoint(-0.799022, 2.45914, 0));
obj0.userData.points.push(new PMPoint(-1.17429, 2.18649, 0));
obj0.userData.points.push(new PMPoint(2.43221, 0.344713, 0));
obj0.userData.points.push(new PMPoint(2.44235, 0.441154, 0));
obj0.userData.points.push(new PMPoint(2.58569, 0.882308, 0));
obj0.userData.points.push(new PMPoint(2.21042, 1.15496, 0));
obj0.userData.points.push(new PMPoint(0.887611, 2.4197, 0));
obj0.userData.points.push(new PMPoint(0.560829, -2.03815, 0));
obj0.userData.points.push(new PMPoint(1.26288, -2.14705, 0));
obj0.userData.points.push(new PMPoint(1.94853, -1.64889, 0));
obj0.userData.points.push(new PMPoint(0.0401025, -2.4197, 0));
obj0.userData.points.push(new PMPoint(-1.90843, -0.722048, 0));
obj0.userData.points.push(new PMPoint(-2.43221, -0.344713, 0));
obj0.userData.points.push(new PMPoint(-1.41978, 2.03305, 0));
obj0.userData.points.push(new PMPoint(-1.22278, 2.64781, 0));
obj0.userData.points.push(new PMPoint(2.89607, 0.537595, 0));
obj0.userData.points.push(new PMPoint(2.63418, 1.34362, 0));
obj0.userData.points.push(new PMPoint(0.984584, -2.22681, 0));
obj0.userData.points.push(new PMPoint(1.72674, -2.14705, 0));
obj0.userData.points.push(new PMPoint(1.80519, -2.09005, 0));
obj0.userData.points.push(new PMPoint(-0.423754, -2.4197, 0));
obj0.userData.points.push(new PMPoint(0.503959, -2.4197, 0));
obj0.userData.points.push(new PMPoint(-2.28888, -0.785867, 0));
obj0.userData.points.push(new PMPoint(-2.57555, 0.0964413, 0));
obj0.userData.points.push(new PMPoint(-1.59804, 2.37516, 0));
obj0.userData.points.push(new PMPoint(-0.847509, 2.92045, 0));
obj0.userData.points.push(new PMPoint(3.03941, 0.978749, 0));
obj0.userData.points.push(new PMPoint(1.11954, -2.5882, 0));
obj0.userData.points.push(new PMPoint(1.49481, -2.86085, 0));
obj0.userData.points.push(new PMPoint(1.87008, -2.5882, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 5, 0, 6, 4, 6, 3, 7, 4, 7, 1, 8, 2, 8, 2, 9, 3, 9, 1, 10, 5, 10, 0, 11, 5, 11, 4, 12, 6, 12, 0, 13, 6, 13, 4, 14, 7, 14, 3, 15, 7, 15, 1, 16, 8, 16, 2, 17, 8, 17, 3, 18, 9, 18, 2, 19, 9, 19, 5, 20, 20, 21, 10, 22, 21, 22, 5, 23, 11, 23, 6, 24, 12, 24, 6, 25, 25, 26, 13, 27, 26, 27, 7, 28, 28, 29, 14, 30, 29, 30, 7, 31, 15, 31, 8, 32, 16, 32, 8, 33, 33, 34, 17, 35, 34, 35, 9, 36, 36, 37, 18, 38, 37, 38, 9, 39, 19, 39, 21, 40, 22, 40, 10, 41, 22, 41, 20, 42, 21, 42, 11, 43, 23, 43, 12, 44, 24, 44, 26, 45, 27, 45, 25, 46, 26, 46, 29, 47, 30, 47, 28, 48, 29, 48, 15, 49, 31, 49, 33, 50, 34, 50, 17, 51, 35, 51, 34, 52, 35, 52, 36, 53, 37, 53, 37, 54, 38, 54, 21, 55, 40, 55, 22, 56, 40, 56, 22, 57, 41, 57, 20, 58, 42, 58, 21, 59, 42, 59, 24, 60, 44, 60, 27, 61, 45, 61, 26, 62, 45, 62, 26, 63, 46, 63, 30, 64, 47, 64, 29, 65, 47, 65, 29, 66, 48, 66, 28, 67, 48, 67, 34, 68, 50, 68, 35, 69, 51, 69, 34, 70, 52, 70, 35, 71, 52, 71, 37, 72, 53, 72, 37, 73, 54, 73, 38, 74, 54, 74, 40, 75, 55, 75, 40, 76, 76, 77, 56, 78, 77, 78, 42, 79, 79, 80, 59, 81, 80, 81, 45, 82, 62, 82, 46, 83, 83, 84, 63, 85, 84, 85, 47, 86, 65, 86, 48, 87, 87, 88, 66, 89, 88, 89, 52, 90, 70, 90, 52, 91, 91, 92, 71, 93, 92, 93, 54, 94, 73, 94, 55, 95, 75, 95, 76, 96, 77, 96, 77, 97, 78, 97, 80, 98, 81, 98, 62, 99, 82, 99, 84, 100, 85, 100, 65, 101, 86, 101, 88, 102, 89, 102, 91, 103, 92, 103, 92, 104, 93, 104, 75, 105, 95, 105, 77, 106, 96, 106, 77, 107, 97, 107, 80, 108, 98, 108, 81, 109, 98, 109, 85, 110, 100, 110, 84, 111, 100, 111, 89, 112, 102, 112, 88, 113, 102, 113, 92, 114, 103, 114, 96, 115, 115, 116, 106, 117, 116, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [10, 5, 20, 21, 22], [42, 79, 80, 81, 59], [106, 96, 115, 116, 117], [48, 87, 88, 89, 66], [18, 9, 36, 37, 38], [17, 8, 33, 34, 35], [71, 52, 91, 92, 93], [14, 7, 28, 29, 30], [13, 6, 25, 26, 27], [46, 83, 84, 85, 63], [78, 56, 40, 76, 77], [11, 43, 23], [20, 58, 42], [10, 1, 5], [5, 1, 0], [27, 45, 61], [27, 26, 45], [21, 42, 59], [0, 4, 6], [8, 1, 16], [40, 21, 55], [22, 21, 40], [6, 12, 24], [45, 26, 62], [40, 55, 75], [6, 4, 12], [26, 25, 46], [8, 16, 32], [41, 10, 22], [4, 3, 7], [2, 1, 8], [4, 7, 14], [26, 46, 63], [24, 44, 60], [5, 11, 23], [7, 3, 15], [0, 11, 5], [45, 62, 82], [21, 20, 42], [0, 6, 13], [55, 95, 75], [22, 40, 56], [41, 22, 57], [12, 44, 24], [3, 9, 18], [30, 47, 64], [2, 8, 17], [7, 15, 31], [34, 33, 50], [105, 75, 95], [81, 80, 98], [34, 50, 68], [3, 2, 9], [62, 99, 82], [80, 108, 98], [9, 2, 19], [97, 77, 107], [81, 98, 109], [17, 35, 51], [77, 76, 96], [30, 29, 47], [35, 34, 52], [47, 65, 86], [85, 100, 110], [77, 96, 106], [47, 29, 65], [52, 34, 70], [37, 36, 53], [9, 19, 39], [29, 48, 66], [15, 49, 31], [35, 52, 71], [85, 84, 100], [29, 28, 48], [51, 35, 69], [78, 77, 97], [52, 70, 90], [28, 67, 48], [65, 101, 86], [92, 91, 103], [93, 92, 104], [84, 111, 100], [92, 103, 114], [37, 53, 72], [89, 102, 112], [89, 88, 102], [88, 113, 102], [54, 37, 73], [54, 73, 94], [38, 54, 74], [38, 37, 54]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[106,96],
      [92,103],
      [102,88],
      [89,102],
      [100,84],
      [85,100],
      [81,98],
      [98,80],
      [97,77],
      [77,96],
      [75,95],
      [93,92],
      [92,91],
      [89,88],
      [86,65],
      [85,84],
      [82,62],
      [81,80],
      [78,77],
      [77,76],
      [75,55],
      [54,73],
      [71,52],
      [52,70],
      [66,48],
      [47,65],
      [63,46],
      [45,62],
      [59,42],
      [56,40],
      [40,55],
      [38,54],
      [54,37],
      [37,53],
      [35,52],
      [52,34],
      [51,35],
      [34,50],
      [48,28],
      [29,48],
      [47,29],
      [30,47],
      [26,46],
      [45,26],
      [27,45],
      [24,44],
      [21,42],
      [42,20],
      [41,22],
      [22,40],
      [40,21],
      [38,37],
      [37,36],
      [35,34],
      [17,35],
      [34,33],
      [31,15],
      [29,28],
      [30,29],
      [26,25],
      [27,26],
      [24,12],
      [23,11],
      [21,20],
      [10,22],
      [22,21],
      [9,19],
      [18,9],
      [17,8],
      [8,16],
      [7,15],
      [14,7],
      [13,6],
      [6,12],
      [5,11],
      [10,5],
      [9,2],
      [3,9],
      [2,8],
      [8,1],
      [7,3],
      [4,7],
      [0,6],
      [6,4],
      [5,0],
      [1,5],
      [3,2],
      [2,1],
      [4,3],
      [0,4],
      [1,0]];

obj0.userData.angles = [2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.66913063362575,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362575,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362575,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576];

obj0.userData.subtrees = [[115,116,117],
      [114],
      [113],
      [112],
      [111],
      [110],
      [109],
      [108],
      [107],
      [106,115,116,117],
      [105],
      [104],
      [103,114],
      [102,112,113],
      [101],
      [100,110,111],
      [99],
      [98,108,109],
      [97,107],
      [96,106,115,116,117],
      [95,105],
      [94],
      [91,92,93,103,104,114],
      [90],
      [87,88,89,102,112,113],
      [86,101],
      [83,84,85,100,110,111],
      [82,99],
      [79,80,81,98,108,109],
      [76,77,78,96,97,106,107,115,116,117],
      [75,95,105],
      [74],
      [73,94],
      [72],
      [71,91,92,93,103,104,114],
      [70,90],
      [69],
      [68],
      [67],
      [66,87,88,89,102,112,113],
      [65,86,101],
      [64],
      [63,83,84,85,100,110,111],
      [62,82,99],
      [61],
      [60],
      [59,79,80,81,98,108,109],
      [58],
      [57],
      [56,76,77,78,96,97,106,107,115,116,117],
      [55,75,95,105],
      [54,73,74,94],
      [53,72],
      [52,70,71,90,91,92,93,103,104,114],
      [51,69],
      [50,68],
      [49],
      [48,66,67,87,88,89,102,112,113],
      [47,64,65,86,101],
      [46,63,83,84,85,100,110,111],
      [45,61,62,82,99],
      [44,60],
      [43],
      [42,58,59,79,80,81,98,108,109],
      [41,57],
      [40,55,56,75,76,77,78,95,96,97,105,106,107,115,116,117],
      [39],
      [36,37,38,53,54,72,73,74,94],
      [33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [32],
      [31,49],
      [28,29,30,47,48,64,65,66,67,86,87,88,89,101,102,112,113],
      [25,26,27,45,46,61,62,63,82,83,84,85,99,100,110,111],
      [24,44,60],
      [23,43],
      [20,21,22,40,41,42,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117],
      [19,39],
      [18,36,37,38,53,54,72,73,74,94],
      [17,33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [16,32],
      [15,31,49],
      [14,28,29,30,47,48,64,65,66,67,86,87,88,89,101,102,112,113],
      [13,25,26,27,45,46,61,62,63,82,83,84,85,99,100,110,111],
      [12,24,44,60],
      [11,23,43],
      [10,20,21,22,40,41,42,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117],
      [9,18,19,36,37,38,39,53,54,72,73,74,94],
      [8,16,17,32,33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [7,14,15,28,29,30,31,47,48,49,64,65,66,67,86,87,88,89,101,102,112,113],
      [6,12,13,24,25,26,27,44,45,46,60,61,62,63,82,83,84,85,99,100,110,111],
      [5,10,11,20,21,22,23,40,41,42,43,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117]];

obj0.userData.polytoperoot = [[-0.809980595541054,0.0894750752440278,0.579590929671123],
      [-0.618033988749895,0,1],
      [0.427318358491737,0.212131774809855,0.264097269564706]];

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
