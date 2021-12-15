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
obj0.userData.points.push(new PMPoint(0.592704, 0, 0));
obj0.userData.points.push(new PMPoint(0.592704, 0.348855, 0));
obj0.userData.points.push(new PMPoint(0.592704, -0.348855, 0));
obj0.userData.points.push(new PMPoint(0.575409, 1.03639, 0));
obj0.userData.points.push(new PMPoint(1.10908, 0.0281517, 0));
obj0.userData.points.push(new PMPoint(0.905409, 0.503501, 0));
obj0.userData.points.push(new PMPoint(0.575409, -1.03639, 0));
obj0.userData.points.push(new PMPoint(0.905409, -0.503501, 0));
obj0.userData.points.push(new PMPoint(1.10908, -0.0281517, 0));
obj0.userData.points.push(new PMPoint(-0.0172949, 0.687531, 0));
obj0.userData.points.push(new PMPoint(0.888803, 0.533314, 0));
obj0.userData.points.push(new PMPoint(1.48565, 0.382603, 0));
obj0.userData.points.push(new PMPoint(1.23307, 0.623236, 0));
obj0.userData.points.push(new PMPoint(-0.0172949, -0.687531, 0));
obj0.userData.points.push(new PMPoint(0.888803, -0.533314, 0));
obj0.userData.points.push(new PMPoint(1.23307, -0.623236, 0));
obj0.userData.points.push(new PMPoint(1.48565, -0.382603, 0));
obj0.userData.points.push(new PMPoint(-0.626789, 1.00614, 0));
obj0.userData.points.push(new PMPoint(-0.609999, 1.03639, 0));
obj0.userData.points.push(new PMPoint(1.1849, 0.717772, 0));
obj0.userData.points.push(new PMPoint(1.89448, 0.811734, 0));
obj0.userData.points.push(new PMPoint(1.57125, -0.203887, 0));
obj0.userData.points.push(new PMPoint(1.71057, 0.115939, 0));
obj0.userData.points.push(new PMPoint(-0.626789, -1.00614, 0));
obj0.userData.points.push(new PMPoint(-0.609999, -1.03639, 0));
obj0.userData.points.push(new PMPoint(1.1849, -0.717772, 0));
obj0.userData.points.push(new PMPoint(1.89448, -0.811734, 0));
obj0.userData.points.push(new PMPoint(-0.609494, 0.318614, 0));
obj0.userData.points.push(new PMPoint(-0.0172949, 1.38524, 0));
obj0.userData.points.push(new PMPoint(1.75932, 1.09599, 0));
obj0.userData.points.push(new PMPoint(1.73823, 0.141971, 0));
obj0.userData.points.push(new PMPoint(2.11463, -0.440598, 0));
obj0.userData.points.push(new PMPoint(-0.609494, -0.318614, 0));
obj0.userData.points.push(new PMPoint(-0.0172949, -1.38524, 0));
obj0.userData.points.push(new PMPoint(1.75932, -1.09599, 0));
obj0.userData.points.push(new PMPoint(-1.2022, -0.0302413, 0));
obj0.userData.points.push(new PMPoint(0, 2.07277, 0));
obj0.userData.points.push(new PMPoint(-0.0345897, 2.07277, 0));
obj0.userData.points.push(new PMPoint(1.14982, 1.4146, 0));
obj0.userData.points.push(new PMPoint(2.24795, -0.319749, 0));
obj0.userData.points.push(new PMPoint(0, -2.07277, 0));
obj0.userData.points.push(new PMPoint(-0.0345897, -2.07277, 0));
obj0.userData.points.push(new PMPoint(1.14982, -1.4146, 0));
obj0.userData.points.push(new PMPoint(-1.21949, 0.657289, 0));
obj0.userData.points.push(new PMPoint(0.592704, 1.72392, 0));
obj0.userData.points.push(new PMPoint(-0.627294, 1.72392, 0));
obj0.userData.points.push(new PMPoint(1.13253, 2.10213, 0));
obj0.userData.points.push(new PMPoint(2.4042, 0.350014, 0));
obj0.userData.points.push(new PMPoint(0.592704, -1.72392, 0));
obj0.userData.points.push(new PMPoint(-0.627294, -1.72392, 0));
obj0.userData.points.push(new PMPoint(1.13253, -2.10213, 0));
obj0.userData.points.push(new PMPoint(-1.21949, 1.00614, 0));
obj0.userData.points.push(new PMPoint(-1.51559, 0.472831, 0));
obj0.userData.points.push(new PMPoint(-0.923393, 1.53946, 0));
obj0.userData.points.push(new PMPoint(-0.627294, 2.07277, 0));
obj0.userData.points.push(new PMPoint(1.74202, 1.78352, 0));
obj0.userData.points.push(new PMPoint(3.0553, 0.571529, 0));
obj0.userData.points.push(new PMPoint(3.06561, 0.538512, 0));
obj0.userData.points.push(new PMPoint(-0.923393, -1.53946, 0));
obj0.userData.points.push(new PMPoint(-0.627294, -2.07277, 0));
obj0.userData.points.push(new PMPoint(1.74202, -1.78352, 0));
obj0.userData.points.push(new PMPoint(-1.73587, 0.977993, 0));
obj0.userData.points.push(new PMPoint(-1.5322, 0.502644, 0));
obj0.userData.points.push(new PMPoint(-0.661378, 2.0711, 0));
obj0.userData.points.push(new PMPoint(-1.17254, 1.99263, 0));
obj0.userData.points.push(new PMPoint(-0.627294, 2.42163, 0));
obj0.userData.points.push(new PMPoint(2.33473, 2.13237, 0));
obj0.userData.points.push(new PMPoint(2.31644, 2.16173, 0));
obj0.userData.points.push(new PMPoint(2.90936, -0.13125, 0));
obj0.userData.points.push(new PMPoint(-1.17254, -1.99263, 0));
obj0.userData.points.push(new PMPoint(-0.661378, -2.0711, 0));
obj0.userData.points.push(new PMPoint(-0.627294, -2.42163, 0));
obj0.userData.points.push(new PMPoint(2.31644, -2.16173, 0));
obj0.userData.points.push(new PMPoint(-0.733004, 2.41253, 0));
obj0.userData.points.push(new PMPoint(-1.0708, 2.49967, 0));
obj0.userData.points.push(new PMPoint(-0.609999, 3.10916, 0));
obj0.userData.points.push(new PMPoint(-1.0708, -2.49967, 0));
obj0.userData.points.push(new PMPoint(-0.733004, -2.41253, 0));
obj0.userData.points.push(new PMPoint(-0.609999, -3.10916, 0));
obj0.userData.points.push(new PMPoint(-0.922735, 3.07359, 0));
obj0.userData.points.push(new PMPoint(-0.922735, -3.07359, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 6, 5, 6, 0, 7, 3, 7, 3, 8, 1, 9, 8, 9, 0, 10, 4, 10, 2, 11, 4, 11, 5, 12, 6, 13, 12, 13, 0, 14, 7, 14, 3, 15, 7, 15, 8, 16, 9, 17, 16, 17, 0, 18, 10, 18, 4, 19, 10, 19, 4, 20, 11, 20, 12, 21, 13, 21, 5, 22, 12, 23, 22, 23, 0, 24, 14, 24, 7, 25, 14, 25, 7, 26, 15, 26, 16, 27, 17, 27, 0, 28, 18, 28, 4, 29, 19, 29, 4, 30, 20, 30, 12, 31, 21, 31, 22, 32, 23, 32, 0, 33, 24, 33, 7, 34, 25, 34, 7, 35, 26, 35, 18, 36, 28, 36, 4, 37, 29, 37, 19, 38, 29, 38, 4, 39, 30, 39, 21, 40, 31, 40, 7, 41, 34, 41, 25, 42, 34, 42, 7, 43, 35, 43, 18, 44, 36, 44, 4, 45, 37, 45, 19, 46, 38, 46, 30, 47, 39, 47, 21, 48, 40, 48, 7, 49, 41, 49, 25, 50, 42, 50, 35, 51, 43, 51, 18, 52, 44, 52, 36, 53, 44, 53, 19, 54, 46, 54, 38, 55, 46, 55, 30, 56, 47, 56, 21, 57, 48, 57, 40, 58, 48, 58, 25, 59, 50, 59, 42, 60, 50, 60, 35, 61, 51, 61, 52, 62, 44, 63, 62, 63, 46, 64, 54, 65, 64, 65, 38, 66, 55, 66, 30, 67, 56, 67, 47, 68, 56, 68, 40, 69, 58, 69, 59, 70, 50, 71, 70, 71, 42, 72, 60, 72, 51, 73, 61, 73, 64, 74, 65, 75, 74, 75, 38, 76, 66, 76, 70, 77, 71, 78, 77, 78, 42, 79, 72, 79, 74, 80, 75, 80, 77, 81, 78, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [0, 2, 4], [0, 4, 10], [3, 0, 7], [2, 11, 4], [7, 0, 14], [11, 20, 4], [0, 10, 18], [15, 3, 7], [0, 18, 28], [15, 7, 26], [14, 0, 24], [13, 12, 21], [10, 4, 19], [0, 33, 24], [12, 31, 21], [19, 4, 29], [17, 16, 27], [20, 30, 4], [7, 14, 25], [23, 22, 32], [4, 30, 39], [7, 25, 34], [29, 4, 37], [26, 7, 35], [28, 18, 36], [4, 45, 37], [35, 7, 43], [36, 18, 44], [7, 34, 41], [19, 29, 38], [31, 40, 21], [49, 7, 41], [19, 38, 46], [21, 40, 48], [44, 18, 52], [34, 25, 42], [39, 30, 47], [19, 46, 54], [42, 25, 50], [47, 30, 56], [36, 44, 53], [21, 48, 57], [35, 43, 51], [25, 59, 50], [30, 67, 56], [35, 51, 61], [48, 40, 58], [46, 38, 55], [58, 40, 69], [55, 38, 66], [47, 56, 68], [42, 50, 60], [38, 76, 66], [42, 60, 72], [61, 51, 73], [79, 42, 72], [74, 80, 75], [81, 78, 77], [2, 1, 5, 6], [6, 5, 12, 13], [12, 5, 22, 23], [9, 8, 16, 17], [9, 1, 3, 8], [44, 52, 62, 63], [59, 70, 71, 50], [70, 77, 78, 71], [64, 74, 75, 65], [46, 64, 65, 54]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[78,77],
      [75,74],
      [42,72],
      [71,70],
      [66,38],
      [65,64],
      [61,51],
      [42,60],
      [50,59],
      [58,40],
      [47,56],
      [56,30],
      [55,38],
      [54,46],
      [44,52],
      [35,51],
      [42,50],
      [50,25],
      [48,40],
      [21,48],
      [47,30],
      [46,38],
      [19,46],
      [36,44],
      [44,18],
      [35,43],
      [42,25],
      [7,41],
      [21,40],
      [39,30],
      [19,38],
      [37,4],
      [36,18],
      [35,7],
      [34,25],
      [7,34],
      [21,31],
      [4,30],
      [19,29],
      [29,4],
      [28,18],
      [26,7],
      [7,25],
      [24,0],
      [23,22],
      [21,12],
      [4,20],
      [19,4],
      [0,18],
      [17,16],
      [15,7],
      [7,14],
      [14,0],
      [12,5],
      [13,12],
      [4,11],
      [10,4],
      [0,10],
      [9,8],
      [3,7],
      [7,0],
      [6,5],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.81675875066152,
      2.81675875066152,
      2.80321785608481,
      2.8210710137745,
      2.80321785608481,
      2.8210710137745,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.8210710137745,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.8210710137745,
      2.80321785608481,
      2.80321785608481,
      2.8210710137745,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481];

obj0.userData.subtrees = [[81],
      [80],
      [79],
      [77,78,81],
      [76],
      [74,75,80],
      [73],
      [72,79],
      [70,71,77,78,81],
      [69],
      [68],
      [67],
      [66,76],
      [64,65,74,75,80],
      [62,63],
      [61,73],
      [60,72,79],
      [59,70,71,77,78,81],
      [58,69],
      [57],
      [56,67,68],
      [55,66,76],
      [54,64,65,74,75,80],
      [53],
      [52,62,63],
      [51,61,73],
      [50,59,60,70,71,72,77,78,79,81],
      [49],
      [48,57,58,69],
      [47,56,67,68],
      [46,54,55,64,65,66,74,75,76,80],
      [45],
      [44,52,53,62,63],
      [43,51,61,73],
      [42,50,59,60,70,71,72,77,78,79,81],
      [41,49],
      [40,48,57,58,69],
      [39,47,56,67,68],
      [38,46,54,55,64,65,66,74,75,76,80],
      [37,45],
      [36,44,52,53,62,63],
      [35,43,51,61,73],
      [34,41,42,49,50,59,60,70,71,72,77,78,79,81],
      [33],
      [32],
      [31,40,48,57,58,69],
      [30,39,47,56,67,68],
      [29,37,38,45,46,54,55,64,65,66,74,75,76,80],
      [28,36,44,52,53,62,63],
      [27],
      [26,35,43,51,61,73],
      [25,34,41,42,49,50,59,60,70,71,72,77,78,79,81],
      [24,33],
      [22,23,32],
      [21,31,40,48,57,58,69],
      [20,30,39,47,56,67,68],
      [19,29,37,38,45,46,54,55,64,65,66,74,75,76,80],
      [18,28,36,44,52,53,62,63],
      [16,17,27],
      [15,26,35,43,51,61,73],
      [14,24,25,33,34,41,42,49,50,59,60,70,71,72,77,78,79,81],
      [12,13,21,22,23,31,32,40,48,57,58,69],
      [11,20,30,39,47,56,67,68],
      [10,18,19,28,29,36,37,38,44,45,46,52,53,54,55,62,63,64,65,66,74,75,76,80],
      [8,9,16,17,27],
      [7,14,15,24,25,26,33,34,35,41,42,43,49,50,51,59,60,61,70,71,72,73,77,78,79,81],
      [5,6,12,13,21,22,23,31,32,40,48,57,58,69],
      [4,10,11,18,19,20,28,29,30,36,37,38,39,44,45,46,47,52,53,54,55,56,62,63,64,65,66,67,68,74,75,76,80],
      [3,7,8,9,14,15,16,17,24,25,26,27,33,34,35,41,42,43,49,50,51,59,60,61,70,71,72,73,77,78,79,81]];

obj0.userData.polytoperoot = [[0,-0.959014910329194,-0.592703810301373],
      [-0.178120685518123,-1.04273665532138,3.46068950892414e-17],
      [-0.618033988749893,0.105572809000084,0]];

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
