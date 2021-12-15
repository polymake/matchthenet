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
obj0.userData.points.push(new PMPoint(0.403548, 0, 0));
obj0.userData.points.push(new PMPoint(0.605322, 0.349483, 0));
obj0.userData.points.push(new PMPoint(0.403548, 0.698966, 0));
obj0.userData.points.push(new PMPoint(0, 0.698966, 0));
obj0.userData.points.push(new PMPoint(-0.201774, 0.349483, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -0.349483, 0));
obj0.userData.points.push(new PMPoint(0, -0.698966, 0));
obj0.userData.points.push(new PMPoint(0.403548, -0.698966, 0));
obj0.userData.points.push(new PMPoint(0.605322, -0.349483, 0));
obj0.userData.points.push(new PMPoint(0.528251, 1.08276, 0));
obj0.userData.points.push(new PMPoint(0.201774, 1.31996, 0));
obj0.userData.points.push(new PMPoint(-0.124703, 1.08276, 0));
obj0.userData.points.push(new PMPoint(-0.201774, 1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.605322, 1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.807096, 0.698966, 0));
obj0.userData.points.push(new PMPoint(-0.605322, 0.349483, 0));
obj0.userData.points.push(new PMPoint(1.00887, 0.349483, 0));
obj0.userData.points.push(new PMPoint(1.21064, 0.698966, 0));
obj0.userData.points.push(new PMPoint(1.00887, 1.04845, 0));
obj0.userData.points.push(new PMPoint(0.605322, 1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.596504, 0.265581, 0));
obj0.userData.points.push(new PMPoint(-0.638686, -0.135757, 0));
obj0.userData.points.push(new PMPoint(-0.270026, -0.299895, 0));
obj0.userData.points.push(new PMPoint(0.673575, -0.299895, 0));
obj0.userData.points.push(new PMPoint(1.04223, -0.135757, 0));
obj0.userData.points.push(new PMPoint(1.00005, 0.265581, 0));
obj0.userData.points.push(new PMPoint(-0.605322, -0.349483, 0));
obj0.userData.points.push(new PMPoint(-0.807096, -0.698966, 0));
obj0.userData.points.push(new PMPoint(-0.605322, -1.04845, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -1.04845, 0));
obj0.userData.points.push(new PMPoint(0.605322, -1.04845, 0));
obj0.userData.points.push(new PMPoint(1.00887, -1.04845, 0));
obj0.userData.points.push(new PMPoint(1.21064, -0.698966, 0));
obj0.userData.points.push(new PMPoint(1.00887, -0.349483, 0));
obj0.userData.points.push(new PMPoint(-0.124703, -1.08276, 0));
obj0.userData.points.push(new PMPoint(0.201774, -1.31996, 0));
obj0.userData.points.push(new PMPoint(0.528251, -1.08276, 0));
obj0.userData.points.push(new PMPoint(0.159592, 1.7213, 0));
obj0.userData.points.push(new PMPoint(-0.209068, 1.88544, 0));
obj0.userData.points.push(new PMPoint(-0.535545, 1.64824, 0));
obj0.userData.points.push(new PMPoint(-0.493363, 1.2469, 0));
obj0.userData.points.push(new PMPoint(0.896911, 1.2469, 0));
obj0.userData.points.push(new PMPoint(0.939093, 1.64824, 0));
obj0.userData.points.push(new PMPoint(0.612616, 1.88544, 0));
obj0.userData.points.push(new PMPoint(0.243956, 1.7213, 0));
obj0.userData.points.push(new PMPoint(-0.875349, 1.34834, 0));
obj0.userData.points.push(new PMPoint(-1.24401, 1.18421, 0));
obj0.userData.points.push(new PMPoint(-1.20183, 0.782868, 0));
obj0.userData.points.push(new PMPoint(-1.21064, 0.698966, 0));
obj0.userData.points.push(new PMPoint(-1.41242, 0.349483, 0));
obj0.userData.points.push(new PMPoint(-1.21064, 0, 0));
obj0.userData.points.push(new PMPoint(-0.807096, 0, 0));
obj0.userData.points.push(new PMPoint(1.60537, 0.782868, 0));
obj0.userData.points.push(new PMPoint(1.64756, 1.18421, 0));
obj0.userData.points.push(new PMPoint(1.2789, 1.34834, 0));
obj0.userData.points.push(new PMPoint(1.21064, 0, 0));
obj0.userData.points.push(new PMPoint(1.61419, 0, 0));
obj0.userData.points.push(new PMPoint(1.81597, 0.349483, 0));
obj0.userData.points.push(new PMPoint(1.61419, 0.698966, 0));
obj0.userData.points.push(new PMPoint(-1.20183, -0.782868, 0));
obj0.userData.points.push(new PMPoint(-1.24401, -1.18421, 0));
obj0.userData.points.push(new PMPoint(-0.875349, -1.34834, 0));
obj0.userData.points.push(new PMPoint(-0.807096, -1.39793, 0));
obj0.userData.points.push(new PMPoint(-0.605322, -1.74742, 0));
obj0.userData.points.push(new PMPoint(-0.201774, -1.74742, 0));
obj0.userData.points.push(new PMPoint(0, -1.39793, 0));
obj0.userData.points.push(new PMPoint(0.403548, -1.39793, 0));
obj0.userData.points.push(new PMPoint(0.605322, -1.74742, 0));
obj0.userData.points.push(new PMPoint(1.00887, -1.74742, 0));
obj0.userData.points.push(new PMPoint(1.21064, -1.39793, 0));
obj0.userData.points.push(new PMPoint(1.2789, -1.34834, 0));
obj0.userData.points.push(new PMPoint(1.64756, -1.18421, 0));
obj0.userData.points.push(new PMPoint(1.60537, -0.782868, 0));
obj0.userData.points.push(new PMPoint(-0.25125, 2.28678, 0));
obj0.userData.points.push(new PMPoint(-0.61991, 2.45091, 0));
obj0.userData.points.push(new PMPoint(-0.946387, 2.21371, 0));
obj0.userData.points.push(new PMPoint(-0.904205, 1.81238, 0));
obj0.userData.points.push(new PMPoint(0.429618, 2.0212, 0));
obj0.userData.points.push(new PMPoint(0.227844, 2.37068, 0));
obj0.userData.points.push(new PMPoint(-0.166886, 2.28678, 0));
obj0.userData.points.push(new PMPoint(1.30775, 1.81238, 0));
obj0.userData.points.push(new PMPoint(1.34994, 2.21371, 0));
obj0.userData.points.push(new PMPoint(1.02346, 2.45091, 0));
obj0.userData.points.push(new PMPoint(0.654798, 2.28678, 0));
obj0.userData.points.push(new PMPoint(-1.61267, 1.34834, 0));
obj0.userData.points.push(new PMPoint(-1.93915, 1.11114, 0));
obj0.userData.points.push(new PMPoint(-1.89696, 0.709807, 0));
obj0.userData.points.push(new PMPoint(-1.5283, 0.545669, 0));
obj0.userData.points.push(new PMPoint(1.93185, 0.545669, 0));
obj0.userData.points.push(new PMPoint(2.30051, 0.709807, 0));
obj0.userData.points.push(new PMPoint(2.34269, 1.11114, 0));
obj0.userData.points.push(new PMPoint(2.01622, 1.34834, 0));
obj0.userData.points.push(new PMPoint(-1.57049, -1.42141, 0));
obj0.userData.points.push(new PMPoint(-1.5283, -1.82274, 0));
obj0.userData.points.push(new PMPoint(-1.15964, -1.98688, 0));
obj0.userData.points.push(new PMPoint(-0.833167, -1.74968, 0));
obj0.userData.points.push(new PMPoint(-0.730026, -2.13121, 0));
obj0.userData.points.push(new PMPoint(-0.403548, -2.36841, 0));
obj0.userData.points.push(new PMPoint(-0.0770709, -2.13121, 0));
obj0.userData.points.push(new PMPoint(1.21064, -2.0969, 0));
obj0.userData.points.push(new PMPoint(1.61419, -2.0969, 0));
obj0.userData.points.push(new PMPoint(1.81597, -1.74742, 0));
obj0.userData.points.push(new PMPoint(1.61419, -1.39793, 0));
obj0.userData.points.push(new PMPoint(0.0752273, 2.52398, 0));
obj0.userData.points.push(new PMPoint(0.033045, 2.92531, 0));
obj0.userData.points.push(new PMPoint(-0.335615, 3.08945, 0));
obj0.userData.points.push(new PMPoint(-0.662092, 2.85225, 0));
obj0.userData.points.push(new PMPoint(-0.744613, 2.83471, 0));
obj0.userData.points.push(new PMPoint(-1.14816, 2.83471, 0));
obj0.userData.points.push(new PMPoint(-1.27286, 2.45091, 0));
obj0.userData.points.push(new PMPoint(1.67641, 2.45091, 0));
obj0.userData.points.push(new PMPoint(1.55171, 2.83471, 0));
obj0.userData.points.push(new PMPoint(1.14816, 2.83471, 0));
obj0.userData.points.push(new PMPoint(-1.85478, -2.05994, 0));
obj0.userData.points.push(new PMPoint(-1.8126, -2.46128, 0));
obj0.userData.points.push(new PMPoint(-1.44394, -2.62542, 0));
obj0.userData.points.push(new PMPoint(-1.11746, -2.38822, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 6, 7, 7, 8, 1, 9, 8, 9, 3, 10, 10, 11, 4, 12, 11, 12, 4, 13, 13, 14, 14, 15, 5, 16, 15, 16, 2, 17, 17, 18, 18, 19, 3, 20, 19, 20, 5, 21, 21, 22, 0, 23, 22, 23, 1, 24, 24, 25, 2, 26, 25, 26, 6, 27, 27, 28, 28, 29, 7, 30, 29, 30, 8, 31, 31, 32, 32, 33, 9, 34, 33, 34, 7, 35, 35, 36, 8, 37, 36, 37, 11, 38, 38, 39, 39, 40, 12, 41, 40, 41, 10, 42, 42, 43, 43, 44, 11, 45, 44, 45, 14, 46, 46, 47, 15, 48, 47, 48, 15, 49, 49, 50, 50, 51, 16, 52, 51, 52, 18, 53, 53, 54, 19, 55, 54, 55, 17, 56, 56, 57, 57, 58, 18, 59, 58, 59, 28, 60, 60, 61, 29, 62, 61, 62, 29, 63, 63, 64, 64, 65, 30, 66, 65, 66, 31, 67, 67, 68, 68, 69, 32, 70, 69, 70, 32, 71, 71, 72, 33, 73, 72, 73, 39, 74, 74, 75, 75, 76, 40, 77, 76, 77, 38, 78, 78, 79, 39, 80, 79, 80, 43, 81, 81, 82, 82, 83, 44, 84, 83, 84, 47, 85, 85, 86, 86, 87, 48, 88, 87, 88, 53, 89, 89, 90, 90, 91, 54, 92, 91, 92, 61, 93, 93, 94, 94, 95, 62, 96, 95, 96, 64, 97, 97, 98, 65, 99, 98, 99, 69, 100, 100, 101, 101, 102, 70, 103, 102, 103, 74, 104, 104, 105, 105, 106, 75, 107, 106, 107, 75, 108, 108, 109, 76, 110, 109, 110, 82, 111, 111, 112, 83, 113, 112, 113, 94, 114, 114, 115, 115, 116, 95, 117, 116, 117];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [9, 1, 0, 6, 7, 8], [4, 3, 10, 11, 12], [5, 4, 13, 14, 15, 16], [15, 14, 46, 47, 48], [3, 2, 17, 18, 19, 20], [12, 11, 38, 39, 40, 41], [0, 5, 21, 22, 23], [16, 15, 49, 50, 51, 52], [6, 27, 28, 29, 30, 7], [19, 18, 53, 54, 55], [43, 81, 82, 83, 84, 44], [40, 39, 74, 75, 76, 77], [10, 42, 43, 44, 45, 11], [28, 60, 61, 62, 29], [2, 1, 24, 25, 26], [53, 89, 90, 91, 92, 54], [34, 9, 8, 31, 32, 33], [61, 93, 94, 95, 96, 62], [104, 105, 106, 107, 75, 74], [38, 78, 79, 80, 39], [48, 47, 85, 86, 87, 88], [17, 56, 57, 58, 59, 18], [8, 7, 35, 36, 37], [76, 75, 108, 109, 110], [82, 111, 112, 113, 83], [30, 29, 63, 64, 65, 66], [32, 31, 67, 68, 69, 70], [117, 95, 94, 114, 115, 116], [70, 69, 100, 101, 102, 103], [33, 32, 71, 72, 73], [99, 65, 64, 97, 98]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xF5D2B1, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[95,94],
      [83,82],
      [76,75],
      [75,74],
      [70,69],
      [65,64],
      [62,61],
      [54,53],
      [48,47],
      [44,43],
      [39,38],
      [40,39],
      [33,32],
      [32,31],
      [30,29],
      [29,28],
      [18,17],
      [19,18],
      [16,15],
      [15,14],
      [11,10],
      [12,11],
      [8,7],
      [9,8],
      [7,6],
      [2,1],
      [0,5],
      [3,2],
      [5,4],
      [4,3],
      [1,0]];

