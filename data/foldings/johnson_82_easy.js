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
obj0.userData.points.push(new PMPoint(0.450685, 0, 0));
obj0.userData.points.push(new PMPoint(0.450685, 0.450685, 0));
obj0.userData.points.push(new PMPoint(0, 0.450685, 0));
obj0.userData.points.push(new PMPoint(-0.139269, -0.428626, 0));
obj0.userData.points.push(new PMPoint(0.225342, -0.693532, 0));
obj0.userData.points.push(new PMPoint(0.589954, -0.428626, 0));
obj0.userData.points.push(new PMPoint(-0.390304, 0.225342, 0));
obj0.userData.points.push(new PMPoint(0.589954, 0.879311, 0));
obj0.userData.points.push(new PMPoint(0.225342, 1.14422, 0));
obj0.userData.points.push(new PMPoint(-0.139269, 0.879311, 0));
obj0.userData.points.push(new PMPoint(0.71559, -0.364611, 0));
obj0.userData.points.push(new PMPoint(1.14422, -0.503881, 0));
obj0.userData.points.push(new PMPoint(1.57284, -0.364611, 0));
obj0.userData.points.push(new PMPoint(1.83775, 0, 0));
obj0.userData.points.push(new PMPoint(1.83775, 0.450685, 0));
obj0.userData.points.push(new PMPoint(1.57284, 0.815296, 0));
obj0.userData.points.push(new PMPoint(1.14422, 0.954565, 0));
obj0.userData.points.push(new PMPoint(0.71559, 0.815296, 0));
obj0.userData.points.push(new PMPoint(0.490248, -1.05814, 0));
obj0.userData.points.push(new PMPoint(0.854859, -0.793238, 0));
obj0.userData.points.push(new PMPoint(-0.428626, 0.139269, 0));
obj0.userData.points.push(new PMPoint(-0.567896, -0.289357, 0));
obj0.userData.points.push(new PMPoint(-0.404175, -0.793238, 0));
obj0.userData.points.push(new PMPoint(-0.0395635, -1.05814, 0));
obj0.userData.points.push(new PMPoint(-0.225342, 0.840989, 0));
obj0.userData.points.push(new PMPoint(-0.615646, 0.615646, 0));
obj0.userData.points.push(new PMPoint(-0.186379, 1.32753, 0));
obj0.userData.points.push(new PMPoint(0.854859, 1.24392, 0));
obj0.userData.points.push(new PMPoint(0.490248, 1.50883, 0));
obj0.userData.points.push(new PMPoint(2.26638, -0.139269, 0));
obj0.userData.points.push(new PMPoint(2.53128, 0.225342, 0));
obj0.userData.points.push(new PMPoint(2.26638, 0.589954, 0));
obj0.userData.points.push(new PMPoint(1.93745, -0.629517, 0));
obj0.userData.points.push(new PMPoint(2.20236, -0.264906, 0));
obj0.userData.points.push(new PMPoint(1.14422, -0.954565, 0));
obj0.userData.points.push(new PMPoint(1.57284, -1.09383, 0));
obj0.userData.points.push(new PMPoint(1.83775, -0.729223, 0));
obj0.userData.points.push(new PMPoint(2.20236, 0.71559, 0));
obj0.userData.points.push(new PMPoint(1.93745, 1.0802, 0));
obj0.userData.points.push(new PMPoint(1.83775, 1.17991, 0));
obj0.userData.points.push(new PMPoint(1.57284, 1.54452, 0));
obj0.userData.points.push(new PMPoint(1.14422, 1.40525, 0));
obj0.userData.points.push(new PMPoint(0.0420323, -1.10525, 0));
obj0.userData.points.push(new PMPoint(-0.793238, 0.404175, 0));
obj0.userData.points.push(new PMPoint(-1.15785, 0.139269, 0));
obj0.userData.points.push(new PMPoint(-1.01858, -0.289357, 0));
obj0.userData.points.push(new PMPoint(-0.474193, -0.730193, 0));
obj0.userData.points.push(new PMPoint(-0.768786, -1.05814, 0));
obj0.userData.points.push(new PMPoint(-0.629517, -1.48677, 0));
obj0.userData.points.push(new PMPoint(-0.178833, -1.48677, 0));
obj0.userData.points.push(new PMPoint(-0.450685, 1.23129, 0));
obj0.userData.points.push(new PMPoint(-0.840989, 1.00595, 0));
obj0.userData.points.push(new PMPoint(0.408652, 1.55594, 0));
obj0.userData.points.push(new PMPoint(-0.00306863, 1.73925, 0));
obj0.userData.points.push(new PMPoint(2.89589, 0.490248, 0));
obj0.userData.points.push(new PMPoint(2.63099, 0.854859, 0));
obj0.userData.points.push(new PMPoint(2.26638, -0.589954, 0));
obj0.userData.points.push(new PMPoint(2.53128, -0.954565, 0));
obj0.userData.points.push(new PMPoint(2.95991, -1.09383, 0));
obj0.userData.points.push(new PMPoint(3.38853, -0.954565, 0));
obj0.userData.points.push(new PMPoint(3.65344, -0.589954, 0));
obj0.userData.points.push(new PMPoint(3.65344, -0.139269, 0));
obj0.userData.points.push(new PMPoint(3.38853, 0.225342, 0));
obj0.userData.points.push(new PMPoint(2.95991, 0.364611, 0));
obj0.userData.points.push(new PMPoint(1.00495, -1.38319, 0));
obj0.userData.points.push(new PMPoint(1.43357, -1.52246, 0));
obj0.userData.points.push(new PMPoint(2.38567, 1.12731, 0));
obj0.userData.points.push(new PMPoint(2.20236, 1.44481, 0));
obj0.userData.points.push(new PMPoint(1.93745, 1.80942, 0));
obj0.userData.points.push(new PMPoint(1.23792, 1.84609, 0));
obj0.userData.points.push(new PMPoint(-1.01858, -0.740042, 0));
obj0.userData.points.push(new PMPoint(-0.567896, -0.740042, 0));
obj0.userData.points.push(new PMPoint(-1.58648, 0, 0));
obj0.userData.points.push(new PMPoint(-1.44721, -0.428626, 0));
obj0.userData.points.push(new PMPoint(-1.20496, 0.587485, 0));
obj0.userData.points.push(new PMPoint(-1.19741, -1.19741, 0));
obj0.userData.points.push(new PMPoint(-1.05814, -1.62604, 0));
obj0.userData.points.push(new PMPoint(-0.544387, 1.67213, 0));
obj0.userData.points.push(new PMPoint(-0.992603, 1.71924, 0));
obj0.userData.points.push(new PMPoint(-1.17591, 1.30752, 0));
obj0.userData.points.push(new PMPoint(3.32452, 0.629517, 0));
obj0.userData.points.push(new PMPoint(3.32452, 1.0802, 0));
obj0.userData.points.push(new PMPoint(2.89589, 1.21947, 0));
obj0.userData.points.push(new PMPoint(4.01805, 0.125637, 0));
obj0.userData.points.push(new PMPoint(3.75315, 0.490248, 0));
obj0.userData.points.push(new PMPoint(4.08207, -0.729223, 0));
obj0.userData.points.push(new PMPoint(4.34697, -0.364611, 0));
obj0.userData.points.push(new PMPoint(4.08207, 0, 0));
obj0.userData.points.push(new PMPoint(1.67255, 2.17404, 0));
obj0.userData.points.push(new PMPoint(1.30794, 1.90913, 0));
obj0.userData.points.push(new PMPoint(-1.40888, -0.5147, 0));
obj0.userData.points.push(new PMPoint(-1.29712, 0.567896, 0));
obj0.userData.points.push(new PMPoint(-1.72574, 0.428626, 0));
obj0.userData.points.push(new PMPoint(-1.40432, 1.90255, 0));
obj0.userData.points.push(new PMPoint(-1.58763, 1.49083, 0));
obj0.userData.points.push(new PMPoint(3.23082, 1.52104, 0));
obj0.userData.points.push(new PMPoint(4.53028, 0.0471094, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 1, 6, 5, 6, 0, 7, 3, 7, 2, 8, 8, 9, 3, 10, 9, 10, 1, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 2, 18, 17, 18, 5, 19, 6, 20, 19, 20, 0, 21, 4, 22, 21, 22, 4, 23, 5, 24, 23, 24, 3, 25, 7, 26, 25, 26, 9, 27, 10, 27, 8, 28, 9, 29, 28, 29, 14, 30, 30, 31, 15, 32, 31, 32, 13, 33, 14, 34, 33, 34, 12, 35, 35, 36, 13, 37, 36, 37, 15, 38, 16, 39, 38, 39, 16, 40, 40, 41, 17, 42, 41, 42, 5, 43, 19, 43, 21, 44, 44, 45, 22, 46, 45, 46, 4, 47, 22, 47, 23, 48, 48, 49, 24, 50, 49, 50, 25, 51, 26, 52, 51, 52, 9, 53, 27, 54, 53, 54, 31, 55, 32, 56, 55, 56, 30, 57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 31, 64, 63, 64, 35, 65, 36, 66, 65, 66, 38, 67, 39, 67, 40, 68, 41, 69, 68, 69, 41, 70, 42, 70, 46, 71, 22, 72, 71, 72, 45, 73, 46, 74, 73, 74, 44, 75, 45, 75, 48, 76, 49, 77, 76, 77, 51, 78, 78, 79, 52, 80, 79, 80, 55, 81, 81, 82, 56, 83, 82, 83, 62, 84, 63, 85, 84, 85, 61, 86, 86, 87, 62, 88, 87, 88, 69, 89, 41, 90, 89, 90, 46, 91, 71, 91, 45, 92, 73, 93, 92, 93, 79, 94, 80, 95, 94, 95, 82, 96, 83, 96, 87, 97, 88, 97];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [6, 1, 0, 4, 5], [3, 25, 26, 7], [0, 3, 7], [20, 6, 5, 19], [0, 21, 22, 4], [15, 14, 30, 31, 32], [21, 44, 45, 46, 22], [14, 13, 33, 34], [41, 40, 68, 69], [39, 38, 67], [41, 69, 89, 90], [32, 31, 55, 56], [22, 46, 71, 72], [57, 58, 59, 60, 61, 62, 63, 64, 31, 30], [55, 81, 82, 83, 56], [83, 82, 96], [94, 95, 80, 79], [91, 71, 46], [63, 62, 84, 85], [62, 61, 86, 87, 88], [77, 49, 48, 76], [88, 87, 97], [46, 45, 73, 74], [24, 23, 48, 49, 50], [92, 93, 73, 45], [36, 35, 65, 66], [44, 75, 45], [4, 22, 47], [19, 5, 43], [5, 4, 23, 24], [51, 78, 79, 80, 52], [13, 12, 35, 36, 37], [25, 51, 52, 26], [42, 41, 70], [16, 15, 38, 39], [10, 9, 27], [9, 53, 54, 27], [17, 16, 40, 41, 42], [8, 28, 29, 9], [3, 2, 8, 9, 10], [2, 1, 11, 12, 13, 14, 15, 16, 17, 18]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[88,87],
      [83,82],
      [80,79],
      [73,45],
      [71,46],
      [41,69],
      [62,61],
      [63,62],
      [56,55],
      [52,51],
      [49,48],
      [45,44],
      [46,45],
      [22,46],
      [42,41],
      [41,40],
      [39,38],
      [36,35],
      [31,30],
      [32,31],
      [27,9],
      [26,25],
      [24,23],
      [4,22],
      [22,21],
      [19,5],
      [17,16],
      [16,15],
      [13,12],
      [14,13],
      [15,14],
      [9,8],
      [10,9],
      [7,3],
      [5,4],
      [4,0],
      [6,5],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.68680207558007,
      2.68680207558007,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.67794504458899,
      2.0344439357957,
      2.12437068569194,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275];

