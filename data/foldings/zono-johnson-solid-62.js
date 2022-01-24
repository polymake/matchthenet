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
obj0.userData.points.push(new PMPoint(0.444556, 0, 0));
obj0.userData.points.push(new PMPoint(0.59474, 0.356376, 0));
obj0.userData.points.push(new PMPoint(0.150183, 0.356376, 0));
obj0.userData.points.push(new PMPoint(0.150183, -0.356376, 0));
obj0.userData.points.push(new PMPoint(0.59474, -0.356376, 0));
obj0.userData.points.push(new PMPoint(-0.221436, 0.366858, 0));
obj0.userData.points.push(new PMPoint(-0.371619, 0.0104818, 0));
obj0.userData.points.push(new PMPoint(0.636555, -0.335701, 0));
obj0.userData.points.push(new PMPoint(0.786738, 0.0206747, 0));
obj0.userData.points.push(new PMPoint(0.390117, 0.711411, 0));
obj0.userData.points.push(new PMPoint(-0.0544397, 0.711411, 0));
obj0.userData.points.push(new PMPoint(-0.371619, -0.0104818, 0));
obj0.userData.points.push(new PMPoint(-0.221436, -0.366858, 0));
obj0.userData.points.push(new PMPoint(-0.0544397, -0.711411, 0));
obj0.userData.points.push(new PMPoint(0.390117, -0.711411, 0));
obj0.userData.points.push(new PMPoint(-0.496514, 0.670589, 0));
obj0.userData.points.push(new PMPoint(-0.646697, 0.314213, 0));
obj0.userData.points.push(new PMPoint(-0.0750635, 0.698698, 0));
obj0.userData.points.push(new PMPoint(-0.446682, 0.70918, 0));
obj0.userData.points.push(new PMPoint(1.08111, -0.335701, 0));
obj0.userData.points.push(new PMPoint(1.23129, 0.0206747, 0));
obj0.userData.points.push(new PMPoint(1.22806, 0.0741999, 0));
obj0.userData.points.push(new PMPoint(1.03606, 0.409901, 0));
obj0.userData.points.push(new PMPoint(0.468437, 0.746206, 0));
obj0.userData.points.push(new PMPoint(0.263814, 1.10124, 0));
obj0.userData.points.push(new PMPoint(0.260586, 1.10018, 0));
obj0.userData.points.push(new PMPoint(-0.183971, 1.10018, 0));
obj0.userData.points.push(new PMPoint(-0.646697, -0.314213, 0));
obj0.userData.points.push(new PMPoint(-0.496514, -0.670589, 0));
obj0.userData.points.push(new PMPoint(-0.446682, -0.70918, 0));
obj0.userData.points.push(new PMPoint(-0.0750635, -0.698698, 0));
obj0.userData.points.push(new PMPoint(0.263814, -1.10124, 0));
obj0.userData.points.push(new PMPoint(0.468437, -0.746206, 0));
obj0.userData.points.push(new PMPoint(-0.183971, -1.10018, 0));
obj0.userData.points.push(new PMPoint(0.260586, -1.10018, 0));
obj0.userData.points.push(new PMPoint(-1.04212, 0.206683, 0));
obj0.userData.points.push(new PMPoint(-0.76704, -0.0970482, 0));
obj0.userData.points.push(new PMPoint(-0.738236, 1.00148, 0));
obj0.userData.points.push(new PMPoint(-0.888419, 0.645107, 0));
obj0.userData.points.push(new PMPoint(-0.22919, 1.07839, 0));
obj0.userData.points.push(new PMPoint(-0.600809, 1.08887, 0));
obj0.userData.points.push(new PMPoint(0.841178, -0.690736, 0));
obj0.userData.points.push(new PMPoint(1.28573, -0.690736, 0));
obj0.userData.points.push(new PMPoint(1.45273, -0.346183, 0));
obj0.userData.points.push(new PMPoint(1.60291, 0.010193, 0));
obj0.userData.points.push(new PMPoint(1.59571, 0.129349, 0));
obj0.userData.points.push(new PMPoint(1.40372, 0.46505, 0));
obj0.userData.points.push(new PMPoint(1.19645, 0.78699, 0));
obj0.userData.points.push(new PMPoint(0.755127, 0.733465, 0));
obj0.userData.points.push(new PMPoint(0.763683, 1.07856, 0));
obj0.userData.points.push(new PMPoint(0.55906, 1.4336, 0));
obj0.userData.points.push(new PMPoint(0.498624, 1.47564, 0));
obj0.userData.points.push(new PMPoint(0.66157, 1.80979, 0));
obj0.userData.points.push(new PMPoint(0.292105, 1.8511, 0));
obj0.userData.points.push(new PMPoint(-0.152451, 1.8511, 0));
obj0.userData.points.push(new PMPoint(-0.390489, 1.47564, 0));
obj0.userData.points.push(new PMPoint(-0.553436, 1.14148, 0));
obj0.userData.points.push(new PMPoint(-0.888419, -0.645107, 0));
obj0.userData.points.push(new PMPoint(-0.738236, -1.00148, 0));
obj0.userData.points.push(new PMPoint(-0.600809, -1.08887, 0));
obj0.userData.points.push(new PMPoint(-0.22919, -1.07839, 0));
obj0.userData.points.push(new PMPoint(0.55906, -1.4336, 0));
obj0.userData.points.push(new PMPoint(0.763683, -1.07856, 0));
obj0.userData.points.push(new PMPoint(-0.553436, -1.14148, 0));
obj0.userData.points.push(new PMPoint(-0.390489, -1.47564, 0));
obj0.userData.points.push(new PMPoint(-0.152451, -1.8511, 0));
obj0.userData.points.push(new PMPoint(0.292105, -1.8511, 0));
obj0.userData.points.push(new PMPoint(0.66157, -1.80979, 0));
obj0.userData.points.push(new PMPoint(0.498624, -1.47564, 0));
obj0.userData.points.push(new PMPoint(-0.914287, 0.624561, 0));
obj0.userData.points.push(new PMPoint(-1.30971, 0.517031, 0));
obj0.userData.points.push(new PMPoint(-1.4348, 0.0895432, 0));
obj0.userData.points.push(new PMPoint(-1.15972, -0.214188, 0));
obj0.userData.points.push(new PMPoint(-1.14388, 0.9434, 0));
obj0.userData.points.push(new PMPoint(-1.29406, 0.587025, 0));
obj0.userData.points.push(new PMPoint(1.65608, -0.723161, 0));
obj0.userData.points.push(new PMPoint(1.45146, -0.368126, 0));
obj0.userData.points.push(new PMPoint(1.72781, -0.649914, 0));
obj0.userData.points.push(new PMPoint(1.87799, -0.293538, 0));
obj0.userData.points.push(new PMPoint(1.58611, 0.832002, 0));
obj0.userData.points.push(new PMPoint(1.21845, 0.776853, 0));
obj0.userData.points.push(new PMPoint(1.83222, 0.46399, 0));
obj0.userData.points.push(new PMPoint(1.64022, 0.799691, 0));
obj0.userData.points.push(new PMPoint(0.983951, 1.37805, 0));
obj0.userData.points.push(new PMPoint(0.779329, 1.73308, 0));
obj0.userData.points.push(new PMPoint(-0.655505, 1.78819, 0));
obj0.userData.points.push(new PMPoint(-0.818451, 1.45403, 0));
obj0.userData.points.push(new PMPoint(0.539504, 2.20097, 0));
obj0.userData.points.push(new PMPoint(0.170039, 2.24227, 0));
obj0.userData.points.push(new PMPoint(0.162574, 2.23987, 0));
obj0.userData.points.push(new PMPoint(-0.281982, 2.23987, 0));
obj0.userData.points.push(new PMPoint(-0.411436, 2.16866, 0));
obj0.userData.points.push(new PMPoint(-0.649474, 1.7932, 0));
obj0.userData.points.push(new PMPoint(-1.29406, -0.587025, 0));
obj0.userData.points.push(new PMPoint(-1.14388, -0.9434, 0));
obj0.userData.points.push(new PMPoint(0.779329, -1.73308, 0));
obj0.userData.points.push(new PMPoint(0.983951, -1.37805, 0));
obj0.userData.points.push(new PMPoint(-0.818451, -1.45403, 0));
obj0.userData.points.push(new PMPoint(-0.655505, -1.78819, 0));
obj0.userData.points.push(new PMPoint(-0.281982, -2.23987, 0));
obj0.userData.points.push(new PMPoint(0.162574, -2.23987, 0));
obj0.userData.points.push(new PMPoint(0.170039, -2.24227, 0));
obj0.userData.points.push(new PMPoint(0.539504, -2.20097, 0));
obj0.userData.points.push(new PMPoint(-0.649474, -1.7932, 0));
obj0.userData.points.push(new PMPoint(-0.411436, -2.16866, 0));
obj0.userData.points.push(new PMPoint(-1.70763, 0.419175, 0));
obj0.userData.points.push(new PMPoint(-1.44004, 0.108827, 0));
obj0.userData.points.push(new PMPoint(-1.55338, 0.928161, 0));
obj0.userData.points.push(new PMPoint(-1.70356, 0.571785, 0));
obj0.userData.points.push(new PMPoint(1.96953, -0.980808, 0));
obj0.userData.points.push(new PMPoint(2.11971, -0.624432, 0));
obj0.userData.points.push(new PMPoint(2.27341, -0.186008, 0));
obj0.userData.points.push(new PMPoint(1.99833, 0.117723, 0));
obj0.userData.points.push(new PMPoint(2.03235, 0.82158, 0));
obj0.userData.points.push(new PMPoint(1.84035, 1.15728, 0));
obj0.userData.points.push(new PMPoint(-0.854445, 2.14644, 0));
obj0.userData.points.push(new PMPoint(-1.01739, 1.81228, 0));
obj0.userData.points.push(new PMPoint(0.918681, 2.09867, 0));
obj0.userData.points.push(new PMPoint(0.796614, 2.48985, 0));
obj0.userData.points.push(new PMPoint(0.343461, 2.56081, 0));
obj0.userData.points.push(new PMPoint(-0.0260041, 2.60212, 0));
obj0.userData.points.push(new PMPoint(-0.0420486, 2.5949, 0));
obj0.userData.points.push(new PMPoint(-0.486605, 2.5949, 0));
obj0.userData.points.push(new PMPoint(-0.489542, 2.59319, 0));
obj0.userData.points.push(new PMPoint(-0.360011, 2.20442, 0));
obj0.userData.points.push(new PMPoint(-0.601721, 2.53158, 0));
obj0.userData.points.push(new PMPoint(-0.839759, 2.15612, 0));
obj0.userData.points.push(new PMPoint(-1.70356, -0.571785, 0));
obj0.userData.points.push(new PMPoint(-1.55338, -0.928161, 0));
obj0.userData.points.push(new PMPoint(-1.01739, -1.81228, 0));
obj0.userData.points.push(new PMPoint(-0.854445, -2.14644, 0));
obj0.userData.points.push(new PMPoint(-0.486605, -2.5949, 0));
obj0.userData.points.push(new PMPoint(-0.0420486, -2.5949, 0));
obj0.userData.points.push(new PMPoint(-0.360011, -2.20442, 0));
obj0.userData.points.push(new PMPoint(-0.489542, -2.59319, 0));
obj0.userData.points.push(new PMPoint(0.796614, -2.48985, 0));
obj0.userData.points.push(new PMPoint(0.918681, -2.09867, 0));
obj0.userData.points.push(new PMPoint(-0.0260041, -2.60212, 0));
obj0.userData.points.push(new PMPoint(0.343461, -2.56081, 0));
obj0.userData.points.push(new PMPoint(-0.839759, -2.15612, 0));
obj0.userData.points.push(new PMPoint(-0.601721, -2.53158, 0));
obj0.userData.points.push(new PMPoint(-1.82041, 1.18682, 0));
obj0.userData.points.push(new PMPoint(-1.97059, 0.830443, 0));
obj0.userData.points.push(new PMPoint(2.52251, -0.549102, 0));
obj0.userData.points.push(new PMPoint(2.28079, -0.218208, 0));
obj0.userData.points.push(new PMPoint(2.66609, -0.0688684, 0));
obj0.userData.points.push(new PMPoint(2.39102, 0.234863, 0));
obj0.userData.points.push(new PMPoint(0.634214, 2.86608, 0));
obj0.userData.points.push(new PMPoint(0.377104, 2.5772, 0));
obj0.userData.points.push(new PMPoint(0.522718, 2.90349, 0));
obj0.userData.points.push(new PMPoint(0.153253, 2.94479, 0));
obj0.userData.points.push(new PMPoint(0.108134, 2.95128, 0));
obj0.userData.points.push(new PMPoint(-0.336422, 2.95128, 0));
obj0.userData.points.push(new PMPoint(-0.98312, 2.59556, 0));
obj0.userData.points.push(new PMPoint(-1.22116, 2.22011, 0));
obj0.userData.points.push(new PMPoint(-1.97059, -0.830443, 0));
obj0.userData.points.push(new PMPoint(-1.82041, -1.18682, 0));
obj0.userData.points.push(new PMPoint(-0.336422, -2.95128, 0));
obj0.userData.points.push(new PMPoint(0.108134, -2.95128, 0));
obj0.userData.points.push(new PMPoint(0.377104, -2.5772, 0));
obj0.userData.points.push(new PMPoint(0.634214, -2.86608, 0));
obj0.userData.points.push(new PMPoint(0.153253, -2.94479, 0));
obj0.userData.points.push(new PMPoint(0.522718, -2.90349, 0));
obj0.userData.points.push(new PMPoint(-1.22116, -2.22011, 0));
obj0.userData.points.push(new PMPoint(-0.98312, -2.59556, 0));
obj0.userData.points.push(new PMPoint(2.92703, -0.483616, 0));
obj0.userData.points.push(new PMPoint(2.6853, -0.152722, 0));
obj0.userData.points.push(new PMPoint(-0.528421, 3.28698, 0));
obj0.userData.points.push(new PMPoint(-0.678604, 2.9306, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 3, 6, 0, 7, 6, 7, 1, 8, 2, 9, 8, 9, 2, 10, 3, 11, 10, 11, 0, 12, 4, 13, 12, 13, 4, 14, 5, 15, 14, 15, 6, 16, 7, 17, 16, 17, 3, 18, 6, 19, 18, 19, 8, 20, 9, 21, 20, 21, 9, 22, 2, 23, 22, 23, 2, 24, 10, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 13, 30, 4, 31, 30, 31, 15, 32, 5, 33, 32, 33, 14, 34, 15, 35, 34, 35, 17, 36, 7, 37, 36, 37, 16, 38, 17, 39, 38, 39, 18, 40, 19, 41, 40, 41, 8, 42, 20, 43, 42, 43, 20, 44, 21, 45, 44, 45, 22, 46, 23, 47, 46, 47, 23, 48, 2, 49, 48, 49, 24, 50, 25, 51, 50, 51, 26, 52, 52, 53, 53, 54, 54, 55, 55, 56, 27, 57, 56, 57, 28, 58, 29, 59, 58, 59, 30, 60, 31, 61, 60, 61, 32, 62, 33, 63, 62, 63, 34, 64, 64, 65, 65, 66, 66, 67, 67, 68, 35, 69, 68, 69, 17, 70, 36, 71, 70, 71, 36, 72, 37, 73, 72, 73, 38, 74, 39, 75, 74, 75, 43, 76, 20, 77, 76, 77, 44, 78, 45, 79, 78, 79, 47, 80, 23, 81, 80, 81, 46, 82, 47, 83, 82, 83, 50, 84, 51, 85, 84, 85, 56, 86, 57, 87, 86, 87, 53, 88, 54, 89, 88, 89, 54, 90, 55, 91, 90, 91, 55, 92, 56, 93, 92, 93, 58, 94, 59, 95, 94, 95, 62, 96, 63, 97, 96, 97, 64, 98, 65, 99, 98, 99, 66, 100, 67, 101, 100, 101, 67, 102, 68, 103, 102, 103, 65, 104, 66, 105, 104, 105, 71, 106, 36, 107, 106, 107, 74, 108, 75, 109, 108, 109, 78, 110, 79, 111, 110, 111, 79, 112, 45, 113, 112, 113, 82, 114, 83, 115, 114, 115, 86, 116, 87, 117, 116, 117, 53, 118, 88, 119, 118, 119, 88, 120, 89, 121, 120, 121, 90, 122, 91, 123, 122, 123, 91, 124, 55, 125, 124, 125, 92, 126, 93, 127, 126, 127, 94, 128, 95, 129, 128, 129, 98, 130, 99, 131, 130, 131, 100, 132, 101, 133, 132, 133, 66, 134, 100, 135, 134, 135, 103, 136, 68, 137, 136, 137, 102, 138, 103, 139, 138, 139, 104, 140, 105, 141, 140, 141, 108, 142, 109, 143, 142, 143, 111, 144, 79, 145, 144, 145, 112, 146, 113, 147, 146, 147, 119, 148, 88, 149, 148, 149, 120, 150, 121, 151, 150, 151, 122, 152, 123, 153, 152, 153, 126, 154, 127, 155, 154, 155, 128, 156, 129, 157, 156, 157, 132, 158, 133, 159, 158, 159, 103, 160, 136, 161, 160, 161, 138, 162, 139, 163, 162, 163, 140, 164, 141, 165, 164, 165, 144, 166, 145, 167, 166, 167, 153, 168, 123, 169, 168, 169];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [13, 12, 28, 29], [5, 1, 0, 4], [0, 12, 13, 4], [5, 4, 14, 15], [20, 8, 42, 43], [39, 38, 74, 75], [7, 17, 36, 37], [4, 13, 30, 31], [0, 3, 6, 7], [5, 15, 32, 33], [29, 28, 58, 59], [63, 33, 32, 62], [2, 1, 8, 9], [35, 34, 64, 65, 66, 67, 68, 69], [7, 6, 16, 17], [10, 2, 24, 25], [17, 70, 71, 36], [3, 2, 10, 11], [37, 36, 72, 73], [15, 14, 34, 35], [9, 8, 20, 21], [31, 30, 60, 61], [20, 43, 76, 77], [2, 9, 22, 23], [17, 16, 38, 39], [23, 22, 46, 47], [108, 142, 143, 109], [3, 18, 19, 6], [58, 94, 95, 59], [128, 156, 157, 129], [2, 23, 48, 49], [25, 24, 50, 51], [65, 64, 98, 99], [67, 66, 100, 101], [21, 20, 44, 45], [87, 86, 116, 117], [36, 71, 106, 107], [11, 10, 26, 27], [137, 68, 103, 136], [27, 26, 52, 53, 54, 55, 56, 57], [23, 47, 80, 81], [45, 44, 78, 79], [18, 40, 41, 19], [94, 128, 129, 95], [63, 62, 96, 97], [79, 78, 110, 111], [68, 67, 102, 103], [57, 56, 86, 87], [45, 79, 112, 113], [66, 65, 104, 105], [54, 53, 88, 89], [99, 98, 130, 131], [88, 53, 118, 119], [91, 90, 122, 123], [75, 74, 108, 109], [47, 46, 82, 83], [51, 50, 84, 85], [113, 112, 146, 147], [105, 104, 140, 141], [127, 126, 154, 155], [136, 103, 160, 161], [101, 100, 132, 133], [93, 92, 126, 127], [79, 111, 144, 145], [89, 88, 120, 121], [66, 134, 135, 100], [103, 102, 138, 139], [55, 54, 90, 91], [56, 55, 92, 93], [121, 120, 150, 151], [83, 82, 114, 115], [123, 153, 168, 169], [145, 144, 166, 167], [164, 165, 141, 140], [88, 119, 148, 149], [158, 159, 133, 132], [55, 91, 124, 125], [162, 163, 139, 138], [123, 122, 152, 153]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[123,153],
      [145,144],
      [141,140],
      [139,138],
      [136,103],
      [133,132],
      [129,128],
      [127,126],
      [123,122],
      [121,120],
      [88,119],
      [113,112],
      [79,111],
      [109,108],
      [105,104],
      [103,102],
      [68,103],
      [100,66],
      [101,100],
      [99,98],
      [95,94],
      [93,92],
      [55,91],
      [91,90],
      [89,88],
      [88,53],
      [87,86],
      [83,82],
      [45,79],
      [79,78],
      [75,74],
      [36,71],
      [66,65],
      [68,67],
      [67,66],
      [65,64],
      [63,62],
      [59,58],
      [56,55],
      [55,54],
      [54,53],
      [57,56],
      [51,50],
      [47,46],
      [23,47],
      [45,44],
      [20,43],
      [39,38],
      [37,36],
      [36,17],
      [35,34],
      [33,32],
      [31,30],
      [29,28],
      [27,26],
      [25,24],
      [2,23],
      [23,22],
      [21,20],
      [20,8],
      [19,18],
      [17,16],
      [7,17],
      [15,14],
      [5,15],
      [4,13],
      [13,12],
      [11,10],
      [10,2],
      [2,9],
      [9,8],
      [6,3],
      [7,6],
      [5,4],
      [4,0],
      [3,2],
      [2,1],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.59123023255509,
      2.90944470928137,
      2.45256960711905,
      2.54024559403452,
      2.93601778387624,
      2.45256960711905,
      2.60463660708195,
      2.45256960711905,
      2.45256960711905,
      2.54024559403452,
      2.93601778387624,
      2.90944470928137,
      2.83487698458252,
      2.60463660708195,
      3.07743468994721,
      3.05751080536835,
      2.38239504059996,
      2.87124227709102,
      3.07743468994721,
      3.05751080536835,
      2.93601778387624,
      3.07743468994721,
      2.87124227709102,
      3.07743468994721,
      3.05751080536835,
      2.38239504059996,
      3.05751080536835,
      2.93601778387624,
      2.63492190559196,
      2.93601778387624,
      2.93601778387624,
      2.90944470928137,
      2.55790350609871,
      2.53381284400377,
      2.55790350609871,
      2.53381284400377,
      3.07467001405649,
      2.81820606165922,
      2.55790350609871,
      2.55790350609871,
      2.53381284400377,
      2.53381284400377,
      3.07467001405649,
      2.60463660708195,
      2.54024559403452,
      2.60463660708195,
      3.05969225357808,
      2.81820606165922,
      2.90944470928137,
      2.90944470928137,
      2.55790350609871,
      2.87124227709102,
      3.05751080536835,
      2.93601778387624,
      2.55790350609871,
      2.87124227709102,
      2.45256960711905,
      3.02538296001629,
      3.02538296001629,
      2.45256960711905,
      3.05751080536835,
      2.93601778387624,
      2.63492190559196,
      3.07743468994721,
      2.84480948981434,
      2.54024559403452,
      2.60463660708195,
      3.07743468994721,
      2.84480948981434,
      2.59123023255509,
      2.59123023255509,
      2.54024559403452,
      2.60463660708195,
      2.45256960711905,
      3.02538296001629,
      2.45256960711905,
      2.59123023255509,
      3.02538296001628,
      2.67374031520883];

