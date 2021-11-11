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
obj0.userData.points.push(new PMPoint(0.273582, 0, 0));
obj0.userData.points.push(new PMPoint(0.499339, 0.422155, 0));
obj0.userData.points.push(new PMPoint(0.0228871, 0.468789, 0));
obj0.userData.points.push(new PMPoint(-0.129015, 0.241252, 0));
obj0.userData.points.push(new PMPoint(-0.225757, -0.422155, 0));
obj0.userData.points.push(new PMPoint(0.250695, -0.468789, 0));
obj0.userData.points.push(new PMPoint(0.402597, -0.241252, 0));
obj0.userData.points.push(new PMPoint(0.359721, 0.880073, 0));
obj0.userData.points.push(new PMPoint(0.0913309, 0.933119, 0));
obj0.userData.points.push(new PMPoint(-0.0820134, 0.721461, 0));
obj0.userData.points.push(new PMPoint(0.425484, -0.227537, 0));
obj0.userData.points.push(new PMPoint(0.697766, -0.200887, 0));
obj0.userData.points.push(new PMPoint(0.802666, 0.0517851, 0));
obj0.userData.points.push(new PMPoint(-0.402597, 0.241252, 0));
obj0.userData.points.push(new PMPoint(-0.531612, 0, 0));
obj0.userData.points.push(new PMPoint(-0.265806, -0.398156, 0));
obj0.userData.points.push(new PMPoint(-0.106128, 0.710041, 0));
obj0.userData.points.push(new PMPoint(-0.584857, 0.710041, 0));
obj0.userData.points.push(new PMPoint(-0.401296, 0.267902, 0));
obj0.userData.points.push(new PMPoint(-0.0861389, -0.880073, 0));
obj0.userData.points.push(new PMPoint(0.182252, -0.933119, 0));
obj0.userData.points.push(new PMPoint(0.355596, -0.721461, 0));
obj0.userData.points.push(new PMPoint(0.37971, -0.710041, 0));
obj0.userData.points.push(new PMPoint(0.858439, -0.710041, 0));
obj0.userData.points.push(new PMPoint(0.674879, -0.267902, 0));
obj0.userData.points.push(new PMPoint(0.868723, 0.726683, 0));
obj0.userData.points.push(new PMPoint(0.814806, 0.9949, 0));
obj0.userData.points.push(new PMPoint(0.552859, 1.07384, 0));
obj0.userData.points.push(new PMPoint(-0.0135696, 1.18579, 0));
obj0.userData.points.push(new PMPoint(-0.285851, 1.21244, 0));
obj0.userData.points.push(new PMPoint(-0.551657, 0.814285, 0));
obj0.userData.points.push(new PMPoint(0.533066, 1.09173, 0));
obj0.userData.points.push(new PMPoint(0.349505, 1.53387, 0));
obj0.userData.points.push(new PMPoint(0.0115424, 1.19481, 0));
obj0.userData.points.push(new PMPoint(1.07106, 0.104832, 0));
obj0.userData.points.push(new PMPoint(1.15085, 0.366521, 0));
obj0.userData.points.push(new PMPoint(0.957707, 0.560287, 0));
obj0.userData.points.push(new PMPoint(1.00109, -0.571257, 0));
obj0.userData.points.push(new PMPoint(1.22685, -0.149102, 0));
obj0.userData.points.push(new PMPoint(1.07495, 0.0784352, 0));
obj0.userData.points.push(new PMPoint(-0.803893, -0.0266501, 0));
obj0.userData.points.push(new PMPoint(-0.908794, -0.279322, 0));
obj0.userData.points.push(new PMPoint(-0.73545, -0.49098, 0));
obj0.userData.points.push(new PMPoint(-0.668403, 0.639408, 0));
obj0.userData.points.push(new PMPoint(-0.934209, 0.241252, 0));
obj0.userData.points.push(new PMPoint(-0.805195, 0, 0));
obj0.userData.points.push(new PMPoint(-0.595141, -0.726683, 0));
obj0.userData.points.push(new PMPoint(-0.541223, -0.9949, 0));
obj0.userData.points.push(new PMPoint(-0.279277, -1.07384, 0));
obj0.userData.points.push(new PMPoint(0.287152, -1.18579, 0));
obj0.userData.points.push(new PMPoint(0.559433, -1.21244, 0));
obj0.userData.points.push(new PMPoint(0.825239, -0.814285, 0));
obj0.userData.points.push(new PMPoint(-0.259483, -1.09173, 0));
obj0.userData.points.push(new PMPoint(-0.0759227, -1.53387, 0));
obj0.userData.points.push(new PMPoint(0.26204, -1.19481, 0));
obj0.userData.points.push(new PMPoint(1.00794, 1.18867, 0));
obj0.userData.points.push(new PMPoint(0.928155, 1.45035, 0));
obj0.userData.points.push(new PMPoint(0.458511, 1.54318, 0));
obj0.userData.points.push(new PMPoint(1.13067, 0.647744, 0));
obj0.userData.points.push(new PMPoint(1.46863, 0.986806, 0));
obj0.userData.points.push(new PMPoint(1.0259, 1.16893, 0));
obj0.userData.points.push(new PMPoint(-0.414866, 1.45369, 0));
obj0.userData.points.push(new PMPoint(-0.688448, 1.45369, 0));
obj0.userData.points.push(new PMPoint(-0.817463, 1.21244, 0));
obj0.userData.points.push(new PMPoint(0.252236, 1.58395, 0));
obj0.userData.points.push(new PMPoint(-0.217407, 1.67677, 0));
obj0.userData.points.push(new PMPoint(-0.390752, 1.46511, 0));
obj0.userData.points.push(new PMPoint(1.26419, -0.0889339, 0));
obj0.userData.points.push(new PMPoint(1.52614, -0.00999522, 0));
obj0.userData.points.push(new PMPoint(1.62049, 0.459345, 0));
obj0.userData.points.push(new PMPoint(1.47754, -0.617891, 0));
obj0.userData.points.push(new PMPoint(1.62945, -0.390354, 0));
obj0.userData.points.push(new PMPoint(1.50043, -0.149102, 0));
obj0.userData.points.push(new PMPoint(-1.37844, -0.372146, 0));
obj0.userData.points.push(new PMPoint(-1.11263, -0.770303, 0));
obj0.userData.points.push(new PMPoint(-0.84035, -0.743652, 0));
obj0.userData.points.push(new PMPoint(-0.977238, 0.185008, 0));
obj0.userData.points.push(new PMPoint(-1.24563, 0.131961, 0));
obj0.userData.points.push(new PMPoint(-1.38525, -0.325956, 0));
obj0.userData.points.push(new PMPoint(-1.13805, 0.732232, 0));
obj0.userData.points.push(new PMPoint(-1.31139, 0.520574, 0));
obj0.userData.points.push(new PMPoint(-1.20649, 0.267902, 0));
obj0.userData.points.push(new PMPoint(-0.734361, -1.18867, 0));
obj0.userData.points.push(new PMPoint(-0.654573, -1.45035, 0));
obj0.userData.points.push(new PMPoint(-0.184929, -1.54318, 0));
obj0.userData.points.push(new PMPoint(0.688448, -1.45369, 0));
obj0.userData.points.push(new PMPoint(0.962031, -1.45369, 0));
obj0.userData.points.push(new PMPoint(1.09105, -1.21244, 0));
obj0.userData.points.push(new PMPoint(0.021346, -1.58395, 0));
obj0.userData.points.push(new PMPoint(0.49099, -1.67677, 0));
obj0.userData.points.push(new PMPoint(0.664334, -1.46511, 0));
obj0.userData.points.push(new PMPoint(1.47759, 1.09584, 0));
obj0.userData.points.push(new PMPoint(1.38324, 1.56518, 0));
obj0.userData.points.push(new PMPoint(1.12129, 1.64412, 0));
obj0.userData.points.push(new PMPoint(1.1015, 1.66201, 0));
obj0.userData.points.push(new PMPoint(0.996599, 1.91468, 0));
obj0.userData.points.push(new PMPoint(0.724317, 1.94133, 0));
obj0.userData.points.push(new PMPoint(-0.954254, 1.85185, 0));
obj0.userData.points.push(new PMPoint(-1.22006, 1.45369, 0));
obj0.userData.points.push(new PMPoint(-1.09105, 1.21244, 0));
obj0.userData.points.push(new PMPoint(-0.285851, 1.69495, 0));
obj0.userData.points.push(new PMPoint(-0.437753, 1.92248, 0));
obj0.userData.points.push(new PMPoint(-0.914205, 1.87585, 0));
obj0.userData.points.push(new PMPoint(0.157889, 2.05329, 0));
obj0.userData.points.push(new PMPoint(-0.104058, 2.13223, 0));
obj0.userData.points.push(new PMPoint(-0.297196, 1.93846, 0));
obj0.userData.points.push(new PMPoint(1.73724, -0.184026, 0));
obj0.userData.points.push(new PMPoint(1.99025, -0.0799457, 0));
obj0.userData.points.push(new PMPoint(2.01778, 0.192248, 0));
obj0.userData.points.push(new PMPoint(1.60656, -0.859143, 0));
obj0.userData.points.push(new PMPoint(2.08529, -0.859143, 0));
obj0.userData.points.push(new PMPoint(1.90173, -0.417004, 0));
obj0.userData.points.push(new PMPoint(-1.64424, -0.770303, 0));
obj0.userData.points.push(new PMPoint(-1.51523, -1.01155, 0));
obj0.userData.points.push(new PMPoint(-1.24165, -1.01155, 0));
obj0.userData.points.push(new PMPoint(-1.43877, 0.325727, 0));
obj0.userData.points.push(new PMPoint(-1.70071, 0.246788, 0));
obj0.userData.points.push(new PMPoint(-1.75463, -0.0214285, 0));
obj0.userData.points.push(new PMPoint(-0.827917, -1.66201, 0));
obj0.userData.points.push(new PMPoint(-0.723016, -1.91468, 0));
obj0.userData.points.push(new PMPoint(-0.450735, -1.94133, 0));
obj0.userData.points.push(new PMPoint(0.559433, -1.69495, 0));
obj0.userData.points.push(new PMPoint(0.711335, -1.92248, 0));
obj0.userData.points.push(new PMPoint(1.18779, -1.87585, 0));
obj0.userData.points.push(new PMPoint(0.115694, -2.05329, 0));
obj0.userData.points.push(new PMPoint(0.37764, -2.13223, 0));
obj0.userData.points.push(new PMPoint(0.570778, -1.93846, 0));
obj0.userData.points.push(new PMPoint(1.57638, 1.75895, 0));
obj0.userData.points.push(new PMPoint(1.43676, 2.21686, 0));
obj0.userData.points.push(new PMPoint(1.06738, 1.91234, 0));
obj0.userData.points.push(new PMPoint(1.87488, 1.36294, 0));
obj0.userData.points.push(new PMPoint(1.84735, 1.63513, 0));
obj0.userData.points.push(new PMPoint(1.59433, 1.73921, 0));
obj0.userData.points.push(new PMPoint(1.2624, 2.31284, 0));
obj0.userData.points.push(new PMPoint(0.792761, 2.40566, 0));
obj0.userData.points.push(new PMPoint(0.619417, 2.19401, 0));
obj0.userData.points.push(new PMPoint(-1.4239, 1.94467, 0));
obj0.userData.points.push(new PMPoint(-1.59724, 1.73302, 0));
obj0.userData.points.push(new PMPoint(-1.49234, 1.48034, 0));
obj0.userData.points.push(new PMPoint(-0.332852, 2.17516, 0));
obj0.userData.points.push(new PMPoint(-0.506197, 2.38681, 0));
obj0.userData.points.push(new PMPoint(-0.774587, 2.33377, 0));
obj0.userData.points.push(new PMPoint(2.38754, -0.347043, 0));
obj0.userData.points.push(new PMPoint(2.48189, 0.122297, 0));
obj0.userData.points.push(new PMPoint(2.27079, 0.296328, 0));
obj0.userData.points.push(new PMPoint(-1.91783, -0.770303, 0));
obj0.userData.points.push(new PMPoint(-2.14358, -1.19246, 0));
obj0.userData.points.push(new PMPoint(-1.66713, -1.23909, 0));
obj0.userData.points.push(new PMPoint(-1.84808, -0.279322, 0));
obj0.userData.points.push(new PMPoint(-2.02143, -0.49098, 0));
obj0.userData.points.push(new PMPoint(-1.91653, -0.743652, 0));
obj0.userData.points.push(new PMPoint(-0.988822, -2.31284, 0));
obj0.userData.points.push(new PMPoint(-0.519179, -2.40566, 0));
obj0.userData.points.push(new PMPoint(-0.345835, -2.19401, 0));
obj0.userData.points.push(new PMPoint(0.606435, -2.17516, 0));
obj0.userData.points.push(new PMPoint(0.779779, -2.38681, 0));
obj0.userData.points.push(new PMPoint(1.04817, -2.33377, 0));
obj0.userData.points.push(new PMPoint(1.84477, 1.7059, 0));
obj0.userData.points.push(new PMPoint(2.01811, 1.91756, 0));
obj0.userData.points.push(new PMPoint(1.91321, 2.17023, 0));
obj0.userData.points.push(new PMPoint(1.16806, 2.78218, 0));
obj0.userData.points.push(new PMPoint(0.906111, 2.86112, 0));
obj0.userData.points.push(new PMPoint(0.712973, 2.66735, 0));
obj0.userData.points.push(new PMPoint(-1.5288, 2.19735, 0));
obj0.userData.points.push(new PMPoint(-2.00525, 2.24398, 0));
obj0.userData.points.push(new PMPoint(-1.86563, 1.78606, 0));
obj0.userData.points.push(new PMPoint(-1.0486, 2.32119, 0));
obj0.userData.points.push(new PMPoint(-1.31055, 2.40013, 0));
obj0.userData.points.push(new PMPoint(-1.50369, 2.20636, 0));
obj0.userData.points.push(new PMPoint(2.85718, -0.254219, 0));
obj0.userData.points.push(new PMPoint(2.93697, 0.00747028, 0));
obj0.userData.points.push(new PMPoint(2.74383, 0.201236, 0));
obj0.userData.points.push(new PMPoint(-0.894475, -2.78218, 0));
obj0.userData.points.push(new PMPoint(-0.632528, -2.86112, 0));
obj0.userData.points.push(new PMPoint(-0.43939, -2.66735, 0));
obj0.userData.points.push(new PMPoint(2.06511, 2.39777, 0));
obj0.userData.points.push(new PMPoint(1.9361, 2.63902, 0));
obj0.userData.points.push(new PMPoint(1.66252, 2.63902, 0));
obj0.userData.points.push(new PMPoint(1.3612, 2.97595, 0));
obj0.userData.points.push(new PMPoint(1.22158, 3.43386, 0));
obj0.userData.points.push(new PMPoint(0.852193, 3.12934, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 1, 7, 6, 7, 2, 8, 8, 9, 3, 10, 9, 10, 1, 11, 11, 12, 2, 13, 12, 13, 4, 14, 14, 15, 0, 16, 15, 16, 3, 17, 17, 18, 4, 19, 18, 19, 5, 20, 20, 21, 6, 22, 21, 22, 6, 23, 23, 24, 7, 25, 24, 25, 2, 26, 26, 27, 8, 28, 27, 28, 9, 29, 29, 30, 10, 31, 30, 31, 8, 32, 32, 33, 9, 34, 33, 34, 13, 35, 35, 36, 2, 37, 36, 37, 12, 38, 38, 39, 13, 40, 39, 40, 15, 41, 41, 42, 16, 43, 42, 43, 14, 44, 44, 45, 15, 46, 45, 46, 5, 47, 47, 48, 20, 49, 48, 49, 21, 50, 50, 51, 22, 52, 51, 52, 20, 53, 53, 54, 21, 55, 54, 55, 27, 56, 56, 57, 28, 58, 57, 58, 26, 59, 59, 60, 27, 61, 60, 61, 30, 62, 62, 63, 31, 64, 63, 64, 29, 65, 65, 66, 30, 67, 66, 67, 35, 68, 68, 69, 36, 70, 69, 70, 38, 71, 71, 72, 39, 73, 72, 73, 42, 74, 74, 75, 43, 76, 75, 76, 41, 77, 77, 78, 42, 79, 78, 79, 44, 80, 80, 81, 45, 82, 81, 82, 48, 83, 83, 84, 49, 85, 84, 85, 51, 86, 86, 87, 52, 88, 87, 88, 50, 89, 89, 90, 51, 91, 90, 91, 56, 92, 92, 93, 57, 94, 93, 94, 57, 95, 95, 96, 58, 97, 96, 97, 63, 98, 98, 99, 64, 100, 99, 100, 62, 101, 101, 102, 63, 103, 102, 103, 65, 104, 104, 105, 66, 106, 105, 106, 69, 107, 107, 108, 70, 109, 108, 109, 71, 110, 110, 111, 72, 112, 111, 112, 74, 113, 113, 114, 75, 115, 114, 115, 78, 116, 116, 117, 79, 118, 117, 118, 84, 119, 119, 120, 85, 121, 120, 121, 86, 122, 122, 123, 87, 124, 123, 124, 89, 125, 125, 126, 90, 127, 126, 127, 93, 128, 128, 129, 94, 130, 129, 130, 92, 131, 131, 132, 93, 133, 132, 133, 96, 134, 134, 135, 97, 136, 135, 136, 98, 137, 137, 138, 99, 139, 138, 139, 102, 140, 140, 141, 103, 142, 141, 142, 108, 143, 143, 144, 109, 145, 144, 145, 113, 146, 146, 147, 114, 148, 147, 148, 74, 149, 149, 150, 113, 151, 150, 151, 120, 152, 152, 153, 121, 154, 153, 154, 123, 155, 155, 156, 124, 157, 156, 157, 128, 158, 158, 159, 129, 160, 159, 160, 134, 161, 161, 162, 135, 163, 162, 163, 137, 164, 164, 165, 138, 166, 165, 166, 98, 167, 167, 168, 137, 169, 168, 169, 143, 170, 170, 171, 144, 172, 171, 172, 152, 173, 173, 174, 153, 175, 174, 175, 160, 176, 176, 177, 129, 178, 177, 178, 161, 179, 179, 180, 162, 181, 180, 181];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [160, 176, 177, 178, 129], [162, 161, 179, 180, 181], [7, 1, 0, 5, 6], [3, 2, 8, 9, 10], [158, 159, 160, 129, 128], [138, 137, 164, 165, 166], [6, 5, 20, 21, 22], [2, 1, 11, 12, 13], [135, 134, 161, 162, 163], [153, 152, 173, 174, 175], [0, 4, 14, 15, 16], [8, 2, 26, 27, 28], [94, 93, 128, 129, 130], [114, 113, 146, 147, 148], [5, 47, 48, 49, 20], [2, 13, 35, 36, 37], [97, 96, 134, 135, 136], [154, 121, 120, 152, 153], [16, 15, 41, 42, 43], [31, 30, 62, 63, 64], [52, 51, 86, 87, 88], [72, 71, 110, 111, 112], [64, 63, 98, 99, 100], [10, 9, 29, 30, 31], [52, 22, 21, 50, 51], [108, 143, 144, 145, 109], [99, 98, 137, 138, 139], [45, 44, 80, 81, 82], [39, 38, 71, 72, 73], [86, 122, 123, 124, 87], [62, 101, 102, 103, 63], [4, 3, 17, 18, 19], [25, 7, 6, 23, 24], [144, 143, 170, 171, 172], [98, 167, 168, 169, 137], [14, 44, 45, 46, 15], [13, 12, 38, 39, 40], [123, 155, 156, 157, 124], [102, 140, 141, 142, 103], [28, 27, 56, 57, 58], [75, 74, 113, 114, 115], [48, 83, 84, 85, 49], [56, 92, 93, 94, 57], [9, 8, 32, 33, 34], [74, 149, 150, 151, 113], [21, 20, 53, 54, 55], [92, 131, 132, 133, 93], [58, 57, 95, 96, 97], [43, 42, 74, 75, 76], [84, 119, 120, 121, 85], [26, 59, 60, 61, 27], [29, 65, 66, 67, 30], [78, 116, 117, 118, 79], [51, 50, 89, 90, 91], [69, 107, 108, 109, 70], [66, 65, 104, 105, 106], [41, 77, 78, 79, 42], [90, 89, 125, 126, 127], [35, 68, 69, 70, 36]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[162,161],
      [129,160],
      [153,152],
      [144,143],
      [137,98],
      [138,137],
      [135,134],
      [129,128],
      [124,123],
      [121,120],
      [113,74],
      [114,113],
      [109,108],
      [103,102],
      [99,98],
      [97,96],
      [93,92],
      [94,93],
      [90,89],
      [87,86],
      [85,84],
      [79,78],
      [75,74],
      [72,71],
      [70,69],
      [66,65],
      [63,62],
      [64,63],
      [58,57],
      [57,56],
      [51,50],
      [52,51],
      [49,48],
      [45,44],
      [42,41],
      [43,42],
      [39,38],
      [36,35],
      [30,29],
      [31,30],
      [27,26],
      [28,27],
      [21,20],
      [22,21],
      [20,5],
      [15,14],
      [16,15],
      [13,12],
      [2,13],
      [9,8],
      [10,9],
      [8,2],
      [7,6],
      [6,5],
      [4,3],
      [0,4],
      [2,1],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678];

