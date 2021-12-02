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
obj0.userData.points.push(new PMPoint(-0.0395635, 1.50883, 0));
obj0.userData.points.push(new PMPoint(-0.404175, 1.24392, 0));
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
obj0.userData.points.push(new PMPoint(-0.474193, -0.730193, 0));
obj0.userData.points.push(new PMPoint(-0.793238, 0.404175, 0));
obj0.userData.points.push(new PMPoint(-1.15785, 0.139269, 0));
obj0.userData.points.push(new PMPoint(-1.01858, -0.289357, 0));
obj0.userData.points.push(new PMPoint(-0.768786, -1.05814, 0));
obj0.userData.points.push(new PMPoint(-0.629517, -1.48677, 0));
obj0.userData.points.push(new PMPoint(-0.178833, -1.48677, 0));
obj0.userData.points.push(new PMPoint(-0.615646, 1.06633, 0));
obj0.userData.points.push(new PMPoint(-0.178833, 1.93745, 0));
obj0.userData.points.push(new PMPoint(-0.629517, 1.93745, 0));
obj0.userData.points.push(new PMPoint(-0.768786, 1.50883, 0));
obj0.userData.points.push(new PMPoint(0.408652, 1.55594, 0));
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
obj0.userData.points.push(new PMPoint(1.43357, 1.97315, 0));
obj0.userData.points.push(new PMPoint(1.00495, 1.83388, 0));
obj0.userData.points.push(new PMPoint(-1.00873, -0.38306, 0));
obj0.userData.points.push(new PMPoint(-0.915029, -0.823896, 0));
obj0.userData.points.push(new PMPoint(-1.05814, 0.768786, 0));
obj0.userData.points.push(new PMPoint(-1.42275, 0.503881, 0));
obj0.userData.points.push(new PMPoint(-1.58648, 0, 0));
obj0.userData.points.push(new PMPoint(-1.44721, -0.428626, 0));
obj0.userData.points.push(new PMPoint(-1.19741, -1.19741, 0));
obj0.userData.points.push(new PMPoint(-1.05814, -1.62604, 0));
obj0.userData.points.push(new PMPoint(-0.178833, 2.38814, 0));
obj0.userData.points.push(new PMPoint(-0.629517, 2.38814, 0));
obj0.userData.points.push(new PMPoint(-1.05814, 2.07672, 0));
obj0.userData.points.push(new PMPoint(-1.19741, 1.6481, 0));
obj0.userData.points.push(new PMPoint(3.32452, 0.629517, 0));
obj0.userData.points.push(new PMPoint(3.32452, 1.0802, 0));
obj0.userData.points.push(new PMPoint(2.89589, 1.21947, 0));
obj0.userData.points.push(new PMPoint(4.01805, 0.125637, 0));
obj0.userData.points.push(new PMPoint(3.75315, 0.490248, 0));
obj0.userData.points.push(new PMPoint(4.08207, -0.729223, 0));
obj0.userData.points.push(new PMPoint(4.34697, -0.364611, 0));
obj0.userData.points.push(new PMPoint(4.08207, 0, 0));
obj0.userData.points.push(new PMPoint(1.52573, 1.99273, 0));
obj0.userData.points.push(new PMPoint(-1.34366, -0.684627, 0));
obj0.userData.points.push(new PMPoint(-1.60606, 0.0921598, 0));
obj0.userData.points.push(new PMPoint(-1.01982, 2.1628, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 1, 6, 5, 6, 0, 7, 3, 7, 2, 8, 8, 9, 3, 10, 9, 10, 1, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 2, 18, 17, 18, 5, 19, 6, 20, 19, 20, 0, 21, 4, 22, 21, 22, 4, 23, 5, 24, 23, 24, 3, 25, 7, 26, 25, 26, 9, 27, 10, 28, 27, 28, 8, 29, 9, 30, 29, 30, 14, 31, 31, 32, 15, 33, 32, 33, 13, 34, 14, 35, 34, 35, 12, 36, 36, 37, 13, 38, 37, 38, 15, 39, 16, 40, 39, 40, 16, 41, 41, 42, 17, 43, 42, 43, 5, 44, 19, 44, 4, 45, 22, 45, 21, 46, 46, 47, 22, 48, 47, 48, 23, 49, 49, 50, 24, 51, 50, 51, 25, 52, 26, 52, 27, 53, 53, 54, 28, 55, 54, 55, 9, 56, 27, 56, 32, 57, 33, 58, 57, 58, 31, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 32, 66, 65, 66, 36, 67, 37, 68, 67, 68, 39, 69, 40, 69, 41, 70, 42, 71, 70, 71, 42, 72, 43, 73, 72, 73, 22, 74, 45, 75, 74, 75, 46, 76, 47, 77, 76, 77, 47, 78, 48, 79, 78, 79, 49, 80, 50, 81, 80, 81, 53, 82, 54, 83, 82, 83, 54, 84, 55, 85, 84, 85, 57, 86, 86, 87, 58, 88, 87, 88, 64, 89, 65, 90, 89, 90, 63, 91, 91, 92, 64, 93, 92, 93, 42, 94, 71, 94, 74, 95, 75, 95, 47, 96, 77, 96, 54, 97, 83, 97];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [6, 1, 0, 4, 5], [3, 25, 26, 7], [0, 3, 7], [20, 6, 5, 19], [0, 21, 22, 4], [15, 14, 31, 32, 33], [28, 27, 53, 54, 55], [14, 13, 34, 35], [42, 41, 70, 71], [40, 39, 69], [42, 71, 94], [76, 77, 47, 46], [33, 32, 57, 58], [54, 53, 82, 83], [59, 60, 61, 62, 63, 64, 65, 66, 32, 31], [57, 86, 87, 88, 58], [55, 54, 84, 85], [77, 96, 47], [83, 97, 54], [65, 64, 89, 90], [64, 63, 91, 92, 93], [81, 50, 49, 80], [95, 75, 74], [48, 47, 78, 79], [24, 23, 49, 50, 51], [22, 74, 75, 45], [37, 36, 67, 68], [4, 22, 45], [19, 5, 44], [5, 4, 23, 24], [21, 46, 47, 48, 22], [13, 12, 36, 37, 38], [25, 52, 26], [43, 42, 72, 73], [16, 15, 39, 40], [9, 56, 27], [10, 9, 27, 28], [17, 16, 41, 42, 43], [8, 29, 30, 9], [3, 2, 8, 9, 10], [2, 1, 11, 12, 13, 14, 15, 16, 17, 18]];
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
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[54,83],
      [47,77],
      [75,74],
      [42,71],
      [64,63],
      [65,64],
      [58,57],
      [55,54],
      [54,53],
      [50,49],
      [48,47],
      [47,46],
      [45,22],
      [43,42],
      [42,41],
      [40,39],
      [37,36],
      [32,31],
      [33,32],
      [27,9],
      [28,27],
      [26,25],
      [24,23],
      [22,21],
      [4,22],
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

