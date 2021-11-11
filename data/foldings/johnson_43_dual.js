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
obj0.userData.points.push(new PMPoint(0.562728, 0, 0));
obj0.userData.points.push(new PMPoint(0.342732, 0.517942, 0));
obj0.userData.points.push(new PMPoint(-0.287602, 0.562679, 0));
obj0.userData.points.push(new PMPoint(-0.287602, -0.562679, 0));
obj0.userData.points.push(new PMPoint(0.342732, -0.517942, 0));
obj0.userData.points.push(new PMPoint(0.953443, 0.404974, 0));
obj0.userData.points.push(new PMPoint(0.748193, 1.00263, 0));
obj0.userData.points.push(new PMPoint(-0.695877, 0.0386664, 0));
obj0.userData.points.push(new PMPoint(-0.34817, -0.527352, 0));
obj0.userData.points.push(new PMPoint(0.691999, 1.04457, 0));
obj0.userData.points.push(new PMPoint(0.0350934, 1.14332, 0));
obj0.userData.points.push(new PMPoint(0.748193, -1.00263, 0));
obj0.userData.points.push(new PMPoint(0.953443, -0.404974, 0));
obj0.userData.points.push(new PMPoint(0.0350934, -1.14332, 0));
obj0.userData.points.push(new PMPoint(0.691999, -1.04457, 0));
obj0.userData.points.push(new PMPoint(1.08822, -0.201297, 0));
obj0.userData.points.push(new PMPoint(1.55807, 0.221269, 0));
obj0.userData.points.push(new PMPoint(1.5747, 0.289385, 0));
obj0.userData.points.push(new PMPoint(1.40878, 0.932617, 0));
obj0.userData.points.push(new PMPoint(-0.751391, 0.715214, 0));
obj0.userData.points.push(new PMPoint(-0.898364, 0.0644124, 0));
obj0.userData.points.push(new PMPoint(-0.89997, 0.0355121, 0));
obj0.userData.points.push(new PMPoint(-0.826003, -0.627566, 0));
obj0.userData.points.push(new PMPoint(-0.0677648, 1.31963, 0));
obj0.userData.points.push(new PMPoint(-0.609313, 0.929924, 0));
obj0.userData.points.push(new PMPoint(0.597431, 1.52355, 0));
obj0.userData.points.push(new PMPoint(-0.0417923, 1.3324, 0));
obj0.userData.points.push(new PMPoint(1.40878, -0.932617, 0));
obj0.userData.points.push(new PMPoint(1.5747, -0.289385, 0));
obj0.userData.points.push(new PMPoint(-0.609313, -0.929924, 0));
obj0.userData.points.push(new PMPoint(-0.0677648, -1.31963, 0));
obj0.userData.points.push(new PMPoint(-0.0417923, -1.3324, 0));
obj0.userData.points.push(new PMPoint(0.597431, -1.52355, 0));
obj0.userData.points.push(new PMPoint(1.53084, 1.09622, 0));
obj0.userData.points.push(new PMPoint(0.96044, 1.44231, 0));
obj0.userData.points.push(new PMPoint(1.97859, 0.563683, 0));
obj0.userData.points.push(new PMPoint(1.55276, 1.07731, 0));
obj0.userData.points.push(new PMPoint(-0.953878, 0.74096, 0));
obj0.userData.points.push(new PMPoint(-1.36215, 0.216947, 0));
obj0.userData.points.push(new PMPoint(-1.3778, -0.0647015, 0));
obj0.userData.points.push(new PMPoint(-1.0301, -0.63072, 0));
obj0.userData.points.push(new PMPoint(-0.389476, 1.68687, 0));
obj0.userData.points.push(new PMPoint(-0.712171, 1.10623, 0));
obj0.userData.points.push(new PMPoint(0.520545, 1.71263, 0));
obj0.userData.points.push(new PMPoint(-0.136361, 1.81139, 0));
obj0.userData.points.push(new PMPoint(0.96044, -1.44231, 0));
obj0.userData.points.push(new PMPoint(1.53084, -1.09622, 0));
obj0.userData.points.push(new PMPoint(1.55276, -1.07731, 0));
obj0.userData.points.push(new PMPoint(1.97859, -0.563683, 0));
obj0.userData.points.push(new PMPoint(-0.712171, -1.10623, 0));
obj0.userData.points.push(new PMPoint(-0.389476, -1.68687, 0));
obj0.userData.points.push(new PMPoint(-0.136361, -1.81139, 0));
obj0.userData.points.push(new PMPoint(0.520545, -1.71263, 0));
obj0.userData.points.push(new PMPoint(1.74309, 1.5359, 0));
obj0.userData.points.push(new PMPoint(1.0825, 1.60591, 0));
obj0.userData.points.push(new PMPoint(2.12257, 0.708371, 0));
obj0.userData.points.push(new PMPoint(1.95665, 1.3516, 0));
obj0.userData.points.push(new PMPoint(-1.30159, 1.30698, 0));
obj0.userData.points.push(new PMPoint(-1.64976, 0.779626, 0));
obj0.userData.points.push(new PMPoint(-1.72597, -0.592054, 0));
obj0.userData.points.push(new PMPoint(-1.43837, -1.15473, 0));
obj0.userData.points.push(new PMPoint(0.843241, 2.29328, 0));
obj0.userData.points.push(new PMPoint(0.212906, 2.33801, 0));
obj0.userData.points.push(new PMPoint(1.0825, -1.60591, 0));
obj0.userData.points.push(new PMPoint(1.74309, -1.5359, 0));
obj0.userData.points.push(new PMPoint(1.95665, -1.3516, 0));
obj0.userData.points.push(new PMPoint(2.12257, -0.708371, 0));
obj0.userData.points.push(new PMPoint(0.212906, -2.33801, 0));
obj0.userData.points.push(new PMPoint(0.843241, -2.29328, 0));
obj0.userData.points.push(new PMPoint(2.78316, 0.638356, 0));
obj0.userData.points.push(new PMPoint(2.57791, 1.23601, 0));
obj0.userData.points.push(new PMPoint(-2.21248, 0.779626, 0));
obj0.userData.points.push(new PMPoint(-1.99249, 0.261684, 0));
obj0.userData.points.push(new PMPoint(-1.933, 1.33235, 0));
obj0.userData.points.push(new PMPoint(-2.20902, 0.84197, 0));
obj0.userData.points.push(new PMPoint(-2.2887, -0.592054, 0));
obj0.userData.points.push(new PMPoint(-2.0687, -1.11, 0));
obj0.userData.points.push(new PMPoint(0.555639, 2.85595, 0));
obj0.userData.points.push(new PMPoint(-0.00708901, 2.85595, 0));
obj0.userData.points.push(new PMPoint(-0.00708901, -2.85595, 0));
obj0.userData.points.push(new PMPoint(0.555639, -2.85595, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 4, 14, 5, 15, 14, 15, 1, 16, 6, 17, 16, 17, 6, 18, 7, 19, 18, 19, 3, 20, 8, 21, 20, 21, 8, 22, 9, 23, 22, 23, 11, 24, 3, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 4, 30, 14, 31, 30, 31, 14, 32, 15, 33, 32, 33, 19, 34, 7, 35, 34, 35, 18, 36, 19, 37, 36, 37, 20, 38, 21, 39, 38, 39, 22, 40, 23, 41, 40, 41, 24, 42, 25, 43, 42, 43, 26, 44, 27, 45, 44, 45, 12, 46, 28, 47, 46, 47, 28, 48, 29, 49, 48, 49, 30, 50, 31, 51, 50, 51, 32, 52, 33, 53, 52, 53, 34, 54, 35, 55, 54, 55, 36, 56, 37, 57, 56, 57, 38, 58, 39, 59, 58, 59, 40, 60, 41, 61, 60, 61, 44, 62, 45, 63, 62, 63, 46, 64, 47, 65, 64, 65, 48, 66, 49, 67, 66, 67, 52, 68, 53, 69, 68, 69, 56, 70, 57, 71, 70, 71, 59, 72, 39, 73, 72, 73, 58, 74, 59, 75, 74, 75, 60, 76, 61, 77, 76, 77, 62, 78, 63, 79, 78, 79, 68, 80, 69, 81, 80, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [3, 2, 10, 11], [6, 1, 16, 17], [8, 3, 20, 21], [5, 4, 14, 15], [3, 11, 24, 25], [9, 8, 22, 23], [7, 6, 18, 19], [4, 30, 31, 14], [11, 10, 26, 27], [29, 13, 12, 28], [7, 19, 34, 35], [14, 32, 33, 15], [28, 12, 46, 47], [19, 18, 36, 37], [29, 28, 48, 49], [21, 20, 38, 39], [25, 24, 42, 43], [23, 22, 40, 41], [30, 50, 51, 31], [27, 26, 44, 45], [35, 34, 54, 55], [32, 52, 53, 33], [47, 46, 64, 65], [37, 36, 56, 57], [49, 48, 66, 67], [41, 40, 60, 61], [69, 53, 52, 68], [57, 56, 70, 71], [45, 44, 62, 63], [38, 58, 59, 39], [39, 59, 72, 73], [61, 60, 76, 77], [81, 69, 68, 80], [63, 62, 78, 79], [58, 74, 75, 59]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[69,68],
      [63,62],
      [61,60],
      [59,58],
      [39,59],
      [57,56],
      [53,52],
      [49,48],
      [47,46],
      [45,44],
      [41,40],
      [39,38],
      [37,36],
      [35,34],
      [33,32],
      [31,30],
      [29,28],
      [28,12],
      [27,26],
      [25,24],
      [23,22],
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

obj0.userData.angles = [2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.63899189359274,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.63899189359274,
      2.65130652060517,
      2.63899189359274,
      2.65130652060517,
      2.63899189359274,
      2.63899189359274,
      2.65130652060517,
      2.65130652060517];

obj0.userData.subtrees = [[80,81],
      [78,79],
      [76,77],
      [74,75],
      [72,73],
      [70,71],
      [68,69,80,81],
      [66,67],
      [64,65],
      [62,63,78,79],
      [60,61,76,77],
      [58,59,72,73,74,75],
      [56,57,70,71],
      [54,55],
      [52,53,68,69,80,81],
      [50,51],
      [48,49,66,67],
      [46,47,64,65],
      [44,45,62,63,78,79],
      [42,43],
      [40,41,60,61,76,77],
      [38,39,58,59,72,73,74,75],
      [36,37,56,57,70,71],
      [34,35,54,55],
      [32,33,52,53,68,69,80,81],
      [30,31,50,51],
      [28,29,46,47,48,49,64,65,66,67],
      [26,27,44,45,62,63,78,79],
      [24,25,42,43],
      [22,23,40,41,60,61,76,77],
      [20,21,38,39,58,59,72,73,74,75],
      [18,19,34,35,36,37,54,55,56,57,70,71],
      [16,17],
      [14,15,30,31,32,33,50,51,52,53,68,69,80,81],
      [12,13,28,29,46,47,48,49,64,65,66,67],
      [10,11,24,25,26,27,42,43,44,45,62,63,78,79],
      [8,9,20,21,22,23,38,39,40,41,58,59,60,61,72,73,74,75,76,77],
      [6,7,16,17,18,19,34,35,36,37,54,55,56,57,70,71],
      [4,5,12,13,14,15,28,29,30,31,32,33,46,47,48,49,50,51,52,53,64,65,66,67,68,69,80,81]];

obj0.userData.polytoperoot = [[-0.310535679569319,-0.812992963832021,0],
      [0,-1.23002294544657,-0.158234849258631],
      [0.581990122981167,-0.0491375664460775,0.381966011250106]];

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
