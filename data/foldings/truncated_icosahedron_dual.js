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
obj0.userData.points.push(new PMPoint(0.639239, 0, 0));
obj0.userData.points.push(new PMPoint(0.40619, 0.595244, 0));
obj0.userData.points.push(new PMPoint(0.40619, -0.595244, 0));
obj0.userData.points.push(new PMPoint(-0.233049, 0.595244, 0));
obj0.userData.points.push(new PMPoint(1.10855, 0.434019, 0));
obj0.userData.points.push(new PMPoint(-0.233049, -0.595244, 0));
obj0.userData.points.push(new PMPoint(1.10855, -0.434019, 0));
obj0.userData.points.push(new PMPoint(-0.702362, 0.161225, 0));
obj0.userData.points.push(new PMPoint(0, 1.19049, 0));
obj0.userData.points.push(new PMPoint(0.875503, 1.02926, 0));
obj0.userData.points.push(new PMPoint(1.21449, -0.278781, 0));
obj0.userData.points.push(new PMPoint(-0.702362, -0.161225, 0));
obj0.userData.points.push(new PMPoint(0, -1.19049, 0));
obj0.userData.points.push(new PMPoint(0.875503, -1.02926, 0));
obj0.userData.points.push(new PMPoint(-0.808295, 0.874025, 0));
obj0.userData.points.push(new PMPoint(0.639239, 1.19049, 0));
obj0.userData.points.push(new PMPoint(-0.702362, 1.02926, 0));
obj0.userData.points.push(new PMPoint(1.51474, 1.02926, 0));
obj0.userData.points.push(new PMPoint(1.6838, 0.155238, 0));
obj0.userData.points.push(new PMPoint(-0.808295, -0.874025, 0));
obj0.userData.points.push(new PMPoint(0.639239, -1.19049, 0));
obj0.userData.points.push(new PMPoint(-0.702362, -1.02926, 0));
obj0.userData.points.push(new PMPoint(1.51474, -1.02926, 0));
obj0.userData.points.push(new PMPoint(-1.27761, 0.440006, 0));
obj0.userData.points.push(new PMPoint(0.40619, 1.78573, 0));
obj0.userData.points.push(new PMPoint(-0.469313, 1.62451, 0));
obj0.userData.points.push(new PMPoint(1.74779, 0.434019, 0));
obj0.userData.points.push(new PMPoint(1.10855, 1.62451, 0));
obj0.userData.points.push(new PMPoint(1.91685, -0.440006, 0));
obj0.userData.points.push(new PMPoint(-1.27761, -0.440006, 0));
obj0.userData.points.push(new PMPoint(0.40619, -1.78573, 0));
obj0.userData.points.push(new PMPoint(-0.469313, -1.62451, 0));
obj0.userData.points.push(new PMPoint(1.10855, -1.62451, 0));
obj0.userData.points.push(new PMPoint(-1.51066, 1.03525, 0));
obj0.userData.points.push(new PMPoint(-0.233049, 1.78573, 0));
obj0.userData.points.push(new PMPoint(-1.10855, 1.62451, 0));
obj0.userData.points.push(new PMPoint(2.2171, 0.868038, 0));
obj0.userData.points.push(new PMPoint(1.74779, 1.62451, 0));
obj0.userData.points.push(new PMPoint(2.32304, 0.155238, 0));
obj0.userData.points.push(new PMPoint(-1.51066, -1.03525, 0));
obj0.userData.points.push(new PMPoint(-0.233049, -1.78573, 0));
obj0.userData.points.push(new PMPoint(-1.10855, -1.62451, 0));
obj0.userData.points.push(new PMPoint(1.74779, -1.62451, 0));
obj0.userData.points.push(new PMPoint(-1.91685, 0.440006, 0));
obj0.userData.points.push(new PMPoint(0, 2.38097, 0));
obj0.userData.points.push(new PMPoint(-0.702362, 2.21975, 0));
obj0.userData.points.push(new PMPoint(1.98406, 1.46328, 0));
obj0.userData.points.push(new PMPoint(1.51474, 2.21975, 0));
obj0.userData.points.push(new PMPoint(2.55609, -0.440006, 0));
obj0.userData.points.push(new PMPoint(0, -2.38097, 0));
obj0.userData.points.push(new PMPoint(-0.702362, -2.21975, 0));
obj0.userData.points.push(new PMPoint(1.51474, -2.21975, 0));
obj0.userData.points.push(new PMPoint(-2.1499, 1.03525, 0));
obj0.userData.points.push(new PMPoint(-1.3416, 2.21975, 0));
obj0.userData.points.push(new PMPoint(2.62329, 1.46328, 0));
obj0.userData.points.push(new PMPoint(2.2171, 2.05853, 0));
obj0.userData.points.push(new PMPoint(3.0254, -0.0059865, 0));
obj0.userData.points.push(new PMPoint(-1.3416, -2.21975, 0));
obj0.userData.points.push(new PMPoint(2.2171, -2.05853, 0));
obj0.userData.points.push(new PMPoint(-1.10855, 2.81499, 0));
obj0.userData.points.push(new PMPoint(-1.10855, -2.81499, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 5, 0, 6, 3, 6, 1, 7, 3, 7, 0, 8, 4, 8, 2, 9, 4, 9, 2, 10, 5, 10, 1, 11, 5, 11, 0, 12, 6, 12, 3, 13, 6, 13, 3, 14, 7, 14, 4, 15, 8, 15, 2, 16, 9, 16, 4, 17, 9, 17, 5, 18, 10, 18, 5, 19, 11, 19, 6, 20, 12, 20, 3, 21, 13, 21, 6, 22, 13, 22, 7, 23, 14, 23, 8, 24, 15, 24, 9, 25, 16, 25, 9, 26, 17, 26, 5, 27, 18, 27, 10, 28, 18, 28, 11, 29, 19, 29, 12, 30, 20, 30, 13, 31, 21, 31, 13, 32, 22, 32, 14, 33, 23, 33, 15, 34, 24, 34, 9, 35, 25, 35, 17, 36, 26, 36, 18, 37, 27, 37, 18, 38, 28, 38, 19, 39, 29, 39, 20, 40, 30, 40, 13, 41, 31, 41, 22, 42, 32, 42, 23, 43, 33, 43, 24, 44, 34, 44, 25, 45, 35, 45, 26, 46, 36, 46, 18, 47, 37, 47, 28, 48, 38, 48, 29, 49, 39, 49, 31, 50, 41, 50, 32, 51, 42, 51, 33, 52, 43, 52, 34, 53, 44, 53, 36, 54, 46, 54, 37, 55, 47, 55, 38, 56, 48, 56, 39, 57, 49, 57, 42, 58, 51, 58, 43, 59, 52, 59, 46, 60, 54, 60, 51, 61, 58, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [0, 2, 4], [2, 1, 5], [0, 4, 8], [0, 6, 3], [7, 1, 3], [4, 2, 9], [0, 12, 6], [2, 5, 10], [5, 1, 11], [8, 4, 15], [3, 6, 13], [2, 16, 9], [7, 3, 14], [4, 9, 17], [6, 12, 20], [10, 5, 18], [21, 3, 13], [5, 11, 19], [8, 15, 24], [6, 22, 13], [9, 16, 25], [7, 14, 23], [5, 27, 18], [12, 30, 20], [17, 9, 26], [10, 18, 28], [21, 13, 31], [19, 11, 29], [24, 15, 34], [9, 25, 35], [13, 22, 32], [23, 14, 33], [18, 27, 37], [20, 30, 40], [17, 26, 36], [31, 13, 41], [28, 18, 38], [19, 29, 39], [24, 34, 44], [35, 25, 45], [22, 42, 32], [18, 37, 47], [23, 33, 43], [36, 26, 46], [31, 41, 50], [28, 38, 48], [39, 29, 49], [44, 34, 53], [32, 42, 51], [47, 37, 55], [43, 33, 52], [36, 46, 54], [48, 38, 56], [39, 49, 57], [42, 58, 51], [59, 43, 52], [46, 60, 54], [61, 51, 58]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[51,58],
      [54,46],
      [43,52],
      [51,42],
      [39,49],
      [48,38],
      [47,37],
      [36,46],
      [44,34],
      [43,33],
      [32,42],
      [31,41],
      [39,29],
      [28,38],
      [18,37],
      [36,26],
      [35,25],
      [24,34],
      [23,33],
      [32,22],
      [31,13],
      [20,30],
      [19,29],
      [28,18],
      [18,27],
      [17,26],
      [9,25],
      [24,15],
      [23,14],
      [13,22],
      [21,13],
      [20,12],
      [19,11],
      [10,18],
      [18,5],
      [17,9],
      [9,16],
      [8,15],
      [7,14],
      [13,6],
      [3,13],
      [6,12],
      [5,11],
      [10,5],
      [4,9],
      [9,2],
      [8,4],
      [7,3],
      [3,6],
      [6,0],
      [5,1],
      [2,5],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033];

obj0.userData.subtrees = [[61],
      [60],
      [59],
      [58,61],
      [57],
      [56],
      [55],
      [54,60],
      [53],
      [52,59],
      [51,58,61],
      [50],
      [49,57],
      [48,56],
      [47,55],
      [46,54,60],
      [45],
      [44,53],
      [43,52,59],
      [42,51,58,61],
      [41,50],
      [40],
      [39,49,57],
      [38,48,56],
      [37,47,55],
      [36,46,54,60],
      [35,45],
      [34,44,53],
      [33,43,52,59],
      [32,42,51,58,61],
      [31,41,50],
      [30,40],
      [29,39,49,57],
      [28,38,48,56],
      [27,37,47,55],
      [26,36,46,54,60],
      [25,35,45],
      [24,34,44,53],
      [23,33,43,52,59],
      [22,32,42,51,58,61],
      [21,31,41,50],
      [20,30,40],
      [19,29,39,49,57],
      [18,27,28,37,38,47,48,55,56],
      [17,26,36,46,54,60],
      [16,25,35,45],
      [15,24,34,44,53],
      [14,23,33,43,52,59],
      [13,21,22,31,32,41,42,50,51,58,61],
      [12,20,30,40],
      [11,19,29,39,49,57],
      [10,18,27,28,37,38,47,48,55,56],
      [9,16,17,25,26,35,36,45,46,54,60],
      [8,15,24,34,44,53],
      [7,14,23,33,43,52,59],
      [6,12,13,20,21,22,30,31,32,40,41,42,50,51,58,61],
      [5,10,11,18,19,27,28,29,37,38,39,47,48,49,55,56,57],
      [4,8,9,15,16,17,24,25,26,34,35,36,44,45,46,53,54,60],
      [3,6,7,12,13,14,20,21,22,23,30,31,32,33,40,41,42,43,50,51,52,58,59,61]];

obj0.userData.polytoperoot = [[-0.360314318400233,-0.943315132205062,0],
      [0,-1.06009112528751,-0.218390782199935],
      [0.571499324846412,-0.0786893258332632,0.381966011250105]];

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
