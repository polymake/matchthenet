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
obj0.userData.points.push(new PMPoint(0.563216, 0, 0));
obj0.userData.points.push(new PMPoint(0.556907, 0.358494, 0));
obj0.userData.points.push(new PMPoint(0.556907, -0.358494, 0));
obj0.userData.points.push(new PMPoint(0.233199, 0.51267, 0));
obj0.userData.points.push(new PMPoint(1.12608, 0.019817, 0));
obj0.userData.points.push(new PMPoint(1.12608, -0.019817, 0));
obj0.userData.points.push(new PMPoint(0.233199, -0.51267, 0));
obj0.userData.points.push(new PMPoint(-0.0957335, 0.655361, 0));
obj0.userData.points.push(new PMPoint(0.484292, 1.01682, 0));
obj0.userData.points.push(new PMPoint(0.87499, 0.523965, 0));
obj0.userData.points.push(new PMPoint(0.87499, -0.523965, 0));
obj0.userData.points.push(new PMPoint(-0.0957335, -0.655361, 0));
obj0.userData.points.push(new PMPoint(0.484292, -1.01682, 0));
obj0.userData.points.push(new PMPoint(0.448215, 1.03323, 0));
obj0.userData.points.push(new PMPoint(-0.370104, 0.424541, 0));
obj0.userData.points.push(new PMPoint(0.83923, 0.579517, 0));
obj0.userData.points.push(new PMPoint(1.1987, 0.678141, 0));
obj0.userData.points.push(new PMPoint(1.1987, -0.678141, 0));
obj0.userData.points.push(new PMPoint(0.606314, -1.01896, 0));
obj0.userData.points.push(new PMPoint(0.448215, -1.03323, 0));
obj0.userData.points.push(new PMPoint(-0.370104, -0.424541, 0));
obj0.userData.points.push(new PMPoint(-0.114652, 1.01341, 0));
obj0.userData.points.push(new PMPoint(-0.636184, 0.18421, 0));
obj0.userData.points.push(new PMPoint(-0.725042, 0.861842, 0));
obj0.userData.points.push(new PMPoint(1.1136, 0.810337, 0));
obj0.userData.points.push(new PMPoint(1.48102, 0.457118, 0));
obj0.userData.points.push(new PMPoint(0.641791, -1.03663, 0));
obj0.userData.points.push(new PMPoint(1.48102, -0.457118, 0));
obj0.userData.points.push(new PMPoint(-0.114652, -1.01341, 0));
obj0.userData.points.push(new PMPoint(-0.636184, -0.18421, 0));
obj0.userData.points.push(new PMPoint(-0.725042, -0.861842, 0));
obj0.userData.points.push(new PMPoint(-0.120961, 1.3719, 0));
obj0.userData.points.push(new PMPoint(-0.676474, 0.973801, 0));
obj0.userData.points.push(new PMPoint(-0.754917, 0.835797, 0));
obj0.userData.points.push(new PMPoint(1.02931, 1.15884, 0));
obj0.userData.points.push(new PMPoint(1.75539, 0.226297, 0));
obj0.userData.points.push(new PMPoint(1.82035, 0.906636, 0));
obj0.userData.points.push(new PMPoint(1.20501, -1.03663, 0));
obj0.userData.points.push(new PMPoint(1.75539, -0.226297, 0));
obj0.userData.points.push(new PMPoint(1.82035, -0.906636, 0));
obj0.userData.points.push(new PMPoint(-0.120961, -1.3719, 0));
obj0.userData.points.push(new PMPoint(-0.676474, -0.973801, 0));
obj0.userData.points.push(new PMPoint(-0.754917, -0.835797, 0));
obj0.userData.points.push(new PMPoint(-0.677868, 1.01341, 0));
obj0.userData.points.push(new PMPoint(0.197122, 1.53738, 0));
obj0.userData.points.push(new PMPoint(-0.969934, 0.315239, 0));
obj0.userData.points.push(new PMPoint(0.932807, 1.50416, 0));
obj0.userData.points.push(new PMPoint(1.57898, 1.28159, 0));
obj0.userData.points.push(new PMPoint(1.85113, 0.881659, 0));
obj0.userData.points.push(new PMPoint(1.1987, -1.39513, 0));
obj0.userData.points.push(new PMPoint(1.76787, -1.01682, 0));
obj0.userData.points.push(new PMPoint(1.85113, -0.881659, 0));
obj0.userData.points.push(new PMPoint(-0.677868, -1.01341, 0));
obj0.userData.points.push(new PMPoint(0.197122, -1.53738, 0));
obj0.userData.points.push(new PMPoint(-0.969934, -0.315239, 0));
obj0.userData.points.push(new PMPoint(-0.444669, 1.52608, 0));
obj0.userData.points.push(new PMPoint(0.52083, 1.69155, 0));
obj0.userData.points.push(new PMPoint(-0.0715544, 2.03238, 0));
obj0.userData.points.push(new PMPoint(-1.29887, 0.45793, 0));
obj0.userData.points.push(new PMPoint(1.56899, 1.31995, 0));
obj0.userData.points.push(new PMPoint(2.08432, 0.368989, 0));
obj0.userData.points.push(new PMPoint(0.87499, -1.5493, 0));
obj0.userData.points.push(new PMPoint(1.76787, -1.05645, 0));
obj0.userData.points.push(new PMPoint(2.08432, -0.368989, 0));
obj0.userData.points.push(new PMPoint(-0.444669, -1.52608, 0));
obj0.userData.points.push(new PMPoint(-0.0715544, -2.03238, 0));
obj0.userData.points.push(new PMPoint(-1.29887, -0.45793, 0));
obj0.userData.points.push(new PMPoint(-0.773602, 1.66877, 0));
obj0.userData.points.push(new PMPoint(-0.193576, 2.03023, 0));
obj0.userData.points.push(new PMPoint(-0.0360771, 2.05005, 0));
obj0.userData.points.push(new PMPoint(-1.31778, 0.81598, 0));
obj0.userData.points.push(new PMPoint(1.19889, 1.74449, 0));
obj0.userData.points.push(new PMPoint(2.40803, 0.523165, 0));
obj0.userData.points.push(new PMPoint(1.12608, -2.05345, 0));
obj0.userData.points.push(new PMPoint(1.51678, -1.5606, 0));
obj0.userData.points.push(new PMPoint(2.40803, -0.523165, 0));
obj0.userData.points.push(new PMPoint(-0.773602, -1.66877, 0));
obj0.userData.points.push(new PMPoint(-0.193576, -2.03023, 0));
obj0.userData.points.push(new PMPoint(-1.31778, -0.81598, 0));
obj0.userData.points.push(new PMPoint(-1.04797, 1.43795, 0));
obj0.userData.points.push(new PMPoint(-0.229653, 2.04664, 0));
obj0.userData.points.push(new PMPoint(0.527139, 2.05005, 0));
obj0.userData.points.push(new PMPoint(-1.87961, 0.776371, 0));
obj0.userData.points.push(new PMPoint(1.47326, 1.97531, 0));
obj0.userData.points.push(new PMPoint(2.41434, 0.881659, 0));
obj0.userData.points.push(new PMPoint(1.48102, -1.61615, 0));
obj0.userData.points.push(new PMPoint(1.84049, -1.71478, 0));
obj0.userData.points.push(new PMPoint(2.41434, -0.881659, 0));
obj0.userData.points.push(new PMPoint(-1.04797, -1.43795, 0));
obj0.userData.points.push(new PMPoint(-0.229653, -2.04664, 0));
obj0.userData.points.push(new PMPoint(-1.87961, -0.776371, 0));
obj0.userData.points.push(new PMPoint(-1.40291, 1.87525, 0));
obj0.userData.points.push(new PMPoint(-0.792521, 2.02682, 0));
obj0.userData.points.push(new PMPoint(0.52083, 2.40854, 0));
obj0.userData.points.push(new PMPoint(1.80219, 1.83262, 0));
obj0.userData.points.push(new PMPoint(2.97721, 0.861842, 0));
obj0.userData.points.push(new PMPoint(1.75539, -1.84697, 0));
obj0.userData.points.push(new PMPoint(2.12281, -1.49375, 0));
obj0.userData.points.push(new PMPoint(2.97721, -0.861842, 0));
obj0.userData.points.push(new PMPoint(-1.40291, -1.87525, 0));
obj0.userData.points.push(new PMPoint(-0.792521, -2.02682, 0));
obj0.userData.points.push(new PMPoint(-0.857894, 2.01727, 0));
obj0.userData.points.push(new PMPoint(-0.798829, 2.38532, 0));
obj0.userData.points.push(new PMPoint(0.197122, 2.56272, 0));
obj0.userData.points.push(new PMPoint(2.01721, 2.35317, 0));
obj0.userData.points.push(new PMPoint(1.6711, -2.19547, 0));
obj0.userData.points.push(new PMPoint(2.46214, -1.94327, 0));
obj0.userData.points.push(new PMPoint(-0.857894, -2.01727, 0));
obj0.userData.points.push(new PMPoint(-0.798829, -2.38532, 0));
obj0.userData.points.push(new PMPoint(-0.954396, 2.36259, 0));
obj0.userData.points.push(new PMPoint(-0.480746, 2.55079, 0));
obj0.userData.points.push(new PMPoint(0.448215, 3.06686, 0));
obj0.userData.points.push(new PMPoint(1.5746, -2.54079, 0));
obj0.userData.points.push(new PMPoint(2.22078, -2.31823, 0));
obj0.userData.points.push(new PMPoint(-0.954396, -2.36259, 0));
obj0.userData.points.push(new PMPoint(-1.30652, 2.43016, 0));
obj0.userData.points.push(new PMPoint(-0.749423, 3.04579, 0));
obj0.userData.points.push(new PMPoint(2.21078, -2.35658, 0));
obj0.userData.points.push(new PMPoint(-1.30652, -2.43016, 0));
obj0.userData.points.push(new PMPoint(-1.19067, 2.98133, 0));
obj0.userData.points.push(new PMPoint(1.84068, -2.78112, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 5, 1, 6, 3, 6, 0, 7, 3, 7, 0, 8, 4, 8, 2, 9, 4, 9, 2, 10, 5, 10, 3, 11, 6, 11, 0, 12, 7, 12, 3, 13, 7, 13, 4, 14, 8, 14, 0, 15, 8, 15, 2, 16, 9, 16, 5, 17, 10, 17, 6, 18, 11, 18, 3, 19, 11, 19, 7, 20, 12, 20, 0, 21, 12, 21, 8, 22, 14, 22, 0, 23, 15, 23, 8, 24, 15, 24, 9, 25, 16, 25, 5, 26, 17, 26, 11, 27, 18, 27, 6, 28, 18, 28, 12, 29, 20, 29, 0, 30, 21, 30, 12, 31, 21, 31, 14, 32, 22, 32, 8, 33, 22, 33, 15, 34, 23, 34, 9, 35, 25, 35, 5, 36, 26, 36, 17, 37, 26, 37, 18, 38, 27, 38, 6, 39, 28, 39, 18, 40, 28, 40, 20, 41, 29, 41, 12, 42, 29, 42, 21, 43, 30, 43, 22, 44, 32, 44, 14, 45, 32, 45, 23, 46, 34, 46, 9, 47, 35, 47, 25, 48, 35, 48, 26, 49, 36, 49, 27, 50, 38, 50, 18, 51, 38, 51, 28, 52, 39, 52, 29, 53, 41, 53, 20, 54, 41, 54, 30, 55, 43, 55, 32, 56, 44, 56, 14, 57, 45, 57, 32, 58, 45, 58, 34, 59, 46, 59, 35, 60, 47, 60, 36, 61, 49, 61, 27, 62, 50, 62, 38, 63, 50, 63, 39, 64, 52, 64, 41, 65, 53, 65, 41, 66, 54, 66, 43, 67, 55, 67, 44, 68, 56, 68, 32, 69, 56, 69, 45, 70, 57, 70, 34, 71, 59, 71, 47, 72, 60, 72, 49, 73, 61, 73, 50, 74, 62, 74, 50, 75, 63, 75, 52, 76, 64, 76, 53, 77, 65, 77, 41, 78, 65, 78, 43, 79, 67, 79, 44, 80, 68, 80, 56, 81, 68, 81, 57, 82, 70, 82, 59, 83, 71, 83, 60, 84, 72, 84, 49, 85, 73, 85, 50, 86, 74, 86, 63, 87, 75, 87, 52, 88, 76, 88, 53, 89, 77, 89, 65, 90, 77, 90, 67, 91, 79, 91, 68, 92, 80, 92, 68, 93, 81, 93, 70, 94, 82, 94, 60, 95, 84, 95, 73, 96, 85, 96, 74, 97, 86, 97, 63, 98, 87, 98, 76, 99, 88, 99, 77, 100, 89, 100, 77, 101, 90, 101, 68, 102, 92, 102, 81, 103, 93, 103, 70, 104, 94, 104, 84, 105, 95, 105, 74, 106, 97, 106, 87, 107, 98, 107, 77, 108, 100, 108, 90, 109, 101, 109, 92, 110, 102, 110, 81, 111, 103, 111, 94, 112, 104, 112, 74, 113, 106, 113, 97, 114, 106, 114, 100, 115, 108, 115, 92, 116, 110, 116, 103, 117, 111, 117, 106, 118, 113, 118, 100, 119, 115, 119, 110, 120, 116, 120, 113, 121, 118, 121];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [0, 2, 4], [2, 1, 5], [0, 4, 8], [6, 1, 3], [3, 0, 7], [2, 5, 10], [4, 2, 9], [7, 0, 12], [10, 5, 17], [4, 14, 8], [0, 8, 15], [6, 3, 11], [2, 16, 9], [3, 7, 13], [0, 15, 23], [6, 11, 18], [16, 25, 9], [7, 12, 20], [12, 0, 21], [17, 5, 26], [8, 14, 22], [11, 3, 19], [15, 8, 24], [0, 30, 21], [26, 5, 36], [22, 14, 32], [11, 27, 18], [15, 34, 23], [6, 18, 28], [9, 25, 35], [20, 12, 29], [8, 22, 33], [12, 21, 31], [17, 26, 37], [6, 28, 39], [9, 35, 47], [20, 29, 41], [22, 32, 44], [21, 30, 43], [26, 36, 49], [32, 14, 45], [18, 27, 38], [23, 34, 46], [12, 42, 29], [25, 48, 35], [28, 18, 40], [14, 57, 45], [38, 27, 50], [46, 34, 59], [29, 53, 41], [35, 60, 47], [28, 52, 39], [20, 41, 54], [44, 32, 56], [30, 55, 43], [49, 36, 61], [18, 38, 51], [32, 45, 58], [50, 27, 62], [44, 56, 68], [55, 67, 43], [49, 61, 73], [38, 50, 63], [45, 57, 70], [59, 34, 71], [41, 53, 65], [47, 60, 72], [39, 52, 64], [32, 69, 56], [54, 41, 66], [44, 68, 80], [65, 53, 77], [72, 60, 84], [64, 52, 76], [56, 81, 68], [50, 62, 74], [43, 67, 79], [49, 73, 85], [63, 50, 75], [57, 82, 70], [41, 65, 78], [59, 71, 83], [53, 89, 77], [60, 95, 84], [63, 75, 87], [82, 94, 70], [65, 77, 90], [80, 68, 92], [76, 52, 88], [68, 81, 93], [50, 74, 86], [67, 91, 79], [85, 73, 96], [63, 87, 98], [93, 81, 103], [86, 74, 97], [89, 100, 77], [95, 105, 84], [70, 94, 104], [90, 77, 101], [68, 102, 92], [76, 88, 99], [81, 111, 103], [90, 101, 109], [102, 110, 92], [98, 87, 107], [97, 74, 106], [77, 100, 108], [94, 112, 104], [106, 74, 113], [108, 100, 115], [111, 117, 103], [92, 110, 116], [97, 106, 114], [100, 119, 115], [106, 113, 118], [110, 120, 116], [118, 113, 121]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[118,113],
      [116,110],
      [115,100],
      [106,113],
      [103,111],
      [92,110],
      [108,100],
      [97,106],
      [106,74],
      [104,94],
      [103,81],
      [92,102],
      [90,101],
      [77,100],
      [98,87],
      [97,74],
      [84,95],
      [70,94],
      [93,81],
      [92,68],
      [90,77],
      [77,89],
      [76,88],
      [63,87],
      [86,74],
      [85,73],
      [84,60],
      [70,82],
      [68,81],
      [80,68],
      [79,67],
      [65,77],
      [77,53],
      [76,52],
      [63,75],
      [50,74],
      [49,73],
      [72,60],
      [59,71],
      [70,57],
      [68,56],
      [44,68],
      [43,67],
      [41,65],
      [65,53],
      [64,52],
      [63,50],
      [50,62],
      [49,61],
      [47,60],
      [59,34],
      [45,57],
      [56,32],
      [44,56],
      [43,55],
      [54,41],
      [41,53],
      [39,52],
      [38,50],
      [50,27],
      [49,36],
      [47,35],
      [46,34],
      [32,45],
      [45,14],
      [44,32],
      [43,30],
      [20,41],
      [41,29],
      [39,28],
      [18,38],
      [38,27],
      [26,36],
      [35,25],
      [9,35],
      [23,34],
      [32,14],
      [22,32],
      [21,30],
      [29,12],
      [20,29],
      [28,18],
      [6,28],
      [18,27],
      [17,26],
      [26,5],
      [9,25],
      [23,15],
      [8,22],
      [22,14],
      [12,21],
      [21,0],
      [20,12],
      [6,18],
      [18,11],
      [17,5],
      [9,16],
      [15,8],
      [0,15],
      [8,14],
      [12,0],
      [7,12],
      [11,3],
      [6,11],
      [10,5],
      [9,2],
      [0,8],
      [8,4],
      [3,7],
      [7,0],
      [6,3],
      [2,5],
      [4,2],
      [0,4],
      [3,0],
      [1,3],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122];

