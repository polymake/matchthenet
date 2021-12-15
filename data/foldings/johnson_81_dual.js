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
obj0.userData.points.push(new PMPoint(0.500273, 0, 0));
obj0.userData.points.push(new PMPoint(0.451988, 1.10039, 0));
obj0.userData.points.push(new PMPoint(0.451988, -1.10039, 0));
obj0.userData.points.push(new PMPoint(0.998624, 0.0438202, 0));
obj0.userData.points.push(new PMPoint(-0.370196, 0.352549, 0));
obj0.userData.points.push(new PMPoint(0.998624, -0.0438202, 0));
obj0.userData.points.push(new PMPoint(-0.370196, -0.352549, 0));
obj0.userData.points.push(new PMPoint(1.33652, 0.42744, 0));
obj0.userData.points.push(new PMPoint(-0.590971, 0.0933631, 0));
obj0.userData.points.push(new PMPoint(-0.460847, -0.221258, 0));
obj0.userData.points.push(new PMPoint(-0.718176, 0.763599, 0));
obj0.userData.points.push(new PMPoint(1.33652, -0.42744, 0));
obj0.userData.points.push(new PMPoint(-0.718176, -0.763599, 0));
obj0.userData.points.push(new PMPoint(1.47708, -0.136221, 0));
obj0.userData.points.push(new PMPoint(1.57915, 0.188589, 0));
obj0.userData.points.push(new PMPoint(1.64715, 0.86739, 0));
obj0.userData.points.push(new PMPoint(-0.789638, 0.690365, 0));
obj0.userData.points.push(new PMPoint(-0.936886, 0.162947, 0));
obj0.userData.points.push(new PMPoint(-0.94149, 0.133803, 0));
obj0.userData.points.push(new PMPoint(-0.964001, -0.413321, 0));
obj0.userData.points.push(new PMPoint(-0.661186, 1.31657, 0));
obj0.userData.points.push(new PMPoint(1.64715, -0.86739, 0));
obj0.userData.points.push(new PMPoint(-0.661186, -1.31657, 0));
obj0.userData.points.push(new PMPoint(1.91764, 0.288205, 0));
obj0.userData.points.push(new PMPoint(1.72476, 0.800698, 0));
obj0.userData.points.push(new PMPoint(1.99512, -0.283473, 0));
obj0.userData.points.push(new PMPoint(1.92478, 0.259577, 0));
obj0.userData.points.push(new PMPoint(1.54195, 1.41325, 0));
obj0.userData.points.push(new PMPoint(-1.34945, 0.638055, 0));
obj0.userData.points.push(new PMPoint(-1.28271, 0.27094, 0));
obj0.userData.points.push(new PMPoint(-1.30377, 0.137679, 0));
obj0.userData.points.push(new PMPoint(-1.48043, -0.190983, 0));
obj0.userData.points.push(new PMPoint(-0.518818, 1.87295, 0));
obj0.userData.points.push(new PMPoint(-1.03269, 1.33824, 0));
obj0.userData.points.push(new PMPoint(-1.22193, 1.01332, 0));
obj0.userData.points.push(new PMPoint(1.54195, -1.41325, 0));
obj0.userData.points.push(new PMPoint(-0.518818, -1.87295, 0));
obj0.userData.points.push(new PMPoint(-1.22193, -1.01332, 0));
obj0.userData.points.push(new PMPoint(-1.03269, -1.33824, 0));
obj0.userData.points.push(new PMPoint(2.25267, 0.426074, 0));
obj0.userData.points.push(new PMPoint(2.287, 0.797625, 0));
obj0.userData.points.push(new PMPoint(2.49009, -0.0167547, 0));
obj0.userData.points.push(new PMPoint(2.28532, 0.29517, 0));
obj0.userData.points.push(new PMPoint(1.35139, 1.95502, 0));
obj0.userData.points.push(new PMPoint(2.1271, 1.16028, 0));
obj0.userData.points.push(new PMPoint(1.91013, 1.46737, 0));
obj0.userData.points.push(new PMPoint(-1.92762, 0.506865, 0));
obj0.userData.points.push(new PMPoint(-1.5706, 0.0335556, 0));
obj0.userData.points.push(new PMPoint(-1.10138, 1.79559, 0));
obj0.userData.points.push(new PMPoint(-1.01885, 1.41934, 0));
obj0.userData.points.push(new PMPoint(-1.23015, 1.66896, 0));
obj0.userData.points.push(new PMPoint(-1.72393, 1.32873, 0));
obj0.userData.points.push(new PMPoint(1.35139, -1.95502, 0));
obj0.userData.points.push(new PMPoint(1.91013, -1.46737, 0));
obj0.userData.points.push(new PMPoint(2.1271, -1.16028, 0));
obj0.userData.points.push(new PMPoint(-1.01885, -1.41934, 0));
obj0.userData.points.push(new PMPoint(-1.10138, -1.79559, 0));
obj0.userData.points.push(new PMPoint(-1.72393, -1.32873, 0));
obj0.userData.points.push(new PMPoint(-1.23015, -1.66896, 0));
obj0.userData.points.push(new PMPoint(2.56024, 0.214819, 0));
obj0.userData.points.push(new PMPoint(2.87444, 0.717582, 0));
obj0.userData.points.push(new PMPoint(1.88924, 1.54695, 0));
obj0.userData.points.push(new PMPoint(1.93849, 1.92898, 0));
obj0.userData.points.push(new PMPoint(2.59954, 1.51845, 0));
obj0.userData.points.push(new PMPoint(2.07786, 1.81412, 0));
obj0.userData.points.push(new PMPoint(-0.799617, 2.3892, 0));
obj0.userData.points.push(new PMPoint(-1.13122, 2.18426, 0));
obj0.userData.points.push(new PMPoint(-1.46492, 1.98016, 0));
obj0.userData.points.push(new PMPoint(-1.85537, 1.91948, 0));
obj0.userData.points.push(new PMPoint(1.93849, -1.92898, 0));
obj0.userData.points.push(new PMPoint(1.88924, -1.54695, 0));
obj0.userData.points.push(new PMPoint(2.07786, -1.81412, 0));
obj0.userData.points.push(new PMPoint(2.59954, -1.51845, 0));
obj0.userData.points.push(new PMPoint(-1.13122, -2.18426, 0));
obj0.userData.points.push(new PMPoint(-0.799617, -2.3892, 0));
obj0.userData.points.push(new PMPoint(-1.85537, -1.91948, 0));
obj0.userData.points.push(new PMPoint(-1.46492, -1.98016, 0));
obj0.userData.points.push(new PMPoint(2.67873, 2.11844, 0));
obj0.userData.points.push(new PMPoint(2.28447, 2.14468, 0));
obj0.userData.points.push(new PMPoint(2.28447, -2.14468, 0));
obj0.userData.points.push(new PMPoint(2.67873, -2.11844, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 1, 4, 2, 4, 0, 5, 2, 5, 1, 6, 3, 6, 0, 7, 3, 7, 2, 8, 4, 8, 5, 9, 0, 10, 9, 10, 2, 11, 5, 11, 3, 12, 6, 12, 3, 13, 7, 13, 4, 14, 8, 15, 14, 15, 2, 16, 8, 16, 5, 17, 9, 18, 17, 18, 9, 19, 10, 20, 19, 20, 2, 21, 11, 21, 3, 22, 12, 22, 3, 23, 13, 23, 15, 24, 8, 25, 24, 25, 14, 26, 15, 27, 26, 27, 2, 28, 16, 28, 17, 29, 18, 30, 29, 30, 19, 31, 20, 32, 31, 32, 2, 33, 21, 33, 21, 34, 11, 35, 34, 35, 3, 36, 22, 36, 3, 37, 23, 37, 13, 38, 23, 39, 38, 39, 24, 40, 25, 41, 40, 41, 26, 42, 27, 43, 42, 43, 2, 44, 28, 44, 16, 45, 28, 46, 45, 46, 29, 47, 30, 48, 47, 48, 33, 49, 21, 50, 49, 50, 34, 51, 35, 52, 51, 52, 3, 53, 36, 53, 36, 54, 22, 55, 54, 55, 23, 56, 37, 57, 56, 57, 38, 58, 39, 59, 58, 59, 40, 60, 41, 61, 60, 61, 28, 62, 44, 63, 62, 63, 45, 64, 46, 65, 64, 65, 33, 66, 49, 67, 66, 67, 51, 68, 52, 69, 68, 69, 53, 70, 36, 71, 70, 71, 54, 72, 55, 73, 72, 73, 57, 74, 37, 75, 74, 75, 58, 76, 59, 77, 76, 77, 64, 78, 65, 79, 78, 79, 72, 80, 73, 81, 80, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [2, 1, 4], [0, 2, 5], [6, 1, 3], [0, 7, 3], [2, 4, 8], [0, 5, 9, 10], [6, 3, 12], [5, 2, 11], [8, 4, 14, 15], [5, 17, 18, 9], [7, 13, 3], [2, 8, 16], [11, 2, 21], [10, 9, 19, 20], [8, 15, 24, 25], [12, 3, 22], [18, 17, 29, 30], [3, 13, 23], [2, 16, 28], [15, 14, 26, 27], [21, 2, 33], [11, 21, 34, 35], [20, 19, 31, 32], [25, 24, 40, 41], [22, 3, 36], [2, 28, 44], [3, 23, 37], [13, 38, 39, 23], [28, 16, 45, 46], [27, 26, 42, 43], [21, 33, 49, 50], [36, 3, 53], [30, 29, 47, 48], [22, 36, 54, 55], [28, 62, 63, 44], [23, 56, 57, 37], [35, 34, 51, 52], [40, 60, 61, 41], [49, 33, 66, 67], [36, 53, 70, 71], [38, 58, 59, 39], [46, 45, 64, 65], [37, 57, 74, 75], [52, 51, 68, 69], [55, 54, 72, 73], [58, 76, 77, 59], [65, 64, 78, 79], [73, 72, 80, 81]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[73,72],
      [65,64],
      [59,58],
      [37,57],
      [55,54],
      [36,53],
      [52,51],
      [49,33],
      [46,45],
      [44,28],
      [41,40],
      [39,38],
      [37,23],
      [22,36],
      [36,3],
      [35,34],
      [21,33],
      [30,29],
      [28,16],
      [2,28],
      [27,26],
      [25,24],
      [23,13],
      [3,23],
      [22,3],
      [11,21],
      [21,2],
      [20,19],
      [18,17],
      [2,16],
      [15,14],
      [8,15],
      [3,13],
      [12,3],
      [11,2],
      [10,9],
      [9,5],
      [2,8],
      [8,4],
      [3,7],
      [6,3],
      [5,2],
      [0,5],
      [2,4],
      [3,0],
      [1,3],
      [0,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.65060716463554,
      2.65060716463554,
      2.65060716463554,
      2.65836365045936,
      2.667529400532,
      2.67452478607167,
      2.65060716463554,
      2.65836365045936,
      2.667529400532,
      2.67452478607167,
      2.67452478607167,
      2.667529400532,
      2.67452478607167,
      2.68521498282077,
      2.687565840844,
      2.667529400532,
      2.67452478607167,
      2.67452478607167,
      2.68521498282077,
      2.687565840844,
      2.69401558477236,
      2.69401558477236,
      2.68521498282077,
      2.687565840844,
      2.70105650793354,
      2.68521498282077,
      2.687565840844,
      2.69401558477236,
      2.69401558477236,
      2.70105650793354,
      2.71005884798023,
      2.71005884798023,
      2.70105650793354,
      2.71535391243918,
      2.70105650793354,
      2.71005884798023,
      2.71005884798023,
      2.71535391243918,
      2.71858569304909,
      2.71535391243918,
      2.72532188561006,
      2.71535391243918,
      2.71858569304909,
      2.72532188561006,
      2.72532188561006,
      2.72880342853854,
      2.72532188561006,
      2.72880342853854,
      2.72880342853854];

obj0.userData.subtrees = [[80,81],
      [78,79],
      [76,77],
      [74,75],
      [72,73,80,81],
      [70,71],
      [68,69],
      [66,67],
      [64,65,78,79],
      [62,63],
      [60,61],
      [58,59,76,77],
      [56,57,74,75],
      [54,55,72,73,80,81],
      [53,70,71],
      [51,52,68,69],
      [49,50,66,67],
      [47,48],
      [45,46,64,65,78,79],
      [44,62,63],
      [42,43],
      [40,41,60,61],
      [38,39,58,59,76,77],
      [37,56,57,74,75],
      [36,53,54,55,70,71,72,73,80,81],
      [34,35,51,52,68,69],
      [33,49,50,66,67],
      [31,32],
      [29,30,47,48],
      [28,44,45,46,62,63,64,65,78,79],
      [26,27,42,43],
      [24,25,40,41,60,61],
      [23,37,38,39,56,57,58,59,74,75,76,77],
      [22,36,53,54,55,70,71,72,73,80,81],
      [21,33,34,35,49,50,51,52,66,67,68,69],
      [19,20,31,32],
      [17,18,29,30,47,48],
      [16,28,44,45,46,62,63,64,65,78,79],
      [14,15,24,25,26,27,40,41,42,43,60,61],
      [13,23,37,38,39,56,57,58,59,74,75,76,77],
      [12,22,36,53,54,55,70,71,72,73,80,81],
      [11,21,33,34,35,49,50,51,52,66,67,68,69],
      [9,10,17,18,19,20,29,30,31,32,47,48],
      [8,14,15,16,24,25,26,27,28,40,41,42,43,44,45,46,60,61,62,63,64,65,78,79],
      [7,13,23,37,38,39,56,57,58,59,74,75,76,77],
      [6,12,22,36,53,54,55,70,71,72,73,80,81],
      [5,9,10,11,17,18,19,20,21,29,30,31,32,33,34,35,47,48,49,50,51,52,66,67,68,69],
      [4,8,14,15,16,24,25,26,27,28,40,41,42,43,44,45,46,60,61,62,63,64,65,78,79],
      [3,6,7,12,13,22,23,36,37,38,39,53,54,55,56,57,58,59,70,71,72,73,74,75,76,77,80,81]];

obj0.userData.polytoperoot = [[0,-0.791517917065753,-0.489184975451156],
      [-0.238905393317343,-1.11574362625773,-0.238905393317343],
      [-0.570829241534209,0.116868928965093,0.0250242231135392]];

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
