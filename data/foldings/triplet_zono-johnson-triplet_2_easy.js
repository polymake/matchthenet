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
obj0.userData.points.push(new PMPoint(0.206002, 0, 0));
obj0.userData.points.push(new PMPoint(0.23617, 0.203781, 0));
obj0.userData.points.push(new PMPoint(-0.115497, 0.611342, 0));
obj0.userData.points.push(new PMPoint(-0.321499, 0.611342, 0));
obj0.userData.points.push(new PMPoint(-0.351667, 0.407562, 0));
obj0.userData.points.push(new PMPoint(0, -0.206002, 0));
obj0.userData.points.push(new PMPoint(0.206002, -0.206002, 0));
obj0.userData.points.push(new PMPoint(0.422735, 0.291133, 0));
obj0.userData.points.push(new PMPoint(0.536467, 0.462894, 0));
obj0.userData.points.push(new PMPoint(0.1848, 0.870455, 0));
obj0.userData.points.push(new PMPoint(-0.001765, 0.783103, 0));
obj0.userData.points.push(new PMPoint(-0.557669, 0.407562, 0));
obj0.userData.points.push(new PMPoint(-0.587837, 0.203781, 0));
obj0.userData.points.push(new PMPoint(-0.23617, -0.203781, 0));
obj0.userData.points.push(new PMPoint(-0.0301683, -0.203781, 0));
obj0.userData.points.push(new PMPoint(0.397565, 0.0757639, 0));
obj0.userData.points.push(new PMPoint(0.427733, 0.279545, 0));
obj0.userData.points.push(new PMPoint(-0.52528, 0.641511, 0));
obj0.userData.points.push(new PMPoint(-0.555448, 0.43773, 0));
obj0.userData.points.push(new PMPoint(-0.0124961, 0.789745, 0));
obj0.userData.points.push(new PMPoint(-0.218498, 0.789745, 0));
obj0.userData.points.push(new PMPoint(-0.0301683, -0.409783, 0));
obj0.userData.points.push(new PMPoint(0.321499, -0.817344, 0));
obj0.userData.points.push(new PMPoint(0.527501, -0.817344, 0));
obj0.userData.points.push(new PMPoint(0.557669, -0.613563, 0));
obj0.userData.points.push(new PMPoint(0.613563, -0.557669, 0));
obj0.userData.points.push(new PMPoint(0.817344, -0.527501, 0));
obj0.userData.points.push(new PMPoint(0.817344, -0.321499, 0));
obj0.userData.points.push(new PMPoint(0.409783, 0.0301683, 0));
obj0.userData.points.push(new PMPoint(1.07332, 0.42337, 0));
obj0.userData.points.push(new PMPoint(1.48088, 0.775037, 0));
obj0.userData.points.push(new PMPoint(1.52041, 1.31189, 0));
obj0.userData.points.push(new PMPoint(1.16874, 1.71945, 0));
obj0.userData.points.push(new PMPoint(0.631885, 1.75898, 0));
obj0.userData.points.push(new PMPoint(0.224323, 1.40731, 0));
obj0.userData.points.push(new PMPoint(-0.774402, 0.116429, 0));
obj0.userData.points.push(new PMPoint(-0.888134, -0.055332, 0));
obj0.userData.points.push(new PMPoint(-0.536467, -0.462894, 0));
obj0.userData.points.push(new PMPoint(-0.349902, -0.375542, 0));
obj0.userData.points.push(new PMPoint(-0.339171, -0.382184, 0));
obj0.userData.points.push(new PMPoint(-0.133169, -0.382184, 0));
obj0.userData.points.push(new PMPoint(-0.749232, 0.331798, 0));
obj0.userData.points.push(new PMPoint(-0.779401, 0.128017, 0));
obj0.userData.points.push(new PMPoint(0.888871, -0.144223, 0));
obj0.userData.points.push(new PMPoint(1.02079, 0.0139967, 0));
obj0.userData.points.push(new PMPoint(1.05096, 0.217777, 0));
obj0.userData.points.push(new PMPoint(0.559655, 0.437765, 0));
obj0.userData.points.push(new PMPoint(-0.876947, 1.04907, 0));
obj0.userData.points.push(new PMPoint(-1.08295, 1.04907, 0));
obj0.userData.points.push(new PMPoint(-1.11312, 0.845291, 0));
obj0.userData.points.push(new PMPoint(-0.76145, 0.43773, 0));
obj0.userData.points.push(new PMPoint(-0.261813, 0.808508, 0));
obj0.userData.points.push(new PMPoint(-0.550002, 1.26318, 0));
obj0.userData.points.push(new PMPoint(-0.753783, 1.29334, 0));
obj0.userData.points.push(new PMPoint(-0.813469, 1.09618, 0));
obj0.userData.points.push(new PMPoint(0.163337, 0.897073, 0));
obj0.userData.points.push(new PMPoint(0.0176722, 1.4153, 0));
obj0.userData.points.push(new PMPoint(-0.18833, 1.4153, 0));
obj0.userData.points.push(new PMPoint(-0.364163, 1.30797, 0));
obj0.userData.points.push(new PMPoint(-0.216733, -0.497135, 0));
obj0.userData.points.push(new PMPoint(-0.330465, -0.668895, 0));
obj0.userData.points.push(new PMPoint(0.0212022, -1.07646, 0));
obj0.userData.points.push(new PMPoint(0.207767, -0.989105, 0));
obj0.userData.points.push(new PMPoint(0.218498, -0.995747, 0));
obj0.userData.points.push(new PMPoint(0.4245, -0.995747, 0));
obj0.userData.points.push(new PMPoint(0.731281, -0.847512, 0));
obj0.userData.points.push(new PMPoint(0.76145, -0.643732, 0));
obj0.userData.points.push(new PMPoint(0.995747, -0.4245, 0));
obj0.userData.points.push(new PMPoint(0.995747, -0.218498, 0));
obj0.userData.points.push(new PMPoint(0.544533, 1.94554, 0));
obj0.userData.points.push(new PMPoint(0.372772, 2.05927, 0));
obj0.userData.points.push(new PMPoint(-0.0347898, 1.70761, 0));
obj0.userData.points.push(new PMPoint(0.0525622, 1.52104, 0));
obj0.userData.points.push(new PMPoint(1.16067, 0.236806, 0));
obj0.userData.points.push(new PMPoint(1.33244, 0.123074, 0));
obj0.userData.points.push(new PMPoint(1.74, 0.474741, 0));
obj0.userData.points.push(new PMPoint(1.65264, 0.661305, 0));
obj0.userData.points.push(new PMPoint(1.67457, 0.704883, 0));
obj0.userData.points.push(new PMPoint(1.87645, 0.745916, 0));
obj0.userData.points.push(new PMPoint(1.91597, 1.28277, 0));
obj0.userData.points.push(new PMPoint(1.72228, 1.35293, 0));
obj0.userData.points.push(new PMPoint(1.70697, 1.39924, 0));
obj0.userData.points.push(new PMPoint(1.8207, 1.57101, 0));
obj0.userData.points.push(new PMPoint(1.46904, 1.97857, 0));
obj0.userData.points.push(new PMPoint(1.28247, 1.89122, 0));
obj0.userData.points.push(new PMPoint(1.23889, 1.91314, 0));
obj0.userData.points.push(new PMPoint(1.19786, 2.11502, 0));
obj0.userData.points.push(new PMPoint(0.661006, 2.15454, 0));
obj0.userData.points.push(new PMPoint(0.590852, 1.96085, 0));
obj0.userData.points.push(new PMPoint(-1.42499, -0.0158086, 0));
obj0.userData.points.push(new PMPoint(-1.83255, -0.367476, 0));
obj0.userData.points.push(new PMPoint(-1.87207, -0.904331, 0));
obj0.userData.points.push(new PMPoint(-1.52041, -1.31189, 0));
obj0.userData.points.push(new PMPoint(-0.983552, -1.35142, 0));
obj0.userData.points.push(new PMPoint(-0.57599, -0.999749, 0));
obj0.userData.points.push(new PMPoint(-1.24054, 0.551785, 0));
obj0.userData.points.push(new PMPoint(-1.37246, 0.393565, 0));
obj0.userData.points.push(new PMPoint(-1.40263, 0.189784, 0));
obj0.userData.points.push(new PMPoint(-0.911322, -0.0302031, 0));
obj0.userData.points.push(new PMPoint(-1.27451, 0.973308, 0));
obj0.userData.points.push(new PMPoint(-1.30468, 0.769527, 0));
obj0.userData.points.push(new PMPoint(-0.876947, 1.25507, 0));
obj0.userData.points.push(new PMPoint(-1.08295, 1.25507, 0));
obj0.userData.points.push(new PMPoint(-0.421985, 1.42457, 0));
obj0.userData.points.push(new PMPoint(-0.625766, 1.45474, 0));
obj0.userData.points.push(new PMPoint(0.601625, -1.50408, 0));
obj0.userData.points.push(new PMPoint(0.793188, -1.57984, 0));
obj0.userData.points.push(new PMPoint(0.896189, -1.40144, 0));
obj0.userData.points.push(new PMPoint(0.719064, -0.893108, 0));
obj0.userData.points.push(new PMPoint(0.0426644, -1.10307, 0));
obj0.userData.points.push(new PMPoint(0.18833, -1.6213, 0));
obj0.userData.points.push(new PMPoint(0.394331, -1.6213, 0));
obj0.userData.points.push(new PMPoint(0.570165, -1.51397, 0));
obj0.userData.points.push(new PMPoint(1.08295, -1.25507, 0));
obj0.userData.points.push(new PMPoint(1.28895, -1.25507, 0));
obj0.userData.points.push(new PMPoint(1.31912, -1.05129, 0));
obj0.userData.points.push(new PMPoint(0.967451, -0.643732, 0));
obj0.userData.points.push(new PMPoint(0.372772, 2.26528, 0));
obj0.userData.points.push(new PMPoint(0.168991, 2.29544, 0));
obj0.userData.points.push(new PMPoint(-0.238571, 1.94378, 0));
obj0.userData.points.push(new PMPoint(-0.238571, 1.73778, 0));
obj0.userData.points.push(new PMPoint(0.557147, 2.15116, 0));
obj0.userData.points.push(new PMPoint(0.385386, 2.26489, 0));
obj0.userData.points.push(new PMPoint(1.94524, 0.457107, 0));
obj0.userData.points.push(new PMPoint(1.85789, 0.643672, 0));
obj0.userData.points.push(new PMPoint(2.02211, 0.600251, 0));
obj0.userData.points.push(new PMPoint(2.18754, 0.723013, 0));
obj0.userData.points.push(new PMPoint(2.22706, 1.25987, 0));
obj0.userData.points.push(new PMPoint(2.0814, 1.40553, 0));
obj0.userData.points.push(new PMPoint(2.07357, 1.41543, 0));
obj0.userData.points.push(new PMPoint(1.87988, 1.48559, 0));
obj0.userData.points.push(new PMPoint(2.02671, 1.57101, 0));
obj0.userData.points.push(new PMPoint(2.05687, 1.77479, 0));
obj0.userData.points.push(new PMPoint(1.70521, 2.18235, 0));
obj0.userData.points.push(new PMPoint(1.49921, 2.18235, 0));
obj0.userData.points.push(new PMPoint(1.48667, 2.18381, 0));
obj0.userData.points.push(new PMPoint(1.30011, 2.09646, 0));
obj0.userData.points.push(new PMPoint(1.34353, 2.26068, 0));
obj0.userData.points.push(new PMPoint(1.22076, 2.42611, 0));
obj0.userData.points.push(new PMPoint(0.683909, 2.46563, 0));
obj0.userData.points.push(new PMPoint(0.538243, 2.31997, 0));
obj0.userData.points.push(new PMPoint(-1.59056, -1.50558, 0));
obj0.userData.points.push(new PMPoint(-1.54953, -1.70746, 0));
obj0.userData.points.push(new PMPoint(-1.01267, -1.74698, 0));
obj0.userData.points.push(new PMPoint(-0.942519, -1.55329, 0));
obj0.userData.points.push(new PMPoint(-2.05864, -0.991683, 0));
obj0.userData.points.push(new PMPoint(-2.17237, -1.16344, 0));
obj0.userData.points.push(new PMPoint(-1.8207, -1.57101, 0));
obj0.userData.points.push(new PMPoint(-1.63414, -1.48365, 0));
obj0.userData.points.push(new PMPoint(-1.51234, 0.170756, 0));
obj0.userData.points.push(new PMPoint(-1.6841, 0.284488, 0));
obj0.userData.points.push(new PMPoint(-2.09166, -0.067179, 0));
obj0.userData.points.push(new PMPoint(-2.00431, -0.253744, 0));
obj0.userData.points.push(new PMPoint(-2.02624, -0.297322, 0));
obj0.userData.points.push(new PMPoint(-2.22811, -0.338354, 0));
obj0.userData.points.push(new PMPoint(-2.26764, -0.87521, 0));
obj0.userData.points.push(new PMPoint(-2.07395, -0.945364, 0));
obj0.userData.points.push(new PMPoint(-1.12984, 1.24967, 0));
obj0.userData.points.push(new PMPoint(-1.60676, 1.49932, 0));
obj0.userData.points.push(new PMPoint(-1.79832, 1.42356, 0));
obj0.userData.points.push(new PMPoint(-1.75143, 1.22297, 0));
obj0.userData.points.push(new PMPoint(0.44023, -1.6321, 0));
obj0.userData.points.push(new PMPoint(0.631793, -1.70786, 0));
obj0.userData.points.push(new PMPoint(0.971591, -1.68285, 0));
obj0.userData.points.push(new PMPoint(1.07459, -1.50444, 0));
obj0.userData.points.push(new PMPoint(0.40294, 2.46906, 0));
obj0.userData.points.push(new PMPoint(0.199159, 2.49923, 0));
obj0.userData.points.push(new PMPoint(2.3332, 0.577348, 0));
obj0.userData.points.push(new PMPoint(2.49863, 0.700111, 0));
obj0.userData.points.push(new PMPoint(2.53815, 1.23697, 0));
obj0.userData.points.push(new PMPoint(2.39249, 1.38263, 0));
obj0.userData.points.push(new PMPoint(2.37273, 1.40553, 0));
obj0.userData.points.push(new PMPoint(2.22706, 1.5512, 0));
obj0.userData.points.push(new PMPoint(1.70521, 2.38835, 0));
obj0.userData.points.push(new PMPoint(1.49921, 2.38835, 0));
obj0.userData.points.push(new PMPoint(2.26288, 1.77479, 0));
obj0.userData.points.push(new PMPoint(2.29304, 1.97857, 0));
obj0.userData.points.push(new PMPoint(1.94138, 2.38613, 0));
obj0.userData.points.push(new PMPoint(1.73538, 2.38613, 0));
obj0.userData.points.push(new PMPoint(1.36643, 2.57177, 0));
obj0.userData.points.push(new PMPoint(1.24367, 2.7372, 0));
obj0.userData.points.push(new PMPoint(0.706811, 2.77672, 0));
obj0.userData.points.push(new PMPoint(0.561146, 2.63106, 0));
obj0.userData.points.push(new PMPoint(-1.74487, -1.64205, 0));
obj0.userData.points.push(new PMPoint(-1.70384, -1.84393, 0));
obj0.userData.points.push(new PMPoint(-2.26425, -0.979069, 0));
obj0.userData.points.push(new PMPoint(-2.37799, -1.15083, 0));
obj0.userData.points.push(new PMPoint(-2.29691, -0.0495458, 0));
obj0.userData.points.push(new PMPoint(-2.20956, -0.23611, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 1, 7, 6, 7, 2, 8, 8, 9, 9, 10, 3, 11, 10, 11, 5, 12, 12, 13, 13, 14, 0, 15, 14, 15, 1, 16, 2, 17, 16, 17, 4, 18, 5, 19, 18, 19, 3, 20, 4, 21, 20, 21, 6, 22, 22, 23, 23, 24, 7, 25, 24, 25, 7, 26, 26, 27, 27, 28, 1, 29, 28, 29, 9, 30, 30, 31, 31, 32, 32, 33, 33, 34, 10, 35, 34, 35, 13, 36, 36, 37, 37, 38, 14, 39, 38, 39, 14, 40, 15, 41, 40, 41, 12, 42, 13, 43, 42, 43, 16, 44, 44, 45, 45, 46, 17, 47, 46, 47, 18, 48, 48, 49, 49, 50, 19, 51, 50, 51, 4, 52, 52, 53, 53, 54, 18, 55, 54, 55, 20, 56, 56, 57, 57, 58, 21, 59, 58, 59, 22, 60, 60, 61, 61, 62, 23, 63, 62, 63, 23, 64, 24, 65, 64, 65, 24, 66, 25, 67, 66, 67, 27, 68, 28, 69, 68, 69, 34, 70, 70, 71, 71, 72, 35, 73, 72, 73, 30, 74, 74, 75, 75, 76, 31, 77, 76, 77, 31, 78, 78, 79, 79, 80, 32, 81, 80, 81, 32, 82, 82, 83, 83, 84, 33, 85, 84, 85, 33, 86, 86, 87, 87, 88, 34, 89, 88, 89, 37, 90, 90, 91, 91, 92, 92, 93, 93, 94, 38, 95, 94, 95, 42, 96, 96, 97, 97, 98, 43, 99, 98, 99, 49, 100, 50, 101, 100, 101, 48, 102, 49, 103, 102, 103, 53, 104, 54, 105, 104, 105, 65, 106, 106, 107, 107, 108, 24, 109, 108, 109, 64, 110, 110, 111, 111, 112, 65, 113, 112, 113, 66, 114, 114, 115, 115, 116, 67, 117, 116, 117, 71, 118, 118, 119, 119, 120, 72, 121, 120, 121, 70, 122, 71, 123, 122, 123, 76, 124, 77, 125, 124, 125, 79, 126, 126, 127, 127, 128, 80, 129, 128, 129, 80, 130, 81, 131, 130, 131, 83, 132, 132, 133, 133, 134, 84, 135, 134, 135, 84, 136, 85, 137, 136, 137, 87, 138, 138, 139, 139, 140, 88, 141, 140, 141, 93, 142, 142, 143, 143, 144, 94, 145, 144, 145, 92, 146, 146, 147, 147, 148, 93, 149, 148, 149, 90, 150, 150, 151, 151, 152, 91, 153, 152, 153, 91, 154, 154, 155, 155, 156, 92, 157, 156, 157, 49, 158, 158, 159, 159, 160, 100, 161, 160, 161, 106, 162, 107, 163, 162, 163, 107, 164, 108, 165, 164, 165, 118, 166, 119, 167, 166, 167, 127, 168, 168, 169, 169, 170, 128, 171, 170, 171, 128, 172, 129, 173, 172, 173, 134, 174, 135, 175, 174, 175, 133, 176, 176, 177, 177, 178, 134, 179, 178, 179, 139, 180, 180, 181, 181, 182, 140, 183, 182, 183, 142, 184, 143, 185, 184, 185, 146, 186, 147, 187, 186, 187, 152, 188, 153, 189, 188, 189];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [0, 6, 7, 1], [25, 7, 6, 22, 23, 24], [29, 1, 7, 26, 27, 28], [3, 2, 8, 9, 10, 11], [135, 134, 174, 175], [0, 5, 12, 13, 14, 15], [14, 13, 36, 37, 38, 39], [60, 61, 62, 63, 23, 22], [15, 14, 40, 41], [2, 1, 16, 17], [5, 4, 18, 19], [24, 23, 64, 65], [67, 25, 24, 66], [20, 56, 57, 58, 59, 21], [17, 16, 44, 45, 46, 47], [107, 106, 162, 163], [19, 18, 48, 49, 50, 51], [13, 12, 42, 43], [108, 107, 164, 165], [142, 184, 185, 143], [42, 96, 97, 98, 99, 43], [4, 52, 53, 54, 55, 18], [4, 3, 20, 21], [28, 27, 68, 69], [109, 24, 65, 106, 107, 108], [10, 9, 30, 31, 32, 33, 34, 35], [67, 66, 114, 115, 116, 117], [110, 111, 112, 113, 65, 64], [35, 34, 70, 71, 72, 73], [30, 74, 75, 76, 77, 31], [38, 37, 90, 91, 92, 93, 94, 95], [50, 49, 100, 101], [72, 71, 118, 119, 120, 121], [77, 76, 124, 125], [53, 104, 105, 54], [48, 102, 103, 49], [32, 31, 78, 79, 80, 81], [94, 93, 142, 143, 144, 145], [93, 92, 146, 147, 148, 149], [49, 158, 159, 160, 161, 100], [128, 127, 168, 169, 170, 171], [150, 151, 152, 153, 91, 90], [33, 32, 82, 83, 84, 85], [80, 79, 126, 127, 128, 129], [88, 87, 138, 139, 140, 141], [118, 166, 167, 119], [92, 91, 154, 155, 156, 157], [129, 128, 172, 173], [34, 33, 86, 87, 88, 89], [152, 188, 189, 153], [81, 80, 130, 131], [70, 122, 123, 71], [140, 139, 180, 181, 182, 183], [134, 133, 176, 177, 178, 179], [84, 83, 132, 133, 134, 135], [85, 84, 136, 137], [146, 186, 187, 147]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x779645, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x779645, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBF403B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x274530, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[153,152],
      [147,146],
      [143,142],
      [140,139],
      [134,133],
      [135,134],
      [129,128],
      [128,127],
      [119,118],
      [108,107],
      [107,106],
      [100,49],
      [92,91],
      [91,90],
      [93,92],
      [94,93],
      [88,87],
      [85,84],
      [84,83],
      [81,80],
      [80,79],
      [77,76],
      [71,70],
      [72,71],
      [67,66],
      [65,64],
      [24,65],
      [54,53],
      [49,48],
      [50,49],
      [43,42],
      [38,37],
      [34,33],
      [33,32],
      [32,31],
      [31,30],
      [35,34],
      [28,27],
      [25,24],
      [24,23],
      [23,22],
      [21,20],
      [18,4],
      [19,18],
      [17,16],
      [13,12],
      [15,14],
      [14,13],
      [10,9],
      [1,7],
      [7,6],
      [4,3],
      [5,4],
      [2,1],
      [0,5],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.81103707154147,
      2.81103707154147,
      2.81103707154147,
      2.41061314165341,
      2.41061314165341,
      2.61168986384087,
      2.61168986384087,
      2.41061314165341,
      2.61168986384087,
      2.61168986384087,
      2.71617882521421,
      2.71617882521421,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.76122974878491,
      2.81103707154147,
      2.76122974878491,
      2.81103707154147,
      2.76122974878491,
      2.81103707154147,
      2.81103707154147,
      2.76122974878491,
      2.61168986384087,
      2.81103707154147,
      2.71617882521421,
      2.71617882521421,
      2.61168986384087,
      2.71617882521421,
      2.81103707154147,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.31664898756797,
      2.71617882521421,
      2.61168986384087,
      2.71617882521421,
      2.76122974878491,
      2.81103707154147,
      2.61168986384087,
      2.61168986384087,
      2.81103707154147,
      2.71617882521421,
      2.71617882521421,
      2.76122974878491,
      2.31664898756797,
      2.61168986384087,
      2.61168986384087,
      2.71617882521421,
      2.61168986384087,
      2.71617882521421,
      2.41061314165341,
      2.76122974878491,
      2.61168986384087];