obj0.userData.angles = [2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469274,
      2.77672882547631,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
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
      [95],
      [94],
      [91,92,93],
      [89,90],
      [86,87,88],
      [84,85],
      [82,83,97],
      [80,81],
      [78,79],
      [76,77,96],
      [74,75,95],
      [72,73],
      [70,71,94],
      [69],
      [67,68],
      [59,60,61,62,63,64,65,66,89,90,91,92,93],
      [57,58,86,87,88],
      [56],
      [53,54,55,82,83,84,85,97],
      [52],
      [49,50,51,80,81],
      [46,47,48,76,77,78,79,96],
      [45,74,75,95],
      [44],
      [41,42,43,70,71,72,73,94],
      [39,40,69],
      [36,37,38,67,68],
      [34,35],
      [31,32,33,57,58,59,60,61,62,63,64,65,66,86,87,88,89,90,91,92,93],
      [29,30],
      [27,28,53,54,55,56,82,83,84,85,97],
      [25,26,52],
      [23,24,49,50,51,80,81],
      [21,22,45,46,47,48,74,75,76,77,78,79,95,96],
      [19,20,44],
      [11,12,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,43,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,86,87,88,89,90,91,92,93,94],
      [8,9,10,27,28,29,30,53,54,55,56,82,83,84,85,97],
      [7,25,26,52],
      [4,5,6,19,20,21,22,23,24,44,45,46,47,48,49,50,51,74,75,76,77,78,79,80,81,95,96]];

obj0.userData.polytoperoot = [[0.589953675931575,-0.266775912111715,-0.729222847027309],
      [2.61803398874989,-1,-1.61803398874989],
      [0.450684504835842,-0.729222847027308,1.17990735186315]];

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
