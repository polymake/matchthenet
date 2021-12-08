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
obj0.userData.points.push(new PMPoint(0.602147, 0, 0));
obj0.userData.points.push(new PMPoint(0.577708, 0.491492, 0));
obj0.userData.points.push(new PMPoint(0.193703, 0.456095, 0));
obj0.userData.points.push(new PMPoint(0.235383, -0.554234, 0));
obj0.userData.points.push(new PMPoint(0.582964, -0.385776, 0));
obj0.userData.points.push(new PMPoint(1.18232, 0.0711732, 0));
obj0.userData.points.push(new PMPoint(0.959062, 0.486967, 0));
obj0.userData.points.push(new PMPoint(-0.0474718, 0.757005, 0));
obj0.userData.points.push(new PMPoint(-0.418121, 0.433307, 0));
obj0.userData.points.push(new PMPoint(0.492316, 1.0671, 0));
obj0.userData.points.push(new PMPoint(-0.0143006, 0.780821, 0));
obj0.userData.points.push(new PMPoint(0.909898, -0.578529, 0));
obj0.userData.points.push(new PMPoint(1.18232, -0.0711732, 0));
obj0.userData.points.push(new PMPoint(-0.418121, -0.433307, 0));
obj0.userData.points.push(new PMPoint(-0.127195, -0.68738, 0));
obj0.userData.points.push(new PMPoint(0.527687, -1.06042, 0));
obj0.userData.points.push(new PMPoint(0.888181, -0.611348, 0));
obj0.userData.points.push(new PMPoint(1.53759, 0.51199, 0));
obj0.userData.points.push(new PMPoint(1.16931, 0.791267, 0));
obj0.userData.points.push(new PMPoint(1.13839, 0.810454, 0));
obj0.userData.points.push(new PMPoint(0.631489, 1.07091, 0));
obj0.userData.points.push(new PMPoint(-0.682407, 0.151627, 0));
obj0.userData.points.push(new PMPoint(-0.562275, -0.215469, 0));
obj0.userData.points.push(new PMPoint(-0.315534, 1.02829, 0));
obj0.userData.points.push(new PMPoint(-0.769769, 0.900224, 0));
obj0.userData.points.push(new PMPoint(0.0471662, 1.42294, 0));
obj0.userData.points.push(new PMPoint(-0.174553, 1.1269, 0));
obj0.userData.points.push(new PMPoint(1.25038, -0.729788, 0));
obj0.userData.points.push(new PMPoint(1.53759, -0.51199, 0));
obj0.userData.points.push(new PMPoint(-0.176811, -1.06365, 0));
obj0.userData.points.push(new PMPoint(0.396667, -1.11607, 0));
obj0.userData.points.push(new PMPoint(-0.769769, -0.900224, 0));
obj0.userData.points.push(new PMPoint(-0.215508, -1.05649, 0));
obj0.userData.points.push(new PMPoint(1.0723, -1.2151, 0));
obj0.userData.points.push(new PMPoint(1.1605, -0.865608, 0));
obj0.userData.points.push(new PMPoint(1.7302, -0.0715462, 0));
obj0.userData.points.push(new PMPoint(1.80503, 0.276709, 0));
obj0.userData.points.push(new PMPoint(1.8394, 0.95944, 0));
obj0.userData.points.push(new PMPoint(1.41176, 1.06131, 0));
obj0.userData.points.push(new PMPoint(1.28491, 1.14248, 0));
obj0.userData.points.push(new PMPoint(1.07092, 1.42599, 0));
obj0.userData.points.push(new PMPoint(-0.872202, 0.801381, 0));
obj0.userData.points.push(new PMPoint(-1.04813, 0.253045, 0));
obj0.userData.points.push(new PMPoint(-1.05667, 0.214628, 0));
obj0.userData.points.push(new PMPoint(-1.1295, -0.356615, 0));
obj0.userData.points.push(new PMPoint(-0.24255, 1.39088, 0));
obj0.userData.points.push(new PMPoint(-0.699248, 1.46197, 0));
obj0.userData.points.push(new PMPoint(0.63638, 1.61339, 0));
obj0.userData.points.push(new PMPoint(0.29011, 1.69255, 0));
obj0.userData.points.push(new PMPoint(1.31437, -1.08451, 0));
obj0.userData.points.push(new PMPoint(1.8394, -0.95944, 0));
obj0.userData.points.push(new PMPoint(-0.182938, -1.43617, 0));
obj0.userData.points.push(new PMPoint(0.129802, -1.61538, 0));
obj0.userData.points.push(new PMPoint(-0.699248, -1.46197, 0));
obj0.userData.points.push(new PMPoint(-0.343085, -1.40653, 0));
obj0.userData.points.push(new PMPoint(0.610491, -1.62049, 0));
obj0.userData.points.push(new PMPoint(0.960289, -1.55324, 0));
obj0.userData.points.push(new PMPoint(2.12931, 0.399617, 0));
obj0.userData.points.push(new PMPoint(1.9257, 0.887057, 0));
obj0.userData.points.push(new PMPoint(2.26532, -0.141886, 0));
obj0.userData.points.push(new PMPoint(2.13876, 0.370987, 0));
obj0.userData.points.push(new PMPoint(1.76634, 1.48262, 0));
obj0.userData.points.push(new PMPoint(1.32662, 1.40616, 0));
obj0.userData.points.push(new PMPoint(-1.43611, 0.750938, 0));
obj0.userData.points.push(new PMPoint(-1.3934, 0.393024, 0));
obj0.userData.points.push(new PMPoint(-1.42873, 0.234036, 0));
obj0.userData.points.push(new PMPoint(-1.61899, -0.0721149, 0));
obj0.userData.points.push(new PMPoint(-0.216581, 1.75287, 0));
obj0.userData.points.push(new PMPoint(-0.586837, 1.98986, 0));
obj0.userData.points.push(new PMPoint(-1.05426, 1.49105, 0));
obj0.userData.points.push(new PMPoint(-1.25291, 1.19537, 0));
obj0.userData.points.push(new PMPoint(0.705216, 2.05436, 0));
obj0.userData.points.push(new PMPoint(0.18085, 2.11836, 0));
obj0.userData.points.push(new PMPoint(1.42467, -1.42321, 0));
obj0.userData.points.push(new PMPoint(1.76634, -1.48262, 0));
obj0.userData.points.push(new PMPoint(-0.484425, -1.63373, 0));
obj0.userData.points.push(new PMPoint(-0.164063, -2.06809, 0));
obj0.userData.points.push(new PMPoint(-1.25291, -1.19537, 0));
obj0.userData.points.push(new PMPoint(-1.05426, -1.49105, 0));
obj0.userData.points.push(new PMPoint(0.754931, -2.14053, 0));
obj0.userData.points.push(new PMPoint(1.17752, -1.82356, 0));
obj0.userData.points.push(new PMPoint(3.10005, 0.878742, 0));
obj0.userData.points.push(new PMPoint(3.20398, 0.563866, 0));
obj0.userData.points.push(new PMPoint(2.84576, 1.56477, 0));
obj0.userData.points.push(new PMPoint(-1.96767, 0.657422, 0));
obj0.userData.points.push(new PMPoint(-1.6931, 0.192756, 0));
obj0.userData.points.push(new PMPoint(-1.10811, 1.90424, 0));
obj0.userData.points.push(new PMPoint(-1.0405, 1.5641, 0));
obj0.userData.points.push(new PMPoint(-1.21816, 1.79667, 0));
obj0.userData.points.push(new PMPoint(-1.6751, 1.53161, 0));
obj0.userData.points.push(new PMPoint(0.768674, 3.13505, 0));
obj0.userData.points.push(new PMPoint(2.84576, -1.56477, 0));
obj0.userData.points.push(new PMPoint(-0.753054, -1.86765, 0));
obj0.userData.points.push(new PMPoint(-0.674176, -2.20536, 0));
obj0.userData.points.push(new PMPoint(-1.6751, -1.53161, 0));
obj0.userData.points.push(new PMPoint(-1.21816, -1.79667, 0));
obj0.userData.points.push(new PMPoint(1.77146, -2.72862, 0));
obj0.userData.points.push(new PMPoint(-1.2162, 2.98137, 0));
obj0.userData.points.push(new PMPoint(-1.81904, 2.69714, 0));
obj0.userData.points.push(new PMPoint(-0.327838, -3.231, 0));
obj0.userData.points.push(new PMPoint(-1.81904, -2.69714, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 0, 14, 4, 15, 14, 15, 4, 16, 5, 17, 16, 17, 6, 18, 7, 19, 18, 19, 7, 20, 2, 21, 20, 21, 9, 22, 0, 23, 22, 23, 8, 24, 9, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 15, 30, 4, 31, 30, 31, 14, 32, 15, 33, 32, 33, 16, 34, 17, 35, 34, 35, 6, 36, 18, 37, 36, 37, 18, 38, 19, 39, 38, 39, 20, 40, 21, 41, 40, 41, 9, 42, 22, 43, 42, 43, 22, 44, 23, 45, 44, 45, 24, 46, 25, 47, 46, 47, 10, 48, 26, 49, 48, 49, 28, 50, 29, 51, 50, 51, 30, 52, 31, 53, 52, 53, 32, 54, 33, 55, 54, 55, 16, 56, 34, 57, 56, 57, 37, 58, 18, 59, 58, 59, 36, 60, 37, 61, 60, 61, 38, 62, 39, 63, 62, 63, 42, 64, 43, 65, 64, 65, 44, 66, 45, 67, 66, 67, 46, 68, 47, 69, 68, 69, 47, 70, 25, 71, 70, 71, 48, 72, 49, 73, 72, 73, 50, 74, 51, 75, 74, 75, 52, 76, 53, 77, 76, 77, 32, 78, 54, 79, 78, 79, 56, 80, 57, 81, 80, 81, 58, 82, 59, 82, 60, 83, 61, 83, 38, 84, 62, 84, 64, 85, 65, 86, 85, 86, 69, 87, 47, 88, 87, 88, 70, 89, 71, 90, 89, 90, 72, 91, 73, 91, 51, 92, 75, 92, 76, 93, 77, 94, 93, 94, 78, 95, 79, 96, 95, 96, 80, 97, 81, 97, 69, 98, 87, 98, 89, 99, 90, 99, 77, 100, 94, 100, 95, 101, 96, 101];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [0, 14, 15, 4], [7, 6, 18, 19], [17, 5, 4, 16], [0, 9, 22, 23], [13, 12, 28, 29], [31, 4, 15, 30], [9, 8, 24, 25], [18, 6, 36, 37], [17, 16, 34, 35], [9, 42, 43, 22], [14, 32, 33, 15], [19, 18, 38, 39], [31, 30, 52, 53], [24, 46, 47, 25], [23, 22, 44, 45], [18, 37, 58, 59], [29, 28, 50, 51], [34, 16, 56, 57], [43, 42, 64, 65], [33, 32, 54, 55], [39, 38, 62, 63], [37, 36, 60, 61], [46, 68, 69, 47], [25, 47, 70, 71], [45, 44, 66, 67], [59, 58, 82], [51, 50, 74, 75], [49, 48, 72, 73], [53, 52, 76, 77], [32, 78, 79, 54], [62, 38, 84], [61, 60, 83], [47, 69, 87, 88], [57, 56, 80, 81], [65, 64, 85, 86], [51, 75, 92], [73, 72, 91], [76, 93, 94, 77], [71, 70, 89, 90], [69, 98, 87], [81, 80, 97], [78, 95, 96, 79], [77, 94, 100], [90, 89, 99], [95, 101, 96], [2, 7, 20, 21], [3, 2, 10, 11], [21, 20, 40, 41], [11, 10, 26, 27], [26, 10, 48, 49]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x7B211F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[96,95],
      [77,94],
      [90,89],
      [87,69],
      [81,80],
      [79,78],
      [77,76],
      [51,75],
      [73,72],
      [71,70],
      [47,69],
      [65,64],
      [62,38],
      [61,60],
      [59,58],
      [57,56],
      [54,32],
      [53,52],
      [51,50],
      [49,48],
      [25,47],
      [47,46],
      [45,44],
      [43,42],
      [39,38],
      [37,36],
      [18,37],
      [34,16],
      [33,32],
      [31,30],
      [29,28],
      [26,10],
      [25,24],
      [23,22],
      [22,9],
      [21,20],
      [19,18],
      [18,6],
      [17,16],
      [15,14],
      [4,15],
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

obj0.userData.angles = [2.71039914982383,
      2.71039914982384,
      2.71039914982383,
      2.71039914982384,
      2.71039914982383,
      2.69699128655038,
      2.69902858238642,
      2.71039914982383,
      2.71039914982383,
      2.69699128655038,
      2.69902858238642,
      2.68805111602412,
      2.71039914982383,
      2.71039914982383,
      2.71039914982383,
      2.69699128655038,
      2.68449868983043,
      2.68805111602412,
      2.69902858238642,
      2.69616917835374,
      2.68449868983043,
      2.68805111602412,
      2.67236773031476,
      2.67236773031476,
      2.69902858238642,
      2.69699128655038,
      2.69699128655038,
      2.68449868983043,
      2.67236773031476,
      2.67236773031476,
      2.68805111602412,
      2.67957999423518,
      2.67236773031476,
      2.65761870792341,
      2.65761870792341,
      2.67957999423518,
      2.68805111602412,
      2.68449868983043,
      2.67236773031476,
      2.65761870792341,
      2.65761870792341,
      2.67236773031476,
      2.66551890452117,
      2.65761870792341,
      2.65141765217348,
      2.66676269530584,
      2.67236773031476,
      2.65761870792341,
      2.65141765217348,
      2.65761870792341,
      2.65582886583527,
      2.65141765217348,
      2.65761870792341,
      2.65141765217348];

obj0.userData.subtrees = [[101],
      [100],
      [99],
      [98],
      [97],
      [95,96,101],
      [93,94,100],
      [92],
      [91],
      [89,90,99],
      [87,88,98],
      [85,86],
      [84],
      [83],
      [82],
      [80,81,97],
      [78,79,95,96,101],
      [76,77,93,94,100],
      [74,75,92],
      [72,73,91],
      [70,71,89,90,99],
      [68,69,87,88,98],
      [66,67],
      [64,65,85,86],
      [62,63,84],
      [60,61,83],
      [58,59,82],
      [56,57,80,81,97],
      [54,55,78,79,95,96,101],
      [52,53,76,77,93,94,100],
      [50,51,74,75,92],
      [48,49,72,73,91],
      [46,47,68,69,70,71,87,88,89,90,98,99],
      [44,45,66,67],
      [42,43,64,65,85,86],
      [40,41],
      [38,39,62,63,84],
      [36,37,58,59,60,61,82,83],
      [34,35,56,57,80,81,97],
      [32,33,54,55,78,79,95,96,101],
      [30,31,52,53,76,77,93,94,100],
      [28,29,50,51,74,75,92],
      [26,27,48,49,72,73,91],
      [24,25,46,47,68,69,70,71,87,88,89,90,98,99],
      [22,23,42,43,44,45,64,65,66,67,85,86],
      [20,21,40,41],
      [18,19,36,37,38,39,58,59,60,61,62,63,82,83,84],
      [16,17,34,35,56,57,80,81,97],
      [14,15,30,31,32,33,52,53,54,55,76,77,78,79,93,94,95,96,100,101],
      [12,13,28,29,50,51,74,75,92],
      [10,11,26,27,48,49,72,73,91],
      [8,9,22,23,24,25,42,43,44,45,46,47,64,65,66,67,68,69,70,71,85,86,87,88,89,90,98,99],
      [6,7,18,19,20,21,36,37,38,39,40,41,58,59,60,61,62,63,82,83,84],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,50,51,52,53,54,55,56,57,74,75,76,77,78,79,80,81,92,93,94,95,96,97,100,101]];

obj0.userData.polytoperoot = [[0,-0.954458192225596,-0.589887603636199],
      [-0.237425237048063,-0.929936086598306,-0.190570005552051],
      [-0.571594734625782,0.140054204125039,0.0287010374608957]];

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
