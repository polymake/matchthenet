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
obj0.userData.points.push(new PMPoint(0.571496, 0, 0));
obj0.userData.points.push(new PMPoint(0.3449, 0.524654, 0));
obj0.userData.points.push(new PMPoint(-0.28721, 0.564501, 0));
obj0.userData.points.push(new PMPoint(-0.28721, -0.564501, 0));
obj0.userData.points.push(new PMPoint(0.3449, -0.524654, 0));
obj0.userData.points.push(new PMPoint(0.963304, 0.416047, 0));
obj0.userData.points.push(new PMPoint(0.749256, 1.01215, 0));
obj0.userData.points.push(new PMPoint(-0.691563, 0.0409554, 0));
obj0.userData.points.push(new PMPoint(-0.35183, -0.526656, 0));
obj0.userData.points.push(new PMPoint(0.688891, 1.05646, 0));
obj0.userData.points.push(new PMPoint(0.0330998, 1.1433, 0));
obj0.userData.points.push(new PMPoint(0.749256, -1.01215, 0));
obj0.userData.points.push(new PMPoint(0.963304, -0.416047, 0));
obj0.userData.points.push(new PMPoint(0.0330998, -1.1433, 0));
obj0.userData.points.push(new PMPoint(0.688891, -1.05646, 0));
obj0.userData.points.push(new PMPoint(1.10879, -0.194733, 0));
obj0.userData.points.push(new PMPoint(1.57116, 0.238122, 0));
obj0.userData.points.push(new PMPoint(1.58792, 0.311111, 0));
obj0.userData.points.push(new PMPoint(1.40761, 0.94758, 0));
obj0.userData.points.push(new PMPoint(-0.654271, 0.678168, 0));
obj0.userData.points.push(new PMPoint(-0.914811, 0.408537, 0));
obj0.userData.points.push(new PMPoint(-0.791684, 0.0543865, 0));
obj0.userData.points.push(new PMPoint(-0.79257, 0.0394354, 0));
obj0.userData.points.push(new PMPoint(-0.956636, -0.297707, 0));
obj0.userData.points.push(new PMPoint(-0.729741, -0.596205, 0));
obj0.userData.points.push(new PMPoint(-0.0189279, 1.22989, 0));
obj0.userData.points.push(new PMPoint(-0.39287, 1.2025, 0));
obj0.userData.points.push(new PMPoint(-0.537099, 0.856408, 0));
obj0.userData.points.push(new PMPoint(0.602899, 1.43098, 0));
obj0.userData.points.push(new PMPoint(0.238904, 1.52092, 0));
obj0.userData.points.push(new PMPoint(-0.0055533, 1.23663, 0));
obj0.userData.points.push(new PMPoint(1.40761, -0.94758, 0));
obj0.userData.points.push(new PMPoint(1.58792, -0.311111, 0));
obj0.userData.points.push(new PMPoint(-0.537099, -0.856408, 0));
obj0.userData.points.push(new PMPoint(-0.39287, -1.2025, 0));
obj0.userData.points.push(new PMPoint(-0.0189279, -1.22989, 0));
obj0.userData.points.push(new PMPoint(-0.0055533, -1.23663, 0));
obj0.userData.points.push(new PMPoint(0.238904, -1.52092, 0));
obj0.userData.points.push(new PMPoint(0.602899, -1.43098, 0));
obj0.userData.points.push(new PMPoint(1.46648, 1.02968, 0));
obj0.userData.points.push(new PMPoint(1.29307, 1.36211, 0));
obj0.userData.points.push(new PMPoint(0.918157, 1.35729, 0));
obj0.userData.points.push(new PMPoint(1.89764, 0.538547, 0));
obj0.userData.points.push(new PMPoint(1.83589, 0.908371, 0));
obj0.userData.points.push(new PMPoint(1.47797, 1.02007, 0));
obj0.userData.points.push(new PMPoint(-0.777398, 1.03232, 0));
obj0.userData.points.push(new PMPoint(-1.15824, 1.08341, 0));
obj0.userData.points.push(new PMPoint(-1.01131, 0.438419, 0));
obj0.userData.points.push(new PMPoint(-1.01493, 0.421968, 0));
obj0.userData.points.push(new PMPoint(-1.41929, -0.101578, 0));
obj0.userData.points.push(new PMPoint(-1.05222, -0.215245, 0));
obj0.userData.points.push(new PMPoint(-1.33455, -0.367255, 0));
obj0.userData.points.push(new PMPoint(-0.994813, -0.934867, 0));
obj0.userData.points.push(new PMPoint(-0.893807, -0.933347, 0));
obj0.userData.points.push(new PMPoint(0.125301, 1.57598, 0));
obj0.userData.points.push(new PMPoint(0.0596074, 1.65272, 0));
obj0.userData.points.push(new PMPoint(-0.590776, 1.53187, 0));
obj0.userData.points.push(new PMPoint(0.847356, 1.71527, 0));
obj0.userData.points.push(new PMPoint(0.700325, 2.07029, 0));
obj0.userData.points.push(new PMPoint(0.216297, 1.61938, 0));
obj0.userData.points.push(new PMPoint(0.918157, -1.35729, 0));
obj0.userData.points.push(new PMPoint(1.29307, -1.36211, 0));
obj0.userData.points.push(new PMPoint(1.46648, -1.02968, 0));
obj0.userData.points.push(new PMPoint(1.47797, -1.02007, 0));
obj0.userData.points.push(new PMPoint(1.83589, -0.908371, 0));
obj0.userData.points.push(new PMPoint(1.89764, -0.538547, 0));
obj0.userData.points.push(new PMPoint(-0.444898, -1.28909, 0));
obj0.userData.points.push(new PMPoint(-0.124588, -1.86789, 0));
obj0.userData.points.push(new PMPoint(0.125301, -1.57598, 0));
obj0.userData.points.push(new PMPoint(0.152912, -1.89543, 0));
obj0.userData.points.push(new PMPoint(0.808703, -1.8086, 0));
obj0.userData.points.push(new PMPoint(0.847356, -1.71527, 0));
obj0.userData.points.push(new PMPoint(1.84139, 1.03449, 0));
obj0.userData.points.push(new PMPoint(1.88579, 1.12523, 0));
obj0.userData.points.push(new PMPoint(1.51698, 1.67439, 0));
obj0.userData.points.push(new PMPoint(2.25555, 0.426848, 0));
obj0.userData.points.push(new PMPoint(2.52317, 0.70259, 0));
obj0.userData.points.push(new PMPoint(1.91731, 0.968161, 0));
obj0.userData.points.push(new PMPoint(-1.65607, 0.691843, 0));
obj0.userData.points.push(new PMPoint(-1.5581, 0.0661002, 0));
obj0.userData.points.push(new PMPoint(-1.68638, -0.893912, 0));
obj0.userData.points.push(new PMPoint(-1.39917, -1.45841, 0));
obj0.userData.points.push(new PMPoint(0.184609, 2.30232, 0));
obj0.userData.points.push(new PMPoint(-0.428689, 2.14415, 0));
obj0.userData.points.push(new PMPoint(1.35193, -1.44421, 0));
obj0.userData.points.push(new PMPoint(2.01029, -1.37964, 0));
obj0.userData.points.push(new PMPoint(1.84139, -1.03449, 0));
obj0.userData.points.push(new PMPoint(0.496903, -2.42724, 0));
obj0.userData.points.push(new PMPoint(1.12901, -2.3874, 0));
obj0.userData.points.push(new PMPoint(2.53171, 1.26804, 0));
obj0.userData.points.push(new PMPoint(2.14333, 1.76835, 0));
obj0.userData.points.push(new PMPoint(-2.19938, 0.869092, 0));
obj0.userData.points.push(new PMPoint(-2.14668, 0.300031, 0));
obj0.userData.points.push(new PMPoint(-1.74859, 1.31286, 0));
obj0.userData.points.push(new PMPoint(-2.17466, 0.93198, 0));
obj0.userData.points.push(new PMPoint(-2.25787, -0.893912, 0));
obj0.userData.points.push(new PMPoint(-2.03128, -1.41857, 0));
obj0.userData.points.push(new PMPoint(-0.263518, 2.7499, 0));
obj0.userData.points.push(new PMPoint(-0.806833, 2.57265, 0));
obj0.userData.points.push(new PMPoint(0.270307, -2.9519, 0));
obj0.userData.points.push(new PMPoint(0.841803, -2.9519, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 4, 14, 5, 15, 14, 15, 1, 16, 6, 17, 16, 17, 6, 18, 7, 19, 18, 19, 3, 20, 20, 21, 8, 22, 21, 22, 8, 23, 23, 24, 9, 25, 24, 25, 11, 26, 26, 27, 3, 28, 27, 28, 10, 29, 29, 30, 11, 31, 30, 31, 12, 32, 13, 33, 32, 33, 4, 34, 34, 35, 14, 36, 35, 36, 14, 37, 37, 38, 15, 39, 38, 39, 19, 40, 40, 41, 7, 42, 41, 42, 18, 43, 43, 44, 19, 45, 44, 45, 20, 46, 46, 47, 21, 48, 47, 48, 21, 49, 49, 50, 22, 51, 50, 51, 24, 52, 52, 53, 25, 54, 53, 54, 26, 55, 55, 56, 27, 57, 56, 57, 29, 58, 58, 59, 30, 60, 59, 60, 12, 61, 61, 62, 32, 63, 62, 63, 32, 64, 64, 65, 33, 66, 65, 66, 35, 67, 67, 68, 36, 69, 68, 69, 38, 70, 70, 71, 39, 72, 71, 72, 40, 73, 73, 74, 41, 75, 74, 75, 43, 76, 76, 77, 44, 78, 77, 78, 47, 79, 48, 80, 79, 80, 52, 81, 53, 82, 81, 82, 56, 83, 57, 84, 83, 84, 62, 85, 85, 86, 63, 87, 86, 87, 70, 88, 71, 89, 88, 89, 74, 90, 75, 91, 90, 91, 79, 92, 80, 93, 92, 93, 47, 94, 79, 95, 94, 95, 81, 96, 82, 97, 96, 97, 83, 98, 84, 99, 98, 99, 88, 100, 89, 101, 100, 101];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [3, 2, 10, 11], [6, 1, 16, 17], [8, 3, 20, 21, 22], [5, 4, 14, 15], [3, 11, 26, 27, 28], [9, 8, 23, 24, 25], [7, 6, 18, 19], [4, 34, 35, 36, 14], [11, 10, 29, 30, 31], [33, 13, 12, 32], [7, 19, 40, 41, 42], [14, 37, 38, 39, 15], [32, 12, 61, 62, 63], [19, 18, 43, 44, 45], [33, 32, 64, 65, 66], [20, 46, 47, 48, 21], [26, 55, 56, 57, 27], [22, 21, 49, 50, 51], [25, 24, 52, 53, 54], [30, 29, 58, 59, 60], [40, 73, 74, 75, 41], [35, 67, 68, 69, 36], [72, 39, 38, 70, 71], [44, 43, 76, 77, 78], [63, 62, 85, 86, 87], [48, 47, 79, 80], [53, 52, 81, 82], [71, 70, 88, 89], [74, 90, 91, 75], [56, 83, 84, 57], [80, 79, 92, 93], [82, 81, 96, 97], [101, 89, 88, 100], [84, 83, 98, 99], [47, 94, 95, 79]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[89,88],
      [84,83],
      [82,81],
      [79,47],
      [80,79],
      [75,74],
      [71,70],
      [63,62],
      [57,56],
      [53,52],
      [48,47],
      [44,43],
      [41,40],
      [39,38],
      [36,35],
      [33,32],
      [32,12],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [21,20],
      [19,18],
      [7,19],
      [15,14],
      [14,4],
      [13,12],
      [11,10],
      [3,11],
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

obj0.userData.angles = [2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.58300138997287,
      2.58300138997286,
      2.5351507732236,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.58300138997287,
      2.58300138997286,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.62346615257866,
      2.58300138997287,
      2.58300138997286,
      2.58300138997287,
      2.58300138997286,
      2.62346615257866,
      2.63564719798397,
      2.62346615257866,
      2.63564719798397,
      2.62346615257866,
      2.62346615257866,
      2.63564719798397,
      2.63564719798397];

obj0.userData.subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [90,91],
      [88,89,100,101],
      [85,86,87],
      [83,84,98,99],
      [81,82,96,97],
      [79,80,92,93,94,95],
      [76,77,78],
      [73,74,75,90,91],
      [70,71,72,88,89,100,101],
      [67,68,69],
      [64,65,66],
      [61,62,63,85,86,87],
      [58,59,60],
      [55,56,57,83,84,98,99],
      [52,53,54,81,82,96,97],
      [49,50,51],
      [46,47,48,79,80,92,93,94,95],
      [43,44,45,76,77,78],
      [40,41,42,73,74,75,90,91],
      [37,38,39,70,71,72,88,89,100,101],
      [34,35,36,67,68,69],
      [32,33,61,62,63,64,65,66,85,86,87],
      [29,30,31,58,59,60],
      [26,27,28,55,56,57,83,84,98,99],
      [23,24,25,52,53,54,81,82,96,97],
      [20,21,22,46,47,48,49,50,51,79,80,92,93,94,95],
      [18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [16,17],
      [14,15,34,35,36,37,38,39,67,68,69,70,71,72,88,89,100,101],
      [12,13,32,33,61,62,63,64,65,66,85,86,87],
      [10,11,26,27,28,29,30,31,55,56,57,58,59,60,83,84,98,99],
      [8,9,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,79,80,81,82,92,93,94,95,96,97],
      [6,7,16,17,18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [4,5,12,13,14,15,32,33,34,35,36,37,38,39,61,62,63,64,65,66,67,68,69,70,71,72,85,86,87,88,89,100,101]];

obj0.userData.polytoperoot = [[-0.313934135342,-0.821890236554166,0],
      [0,-1.21670748175884,-0.138964239098803],
      [0.584815266375175,-0.0436256182449418,0.381966011250105]];

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
