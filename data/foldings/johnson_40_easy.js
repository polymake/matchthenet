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
obj0.userData.points.push(new PMPoint(0.584848, 0, 0));
obj0.userData.points.push(new PMPoint(0.584848, 0.584848, 0));
obj0.userData.points.push(new PMPoint(0, 0.584848, 0));
obj0.userData.points.push(new PMPoint(0.292424, -0.506493, 0));
obj0.userData.points.push(new PMPoint(-0.556224, 0.765576, 0));
obj0.userData.points.push(new PMPoint(-0.899989, 0.292424, 0));
obj0.userData.points.push(new PMPoint(-0.556224, -0.180728, 0));
obj0.userData.points.push(new PMPoint(0.292424, 1.09134, 0));
obj0.userData.points.push(new PMPoint(1.1697, 0, 0));
obj0.userData.points.push(new PMPoint(1.1697, 0.584848, 0));
obj0.userData.points.push(new PMPoint(-0.506493, -0.292424, 0));
obj0.userData.points.push(new PMPoint(-0.214069, -0.798918, 0));
obj0.userData.points.push(new PMPoint(0.798918, -0.798918, 0));
obj0.userData.points.push(new PMPoint(1.09134, -0.292424, 0));
obj0.userData.points.push(new PMPoint(-1.02938, 1.10934, 0));
obj0.userData.points.push(new PMPoint(-1.37314, 0.636189, 0));
obj0.userData.points.push(new PMPoint(-1.37314, -0.0513411, 0));
obj0.userData.points.push(new PMPoint(-1.02938, -0.524493, 0));
obj0.userData.points.push(new PMPoint(0.180728, 1.14107, 0));
obj0.userData.points.push(new PMPoint(-0.375496, 1.3218, 0));
obj0.userData.points.push(new PMPoint(1.09134, 0.877272, 0));
obj0.userData.points.push(new PMPoint(0.798918, 1.38377, 0));
obj0.userData.points.push(new PMPoint(1.67619, 0.292424, 0));
obj0.userData.points.push(new PMPoint(0.0783548, -1.30541, 0));
obj0.userData.points.push(new PMPoint(0.584848, -1.01299, 0));
obj0.userData.points.push(new PMPoint(-0.798918, -0.798918, 0));
obj0.userData.points.push(new PMPoint(1.19026, -1.23354, 0));
obj0.userData.points.push(new PMPoint(1.72454, -0.995665, 0));
obj0.userData.points.push(new PMPoint(1.66341, -0.414021, 0));
obj0.userData.points.push(new PMPoint(-0.49509, 1.34722, 0));
obj0.userData.points.push(new PMPoint(-1.43427, 0.0545449, 0));
obj0.userData.points.push(new PMPoint(-1.50253, 1.45311, 0));
obj0.userData.points.push(new PMPoint(-1.84629, 0.979955, 0));
obj0.userData.points.push(new PMPoint(-1.84629, -0.395106, 0));
obj0.userData.points.push(new PMPoint(-1.50253, -0.868258, 0));
obj0.userData.points.push(new PMPoint(0.361456, 1.6973, 0));
obj0.userData.points.push(new PMPoint(-0.194768, 1.87802, 0));
obj0.userData.points.push(new PMPoint(1.66341, 0.998869, 0));
obj0.userData.points.push(new PMPoint(1.72454, 1.58051, 0));
obj0.userData.points.push(new PMPoint(1.19026, 1.81839, 0));
obj0.userData.points.push(new PMPoint(0.584848, -1.59784, 0));
obj0.userData.points.push(new PMPoint(-0.720563, -1.09134, 0));
obj0.userData.points.push(new PMPoint(-0.428139, -1.59784, 0));
obj0.userData.points.push(new PMPoint(1.66341, -1.57731, 0));
obj0.userData.points.push(new PMPoint(2.1977, -0.6519, 0));
obj0.userData.points.push(new PMPoint(-0.73297, 1.88151, 0));
obj0.userData.points.push(new PMPoint(-1.26726, 1.64363, 0));
obj0.userData.points.push(new PMPoint(-1.95479, 0.697323, 0));
obj0.userData.points.push(new PMPoint(-2.01592, 0.115678, 0));
obj0.userData.points.push(new PMPoint(-2.08417, 1.51424, 0));
obj0.userData.points.push(new PMPoint(-2.08417, -0.929392, 0));
obj0.userData.points.push(new PMPoint(0.239859, 2.26936, 0));
obj0.userData.points.push(new PMPoint(1.66341, 2.16216, 0));
obj0.userData.points.push(new PMPoint(-0.356272, -1.69675, 0));
obj0.userData.points.push(new PMPoint(-0.118393, -2.23104, 0));
obj0.userData.points.push(new PMPoint(0.463251, -2.1699, 0));
obj0.userData.points.push(new PMPoint(2.1977, -1.81519, 0));
obj0.userData.points.push(new PMPoint(2.58904, -1.38056, 0));
obj0.userData.points.push(new PMPoint(2.29661, -0.874069, 0));
obj0.userData.points.push(new PMPoint(-0.794103, 2.46315, 0));
obj0.userData.points.push(new PMPoint(-1.36617, 2.58475, 0));
obj0.userData.points.push(new PMPoint(-1.6586, 2.07825, 0));
obj0.userData.points.push(new PMPoint(-2.48907, 0.935202, 0));
obj0.userData.points.push(new PMPoint(-2.88041, 0.500575, 0));
obj0.userData.points.push(new PMPoint(-2.58799, -0.00591859, 0));
obj0.userData.points.push(new PMPoint(0.225372, -2.70419, 0));
obj0.userData.points.push(new PMPoint(2.76976, -1.93679, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 4, 3, 5, 5, 6, 0, 7, 6, 7, 2, 8, 3, 8, 1, 9, 2, 10, 9, 10, 0, 11, 4, 12, 11, 12, 4, 13, 1, 14, 13, 14, 5, 15, 6, 16, 15, 16, 6, 17, 7, 18, 17, 18, 3, 19, 5, 20, 19, 20, 2, 21, 8, 22, 21, 22, 9, 23, 10, 23, 12, 24, 4, 25, 24, 25, 11, 26, 12, 26, 13, 27, 27, 28, 14, 29, 28, 29, 5, 30, 15, 30, 6, 31, 16, 31, 15, 32, 16, 33, 32, 33, 17, 34, 18, 35, 34, 35, 19, 36, 20, 37, 36, 37, 21, 38, 38, 39, 22, 40, 39, 40, 24, 41, 25, 41, 12, 42, 24, 43, 42, 43, 27, 44, 28, 44, 28, 45, 29, 45, 30, 46, 15, 47, 46, 47, 16, 48, 31, 49, 48, 49, 32, 50, 33, 50, 34, 51, 35, 51, 36, 52, 37, 52, 39, 53, 40, 53, 24, 54, 54, 55, 41, 56, 55, 56, 44, 57, 57, 58, 28, 59, 58, 59, 46, 60, 60, 61, 47, 62, 61, 62, 48, 63, 63, 64, 49, 65, 64, 65, 55, 66, 56, 66, 57, 67, 58, 67];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [4, 1, 0], [25, 4, 12, 24], [25, 24, 41], [2, 21, 22, 8], [28, 44, 57, 58, 59], [28, 27, 44], [0, 3, 5, 6, 7], [24, 12, 42, 43], [19, 36, 37, 20], [36, 52, 37], [60, 61, 62, 47, 46], [58, 57, 67], [5, 30, 15], [48, 63, 64, 65, 49], [6, 16, 31], [16, 48, 49, 31], [16, 15, 32, 33], [33, 32, 50], [6, 5, 15, 16], [30, 46, 47, 15], [35, 34, 51], [18, 17, 34, 35], [7, 6, 17, 18], [56, 55, 66], [3, 19, 20, 5], [11, 26, 12], [40, 39, 53], [24, 54, 55, 56, 41], [3, 2, 8], [0, 11, 12, 4], [29, 28, 45], [21, 38, 39, 40, 22], [10, 9, 23], [14, 13, 27, 28, 29], [2, 1, 9, 10], [14, 1, 4, 13]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xFFD23F, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
obj0.userData.axes = [[58,57],
      [56,55],
      [49,48],
      [47,46],
      [28,44],
      [41,24],
      [40,39],
      [37,36],
      [35,34],
      [33,32],
      [31,16],
      [15,30],
      [29,28],
      [28,27],
      [24,12],
      [25,24],
      [22,21],
      [20,19],
      [18,17],
      [16,15],
      [6,16],
      [15,5],
      [14,13],
      [12,11],
      [4,12],
      [10,9],
      [8,2],
      [5,3],
      [7,6],
      [6,5],
      [1,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.48923451380542,
      2.67794504458899,
      2.67794504458899,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.95288212280623,
      2.95288212280623,
      2.22315446657926,
      2.22315446657926,
      2.48923451380543,
      2.48923451380543,
      2.51327412287183,
      2.95288212280623,
      2.67794504458899,
      2.12437068569194,
      2.12437068569194,
      2.12437068569194,
      2.77672882547631,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.12437068569194,
      2.95288212280623,
      2.22315446657926,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.22315446657926,
      2.77672882547631,
      2.12437068569194,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

obj0.userData.subtrees = [[67],
      [66],
      [63,64,65],
      [60,61,62],
      [57,58,59,67],
      [54,55,56,66],
      [53],
      [52],
      [51],
      [50],
      [48,49,63,64,65],
      [46,47,60,61,62],
      [45],
      [44,57,58,59,67],
      [42,43],
      [41,54,55,56,66],
      [38,39,40,53],
      [36,37,52],
      [34,35,51],
      [32,33,50],
      [31,48,49,63,64,65],
      [30,46,47,60,61,62],
      [27,28,29,44,45,57,58,59,67],
      [26],
      [24,25,41,42,43,54,55,56,66],
      [23],
      [21,22,38,39,40,53],
      [19,20,36,37,52],
      [17,18,34,35,51],
      [15,16,30,31,32,33,46,47,48,49,50,60,61,62,63,64,65],
      [13,14,27,28,29,44,45,57,58,59,67],
      [11,12,24,25,26,41,42,43,54,55,56,66],
      [9,10,23],
      [8,21,22,38,39,40,53],
      [5,6,7,15,16,17,18,19,20,30,31,32,33,34,35,36,37,46,47,48,49,50,51,52,60,61,62,63,64,65],
      [4,11,12,13,14,24,25,26,27,28,29,41,42,43,44,45,54,55,56,57,58,59,66,67]];

obj0.userData.polytoperoot = [[0.473152200736585,-0.585929065858046,-0.54285213652631],
      [1.6180339887499,-2.6180339887499,-1],
      [-0.584848283814045,-0.94630440147317,1.53115268528722]];

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