obj0.userData.subtrees = [[121],
      [120],
      [119],
      [118,121],
      [117],
      [116,120],
      [115,119],
      [114],
      [113,118,121],
      [112],
      [111,117],
      [110,116,120],
      [109],
      [108,115,119],
      [107],
      [106,113,114,118,121],
      [105],
      [104,112],
      [103,111,117],
      [102,110,116,120],
      [101,109],
      [100,108,115,119],
      [99],
      [98,107],
      [97,106,113,114,118,121],
      [96],
      [95,105],
      [94,104,112],
      [93,103,111,117],
      [92,102,110,116,120],
      [91],
      [90,101,109],
      [89,100,108,115,119],
      [88,99],
      [87,98,107],
      [86,97,106,113,114,118,121],
      [85,96],
      [84,95,105],
      [83],
      [82,94,104,112],
      [81,93,103,111,117],
      [80,92,102,110,116,120],
      [79,91],
      [78],
      [77,89,90,100,101,108,109,115,119],
      [76,88,99],
      [75,87,98,107],
      [74,86,97,106,113,114,118,121],
      [73,85,96],
      [72,84,95,105],
      [71,83],
      [70,82,94,104,112],
      [69],
      [68,80,81,92,93,102,103,110,111,116,117,120],
      [67,79,91],
      [66],
      [65,77,78,89,90,100,101,108,109,115,119],
      [64,76,88,99],
      [63,75,87,98,107],
      [62,74,86,97,106,113,114,118,121],
      [61,73,85,96],
      [60,72,84,95,105],
      [59,71,83],
      [58],
      [57,70,82,94,104,112],
      [56,68,69,80,81,92,93,102,103,110,111,116,117,120],
      [55,67,79,91],
      [54,66],
      [53,65,77,78,89,90,100,101,108,109,115,119],
      [52,64,76,88,99],
      [51],
      [50,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [49,61,73,85,96],
      [48],
      [47,60,72,84,95,105],
      [46,59,71,83],
      [45,57,58,70,82,94,104,112],
      [44,56,68,69,80,81,92,93,102,103,110,111,116,117,120],
      [43,55,67,79,91],
      [42],
      [41,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [40],
      [39,52,64,76,88,99],
      [38,50,51,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [37],
      [36,49,61,73,85,96],
      [35,47,48,60,72,84,95,105],
      [34,46,59,71,83],
      [33],
      [32,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [31],
      [30,43,55,67,79,91],
      [29,41,42,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [28,39,40,52,64,76,88,99],
      [27,38,50,51,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [26,36,37,49,61,73,85,96],
      [25,35,47,48,60,72,84,95,105],
      [24],
      [23,34,46,59,71,83],
      [22,32,33,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [21,30,31,43,55,67,79,91],
      [20,29,41,42,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [19],
      [18,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [17,26,36,37,49,61,73,85,96],
      [16,25,35,47,48,60,72,84,95,105],
      [15,23,24,34,46,59,71,83],
      [14,22,32,33,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [13],
      [12,20,21,29,30,31,41,42,43,53,54,55,65,66,67,77,78,79,89,90,91,100,101,108,109,115,119],
      [11,18,19,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [10,17,26,36,37,49,61,73,85,96],
      [9,16,25,35,47,48,60,72,84,95,105],
      [8,14,15,22,23,24,32,33,34,44,45,46,56,57,58,59,68,69,70,71,80,81,82,83,92,93,94,102,103,104,110,111,112,116,117,120],
      [7,12,13,20,21,29,30,31,41,42,43,53,54,55,65,66,67,77,78,79,89,90,91,100,101,108,109,115,119],
      [6,11,18,19,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [5,10,17,26,36,37,49,61,73,85,96],
      [4,8,9,14,15,16,22,23,24,25,32,33,34,35,44,45,46,47,48,56,57,58,59,60,68,69,70,71,72,80,81,82,83,84,92,93,94,95,102,103,104,105,110,111,112,116,117,120],
      [3,6,7,11,12,13,18,19,20,21,27,28,29,30,31,38,39,40,41,42,43,50,51,52,53,54,55,62,63,64,65,66,67,74,75,76,77,78,79,86,87,88,89,90,91,97,98,99,100,101,106,107,108,109,113,114,115,118,119,121]];

obj0.userData.polytoperoot = [[6.05464851571386e-16,-0.903249998007828,-0.558239199107112],
      [-0.136846717987934,-1.02253728180133,-0.136846717987934],
      [-0.581044136863554,0.0763932022500223,0.0102237436136074]];

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
