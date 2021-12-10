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
obj0.userData.points.push(new PMPoint(0.539725, 0, 0));
obj0.userData.points.push(new PMPoint(0.514138, 0.46149, 0));
obj0.userData.points.push(new PMPoint(0.15468, 0.411496, 0));
obj0.userData.points.push(new PMPoint(0.192318, -0.492006, 0));
obj0.userData.points.push(new PMPoint(0.510915, -0.355038, 0));
obj0.userData.points.push(new PMPoint(1.10384, 0.0480247, 0));
obj0.userData.points.push(new PMPoint(0.883982, 0.465626, 0));
obj0.userData.points.push(new PMPoint(-0.0835984, 0.674922, 0));
obj0.userData.points.push(new PMPoint(-0.392875, 0.353136, 0));
obj0.userData.points.push(new PMPoint(0.40245, 1.02034, 0));
obj0.userData.points.push(new PMPoint(-0.0593978, 0.69494, 0));
obj0.userData.points.push(new PMPoint(0.806738, -0.553458, 0));
obj0.userData.points.push(new PMPoint(1.10153, -0.0701006, 0));
obj0.userData.points.push(new PMPoint(-0.838683, -0.822065, 0));
obj0.userData.points.push(new PMPoint(0.417046, -0.970078, 0));
obj0.userData.points.push(new PMPoint(0.788386, -0.578402, 0));
obj0.userData.points.push(new PMPoint(1.48728, 0.489208, 0));
obj0.userData.points.push(new PMPoint(1.09348, 0.784311, 0));
obj0.userData.points.push(new PMPoint(1.06116, 0.803355, 0));
obj0.userData.points.push(new PMPoint(0.52574, 1.03127, 0));
obj0.userData.points.push(new PMPoint(-1.06459, -0.495801, 0));
obj0.userData.points.push(new PMPoint(-0.35626, 0.902573, 0));
obj0.userData.points.push(new PMPoint(-0.761303, 0.731708, 0));
obj0.userData.points.push(new PMPoint(-0.0862084, 1.31359, 0));
obj0.userData.points.push(new PMPoint(-0.254261, 0.991922, 0));
obj0.userData.points.push(new PMPoint(1.11988, -0.731968, 0));
obj0.userData.points.push(new PMPoint(1.43775, -0.537626, 0));
obj0.userData.points.push(new PMPoint(0.321488, -1.00423, 0));
obj0.userData.points.push(new PMPoint(0.914335, -1.17986, 0));
obj0.userData.points.push(new PMPoint(1.03583, -0.840499, 0));
obj0.userData.points.push(new PMPoint(1.64582, -0.146616, 0));
obj0.userData.points.push(new PMPoint(1.75973, 0.215412, 0));
obj0.userData.points.push(new PMPoint(1.824, 0.988407, 0));
obj0.userData.points.push(new PMPoint(1.33756, 1.08287, 0));
obj0.userData.points.push(new PMPoint(1.19233, 1.16599, 0));
obj0.userData.points.push(new PMPoint(0.930623, 1.44922, 0));
obj0.userData.points.push(new PMPoint(-0.826892, 0.654276, 0));
obj0.userData.points.push(new PMPoint(-0.320551, 1.26373, 0));
obj0.userData.points.push(new PMPoint(-0.782692, 1.27101, 0));
obj0.userData.points.push(new PMPoint(0.494249, 1.59496, 0));
obj0.userData.points.push(new PMPoint(0.11402, 1.62457, 0));
obj0.userData.points.push(new PMPoint(1.13604, -1.09206, 0));
obj0.userData.points.push(new PMPoint(1.70063, -1.04999, 0));
obj0.userData.points.push(new PMPoint(0.0415525, -1.45221, 0));
obj0.userData.points.push(new PMPoint(0.403011, -1.49815, 0));
obj0.userData.points.push(new PMPoint(0.749795, -1.49578, 0));
obj0.userData.points.push(new PMPoint(2.13073, 0.322877, 0));
obj0.userData.points.push(new PMPoint(1.93468, 0.892215, 0));
obj0.userData.points.push(new PMPoint(2.2016, -0.297373, 0));
obj0.userData.points.push(new PMPoint(2.13986, 0.283881, 0));
obj0.userData.points.push(new PMPoint(1.69859, 1.57735, 0));
obj0.userData.points.push(new PMPoint(1.22297, 1.45108, 0));
obj0.userData.points.push(new PMPoint(-1.34473, 0.54987, 0));
obj0.userData.points.push(new PMPoint(-0.331075, 1.63345, 0));
obj0.userData.points.push(new PMPoint(-0.757061, 1.83659, 0));
obj0.userData.points.push(new PMPoint(-1.13631, 1.22815, 0));
obj0.userData.points.push(new PMPoint(-1.26054, 0.904377, 0));
obj0.userData.points.push(new PMPoint(0.50221, 2.08699, 0));
obj0.userData.points.push(new PMPoint(-0.0813902, 2.05416, 0));
obj0.userData.points.push(new PMPoint(1.17781, -1.44581, 0));
obj0.userData.points.push(new PMPoint(1.50696, -1.58199, 0));
obj0.userData.points.push(new PMPoint(-0.292297, -1.8616, 0));
obj0.userData.points.push(new PMPoint(0.424254, -2.02598, 0));
obj0.userData.points.push(new PMPoint(0.918632, -1.80943, 0));
obj0.userData.points.push(new PMPoint(2.58748, 0.506006, 0));
obj0.userData.points.push(new PMPoint(2.42899, 0.857563, 0));
obj0.userData.points.push(new PMPoint(2.62097, -0.0808965, 0));
obj0.userData.points.push(new PMPoint(2.63169, 0.300334, 0));
obj0.userData.points.push(new PMPoint(2.22975, 1.27286, 0));
obj0.userData.points.push(new PMPoint(2.18439, 1.65581, 0));
obj0.userData.points.push(new PMPoint(-1.84541, 0.381417, 0));
obj0.userData.points.push(new PMPoint(-1.2832, 1.62752, 0));
obj0.userData.points.push(new PMPoint(-1.1375, 1.30248, 0));
obj0.userData.points.push(new PMPoint(-1.37049, 1.49655, 0));
obj0.userData.points.push(new PMPoint(-1.74715, 1.10998, 0));
obj0.userData.points.push(new PMPoint(0.439107, 2.57503, 0));
obj0.userData.points.push(new PMPoint(0.0645988, 2.50295, 0));
obj0.userData.points.push(new PMPoint(1.94575, -1.7272, 0));
obj0.userData.points.push(new PMPoint(2.04633, -1.37127, 0));
obj0.userData.points.push(new PMPoint(-0.818815, -1.90443, 0));
obj0.userData.points.push(new PMPoint(0.731038, -2.34084, 0));
obj0.userData.points.push(new PMPoint(1.08035, -2.24241, 0));
obj0.userData.points.push(new PMPoint(3.10393, 0.774153, 0));
obj0.userData.points.push(new PMPoint(2.6683, 1.15996, 0));
obj0.userData.points.push(new PMPoint(2.9415, -0.265454, 0));
obj0.userData.points.push(new PMPoint(3.21015, 0.237148, 0));
obj0.userData.points.push(new PMPoint(-2.07075, -0.0963651, 0));
obj0.userData.points.push(new PMPoint(-1.08827, 2.17279, 0));
obj0.userData.points.push(new PMPoint(-1.44112, 2.0619, 0));
obj0.userData.points.push(new PMPoint(-1.71888, 1.80028, 0));
obj0.userData.points.push(new PMPoint(-1.93393, 1.50794, 0));
obj0.userData.points.push(new PMPoint(0.283431, 3.13572, 0));
obj0.userData.points.push(new PMPoint(-0.169249, 2.78951, 0));
obj0.userData.points.push(new PMPoint(-0.767801, -2.34782, 0));
obj0.userData.points.push(new PMPoint(-0.418623, -2.28267, 0));
obj0.userData.points.push(new PMPoint(0.64867, -2.68636, 0));
obj0.userData.points.push(new PMPoint(1.20227, -2.79912, 0));
obj0.userData.points.push(new PMPoint(-2.284, 0.411324, 0));
obj0.userData.points.push(new PMPoint(-2.46784, 0.107398, 0));
obj0.userData.points.push(new PMPoint(-2.19709, 2.11028, 0));
obj0.userData.points.push(new PMPoint(-2.28634, 1.55241, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 0, 14, 4, 14, 4, 15, 5, 16, 15, 16, 6, 17, 7, 18, 17, 18, 7, 19, 2, 20, 19, 20, 0, 21, 9, 21, 8, 22, 9, 23, 22, 23, 10, 24, 11, 25, 24, 25, 12, 26, 13, 27, 26, 27, 4, 28, 14, 28, 15, 29, 16, 30, 29, 30, 6, 31, 17, 32, 31, 32, 17, 33, 18, 34, 33, 34, 19, 35, 20, 36, 35, 36, 9, 37, 21, 37, 22, 38, 23, 39, 38, 39, 10, 40, 24, 41, 40, 41, 26, 42, 27, 43, 42, 43, 14, 44, 28, 44, 15, 45, 29, 46, 45, 46, 32, 47, 17, 48, 47, 48, 31, 49, 32, 50, 49, 50, 33, 51, 34, 52, 51, 52, 21, 53, 37, 53, 38, 54, 39, 55, 54, 55, 39, 56, 23, 57, 56, 57, 40, 58, 41, 59, 58, 59, 42, 60, 43, 61, 60, 61, 14, 62, 44, 62, 45, 63, 46, 64, 63, 64, 47, 65, 48, 66, 65, 66, 49, 67, 50, 68, 67, 68, 33, 69, 51, 70, 69, 70, 21, 71, 53, 71, 55, 72, 39, 73, 72, 73, 56, 74, 57, 75, 74, 75, 58, 76, 59, 77, 76, 77, 61, 78, 43, 79, 78, 79, 14, 80, 62, 80, 63, 81, 64, 82, 81, 82, 65, 83, 66, 84, 83, 84, 67, 85, 68, 86, 85, 86, 21, 87, 71, 87, 55, 88, 72, 89, 88, 89, 74, 90, 75, 91, 90, 91, 76, 92, 77, 93, 92, 93, 80, 94, 62, 95, 94, 95, 81, 96, 82, 97, 96, 97, 71, 98, 87, 99, 98, 99, 90, 100, 91, 101, 100, 101];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [0, 14, 4], [7, 6, 17, 18], [16, 5, 4, 15], [0, 9, 21], [13, 12, 26, 27], [28, 4, 14], [9, 8, 22, 23], [17, 6, 31, 32], [16, 15, 29, 30], [9, 37, 21], [18, 17, 33, 34], [28, 14, 44], [22, 38, 39, 23], [17, 32, 47, 48], [27, 26, 42, 43], [29, 15, 45, 46], [21, 37, 53], [34, 33, 51, 52], [32, 31, 49, 50], [38, 54, 55, 39], [23, 39, 56, 57], [48, 47, 65, 66], [43, 42, 60, 61], [41, 40, 58, 59], [44, 14, 62], [51, 33, 69, 70], [50, 49, 67, 68], [39, 55, 72, 73], [46, 45, 63, 64], [21, 53, 71], [43, 61, 78, 79], [59, 58, 76, 77], [62, 14, 80], [57, 56, 74, 75], [55, 88, 89, 72], [64, 63, 81, 82], [21, 71, 87], [62, 80, 94, 95], [75, 74, 90, 91], [71, 98, 99, 87], [2, 7, 19, 20], [3, 2, 10, 11], [20, 19, 35, 36], [11, 10, 24, 25], [24, 10, 40, 41], [68, 67, 85, 86], [66, 65, 83, 84], [97, 82, 81, 96], [77, 76, 92, 93], [90, 100, 101, 91]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
obj0.userData.axes = [[91,90],
      [87,71],
      [82,81],
      [62,80],
      [77,76],
      [75,74],
      [72,55],
      [21,71],
      [68,67],
      [66,65],
      [64,63],
      [62,14],
      [43,61],
      [59,58],
      [57,56],
      [39,55],
      [21,53],
      [51,33],
      [50,49],
      [48,47],
      [46,45],
      [44,14],
      [43,42],
      [41,40],
      [23,39],
      [39,38],
      [21,37],
      [34,33],
      [32,31],
      [17,32],
      [29,15],
      [28,14],
      [27,26],
      [24,10],
      [23,22],
      [21,9],
      [20,19],
      [18,17],
      [17,6],
      [16,15],
      [4,14],
      [13,12],
      [11,10],
      [9,8],
      [0,9],
      [2,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.69061369219015,
      2.71039914982383,
      2.69061369219015,
      2.71039914982383,
      2.66676269530584,
      2.69902858238642,
      2.68449868983043,
      2.71576555388821,
      2.66676269530584,
      2.65582886583527,
      2.69902858238642,
      2.71576555388821,
      2.68449868983043,
      2.66264388466519,
      2.70287311523343,
      2.68449868983043,
      2.71576555388821,
      2.65141765217348,
      2.66264388466519,
      2.65141765217348,
      2.70287311523343,
      2.71576555388821,
      2.68449868983043,
      2.66676269530584,
      2.69902858238642,
      2.68805111602412,
      2.71576555388821,
      2.65141765217348,
      2.66264388466519,
      2.65761870792341,
      2.69902858238642,
      2.71576555388821,
      2.6792798785425,
      2.67957999423518,
      2.69902858238642,
      2.71576555388821,
      2.66551890452118,
      2.65761870792341,
      2.66264388466519,
      2.69902858238642,
      2.71576555388821,
      2.68449868983043,
      2.6861788800548,
      2.70287311523343,
      2.71039914982383,
      2.67520986370487,
      2.67236773031476,
      2.70287311523343,
      2.71039914982383,
      2.69699128655038,
      2.69061369219015,
      2.69902858238642,
      2.68805111602412,
      2.69902858238642];

obj0.userData.subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [90,91,100,101],
      [88,89],
      [87,98,99],
      [85,86],
      [83,84],
      [81,82,96,97],
      [80,94,95],
      [78,79],
      [76,77,92,93],
      [74,75,90,91,100,101],
      [72,73,88,89],
      [71,87,98,99],
      [69,70],
      [67,68,85,86],
      [65,66,83,84],
      [63,64,81,82,96,97],
      [62,80,94,95],
      [60,61,78,79],
      [58,59,76,77,92,93],
      [56,57,74,75,90,91,100,101],
      [54,55,72,73,88,89],
      [53,71,87,98,99],
      [51,52,69,70],
      [49,50,67,68,85,86],
      [47,48,65,66,83,84],
      [45,46,63,64,81,82,96,97],
      [44,62,80,94,95],
      [42,43,60,61,78,79],
      [40,41,58,59,76,77,92,93],
      [38,39,54,55,56,57,72,73,74,75,88,89,90,91,100,101],
      [37,53,71,87,98,99],
      [35,36],
      [33,34,51,52,69,70],
      [31,32,47,48,49,50,65,66,67,68,83,84,85,86],
      [29,30,45,46,63,64,81,82,96,97],
      [28,44,62,80,94,95],
      [26,27,42,43,60,61,78,79],
      [24,25,40,41,58,59,76,77,92,93],
      [22,23,38,39,54,55,56,57,72,73,74,75,88,89,90,91,100,101],
      [21,37,53,71,87,98,99],
      [19,20,35,36],
      [17,18,31,32,33,34,47,48,49,50,51,52,65,66,67,68,69,70,83,84,85,86],
      [15,16,29,30,45,46,63,64,81,82,96,97],
      [14,28,44,62,80,94,95],
      [12,13,26,27,42,43,60,61,78,79],
      [10,11,24,25,40,41,58,59,76,77,92,93],
      [8,9,21,22,23,37,38,39,53,54,55,56,57,71,72,73,74,75,87,88,89,90,91,98,99,100,101],
      [6,7,17,18,19,20,31,32,33,34,35,36,47,48,49,50,51,52,65,66,67,68,69,70,83,84,85,86],
      [4,5,12,13,14,15,16,26,27,28,29,30,42,43,44,45,46,60,61,62,63,64,78,79,80,81,82,94,95,96,97]];

obj0.userData.polytoperoot = [[0,-0.833790852259164,-0.515311086204906],
      [-0.190570004403417,-1.00574943764758,-0.313238592271354],
      [-0.568546304103551,0.0982028359671983,0.0305850711359767]];

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
