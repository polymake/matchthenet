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
obj0.userData.points.push(new PMPoint(0.448895, 0, 0));
obj0.userData.points.push(new PMPoint(0.448895, 0.448895, 0));
obj0.userData.points.push(new PMPoint(0, 0.448895, 0));
obj0.userData.points.push(new PMPoint(-0.138716, -0.426924, 0));
obj0.userData.points.push(new PMPoint(0.224447, -0.690778, 0));
obj0.userData.points.push(new PMPoint(0.587611, -0.426924, 0));
obj0.userData.points.push(new PMPoint(-0.263854, 0.812058, 0));
obj0.userData.points.push(new PMPoint(-0.690778, 0.950774, 0));
obj0.userData.points.push(new PMPoint(-1.1177, 0.812058, 0));
obj0.userData.points.push(new PMPoint(-1.38156, 0.448895, 0));
obj0.userData.points.push(new PMPoint(-1.38156, 0, 0));
obj0.userData.points.push(new PMPoint(-1.1177, -0.363163, 0));
obj0.userData.points.push(new PMPoint(-0.690778, -0.501879, 0));
obj0.userData.points.push(new PMPoint(-0.263854, -0.363163, 0));
obj0.userData.points.push(new PMPoint(0.587611, 0.875819, 0));
obj0.userData.points.push(new PMPoint(0.224447, 1.13967, 0));
obj0.userData.points.push(new PMPoint(-0.138716, 0.875819, 0));
obj0.userData.points.push(new PMPoint(0.712748, -0.363163, 0));
obj0.userData.points.push(new PMPoint(1.13967, -0.501879, 0));
obj0.userData.points.push(new PMPoint(1.5666, -0.363163, 0));
obj0.userData.points.push(new PMPoint(1.83045, 0, 0));
obj0.userData.points.push(new PMPoint(1.83045, 0.448895, 0));
obj0.userData.points.push(new PMPoint(1.5666, 0.812058, 0));
obj0.userData.points.push(new PMPoint(1.13967, 0.950774, 0));
obj0.userData.points.push(new PMPoint(0.712748, 0.812058, 0));
obj0.userData.points.push(new PMPoint(0.488301, -1.05394, 0));
obj0.userData.points.push(new PMPoint(0.851464, -0.790088, 0));
obj0.userData.points.push(new PMPoint(-0.40257, -0.790088, 0));
obj0.userData.points.push(new PMPoint(-0.0394063, -1.05394, 0));
obj0.userData.points.push(new PMPoint(-0.690778, 1.39967, 0));
obj0.userData.points.push(new PMPoint(-1.1177, 1.53838, 0));
obj0.userData.points.push(new PMPoint(-1.38156, 1.17522, 0));
obj0.userData.points.push(new PMPoint(-1.38156, -0.726327, 0));
obj0.userData.points.push(new PMPoint(-1.1177, -1.08949, 0));
obj0.userData.points.push(new PMPoint(-0.690778, -0.950774, 0));
obj0.userData.points.push(new PMPoint(-1.74472, -0.263854, 0));
obj0.userData.points.push(new PMPoint(-1.48087, -0.627017, 0));
obj0.userData.points.push(new PMPoint(-1.80848, 0.587611, 0));
obj0.userData.points.push(new PMPoint(-2.07233, 0.224447, 0));
obj0.userData.points.push(new PMPoint(-1.80848, -0.138716, 0));
obj0.userData.points.push(new PMPoint(-1.48087, 1.07591, 0));
obj0.userData.points.push(new PMPoint(-1.74472, 0.712748, 0));
obj0.userData.points.push(new PMPoint(-0.125138, 1.23898, 0));
obj0.userData.points.push(new PMPoint(-0.552062, 1.3777, 0));
obj0.userData.points.push(new PMPoint(0.851464, 1.23898, 0));
obj0.userData.points.push(new PMPoint(0.488301, 1.50284, 0));
obj0.userData.points.push(new PMPoint(2.25737, -0.138716, 0));
obj0.userData.points.push(new PMPoint(2.52123, 0.224447, 0));
obj0.userData.points.push(new PMPoint(2.25737, 0.587611, 0));
obj0.userData.points.push(new PMPoint(1.92976, -0.627017, 0));
obj0.userData.points.push(new PMPoint(2.19361, -0.263854, 0));
obj0.userData.points.push(new PMPoint(1.13967, -0.950774, 0));
obj0.userData.points.push(new PMPoint(1.5666, -1.08949, 0));
obj0.userData.points.push(new PMPoint(1.83045, -0.726327, 0));
obj0.userData.points.push(new PMPoint(2.19361, 0.712748, 0));
obj0.userData.points.push(new PMPoint(1.92976, 1.07591, 0));
obj0.userData.points.push(new PMPoint(1.83045, 1.17522, 0));
obj0.userData.points.push(new PMPoint(1.5666, 1.53838, 0));
obj0.userData.points.push(new PMPoint(1.13967, 1.39967, 0));
obj0.userData.points.push(new PMPoint(0.0418654, -1.10086, 0));
obj0.userData.points.push(new PMPoint(-1.48087, 1.80224, 0));
obj0.userData.points.push(new PMPoint(-1.74472, 1.43907, 0));
obj0.userData.points.push(new PMPoint(-0.552062, 1.82659, 0));
obj0.userData.points.push(new PMPoint(-0.978986, 1.96531, 0));
obj0.userData.points.push(new PMPoint(-1.80848, -0.587611, 0));
obj0.userData.points.push(new PMPoint(-2.2354, -0.726327, 0));
obj0.userData.points.push(new PMPoint(-2.49926, -1.08949, 0));
obj0.userData.points.push(new PMPoint(-2.49926, -1.53838, 0));
obj0.userData.points.push(new PMPoint(-2.2354, -1.90155, 0));
obj0.userData.points.push(new PMPoint(-1.80848, -2.04026, 0));
obj0.userData.points.push(new PMPoint(-1.38156, -1.90155, 0));
obj0.userData.points.push(new PMPoint(-1.1177, -1.53838, 0));
obj0.userData.points.push(new PMPoint(-0.978986, -1.51641, 0));
obj0.userData.points.push(new PMPoint(-0.552062, -1.3777, 0));
obj0.userData.points.push(new PMPoint(-2.17164, 0.851464, 0));
obj0.userData.points.push(new PMPoint(-2.4355, 0.488301, 0));
obj0.userData.points.push(new PMPoint(-1.9273, 1.12283, 0));
obj0.userData.points.push(new PMPoint(-0.218468, 1.67807, 0));
obj0.userData.points.push(new PMPoint(2.88439, 0.488301, 0));
obj0.userData.points.push(new PMPoint(2.62054, 0.851464, 0));
obj0.userData.points.push(new PMPoint(2.3762, 1.12283, 0));
obj0.userData.points.push(new PMPoint(2.19361, 1.43907, 0));
obj0.userData.points.push(new PMPoint(1.92976, 1.80224, 0));
obj0.userData.points.push(new PMPoint(-1.74472, 2.1654, 0));
obj0.userData.points.push(new PMPoint(-2.17164, 2.02669, 0));
obj0.userData.points.push(new PMPoint(-2.17164, 1.57779, 0));
obj0.userData.points.push(new PMPoint(-1.07078, 1.98482, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 1, 6, 5, 6, 3, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 0, 14, 13, 14, 2, 15, 15, 16, 3, 17, 16, 17, 1, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 2, 25, 24, 25, 5, 26, 6, 27, 26, 27, 4, 28, 5, 29, 28, 29, 8, 30, 30, 31, 9, 32, 31, 32, 12, 33, 33, 34, 13, 35, 34, 35, 11, 36, 12, 37, 36, 37, 10, 38, 38, 39, 11, 40, 39, 40, 9, 41, 10, 42, 41, 42, 7, 43, 8, 44, 43, 44, 15, 45, 16, 46, 45, 46, 21, 47, 47, 48, 22, 49, 48, 49, 20, 50, 21, 51, 50, 51, 19, 52, 52, 53, 20, 54, 53, 54, 22, 55, 23, 56, 55, 56, 23, 57, 57, 58, 24, 59, 58, 59, 5, 60, 26, 60, 31, 61, 32, 62, 61, 62, 30, 63, 31, 64, 63, 64, 33, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 34, 72, 71, 72, 34, 73, 35, 74, 73, 74, 38, 75, 39, 76, 75, 76, 41, 77, 42, 77, 43, 78, 44, 78, 48, 79, 49, 80, 79, 80, 55, 81, 56, 81, 57, 82, 58, 83, 82, 83, 61, 84, 84, 85, 62, 86, 85, 86, 31, 87, 61, 87];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [6, 1, 0, 4, 5], [0, 3, 7, 8, 9, 10, 11, 12, 13, 14], [27, 6, 5, 26], [22, 21, 47, 48, 49], [9, 8, 30, 31, 32], [4, 28, 29, 5], [26, 5, 60], [49, 48, 79, 80], [32, 31, 61, 62], [13, 12, 33, 34, 35], [42, 41, 77], [12, 11, 36, 37], [11, 10, 38, 39, 40], [39, 38, 75, 76], [10, 9, 41, 42], [85, 86, 62, 61, 84], [71, 72, 34, 33, 65, 66, 67, 68, 69, 70], [73, 74, 35, 34], [87, 61, 31], [56, 55, 81], [58, 57, 82, 83], [21, 20, 50, 51], [20, 19, 52, 53, 54], [63, 64, 31, 30], [23, 22, 55, 56], [43, 78, 44], [7, 43, 44, 8], [24, 23, 57, 58, 59], [15, 45, 46, 16], [3, 2, 15, 16, 17], [2, 1, 18, 19, 20, 21, 22, 23, 24, 25]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[61,31],
      [62,61],
      [58,57],
      [56,55],
      [49,48],
      [44,43],
      [42,41],
      [39,38],
      [35,34],
      [34,33],
      [31,30],
      [32,31],
      [26,5],
      [24,23],
      [23,22],
      [20,19],
      [21,20],
      [22,21],
      [16,15],
      [8,7],
      [10,9],
      [11,10],
      [12,11],
      [13,12],
      [9,8],
      [5,4],
      [6,5],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.7767288254763,
      2.58801829469274,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.0344439357957,
      2.12437068569195,
      2.0344439357957,
      2.12437068569194,
      2.03444393579571,
      2.58801829469275,
      2.12437068569194,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275];

obj0.userData.subtrees = [[87],
      [84,85,86],
      [82,83],
      [81],
      [79,80],
      [78],
      [77],
      [75,76],
      [73,74],
      [65,66,67,68,69,70,71,72],
      [63,64],
      [61,62,84,85,86,87],
      [60],
      [57,58,59,82,83],
      [55,56,81],
      [52,53,54],
      [50,51],
      [47,48,49,79,80],
      [45,46],
      [43,44,78],
      [41,42,77],
      [38,39,40,75,76],
      [36,37],
      [33,34,35,65,66,67,68,69,70,71,72,73,74],
      [30,31,32,61,62,63,64,84,85,86,87],
      [28,29],
      [26,27,60],
      [18,19,20,21,22,23,24,25,47,48,49,50,51,52,53,54,55,56,57,58,59,79,80,81,82,83],
      [15,16,17,45,46],
      [7,8,9,10,11,12,13,14,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,84,85,86,87],
      [4,5,6,26,27,28,29,60]];

obj0.userData.polytoperoot = [[0.587610674626365,-0.342484799231769,-0.780463936821457],
      [2.61803398874989,-1,-1.61803398874989],
      [0.448894611110031,-0.726326738142697,1.17522134925273]];

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
