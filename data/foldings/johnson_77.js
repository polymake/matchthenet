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
obj0.userData.points.push(new PMPoint(0.44988, 0, 0));
obj0.userData.points.push(new PMPoint(0.588901, 0.427861, 0));
obj0.userData.points.push(new PMPoint(0.22494, 0.692294, 0));
obj0.userData.points.push(new PMPoint(-0.139021, 0.427861, 0));
obj0.userData.points.push(new PMPoint(0, -0.44988, 0));
obj0.userData.points.push(new PMPoint(0.44988, -0.44988, 0));
obj0.userData.points.push(new PMPoint(0.877741, -0.139021, 0));
obj0.userData.points.push(new PMPoint(1.01676, 0.288841, 0));
obj0.userData.points.push(new PMPoint(0.853333, 0.791822, 0));
obj0.userData.points.push(new PMPoint(0.489373, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 0.791822, 0));
obj0.userData.points.push(new PMPoint(-0.440049, 0.0935353, 0));
obj0.userData.points.push(new PMPoint(-0.139021, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.22494, -1.14217, 0));
obj0.userData.points.push(new PMPoint(0.588901, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.839488, -0.22494, 0));
obj0.userData.points.push(new PMPoint(-0.44988, 0, 0));
obj0.userData.points.push(new PMPoint(-0.44988, -0.44988, 0));
obj0.userData.points.push(new PMPoint(0.923227, 0.72889, 0));
obj0.userData.points.push(new PMPoint(1.2417, -0.403453, 0));
obj0.userData.points.push(new PMPoint(1.60566, -0.139021, 0));
obj0.userData.points.push(new PMPoint(1.46664, 0.288841, 0));
obj0.userData.points.push(new PMPoint(1.21729, 1.05625, 0));
obj0.userData.points.push(new PMPoint(1.07827, 1.48412, 0));
obj0.userData.points.push(new PMPoint(0.628393, 1.48412, 0));
obj0.userData.points.push(new PMPoint(0.0419573, 1.10328, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 1.48412, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 0.527389, 0));
obj0.userData.points.push(new PMPoint(-0.502981, 0.163428, 0));
obj0.userData.points.push(new PMPoint(-0.440049, -0.543415, 0));
obj0.userData.points.push(new PMPoint(-0.403453, -1.2417, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, -1.50613, 0));
obj0.userData.points.push(new PMPoint(1.01676, -0.738721, 0));
obj0.userData.points.push(new PMPoint(0.877741, -0.310859, 0));
obj0.userData.points.push(new PMPoint(0.489373, -1.50613, 0));
obj0.userData.points.push(new PMPoint(0.853333, -1.2417, 0));
obj0.userData.points.push(new PMPoint(-0.877741, 0.139021, 0));
obj0.userData.points.push(new PMPoint(-1.14217, -0.22494, 0));
obj0.userData.points.push(new PMPoint(-0.877741, -0.588901, 0));
obj0.userData.points.push(new PMPoint(1.45681, 0.382376, 0));
obj0.userData.points.push(new PMPoint(1.36328, 0.822425, 0));
obj0.userData.points.push(new PMPoint(1.96962, -0.403453, 0));
obj0.userData.points.push(new PMPoint(2.4195, -0.403453, 0));
obj0.userData.points.push(new PMPoint(2.78346, -0.139021, 0));
obj0.userData.points.push(new PMPoint(2.92248, 0.288841, 0));
obj0.userData.points.push(new PMPoint(2.78346, 0.716702, 0));
obj0.userData.points.push(new PMPoint(2.4195, 0.981135, 0));
obj0.userData.points.push(new PMPoint(1.96962, 0.981135, 0));
obj0.userData.points.push(new PMPoint(1.60566, 0.716702, 0));
obj0.userData.points.push(new PMPoint(1.50613, -0.767414, 0));
obj0.userData.points.push(new PMPoint(1.8701, -0.502981, 0));
obj0.userData.points.push(new PMPoint(1.07827, 1.934, 0));
obj0.userData.points.push(new PMPoint(0.628393, 1.934, 0));
obj0.userData.points.push(new PMPoint(0.200532, 1.62314, 0));
obj0.userData.points.push(new PMPoint(0.0615115, 1.19528, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 1.934, 0));
obj0.userData.points.push(new PMPoint(-0.628393, 1.934, 0));
obj0.userData.points.push(new PMPoint(-1.05625, 1.62314, 0));
obj0.userData.points.push(new PMPoint(-1.19528, 1.19528, 0));
obj0.userData.points.push(new PMPoint(-0.814439, 0.608839, 0));
obj0.userData.points.push(new PMPoint(-0.774375, -0.844444, 0));
obj0.userData.points.push(new PMPoint(-0.473347, -1.17877, 0));
obj0.userData.points.push(new PMPoint(0.407923, -1.55316, 0));
obj0.userData.points.push(new PMPoint(-0.767414, -1.50613, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -1.934, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -1.934, 0));
obj0.userData.points.push(new PMPoint(0.923227, -1.17877, 0));
obj0.userData.points.push(new PMPoint(0.628393, -1.934, 0));
obj0.userData.points.push(new PMPoint(1.07827, -1.934, 0));
obj0.userData.points.push(new PMPoint(1.21729, -1.50613, 0));
obj0.userData.points.push(new PMPoint(-1.50613, -0.489373, 0));
obj0.userData.points.push(new PMPoint(-1.2417, -0.853333, 0));
obj0.userData.points.push(new PMPoint(-1.2417, 0.403453, 0));
obj0.userData.points.push(new PMPoint(-1.50613, 0.0394928, 0));
obj0.userData.points.push(new PMPoint(3.14742, 0.981135, 0));
obj0.userData.points.push(new PMPoint(3.0084, 1.409, 0));
obj0.userData.points.push(new PMPoint(2.55852, 1.409, 0));
obj0.userData.points.push(new PMPoint(2.68394, -0.767414, 0));
obj0.userData.points.push(new PMPoint(3.0479, -0.502981, 0));
obj0.userData.points.push(new PMPoint(3.35035, 0.427861, 0));
obj0.userData.points.push(new PMPoint(3.21133, 0.855723, 0));
obj0.userData.points.push(new PMPoint(3.14742, -0.403453, 0));
obj0.userData.points.push(new PMPoint(3.51139, -0.139021, 0));
obj0.userData.points.push(new PMPoint(3.37236, 0.288841, 0));
obj0.userData.points.push(new PMPoint(0.238786, 1.70906, 0));
obj0.userData.points.push(new PMPoint(-1.018, 1.70906, 0));
obj0.userData.points.push(new PMPoint(-1.42022, 1.88757, 0));
obj0.userData.points.push(new PMPoint(-1.78418, 1.62314, 0));
obj0.userData.points.push(new PMPoint(-1.64516, 1.19528, 0));
obj0.userData.points.push(new PMPoint(-0.913396, -1.27231, 0));
obj0.userData.points.push(new PMPoint(-0.0865181, -1.95355, 0));
obj0.userData.points.push(new PMPoint(0.360897, -2.00058, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -2.38388, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -2.38388, 0));
obj0.userData.points.push(new PMPoint(-1.19528, -1.64516, 0));
obj0.userData.points.push(new PMPoint(-1.05625, -2.07302, 0));
obj0.userData.points.push(new PMPoint(-1.55316, -0.0419573, 0));
obj0.userData.points.push(new PMPoint(3.57529, 1.12016, 0));
obj0.userData.points.push(new PMPoint(3.43627, 1.54802, 0));
obj0.userData.points.push(new PMPoint(3.09492, -0.950397, 0));
obj0.userData.points.push(new PMPoint(3.65137, 0.762187, 0));
obj0.userData.points.push(new PMPoint(3.93925, 0, 0));
obj0.userData.points.push(new PMPoint(3.80023, 0.427861, 0));
obj0.userData.points.push(new PMPoint(-1.018, -2.15894, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 3, 10, 9, 10, 3, 11, 4, 12, 11, 12, 0, 13, 4, 13, 5, 14, 14, 15, 6, 16, 15, 16, 1, 17, 6, 17, 0, 18, 5, 19, 18, 19, 2, 20, 8, 20, 7, 21, 21, 22, 8, 23, 22, 23, 9, 24, 24, 25, 10, 26, 25, 26, 3, 27, 10, 27, 11, 28, 28, 29, 12, 30, 29, 30, 12, 31, 4, 32, 31, 32, 5, 33, 14, 33, 14, 34, 15, 35, 34, 35, 16, 36, 6, 37, 36, 37, 15, 38, 16, 39, 38, 39, 18, 40, 40, 41, 19, 42, 41, 42, 8, 43, 20, 44, 43, 44, 22, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 23, 52, 51, 52, 21, 53, 22, 54, 53, 54, 25, 55, 26, 56, 55, 56, 26, 57, 10, 58, 57, 58, 28, 59, 29, 60, 59, 60, 29, 61, 30, 62, 61, 62, 12, 63, 30, 63, 33, 64, 14, 65, 64, 65, 15, 66, 35, 66, 34, 67, 67, 68, 35, 69, 68, 69, 16, 70, 36, 70, 38, 71, 71, 72, 39, 73, 72, 73, 41, 74, 42, 75, 74, 75, 40, 76, 41, 77, 76, 77, 49, 78, 78, 79, 50, 80, 79, 80, 46, 81, 47, 82, 81, 82, 48, 83, 49, 84, 83, 84, 47, 85, 85, 86, 48, 87, 86, 87, 26, 88, 56, 88, 29, 89, 60, 89, 61, 90, 90, 91, 62, 92, 91, 92, 64, 93, 65, 93, 35, 94, 66, 95, 94, 95, 68, 96, 69, 97, 96, 97, 67, 98, 68, 99, 98, 99, 41, 100, 74, 100, 78, 101, 79, 102, 101, 102, 81, 103, 82, 103, 83, 104, 84, 104, 86, 105, 87, 106, 105, 106, 68, 107, 96, 107];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [33, 64, 65, 14], [5, 33, 14], [6, 5, 14, 15, 16], [2, 1, 7, 8], [17, 1, 6], [42, 41, 74, 75], [64, 93, 65], [15, 14, 34, 35], [37, 6, 16, 36], [2, 8, 20], [62, 61, 90, 91, 92], [10, 9, 24, 25, 26], [29, 28, 59, 60], [29, 60, 89], [26, 56, 88], [79, 78, 101, 102], [26, 25, 55, 56], [87, 86, 105, 106], [50, 49, 78, 79, 80], [84, 83, 104], [47, 46, 81, 82], [49, 48, 83, 84], [48, 47, 85, 86, 87], [82, 81, 103], [23, 22, 45, 46, 47, 48, 49, 50, 51, 52], [73, 39, 38, 71, 72], [96, 68, 107], [96, 97, 69, 68], [22, 21, 53, 54], [95, 66, 35, 94], [8, 43, 44, 20], [36, 16, 70], [15, 35, 66], [16, 15, 38, 39], [98, 99, 68, 67], [8, 7, 21, 22, 23], [35, 34, 67, 68, 69], [10, 26, 57, 58], [30, 29, 61, 62], [100, 74, 41], [3, 10, 27], [3, 2, 9, 10], [12, 11, 28, 29, 30], [12, 30, 63], [76, 77, 41, 40], [4, 3, 11, 12], [0, 4, 13], [4, 12, 31, 32], [18, 40, 41, 42, 19], [0, 18, 19, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[96,68],
      [87,86],
      [84,83],
      [82,81],
      [79,78],
      [74,41],
      [68,67],
      [69,68],
      [66,35],
      [65,64],
      [62,61],
      [29,60],
      [26,56],
      [48,47],
      [49,48],
      [47,46],
      [50,49],
      [41,40],
      [42,41],
      [39,38],
      [36,16],
      [35,34],
      [15,35],
      [14,33],
      [12,30],
      [30,29],
      [29,28],
      [10,26],
      [26,25],
      [22,21],
      [23,22],
      [20,8],
      [19,18],
      [16,15],
      [6,16],
      [15,14],
      [14,5],
      [4,12],
      [12,11],
      [3,10],
      [10,9],
      [8,7],
      [2,8],
      [5,0],
      [1,6],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275];

obj0.userData.subtrees = [[107],
      [105,106],
      [104],
      [103],
      [101,102],
      [100],
      [98,99],
      [96,97,107],
      [94,95],
      [93],
      [90,91,92],
      [89],
      [88],
      [85,86,87,105,106],
      [83,84,104],
      [81,82,103],
      [78,79,80,101,102],
      [76,77],
      [74,75,100],
      [71,72,73],
      [70],
      [67,68,69,96,97,98,99,107],
      [66,94,95],
      [64,65,93],
      [63],
      [61,62,90,91,92],
      [59,60,89],
      [57,58],
      [55,56,88],
      [53,54],
      [45,46,47,48,49,50,51,52,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [43,44],
      [40,41,42,74,75,76,77,100],
      [38,39,71,72,73],
      [36,37,70],
      [34,35,66,67,68,69,94,95,96,97,98,99,107],
      [33,64,65,93],
      [31,32],
      [28,29,30,59,60,61,62,63,89,90,91,92],
      [27],
      [24,25,26,55,56,57,58,88],
      [21,22,23,45,46,47,48,49,50,51,52,53,54,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [20,43,44],
      [18,19,40,41,42,74,75,76,77,100],
      [17],
      [14,15,16,33,34,35,36,37,38,39,64,65,66,67,68,69,70,71,72,73,93,94,95,96,97,98,99,107],
      [13],
      [11,12,28,29,30,31,32,59,60,61,62,63,89,90,91,92],
      [9,10,24,25,26,27,55,56,57,58,88],
      [7,8,20,21,22,23,43,44,45,46,47,48,49,50,51,52,53,54,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [5,6,14,15,16,17,18,19,33,34,35,36,37,38,39,40,41,42,64,65,66,67,68,69,70,71,72,73,74,75,76,77,93,94,95,96,97,98,99,100,107]];

obj0.userData.polytoperoot = [[0.881034593536373,-0.269331334339591,0.224940025699072],
      [1.61803398874989,-1,0],
      [-0.139020581312301,-0.224940025699072,-0.813840658409518]];

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
