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
obj0.userData.points.push(new PMPoint(-0.0393136, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 0.788228, 0));
obj0.userData.points.push(new PMPoint(-0.564309, 0.28753, 0));
obj0.userData.points.push(new PMPoint(-0.425919, -0.13839, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.01215, 0.28753, 0));
obj0.userData.points.push(new PMPoint(0.84946, 0.788228, 0));
obj0.userData.points.push(new PMPoint(0.487152, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-0.13839, -0.873757, 0));
obj0.userData.points.push(new PMPoint(0.223919, -1.13699, 0));
obj0.userData.points.push(new PMPoint(0.586227, -0.873757, 0));
obj0.userData.points.push(new PMPoint(-0.387839, -0.223919, 0));
obj0.userData.points.push(new PMPoint(0.835677, -0.223919, 0));
obj0.userData.points.push(new PMPoint(0.406071, 1.09827, 0));
obj0.userData.points.push(new PMPoint(-0.583774, 0.379107, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 1.05146, 0));
obj0.userData.points.push(new PMPoint(-1.01215, 0.28753, 0));
obj0.userData.points.push(new PMPoint(-1.15054, -0.13839, 0));
obj0.userData.points.push(new PMPoint(-0.788228, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.23607, -0.401622, 0));
obj0.userData.points.push(new PMPoint(1.59837, -0.13839, 0));
obj0.userData.points.push(new PMPoint(1.45998, 0.28753, 0));
obj0.userData.points.push(new PMPoint(0.919036, 0.725581, 0));
obj0.userData.points.push(new PMPoint(1.21177, 1.05146, 0));
obj0.userData.points.push(new PMPoint(1.07338, 1.47738, 0));
obj0.userData.points.push(new PMPoint(0.625541, 1.47738, 0));
obj0.userData.points.push(new PMPoint(-0.425919, -0.309448, 0));
obj0.userData.points.push(new PMPoint(-0.564309, -0.735368, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -1.23607, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -1.4993, 0));
obj0.userData.points.push(new PMPoint(0.487152, -1.4993, 0));
obj0.userData.points.push(new PMPoint(0.84946, -1.23607, 0));
obj0.userData.points.push(new PMPoint(1.01215, -0.735368, 0));
obj0.userData.points.push(new PMPoint(0.873757, -0.309448, 0));
obj0.userData.points.push(new PMPoint(0.359259, 1.54366, 0));
obj0.userData.points.push(new PMPoint(-0.0861254, 1.49684, 0));
obj0.userData.points.push(new PMPoint(-0.810742, 0.97038, 0));
obj0.userData.points.push(new PMPoint(-0.992895, 0.56126, 0));
obj0.userData.points.push(new PMPoint(-1.05146, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.18985, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.177703, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-1.41377, -0.500698, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -0.763931, 0));
obj0.userData.points.push(new PMPoint(-1.43807, 0.425919, 0));
obj0.userData.points.push(new PMPoint(-1.57646, 0, 0));
obj0.userData.points.push(new PMPoint(1.45998, 0.735368, 0));
obj0.userData.points.push(new PMPoint(1.01215, 0.735368, 0));
obj0.userData.points.push(new PMPoint(1.4993, -0.763931, 0));
obj0.userData.points.push(new PMPoint(1.86161, -0.500698, 0));
obj0.userData.points.push(new PMPoint(2.02429, 0, 0));
obj0.userData.points.push(new PMPoint(1.8859, 0.425919, 0));
obj0.userData.points.push(new PMPoint(1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(1.4993, 1.61577, 0));
obj0.userData.points.push(new PMPoint(1.07338, 1.92522, 0));
obj0.userData.points.push(new PMPoint(0.625541, 1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.471198, -1.17342, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -1.4993, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -1.92522, 0));
obj0.userData.points.push(new PMPoint(0.406071, -1.54611, 0));
obj0.userData.points.push(new PMPoint(0.625541, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.07338, -1.92522, 0));
obj0.userData.points.push(new PMPoint(1.21177, -1.4993, 0));
obj0.userData.points.push(new PMPoint(1.03161, -0.826945, 0));
obj0.userData.points.push(new PMPoint(0.0960267, 1.90597, 0));
obj0.userData.points.push(new PMPoint(-1.25613, 0.923568, 0));
obj0.userData.points.push(new PMPoint(-1.41377, 1.879, 0));
obj0.userData.points.push(new PMPoint(-1.77608, 1.61577, 0));
obj0.userData.points.push(new PMPoint(-1.63769, 1.18985, 0));
obj0.userData.points.push(new PMPoint(-0.718652, 1.91543, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-0.401622, 2.61437, 0));
obj0.userData.points.push(new PMPoint(-0.763931, 2.35114, 0));
obj0.userData.points.push(new PMPoint(-1.59592, -0.0915777, 0));
obj0.userData.points.push(new PMPoint(1.84782, 0.511449, 0));
obj0.userData.points.push(new PMPoint(2.04376, -0.0915777, 0));
obj0.userData.points.push(new PMPoint(2.47213, 0, 0));
obj0.userData.points.push(new PMPoint(2.61052, 0.425919, 0));
obj0.userData.points.push(new PMPoint(2.24821, 0.689152, 0));
obj0.userData.points.push(new PMPoint(1.16649, 1.91543, 0));
obj0.userData.points.push(new PMPoint(0.248216, -2.06361, 0));
obj0.userData.points.push(new PMPoint(0.386606, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-0.177703, -2.37306, 0));
obj0.userData.points.push(new PMPoint(-1.18985, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.05146, -2.06361, 0));
obj0.userData.points.push(new PMPoint(0.625541, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.07338, -2.37306, 0));
obj0.userData.points.push(new PMPoint(1.4993, -2.06361, 0));
obj0.userData.points.push(new PMPoint(1.63769, -1.63769, 0));
obj0.userData.points.push(new PMPoint(-1.677, 2.24131, 0));
obj0.userData.points.push(new PMPoint(-2.03931, 1.97808, 0));
obj0.userData.points.push(new PMPoint(-0.788228, 1.97808, 0));
obj0.userData.points.push(new PMPoint(-1.15054, 2.24131, 0));
obj0.userData.points.push(new PMPoint(0.223919, 2.71345, 0));
obj0.userData.points.push(new PMPoint(-0.13839, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-0.664855, 2.97668, 0));
obj0.userData.points.push(new PMPoint(-1.02716, 2.71345, 0));
obj0.userData.points.push(new PMPoint(2.89805, -0.13839, 0));
obj0.userData.points.push(new PMPoint(3.03644, 0.28753, 0));
obj0.userData.points.push(new PMPoint(-0.0845924, -2.36327, 0));
obj0.userData.points.push(new PMPoint(-1.01338, -2.14914, 0));
obj0.userData.points.push(new PMPoint(-0.763931, -2.79897, 0));
obj0.userData.points.push(new PMPoint(-0.401622, -3.06221, 0));
obj0.userData.points.push(new PMPoint(-0.0393136, -2.79897, 0));
obj0.userData.points.push(new PMPoint(1.46122, -2.14914, 0));
obj0.userData.points.push(new PMPoint(-1.23162, 2.28812, 0));
obj0.userData.points.push(new PMPoint(-0.583774, 3.02349, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 3, 7, 4, 8, 7, 8, 4, 9, 0, 10, 9, 10, 1, 11, 2, 12, 11, 12, 2, 13, 3, 14, 13, 14, 5, 15, 15, 16, 6, 17, 16, 17, 0, 18, 5, 18, 1, 19, 6, 19, 3, 20, 7, 20, 4, 21, 8, 21, 7, 22, 22, 23, 8, 24, 23, 24, 9, 25, 25, 26, 10, 27, 26, 27, 11, 28, 28, 29, 12, 30, 29, 30, 2, 31, 12, 31, 13, 32, 32, 33, 14, 34, 33, 34, 5, 35, 15, 36, 35, 36, 15, 37, 16, 38, 37, 38, 16, 39, 17, 40, 39, 40, 17, 41, 6, 42, 41, 42, 20, 43, 7, 44, 43, 44, 8, 45, 21, 46, 45, 46, 23, 47, 24, 48, 47, 48, 22, 49, 23, 50, 49, 50, 26, 51, 27, 52, 51, 52, 25, 53, 26, 54, 53, 54, 30, 55, 12, 56, 55, 56, 28, 57, 29, 58, 57, 58, 29, 59, 30, 60, 59, 60, 32, 61, 33, 62, 61, 62, 33, 63, 34, 64, 63, 64, 15, 65, 36, 65, 37, 66, 66, 67, 38, 68, 67, 68, 16, 69, 38, 69, 39, 70, 70, 71, 40, 72, 71, 72, 17, 73, 40, 73, 43, 74, 44, 74, 45, 75, 46, 75, 47, 76, 76, 77, 48, 78, 77, 78, 23, 79, 47, 79, 49, 80, 80, 81, 50, 82, 81, 82, 26, 83, 51, 83, 30, 84, 55, 84, 29, 85, 58, 85, 59, 86, 86, 87, 60, 88, 87, 88, 33, 89, 62, 89, 68, 90, 38, 91, 90, 91, 67, 92, 68, 93, 92, 93, 66, 94, 67, 95, 94, 95, 70, 96, 71, 97, 96, 97, 71, 98, 72, 99, 98, 99, 76, 100, 77, 101, 100, 101, 47, 102, 76, 103, 102, 103, 80, 104, 81, 105, 104, 105, 81, 106, 82, 107, 106, 107, 86, 108, 87, 109, 108, 109, 68, 110, 90, 110, 67, 111, 92, 111, 92, 112, 112, 113, 93, 114, 113, 114, 71, 115, 97, 115, 76, 116, 100, 116, 81, 117, 105, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [6, 5, 15, 16, 17], [35, 36, 15, 5], [10, 9, 25, 26, 27], [16, 15, 37, 38], [0, 18, 5], [4, 3, 7, 8], [27, 26, 51, 52], [0, 4, 9, 10], [2, 1, 11, 12], [12, 11, 28, 29, 30], [36, 65, 15], [37, 66, 67, 68, 38], [90, 91, 38, 68], [19, 1, 6], [17, 16, 39, 40], [111, 92, 67], [48, 47, 76, 77, 78], [42, 6, 17, 41], [8, 45, 46, 21], [3, 20, 7], [12, 30, 55, 56], [16, 38, 69], [104, 105, 81, 80], [26, 25, 53, 54], [72, 40, 39, 70, 71], [4, 8, 21], [73, 17, 40], [14, 13, 32, 33, 34], [26, 83, 51], [29, 28, 57, 58], [30, 29, 59, 60], [68, 67, 92, 93], [94, 95, 67, 66], [8, 7, 22, 23, 24], [3, 2, 13, 14], [45, 75, 46], [24, 23, 47, 48], [77, 76, 100, 101], [71, 70, 96, 97], [2, 12, 31], [43, 74, 44], [20, 43, 44, 7], [30, 84, 55], [90, 68, 110], [33, 32, 61, 62], [60, 59, 86, 87, 88], [114, 93, 92, 112, 113], [72, 71, 98, 99], [29, 58, 85], [102, 103, 76, 47], [71, 97, 115], [87, 86, 108, 109], [34, 33, 63, 64], [23, 22, 49, 50], [23, 79, 47], [82, 81, 106, 107], [105, 117, 81], [116, 100, 76], [49, 80, 81, 82, 50], [33, 62, 89]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[81,105],
      [100,76],
      [71,97],
      [93,92],
      [92,67],
      [90,68],
      [87,86],
      [82,81],
      [81,80],
      [76,47],
      [77,76],
      [72,71],
      [71,70],
      [67,66],
      [68,67],
      [38,68],
      [33,62],
      [60,59],
      [29,58],
      [55,30],
      [51,26],
      [50,49],
      [47,23],
      [48,47],
      [46,45],
      [44,43],
      [17,40],
      [40,39],
      [16,38],
      [38,37],
      [15,36],
      [34,33],
      [33,32],
      [30,29],
      [29,28],
      [12,30],
      [26,25],
      [27,26],
      [23,22],
      [24,23],
      [21,8],
      [7,20],
      [6,17],
      [17,16],
      [16,15],
      [15,5],
      [14,13],
      [2,12],
      [12,11],
      [10,9],
      [8,7],
      [4,8],
      [7,3],
      [1,6],
      [5,0],
      [6,5],
      [3,2],
      [2,1],
      [0,4],
      [4,3],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.77672882547631,
      2.77672882547631,
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
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275];

obj0.userData.subtrees = [[117],
      [116],
      [115],
      [112,113,114],
      [111],
      [110],
      [108,109],
      [106,107],
      [104,105,117],
      [102,103],
      [100,101,116],
      [98,99],
      [96,97,115],
      [94,95],
      [92,93,111,112,113,114],
      [90,91,110],
      [89],
      [86,87,88,108,109],
      [85],
      [84],
      [83],
      [80,81,82,104,105,106,107,117],
      [79],
      [76,77,78,100,101,102,103,116],
      [75],
      [74],
      [73],
      [70,71,72,96,97,98,99,115],
      [69],
      [66,67,68,90,91,92,93,94,95,110,111,112,113,114],
      [65],
      [63,64],
      [61,62,89],
      [59,60,86,87,88,108,109],
      [57,58,85],
      [55,56,84],
      [53,54],
      [51,52,83],
      [49,50,80,81,82,104,105,106,107,117],
      [47,48,76,77,78,79,100,101,102,103,116],
      [45,46,75],
      [43,44,74],
      [41,42],
      [39,40,70,71,72,73,96,97,98,99,115],
      [37,38,66,67,68,69,90,91,92,93,94,95,110,111,112,113,114],
      [35,36,65],
      [32,33,34,61,62,63,64,89],
      [31],
      [28,29,30,55,56,57,58,59,60,84,85,86,87,88,108,109],
      [25,26,27,51,52,53,54,83],
      [22,23,24,47,48,49,50,76,77,78,79,80,81,82,100,101,102,103,104,105,106,107,116,117],
      [21,45,46,75],
      [20,43,44,74],
      [19],
      [18],
      [15,16,17,35,36,37,38,39,40,41,42,65,66,67,68,69,70,71,72,73,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115],
      [13,14,32,33,34,61,62,63,64,89],
      [11,12,28,29,30,31,55,56,57,58,59,60,84,85,86,87,88,108,109],
      [9,10,25,26,27,51,52,53,54,83],
      [7,8,20,21,22,23,24,43,44,45,46,47,48,49,50,74,75,76,77,78,79,80,81,82,100,101,102,103,104,105,106,107,116,117],
      [5,6,15,16,17,18,19,35,36,37,38,39,40,41,42,65,66,67,68,69,70,71,72,73,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115]];

obj0.userData.polytoperoot = [[0.586227499828237,0.810146479622751,0],
      [3.61298981943098,2.23295050941569,0],
      [0.809016994374947,-1.30901699437495,-1.1180339887499]];

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
