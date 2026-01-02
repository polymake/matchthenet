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
obj0.userData.points.push(new PMPoint(0.290482, -0.261551, 0));
obj0.userData.points.push(new PMPoint(0.466458, -0.456993, 0));
obj0.userData.points.push(new PMPoint(0.723704, -0.511672, 0));
obj0.userData.points.push(new PMPoint(0.963959, -0.404703, 0));
obj0.userData.points.push(new PMPoint(1.09546, -0.176945, 0));
obj0.userData.points.push(new PMPoint(1.06796, 0.084606, 0));
obj0.userData.points.push(new PMPoint(0.891989, 0.280047, 0));
obj0.userData.points.push(new PMPoint(0.634744, 0.334726, 0));
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
obj0.userData.points.push(new PMPoint(0.622246, 0.359254, 0));
obj0.userData.points.push(new PMPoint(0.49075, 0.587012, 0));
obj0.userData.points.push(new PMPoint(0.475757, 0.610099, 0));
obj0.userData.points.push(new PMPoint(0.557026, 0.860219, 0));
obj0.userData.points.push(new PMPoint(0.475757, 1.11034, 0));
obj0.userData.points.push(new PMPoint(0.262992, 1.26492, 0));
obj0.userData.points.push(new PMPoint(0, 1.26492, 0));
obj0.userData.points.push(new PMPoint(-0.212765, 1.11034, 0));
obj0.userData.points.push(new PMPoint(-0.294034, 0.860219, 0));
obj0.userData.points.push(new PMPoint(-0.212765, 0.610099, 0));
obj0.userData.points.push(new PMPoint(-0.131496, -0.49075, 0));
obj0.userData.points.push(new PMPoint(0, -0.718508, 0));
obj0.userData.points.push(new PMPoint(0.262992, -0.718508, 0));
obj0.userData.points.push(new PMPoint(0.394488, -0.49075, 0));
obj0.userData.points.push(new PMPoint(0.411779, -0.714238, 0));
obj0.userData.points.push(new PMPoint(0.669024, -0.768917, 0));
obj0.userData.points.push(new PMPoint(1.06796, 0.475489, 0));
obj0.userData.points.push(new PMPoint(0.986696, 0.725609, 0));
obj0.userData.points.push(new PMPoint(0.729451, 0.780288, 0));
obj0.userData.points.push(new PMPoint(0.553475, 0.584847, 0));
obj0.userData.points.push(new PMPoint(0.696213, -0.773223, 0));
obj0.userData.points.push(new PMPoint(0.908979, -0.927806, 0));
obj0.userData.points.push(new PMPoint(1.14923, -0.820838, 0));
obj0.userData.points.push(new PMPoint(1.17672, -0.559286, 0));
obj0.userData.points.push(new PMPoint(1.33571, -0.283914, 0));
obj0.userData.points.push(new PMPoint(1.54848, -0.129331, 0));
obj0.userData.points.push(new PMPoint(1.52099, 0.13222, 0));
obj0.userData.points.push(new PMPoint(1.28073, 0.239189, 0));
obj0.userData.points.push(new PMPoint(1.19172, -0.536199, 0));
obj0.userData.points.push(new PMPoint(1.32321, -0.308442, 0));
obj0.userData.points.push(new PMPoint(1.26341, 0.260582, 0));
obj0.userData.points.push(new PMPoint(1.08743, 0.456023, 0));
obj0.userData.points.push(new PMPoint(-0.359254, 0.81477, 0));
obj0.userData.points.push(new PMPoint(-0.622246, 0.81477, 0));
obj0.userData.points.push(new PMPoint(-0.753742, 0.587012, 0));
obj0.userData.points.push(new PMPoint(-0.622246, 0.359254, 0));
obj0.userData.points.push(new PMPoint(-1.06022, -0.308442, 0));
obj0.userData.points.push(new PMPoint(-0.928725, -0.536199, 0));
obj0.userData.points.push(new PMPoint(-0.406032, -0.768917, 0));
obj0.userData.points.push(new PMPoint(-0.148787, -0.714238, 0));
obj0.userData.points.push(new PMPoint(-1.01774, 0.239189, 0));
obj0.userData.points.push(new PMPoint(-1.25799, 0.13222, 0));
obj0.userData.points.push(new PMPoint(-1.28548, -0.129331, 0));
obj0.userData.points.push(new PMPoint(-1.07272, -0.283914, 0));
obj0.userData.points.push(new PMPoint(-0.913732, -0.559286, 0));
obj0.userData.points.push(new PMPoint(-0.886242, -0.820838, 0));
obj0.userData.points.push(new PMPoint(-0.645986, -0.927806, 0));
obj0.userData.points.push(new PMPoint(-0.433221, -0.773223, 0));
obj0.userData.points.push(new PMPoint(-0.824438, 0.456023, 0));
obj0.userData.points.push(new PMPoint(-1.00041, 0.260582, 0));
obj0.userData.points.push(new PMPoint(0.807147, 0.941488, 0));
obj0.userData.points.push(new PMPoint(0.725878, 1.19161, 0));
obj0.userData.points.push(new PMPoint(-0.462886, 1.19161, 0));
obj0.userData.points.push(new PMPoint(-0.544155, 0.941488, 0));
obj0.userData.points.push(new PMPoint(-0.0274902, 1.52647, 0));
obj0.userData.points.push(new PMPoint(-0.267745, 1.63344, 0));
obj0.userData.points.push(new PMPoint(-0.480511, 1.47886, 0));
obj0.userData.points.push(new PMPoint(-0.45302, 1.21731, 0));
obj0.userData.points.push(new PMPoint(0.716013, 1.21731, 0));
obj0.userData.points.push(new PMPoint(0.743503, 1.47886, 0));
obj0.userData.points.push(new PMPoint(0.530738, 1.63344, 0));
obj0.userData.points.push(new PMPoint(0.290482, 1.52647, 0));
obj0.userData.points.push(new PMPoint(0.262992, 1.52791, 0));
obj0.userData.points.push(new PMPoint(0, 1.52791, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -0.873091, 0));
obj0.userData.points.push(new PMPoint(-0.294034, -1.12321, 0));
obj0.userData.points.push(new PMPoint(-0.212765, -1.37333, 0));
obj0.userData.points.push(new PMPoint(0, -1.52791, 0));
obj0.userData.points.push(new PMPoint(0.262992, -1.52791, 0));
obj0.userData.points.push(new PMPoint(0.475757, -1.37333, 0));
obj0.userData.points.push(new PMPoint(0.557026, -1.12321, 0));
obj0.userData.points.push(new PMPoint(0.475757, -0.873091, 0));
obj0.userData.points.push(new PMPoint(1.28073, 0.320906, 0));
obj0.userData.points.push(new PMPoint(1.54372, 0.320906, 0));
obj0.userData.points.push(new PMPoint(1.75649, 0.475489, 0));
obj0.userData.points.push(new PMPoint(1.83776, 0.725609, 0));
obj0.userData.points.push(new PMPoint(1.75649, 0.975729, 0));
obj0.userData.points.push(new PMPoint(1.54372, 1.13031, 0));
obj0.userData.points.push(new PMPoint(1.28073, 1.13031, 0));
obj0.userData.points.push(new PMPoint(1.06796, 0.975729, 0));
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
obj0.userData.points.push(new PMPoint(-0.649736, 1.07632, 0));
obj0.userData.points.push(new PMPoint(-0.825712, 1.27176, 0));
obj0.userData.points.push(new PMPoint(-1.08296, 1.32644, 0));
obj0.userData.points.push(new PMPoint(-1.32321, 1.21947, 0));
obj0.userData.points.push(new PMPoint(-1.45471, 0.991715, 0));
obj0.userData.points.push(new PMPoint(-1.42722, 0.730164, 0));
obj0.userData.points.push(new PMPoint(-1.25124, 0.534722, 0));
obj0.userData.points.push(new PMPoint(-0.993998, 0.480043, 0));
obj0.userData.points.push(new PMPoint(-1.30048, -0.201473, 0));
obj0.userData.points.push(new PMPoint(-1.55772, -0.256152, 0));
obj0.userData.points.push(new PMPoint(-1.7337, -0.451593, 0));
obj0.userData.points.push(new PMPoint(-1.76119, -0.713145, 0));
obj0.userData.points.push(new PMPoint(-1.62969, -0.940903, 0));
obj0.userData.points.push(new PMPoint(-1.38944, -1.04787, 0));
obj0.userData.points.push(new PMPoint(-1.13219, -0.993192, 0));
obj0.userData.points.push(new PMPoint(-0.956215, -0.797751, 0));
obj0.userData.points.push(new PMPoint(-1.51954, 0.159711, 0));
obj0.userData.points.push(new PMPoint(-1.54703, -0.101841, 0));
obj0.userData.points.push(new PMPoint(-0.99321, -1.06109, 0));
obj0.userData.points.push(new PMPoint(-0.752955, -1.16806, 0));
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
obj0.userData.points.push(new PMPoint(-0.45302, -1.4803, 0));
obj0.userData.points.push(new PMPoint(-0.480511, -1.74185, 0));
obj0.userData.points.push(new PMPoint(-0.267745, -1.89643, 0));
obj0.userData.points.push(new PMPoint(-0.0274902, -1.78947, 0));
obj0.userData.points.push(new PMPoint(0.290482, -1.78947, 0));
obj0.userData.points.push(new PMPoint(0.530738, -1.89643, 0));
obj0.userData.points.push(new PMPoint(0.743503, -1.74185, 0));
obj0.userData.points.push(new PMPoint(0.716013, -1.4803, 0));
obj0.userData.points.push(new PMPoint(0, -1.79091, 0));
obj0.userData.points.push(new PMPoint(0.262992, -1.79091, 0));
obj0.userData.points.push(new PMPoint(2.08788, 0.806878, 0));
obj0.userData.points.push(new PMPoint(2.00661, 1.057, 0));
obj0.userData.points.push(new PMPoint(1.93246, 0.280047, 0));
obj0.userData.points.push(new PMPoint(2.18971, 0.334726, 0));
obj0.userData.points.push(new PMPoint(2.27098, 0.584847, 0));
obj0.userData.points.push(new PMPoint(2.095, 0.780288, 0));
obj0.userData.points.push(new PMPoint(1.99674, 1.0827, 0));
obj0.userData.points.push(new PMPoint(2.02423, 1.34425, 0));
obj0.userData.points.push(new PMPoint(1.81147, 1.49883, 0));
obj0.userData.points.push(new PMPoint(1.57121, 1.39186, 0));
obj0.userData.points.push(new PMPoint(1.8595, -1.35101, 0));
obj0.userData.points.push(new PMPoint(2.11674, -1.40568, 0));
obj0.userData.points.push(new PMPoint(2.29272, -1.21024, 0));
obj0.userData.points.push(new PMPoint(2.21145, -0.960123, 0));
obj0.userData.points.push(new PMPoint(2.21576, -0.932934, 0));
obj0.userData.points.push(new PMPoint(2.24325, -0.671382, 0));
obj0.userData.points.push(new PMPoint(1.57566, -1.41281, 0));
obj0.userData.points.push(new PMPoint(1.83291, -1.35813, 0));
obj0.userData.points.push(new PMPoint(-1.05547, 1.58799, 0));
obj0.userData.points.push(new PMPoint(-1.26823, 1.74258, 0));
obj0.userData.points.push(new PMPoint(-1.50849, 1.63561, 0));
obj0.userData.points.push(new PMPoint(-1.53598, 1.37406, 0));
obj0.userData.points.push(new PMPoint(-1.69496, 1.09868, 0));
obj0.userData.points.push(new PMPoint(-1.90773, 0.944101, 0));
obj0.userData.points.push(new PMPoint(-1.88024, 0.682549, 0));
obj0.userData.points.push(new PMPoint(-1.63998, 0.575581, 0));
obj0.userData.points.push(new PMPoint(-1.55097, 1.35097, 0));
obj0.userData.points.push(new PMPoint(-1.68247, 1.12321, 0));
obj0.userData.points.push(new PMPoint(-2.02418, -0.713145, 0));
obj0.userData.points.push(new PMPoint(-2.15568, -0.940903, 0));
obj0.userData.points.push(new PMPoint(-2.02418, -1.16866, 0));
obj0.userData.points.push(new PMPoint(-1.76119, -1.16866, 0));
obj0.userData.points.push(new PMPoint(-1.99525, -0.424103, 0));
obj0.userData.points.push(new PMPoint(-2.02274, -0.685655, 0));
obj0.userData.points.push(new PMPoint(-1.73666, -1.18116, 0));
obj0.userData.points.push(new PMPoint(-1.4964, -1.28813, 0));
obj0.userData.points.push(new PMPoint(0.408694, 2.50616, 0));
obj0.userData.points.push(new PMPoint(0.168438, 2.61313, 0));
obj0.userData.points.push(new PMPoint(-0.391217, 2.49417, 0));
obj0.userData.points.push(new PMPoint(-0.567193, 2.29873, 0));
obj0.userData.points.push(new PMPoint(0.142739, 2.62299, 0));
obj0.userData.points.push(new PMPoint(-0.0332372, 2.81843, 0));
obj0.userData.points.push(new PMPoint(-0.290482, 2.76375, 0));
obj0.userData.points.push(new PMPoint(-0.371751, 2.51363, 0));
obj0.userData.points.push(new PMPoint(-0.399242, -2.12419, 0));
obj0.userData.points.push(new PMPoint(-0.371751, -2.38574, 0));
obj0.userData.points.push(new PMPoint(-0.195775, -2.58119, 0));
obj0.userData.points.push(new PMPoint(0.0614699, -2.63586, 0));
obj0.userData.points.push(new PMPoint(0.301725, -2.5289, 0));
obj0.userData.points.push(new PMPoint(0.433221, -2.30114, 0));
obj0.userData.points.push(new PMPoint(0.405731, -2.03959, 0));
obj0.userData.points.push(new PMPoint(0.229755, -1.84415, 0));
obj0.userData.points.push(new PMPoint(2.30064, 0.652295, 0));
obj0.userData.points.push(new PMPoint(2.56363, 0.652295, 0));
obj0.userData.points.push(new PMPoint(2.7764, 0.806878, 0));
obj0.userData.points.push(new PMPoint(2.85767, 1.057, 0));
obj0.userData.points.push(new PMPoint(2.7764, 1.30712, 0));
obj0.userData.points.push(new PMPoint(2.56363, 1.4617, 0));
obj0.userData.points.push(new PMPoint(2.30064, 1.4617, 0));
obj0.userData.points.push(new PMPoint(2.08788, 1.30712, 0));
obj0.userData.points.push(new PMPoint(2.31219, -1.58166, 0));
obj0.userData.points.push(new PMPoint(2.48816, -1.38622, 0));
obj0.userData.points.push(new PMPoint(-1.63998, 1.86337, 0));
obj0.userData.points.push(new PMPoint(-1.88024, 1.97033, 0));
obj0.userData.points.push(new PMPoint(-2.13748, 1.91565, 0));
obj0.userData.points.push(new PMPoint(-2.31346, 1.72021, 0));
obj0.userData.points.push(new PMPoint(-2.34095, 1.45866, 0));
obj0.userData.points.push(new PMPoint(-2.20945, 1.2309, 0));
obj0.userData.points.push(new PMPoint(-1.9692, 1.12394, 0));
obj0.userData.points.push(new PMPoint(-1.71195, 1.17861, 0));
obj0.userData.points.push(new PMPoint(-2.38343, -1.0724, 0));
obj0.userData.points.push(new PMPoint(-2.25194, -1.30016, 0));
obj0.userData.points.push(new PMPoint(-0.0879163, 3.07568, 0));
obj0.userData.points.push(new PMPoint(-0.345161, 3.021, 0));
obj0.userData.points.push(new PMPoint(-0.371751, -2.77663, 0));
obj0.userData.points.push(new PMPoint(-0.290482, -3.02675, 0));
obj0.userData.points.push(new PMPoint(-0.0332372, -3.08143, 0));
obj0.userData.points.push(new PMPoint(0.142739, -2.88598, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 1, 7, 6, 7, 1, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 2, 15, 14, 15, 4, 16, 5, 17, 16, 17, 5, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 0, 25, 24, 25, 2, 26, 3, 27, 26, 27, 3, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 4, 35, 34, 35, 6, 36, 36, 37, 37, 38, 7, 39, 38, 39, 9, 40, 10, 41, 40, 41, 14, 42, 42, 43, 43, 44, 15, 45, 44, 45, 10, 46, 46, 47, 47, 48, 11, 49, 48, 49, 12, 50, 50, 51, 51, 52, 13, 53, 52, 53, 11, 54, 12, 55, 54, 55, 13, 56, 14, 57, 56, 57, 16, 58, 58, 59, 59, 60, 17, 61, 60, 61, 21, 62, 22, 63, 62, 63, 23, 64, 24, 65, 64, 65, 20, 66, 66, 67, 67, 68, 21, 69, 68, 69, 22, 70, 70, 71, 71, 72, 23, 73, 72, 73, 19, 74, 20, 75, 74, 75, 29, 76, 30, 77, 76, 77, 33, 78, 34, 79, 78, 79, 32, 80, 80, 81, 81, 82, 33, 83, 82, 83, 30, 84, 84, 85, 85, 86, 31, 87, 86, 87, 31, 88, 32, 89, 88, 89, 37, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 38, 97, 96, 97, 42, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 43, 105, 104, 105, 47, 106, 48, 107, 106, 107, 48, 108, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 49, 115, 114, 115, 51, 116, 52, 117, 116, 117, 59, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 60, 125, 124, 125, 62, 126, 126, 127, 127, 128, 128, 129, 129, 130, 130, 131, 131, 132, 63, 133, 132, 133, 67, 134, 68, 135, 134, 135, 71, 136, 72, 137, 136, 137, 81, 138, 82, 139, 138, 139, 80, 140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 145, 146, 81, 147, 146, 147, 85, 148, 86, 149, 148, 149, 92, 150, 150, 151, 151, 152, 93, 153, 152, 153, 94, 154, 154, 155, 155, 156, 95, 157, 156, 157, 93, 158, 94, 159, 158, 159, 101, 160, 102, 161, 160, 161, 100, 162, 162, 163, 163, 164, 101, 165, 164, 165, 102, 166, 166, 167, 167, 168, 103, 169, 168, 169, 110, 170, 170, 171, 171, 172, 111, 173, 172, 173, 111, 174, 112, 175, 174, 175, 109, 176, 110, 177, 176, 177, 120, 178, 178, 179, 179, 180, 121, 181, 180, 181, 122, 182, 182, 183, 183, 184, 123, 185, 184, 185, 121, 186, 122, 187, 186, 187, 129, 188, 188, 189, 189, 190, 130, 191, 190, 191, 128, 192, 129, 193, 192, 193, 130, 194, 131, 195, 194, 195, 143, 196, 144, 197, 196, 197, 145, 198, 146, 199, 198, 199, 144, 200, 200, 201, 201, 202, 145, 203, 202, 203, 152, 204, 204, 205, 205, 206, 206, 207, 207, 208, 208, 209, 209, 210, 153, 211, 210, 211, 160, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 217, 217, 218, 161, 219, 218, 219, 171, 220, 172, 221, 220, 221, 180, 222, 222, 223, 223, 224, 224, 225, 225, 226, 226, 227, 227, 228, 181, 229, 228, 229, 189, 230, 190, 231, 230, 231, 201, 232, 202, 233, 232, 233, 206, 234, 234, 235, 235, 236, 207, 237, 236, 237];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [72, 71, 136, 137], [7, 1, 0, 6], [2, 1, 8, 9, 10, 11, 12, 13, 14, 15], [5, 4, 16, 17], [39, 7, 6, 36, 37, 38], [10, 9, 40, 41], [0, 5, 18, 19, 20, 21, 22, 23, 24, 25], [30, 29, 76, 77], [3, 2, 26, 27], [22, 21, 62, 63], [178, 179, 180, 181, 121, 120], [15, 14, 42, 43, 44, 45], [11, 10, 46, 47, 48, 49], [4, 3, 28, 29, 30, 31, 32, 33, 34, 35], [38, 37, 90, 91, 92, 93, 94, 95, 96, 97], [24, 23, 64, 65], [16, 58, 59, 60, 61, 17], [13, 12, 50, 51, 52, 53], [34, 33, 78, 79], [12, 11, 54, 55], [14, 13, 56, 57], [33, 32, 80, 81, 82, 83], [93, 92, 150, 151, 152, 153], [21, 20, 66, 67, 68, 69], [23, 22, 70, 71, 72, 73], [20, 19, 74, 75], [98, 99, 100, 101, 102, 103, 104, 105, 43, 42], [48, 47, 106, 107], [49, 48, 108, 109, 110, 111, 112, 113, 114, 115], [118, 119, 120, 121, 122, 123, 124, 125, 60, 59], [31, 30, 84, 85, 86, 87], [62, 126, 127, 128, 129, 130, 131, 132, 133, 63], [102, 101, 160, 161], [207, 206, 234, 235, 236, 237], [123, 122, 182, 183, 184, 185], [153, 152, 204, 205, 206, 207, 208, 209, 210, 211], [32, 31, 88, 89], [111, 110, 170, 171, 172, 173], [52, 51, 116, 117], [162, 163, 164, 165, 101, 100], [95, 94, 154, 155, 156, 157], [130, 129, 188, 189, 190, 191], [94, 93, 158, 159], [82, 81, 138, 139], [68, 67, 134, 135], [103, 102, 166, 167, 168, 169], [86, 85, 148, 149], [140, 141, 142, 143, 144, 145, 146, 147, 81, 80], [122, 121, 186, 187], [112, 111, 174, 175], [213, 214, 215, 216, 217, 218, 219, 161, 160, 212], [144, 143, 196, 197], [110, 109, 176, 177], [129, 128, 192, 193], [131, 130, 194, 195], [202, 201, 232, 233], [146, 145, 198, 199], [222, 223, 224, 225, 226, 227, 228, 229, 181, 180], [172, 171, 220, 221], [145, 144, 200, 201, 202, 203], [190, 189, 230, 231]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[207,206],
      [202,201],
      [190,189],
      [181,180],
      [172,171],
      [161,160],
      [153,152],
      [145,144],
      [146,145],
      [144,143],
      [131,130],
      [129,128],
      [130,129],
      [122,121],
      [123,122],
      [121,120],
      [110,109],
      [112,111],
      [111,110],
      [103,102],
      [101,100],
      [102,101],
      [94,93],
      [95,94],
      [93,92],
      [86,85],
      [81,80],
      [82,81],
      [72,71],
      [68,67],
      [63,62],
      [60,59],
      [52,51],
      [49,48],
      [48,47],
      [43,42],
      [38,37],
      [32,31],
      [31,30],
      [33,32],
      [34,33],
      [30,29],
      [20,19],
      [23,22],
      [21,20],
      [24,23],
      [22,21],
      [17,16],
      [14,13],
      [12,11],
      [13,12],
      [11,10],
      [15,14],
      [10,9],
      [7,6],
      [4,3],
      [3,2],
      [0,5],
      [5,4],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.58801829469275,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631];

