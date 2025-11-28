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
obj0.userData.points.push(new PMPoint(0.588901, 0.427861, 0));
obj0.userData.points.push(new PMPoint(0.22494, 0.692294, 0));
obj0.userData.points.push(new PMPoint(-0.139021, 0.427861, 0));
obj0.userData.points.push(new PMPoint(0, -0.44988, 0));
obj0.userData.points.push(new PMPoint(0.44988, -0.44988, 0));
obj0.userData.points.push(new PMPoint(0.877741, -0.139021, 0));
obj0.userData.points.push(new PMPoint(1.01676, 0.288841, 0));
obj0.userData.points.push(new PMPoint(0.635926, 0.875277, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 0.791822, 0));
obj0.userData.points.push(new PMPoint(-0.440049, 0.0935353, 0));
obj0.userData.points.push(new PMPoint(-0.139021, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.22494, -1.14217, 0));
obj0.userData.points.push(new PMPoint(0.588901, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.839488, -0.22494, 0));
obj0.userData.points.push(new PMPoint(-0.44988, 0, 0));
obj0.userData.points.push(new PMPoint(-0.44988, -0.44988, 0));
obj0.userData.points.push(new PMPoint(1.15578, 0.716702, 0));
obj0.userData.points.push(new PMPoint(0.727921, 0.855723, 0));
obj0.userData.points.push(new PMPoint(1.2417, -0.403453, 0));
obj0.userData.points.push(new PMPoint(1.60566, -0.139021, 0));
obj0.userData.points.push(new PMPoint(1.46664, 0.288841, 0));
obj0.userData.points.push(new PMPoint(0.452943, 1.28626, 0));
obj0.userData.points.push(new PMPoint(0.0419573, 1.10328, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 0.527389, 0));
obj0.userData.points.push(new PMPoint(-0.502981, 0.163428, 0));
obj0.userData.points.push(new PMPoint(-0.440049, -0.543415, 0));
obj0.userData.points.push(new PMPoint(-0.403453, -1.2417, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, -1.50613, 0));
obj0.userData.points.push(new PMPoint(1.01676, -0.738721, 0));
obj0.userData.points.push(new PMPoint(0.877741, -0.310859, 0));
obj0.userData.points.push(new PMPoint(0.0859194, -1.57004, 0));
obj0.userData.points.push(new PMPoint(0.22494, -1.9979, 0));
obj0.userData.points.push(new PMPoint(0.588901, -2.26233, 0));
obj0.userData.points.push(new PMPoint(1.03878, -2.26233, 0));
obj0.userData.points.push(new PMPoint(1.40274, -1.9979, 0));
obj0.userData.points.push(new PMPoint(1.54176, -1.57004, 0));
obj0.userData.points.push(new PMPoint(1.40274, -1.14217, 0));
obj0.userData.points.push(new PMPoint(1.03878, -0.877741, 0));
obj0.userData.points.push(new PMPoint(-0.877741, 0.139021, 0));
obj0.userData.points.push(new PMPoint(-1.14217, -0.22494, 0));
obj0.userData.points.push(new PMPoint(-0.877741, -0.588901, 0));
obj0.userData.points.push(new PMPoint(1.42022, 1.08066, 0));
obj0.userData.points.push(new PMPoint(1.15578, 1.44462, 0));
obj0.userData.points.push(new PMPoint(0.727921, 1.3056, 0));
obj0.userData.points.push(new PMPoint(1.45681, 0.382376, 0));
obj0.userData.points.push(new PMPoint(2.03352, 0, 0));
obj0.userData.points.push(new PMPoint(1.8945, 0.427861, 0));
obj0.userData.points.push(new PMPoint(0.0889826, 1.5507, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 1.934, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 1.934, 0));
obj0.userData.points.push(new PMPoint(-1.05625, 1.62314, 0));
obj0.userData.points.push(new PMPoint(-1.19528, 1.19528, 0));
obj0.userData.points.push(new PMPoint(-0.814439, 0.608839, 0));
obj0.userData.points.push(new PMPoint(-0.774375, -0.844444, 0));
obj0.userData.points.push(new PMPoint(-0.473347, -1.17877, 0));
obj0.userData.points.push(new PMPoint(-0.767414, -1.50613, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -1.934, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -1.934, 0));
obj0.userData.points.push(new PMPoint(1.7667, -2.26233, 0));
obj0.userData.points.push(new PMPoint(2.13066, -1.9979, 0));
obj0.userData.points.push(new PMPoint(1.99164, -1.57004, 0));
obj0.userData.points.push(new PMPoint(1.30321, -2.62629, 0));
obj0.userData.points.push(new PMPoint(1.66717, -2.36186, 0));
obj0.userData.points.push(new PMPoint(0.44988, -2.69019, 0));
obj0.userData.points.push(new PMPoint(0.813841, -2.95462, 0));
obj0.userData.points.push(new PMPoint(1.1778, -2.69019, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, -2.36186, 0));
obj0.userData.points.push(new PMPoint(0.324468, -2.62629, 0));
obj0.userData.points.push(new PMPoint(-1.50613, -0.489373, 0));
obj0.userData.points.push(new PMPoint(-1.2417, -0.853333, 0));
obj0.userData.points.push(new PMPoint(-1.2417, 0.403453, 0));
obj0.userData.points.push(new PMPoint(-1.50613, 0.0394928, 0));
obj0.userData.points.push(new PMPoint(1.01676, 1.87248, 0));
obj0.userData.points.push(new PMPoint(0.588901, 1.73346, 0));
obj0.userData.points.push(new PMPoint(1.51974, 0.452269, 0));
obj0.userData.points.push(new PMPoint(1.78418, 0.81623, 0));
obj0.userData.points.push(new PMPoint(1.78418, 1.3451, 0));
obj0.userData.points.push(new PMPoint(1.51974, 1.70906, 0));
obj0.userData.points.push(new PMPoint(-1.018, 1.70906, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 2.36186, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 2.62629, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 2.36186, 0));
obj0.userData.points.push(new PMPoint(-1.42022, 1.88757, 0));
obj0.userData.points.push(new PMPoint(-1.78418, 1.62314, 0));
obj0.userData.points.push(new PMPoint(-1.64516, 1.19528, 0));
obj0.userData.points.push(new PMPoint(-0.913396, -1.27231, 0));
obj0.userData.points.push(new PMPoint(-1.19528, -1.64516, 0));
obj0.userData.points.push(new PMPoint(-1.05625, -2.07302, 0));
obj0.userData.points.push(new PMPoint(2.43169, -1.66357, 0));
obj0.userData.points.push(new PMPoint(2.03113, -2.62629, 0));
obj0.userData.points.push(new PMPoint(2.3951, -2.36186, 0));
obj0.userData.points.push(new PMPoint(1.7142, -2.80927, 0));
obj0.userData.points.push(new PMPoint(0.185447, -3.05415, 0));
obj0.userData.points.push(new PMPoint(0.549408, -3.31858, 0));
obj0.userData.points.push(new PMPoint(1.07827, -3.31858, 0));
obj0.userData.points.push(new PMPoint(1.44223, -3.05415, 0));
obj0.userData.points.push(new PMPoint(-0.0865181, -2.80927, 0));
obj0.userData.points.push(new PMPoint(-1.55316, -0.0419573, 0));
obj0.userData.points.push(new PMPoint(1.45681, 1.77895, 0));
obj0.userData.points.push(new PMPoint(-0.853333, 2.3236, 0));
obj0.userData.points.push(new PMPoint(-1.24294, 2.09866, 0));
obj0.userData.points.push(new PMPoint(0.996823, -3.36561, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 9, 3, 10, 4, 11, 10, 11, 0, 12, 4, 12, 5, 13, 13, 14, 6, 15, 14, 15, 1, 16, 6, 16, 0, 17, 5, 18, 17, 18, 8, 19, 2, 20, 19, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 3, 25, 24, 25, 10, 26, 26, 27, 11, 28, 27, 28, 11, 29, 4, 30, 29, 30, 5, 31, 13, 31, 13, 32, 14, 33, 32, 33, 15, 34, 6, 35, 34, 35, 14, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 15, 43, 42, 43, 17, 44, 44, 45, 18, 46, 45, 46, 19, 47, 47, 48, 20, 49, 48, 49, 8, 50, 19, 50, 22, 51, 23, 52, 51, 52, 24, 53, 25, 53, 26, 54, 27, 55, 54, 55, 27, 56, 28, 57, 56, 57, 11, 58, 28, 58, 31, 59, 13, 60, 59, 60, 32, 61, 61, 62, 33, 63, 62, 63, 40, 64, 64, 65, 41, 66, 65, 66, 39, 67, 40, 68, 67, 68, 38, 69, 69, 70, 39, 71, 70, 71, 37, 72, 38, 73, 72, 73, 45, 74, 46, 75, 74, 75, 44, 76, 45, 77, 76, 77, 48, 78, 49, 79, 78, 79, 19, 80, 47, 81, 80, 81, 47, 82, 48, 83, 82, 83, 27, 84, 55, 84, 54, 85, 85, 86, 55, 87, 86, 87, 56, 88, 88, 89, 57, 90, 89, 90, 59, 91, 60, 91, 61, 92, 62, 93, 92, 93, 65, 94, 66, 94, 64, 95, 65, 96, 95, 96, 67, 97, 68, 97, 69, 98, 70, 99, 98, 99, 70, 100, 71, 101, 100, 101, 72, 102, 73, 102, 45, 103, 74, 103, 48, 104, 78, 104, 55, 105, 84, 106, 105, 106, 70, 107, 99, 107];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [31, 59, 60, 13], [5, 31, 13], [6, 5, 13, 14, 15], [2, 1, 7, 8], [16, 1, 6], [46, 45, 74, 75], [91, 60, 59], [33, 14, 13, 32], [35, 6, 15, 34], [2, 8, 19, 20], [57, 56, 88, 89, 90], [20, 19, 47, 48, 49], [27, 26, 54, 55], [27, 55, 84], [49, 48, 78, 79], [8, 50, 19], [55, 105, 106, 84], [80, 81, 47, 19], [70, 69, 98, 99], [48, 104, 78], [23, 22, 51, 52], [70, 99, 107], [66, 65, 94], [71, 70, 100, 101], [41, 40, 64, 65, 66], [68, 67, 97], [40, 39, 67, 68], [65, 64, 95, 96], [39, 38, 69, 70, 71], [48, 47, 82, 83], [55, 54, 85, 86, 87], [73, 72, 102], [38, 37, 72, 73], [42, 43, 15, 14, 36, 37, 38, 39, 40, 41], [62, 61, 92, 93], [8, 7, 21, 22, 23], [63, 33, 32, 61, 62], [25, 24, 53], [28, 27, 56, 57], [103, 74, 45], [3, 2, 9], [3, 9, 24, 25], [11, 10, 26, 27, 28], [11, 28, 58], [76, 77, 45, 44], [4, 3, 10, 11], [0, 4, 12], [4, 11, 29, 30], [17, 44, 45, 46, 18], [0, 17, 18, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[70,99],
      [84,55],
      [78,48],
      [74,45],
      [73,72],
      [71,70],
      [70,69],
      [68,67],
      [65,64],
      [66,65],
      [62,61],
      [60,59],
      [57,56],
      [55,54],
      [27,55],
      [48,47],
      [47,19],
      [49,48],
      [45,44],
      [46,45],
      [38,37],
      [39,38],
      [40,39],
      [41,40],
      [33,32],
      [13,31],
      [11,28],
      [28,27],
      [27,26],
      [25,24],
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
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
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
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
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

obj0.userData.subtrees = [[107],
      [105,106],
      [104],
      [103],
      [102],
      [100,101],
      [98,99,107],
      [97],
      [95,96],
      [94],
      [92,93],
      [91],
      [88,89,90],
      [85,86,87],
      [84,105,106],
      [82,83],
      [80,81],
      [78,79,104],
      [76,77],
      [74,75,103],
      [72,73,102],
      [69,70,71,98,99,100,101,107],
      [67,68,97],
      [64,65,66,94,95,96],
      [61,62,63,92,93],
      [59,60,91],
      [58],
      [56,57,88,89,90],
      [54,55,84,85,86,87,105,106],
      [53],
      [51,52],
      [50],
      [47,48,49,78,79,80,81,82,83,104],
      [44,45,46,74,75,76,77,103],
      [36,37,38,39,40,41,42,43,64,65,66,67,68,69,70,71,72,73,94,95,96,97,98,99,100,101,102,107],
      [34,35],
      [32,33,61,62,63,92,93],
      [31,59,60,91],
      [29,30],
      [26,27,28,54,55,56,57,58,84,85,86,87,88,89,90,105,106],
      [24,25,53],
      [21,22,23,51,52],
      [19,20,47,48,49,50,78,79,80,81,82,83,104],
      [17,18,44,45,46,74,75,76,77,103],
      [16],
      [13,14,15,31,32,33,34,35,36,37,38,39,40,41,42,43,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,91,92,93,94,95,96,97,98,99,100,101,102,107],
      [12],
      [10,11,26,27,28,29,30,54,55,56,57,58,84,85,86,87,88,89,90,105,106],
      [9,24,25,53],
      [7,8,19,20,21,22,23,47,48,49,50,51,52,78,79,80,81,82,83,104],
      [5,6,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,91,92,93,94,95,96,97,98,99,100,101,102,103,107]];

obj0.userData.polytoperoot = [[0.908469931550558,-0.224940025815262,0.29676667203781],
      [1.6180339887499,-1,0],
      [-0.139020581384111,-0.224940025815262,-0.813840658829897]];

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
