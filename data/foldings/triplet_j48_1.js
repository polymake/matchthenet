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
obj0.userData.points.push(new PMPoint(0.553435, 0, 0));
obj0.userData.points.push(new PMPoint(0.724456, 0.526348, 0));
obj0.userData.points.push(new PMPoint(0.276717, 0.851649, 0));
obj0.userData.points.push(new PMPoint(-0.171021, 0.526348, 0));
obj0.userData.points.push(new PMPoint(0.276717, -0.479289, 0));
obj0.userData.points.push(new PMPoint(-0.228871, 1.07675, 0));
obj0.userData.points.push(new PMPoint(-0.541341, 0.115066, 0));
obj0.userData.points.push(new PMPoint(0.782305, 1.07675, 0));
obj0.userData.points.push(new PMPoint(1.09478, 0.115066, 0));
obj0.userData.points.push(new PMPoint(0.830152, -0.479289, 0));
obj0.userData.points.push(new PMPoint(-0.541341, -0.115066, 0));
obj0.userData.points.push(new PMPoint(-0.599191, -0.665469, 0));
obj0.userData.points.push(new PMPoint(-0.0936028, -0.890571, 0));
obj0.userData.points.push(new PMPoint(0.647038, 1.26293, 0));
obj0.userData.points.push(new PMPoint(0.37032, 1.74222, 0));
obj0.userData.points.push(new PMPoint(-0.171021, 1.62715, 0));
obj0.userData.points.push(new PMPoint(-0.770212, 1.19182, 0));
obj0.userData.points.push(new PMPoint(-1.04693, 0.712528, 0));
obj0.userData.points.push(new PMPoint(-0.676609, 0.301246, 0));
obj0.userData.points.push(new PMPoint(1.23004, 0.75145, 0));
obj0.userData.points.push(new PMPoint(1.2658, 0.641414, 0));
obj0.userData.points.push(new PMPoint(0.923755, -0.411282, 0));
obj0.userData.points.push(new PMPoint(0.553435, -0.958577, 0));
obj0.userData.points.push(new PMPoint(-0.541341, -1.21587, 0));
obj0.userData.points.push(new PMPoint(-1.04693, -0.340168, 0));
obj0.userData.points.push(new PMPoint(0.447738, -1.00564, 0));
obj0.userData.points.push(new PMPoint(0.923755, 1.74222, 0));
obj0.userData.points.push(new PMPoint(-0.676609, 1.40205, 0));
obj0.userData.points.push(new PMPoint(0, 2.1535, 0));
obj0.userData.points.push(new PMPoint(-1.32365, 1.19182, 0));
obj0.userData.points.push(new PMPoint(1.28789, 1.30185, 0));
obj0.userData.points.push(new PMPoint(1.63612, 0.230131, 0));
obj0.userData.points.push(new PMPoint(1.37149, -0.736583, 0));
obj0.userData.points.push(new PMPoint(1.81923, -0.411282, 0));
obj0.userData.points.push(new PMPoint(1.64821, 0.115066, 0));
obj0.userData.points.push(new PMPoint(1.10687, -0.958577, 0));
obj0.userData.points.push(new PMPoint(-0.0357531, -1.44097, 0));
obj0.userData.points.push(new PMPoint(-1.14053, -0.550403, 0));
obj0.userData.points.push(new PMPoint(-1.41725, -1.02969, 0));
obj0.userData.points.push(new PMPoint(-1.04693, -1.44097, 0));
obj0.userData.points.push(new PMPoint(0.077418, -1.41692, 0));
obj0.userData.points.push(new PMPoint(0.647038, 2.22151, 0));
obj0.userData.points.push(new PMPoint(-0.228871, 2.17756, 0));
obj0.userData.points.push(new PMPoint(-0.770212, 2.29262, 0));
obj0.userData.points.push(new PMPoint(-1.04693, 1.81333, 0));
obj0.userData.points.push(new PMPoint(0.541341, 2.26857, 0));
obj0.userData.points.push(new PMPoint(1.73563, 0.526348, 0));
obj0.userData.points.push(new PMPoint(2.10595, 0.93763, 0));
obj0.userData.points.push(new PMPoint(1.82923, 1.41692, 0));
obj0.userData.points.push(new PMPoint(2.18955, 0, 0));
obj0.userData.points.push(new PMPoint(1.87708, -0.961686, 0));
obj0.userData.points.push(new PMPoint(0.382414, -1.48493, 0));
obj0.userData.points.push(new PMPoint(0.830152, -1.81023, 0));
obj0.userData.points.push(new PMPoint(1.27789, -1.48493, 0));
obj0.userData.points.push(new PMPoint(-0.483491, -1.76628, 0));
obj0.userData.points.push(new PMPoint(-0.599191, -1.76628, 0));
obj0.userData.points.push(new PMPoint(-1.58827, -1.55604, 0));
obj0.userData.points.push(new PMPoint(1.20047, 2.22151, 0));
obj0.userData.points.push(new PMPoint(-0.399891, 2.70391, 0));
obj0.userData.points.push(new PMPoint(0.171021, 2.67985, 0));
obj0.userData.points.push(new PMPoint(2.38267, 1.41692, 0));
obj0.userData.points.push(new PMPoint(2.09595, -0.890571, 0));
obj0.userData.points.push(new PMPoint(2.63729, -0.775505, 0));
obj0.userData.points.push(new PMPoint(2.69514, -0.225102, 0));
obj0.userData.points.push(new PMPoint(0.324564, -2.03533, 0));
obj0.userData.points.push(new PMPoint(1.33574, -2.03533, 0));
obj0.userData.points.push(new PMPoint(-1.10478, -1.99138, 0));
obj0.userData.points.push(new PMPoint(-1.21795, -1.96732, 0));
obj0.userData.points.push(new PMPoint(1.37149, 2.74786, 0));
obj0.userData.points.push(new PMPoint(0.923755, 3.07316, 0));
obj0.userData.points.push(new PMPoint(0.476017, 2.74786, 0));
obj0.userData.points.push(new PMPoint(-0.941232, 2.81897, 0));
obj0.userData.points.push(new PMPoint(3.14288, -0.550403, 0));
obj0.userData.points.push(new PMPoint(0.382414, -2.58573, 0));
obj0.userData.points.push(new PMPoint(0.923755, -2.7008, 0));
obj0.userData.points.push(new PMPoint(1.20047, -2.22151, 0));
obj0.userData.points.push(new PMPoint(0.418167, 3.29826, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 5, 3, 6, 4, 6, 0, 7, 4, 7, 2, 8, 3, 8, 1, 9, 2, 9, 1, 10, 5, 10, 0, 11, 11, 12, 5, 13, 12, 13, 3, 14, 14, 15, 6, 16, 15, 16, 6, 17, 17, 18, 4, 19, 18, 19, 2, 20, 8, 20, 2, 21, 9, 21, 1, 22, 9, 22, 5, 23, 10, 23, 12, 24, 13, 24, 11, 25, 12, 25, 5, 26, 13, 26, 14, 27, 15, 27, 6, 28, 16, 28, 15, 29, 16, 29, 17, 30, 18, 30, 8, 31, 20, 31, 9, 32, 21, 32, 22, 33, 33, 34, 9, 35, 34, 35, 10, 36, 23, 36, 13, 37, 24, 37, 12, 38, 38, 39, 24, 40, 39, 40, 13, 41, 26, 41, 15, 42, 27, 42, 16, 43, 43, 44, 28, 45, 44, 45, 15, 46, 29, 46, 20, 47, 47, 48, 31, 49, 48, 49, 34, 50, 35, 50, 33, 51, 34, 51, 23, 52, 52, 53, 36, 54, 53, 54, 24, 55, 37, 55, 24, 56, 40, 56, 39, 57, 40, 57, 27, 58, 42, 58, 43, 59, 44, 59, 29, 60, 46, 60, 48, 61, 49, 61, 34, 62, 62, 63, 50, 64, 63, 64, 52, 65, 53, 65, 53, 66, 54, 66, 40, 67, 56, 67, 40, 68, 57, 68, 58, 69, 69, 70, 42, 71, 70, 71, 44, 72, 59, 72, 63, 73, 64, 73, 65, 74, 74, 75, 53, 76, 75, 76, 70, 77, 71, 77];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [10, 1, 5], [0, 5, 1], [20, 47, 48, 49, 31], [35, 34, 50], [8, 20, 31], [3, 14, 15, 16, 6], [4, 3, 6], [15, 14, 27], [34, 62, 63, 64, 50], [34, 33, 51], [49, 48, 61], [27, 58, 42], [15, 27, 42], [6, 16, 28], [13, 12, 24], [13, 24, 37], [16, 15, 29], [29, 15, 46], [16, 43, 44, 45, 28], [53, 52, 65], [37, 24, 55], [18, 17, 30], [53, 65, 74, 75, 76], [24, 40, 56], [71, 70, 77], [44, 59, 72], [39, 57, 40], [40, 57, 68], [56, 40, 67], [44, 43, 59], [29, 46, 60], [64, 63, 73], [38, 39, 40, 24, 12], [58, 69, 70, 71, 42], [54, 53, 66], [11, 25, 12], [26, 13, 41], [36, 23, 52, 53, 54], [4, 6, 17, 18, 19], [5, 13, 26], [0, 4, 7], [0, 11, 12, 13, 5], [36, 10, 23], [10, 5, 23], [3, 2, 8], [8, 2, 20], [21, 9, 32], [2, 9, 21], [9, 1, 22], [2, 1, 9], [9, 22, 33, 34, 35]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x497542, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[71,70],
      [53,65],
      [64,63],
      [44,59],
      [42,58],
      [40,57],
      [56,40],
      [54,53],
      [53,52],
      [50,34],
      [49,48],
      [29,46],
      [44,43],
      [42,27],
      [40,39],
      [24,40],
      [37,24],
      [36,23],
      [34,33],
      [35,34],
      [31,20],
      [29,15],
      [28,16],
      [15,27],
      [26,13],
      [24,12],
      [13,24],
      [10,23],
      [9,22],
      [21,9],
      [8,20],
      [18,17],
      [16,15],
      [6,16],
      [15,14],
      [5,13],
      [12,11],
      [13,12],
      [10,5],
      [9,1],
      [2,9],
      [8,2],
      [4,6],
      [6,3],
      [5,0],
      [1,5],
      [2,1],
      [3,2],
      [0,4],
      [4,3],
      [1,0]];

