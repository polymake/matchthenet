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
obj0.userData.points.push(new PMPoint(0.288057, 0, 0));
obj0.userData.points.push(new PMPoint(0.5211, 0.403642, 0));
obj0.userData.points.push(new PMPoint(0.377071, 0.653107, 0));
obj0.userData.points.push(new PMPoint(0.0890145, 0.653107, 0));
obj0.userData.points.push(new PMPoint(-0.144028, 0.249465, 0));
obj0.userData.points.push(new PMPoint(-0.377071, -0.273958, 0));
obj0.userData.points.push(new PMPoint(-0.466086, -0.547917, 0));
obj0.userData.points.push(new PMPoint(-0.178029, -0.547917, 0));
obj0.userData.points.push(new PMPoint(0.199042, -0.273958, 0));
obj0.userData.points.push(new PMPoint(0.318167, -0.286479, 0));
obj0.userData.points.push(new PMPoint(0.58132, -0.169316, 0));
obj0.userData.points.push(new PMPoint(0.814363, 0.234327, 0));
obj0.userData.points.push(new PMPoint(0.784253, 0.520806, 0));
obj0.userData.points.push(new PMPoint(0.713848, 0.61771, 0));
obj0.userData.points.push(new PMPoint(0.762567, 1.08124, 0));
obj0.userData.points.push(new PMPoint(0.618538, 1.33071, 0));
obj0.userData.points.push(new PMPoint(0.425791, 1.11664, 0));
obj0.userData.points.push(new PMPoint(-0.547671, 0.0164217, 0));
obj0.userData.points.push(new PMPoint(-0.403642, -0.233043, 0));
obj0.userData.points.push(new PMPoint(0.0402952, 1.11664, 0));
obj0.userData.points.push(new PMPoint(-0.271577, 1.46301, 0));
obj0.userData.points.push(new PMPoint(-0.727478, 1.55991, 0));
obj0.userData.points.push(new PMPoint(-1.15327, 1.37034, 0));
obj0.userData.points.push(new PMPoint(-1.38631, 0.966697, 0));
obj0.userData.points.push(new PMPoint(-1.33759, 0.503164, 0));
obj0.userData.points.push(new PMPoint(-1.02572, 0.156795, 0));
obj0.userData.points.push(new PMPoint(-0.569819, 0.0598904, 0));
obj0.userData.points.push(new PMPoint(0.377071, 1.11919, 0));
obj0.userData.points.push(new PMPoint(0.0890145, 1.11919, 0));
obj0.userData.points.push(new PMPoint(-0.147919, -0.834396, 0));
obj0.userData.points.push(new PMPoint(0.115234, -0.951559, 0));
obj0.userData.points.push(new PMPoint(0.492306, -0.677601, 0));
obj0.userData.points.push(new PMPoint(0.462196, -0.391122, 0));
obj0.userData.points.push(new PMPoint(-0.569819, -0.0598904, 0));
obj0.userData.points.push(new PMPoint(-1.02572, -0.156795, 0));
obj0.userData.points.push(new PMPoint(-1.11473, -0.430754, 0));
obj0.userData.points.push(new PMPoint(-0.921987, -0.644822, 0));
obj0.userData.points.push(new PMPoint(-0.843157, -0.821875, 0));
obj0.userData.points.push(new PMPoint(-0.932172, -1.09583, 0));
obj0.userData.points.push(new PMPoint(-0.644115, -1.09583, 0));
obj0.userData.points.push(new PMPoint(-0.267043, -0.821875, 0));
obj0.userData.points.push(new PMPoint(1.07752, 0.117163, 0));
obj0.userData.points.push(new PMPoint(1.45459, 0.391122, 0));
obj0.userData.points.push(new PMPoint(1.42448, 0.677601, 0));
obj0.userData.points.push(new PMPoint(1.16132, 0.794764, 0));
obj0.userData.points.push(new PMPoint(0.830785, -0.313344, 0));
obj0.userData.points.push(new PMPoint(1.06383, 0.0902982, 0));
obj0.userData.points.push(new PMPoint(0.47451, 1.77398, 0));
obj0.userData.points.push(new PMPoint(0.192748, 1.83387, 0));
obj0.userData.points.push(new PMPoint(0, 1.6198, 0));
obj0.userData.points.push(new PMPoint(0.144028, 1.17653, 0));
obj0.userData.points.push(new PMPoint(0.955315, 1.29531, 0));
obj0.userData.points.push(new PMPoint(1.00403, 1.75884, 0));
obj0.userData.points.push(new PMPoint(0.860005, 2.00831, 0));
obj0.userData.points.push(new PMPoint(0.667258, 1.79424, 0));
obj0.userData.points.push(new PMPoint(-1.55166, 0.310417, 0));
obj0.userData.points.push(new PMPoint(-1.23979, -0.0359526, 0));
obj0.userData.points.push(new PMPoint(-1.40273, 1.51437, 0));
obj0.userData.points.push(new PMPoint(-1.63578, 1.11073, 0));
obj0.userData.points.push(new PMPoint(-0.211687, 1.74477, 0));
obj0.userData.points.push(new PMPoint(-0.667588, 1.84168, 0));
obj0.userData.points.push(new PMPoint(-1.64946, 1.08386, 0));
obj0.userData.points.push(new PMPoint(-1.88251, 0.914545, 0));
obj0.userData.points.push(new PMPoint(-1.83379, 0.451012, 0));
obj0.userData.points.push(new PMPoint(-1.57064, 0.333849, 0));
obj0.userData.points.push(new PMPoint(-0.697368, 1.84639, 0));
obj0.userData.points.push(new PMPoint(-0.930411, 2.01571, 0));
obj0.userData.points.push(new PMPoint(-1.3562, 1.82613, 0));
obj0.userData.points.push(new PMPoint(-1.38631, 1.53966, 0));
obj0.userData.points.push(new PMPoint(-0.0287942, -1.39483, 0));
obj0.userData.points.push(new PMPoint(0.115234, -1.83811, 0));
obj0.userData.points.push(new PMPoint(0.492306, -2.11207, 0));
obj0.userData.points.push(new PMPoint(0.958392, -2.11207, 0));
obj0.userData.points.push(new PMPoint(1.33546, -1.83811, 0));
obj0.userData.points.push(new PMPoint(1.47949, -1.39483, 0));
obj0.userData.points.push(new PMPoint(1.33546, -0.951559, 0));
obj0.userData.points.push(new PMPoint(0.958392, -0.677601, 0));
obj0.userData.points.push(new PMPoint(-0.337493, -1.26019, 0));
obj0.userData.points.push(new PMPoint(-0.0743399, -1.37735, 0));
obj0.userData.points.push(new PMPoint(-1.57064, -0.333849, 0));
obj0.userData.points.push(new PMPoint(-1.83379, -0.451012, 0));
obj0.userData.points.push(new PMPoint(-1.64104, -0.66508, 0));
obj0.userData.points.push(new PMPoint(-1.18514, -0.761985, 0));
obj0.userData.points.push(new PMPoint(-1.16521, -1.49948, 0));
obj0.userData.points.push(new PMPoint(-1.02119, -1.74894, 0));
obj0.userData.points.push(new PMPoint(-0.733129, -1.74894, 0));
obj0.userData.points.push(new PMPoint(-0.500086, -1.3453, 0));
obj0.userData.points.push(new PMPoint(1.91812, 0.439841, 0));
obj0.userData.points.push(new PMPoint(1.88801, 0.72632, 0));
obj0.userData.points.push(new PMPoint(0.4444, 2.06046, 0));
obj0.userData.points.push(new PMPoint(0.132527, 2.40683, 0));
obj0.userData.points.push(new PMPoint(-0.149235, 2.46672, 0));
obj0.userData.points.push(new PMPoint(-0.119125, 2.18024, 0));
obj0.userData.points.push(new PMPoint(1.29209, 1.75884, 0));
obj0.userData.points.push(new PMPoint(1.52513, 2.16249, 0));
obj0.userData.points.push(new PMPoint(1.38111, 2.41195, 0));
obj0.userData.points.push(new PMPoint(1.09305, 2.41195, 0));
obj0.userData.points.push(new PMPoint(-1.43284, 1.80085, 0));
obj0.userData.points.push(new PMPoint(-1.696, 1.68368, 0));
obj0.userData.points.push(new PMPoint(-1.92904, 1.28004, 0));
obj0.userData.points.push(new PMPoint(-1.89893, 0.993562, 0));
obj0.userData.points.push(new PMPoint(-2.07526, 1.12861, 0));
obj0.userData.points.push(new PMPoint(-2.21928, 0.879148, 0));
obj0.userData.points.push(new PMPoint(-2.17056, 0.415616, 0));
obj0.userData.points.push(new PMPoint(-1.97782, 0.201548, 0));
obj0.userData.points.push(new PMPoint(-0.786382, 2.26517, 0));
obj0.userData.points.push(new PMPoint(-1.06814, 2.32506, 0));
obj0.userData.points.push(new PMPoint(-1.49394, 2.13549, 0));
obj0.userData.points.push(new PMPoint(-1.63796, 1.88602, 0));
obj0.userData.points.push(new PMPoint(-0.0540813, -2.07115, 0));
obj0.userData.points.push(new PMPoint(0.32299, -2.34511, 0));
obj0.userData.points.push(new PMPoint(0.348277, -2.36153, 0));
obj0.userData.points.push(new PMPoint(0.492306, -2.611, 0));
obj0.userData.points.push(new PMPoint(0.958392, -2.611, 0));
obj0.userData.points.push(new PMPoint(1.10242, -2.36153, 0));
obj0.userData.points.push(new PMPoint(1.12771, -2.34511, 0));
obj0.userData.points.push(new PMPoint(1.50478, -2.07115, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 6, 7, 7, 8, 1, 9, 8, 9, 1, 10, 10, 11, 11, 12, 2, 13, 12, 13, 2, 14, 14, 15, 15, 16, 3, 17, 16, 17, 5, 18, 0, 19, 18, 19, 4, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 5, 27, 26, 27, 3, 28, 4, 29, 28, 29, 8, 30, 30, 31, 31, 32, 9, 33, 32, 33, 6, 34, 34, 35, 35, 36, 7, 37, 36, 37, 7, 38, 38, 39, 39, 40, 8, 41, 40, 41, 12, 42, 42, 43, 43, 44, 13, 45, 44, 45, 11, 46, 12, 47, 46, 47, 16, 48, 48, 49, 49, 50, 17, 51, 50, 51, 15, 52, 52, 53, 53, 54, 16, 55, 54, 55, 25, 56, 26, 57, 56, 57, 23, 58, 24, 59, 58, 59, 21, 60, 22, 61, 60, 61, 24, 62, 62, 63, 63, 64, 25, 65, 64, 65, 22, 66, 66, 67, 67, 68, 23, 69, 68, 69, 31, 70, 70, 71, 71, 72, 72, 73, 73, 74, 74, 75, 75, 76, 32, 77, 76, 77, 30, 78, 31, 79, 78, 79, 36, 80, 80, 81, 81, 82, 37, 83, 82, 83, 39, 84, 84, 85, 85, 86, 40, 87, 86, 87, 43, 88, 44, 89, 88, 89, 48, 90, 90, 91, 91, 92, 49, 93, 92, 93, 53, 94, 94, 95, 95, 96, 54, 97, 96, 97, 58, 98, 98, 99, 99, 100, 59, 101, 100, 101, 63, 102, 102, 103, 103, 104, 64, 105, 104, 105, 67, 106, 106, 107, 107, 108, 68, 109, 108, 109, 71, 110, 72, 111, 110, 111, 72, 112, 112, 113, 113, 114, 73, 115, 114, 115, 73, 116, 74, 117, 116, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [9, 1, 0, 6, 7, 8], [2, 1, 10, 11, 12, 13], [3, 2, 14, 15, 16, 17], [13, 12, 42, 43, 44, 45], [33, 9, 8, 30, 31, 32], [34, 35, 36, 37, 7, 6], [0, 5, 18, 19], [5, 4, 20, 21, 22, 23, 24, 25, 26, 27], [8, 7, 38, 39, 40, 41], [4, 3, 28, 29], [12, 11, 46, 47], [40, 39, 84, 85, 86, 87], [17, 16, 48, 49, 50, 51], [80, 81, 82, 83, 37, 36], [32, 31, 70, 71, 72, 73, 74, 75, 76, 77], [31, 30, 78, 79], [26, 25, 56, 57], [24, 23, 58, 59], [22, 21, 60, 61], [72, 71, 110, 111], [16, 15, 52, 53, 54, 55], [64, 63, 102, 103, 104, 105], [44, 43, 88, 89], [73, 72, 112, 113, 114, 115], [25, 24, 62, 63, 64, 65], [48, 90, 91, 92, 93, 49], [54, 53, 94, 95, 96, 97], [23, 22, 66, 67, 68, 69], [74, 73, 116, 117], [58, 98, 99, 100, 101, 59], [68, 67, 106, 107, 108, 109]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[74,73],
      [73,72],
      [72,71],
      [68,67],
      [64,63],
      [59,58],
      [54,53],
      [49,48],
      [44,43],
      [40,39],
      [37,36],
      [31,30],
      [32,31],
      [23,22],
      [25,24],
      [22,21],
      [24,23],
      [26,25],
      [16,15],
      [17,16],
      [12,11],
      [13,12],
      [8,7],
      [7,6],
      [9,8],
      [4,3],
      [5,4],
      [0,5],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      1.75950685757846,
      1.75950685757846,
      2.58801829469275,
      2.48923451380543,
      2.48923451380542,
      2.77672882547631,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      1.75950685757846,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380542,
      1.75950685757846,
      2.48923451380543];

obj0.userData.subtrees = [[116,117],
      [112,113,114,115],
      [110,111],
      [106,107,108,109],
      [102,103,104,105],
      [98,99,100,101],
      [94,95,96,97],
      [90,91,92,93],
      [88,89],
      [84,85,86,87],
      [80,81,82,83],
      [78,79],
      [70,71,72,73,74,75,76,77,110,111,112,113,114,115,116,117],
      [66,67,68,69,106,107,108,109],
      [62,63,64,65,102,103,104,105],
      [60,61],
      [58,59,98,99,100,101],
      [56,57],
      [52,53,54,55,94,95,96,97],
      [48,49,50,51,90,91,92,93],
      [46,47],
      [42,43,44,45,88,89],
      [38,39,40,41,84,85,86,87],
      [34,35,36,37,80,81,82,83],
      [30,31,32,33,70,71,72,73,74,75,76,77,78,79,110,111,112,113,114,115,116,117],
      [28,29],
      [20,21,22,23,24,25,26,27,56,57,58,59,60,61,62,63,64,65,66,67,68,69,98,99,100,101,102,103,104,105,106,107,108,109],
      [18,19],
      [14,15,16,17,48,49,50,51,52,53,54,55,90,91,92,93,94,95,96,97],
      [10,11,12,13,42,43,44,45,46,47,88,89],
      [6,7,8,9,30,31,32,33,34,35,36,37,38,39,40,41,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,110,111,112,113,114,115,116,117]];

obj0.userData.polytoperoot = [[-0.987185902922395,-0.233042979519194,-0.0550139848456209],
      [-6.9430711540342,-6.9430711540342,-6.9430711540342],
      [2.23606797749979,0.381966011250105,-2.61803398874989]];

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
