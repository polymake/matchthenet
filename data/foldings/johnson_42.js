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
obj0.userData.points.push(new PMPoint(0.542326, 0, 0));
obj0.userData.points.push(new PMPoint(0.709914, 0.515782, 0));
obj0.userData.points.push(new PMPoint(0.271163, 0.834553, 0));
obj0.userData.points.push(new PMPoint(-0.167588, 0.515782, 0));
obj0.userData.points.push(new PMPoint(0.271163, -0.469668, 0));
obj0.userData.points.push(new PMPoint(1.0728, 0.112756, 0));
obj0.userData.points.push(new PMPoint(0.766602, 1.05514, 0));
obj0.userData.points.push(new PMPoint(-0.224276, 1.05514, 0));
obj0.userData.points.push(new PMPoint(-0.68337, 0.348195, 0));
obj0.userData.points.push(new PMPoint(-0.515782, -0.167588, 0));
obj0.userData.points.push(new PMPoint(0.63405, -0.872694, 0));
obj0.userData.points.push(new PMPoint(1.12949, -0.652111, 0));
obj0.userData.points.push(new PMPoint(1.0728, -0.112756, 0));
obj0.userData.points.push(new PMPoint(-0.469668, -0.271163, 0));
obj0.userData.points.push(new PMPoint(-0.198505, -0.740831, 0));
obj0.userData.points.push(new PMPoint(1.56824, 0.33334, 0));
obj0.userData.points.push(new PMPoint(1.51155, 0.872694, 0));
obj0.userData.points.push(new PMPoint(0.981076, 0.98545, 0));
obj0.userData.points.push(new PMPoint(0.709914, 1.59449, 0));
obj0.userData.points.push(new PMPoint(0.179439, 1.70725, 0));
obj0.userData.points.push(new PMPoint(-0.0917239, 1.23758, 0));
obj0.userData.points.push(new PMPoint(-0.763631, 0.998449, 0));
obj0.userData.points.push(new PMPoint(-0.706943, 0.459094, 0));
obj0.userData.points.push(new PMPoint(-1.2257, 0.348195, 0));
obj0.userData.points.push(new PMPoint(-1.39328, -0.167588, 0));
obj0.userData.points.push(new PMPoint(-0.954533, -0.486359, 0));
obj0.userData.points.push(new PMPoint(-0.131864, -0.832555, 0));
obj0.userData.points.push(new PMPoint(0.231023, -1.23558, 0));
obj0.userData.points.push(new PMPoint(1.56824, -0.33334, 0));
obj0.userData.points.push(new PMPoint(1.0728, -1.19147, 0));
obj0.userData.points.push(new PMPoint(-0.740831, -0.740831, 0));
obj0.userData.points.push(new PMPoint(2.00699, 0.652111, 0));
obj0.userData.points.push(new PMPoint(1.34396, 1.38848, 0));
obj0.userData.points.push(new PMPoint(-0.290229, 1.97841, 0));
obj0.userData.points.push(new PMPoint(-0.561392, 1.50874, 0));
obj0.userData.points.push(new PMPoint(0.542326, 2.11027, 0));
obj0.userData.points.push(new PMPoint(-1.20238, 0.679678, 0));
obj0.userData.points.push(new PMPoint(-1.75617, 0.235439, 0));
obj0.userData.points.push(new PMPoint(-1.44997, -0.706943, 0));
obj0.userData.points.push(new PMPoint(0.59391, -1.63861, 0));
obj0.userData.points.push(new PMPoint(0.996936, -1.27572, 0));
obj0.userData.points.push(new PMPoint(-0.627303, -1.05314, 0));
obj0.userData.points.push(new PMPoint(-0.570614, -1.59249, 0));
obj0.userData.points.push(new PMPoint(-0.0401398, -1.70525, 0));
obj0.userData.points.push(new PMPoint(1.29708, -1.16789, 0));
obj0.userData.points.push(new PMPoint(1.8394, -1.16789, 0));
obj0.userData.points.push(new PMPoint(2.00699, -0.652111, 0));
obj0.userData.points.push(new PMPoint(2.36988, 1.05514, 0));
obj0.userData.points.push(new PMPoint(2.09871, 1.52481, 0));
obj0.userData.points.push(new PMPoint(1.56824, 1.41205, 0));
obj0.userData.points.push(new PMPoint(-0.653116, 2.38144, 0));
obj0.userData.points.push(new PMPoint(-1.14855, 2.16085, 0));
obj0.userData.points.push(new PMPoint(-1.09187, 1.6215, 0));
obj0.userData.points.push(new PMPoint(0.450602, 2.17692, 0));
obj0.userData.points.push(new PMPoint(-0.019066, 2.44808, 0));
obj0.userData.points.push(new PMPoint(-2.25161, 0.0148549, 0));
obj0.userData.points.push(new PMPoint(-2.19492, -0.5245, 0));
obj0.userData.points.push(new PMPoint(-1.66445, -0.637256, 0));
obj0.userData.points.push(new PMPoint(0.0634352, -1.75136, 0));
obj0.userData.points.push(new PMPoint(0.956797, -2.04163, 0));
obj0.userData.points.push(new PMPoint(1.35982, -1.67875, 0));
obj0.userData.points.push(new PMPoint(-0.403027, -2.10828, 0));
obj0.userData.points.push(new PMPoint(2.36988, -1.05514, 0));
obj0.userData.points.push(new PMPoint(2.83954, 1.3263, 0));
obj0.userData.points.push(new PMPoint(2.56838, 1.79597, 0));
obj0.userData.points.push(new PMPoint(-0.122641, 2.49419, 0));
obj0.userData.points.push(new PMPoint(-1.09187, 2.70021, 0));
obj0.userData.points.push(new PMPoint(-2.69036, -0.303916, 0));
obj0.userData.points.push(new PMPoint(0.00674671, -2.29072, 0));
obj0.userData.points.push(new PMPoint(0.502186, -2.5113, 0));
obj0.userData.points.push(new PMPoint(0.865073, -2.10828, 0));
obj0.userData.points.push(new PMPoint(1.31968, -2.44466, 0));
obj0.userData.points.push(new PMPoint(1.72271, -2.08177, 0));
obj0.userData.points.push(new PMPoint(3.37002, 1.43906, 0));
obj0.userData.points.push(new PMPoint(3.42671, 1.97841, 0));
obj0.userData.points.push(new PMPoint(2.93127, 2.19899, 0));
obj0.userData.points.push(new PMPoint(1.03266, -2.62406, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 5, 1, 6, 2, 6, 2, 7, 3, 7, 3, 8, 4, 8, 4, 9, 0, 10, 9, 10, 5, 11, 11, 12, 1, 13, 12, 13, 0, 14, 5, 15, 14, 15, 6, 16, 16, 17, 2, 18, 17, 18, 7, 19, 19, 20, 3, 21, 20, 21, 8, 22, 4, 23, 22, 23, 9, 24, 24, 25, 10, 26, 25, 26, 5, 27, 11, 28, 27, 28, 12, 29, 13, 29, 11, 30, 12, 30, 14, 31, 15, 31, 16, 32, 17, 32, 17, 33, 18, 33, 20, 34, 21, 35, 34, 35, 19, 36, 20, 36, 22, 37, 23, 37, 24, 38, 25, 38, 25, 39, 26, 39, 28, 40, 11, 41, 40, 41, 27, 42, 42, 43, 28, 44, 43, 44, 12, 45, 45, 46, 29, 47, 46, 47, 32, 48, 48, 49, 17, 50, 49, 50, 34, 51, 51, 52, 35, 53, 52, 53, 20, 54, 34, 55, 54, 55, 38, 56, 56, 57, 25, 58, 57, 58, 28, 59, 40, 59, 40, 60, 41, 61, 60, 61, 43, 62, 44, 62, 46, 63, 47, 63, 48, 64, 49, 65, 64, 65, 34, 66, 51, 66, 51, 67, 52, 67, 56, 68, 57, 68, 59, 69, 69, 70, 40, 71, 70, 71, 60, 72, 61, 73, 72, 73, 64, 74, 74, 75, 65, 76, 75, 76, 70, 77, 71, 77];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [5, 1, 0], [4, 8, 22, 23], [23, 22, 37], [11, 5, 27, 28], [2, 1, 6], [35, 34, 51, 52, 53], [2, 6, 16, 17, 18], [21, 20, 34, 35], [11, 28, 40, 41], [28, 59, 40], [13, 12, 29], [59, 69, 70, 71, 40], [12, 45, 46, 47, 29], [20, 54, 55, 34], [34, 66, 51], [41, 40, 60, 61], [17, 16, 32], [49, 48, 64, 65], [61, 60, 72, 73], [47, 46, 63], [71, 70, 77], [17, 32, 48, 49, 50], [65, 64, 74, 75, 76], [20, 19, 36], [57, 56, 68], [18, 17, 33], [52, 51, 67], [12, 11, 30], [44, 43, 62], [3, 2, 7], [3, 7, 19, 20, 21], [25, 24, 38], [25, 38, 56, 57, 58], [13, 1, 5, 11, 12], [4, 3, 8], [26, 25, 39], [28, 27, 42, 43, 44], [14, 31, 15], [10, 9, 24, 25, 26], [0, 14, 15, 5], [0, 4, 9, 10]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[71,70],
      [65,64],
      [61,60],
      [40,59],
      [57,56],
      [52,51],
      [51,34],
      [49,48],
      [47,46],
      [44,43],
      [41,40],
      [40,28],
      [25,38],
      [34,20],
      [35,34],
      [17,32],
      [29,12],
      [28,27],
      [11,28],
      [26,25],
      [25,24],
      [23,22],
      [20,19],
      [21,20],
      [18,17],
      [17,16],
      [15,14],
      [12,11],
      [13,12],
      [11,5],
      [10,9],
      [4,8],
      [3,7],
      [2,6],
      [5,0],
      [1,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.67794504458899,
      2.51327412287183,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.51327412287183,
      2.95288212280623,
      2.48923451380542,
      2.51327412287183,
      2.67794504458899,
      2.48923451380542,
      2.48923451380542,
      2.67794504458899,
      2.51327412287183,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.48923451380542,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.48923451380542,
      2.48923451380543,
      2.67794504458899,
      2.67794504458899,
      2.95288212280623,
      2.48923451380542,
      2.48923451380543,
      2.95288212280623,
      2.48923451380542,
      2.67794504458899,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543];

obj0.userData.subtrees = [[77],
      [74,75,76],
      [72,73],
      [69,70,71,77],
      [68],
      [67],
      [66],
      [64,65,74,75,76],
      [63],
      [62],
      [60,61,72,73],
      [59,69,70,71,77],
      [56,57,58,68],
      [54,55],
      [51,52,53,66,67],
      [48,49,50,64,65,74,75,76],
      [45,46,47,63],
      [42,43,44,62],
      [40,41,59,60,61,69,70,71,72,73,77],
      [39],
      [38,56,57,58,68],
      [37],
      [36],
      [34,35,51,52,53,54,55,66,67],
      [33],
      [32,48,49,50,64,65,74,75,76],
      [31],
      [30],
      [29,45,46,47,63],
      [27,28,40,41,42,43,44,59,60,61,62,69,70,71,72,73,77],
      [24,25,26,38,39,56,57,58,68],
      [22,23,37],
      [19,20,21,34,35,36,51,52,53,54,55,66,67],
      [16,17,18,32,33,48,49,50,64,65,74,75,76],
      [14,15,31],
      [11,12,13,27,28,29,30,40,41,42,43,44,45,46,47,59,60,61,62,63,69,70,71,72,73,77],
      [9,10,24,25,26,38,39,56,57,58,68],
      [8,22,23,37],
      [7,19,20,21,34,35,36,51,52,53,54,55,66,67],
      [6,16,17,18,32,33,48,49,50,64,65,74,75,76],
      [5,11,12,13,14,15,27,28,29,30,31,40,41,42,43,44,45,46,47,59,60,61,62,63,69,70,71,72,73,77]];

obj0.userData.polytoperoot = [[0.877501444449895,-0.230664905138395,-0.142558751387298],
      [1.80901699437495,-0.5,-1],
      [-0.490538220036055,0.251381794952049,-1.01308287391169]];

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
