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
obj0.userData.points.push(new PMPoint(0.284908, 0, 0));
obj0.userData.points.push(new PMPoint(0.133189, 0.178203, 0));
obj0.userData.points.push(new PMPoint(-0.15172, 0.178203, 0));
obj0.userData.points.push(new PMPoint(-0.0393776, -0.276265, 0));
obj0.userData.points.push(new PMPoint(0.245531, -0.276265, 0));
obj0.userData.points.push(new PMPoint(-0.200424, -0.0965714, 0));
obj0.userData.points.push(new PMPoint(-0.048704, -0.274775, 0));
obj0.userData.points.push(new PMPoint(0.331235, 0.383021, 0));
obj0.userData.points.push(new PMPoint(0.0463266, 0.383021, 0));
obj0.userData.points.push(new PMPoint(0.602405, 0.0129315, 0));
obj0.userData.points.push(new PMPoint(0.450685, 0.191135, 0));
obj0.userData.points.push(new PMPoint(-0.104235, -0.50114, 0));
obj0.userData.points.push(new PMPoint(0.180674, -0.50114, 0));
obj0.userData.points.push(new PMPoint(0.563143, -0.266594, 0));
obj0.userData.points.push(new PMPoint(0.602521, 0.00967133, 0));
obj0.userData.points.push(new PMPoint(-0.313067, -0.301722, 0));
obj0.userData.points.push(new PMPoint(-0.161347, -0.479925, 0));
obj0.userData.points.push(new PMPoint(-0.40299, 0.299597, 0));
obj0.userData.points.push(new PMPoint(-0.451693, 0.0248226, 0));
obj0.userData.points.push(new PMPoint(0.450656, 0.19183, 0));
obj0.userData.points.push(new PMPoint(0.648702, 0.396648, 0));
obj0.userData.points.push(new PMPoint(0.56171, 0.601774, 0));
obj0.userData.points.push(new PMPoint(0.276801, 0.601774, 0));
obj0.userData.points.push(new PMPoint(0.0236814, 0.615964, 0));
obj0.userData.points.push(new PMPoint(-0.174365, 0.411146, 0));
obj0.userData.points.push(new PMPoint(0.801013, 0.217205, 0));
obj0.userData.points.push(new PMPoint(0.649293, 0.395408, 0));
obj0.userData.points.push(new PMPoint(-0.0393776, -0.726015, 0));
obj0.userData.points.push(new PMPoint(0.245531, -0.726015, 0));
obj0.userData.points.push(new PMPoint(0.498425, -0.498874, 0));
obj0.userData.points.push(new PMPoint(0.563282, -0.273999, 0));
obj0.userData.points.push(new PMPoint(0.811062, -0.0678291, 0));
obj0.userData.points.push(new PMPoint(1.02387, 0.121608, 0));
obj0.userData.points.push(new PMPoint(1.06325, 0.397873, 0));
obj0.userData.points.push(new PMPoint(0.815327, 0.199108, 0));
obj0.userData.points.push(new PMPoint(-0.573373, -0.201155, 0));
obj0.userData.points.push(new PMPoint(-0.421653, -0.379358, 0));
obj0.userData.points.push(new PMPoint(-0.459514, 0.00708666, 0));
obj0.userData.points.push(new PMPoint(-0.572158, -0.198064, 0));
obj0.userData.points.push(new PMPoint(-0.636691, 0.3122, 0));
obj0.userData.points.push(new PMPoint(-0.685395, 0.0374252, 0));
obj0.userData.points.push(new PMPoint(-0.207355, 0.405535, 0));
obj0.userData.points.push(new PMPoint(-0.458625, 0.526929, 0));
obj0.userData.points.push(new PMPoint(0.879422, 0.615142, 0));
obj0.userData.points.push(new PMPoint(0.561954, 0.601515, 0));
obj0.userData.points.push(new PMPoint(0.539705, 0.834778, 0));
obj0.userData.points.push(new PMPoint(0.254796, 0.834778, 0));
obj0.userData.points.push(new PMPoint(0.254666, 0.834765, 0));
obj0.userData.points.push(new PMPoint(0.0241918, 0.616013, 0));
obj0.userData.points.push(new PMPoint(-0.202296, 0.779694, 0));
obj0.userData.points.push(new PMPoint(-0.400342, 0.574876, 0));
obj0.userData.points.push(new PMPoint(1.03262, 0.434759, 0));
obj0.userData.points.push(new PMPoint(0.880899, 0.612962, 0));
obj0.userData.points.push(new PMPoint(0.563282, -0.728281, 0));
obj0.userData.points.push(new PMPoint(0.498425, -0.503407, 0));
obj0.userData.points.push(new PMPoint(0, -1.00228, 0));
obj0.userData.points.push(new PMPoint(0.284908, -1.00228, 0));
obj0.userData.points.push(new PMPoint(-0.291375, -0.641688, 0));
obj0.userData.points.push(new PMPoint(-0.226518, -0.866563, 0));
obj0.userData.points.push(new PMPoint(0.5788, -0.71868, 0));
obj0.userData.points.push(new PMPoint(0.643657, -0.493806, 0));
obj0.userData.points.push(new PMPoint(1.34148, 0.131279, 0));
obj0.userData.points.push(new PMPoint(1.38086, 0.407544, 0));
obj0.userData.points.push(new PMPoint(0.949551, -0.256498, 0));
obj0.userData.points.push(new PMPoint(1.16236, -0.0670609, 0));
obj0.userData.points.push(new PMPoint(0.700454, -0.456122, 0));
obj0.userData.points.push(new PMPoint(0.948372, -0.257357, 0));
obj0.userData.points.push(new PMPoint(-0.653775, -0.409267, 0));
obj0.userData.points.push(new PMPoint(-0.393469, -0.509834, 0));
obj0.userData.points.push(new PMPoint(-0.805585, -0.230356, 0));
obj0.userData.points.push(new PMPoint(-0.653865, -0.408559, 0));
obj0.userData.points.push(new PMPoint(-0.692843, -0.011166, 0));
obj0.userData.points.push(new PMPoint(-0.805486, -0.216316, 0));
obj0.userData.points.push(new PMPoint(-0.474272, 0.522518, 0));
obj0.userData.points.push(new PMPoint(-0.707974, 0.535121, 0));
obj0.userData.points.push(new PMPoint(-0.710622, 0.534257, 0));
obj0.userData.points.push(new PMPoint(-0.759326, 0.259482, 0));
obj0.userData.points.push(new PMPoint(0.857985, 0.848199, 0));
obj0.userData.points.push(new PMPoint(0.540517, 0.834572, 0));
obj0.userData.points.push(new PMPoint(0.857042, 0.851157, 0));
obj0.userData.points.push(new PMPoint(0.643939, 1.03132, 0));
obj0.userData.points.push(new PMPoint(0.359031, 1.03132, 0));
obj0.userData.points.push(new PMPoint(0.0416939, 1.01495, 0));
obj0.userData.points.push(new PMPoint(0.0307465, 1.0013, 0));
obj0.userData.points.push(new PMPoint(-0.199728, 0.782545, 0));
obj0.userData.points.push(new PMPoint(-0.40904, 0.889384, 0));
obj0.userData.points.push(new PMPoint(-0.607086, 0.684566, 0));
obj0.userData.points.push(new PMPoint(1.01533, 0.668161, 0));
obj0.userData.points.push(new PMPoint(0.863609, 0.846364, 0));
obj0.userData.points.push(new PMPoint(0.291336, -1.00129, 0));
obj0.userData.points.push(new PMPoint(0.609088, -1.00355, 0));
obj0.userData.points.push(new PMPoint(-0.15172, -1.18048, 0));
obj0.userData.points.push(new PMPoint(0.133189, -1.18048, 0));
obj0.userData.points.push(new PMPoint(-0.197041, -0.898982, 0));
obj0.userData.points.push(new PMPoint(-0.157663, -1.17525, 0));
obj0.userData.points.push(new PMPoint(-0.566902, -0.685938, 0));
obj0.userData.points.push(new PMPoint(-0.502045, -0.910812, 0));
obj0.userData.points.push(new PMPoint(0.879453, -0.821534, 0));
obj0.userData.points.push(new PMPoint(0.94431, -0.596659, 0));
obj0.userData.points.push(new PMPoint(1.62639, 0.131279, 0));
obj0.userData.points.push(new PMPoint(1.66577, 0.407544, 0));
obj0.userData.points.push(new PMPoint(1.17375, -0.0581435, 0));
obj0.userData.points.push(new PMPoint(1.49136, -0.0484722, 0));
obj0.userData.points.push(new PMPoint(1.44046, 0.63387, 0));
obj0.userData.points.push(new PMPoint(1.12284, 0.624198, 0));
obj0.userData.points.push(new PMPoint(1.26715, -0.266646, 0));
obj0.userData.points.push(new PMPoint(1.47995, -0.0772095, 0));
obj0.userData.points.push(new PMPoint(1.01797, -0.468668, 0));
obj0.userData.points.push(new PMPoint(1.26588, -0.269903, 0));
obj0.userData.points.push(new PMPoint(-0.871454, -0.454937, 0));
obj0.userData.points.push(new PMPoint(-0.719734, -0.63314, 0));
obj0.userData.points.push(new PMPoint(-0.80267, 0.195505, 0));
obj0.userData.points.push(new PMPoint(-0.915313, -0.0096452, 0));
obj0.userData.points.push(new PMPoint(-0.85637, 0.351138, 0));
obj0.userData.points.push(new PMPoint(-0.905074, 0.0763635, 0));
obj0.userData.points.push(new PMPoint(1.10071, 1.05511, 0));
obj0.userData.points.push(new PMPoint(0.887604, 1.23528, 0));
obj0.userData.points.push(new PMPoint(0.621934, 1.26433, 0));
obj0.userData.points.push(new PMPoint(0.337026, 1.26433, 0));
obj0.userData.points.push(new PMPoint(0.335574, 1.26419, 0));
obj0.userData.points.push(new PMPoint(0.0182371, 1.24781, 0));
obj0.userData.points.push(new PMPoint(-0.171943, 1.11831, 0));
obj0.userData.points.push(new PMPoint(-0.402418, 0.899558, 0));
obj0.userData.points.push(new PMPoint(-0.525617, 1.09232, 0));
obj0.userData.points.push(new PMPoint(-0.723663, 0.887507, 0));
obj0.userData.points.push(new PMPoint(1.30581, 0.796967, 0));
obj0.userData.points.push(new PMPoint(1.15409, 0.97517, 0));
obj0.userData.points.push(new PMPoint(0.145684, -1.18448, 0));
obj0.userData.points.push(new PMPoint(0.463436, -1.18675, 0));
obj0.userData.points.push(new PMPoint(0.826251, -1.18798, 0));
obj0.userData.points.push(new PMPoint(1.07873, -1.38091, 0));
obj0.userData.points.push(new PMPoint(1.03293, -1.10564, 0));
obj0.userData.points.push(new PMPoint(0.815766, -0.921214, 0));
obj0.userData.points.push(new PMPoint(0.0463266, -1.3853, 0));
obj0.userData.points.push(new PMPoint(0.331235, -1.3853, 0));
obj0.userData.points.push(new PMPoint(-0.452275, -1.0118, 0));
obj0.userData.points.push(new PMPoint(-0.412897, -1.28807, 0));
obj0.userData.points.push(new PMPoint(1.14457, -0.925877, 0));
obj0.userData.points.push(new PMPoint(1.20942, -0.701002, 0));
obj0.userData.points.push(new PMPoint(1.78405, -0.0416876, 0));
obj0.userData.points.push(new PMPoint(1.82343, 0.234578, 0));
obj0.userData.points.push(new PMPoint(1.4932, -0.046924, 0));
obj0.userData.points.push(new PMPoint(1.77811, -0.046924, 0));
obj0.userData.points.push(new PMPoint(1.73062, 0.632419, 0));
obj0.userData.points.push(new PMPoint(1.44571, 0.632419, 0));
obj0.userData.points.push(new PMPoint(1.55126, -0.287949, 0));
obj0.userData.points.push(new PMPoint(1.76407, -0.0985124, 0));
obj0.userData.points.push(new PMPoint(1.30188, -0.492434, 0));
obj0.userData.points.push(new PMPoint(1.5498, -0.293669, 0));
obj0.userData.points.push(new PMPoint(-1.06043, -0.660268, 0));
obj0.userData.points.push(new PMPoint(-0.908711, -0.838471, 0));
obj0.userData.points.push(new PMPoint(-1.02952, -0.29838, 0));
obj0.userData.points.push(new PMPoint(-1.09539, -0.52296, 0));
obj0.userData.points.push(new PMPoint(-1.14837, 0.0117957, 0));
obj0.userData.points.push(new PMPoint(-1.03854, -0.194875, 0));
obj0.userData.points.push(new PMPoint(-1.08017, 0.419627, 0));
obj0.userData.points.push(new PMPoint(-1.12887, 0.144853, 0));
obj0.userData.points.push(new PMPoint(-0.933586, 0.605405, 0));
obj0.userData.points.push(new PMPoint(-1.07933, 0.422286, 0));
obj0.userData.points.push(new PMPoint(1.31351, 1.24455, 0));
obj0.userData.points.push(new PMPoint(1.10041, 1.42472, 0));
obj0.userData.points.push(new PMPoint(0.880037, 1.4692, 0));
obj0.userData.points.push(new PMPoint(0.636373, 1.26524, 0));
obj0.userData.points.push(new PMPoint(0.852409, 1.48308, 0));
obj0.userData.points.push(new PMPoint(0.567501, 1.48308, 0));
obj0.userData.points.push(new PMPoint(-0.138142, 1.42194, 0));
obj0.userData.points.push(new PMPoint(-0.114685, 1.18907, 0));
obj0.userData.points.push(new PMPoint(0.564391, 1.48467, 0));
obj0.userData.points.push(new PMPoint(0.247054, 1.46829, 0));
obj0.userData.points.push(new PMPoint(-0.278226, 1.32683, 0));
obj0.userData.points.push(new PMPoint(-0.5087, 1.10807, 0));
obj0.userData.points.push(new PMPoint(-0.69685, 1.31267, 0));
obj0.userData.points.push(new PMPoint(-0.894896, 1.10785, 0));
obj0.userData.points.push(new PMPoint(1.56543, 0.914312, 0));
obj0.userData.points.push(new PMPoint(1.41371, 1.09251, 0));
obj0.userData.points.push(new PMPoint(0.350928, -1.38209, 0));
obj0.userData.points.push(new PMPoint(0.668679, -1.38436, 0));
obj0.userData.points.push(new PMPoint(0.668789, -1.38424, 0));
obj0.userData.points.push(new PMPoint(0.814441, -1.20105, 0));
obj0.userData.points.push(new PMPoint(1.39649, -1.38318, 0));
obj0.userData.points.push(new PMPoint(1.35068, -1.10791, 0));
obj0.userData.points.push(new PMPoint(0.693395, -1.38066, 0));
obj0.userData.points.push(new PMPoint(0.945878, -1.57359, 0));
obj0.userData.points.push(new PMPoint(0.276801, -1.60405, 0));
obj0.userData.points.push(new PMPoint(0.56171, -1.60405, 0));
obj0.userData.points.push(new PMPoint(-0.174365, -1.41343, 0));
obj0.userData.points.push(new PMPoint(0.0236814, -1.61824, 0));
obj0.userData.points.push(new PMPoint(-0.476194, -1.51339, 0));
obj0.userData.points.push(new PMPoint(-0.22096, -1.40057, 0));
obj0.userData.points.push(new PMPoint(1.43921, -0.806894, 0));
obj0.userData.points.push(new PMPoint(1.50407, -0.582019, 0));
obj0.userData.points.push(new PMPoint(2.03929, -0.154509, 0));
obj0.userData.points.push(new PMPoint(2.07866, 0.121756, 0));
obj0.userData.points.push(new PMPoint(1.92907, 0.443422, 0));
obj0.userData.points.push(new PMPoint(1.7714, 0.616389, 0));
obj0.userData.points.push(new PMPoint(1.55642, -0.521933, 0));
obj0.userData.points.push(new PMPoint(1.76923, -0.332496, 0));
obj0.userData.points.push(new PMPoint(-1.28092, -0.738744, 0));
obj0.userData.points.push(new PMPoint(-1.1292, -0.916947, 0));
obj0.userData.points.push(new PMPoint(-1.09286, -0.530783, 0));
obj0.userData.points.push(new PMPoint(-1.28184, -0.736114, 0));
obj0.userData.points.push(new PMPoint(-1.2262, -0.496349, 0));
obj0.userData.points.push(new PMPoint(-1.29207, -0.72093, 0));
obj0.userData.points.push(new PMPoint(-1.40885, -0.0883105, 0));
obj0.userData.points.push(new PMPoint(-1.29903, -0.294982, 0));
obj0.userData.points.push(new PMPoint(-1.35785, 0.391991, 0));
obj0.userData.points.push(new PMPoint(-1.40656, 0.117216, 0));
obj0.userData.points.push(new PMPoint(-1.2126, 0.600432, 0));
obj0.userData.points.push(new PMPoint(-1.35835, 0.417313, 0));
obj0.userData.points.push(new PMPoint(1.31627, 1.47858, 0));
obj0.userData.points.push(new PMPoint(1.10317, 1.65874, 0));
obj0.userData.points.push(new PMPoint(1.09525, 1.6587, 0));
obj0.userData.points.push(new PMPoint(0.882439, 1.46927, 0));
obj0.userData.points.push(new PMPoint(1.05046, 1.6879, 0));
obj0.userData.points.push(new PMPoint(0.765547, 1.6879, 0));
obj0.userData.points.push(new PMPoint(0.244008, 1.47141, 0));
obj0.userData.points.push(new PMPoint(0.0876289, 1.64554, 0));
obj0.userData.points.push(new PMPoint(0.760654, 1.6912, 0));
obj0.userData.points.push(new PMPoint(0.443316, 1.67482, 0));
obj0.userData.points.push(new PMPoint(-0.432853, 1.55913, 0));
obj0.userData.points.push(new PMPoint(-0.663327, 1.34038, 0));
obj0.userData.points.push(new PMPoint(-0.930422, 1.32747, 0));
obj0.userData.points.push(new PMPoint(-1.12847, 1.12266, 0));
obj0.userData.points.push(new PMPoint(1.67807, 1.11946, 0));
obj0.userData.points.push(new PMPoint(1.52636, 1.29767, 0));
obj0.userData.points.push(new PMPoint(0.589312, -1.59219, 0));
obj0.userData.points.push(new PMPoint(0.907064, -1.59446, 0));
obj0.userData.points.push(new PMPoint(1.68132, -1.37654, 0));
obj0.userData.points.push(new PMPoint(1.63551, -1.10127, 0));
obj0.userData.points.push(new PMPoint(1.14359, -1.60579, 0));
obj0.userData.points.push(new PMPoint(1.46134, -1.60805, 0));
obj0.userData.points.push(new PMPoint(0.952358, -1.80754, 0));
obj0.userData.points.push(new PMPoint(1.08521, -1.61486, 0));
obj0.userData.points.push(new PMPoint(0.254796, -1.83706, 0));
obj0.userData.points.push(new PMPoint(0.539705, -1.83706, 0));
obj0.userData.points.push(new PMPoint(0.0241918, -1.61829, 0));
obj0.userData.points.push(new PMPoint(0.254666, -1.83705, 0));
obj0.userData.points.push(new PMPoint(-0.400342, -1.57716, 0));
obj0.userData.points.push(new PMPoint(-0.202296, -1.78197, 0));
obj0.userData.points.push(new PMPoint(2.19854, 0.322764, 0));
obj0.userData.points.push(new PMPoint(1.94331, 0.435585, 0));
obj0.userData.points.push(new PMPoint(2.27328, -0.159196, 0));
obj0.userData.points.push(new PMPoint(2.31266, 0.117069, 0));
obj0.userData.points.push(new PMPoint(1.84735, -0.267007, 0));
obj0.userData.points.push(new PMPoint(2.10258, -0.379828, 0));
obj0.userData.points.push(new PMPoint(2.19263, 0.351722, 0));
obj0.userData.points.push(new PMPoint(2.03496, 0.524689, 0));
obj0.userData.points.push(new PMPoint(-1.43818, -0.976322, 0));
obj0.userData.points.push(new PMPoint(-1.28646, -1.15453, 0));
obj0.userData.points.push(new PMPoint(-1.4127, -0.354961, 0));
obj0.userData.points.push(new PMPoint(-1.47857, -0.579541, 0));
obj0.userData.points.push(new PMPoint(-1.56158, 0.276791, 0));
obj0.userData.points.push(new PMPoint(-1.61028, 0.00201603, 0));
obj0.userData.points.push(new PMPoint(1.43189, 1.73255, 0));
obj0.userData.points.push(new PMPoint(1.21879, 1.91272, 0));
obj0.userData.points.push(new PMPoint(0.898736, 1.8661, 0));
obj0.userData.points.push(new PMPoint(0.613827, 1.8661, 0));
obj0.userData.points.push(new PMPoint(0.437144, 1.68087, 0));
obj0.userData.points.push(new PMPoint(0.280765, 1.85499, 0));
obj0.userData.points.push(new PMPoint(0.279456, 1.85619, 0));
obj0.userData.points.push(new PMPoint(0.289725, 2.13506, 0));
obj0.userData.points.push(new PMPoint(0.0639533, 1.91146, 0));
obj0.userData.points.push(new PMPoint(-0.127874, 1.70081, 0));
obj0.userData.points.push(new PMPoint(0.607008, 1.86775, 0));
obj0.userData.points.push(new PMPoint(0.289671, 1.85137, 0));
obj0.userData.points.push(new PMPoint(-0.664373, 1.59338, 0));
obj0.userData.points.push(new PMPoint(-0.894848, 1.37463, 0));
obj0.userData.points.push(new PMPoint(-0.939998, 1.61222, 0));
obj0.userData.points.push(new PMPoint(-1.13804, 1.4074, 0));
obj0.userData.points.push(new PMPoint(1.91092, 1.27327, 0));
obj0.userData.points.push(new PMPoint(1.7592, 1.45147, 0));
obj0.userData.points.push(new PMPoint(1.80009, 1.06533, 0));
obj0.userData.points.push(new PMPoint(1.91274, 1.27048, 0));
obj0.userData.points.push(new PMPoint(0.576223, -1.82587, 0));
obj0.userData.points.push(new PMPoint(0.893974, -1.82813, 0));
obj0.userData.points.push(new PMPoint(1.46657, -1.60648, 0));
obj0.userData.points.push(new PMPoint(1.7514, -1.59984, 0));
obj0.userData.points.push(new PMPoint(1.07553, -1.82971, 0));
obj0.userData.points.push(new PMPoint(1.39328, -1.83198, 0));
obj0.userData.points.push(new PMPoint(0.0416939, -2.01723, 0));
obj0.userData.points.push(new PMPoint(0.359031, -2.0336, 0));
obj0.userData.points.push(new PMPoint(0.643939, -2.0336, 0));
obj0.userData.points.push(new PMPoint(0.857042, -1.85344, 0));
obj0.userData.points.push(new PMPoint(-0.199728, -1.78483, 0));
obj0.userData.points.push(new PMPoint(0.0307465, -2.00358, 0));
obj0.userData.points.push(new PMPoint(2.31249, 0.131686, 0));
obj0.userData.points.push(new PMPoint(2.43237, 0.332694, 0));
obj0.userData.points.push(new PMPoint(2.35468, -0.378624, 0));
obj0.userData.points.push(new PMPoint(2.39406, -0.102359, 0));
obj0.userData.points.push(new PMPoint(2.11807, -0.37489, 0));
obj0.userData.points.push(new PMPoint(2.35207, -0.379577, 0));
obj0.userData.points.push(new PMPoint(2.42372, 0.388765, 0));
obj0.userData.points.push(new PMPoint(2.26605, 0.561731, 0));
obj0.userData.points.push(new PMPoint(-1.61167, -1.24254, 0));
obj0.userData.points.push(new PMPoint(-1.45995, -1.42074, 0));
obj0.userData.points.push(new PMPoint(-1.50424, -0.668707, 0));
obj0.userData.points.push(new PMPoint(-1.66149, -0.906285, 0));
obj0.userData.points.push(new PMPoint(-1.83229, 0.365604, 0));
obj0.userData.points.push(new PMPoint(-1.88099, 0.0908298, 0));
obj0.userData.points.push(new PMPoint(-1.6254, 0.489915, 0));
obj0.userData.points.push(new PMPoint(-1.82913, 0.374714, 0));
obj0.userData.points.push(new PMPoint(1.60356, 1.89164, 0));
obj0.userData.points.push(new PMPoint(1.39045, 2.0718, 0));
obj0.userData.points.push(new PMPoint(1.11626, 2.1231, 0));
obj0.userData.points.push(new PMPoint(1.00063, 1.86913, 0));
obj0.userData.points.push(new PMPoint(0.938113, 2.14237, 0));
obj0.userData.points.push(new PMPoint(0.653205, 2.14237, 0));
obj0.userData.points.push(new PMPoint(0.133345, 2.30919, 0));
obj0.userData.points.push(new PMPoint(-0.0924261, 2.08559, 0));
obj0.userData.points.push(new PMPoint(0.594315, 1.89903, 0));
obj0.userData.points.push(new PMPoint(0.604584, 2.1779, 0));
obj0.userData.points.push(new PMPoint(-0.0935082, 2.08461, 0));
obj0.userData.points.push(new PMPoint(-0.285335, 1.87396, 0));
obj0.userData.points.push(new PMPoint(-0.649514, 1.8779, 0));
obj0.userData.points.push(new PMPoint(-0.879988, 1.65915, 0));
obj0.userData.points.push(new PMPoint(-0.937049, 1.92997, 0));
obj0.userData.points.push(new PMPoint(-1.1351, 1.72515, 0));
obj0.userData.points.push(new PMPoint(2.14313, 1.30247, 0));
obj0.userData.points.push(new PMPoint(1.99141, 1.48067, 0));
obj0.userData.points.push(new PMPoint(1.40697, -1.83281, 0));
obj0.userData.points.push(new PMPoint(1.6918, -1.82617, 0));
obj0.userData.points.push(new PMPoint(1.02581, -2.10431, 0));
obj0.userData.points.push(new PMPoint(1.34356, -2.10657, 0));
obj0.userData.points.push(new PMPoint(0.0182371, -2.25009, 0));
obj0.userData.points.push(new PMPoint(0.335574, -2.26647, 0));
obj0.userData.points.push(new PMPoint(0.337026, -2.26661, 0));
obj0.userData.points.push(new PMPoint(0.621934, -2.26661, 0));
obj0.userData.points.push(new PMPoint(2.41489, -0.0787662, 0));
obj0.userData.points.push(new PMPoint(2.53477, 0.122242, 0));
obj0.userData.points.push(new PMPoint(-1.66247, -0.909478, 0));
obj0.userData.points.push(new PMPoint(-1.83596, -1.17569, 0));
obj0.userData.points.push(new PMPoint(-1.83933, -1.18824, 0));
obj0.userData.points.push(new PMPoint(-1.68761, -1.36644, 0));
obj0.userData.points.push(new PMPoint(-2.13106, 0.473802, 0));
obj0.userData.points.push(new PMPoint(-2.17976, 0.199028, 0));
obj0.userData.points.push(new PMPoint(-1.91911, 0.611183, 0));
obj0.userData.points.push(new PMPoint(-2.12284, 0.495982, 0));
obj0.userData.points.push(new PMPoint(1.51846, 2.10966, 0));
obj0.userData.points.push(new PMPoint(1.30536, 2.28983, 0));
obj0.userData.points.push(new PMPoint(1.30277, 2.2888, 0));
obj0.userData.points.push(new PMPoint(1.13111, 2.12971, 0));
obj0.userData.points.push(new PMPoint(1.00297, 2.36724, 0));
obj0.userData.points.push(new PMPoint(0.718062, 2.36724, 0));
obj0.userData.points.push(new PMPoint(0.266268, 2.36793, 0));
obj0.userData.points.push(new PMPoint(0.109888, 2.54205, 0));
obj0.userData.points.push(new PMPoint(-0.183737, 2.28846, 0));
obj0.userData.points.push(new PMPoint(-0.409509, 2.06486, 0));
obj0.userData.points.push(new PMPoint(0.640185, 2.40922, 0));
obj0.userData.points.push(new PMPoint(0.325326, 2.36638, 0));
obj0.userData.points.push(new PMPoint(-1.11985, 2.07611, 0));
obj0.userData.points.push(new PMPoint(-1.3179, 1.8713, 0));
obj0.userData.points.push(new PMPoint(2.209, 1.52705, 0));
obj0.userData.points.push(new PMPoint(2.05728, 1.70525, 0));
obj0.userData.points.push(new PMPoint(1.37404, -2.10991, 0));
obj0.userData.points.push(new PMPoint(1.65887, -2.10327, 0));
obj0.userData.points.push(new PMPoint(1.88216, -1.96231, 0));
obj0.userData.points.push(new PMPoint(1.94176, -1.73599, 0));
obj0.userData.points.push(new PMPoint(1.16883, -2.28956, 0));
obj0.userData.points.push(new PMPoint(1.48658, -2.29183, 0));
obj0.userData.points.push(new PMPoint(0.247054, -2.47057, 0));
obj0.userData.points.push(new PMPoint(0.564391, -2.48695, 0));
obj0.userData.points.push(new PMPoint(0.567501, -2.48536, 0));
obj0.userData.points.push(new PMPoint(0.852409, -2.48536, 0));
obj0.userData.points.push(new PMPoint(2.40347, -0.35759, 0));
obj0.userData.points.push(new PMPoint(2.52335, -0.156582, 0));
obj0.userData.points.push(new PMPoint(2.76691, 0.0925125, 0));
obj0.userData.points.push(new PMPoint(2.66452, 0.302965, 0));
obj0.userData.points.push(new PMPoint(-2.09104, -1.38218, 0));
obj0.userData.points.push(new PMPoint(-1.93932, -1.56038, 0));
obj0.userData.points.push(new PMPoint(-2.27421, 0.720137, 0));
obj0.userData.points.push(new PMPoint(-2.44781, 0.986281, 0));
obj0.userData.points.push(new PMPoint(-2.49652, 0.711506, 0));
obj0.userData.points.push(new PMPoint(-2.35337, 0.465171, 0));
obj0.userData.points.push(new PMPoint(1.7476, 2.06201, 0));
obj0.userData.points.push(new PMPoint(1.5345, 2.24218, 0));
obj0.userData.points.push(new PMPoint(0.938113, 2.59212, 0));
obj0.userData.points.push(new PMPoint(0.653205, 2.59212, 0));
obj0.userData.points.push(new PMPoint(0.553242, 2.50437, 0));
obj0.userData.points.push(new PMPoint(0.396862, 2.6785, 0));
obj0.userData.points.push(new PMPoint(-0.207449, 2.52567, 0));
obj0.userData.points.push(new PMPoint(-0.183992, 2.29281, 0));
obj0.userData.points.push(new PMPoint(1.52987, -2.28453, 0));
obj0.userData.points.push(new PMPoint(1.8147, -2.27789, 0));
obj0.userData.points.push(new PMPoint(1.82052, -2.27252, 0));
obj0.userData.points.push(new PMPoint(1.85345, -1.99541, 0));
obj0.userData.points.push(new PMPoint(2.15865, -2.00013, 0));
obj0.userData.points.push(new PMPoint(2.21825, -1.77381, 0));
obj0.userData.points.push(new PMPoint(0.443316, -2.6771, 0));
obj0.userData.points.push(new PMPoint(0.760654, -2.69348, 0));
obj0.userData.points.push(new PMPoint(0.765547, -2.69018, 0));
obj0.userData.points.push(new PMPoint(1.05046, -2.69018, 0));
obj0.userData.points.push(new PMPoint(3.0308, 0.183276, 0));
obj0.userData.points.push(new PMPoint(2.9284, 0.393729, 0));
obj0.userData.points.push(new PMPoint(-2.32438, -1.54566, 0));
obj0.userData.points.push(new PMPoint(-2.17266, -1.72386, 0));
obj0.userData.points.push(new PMPoint(-2.74659, 1.09448, 0));
obj0.userData.points.push(new PMPoint(-2.79529, 0.819704, 0));
obj0.userData.points.push(new PMPoint(1.66047, 2.43942, 0));
obj0.userData.points.push(new PMPoint(1.43134, 2.48707, 0));
obj0.userData.points.push(new PMPoint(0.898736, 2.86838, 0));
obj0.userData.points.push(new PMPoint(0.613827, 2.86838, 0));
obj0.userData.points.push(new PMPoint(2.07832, -2.37936, 0));
obj0.userData.points.push(new PMPoint(2.11124, -2.10225, 0));
obj0.userData.points.push(new PMPoint(0.289671, -2.85365, 0));
obj0.userData.points.push(new PMPoint(0.607008, -2.87003, 0));
obj0.userData.points.push(new PMPoint(0.613827, -2.86838, 0));
obj0.userData.points.push(new PMPoint(0.898736, -2.86838, 0));
obj0.userData.points.push(new PMPoint(1.87821, 2.61395, 0));
obj0.userData.points.push(new PMPoint(1.64908, 2.6616, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 3, 6, 0, 7, 6, 7, 2, 8, 3, 9, 8, 9, 1, 10, 2, 11, 10, 11, 4, 12, 5, 13, 12, 13, 5, 14, 1, 15, 14, 15, 6, 16, 7, 17, 16, 17, 3, 18, 6, 19, 18, 19, 2, 20, 8, 21, 20, 21, 8, 22, 9, 23, 22, 23, 9, 24, 3, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 13, 30, 5, 31, 30, 31, 14, 32, 32, 33, 33, 34, 15, 35, 34, 35, 16, 36, 17, 37, 36, 37, 6, 38, 16, 39, 38, 39, 18, 40, 19, 41, 40, 41, 3, 42, 18, 43, 42, 43, 21, 44, 8, 45, 44, 45, 22, 46, 23, 47, 46, 47, 23, 48, 9, 49, 48, 49, 24, 50, 25, 51, 50, 51, 26, 52, 27, 53, 52, 53, 29, 54, 13, 55, 54, 55, 28, 56, 29, 57, 56, 57, 12, 58, 28, 59, 58, 59, 30, 60, 31, 61, 60, 61, 33, 62, 34, 63, 62, 63, 32, 64, 33, 65, 64, 65, 14, 66, 32, 67, 66, 67, 37, 68, 17, 69, 68, 69, 36, 70, 37, 71, 70, 71, 38, 72, 39, 73, 72, 73, 18, 74, 40, 75, 74, 75, 40, 76, 41, 77, 76, 77, 44, 78, 45, 79, 78, 79, 46, 80, 80, 81, 81, 82, 47, 83, 82, 83, 48, 84, 49, 85, 84, 85, 50, 86, 51, 87, 86, 87, 52, 88, 53, 89, 88, 89, 29, 90, 54, 91, 90, 91, 56, 92, 57, 93, 92, 93, 28, 94, 56, 95, 94, 95, 58, 96, 59, 97, 96, 97, 60, 98, 61, 99, 98, 99, 62, 100, 63, 101, 100, 101, 33, 102, 62, 103, 102, 103, 63, 104, 34, 105, 104, 105, 64, 106, 65, 107, 106, 107, 66, 108, 67, 109, 108, 109, 70, 110, 71, 111, 110, 111, 72, 112, 73, 113, 112, 113, 76, 114, 77, 115, 114, 115, 80, 116, 81, 117, 116, 117, 81, 118, 82, 119, 118, 119, 82, 120, 83, 121, 120, 121, 84, 122, 85, 123, 122, 123, 86, 124, 87, 125, 124, 125, 88, 126, 89, 127, 126, 127, 90, 128, 91, 129, 128, 129, 91, 130, 130, 131, 131, 132, 54, 133, 132, 133, 92, 134, 93, 135, 134, 135, 94, 136, 95, 137, 136, 137, 98, 138, 99, 139, 138, 139, 100, 140, 101, 141, 140, 141, 62, 142, 100, 143, 142, 143, 101, 144, 63, 145, 144, 145, 106, 146, 107, 147, 146, 147, 108, 148, 109, 149, 148, 149, 110, 150, 111, 151, 150, 151, 70, 152, 110, 153, 152, 153, 113, 154, 73, 155, 154, 155, 114, 156, 115, 157, 156, 157, 76, 158, 114, 159, 158, 159, 116, 160, 117, 161, 160, 161, 117, 162, 81, 163, 162, 163, 118, 164, 119, 165, 164, 165, 121, 166, 83, 167, 166, 167, 120, 168, 121, 169, 168, 169, 122, 170, 123, 171, 170, 171, 124, 172, 125, 173, 172, 173, 126, 174, 127, 175, 174, 175, 128, 176, 129, 177, 176, 177, 129, 178, 91, 179, 178, 179, 131, 180, 132, 181, 180, 181, 130, 182, 131, 183, 182, 183, 134, 184, 135, 185, 184, 185, 92, 186, 134, 187, 186, 187, 137, 188, 95, 189, 188, 189, 138, 190, 139, 191, 190, 191, 140, 192, 141, 193, 192, 193, 141, 194, 101, 195, 194, 195, 146, 196, 147, 197, 196, 197, 150, 198, 151, 199, 198, 199, 110, 200, 150, 201, 200, 201, 152, 202, 153, 203, 202, 203, 154, 204, 155, 205, 204, 205, 156, 206, 157, 207, 206, 207, 158, 208, 159, 209, 208, 209, 160, 210, 161, 211, 210, 211, 161, 212, 117, 213, 212, 213, 164, 214, 165, 215, 214, 215, 121, 216, 166, 217, 216, 217, 168, 218, 169, 219, 218, 219, 170, 220, 171, 221, 220, 221, 172, 222, 173, 223, 222, 223, 174, 224, 175, 225, 224, 225, 176, 226, 177, 227, 226, 227, 180, 228, 181, 229, 228, 229, 131, 230, 180, 231, 230, 231, 183, 232, 131, 233, 232, 233, 184, 234, 185, 235, 234, 235, 134, 236, 184, 237, 236, 237, 186, 238, 187, 239, 238, 239, 193, 240, 141, 241, 240, 241, 192, 242, 193, 243, 242, 243, 140, 244, 192, 245, 244, 245, 194, 246, 195, 247, 246, 247, 198, 248, 199, 249, 248, 249, 202, 250, 203, 251, 250, 251, 206, 252, 207, 253, 252, 253, 210, 254, 211, 255, 254, 255, 214, 256, 215, 257, 256, 257, 216, 258, 217, 259, 258, 259, 217, 260, 260, 261, 261, 262, 166, 263, 262, 263, 218, 264, 219, 265, 264, 265, 220, 266, 221, 267, 266, 267, 222, 268, 223, 269, 268, 269, 224, 270, 225, 271, 270, 271, 174, 272, 224, 273, 272, 273, 226, 274, 227, 275, 274, 275, 180, 276, 228, 277, 276, 277, 230, 278, 231, 279, 278, 279, 234, 280, 280, 281, 281, 282, 235, 283, 282, 283, 236, 284, 237, 285, 284, 285, 193, 286, 240, 287, 286, 287, 242, 288, 243, 289, 288, 289, 192, 290, 242, 291, 290, 291, 246, 292, 247, 293, 292, 293, 248, 294, 249, 295, 294, 295, 198, 296, 248, 297, 296, 297, 252, 298, 253, 299, 298, 299, 206, 300, 252, 301, 300, 301, 254, 302, 255, 303, 302, 303, 255, 304, 211, 305, 304, 305, 256, 306, 257, 307, 306, 307, 261, 308, 262, 309, 308, 309, 260, 310, 261, 311, 310, 311, 262, 312, 263, 313, 312, 313, 266, 314, 267, 315, 314, 315, 268, 316, 269, 317, 316, 317, 270, 318, 271, 319, 318, 319, 276, 320, 277, 321, 320, 321, 278, 322, 279, 323, 322, 323, 280, 324, 281, 325, 324, 325, 281, 326, 282, 327, 326, 327, 286, 328, 287, 329, 328, 329, 248, 330, 294, 331, 330, 331, 294, 332, 295, 333, 332, 333, 298, 334, 299, 335, 334, 335, 300, 336, 301, 337, 336, 337, 302, 338, 303, 339, 338, 339, 303, 340, 255, 341, 340, 341, 306, 342, 307, 343, 342, 343, 261, 344, 308, 345, 344, 345, 308, 346, 309, 347, 346, 347, 311, 348, 261, 349, 348, 349, 316, 350, 317, 351, 350, 351, 318, 352, 319, 353, 352, 353, 320, 354, 321, 355, 354, 355, 321, 356, 277, 357, 356, 357, 322, 358, 323, 359, 358, 359, 324, 360, 325, 361, 360, 361, 326, 362, 327, 363, 362, 363, 328, 364, 329, 365, 364, 365, 329, 366, 287, 367, 366, 367, 332, 368, 333, 369, 368, 369, 334, 370, 370, 371, 371, 372, 335, 373, 372, 373, 338, 374, 339, 375, 374, 375, 342, 376, 343, 377, 376, 377, 344, 378, 345, 379, 378, 379, 345, 380, 308, 381, 380, 381, 354, 382, 355, 383, 382, 383, 355, 384, 321, 385, 384, 385, 356, 386, 357, 387, 386, 387, 360, 388, 361, 389, 388, 389, 362, 390, 363, 391, 390, 391, 366, 392, 367, 393, 392, 393, 368, 394, 369, 395, 394, 395, 371, 396, 372, 397, 396, 397, 375, 398, 339, 399, 398, 399, 376, 400, 377, 401, 400, 401, 384, 402, 385, 403, 402, 403, 388, 404, 389, 405, 404, 405, 390, 406, 391, 407, 406, 407, 398, 408, 399, 409, 408, 409];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [0, 3, 6, 7], [17, 37, 68, 69], [193, 286, 287, 240], [271, 270, 318, 319], [227, 226, 274, 275], [377, 376, 400, 401], [132, 131, 180, 181], [344, 378, 379, 345], [57, 56, 92, 93], [248, 330, 331, 294], [141, 193, 240, 241], [255, 254, 302, 303], [367, 366, 392, 393], [339, 375, 398, 399], [276, 320, 321, 277], [403, 385, 384, 402], [279, 278, 322, 323], [398, 408, 409, 399], [338, 374, 375, 339], [295, 294, 332, 333], [303, 302, 338, 339], [343, 342, 376, 377], [325, 324, 360, 361], [334, 370, 371, 372, 373, 335], [308, 345, 380, 381], [13, 12, 28, 29], [328, 364, 365, 329], [371, 396, 397, 372], [255, 303, 340, 341], [287, 329, 366, 367], [199, 198, 248, 249], [236, 284, 285, 237], [361, 360, 388, 389], [283, 235, 234, 280, 281, 282], [181, 180, 228, 229], [131, 130, 182, 183], [307, 306, 342, 343], [243, 242, 288, 289], [225, 224, 270, 271], [262, 261, 308, 309], [192, 290, 291, 242], [249, 248, 294, 295], [317, 316, 350, 351], [368, 394, 395, 369], [193, 192, 242, 243], [185, 184, 234, 235], [320, 354, 355, 321], [406, 407, 391, 390], [147, 146, 196, 197], [363, 362, 390, 391], [180, 276, 277, 228], [247, 246, 292, 293], [131, 183, 232, 233], [286, 328, 329, 287], [129, 128, 176, 177], [354, 382, 383, 355], [186, 238, 239, 187], [281, 280, 324, 325], [308, 261, 344, 345], [230, 278, 279, 231], [261, 311, 348, 349], [333, 332, 368, 369], [404, 405, 389, 388], [219, 218, 264, 265], [180, 131, 230, 231], [327, 326, 362, 363], [321, 355, 384, 385], [211, 255, 304, 305], [141, 140, 192, 193], [267, 266, 314, 315], [299, 298, 334, 335], [215, 214, 256, 257], [282, 281, 326, 327], [277, 321, 356, 357], [323, 322, 358, 359], [177, 176, 226, 227], [72, 112, 113, 73], [309, 308, 346, 347], [269, 268, 316, 317], [387, 357, 356, 386], [211, 210, 254, 255], [300, 336, 337, 301], [257, 256, 306, 307], [253, 252, 298, 299], [55, 13, 29, 54], [260, 310, 311, 261], [175, 174, 224, 225], [140, 244, 245, 192], [223, 222, 268, 269], [221, 220, 266, 267], [101, 141, 194, 195], [119, 118, 164, 165], [161, 160, 210, 211], [91, 129, 178, 179], [263, 262, 312, 313], [107, 106, 146, 147], [91, 90, 128, 129], [135, 134, 184, 185], [198, 296, 297, 248], [319, 318, 352, 353], [195, 194, 246, 247], [134, 236, 237, 184], [117, 161, 212, 213], [117, 116, 160, 161], [165, 164, 214, 215], [115, 114, 156, 157], [169, 168, 218, 219], [139, 138, 190, 191], [216, 258, 259, 217], [171, 170, 220, 221], [206, 300, 301, 252], [54, 29, 90, 91], [224, 174, 272, 273], [54, 91, 130, 131, 132, 133], [202, 250, 251, 203], [101, 100, 140, 141], [62, 142, 143, 100], [67, 66, 108, 109], [53, 52, 88, 89], [153, 152, 202, 203], [92, 186, 187, 134], [28, 94, 95, 56], [151, 150, 198, 199], [51, 50, 86, 87], [127, 126, 174, 175], [37, 36, 70, 71], [61, 60, 98, 99], [95, 137, 188, 189], [63, 62, 100, 101], [111, 110, 150, 151], [83, 121, 166, 167], [81, 80, 116, 117], [155, 154, 204, 205], [99, 98, 138, 139], [123, 122, 170, 171], [2, 20, 21, 8], [207, 206, 252, 253], [109, 108, 148, 149], [166, 217, 260, 261, 262, 263], [125, 124, 172, 173], [47, 46, 80, 81, 82, 83], [94, 136, 137, 95], [11, 10, 26, 27], [157, 156, 206, 207], [85, 84, 122, 123], [8, 21, 44, 45], [173, 172, 222, 223], [65, 64, 106, 107], [18, 74, 75, 40], [87, 86, 124, 125], [110, 70, 152, 153], [9, 8, 22, 23], [81, 117, 162, 163], [82, 81, 118, 119], [23, 22, 46, 47], [93, 92, 134, 135], [38, 72, 73, 39], [49, 48, 84, 85], [34, 33, 62, 63], [89, 88, 126, 127], [33, 102, 103, 62], [73, 113, 154, 155], [31, 5, 13, 30], [3, 9, 24, 25], [15, 14, 32, 33, 34, 35], [29, 28, 56, 57], [19, 18, 40, 41], [158, 208, 209, 159], [63, 101, 144, 145], [33, 32, 64, 65], [110, 200, 201, 150], [121, 120, 168, 169], [121, 216, 217, 166], [45, 44, 78, 79], [34, 63, 104, 105], [41, 40, 76, 77], [31, 30, 60, 61], [27, 26, 52, 53], [71, 70, 110, 111], [83, 82, 120, 121], [17, 16, 36, 37], [12, 58, 59, 28], [4, 12, 13, 5], [77, 76, 114, 115], [58, 96, 97, 59], [32, 14, 66, 67], [3, 2, 8, 9], [6, 38, 39, 16], [2, 1, 10, 11], [7, 6, 16, 17], [76, 158, 159, 114], [15, 1, 5, 14], [9, 23, 48, 49], [3, 42, 43, 18], [25, 24, 50, 51], [6, 3, 18, 19]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[399,398],
      [391,390],
      [389,388],
      [385,384],
      [377,376],
      [339,375],
      [372,371],
      [369,368],
      [367,366],
      [363,362],
      [361,360],
      [357,356],
      [321,355],
      [355,354],
      [308,345],
      [345,344],
      [343,342],
      [339,338],
      [335,334],
      [333,332],
      [287,329],
      [329,328],
      [327,326],
      [325,324],
      [323,322],
      [277,321],
      [321,320],
      [319,318],
      [317,316],
      [261,311],
      [309,308],
      [308,261],
      [307,306],
      [255,303],
      [303,302],
      [301,300],
      [299,298],
      [295,294],
      [294,248],
      [287,286],
      [282,281],
      [281,280],
      [279,278],
      [277,276],
      [271,270],
      [269,268],
      [267,266],
      [263,262],
      [261,260],
      [262,261],
      [257,256],
      [211,255],
      [255,254],
      [252,206],
      [253,252],
      [248,198],
      [249,248],
      [247,246],
      [242,192],
      [243,242],
      [240,193],
      [237,236],
      [235,234],
      [231,230],
      [228,180],
      [227,226],
      [224,174],
      [225,224],
      [223,222],
      [221,220],
      [219,218],
      [166,217],
      [217,216],
      [215,214],
      [211,210],
      [207,206],
      [203,202],
      [199,198],
      [195,194],
      [192,140],
      [193,192],
      [141,193],
      [187,186],
      [184,134],
      [185,184],
      [131,183],
      [180,131],
      [181,180],
      [177,176],
      [175,174],
      [173,172],
      [171,170],
      [169,168],
      [166,121],
      [165,164],
      [117,161],
      [161,160],
      [159,158],
      [157,156],
      [155,154],
      [153,152],
      [150,110],
      [151,150],
      [147,146],
      [101,141],
      [141,140],
      [139,138],
      [95,137],
      [134,92],
      [135,134],
      [131,130],
      [132,131],
      [91,129],
      [129,128],
      [127,126],
      [125,124],
      [123,122],
      [121,120],
      [83,121],
      [119,118],
      [81,117],
      [117,116],
      [114,76],
      [115,114],
      [73,113],
      [110,70],
      [111,110],
      [109,108],
      [107,106],
      [63,101],
      [100,62],
      [101,100],
      [99,98],
      [95,94],
      [93,92],
      [54,91],
      [91,90],
      [89,88],
      [87,86],
      [85,84],
      [83,82],
      [82,81],
      [81,80],
      [77,76],
      [73,72],
      [71,70],
      [67,66],
      [65,64],
      [34,63],
      [62,33],
      [63,62],
      [61,60],
      [59,58],
      [56,28],
      [57,56],
      [54,29],
      [53,52],
      [51,50],
      [49,48],
      [47,46],
      [45,44],
      [41,40],
      [40,18],
      [39,38],
      [37,36],
      [17,37],
      [32,14],
      [33,32],
      [34,33],
      [31,30],
      [28,12],
      [29,28],
      [13,29],
      [27,26],
      [25,24],
      [9,23],
      [23,22],
      [8,21],
      [18,3],
      [19,18],
      [16,6],
      [17,16],
      [15,14],
      [5,13],
      [13,12],
      [11,10],
      [3,9],
      [9,8],
      [8,2],
      [6,3],
      [7,6],
      [1,5],
      [5,4],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.70373498087841,
      3.04159066823145,
      3.09636807426406,
      2.82960140670852,
      2.65316719190051,
      2.91087133575752,
      2.77834241965971,
      3.11695278914575,
      2.93560584133826,
      3.10091674144487,
      3.10161592397479,
      3.03156400786825,
      2.88294794639697,
      2.87954705292492,
      2.93783141995194,
      2.70640498094722,
      2.84920948177026,
      2.99154559801284,
      2.77834241965971,
      2.93783141995194,
      2.78687096440233,
      3.05629851344898,
      3.10583942253305,
      3.07447561324424,
      2.84709078787962,
      2.55256996512811,
      2.65316719190051,
      2.78687096440233,
      3.10583942253305,
      2.64481905010392,
      3.07447561324424,
      2.93783141995194,
      2.65316719190051,
      3.03156400786825,
      2.92455544944231,
      3.10070635271939,
      3.09944920698339,
      2.70640498094722,
      2.87907146167842,
      2.78687096440233,
      2.64389010361883,
      2.64565074123291,
      2.64481905010392,
      2.84920948177026,
      2.93560584133826,
      3.10091674144487,
      3.09636807426406,
      2.64389010361883,
      2.77834241965971,
      2.64565074123291,
      2.87954705292492,
      2.82960140670852,
      2.83888669334143,
      2.80258419179879,
      2.88294794639697,
      2.84920948177026,
      3.08838299046596,
      3.05629851344898,
      3.03156400786825,
      2.92455544944231,
      2.93560584133826,
      2.84709078787962,
      2.64389010361883,
      2.87907146167842,
      2.65316719190051,
      3.07447561324424,
      2.91087133575752,
      3.03156400786825,
      3.04159066823145,
      2.84709078787962,
      3.09636807426406,
      2.64565074123291,
      3.11695278914575,
      3.04159066823145,
      2.82960140670852,
      2.82960140670852,
      2.91087133575752,
      2.55256996512811,
      2.91087133575752,
      2.82960140670852,
      2.83888669334143,
      2.83888669334143,
      2.87954705292492,
      3.09636807426406,
      3.10583942253305,
      2.93783141995194,
      2.64481905010392,
      3.09944920698339,
      3.10161592397479,
      2.55256996512811,
      2.87954705292492,
      2.64481905010392,
      3.10161592397479,
      2.93783141995194,
      3.10091674144487,
      2.87954705292492,
      2.88294794639697,
      2.70373498087841,
      2.83888669334143,
      2.93560584133826,
      3.05629851344898,
      2.92455544944231,
      3.03156400786825,
      3.04159066823145,
      2.70373498087841,
      2.82960140670852,
      3.11032616281639,
      2.82960140670852,
      3.04159066823145,
      3.10091674144487,
      2.64565074123291,
      2.77834241965971,
      3.11032616281639,
      3.09636807426406,
      3.08838299046596,
      2.65316719190051,
      2.87907146167842,
      3.07447561324424,
      2.93783141995194,
      3.10583942253305,
      2.84709078787962,
      3.0994492069834,
      2.91087133575752,
      2.92455544944231,
      2.78687096440233,
      2.78687096440233,
      2.93560584133826,
      3.10161592397479,
      3.10091674144487,
      2.65316719190051,
      2.87954705292492,
      2.88294794639697,
      3.11695278914576,
      2.82960140670852,
      3.04159066823145,
      2.77834241965971,
      2.84709078787962,
      2.70640498094722,
      2.84920948177026,
      2.64481905010392,
      2.64565074123291,
      2.64389010361883,
      2.77834241965971,
      2.99154559801284,
      2.78687096440233,
      2.78687096440233,
      3.07447561324424,
      3.10583942253305,
      2.64481905010392,
      2.84709078787962,
      3.09944920698339,
      2.93783141995194,
      3.03156400786825,
      2.88294794639697,
      2.87954705292492,
      2.64481905010392,
      2.93783141995194,
      2.65316719190051,
      2.84709078787962,
      2.64389010361883,
      3.07447561324424,
      2.92455544944231,
      3.03156400786825,
      2.93560584133826,
      3.05629851344898,
      2.99154559801284,
      2.64565074123291,
      2.64389010361883,
      2.77834241965971,
      2.70640498094722,
      2.55256996512811,
      2.65316719190051,
      3.08838299046596,
      3.11695278914575,
      2.87954705292492,
      3.09636807426406,
      3.10583942253305,
      3.10161592397479,
      2.82960140670852,
      2.83888669334143,
      3.03156400786825,
      2.91087133575752,
      2.77834241965971,
      3.08838299046596,
      2.84920948177026,
      3.11032616281639,
      3.04159066823145,
      3.10091674144487,
      3.10091674144487,
      2.82960140670852,
      2.70373498087841,
      3.09944920698339,
      2.65316719190051,
      3.10070635271939,
      3.04159066823145,
      2.80258419179879,
      2.87954705292492];

