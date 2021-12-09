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
obj0.userData.points.push(new PMPoint(0.326233, 0, 0));
obj0.userData.points.push(new PMPoint(0.48935, 0.282526, 0));
obj0.userData.points.push(new PMPoint(0.163117, 0.847579, 0));
obj0.userData.points.push(new PMPoint(-0.163117, 0.847579, 0));
obj0.userData.points.push(new PMPoint(-0.326233, 0.565053, 0));
obj0.userData.points.push(new PMPoint(-0.108744, -0.307576, 0));
obj0.userData.points.push(new PMPoint(0.217489, -0.307576, 0));
obj0.userData.points.push(new PMPoint(-0.652467, 0.565053, 0));
obj0.userData.points.push(new PMPoint(-0.815583, 0.282526, 0));
obj0.userData.points.push(new PMPoint(-0.48935, -0.282526, 0));
obj0.userData.points.push(new PMPoint(-0.163117, -0.282526, 0));
obj0.userData.points.push(new PMPoint(0.771876, 0.445643, 0));
obj0.userData.points.push(new PMPoint(0.445643, 1.0107, 0));
obj0.userData.points.push(new PMPoint(-0.483857, 0.907191, 0));
obj0.userData.points.push(new PMPoint(-0.646974, 0.624665, 0));
obj0.userData.points.push(new PMPoint(0.618336, 0.145272, 0));
obj0.userData.points.push(new PMPoint(0.781453, 0.427799, 0));
obj0.userData.points.push(new PMPoint(0.434978, 1.02791, 0));
obj0.userData.points.push(new PMPoint(0.108744, 1.02791, 0));
obj0.userData.points.push(new PMPoint(-0.271861, -0.590102, 0));
obj0.userData.points.push(new PMPoint(0.0543722, -1.15515, 0));
obj0.userData.points.push(new PMPoint(0.380606, -1.15515, 0));
obj0.userData.points.push(new PMPoint(0.543722, -0.872628, 0));
obj0.userData.points.push(new PMPoint(0.641481, -0.803502, 0));
obj0.userData.points.push(new PMPoint(0.962222, -0.74389, 0));
obj0.userData.points.push(new PMPoint(1.07097, -0.436314, 0));
obj0.userData.points.push(new PMPoint(0.646974, 0.0596124, 0));
obj0.userData.points.push(new PMPoint(-0.944569, 0.41978, 0));
obj0.userData.points.push(new PMPoint(-1.10769, 0.137254, 0));
obj0.userData.points.push(new PMPoint(-1.09811, 0.11941, 0));
obj0.userData.points.push(new PMPoint(-0.771876, -0.445643, 0));
obj0.userData.points.push(new PMPoint(-0.761211, -0.462859, 0));
obj0.userData.points.push(new PMPoint(-0.434978, -0.462859, 0));
obj0.userData.points.push(new PMPoint(1.42434, 0.445643, 0));
obj0.userData.points.push(new PMPoint(1.75058, 1.0107, 0));
obj0.userData.points.push(new PMPoint(1.42434, 1.57575, 0));
obj0.userData.points.push(new PMPoint(0.771876, 1.57575, 0));
obj0.userData.points.push(new PMPoint(-0.810091, 1.47224, 0));
obj0.userData.points.push(new PMPoint(-1.13632, 1.47224, 0));
obj0.userData.points.push(new PMPoint(-1.29944, 1.18972, 0));
obj0.userData.points.push(new PMPoint(-0.973207, 0.624665, 0));
obj0.userData.points.push(new PMPoint(0.0488795, 1.09554, 0));
obj0.userData.points.push(new PMPoint(-0.168609, 1.71069, 0));
obj0.userData.points.push(new PMPoint(-0.48935, 1.77031, 0));
obj0.userData.points.push(new PMPoint(-0.701346, 1.52234, 0));
obj0.userData.points.push(new PMPoint(1.18339, -0.180961, 0));
obj0.userData.points.push(new PMPoint(1.34651, 0.101566, 0));
obj0.userData.points.push(new PMPoint(0.434978, 1.68038, 0));
obj0.userData.points.push(new PMPoint(0.108744, 1.68038, 0));
obj0.userData.points.push(new PMPoint(-0.554387, -0.753219, 0));
obj0.userData.points.push(new PMPoint(-0.228154, -1.31827, 0));
obj0.userData.points.push(new PMPoint(-0.217489, -1.33549, 0));
obj0.userData.points.push(new PMPoint(0.108744, -1.33549, 0));
obj0.userData.points.push(new PMPoint(0.701346, -1.21477, 0));
obj0.userData.points.push(new PMPoint(0.864463, -0.932241, 0));
obj0.userData.points.push(new PMPoint(1.22286, -0.547688, 0));
obj0.userData.points.push(new PMPoint(1.33161, -0.240112, 0));
obj0.userData.points.push(new PMPoint(-1.50962, 0.746013, 0));
obj0.userData.points.push(new PMPoint(-1.67274, 0.463487, 0));
obj0.userData.points.push(new PMPoint(-1.75058, 0.11941, 0));
obj0.userData.points.push(new PMPoint(-2.07681, -0.445643, 0));
obj0.userData.points.push(new PMPoint(-1.75058, -1.0107, 0));
obj0.userData.points.push(new PMPoint(-1.09811, -1.0107, 0));
obj0.userData.points.push(new PMPoint(1.70687, 0.282526, 0));
obj0.userData.points.push(new PMPoint(2.0331, 0.847579, 0));
obj0.userData.points.push(new PMPoint(1.42434, 1.90198, 0));
obj0.userData.points.push(new PMPoint(0.771876, 1.90198, 0));
obj0.userData.points.push(new PMPoint(2.0331, 1.17381, 0));
obj0.userData.points.push(new PMPoint(1.70687, 1.73886, 0));
obj0.userData.points.push(new PMPoint(-0.701346, 1.77982, 0));
obj0.userData.points.push(new PMPoint(-1.02758, 1.77982, 0));
obj0.userData.points.push(new PMPoint(-1.42843, 1.32697, 0));
obj0.userData.points.push(new PMPoint(-1.59154, 1.04445, 0));
obj0.userData.points.push(new PMPoint(0.131626, 1.83831, 0));
obj0.userData.points.push(new PMPoint(-0.189114, 1.89793, 0));
obj0.userData.points.push(new PMPoint(0.149228, -1.9867, 0));
obj0.userData.points.push(new PMPoint(0.441331, -2.13197, 0));
obj0.userData.points.push(new PMPoint(0.713192, -1.95164, 0));
obj0.userData.points.push(new PMPoint(0.672708, -1.30043, 0));
obj0.userData.points.push(new PMPoint(-0.217489, -1.98795, 0));
obj0.userData.points.push(new PMPoint(0.108744, -1.98795, 0));
obj0.userData.points.push(new PMPoint(1.02758, -1.77982, 0));
obj0.userData.points.push(new PMPoint(1.35381, -1.77982, 0));
obj0.userData.points.push(new PMPoint(1.51693, -1.49729, 0));
obj0.userData.points.push(new PMPoint(1.1907, -0.932241, 0));
obj0.userData.points.push(new PMPoint(-2.0331, 0.282526, 0));
obj0.userData.points.push(new PMPoint(-2.35934, -0.282526, 0));
obj0.userData.points.push(new PMPoint(-2.35934, -0.60876, 0));
obj0.userData.points.push(new PMPoint(-2.0331, -1.17381, 0));
obj0.userData.points.push(new PMPoint(2.35871, 0.867821, 0));
obj0.userData.points.push(new PMPoint(2.07618, 1.03094, 0));
obj0.userData.points.push(new PMPoint(1.58746, 2.18451, 0));
obj0.userData.points.push(new PMPoint(1.42434, 2.46703, 0));
obj0.userData.points.push(new PMPoint(0.771876, 2.46703, 0));
obj0.userData.points.push(new PMPoint(0.60876, 2.18451, 0));
obj0.userData.points.push(new PMPoint(1.60468, 1.84761, 0));
obj0.userData.points.push(new PMPoint(1.60468, 2.17384, 0));
obj0.userData.points.push(new PMPoint(2.35934, 1.17381, 0));
obj0.userData.points.push(new PMPoint(2.52245, 1.45634, 0));
obj0.userData.points.push(new PMPoint(2.19622, 2.02139, 0));
obj0.userData.points.push(new PMPoint(1.86999, 2.02139, 0));
obj0.userData.points.push(new PMPoint(-1.45157, 2.27575, 0));
obj0.userData.points.push(new PMPoint(-1.77231, 2.21613, 0));
obj0.userData.points.push(new PMPoint(-1.88106, 1.90856, 0));
obj0.userData.points.push(new PMPoint(-1.45706, 1.41263, 0));
obj0.userData.points.push(new PMPoint(-0.174493, -2.0271, 0));
obj0.userData.points.push(new PMPoint(0.117609, -2.17237, 0));
obj0.userData.points.push(new PMPoint(0.70197, -2.32817, 0));
obj0.userData.points.push(new PMPoint(0.973831, -2.14784, 0));
obj0.userData.points.push(new PMPoint(-2.68494, -0.302768, 0));
obj0.userData.points.push(new PMPoint(-2.40241, -0.465885, 0));
obj0.userData.points.push(new PMPoint(-2.68557, -0.60876, 0));
obj0.userData.points.push(new PMPoint(-2.84869, -0.891286, 0));
obj0.userData.points.push(new PMPoint(-2.52245, -1.45634, 0));
obj0.userData.points.push(new PMPoint(-2.19622, -1.45634, 0));
obj0.userData.points.push(new PMPoint(1.79946, 2.43247, 0));
obj0.userData.points.push(new PMPoint(1.63634, 2.715, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 1, 7, 6, 7, 5, 8, 8, 9, 9, 10, 0, 11, 10, 11, 2, 12, 3, 13, 12, 13, 4, 14, 5, 15, 14, 15, 1, 16, 2, 17, 16, 17, 3, 18, 4, 19, 18, 19, 6, 20, 20, 21, 21, 22, 7, 23, 22, 23, 7, 24, 24, 25, 25, 26, 1, 27, 26, 27, 8, 28, 9, 29, 28, 29, 9, 30, 10, 31, 30, 31, 10, 32, 11, 33, 32, 33, 12, 34, 34, 35, 35, 36, 13, 37, 36, 37, 14, 38, 38, 39, 39, 40, 15, 41, 40, 41, 4, 42, 42, 43, 43, 44, 14, 45, 44, 45, 16, 46, 17, 47, 46, 47, 18, 48, 19, 49, 48, 49, 20, 50, 21, 51, 50, 51, 21, 52, 22, 53, 52, 53, 22, 54, 23, 55, 54, 55, 25, 56, 26, 57, 56, 57, 28, 58, 29, 59, 58, 59, 30, 60, 60, 61, 61, 62, 31, 63, 62, 63, 34, 64, 35, 65, 64, 65, 36, 66, 37, 67, 66, 67, 35, 68, 36, 69, 68, 69, 38, 70, 39, 71, 70, 71, 39, 72, 40, 73, 72, 73, 43, 74, 44, 75, 74, 75, 53, 76, 76, 77, 77, 78, 22, 79, 78, 79, 52, 80, 53, 81, 80, 81, 54, 82, 82, 83, 83, 84, 55, 85, 84, 85, 60, 86, 61, 87, 86, 87, 61, 88, 62, 89, 88, 89, 65, 90, 35, 91, 90, 91, 66, 92, 92, 93, 93, 94, 67, 95, 94, 95, 36, 96, 66, 97, 96, 97, 68, 98, 98, 99, 99, 100, 69, 101, 100, 101, 71, 102, 102, 103, 103, 104, 39, 105, 104, 105, 76, 106, 77, 107, 106, 107, 77, 108, 78, 109, 108, 109, 87, 110, 61, 111, 110, 111, 88, 112, 112, 113, 113, 114, 89, 115, 114, 115, 92, 116, 93, 117, 116, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [9, 8, 28, 29], [0, 6, 7, 1], [0, 5, 8, 9, 10, 11], [23, 7, 6, 20, 21, 22], [10, 9, 30, 31], [3, 2, 12, 13], [11, 10, 32, 33], [27, 1, 7, 24, 25, 26], [31, 30, 60, 61, 62, 63], [5, 4, 14, 15], [20, 50, 51, 21], [2, 1, 16, 17], [26, 25, 56, 57], [38, 70, 71, 39], [15, 14, 38, 39, 40, 41], [4, 3, 18, 19], [35, 34, 64, 65], [28, 58, 59, 29], [22, 21, 52, 53], [17, 16, 46, 47], [55, 23, 22, 54], [4, 42, 43, 44, 45, 14], [13, 12, 34, 35, 36, 37], [79, 22, 53, 76, 77, 78], [55, 54, 82, 83, 84, 85], [37, 36, 66, 67], [52, 80, 81, 53], [60, 86, 87, 61], [35, 65, 90, 91], [19, 18, 48, 49], [39, 71, 102, 103, 104, 105], [62, 61, 88, 89], [40, 39, 72, 73], [87, 110, 111, 61], [43, 74, 75, 44], [67, 66, 92, 93, 94, 95], [36, 96, 97, 66], [77, 76, 106, 107], [36, 35, 68, 69], [78, 77, 108, 109], [113, 114, 115, 89, 88, 112], [69, 68, 98, 99, 100, 101], [92, 116, 117, 93]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[93,92],
      [89,88],
      [61,87],
      [78,77],
      [77,76],
      [39,71],
      [69,68],
      [66,36],
      [67,66],
      [35,65],
      [62,61],
      [61,60],
      [55,54],
      [53,52],
      [22,53],
      [44,43],
      [40,39],
      [39,38],
      [36,35],
      [37,36],
      [35,34],
      [31,30],
      [29,28],
      [26,25],
      [23,22],
      [22,21],
      [21,20],
      [19,18],
      [17,16],
      [14,4],
      [15,14],
      [13,12],
      [11,10],
      [10,9],
      [9,8],
      [1,7],
      [7,6],
      [4,3],
      [2,1],
      [5,4],
      [3,2],
      [0,5],
      [1,0]];

obj0.userData.angles = [2.52611294491941,
      2.86594985437353,
      2.70108199058509,
      2.52611294491941,
      2.62678669846998,
      2.52611294491941,
      2.86594985437353,
      2.7010819905851,
      2.86594985437353,
      2.70108199058509,
      2.18627603546528,
      2.18627603546528,
      2.52611294491941,
      2.70108199058509,
      2.62678669846998,
      2.62678669846998,
      2.62678669846998,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.70108199058509,
      2.62678669846998,
      2.52611294491941,
      2.62678669846998,
      2.86594985437353,
      2.70108199058509,
      2.70108199058509,
      2.52611294491941,
      2.52611294491941,
      2.18627603546528,
      2.62678669846998,
      2.86594985437353,
      2.62678669846998,
      2.52611294491941,
      2.52611294491941,
      2.62678669846998,
      2.62678669846998,
      2.52611294491941,
      2.86594985437353,
      2.46191883468155,
      2.52611294491941];

obj0.userData.subtrees = [[116,117],
      [112,113,114,115],
      [110,111],
      [108,109],
      [106,107],
      [102,103,104,105],
      [98,99,100,101],
      [96,97],
      [92,93,94,95,116,117],
      [90,91],
      [88,89,112,113,114,115],
      [86,87,110,111],
      [82,83,84,85],
      [80,81],
      [76,77,78,79,106,107,108,109],
      [74,75],
      [72,73],
      [70,71,102,103,104,105],
      [68,69,98,99,100,101],
      [66,67,92,93,94,95,96,97,116,117],
      [64,65,90,91],
      [60,61,62,63,86,87,88,89,110,111,112,113,114,115],
      [58,59],
      [56,57],
      [54,55,82,83,84,85],
      [52,53,76,77,78,79,80,81,106,107,108,109],
      [50,51],
      [48,49],
      [46,47],
      [42,43,44,45,74,75],
      [38,39,40,41,70,71,72,73,102,103,104,105],
      [34,35,36,37,64,65,66,67,68,69,90,91,92,93,94,95,96,97,98,99,100,101,116,117],
      [32,33],
      [30,31,60,61,62,63,86,87,88,89,110,111,112,113,114,115],
      [28,29,58,59],
      [24,25,26,27,56,57],
      [20,21,22,23,50,51,52,53,54,55,76,77,78,79,80,81,82,83,84,85,106,107,108,109],
      [18,19,48,49],
      [16,17,46,47],
      [14,15,38,39,40,41,42,43,44,45,70,71,72,73,74,75,102,103,104,105],
      [12,13,34,35,36,37,64,65,66,67,68,69,90,91,92,93,94,95,96,97,98,99,100,101,116,117],
      [8,9,10,11,28,29,30,31,32,33,58,59,60,61,62,63,86,87,88,89,110,111,112,113,114,115],
      [6,7,20,21,22,23,24,25,26,27,50,51,52,53,54,55,56,57,76,77,78,79,80,81,82,83,84,85,106,107,108,109]];

obj0.userData.polytoperoot = [[-0.976684073187219,0.0887894611988381,-0.177578922397676],
      [-34.2142717793477,-6.55762110594001,-22.5251958171154],
      [6.54438088814364,-9.40533310850275,-7.20236204608398]];

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
