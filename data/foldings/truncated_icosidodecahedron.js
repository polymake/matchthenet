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
obj0.userData.points.push(new PMPoint(0.262992, 0, 0));
obj0.userData.points.push(new PMPoint(0.394488, 0.227758, 0));
obj0.userData.points.push(new PMPoint(0.262992, 0.455516, 0));
obj0.userData.points.push(new PMPoint(0, 0.455516, 0));
obj0.userData.points.push(new PMPoint(-0.131496, 0.227758, 0));
obj0.userData.points.push(new PMPoint(0, -0.262992, 0));
obj0.userData.points.push(new PMPoint(0.262992, -0.262992, 0));
obj0.userData.points.push(new PMPoint(-0.227758, 0.587012, 0));
obj0.userData.points.push(new PMPoint(-0.359254, 0.359254, 0));
obj0.userData.points.push(new PMPoint(-0.371751, 0.334726, 0));
obj0.userData.points.push(new PMPoint(-0.628997, 0.280047, 0));
obj0.userData.points.push(new PMPoint(-0.804973, 0.084606, 0));
obj0.userData.points.push(new PMPoint(-0.832463, -0.176945, 0));
obj0.userData.points.push(new PMPoint(-0.700967, -0.404703, 0));
obj0.userData.points.push(new PMPoint(-0.460711, -0.511672, 0));
obj0.userData.points.push(new PMPoint(-0.203466, -0.456993, 0));
obj0.userData.points.push(new PMPoint(-0.0274902, -0.261551, 0));
obj0.userData.points.push(new PMPoint(0.475757, 0.610099, 0));
obj0.userData.points.push(new PMPoint(0.557026, 0.860219, 0));
obj0.userData.points.push(new PMPoint(0.475757, 1.11034, 0));
obj0.userData.points.push(new PMPoint(0.262992, 1.26492, 0));
obj0.userData.points.push(new PMPoint(0, 1.26492, 0));
obj0.userData.points.push(new PMPoint(-0.212765, 1.11034, 0));
obj0.userData.points.push(new PMPoint(-0.294034, 0.860219, 0));
obj0.userData.points.push(new PMPoint(-0.212765, 0.610099, 0));
obj0.userData.points.push(new PMPoint(0.622246, 0.359254, 0));
obj0.userData.points.push(new PMPoint(0.49075, 0.587012, 0));
obj0.userData.points.push(new PMPoint(0.290482, -0.261551, 0));
obj0.userData.points.push(new PMPoint(0.466458, -0.456993, 0));
obj0.userData.points.push(new PMPoint(0.723704, -0.511672, 0));
obj0.userData.points.push(new PMPoint(0.963959, -0.404703, 0));
obj0.userData.points.push(new PMPoint(1.09546, -0.176945, 0));
obj0.userData.points.push(new PMPoint(1.06796, 0.084606, 0));
obj0.userData.points.push(new PMPoint(0.891989, 0.280047, 0));
obj0.userData.points.push(new PMPoint(0.634744, 0.334726, 0));
obj0.userData.points.push(new PMPoint(-0.131496, -0.49075, 0));
obj0.userData.points.push(new PMPoint(0, -0.718508, 0));
obj0.userData.points.push(new PMPoint(0.262992, -0.718508, 0));
obj0.userData.points.push(new PMPoint(0.394488, -0.49075, 0));
obj0.userData.points.push(new PMPoint(-0.359254, 0.81477, 0));
obj0.userData.points.push(new PMPoint(-0.622246, 0.81477, 0));
obj0.userData.points.push(new PMPoint(-0.753742, 0.587012, 0));
obj0.userData.points.push(new PMPoint(-0.622246, 0.359254, 0));
obj0.userData.points.push(new PMPoint(-0.406032, -0.768917, 0));
obj0.userData.points.push(new PMPoint(-0.148787, -0.714238, 0));
obj0.userData.points.push(new PMPoint(-0.824438, 0.456023, 0));
obj0.userData.points.push(new PMPoint(-1.00041, 0.260582, 0));
obj0.userData.points.push(new PMPoint(-0.913732, -0.559286, 0));
obj0.userData.points.push(new PMPoint(-0.886242, -0.820838, 0));
obj0.userData.points.push(new PMPoint(-0.645986, -0.927806, 0));
obj0.userData.points.push(new PMPoint(-0.433221, -0.773223, 0));
obj0.userData.points.push(new PMPoint(-1.01774, 0.239189, 0));
obj0.userData.points.push(new PMPoint(-1.25799, 0.13222, 0));
obj0.userData.points.push(new PMPoint(-1.28548, -0.129331, 0));
obj0.userData.points.push(new PMPoint(-1.07272, -0.283914, 0));
obj0.userData.points.push(new PMPoint(-1.06022, -0.308442, 0));
obj0.userData.points.push(new PMPoint(-0.928725, -0.536199, 0));
obj0.userData.points.push(new PMPoint(-0.462886, 1.19161, 0));
obj0.userData.points.push(new PMPoint(-0.544155, 0.941488, 0));
obj0.userData.points.push(new PMPoint(-0.0274902, 1.52647, 0));
obj0.userData.points.push(new PMPoint(-0.267745, 1.63344, 0));
obj0.userData.points.push(new PMPoint(-0.480511, 1.47886, 0));
obj0.userData.points.push(new PMPoint(-0.45302, 1.21731, 0));
obj0.userData.points.push(new PMPoint(0.262992, 1.52791, 0));
obj0.userData.points.push(new PMPoint(0, 1.52791, 0));
obj0.userData.points.push(new PMPoint(0.716013, 1.21731, 0));
obj0.userData.points.push(new PMPoint(0.743503, 1.47886, 0));
obj0.userData.points.push(new PMPoint(0.530738, 1.63344, 0));
obj0.userData.points.push(new PMPoint(0.290482, 1.52647, 0));
obj0.userData.points.push(new PMPoint(0.807147, 0.941488, 0));
obj0.userData.points.push(new PMPoint(0.725878, 1.19161, 0));
obj0.userData.points.push(new PMPoint(0.651733, 0.414657, 0));
obj0.userData.points.push(new PMPoint(0.908979, 0.469337, 0));
obj0.userData.points.push(new PMPoint(0.990248, 0.719457, 0));
obj0.userData.points.push(new PMPoint(0.814272, 0.914898, 0));
obj0.userData.points.push(new PMPoint(0.411779, -0.714238, 0));
obj0.userData.points.push(new PMPoint(0.669024, -0.768917, 0));
obj0.userData.points.push(new PMPoint(0.696213, -0.773223, 0));
obj0.userData.points.push(new PMPoint(0.908979, -0.927806, 0));
obj0.userData.points.push(new PMPoint(1.14923, -0.820838, 0));
obj0.userData.points.push(new PMPoint(1.17672, -0.559286, 0));
obj0.userData.points.push(new PMPoint(1.19172, -0.536199, 0));
obj0.userData.points.push(new PMPoint(1.32321, -0.308442, 0));
obj0.userData.points.push(new PMPoint(1.33571, -0.283914, 0));
obj0.userData.points.push(new PMPoint(1.54848, -0.129331, 0));
obj0.userData.points.push(new PMPoint(1.52099, 0.13222, 0));
obj0.userData.points.push(new PMPoint(1.28073, 0.239189, 0));
obj0.userData.points.push(new PMPoint(1.26341, 0.260582, 0));
obj0.userData.points.push(new PMPoint(1.08743, 0.456023, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -0.873091, 0));
obj0.userData.points.push(new PMPoint(-0.294034, -1.12321, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -1.37333, 0));
obj0.userData.points.push(new PMPoint(0, -1.52791, 0));
obj0.userData.points.push(new PMPoint(0.262992, -1.52791, 0));
obj0.userData.points.push(new PMPoint(0.475757, -1.37333, 0));
obj0.userData.points.push(new PMPoint(0.557026, -1.12321, 0));
obj0.userData.points.push(new PMPoint(0.475757, -0.873091, 0));
obj0.userData.points.push(new PMPoint(-0.649736, 1.07632, 0));
obj0.userData.points.push(new PMPoint(-0.825712, 1.27176, 0));
obj0.userData.points.push(new PMPoint(-1.08296, 1.32644, 0));
obj0.userData.points.push(new PMPoint(-1.32321, 1.21947, 0));
obj0.userData.points.push(new PMPoint(-1.45471, 0.991715, 0));
obj0.userData.points.push(new PMPoint(-1.42722, 0.730164, 0));
obj0.userData.points.push(new PMPoint(-1.25124, 0.534722, 0));
obj0.userData.points.push(new PMPoint(-0.993998, 0.480043, 0));
obj0.userData.points.push(new PMPoint(-0.99321, -1.06109, 0));
obj0.userData.points.push(new PMPoint(-0.752955, -1.16806, 0));
obj0.userData.points.push(new PMPoint(-1.08971, -0.363845, 0));
obj0.userData.points.push(new PMPoint(-1.34695, -0.309166, 0));
obj0.userData.points.push(new PMPoint(-1.58721, -0.416134, 0));
obj0.userData.points.push(new PMPoint(-1.7187, -0.643892, 0));
obj0.userData.points.push(new PMPoint(-1.69121, -0.905444, 0));
obj0.userData.points.push(new PMPoint(-1.51524, -1.10089, 0));
obj0.userData.points.push(new PMPoint(-1.25799, -1.15556, 0));
obj0.userData.points.push(new PMPoint(-1.01774, -1.0486, 0));
obj0.userData.points.push(new PMPoint(-1.51954, 0.159711, 0));
obj0.userData.points.push(new PMPoint(-1.54703, -0.101841, 0));
obj0.userData.points.push(new PMPoint(-0.422328, 1.84621, 0));
obj0.userData.points.push(new PMPoint(-0.635094, 1.69162, 0));
obj0.userData.points.push(new PMPoint(0.229755, 1.58115, 0));
obj0.userData.points.push(new PMPoint(0.405731, 1.77659, 0));
obj0.userData.points.push(new PMPoint(0.433221, 2.03815, 0));
obj0.userData.points.push(new PMPoint(0.301725, 2.2659, 0));
obj0.userData.points.push(new PMPoint(0.0614699, 2.37287, 0));
obj0.userData.points.push(new PMPoint(-0.195775, 2.31819, 0));
obj0.userData.points.push(new PMPoint(-0.371751, 2.12275, 0));
obj0.userData.points.push(new PMPoint(-0.399242, 1.8612, 0));
obj0.userData.points.push(new PMPoint(0.898086, 1.69162, 0));
obj0.userData.points.push(new PMPoint(0.685321, 1.84621, 0));
obj0.userData.points.push(new PMPoint(0.847509, 0.98955, 0));
obj0.userData.points.push(new PMPoint(1.08776, 0.882582, 0));
obj0.userData.points.push(new PMPoint(1.34501, 0.937261, 0));
obj0.userData.points.push(new PMPoint(1.52099, 1.1327, 0));
obj0.userData.points.push(new PMPoint(1.54848, 1.39425, 0));
obj0.userData.points.push(new PMPoint(1.41698, 1.62201, 0));
obj0.userData.points.push(new PMPoint(1.17672, 1.72898, 0));
obj0.userData.points.push(new PMPoint(0.919479, 1.6743, 0));
obj0.userData.points.push(new PMPoint(1.01595, -1.16806, 0));
obj0.userData.points.push(new PMPoint(1.2562, -1.06109, 0));
obj0.userData.points.push(new PMPoint(1.28073, -1.0486, 0));
obj0.userData.points.push(new PMPoint(1.52099, -1.15556, 0));
obj0.userData.points.push(new PMPoint(1.77823, -1.10089, 0));
obj0.userData.points.push(new PMPoint(1.95421, -0.905444, 0));
obj0.userData.points.push(new PMPoint(1.9817, -0.643892, 0));
obj0.userData.points.push(new PMPoint(1.8502, -0.416134, 0));
obj0.userData.points.push(new PMPoint(1.60995, -0.309166, 0));
obj0.userData.points.push(new PMPoint(1.3527, -0.363845, 0));
obj0.userData.points.push(new PMPoint(1.81003, -0.101841, 0));
obj0.userData.points.push(new PMPoint(1.78254, 0.159711, 0));
obj0.userData.points.push(new PMPoint(0, -1.79091, 0));
obj0.userData.points.push(new PMPoint(0.262992, -1.79091, 0));
obj0.userData.points.push(new PMPoint(-0.45302, -1.4803, 0));
obj0.userData.points.push(new PMPoint(-0.480511, -1.74185, 0));
obj0.userData.points.push(new PMPoint(-0.267745, -1.89643, 0));
obj0.userData.points.push(new PMPoint(-0.0274902, -1.78947, 0));
obj0.userData.points.push(new PMPoint(0.290482, -1.78947, 0));
obj0.userData.points.push(new PMPoint(0.530738, -1.89643, 0));
obj0.userData.points.push(new PMPoint(0.743503, -1.74185, 0));
obj0.userData.points.push(new PMPoint(0.716013, -1.4803, 0));
obj0.userData.points.push(new PMPoint(-1.69496, 1.09868, 0));
obj0.userData.points.push(new PMPoint(-1.90773, 0.944101, 0));
obj0.userData.points.push(new PMPoint(-1.88024, 0.682549, 0));
obj0.userData.points.push(new PMPoint(-1.63998, 0.575581, 0));
obj0.userData.points.push(new PMPoint(-1.55097, 1.35097, 0));
obj0.userData.points.push(new PMPoint(-1.68247, 1.12321, 0));
obj0.userData.points.push(new PMPoint(-1.05547, 1.58799, 0));
obj0.userData.points.push(new PMPoint(-1.26823, 1.74258, 0));
obj0.userData.points.push(new PMPoint(-1.50849, 1.63561, 0));
obj0.userData.points.push(new PMPoint(-1.53598, 1.37406, 0));
obj0.userData.points.push(new PMPoint(-1.56992, -1.35813, 0));
obj0.userData.points.push(new PMPoint(-1.31267, -1.41281, 0));
obj0.userData.points.push(new PMPoint(-1.98026, -0.671382, 0));
obj0.userData.points.push(new PMPoint(-1.95277, -0.932934, 0));
obj0.userData.points.push(new PMPoint(-1.94846, -0.960123, 0));
obj0.userData.points.push(new PMPoint(-2.02973, -1.21024, 0));
obj0.userData.points.push(new PMPoint(-1.85375, -1.40568, 0));
obj0.userData.points.push(new PMPoint(-1.59651, -1.35101, 0));
obj0.userData.points.push(new PMPoint(-0.391217, 2.49417, 0));
obj0.userData.points.push(new PMPoint(-0.567193, 2.29873, 0));
obj0.userData.points.push(new PMPoint(0.142739, 2.62299, 0));
obj0.userData.points.push(new PMPoint(-0.0332372, 2.81843, 0));
obj0.userData.points.push(new PMPoint(-0.290482, 2.76375, 0));
obj0.userData.points.push(new PMPoint(-0.371751, 2.51363, 0));
obj0.userData.points.push(new PMPoint(0.408694, 2.50616, 0));
obj0.userData.points.push(new PMPoint(0.168438, 2.61313, 0));
obj0.userData.points.push(new PMPoint(0.696213, 2.03815, 0));
obj0.userData.points.push(new PMPoint(0.82771, 2.2659, 0));
obj0.userData.points.push(new PMPoint(0.696213, 2.49366, 0));
obj0.userData.points.push(new PMPoint(0.433221, 2.49366, 0));
obj0.userData.points.push(new PMPoint(1.52395, 1.86227, 0));
obj0.userData.points.push(new PMPoint(1.28369, 1.96924, 0));
obj0.userData.points.push(new PMPoint(1.81147, 1.39425, 0));
obj0.userData.points.push(new PMPoint(1.94296, 1.62201, 0));
obj0.userData.points.push(new PMPoint(1.81147, 1.84977, 0));
obj0.userData.points.push(new PMPoint(1.54848, 1.84977, 0));
obj0.userData.points.push(new PMPoint(1.8595, -1.35101, 0));
obj0.userData.points.push(new PMPoint(2.11674, -1.40568, 0));
obj0.userData.points.push(new PMPoint(2.29272, -1.21024, 0));
obj0.userData.points.push(new PMPoint(2.21145, -0.960123, 0));
obj0.userData.points.push(new PMPoint(1.57566, -1.41281, 0));
obj0.userData.points.push(new PMPoint(1.83291, -1.35813, 0));
obj0.userData.points.push(new PMPoint(2.21576, -0.932934, 0));
obj0.userData.points.push(new PMPoint(2.24325, -0.671382, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -1.94549, 0));
obj0.userData.points.push(new PMPoint(-0.294034, -2.19561, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -2.44573, 0));
obj0.userData.points.push(new PMPoint(0, -2.60031, 0));
obj0.userData.points.push(new PMPoint(0.262992, -2.60031, 0));
obj0.userData.points.push(new PMPoint(0.475757, -2.44573, 0));
obj0.userData.points.push(new PMPoint(0.557026, -2.19561, 0));
obj0.userData.points.push(new PMPoint(0.475757, -1.94549, 0));
obj0.userData.points.push(new PMPoint(-1.6137, 1.3488, 0));
obj0.userData.points.push(new PMPoint(-1.69496, 1.59892, 0));
obj0.userData.points.push(new PMPoint(-1.90773, 1.75351, 0));
obj0.userData.points.push(new PMPoint(-2.17072, 1.75351, 0));
obj0.userData.points.push(new PMPoint(-2.38349, 1.59892, 0));
obj0.userData.points.push(new PMPoint(-2.46476, 1.3488, 0));
obj0.userData.points.push(new PMPoint(-2.38349, 1.09868, 0));
obj0.userData.points.push(new PMPoint(-2.17072, 0.944101, 0));
obj0.userData.points.push(new PMPoint(-2.22517, -1.38622, 0));
obj0.userData.points.push(new PMPoint(-2.04919, -1.58166, 0));
obj0.userData.points.push(new PMPoint(-0.0879163, 3.07568, 0));
obj0.userData.points.push(new PMPoint(-0.345161, 3.021, 0));
obj0.userData.points.push(new PMPoint(0.399984, 2.56831, 0));
obj0.userData.points.push(new PMPoint(0.640239, 2.67528, 0));
obj0.userData.points.push(new PMPoint(0.771735, 2.90304, 0));
obj0.userData.points.push(new PMPoint(0.744245, 3.16459, 0));
obj0.userData.points.push(new PMPoint(0.568269, 3.36003, 0));
obj0.userData.points.push(new PMPoint(0.311024, 3.41471, 0));
obj0.userData.points.push(new PMPoint(0.0707687, 3.30774, 0));
obj0.userData.points.push(new PMPoint(-0.0607273, 3.07999, 0));
obj0.userData.points.push(new PMPoint(2.31219, -1.58166, 0));
obj0.userData.points.push(new PMPoint(2.48816, -1.38622, 0));
obj0.userData.points.push(new PMPoint(-0.131496, -2.82807, 0));
obj0.userData.points.push(new PMPoint(0, -3.05583, 0));
obj0.userData.points.push(new PMPoint(0.262992, -3.05583, 0));
obj0.userData.points.push(new PMPoint(0.394488, -2.82807, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 1, 7, 6, 7, 4, 8, 5, 9, 8, 9, 5, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 0, 17, 16, 17, 3, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 4, 25, 24, 25, 2, 26, 3, 27, 26, 27, 1, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 2, 35, 34, 35, 6, 36, 36, 37, 37, 38, 7, 39, 38, 39, 8, 40, 40, 41, 41, 42, 9, 43, 42, 43, 15, 44, 16, 45, 44, 45, 11, 46, 12, 47, 46, 47, 14, 48, 48, 49, 49, 50, 15, 51, 50, 51, 12, 52, 52, 53, 53, 54, 13, 55, 54, 55, 13, 56, 14, 57, 56, 57, 23, 58, 24, 59, 58, 59, 22, 60, 60, 61, 61, 62, 23, 63, 62, 63, 21, 64, 22, 65, 64, 65, 20, 66, 66, 67, 67, 68, 21, 69, 68, 69, 19, 70, 20, 71, 70, 71, 18, 72, 72, 73, 73, 74, 19, 75, 74, 75, 29, 76, 30, 77, 76, 77, 30, 78, 78, 79, 79, 80, 31, 81, 80, 81, 31, 82, 32, 83, 82, 83, 32, 84, 84, 85, 85, 86, 33, 87, 86, 87, 33, 88, 34, 89, 88, 89, 37, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 38, 97, 96, 97, 41, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 42, 105, 104, 105, 49, 106, 50, 107, 106, 107, 48, 108, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 49, 115, 114, 115, 53, 116, 54, 117, 116, 117, 61, 118, 62, 119, 118, 119, 60, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 125, 125, 126, 61, 127, 126, 127, 67, 128, 68, 129, 128, 129, 66, 130, 130, 131, 131, 132, 132, 133, 133, 134, 134, 135, 135, 136, 67, 137, 136, 137, 79, 138, 80, 139, 138, 139, 80, 140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 145, 146, 81, 147, 146, 147, 85, 148, 86, 149, 148, 149, 93, 150, 94, 151, 150, 151, 92, 152, 152, 153, 153, 154, 93, 155, 154, 155, 94, 156, 156, 157, 157, 158, 95, 159, 158, 159, 102, 160, 160, 161, 161, 162, 103, 163, 162, 163, 101, 164, 102, 165, 164, 165, 100, 166, 166, 167, 167, 168, 101, 169, 168, 169, 113, 170, 114, 171, 170, 171, 111, 172, 112, 173, 172, 173, 112, 174, 174, 175, 175, 176, 113, 177, 176, 177, 125, 178, 126, 179, 178, 179, 124, 180, 180, 181, 181, 182, 125, 183, 182, 183, 123, 184, 124, 185, 184, 185, 122, 186, 186, 187, 187, 188, 123, 189, 188, 189, 135, 190, 136, 191, 190, 191, 134, 192, 192, 193, 193, 194, 135, 195, 194, 195, 142, 196, 196, 197, 197, 198, 143, 199, 198, 199, 141, 200, 142, 201, 200, 201, 143, 202, 144, 203, 202, 203, 150, 204, 204, 205, 205, 206, 206, 207, 207, 208, 208, 209, 209, 210, 151, 211, 210, 211, 160, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 217, 217, 218, 161, 219, 218, 219, 175, 220, 176, 221, 220, 221, 181, 222, 182, 223, 222, 223, 180, 224, 224, 225, 225, 226, 226, 227, 227, 228, 228, 229, 229, 230, 181, 231, 230, 231, 197, 232, 198, 233, 232, 233, 207, 234, 234, 235, 235, 236, 208, 237, 236, 237];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [7, 1, 0, 6], [5, 4, 8, 9], [0, 5, 10, 11, 12, 13, 14, 15, 16, 17], [39, 7, 6, 36, 37, 38], [8, 40, 41, 42, 43, 9], [30, 29, 76, 77], [24, 23, 58, 59], [16, 15, 44, 45], [12, 11, 46, 47], [38, 37, 90, 91, 92, 93, 94, 95, 96, 97], [98, 99, 100, 101, 102, 103, 104, 105, 42, 41], [15, 14, 48, 49, 50, 51], [13, 12, 52, 53, 54, 55], [14, 13, 56, 57], [50, 49, 106, 107], [108, 109, 110, 111, 112, 113, 114, 115, 49, 48], [54, 53, 116, 117], [94, 93, 150, 151], [93, 92, 152, 153, 154, 155], [103, 102, 160, 161, 162, 163], [102, 101, 164, 165], [114, 113, 170, 171], [112, 111, 172, 173], [113, 112, 174, 175, 176, 177], [176, 175, 220, 221], [208, 207, 234, 235, 236, 237], [182, 181, 222, 223], [198, 197, 232, 233], [214, 215, 216, 217, 218, 219, 161, 160, 212, 213], [150, 204, 205, 206, 207, 208, 209, 210, 211, 151], [126, 125, 178, 179], [125, 124, 180, 181, 182, 183], [143, 142, 196, 197, 198, 199], [142, 141, 200, 201], [166, 167, 168, 169, 101, 100], [124, 123, 184, 185], [228, 229, 230, 231, 181, 180, 224, 225, 226, 227], [144, 143, 202, 203], [95, 94, 156, 157, 158, 159], [62, 61, 118, 119], [136, 135, 190, 191], [80, 79, 138, 139], [186, 187, 188, 189, 123, 122], [192, 193, 194, 195, 135, 134], [120, 121, 122, 123, 124, 125, 126, 127, 61, 60], [81, 80, 140, 141, 142, 143, 144, 145, 146, 147], [68, 67, 128, 129], [86, 85, 148, 149], [23, 22, 60, 61, 62, 63], [31, 30, 78, 79, 80, 81], [22, 21, 64, 65], [32, 31, 82, 83], [21, 20, 66, 67, 68, 69], [33, 32, 84, 85, 86, 87], [132, 133, 134, 135, 136, 137, 67, 66, 130, 131], [20, 19, 70, 71], [34, 33, 88, 89], [4, 3, 18, 19, 20, 21, 22, 23, 24, 25], [72, 73, 74, 75, 19, 18], [3, 2, 26, 27], [2, 1, 28, 29, 30, 31, 32, 33, 34, 35]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xBA3B26, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[208,207],
      [198,197],
      [181,180],
      [182,181],
      [176,175],
      [161,160],
      [151,150],
      [144,143],
      [142,141],
      [143,142],
      [135,134],
      [136,135],
      [123,122],
      [124,123],
      [125,124],
      [126,125],
      [113,112],
      [112,111],
      [114,113],
      [101,100],
      [102,101],
      [103,102],
      [95,94],
      [93,92],
      [94,93],
      [86,85],
      [81,80],
      [80,79],
      [67,66],
      [68,67],
      [61,60],
      [62,61],
      [54,53],
      [49,48],
      [50,49],
      [42,41],
      [38,37],
      [34,33],
      [33,32],
      [32,31],
      [31,30],
      [30,29],
      [19,18],
      [20,19],
      [21,20],
      [22,21],
      [23,22],
      [24,23],
      [14,13],
      [13,12],
      [15,14],
      [12,11],
      [16,15],
      [9,8],
      [7,6],
      [2,1],
      [3,2],
      [4,3],
      [0,5],
      [5,4],
      [1,0]];