obj0.userData.subtrees = [[179,180,181],
      [176,177,178],
      [173,174,175],
      [170,171,172],
      [167,168,169],
      [164,165,166],
      [161,162,163,179,180,181],
      [158,159,160,176,177,178],
      [155,156,157],
      [152,153,154,173,174,175],
      [149,150,151],
      [146,147,148],
      [143,144,145,170,171,172],
      [140,141,142],
      [137,138,139,164,165,166,167,168,169],
      [134,135,136,161,162,163,179,180,181],
      [131,132,133],
      [128,129,130,158,159,160,176,177,178],
      [125,126,127],
      [122,123,124,155,156,157],
      [119,120,121,152,153,154,173,174,175],
      [116,117,118],
      [113,114,115,146,147,148,149,150,151],
      [110,111,112],
      [107,108,109,143,144,145,170,171,172],
      [104,105,106],
      [101,102,103,140,141,142],
      [98,99,100,137,138,139,164,165,166,167,168,169],
      [95,96,97,134,135,136,161,162,163,179,180,181],
      [92,93,94,128,129,130,131,132,133,158,159,160,176,177,178],
      [89,90,91,125,126,127],
      [86,87,88,122,123,124,155,156,157],
      [83,84,85,119,120,121,152,153,154,173,174,175],
      [80,81,82],
      [77,78,79,116,117,118],
      [74,75,76,113,114,115,146,147,148,149,150,151],
      [71,72,73,110,111,112],
      [68,69,70,107,108,109,143,144,145,170,171,172],
      [65,66,67,104,105,106],
      [62,63,64,98,99,100,101,102,103,137,138,139,140,141,142,164,165,166,167,168,169],
      [59,60,61],
      [56,57,58,92,93,94,95,96,97,128,129,130,131,132,133,134,135,136,158,159,160,161,162,163,176,177,178,179,180,181],
      [53,54,55],
      [50,51,52,86,87,88,89,90,91,122,123,124,125,126,127,155,156,157],
      [47,48,49,83,84,85,119,120,121,152,153,154,173,174,175],
      [44,45,46,80,81,82],
      [41,42,43,74,75,76,77,78,79,113,114,115,116,117,118,146,147,148,149,150,151],
      [38,39,40,71,72,73,110,111,112],
      [35,36,37,68,69,70,107,108,109,143,144,145,170,171,172],
      [32,33,34],
      [29,30,31,62,63,64,65,66,67,98,99,100,101,102,103,104,105,106,137,138,139,140,141,142,164,165,166,167,168,169],
      [26,27,28,56,57,58,59,60,61,92,93,94,95,96,97,128,129,130,131,132,133,134,135,136,158,159,160,161,162,163,176,177,178,179,180,181],
      [23,24,25],
      [20,21,22,47,48,49,50,51,52,53,54,55,83,84,85,86,87,88,89,90,91,119,120,121,122,123,124,125,126,127,152,153,154,155,156,157,173,174,175],
      [17,18,19],
      [14,15,16,41,42,43,44,45,46,74,75,76,77,78,79,80,81,82,113,114,115,116,117,118,146,147,148,149,150,151],
      [11,12,13,35,36,37,38,39,40,68,69,70,71,72,73,107,108,109,110,111,112,143,144,145,170,171,172],
      [8,9,10,26,27,28,29,30,31,32,33,34,56,57,58,59,60,61,62,63,64,65,66,67,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,158,159,160,161,162,163,164,165,166,167,168,169,176,177,178,179,180,181],
      [5,6,7,20,21,22,23,24,25,47,48,49,50,51,52,53,54,55,83,84,85,86,87,88,89,90,91,119,120,121,122,123,124,125,126,127,152,153,154,155,156,157,173,174,175]];

obj0.userData.polytoperoot = [[-0.0905341859425005,0.102544628944997,0.984247026619433],
      [0.181597968696005,0.160328477794025,1.01600510131554],
      [0.208371732241254,0.183966389522061,-0.0662742090751588]];

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
