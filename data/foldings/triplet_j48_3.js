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
obj0.userData.points.push(new PMPoint(0.630343, 0, 0));
obj0.userData.points.push(new PMPoint(0.592318, 0.523244, 0));
obj0.userData.points.push(new PMPoint(1.06447, 0.294552, 0));
obj0.userData.points.push(new PMPoint(-0.0855131, 0.517608, 0));
obj0.userData.points.push(new PMPoint(0.00637043, -0.524585, 0));
obj0.userData.points.push(new PMPoint(0.776325, -0.503904, 0));
obj0.userData.points.push(new PMPoint(1.30068, -0.520782, 0));
obj0.userData.points.push(new PMPoint(1.47876, -0.0273085, 0));
obj0.userData.points.push(new PMPoint(1.42788, 0.672929, 0));
obj0.userData.points.push(new PMPoint(1.18032, 1.13547, 0));
obj0.userData.points.push(new PMPoint(0.663913, 1.04296, 0));
obj0.userData.points.push(new PMPoint(0.44914, 1.02795, 0));
obj0.userData.points.push(new PMPoint(-0.491018, 0.184747, 0));
obj0.userData.points.push(new PMPoint(0.62571, -0.524603, 0));
obj0.userData.points.push(new PMPoint(-0.500879, 0.156047, 0));
obj0.userData.points.push(new PMPoint(-0.804068, -0.272096, 0));
obj0.userData.points.push(new PMPoint(-0.490571, -0.692749, 0));
obj0.userData.points.push(new PMPoint(1.81708, -0.428271, 0));
obj0.userData.points.push(new PMPoint(1.55036, 0.492407, 0));
obj0.userData.points.push(new PMPoint(1.02388, -0.966445, 0));
obj0.userData.points.push(new PMPoint(0.841999, 1.53643, 0));
obj0.userData.points.push(new PMPoint(1.70467, 1.11859, 0));
obj0.userData.points.push(new PMPoint(-0.289491, 1.00095, 0));
obj0.userData.points.push(new PMPoint(0.0128386, -1.04917, 0));
obj0.userData.points.push(new PMPoint(-1.01162, -0.753919, 0));
obj0.userData.points.push(new PMPoint(-1.02326, 0.204546, 0));
obj0.userData.points.push(new PMPoint(-0.0964657, -1.03903, 0));
obj0.userData.points.push(new PMPoint(1.22908, -1.0405, 0));
obj0.userData.points.push(new PMPoint(1.70124, -1.26919, 0));
obj0.userData.points.push(new PMPoint(2.06464, -0.890813, 0));
obj0.userData.points.push(new PMPoint(2.30296, -0.230417, 0));
obj0.userData.points.push(new PMPoint(2.26494, 0.292827, 0));
obj0.userData.points.push(new PMPoint(1.75556, 0.418355, 0));
obj0.userData.points.push(new PMPoint(0.429992, -1.23249, 0));
obj0.userData.points.push(new PMPoint(0.166217, 1.58941, 0));
obj0.userData.points.push(new PMPoint(1.6662, 1.33332, 0));
obj0.userData.points.push(new PMPoint(1.62818, 1.85657, 0));
obj0.userData.points.push(new PMPoint(1.11879, 1.9821, 0));
obj0.userData.points.push(new PMPoint(-1.11445, -1.26837, 0));
obj0.userData.points.push(new PMPoint(-0.656963, -1.52514, 0));
obj0.userData.points.push(new PMPoint(-0.271383, -1.16939, 0));
obj0.userData.points.push(new PMPoint(-1.19817, 0.0741862, 0));
obj0.userData.points.push(new PMPoint(-1.64929, -0.193623, 0));
obj0.userData.points.push(new PMPoint(-1.53399, -0.70542, 0));
obj0.userData.points.push(new PMPoint(1.24092, -1.80763, 0));
obj0.userData.points.push(new PMPoint(2.34143, -0.445149, 0));
obj0.userData.points.push(new PMPoint(2.21062, -1.39472, 0));
obj0.userData.points.push(new PMPoint(2.73709, 0.0641355, 0));
obj0.userData.points.push(new PMPoint(0.718857, -1.67042, 0));
obj0.userData.points.push(new PMPoint(0.287679, 2.09978, 0));
obj0.userData.points.push(new PMPoint(0.560624, 2.27498, 0));
obj0.userData.points.push(new PMPoint(1.48219, 2.36047, 0));
obj0.userData.points.push(new PMPoint(-1.50856, -0.922083, 0));
obj0.userData.points.push(new PMPoint(-1.10808, -1.79295, 0));
obj0.userData.points.push(new PMPoint(-2.03487, -0.549373, 0));
obj0.userData.points.push(new PMPoint(-1.65566, 0.330962, 0));
obj0.userData.points.push(new PMPoint(1.73757, -1.97664, 0));
obj0.userData.points.push(new PMPoint(2.40296, -1.29178, 0));
obj0.userData.points.push(new PMPoint(2.88884, -1.09392, 0));
obj0.userData.points.push(new PMPoint(2.85082, -0.570677, 0));
obj0.userData.points.push(new PMPoint(-0.215045, 1.94978, 0));
obj0.userData.points.push(new PMPoint(0.81001, 2.73654, 0));
obj0.userData.points.push(new PMPoint(1.0393, 2.7934, 0));
obj0.userData.points.push(new PMPoint(-1.95968, -1.18989, 0));
obj0.userData.points.push(new PMPoint(-1.84438, -1.70169, 0));
obj0.userData.points.push(new PMPoint(-1.322, -1.75019, 0));
obj0.userData.points.push(new PMPoint(-1.86848, 0.283018, 0));
obj0.userData.points.push(new PMPoint(-2.38953, 0.221848, 0));
obj0.userData.points.push(new PMPoint(-2.49236, -0.292598, 0));
obj0.userData.points.push(new PMPoint(-0.812594, 0.429936, 0));
obj0.userData.points.push(new PMPoint(-1.03178, 0.906578, 0));
obj0.userData.points.push(new PMPoint(-1.55283, 0.845408, 0));
obj0.userData.points.push(new PMPoint(2.69009, -1.87576, 0));
obj0.userData.points.push(new PMPoint(1.41063, 3.164, 0));
obj0.userData.points.push(new PMPoint(-2.34526, -1.54564, 0));
obj0.userData.points.push(new PMPoint(-1.79927, -2.35088, 0));
obj0.userData.points.push(new PMPoint(-1.28563, -2.45764, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 1, 3, 2, 3, 0, 4, 2, 4, 0, 5, 1, 5, 1, 6, 6, 7, 3, 8, 7, 8, 3, 9, 9, 10, 2, 11, 10, 11, 2, 12, 4, 12, 0, 13, 4, 13, 1, 14, 5, 14, 0, 15, 15, 16, 5, 17, 16, 17, 7, 18, 8, 18, 3, 19, 8, 19, 6, 20, 7, 20, 10, 21, 11, 21, 9, 22, 10, 22, 4, 23, 12, 23, 5, 24, 14, 24, 16, 25, 17, 25, 15, 26, 16, 26, 5, 27, 17, 27, 7, 28, 28, 29, 18, 30, 29, 30, 18, 31, 31, 32, 8, 33, 32, 33, 6, 34, 20, 34, 11, 35, 21, 35, 10, 36, 36, 37, 21, 38, 37, 38, 25, 39, 39, 40, 17, 41, 40, 41, 16, 42, 42, 43, 25, 44, 43, 44, 28, 45, 29, 45, 18, 46, 30, 46, 29, 47, 30, 47, 31, 48, 32, 48, 20, 49, 34, 49, 21, 50, 35, 50, 21, 51, 38, 51, 37, 52, 38, 52, 25, 53, 39, 53, 39, 54, 40, 54, 43, 55, 44, 55, 42, 56, 43, 56, 29, 57, 45, 57, 30, 58, 58, 59, 46, 60, 59, 60, 35, 61, 50, 61, 38, 62, 51, 62, 38, 63, 52, 63, 53, 64, 64, 65, 39, 66, 65, 66, 43, 67, 67, 68, 55, 69, 68, 69, 42, 70, 70, 71, 56, 72, 71, 72, 58, 73, 59, 73, 52, 74, 63, 74, 64, 75, 65, 75, 65, 76, 66, 76, 66, 77, 76, 77];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[3, 1, 6, 7, 8], [0, 1, 2], [3, 2, 1], [41, 17, 25, 39, 40], [17, 16, 25], [20, 34, 49], [7, 28, 29, 30, 18], [8, 7, 18], [29, 28, 45], [16, 42, 43, 44, 25], [16, 15, 26], [39, 25, 53], [40, 39, 54], [29, 45, 57], [18, 30, 46], [11, 10, 21], [11, 21, 35], [30, 29, 47], [76, 77, 66], [30, 58, 59, 60, 46], [61, 35, 50], [35, 21, 50], [32, 31, 48], [67, 68, 69, 55, 43], [21, 38, 51], [65, 64, 75], [52, 74, 63], [37, 52, 38], [38, 52, 63], [51, 38, 62], [59, 58, 73], [76, 66, 65], [44, 43, 55], [36, 37, 38, 21, 10], [39, 53, 64, 65, 66], [42, 56, 43], [9, 22, 10], [4, 12, 23], [70, 71, 72, 56, 42], [8, 18, 31, 32, 33], [2, 12, 4], [3, 8, 19], [3, 9, 10, 11, 2], [13, 0, 4], [0, 2, 4], [7, 6, 20], [20, 6, 34], [27, 5, 17], [14, 5, 24], [5, 1, 0], [14, 1, 5], [5, 0, 15, 16, 17]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[66,76],
      [66,65],
      [65,64],
      [63,52],
      [59,58],
      [56,42],
      [55,43],
      [39,53],
      [38,52],
      [51,38],
      [35,50],
      [46,30],
      [29,45],
      [43,42],
      [44,43],
      [40,39],
      [39,25],
      [38,37],
      [21,38],
      [35,21],
      [20,34],
      [32,31],
      [30,29],
      [18,30],
      [29,28],
      [25,16],
      [17,25],
      [21,10],
      [11,21],
      [20,6],
      [8,18],
      [18,7],
      [5,17],
      [16,15],
      [17,16],
      [14,5],
      [4,12],
      [10,9],
      [11,10],
      [7,6],
      [3,8],
      [8,7],
      [5,0],
      [1,5],
      [0,4],
      [4,2],
      [2,3],
      [3,1],
      [1,0],
      [0,2],
      [2,1]];

