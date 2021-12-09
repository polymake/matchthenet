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
obj0.userData.points.push(new PMPoint(0.543418, 0, 0));
obj0.userData.points.push(new PMPoint(0.481148, 1.17802, 0));
obj0.userData.points.push(new PMPoint(0.205475, -0.503074, 0));
obj0.userData.points.push(new PMPoint(0.524783, -0.352527, 0));
obj0.userData.points.push(new PMPoint(1.08381, 0.0572902, 0));
obj0.userData.points.push(new PMPoint(-0.388032, 0.38044, 0));
obj0.userData.points.push(new PMPoint(0.826441, -0.535898, 0));
obj0.userData.points.push(new PMPoint(1.08381, -0.0572902, 0));
obj0.userData.points.push(new PMPoint(-0.388032, -0.38044, 0));
obj0.userData.points.push(new PMPoint(-0.127926, -0.619118, 0));
obj0.userData.points.push(new PMPoint(0.462841, -0.981681, 0));
obj0.userData.points.push(new PMPoint(0.808602, -0.562453, 0));
obj0.userData.points.push(new PMPoint(1.42957, 0.476518, 0));
obj0.userData.points.push(new PMPoint(-0.621525, 0.115669, 0));
obj0.userData.points.push(new PMPoint(-0.498916, -0.215374, 0));
obj0.userData.points.push(new PMPoint(-0.733793, 0.799668, 0));
obj0.userData.points.push(new PMPoint(1.14575, -0.686445, 0));
obj0.userData.points.push(new PMPoint(1.42957, -0.476518, 0));
obj0.userData.points.push(new PMPoint(-0.183622, -0.967716, 0));
obj0.userData.points.push(new PMPoint(0.356767, -1.02501, 0));
obj0.userData.points.push(new PMPoint(-0.733793, -0.799668, 0));
obj0.userData.points.push(new PMPoint(-0.214951, -0.961242, 0));
obj0.userData.points.push(new PMPoint(0.981682, -1.14326, 0));
obj0.userData.points.push(new PMPoint(1.06871, -0.801132, 0));
obj0.userData.points.push(new PMPoint(1.60265, -0.104285, 0));
obj0.userData.points.push(new PMPoint(1.68967, 0.23784, 0));
obj0.userData.points.push(new PMPoint(1.72921, 0.929862, 0));
obj0.userData.points.push(new PMPoint(-0.814009, 0.717851, 0));
obj0.userData.points.push(new PMPoint(-0.965301, 0.195918, 0));
obj0.userData.points.push(new PMPoint(-0.971155, 0.164468, 0));
obj0.userData.points.push(new PMPoint(-1.01776, -0.376948, 0));
obj0.userData.points.push(new PMPoint(-0.68719, 1.34108, 0));
obj0.userData.points.push(new PMPoint(1.19622, -1.03584, 0));
obj0.userData.points.push(new PMPoint(1.72921, -0.929862, 0));
obj0.userData.points.push(new PMPoint(-0.245892, -2.14573, 0));
obj0.userData.points.push(new PMPoint(-0.624666, -2.06747, 0));
obj0.userData.points.push(new PMPoint(0.571968, -2.24948, 0));
obj0.userData.points.push(new PMPoint(2.02307, 0.353884, 0));
obj0.userData.points.push(new PMPoint(1.8176, 0.856958, 0));
obj0.userData.points.push(new PMPoint(2.13563, -0.21026, 0));
obj0.userData.points.push(new PMPoint(2.03221, 0.323226, 0));
obj0.userData.points.push(new PMPoint(1.62578, 1.46335, 0));
obj0.userData.points.push(new PMPoint(-1.3544, 0.660561, 0));
obj0.userData.points.push(new PMPoint(-1.2987, 0.311963, 0));
obj0.userData.points.push(new PMPoint(-1.32398, 0.176134, 0));
obj0.userData.points.push(new PMPoint(-1.50136, -0.129088, 0));
obj0.userData.points.push(new PMPoint(-0.583768, 1.87457, 0));
obj0.userData.points.push(new PMPoint(-1.04002, 1.35275, 0));
obj0.userData.points.push(new PMPoint(-1.21739, 1.04753, 0));
obj0.userData.points.push(new PMPoint(1.48703, -2.17909, 0));
obj0.userData.points.push(new PMPoint(-1.21739, -1.04753, 0));
obj0.userData.points.push(new PMPoint(2.34238, 0.504431, 0));
obj0.userData.points.push(new PMPoint(2.36102, 0.856958, 0));
obj0.userData.points.push(new PMPoint(2.59041, 0.0872031, 0));
obj0.userData.points.push(new PMPoint(2.38184, 0.372024, 0));
obj0.userData.points.push(new PMPoint(1.46669, 1.98296, 0));
obj0.userData.points.push(new PMPoint(2.18398, 1.22732, 0));
obj0.userData.points.push(new PMPoint(1.97541, 1.51215, 0));
obj0.userData.points.push(new PMPoint(-1.88574, 0.546619, 0));
obj0.userData.points.push(new PMPoint(-1.57935, 0.0978112, 0));
obj0.userData.points.push(new PMPoint(-1.11675, 1.76859, 0));
obj0.userData.points.push(new PMPoint(-1.02973, 1.42647, 0));
obj0.userData.points.push(new PMPoint(-1.22483, 1.65353, 0));
obj0.userData.points.push(new PMPoint(-1.67216, 1.34499, 0));
obj0.userData.points.push(new PMPoint(2.18398, -1.22732, 0));
obj0.userData.points.push(new PMPoint(-1.67216, -1.34499, 0));
obj0.userData.points.push(new PMPoint(2.64404, 0.32106, 0));
obj0.userData.points.push(new PMPoint(2.90141, 0.799668, 0));
obj0.userData.points.push(new PMPoint(1.95741, 1.58437, 0));
obj0.userData.points.push(new PMPoint(2.00788, 1.93376, 0));
obj0.userData.points.push(new PMPoint(2.60486, 1.57107, 0));
obj0.userData.points.push(new PMPoint(2.12749, 1.83073, 0));
obj0.userData.points.push(new PMPoint(-0.883405, 2.32791, 0));
obj0.userData.points.push(new PMPoint(-1.16722, 2.11799, 0));
obj0.userData.points.push(new PMPoint(-1.44032, 1.93314, 0));
obj0.userData.points.push(new PMPoint(-1.78865, 1.87578, 0));
obj0.userData.points.push(new PMPoint(2.60486, -1.57107, 0));
obj0.userData.points.push(new PMPoint(-1.78865, -1.87578, 0));
obj0.userData.points.push(new PMPoint(2.66473, 2.11118, 0));
obj0.userData.points.push(new PMPoint(2.3123, 2.13151, 0));
obj0.userData.points.push(new PMPoint(2.66473, -2.11118, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 4, 3, 4, 1, 5, 2, 5, 0, 6, 2, 6, 4, 7, 1, 8, 7, 8, 0, 9, 3, 10, 9, 10, 3, 11, 4, 12, 11, 12, 2, 13, 5, 13, 6, 14, 0, 15, 14, 15, 2, 16, 6, 16, 7, 17, 8, 18, 17, 18, 10, 19, 3, 20, 19, 20, 9, 21, 10, 22, 21, 22, 11, 23, 12, 24, 23, 24, 5, 25, 13, 26, 25, 26, 2, 27, 13, 27, 6, 28, 14, 29, 28, 29, 14, 30, 15, 31, 30, 31, 2, 32, 16, 32, 17, 33, 18, 34, 33, 34, 19, 35, 20, 35, 21, 36, 22, 36, 11, 37, 23, 37, 26, 38, 13, 39, 38, 39, 25, 40, 26, 41, 40, 41, 2, 42, 27, 42, 28, 43, 29, 44, 43, 44, 30, 45, 31, 46, 45, 46, 2, 47, 32, 47, 32, 48, 16, 49, 48, 49, 33, 50, 34, 50, 21, 51, 36, 51, 38, 52, 39, 53, 52, 53, 40, 54, 41, 55, 54, 55, 2, 56, 42, 56, 27, 57, 42, 58, 57, 58, 43, 59, 44, 60, 59, 60, 47, 61, 32, 62, 61, 62, 48, 63, 49, 64, 63, 64, 34, 65, 50, 65, 36, 66, 51, 66, 52, 67, 53, 68, 67, 68, 42, 69, 56, 70, 69, 70, 57, 71, 58, 72, 71, 72, 47, 73, 61, 74, 73, 74, 63, 75, 64, 76, 75, 76, 50, 77, 65, 77, 36, 78, 66, 78, 71, 79, 72, 80, 79, 80, 50, 81, 77, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [4, 1, 0, 3], [2, 1, 5], [0, 2, 6], [8, 1, 4, 7], [0, 9, 10, 3], [2, 5, 13], [12, 4, 3, 11], [0, 6, 14, 15], [8, 7, 17, 18], [20, 3, 10, 19], [6, 2, 16], [13, 5, 25, 26], [12, 11, 23, 24], [6, 28, 29, 14], [9, 21, 22, 10], [2, 13, 27], [20, 19, 35], [16, 2, 32], [15, 14, 30, 31], [13, 26, 38, 39], [18, 17, 33, 34], [23, 11, 37], [29, 28, 43, 44], [22, 21, 36], [2, 27, 42], [26, 25, 40, 41], [32, 2, 47], [16, 32, 48, 49], [31, 30, 45, 46], [39, 38, 52, 53], [34, 33, 50], [2, 42, 56], [21, 51, 36], [42, 27, 57, 58], [41, 40, 54, 55], [32, 47, 61, 62], [44, 43, 59, 60], [34, 50, 65], [42, 69, 70, 56], [49, 48, 63, 64], [52, 67, 68, 53], [61, 47, 73, 74], [51, 66, 36], [58, 57, 71, 72], [64, 63, 75, 76], [65, 50, 77], [66, 78, 36], [72, 71, 79, 80], [77, 50, 81]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[77,50],
      [72,71],
      [36,66],
      [65,50],
      [64,63],
      [61,47],
      [58,57],
      [56,42],
      [53,52],
      [36,51],
      [34,50],
      [49,48],
      [32,47],
      [44,43],
      [42,27],
      [2,42],
      [41,40],
      [39,38],
      [36,21],
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

obj0.userData.angles = [2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658];

obj0.userData.subtrees = [[81],
      [79,80],
      [78],
      [77,81],
      [75,76],
      [73,74],
      [71,72,79,80],
      [69,70],
      [67,68],
      [66,78],
      [65,77,81],
      [63,64,75,76],
      [61,62,73,74],
      [59,60],
      [57,58,71,72,79,80],
      [56,69,70],
      [54,55],
      [52,53,67,68],
      [51,66,78],
      [50,65,77,81],
      [48,49,63,64,75,76],
      [47,61,62,73,74],
      [45,46],
      [43,44,59,60],
      [42,56,57,58,69,70,71,72,79,80],
      [40,41,54,55],
      [38,39,52,53,67,68],
      [37],
      [36,51,66,78],
      [35],
      [33,34,50,65,77,81],
      [32,47,48,49,61,62,63,64,73,74,75,76],
      [30,31,45,46],
      [28,29,43,44,59,60],
      [27,42,56,57,58,69,70,71,72,79,80],
      [25,26,38,39,40,41,52,53,54,55,67,68],
      [23,24,37],
      [21,22,36,51,66,78],
      [19,20,35],
      [17,18,33,34,50,65,77,81],
      [16,32,47,48,49,61,62,63,64,73,74,75,76],
      [14,15,28,29,30,31,43,44,45,46,59,60],
      [13,25,26,27,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,79,80],
      [11,12,23,24,37],
      [9,10,19,20,21,22,35,36,51,66,78],
      [7,8,17,18,33,34,50,65,77,81],
      [6,14,15,16,28,29,30,31,32,43,44,45,46,47,48,49,59,60,61,62,63,64,73,74,75,76],
      [5,13,25,26,27,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,79,80],
      [3,4,7,8,9,10,11,12,17,18,19,20,21,22,23,24,33,34,35,36,37,50,51,65,66,77,78,81]];

obj0.userData.polytoperoot = [[0,-0.855747051253819,-0.528880763447358],
      [-0.240738579562098,-1.01978498783179,-0.240738579562098],
      [-0.569401310833123,0.127322003750035,0.0300566479164915]];

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