obj0.userData.subtrees = [[97],
      [96],
      [94,95],
      [92,93],
      [91],
      [89,90],
      [86,87,88,97],
      [84,85],
      [81,82,83,96],
      [78,79,80,94,95],
      [76,77],
      [75],
      [73,74,92,93],
      [71,72,91],
      [70],
      [68,69,89,90],
      [67],
      [65,66],
      [57,58,59,60,61,62,63,64,84,85,86,87,88,97],
      [55,56,81,82,83,96],
      [53,54],
      [51,52,78,79,80,94,95],
      [48,49,50,76,77],
      [47],
      [44,45,46,71,72,73,74,75,91,92,93],
      [43],
      [40,41,42,68,69,70,89,90],
      [38,39,67],
      [35,36,37,65,66],
      [33,34],
      [30,31,32,55,56,57,58,59,60,61,62,63,64,81,82,83,84,85,86,87,88,96,97],
      [28,29],
      [27,53,54],
      [25,26,51,52,78,79,80,94,95],
      [23,24,48,49,50,76,77],
      [21,22,44,45,46,47,71,72,73,74,75,91,92,93],
      [19,20,43],
      [11,12,13,14,15,16,17,18,30,31,32,33,34,35,36,37,38,39,40,41,42,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,81,82,83,84,85,86,87,88,89,90,96,97],
      [8,9,10,27,28,29,53,54],
      [7,25,26,51,52,78,79,80,94,95],
      [4,5,6,19,20,21,22,23,24,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,91,92,93]];

obj0.userData.polytoperoot = [[0.589953675968134,-0.266775912128246,-0.729222847072497],
      [1.61803398874989,-0.618033988749894,-1],
      [0.278538342208727,-0.45068450486377,0.729222847072497]];

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