obj0.userData.angles = [2.80223687625225,
      2.40184625752951,
      2.48923451380543,
      2.82814048148548,
      2.98940664305273,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      3.020016454646,
      2.83296826849485,
      2.93454167480129,
      2.48923451380543,
      2.83692050609424,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.49262695629814,
      2.84140967705754,
      2.83894477010767,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      3.12494135753614,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.62077125190861,
      3.01884158590961,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.82814048148548,
      0.317793291495881,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.87643789410659,
      2.73142419799184,
      2.93454167480129,
      2.84140967705754,
      2.48923451380543,
      2.48923451380542,
      2.83296826849485,
      2.77499229924554,
      2.76756403451538];

obj0.userData.subtrees = [[77],
      [76,77],
      [75],
      [74],
      [73],
      [70,71,72],
      [67,68,69],
      [64,65,66,75,76,77],
      [63,74],
      [62],
      [61],
      [58,59,60,73],
      [57],
      [56,70,71,72],
      [55,67,68,69],
      [54],
      [53,64,65,66,75,76,77],
      [52,63,74],
      [51,62],
      [50,61],
      [49],
      [48],
      [47],
      [46,58,59,60,73],
      [45,57],
      [42,43,44,55,56,67,68,69,70,71,72],
      [39,40,41,53,54,64,65,66,75,76,77],
      [36,37,38,51,52,62,63,74],
      [35,50,61],
      [34,49],
      [31,32,33,48],
      [28,29,30,45,46,47,57,58,59,60,73],
      [27],
      [26],
      [25,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [24],
      [23],
      [22],
      [21,35,36,37,38,50,51,52,61,62,63,74],
      [20,34,49],
      [19],
      [18,28,29,30,31,32,33,45,46,47,48,57,58,59,60,73],
      [15,16,17,25,26,27,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [14,24],
      [13],
      [12,23],
      [9,10,11,21,22,35,36,37,38,50,51,52,61,62,63,74],
      [6,7,8,18,19,20,28,29,30,31,32,33,34,45,46,47,48,49,57,58,59,60,73],
      [5,14,15,16,17,24,25,26,27,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [4,12,13,23],
      [3,6,7,8,9,10,11,18,19,20,21,22,28,29,30,31,32,33,34,35,36,37,38,45,46,47,48,49,50,51,52,57,58,59,60,61,62,63,73,74]];

obj0.userData.polytoperoot = [[0.686741432487041,0.454743546308757,-0.148113108572477],
      [3.84137965053829,2.2244764082196,-1.90612788518428],
      [-1.7522787967334,1.11980227646736,-2.22450675997493]];

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
