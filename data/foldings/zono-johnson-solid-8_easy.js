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
obj0.userData.points.push(new PMPoint(0.454052, 0, 0));
obj0.userData.points.push(new PMPoint(0.251661, 0.406449, 0));
obj0.userData.points.push(new PMPoint(-0.202392, 0.406449, 0));
obj0.userData.points.push(new PMPoint(-0.368437, -0.0954693, 0));
obj0.userData.points.push(new PMPoint(-0.503322, -0.451371, 0));
obj0.userData.points.push(new PMPoint(-0.552591, -0.902743, 0));
obj0.userData.points.push(new PMPoint(-0.210129, -1.28462, 0));
obj0.userData.points.push(new PMPoint(0.243923, -1.28462, 0));
obj0.userData.points.push(new PMPoint(0.61236, -1.18915, 0));
obj0.userData.points.push(new PMPoint(0.747245, -0.833248, 0));
obj0.userData.points.push(new PMPoint(0.796514, -0.381877, 0));
obj0.userData.points.push(new PMPoint(0.948544, -0.136338, 0));
obj0.userData.points.push(new PMPoint(1.33063, 0.108962, 0));
obj0.userData.points.push(new PMPoint(1.5891, 0.388347, 0));
obj0.userData.points.push(new PMPoint(1.51033, 0.760712, 0));
obj0.userData.points.push(new PMPoint(1.30794, 1.16716, 0));
obj0.userData.points.push(new PMPoint(0.813445, 1.3035, 0));
obj0.userData.points.push(new PMPoint(0.431357, 1.0582, 0));
obj0.userData.points.push(new PMPoint(0.172892, 0.778814, 0));
obj0.userData.points.push(new PMPoint(0.134885, 0.768697, 0));
obj0.userData.points.push(new PMPoint(-0.319168, 0.768697, 0));
obj0.userData.points.push(new PMPoint(-0.578714, 0.349513, 0));
obj0.userData.points.push(new PMPoint(-0.376322, -0.0569368, 0));
obj0.userData.points.push(new PMPoint(1.12933, -1.07855, 0));
obj0.userData.points.push(new PMPoint(1.1786, -0.627177, 0));
obj0.userData.points.push(new PMPoint(0.967093, -1.47257, 0));
obj0.userData.points.push(new PMPoint(1.10198, -1.11667, 0));
obj0.userData.points.push(new PMPoint(-0.72317, 0.187953, 0));
obj0.userData.points.push(new PMPoint(-0.858054, -0.167949, 0));
obj0.userData.points.push(new PMPoint(0.48718, -1.66801, 0));
obj0.userData.points.push(new PMPoint(0.855617, -1.57254, 0));
obj0.userData.points.push(new PMPoint(-0.00773727, -1.69107, 0));
obj0.userData.points.push(new PMPoint(0.446315, -1.69107, 0));
obj0.userData.points.push(new PMPoint(-0.88541, -0.206071, 0));
obj0.userData.points.push(new PMPoint(-0.934679, -0.657442, 0));
obj0.userData.points.push(new PMPoint(-1.00664, -0.902743, 0));
obj0.userData.points.push(new PMPoint(-1.37508, -0.998212, 0));
obj0.userData.points.push(new PMPoint(-1.50996, -1.35411, 0));
obj0.userData.points.push(new PMPoint(-1.55923, -1.80549, 0));
obj0.userData.points.push(new PMPoint(-1.21677, -2.18736, 0));
obj0.userData.points.push(new PMPoint(-0.76272, -2.18736, 0));
obj0.userData.points.push(new PMPoint(-0.394283, -2.09189, 0));
obj0.userData.points.push(new PMPoint(-0.259398, -1.73599, 0));
obj0.userData.points.push(new PMPoint(0.0195287, 1.24941, 0));
obj0.userData.points.push(new PMPoint(-0.238936, 0.970023, 0));
obj0.userData.points.push(new PMPoint(1.74246, -0.0822467, 0));
obj0.userData.points.push(new PMPoint(2.00093, 0.197138, 0));
obj0.userData.points.push(new PMPoint(0.423548, 1.53619, 0));
obj0.userData.points.push(new PMPoint(0.0414603, 1.29089, 0));
obj0.userData.points.push(new PMPoint(2.04073, 0.341489, 0));
obj0.userData.points.push(new PMPoint(1.96196, 0.713854, 0));
obj0.userData.points.push(new PMPoint(1.69003, 1.41246, 0));
obj0.userData.points.push(new PMPoint(1.94849, 1.69185, 0));
obj0.userData.points.push(new PMPoint(1.86972, 2.06421, 0));
obj0.userData.points.push(new PMPoint(1.66733, 2.47066, 0));
obj0.userData.points.push(new PMPoint(1.17284, 2.607, 0));
obj0.userData.points.push(new PMPoint(0.79075, 2.3617, 0));
obj0.userData.points.push(new PMPoint(0.532285, 2.08231, 0));
obj0.userData.points.push(new PMPoint(0.611054, 1.70995, 0));
obj0.userData.points.push(new PMPoint(1.96438, 0.760712, 0));
obj0.userData.points.push(new PMPoint(1.76199, 1.16716, 0));
obj0.userData.points.push(new PMPoint(-0.697907, 0.731058, 0));
obj0.userData.points.push(new PMPoint(-0.581131, 0.36881, 0));
obj0.userData.points.push(new PMPoint(1.28648, -1.67958, 0));
obj0.userData.points.push(new PMPoint(1.42137, -1.32368, 0));
obj0.userData.points.push(new PMPoint(-1.04256, 0.394958, 0));
obj0.userData.points.push(new PMPoint(-1.17744, 0.0390559, 0));
obj0.userData.points.push(new PMPoint(0.658306, -2.00798, 0));
obj0.userData.points.push(new PMPoint(1.02674, -1.91251, 0));
obj0.userData.points.push(new PMPoint(0.109039, -2.05332, 0));
obj0.userData.points.push(new PMPoint(0.563091, -2.05332, 0));
obj0.userData.points.push(new PMPoint(-1.23285, -0.0506769, 0));
obj0.userData.points.push(new PMPoint(-1.28212, -0.502048, 0));
obj0.userData.points.push(new PMPoint(-1.01438, -2.59381, 0));
obj0.userData.points.push(new PMPoint(-0.560328, -2.59381, 0));
obj0.userData.points.push(new PMPoint(-1.72981, -0.71479, 0));
obj0.userData.points.push(new PMPoint(-1.8647, -1.07069, 0));
obj0.userData.points.push(new PMPoint(-0.519463, -2.57076, 0));
obj0.userData.points.push(new PMPoint(-0.151026, -2.47529, 0));
obj0.userData.points.push(new PMPoint(-1.89205, -1.10881, 0));
obj0.userData.points.push(new PMPoint(-1.94132, -1.56019, 0));
obj0.userData.points.push(new PMPoint(-0.30814, 1.44304, 0));
obj0.userData.points.push(new PMPoint(-0.566605, 1.16366, 0));
obj0.userData.points.push(new PMPoint(0.129577, 1.77793, 0));
obj0.userData.points.push(new PMPoint(-0.252511, 1.53263, 0));
obj0.userData.points.push(new PMPoint(2.42133, 0.339841, 0));
obj0.userData.points.push(new PMPoint(2.34256, 0.712206, 0));
obj0.userData.points.push(new PMPoint(2.10185, 1.22125, 0));
obj0.userData.points.push(new PMPoint(2.36032, 1.50064, 0));
obj0.userData.points.push(new PMPoint(0.378922, 2.55291, 0));
obj0.userData.points.push(new PMPoint(0.120456, 2.27352, 0));
obj0.userData.points.push(new PMPoint(2.40012, 1.64499, 0));
obj0.userData.points.push(new PMPoint(2.32135, 2.01735, 0));
obj0.userData.points.push(new PMPoint(-1.41892, 0.451637, 0));
obj0.userData.points.push(new PMPoint(-1.5538, 0.0957353, 0));
obj0.userData.points.push(new PMPoint(0.673812, -2.38827, 0));
obj0.userData.points.push(new PMPoint(1.04225, -2.2928, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 1, 11, 10, 11, 1, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 2, 19, 18, 19, 2, 20, 3, 21, 20, 21, 3, 22, 0, 23, 22, 23, 10, 24, 11, 25, 24, 25, 9, 26, 10, 27, 26, 27, 4, 28, 5, 29, 28, 29, 8, 30, 9, 31, 30, 31, 7, 32, 8, 33, 32, 33, 5, 34, 6, 35, 34, 35, 6, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 7, 43, 42, 43, 18, 44, 19, 45, 44, 45, 13, 46, 14, 47, 46, 47, 17, 48, 18, 49, 48, 49, 14, 50, 15, 51, 50, 51, 16, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 17, 59, 58, 59, 15, 60, 16, 61, 60, 61, 21, 62, 3, 63, 62, 63, 26, 64, 27, 65, 64, 65, 28, 66, 29, 67, 66, 67, 30, 68, 31, 69, 68, 69, 32, 70, 33, 71, 70, 71, 34, 72, 35, 73, 72, 73, 40, 74, 41, 75, 74, 75, 37, 76, 38, 77, 76, 77, 41, 78, 42, 79, 78, 79, 38, 80, 39, 81, 80, 81, 44, 82, 45, 83, 82, 83, 48, 84, 49, 85, 84, 85, 50, 86, 51, 87, 86, 87, 52, 88, 53, 89, 88, 89, 57, 90, 58, 91, 90, 91, 53, 92, 54, 93, 92, 93, 66, 94, 67, 95, 94, 95, 68, 96, 69, 97, 96, 97];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [11, 1, 0, 4, 5, 6, 7, 8, 9, 10], [2, 1, 12, 13, 14, 15, 16, 17, 18, 19], [3, 2, 20, 21], [28, 66, 67, 29], [25, 11, 10, 24], [0, 3, 22, 23], [19, 18, 44, 45], [14, 13, 46, 47], [10, 9, 26, 27], [4, 28, 29, 5], [9, 8, 30, 31], [18, 17, 48, 49], [65, 27, 26, 64], [3, 21, 62, 63], [15, 14, 50, 51], [51, 50, 86, 87], [8, 7, 32, 33], [17, 16, 52, 53, 54, 55, 56, 57, 58, 59], [16, 15, 60, 61], [6, 5, 34, 35], [31, 30, 68, 69], [7, 6, 36, 37, 38, 39, 40, 41, 42, 43], [45, 44, 82, 83], [94, 95, 67, 66], [52, 88, 89, 53], [48, 84, 85, 49], [32, 70, 71, 33], [97, 69, 68, 96], [35, 34, 72, 73], [40, 74, 75, 41], [58, 57, 90, 91], [38, 37, 76, 77], [54, 53, 92, 93], [42, 41, 78, 79], [81, 39, 38, 80]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xCB2E22, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xCB2E22, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xCB2E22, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xCB2E22, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[69,68],
      [67,66],
      [54,53],
      [58,57],
      [53,52],
      [51,50],
      [49,48],
      [45,44],
      [39,38],
      [42,41],
      [38,37],
      [41,40],
      [35,34],
      [33,32],
      [31,30],
      [29,28],
      [27,26],
      [3,21],
      [16,15],
      [17,16],
      [15,14],
      [18,17],
      [14,13],
      [19,18],
      [7,6],
      [6,5],
      [8,7],
      [9,8],
      [5,4],
      [10,9],
      [11,10],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.28005175775058,
      2.28005175775058,
      2.24338711167446,
      2.24338711167446,
      2.24338711167446,
      2.89977231662984,
      2.92061293627607,
      2.89977231662984,
      2.15947345522654,
      2.24338711167446,
      2.24338711167446,
      2.15947345522654,
      2.92061293627607,
      2.92061293627607,
      2.89977231662984,
      2.89977231662984,
      2.89977231662984,
      2.89977231662984,
      2.15947345522654,
      1.5707963267949,
      2.24338711167446,
      2.15947345522654,
      2.24338711167446,
      2.24338711167446,
      1.5707963267949,
      2.15947345522654,
      2.15947345522654,
      2.24338711167446,
      2.24338711167446,
      2.24338711167446,
      2.15947345522654,
      2.92061293627607,
      2.92061293627607,
      2.15947345522654,
      2.15947345522654];