obj0.userData.angles = [2.41186499736283,
      2.48923451380542,
      2.48923451380543,
      2.41186499736283,
      2.41186499736283,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.41186499736283,
      2.41186499736283,
      2.48923451380542,
      2.48923451380543,
      2.41186499736283,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283];

obj0.userData.subtrees = [[114,115,116,117],
      [111,112,113],
      [108,109,110],
      [104,105,106,107],
      [100,101,102,103],
      [97,98,99],
      [93,94,95,96,114,115,116,117],
      [89,90,91,92],
      [85,86,87,88],
      [81,82,83,84,111,112,113],
      [78,79,80],
      [74,75,76,77,104,105,106,107,108,109,110],
      [71,72,73],
      [67,68,69,70,100,101,102,103],
      [63,64,65,66,97,98,99],
      [60,61,62,93,94,95,96,114,115,116,117],
      [56,57,58,59],
      [53,54,55,89,90,91,92],
      [49,50,51,52],
      [46,47,48,85,86,87,88],
      [42,43,44,45,81,82,83,84,111,112,113],
      [38,39,40,41,74,75,76,77,78,79,80,104,105,106,107,108,109,110],
      [35,36,37],
      [31,32,33,34,67,68,69,70,71,72,73,100,101,102,103],
      [27,28,29,30,60,61,62,63,64,65,66,93,94,95,96,97,98,99,114,115,116,117],
      [24,25,26],
      [21,22,23],
      [17,18,19,20,53,54,55,56,57,58,59,89,90,91,92],
      [13,14,15,16,46,47,48,49,50,51,52,85,86,87,88],
      [10,11,12,38,39,40,41,42,43,44,45,74,75,76,77,78,79,80,81,82,83,84,104,105,106,107,108,109,110,111,112,113],
      [6,7,8,9,27,28,29,30,31,32,33,34,35,36,37,60,61,62,63,64,65,66,67,68,69,70,71,72,73,93,94,95,96,97,98,99,100,101,102,103,114,115,116,117]];

obj0.userData.polytoperoot = [[-0.326477361828804,0.854728829825208,-0.403548212335197],
      [-0.946518903007392,2.47801865906762,0],
      [0.5,0.190983005625053,0.927050983124842]];

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
