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
obj0.userData.points.push(new PMPoint(0.447838, 0, 0));
obj0.userData.points.push(new PMPoint(0.586227, 0.425919, 0));
obj0.userData.points.push(new PMPoint(0.223919, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-0.13839, 0.425919, 0));
obj0.userData.points.push(new PMPoint(0, -0.447838, 0));
obj0.userData.points.push(new PMPoint(0.447838, -0.447838, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.01215, 0.28753, 0));
obj0.userData.points.push(new PMPoint(0.633039, 0.871304, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 0.788228, 0));
obj0.userData.points.push(new PMPoint(-0.438052, 0.0931107, 0));
obj0.userData.points.push(new PMPoint(-0.13839, -0.873757, 0));
obj0.userData.points.push(new PMPoint(0.223919, -1.13699, 0));
obj0.userData.points.push(new PMPoint(0.586227, -0.873757, 0));
obj0.userData.points.push(new PMPoint(0.835677, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.447838, 0, 0));
obj0.userData.points.push(new PMPoint(-0.447838, -0.447838, 0));
obj0.userData.points.push(new PMPoint(1.15054, 0.713449, 0));
obj0.userData.points.push(new PMPoint(0.724617, 0.851838, 0));
obj0.userData.points.push(new PMPoint(1.23607, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.59837, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.45998, 0.28753, 0));
obj0.userData.points.push(new PMPoint(0.450887, 1.28042, 0));
obj0.userData.points.push(new PMPoint(0.0417669, 1.09827, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 0.524995, 0));
obj0.userData.points.push(new PMPoint(-0.500698, 0.162687, 0));
obj0.userData.points.push(new PMPoint(-0.438052, -0.540949, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -1.4993, 0));
obj0.userData.points.push(new PMPoint(1.01215, -0.735368, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.309448, 0));
obj0.userData.points.push(new PMPoint(0.487152, -1.4993, 0));
obj0.userData.points.push(new PMPoint(0.84946, -1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.873757, 0.13839, 0));
obj0.userData.points.push(new PMPoint(-1.13699, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.873757, -0.586227, 0));
obj0.userData.points.push(new PMPoint(1.41377, 1.07576, 0));
obj0.userData.points.push(new PMPoint(1.15054, 1.43807, 0));
obj0.userData.points.push(new PMPoint(0.724617, 1.29968, 0));
obj0.userData.points.push(new PMPoint(1.4502, 0.38064, 0));
obj0.userData.points.push(new PMPoint(2.02429, 0, 0));
obj0.userData.points.push(new PMPoint(1.8859, 0.425919, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.763931, 0));
obj0.userData.points.push(new PMPoint(1.86161, -0.500698, 0));
obj0.userData.points.push(new PMPoint(0.0885787, 1.54366, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.810742, 0.606076, 0));
obj0.userData.points.push(new PMPoint(-0.77086, -0.840611, 0));
obj0.userData.points.push(new PMPoint(-0.471198, -1.17342, 0));
obj0.userData.points.push(new PMPoint(0.406071, -1.54611, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -1.92522, 0));
obj0.userData.points.push(new PMPoint(0.919036, -1.17342, 0));
obj0.userData.points.push(new PMPoint(0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.07338, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.21177, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-1.4993, -0.487152, 0));
obj0.userData.points.push(new PMPoint(-1.23607, -0.84946, 0));
obj0.userData.points.push(new PMPoint(-1.23607, 0.401622, 0));
obj0.userData.points.push(new PMPoint(-1.4993, 0.0393136, 0));
obj0.userData.points.push(new PMPoint(1.01215, 1.86399, 0));
obj0.userData.points.push(new PMPoint(0.586227, 1.7256, 0));
obj0.userData.points.push(new PMPoint(1.51284, 0.450216, 0));
obj0.userData.points.push(new PMPoint(1.77608, 0.812525, 0));
obj0.userData.points.push(new PMPoint(1.77608, 1.33899, 0));
obj0.userData.points.push(new PMPoint(1.51284, 1.7013, 0));
obj0.userData.points.push(new PMPoint(2.47213, 0, 0));
obj0.userData.points.push(new PMPoint(2.61052, 0.425919, 0));
obj0.userData.points.push(new PMPoint(2.24821, 0.689152, 0));
obj0.userData.points.push(new PMPoint(1.93118, -0.438052, 0));
obj0.userData.points.push(new PMPoint(-1.01338, 1.7013, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 2.61437, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-1.41377, 1.879, 0));
obj0.userData.points.push(new PMPoint(-1.77608, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.90925, -1.26653, 0));
obj0.userData.points.push(new PMPoint(-0.0861254, -1.94468, 0));
obj0.userData.points.push(new PMPoint(0.359259, -1.99149, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -2.06361, 0));
obj0.userData.points.push(new PMPoint(0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.07338, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.4993, -2.06361, 0));
obj0.userData.points.push(new PMPoint(1.63769, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.54611, -0.0417669, 0));
obj0.userData.points.push(new PMPoint(1.4502, 1.77087, 0));
obj0.userData.points.push(new PMPoint(1.82289, 1.25791, 0));
obj0.userData.points.push(new PMPoint(2.13839, 1.60222, 0));
obj0.userData.points.push(new PMPoint(1.87515, 1.96453, 0));
obj0.userData.points.push(new PMPoint(2.89805, -0.13839, 0));
obj0.userData.points.push(new PMPoint(3.03644, 0.28753, 0));
obj0.userData.points.push(new PMPoint(-0.84946, 2.31306, 0));
obj0.userData.points.push(new PMPoint(-1.2373, 2.08914, 0));
obj0.userData.points.push(new PMPoint(-0.664855, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-1.02716, 2.71345, 0));
obj0.userData.points.push(new PMPoint(-1.677, 2.24131, 0));
obj0.userData.points.push(new PMPoint(-2.03931, 1.97808, 0));
obj0.userData.points.push(new PMPoint(0.0960267, -2.3538, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -3.06221, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-1.01338, -2.14914, 0));
obj0.userData.points.push(new PMPoint(1.46122, -2.14914, 0));
obj0.userData.points.push(new PMPoint(2.32054, 2.01134, 0));
obj0.userData.points.push(new PMPoint(-1.2373, 2.53698, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 9, 3, 10, 4, 11, 10, 11, 0, 12, 4, 12, 5, 13, 13, 14, 6, 15, 14, 15, 1, 16, 6, 16, 0, 17, 5, 18, 17, 18, 8, 19, 2, 20, 19, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 3, 25, 24, 25, 10, 26, 26, 27, 11, 28, 27, 28, 11, 29, 4, 30, 29, 30, 5, 31, 13, 31, 13, 32, 14, 33, 32, 33, 15, 34, 6, 35, 34, 35, 14, 36, 15, 37, 36, 37, 17, 38, 38, 39, 18, 40, 39, 40, 19, 41, 41, 42, 20, 43, 42, 43, 8, 44, 19, 44, 22, 45, 23, 46, 45, 46, 21, 47, 22, 48, 47, 48, 24, 49, 25, 49, 26, 50, 27, 51, 50, 51, 27, 52, 28, 53, 52, 53, 11, 54, 28, 54, 31, 55, 13, 56, 55, 56, 14, 57, 33, 57, 32, 58, 58, 59, 33, 60, 59, 60, 15, 61, 34, 61, 36, 62, 62, 63, 37, 64, 63, 64, 39, 65, 40, 66, 65, 66, 38, 67, 39, 68, 67, 68, 42, 69, 43, 70, 69, 70, 19, 71, 41, 72, 71, 72, 41, 73, 42, 74, 73, 74, 45, 75, 75, 76, 46, 77, 76, 77, 22, 78, 45, 78, 27, 79, 51, 79, 50, 80, 80, 81, 51, 82, 81, 82, 52, 83, 83, 84, 53, 85, 84, 85, 55, 86, 56, 86, 33, 87, 57, 88, 87, 88, 59, 89, 60, 90, 89, 90, 58, 91, 59, 92, 91, 92, 62, 93, 63, 94, 93, 94, 63, 95, 64, 96, 95, 96, 39, 97, 65, 97, 42, 98, 69, 98, 41, 99, 72, 99, 73, 100, 74, 101, 100, 101, 75, 102, 76, 103, 102, 103, 51, 104, 79, 105, 104, 105, 81, 106, 82, 107, 106, 107, 83, 108, 84, 109, 108, 109, 87, 110, 88, 110, 89, 111, 111, 112, 90, 113, 112, 113, 59, 114, 89, 114, 63, 115, 94, 115, 100, 116, 101, 116, 104, 117, 105, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [31, 55, 56, 13], [5, 31, 13], [6, 5, 13, 14, 15], [2, 1, 7, 8], [16, 1, 6], [40, 39, 65, 66], [55, 86, 56], [14, 13, 32, 33], [35, 6, 15, 34], [2, 8, 19, 20], [53, 52, 83, 84, 85], [20, 19, 41, 42, 43], [27, 26, 50, 51], [27, 51, 79], [43, 42, 69, 70], [8, 44, 19], [51, 104, 105, 79], [71, 72, 41, 19], [84, 83, 108, 109], [51, 50, 80, 81, 82], [42, 98, 69], [23, 22, 45, 46], [104, 117, 105], [72, 99, 41], [63, 62, 93, 94], [64, 63, 95, 96], [46, 45, 75, 76, 77], [76, 75, 102, 103], [100, 116, 101], [63, 94, 115], [73, 100, 101, 74], [82, 81, 106, 107], [113, 90, 89, 111, 112], [22, 78, 45], [88, 87, 110], [42, 41, 73, 74], [64, 37, 36, 62, 63], [114, 89, 59], [60, 59, 89, 90], [22, 21, 47, 48], [88, 57, 33, 87], [34, 15, 61], [14, 33, 57], [15, 14, 36, 37], [91, 92, 59, 58], [8, 7, 21, 22, 23], [33, 32, 58, 59, 60], [25, 24, 49], [28, 27, 52, 53], [97, 65, 39], [3, 2, 9], [3, 9, 24, 25], [11, 10, 26, 27, 28], [11, 28, 54], [67, 68, 39, 38], [4, 3, 10, 11], [0, 4, 12], [4, 11, 29, 30], [17, 38, 39, 40, 18], [0, 17, 18, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[105,104],
      [101,100],
      [63,94],
      [89,59],
      [90,89],
      [88,87],
      [84,83],
      [82,81],
      [79,51],
      [76,75],
      [74,73],
      [41,72],
      [69,42],
      [65,39],
      [64,63],
      [63,62],
      [59,58],
      [60,59],
      [57,33],
      [56,55],
      [53,52],
      [51,50],
      [27,51],
      [45,22],
      [46,45],
      [42,41],
      [41,19],
      [43,42],
      [39,38],
      [40,39],
      [37,36],
      [34,15],
      [33,32],
      [14,33],
      [13,31],
      [11,28],
      [28,27],
      [27,26],
      [25,24],
      [22,21],
      [23,22],
      [19,8],
      [20,19],
      [18,17],
      [15,14],
      [6,15],
      [14,13],
      [13,5],
      [4,11],
      [11,10],
      [3,9],
      [8,7],
      [2,8],
      [5,0],
      [1,6],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275];

obj0.userData.subtrees = [[117],
      [116],
      [115],
      [114],
      [111,112,113],
      [110],
      [108,109],
      [106,107],
      [104,105,117],
      [102,103],
      [100,101,116],
      [99],
      [98],
      [97],
      [95,96],
      [93,94,115],
      [91,92],
      [89,90,111,112,113,114],
      [87,88,110],
      [86],
      [83,84,85,108,109],
      [80,81,82,106,107],
      [79,104,105,117],
      [78],
      [75,76,77,102,103],
      [73,74,100,101,116],
      [71,72,99],
      [69,70,98],
      [67,68],
      [65,66,97],
      [62,63,64,93,94,95,96,115],
      [61],
      [58,59,60,89,90,91,92,111,112,113,114],
      [57,87,88,110],
      [55,56,86],
      [54],
      [52,53,83,84,85,108,109],
      [50,51,79,80,81,82,104,105,106,107,117],
      [49],
      [47,48],
      [45,46,75,76,77,78,102,103],
      [44],
      [41,42,43,69,70,71,72,73,74,98,99,100,101,116],
      [38,39,40,65,66,67,68,97],
      [36,37,62,63,64,93,94,95,96,115],
      [34,35,61],
      [32,33,57,58,59,60,87,88,89,90,91,92,110,111,112,113,114],
      [31,55,56,86],
      [29,30],
      [26,27,28,50,51,52,53,54,79,80,81,82,83,84,85,104,105,106,107,108,109,117],
      [24,25,49],
      [21,22,23,45,46,47,48,75,76,77,78,102,103],
      [19,20,41,42,43,44,69,70,71,72,73,74,98,99,100,101,116],
      [17,18,38,39,40,65,66,67,68,97],
      [16],
      [13,14,15,31,32,33,34,35,36,37,55,56,57,58,59,60,61,62,63,64,86,87,88,89,90,91,92,93,94,95,96,110,111,112,113,114,115],
      [12],
      [10,11,26,27,28,29,30,50,51,52,53,54,79,80,81,82,83,84,85,104,105,106,107,108,109,117],
      [9,24,25,49],
      [7,8,19,20,21,22,23,41,42,43,44,45,46,47,48,69,70,71,72,73,74,75,76,77,78,98,99,100,101,102,103,116],
      [5,6,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,40,55,56,57,58,59,60,61,62,63,64,65,66,67,68,86,87,88,89,90,91,92,93,94,95,96,97,110,111,112,113,114,115]];

obj0.userData.polytoperoot = [[0.948536019861961,-0.223918979794513,0.223918979794513],
      [1.61803398874989,-1,0],
      [-0.13838954023921,-0.223918979794513,-0.81014647962275]];

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