obj0.userData.subtrees = [[234,235,236,237],
      [232,233],
      [230,231],
      [222,223,224,225,226,227,228,229],
      [220,221],
      [212,213,214,215,216,217,218,219],
      [204,205,206,207,208,209,210,211,234,235,236,237],
      [200,201,202,203,232,233],
      [198,199],
      [196,197],
      [194,195],
      [192,193],
      [188,189,190,191,230,231],
      [186,187],
      [182,183,184,185],
      [178,179,180,181,222,223,224,225,226,227,228,229],
      [176,177],
      [174,175],
      [170,171,172,173,220,221],
      [166,167,168,169],
      [162,163,164,165],
      [160,161,212,213,214,215,216,217,218,219],
      [158,159],
      [154,155,156,157],
      [150,151,152,153,204,205,206,207,208,209,210,211,234,235,236,237],
      [148,149],
      [140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [138,139],
      [136,137],
      [134,135],
      [126,127,128,129,130,131,132,133,188,189,190,191,192,193,194,195,230,231],
      [118,119,120,121,122,123,124,125,178,179,180,181,182,183,184,185,186,187,222,223,224,225,226,227,228,229],
      [116,117],
      [108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [106,107],
      [98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [88,89],
      [84,85,86,87,148,149],
      [80,81,82,83,138,139,140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [78,79],
      [76,77],
      [74,75],
      [70,71,72,73,136,137],
      [66,67,68,69,134,135],
      [64,65],
      [62,63,126,127,128,129,130,131,132,133,188,189,190,191,192,193,194,195,230,231],
      [58,59,60,61,118,119,120,121,122,123,124,125,178,179,180,181,182,183,184,185,186,187,222,223,224,225,226,227,228,229],
      [56,57],
      [54,55],
      [50,51,52,53,116,117],
      [46,47,48,49,106,107,108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [42,43,44,45,98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [40,41],
      [36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [28,29,30,31,32,33,34,35,76,77,78,79,80,81,82,83,84,85,86,87,88,89,138,139,140,141,142,143,144,145,146,147,148,149,196,197,198,199,200,201,202,203,232,233],
      [26,27],
      [18,19,20,21,22,23,24,25,62,63,64,65,66,67,68,69,70,71,72,73,74,75,126,127,128,129,130,131,132,133,134,135,136,137,188,189,190,191,192,193,194,195,230,231],
      [16,17,58,59,60,61,118,119,120,121,122,123,124,125,178,179,180,181,182,183,184,185,186,187,222,223,224,225,226,227,228,229],
      [8,9,10,11,12,13,14,15,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,212,213,214,215,216,217,218,219,220,221],
      [6,7,36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237]];

obj0.userData.polytoperoot = [[0.131496087536302,0.982556643621777,-0.131496087536302],
      [1.45238546030754,3.80239449985129,0],
      [1,-0.381966011250105,0]];

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
