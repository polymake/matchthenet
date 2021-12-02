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
obj0.userData.points.push(new PMPoint(0.44988, 0, 0));
obj0.userData.points.push(new PMPoint(0.44988, 0.44988, 0));
obj0.userData.points.push(new PMPoint(0, 0.44988, 0));
obj0.userData.points.push(new PMPoint(-0.139021, -0.427861, 0));
obj0.userData.points.push(new PMPoint(0.22494, -0.692294, 0));
obj0.userData.points.push(new PMPoint(0.588901, -0.427861, 0));
obj0.userData.points.push(new PMPoint(-0.389608, 0.22494, 0));
obj0.userData.points.push(new PMPoint(0.588901, 0.877741, 0));
obj0.userData.points.push(new PMPoint(0.22494, 1.14217, 0));
obj0.userData.points.push(new PMPoint(-0.139021, 0.877741, 0));
obj0.userData.points.push(new PMPoint(0.714313, -0.363961, 0));
obj0.userData.points.push(new PMPoint(1.14217, -0.502981, 0));
obj0.userData.points.push(new PMPoint(1.57004, -0.363961, 0));
obj0.userData.points.push(new PMPoint(1.83447, 0, 0));
obj0.userData.points.push(new PMPoint(1.83447, 0.44988, 0));
obj0.userData.points.push(new PMPoint(1.57004, 0.813841, 0));
obj0.userData.points.push(new PMPoint(1.14217, 0.952861, 0));
obj0.userData.points.push(new PMPoint(0.714313, 0.813841, 0));
obj0.userData.points.push(new PMPoint(0.489373, -1.05625, 0));
obj0.userData.points.push(new PMPoint(0.853333, -0.791822, 0));
obj0.userData.points.push(new PMPoint(-0.427861, 0.139021, 0));
obj0.userData.points.push(new PMPoint(-0.566882, -0.288841, 0));
obj0.userData.points.push(new PMPoint(-0.403453, -0.791822, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, -1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.22494, 0.839488, 0));
obj0.userData.points.push(new PMPoint(-0.614548, 0.614548, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 1.50613, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 1.2417, 0));
obj0.userData.points.push(new PMPoint(0.853333, 1.2417, 0));
obj0.userData.points.push(new PMPoint(0.489373, 1.50613, 0));
obj0.userData.points.push(new PMPoint(2.26233, -0.139021, 0));
obj0.userData.points.push(new PMPoint(2.52676, 0.22494, 0));
obj0.userData.points.push(new PMPoint(2.26233, 0.588901, 0));
obj0.userData.points.push(new PMPoint(1.934, -0.628393, 0));
obj0.userData.points.push(new PMPoint(2.19843, -0.264433, 0));
obj0.userData.points.push(new PMPoint(1.14217, -0.952861, 0));
obj0.userData.points.push(new PMPoint(1.57004, -1.09188, 0));
obj0.userData.points.push(new PMPoint(1.83447, -0.727921, 0));
obj0.userData.points.push(new PMPoint(2.19843, 0.714313, 0));
obj0.userData.points.push(new PMPoint(1.934, 1.07827, 0));
obj0.userData.points.push(new PMPoint(1.83447, 1.1778, 0));
obj0.userData.points.push(new PMPoint(1.57004, 1.54176, 0));
obj0.userData.points.push(new PMPoint(1.14217, 1.40274, 0));
obj0.userData.points.push(new PMPoint(0.0419573, -1.10328, 0));
obj0.userData.points.push(new PMPoint(-0.473347, -0.72889, 0));
obj0.userData.points.push(new PMPoint(-0.791822, 0.403453, 0));
obj0.userData.points.push(new PMPoint(-1.15578, 0.139021, 0));
obj0.userData.points.push(new PMPoint(-1.01676, -0.288841, 0));
obj0.userData.points.push(new PMPoint(-0.767414, -1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.614548, 1.06443, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 1.934, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 1.934, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 1.50613, 0));
obj0.userData.points.push(new PMPoint(0.407923, 1.55316, 0));
obj0.userData.points.push(new PMPoint(2.89072, 0.489373, 0));
obj0.userData.points.push(new PMPoint(2.62629, 0.853333, 0));
obj0.userData.points.push(new PMPoint(2.62629, -0.403453, 0));
obj0.userData.points.push(new PMPoint(2.89072, -0.0394928, 0));
obj0.userData.points.push(new PMPoint(2.38141, -0.675419, 0));
obj0.userData.points.push(new PMPoint(1.934, -1.35631, 0));
obj0.userData.points.push(new PMPoint(2.19843, -0.992354, 0));
obj0.userData.points.push(new PMPoint(1.00315, -1.38072, 0));
obj0.userData.points.push(new PMPoint(1.43102, -1.51974, 0));
obj0.userData.points.push(new PMPoint(2.38141, 1.1253, 0));
obj0.userData.points.push(new PMPoint(2.19843, 1.44223, 0));
obj0.userData.points.push(new PMPoint(1.934, 1.80619, 0));
obj0.userData.points.push(new PMPoint(1.43102, 1.96962, 0));
obj0.userData.points.push(new PMPoint(1.00315, 1.8306, 0));
obj0.userData.points.push(new PMPoint(-1.00693, -0.382376, 0));
obj0.userData.points.push(new PMPoint(-0.913396, -0.822425, 0));
obj0.userData.points.push(new PMPoint(-1.05625, 0.767414, 0));
obj0.userData.points.push(new PMPoint(-1.42022, 0.502981, 0));
obj0.userData.points.push(new PMPoint(-1.58364, 0, 0));
obj0.userData.points.push(new PMPoint(-1.44462, -0.427861, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -1.934, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -1.934, 0));
obj0.userData.points.push(new PMPoint(-1.19528, -1.19528, 0));
obj0.userData.points.push(new PMPoint(-1.05625, -1.62314, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 2.38388, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 2.38388, 0));
obj0.userData.points.push(new PMPoint(-1.05625, 2.07302, 0));
obj0.userData.points.push(new PMPoint(-1.19528, 1.64516, 0));
obj0.userData.points.push(new PMPoint(3.31858, 0.628393, 0));
obj0.userData.points.push(new PMPoint(3.31858, 1.07827, 0));
obj0.userData.points.push(new PMPoint(2.89072, 1.21729, 0));
obj0.userData.points.push(new PMPoint(2.93775, 0.0419573, 0));
obj0.userData.points.push(new PMPoint(2.89072, -0.767414, 0));
obj0.userData.points.push(new PMPoint(3.31858, -0.628393, 0));
obj0.userData.points.push(new PMPoint(3.31858, -0.178513, 0));
obj0.userData.points.push(new PMPoint(1.52301, -1.5393, 0));
obj0.userData.points.push(new PMPoint(1.52301, 1.98918, 0));
obj0.userData.points.push(new PMPoint(-1.34126, -0.683405, 0));
obj0.userData.points.push(new PMPoint(-1.6032, 0.0919953, 0));
obj0.userData.points.push(new PMPoint(-2.03352, 0, 0));
obj0.userData.points.push(new PMPoint(-2.17254, -0.427861, 0));
obj0.userData.points.push(new PMPoint(-1.80858, -0.692294, 0));
obj0.userData.points.push(new PMPoint(-1.018, -1.70906, 0));
obj0.userData.points.push(new PMPoint(-1.018, 2.15894, 0));
obj0.userData.points.push(new PMPoint(3.76846, 0.628393, 0));
obj0.userData.points.push(new PMPoint(3.76846, 1.07827, 0));
obj0.userData.points.push(new PMPoint(3.02974, 0.0615115, 0));
obj0.userData.points.push(new PMPoint(3.45761, 0.200532, 0));
obj0.userData.points.push(new PMPoint(3.76846, -0.628393, 0));
obj0.userData.points.push(new PMPoint(3.76846, -0.178513, 0));
obj0.userData.points.push(new PMPoint(3.54352, 0.238786, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 1, 6, 5, 6, 0, 7, 3, 7, 2, 8, 8, 9, 3, 10, 9, 10, 1, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 2, 18, 17, 18, 5, 19, 6, 20, 19, 20, 0, 21, 4, 22, 21, 22, 4, 23, 5, 24, 23, 24, 3, 25, 7, 26, 25, 26, 9, 27, 10, 28, 27, 28, 8, 29, 9, 30, 29, 30, 14, 31, 31, 32, 15, 33, 32, 33, 13, 34, 14, 35, 34, 35, 12, 36, 36, 37, 13, 38, 37, 38, 15, 39, 16, 40, 39, 40, 16, 41, 41, 42, 17, 43, 42, 43, 5, 44, 19, 44, 4, 45, 22, 45, 21, 46, 46, 47, 22, 48, 47, 48, 23, 49, 49, 50, 24, 51, 50, 51, 25, 52, 26, 52, 27, 53, 53, 54, 28, 55, 54, 55, 9, 56, 27, 56, 32, 57, 33, 58, 57, 58, 31, 59, 32, 60, 59, 60, 34, 61, 35, 61, 37, 62, 38, 63, 62, 63, 36, 64, 37, 65, 64, 65, 39, 66, 40, 66, 41, 67, 42, 68, 67, 68, 42, 69, 43, 70, 69, 70, 22, 71, 45, 72, 71, 72, 46, 73, 47, 74, 73, 74, 47, 75, 48, 76, 75, 76, 50, 77, 51, 78, 77, 78, 49, 79, 50, 80, 79, 80, 53, 81, 54, 82, 81, 82, 54, 83, 55, 84, 83, 84, 57, 85, 85, 86, 58, 87, 86, 87, 32, 88, 57, 88, 59, 89, 89, 90, 60, 91, 90, 91, 37, 92, 62, 92, 42, 93, 68, 93, 71, 94, 72, 94, 47, 95, 74, 95, 75, 96, 96, 97, 76, 98, 97, 98, 50, 99, 77, 99, 54, 100, 82, 100, 85, 101, 86, 102, 101, 102, 57, 103, 85, 104, 103, 104, 90, 105, 91, 106, 105, 106, 85, 107, 101, 107];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [6, 1, 0, 4, 5], [3, 25, 26, 7], [0, 3, 7], [20, 6, 5, 19], [0, 21, 22, 4], [15, 14, 31, 32, 33], [28, 27, 53, 54, 55], [14, 13, 34, 35], [42, 41, 67, 68], [40, 39, 66], [42, 68, 93], [73, 74, 47, 46], [33, 32, 57, 58], [54, 53, 81, 82], [32, 31, 59, 60], [35, 34, 61], [58, 57, 85, 86, 87], [55, 54, 83, 84], [74, 95, 47], [32, 88, 57], [54, 82, 100], [59, 89, 90, 91, 60], [51, 50, 77, 78], [50, 49, 79, 80], [107, 101, 85], [50, 99, 77], [91, 90, 105, 106], [75, 96, 97, 98, 76], [86, 85, 101, 102], [103, 104, 85, 57], [71, 94, 72], [37, 92, 62], [48, 47, 75, 76], [24, 23, 49, 50, 51], [38, 37, 62, 63], [22, 71, 72, 45], [37, 36, 64, 65], [4, 22, 45], [19, 5, 44], [5, 4, 23, 24], [21, 46, 47, 48, 22], [13, 12, 36, 37, 38], [25, 52, 26], [43, 42, 69, 70], [16, 15, 39, 40], [9, 56, 27], [10, 9, 27, 28], [17, 16, 41, 42, 43], [8, 29, 30, 9], [3, 2, 8, 9, 10], [2, 1, 11, 12, 13, 14, 15, 16, 17, 18]];
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
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
obj0.userData.axes = [[101,85],
      [91,90],
      [85,57],
      [86,85],
      [54,82],
      [77,50],
      [76,75],
      [47,74],
      [72,71],
      [42,68],
      [62,37],
      [60,59],
      [57,32],
      [58,57],
      [55,54],
      [54,53],
      [50,49],
      [51,50],
      [48,47],
      [47,46],
      [45,22],
      [43,42],
      [42,41],
      [40,39],
      [37,36],
      [38,37],
      [35,34],
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
      2.58801829469275,
      2.58801829469274,
      2.58801829469274,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469274,
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
      2.58801829469274,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469274,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.03444393579571,
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

obj0.userData.subtrees = [[107],
      [105,106],
      [103,104],
      [101,102,107],
      [100],
      [99],
      [96,97,98],
      [95],
      [94],
      [93],
      [92],
      [89,90,91,105,106],
      [88],
      [85,86,87,101,102,103,104,107],
      [83,84],
      [81,82,100],
      [79,80],
      [77,78,99],
      [75,76,96,97,98],
      [73,74,95],
      [71,72,94],
      [69,70],
      [67,68,93],
      [66],
      [64,65],
      [62,63,92],
      [61],
      [59,60,89,90,91,105,106],
      [57,58,85,86,87,88,101,102,103,104,107],
      [56],
      [53,54,55,81,82,83,84,100],
      [52],
      [49,50,51,77,78,79,80,99],
      [46,47,48,73,74,75,76,95,96,97,98],
      [45,71,72,94],
      [44],
      [41,42,43,67,68,69,70,93],
      [39,40,66],
      [36,37,38,62,63,64,65,92],
      [34,35,61],
      [31,32,33,57,58,59,60,85,86,87,88,89,90,91,101,102,103,104,105,106,107],
      [29,30],
      [27,28,53,54,55,56,81,82,83,84,100],
      [25,26,52],
      [23,24,49,50,51,77,78,79,80,99],
      [21,22,45,46,47,48,71,72,73,74,75,76,94,95,96,97,98],
      [19,20,44],
      [11,12,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,43,57,58,59,60,61,62,63,64,65,66,67,68,69,70,85,86,87,88,89,90,91,92,93,101,102,103,104,105,106,107],
      [8,9,10,27,28,29,30,53,54,55,56,81,82,83,84,100],
      [7,25,26,52],
      [4,5,6,19,20,21,22,23,24,44,45,46,47,48,49,50,51,71,72,73,74,75,76,77,78,79,80,94,95,96,97,98,99]];

obj0.userData.polytoperoot = [[0.660727278895893,-0.319569298370855,-0.727921214022748],
      [2.61803398874989,-1,-1.6180339887499],
      [0.449880051398145,-0.727921214022748,1.17780126542089]];

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
