// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'poly' + divNumber );
var scene = new THREE.Scene();
scene.background = null;
var renderer = renderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
//renderer.setClearColor(backgroundColor, 1);
three.appendChild(renderer.domElement);
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
obj0.name = "zono-johnson-solid-29";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-1.055, -0.145665, 0));
obj0.userData.points.push(new PMPoint(-1.055, 0, -0.145665));
obj0.userData.points.push(new PMPoint(-1.055, 0, 0.145665));
obj0.userData.points.push(new PMPoint(-1.055, 0.145665, 0));
obj0.userData.points.push(new PMPoint(-0.952, -0.103001, -0.291331));
obj0.userData.points.push(new PMPoint(-0.952, -0.103001, 0.291331));
obj0.userData.points.push(new PMPoint(-0.952, 0.103001, -0.291331));
obj0.userData.points.push(new PMPoint(-0.952, 0.103001, 0.291331));
obj0.userData.points.push(new PMPoint(-0.848999, -0.642998, 0));
obj0.userData.points.push(new PMPoint(-0.848999, 0, -0.436996));
obj0.userData.points.push(new PMPoint(-0.848999, 0, 0.436996));
obj0.userData.points.push(new PMPoint(-0.848999, 0.642998, 0));
obj0.userData.points.push(new PMPoint(-0.745998, -0.745998, -0.145665));
obj0.userData.points.push(new PMPoint(-0.745998, -0.745998, 0.145665));
obj0.userData.points.push(new PMPoint(-0.745998, -0.600333, -0.291331));
obj0.userData.points.push(new PMPoint(-0.745998, -0.600333, 0.291331));
obj0.userData.points.push(new PMPoint(-0.745998, 0.600333, -0.291331));
obj0.userData.points.push(new PMPoint(-0.745998, 0.600333, 0.291331));
obj0.userData.points.push(new PMPoint(-0.745998, 0.745998, -0.145665));
obj0.userData.points.push(new PMPoint(-0.745998, 0.745998, 0.145665));
obj0.userData.points.push(new PMPoint(-0.703334, 0, -0.582661));
obj0.userData.points.push(new PMPoint(-0.703334, 0, 0.582661));
obj0.userData.points.push(new PMPoint(-0.642998, -0.848999, 0));
obj0.userData.points.push(new PMPoint(-0.642998, 0.848999, 0));
obj0.userData.points.push(new PMPoint(-0.600333, -0.745998, -0.291331));
obj0.userData.points.push(new PMPoint(-0.600333, -0.745998, 0.291331));
obj0.userData.points.push(new PMPoint(-0.600333, -0.600333, -0.436996));
obj0.userData.points.push(new PMPoint(-0.600333, -0.600333, 0.436996));
obj0.userData.points.push(new PMPoint(-0.600333, 0.600333, -0.436996));
obj0.userData.points.push(new PMPoint(-0.600333, 0.600333, 0.436996));
obj0.userData.points.push(new PMPoint(-0.600333, 0.745998, -0.291331));
obj0.userData.points.push(new PMPoint(-0.600333, 0.745998, 0.291331));
obj0.userData.points.push(new PMPoint(-0.497332, -0.497332, -0.582661));
obj0.userData.points.push(new PMPoint(-0.497332, -0.497332, 0.582661));
obj0.userData.points.push(new PMPoint(-0.497332, 0.497332, -0.582661));
obj0.userData.points.push(new PMPoint(-0.497332, 0.497332, 0.582661));
obj0.userData.points.push(new PMPoint(-0.145665, -1.055, 0));
obj0.userData.points.push(new PMPoint(-0.145665, 1.055, 0));
obj0.userData.points.push(new PMPoint(-0.103001, -0.952, -0.291331));
obj0.userData.points.push(new PMPoint(-0.103001, -0.952, 0.291331));
obj0.userData.points.push(new PMPoint(-0.103001, 0.952, -0.291331));
obj0.userData.points.push(new PMPoint(-0.103001, 0.952, 0.291331));
obj0.userData.points.push(new PMPoint(0, -1.055, -0.145665));
obj0.userData.points.push(new PMPoint(0, -1.055, 0.145665));
obj0.userData.points.push(new PMPoint(0, -0.848999, -0.436996));
obj0.userData.points.push(new PMPoint(0, -0.848999, 0.436996));
obj0.userData.points.push(new PMPoint(0, -0.703334, -0.582661));
obj0.userData.points.push(new PMPoint(0, -0.703334, 0.582661));
obj0.userData.points.push(new PMPoint(0, 0.703334, -0.582661));
obj0.userData.points.push(new PMPoint(0, 0.703334, 0.582661));
obj0.userData.points.push(new PMPoint(0, 0.848999, -0.436996));
obj0.userData.points.push(new PMPoint(0, 0.848999, 0.436996));
obj0.userData.points.push(new PMPoint(0, 1.055, -0.145665));
obj0.userData.points.push(new PMPoint(0, 1.055, 0.145665));
obj0.userData.points.push(new PMPoint(0.103001, -0.952, -0.291331));
obj0.userData.points.push(new PMPoint(0.103001, -0.952, 0.291331));
obj0.userData.points.push(new PMPoint(0.103001, 0.952, -0.291331));
obj0.userData.points.push(new PMPoint(0.103001, 0.952, 0.291331));
obj0.userData.points.push(new PMPoint(0.145665, -1.055, 0));
obj0.userData.points.push(new PMPoint(0.145665, 1.055, 0));
obj0.userData.points.push(new PMPoint(0.497332, -0.497332, -0.582661));
obj0.userData.points.push(new PMPoint(0.497332, -0.497332, 0.582661));
obj0.userData.points.push(new PMPoint(0.497332, 0.497332, -0.582661));
obj0.userData.points.push(new PMPoint(0.497332, 0.497332, 0.582661));
obj0.userData.points.push(new PMPoint(0.600333, -0.745998, -0.291331));
obj0.userData.points.push(new PMPoint(0.600333, -0.745998, 0.291331));
obj0.userData.points.push(new PMPoint(0.600333, -0.600333, -0.436996));
obj0.userData.points.push(new PMPoint(0.600333, -0.600333, 0.436996));
obj0.userData.points.push(new PMPoint(0.600333, 0.600333, -0.436996));
obj0.userData.points.push(new PMPoint(0.600333, 0.600333, 0.436996));
obj0.userData.points.push(new PMPoint(0.600333, 0.745998, -0.291331));
obj0.userData.points.push(new PMPoint(0.600333, 0.745998, 0.291331));
obj0.userData.points.push(new PMPoint(0.642998, -0.848999, 0));
obj0.userData.points.push(new PMPoint(0.642998, 0.848999, 0));
obj0.userData.points.push(new PMPoint(0.703334, 0, -0.582661));
obj0.userData.points.push(new PMPoint(0.703334, 0, 0.582661));
obj0.userData.points.push(new PMPoint(0.745998, -0.745998, -0.145665));
obj0.userData.points.push(new PMPoint(0.745998, -0.745998, 0.145665));
obj0.userData.points.push(new PMPoint(0.745998, -0.600333, -0.291331));
obj0.userData.points.push(new PMPoint(0.745998, -0.600333, 0.291331));
obj0.userData.points.push(new PMPoint(0.745998, 0.600333, -0.291331));
obj0.userData.points.push(new PMPoint(0.745998, 0.600333, 0.291331));
obj0.userData.points.push(new PMPoint(0.745998, 0.745998, -0.145665));
obj0.userData.points.push(new PMPoint(0.745998, 0.745998, 0.145665));
obj0.userData.points.push(new PMPoint(0.848999, -0.642998, 0));
obj0.userData.points.push(new PMPoint(0.848999, 0, -0.436996));
obj0.userData.points.push(new PMPoint(0.848999, 0, 0.436996));
obj0.userData.points.push(new PMPoint(0.848999, 0.642998, 0));
obj0.userData.points.push(new PMPoint(0.952, -0.103001, -0.291331));
obj0.userData.points.push(new PMPoint(0.952, -0.103001, 0.291331));
obj0.userData.points.push(new PMPoint(0.952, 0.103001, -0.291331));
obj0.userData.points.push(new PMPoint(0.952, 0.103001, 0.291331));
obj0.userData.points.push(new PMPoint(1.055, -0.145665, 0));
obj0.userData.points.push(new PMPoint(1.055, 0, -0.145665));
obj0.userData.points.push(new PMPoint(1.055, 0, 0.145665));
obj0.userData.points.push(new PMPoint(1.055, 0.145665, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 3, 2, 3, 1, 4, 2, 5, 1, 6, 2, 7, 0, 8, 4, 9, 6, 9, 5, 10, 7, 10, 3, 11, 8, 12, 8, 13, 4, 14, 12, 14, 5, 15, 13, 15, 6, 16, 7, 17, 11, 18, 16, 18, 11, 19, 17, 19, 9, 20, 10, 21, 12, 22, 13, 22, 18, 23, 19, 23, 12, 24, 13, 25, 14, 26, 24, 26, 15, 27, 25, 27, 16, 28, 17, 29, 18, 30, 28, 30, 19, 31, 29, 31, 20, 32, 26, 32, 21, 33, 27, 33, 20, 34, 28, 34, 21, 35, 29, 35, 22, 36, 23, 37, 24, 38, 25, 39, 30, 40, 31, 41, 36, 42, 38, 42, 36, 43, 39, 43, 38, 44, 39, 45, 32, 46, 44, 46, 33, 47, 45, 47, 34, 48, 35, 49, 40, 50, 48, 50, 41, 51, 49, 51, 37, 52, 40, 52, 37, 53, 41, 53, 42, 54, 44, 54, 43, 55, 45, 55, 50, 56, 52, 56, 51, 57, 53, 57, 42, 58, 43, 58, 52, 59, 53, 59, 46, 60, 47, 61, 48, 62, 49, 63, 54, 64, 55, 65, 60, 66, 64, 66, 61, 67, 65, 67, 62, 68, 63, 69, 56, 70, 68, 70, 57, 71, 69, 71, 58, 72, 59, 73, 60, 74, 62, 74, 61, 75, 63, 75, 64, 76, 72, 76, 65, 77, 72, 77, 66, 78, 76, 78, 67, 79, 77, 79, 68, 80, 69, 81, 70, 82, 73, 82, 80, 82, 71, 83, 73, 83, 81, 83, 76, 84, 77, 84, 74, 85, 75, 86, 82, 87, 83, 87, 78, 88, 85, 88, 79, 89, 86, 89, 80, 90, 85, 90, 81, 91, 86, 91, 84, 92, 88, 93, 90, 93, 92, 93, 89, 94, 91, 94, 92, 94, 87, 95, 93, 95, 94, 95];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[3, 2, 7, 17, 19, 11], [3, 1, 0, 2], [8, 0, 1, 4, 14, 12], [5, 2, 0, 8, 13, 15], [17, 7, 10, 21, 35, 29], [94, 92, 93, 95], [3, 11, 18, 16, 6, 1], [6, 16, 28, 34, 20, 9], [9, 20, 32, 26, 14, 4], [1, 6, 9, 4], [7, 2, 5, 10], [11, 19, 23, 18], [12, 14, 26, 24], [13, 8, 12, 22], [29, 35, 49, 51, 41, 31], [10, 5, 15, 27, 33, 21], [42, 38, 44, 54], [18, 23, 37, 52, 40, 30], [16, 18, 30, 28], [36, 42, 58, 43], [66, 78, 76, 64], [30, 40, 50, 48, 34, 28], [19, 31, 41, 53, 37, 23], [19, 17, 29, 31], [15, 13, 25, 27], [22, 12, 24, 38, 42, 36], [35, 21, 33, 47, 61, 75, 63, 49], [13, 22, 36, 43, 39, 25], [32, 46, 44, 38, 24, 26], [49, 63, 69, 71, 57, 51], [33, 27, 25, 39, 45, 47], [20, 34, 48, 62, 74, 60, 46, 32], [40, 52, 56, 50], [57, 71, 83, 73, 59, 53], [45, 39, 43, 55], [41, 51, 57, 53], [37, 53, 59, 52], [61, 47, 45, 55, 65, 67], [46, 60, 66, 64, 54, 44], [60, 74, 85, 88, 78, 66], [52, 59, 73, 82, 70, 56], [72, 58, 42, 54, 64, 76], [50, 56, 70, 68, 62, 48], [75, 61, 67, 79, 89, 86], [65, 55, 43, 58, 72, 77], [81, 91, 94, 95, 87, 83], [83, 87, 82, 73], [74, 62, 68, 80, 90, 85], [77, 72, 76, 84], [63, 75, 86, 91, 81, 69], [70, 82, 80, 68], [67, 65, 77, 79], [69, 81, 83, 71], [87, 95, 93, 90, 80, 82], [92, 84, 76, 78, 88, 93], [89, 79, 77, 84, 92, 94], [86, 89, 94, 91], [85, 90, 93, 88]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x888888, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xEE4266, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x43B8CE, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
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

   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj0.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj0.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj0.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
      control.update();
      renderer.render(scene, camera);
   };
if ( THREE.WEBGL.isWebGLAvailable() ) {
	render();
} else {
	var warning = WEBGL.getWebGLErrorMessage();
	three.appendChild( warning );
}

   polytopeObjects[divNumber] = obj0;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
