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
obj0.userData.points.push(new PMPoint(0.387763, 0, 0));
obj0.userData.points.push(new PMPoint(0.260485, 0.366279, 0));
obj0.userData.points.push(new PMPoint(-0.127278, 0.366279, 0));
obj0.userData.points.push(new PMPoint(0.162097, -0.318814, 0));
obj0.userData.points.push(new PMPoint(0.54986, -0.318814, 0));
obj0.userData.points.push(new PMPoint(-0.481634, 0.414749, 0));
obj0.userData.points.push(new PMPoint(-0.354357, 0.0484703, 0));
obj0.userData.points.push(new PMPoint(0.55828, -0.314392, 0));
obj0.userData.points.push(new PMPoint(0.774476, -0.0549551, 0));
obj0.userData.points.push(new PMPoint(0.647199, 0.311324, 0));
obj0.userData.points.push(new PMPoint(0.476682, 0.625716, 0));
obj0.userData.points.push(new PMPoint(0.434585, 0.655654, 0));
obj0.userData.points.push(new PMPoint(0.0816417, 0.713529, 0));
obj0.userData.points.push(new PMPoint(-0.306121, 0.713529, 0));
obj0.userData.points.push(new PMPoint(-0.48022, 0.424154, 0));
obj0.userData.points.push(new PMPoint(-0.0289375, -0.656254, 0));
obj0.userData.points.push(new PMPoint(0.358825, -0.656254, 0));
obj0.userData.points.push(new PMPoint(-0.354842, 0.0447792, 0));
obj0.userData.points.push(new PMPoint(-0.192745, -0.274035, 0));
obj0.userData.points.push(new PMPoint(-0.737674, 0.123539, 0));
obj0.userData.points.push(new PMPoint(-0.610397, -0.24274, 0));
obj0.userData.points.push(new PMPoint(1.03482, 0.321634, 0));
obj0.userData.points.push(new PMPoint(0.864308, 0.636026, 0));
obj0.userData.points.push(new PMPoint(1.16224, -0.0549551, 0));
obj0.userData.points.push(new PMPoint(1.03496, 0.311324, 0));
obj0.userData.points.push(new PMPoint(0.898267, -0.425419, 0));
obj0.userData.points.push(new PMPoint(1.28149, -0.484559, 0));
obj0.userData.points.push(new PMPoint(1.49769, -0.225122, 0));
obj0.userData.points.push(new PMPoint(1.1577, -0.114095, 0));
obj0.userData.points.push(new PMPoint(0.317091, 1.02519, 0));
obj0.userData.points.push(new PMPoint(-0.035852, 1.08306, 0));
obj0.userData.points.push(new PMPoint(-0.487773, 1.05611, 0));
obj0.userData.points.push(new PMPoint(-0.704245, 1.34082, 0));
obj0.userData.points.push(new PMPoint(-0.878344, 1.05144, 0));
obj0.userData.points.push(new PMPoint(-0.696692, 0.708861, 0));
obj0.userData.points.push(new PMPoint(-0.0456358, 1.07981, 0));
obj0.userData.points.push(new PMPoint(-0.433399, 1.07981, 0));
obj0.userData.points.push(new PMPoint(0.556406, -0.954382, 0));
obj0.userData.points.push(new PMPoint(0.747441, -0.616942, 0));
obj0.userData.points.push(new PMPoint(-0.194847, -0.296249, 0));
obj0.userData.points.push(new PMPoint(-0.385882, -0.633689, 0));
obj0.userData.points.push(new PMPoint(-0.185153, -0.977992, 0));
obj0.userData.points.push(new PMPoint(0.20261, -0.977992, 0));
obj0.userData.points.push(new PMPoint(-0.589021, -0.264285, 0));
obj0.userData.points.push(new PMPoint(-0.426923, -0.583099, 0));
obj0.userData.points.push(new PMPoint(-0.990311, -0.129627, 0));
obj0.userData.points.push(new PMPoint(-0.863034, -0.495906, 0));
obj0.userData.points.push(new PMPoint(-0.828098, 0.503527, 0));
obj0.userData.points.push(new PMPoint(-1.08414, 0.212317, 0));
obj0.userData.points.push(new PMPoint(1.0463, 0.978426, 0));
obj0.userData.points.push(new PMPoint(0.658677, 0.968116, 0));
obj0.userData.points.push(new PMPoint(1.39073, 0.286305, 0));
obj0.userData.points.push(new PMPoint(1.22022, 0.600697, 0));
obj0.userData.points.push(new PMPoint(1.5166, -0.103425, 0));
obj0.userData.points.push(new PMPoint(1.38932, 0.262854, 0));
obj0.userData.points.push(new PMPoint(1.40877, -0.850838, 0));
obj0.userData.points.push(new PMPoint(1.57929, -1.16523, 0));
obj0.userData.points.push(new PMPoint(1.79548, -0.905793, 0));
obj0.userData.points.push(new PMPoint(1.66821, -0.539514, 0));
obj0.userData.points.push(new PMPoint(0.968192, -0.806825, 0));
obj0.userData.points.push(new PMPoint(1.35142, -0.865965, 0));
obj0.userData.points.push(new PMPoint(0.166898, 1.34978, 0));
obj0.userData.points.push(new PMPoint(-0.186045, 1.40766, 0));
obj0.userData.points.push(new PMPoint(-1.26157, 0.992304, 0));
obj0.userData.points.push(new PMPoint(-1.07992, 0.649722, 0));
obj0.userData.points.push(new PMPoint(-1.05719, 1.39869, 0));
obj0.userData.points.push(new PMPoint(-1.44495, 1.39869, 0));
obj0.userData.points.push(new PMPoint(-1.61905, 1.10932, 0));
obj0.userData.points.push(new PMPoint(-1.26611, 1.05144, 0));
obj0.userData.points.push(new PMPoint(-0.207733, 1.39862, 0));
obj0.userData.points.push(new PMPoint(-0.595496, 1.39862, 0));
obj0.userData.points.push(new PMPoint(0.222977, -0.987107, 0));
obj0.userData.points.push(new PMPoint(0.420558, -1.28523, 0));
obj0.userData.points.push(new PMPoint(-0.550608, -0.951153, 0));
obj0.userData.points.push(new PMPoint(-0.193664, -0.973718, 0));
obj0.userData.points.push(new PMPoint(-0.0289375, -1.29973, 0));
obj0.userData.points.push(new PMPoint(0.358825, -1.29973, 0));
obj0.userData.points.push(new PMPoint(-0.815277, -0.54128, 0));
obj0.userData.points.push(new PMPoint(-0.65318, -0.860094, 0));
obj0.userData.points.push(new PMPoint(-1.3455, -0.0876725, 0));
obj0.userData.points.push(new PMPoint(-1.21822, -0.453952, 0));
obj0.userData.points.push(new PMPoint(-1.089, 0.19054, 0));
obj0.userData.points.push(new PMPoint(-1.34164, -0.0626262, 0));
obj0.userData.points.push(new PMPoint(1.22173, 0.622959, 0));
obj0.userData.points.push(new PMPoint(1.40372, 0.965359, 0));
obj0.userData.points.push(new PMPoint(1.19391, 1.3042, 0));
obj0.userData.points.push(new PMPoint(0.806283, 1.29389, 0));
obj0.userData.points.push(new PMPoint(1.61661, 0.601487, 0));
obj0.userData.points.push(new PMPoint(1.44609, 0.915878, 0));
obj0.userData.points.push(new PMPoint(1.77264, 0.187785, 0));
obj0.userData.points.push(new PMPoint(1.64536, 0.554064, 0));
obj0.userData.points.push(new PMPoint(2.05583, -0.529204, 0));
obj0.userData.points.push(new PMPoint(1.88532, -0.214812, 0));
obj0.userData.points.push(new PMPoint(2.18325, -0.905793, 0));
obj0.userData.points.push(new PMPoint(2.05597, -0.539514, 0));
obj0.userData.points.push(new PMPoint(1.91927, -1.27626, 0));
obj0.userData.points.push(new PMPoint(2.3025, -1.3354, 0));
obj0.userData.points.push(new PMPoint(2.5187, -1.07596, 0));
obj0.userData.points.push(new PMPoint(2.17871, -0.964933, 0));
obj0.userData.points.push(new PMPoint(1.07977, -1.14663, 0));
obj0.userData.points.push(new PMPoint(1.463, -1.20577, 0));
obj0.userData.points.push(new PMPoint(0.390476, 1.6666, 0));
obj0.userData.points.push(new PMPoint(0.0375329, 1.72447, 0));
obj0.userData.points.push(new PMPoint(-1.61917, 0.986162, 0));
obj0.userData.points.push(new PMPoint(-1.43752, 0.64358, 0));
obj0.userData.points.push(new PMPoint(-0.821738, 1.71035, 0));
obj0.userData.points.push(new PMPoint(-1.17468, 1.76823, 0));
obj0.userData.points.push(new PMPoint(-1.18446, 1.76497, 0));
obj0.userData.points.push(new PMPoint(-1.57223, 1.76497, 0));
obj0.userData.points.push(new PMPoint(-1.6266, 1.74128, 0));
obj0.userData.points.push(new PMPoint(-1.84307, 2.02598, 0));
obj0.userData.points.push(new PMPoint(-2.01717, 1.73661, 0));
obj0.userData.points.push(new PMPoint(-1.83552, 1.39403, 0));
obj0.userData.points.push(new PMPoint(-0.0166983, 1.73606, 0));
obj0.userData.points.push(new PMPoint(-0.404461, 1.73606, 0));
obj0.userData.points.push(new PMPoint(-0.427172, -1.28683, 0));
obj0.userData.points.push(new PMPoint(-0.0702278, -1.3094, 0));
obj0.userData.points.push(new PMPoint(0.162097, -1.63717, 0));
obj0.userData.points.push(new PMPoint(0.54986, -1.63717, 0));
obj0.userData.points.push(new PMPoint(-1.1724, -0.560895, 0));
obj0.userData.points.push(new PMPoint(-1.0103, -0.879709, 0));
obj0.userData.points.push(new PMPoint(-1.72695, -0.0179815, 0));
obj0.userData.points.push(new PMPoint(-1.59967, -0.384261, 0));
obj0.userData.points.push(new PMPoint(1.55995, 1.28709, 0));
obj0.userData.points.push(new PMPoint(1.20253, 1.30016, 0));
obj0.userData.points.push(new PMPoint(1.83542, 0.8844, 0));
obj0.userData.points.push(new PMPoint(1.6649, 1.19879, 0));
obj0.userData.points.push(new PMPoint(2.02527, 0.440951, 0));
obj0.userData.points.push(new PMPoint(1.898, 0.80723, 0));
obj0.userData.points.push(new PMPoint(2.41174, -0.564533, 0));
obj0.userData.points.push(new PMPoint(2.24122, -0.250141, 0));
obj0.userData.points.push(new PMPoint(2.5376, -0.954263, 0));
obj0.userData.points.push(new PMPoint(2.41033, -0.587984, 0));
obj0.userData.points.push(new PMPoint(1.63905, -1.54836, 0));
obj0.userData.points.push(new PMPoint(1.97903, -1.65939, 0));
obj0.userData.points.push(new PMPoint(2.42978, -1.70168, 0));
obj0.userData.points.push(new PMPoint(2.6003, -2.01607, 0));
obj0.userData.points.push(new PMPoint(2.81649, -1.75663, 0));
obj0.userData.points.push(new PMPoint(2.68921, -1.39035, 0));
obj0.userData.points.push(new PMPoint(1.9892, -1.65766, 0));
obj0.userData.points.push(new PMPoint(2.37243, -1.7168, 0));
obj0.userData.points.push(new PMPoint(0.585893, 1.96615, 0));
obj0.userData.points.push(new PMPoint(0.23295, 2.02402, 0));
obj0.userData.points.push(new PMPoint(-0.971931, 2.03495, 0));
obj0.userData.points.push(new PMPoint(-1.32487, 2.09282, 0));
obj0.userData.points.push(new PMPoint(-1.34656, 2.08379, 0));
obj0.userData.points.push(new PMPoint(-1.73433, 2.08379, 0));
obj0.userData.points.push(new PMPoint(-2.21704, 1.32472, 0));
obj0.userData.points.push(new PMPoint(-2.00057, 1.04001, 0));
obj0.userData.points.push(new PMPoint(-2.19602, 2.08386, 0));
obj0.userData.points.push(new PMPoint(-2.58378, 2.08386, 0));
obj0.userData.points.push(new PMPoint(-2.75788, 1.79448, 0));
obj0.userData.points.push(new PMPoint(-2.40494, 1.73661, 0));
obj0.userData.points.push(new PMPoint(-2.4004, 1.67747, 0));
obj0.userData.points.push(new PMPoint(-2.21875, 1.33489, 0));
obj0.userData.points.push(new PMPoint(0.139517, 2.0578, 0));
obj0.userData.points.push(new PMPoint(-0.248246, 2.0578, 0));
obj0.userData.points.push(new PMPoint(-0.280152, -1.64565, 0));
obj0.userData.points.push(new PMPoint(0.0767917, -1.66821, 0));
obj0.userData.points.push(new PMPoint(-0.807901, -1.19958, 0));
obj0.userData.points.push(new PMPoint(-0.684465, -1.53527, 0));
obj0.userData.points.push(new PMPoint(-1.56009, -0.568016, 0));
obj0.userData.points.push(new PMPoint(-1.398, -0.88683, 0));
obj0.userData.points.push(new PMPoint(2.19189, 0.913503, 0));
obj0.userData.points.push(new PMPoint(2.02138, 1.22789, 0));
obj0.userData.points.push(new PMPoint(2.38046, 0.398997, 0));
obj0.userData.points.push(new PMPoint(2.25318, 0.765276, 0));
obj0.userData.points.push(new PMPoint(2.79364, -0.663053, 0));
obj0.userData.points.push(new PMPoint(2.66637, -0.296774, 0));
obj0.userData.points.push(new PMPoint(1.73798, -1.89206, 0));
obj0.userData.points.push(new PMPoint(2.07796, -2.00309, 0));
obj0.userData.points.push(new PMPoint(3.07684, -1.38004, 0));
obj0.userData.points.push(new PMPoint(2.90632, -1.06565, 0));
obj0.userData.points.push(new PMPoint(3.20426, -1.75663, 0));
obj0.userData.points.push(new PMPoint(3.07698, -1.39035, 0));
obj0.userData.points.push(new PMPoint(2.10078, -1.99747, 0));
obj0.userData.points.push(new PMPoint(2.484, -2.05661, 0));
obj0.userData.points.push(new PMPoint(0.496377, 2.31242, 0));
obj0.userData.points.push(new PMPoint(0.143434, 2.3703, 0));
obj0.userData.points.push(new PMPoint(-0.748353, 2.35176, 0));
obj0.userData.points.push(new PMPoint(-1.1013, 2.40964, 0));
obj0.userData.points.push(new PMPoint(-1.15553, 2.42123, 0));
obj0.userData.points.push(new PMPoint(-1.54329, 2.42123, 0));
obj0.userData.points.push(new PMPoint(-2.57417, 1.30535, 0));
obj0.userData.points.push(new PMPoint(-2.3577, 1.02064, 0));
obj0.userData.points.push(new PMPoint(-1.96057, 2.39552, 0));
obj0.userData.points.push(new PMPoint(-2.31351, 2.45339, 0));
obj0.userData.points.push(new PMPoint(-2.758, 1.67133, 0));
obj0.userData.points.push(new PMPoint(-2.57635, 1.32874, 0));
obj0.userData.points.push(new PMPoint(-0.665659, -1.55337, 0));
obj0.userData.points.push(new PMPoint(-0.518639, -1.91218, 0));
obj0.userData.points.push(new PMPoint(-1.07684, -1.47893, 0));
obj0.userData.points.push(new PMPoint(-0.953401, -1.81461, 0));
obj0.userData.points.push(new PMPoint(2.57926, 0.93093, 0));
obj0.userData.points.push(new PMPoint(2.40875, 1.24532, 0));
obj0.userData.points.push(new PMPoint(3.43275, -1.41537, 0));
obj0.userData.points.push(new PMPoint(3.26223, -1.10098, 0));
obj0.userData.points.push(new PMPoint(1.86051, -2.30183, 0));
obj0.userData.points.push(new PMPoint(2.24374, -2.36097, 0));
obj0.userData.points.push(new PMPoint(0.38569, 2.68405, 0));
obj0.userData.points.push(new PMPoint(0.0327466, 2.74193, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 3, 6, 0, 7, 6, 7, 1, 8, 8, 9, 9, 10, 2, 11, 10, 11, 2, 12, 12, 13, 13, 14, 3, 15, 14, 15, 4, 16, 5, 17, 16, 17, 0, 18, 4, 19, 18, 19, 6, 20, 7, 21, 20, 21, 10, 22, 11, 23, 22, 23, 9, 24, 10, 25, 24, 25, 8, 26, 26, 27, 27, 28, 9, 29, 28, 29, 12, 30, 13, 31, 30, 31, 14, 32, 32, 33, 33, 34, 15, 35, 34, 35, 13, 36, 14, 37, 36, 37, 17, 38, 5, 39, 38, 39, 4, 40, 16, 41, 40, 41, 16, 42, 17, 43, 42, 43, 18, 44, 19, 45, 44, 45, 20, 46, 21, 47, 46, 47, 6, 48, 20, 49, 48, 49, 23, 50, 11, 51, 50, 51, 22, 52, 23, 53, 52, 53, 24, 54, 25, 55, 54, 55, 27, 56, 56, 57, 57, 58, 28, 59, 58, 59, 26, 60, 27, 61, 60, 61, 30, 62, 31, 63, 62, 63, 34, 64, 35, 65, 64, 65, 33, 66, 66, 67, 67, 68, 34, 69, 68, 69, 36, 70, 37, 71, 70, 71, 17, 72, 38, 73, 72, 73, 41, 74, 16, 75, 74, 75, 42, 76, 43, 77, 76, 77, 44, 78, 45, 79, 78, 79, 46, 80, 47, 81, 80, 81, 20, 82, 46, 83, 82, 83, 23, 84, 50, 85, 84, 85, 50, 86, 51, 87, 86, 87, 52, 88, 53, 89, 88, 89, 54, 90, 55, 91, 90, 91, 59, 92, 28, 93, 92, 93, 58, 94, 59, 95, 94, 95, 57, 96, 96, 97, 97, 98, 58, 99, 98, 99, 60, 100, 61, 101, 100, 101, 62, 102, 63, 103, 102, 103, 64, 104, 65, 105, 104, 105, 33, 106, 66, 107, 106, 107, 66, 108, 67, 109, 108, 109, 67, 110, 110, 111, 111, 112, 68, 113, 112, 113, 70, 114, 71, 115, 114, 115, 74, 116, 75, 117, 116, 117, 76, 118, 77, 119, 118, 119, 78, 120, 79, 121, 120, 121, 80, 122, 81, 123, 122, 123, 85, 124, 50, 125, 124, 125, 88, 126, 89, 127, 126, 127, 90, 128, 91, 129, 128, 129, 92, 130, 93, 131, 130, 131, 94, 132, 95, 133, 132, 133, 57, 134, 96, 135, 134, 135, 97, 136, 136, 137, 137, 138, 98, 139, 138, 139, 96, 140, 97, 141, 140, 141, 102, 142, 103, 143, 142, 143, 106, 144, 107, 145, 144, 145, 108, 146, 109, 147, 146, 147, 113, 148, 68, 149, 148, 149, 111, 150, 150, 151, 151, 152, 112, 153, 152, 153, 112, 154, 113, 155, 154, 155, 114, 156, 115, 157, 156, 157, 116, 158, 117, 159, 158, 159, 74, 160, 116, 161, 160, 161, 120, 162, 121, 163, 162, 163, 126, 164, 127, 165, 164, 165, 128, 166, 129, 167, 166, 167, 132, 168, 133, 169, 168, 169, 134, 170, 135, 171, 170, 171, 139, 172, 98, 173, 172, 173, 138, 174, 139, 175, 174, 175, 140, 176, 141, 177, 176, 177, 142, 178, 143, 179, 178, 179, 144, 180, 145, 181, 180, 181, 146, 182, 147, 183, 182, 183, 148, 184, 149, 185, 184, 185, 111, 186, 150, 187, 186, 187, 154, 188, 155, 189, 188, 189, 116, 190, 158, 191, 190, 191, 160, 192, 161, 193, 192, 193, 164, 194, 165, 195, 194, 195, 172, 196, 173, 197, 196, 197, 176, 198, 177, 199, 198, 199, 178, 200, 179, 201, 200, 201];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [21, 20, 46, 47], [5, 1, 0, 4], [11, 10, 22, 23], [0, 3, 6, 7], [2, 1, 8, 9, 10, 11], [5, 4, 16, 17], [10, 9, 24, 25], [3, 2, 12, 13, 14, 15], [9, 8, 26, 27, 28, 29], [0, 18, 19, 4], [23, 84, 85, 50], [13, 12, 30, 31], [11, 23, 50, 51], [28, 27, 56, 57, 58, 59], [23, 22, 52, 53], [24, 54, 55, 25], [39, 5, 17, 38], [15, 14, 32, 33, 34, 35], [31, 30, 62, 63], [18, 44, 45, 19], [27, 26, 60, 61], [4, 40, 41, 16], [28, 59, 92, 93], [43, 42, 76, 77], [16, 41, 74, 75], [17, 16, 42, 43], [14, 13, 36, 37], [93, 92, 130, 131], [61, 60, 100, 101], [53, 52, 88, 89], [38, 17, 72, 73], [51, 50, 86, 87], [78, 120, 121, 79], [7, 6, 20, 21], [71, 70, 114, 115], [144, 180, 181, 145], [47, 46, 80, 81], [103, 102, 142, 143], [55, 54, 90, 91], [6, 48, 49, 20], [89, 88, 126, 127], [20, 82, 83, 46], [50, 85, 124, 125], [44, 78, 79, 45], [37, 36, 70, 71], [63, 62, 102, 103], [119, 77, 76, 118], [59, 58, 94, 95], [75, 74, 116, 117], [35, 34, 64, 65], [91, 90, 128, 129], [159, 117, 116, 158], [115, 114, 156, 157], [107, 106, 144, 145], [158, 116, 190, 191], [127, 126, 164, 165], [34, 33, 66, 67, 68, 69], [96, 57, 134, 135], [64, 104, 105, 65], [133, 132, 168, 169], [58, 57, 96, 97, 98, 99], [94, 132, 133, 95], [143, 142, 178, 179], [135, 134, 170, 171], [177, 176, 198, 199], [66, 33, 106, 107], [74, 160, 161, 116], [128, 166, 167, 129], [68, 113, 148, 149], [164, 194, 195, 165], [120, 162, 163, 121], [67, 66, 108, 109], [141, 140, 176, 177], [98, 97, 136, 137, 138, 139], [149, 148, 184, 185], [179, 178, 200, 201], [97, 96, 140, 141], [80, 122, 123, 81], [112, 111, 150, 151, 152, 153], [109, 108, 146, 147], [192, 193, 161, 160], [147, 146, 182, 183], [68, 67, 110, 111, 112, 113], [113, 112, 154, 155], [154, 188, 189, 155], [98, 139, 172, 173], [173, 172, 196, 197], [150, 111, 186, 187], [139, 138, 174, 175]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[179,178],
      [177,176],
      [173,172],
      [165,164],
      [161,160],
      [158,116],
      [155,154],
      [150,111],
      [149,148],
      [147,146],
      [145,144],
      [143,142],
      [141,140],
      [139,138],
      [98,139],
      [135,134],
      [133,132],
      [129,128],
      [127,126],
      [121,120],
      [116,74],
      [117,116],
      [115,114],
      [113,112],
      [112,111],
      [68,113],
      [109,108],
      [107,106],
      [103,102],
      [97,96],
      [98,97],
      [96,57],
      [95,94],
      [93,92],
      [91,90],
      [89,88],
      [50,85],
      [81,80],
      [79,78],
      [77,76],
      [75,74],
      [71,70],
      [68,67],
      [67,66],
      [66,33],
      [65,64],
      [63,62],
      [61,60],
      [58,57],
      [59,58],
      [28,59],
      [55,54],
      [53,52],
      [51,50],
      [50,23],
      [46,20],
      [47,46],
      [45,44],
      [43,42],
      [16,41],
      [38,17],
      [37,36],
      [34,33],
      [35,34],
      [31,30],
      [27,26],
      [28,27],
      [25,24],
      [23,22],
      [11,23],
      [20,6],
      [21,20],
      [19,18],
      [17,16],
      [16,4],
      [5,17],
      [14,13],
      [15,14],
      [13,12],
      [9,8],
      [10,9],
      [11,10],
      [7,6],
      [4,0],
      [5,4],
      [3,2],
      [2,1],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.96699404391213,
      2.58849631652854,
      3.02153496036176,
      2.96699404391213,
      2.96699404391213,
      2.76335690838035,
      3.04464836280388,
      2.54113626434684,
      3.02153496036176,
      2.58849631652854,
      2.72857378471577,
      2.61626312204535,
      3.04464836280388,
      2.57921589855211,
      2.54113626434684,
      3.02153496036176,
      2.58849631652853,
      2.76335690838035,
      2.61626312204535,
      2.96699404391213,
      2.61626312204535,
      2.96699404391213,
      2.97233158228447,
      2.57921589855211,
      2.51327412287183,
      2.54113626434684,
      3.04464836280388,
      3.02153496036176,
      2.96699404391213,
      2.57921589855211,
      2.51327412287183,
      2.54113626434684,
      3.04464836280388,
      3.02153496036176,
      2.97233158228447,
      2.96699404391213,
      2.96699404391213,
      2.97233158228447,
      2.61626312204535,
      2.97233158228447,
      2.61626312204535,
      2.58849631652853,
      2.51327412287183,
      2.57921589855211,
      2.54113626434684,
      3.04464836280388,
      2.72857378471577,
      3.04464836280388,
      2.51327412287183,
      2.57921589855211,
      2.54113626434684,
      2.58849631652853,
      2.72857378471577,
      2.97233158228447,
      2.97233158228447,
      2.72857378471577,
      2.76335690838035,
      2.96699404391213,
      2.76335690838035,
      2.96699404391213,
      3.02153496036176,
      3.04464836280388,
      2.51327412287183,
      2.57921589855211,
      3.02153496036176,
      2.57921589855211,
      2.51327412287183,
      3.04464836280388,
      3.02153496036176,
      2.58849631652854,
      2.58849631652853,
      2.97233158228447,
      2.72857378471577,
      2.97233158228447,
      2.97233158228447,
      2.58849631652854,
      2.57921589855211,
      2.51327412287183,
      2.54113626434684,
      2.51327412287183,
      2.57921589855211,
      2.54113626434684,
      2.58849631652853,
      3.02153496036176,
      2.58849631652854,
      2.57921589855211,
      2.57921589855211,
      3.04464836280388,
      3.04464836280388];

