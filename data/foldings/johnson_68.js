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
obj0.userData.points.push(new PMPoint(0.336643, 0, 0));
obj0.userData.points.push(new PMPoint(0.168321, 0.291541, 0));
obj0.userData.points.push(new PMPoint(-0.27235, -0.197874, 0));
obj0.userData.points.push(new PMPoint(-0.376378, -0.51804, 0));
obj0.userData.points.push(new PMPoint(-0.27235, -0.838206, 0));
obj0.userData.points.push(new PMPoint(0, -1.03608, 0));
obj0.userData.points.push(new PMPoint(0.336643, -1.03608, 0));
obj0.userData.points.push(new PMPoint(0.608992, -0.838206, 0));
obj0.userData.points.push(new PMPoint(0.713021, -0.51804, 0));
obj0.userData.points.push(new PMPoint(0.608992, -0.197874, 0));
obj0.userData.points.push(new PMPoint(0.133133, 0.62634, 0));
obj0.userData.points.push(new PMPoint(-0.0921253, 0.876514, 0));
obj0.userData.points.push(new PMPoint(-0.421412, 0.946506, 0));
obj0.userData.points.push(new PMPoint(-0.72895, 0.809581, 0));
obj0.userData.points.push(new PMPoint(-0.897271, 0.51804, 0));
obj0.userData.points.push(new PMPoint(-0.862083, 0.183241, 0));
obj0.userData.points.push(new PMPoint(-0.636825, -0.066933, 0));
obj0.userData.points.push(new PMPoint(-0.307538, -0.136925, 0));
obj0.userData.points.push(new PMPoint(0.644181, -0.136925, 0));
obj0.userData.points.push(new PMPoint(0.973467, -0.066933, 0));
obj0.userData.points.push(new PMPoint(1.19873, 0.183241, 0));
obj0.userData.points.push(new PMPoint(1.23391, 0.51804, 0));
obj0.userData.points.push(new PMPoint(1.06559, 0.809581, 0));
obj0.userData.points.push(new PMPoint(0.758054, 0.946506, 0));
obj0.userData.points.push(new PMPoint(0.428768, 0.876514, 0));
obj0.userData.points.push(new PMPoint(0.20351, 0.62634, 0));
obj0.userData.points.push(new PMPoint(1.04231, -0.588032, 0));
obj0.userData.points.push(new PMPoint(0.938279, -0.267866, 0));
obj0.userData.points.push(new PMPoint(-0.601636, -0.267866, 0));
obj0.userData.points.push(new PMPoint(-0.648728, -0.320166, 0));
obj0.userData.points.push(new PMPoint(-0.98537, -0.320166, 0));
obj0.userData.points.push(new PMPoint(-1.25772, -0.51804, 0));
obj0.userData.points.push(new PMPoint(-1.36175, -0.838206, 0));
obj0.userData.points.push(new PMPoint(-1.25772, -1.15837, 0));
obj0.userData.points.push(new PMPoint(-0.98537, -1.35625, 0));
obj0.userData.points.push(new PMPoint(-0.648728, -1.35625, 0));
obj0.userData.points.push(new PMPoint(-0.376378, -1.15837, 0));
obj0.userData.points.push(new PMPoint(0.929159, -0.942235, 0));
obj0.userData.points.push(new PMPoint(1.03319, -0.622068, 0));
obj0.userData.points.push(new PMPoint(-0.27235, -1.23395, 0));
obj0.userData.points.push(new PMPoint(-0.376378, -1.55412, 0));
obj0.userData.points.push(new PMPoint(-0.27235, -1.87429, 0));
obj0.userData.points.push(new PMPoint(0, -2.07216, 0));
obj0.userData.points.push(new PMPoint(0.336643, -2.07216, 0));
obj0.userData.points.push(new PMPoint(0.608992, -1.87429, 0));
obj0.userData.points.push(new PMPoint(0.713021, -1.55412, 0));
obj0.userData.points.push(new PMPoint(0.608992, -1.23395, 0));
obj0.userData.points.push(new PMPoint(-0.307538, -1.173, 0));
obj0.userData.points.push(new PMPoint(0.644181, -1.173, 0));
obj0.userData.points.push(new PMPoint(0.916531, -0.975131, 0));
obj0.userData.points.push(new PMPoint(-1.16962, 0.320166, 0));
obj0.userData.points.push(new PMPoint(-0.764139, 1.14438, 0));
obj0.userData.points.push(new PMPoint(-0.989397, 1.39455, 0));
obj0.userData.points.push(new PMPoint(-1.31868, 1.46455, 0));
obj0.userData.points.push(new PMPoint(-1.62622, 1.32762, 0));
obj0.userData.points.push(new PMPoint(-1.79454, 1.03608, 0));
obj0.userData.points.push(new PMPoint(-1.75935, 0.701281, 0));
obj0.userData.points.push(new PMPoint(-1.5341, 0.451107, 0));
obj0.userData.points.push(new PMPoint(-1.20481, 0.381115, 0));
obj0.userData.points.push(new PMPoint(-0.693761, 1.14438, 0));
obj0.userData.points.push(new PMPoint(0.215413, 1.01344, 0));
obj0.userData.points.push(new PMPoint(0.383734, 1.30498, 0));
obj0.userData.points.push(new PMPoint(0.348546, 1.63978, 0));
obj0.userData.points.push(new PMPoint(0.123288, 1.88995, 0));
obj0.userData.points.push(new PMPoint(-0.205999, 1.95995, 0));
obj0.userData.points.push(new PMPoint(-0.513537, 1.82302, 0));
obj0.userData.points.push(new PMPoint(-0.681858, 1.53148, 0));
obj0.userData.points.push(new PMPoint(-0.64667, 1.19668, 0));
obj0.userData.points.push(new PMPoint(0.237161, 0.946506, 0));
obj0.userData.points.push(new PMPoint(1.22364, -0.292191, 0));
obj0.userData.points.push(new PMPoint(1.4489, -0.0420166, 0));
obj0.userData.points.push(new PMPoint(1.47108, -0.0146323, 0));
obj0.userData.points.push(new PMPoint(1.50626, 0.320166, 0));
obj0.userData.points.push(new PMPoint(1.54145, 0.381115, 0));
obj0.userData.points.push(new PMPoint(1.87074, 0.451107, 0));
obj0.userData.points.push(new PMPoint(2.096, 0.701281, 0));
obj0.userData.points.push(new PMPoint(2.13119, 1.03608, 0));
obj0.userData.points.push(new PMPoint(1.96286, 1.32762, 0));
obj0.userData.points.push(new PMPoint(1.65533, 1.46455, 0));
obj0.userData.points.push(new PMPoint(1.32604, 1.39455, 0));
obj0.userData.points.push(new PMPoint(1.10078, 1.14438, 0));
obj0.userData.points.push(new PMPoint(1.0304, 1.14438, 0));
obj0.userData.points.push(new PMPoint(-1.58701, -1.08838, 0));
obj0.userData.points.push(new PMPoint(-1.59436, -1.15837, 0));
obj0.userData.points.push(new PMPoint(-1.86671, -1.35625, 0));
obj0.userData.points.push(new PMPoint(-1.97074, -1.67641, 0));
obj0.userData.points.push(new PMPoint(-1.86671, -1.99658, 0));
obj0.userData.points.push(new PMPoint(-1.59436, -2.19445, 0));
obj0.userData.points.push(new PMPoint(-1.25772, -2.19445, 0));
obj0.userData.points.push(new PMPoint(-0.98537, -1.99658, 0));
obj0.userData.points.push(new PMPoint(-0.881342, -1.67641, 0));
obj0.userData.points.push(new PMPoint(-0.817049, -1.64779, 0));
obj0.userData.points.push(new PMPoint(1.20151, -1.14011, 0));
obj0.userData.points.push(new PMPoint(1.47386, -0.942235, 0));
obj0.userData.points.push(new PMPoint(1.36983, -0.622068, 0));
obj0.userData.points.push(new PMPoint(0.232614, -2.39233, 0));
obj0.userData.points.push(new PMPoint(0.336643, -2.71249, 0));
obj0.userData.points.push(new PMPoint(0.608992, -2.91037, 0));
obj0.userData.points.push(new PMPoint(0.945635, -2.91037, 0));
obj0.userData.points.push(new PMPoint(1.21798, -2.71249, 0));
obj0.userData.points.push(new PMPoint(1.32201, -2.39233, 0));
obj0.userData.points.push(new PMPoint(1.21798, -2.07216, 0));
obj0.userData.points.push(new PMPoint(0.945635, -1.87429, 0));
obj0.userData.points.push(new PMPoint(0.168321, -2.3637, 0));
obj0.userData.points.push(new PMPoint(0.938279, -1.80429, 0));
obj0.userData.points.push(new PMPoint(1.04231, -1.48413, 0));
obj0.userData.points.push(new PMPoint(1.03319, -1.45009, 0));
obj0.userData.points.push(new PMPoint(0.929159, -1.12993, 0));
obj0.userData.points.push(new PMPoint(-1.09343, 1.71472, 0));
obj0.userData.points.push(new PMPoint(-1.15036, 1.75609, 0));
obj0.userData.points.push(new PMPoint(-1.18555, 2.09089, 0));
obj0.userData.points.push(new PMPoint(-1.41081, 2.34106, 0));
obj0.userData.points.push(new PMPoint(-1.74009, 2.41105, 0));
obj0.userData.points.push(new PMPoint(-2.04763, 2.27413, 0));
obj0.userData.points.push(new PMPoint(-2.21595, 1.98259, 0));
obj0.userData.points.push(new PMPoint(-2.18077, 1.64779, 0));
obj0.userData.points.push(new PMPoint(-1.95551, 1.39761, 0));
obj0.userData.points.push(new PMPoint(-1.96286, 1.32762, 0));
obj0.userData.points.push(new PMPoint(0.0192594, 2.21012, 0));
obj0.userData.points.push(new PMPoint(1.80587, -0.0498211, 0));
obj0.userData.points.push(new PMPoint(1.84106, 0.284978, 0));
obj0.userData.points.push(new PMPoint(1.97477, 0.130941, 0));
obj0.userData.points.push(new PMPoint(2.20003, 0.381115, 0));
obj0.userData.points.push(new PMPoint(2.29951, 1.32762, 0));
obj0.userData.points.push(new PMPoint(-1.9019, -2.33138, 0));
obj0.userData.points.push(new PMPoint(1.39938, -1.41246, 0));
obj0.userData.points.push(new PMPoint(1.67173, -1.21458, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 1, 10, 9, 10, 2, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 0, 18, 17, 18, 1, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 2, 26, 25, 26, 9, 27, 10, 28, 27, 28, 3, 29, 4, 29, 4, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 5, 37, 36, 37, 8, 38, 9, 39, 38, 39, 6, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 7, 47, 46, 47, 5, 48, 6, 48, 7, 49, 8, 50, 49, 50, 15, 51, 16, 51, 14, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 15, 59, 58, 59, 13, 60, 14, 60, 12, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 13, 68, 67, 68, 11, 69, 12, 69, 20, 70, 21, 71, 70, 71, 21, 72, 22, 73, 72, 73, 22, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 23, 81, 80, 81, 23, 82, 24, 82, 33, 83, 34, 83, 34, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 35, 91, 90, 91, 35, 92, 36, 92, 38, 93, 93, 94, 39, 95, 94, 95, 44, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 45, 103, 102, 103, 43, 104, 44, 104, 45, 105, 46, 106, 105, 106, 46, 107, 47, 108, 107, 108, 53, 109, 54, 109, 54, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 55, 117, 116, 117, 55, 118, 56, 118, 64, 119, 65, 119, 72, 120, 73, 121, 120, 121, 75, 122, 76, 123, 122, 123, 77, 124, 78, 124, 87, 125, 88, 125, 93, 126, 94, 127, 126, 127];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [10, 1, 0, 3, 4, 5, 6, 7, 8, 9], [28, 10, 9, 27], [3, 29, 4], [21, 20, 70, 71], [30, 31, 32, 33, 34, 35, 36, 37, 5, 4], [9, 8, 38, 39], [73, 72, 120, 121], [64, 119, 65], [53, 109, 54], [112, 113, 114, 115, 116, 117, 55, 54, 110, 111], [76, 75, 122, 123], [33, 83, 34], [100, 101, 102, 103, 45, 44, 96, 97, 98, 99], [78, 77, 124], [56, 55, 118], [84, 85, 86, 87, 88, 89, 90, 91, 35, 34], [125, 88, 87], [44, 43, 104], [36, 35, 92], [46, 45, 105, 106], [94, 93, 126, 127], [7, 6, 40, 41, 42, 43, 44, 45, 46, 47], [47, 46, 107, 108], [6, 5, 48], [8, 7, 49, 50], [95, 39, 38, 93, 94], [16, 15, 51], [22, 21, 72, 73], [15, 14, 52, 53, 54, 55, 56, 57, 58, 59], [23, 22, 74, 75, 76, 77, 78, 79, 80, 81], [14, 13, 60], [24, 23, 82], [61, 62, 63, 64, 65, 66, 67, 68, 13, 12], [11, 69, 12], [0, 2, 11, 12, 13, 14, 15, 16, 17, 18], [2, 1, 19, 20, 21, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[94,93],
      [88,87],
      [78,77],
      [76,75],
      [73,72],
      [65,64],
      [56,55],
      [55,54],
      [54,53],
      [47,46],
      [46,45],
      [44,43],
      [45,44],
      [39,38],
      [36,35],
      [35,34],
      [34,33],
      [24,23],
      [23,22],
      [22,21],
      [21,20],
      [12,11],
      [13,12],
      [14,13],
      [15,14],
      [16,15],
      [8,7],
      [6,5],
      [7,6],
      [9,8],
      [5,4],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.58801829469275,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.48923451380542,
      2.48923451380542,
      2.0344439357957,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.48923451380542,
      2.0344439357957,
      2.58801829469275,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.58801829469275,
      2.48923451380542,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.0344439357957,
      2.58801829469275,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542];

obj0.userData.subtrees = [[126,127],
      [125],
      [124],
      [122,123],
      [120,121],
      [119],
      [118],
      [110,111,112,113,114,115,116,117],
      [109],
      [107,108],
      [105,106],
      [104],
      [96,97,98,99,100,101,102,103],
      [93,94,95,126,127],
      [92],
      [84,85,86,87,88,89,90,91,125],
      [83],
      [82],
      [74,75,76,77,78,79,80,81,122,123,124],
      [72,73,120,121],
      [70,71],
      [69],
      [61,62,63,64,65,66,67,68,119],
      [60],
      [52,53,54,55,56,57,58,59,109,110,111,112,113,114,115,116,117,118],
      [51],
      [49,50],
      [48],
      [40,41,42,43,44,45,46,47,96,97,98,99,100,101,102,103,104,105,106,107,108],
      [38,39,93,94,95,126,127],
      [30,31,32,33,34,35,36,37,83,84,85,86,87,88,89,90,91,92,125],
      [29],
      [27,28],
      [19,20,21,22,23,24,25,26,70,71,72,73,74,75,76,77,78,79,80,81,82,120,121,122,123,124],
      [11,12,13,14,15,16,17,18,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,109,110,111,112,113,114,115,116,117,118,119],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,125,126,127]];

obj0.userData.polytoperoot = [[0.881342137750626,-0.234749984132955,-0.399615927794714],
      [2.61803398874989,0,-1],
      [0.336642740903247,0,0.881342137750625]];

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
