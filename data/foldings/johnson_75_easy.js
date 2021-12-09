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
obj0.userData.points.push(new PMPoint(0.633039, -1.31914, 0));
obj0.userData.points.push(new PMPoint(-0.873757, 0.13839, 0));
obj0.userData.points.push(new PMPoint(-1.13699, -0.223919, 0));
obj0.userData.points.push(new PMPoint(-0.873757, -0.586227, 0));
obj0.userData.points.push(new PMPoint(1.41377, 1.07576, 0));
obj0.userData.points.push(new PMPoint(1.15054, 1.43807, 0));
obj0.userData.points.push(new PMPoint(0.724617, 1.29968, 0));
obj0.userData.points.push(new PMPoint(1.4502, 0.38064, 0));
obj0.userData.points.push(new PMPoint(2.02429, 0, 0));
obj0.userData.points.push(new PMPoint(1.8859, 0.425919, 0));
obj0.userData.points.push(new PMPoint(1.64519, -0.583774, 0));
obj0.userData.points.push(new PMPoint(0.0885787, 1.54366, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.810742, 0.606076, 0));
obj0.userData.points.push(new PMPoint(-0.77086, -0.840611, 0));
obj0.userData.points.push(new PMPoint(-0.471198, -1.17342, 0));
obj0.userData.points.push(new PMPoint(0.322995, -1.76253, 0));
obj0.userData.points.push(new PMPoint(0.586227, -1.40022, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -1.92522, 0));
obj0.userData.points.push(new PMPoint(0.724617, -1.29968, 0));
obj0.userData.points.push(new PMPoint(1.15054, -1.16129, 0));
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
obj0.userData.points.push(new PMPoint(1.73676, -0.564309, 0));
obj0.userData.points.push(new PMPoint(2.16268, -0.425919, 0));
obj0.userData.points.push(new PMPoint(2.47213, 0, 0));
obj0.userData.points.push(new PMPoint(2.61052, 0.425919, 0));
obj0.userData.points.push(new PMPoint(2.24821, 0.689152, 0));
obj0.userData.points.push(new PMPoint(-1.01338, 1.7013, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 2.61437, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-1.41377, 1.879, 0));
obj0.userData.points.push(new PMPoint(-1.77608, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.90925, -1.26653, 0));
obj0.userData.points.push(new PMPoint(0.586227, -2.12484, 0));
obj0.userData.points.push(new PMPoint(1.01215, -1.98645, 0));
obj0.userData.points.push(new PMPoint(1.01215, -1.53861, 0));
obj0.userData.points.push(new PMPoint(-0.0861254, -1.94468, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -2.06361, 0));
obj0.userData.points.push(new PMPoint(-1.54611, -0.0417669, 0));
obj0.userData.points.push(new PMPoint(1.4502, 1.77087, 0));
obj0.userData.points.push(new PMPoint(1.82289, 1.25791, 0));
obj0.userData.points.push(new PMPoint(2.13839, 1.60222, 0));
obj0.userData.points.push(new PMPoint(1.87515, 1.96453, 0));
obj0.userData.points.push(new PMPoint(2.46235, -0.0931107, 0));
obj0.userData.points.push(new PMPoint(2.89805, -0.13839, 0));
obj0.userData.points.push(new PMPoint(3.03644, 0.28753, 0));
obj0.userData.points.push(new PMPoint(-0.84946, 2.31306, 0));
obj0.userData.points.push(new PMPoint(-1.2373, 2.08914, 0));
obj0.userData.points.push(new PMPoint(-0.664855, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-1.02716, 2.71345, 0));
obj0.userData.points.push(new PMPoint(-1.677, 2.24131, 0));
obj0.userData.points.push(new PMPoint(-2.03931, 1.97808, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.02576, 0));
obj0.userData.points.push(new PMPoint(0.223919, -2.38807, 0));
obj0.userData.points.push(new PMPoint(0.724617, -2.55076, 0));
obj0.userData.points.push(new PMPoint(1.15054, -2.41237, 0));
obj0.userData.points.push(new PMPoint(-1.01338, -2.14914, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -3.06221, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.79897, 0));
obj0.userData.points.push(new PMPoint(2.32054, 2.01134, 0));
obj0.userData.points.push(new PMPoint(-1.2373, 2.53698, 0));
obj0.userData.points.push(new PMPoint(0.633039, -2.57022, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 9, 3, 10, 4, 11, 10, 11, 0, 12, 4, 12, 5, 13, 13, 14, 6, 15, 14, 15, 1, 16, 6, 16, 0, 17, 5, 18, 17, 18, 8, 19, 2, 20, 19, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 3, 25, 24, 25, 10, 26, 26, 27, 11, 28, 27, 28, 11, 29, 4, 30, 29, 30, 5, 31, 13, 31, 13, 32, 14, 33, 32, 33, 15, 34, 6, 35, 34, 35, 14, 36, 15, 36, 17, 37, 37, 38, 18, 39, 38, 39, 19, 40, 40, 41, 20, 42, 41, 42, 8, 43, 19, 43, 22, 44, 23, 45, 44, 45, 21, 46, 22, 46, 24, 47, 25, 47, 26, 48, 27, 49, 48, 49, 27, 50, 28, 51, 50, 51, 11, 52, 28, 52, 31, 53, 13, 54, 53, 54, 33, 55, 14, 56, 55, 56, 32, 57, 57, 58, 33, 59, 58, 59, 15, 60, 34, 61, 60, 61, 38, 62, 39, 63, 62, 63, 37, 64, 38, 65, 64, 65, 41, 66, 42, 67, 66, 67, 19, 68, 40, 69, 68, 69, 40, 70, 41, 71, 70, 71, 22, 72, 44, 73, 72, 73, 44, 74, 74, 75, 45, 76, 75, 76, 27, 77, 49, 77, 48, 78, 78, 79, 49, 80, 79, 80, 50, 81, 81, 82, 51, 83, 82, 83, 53, 84, 54, 84, 55, 85, 85, 86, 56, 87, 86, 87, 33, 88, 55, 88, 58, 89, 59, 90, 89, 90, 57, 91, 58, 92, 91, 92, 38, 93, 62, 93, 41, 94, 66, 94, 40, 95, 69, 95, 70, 96, 71, 97, 96, 97, 44, 98, 73, 98, 74, 99, 75, 100, 99, 100, 49, 101, 77, 102, 101, 102, 79, 103, 80, 104, 103, 104, 81, 105, 82, 106, 105, 106, 55, 107, 85, 108, 107, 108, 85, 109, 86, 110, 109, 110, 58, 111, 89, 111, 89, 112, 112, 113, 90, 114, 113, 114, 96, 115, 97, 115, 101, 116, 102, 116, 85, 117, 108, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [31, 53, 54, 13], [5, 31, 13], [6, 5, 13, 14, 15], [2, 1, 7, 8], [16, 1, 6], [39, 38, 62, 63], [53, 84, 54], [14, 13, 32, 33], [35, 6, 15, 34], [2, 8, 19, 20], [51, 50, 81, 82, 83], [20, 19, 40, 41, 42], [27, 26, 48, 49], [27, 49, 77], [42, 41, 66, 67], [8, 43, 19], [49, 101, 102, 77], [68, 69, 40, 19], [59, 58, 89, 90], [111, 89, 58], [49, 48, 78, 79, 80], [41, 40, 70, 71], [85, 55, 107, 108], [22, 72, 73, 44], [113, 114, 90, 89, 112], [70, 96, 97, 71], [85, 108, 117], [44, 73, 98], [86, 85, 109, 110], [75, 74, 99, 100], [96, 115, 97], [45, 44, 74, 75, 76], [80, 79, 103, 104], [69, 95, 40], [101, 116, 102], [23, 22, 44, 45], [41, 94, 66], [82, 81, 105, 106], [87, 56, 55, 85, 86], [22, 21, 46], [33, 88, 55], [34, 15, 60, 61], [15, 14, 36], [14, 33, 55, 56], [91, 92, 58, 57], [8, 7, 21, 22, 23], [33, 32, 57, 58, 59], [25, 24, 47], [28, 27, 50, 51], [93, 62, 38], [3, 2, 9], [3, 9, 24, 25], [11, 10, 26, 27, 28], [11, 28, 52], [64, 65, 38, 37], [4, 3, 10, 11], [0, 4, 12], [4, 11, 29, 30], [17, 37, 38, 39, 18], [0, 17, 18, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x5B6231, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xD8B05C, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[85,108],
      [102,101],
      [97,96],
      [90,89],
      [89,58],
      [86,85],
      [85,55],
      [82,81],
      [80,79],
      [77,49],
      [75,74],
      [44,73],
      [71,70],
      [40,69],
      [66,41],
      [62,38],
      [58,57],
      [59,58],
      [55,33],
      [56,55],
      [54,53],
      [51,50],
      [49,48],
      [27,49],
      [45,44],
      [44,22],
      [41,40],
      [40,19],
      [42,41],
      [38,37],
      [39,38],
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
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.67794504458899,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
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
      [112,113,114],
      [111],
      [109,110],
      [107,108,117],
      [105,106],
      [103,104],
      [101,102,116],
      [99,100],
      [98],
      [96,97,115],
      [95],
      [94],
      [93],
      [91,92],
      [89,90,111,112,113,114],
      [88],
      [85,86,87,107,108,109,110,117],
      [84],
      [81,82,83,105,106],
      [78,79,80,103,104],
      [77,101,102,116],
      [74,75,76,99,100],
      [72,73,98],
      [70,71,96,97,115],
      [68,69,95],
      [66,67,94],
      [64,65],
      [62,63,93],
      [60,61],
      [57,58,59,89,90,91,92,111,112,113,114],
      [55,56,85,86,87,88,107,108,109,110,117],
      [53,54,84],
      [52],
      [50,51,81,82,83,105,106],
      [48,49,77,78,79,80,101,102,103,104,116],
      [47],
      [46],
      [44,45,72,73,74,75,76,98,99,100],
      [43],
      [40,41,42,66,67,68,69,70,71,94,95,96,97,115],
      [37,38,39,62,63,64,65,93],
      [36],
      [34,35,60,61],
      [32,33,55,56,57,58,59,85,86,87,88,89,90,91,92,107,108,109,110,111,112,113,114,117],
      [31,53,54,84],
      [29,30],
      [26,27,28,48,49,50,51,52,77,78,79,80,81,82,83,101,102,103,104,105,106,116],
      [24,25,47],
      [21,22,23,44,45,46,72,73,74,75,76,98,99,100],
      [19,20,40,41,42,43,66,67,68,69,70,71,94,95,96,97,115],
      [17,18,37,38,39,62,63,64,65,93],
      [16],
      [13,14,15,31,32,33,34,35,36,53,54,55,56,57,58,59,60,61,84,85,86,87,88,89,90,91,92,107,108,109,110,111,112,113,114,117],
      [12],
      [10,11,26,27,28,29,30,48,49,50,51,52,77,78,79,80,81,82,83,101,102,103,104,105,106,116],
      [9,24,25,47],
      [7,8,19,20,21,22,23,40,41,42,43,44,45,46,66,67,68,69,70,71,72,73,74,75,76,94,95,96,97,98,99,100,115],
      [5,6,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,84,85,86,87,88,89,90,91,92,93,107,108,109,110,111,112,113,114,117]];

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