obj0.userData.angles = [2.48923451380542,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.58801829469274,
      2.48923451380542,
      2.48923451380543,
      2.58801829469278,
      2.48923451380543,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469274,
      2.58801829469274,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.58801829469274,
      2.77672882547631,
      2.48923451380543,
      2.77672882547632,
      2.48923451380543,
      2.7767288254763,
      2.48923451380542,
      2.77672882547631,
      2.77672882547632,
      2.48923451380544,
      2.77672882547632,
      2.48923451380542,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469274,
      2.48923451380542,
      2.58801829469274,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.58801829469273,
      2.48923451380541,
      2.48923451380542,
      2.58801829469274,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631];

obj0.userData.subtrees = [[234,235,236,237],
      [232,233],
      [224,225,226,227,228,229,230,231],
      [222,223],
      [220,221],
      [212,213,214,215,216,217,218,219],
      [204,205,206,207,208,209,210,211,234,235,236,237],
      [202,203],
      [200,201],
      [196,197,198,199,232,233],
      [192,193,194,195],
      [190,191],
      [186,187,188,189],
      [184,185],
      [180,181,182,183,222,223,224,225,226,227,228,229,230,231],
      [178,179],
      [174,175,176,177,220,221],
      [172,173],
      [170,171],
      [166,167,168,169],
      [164,165],
      [160,161,162,163,212,213,214,215,216,217,218,219],
      [156,157,158,159],
      [152,153,154,155],
      [150,151,204,205,206,207,208,209,210,211,234,235,236,237],
      [148,149],
      [140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [138,139],
      [130,131,132,133,134,135,136,137,190,191,192,193,194,195],
      [128,129],
      [120,121,122,123,124,125,126,127,178,179,180,181,182,183,184,185,186,187,188,189,222,223,224,225,226,227,228,229,230,231],
      [118,119],
      [116,117],
      [108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [106,107],
      [98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [88,89],
      [84,85,86,87,148,149],
      [82,83],
      [78,79,80,81,138,139,140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [76,77],
      [72,73,74,75],
      [70,71],
      [66,67,68,69,128,129,130,131,132,133,134,135,136,137,190,191,192,193,194,195],
      [64,65],
      [60,61,62,63,118,119,120,121,122,123,124,125,126,127,178,179,180,181,182,183,184,185,186,187,188,189,222,223,224,225,226,227,228,229,230,231],
      [58,59],
      [56,57],
      [52,53,54,55,116,117],
      [48,49,50,51,106,107,108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [46,47],
      [44,45],
      [40,41,42,43,98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [28,29,30,31,32,33,34,35,76,77,78,79,80,81,82,83,84,85,86,87,88,89,138,139,140,141,142,143,144,145,146,147,148,149,196,197,198,199,200,201,202,203,232,233],
      [26,27],
      [18,19,20,21,22,23,24,25,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,222,223,224,225,226,227,228,229,230,231],
      [10,11,12,13,14,15,16,17,44,45,46,47,48,49,50,51,52,53,54,55,56,57,106,107,108,109,110,111,112,113,114,115,116,117,170,171,172,173,174,175,176,177,220,221],
      [8,9,40,41,42,43,98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [6,7,36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237]];

obj0.userData.polytoperoot = [[0.820018540651645,0.131496087536302,-0.55702636557904],
      [2.61803398874987,3.45504931266056e-15,-1],
      [0.131496087536303,-0.638295417064101,0.344261226557668]];

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
