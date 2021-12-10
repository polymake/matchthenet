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
obj0.userData.points.push(new PMPoint(0.243121, 0, 0));
obj0.userData.points.push(new PMPoint(0.168315, 0.231326, 0));
obj0.userData.points.push(new PMPoint(-0.0748065, 0.231326, 0));
obj0.userData.points.push(new PMPoint(-0.324734, -0.196995, 0));
obj0.userData.points.push(new PMPoint(-0.0816131, -0.196995, 0));
obj0.userData.points.push(new PMPoint(0.33064, 0.369594, 0));
obj0.userData.points.push(new PMPoint(0.255834, 0.60092, 0));
obj0.userData.points.push(new PMPoint(-0.402641, 0.0395363, 0));
obj0.userData.points.push(new PMPoint(-0.327835, -0.19179, 0));
obj0.userData.points.push(new PMPoint(0.249928, 0.602269, 0));
obj0.userData.points.push(new PMPoint(0.00680666, 0.602269, 0));
obj0.userData.points.push(new PMPoint(-0.317042, -0.495042, 0));
obj0.userData.points.push(new PMPoint(0.00769178, -0.298047, 0));
obj0.userData.points.push(new PMPoint(-0.574662, -0.482993, 0));
obj0.userData.points.push(new PMPoint(-0.331541, -0.482993, 0));
obj0.userData.points.push(new PMPoint(0.454269, 0.315714, 0));
obj0.userData.points.push(new PMPoint(0.541788, 0.685308, 0));
obj0.userData.points.push(new PMPoint(0.525863, 0.695396, 0));
obj0.userData.points.push(new PMPoint(0.451057, 0.926722, 0));
obj0.userData.points.push(new PMPoint(-0.00583479, 0.604826, 0));
obj0.userData.points.push(new PMPoint(-0.33367, 0.413036, 0));
obj0.userData.points.push(new PMPoint(-0.683831, -0.21579, 0));
obj0.userData.points.push(new PMPoint(-0.609024, -0.447116, 0));
obj0.userData.points.push(new PMPoint(0.406347, 0.948379, 0));
obj0.userData.points.push(new PMPoint(0.163226, 0.948379, 0));
obj0.userData.points.push(new PMPoint(-0.0222026, -0.539323, 0));
obj0.userData.points.push(new PMPoint(0.213227, -0.241276, 0));
obj0.userData.points.push(new PMPoint(-0.358871, -0.734538, 0));
obj0.userData.points.push(new PMPoint(-0.0341373, -0.537543, 0));
obj0.userData.points.push(new PMPoint(-0.66817, -0.707413, 0));
obj0.userData.points.push(new PMPoint(-0.425049, -0.707413, 0));
obj0.userData.points.push(new PMPoint(0.463494, 0.102683, 0));
obj0.userData.points.push(new PMPoint(0.674642, 0.418397, 0));
obj0.userData.points.push(new PMPoint(0.669275, 0.429205, 0));
obj0.userData.points.push(new PMPoint(0.756795, 0.798799, 0));
obj0.userData.points.push(new PMPoint(0.710624, 0.85342, 0));
obj0.userData.points.push(new PMPoint(0.635817, 1.08475, 0));
obj0.userData.points.push(new PMPoint(-0.70481, 0.493745, 0));
obj0.userData.points.push(new PMPoint(-0.773782, 0.120246, 0));
obj0.userData.points.push(new PMPoint(-0.207862, 0.926453, 0));
obj0.userData.points.push(new PMPoint(-0.535697, 0.734663, 0));
obj0.userData.points.push(new PMPoint(-1.06128, -0.173454, 0));
obj0.userData.points.push(new PMPoint(-0.986472, -0.404781, 0));
obj0.userData.points.push(new PMPoint(-0.77965, 0.0856188, 0));
obj0.userData.points.push(new PMPoint(-1.06084, -0.169708, 0));
obj0.userData.points.push(new PMPoint(0.249928, 1.29449, 0));
obj0.userData.points.push(new PMPoint(0.00680666, 1.29449, 0));
obj0.userData.points.push(new PMPoint(0.00337671, 1.29292, 0));
obj0.userData.points.push(new PMPoint(-0.153043, 0.946808, 0));
obj0.userData.points.push(new PMPoint(0.433599, -0.343959, 0));
obj0.userData.points.push(new PMPoint(0.463494, -0.102683, 0));
obj0.userData.points.push(new PMPoint(0.196504, -0.645508, 0));
obj0.userData.points.push(new PMPoint(0.431933, -0.347461, 0));
obj0.userData.points.push(new PMPoint(-0.158359, -0.872025, 0));
obj0.userData.points.push(new PMPoint(0.166375, -0.67503, 0));
obj0.userData.points.push(new PMPoint(-0.918098, -0.993411, 0));
obj0.userData.points.push(new PMPoint(-0.674977, -0.993411, 0));
obj0.userData.points.push(new PMPoint(-0.934787, -0.603696, 0));
obj0.userData.points.push(new PMPoint(-1.02829, -0.828116, 0));
obj0.userData.points.push(new PMPoint(0.631821, -0.0727413, 0));
obj0.userData.points.push(new PMPoint(0.842969, 0.242973, 0));
obj0.userData.points.push(new PMPoint(0.861788, 0.280725, 0));
obj0.userData.points.push(new PMPoint(0.949308, 0.650318, 0));
obj0.userData.points.push(new PMPoint(0.905846, 1.17922, 0));
obj0.userData.points.push(new PMPoint(0.83104, 1.41055, 0));
obj0.userData.points.push(new PMPoint(0.639857, 1.46454, 0));
obj0.userData.points.push(new PMPoint(0.455096, 1.30652, 0));
obj0.userData.points.push(new PMPoint(-0.543216, 0.729816, 0));
obj0.userData.points.push(new PMPoint(-0.914357, 0.810525, 0));
obj0.userData.points.push(new PMPoint(-0.916014, 0.809423, 0));
obj0.userData.points.push(new PMPoint(-0.984985, 0.435923, 0));
obj0.userData.points.push(new PMPoint(-0.576525, 1.01781, 0));
obj0.userData.points.push(new PMPoint(-0.90436, 0.826025, 0));
obj0.userData.points.push(new PMPoint(-1.43934, -0.209937, 0));
obj0.userData.points.push(new PMPoint(-1.36453, -0.441263, 0));
obj0.userData.points.push(new PMPoint(-1.02599, 0.374716, 0));
obj0.userData.points.push(new PMPoint(-1.30718, 0.11939, 0));
obj0.userData.points.push(new PMPoint(0.168315, 1.66543, 0));
obj0.userData.points.push(new PMPoint(-0.0748065, 1.66543, 0));
obj0.userData.points.push(new PMPoint(-0.347491, 1.43835, 0));
obj0.userData.points.push(new PMPoint(-0.503911, 1.09224, 0));
obj0.userData.points.push(new PMPoint(0.575961, -0.629036, 0));
obj0.userData.points.push(new PMPoint(0.811391, -0.330989, 0));
obj0.userData.points.push(new PMPoint(-0.425594, -1.10845, 0));
obj0.userData.points.push(new PMPoint(-0.225082, -1.24593, 0));
obj0.userData.points.push(new PMPoint(-0.221365, -1.24658, 0));
obj0.userData.points.push(new PMPoint(0.103369, -1.04958, 0));
obj0.userData.points.push(new PMPoint(-1.00228, -0.888052, 0));
obj0.userData.points.push(new PMPoint(-1.25221, -1.17405, 0));
obj0.userData.points.push(new PMPoint(-1.24283, -1.19041, 0));
obj0.userData.points.push(new PMPoint(-0.999711, -1.19041, 0));
obj0.userData.points.push(new PMPoint(-1.24153, -0.827684, 0));
obj0.userData.points.push(new PMPoint(-1.33503, -1.0521, 0));
obj0.userData.points.push(new PMPoint(1.19878, 0.45592, 0));
obj0.userData.points.push(new PMPoint(1.2863, 0.825514, 0));
obj0.userData.points.push(new PMPoint(1.28455, 0.828852, 0));
obj0.userData.points.push(new PMPoint(1.09203, 0.977333, 0));
obj0.userData.points.push(new PMPoint(0.993366, 1.54882, 0));
obj0.userData.points.push(new PMPoint(0.918559, 1.78014, 0));
obj0.userData.points.push(new PMPoint(0.900113, 1.78403, 0));
obj0.userData.points.push(new PMPoint(0.70489, 1.45823, 0));
obj0.userData.points.push(new PMPoint(0.758596, 1.82532, 0));
obj0.userData.points.push(new PMPoint(0.573836, 1.66729, 0));
obj0.userData.points.push(new PMPoint(-1.22603, 0.589996, 0));
obj0.userData.points.push(new PMPoint(-1.295, 0.216496, 0));
obj0.userData.points.push(new PMPoint(-0.475506, 1.38395, 0));
obj0.userData.points.push(new PMPoint(-0.803341, 1.19216, 0));
obj0.userData.points.push(new PMPoint(-1.33589, 0.0889385, 0));
obj0.userData.points.push(new PMPoint(-1.71394, 0.0524561, 0));
obj0.userData.points.push(new PMPoint(-1.63642, -0.352291, 0));
obj0.userData.points.push(new PMPoint(-1.56162, -0.583618, 0));
obj0.userData.points.push(new PMPoint(-0.408964, 1.84598, 0));
obj0.userData.points.push(new PMPoint(-0.327351, 1.47504, 0));
obj0.userData.points.push(new PMPoint(0.243121, 1.89676, 0));
obj0.userData.points.push(new PMPoint(0, 1.89676, 0));
obj0.userData.points.push(new PMPoint(0.224928, -1.02426, 0));
obj0.userData.points.push(new PMPoint(0.604385, -1.00779, 0));
obj0.userData.points.push(new PMPoint(0.86644, -0.873742, 0));
obj0.userData.points.push(new PMPoint(1.10187, -0.575695, 0));
obj0.userData.points.push(new PMPoint(-0.568056, -1.46053, 0));
obj0.userData.points.push(new PMPoint(-0.367544, -1.59802, 0));
obj0.userData.points.push(new PMPoint(-0.0142332, -1.56494, 0));
obj0.userData.points.push(new PMPoint(0.310501, -1.36795, 0));
obj0.userData.points.push(new PMPoint(-1.16803, -1.42173, 0));
obj0.userData.points.push(new PMPoint(-0.924904, -1.42173, 0));
obj0.userData.points.push(new PMPoint(1.56544, 0.356796, 0));
obj0.userData.points.push(new PMPoint(1.65295, 0.726389, 0));
obj0.userData.points.push(new PMPoint(1.57572, 1.07274, 0));
obj0.userData.points.push(new PMPoint(1.3832, 1.22122, 0));
obj0.userData.points.push(new PMPoint(1.23649, 1.54882, 0));
obj0.userData.points.push(new PMPoint(1.16168, 1.78014, 0));
obj0.userData.points.push(new PMPoint(-1.60152, 0.647161, 0));
obj0.userData.points.push(new PMPoint(-1.67049, 0.273662, 0));
obj0.userData.points.push(new PMPoint(-1.2912, 0.868555, 0));
obj0.userData.points.push(new PMPoint(-1.60121, 0.649128, 0));
obj0.userData.points.push(new PMPoint(-0.986449, 1.52492, 0));
obj0.userData.points.push(new PMPoint(-1.08747, 1.15879, 0));
obj0.userData.points.push(new PMPoint(-0.656868, 1.71767, 0));
obj0.userData.points.push(new PMPoint(-0.984703, 1.52588, 0));
obj0.userData.points.push(new PMPoint(-1.91575, -0.0831249, 0));
obj0.userData.points.push(new PMPoint(-1.64114, -0.345518, 0));
obj0.userData.points.push(new PMPoint(-1.92378, -0.103925, 0));
obj0.userData.points.push(new PMPoint(-1.84897, -0.335251, 0));
obj0.userData.points.push(new PMPoint(-0.00789722, 1.89916, 0));
obj0.userData.points.push(new PMPoint(-0.342055, 2.07971, 0));
obj0.userData.points.push(new PMPoint(-0.0816131, 2.09375, 0));
obj0.userData.points.push(new PMPoint(-0.324734, 2.09375, 0));
obj0.userData.points.push(new PMPoint(0.508241, -1.27723, 0));
obj0.userData.points.push(new PMPoint(0.887698, -1.26075, 0));
obj0.userData.points.push(new PMPoint(0.88902, -1.25927, 0));
obj0.userData.points.push(new PMPoint(0.860596, -0.880516, 0));
obj0.userData.points.push(new PMPoint(0.905757, -1.25152, 0));
obj0.userData.points.push(new PMPoint(1.14119, -0.953469, 0));
obj0.userData.points.push(new PMPoint(-0.194052, -1.93589, 0));
obj0.userData.points.push(new PMPoint(-0.05159, -1.58381, 0));
obj0.userData.points.push(new PMPoint(0.35584, -1.65041, 0));
obj0.userData.points.push(new PMPoint(0.680574, -1.45342, 0));
obj0.userData.points.push(new PMPoint(-1.33035, -1.56, 0));
obj0.userData.points.push(new PMPoint(-1.25554, -1.79133, 0));
obj0.userData.points.push(new PMPoint(-1.24964, -1.79267, 0));
obj0.userData.points.push(new PMPoint(-1.00652, -1.79267, 0));
obj0.userData.points.push(new PMPoint(1.96754, 0.939222, 0));
obj0.userData.points.push(new PMPoint(1.60088, 1.03835, 0));
obj0.userData.points.push(new PMPoint(1.76063, 0.0309746, 0));
obj0.userData.points.push(new PMPoint(1.84815, 0.400568, 0));
obj0.userData.points.push(new PMPoint(1.48641, 1.97714, 0));
obj0.userData.points.push(new PMPoint(1.24329, 1.97714, 0));
obj0.userData.points.push(new PMPoint(1.56432, 1.74061, 0));
obj0.userData.points.push(new PMPoint(1.48952, 1.97193, 0));
obj0.userData.points.push(new PMPoint(-1.83924, 0.943388, 0));
obj0.userData.points.push(new PMPoint(-1.90821, 0.569888, 0));
obj0.userData.points.push(new PMPoint(-1.14351, 1.11357, 0));
obj0.userData.points.push(new PMPoint(-1.5187, 1.1727, 0));
obj0.userData.points.push(new PMPoint(-1.52029, 1.1715, 0));
obj0.userData.points.push(new PMPoint(-1.8303, 0.952076, 0));
obj0.userData.points.push(new PMPoint(-1.34922, 1.63743, 0));
obj0.userData.points.push(new PMPoint(-1.45024, 1.2713, 0));
obj0.userData.points.push(new PMPoint(-1.01625, 1.84057, 0));
obj0.userData.points.push(new PMPoint(-1.34408, 1.64878, 0));
obj0.userData.points.push(new PMPoint(-2.0368, 0.252519, 0));
obj0.userData.points.push(new PMPoint(-2.2386, 0.116938, 0));
obj0.userData.points.push(new PMPoint(-2.205, -0.202951, 0));
obj0.userData.points.push(new PMPoint(-1.91764, -0.451317, 0));
obj0.userData.points.push(new PMPoint(-2.2728, 0.0458779, 0));
obj0.userData.points.push(new PMPoint(-2.198, -0.185448, 0));
obj0.userData.points.push(new PMPoint(-0.631751, 2.32534, 0));
obj0.userData.points.push(new PMPoint(-0.698661, 2.09161, 0));
obj0.userData.points.push(new PMPoint(0.00769178, 2.1948, 0));
obj0.userData.points.push(new PMPoint(-0.317042, 2.3918, 0));
obj0.userData.points.push(new PMPoint(-0.331541, 2.37975, 0));
obj0.userData.points.push(new PMPoint(-0.574662, 2.37975, 0));
obj0.userData.points.push(new PMPoint(0.162348, -2.06719, 0));
obj0.userData.points.push(new PMPoint(0.30481, -1.7151, 0));
obj0.userData.points.push(new PMPoint(0.260674, -2.01811, 0));
obj0.userData.points.push(new PMPoint(0.585408, -1.82112, 0));
obj0.userData.points.push(new PMPoint(-1.52557, -1.8858, 0));
obj0.userData.points.push(new PMPoint(-1.45077, -2.11713, 0));
obj0.userData.points.push(new PMPoint(-1.40606, -2.13878, 0));
obj0.userData.points.push(new PMPoint(-1.16294, -2.13878, 0));
obj0.userData.points.push(new PMPoint(1.85577, 0.405256, 0));
obj0.userData.points.push(new PMPoint(2.17035, 0.618089, 0));
obj0.userData.points.push(new PMPoint(1.73634, 2.26314, 0));
obj0.userData.points.push(new PMPoint(1.49322, 2.26314, 0));
obj0.userData.points.push(new PMPoint(1.84551, 1.99593, 0));
obj0.userData.points.push(new PMPoint(1.7707, 2.22726, 0));
obj0.userData.points.push(new PMPoint(-2.07528, 0.885159, 0));
obj0.userData.points.push(new PMPoint(-2.14425, 0.511659, 0));
obj0.userData.points.push(new PMPoint(-1.48388, 1.54957, 0));
obj0.userData.points.push(new PMPoint(-1.7939, 1.33014, 0));
obj0.userData.points.push(new PMPoint(-1.0417, 2.08236, 0));
obj0.userData.points.push(new PMPoint(-1.36953, 1.89057, 0));
obj0.userData.points.push(new PMPoint(-2.51511, 0.0657974, 0));
obj0.userData.points.push(new PMPoint(-2.4403, -0.165529, 0));
obj0.userData.points.push(new PMPoint(-0.425049, 2.60417, 0));
obj0.userData.points.push(new PMPoint(-0.66817, 2.60417, 0));
obj0.userData.points.push(new PMPoint(-0.0606171, -2.2915, 0));
obj0.userData.points.push(new PMPoint(0.295783, -2.42279, 0));
obj0.userData.points.push(new PMPoint(0.7738, -2.15091, 0));
obj0.userData.points.push(new PMPoint(0.868966, -1.78322, 0));
obj0.userData.points.push(new PMPoint(0.447336, -2.34889, 0));
obj0.userData.points.push(new PMPoint(0.77207, -2.1519, 0));
obj0.userData.points.push(new PMPoint(-1.24964, -2.48489, 0));
obj0.userData.points.push(new PMPoint(-1.00652, -2.48489, 0));
obj0.userData.points.push(new PMPoint(1.77892, 0.0332958, 0));
obj0.userData.points.push(new PMPoint(2.09351, 0.246128, 0));
obj0.userData.points.push(new PMPoint(2.54597, 0.56184, 0));
obj0.userData.points.push(new PMPoint(2.34316, 0.882973, 0));
obj0.userData.points.push(new PMPoint(2.22296, 1.9536, 0));
obj0.userData.points.push(new PMPoint(2.14815, 2.18492, 0));
obj0.userData.points.push(new PMPoint(-2.22625, 1.07572, 0));
obj0.userData.points.push(new PMPoint(-2.29523, 0.702223, 0));
obj0.userData.points.push(new PMPoint(-1.84884, 1.32308, 0));
obj0.userData.points.push(new PMPoint(-2.08489, 1.26485, 0));
obj0.userData.points.push(new PMPoint(-1.57841, 1.77356, 0));
obj0.userData.points.push(new PMPoint(-1.88843, 1.55413, 0));
obj0.userData.points.push(new PMPoint(-1.27222, 2.15959, 0));
obj0.userData.points.push(new PMPoint(-1.60006, 1.9678, 0));
obj0.userData.points.push(new PMPoint(-2.86413, 0.2156, 0));
obj0.userData.points.push(new PMPoint(-2.78933, -0.0157258, 0));
obj0.userData.points.push(new PMPoint(-0.674977, 2.89017, 0));
obj0.userData.points.push(new PMPoint(-0.918098, 2.89017, 0));
obj0.userData.points.push(new PMPoint(1.13832, -2.25762, 0));
obj0.userData.points.push(new PMPoint(1.23348, -1.88992, 0));
obj0.userData.points.push(new PMPoint(0.808629, -2.46605, 0));
obj0.userData.points.push(new PMPoint(1.13336, -2.26906, 0));
obj0.userData.points.push(new PMPoint(-1.16803, -2.85584, 0));
obj0.userData.points.push(new PMPoint(-0.924904, -2.85584, 0));
obj0.userData.points.push(new PMPoint(2.60102, 1.99008, 0));
obj0.userData.points.push(new PMPoint(2.52621, 2.2214, 0));
obj0.userData.points.push(new PMPoint(-2.29214, 1.44978, 0));
obj0.userData.points.push(new PMPoint(-2.36111, 1.07628, 0));
obj0.userData.points.push(new PMPoint(-2.12253, 1.26202, 0));
obj0.userData.points.push(new PMPoint(-2.2735, 1.45259, 0));
obj0.userData.points.push(new PMPoint(-1.97687, 1.52976, 0));
obj0.userData.points.push(new PMPoint(-2.21292, 1.47153, 0));
obj0.userData.points.push(new PMPoint(-1.82093, 1.75639, 0));
obj0.userData.points.push(new PMPoint(-2.13094, 1.53697, 0));
obj0.userData.points.push(new PMPoint(-1.64641, 2.09444, 0));
obj0.userData.points.push(new PMPoint(-1.97424, 1.90265, 0));
obj0.userData.points.push(new PMPoint(-3.15149, 0.463967, 0));
obj0.userData.points.push(new PMPoint(-3.07668, 0.23264, 0));
obj0.userData.points.push(new PMPoint(-0.999711, 3.08716, 0));
obj0.userData.points.push(new PMPoint(-1.24283, 3.08716, 0));
obj0.userData.points.push(new PMPoint(-1.24283, -3.08716, 0));
obj0.userData.points.push(new PMPoint(-0.999711, -3.08716, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 4, 14, 5, 15, 14, 15, 1, 16, 6, 17, 16, 17, 6, 18, 7, 19, 18, 19, 3, 20, 8, 21, 20, 21, 8, 22, 9, 23, 22, 23, 10, 24, 11, 25, 24, 25, 13, 26, 1, 27, 26, 27, 12, 28, 13, 29, 28, 29, 14, 30, 15, 31, 30, 31, 1, 32, 16, 33, 32, 33, 16, 34, 17, 35, 34, 35, 18, 36, 19, 37, 36, 37, 21, 38, 8, 39, 38, 39, 20, 40, 21, 41, 40, 41, 22, 42, 23, 43, 42, 43, 8, 44, 22, 45, 44, 45, 24, 46, 25, 47, 46, 47, 25, 48, 11, 49, 48, 49, 27, 50, 1, 51, 50, 51, 26, 52, 27, 53, 52, 53, 28, 54, 29, 55, 54, 55, 30, 56, 31, 57, 56, 57, 14, 58, 30, 59, 58, 59, 32, 60, 33, 61, 60, 61, 34, 62, 35, 63, 62, 63, 36, 64, 37, 65, 64, 65, 37, 66, 19, 67, 66, 67, 21, 68, 38, 69, 68, 69, 38, 70, 39, 71, 70, 71, 40, 72, 41, 73, 72, 73, 42, 74, 43, 75, 74, 75, 44, 76, 45, 77, 76, 77, 46, 78, 47, 79, 78, 79, 48, 80, 49, 81, 80, 81, 52, 82, 53, 83, 82, 83, 28, 84, 54, 85, 84, 85, 54, 86, 55, 87, 86, 87, 30, 88, 56, 89, 88, 89, 56, 90, 57, 91, 90, 91, 58, 92, 59, 93, 92, 93, 62, 94, 63, 95, 94, 95, 63, 96, 35, 97, 96, 97, 64, 98, 65, 99, 98, 99, 65, 100, 37, 101, 100, 101, 66, 102, 67, 103, 102, 103, 70, 104, 71, 105, 104, 105, 72, 106, 73, 107, 106, 107, 42, 108, 74, 109, 108, 109, 74, 110, 75, 111, 110, 111, 79, 112, 47, 113, 112, 113, 78, 114, 79, 115, 114, 115, 52, 116, 82, 117, 116, 117, 82, 118, 83, 119, 118, 119, 84, 120, 85, 121, 120, 121, 86, 122, 87, 123, 122, 123, 90, 124, 91, 125, 124, 125, 94, 126, 95, 127, 126, 127, 96, 128, 97, 129, 128, 129, 98, 130, 99, 131, 130, 131, 104, 132, 105, 133, 132, 133, 70, 134, 104, 135, 134, 135, 107, 136, 73, 137, 136, 137, 106, 138, 107, 139, 138, 139, 109, 140, 74, 141, 140, 141, 110, 142, 111, 143, 142, 143, 79, 144, 112, 145, 144, 145, 114, 146, 115, 147, 146, 147, 116, 148, 117, 149, 148, 149, 117, 150, 82, 151, 150, 151, 118, 152, 119, 153, 152, 153, 121, 154, 85, 155, 154, 155, 122, 156, 123, 157, 156, 157, 90, 158, 124, 159, 158, 159, 124, 160, 125, 161, 160, 161, 127, 162, 95, 163, 162, 163, 126, 164, 127, 165, 164, 165, 131, 166, 99, 167, 166, 167, 130, 168, 131, 169, 168, 169, 132, 170, 133, 171, 170, 171, 70, 172, 134, 173, 172, 173, 134, 174, 135, 175, 174, 175, 136, 176, 137, 177, 176, 177, 138, 178, 139, 179, 178, 179, 109, 180, 140, 181, 180, 181, 143, 182, 111, 183, 182, 183, 142, 184, 143, 185, 184, 185, 145, 186, 112, 187, 186, 187, 114, 188, 146, 189, 188, 189, 146, 190, 147, 191, 190, 191, 154, 192, 155, 193, 192, 193, 156, 194, 157, 195, 194, 195, 158, 196, 159, 197, 196, 197, 160, 198, 161, 199, 198, 199, 127, 200, 162, 201, 200, 201, 166, 202, 167, 203, 202, 203, 168, 204, 169, 205, 204, 205, 170, 206, 171, 207, 206, 207, 174, 208, 175, 209, 208, 209, 178, 210, 179, 211, 210, 211, 184, 212, 185, 213, 212, 213, 190, 214, 191, 215, 214, 215, 154, 216, 192, 217, 216, 217, 195, 218, 157, 219, 218, 219, 194, 220, 195, 221, 220, 221, 198, 222, 199, 223, 222, 223, 200, 224, 201, 225, 224, 225, 201, 226, 162, 227, 226, 227, 204, 228, 205, 229, 228, 229, 206, 230, 207, 231, 230, 231, 170, 232, 206, 233, 232, 233, 208, 234, 209, 235, 234, 235, 210, 236, 211, 237, 236, 237, 212, 238, 213, 239, 238, 239, 214, 240, 215, 241, 240, 241, 218, 242, 219, 243, 242, 243, 220, 244, 221, 245, 244, 245, 222, 246, 223, 247, 246, 247, 228, 248, 229, 249, 248, 249, 230, 250, 231, 251, 250, 251, 206, 252, 230, 253, 252, 253, 232, 254, 233, 255, 254, 255, 234, 256, 235, 257, 256, 257, 236, 258, 237, 259, 258, 259, 238, 260, 239, 261, 260, 261, 240, 262, 241, 263, 262, 263, 246, 264, 247, 265, 264, 265];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [33, 32, 60, 61], [0, 4, 5, 1], [1, 5, 12, 13], [6, 1, 16, 17], [1, 13, 26, 27], [2, 1, 6, 7], [51, 1, 27, 50], [4, 14, 15, 5], [16, 1, 32, 33], [83, 53, 52, 82], [17, 16, 34, 35], [0, 3, 8, 9], [3, 20, 21, 8], [13, 12, 28, 29], [3, 2, 10, 11], [53, 27, 26, 52], [7, 6, 18, 19], [11, 10, 24, 25], [82, 52, 116, 117], [9, 8, 22, 23], [19, 18, 36, 37], [15, 14, 30, 31], [97, 96, 128, 129], [29, 28, 54, 55], [35, 34, 62, 63], [47, 79, 112, 113], [95, 127, 162, 163], [23, 22, 42, 43], [37, 36, 64, 65], [65, 64, 98, 99], [31, 30, 56, 57], [83, 82, 118, 119], [37, 65, 100, 101], [63, 62, 94, 95], [158, 196, 197, 159], [49, 48, 80, 81], [8, 21, 38, 39], [25, 24, 46, 47], [21, 20, 40, 41], [14, 58, 59, 30], [28, 84, 85, 54], [117, 116, 148, 149], [21, 68, 69, 38], [22, 8, 44, 45], [55, 54, 86, 87], [11, 25, 48, 49], [91, 90, 124, 125], [19, 37, 66, 67], [35, 63, 96, 97], [30, 88, 89, 56], [41, 40, 72, 73], [47, 46, 78, 79], [84, 120, 121, 85], [82, 117, 150, 151], [56, 90, 91, 57], [42, 108, 109, 74], [43, 42, 74, 75], [39, 38, 70, 71], [75, 74, 110, 111], [200, 224, 225, 201], [90, 158, 159, 124], [213, 212, 238, 239], [119, 118, 152, 153], [58, 92, 93, 59], [127, 126, 164, 165], [95, 94, 126, 127], [45, 44, 76, 77], [87, 86, 122, 123], [67, 66, 102, 103], [99, 98, 130, 131], [85, 121, 154, 155], [72, 106, 107, 73], [71, 70, 104, 105], [79, 78, 114, 115], [73, 107, 136, 137], [157, 123, 122, 156], [243, 219, 218, 242], [125, 124, 160, 161], [106, 138, 139, 107], [74, 109, 140, 141], [162, 201, 226, 227], [157, 156, 194, 195], [193, 155, 154, 192], [99, 131, 166, 167], [247, 223, 222, 246], [219, 157, 195, 218], [105, 104, 132, 133], [140, 109, 180, 181], [133, 132, 170, 171], [131, 130, 168, 169], [111, 110, 142, 143], [79, 144, 145, 112], [111, 143, 182, 183], [245, 221, 220, 244], [192, 154, 216, 217], [104, 70, 134, 135], [207, 206, 230, 231], [70, 172, 173, 134], [127, 200, 201, 162], [115, 114, 146, 147], [146, 114, 188, 189], [160, 198, 199, 161], [169, 168, 204, 205], [195, 194, 220, 221], [167, 166, 202, 203], [170, 232, 233, 206], [139, 138, 178, 179], [185, 184, 212, 213], [137, 136, 176, 177], [143, 142, 184, 185], [178, 210, 211, 179], [135, 134, 174, 175], [205, 204, 228, 229], [112, 145, 186, 187], [191, 190, 214, 215], [147, 146, 190, 191], [198, 222, 223, 199], [174, 208, 209, 175], [229, 228, 248, 249], [171, 170, 206, 207], [236, 258, 259, 237], [210, 236, 237, 211], [215, 214, 240, 241], [208, 234, 235, 209], [231, 230, 250, 251], [234, 256, 257, 235], [265, 247, 246, 264], [239, 238, 260, 261], [206, 252, 253, 230], [232, 254, 255, 233], [241, 240, 262, 263]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
obj0.userData.axes = [[247,246],
      [241,240],
      [239,238],
      [237,236],
      [235,234],
      [233,232],
      [230,206],
      [231,230],
      [229,228],
      [223,222],
      [221,220],
      [219,218],
      [215,214],
      [213,212],
      [211,210],
      [209,208],
      [206,170],
      [207,206],
      [205,204],
      [162,201],
      [201,200],
      [199,198],
      [195,194],
      [157,195],
      [192,154],
      [191,190],
      [185,184],
      [179,178],
      [175,174],
      [171,170],
      [169,168],
      [167,166],
      [162,127],
      [161,160],
      [159,158],
      [157,156],
      [155,154],
      [147,146],
      [146,114],
      [112,145],
      [143,142],
      [111,143],
      [140,109],
      [139,138],
      [137,136],
      [135,134],
      [134,70],
      [133,132],
      [131,130],
      [99,131],
      [127,126],
      [95,127],
      [125,124],
      [124,90],
      [123,122],
      [85,121],
      [119,118],
      [82,117],
      [117,116],
      [115,114],
      [112,79],
      [111,110],
      [74,109],
      [107,106],
      [73,107],
      [104,70],
      [105,104],
      [99,98],
      [97,96],
      [95,94],
      [91,90],
      [87,86],
      [85,84],
      [83,82],
      [82,52],
      [79,78],
      [47,79],
      [75,74],
      [74,42],
      [73,72],
      [71,70],
      [67,66],
      [37,65],
      [65,64],
      [35,63],
      [63,62],
      [59,58],
      [57,56],
      [56,30],
      [55,54],
      [54,28],
      [53,52],
      [49,48],
      [47,46],
      [45,44],
      [43,42],
      [41,40],
      [39,38],
      [38,21],
      [19,37],
      [37,36],
      [35,34],
      [33,32],
      [30,14],
      [31,30],
      [29,28],
      [27,26],
      [1,27],
      [11,25],
      [25,24],
      [22,8],
      [23,22],
      [21,20],
      [8,21],
      [19,18],
      [17,16],
      [16,1],
      [15,14],
      [13,12],
      [1,13],
      [11,10],
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

obj0.userData.angles = [3.0089401850108,
      2.85270651177221,
      2.85270651177221,
      2.70499342532613,
      2.89650740124578,
      3.0089401850108,
      2.85270651177221,
      2.70499342532613,
      2.83499558144435,
      2.83499558144435,
      2.91237684923527,
      3.0392947475202,
      2.61783038157784,
      2.61783038157784,
      2.57428983029236,
      2.88180760287697,
      2.83499558144435,
      2.57428983029236,
      3.00720244821166,
      2.91237684923527,
      3.0392947475202,
      3.00720244821166,
      3.0392947475202,
      2.99478371830788,
      2.91237684923527,
      2.61783038157784,
      2.61783038157784,
      2.97961655642107,
      2.91237684923527,
      2.97961655642107,
      2.83499558144435,
      2.85270651177221,
      2.91237684923527,
      2.83499558144435,
      2.85270651177221,
      2.99478371830788,
      2.91237684923527,
      2.85270651177221,
      2.4805848079168,
      2.83499558144435,
      2.85270651177221,
      2.4805848079168,
      2.83499558144435,
      2.91237684923527,
      3.0392947475202,
      3.0392947475202,
      2.99478371830788,
      2.91237684923527,
      3.0089401850108,
      2.88988938403793,
      3.0392947475202,
      2.91237684923527,
      3.0089401850108,
      2.88988938403793,
      3.0392947475202,
      2.88180760287697,
      3.0392947475202,
      3.0392947475202,
      3.0392947475202,
      2.88988938403793,
      2.88180760287697,
      2.88988938403793,
      2.88180760287697,
      3.0392947475202,
      2.99478371830788,
      2.99478371830788,
      3.0392947475202,
      2.88988938403793,
      2.83499558144435,
      2.91237684923527,
      2.88988938403793,
      2.91237684923527,
      2.83499558144435,
      2.91237684923527,
      2.91237684923527,
      3.0089401850108,
      2.88180760287697,
      3.0089401850108,
      2.88180760287697,
      2.99478371830788,
      2.99478371830788,
      2.85270651177221,
      2.70499342532613,
      2.85270651177221,
      3.00720244821166,
      2.97961655642107,
      2.85270651177221,
      2.85270651177221,
      2.70499342532613,
      2.97961655642107,
      3.00720244821166,
      2.88180760287697,
      2.91237684923527,
      2.83499558144435,
      2.91237684923527,
      2.83499558144435,
      3.0392947475202,
      3.0392947475202,
      3.0392947475202,
      2.61783038157784,
      2.61783038157784,
      2.57428983029236,
      2.89650740124578,
      2.61783038157784,
      2.61783038157784,
      2.57428983029236,
      2.89650740124578,
      2.88988938403793,
      2.97961655642107,
      3.00720244821166,
      2.97961655642107,
      3.00720244821166,
      2.91237684923527,
      2.91237684923527,
      2.61783038157784,
      2.70499342532613,
      2.4805848079168,
      2.61783038157784,
      2.70499342532613,
      2.4805848079168,
      2.83499558144435,
      2.83499558144435,
      2.88180760287697,
      2.85270651177221,
      2.4805848079168,
      2.85270651177221,
      2.4805848079168,
      3.0089401850108,
      3.0089401850108,
      2.88988938403793,
      2.88988938403793];

obj0.userData.subtrees = [[264,265],
      [262,263],
      [260,261],
      [258,259],
      [256,257],
      [254,255],
      [252,253],
      [250,251],
      [248,249],
      [246,247,264,265],
      [244,245],
      [242,243],
      [240,241,262,263],
      [238,239,260,261],
      [236,237,258,259],
      [234,235,256,257],
      [232,233,254,255],
      [230,231,250,251,252,253],
      [228,229,248,249],
      [226,227],
      [224,225],
      [222,223,246,247,264,265],
      [220,221,244,245],
      [218,219,242,243],
      [216,217],
      [214,215,240,241,262,263],
      [212,213,238,239,260,261],
      [210,211,236,237,258,259],
      [208,209,234,235,256,257],
      [206,207,230,231,232,233,250,251,252,253,254,255],
      [204,205,228,229,248,249],
      [202,203],
      [200,201,224,225,226,227],
      [198,199,222,223,246,247,264,265],
      [196,197],
      [194,195,218,219,220,221,242,243,244,245],
      [192,193,216,217],
      [190,191,214,215,240,241,262,263],
      [188,189],
      [186,187],
      [184,185,212,213,238,239,260,261],
      [182,183],
      [180,181],
      [178,179,210,211,236,237,258,259],
      [176,177],
      [174,175,208,209,234,235,256,257],
      [172,173],
      [170,171,206,207,230,231,232,233,250,251,252,253,254,255],
      [168,169,204,205,228,229,248,249],
      [166,167,202,203],
      [164,165],
      [162,163,200,201,224,225,226,227],
      [160,161,198,199,222,223,246,247,264,265],
      [158,159,196,197],
      [156,157,194,195,218,219,220,221,242,243,244,245],
      [154,155,192,193,216,217],
      [152,153],
      [150,151],
      [148,149],
      [146,147,188,189,190,191,214,215,240,241,262,263],
      [144,145,186,187],
      [142,143,182,183,184,185,212,213,238,239,260,261],
      [140,141,180,181],
      [138,139,178,179,210,211,236,237,258,259],
      [136,137,176,177],
      [134,135,172,173,174,175,208,209,234,235,256,257],
      [132,133,170,171,206,207,230,231,232,233,250,251,252,253,254,255],
      [130,131,166,167,168,169,202,203,204,205,228,229,248,249],
      [128,129],
      [126,127,162,163,164,165,200,201,224,225,226,227],
      [124,125,158,159,160,161,196,197,198,199,222,223,246,247,264,265],
      [122,123,156,157,194,195,218,219,220,221,242,243,244,245],
      [120,121,154,155,192,193,216,217],
      [118,119,152,153],
      [116,117,148,149,150,151],
      [114,115,146,147,188,189,190,191,214,215,240,241,262,263],
      [112,113,144,145,186,187],
      [110,111,142,143,182,183,184,185,212,213,238,239,260,261],
      [108,109,140,141,180,181],
      [106,107,136,137,138,139,176,177,178,179,210,211,236,237,258,259],
      [104,105,132,133,134,135,170,171,172,173,174,175,206,207,208,209,230,231,232,233,234,235,250,251,252,253,254,255,256,257],
      [102,103],
      [100,101],
      [98,99,130,131,166,167,168,169,202,203,204,205,228,229,248,249],
      [96,97,128,129],
      [94,95,126,127,162,163,164,165,200,201,224,225,226,227],
      [92,93],
      [90,91,124,125,158,159,160,161,196,197,198,199,222,223,246,247,264,265],
      [88,89],
      [86,87,122,123,156,157,194,195,218,219,220,221,242,243,244,245],
      [84,85,120,121,154,155,192,193,216,217],
      [82,83,116,117,118,119,148,149,150,151,152,153],
      [80,81],
      [78,79,112,113,114,115,144,145,146,147,186,187,188,189,190,191,214,215,240,241,262,263],
      [76,77],
      [74,75,108,109,110,111,140,141,142,143,180,181,182,183,184,185,212,213,238,239,260,261],
      [72,73,106,107,136,137,138,139,176,177,178,179,210,211,236,237,258,259],
      [70,71,104,105,132,133,134,135,170,171,172,173,174,175,206,207,208,209,230,231,232,233,234,235,250,251,252,253,254,255,256,257],
      [68,69],
      [66,67,102,103],
      [64,65,98,99,100,101,130,131,166,167,168,169,202,203,204,205,228,229,248,249],
      [62,63,94,95,96,97,126,127,128,129,162,163,164,165,200,201,224,225,226,227],
      [60,61],
      [58,59,92,93],
      [56,57,88,89,90,91,124,125,158,159,160,161,196,197,198,199,222,223,246,247,264,265],
      [54,55,84,85,86,87,120,121,122,123,154,155,156,157,192,193,194,195,216,217,218,219,220,221,242,243,244,245],
      [52,53,82,83,116,117,118,119,148,149,150,151,152,153],
      [50,51],
      [48,49,80,81],
      [46,47,78,79,112,113,114,115,144,145,146,147,186,187,188,189,190,191,214,215,240,241,262,263],
      [44,45,76,77],
      [42,43,74,75,108,109,110,111,140,141,142,143,180,181,182,183,184,185,212,213,238,239,260,261],
      [40,41,72,73,106,107,136,137,138,139,176,177,178,179,210,211,236,237,258,259],
      [38,39,68,69,70,71,104,105,132,133,134,135,170,171,172,173,174,175,206,207,208,209,230,231,232,233,234,235,250,251,252,253,254,255,256,257],
      [36,37,64,65,66,67,98,99,100,101,102,103,130,131,166,167,168,169,202,203,204,205,228,229,248,249],
      [34,35,62,63,94,95,96,97,126,127,128,129,162,163,164,165,200,201,224,225,226,227],
      [32,33,60,61],
      [30,31,56,57,58,59,88,89,90,91,92,93,124,125,158,159,160,161,196,197,198,199,222,223,246,247,264,265],
      [28,29,54,55,84,85,86,87,120,121,122,123,154,155,156,157,192,193,194,195,216,217,218,219,220,221,242,243,244,245],
      [26,27,50,51,52,53,82,83,116,117,118,119,148,149,150,151,152,153],
      [24,25,46,47,48,49,78,79,80,81,112,113,114,115,144,145,146,147,186,187,188,189,190,191,214,215,240,241,262,263],
      [22,23,42,43,44,45,74,75,76,77,108,109,110,111,140,141,142,143,180,181,182,183,184,185,212,213,238,239,260,261],
      [20,21,38,39,40,41,68,69,70,71,72,73,104,105,106,107,132,133,134,135,136,137,138,139,170,171,172,173,174,175,176,177,178,179,206,207,208,209,210,211,230,231,232,233,234,235,236,237,250,251,252,253,254,255,256,257,258,259],
      [18,19,36,37,64,65,66,67,98,99,100,101,102,103,130,131,166,167,168,169,202,203,204,205,228,229,248,249],
      [16,17,32,33,34,35,60,61,62,63,94,95,96,97,126,127,128,129,162,163,164,165,200,201,224,225,226,227],
      [14,15,30,31,56,57,58,59,88,89,90,91,92,93,124,125,158,159,160,161,196,197,198,199,222,223,246,247,264,265],
      [12,13,26,27,28,29,50,51,52,53,54,55,82,83,84,85,86,87,116,117,118,119,120,121,122,123,148,149,150,151,152,153,154,155,156,157,192,193,194,195,216,217,218,219,220,221,242,243,244,245],
      [10,11,24,25,46,47,48,49,78,79,80,81,112,113,114,115,144,145,146,147,186,187,188,189,190,191,214,215,240,241,262,263],
      [8,9,20,21,22,23,38,39,40,41,42,43,44,45,68,69,70,71,72,73,74,75,76,77,104,105,106,107,108,109,110,111,132,133,134,135,136,137,138,139,140,141,142,143,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,206,207,208,209,210,211,212,213,230,231,232,233,234,235,236,237,238,239,250,251,252,253,254,255,256,257,258,259,260,261],
      [6,7,16,17,18,19,32,33,34,35,36,37,60,61,62,63,64,65,66,67,94,95,96,97,98,99,100,101,102,103,126,127,128,129,130,131,162,163,164,165,166,167,168,169,200,201,202,203,204,205,224,225,226,227,228,229,248,249],
      [4,5,12,13,14,15,26,27,28,29,30,31,50,51,52,53,54,55,56,57,58,59,82,83,84,85,86,87,88,89,90,91,92,93,116,117,118,119,120,121,122,123,124,125,148,149,150,151,152,153,154,155,156,157,158,159,160,161,192,193,194,195,196,197,198,199,216,217,218,219,220,221,222,223,242,243,244,245,246,247,264,265]];

obj0.userData.polytoperoot = [[-1.11977715133852,-0.143039864010337,-0.134859277095614],
      [-6.59123278748317,0,-6.99105810061269],
      [1,1.88888888888889,-0.942809041582063]];

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