obj0.userData.subtrees = [[408,409],
      [406,407],
      [404,405],
      [402,403],
      [400,401],
      [398,399,408,409],
      [396,397],
      [394,395],
      [392,393],
      [390,391,406,407],
      [388,389,404,405],
      [386,387],
      [384,385,402,403],
      [382,383],
      [380,381],
      [378,379],
      [376,377,400,401],
      [374,375,398,399,408,409],
      [370,371,372,373,396,397],
      [368,369,394,395],
      [366,367,392,393],
      [364,365],
      [362,363,390,391,406,407],
      [360,361,388,389,404,405],
      [358,359],
      [356,357,386,387],
      [354,355,382,383,384,385,402,403],
      [352,353],
      [350,351],
      [348,349],
      [346,347],
      [344,345,378,379,380,381],
      [342,343,376,377,400,401],
      [340,341],
      [338,339,374,375,398,399,408,409],
      [336,337],
      [334,335,370,371,372,373,396,397],
      [332,333,368,369,394,395],
      [330,331],
      [328,329,364,365,366,367,392,393],
      [326,327,362,363,390,391,406,407],
      [324,325,360,361,388,389,404,405],
      [322,323,358,359],
      [320,321,354,355,356,357,382,383,384,385,386,387,402,403],
      [318,319,352,353],
      [316,317,350,351],
      [314,315],
      [312,313],
      [310,311,348,349],
      [308,309,344,345,346,347,378,379,380,381],
      [306,307,342,343,376,377,400,401],
      [304,305],
      [302,303,338,339,340,341,374,375,398,399,408,409],
      [300,301,336,337],
      [298,299,334,335,370,371,372,373,396,397],
      [296,297],
      [294,295,330,331,332,333,368,369,394,395],
      [292,293],
      [290,291],
      [288,289],
      [286,287,328,329,364,365,366,367,392,393],
      [284,285],
      [280,281,282,283,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [278,279,322,323,358,359],
      [276,277,320,321,354,355,356,357,382,383,384,385,386,387,402,403],
      [274,275],
      [272,273],
      [270,271,318,319,352,353],
      [268,269,316,317,350,351],
      [266,267,314,315],
      [264,265],
      [260,261,262,263,308,309,310,311,312,313,344,345,346,347,348,349,378,379,380,381],
      [258,259],
      [256,257,306,307,342,343,376,377,400,401],
      [254,255,302,303,304,305,338,339,340,341,374,375,398,399,408,409],
      [252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [250,251],
      [248,249,294,295,296,297,330,331,332,333,368,369,394,395],
      [246,247,292,293],
      [244,245],
      [242,243,288,289,290,291],
      [240,241,286,287,328,329,364,365,366,367,392,393],
      [238,239],
      [236,237,284,285],
      [234,235,280,281,282,283,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [232,233],
      [230,231,278,279,322,323,358,359],
      [228,229,276,277,320,321,354,355,356,357,382,383,384,385,386,387,402,403],
      [226,227,274,275],
      [224,225,270,271,272,273,318,319,352,353],
      [222,223,268,269,316,317,350,351],
      [220,221,266,267,314,315],
      [218,219,264,265],
      [216,217,258,259,260,261,262,263,308,309,310,311,312,313,344,345,346,347,348,349,378,379,380,381],
      [214,215,256,257,306,307,342,343,376,377,400,401],
      [212,213],
      [210,211,254,255,302,303,304,305,338,339,340,341,374,375,398,399,408,409],
      [208,209],
      [206,207,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [204,205],
      [202,203,250,251],
      [200,201],
      [198,199,248,249,294,295,296,297,330,331,332,333,368,369,394,395],
      [196,197],
      [194,195,246,247,292,293],
      [192,193,240,241,242,243,244,245,286,287,288,289,290,291,328,329,364,365,366,367,392,393],
      [190,191],
      [188,189],
      [186,187,238,239],
      [184,185,234,235,236,237,280,281,282,283,284,285,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [182,183,232,233],
      [180,181,228,229,230,231,276,277,278,279,320,321,322,323,354,355,356,357,358,359,382,383,384,385,386,387,402,403],
      [178,179],
      [176,177,226,227,274,275],
      [174,175,224,225,270,271,272,273,318,319,352,353],
      [172,173,222,223,268,269,316,317,350,351],
      [170,171,220,221,266,267,314,315],
      [168,169,218,219,264,265],
      [166,167,216,217,258,259,260,261,262,263,308,309,310,311,312,313,344,345,346,347,348,349,378,379,380,381],
      [164,165,214,215,256,257,306,307,342,343,376,377,400,401],
      [162,163],
      [160,161,210,211,212,213,254,255,302,303,304,305,338,339,340,341,374,375,398,399,408,409],
      [158,159,208,209],
      [156,157,206,207,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [154,155,204,205],
      [152,153,202,203,250,251],
      [150,151,198,199,200,201,248,249,294,295,296,297,330,331,332,333,368,369,394,395],
      [148,149],
      [146,147,196,197],
      [144,145],
      [142,143],
      [140,141,192,193,194,195,240,241,242,243,244,245,246,247,286,287,288,289,290,291,292,293,328,329,364,365,366,367,392,393],
      [138,139,190,191],
      [136,137,188,189],
      [134,135,184,185,186,187,234,235,236,237,238,239,280,281,282,283,284,285,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [130,131,132,133,180,181,182,183,228,229,230,231,232,233,276,277,278,279,320,321,322,323,354,355,356,357,358,359,382,383,384,385,386,387,402,403],
      [128,129,176,177,178,179,226,227,274,275],
      [126,127,174,175,224,225,270,271,272,273,318,319,352,353],
      [124,125,172,173,222,223,268,269,316,317,350,351],
      [122,123,170,171,220,221,266,267,314,315],
      [120,121,166,167,168,169,216,217,218,219,258,259,260,261,262,263,264,265,308,309,310,311,312,313,344,345,346,347,348,349,378,379,380,381],
      [118,119,164,165,214,215,256,257,306,307,342,343,376,377,400,401],
      [116,117,160,161,162,163,210,211,212,213,254,255,302,303,304,305,338,339,340,341,374,375,398,399,408,409],
      [114,115,156,157,158,159,206,207,208,209,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [112,113,154,155,204,205],
      [110,111,150,151,152,153,198,199,200,201,202,203,248,249,250,251,294,295,296,297,330,331,332,333,368,369,394,395],
      [108,109,148,149],
      [106,107,146,147,196,197],
      [104,105],
      [102,103],
      [100,101,140,141,142,143,144,145,192,193,194,195,240,241,242,243,244,245,246,247,286,287,288,289,290,291,292,293,328,329,364,365,366,367,392,393],
      [98,99,138,139,190,191],
      [96,97],
      [94,95,136,137,188,189],
      [92,93,134,135,184,185,186,187,234,235,236,237,238,239,280,281,282,283,284,285,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [90,91,128,129,130,131,132,133,176,177,178,179,180,181,182,183,226,227,228,229,230,231,232,233,274,275,276,277,278,279,320,321,322,323,354,355,356,357,358,359,382,383,384,385,386,387,402,403],
      [88,89,126,127,174,175,224,225,270,271,272,273,318,319,352,353],
      [86,87,124,125,172,173,222,223,268,269,316,317,350,351],
      [84,85,122,123,170,171,220,221,266,267,314,315],
      [80,81,82,83,116,117,118,119,120,121,160,161,162,163,164,165,166,167,168,169,210,211,212,213,214,215,216,217,218,219,254,255,256,257,258,259,260,261,262,263,264,265,302,303,304,305,306,307,308,309,310,311,312,313,338,339,340,341,342,343,344,345,346,347,348,349,374,375,376,377,378,379,380,381,398,399,400,401,408,409],
      [78,79],
      [76,77,114,115,156,157,158,159,206,207,208,209,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [74,75],
      [72,73,112,113,154,155,204,205],
      [70,71,110,111,150,151,152,153,198,199,200,201,202,203,248,249,250,251,294,295,296,297,330,331,332,333,368,369,394,395],
      [68,69],
      [66,67,108,109,148,149],
      [64,65,106,107,146,147,196,197],
      [62,63,100,101,102,103,104,105,140,141,142,143,144,145,192,193,194,195,240,241,242,243,244,245,246,247,286,287,288,289,290,291,292,293,328,329,364,365,366,367,392,393],
      [60,61,98,99,138,139,190,191],
      [58,59,96,97],
      [56,57,92,93,94,95,134,135,136,137,184,185,186,187,188,189,234,235,236,237,238,239,280,281,282,283,284,285,324,325,326,327,360,361,362,363,388,389,390,391,404,405,406,407],
      [54,55,90,91,128,129,130,131,132,133,176,177,178,179,180,181,182,183,226,227,228,229,230,231,232,233,274,275,276,277,278,279,320,321,322,323,354,355,356,357,358,359,382,383,384,385,386,387,402,403],
      [52,53,88,89,126,127,174,175,224,225,270,271,272,273,318,319,352,353],
      [50,51,86,87,124,125,172,173,222,223,268,269,316,317,350,351],
      [48,49,84,85,122,123,170,171,220,221,266,267,314,315],
      [46,47,80,81,82,83,116,117,118,119,120,121,160,161,162,163,164,165,166,167,168,169,210,211,212,213,214,215,216,217,218,219,254,255,256,257,258,259,260,261,262,263,264,265,302,303,304,305,306,307,308,309,310,311,312,313,338,339,340,341,342,343,344,345,346,347,348,349,374,375,376,377,378,379,380,381,398,399,400,401,408,409],
      [44,45,78,79],
      [42,43],
      [40,41,74,75,76,77,114,115,156,157,158,159,206,207,208,209,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [38,39,72,73,112,113,154,155,204,205],
      [36,37,68,69,70,71,110,111,150,151,152,153,198,199,200,201,202,203,248,249,250,251,294,295,296,297,330,331,332,333,368,369,394,395],
      [32,33,34,35,62,63,64,65,66,67,100,101,102,103,104,105,106,107,108,109,140,141,142,143,144,145,146,147,148,149,192,193,194,195,196,197,240,241,242,243,244,245,246,247,286,287,288,289,290,291,292,293,328,329,364,365,366,367,392,393],
      [30,31,60,61,98,99,138,139,190,191],
      [28,29,54,55,56,57,58,59,90,91,92,93,94,95,96,97,128,129,130,131,132,133,134,135,136,137,176,177,178,179,180,181,182,183,184,185,186,187,188,189,226,227,228,229,230,231,232,233,234,235,236,237,238,239,274,275,276,277,278,279,280,281,282,283,284,285,320,321,322,323,324,325,326,327,354,355,356,357,358,359,360,361,362,363,382,383,384,385,386,387,388,389,390,391,402,403,404,405,406,407],
      [26,27,52,53,88,89,126,127,174,175,224,225,270,271,272,273,318,319,352,353],
      [24,25,50,51,86,87,124,125,172,173,222,223,268,269,316,317,350,351],
      [22,23,46,47,48,49,80,81,82,83,84,85,116,117,118,119,120,121,122,123,160,161,162,163,164,165,166,167,168,169,170,171,210,211,212,213,214,215,216,217,218,219,220,221,254,255,256,257,258,259,260,261,262,263,264,265,266,267,302,303,304,305,306,307,308,309,310,311,312,313,314,315,338,339,340,341,342,343,344,345,346,347,348,349,374,375,376,377,378,379,380,381,398,399,400,401,408,409],
      [20,21,44,45,78,79],
      [18,19,40,41,42,43,74,75,76,77,114,115,156,157,158,159,206,207,208,209,252,253,298,299,300,301,334,335,336,337,370,371,372,373,396,397],
      [16,17,36,37,38,39,68,69,70,71,72,73,110,111,112,113,150,151,152,153,154,155,198,199,200,201,202,203,204,205,248,249,250,251,294,295,296,297,330,331,332,333,368,369,394,395],
      [14,15,32,33,34,35,62,63,64,65,66,67,100,101,102,103,104,105,106,107,108,109,140,141,142,143,144,145,146,147,148,149,192,193,194,195,196,197,240,241,242,243,244,245,246,247,286,287,288,289,290,291,292,293,328,329,364,365,366,367,392,393],
      [12,13,28,29,30,31,54,55,56,57,58,59,60,61,90,91,92,93,94,95,96,97,98,99,128,129,130,131,132,133,134,135,136,137,138,139,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,226,227,228,229,230,231,232,233,234,235,236,237,238,239,274,275,276,277,278,279,280,281,282,283,284,285,320,321,322,323,324,325,326,327,354,355,356,357,358,359,360,361,362,363,382,383,384,385,386,387,388,389,390,391,402,403,404,405,406,407],
      [10,11,26,27,52,53,88,89,126,127,174,175,224,225,270,271,272,273,318,319,352,353],
      [8,9,20,21,22,23,24,25,44,45,46,47,48,49,50,51,78,79,80,81,82,83,84,85,86,87,116,117,118,119,120,121,122,123,124,125,160,161,162,163,164,165,166,167,168,169,170,171,172,173,210,211,212,213,214,215,216,217,218,219,220,221,222,223,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,338,339,340,341,342,343,344,345,346,347,348,349,350,351,374,375,376,377,378,379,380,381,398,399,400,401,408,409],
      [6,7,16,17,18,19,36,37,38,39,40,41,42,43,68,69,70,71,72,73,74,75,76,77,110,111,112,113,114,115,150,151,152,153,154,155,156,157,158,159,198,199,200,201,202,203,204,205,206,207,208,209,248,249,250,251,252,253,294,295,296,297,298,299,300,301,330,331,332,333,334,335,336,337,368,369,370,371,372,373,394,395,396,397],
      [4,5,12,13,14,15,28,29,30,31,32,33,34,35,54,55,56,57,58,59,60,61,62,63,64,65,66,67,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,320,321,322,323,324,325,326,327,328,329,354,355,356,357,358,359,360,361,362,363,364,365,366,367,382,383,384,385,386,387,388,389,390,391,392,393,402,403,404,405,406,407]];

obj0.userData.polytoperoot = [[0.964861476007666,-0.0209752494784275,-0.33560399165484],
      [368.688503146857,114.420569942128,63.5669833011822],
      [-5.2,-40.8,103.6]];

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
