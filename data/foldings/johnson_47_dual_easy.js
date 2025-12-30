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
obj0.userData.points.push(new PMPoint(0.632036, 0, 0));
obj0.userData.points.push(new PMPoint(0.361029, 0.570986, 0));
obj0.userData.points.push(new PMPoint(-0.29305, 0.584923, 0));
obj0.userData.points.push(new PMPoint(-0.29305, -0.584923, 0));
obj0.userData.points.push(new PMPoint(0.361029, -0.570986, 0));
obj0.userData.points.push(new PMPoint(1.03166, 0.489659, 0));
obj0.userData.points.push(new PMPoint(0.763798, 1.08653, 0));
obj0.userData.points.push(new PMPoint(-0.691684, 0.0549641, 0));
obj0.userData.points.push(new PMPoint(-0.38175, -0.531301, 0));
obj0.userData.points.push(new PMPoint(0.677322, 1.14367, 0));
obj0.userData.points.push(new PMPoint(0.0147912, 1.17229, 0));
obj0.userData.points.push(new PMPoint(0.763798, -1.08653, 0));
obj0.userData.points.push(new PMPoint(1.03166, -0.489659, 0));
obj0.userData.points.push(new PMPoint(0.0147912, -1.17229, 0));
obj0.userData.points.push(new PMPoint(0.677322, -1.14367, 0));
obj0.userData.points.push(new PMPoint(1.24575, -0.15107, 0));
obj0.userData.points.push(new PMPoint(1.67012, 0.346854, 0));
obj0.userData.points.push(new PMPoint(1.68466, 0.449477, 0));
obj0.userData.points.push(new PMPoint(1.42643, 1.06028, 0));
obj0.userData.points.push(new PMPoint(-0.671188, 0.668094, 0));
obj0.userData.points.push(new PMPoint(-0.90389, 0.403338, 0));
obj0.userData.points.push(new PMPoint(-0.786769, 0.0708792, 0));
obj0.userData.points.push(new PMPoint(-0.788089, 0.0542657, 0));
obj0.userData.points.push(new PMPoint(-0.956246, -0.255524, 0));
obj0.userData.points.push(new PMPoint(-0.768278, -0.553708, 0));
obj0.userData.points.push(new PMPoint(-0.0403577, 1.25137, 0));
obj0.userData.points.push(new PMPoint(-0.390923, 1.21462, 0));
obj0.userData.points.push(new PMPoint(-0.530327, 0.890874, 0));
obj0.userData.points.push(new PMPoint(0.531828, 1.50247, 0));
obj0.userData.points.push(new PMPoint(0.181848, 1.54443, 0));
obj0.userData.points.push(new PMPoint(-0.025915, 1.25968, 0));
obj0.userData.points.push(new PMPoint(1.42643, -1.06028, 0));
obj0.userData.points.push(new PMPoint(1.68466, -0.449477, 0));
obj0.userData.points.push(new PMPoint(-0.530327, -0.890874, 0));
obj0.userData.points.push(new PMPoint(-0.390923, -1.21462, 0));
obj0.userData.points.push(new PMPoint(-0.0403577, -1.25137, 0));
obj0.userData.points.push(new PMPoint(-0.025915, -1.25968, 0));
obj0.userData.points.push(new PMPoint(0.181848, -1.54443, 0));
obj0.userData.points.push(new PMPoint(0.531828, -1.50247, 0));
obj0.userData.points.push(new PMPoint(1.47422, 1.14401, 0));
obj0.userData.points.push(new PMPoint(1.29071, 1.44496, 0));
obj0.userData.points.push(new PMPoint(0.938455, 1.43208, 0));
obj0.userData.points.push(new PMPoint(1.94641, 0.734765, 0));
obj0.userData.points.push(new PMPoint(1.83425, 1.06893, 0));
obj0.userData.points.push(new PMPoint(1.48792, 1.13453, 0));
obj0.userData.points.push(new PMPoint(-0.825204, 0.985152, 0));
obj0.userData.points.push(new PMPoint(-1.73126, 0.985805, 0));
obj0.userData.points.push(new PMPoint(-1.66399, 0.612177, 0));
obj0.userData.points.push(new PMPoint(-1.68702, 0.493168, 0));
obj0.userData.points.push(new PMPoint(-1.88883, 0.171613, 0));
obj0.userData.points.push(new PMPoint(-1.04796, -0.165823, 0));
obj0.userData.points.push(new PMPoint(-1.85687, -0.354574, 0));
obj0.userData.points.push(new PMPoint(-1.7489, -0.718532, 0));
obj0.userData.points.push(new PMPoint(-0.970434, -0.842463, 0));
obj0.userData.points.push(new PMPoint(0.0614877, 1.58882, 0));
obj0.userData.points.push(new PMPoint(-0.517409, 2.12384, 0));
obj0.userData.points.push(new PMPoint(-0.870171, 1.98355, 0));
obj0.userData.points.push(new PMPoint(0.70601, 1.80892, 0));
obj0.userData.points.push(new PMPoint(0.193652, 2.55619, 0));
obj0.userData.points.push(new PMPoint(-0.0762732, 2.28924, 0));
obj0.userData.points.push(new PMPoint(0.938455, -1.43208, 0));
obj0.userData.points.push(new PMPoint(1.29071, -1.44496, 0));
obj0.userData.points.push(new PMPoint(1.47422, -1.14401, 0));
obj0.userData.points.push(new PMPoint(1.48792, -1.13453, 0));
obj0.userData.points.push(new PMPoint(1.83425, -1.06893, 0));
obj0.userData.points.push(new PMPoint(1.94641, -0.734765, 0));
obj0.userData.points.push(new PMPoint(-0.807871, -1.88359, 0));
obj0.userData.points.push(new PMPoint(-0.603906, -2.20378, 0));
obj0.userData.points.push(new PMPoint(0.0614877, -1.58882, 0));
obj0.userData.points.push(new PMPoint(-0.114841, -2.40053, 0));
obj0.userData.points.push(new PMPoint(0.260256, -2.45905, 0));
obj0.userData.points.push(new PMPoint(0.70601, -1.80892, 0));
obj0.userData.points.push(new PMPoint(1.82274, 1.1967, 0));
obj0.userData.points.push(new PMPoint(2.05787, 1.94908, 0));
obj0.userData.points.push(new PMPoint(1.77987, 2.20762, 0));
obj0.userData.points.push(new PMPoint(2.29794, 0.708806, 0));
obj0.userData.points.push(new PMPoint(2.75335, 1.49209, 0));
obj0.userData.points.push(new PMPoint(2.39644, 1.62148, 0));
obj0.userData.points.push(new PMPoint(-2.35594, 0.861813, 0));
obj0.userData.points.push(new PMPoint(-1.9543, 0.36755, 0));
obj0.userData.points.push(new PMPoint(-2.46412, -0.546553, 0));
obj0.userData.points.push(new PMPoint(-2.01053, -0.993618, 0));
obj0.userData.points.push(new PMPoint(-0.463091, 2.49957, 0));
obj0.userData.points.push(new PMPoint(-1.09494, 2.57944, 0));
obj0.userData.points.push(new PMPoint(1.71628, -2.10848, 0));
obj0.userData.points.push(new PMPoint(2.093, -2.06151, 0));
obj0.userData.points.push(new PMPoint(1.82274, -1.1967, 0));
obj0.userData.points.push(new PMPoint(-0.201785, -3.03144, 0));
obj0.userData.points.push(new PMPoint(0.396588, -2.81336, 0));
obj0.userData.points.push(new PMPoint(2.42059, 2.06112, 0));
obj0.userData.points.push(new PMPoint(2.22183, 2.66618, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 4, 14, 5, 15, 14, 15, 1, 16, 6, 17, 16, 17, 6, 18, 7, 19, 18, 19, 3, 20, 20, 21, 8, 22, 21, 22, 8, 23, 23, 24, 9, 25, 24, 25, 11, 26, 26, 27, 3, 28, 27, 28, 10, 29, 29, 30, 11, 31, 30, 31, 12, 32, 13, 33, 32, 33, 4, 34, 34, 35, 14, 36, 35, 36, 14, 37, 37, 38, 15, 39, 38, 39, 19, 40, 40, 41, 7, 42, 41, 42, 18, 43, 43, 44, 19, 45, 44, 45, 20, 46, 46, 47, 21, 48, 47, 48, 21, 49, 49, 50, 22, 51, 50, 51, 24, 52, 52, 53, 25, 54, 53, 54, 26, 55, 55, 56, 27, 57, 56, 57, 29, 58, 58, 59, 30, 60, 59, 60, 12, 61, 61, 62, 32, 63, 62, 63, 32, 64, 64, 65, 33, 66, 65, 66, 35, 67, 67, 68, 36, 69, 68, 69, 38, 70, 70, 71, 39, 72, 71, 72, 40, 73, 73, 74, 41, 75, 74, 75, 43, 76, 76, 77, 44, 78, 77, 78, 47, 79, 48, 80, 79, 80, 52, 81, 53, 82, 81, 82, 56, 83, 57, 84, 83, 84, 62, 85, 85, 86, 63, 87, 86, 87, 70, 88, 71, 89, 88, 89, 74, 90, 75, 91, 90, 91];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [3, 2, 10, 11], [6, 1, 16, 17], [8, 3, 20, 21, 22], [5, 4, 14, 15], [3, 11, 26, 27, 28], [9, 8, 23, 24, 25], [7, 6, 18, 19], [4, 34, 35, 36, 14], [11, 10, 29, 30, 31], [33, 13, 12, 32], [7, 19, 40, 41, 42], [14, 37, 38, 39, 15], [32, 12, 61, 62, 63], [19, 18, 43, 44, 45], [33, 32, 64, 65, 66], [20, 46, 47, 48, 21], [26, 55, 56, 57, 27], [22, 21, 49, 50, 51], [25, 24, 52, 53, 54], [30, 29, 58, 59, 60], [40, 73, 74, 75, 41], [35, 67, 68, 69, 36], [72, 39, 38, 70, 71], [44, 43, 76, 77, 78], [63, 62, 85, 86, 87], [48, 47, 79, 80], [53, 52, 81, 82], [70, 88, 89, 71], [74, 90, 91, 75], [56, 83, 84, 57]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[75,74],
      [71,70],
      [63,62],
      [57,56],
      [53,52],
      [48,47],
      [44,43],
      [41,40],
      [39,38],
      [36,35],
      [33,32],
      [32,12],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [21,20],
      [19,18],
      [7,19],
      [15,14],
      [14,4],
      [13,12],
      [11,10],
      [3,11],
      [9,8],
      [8,3],
      [7,6],
      [6,1],
      [5,4],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.54496959075427,
      2.54496959075427,
      2.55137255929209,
      2.54496959075427,
      2.54496959075427,
      2.54496959075427,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.5291787130088,
      2.5291787130088,
      2.55137255929209,
      2.55137255929209,
      2.5513725592921,
      2.55137255929209,
      2.55137255929209,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5476519233436,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5476519233436,
      2.55413303116489,
      2.5476519233436,
      2.55413303116489,
      2.5476519233436,
      2.5476519233436,
      2.55413303116489,
      2.55413303116489];

