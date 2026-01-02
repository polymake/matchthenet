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
obj0.userData.points.push(new PMPoint(0.500706, 0, 0));
obj0.userData.points.push(new PMPoint(0.678702, 0.304429, 0));
obj0.userData.points.push(new PMPoint(0.596163, 0.352212, 0));
obj0.userData.points.push(new PMPoint(0.59649, -0.357152, 0));
obj0.userData.points.push(new PMPoint(0.680848, -0.307604, 0));
obj0.userData.points.push(new PMPoint(0.575059, 1.02875, 0));
obj0.userData.points.push(new PMPoint(0.852185, 0.607982, 0));
obj0.userData.points.push(new PMPoint(0.608185, 1.02897, 0));
obj0.userData.points.push(new PMPoint(0.695311, -0.298664, 0));
obj0.userData.points.push(new PMPoint(1.11932, 0.0207682, 0));
obj0.userData.points.push(new PMPoint(0.573597, -1.07975, 0));
obj0.userData.points.push(new PMPoint(0.610828, -1.07997, 0));
obj0.userData.points.push(new PMPoint(0.86418, -0.619136, 0));
obj0.userData.points.push(new PMPoint(-0.00952845, 0.691138, 0));
obj0.userData.points.push(new PMPoint(1.20181, 0.607618, 0));
obj0.userData.points.push(new PMPoint(1.20138, 0.702989, 0));
obj0.userData.points.push(new PMPoint(1.14737, 0.0700111, 0));
obj0.userData.points.push(new PMPoint(1.20141, 0.591244, 0));
obj0.userData.points.push(new PMPoint(0.925558, -0.57732, 0));
obj0.userData.points.push(new PMPoint(1.2787, -0.490637, 0));
obj0.userData.points.push(new PMPoint(-0.0379781, -0.694201, 0));
obj0.userData.points.push(new PMPoint(1.23138, -0.706594, 0));
obj0.userData.points.push(new PMPoint(1.22761, -0.60718, 0));
obj0.userData.points.push(new PMPoint(-0.603201, 1.0125, 0));
obj0.userData.points.push(new PMPoint(-0.587271, 1.04033, 0));
obj0.userData.points.push(new PMPoint(1.55445, 0.610734, 0));
obj0.userData.points.push(new PMPoint(1.80335, 1.04519, 0));
obj0.userData.points.push(new PMPoint(1.78588, 1.07424, 0));
obj0.userData.points.push(new PMPoint(1.66175, 0.201265, 0));
obj0.userData.points.push(new PMPoint(1.5503, 0.539863, 0));
obj0.userData.points.push(new PMPoint(1.61856, -0.361339, 0));
obj0.userData.points.push(new PMPoint(1.64972, -0.00121104, 0));
obj0.userData.points.push(new PMPoint(-0.280301, -0.414895, 0));
obj0.userData.points.push(new PMPoint(-0.126259, -0.736365, 0));
obj0.userData.points.push(new PMPoint(-0.123971, -0.740854, 0));
obj0.userData.points.push(new PMPoint(0.0481327, -1.05873, 0));
obj0.userData.points.push(new PMPoint(1.87845, -1.03186, 0));
obj0.userData.points.push(new PMPoint(1.5909, -0.591553, 0));
obj0.userData.points.push(new PMPoint(1.86023, -1.06583, 0));
obj0.userData.points.push(new PMPoint(-0.605646, 0.335643, 0));
obj0.userData.points.push(new PMPoint(-0.00270179, 1.37613, 0));
obj0.userData.points.push(new PMPoint(1.73181, 0.301517, 0));
obj0.userData.points.push(new PMPoint(1.81673, 0.350084, 0));
obj0.userData.points.push(new PMPoint(1.17442, 1.39654, 0));
obj0.userData.points.push(new PMPoint(2.04579, -0.667981, 0));
obj0.userData.points.push(new PMPoint(1.7472, -0.00956307, 0));
obj0.userData.points.push(new PMPoint(-0.625589, -0.296821, 0));
obj0.userData.points.push(new PMPoint(-0.632201, -0.391963, 0));
obj0.userData.points.push(new PMPoint(-0.632894, -0.40877, 0));
obj0.userData.points.push(new PMPoint(-0.619511, -0.932626, 0));
obj0.userData.points.push(new PMPoint(-0.149783, -1.36377, 0));
obj0.userData.points.push(new PMPoint(-0.0665995, -1.41834, 0));
obj0.userData.points.push(new PMPoint(-0.578987, -1.01431, 0));
obj0.userData.points.push(new PMPoint(-0.164537, -1.35368, 0));
obj0.userData.points.push(new PMPoint(1.23969, -1.44116, 0));
obj0.userData.points.push(new PMPoint(-0.856143, 0.596827, 0));
obj0.userData.points.push(new PMPoint(-0.689187, 0.289636, 0));
obj0.userData.points.push(new PMPoint(0.0197396, 2.04991, 0));
obj0.userData.points.push(new PMPoint(-0.0117102, 2.05022, 0));
obj0.userData.points.push(new PMPoint(2.45511, 0.0107496, 0));
obj0.userData.points.push(new PMPoint(1.12562, 2.06984, 0));
obj0.userData.points.push(new PMPoint(1.15764, 2.0714, 0));
obj0.userData.points.push(new PMPoint(-0.981378, -0.437044, 0));
obj0.userData.points.push(new PMPoint(-1.11442, -0.760372, 0));
obj0.userData.points.push(new PMPoint(-0.0837117, -2.14236, 0));
obj0.userData.points.push(new PMPoint(-0.350771, -1.6668, 0));
obj0.userData.points.push(new PMPoint(-0.122218, -2.14042, 0));
obj0.userData.points.push(new PMPoint(-0.757318, -1.51432, 0));
obj0.userData.points.push(new PMPoint(-0.411743, -1.62035, 0));
obj0.userData.points.push(new PMPoint(1.22818, -2.16628, 0));
obj0.userData.points.push(new PMPoint(1.26761, -2.16583, 0));
obj0.userData.points.push(new PMPoint(-1.20323, 0.699276, 0));
obj0.userData.points.push(new PMPoint(-1.2057, 0.603936, 0));
obj0.userData.points.push(new PMPoint(-0.597855, 1.71532, 0));
obj0.userData.points.push(new PMPoint(2.42458, 0.733064, 0));
obj0.userData.points.push(new PMPoint(1.76182, 1.76625, 0));
obj0.userData.points.push(new PMPoint(-1.21594, -1.09809, 0));
obj0.userData.points.push(new PMPoint(-0.956641, -1.3427, 0));
obj0.userData.points.push(new PMPoint(-0.71089, -1.63553, 0));
obj0.userData.points.push(new PMPoint(-0.719435, -1.73299, 0));
obj0.userData.points.push(new PMPoint(1.88643, -1.78958, 0));
obj0.userData.points.push(new PMPoint(-1.77966, 1.08293, 0));
obj0.userData.points.push(new PMPoint(-1.79774, 1.05427, 0));
obj0.userData.points.push(new PMPoint(-1.55819, 0.614588, 0));
obj0.userData.points.push(new PMPoint(-1.20634, 2.04322, 0));
obj0.userData.points.push(new PMPoint(-1.19008, 2.07174, 0));
obj0.userData.points.push(new PMPoint(2.50505, 0.788706, 0));
obj0.userData.points.push(new PMPoint(2.30268, 1.08217, 0));
obj0.userData.points.push(new PMPoint(2.69807, 0.477142, 0));
obj0.userData.points.push(new PMPoint(2.50781, 0.784489, 0));
obj0.userData.points.push(new PMPoint(2.02544, 1.51392, 0));
obj0.userData.points.push(new PMPoint(1.84327, 1.81587, 0));
obj0.userData.points.push(new PMPoint(1.84074, 1.8198, 0));
obj0.userData.points.push(new PMPoint(1.64285, 2.10803, 0));
obj0.userData.points.push(new PMPoint(-1.69649, -1.23875, 0));
obj0.userData.points.push(new PMPoint(-1.02368, -1.41395, 0));
obj0.userData.points.push(new PMPoint(-1.34108, -2.0443, 0));
obj0.userData.points.push(new PMPoint(1.97523, -1.83441, 0));
obj0.userData.points.push(new PMPoint(2.14075, -1.51064, 0));
obj0.userData.points.push(new PMPoint(1.79339, -2.15541, 0));
obj0.userData.points.push(new PMPoint(1.97272, -1.83908, 0));
obj0.userData.points.push(new PMPoint(-0.585489, 2.40928, 0));
obj0.userData.points.push(new PMPoint(2.92054, 1.11914, 0));
obj0.userData.points.push(new PMPoint(2.47264, 1.39116, 0));
obj0.userData.points.push(new PMPoint(3.05972, 0.515058, 0));
obj0.userData.points.push(new PMPoint(2.97127, 1.04337, 0));
obj0.userData.points.push(new PMPoint(1.79523, 2.4227, 0));
obj0.userData.points.push(new PMPoint(1.70916, 2.46379, 0));
obj0.userData.points.push(new PMPoint(2.25566, 2.13988, 0));
obj0.userData.points.push(new PMPoint(1.8098, 2.41522, 0));
obj0.userData.points.push(new PMPoint(-0.775919, -2.4492, 0));
obj0.userData.points.push(new PMPoint(1.90114, -2.51413, 0));
obj0.userData.points.push(new PMPoint(1.98419, -2.46242, 0));
obj0.userData.points.push(new PMPoint(1.99905, -2.45268, 0));
obj0.userData.points.push(new PMPoint(2.42163, -2.13135, 0));
obj0.userData.points.push(new PMPoint(-0.585183, 2.50465, 0));
obj0.userData.points.push(new PMPoint(-0.93783, 2.50426, 0));
obj0.userData.points.push(new PMPoint(2.36117, 2.66015, 0));
obj0.userData.points.push(new PMPoint(2.0078, 2.70704, 0));
obj0.userData.points.push(new PMPoint(-1.14167, -2.50358, 0));
obj0.userData.points.push(new PMPoint(-0.787771, -2.54632, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 0, 6, 3, 6, 2, 7, 3, 8, 7, 8, 1, 9, 2, 10, 9, 10, 0, 11, 4, 11, 4, 12, 5, 13, 12, 13, 0, 14, 6, 14, 7, 15, 8, 16, 15, 16, 2, 17, 7, 18, 17, 18, 9, 19, 10, 20, 19, 20, 0, 21, 11, 21, 12, 22, 13, 23, 22, 23, 0, 24, 14, 24, 6, 25, 14, 25, 15, 26, 16, 27, 26, 27, 8, 28, 16, 28, 17, 29, 18, 30, 29, 30, 20, 31, 10, 32, 31, 32, 0, 33, 21, 34, 33, 34, 21, 35, 11, 36, 35, 36, 22, 37, 23, 38, 37, 38, 12, 39, 22, 39, 0, 40, 24, 40, 6, 41, 25, 41, 26, 42, 27, 43, 42, 43, 8, 44, 28, 44, 31, 45, 32, 46, 45, 46, 0, 47, 33, 48, 47, 48, 33, 49, 34, 50, 49, 50, 36, 51, 11, 52, 51, 52, 35, 53, 36, 54, 53, 54, 12, 55, 39, 55, 24, 56, 40, 57, 56, 57, 6, 58, 41, 58, 25, 59, 41, 59, 27, 60, 43, 60, 8, 61, 44, 61, 28, 62, 44, 62, 49, 63, 50, 64, 63, 64, 11, 65, 52, 65, 51, 66, 52, 67, 66, 67, 53, 68, 54, 69, 68, 69, 12, 70, 55, 70, 39, 71, 55, 71, 24, 72, 56, 73, 72, 73, 25, 74, 59, 74, 27, 75, 60, 75, 28, 76, 62, 76, 64, 77, 50, 78, 77, 78, 66, 79, 67, 80, 79, 80, 39, 81, 71, 81, 24, 82, 72, 82, 72, 83, 73, 84, 83, 84, 25, 85, 74, 85, 59, 86, 74, 86, 75, 87, 27, 88, 87, 88, 60, 89, 75, 90, 89, 90, 28, 91, 76, 92, 91, 92, 76, 93, 62, 94, 93, 94, 77, 95, 78, 96, 95, 96, 67, 97, 80, 97, 81, 98, 39, 99, 98, 99, 71, 100, 81, 101, 100, 101, 59, 102, 86, 102, 87, 103, 88, 104, 103, 104, 89, 105, 90, 106, 105, 106, 94, 107, 62, 108, 107, 108, 93, 109, 94, 110, 109, 110, 67, 111, 97, 111, 71, 112, 100, 113, 112, 113, 100, 114, 101, 115, 114, 115, 102, 116, 86, 117, 116, 117, 109, 118, 110, 119, 118, 119, 97, 120, 111, 121, 120, 121];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [0, 3, 6], [0, 6, 14], [4, 0, 11], [3, 2, 7, 8], [11, 0, 21], [8, 7, 15, 16], [0, 14, 24], [5, 4, 12, 13], [0, 24, 40], [23, 13, 12, 22], [21, 0, 33, 34], [16, 15, 26, 27], [14, 6, 25], [0, 47, 48, 33], [26, 42, 43, 27], [25, 6, 41], [23, 22, 37, 38], [8, 16, 28], [11, 21, 35, 36], [32, 31, 45, 46], [8, 28, 44], [11, 36, 51, 52], [41, 6, 58], [22, 12, 39], [40, 24, 56, 57], [8, 44, 61], [39, 12, 55], [56, 24, 72, 73], [11, 52, 65], [25, 41, 59], [43, 60, 27], [55, 12, 70], [25, 59, 74], [27, 60, 75], [72, 24, 82], [52, 51, 66, 67], [44, 28, 62], [25, 74, 85], [66, 79, 80, 67], [62, 28, 76], [73, 72, 83, 84], [27, 75, 87, 88], [39, 55, 71], [77, 95, 96, 78], [76, 28, 91, 92], [39, 71, 81], [75, 60, 89, 90], [74, 59, 86], [39, 81, 98, 99], [86, 59, 102], [62, 76, 93, 94], [67, 80, 97], [62, 94, 107, 108], [67, 97, 111], [81, 71, 100, 101], [100, 71, 112, 113], [102, 116, 117, 86], [121, 111, 97, 120], [2, 1, 9, 10], [2, 17, 18, 7], [18, 17, 29, 30], [10, 20, 31, 32], [10, 9, 19, 20], [90, 89, 105, 106], [101, 100, 114, 115], [110, 109, 118, 119], [94, 93, 109, 110], [88, 87, 103, 104], [34, 33, 49, 50], [36, 35, 53, 54], [54, 53, 68, 69], [50, 64, 77, 78], [49, 63, 64, 50]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[111,97],
      [110,109],
      [86,102],
      [101,100],
      [100,71],
      [67,97],
      [94,93],
      [62,94],
      [90,89],
      [88,87],
      [86,59],
      [81,71],
      [39,81],
      [67,80],
      [78,77],
      [62,76],
      [76,28],
      [75,60],
      [27,75],
      [74,59],
      [25,74],
      [73,72],
      [72,24],
      [39,71],
      [67,66],
      [50,64],
      [62,28],
      [27,60],
      [25,59],
      [56,24],
      [39,55],
      [55,12],
      [54,53],
      [52,51],
      [11,52],
      [50,49],
      [44,28],
      [8,44],
      [27,43],
      [25,41],
      [41,6],
      [40,24],
      [39,12],
      [36,35],
      [11,36],
      [34,33],
      [33,0],
      [32,31],
      [8,28],
      [27,26],
      [25,6],
      [0,24],
      [22,12],
      [23,22],
      [11,21],
      [21,0],
      [10,20],
      [18,17],
      [8,16],
      [16,15],
      [14,6],
      [0,14],
      [13,12],
      [11,0],
      [10,9],
      [7,2],
      [8,7],
      [0,6],
      [5,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.80019059273487,
      2.82127811781222,
      2.80767600514749,
      2.81220103835114,
      2.79590505971916,
      2.79880239183631,
      2.81816024517101,
      2.80794347021035,
      2.8120657485847,
      2.81578676534309,
      2.81069674658737,
      2.79317434637608,
      2.79317434637608,
      2.7980174961163,
      2.81578676534309,
      2.80871915703927,
      2.80767600514749,
      2.7980174961163,
      2.80019059273487,
      2.81303849271716,
      2.81303849271716,
      2.80679931283349,
      2.80871915703927,
      2.79086369950562,
      2.79590505971916,
      2.82127811781222,
      2.81069674658737,
      2.79880239183631,
      2.81485346541789,
      2.80794347021035,
      2.78995622358571,
      2.78995622358571,
      2.81656218128772,
      2.79446382385753,
      2.79317434637608,
      2.82127811781222,
      2.81180144039733,
      2.81303849271716,
      2.80019059273487,
      2.81552859573866,
      2.81552859573866,
      2.80871915703927,
      2.79086369950562,
      2.81206574858469,
      2.79590505971916,
      2.81578676534309,
      2.80366936866243,
      2.8120657485847,
      2.81069674658737,
      2.80366936866243,
      2.81485346541789,
      2.81069674658737,
      2.79317434637608,
      2.79446382385753,
      2.7980174961163,
      2.80019059273487,
      2.81656218128772,
      2.82127811781222,
      2.80871915703927,
      2.80679931283349,
      2.81303849271716,
      2.81180144039733,
      2.79590505971916,
      2.79880239183631,
      2.81854078924059,
      2.81816024517101,
      2.80794347021035,
      2.81069674658737,
      2.79951493092824,
      2.80019059273487,
      2.8159256746305,
      2.80679931283349,
      2.80767600514749,
      2.80366936866243];

obj0.userData.subtrees = [[120,121],
      [118,119],
      [116,117],
      [114,115],
      [112,113],
      [111,120,121],
      [109,110,118,119],
      [107,108],
      [105,106],
      [103,104],
      [102,116,117],
      [100,101,112,113,114,115],
      [98,99],
      [97,111,120,121],
      [95,96],
      [93,94,107,108,109,110,118,119],
      [91,92],
      [89,90,105,106],
      [87,88,103,104],
      [86,102,116,117],
      [85],
      [83,84],
      [82],
      [81,98,99,100,101,112,113,114,115],
      [79,80,97,111,120,121],
      [77,78,95,96],
      [76,91,92,93,94,107,108,109,110,118,119],
      [75,87,88,89,90,103,104,105,106],
      [74,85,86,102,116,117],
      [72,73,82,83,84],
      [71,81,98,99,100,101,112,113,114,115],
      [70],
      [68,69],
      [66,67,79,80,97,111,120,121],
      [65],
      [63,64,77,78,95,96],
      [62,76,91,92,93,94,107,108,109,110,118,119],
      [61],
      [60,75,87,88,89,90,103,104,105,106],
      [59,74,85,86,102,116,117],
      [58],
      [56,57,72,73,82,83,84],
      [55,70,71,81,98,99,100,101,112,113,114,115],
      [53,54,68,69],
      [51,52,65,66,67,79,80,97,111,120,121],
      [49,50,63,64,77,78,95,96],
      [47,48],
      [45,46],
      [44,61,62,76,91,92,93,94,107,108,109,110,118,119],
      [42,43,60,75,87,88,89,90,103,104,105,106],
      [41,58,59,74,85,86,102,116,117],
      [40,56,57,72,73,82,83,84],
      [39,55,70,71,81,98,99,100,101,112,113,114,115],
      [37,38],
      [35,36,51,52,53,54,65,66,67,68,69,79,80,97,111,120,121],
      [33,34,47,48,49,50,63,64,77,78,95,96],
      [31,32,45,46],
      [29,30],
      [28,44,61,62,76,91,92,93,94,107,108,109,110,118,119],
      [26,27,42,43,60,75,87,88,89,90,103,104,105,106],
      [25,41,58,59,74,85,86,102,116,117],
      [24,40,56,57,72,73,82,83,84],
      [22,23,37,38,39,55,70,71,81,98,99,100,101,112,113,114,115],
      [21,33,34,35,36,47,48,49,50,51,52,53,54,63,64,65,66,67,68,69,77,78,79,80,95,96,97,111,120,121],
      [19,20,31,32,45,46],
      [17,18,29,30],
      [15,16,26,27,28,42,43,44,60,61,62,75,76,87,88,89,90,91,92,93,94,103,104,105,106,107,108,109,110,118,119],
      [14,24,25,40,41,56,57,58,59,72,73,74,82,83,84,85,86,102,116,117],
      [12,13,22,23,37,38,39,55,70,71,81,98,99,100,101,112,113,114,115],
      [11,21,33,34,35,36,47,48,49,50,51,52,53,54,63,64,65,66,67,68,69,77,78,79,80,95,96,97,111,120,121],
      [9,10,19,20,31,32,45,46],
      [7,8,15,16,17,18,26,27,28,29,30,42,43,44,60,61,62,75,76,87,88,89,90,91,92,93,94,103,104,105,106,107,108,109,110,118,119],
      [6,14,24,25,40,41,56,57,58,59,72,73,74,82,83,84,85,86,102,116,117],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,38,39,47,48,49,50,51,52,53,54,55,63,64,65,66,67,68,69,70,71,77,78,79,80,81,95,96,97,98,99,100,101,111,112,113,114,115,120,121]];

obj0.userData.polytoperoot = [[0,-0.966113083813104,-0.597090722772473],
      [-0.212377584261369,-1.02632683063145,-0.014155672389738],
      [-0.513936907143444,0.106328623234435,0.00146654370833559]];

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