obj0.userData.subtrees = [[188,189],
      [186,187],
      [184,185],
      [180,181,182,183],
      [176,177,178,179],
      [174,175],
      [172,173],
      [168,169,170,171],
      [166,167],
      [164,165],
      [162,163],
      [158,159,160,161],
      [154,155,156,157],
      [150,151,152,153,188,189],
      [146,147,148,149,186,187],
      [142,143,144,145,184,185],
      [138,139,140,141,180,181,182,183],
      [136,137],
      [132,133,134,135,174,175,176,177,178,179],
      [130,131],
      [126,127,128,129,168,169,170,171,172,173],
      [124,125],
      [122,123],
      [118,119,120,121,166,167],
      [114,115,116,117],
      [110,111,112,113],
      [106,107,108,109,162,163,164,165],
      [104,105],
      [102,103],
      [100,101,158,159,160,161],
      [96,97,98,99],
      [90,91,92,93,94,95,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,184,185,186,187,188,189],
      [86,87,88,89,138,139,140,141,180,181,182,183],
      [82,83,84,85,132,133,134,135,136,137,174,175,176,177,178,179],
      [78,79,80,81,126,127,128,129,130,131,168,169,170,171,172,173],
      [74,75,76,77,124,125],
      [70,71,72,73,118,119,120,121,122,123,166,167],
      [68,69],
      [66,67,114,115,116,117],
      [64,65,106,107,108,109,110,111,112,113,162,163,164,165],
      [60,61,62,63],
      [56,57,58,59],
      [52,53,54,55,104,105],
      [48,49,50,51,100,101,102,103,158,159,160,161],
      [44,45,46,47],
      [42,43,96,97,98,99],
      [40,41],
      [36,37,38,39,90,91,92,93,94,95,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,184,185,186,187,188,189],
      [30,31,32,33,34,35,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183],
      [26,27,28,29,68,69],
      [22,23,24,25,60,61,62,63,64,65,66,67,106,107,108,109,110,111,112,113,114,115,116,117,162,163,164,165],
      [20,21,56,57,58,59],
      [18,19,48,49,50,51,52,53,54,55,100,101,102,103,104,105,158,159,160,161],
      [16,17,44,45,46,47],
      [12,13,14,15,36,37,38,39,40,41,42,43,90,91,92,93,94,95,96,97,98,99,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,184,185,186,187,188,189],
      [8,9,10,11,30,31,32,33,34,35,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183],
      [6,7,22,23,24,25,26,27,28,29,60,61,62,63,64,65,66,67,68,69,106,107,108,109,110,111,112,113,114,115,116,117,162,163,164,165]];

obj0.userData.polytoperoot = [[-1.05500107259707,0.145665250862623,0],
      [-23.4387648540354,9.70865428781528,9.70865428781528],
      [2.82842712474619,3.4142135623731,3.4142135623731]];

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