obj0.userData.angles = [2.48923451380541,
      2.48923451380543,
      2.48923451380543,
      2.77832866619901,
      2.48923451380542,
      3.04445334360208,
      2.77832866619901,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.77832866619902,
      2.76951626538485,
      3.04445334360209,
      2.48923451380543,
      2.76951626538485,
      2.77832866619901,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      3.0444533436021,
      2.48923451380542,
      2.77832866619903,
      2.77832866619903,
      2.48923451380542,
      3.04445334360211,
      3.04445334360209,
      2.76951626538485,
      3.04445334360211,
      2.77832866619902,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      2.76951626538486,
      2.48923451380542,
      2.48923451380543,
      2.77832866619902,
      2.77832866619903,
      2.77832866619903,
      3.0444533436021,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      3.0444533436021,
      2.76951626538484,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

obj0.userData.subtrees = [[77],
      [74,75,76],
      [73],
      [72],
      [69,70,71,77],
      [68],
      [67],
      [66],
      [65,74,75,76],
      [62,63,64,73],
      [61],
      [60],
      [59,72],
      [58,69,70,71,77],
      [57,68],
      [56,67],
      [55],
      [52,53,54,65,66,74,75,76],
      [51],
      [50,62,63,64,73],
      [47,48,49,61],
      [46,60],
      [43,44,45,59,72],
      [42,58,69,70,71,77],
      [41],
      [38,39,40,56,57,67,68],
      [37,55],
      [36,52,53,54,65,66,74,75,76],
      [33,34,35,50,51,62,63,64,73],
      [32],
      [31,47,48,49,61],
      [30],
      [29,46,60],
      [28,43,44,45,59,72],
      [27,42,58,69,70,71,77],
      [26,41],
      [25],
      [24,37,38,39,40,55,56,57,67,68],
      [23,36,52,53,54,65,66,74,75,76],
      [22,33,34,35,50,51,62,63,64,73],
      [21,32],
      [20,31,47,48,49,61],
      [17,18,19,30],
      [14,15,16,27,28,29,42,43,44,45,46,58,59,60,69,70,71,72,77],
      [11,12,13,24,25,26,37,38,39,40,41,55,56,57,67,68],
      [10,23,36,52,53,54,65,66,74,75,76],
      [9,21,22,32,33,34,35,50,51,62,63,64,73],
      [8,20,31,47,48,49,61],
      [7],
      [6,14,15,16,17,18,19,27,28,29,30,42,43,44,45,46,58,59,60,69,70,71,72,77],
      [5,10,11,12,13,23,24,25,26,36,37,38,39,40,41,52,53,54,55,56,57,65,66,67,68,74,75,76]];

obj0.userData.polytoperoot = [[0.616258888531195,-0.368078939405361,-0.753833223508866],
      [3.80422606518062,-1.61803398874989,-1],
      [-0.325300909667542,-1.73038471128112,1.56230307688179]];

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
