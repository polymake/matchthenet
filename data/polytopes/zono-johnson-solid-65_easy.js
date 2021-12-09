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
obj0.name = "zono-johnson-solid-65";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-1.00681, 0.22024, 0.22024));
obj0.userData.points.push(new PMPoint(-0.964861, 0.0209752, 0.335604));
obj0.userData.points.push(new PMPoint(-0.964861, 0.17829, 0.492918));
obj0.userData.points.push(new PMPoint(-0.964861, 0.335604, 0.0209752));
obj0.userData.points.push(new PMPoint(-0.964861, 0.492918, 0.17829));
obj0.userData.points.push(new PMPoint(-0.922911, -0.0209752, 0.608282));
obj0.userData.points.push(new PMPoint(-0.922911, 0.450968, 0.450968));
obj0.userData.points.push(new PMPoint(-0.922911, 0.608282, -0.0209752));
obj0.userData.points.push(new PMPoint(-0.912423, -0.0314629, 0.125851));
obj0.userData.points.push(new PMPoint(-0.912423, 0.125851, -0.0314629));
obj0.userData.points.push(new PMPoint(-0.870473, -0.230728, 0.241215));
obj0.userData.points.push(new PMPoint(-0.870473, 0.241215, -0.230728));
obj0.userData.points.push(new PMPoint(-0.849498, 0.22024, 0.692183));
obj0.userData.points.push(new PMPoint(-0.849498, 0.692183, 0.22024));
obj0.userData.points.push(new PMPoint(-0.828522, -0.272678, 0.513894));
obj0.userData.points.push(new PMPoint(-0.828522, 0.513894, -0.272678));
obj0.userData.points.push(new PMPoint(-0.818035, -0.125851, -0.125851));
obj0.userData.points.push(new PMPoint(-0.807547, 0.0209752, 0.807547));
obj0.userData.points.push(new PMPoint(-0.807547, 0.492918, 0.650233));
obj0.userData.points.push(new PMPoint(-0.807547, 0.650233, 0.492918));
obj0.userData.points.push(new PMPoint(-0.807547, 0.807547, 0.0209752));
obj0.userData.points.push(new PMPoint(-0.797059, -0.304141, 0.0104876));
obj0.userData.points.push(new PMPoint(-0.797059, 0.0104876, -0.304141));
obj0.userData.points.push(new PMPoint(-0.765597, 0.293653, 0.765597));
obj0.userData.points.push(new PMPoint(-0.765597, 0.765597, 0.293653));
obj0.userData.points.push(new PMPoint(-0.755109, -0.503406, 0.125851));
obj0.userData.points.push(new PMPoint(-0.755109, 0.125851, -0.503406));
obj0.userData.points.push(new PMPoint(-0.713158, -0.545356, 0.39853));
obj0.userData.points.push(new PMPoint(-0.713158, -0.230728, 0.713158));
obj0.userData.points.push(new PMPoint(-0.713158, 0.39853, -0.545356));
obj0.userData.points.push(new PMPoint(-0.713158, 0.713158, -0.230728));
obj0.userData.points.push(new PMPoint(-0.702671, -0.39853, -0.241215));
obj0.userData.points.push(new PMPoint(-0.702671, -0.241215, -0.39853));
obj0.userData.points.push(new PMPoint(-0.692183, 0.22024, 0.849498));
obj0.userData.points.push(new PMPoint(-0.692183, 0.692183, 0.692183));
obj0.userData.points.push(new PMPoint(-0.692183, 0.849498, 0.22024));
obj0.userData.points.push(new PMPoint(-0.66072, -0.597795, -0.125851));
obj0.userData.points.push(new PMPoint(-0.66072, -0.125851, -0.597795));
obj0.userData.points.push(new PMPoint(-0.650233, 0.492918, 0.807547));
obj0.userData.points.push(new PMPoint(-0.650233, 0.807547, 0.492918));
obj0.userData.points.push(new PMPoint(-0.608282, -0.0209752, 0.922911));
obj0.userData.points.push(new PMPoint(-0.608282, 0.922911, -0.0209752));
obj0.userData.points.push(new PMPoint(-0.597795, -0.66072, 0.125851));
obj0.userData.points.push(new PMPoint(-0.597795, -0.503406, 0.597795));
obj0.userData.points.push(new PMPoint(-0.597795, 0.125851, -0.66072));
obj0.userData.points.push(new PMPoint(-0.597795, 0.597795, -0.503406));
obj0.userData.points.push(new PMPoint(-0.587307, -0.513894, -0.513894));
obj0.userData.points.push(new PMPoint(-0.545356, -0.713158, -0.39853));
obj0.userData.points.push(new PMPoint(-0.545356, -0.39853, -0.713158));
obj0.userData.points.push(new PMPoint(-0.513894, -0.587307, 0.513894));
obj0.userData.points.push(new PMPoint(-0.513894, -0.272678, 0.828522));
obj0.userData.points.push(new PMPoint(-0.513894, 0.513894, -0.587307));
obj0.userData.points.push(new PMPoint(-0.513894, 0.828522, -0.272678));
obj0.userData.points.push(new PMPoint(-0.503406, -0.755109, -0.125851));
obj0.userData.points.push(new PMPoint(-0.503406, -0.597795, -0.597795));
obj0.userData.points.push(new PMPoint(-0.503406, -0.125851, -0.755109));
obj0.userData.points.push(new PMPoint(-0.492918, 0.17829, 0.964861));
obj0.userData.points.push(new PMPoint(-0.492918, 0.650233, 0.807547));
obj0.userData.points.push(new PMPoint(-0.492918, 0.807547, 0.650233));
obj0.userData.points.push(new PMPoint(-0.492918, 0.964861, 0.17829));
obj0.userData.points.push(new PMPoint(-0.450968, 0.450968, 0.922911));
obj0.userData.points.push(new PMPoint(-0.450968, 0.922911, 0.450968));
obj0.userData.points.push(new PMPoint(-0.39853, -0.702671, 0.241215));
obj0.userData.points.push(new PMPoint(-0.39853, -0.545356, 0.713158));
obj0.userData.points.push(new PMPoint(-0.39853, 0.241215, -0.702671));
obj0.userData.points.push(new PMPoint(-0.39853, 0.713158, -0.545356));
obj0.userData.points.push(new PMPoint(-0.335604, 0.0209752, 0.964861));
obj0.userData.points.push(new PMPoint(-0.335604, 0.964861, 0.0209752));
obj0.userData.points.push(new PMPoint(-0.304141, -0.797059, -0.0104876));
obj0.userData.points.push(new PMPoint(-0.304141, -0.0104876, -0.797059));
obj0.userData.points.push(new PMPoint(-0.293653, 0.765597, 0.765597));
obj0.userData.points.push(new PMPoint(-0.272678, -0.828522, -0.513894));
obj0.userData.points.push(new PMPoint(-0.272678, -0.513894, -0.828522));
obj0.userData.points.push(new PMPoint(-0.241215, -0.702671, 0.39853));
obj0.userData.points.push(new PMPoint(-0.241215, -0.230728, 0.870473));
obj0.userData.points.push(new PMPoint(-0.241215, 0.39853, -0.702671));
obj0.userData.points.push(new PMPoint(-0.241215, 0.870473, -0.230728));
obj0.userData.points.push(new PMPoint(-0.230728, -0.870473, -0.241215));
obj0.userData.points.push(new PMPoint(-0.230728, -0.713158, -0.713158));
obj0.userData.points.push(new PMPoint(-0.230728, -0.241215, -0.870473));
obj0.userData.points.push(new PMPoint(-0.22024, 0.22024, 1.00681));
obj0.userData.points.push(new PMPoint(-0.22024, 0.692183, 0.849498));
obj0.userData.points.push(new PMPoint(-0.22024, 0.849498, 0.692183));
obj0.userData.points.push(new PMPoint(-0.22024, 1.00681, 0.22024));
obj0.userData.points.push(new PMPoint(-0.17829, 0.492918, 0.964861));
obj0.userData.points.push(new PMPoint(-0.17829, 0.964861, 0.492918));
obj0.userData.points.push(new PMPoint(-0.125851, -0.818035, 0.125851));
obj0.userData.points.push(new PMPoint(-0.125851, -0.66072, 0.597795));
obj0.userData.points.push(new PMPoint(-0.125851, -0.503406, 0.755109));
obj0.userData.points.push(new PMPoint(-0.125851, -0.0314629, 0.912423));
obj0.userData.points.push(new PMPoint(-0.125851, 0.125851, -0.818035));
obj0.userData.points.push(new PMPoint(-0.125851, 0.597795, -0.66072));
obj0.userData.points.push(new PMPoint(-0.125851, 0.755109, -0.503406));
obj0.userData.points.push(new PMPoint(-0.125851, 0.912423, -0.0314629));
obj0.userData.points.push(new PMPoint(-0.0314629, -0.912423, -0.125851));
obj0.userData.points.push(new PMPoint(-0.0314629, -0.125851, -0.912423));
obj0.userData.points.push(new PMPoint(-0.0209752, -0.922911, -0.608282));
obj0.userData.points.push(new PMPoint(-0.0209752, -0.608282, -0.922911));
obj0.userData.points.push(new PMPoint(-0.0209752, 0.335604, 0.964861));
obj0.userData.points.push(new PMPoint(-0.0209752, 0.807547, 0.807547));
obj0.userData.points.push(new PMPoint(-0.0209752, 0.964861, 0.335604));
obj0.userData.points.push(new PMPoint(-0.0104876, -0.304141, 0.797059));
obj0.userData.points.push(new PMPoint(-0.0104876, 0.797059, -0.304141));
obj0.userData.points.push(new PMPoint(0.0104876, -0.797059, 0.304141));
obj0.userData.points.push(new PMPoint(0.0104876, 0.304141, -0.797059));
obj0.userData.points.push(new PMPoint(0.0209752, -0.964861, -0.335604));
obj0.userData.points.push(new PMPoint(0.0209752, -0.807547, -0.807547));
obj0.userData.points.push(new PMPoint(0.0209752, -0.335604, -0.964861));
obj0.userData.points.push(new PMPoint(0.0209752, 0.608282, 0.922911));
obj0.userData.points.push(new PMPoint(0.0209752, 0.922911, 0.608282));
obj0.userData.points.push(new PMPoint(0.0314629, 0.125851, 0.912423));
obj0.userData.points.push(new PMPoint(0.0314629, 0.912423, 0.125851));
obj0.userData.points.push(new PMPoint(0.125851, -0.912423, 0.0314629));
obj0.userData.points.push(new PMPoint(0.125851, -0.755109, 0.503406));
obj0.userData.points.push(new PMPoint(0.125851, -0.597795, 0.66072));
obj0.userData.points.push(new PMPoint(0.125851, -0.125851, 0.818035));
obj0.userData.points.push(new PMPoint(0.125851, 0.0314629, -0.912423));
obj0.userData.points.push(new PMPoint(0.125851, 0.503406, -0.755109));
obj0.userData.points.push(new PMPoint(0.125851, 0.66072, -0.597795));
obj0.userData.points.push(new PMPoint(0.125851, 0.818035, -0.125851));
obj0.userData.points.push(new PMPoint(0.17829, -0.964861, -0.492918));
obj0.userData.points.push(new PMPoint(0.17829, -0.492918, -0.964861));
obj0.userData.points.push(new PMPoint(0.22024, -1.00681, -0.22024));
obj0.userData.points.push(new PMPoint(0.22024, -0.849498, -0.692183));
obj0.userData.points.push(new PMPoint(0.22024, -0.692183, -0.849498));
obj0.userData.points.push(new PMPoint(0.22024, -0.22024, -1.00681));
obj0.userData.points.push(new PMPoint(0.230728, 0.241215, 0.870473));
obj0.userData.points.push(new PMPoint(0.230728, 0.713158, 0.713158));
obj0.userData.points.push(new PMPoint(0.230728, 0.870473, 0.241215));
obj0.userData.points.push(new PMPoint(0.241215, -0.870473, 0.230728));
obj0.userData.points.push(new PMPoint(0.241215, -0.39853, 0.702671));
obj0.userData.points.push(new PMPoint(0.241215, 0.230728, -0.870473));
obj0.userData.points.push(new PMPoint(0.241215, 0.702671, -0.39853));
obj0.userData.points.push(new PMPoint(0.272678, 0.513894, 0.828522));
obj0.userData.points.push(new PMPoint(0.272678, 0.828522, 0.513894));
obj0.userData.points.push(new PMPoint(0.293653, -0.765597, -0.765597));
obj0.userData.points.push(new PMPoint(0.304141, 0.0104876, 0.797059));
obj0.userData.points.push(new PMPoint(0.304141, 0.797059, 0.0104876));
obj0.userData.points.push(new PMPoint(0.335604, -0.964861, -0.0209752));
obj0.userData.points.push(new PMPoint(0.335604, -0.0209752, -0.964861));
obj0.userData.points.push(new PMPoint(0.39853, -0.713158, 0.545356));
obj0.userData.points.push(new PMPoint(0.39853, -0.241215, 0.702671));
obj0.userData.points.push(new PMPoint(0.39853, 0.545356, -0.713158));
obj0.userData.points.push(new PMPoint(0.39853, 0.702671, -0.241215));
obj0.userData.points.push(new PMPoint(0.450968, -0.922911, -0.450968));
obj0.userData.points.push(new PMPoint(0.450968, -0.450968, -0.922911));
obj0.userData.points.push(new PMPoint(0.492918, -0.964861, -0.17829));
obj0.userData.points.push(new PMPoint(0.492918, -0.807547, -0.650233));
obj0.userData.points.push(new PMPoint(0.492918, -0.650233, -0.807547));
obj0.userData.points.push(new PMPoint(0.492918, -0.17829, -0.964861));
obj0.userData.points.push(new PMPoint(0.503406, 0.125851, 0.755109));
obj0.userData.points.push(new PMPoint(0.503406, 0.597795, 0.597795));
obj0.userData.points.push(new PMPoint(0.503406, 0.755109, 0.125851));
obj0.userData.points.push(new PMPoint(0.513894, -0.828522, 0.272678));
obj0.userData.points.push(new PMPoint(0.513894, -0.513894, 0.587307));
obj0.userData.points.push(new PMPoint(0.513894, 0.272678, -0.828522));
obj0.userData.points.push(new PMPoint(0.513894, 0.587307, -0.513894));
obj0.userData.points.push(new PMPoint(0.545356, 0.39853, 0.713158));
obj0.userData.points.push(new PMPoint(0.545356, 0.713158, 0.39853));
obj0.userData.points.push(new PMPoint(0.587307, 0.513894, 0.513894));
obj0.userData.points.push(new PMPoint(0.597795, -0.597795, 0.503406));
obj0.userData.points.push(new PMPoint(0.597795, -0.125851, 0.66072));
obj0.userData.points.push(new PMPoint(0.597795, 0.503406, -0.597795));
obj0.userData.points.push(new PMPoint(0.597795, 0.66072, -0.125851));
obj0.userData.points.push(new PMPoint(0.608282, -0.922911, 0.0209752));
obj0.userData.points.push(new PMPoint(0.608282, 0.0209752, -0.922911));
obj0.userData.points.push(new PMPoint(0.650233, -0.807547, -0.492918));
obj0.userData.points.push(new PMPoint(0.650233, -0.492918, -0.807547));
obj0.userData.points.push(new PMPoint(0.66072, 0.125851, 0.597795));
obj0.userData.points.push(new PMPoint(0.66072, 0.597795, 0.125851));
obj0.userData.points.push(new PMPoint(0.692183, -0.849498, -0.22024));
obj0.userData.points.push(new PMPoint(0.692183, -0.692183, -0.692183));
obj0.userData.points.push(new PMPoint(0.692183, -0.22024, -0.849498));
obj0.userData.points.push(new PMPoint(0.702671, 0.241215, 0.39853));
obj0.userData.points.push(new PMPoint(0.702671, 0.39853, 0.241215));
obj0.userData.points.push(new PMPoint(0.713158, -0.713158, 0.230728));
obj0.userData.points.push(new PMPoint(0.713158, -0.39853, 0.545356));
obj0.userData.points.push(new PMPoint(0.713158, 0.230728, -0.713158));
obj0.userData.points.push(new PMPoint(0.713158, 0.545356, -0.39853));
obj0.userData.points.push(new PMPoint(0.755109, -0.125851, 0.503406));
obj0.userData.points.push(new PMPoint(0.755109, 0.503406, -0.125851));
obj0.userData.points.push(new PMPoint(0.765597, -0.765597, -0.293653));
obj0.userData.points.push(new PMPoint(0.765597, -0.293653, -0.765597));
obj0.userData.points.push(new PMPoint(0.797059, -0.0104876, 0.304141));
obj0.userData.points.push(new PMPoint(0.797059, 0.304141, -0.0104876));
obj0.userData.points.push(new PMPoint(0.807547, -0.807547, -0.0209752));
obj0.userData.points.push(new PMPoint(0.807547, -0.650233, -0.492918));
obj0.userData.points.push(new PMPoint(0.807547, -0.492918, -0.650233));
obj0.userData.points.push(new PMPoint(0.807547, -0.0209752, -0.807547));
obj0.userData.points.push(new PMPoint(0.818035, 0.125851, 0.125851));
obj0.userData.points.push(new PMPoint(0.828522, -0.513894, 0.272678));
obj0.userData.points.push(new PMPoint(0.828522, 0.272678, -0.513894));
obj0.userData.points.push(new PMPoint(0.849498, -0.692183, -0.22024));
obj0.userData.points.push(new PMPoint(0.849498, -0.22024, -0.692183));
obj0.userData.points.push(new PMPoint(0.870473, -0.241215, 0.230728));
obj0.userData.points.push(new PMPoint(0.870473, 0.230728, -0.241215));
obj0.userData.points.push(new PMPoint(0.912423, -0.125851, 0.0314629));
obj0.userData.points.push(new PMPoint(0.912423, 0.0314629, -0.125851));
obj0.userData.points.push(new PMPoint(0.922911, -0.608282, 0.0209752));
obj0.userData.points.push(new PMPoint(0.922911, -0.450968, -0.450968));
obj0.userData.points.push(new PMPoint(0.922911, 0.0209752, -0.608282));
obj0.userData.points.push(new PMPoint(0.964861, -0.492918, -0.17829));
obj0.userData.points.push(new PMPoint(0.964861, -0.335604, -0.0209752));
obj0.userData.points.push(new PMPoint(0.964861, -0.17829, -0.492918));
obj0.userData.points.push(new PMPoint(0.964861, -0.0209752, -0.335604));
obj0.userData.points.push(new PMPoint(1.00681, -0.22024, -0.22024));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 0, 3, 0, 4, 1, 5, 2, 5, 2, 6, 4, 6, 3, 7, 4, 7, 0, 8, 0, 9, 1, 10, 8, 10, 3, 11, 9, 11, 2, 12, 4, 13, 5, 14, 10, 14, 7, 15, 11, 15, 8, 16, 9, 16, 5, 17, 12, 17, 6, 18, 12, 18, 6, 19, 13, 19, 7, 20, 13, 20, 8, 21, 9, 22, 17, 23, 18, 23, 19, 24, 20, 24, 10, 25, 21, 25, 11, 26, 22, 26, 14, 27, 25, 27, 14, 28, 17, 28, 15, 29, 26, 29, 15, 30, 20, 30, 16, 31, 21, 31, 16, 32, 22, 32, 17, 33, 18, 34, 19, 34, 20, 35, 25, 36, 31, 36, 26, 37, 32, 37, 23, 38, 33, 38, 34, 38, 24, 39, 34, 39, 35, 39, 17, 40, 20, 41, 27, 42, 27, 43, 28, 43, 29, 44, 29, 45, 30, 45, 31, 46, 32, 46, 36, 47, 46, 47, 37, 48, 46, 48, 27, 49, 28, 50, 40, 50, 29, 51, 30, 52, 41, 52, 42, 53, 47, 53, 47, 54, 48, 54, 44, 55, 48, 55, 33, 56, 40, 56, 34, 57, 34, 58, 35, 59, 41, 59, 38, 60, 56, 60, 57, 60, 39, 61, 58, 61, 59, 61, 42, 62, 49, 62, 43, 63, 49, 63, 50, 63, 44, 64, 51, 64, 45, 65, 51, 65, 52, 65, 40, 66, 41, 67, 53, 68, 62, 68, 55, 69, 64, 69, 57, 70, 58, 70, 47, 71, 48, 72, 49, 73, 50, 74, 66, 74, 51, 75, 52, 76, 67, 76, 53, 77, 71, 77, 54, 78, 71, 78, 72, 78, 55, 79, 72, 79, 56, 80, 66, 80, 57, 81, 58, 82, 59, 83, 67, 83, 60, 84, 80, 84, 81, 84, 61, 85, 82, 85, 83, 85, 62, 86, 73, 86, 63, 87, 73, 87, 63, 88, 74, 88, 74, 89, 80, 89, 64, 90, 75, 90, 65, 91, 75, 91, 65, 92, 76, 92, 76, 93, 83, 93, 68, 94, 77, 94, 86, 94, 69, 95, 79, 95, 90, 95, 71, 96, 72, 97, 80, 98, 70, 99, 81, 99, 82, 99, 83, 100, 88, 101, 89, 101, 92, 102, 93, 102, 73, 103, 75, 104, 77, 105, 96, 105, 78, 106, 96, 106, 97, 106, 79, 107, 97, 107, 84, 108, 98, 108, 99, 108, 85, 109, 99, 109, 100, 109, 80, 110, 83, 111, 86, 112, 103, 112, 87, 113, 103, 113, 88, 114, 89, 115, 110, 115, 90, 116, 104, 116, 91, 117, 104, 117, 92, 118, 93, 119, 111, 119, 96, 120, 97, 121, 94, 122, 105, 122, 112, 122, 120, 122, 106, 123, 120, 123, 106, 124, 121, 124, 95, 125, 107, 125, 116, 125, 121, 125, 98, 126, 110, 126, 99, 127, 100, 128, 111, 128, 112, 129, 113, 129, 101, 130, 114, 130, 115, 130, 116, 131, 117, 131, 102, 132, 118, 132, 119, 132, 108, 133, 126, 133, 127, 133, 109, 134, 127, 134, 128, 134, 106, 135, 110, 136, 111, 137, 122, 138, 129, 138, 125, 139, 131, 139, 113, 140, 114, 140, 115, 141, 136, 141, 117, 142, 118, 142, 119, 143, 137, 143, 120, 144, 121, 145, 122, 146, 144, 146, 123, 147, 135, 147, 144, 147, 124, 148, 135, 148, 145, 148, 125, 149, 145, 149, 126, 150, 136, 150, 127, 151, 128, 152, 137, 152, 129, 153, 140, 153, 130, 154, 140, 154, 141, 154, 131, 155, 142, 155, 132, 156, 142, 156, 143, 156, 133, 157, 150, 157, 151, 157, 134, 158, 151, 158, 152, 158, 157, 159, 158, 159, 140, 160, 141, 161, 150, 161, 142, 162, 143, 163, 152, 163, 138, 164, 146, 164, 153, 164, 139, 165, 149, 165, 155, 165, 144, 166, 145, 167, 157, 168, 158, 169, 146, 170, 166, 170, 147, 171, 148, 171, 166, 171, 167, 171, 149, 172, 167, 172, 159, 173, 168, 173, 159, 174, 169, 174, 153, 175, 160, 175, 154, 176, 160, 176, 161, 176, 155, 177, 162, 177, 156, 178, 162, 178, 163, 178, 168, 179, 176, 179, 169, 180, 178, 180, 166, 181, 167, 182, 173, 183, 179, 183, 174, 184, 180, 184, 164, 185, 170, 185, 175, 185, 181, 185, 171, 186, 181, 186, 171, 187, 182, 187, 165, 188, 172, 188, 177, 188, 182, 188, 173, 189, 174, 189, 175, 190, 176, 190, 177, 191, 178, 191, 185, 192, 186, 192, 187, 193, 188, 193, 179, 194, 190, 194, 180, 195, 191, 195, 183, 196, 189, 196, 194, 196, 184, 197, 189, 197, 195, 197, 185, 198, 190, 198, 186, 199, 187, 199, 188, 200, 191, 200, 192, 201, 198, 201, 199, 201, 194, 202, 198, 202, 193, 203, 199, 203, 200, 203, 195, 204, 200, 204, 196, 205, 197, 205, 201, 205, 202, 205, 203, 205, 204, 205];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[204, 195, 197, 205], [204, 200, 191, 195], [204, 205, 203, 200], [188, 182, 167, 172], [61, 39, 34, 58], [60, 57, 34, 38], [51, 64, 44, 29], [14, 5, 1, 10], [92, 65, 52, 76], [43, 28, 14, 27], [131, 139, 125, 116], [78, 71, 47, 54], [85, 61, 58, 82], [56, 60, 38, 33], [18, 6, 2, 12], [17, 12, 2, 5], [30, 15, 7, 20], [6, 4, 0, 2], [15, 29, 26, 11], [2, 0, 1, 5], [23, 18, 12, 17], [48, 54, 47, 46], [33, 38, 23, 17], [28, 17, 5, 14], [32, 46, 31, 16], [53, 42, 27, 25, 36, 47], [49, 27, 42, 62], [177, 188, 165, 155], [24, 20, 13, 19], [27, 14, 10, 25], [56, 33, 17, 40], [34, 19, 6, 18], [97, 106, 78, 72], [79, 72, 48, 55], [16, 31, 21, 8], [29, 44, 55, 48, 37, 26], [76, 52, 41, 67], [65, 91, 75, 51], [50, 40, 17, 28], [39, 35, 20, 24], [84, 81, 57, 60], [87, 63, 49, 73], [59, 41, 20, 35], [72, 78, 54, 48], [68, 62, 42, 53], [36, 25, 21, 31], [61, 59, 35, 39], [64, 69, 55, 44], [15, 11, 3, 7], [10, 1, 0, 8], [83, 93, 76, 67], [9, 16, 8, 0], [52, 30, 20, 41], [70, 58, 34, 57], [65, 51, 29, 45], [39, 24, 19, 34], [104, 116, 90, 75], [11, 9, 0, 3], [107, 97, 72, 79], [37, 48, 46, 32], [49, 63, 43, 27], [45, 29, 15, 30], [63, 50, 28, 43], [46, 47, 36, 31], [25, 10, 8, 21], [101, 89, 74, 88], [52, 65, 45, 30], [22, 32, 16, 9], [7, 3, 0, 4], [80, 56, 40, 66], [85, 83, 59, 61], [112, 103, 73, 86], [71, 77, 53, 47], [89, 80, 66, 74], [26, 37, 32, 22], [20, 7, 4, 13], [11, 26, 22, 9], [75, 90, 64, 51], [186, 181, 166, 171], [73, 49, 62, 86], [94, 86, 62, 68], [19, 13, 4, 6], [80, 84, 60, 56], [94, 68, 53, 77], [74, 66, 40, 50], [96, 105, 77, 71], [162, 177, 155, 142], [88, 74, 50, 63], [108, 99, 81, 84], [83, 67, 41, 59], [122, 112, 86, 94], [129, 113, 103, 112], [109, 85, 82, 99], [141, 136, 110, 115], [98, 108, 84, 80], [117, 104, 75, 91], [113, 87, 73, 103], [111, 119, 93, 83], [117, 131, 116, 104], [90, 95, 69, 64], [106, 96, 71, 78], [38, 34, 18, 23], [99, 82, 58, 70], [95, 79, 55, 69], [126, 98, 80, 110], [126, 133, 108, 98], [115, 110, 80, 89], [166, 170, 146, 144], [130, 115, 89, 101], [102, 92, 76, 93], [130, 101, 88, 114], [153, 140, 113, 129], [122, 94, 77, 105], [142, 155, 131, 117], [81, 99, 70, 57], [142, 117, 91, 65, 92, 118], [123, 120, 96, 106], [109, 100, 83, 85], [128, 111, 83, 100], [143, 156, 132, 119], [159, 158, 151, 157], [135, 147, 123, 106], [125, 107, 79, 95], [165, 149, 125, 139], [121, 124, 106, 97], [198, 190, 175, 185], [133, 127, 99, 108], [182, 187, 171, 167], [156, 142, 118, 132], [125, 121, 97, 107], [134, 128, 100, 109], [145, 148, 124, 121], [176, 154, 140, 160], [150, 157, 133, 126], [147, 144, 120, 123], [132, 118, 92, 102], [175, 160, 140, 153], [197, 184, 174, 189], [120, 122, 105, 96], [119, 132, 102, 93], [140, 114, 88, 63, 87, 113], [164, 153, 129, 138], [179, 168, 157, 150, 161, 176], [149, 145, 121, 125], [184, 180, 169, 174], [144, 146, 122, 120], [190, 176, 160, 175], [189, 174, 159, 173], [138, 129, 112, 122], [137, 143, 119, 111], [201, 198, 185, 192], [185, 175, 153, 164], [148, 171, 147, 135], [196, 189, 173, 183], [150, 126, 110, 136], [161, 150, 136, 141], [183, 173, 168, 179], [116, 125, 95, 90], [199, 186, 171, 187], [194, 179, 176, 190], [158, 152, 128, 134], [157, 151, 127, 133], [152, 137, 111, 128], [171, 166, 144, 147], [178, 191, 177, 162], [205, 196, 194, 202], [180, 178, 163, 152, 158, 169], [155, 165, 139, 131], [199, 201, 192, 186], [164, 138, 122, 146], [134, 109, 99, 127], [152, 163, 143, 137], [148, 135, 106, 124], [154, 141, 115, 130], [154, 130, 114, 140], [173, 159, 157, 168], [158, 134, 127, 151], [186, 192, 185, 181], [178, 162, 142, 156], [174, 169, 158, 159], [167, 171, 148, 145], [176, 161, 141, 154], [188, 193, 187, 182], [188, 172, 149, 165], [200, 188, 177, 191], [181, 185, 170, 166], [172, 167, 145, 149], [163, 178, 156, 143], [205, 197, 189, 196], [203, 199, 187, 193], [197, 195, 180, 184], [200, 203, 193, 188], [185, 164, 146, 170], [180, 195, 191, 178], [196, 183, 179, 194], [205, 202, 198, 201], [202, 194, 190, 198], [203, 205, 201, 199]];
   <!-- Facet style -->
obj0.userData.facetmaterial = [new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0xBA914D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } ),
new THREE.MeshBasicMaterial( { color: 0x9D743B, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } )];
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