obj0.userData.subtrees = [[200,201],
      [198,199],
      [196,197],
      [194,195],
      [192,193],
      [190,191],
      [188,189],
      [186,187],
      [184,185],
      [182,183],
      [180,181],
      [178,179,200,201],
      [176,177,198,199],
      [174,175],
      [172,173,196,197],
      [170,171],
      [168,169],
      [166,167],
      [164,165,194,195],
      [162,163],
      [160,161,192,193],
      [158,159,190,191],
      [156,157],
      [154,155,188,189],
      [150,151,152,153,186,187],
      [148,149,184,185],
      [146,147,182,183],
      [144,145,180,181],
      [142,143,178,179,200,201],
      [140,141,176,177,198,199],
      [136,137,138,139,172,173,174,175,196,197],
      [134,135,170,171],
      [132,133,168,169],
      [130,131],
      [128,129,166,167],
      [126,127,164,165,194,195],
      [124,125],
      [122,123],
      [120,121,162,163],
      [118,119],
      [116,117,158,159,160,161,190,191,192,193],
      [114,115,156,157],
      [110,111,112,113,148,149,150,151,152,153,154,155,184,185,186,187,188,189],
      [108,109,146,147,182,183],
      [106,107,144,145,180,181],
      [104,105],
      [102,103,142,143,178,179,200,201],
      [100,101],
      [96,97,98,99,134,135,136,137,138,139,140,141,170,171,172,173,174,175,176,177,196,197,198,199],
      [94,95,132,133,168,169],
      [92,93,130,131],
      [90,91,128,129,166,167],
      [88,89,126,127,164,165,194,195],
      [86,87],
      [84,85,124,125],
      [82,83],
      [80,81,122,123],
      [78,79,120,121,162,163],
      [76,77,118,119],
      [74,75,116,117,158,159,160,161,190,191,192,193],
      [72,73],
      [70,71,114,115,156,157],
      [66,67,68,69,106,107,108,109,110,111,112,113,144,145,146,147,148,149,150,151,152,153,154,155,180,181,182,183,184,185,186,187,188,189],
      [64,65,104,105],
      [62,63,102,103,142,143,178,179,200,201],
      [60,61,100,101],
      [56,57,58,59,92,93,94,95,96,97,98,99,130,131,132,133,134,135,136,137,138,139,140,141,168,169,170,171,172,173,174,175,176,177,196,197,198,199],
      [54,55,90,91,128,129,166,167],
      [52,53,88,89,126,127,164,165,194,195],
      [50,51,84,85,86,87,124,125],
      [48,49],
      [46,47,80,81,82,83,122,123],
      [44,45,78,79,120,121,162,163],
      [42,43,76,77,118,119],
      [40,41,74,75,116,117,158,159,160,161,190,191,192,193],
      [38,39,72,73],
      [36,37,70,71,114,115,156,157],
      [32,33,34,35,64,65,66,67,68,69,104,105,106,107,108,109,110,111,112,113,144,145,146,147,148,149,150,151,152,153,154,155,180,181,182,183,184,185,186,187,188,189],
      [30,31,62,63,102,103,142,143,178,179,200,201],
      [26,27,28,29,56,57,58,59,60,61,92,93,94,95,96,97,98,99,100,101,130,131,132,133,134,135,136,137,138,139,140,141,168,169,170,171,172,173,174,175,176,177,196,197,198,199],
      [24,25,54,55,90,91,128,129,166,167],
      [22,23,50,51,52,53,84,85,86,87,88,89,124,125,126,127,164,165,194,195],
      [20,21,46,47,48,49,80,81,82,83,122,123],
      [18,19,44,45,78,79,120,121,162,163],
      [16,17,38,39,40,41,42,43,72,73,74,75,76,77,116,117,118,119,158,159,160,161,190,191,192,193],
      [12,13,14,15,30,31,32,33,34,35,36,37,62,63,64,65,66,67,68,69,70,71,102,103,104,105,106,107,108,109,110,111,112,113,114,115,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,178,179,180,181,182,183,184,185,186,187,188,189,200,201],
      [8,9,10,11,22,23,24,25,26,27,28,29,50,51,52,53,54,55,56,57,58,59,60,61,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,164,165,166,167,168,169,170,171,172,173,174,175,176,177,194,195,196,197,198,199],
      [6,7,20,21,46,47,48,49,80,81,82,83,122,123],
      [4,5,16,17,18,19,38,39,40,41,42,43,44,45,72,73,74,75,76,77,78,79,116,117,118,119,120,121,158,159,160,161,162,163,190,191,192,193]];

obj0.userData.polytoperoot = [[-0.827301821768595,-0.201091658066024,-0.440282656499771],
      [-4.56913855191995,-1.31856048978649,-2.5601708264367],
      [-0.366530045539774,2.02497591716849,-0.388773540170405]];

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
