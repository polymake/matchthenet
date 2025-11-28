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
obj0.userData.points.push(new PMPoint(0.528257, 0, 0));
obj0.userData.points.push(new PMPoint(0.460319, 1.08041, 0));
obj0.userData.points.push(new PMPoint(0.196493, -0.502687, 0));
obj0.userData.points.push(new PMPoint(0.516677, -0.346598, 0));
obj0.userData.points.push(new PMPoint(1.05235, 0.0661742, 0));
obj0.userData.points.push(new PMPoint(-0.365937, 0.38098, 0));
obj0.userData.points.push(new PMPoint(0.82573, -0.523709, 0));
obj0.userData.points.push(new PMPoint(1.05534, -0.0352588, 0));
obj0.userData.points.push(new PMPoint(-0.401404, -0.360803, 0));
obj0.userData.points.push(new PMPoint(-0.145973, -0.615127, 0));
obj0.userData.points.push(new PMPoint(0.466313, -1.00041, 0));
obj0.userData.points.push(new PMPoint(0.809179, -0.549883, 0));
obj0.userData.points.push(new PMPoint(1.36768, 0.489993, 0));
obj0.userData.points.push(new PMPoint(-0.607883, 0.132531, 0));
obj0.userData.points.push(new PMPoint(-0.498654, -0.206513, 0));
obj0.userData.points.push(new PMPoint(-0.681267, 0.804799, 0));
obj0.userData.points.push(new PMPoint(1.15993, -0.658757, 0));
obj0.userData.points.push(new PMPoint(1.43176, -0.422049, 0));
obj0.userData.points.push(new PMPoint(-0.215123, -0.981221, 0));
obj0.userData.points.push(new PMPoint(0.357137, -1.04558, 0));
obj0.userData.points.push(new PMPoint(-0.788844, -0.773628, 0));
obj0.userData.points.push(new PMPoint(-0.248685, -0.973257, 0));
obj0.userData.points.push(new PMPoint(1.02416, -1.14335, 0));
obj0.userData.points.push(new PMPoint(1.08944, -0.77655, 0));
obj0.userData.points.push(new PMPoint(1.57295, -0.0762462, 0));
obj0.userData.points.push(new PMPoint(1.63885, 0.27381, 0));
obj0.userData.points.push(new PMPoint(1.62744, 0.949975, 0));
obj0.userData.points.push(new PMPoint(-0.756487, 0.736685, 0));
obj0.userData.points.push(new PMPoint(-0.949704, 0.23273, 0));
obj0.userData.points.push(new PMPoint(-0.957115, 0.202663, 0));
obj0.userData.points.push(new PMPoint(-1.04453, -0.356707, 0));
obj0.userData.points.push(new PMPoint(-0.594045, 1.32581, 0));
obj0.userData.points.push(new PMPoint(1.23851, -1.02294, 0));
obj0.userData.points.push(new PMPoint(1.79079, -0.859814, 0));
obj0.userData.points.push(new PMPoint(-0.242437, -1.35976, 0));
obj0.userData.points.push(new PMPoint(0.0858251, -1.56332, 0));
obj0.userData.points.push(new PMPoint(-0.779086, -1.35807, 0));
obj0.userData.points.push(new PMPoint(-0.394365, -1.32371, 0));
obj0.userData.points.push(new PMPoint(0.536208, -1.58074, 0));
obj0.userData.points.push(new PMPoint(0.915344, -1.50694, 0));
obj0.userData.points.push(new PMPoint(1.96542, 0.41604, 0));
obj0.userData.points.push(new PMPoint(1.7106, 0.891821, 0));
obj0.userData.points.push(new PMPoint(2.13334, -0.156876, 0));
obj0.userData.points.push(new PMPoint(1.97654, 0.387137, 0));
obj0.userData.points.push(new PMPoint(1.47564, 1.45595, 0));
obj0.userData.points.push(new PMPoint(-1.2962, 0.740225, 0));
obj0.userData.points.push(new PMPoint(-1.27861, 0.380203, 0));
obj0.userData.points.push(new PMPoint(-1.31473, 0.247772, 0));
obj0.userData.points.push(new PMPoint(-1.53405, -0.0534054, 0));
obj0.userData.points.push(new PMPoint(-0.442244, 1.83178, 0));
obj0.userData.points.push(new PMPoint(-0.937798, 1.37161, 0));
obj0.userData.points.push(new PMPoint(-1.14461, 1.0816, 0));
obj0.userData.points.push(new PMPoint(1.36047, -1.38234, 0));
obj0.userData.points.push(new PMPoint(1.74204, -1.4423, 0));
obj0.userData.points.push(new PMPoint(-0.578638, -1.54992, 0));
obj0.userData.points.push(new PMPoint(-0.25653, -2.05867, 0));
obj0.userData.points.push(new PMPoint(-1.32204, -0.991178, 0));
obj0.userData.points.push(new PMPoint(-1.16474, -1.33657, 0));
obj0.userData.points.push(new PMPoint(0.680467, -2.16535, 0));
obj0.userData.points.push(new PMPoint(1.16217, -1.80405, 0));
obj0.userData.points.push(new PMPoint(2.27326, 0.603552, 0));
obj0.userData.points.push(new PMPoint(2.24562, 0.962942, 0));
obj0.userData.points.push(new PMPoint(2.58101, 0.205358, 0));
obj0.userData.points.push(new PMPoint(2.32569, 0.476689, 0));
obj0.userData.points.push(new PMPoint(1.26165, 1.93893, 0));
obj0.userData.points.push(new PMPoint(2.05246, 1.28263, 0));
obj0.userData.points.push(new PMPoint(1.81094, 1.54446, 0));
obj0.userData.points.push(new PMPoint(-1.86062, 0.695902, 0));
obj0.userData.points.push(new PMPoint(-1.59569, 0.184593, 0));
obj0.userData.points.push(new PMPoint(-0.980193, 1.78803, 0));
obj0.userData.points.push(new PMPoint(-0.922697, 1.4365, 0));
obj0.userData.points.push(new PMPoint(-1.09, 1.69366, 0));
obj0.userData.points.push(new PMPoint(-1.59096, 1.42989, 0));
obj0.userData.points.push(new PMPoint(2.12827, -1.44659, 0));
obj0.userData.points.push(new PMPoint(2.30827, -1.11247, 0));
obj0.userData.points.push(new PMPoint(-0.894317, -1.77249, 0));
obj0.userData.points.push(new PMPoint(-0.850713, -2.15627, 0));
obj0.userData.points.push(new PMPoint(-1.83616, -1.2506, 0));
obj0.userData.points.push(new PMPoint(-1.40168, -1.64161, 0));
obj0.userData.points.push(new PMPoint(1.20133, -2.46749, 0));
obj0.userData.points.push(new PMPoint(1.3783, -2.12417, 0));
obj0.userData.points.push(new PMPoint(2.61235, 0.449204, 0));
obj0.userData.points.push(new PMPoint(2.81114, 0.989672, 0));
obj0.userData.points.push(new PMPoint(1.78783, 1.60694, 0));
obj0.userData.points.push(new PMPoint(1.80084, 1.96291, 0));
obj0.userData.points.push(new PMPoint(2.45166, 1.6841, 0));
obj0.userData.points.push(new PMPoint(1.9216, 1.88304, 0));
obj0.userData.points.push(new PMPoint(-0.672481, 2.31994, 0));
obj0.userData.points.push(new PMPoint(-0.98948, 2.14836, 0));
obj0.userData.points.push(new PMPoint(-1.26728, 2.00751, 0));
obj0.userData.points.push(new PMPoint(-1.63983, 2.00368, 0));
obj0.userData.points.push(new PMPoint(2.34432, -1.76677, 0));
obj0.userData.points.push(new PMPoint(2.80394, -1.40562, 0));
obj0.userData.points.push(new PMPoint(-0.769252, -2.53384, 0));
obj0.userData.points.push(new PMPoint(-0.398961, -2.64373, 0));
obj0.userData.points.push(new PMPoint(-2.04016, -1.78912, 0));
obj0.userData.points.push(new PMPoint(-1.68015, -1.90928, 0));
obj0.userData.points.push(new PMPoint(2.42826, 2.25949, 0));
obj0.userData.points.push(new PMPoint(2.05817, 2.21662, 0));
obj0.userData.points.push(new PMPoint(2.60431, -2.05242, 0));
obj0.userData.points.push(new PMPoint(2.97153, -1.95656, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 4, 3, 4, 1, 5, 2, 5, 0, 6, 2, 6, 4, 7, 1, 8, 7, 8, 0, 9, 3, 10, 9, 10, 3, 11, 4, 12, 11, 12, 2, 13, 5, 13, 6, 14, 0, 15, 14, 15, 2, 16, 6, 16, 7, 17, 8, 18, 17, 18, 10, 19, 3, 20, 19, 20, 9, 21, 10, 22, 21, 22, 11, 23, 12, 24, 23, 24, 5, 25, 13, 26, 25, 26, 2, 27, 13, 27, 6, 28, 14, 29, 28, 29, 14, 30, 15, 31, 30, 31, 2, 32, 16, 32, 17, 33, 18, 34, 33, 34, 19, 35, 20, 36, 35, 36, 21, 37, 22, 38, 37, 38, 11, 39, 23, 40, 39, 40, 26, 41, 13, 42, 41, 42, 25, 43, 26, 44, 43, 44, 2, 45, 27, 45, 28, 46, 29, 47, 46, 47, 30, 48, 31, 49, 48, 49, 2, 50, 32, 50, 32, 51, 16, 52, 51, 52, 33, 53, 34, 54, 53, 54, 35, 55, 36, 56, 55, 56, 21, 57, 37, 58, 57, 58, 39, 59, 40, 60, 59, 60, 41, 61, 42, 62, 61, 62, 43, 63, 44, 64, 63, 64, 2, 65, 45, 65, 27, 66, 45, 67, 66, 67, 46, 68, 47, 69, 68, 69, 50, 70, 32, 71, 70, 71, 51, 72, 52, 73, 72, 73, 54, 74, 34, 75, 74, 75, 55, 76, 56, 77, 76, 77, 57, 78, 58, 79, 78, 79, 59, 80, 60, 81, 80, 81, 61, 82, 62, 83, 82, 83, 45, 84, 65, 85, 84, 85, 66, 86, 67, 87, 86, 87, 50, 88, 70, 89, 88, 89, 72, 90, 73, 91, 90, 91, 74, 92, 75, 93, 92, 93, 77, 94, 56, 95, 94, 95, 78, 96, 79, 97, 96, 97, 86, 98, 87, 99, 98, 99, 92, 100, 93, 101, 100, 101];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [4, 1, 0, 3], [2, 1, 5], [0, 2, 6], [8, 1, 4, 7], [0, 9, 10, 3], [2, 5, 13], [12, 4, 3, 11], [0, 6, 14, 15], [8, 7, 17, 18], [20, 3, 10, 19], [6, 2, 16], [13, 5, 25, 26], [12, 11, 23, 24], [6, 28, 29, 14], [9, 21, 22, 10], [2, 13, 27], [20, 19, 35, 36], [16, 2, 32], [15, 14, 30, 31], [13, 26, 41, 42], [18, 17, 33, 34], [23, 11, 39, 40], [29, 28, 46, 47], [22, 21, 37, 38], [2, 27, 45], [26, 25, 43, 44], [32, 2, 50], [16, 32, 51, 52], [31, 30, 48, 49], [42, 41, 61, 62], [34, 33, 53, 54], [2, 45, 65], [36, 35, 55, 56], [21, 57, 58, 37], [45, 27, 66, 67], [44, 43, 63, 64], [32, 50, 70, 71], [40, 39, 59, 60], [47, 46, 68, 69], [34, 54, 74, 75], [45, 84, 85, 65], [55, 76, 77, 56], [52, 51, 72, 73], [61, 82, 83, 62], [70, 50, 88, 89], [60, 59, 80, 81], [57, 78, 79, 58], [67, 66, 86, 87], [56, 77, 94, 95], [73, 72, 90, 91], [75, 74, 92, 93], [78, 96, 97, 79], [87, 86, 98, 99], [93, 92, 100, 101]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
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
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[93,92],
      [87,86],
      [79,78],
      [56,77],
      [75,74],
      [73,72],
      [70,50],
      [67,66],
      [65,45],
      [62,61],
      [60,59],
      [58,57],
      [56,55],
      [34,54],
      [52,51],
      [32,50],
      [47,46],
      [45,27],
      [2,45],
      [44,43],
      [42,41],
      [40,39],
      [37,21],
      [36,35],
      [34,33],
      [16,32],
      [32,2],
      [31,30],
      [29,28],
      [2,27],
      [26,25],
      [13,26],
      [23,11],
      [22,21],
      [20,19],
      [18,17],
      [16,2],
      [15,14],
      [14,6],
      [2,13],
      [13,5],
      [12,11],
      [10,9],
      [3,10],
      [8,7],
      [6,2],
      [0,6],
      [2,5],
      [4,3],
      [3,0],
      [1,4],
      [0,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.66264388466519,
      2.68449868983043,
      2.66264388466519,
      2.65141765217348,
      2.66264388466519,
      2.68449868983043,
      2.69902858238642,
      2.69699128655038,
      2.71039914982383,
      2.68805111602412,
      2.65141765217348,
      2.66264388466519,
      2.65141765217348,
      2.66264388466519,
      2.69699128655038,
      2.71039914982383,
      2.68805111602412,
      2.71039914982383,
      2.71576555388821,
      2.68449868983043,
      2.69902858238642,
      2.65761870792341,
      2.66264388466519,
      2.65761870792341,
      2.67236773031476,
      2.71039914982383,
      2.71576555388821,
      2.68449868983043,
      2.69902858238642,
      2.71576555388821,
      2.69699128655038,
      2.70287311523343,
      2.67236773031476,
      2.67236773031476,
      2.67236773031476,
      2.68805111602412,
      2.71576555388821,
      2.69699128655038,
      2.70287311523343,
      2.71576555388821,
      2.71039914982383,
      2.68449868983043,
      2.68805111602412,
      2.68805111602412,
      2.69902858238642,
      2.71576555388821,
      2.71039914982383,
      2.71576555388821,
      2.69699128655038,
      2.69902858238642,
      2.70287311523343,
      2.71576555388821,
      2.71576555388821,
      2.71039914982383];

obj0.userData.subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93,100,101],
      [90,91],
      [88,89],
      [86,87,98,99],
      [84,85],
      [82,83],
      [80,81],
      [78,79,96,97],
      [76,77,94,95],
      [74,75,92,93,100,101],
      [72,73,90,91],
      [70,71,88,89],
      [68,69],
      [66,67,86,87,98,99],
      [65,84,85],
      [63,64],
      [61,62,82,83],
      [59,60,80,81],
      [57,58,78,79,96,97],
      [55,56,76,77,94,95],
      [53,54,74,75,92,93,100,101],
      [51,52,72,73,90,91],
      [50,70,71,88,89],
      [48,49],
      [46,47,68,69],
      [45,65,66,67,84,85,86,87,98,99],
      [43,44,63,64],
      [41,42,61,62,82,83],
      [39,40,59,60,80,81],
      [37,38,57,58,78,79,96,97],
      [35,36,55,56,76,77,94,95],
      [33,34,53,54,74,75,92,93,100,101],
      [32,50,51,52,70,71,72,73,88,89,90,91],
      [30,31,48,49],
      [28,29,46,47,68,69],
      [27,45,65,66,67,84,85,86,87,98,99],
      [25,26,41,42,43,44,61,62,63,64,82,83],
      [23,24,39,40,59,60,80,81],
      [21,22,37,38,57,58,78,79,96,97],
      [19,20,35,36,55,56,76,77,94,95],
      [17,18,33,34,53,54,74,75,92,93,100,101],
      [16,32,50,51,52,70,71,72,73,88,89,90,91],
      [14,15,28,29,30,31,46,47,48,49,68,69],
      [13,25,26,27,41,42,43,44,45,61,62,63,64,65,66,67,82,83,84,85,86,87,98,99],
      [11,12,23,24,39,40,59,60,80,81],
      [9,10,19,20,21,22,35,36,37,38,55,56,57,58,76,77,78,79,94,95,96,97],
      [7,8,17,18,33,34,53,54,74,75,92,93,100,101],
      [6,14,15,16,28,29,30,31,32,46,47,48,49,50,51,52,68,69,70,71,72,73,88,89,90,91],
      [5,13,25,26,27,41,42,43,44,45,61,62,63,64,65,66,67,82,83,84,85,86,87,98,99],
      [3,4,7,8,9,10,11,12,17,18,19,20,21,22,23,24,33,34,35,36,37,38,39,40,53,54,55,56,57,58,59,60,74,75,76,77,78,79,80,81,92,93,94,95,96,97,100,101]];

obj0.userData.polytoperoot = [[0,-0.833790842208062,-0.515311079992983],
      [-0.313238596047353,-1.05260468155002,-0.237425238479107],
      [-0.570015605878877,0.161415319224647,0.036408797464836]];

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
