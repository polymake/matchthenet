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
obj0.userData.points.push(new PMPoint(0.431593, 0, 0));
obj0.userData.points.push(new PMPoint(0.245647, 0.409061, 0));
obj0.userData.points.push(new PMPoint(-0.185945, 0.409061, 0));
obj0.userData.points.push(new PMPoint(-0.185945, -0.409061, 0));
obj0.userData.points.push(new PMPoint(0.245647, -0.409061, 0));
obj0.userData.points.push(new PMPoint(0.908086, 0.0125368, 0));
obj0.userData.points.push(new PMPoint(0.722141, 0.421598, 0));
obj0.userData.points.push(new PMPoint(-0.457153, 0.0507973, 0));
obj0.userData.points.push(new PMPoint(-0.271208, -0.358264, 0));
obj0.userData.points.push(new PMPoint(0.41348, 0.806684, 0));
obj0.userData.points.push(new PMPoint(-0.0181125, 0.806684, 0));
obj0.userData.points.push(new PMPoint(0.722141, -0.421598, 0));
obj0.userData.points.push(new PMPoint(0.908086, -0.0125368, 0));
obj0.userData.points.push(new PMPoint(-0.0181125, -0.806684, 0));
obj0.userData.points.push(new PMPoint(0.41348, -0.806684, 0));
obj0.userData.points.push(new PMPoint(1.19829, 0.390672, 0));
obj0.userData.points.push(new PMPoint(1.43427, 0.752034, 0));
obj0.userData.points.push(new PMPoint(1.24833, 1.1611, 0));
obj0.userData.points.push(new PMPoint(0.958126, 0.782961, 0));
obj0.userData.points.push(new PMPoint(0.903424, 0.813272, 0));
obj0.userData.points.push(new PMPoint(0.42693, 0.800735, 0));
obj0.userData.points.push(new PMPoint(-0.630119, 0.477004, 0));
obj0.userData.points.push(new PMPoint(-0.901327, 0.11874, 0));
obj0.userData.points.push(new PMPoint(-0.905407, 0.0820182, 0));
obj0.userData.points.push(new PMPoint(-0.719462, -0.327043, 0));
obj0.userData.points.push(new PMPoint(0.625, 1.23384, 0));
obj0.userData.points.push(new PMPoint(0.193408, 1.23384, 0));
obj0.userData.points.push(new PMPoint(-0.322669, 1.13707, 0));
obj0.userData.points.push(new PMPoint(-0.490502, 0.739442, 0));
obj0.userData.points.push(new PMPoint(0.958126, -0.782961, 0));
obj0.userData.points.push(new PMPoint(1.24833, -1.1611, 0));
obj0.userData.points.push(new PMPoint(1.43427, -0.752034, 0));
obj0.userData.points.push(new PMPoint(1.19829, -0.390672, 0));
obj0.userData.points.push(new PMPoint(0.42693, -0.800735, 0));
obj0.userData.points.push(new PMPoint(0.903424, -0.813272, 0));
obj0.userData.points.push(new PMPoint(-0.490502, -0.739442, 0));
obj0.userData.points.push(new PMPoint(-0.322669, -1.13707, 0));
obj0.userData.points.push(new PMPoint(0.193408, -1.23384, 0));
obj0.userData.points.push(new PMPoint(0.625, -1.23384, 0));
obj0.userData.points.push(new PMPoint(1.67159, 0.334213, 0));
obj0.userData.points.push(new PMPoint(1.90758, 0.695576, 0));
obj0.userData.points.push(new PMPoint(1.38059, -0.050283, 0));
obj0.userData.points.push(new PMPoint(1.67079, 0.327852, 0));
obj0.userData.points.push(new PMPoint(1.91077, 0.764571, 0));
obj0.userData.points.push(new PMPoint(1.72482, 1.17363, 0));
obj0.userData.points.push(new PMPoint(1.13031, 1.23247, 0));
obj0.userData.points.push(new PMPoint(0.65382, 1.21993, 0));
obj0.userData.points.push(new PMPoint(-0.835588, 0.856549, 0));
obj0.userData.points.push(new PMPoint(-1.1068, 0.498285, 0));
obj0.userData.points.push(new PMPoint(-1.18918, -0.243164, 0));
obj0.userData.points.push(new PMPoint(-1.00324, -0.652225, 0));
obj0.userData.points.push(new PMPoint(-0.0997154, 1.57441, 0));
obj0.userData.points.push(new PMPoint(-0.311236, 1.14725, 0));
obj0.userData.points.push(new PMPoint(1.10028, 1.27007, 0));
obj0.userData.points.push(new PMPoint(0.859454, 1.64942, 0));
obj0.userData.points.push(new PMPoint(0.427861, 1.64942, 0));
obj0.userData.points.push(new PMPoint(-0.0474191, 1.61319, 0));
obj0.userData.points.push(new PMPoint(1.90758, -0.695576, 0));
obj0.userData.points.push(new PMPoint(1.67159, -0.334213, 0));
obj0.userData.points.push(new PMPoint(1.72482, -1.17363, 0));
obj0.userData.points.push(new PMPoint(1.91077, -0.764571, 0));
obj0.userData.points.push(new PMPoint(0.65382, -1.21993, 0));
obj0.userData.points.push(new PMPoint(1.13031, -1.23247, 0));
obj0.userData.points.push(new PMPoint(-0.125826, -1.57118, 0));
obj0.userData.points.push(new PMPoint(0.178731, -1.2408, 0));
obj0.userData.points.push(new PMPoint(-0.0474191, -1.61319, 0));
obj0.userData.points.push(new PMPoint(0.427861, -1.64942, 0));
obj0.userData.points.push(new PMPoint(0.859454, -1.64942, 0));
obj0.userData.points.push(new PMPoint(1.10028, -1.27007, 0));
obj0.userData.points.push(new PMPoint(2.09628, 0.257325, 0));
obj0.userData.points.push(new PMPoint(2.33227, 0.618687, 0));
obj0.userData.points.push(new PMPoint(2.34236, 0.764571, 0));
obj0.userData.points.push(new PMPoint(2.15642, 1.17363, 0));
obj0.userData.points.push(new PMPoint(1.889, 1.59191, 0));
obj0.userData.points.push(new PMPoint(1.41251, 1.57937, 0));
obj0.userData.points.push(new PMPoint(-1.07346, 1.26961, 0));
obj0.userData.points.push(new PMPoint(-1.34467, 0.911349, 0));
obj0.userData.points.push(new PMPoint(-1.53637, 0.456581, 0));
obj0.userData.points.push(new PMPoint(-1.3309, 0.077036, 0));
obj0.userData.points.push(new PMPoint(-1.51193, -0.593934, 0));
obj0.userData.points.push(new PMPoint(-1.32598, -1.00299, 0));
obj0.userData.points.push(new PMPoint(0.633616, 2.07938, 0));
obj0.userData.points.push(new PMPoint(0.158336, 2.04316, 0));
obj0.userData.points.push(new PMPoint(1.07097, 2.07658, 0));
obj0.userData.points.push(new PMPoint(0.639382, 2.07658, 0));
obj0.userData.points.push(new PMPoint(2.15642, -1.17363, 0));
obj0.userData.points.push(new PMPoint(2.34236, -0.764571, 0));
obj0.userData.points.push(new PMPoint(1.41251, -1.57937, 0));
obj0.userData.points.push(new PMPoint(1.889, -1.59191, 0));
obj0.userData.points.push(new PMPoint(0.639382, -2.07658, 0));
obj0.userData.points.push(new PMPoint(1.07097, -2.07658, 0));
obj0.userData.points.push(new PMPoint(0.158336, -2.04316, 0));
obj0.userData.points.push(new PMPoint(0.633616, -2.07938, 0));
obj0.userData.points.push(new PMPoint(2.34236, 1.58269, 0));
obj0.userData.points.push(new PMPoint(1.91077, 1.58269, 0));
obj0.userData.points.push(new PMPoint(2.61357, 1.12283, 0));
obj0.userData.points.push(new PMPoint(2.42762, 1.5319, 0));
obj0.userData.points.push(new PMPoint(-1.77541, 0.884305, 0));
obj0.userData.points.push(new PMPoint(-1.53754, 0.471242, 0));
obj0.userData.points.push(new PMPoint(-1.54415, 1.3448, 0));
obj0.userData.points.push(new PMPoint(-1.97428, 1.38029, 0));
obj0.userData.points.push(new PMPoint(-2.24549, 1.02203, 0));
obj0.userData.points.push(new PMPoint(-1.7748, 0.946841, 0));
obj0.userData.points.push(new PMPoint(-2.01271, 0.439237, 0));
obj0.userData.points.push(new PMPoint(-1.80724, 0.0596914, 0));
obj0.userData.points.push(new PMPoint(-1.93936, -0.534137, 0));
obj0.userData.points.push(new PMPoint(-2.41507, -0.504162, 0));
obj0.userData.points.push(new PMPoint(-2.22913, -0.913224, 0));
obj0.userData.points.push(new PMPoint(-1.8017, -0.973021, 0));
obj0.userData.points.push(new PMPoint(0.795191, 2.47959, 0));
obj0.userData.points.push(new PMPoint(0.319911, 2.44336, 0));
obj0.userData.points.push(new PMPoint(1.23881, 2.4742, 0));
obj0.userData.points.push(new PMPoint(0.807214, 2.4742, 0));
obj0.userData.points.push(new PMPoint(1.91077, -1.58269, 0));
obj0.userData.points.push(new PMPoint(2.34236, -1.58269, 0));
obj0.userData.points.push(new PMPoint(2.42762, -1.5319, 0));
obj0.userData.points.push(new PMPoint(2.61357, -1.12283, 0));
obj0.userData.points.push(new PMPoint(0.807214, -2.4742, 0));
obj0.userData.points.push(new PMPoint(1.23881, -2.4742, 0));
obj0.userData.points.push(new PMPoint(0.319911, -2.44336, 0));
obj0.userData.points.push(new PMPoint(0.795191, -2.47959, 0));
obj0.userData.points.push(new PMPoint(3.06182, 1.09161, 0));
obj0.userData.points.push(new PMPoint(2.87588, 1.50068, 0));
obj0.userData.points.push(new PMPoint(-2.25207, 0.884266, 0));
obj0.userData.points.push(new PMPoint(-2.0142, 0.471203, 0));
obj0.userData.points.push(new PMPoint(-2.21215, 1.79336, 0));
obj0.userData.points.push(new PMPoint(-2.48336, 1.43509, 0));
obj0.userData.points.push(new PMPoint(-2.73782, -0.854932, 0));
obj0.userData.points.push(new PMPoint(-2.55187, -1.26399, 0));
obj0.userData.points.push(new PMPoint(1.05286, 2.88326, 0));
obj0.userData.points.push(new PMPoint(0.621269, 2.88326, 0));
obj0.userData.points.push(new PMPoint(0.621269, -2.88326, 0));
obj0.userData.points.push(new PMPoint(1.05286, -2.88326, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 4, 14, 5, 15, 14, 15, 6, 16, 16, 17, 17, 18, 7, 19, 18, 19, 7, 20, 2, 21, 20, 21, 3, 22, 8, 23, 22, 23, 8, 24, 9, 25, 24, 25, 10, 26, 11, 27, 26, 27, 11, 28, 3, 29, 28, 29, 12, 30, 30, 31, 31, 32, 13, 33, 32, 33, 5, 34, 12, 35, 34, 35, 4, 36, 14, 37, 36, 37, 14, 38, 15, 39, 38, 39, 16, 40, 17, 41, 40, 41, 6, 42, 16, 43, 42, 43, 17, 44, 18, 45, 44, 45, 20, 46, 21, 47, 46, 47, 22, 48, 23, 49, 48, 49, 24, 50, 25, 51, 50, 51, 27, 52, 11, 53, 52, 53, 26, 54, 54, 55, 55, 56, 27, 57, 56, 57, 32, 58, 33, 59, 58, 59, 31, 60, 32, 61, 60, 61, 34, 62, 35, 63, 62, 63, 37, 64, 14, 65, 64, 65, 38, 66, 66, 67, 67, 68, 39, 69, 68, 69, 40, 70, 41, 71, 70, 71, 44, 72, 45, 73, 72, 73, 45, 74, 18, 75, 74, 75, 48, 76, 49, 77, 76, 77, 49, 78, 23, 79, 78, 79, 50, 80, 51, 81, 80, 81, 56, 82, 57, 83, 82, 83, 55, 84, 56, 85, 84, 85, 60, 86, 61, 87, 86, 87, 31, 88, 60, 89, 88, 89, 67, 90, 68, 91, 90, 91, 66, 92, 67, 93, 92, 93, 73, 94, 45, 95, 94, 95, 72, 96, 73, 97, 96, 97, 77, 98, 49, 99, 98, 99, 76, 100, 100, 101, 101, 102, 77, 103, 102, 103, 78, 104, 79, 105, 104, 105, 80, 106, 106, 107, 107, 108, 81, 109, 108, 109, 82, 110, 83, 111, 110, 111, 84, 112, 85, 113, 112, 113, 60, 114, 86, 115, 114, 115, 86, 116, 87, 117, 116, 117, 90, 118, 91, 119, 118, 119, 92, 120, 93, 121, 120, 121, 96, 122, 97, 123, 122, 123, 98, 124, 99, 125, 124, 125, 101, 126, 102, 127, 126, 127, 107, 128, 108, 129, 128, 129, 112, 130, 113, 131, 130, 131, 118, 132, 119, 133, 132, 133];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [2, 1, 6, 7], [0, 3, 8, 9], [3, 2, 10, 11], [7, 6, 16, 17, 18, 19], [2, 7, 20, 21], [11, 10, 26, 27], [8, 3, 22, 23], [13, 1, 5, 12], [17, 16, 40, 41], [13, 12, 30, 31, 32, 33], [9, 8, 24, 25], [11, 27, 52, 53], [61, 60, 86, 87], [16, 6, 42, 43], [14, 37, 64, 65], [3, 11, 28, 29], [33, 32, 58, 59], [5, 4, 14, 15], [79, 78, 104, 105], [45, 73, 94, 95], [20, 46, 47, 21], [27, 26, 54, 55, 56, 57], [12, 5, 34, 35], [68, 67, 90, 91], [41, 40, 70, 71], [81, 80, 106, 107, 108, 109], [4, 36, 37, 14], [22, 48, 49, 23], [45, 44, 72, 73], [18, 45, 74, 75], [18, 17, 44, 45], [25, 24, 50, 51], [48, 76, 77, 49], [15, 14, 38, 39], [23, 49, 78, 79], [35, 34, 62, 63], [83, 82, 110, 111], [32, 31, 60, 61], [49, 77, 98, 99], [69, 39, 38, 66, 67, 68], [57, 56, 82, 83], [60, 31, 88, 89], [56, 55, 84, 85], [60, 114, 115, 86], [76, 100, 101, 102, 103, 77], [98, 124, 125, 99], [91, 90, 118, 119], [51, 50, 80, 81], [113, 112, 130, 131], [85, 84, 112, 113], [87, 86, 116, 117], [133, 119, 118, 132], [92, 120, 121, 93], [73, 72, 96, 97], [97, 96, 122, 123], [101, 126, 127, 102], [67, 66, 92, 93], [108, 107, 128, 129]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
obj0.userData.axes = [[119,118],
      [113,112],
      [108,107],
      [102,101],
      [99,98],
      [97,96],
      [93,92],
      [91,90],
      [87,86],
      [86,60],
      [85,84],
      [83,82],
      [81,80],
      [79,78],
      [77,76],
      [49,77],
      [73,72],
      [45,73],
      [67,66],
      [68,67],
      [60,31],
      [61,60],
      [56,55],
      [57,56],
      [51,50],
      [23,49],
      [49,48],
      [18,45],
      [45,44],
      [41,40],
      [39,38],
      [14,37],
      [35,34],
      [32,31],
      [33,32],
      [27,26],
      [11,27],
      [25,24],
      [23,22],
      [21,20],
      [18,17],
      [16,6],
      [17,16],
      [15,14],
      [14,4],
      [12,5],
      [13,12],
      [3,11],
      [11,10],
      [9,8],
      [8,3],
      [2,7],
      [7,6],
      [5,4],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.55151034029086,
      2.55151034029086,
      2.56700171483186,
      2.56700171483186,
      3.09259397644335,
      2.71085407713123,
      3.09259397644335,
      3.0906872995998,
      2.43871096234008,
      2.4671778862797,
      3.09068729959979,
      3.09259397644335,
      2.56700171483186,
      3.09068729959979,
      2.56700171483186,
      2.60406484596628,
      2.43871096234008,
      2.4671778862797,
      2.5258690495563,
      2.54899137773887,
      2.40450017760691,
      3.06363824503183,
      2.54899137773887,
      2.5258690495563,
      3.06363824503183,
      2.55151034029086,
      3.06363824503183,
      2.40450017760691,
      3.06363824503183,
      3.09068729959979,
      2.54899137773887,
      3.06363824503182,
      3.09259397644335,
      2.56700171483186,
      2.54899137773887,
      2.54899137773887,
      2.60406484596628,
      2.43871096234008,
      2.43871096234008,
      3.09259397644335,
      2.56700171483186,
      2.5258690495563,
      2.54899137773887,
      3.09068729959979,
      2.55151034029086,
      2.60406484596628,
      2.56700171483186,
      2.55151034029086,
      3.0906872995998,
      2.71085407713123,
      2.71085407713123,
      2.60406484596628,
      2.56700171483186,
      2.55151034029086,
      3.06363824503182,
      2.55151034029086,
      2.43871096234008,
      3.06363824503183,
      2.4671778862797];

obj0.userData.subtrees = [[132,133],
      [130,131],
      [128,129],
      [126,127],
      [124,125],
      [122,123],
      [120,121],
      [118,119,132,133],
      [116,117],
      [114,115],
      [112,113,130,131],
      [110,111],
      [106,107,108,109,128,129],
      [104,105],
      [100,101,102,103,126,127],
      [98,99,124,125],
      [96,97,122,123],
      [94,95],
      [92,93,120,121],
      [90,91,118,119,132,133],
      [88,89],
      [86,87,114,115,116,117],
      [84,85,112,113,130,131],
      [82,83,110,111],
      [80,81,106,107,108,109,128,129],
      [78,79,104,105],
      [76,77,98,99,100,101,102,103,124,125,126,127],
      [74,75],
      [72,73,94,95,96,97,122,123],
      [70,71],
      [66,67,68,69,90,91,92,93,118,119,120,121,132,133],
      [64,65],
      [62,63],
      [60,61,86,87,88,89,114,115,116,117],
      [58,59],
      [54,55,56,57,82,83,84,85,110,111,112,113,130,131],
      [52,53],
      [50,51,80,81,106,107,108,109,128,129],
      [48,49,76,77,78,79,98,99,100,101,102,103,104,105,124,125,126,127],
      [46,47],
      [44,45,72,73,74,75,94,95,96,97,122,123],
      [42,43],
      [40,41,70,71],
      [38,39,66,67,68,69,90,91,92,93,118,119,120,121,132,133],
      [36,37,64,65],
      [34,35,62,63],
      [30,31,32,33,58,59,60,61,86,87,88,89,114,115,116,117],
      [28,29],
      [26,27,52,53,54,55,56,57,82,83,84,85,110,111,112,113,130,131],
      [24,25,50,51,80,81,106,107,108,109,128,129],
      [22,23,48,49,76,77,78,79,98,99,100,101,102,103,104,105,124,125,126,127],
      [20,21,46,47],
      [16,17,18,19,40,41,42,43,44,45,70,71,72,73,74,75,94,95,96,97,122,123],
      [14,15,36,37,38,39,64,65,66,67,68,69,90,91,92,93,118,119,120,121,132,133],
      [12,13,30,31,32,33,34,35,58,59,60,61,62,63,86,87,88,89,114,115,116,117],
      [10,11,26,27,28,29,52,53,54,55,56,57,82,83,84,85,110,111,112,113,130,131],
      [8,9,22,23,24,25,48,49,50,51,76,77,78,79,80,81,98,99,100,101,102,103,104,105,106,107,108,109,124,125,126,127,128,129],
      [6,7,16,17,18,19,20,21,40,41,42,43,44,45,46,47,70,71,72,73,74,75,94,95,96,97,122,123],
      [4,5,12,13,14,15,30,31,32,33,34,35,36,37,38,39,58,59,60,61,62,63,64,65,66,67,68,69,86,87,88,89,90,91,92,93,114,115,116,117,118,119,120,121,132,133]];

obj0.userData.polytoperoot = [[-0.945090617865718,0.320491239730939,-0.559066972826377],
      [-47.2854166809234,2.09577056942327,0],
      [0.465664778402783,10.5064711765968,17.5129423531936]];

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
