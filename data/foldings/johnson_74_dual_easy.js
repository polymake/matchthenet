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
obj0.userData.points.push(new PMPoint(0.554623, 0, 0));
obj0.userData.points.push(new PMPoint(0.530348, 0.459241, 0));
obj0.userData.points.push(new PMPoint(0.172057, 0.421256, 0));
obj0.userData.points.push(new PMPoint(0.209712, -0.513447, 0));
obj0.userData.points.push(new PMPoint(0.535604, -0.359796, 0));
obj0.userData.points.push(new PMPoint(1.10616, 0.0584715, 0));
obj0.userData.points.push(new PMPoint(0.890646, 0.459241, 0));
obj0.userData.points.push(new PMPoint(-0.0571901, 0.699214, 0));
obj0.userData.points.push(new PMPoint(-0.396033, 0.388284, 0));
obj0.userData.points.push(new PMPoint(0.442844, 1.00692, 0));
obj0.userData.points.push(new PMPoint(-0.031086, 0.718826, 0));
obj0.userData.points.push(new PMPoint(0.843482, -0.546948, 0));
obj0.userData.points.push(new PMPoint(1.10616, -0.0584715, 0));
obj0.userData.points.push(new PMPoint(-0.396033, -0.388284, 0));
obj0.userData.points.push(new PMPoint(-0.130564, -0.631885, 0));
obj0.userData.points.push(new PMPoint(0.472385, -1.00192, 0));
obj0.userData.points.push(new PMPoint(0.825276, -0.574051, 0));
obj0.userData.points.push(new PMPoint(1.45905, 0.486344, 0));
obj0.userData.points.push(new PMPoint(1.08931, 0.759818, 0));
obj0.userData.points.push(new PMPoint(1.06129, 0.776569, 0));
obj0.userData.points.push(new PMPoint(0.559624, 1.01309, 0));
obj0.userData.points.push(new PMPoint(-0.634341, 0.118055, 0));
obj0.userData.points.push(new PMPoint(-0.509204, -0.219815, 0));
obj0.userData.points.push(new PMPoint(-0.314464, 0.951454, 0));
obj0.userData.points.push(new PMPoint(-0.748924, 0.816157, 0));
obj0.userData.points.push(new PMPoint(-0.00305965, 1.33673, 0));
obj0.userData.points.push(new PMPoint(-0.201726, 1.03615, 0));
obj0.userData.points.push(new PMPoint(1.16938, -0.7006, 0));
obj0.userData.points.push(new PMPoint(1.45905, -0.486344, 0));
obj0.userData.points.push(new PMPoint(-0.187409, -0.98767, 0));
obj0.userData.points.push(new PMPoint(0.364124, -1.04614, 0));
obj0.userData.points.push(new PMPoint(-0.748924, -0.816157, 0));
obj0.userData.points.push(new PMPoint(-0.219384, -0.981064, 0));
obj0.userData.points.push(new PMPoint(1.00192, -1.16683, 0));
obj0.userData.points.push(new PMPoint(1.09074, -0.817652, 0));
obj0.userData.points.push(new PMPoint(1.6357, -0.106435, 0));
obj0.userData.points.push(new PMPoint(1.72452, 0.242744, 0));
obj0.userData.points.push(new PMPoint(1.76486, 0.949036, 0));
obj0.userData.points.push(new PMPoint(1.31856, 1.03778, 0));
obj0.userData.points.push(new PMPoint(1.19752, 1.11012, 0));
obj0.userData.points.push(new PMPoint(0.968272, 1.38808, 0));
obj0.userData.points.push(new PMPoint(-0.830794, 0.732653, 0));
obj0.userData.points.push(new PMPoint(-0.985206, 0.199958, 0));
obj0.userData.points.push(new PMPoint(-0.99118, 0.167859, 0));
obj0.userData.points.push(new PMPoint(-1.03874, -0.384721, 0));
obj0.userData.points.push(new PMPoint(-0.245893, 1.30517, 0));
obj0.userData.points.push(new PMPoint(-0.70136, 1.36874, 0));
obj0.userData.points.push(new PMPoint(0.579568, 1.54442, 0));
obj0.userData.points.push(new PMPoint(0.226188, 1.61469, 0));
obj0.userData.points.push(new PMPoint(1.22089, -1.0572, 0));
obj0.userData.points.push(new PMPoint(1.76486, -0.949036, 0));
obj0.userData.points.push(new PMPoint(-0.206427, -1.34747, 0));
obj0.userData.points.push(new PMPoint(0.101451, -1.53462, 0));
obj0.userData.points.push(new PMPoint(-0.70136, -1.36874, 0));
obj0.userData.points.push(new PMPoint(-0.344521, -1.31893, 0));
obj0.userData.points.push(new PMPoint(0.519948, -1.5545, 0));
obj0.userData.points.push(new PMPoint(0.876788, -1.5047, 0));
obj0.userData.points.push(new PMPoint(2.06479, 0.361181, 0));
obj0.userData.points.push(new PMPoint(1.85508, 0.874629, 0));
obj0.userData.points.push(new PMPoint(2.17967, -0.214595, 0));
obj0.userData.points.push(new PMPoint(2.07412, 0.329891, 0));
obj0.userData.points.push(new PMPoint(1.65931, 1.49352, 0));
obj0.userData.points.push(new PMPoint(1.21308, 1.38229, 0));
obj0.userData.points.push(new PMPoint(-1.38233, 0.674182, 0));
obj0.userData.points.push(new PMPoint(-1.32548, 0.318396, 0));
obj0.userData.points.push(new PMPoint(-1.35128, 0.179766, 0));
obj0.userData.points.push(new PMPoint(-1.53231, -0.13175, 0));
obj0.userData.points.push(new PMPoint(-0.214994, 1.66414, 0));
obj0.userData.points.push(new PMPoint(-0.595805, 1.91322, 0));
obj0.userData.points.push(new PMPoint(-1.06146, 1.38064, 0));
obj0.userData.points.push(new PMPoint(-1.24249, 1.06913, 0));
obj0.userData.points.push(new PMPoint(0.645318, 1.99958, 0));
obj0.userData.points.push(new PMPoint(0.0929723, 2.04979, 0));
obj0.userData.points.push(new PMPoint(1.30971, -1.40638, 0));
obj0.userData.points.push(new PMPoint(1.65931, -1.49352, 0));
obj0.userData.points.push(new PMPoint(-0.517072, -1.52999, 0));
obj0.userData.points.push(new PMPoint(-0.211257, -1.99268, 0));
obj0.userData.points.push(new PMPoint(-1.24249, -1.06913, 0));
obj0.userData.points.push(new PMPoint(-1.06146, -1.38064, 0));
obj0.userData.points.push(new PMPoint(0.625503, -2.09899, 0));
obj0.userData.points.push(new PMPoint(1.08965, -1.79539, 0));
obj0.userData.points.push(new PMPoint(2.48076, 0.557301, 0));
obj0.userData.points.push(new PMPoint(2.31012, 0.874629, 0));
obj0.userData.points.push(new PMPoint(2.56048, 0.0344898, 0));
obj0.userData.points.push(new PMPoint(2.52958, 0.393461, 0));
obj0.userData.points.push(new PMPoint(2.14567, 1.19812, 0));
obj0.userData.points.push(new PMPoint(2.11477, 1.55709, 0));
obj0.userData.points.push(new PMPoint(-1.92462, 0.55789, 0));
obj0.userData.points.push(new PMPoint(-1.61191, 0.0998281, 0));
obj0.userData.points.push(new PMPoint(-1.13978, 1.80506, 0));
obj0.userData.points.push(new PMPoint(-1.05096, 1.45588, 0));
obj0.userData.points.push(new PMPoint(-1.25009, 1.68762, 0));
obj0.userData.points.push(new PMPoint(-1.70665, 1.37273, 0));
obj0.userData.points.push(new PMPoint(0.662716, 2.45914, 0));
obj0.userData.points.push(new PMPoint(0.302459, 2.45374, 0));
obj0.userData.points.push(new PMPoint(2.11477, -1.55709, 0));
obj0.userData.points.push(new PMPoint(2.14567, -1.19812, 0));
obj0.userData.points.push(new PMPoint(-0.806744, -1.74424, 0));
obj0.userData.points.push(new PMPoint(-0.755231, -2.10084, 0));
obj0.userData.points.push(new PMPoint(-1.70665, -1.37273, 0));
obj0.userData.points.push(new PMPoint(-1.25009, -1.68762, 0));
obj0.userData.points.push(new PMPoint(1.00009, -2.35735, 0));
obj0.userData.points.push(new PMPoint(1.32072, -2.19301, 0));
obj0.userData.points.push(new PMPoint(2.95469, 0.845393, 0));
obj0.userData.points.push(new PMPoint(2.50878, 1.17521, 0));
obj0.userData.points.push(new PMPoint(2.89127, -0.108308, 0));
obj0.userData.points.push(new PMPoint(3.0839, 0.411789, 0));
obj0.userData.points.push(new PMPoint(-0.846711, 2.29284, 0));
obj0.userData.points.push(new PMPoint(-1.20553, 2.26022, 0));
obj0.userData.points.push(new PMPoint(-1.53081, 2.05188, 0));
obj0.userData.points.push(new PMPoint(-1.80419, 1.81719, 0));
obj0.userData.points.push(new PMPoint(0.625152, 3.01249, 0));
obj0.userData.points.push(new PMPoint(0.127088, 2.76848, 0));
obj0.userData.points.push(new PMPoint(-0.641863, -2.54653, 0));
obj0.userData.points.push(new PMPoint(-0.297859, -2.4394, 0));
obj0.userData.points.push(new PMPoint(-1.80419, -1.81719, 0));
obj0.userData.points.push(new PMPoint(-1.53081, -2.05188, 0));
obj0.userData.points.push(new PMPoint(0.992968, -2.71757, 0));
obj0.userData.points.push(new PMPoint(1.54729, -2.69925, 0));
obj0.userData.points.push(new PMPoint(-1.9138, 2.45304, 0));
obj0.userData.points.push(new PMPoint(-2.14036, 1.94681, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 0, 14, 4, 15, 14, 15, 4, 16, 5, 17, 16, 17, 6, 18, 7, 19, 18, 19, 7, 20, 2, 21, 20, 21, 9, 22, 0, 23, 22, 23, 8, 24, 9, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 15, 30, 4, 31, 30, 31, 14, 32, 15, 33, 32, 33, 16, 34, 17, 35, 34, 35, 6, 36, 18, 37, 36, 37, 18, 38, 19, 39, 38, 39, 20, 40, 21, 41, 40, 41, 9, 42, 22, 43, 42, 43, 22, 44, 23, 45, 44, 45, 24, 46, 25, 47, 46, 47, 10, 48, 26, 49, 48, 49, 28, 50, 29, 51, 50, 51, 30, 52, 31, 53, 52, 53, 32, 54, 33, 55, 54, 55, 16, 56, 34, 57, 56, 57, 37, 58, 18, 59, 58, 59, 36, 60, 37, 61, 60, 61, 38, 62, 39, 63, 62, 63, 42, 64, 43, 65, 64, 65, 44, 66, 45, 67, 66, 67, 46, 68, 47, 69, 68, 69, 47, 70, 25, 71, 70, 71, 48, 72, 49, 73, 72, 73, 50, 74, 51, 75, 74, 75, 52, 76, 53, 77, 76, 77, 32, 78, 54, 79, 78, 79, 56, 80, 57, 81, 80, 81, 58, 82, 59, 83, 82, 83, 60, 84, 61, 85, 84, 85, 38, 86, 62, 87, 86, 87, 64, 88, 65, 89, 88, 89, 69, 90, 47, 91, 90, 91, 70, 92, 71, 93, 92, 93, 72, 94, 73, 95, 94, 95, 75, 96, 51, 97, 96, 97, 76, 98, 77, 99, 98, 99, 78, 100, 79, 101, 100, 101, 80, 102, 81, 103, 102, 103, 82, 104, 83, 105, 104, 105, 84, 106, 85, 107, 106, 107, 69, 108, 90, 109, 108, 109, 92, 110, 93, 111, 110, 111, 94, 112, 95, 113, 112, 113, 99, 114, 77, 115, 114, 115, 100, 116, 101, 117, 116, 117, 102, 118, 103, 119, 118, 119, 110, 120, 111, 121, 120, 121];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [0, 14, 15, 4], [7, 6, 18, 19], [17, 5, 4, 16], [0, 9, 22, 23], [13, 12, 28, 29], [31, 4, 15, 30], [9, 8, 24, 25], [18, 6, 36, 37], [17, 16, 34, 35], [9, 42, 43, 22], [14, 32, 33, 15], [19, 18, 38, 39], [31, 30, 52, 53], [24, 46, 47, 25], [23, 22, 44, 45], [18, 37, 58, 59], [29, 28, 50, 51], [34, 16, 56, 57], [43, 42, 64, 65], [33, 32, 54, 55], [39, 38, 62, 63], [37, 36, 60, 61], [46, 68, 69, 47], [25, 47, 70, 71], [45, 44, 66, 67], [59, 58, 82, 83], [51, 50, 74, 75], [49, 48, 72, 73], [53, 52, 76, 77], [32, 78, 79, 54], [62, 38, 86, 87], [61, 60, 84, 85], [47, 69, 90, 91], [57, 56, 80, 81], [65, 64, 88, 89], [51, 75, 96, 97], [73, 72, 94, 95], [76, 98, 99, 77], [71, 70, 92, 93], [69, 108, 109, 90], [81, 80, 102, 103], [78, 100, 101, 79], [77, 99, 114, 115], [93, 92, 110, 111], [100, 116, 117, 101], [2, 7, 20, 21], [3, 2, 10, 11], [21, 20, 40, 41], [11, 10, 26, 27], [26, 10, 48, 49], [85, 84, 106, 107], [83, 82, 104, 105], [119, 103, 102, 118], [95, 94, 112, 113], [110, 120, 121, 111]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[111,110],
      [103,102],
      [101,100],
      [77,99],
      [95,94],
      [93,92],
      [90,69],
      [85,84],
      [83,82],
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

obj0.userData.angles = [2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658];

obj0.userData.subtrees = [[120,121],
      [118,119],
      [116,117],
      [114,115],
      [112,113],
      [110,111,120,121],
      [108,109],
      [106,107],
      [104,105],
      [102,103,118,119],
      [100,101,116,117],
      [98,99,114,115],
      [96,97],
      [94,95,112,113],
      [92,93,110,111,120,121],
      [90,91,108,109],
      [88,89],
      [86,87],
      [84,85,106,107],
      [82,83,104,105],
      [80,81,102,103,118,119],
      [78,79,100,101,116,117],
      [76,77,98,99,114,115],
      [74,75,96,97],
      [72,73,94,95,112,113],
      [70,71,92,93,110,111,120,121],
      [68,69,90,91,108,109],
      [66,67],
      [64,65,88,89],
      [62,63,86,87],
      [60,61,84,85,106,107],
      [58,59,82,83,104,105],
      [56,57,80,81,102,103,118,119],
      [54,55,78,79,100,101,116,117],
      [52,53,76,77,98,99,114,115],
      [50,51,74,75,96,97],
      [48,49,72,73,94,95,112,113],
      [46,47,68,69,70,71,90,91,92,93,108,109,110,111,120,121],
      [44,45,66,67],
      [42,43,64,65,88,89],
      [40,41],
      [38,39,62,63,86,87],
      [36,37,58,59,60,61,82,83,84,85,104,105,106,107],
      [34,35,56,57,80,81,102,103,118,119],
      [32,33,54,55,78,79,100,101,116,117],
      [30,31,52,53,76,77,98,99,114,115],
      [28,29,50,51,74,75,96,97],
      [26,27,48,49,72,73,94,95,112,113],
      [24,25,46,47,68,69,70,71,90,91,92,93,108,109,110,111,120,121],
      [22,23,42,43,44,45,64,65,66,67,88,89],
      [20,21,40,41],
      [18,19,36,37,38,39,58,59,60,61,62,63,82,83,84,85,86,87,104,105,106,107],
      [16,17,34,35,56,57,80,81,102,103,118,119],
      [14,15,30,31,32,33,52,53,54,55,76,77,78,79,98,99,100,101,114,115,116,117],
      [12,13,28,29,50,51,74,75,96,97],
      [10,11,26,27,48,49,72,73,94,95,112,113],
      [8,9,22,23,24,25,42,43,44,45,46,47,64,65,66,67,68,69,70,71,88,89,90,91,92,93,108,109,110,111,120,121],
      [6,7,18,19,20,21,36,37,38,39,40,41,58,59,60,61,62,63,82,83,84,85,86,87,104,105,106,107],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,50,51,52,53,54,55,56,57,74,75,76,77,78,79,80,81,96,97,98,99,100,101,102,103,114,115,116,117,118,119]];

obj0.userData.polytoperoot = [[0,-0.873392837340318,-0.539786459007025],
      [-0.235874764224825,-0.999181535433093,-0.235874764224825],
      [-0.569401310833123,0.127322003750035,0.0300566479164914]];

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
