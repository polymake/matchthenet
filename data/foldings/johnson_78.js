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
obj0.userData.points.push(new PMPoint(1.03878, 0.427861, 0));
obj0.userData.points.push(new PMPoint(1.40274, 0.692294, 0));
obj0.userData.points.push(new PMPoint(1.54176, 1.12016, 0));
obj0.userData.points.push(new PMPoint(1.40274, 1.54802, 0));
obj0.userData.points.push(new PMPoint(1.03878, 1.81245, 0));
obj0.userData.points.push(new PMPoint(0.588901, 1.81245, 0));
obj0.userData.points.push(new PMPoint(0.22494, 1.54802, 0));
obj0.userData.points.push(new PMPoint(0.0859194, 1.12016, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 1.05625, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 0.791822, 0));
obj0.userData.points.push(new PMPoint(-0.440049, 0.0935353, 0));
obj0.userData.points.push(new PMPoint(-0.139021, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.22494, -1.14217, 0));
obj0.userData.points.push(new PMPoint(0.588901, -0.877741, 0));
obj0.userData.points.push(new PMPoint(0.839488, -0.22494, 0));
obj0.userData.points.push(new PMPoint(-0.44988, 0, 0));
obj0.userData.points.push(new PMPoint(-0.44988, -0.44988, 0));
obj0.userData.points.push(new PMPoint(1.2417, -0.403453, 0));
obj0.userData.points.push(new PMPoint(1.60566, -0.139021, 0));
obj0.userData.points.push(new PMPoint(1.46664, 0.288841, 0));
obj0.userData.points.push(new PMPoint(1.8306, 0.553274, 0));
obj0.userData.points.push(new PMPoint(1.96962, 0.981135, 0));
obj0.userData.points.push(new PMPoint(1.66717, 1.91198, 0));
obj0.userData.points.push(new PMPoint(1.30321, 2.17641, 0));
obj0.userData.points.push(new PMPoint(1.99164, 1.12016, 0));
obj0.userData.points.push(new PMPoint(2.13066, 1.54802, 0));
obj0.userData.points.push(new PMPoint(1.7667, 1.81245, 0));
obj0.userData.points.push(new PMPoint(1.1778, 2.24031, 0));
obj0.userData.points.push(new PMPoint(0.813841, 2.50474, 0));
obj0.userData.points.push(new PMPoint(0.44988, 2.24031, 0));
obj0.userData.points.push(new PMPoint(0.324468, 2.17641, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 1.91198, 0));
obj0.userData.points.push(new PMPoint(-0.139021, 1.81245, 0));
obj0.userData.points.push(new PMPoint(-0.502981, 1.54802, 0));
obj0.userData.points.push(new PMPoint(-0.363961, 1.12016, 0));
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
obj0.userData.points.push(new PMPoint(1.50613, -0.767414, 0));
obj0.userData.points.push(new PMPoint(1.8701, -0.502981, 0));
obj0.userData.points.push(new PMPoint(2.27065, 0.646809, 0));
obj0.userData.points.push(new PMPoint(1.7142, 2.35939, 0));
obj0.userData.points.push(new PMPoint(2.3951, 1.91198, 0));
obj0.userData.points.push(new PMPoint(2.03113, 2.17641, 0));
obj0.userData.points.push(new PMPoint(2.4195, 0.981135, 0));
obj0.userData.points.push(new PMPoint(2.55852, 1.409, 0));
obj0.userData.points.push(new PMPoint(0.549408, 2.8687, 0));
obj0.userData.points.push(new PMPoint(0.185447, 2.60427, 0));
obj0.userData.points.push(new PMPoint(1.44223, 2.60427, 0));
obj0.userData.points.push(new PMPoint(1.07827, 2.8687, 0));
obj0.userData.points.push(new PMPoint(-0.0865181, 2.35939, 0));
obj0.userData.points.push(new PMPoint(-0.403453, 2.17641, 0));
obj0.userData.points.push(new PMPoint(-0.767414, 1.91198, 0));
obj0.userData.points.push(new PMPoint(-0.80401, 1.21369, 0));
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
obj0.userData.points.push(new PMPoint(2.75906, 2.17641, 0));
obj0.userData.points.push(new PMPoint(2.62004, 2.60427, 0));
obj0.userData.points.push(new PMPoint(2.17016, 2.60427, 0));
obj0.userData.points.push(new PMPoint(2.57808, 1.50099, 0));
obj0.userData.points.push(new PMPoint(0.410387, 3.29657, 0));
obj0.userData.points.push(new PMPoint(-0.0394928, 3.29657, 0));
obj0.userData.points.push(new PMPoint(-0.178513, 2.8687, 0));
obj0.userData.points.push(new PMPoint(0.996823, 2.91573, 0));
obj0.userData.points.push(new PMPoint(-0.913396, -1.27231, 0));
obj0.userData.points.push(new PMPoint(-0.0865181, -1.95355, 0));
obj0.userData.points.push(new PMPoint(0.360897, -2.00058, 0));
obj0.userData.points.push(new PMPoint(-1.19528, -1.64516, 0));
obj0.userData.points.push(new PMPoint(-1.05625, -2.07302, 0));
obj0.userData.points.push(new PMPoint(-0.628393, -2.38388, 0));
obj0.userData.points.push(new PMPoint(-0.178513, -2.38388, 0));
obj0.userData.points.push(new PMPoint(0.628393, -2.38388, 0));
obj0.userData.points.push(new PMPoint(1.07827, -2.38388, 0));
obj0.userData.points.push(new PMPoint(-1.55316, -0.0419573, 0));
obj0.userData.points.push(new PMPoint(2.62004, 3.05415, 0));
obj0.userData.points.push(new PMPoint(2.17016, 3.05415, 0));
obj0.userData.points.push(new PMPoint(0.0964646, -2.36454, 0));
obj0.userData.points.push(new PMPoint(-0.721929, -2.37405, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 6, 5, 6, 1, 7, 2, 8, 7, 8, 2, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 3, 16, 15, 16, 3, 17, 4, 18, 17, 18, 0, 19, 4, 19, 5, 20, 20, 21, 6, 22, 21, 22, 1, 23, 6, 23, 0, 24, 5, 25, 24, 25, 7, 26, 26, 27, 8, 28, 27, 28, 10, 29, 11, 30, 29, 30, 12, 31, 13, 32, 31, 32, 11, 33, 33, 34, 12, 35, 34, 35, 13, 36, 36, 37, 14, 38, 37, 38, 14, 39, 15, 40, 39, 40, 15, 41, 41, 42, 16, 43, 42, 43, 18, 44, 4, 45, 44, 45, 5, 46, 20, 46, 20, 47, 21, 48, 47, 48, 22, 49, 6, 50, 49, 50, 21, 51, 22, 52, 51, 52, 24, 53, 53, 54, 25, 55, 54, 55, 26, 56, 27, 57, 56, 57, 29, 58, 30, 58, 31, 59, 32, 59, 34, 60, 35, 61, 60, 61, 33, 62, 34, 63, 62, 63, 37, 64, 38, 65, 64, 65, 36, 66, 37, 67, 66, 67, 39, 68, 40, 68, 41, 69, 42, 70, 69, 70, 42, 71, 43, 71, 46, 72, 20, 73, 72, 73, 21, 74, 48, 74, 47, 75, 75, 76, 48, 77, 76, 77, 22, 78, 49, 78, 51, 79, 79, 80, 52, 81, 80, 81, 54, 82, 55, 83, 82, 83, 53, 84, 54, 85, 84, 85, 60, 86, 86, 87, 61, 88, 87, 88, 34, 89, 60, 89, 64, 90, 90, 91, 65, 92, 91, 92, 37, 93, 64, 93, 72, 94, 73, 94, 48, 95, 74, 96, 95, 96, 75, 97, 76, 98, 97, 98, 76, 99, 77, 100, 99, 100, 79, 101, 80, 102, 101, 102, 54, 103, 82, 103, 87, 104, 88, 105, 104, 105, 95, 106, 96, 106, 76, 107, 98, 107];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [6, 1, 0, 5], [46, 72, 73, 20], [5, 46, 20], [6, 5, 20, 21, 22], [2, 1, 7, 8], [23, 1, 6], [55, 54, 82, 83], [72, 94, 73], [21, 20, 47, 48], [50, 6, 22, 49], [65, 64, 90, 91, 92], [97, 98, 76, 75], [22, 21, 51, 52], [21, 48, 74], [49, 22, 78], [38, 37, 64, 65], [99, 100, 77, 76], [107, 76, 98], [81, 52, 51, 79, 80], [11, 10, 29, 30], [37, 93, 64], [61, 60, 86, 87, 88], [37, 36, 66, 67], [13, 12, 31, 32], [34, 89, 60], [32, 31, 59], [35, 34, 60, 61], [12, 11, 33, 34, 35], [34, 33, 62, 63], [80, 79, 101, 102], [30, 29, 58], [96, 95, 106], [14, 13, 36, 37, 38], [88, 87, 104, 105], [27, 26, 56, 57], [96, 74, 48, 95], [40, 39, 68], [15, 14, 39, 40], [8, 7, 26, 27, 28], [48, 47, 75, 76, 77], [42, 41, 69, 70], [103, 82, 54], [3, 2, 9, 10, 11, 12, 13, 14, 15, 16], [16, 15, 41, 42, 43], [43, 42, 71], [84, 85, 54, 53], [4, 3, 17, 18], [0, 4, 19], [4, 18, 44, 45], [24, 53, 54, 55, 25], [0, 24, 25, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x3D5132, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[76,98],
      [96,95],
      [88,87],
      [82,54],
      [80,79],
      [77,76],
      [76,75],
      [74,48],
      [73,72],
      [64,37],
      [65,64],
      [60,34],
      [61,60],
      [54,53],
      [55,54],
      [52,51],
      [49,22],
      [48,47],
      [21,48],
      [20,46],
      [43,42],
      [42,41],
      [40,39],
      [37,36],
      [38,37],
      [34,33],
      [35,34],
      [32,31],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [6,22],
      [21,20],
      [20,5],
      [4,18],
      [16,15],
      [15,14],
      [14,13],
      [12,11],
      [13,12],
      [11,10],
      [8,7],
      [5,0],
      [1,6],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.0344439357957,
      2.12437068569194,
      2.12437068569194,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275];

obj0.userData.subtrees = [[107],
      [106],
      [104,105],
      [103],
      [101,102],
      [99,100],
      [97,98,107],
      [95,96,106],
      [94],
      [93],
      [90,91,92],
      [89],
      [86,87,88,104,105],
      [84,85],
      [82,83,103],
      [79,80,81,101,102],
      [78],
      [75,76,77,97,98,99,100,107],
      [74,95,96,106],
      [72,73,94],
      [71],
      [69,70],
      [68],
      [66,67],
      [64,65,90,91,92,93],
      [62,63],
      [60,61,86,87,88,89,104,105],
      [59],
      [58],
      [56,57],
      [53,54,55,82,83,84,85,103],
      [51,52,79,80,81,101,102],
      [49,50,78],
      [47,48,74,75,76,77,95,96,97,98,99,100,106,107],
      [46,72,73,94],
      [44,45],
      [41,42,43,69,70,71],
      [39,40,68],
      [36,37,38,64,65,66,67,90,91,92,93],
      [33,34,35,60,61,62,63,86,87,88,89,104,105],
      [31,32,59],
      [29,30,58],
      [26,27,28,56,57],
      [24,25,53,54,55,82,83,84,85,103],
      [23],
      [20,21,22,46,47,48,49,50,51,52,72,73,74,75,76,77,78,79,80,81,94,95,96,97,98,99,100,101,102,106,107],
      [19],
      [17,18,44,45],
      [9,10,11,12,13,14,15,16,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,58,59,60,61,62,63,64,65,66,67,68,69,70,71,86,87,88,89,90,91,92,93,104,105],
      [7,8,26,27,28,56,57],
      [5,6,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,55,72,73,74,75,76,77,78,79,80,81,82,83,84,85,94,95,96,97,98,99,100,101,102,103,106,107]];

obj0.userData.polytoperoot = [[0.952861239967913,-0.296766671961165,0.180548717105183],
      [1.61803398874989,-1,0],
      [-0.139020581348206,-0.224940025757167,-0.813840658619707]];

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