obj0.userData.subtrees = [[96,97],
      [94,95],
      [92,93],
      [90,91],
      [88,89],
      [86,87],
      [84,85],
      [82,83],
      [80,81],
      [78,79],
      [76,77],
      [74,75],
      [72,73],
      [70,71],
      [68,69,96,97],
      [66,67,94,95],
      [64,65],
      [62,63],
      [60,61],
      [52,53,54,55,56,57,58,59,88,89,90,91,92,93],
      [50,51,86,87],
      [48,49,84,85],
      [46,47],
      [44,45,82,83],
      [36,37,38,39,40,41,42,43,74,75,76,77,78,79,80,81],
      [34,35,72,73],
      [32,33,70,71],
      [30,31,68,69,96,97],
      [28,29,66,67,94,95],
      [26,27,64,65],
      [24,25],
      [22,23],
      [20,21,62,63],
      [12,13,14,15,16,17,18,19,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,82,83,84,85,86,87,88,89,90,91,92,93],
      [4,5,6,7,8,9,10,11,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,94,95,96,97]];

obj0.userData.polytoperoot = [[-0.717078949798189,-0.239026316599396,-0.559615525098478],
      [-5.30588417801854,0,-4.18363975242099],
      [1,2.60844779317854,-1.26824595137479]];

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