obj0.userData.subtrees = [[90,91],
      [88,89],
      [85,86,87],
      [83,84],
      [81,82],
      [79,80],
      [76,77,78],
      [73,74,75,90,91],
      [70,71,72,88,89],
      [67,68,69],
      [64,65,66],
      [61,62,63,85,86,87],
      [58,59,60],
      [55,56,57,83,84],
      [52,53,54,81,82],
      [49,50,51],
      [46,47,48,79,80],
      [43,44,45,76,77,78],
      [40,41,42,73,74,75,90,91],
      [37,38,39,70,71,72,88,89],
      [34,35,36,67,68,69],
      [32,33,61,62,63,64,65,66,85,86,87],
      [29,30,31,58,59,60],
      [26,27,28,55,56,57,83,84],
      [23,24,25,52,53,54,81,82],
      [20,21,22,46,47,48,49,50,51,79,80],
      [18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [16,17],
      [14,15,34,35,36,37,38,39,67,68,69,70,71,72,88,89],
      [12,13,32,33,61,62,63,64,65,66,85,86,87],
      [10,11,26,27,28,29,30,31,55,56,57,58,59,60,83,84],
      [8,9,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,79,80,81,82],
      [6,7,16,17,18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [4,5,12,13,14,15,32,33,34,35,36,37,38,39,61,62,63,64,65,66,67,68,69,70,71,72,85,86,87,88,89]];

obj0.userData.polytoperoot = [[-0.337774522666302,-0.884305180874149,0],
      [0,-1.13083132568723,-0.0435994020277065],
      [0.60454729653472,-0.0147267672084447,0.381966011250105]];

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