obj0.userData.subtrees = [[168,169],
      [166,167],
      [164,165],
      [162,163],
      [160,161],
      [158,159],
      [156,157],
      [154,155],
      [152,153,168,169],
      [150,151],
      [148,149],
      [146,147],
      [144,145,166,167],
      [142,143],
      [140,141,164,165],
      [138,139,162,163],
      [136,137,160,161],
      [134,135],
      [132,133,158,159],
      [130,131],
      [128,129,156,157],
      [126,127,154,155],
      [124,125],
      [122,123,152,153,168,169],
      [120,121,150,151],
      [118,119,148,149],
      [116,117],
      [114,115],
      [112,113,146,147],
      [110,111,144,145,166,167],
      [108,109,142,143],
      [106,107],
      [104,105,140,141,164,165],
      [102,103,136,137,138,139,160,161,162,163],
      [100,101,132,133,134,135,158,159],
      [98,99,130,131],
      [96,97],
      [94,95,128,129,156,157],
      [92,93,126,127,154,155],
      [90,91,122,123,124,125,152,153,168,169],
      [88,89,118,119,120,121,148,149,150,151],
      [86,87,116,117],
      [84,85],
      [82,83,114,115],
      [80,81],
      [78,79,110,111,112,113,144,145,146,147,166,167],
      [76,77],
      [74,75,108,109,142,143],
      [72,73],
      [70,71,106,107],
      [64,65,66,67,68,69,98,99,100,101,102,103,104,105,130,131,132,133,134,135,136,137,138,139,140,141,158,159,160,161,162,163,164,165],
      [62,63,96,97],
      [60,61],
      [58,59,94,95,128,129,156,157],
      [52,53,54,55,56,57,86,87,88,89,90,91,92,93,116,117,118,119,120,121,122,123,124,125,126,127,148,149,150,151,152,153,154,155,168,169],
      [50,51,84,85],
      [48,49],
      [46,47,80,81,82,83,114,115],
      [44,45,78,79,110,111,112,113,144,145,146,147,166,167],
      [42,43,76,77],
      [40,41],
      [38,39,74,75,108,109,142,143],
      [36,37,70,71,72,73,106,107],
      [34,35,64,65,66,67,68,69,98,99,100,101,102,103,104,105,130,131,132,133,134,135,136,137,138,139,140,141,158,159,160,161,162,163,164,165],
      [32,33,62,63,96,97],
      [30,31,60,61],
      [28,29,58,59,94,95,128,129,156,157],
      [26,27,52,53,54,55,56,57,86,87,88,89,90,91,92,93,116,117,118,119,120,121,122,123,124,125,126,127,148,149,150,151,152,153,154,155,168,169],
      [24,25,50,51,84,85],
      [22,23,46,47,48,49,80,81,82,83,114,115],
      [20,21,42,43,44,45,76,77,78,79,110,111,112,113,144,145,146,147,166,167],
      [18,19,40,41],
      [16,17,36,37,38,39,70,71,72,73,74,75,106,107,108,109,142,143],
      [14,15,32,33,34,35,62,63,64,65,66,67,68,69,96,97,98,99,100,101,102,103,104,105,130,131,132,133,134,135,136,137,138,139,140,141,158,159,160,161,162,163,164,165],
      [12,13,28,29,30,31,58,59,60,61,94,95,128,129,156,157],
      [10,11,24,25,26,27,50,51,52,53,54,55,56,57,84,85,86,87,88,89,90,91,92,93,116,117,118,119,120,121,122,123,124,125,126,127,148,149,150,151,152,153,154,155,168,169],
      [8,9,20,21,22,23,42,43,44,45,46,47,48,49,76,77,78,79,80,81,82,83,110,111,112,113,114,115,144,145,146,147,166,167],
      [6,7,16,17,18,19,36,37,38,39,40,41,70,71,72,73,74,75,106,107,108,109,142,143],
      [4,5,12,13,14,15,28,29,30,31,32,33,34,35,58,59,60,61,62,63,64,65,66,67,68,69,94,95,96,97,98,99,100,101,102,103,104,105,128,129,130,131,132,133,134,135,136,137,138,139,140,141,156,157,158,159,160,161,162,163,164,165]];

obj0.userData.polytoperoot = [[-1.0147190617354,-0.173334709163848,-0.280461450857185],
      [-4.24271745787398,-1.15383699528376,-2.33368434480773],
      [1.1524109297624,-1.01519733426245,-1.59318107302493]];

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
