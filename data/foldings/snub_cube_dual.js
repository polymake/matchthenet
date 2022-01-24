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
obj0.userData.points.push(new PMPoint(0.650803, 0, 0));
obj0.userData.points.push(new PMPoint(0.843179, 0.416109, 0));
obj0.userData.points.push(new PMPoint(0.54621, 0.765344, 0));
obj0.userData.points.push(new PMPoint(0.104593, 0.642343, 0));
obj0.userData.points.push(new PMPoint(0.104593, -0.642343, 0));
obj0.userData.points.push(new PMPoint(0.54621, -0.765344, 0));
obj0.userData.points.push(new PMPoint(0.843179, -0.416109, 0));
obj0.userData.points.push(new PMPoint(-0.27519, 0.899093, 0));
obj0.userData.points.push(new PMPoint(-0.667612, 0.662111, 0));
obj0.userData.points.push(new PMPoint(-0.617184, 0.206466, 0));
obj0.userData.points.push(new PMPoint(0.619886, 1.21781, 0));
obj0.userData.points.push(new PMPoint(0.0807293, 1.58231, 0));
obj0.userData.points.push(new PMPoint(-0.192376, 0.991578, 0));
obj0.userData.points.push(new PMPoint(1.47012, 0.590727, 0));
obj0.userData.points.push(new PMPoint(1.19701, 1.18145, 0));
obj0.userData.points.push(new PMPoint(0.738586, 1.18145, 0));
obj0.userData.points.push(new PMPoint(0.947772, -0.349235, 0));
obj0.userData.points.push(new PMPoint(1.38939, -0.226234, 0));
obj0.userData.points.push(new PMPoint(1.49398, 0.416109, 0));
obj0.userData.points.push(new PMPoint(-0.617184, -0.206466, 0));
obj0.userData.points.push(new PMPoint(-0.667612, -0.662111, 0));
obj0.userData.points.push(new PMPoint(-0.27519, -0.899093, 0));
obj0.userData.points.push(new PMPoint(-0.192376, -0.991578, 0));
obj0.userData.points.push(new PMPoint(0, -1.40769, 0));
obj0.userData.points.push(new PMPoint(0.650803, -1.40769, 0));
obj0.userData.points.push(new PMPoint(0.819316, -1.35607, 0));
obj0.userData.points.push(new PMPoint(1.35847, -0.991578, 0));
obj0.userData.points.push(new PMPoint(1.2848, -0.53911, 0));
obj0.userData.points.push(new PMPoint(-0.34678, 1.54595, 0));
obj0.userData.points.push(new PMPoint(-0.97372, 1.37133, 0));
obj0.userData.points.push(new PMPoint(-1.0474, 0.918861, 0));
obj0.userData.points.push(new PMPoint(-1.10236, 0.807546, 0));
obj0.userData.points.push(new PMPoint(-1.54876, 0.333977, 0));
obj0.userData.points.push(new PMPoint(-1.00961, -0.0305155, 0));
obj0.userData.points.push(new PMPoint(1.01231, 1.45479, 0));
obj0.userData.points.push(new PMPoint(0.96188, 1.91044, 0));
obj0.userData.points.push(new PMPoint(0.527134, 2.05587, 0));
obj0.userData.points.push(new PMPoint(2.00927, 0.95522, 0));
obj0.userData.points.push(new PMPoint(1.9356, 1.40769, 0));
obj0.userData.points.push(new PMPoint(1.49398, 1.53069, 0));
obj0.userData.points.push(new PMPoint(1.76917, -0.482984, 0));
obj0.userData.points.push(new PMPoint(2.16159, -0.246002, 0));
obj0.userData.points.push(new PMPoint(2.11117, 0.209643, 0));
obj0.userData.points.push(new PMPoint(-1.20677, -1.0266, 0));
obj0.userData.points.push(new PMPoint(-0.760365, -1.50017, 0));
obj0.userData.points.push(new PMPoint(-0.325619, -1.35474, 0));
obj0.userData.points.push(new PMPoint(-0.192376, -1.8238, 0));
obj0.userData.points.push(new PMPoint(0.104593, -2.17303, 0));
obj0.userData.points.push(new PMPoint(0.54621, -2.05003, 0));
obj0.userData.points.push(new PMPoint(1.26572, -1.82964, 0));
obj0.userData.points.push(new PMPoint(1.70047, -1.6842, 0));
obj0.userData.points.push(new PMPoint(1.75089, -1.22856, 0));
obj0.userData.points.push(new PMPoint(-0.619886, 2.13667, 0));
obj0.userData.points.push(new PMPoint(-1.07831, 2.13667, 0));
obj0.userData.points.push(new PMPoint(-1.27069, 1.72056, 0));
obj0.userData.points.push(new PMPoint(-1.3535, 1.62808, 0));
obj0.userData.points.push(new PMPoint(-1.74593, 1.3911, 0));
obj0.userData.points.push(new PMPoint(-1.67434, 0.744243, 0));
obj0.userData.points.push(new PMPoint(1.27633, 2.24402, 0));
obj0.userData.points.push(new PMPoint(1.0338, 2.84795, 0));
obj0.userData.points.push(new PMPoint(0.476705, 2.51152, 0));
obj0.userData.points.push(new PMPoint(2.45089, 0.832219, 0));
obj0.userData.points.push(new PMPoint(2.74786, 1.18145, 0));
obj0.userData.points.push(new PMPoint(2.47476, 1.77218, 0));
obj0.userData.points.push(new PMPoint(-1.60244, -1.54331, 0));
obj0.userData.points.push(new PMPoint(-1.38902, -1.94904, 0));
obj0.userData.points.push(new PMPoint(-0.931198, -1.92558, 0));
obj0.userData.points.push(new PMPoint(0.0309174, -2.6255, 0));
obj0.userData.points.push(new PMPoint(0.570074, -2.98999, 0));
obj0.userData.points.push(new PMPoint(0.843179, -2.39927, 0));
obj0.userData.points.push(new PMPoint(-1.4999, 2.63246, 0));
obj0.userData.points.push(new PMPoint(-1.92149, 2.13667, 0));
obj0.userData.points.push(new PMPoint(-1.72912, 1.72056, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 1, 7, 6, 7, 4, 8, 8, 9, 0, 10, 9, 10, 3, 11, 11, 12, 4, 13, 12, 13, 2, 14, 14, 15, 3, 16, 15, 16, 1, 17, 17, 18, 2, 19, 18, 19, 0, 20, 20, 21, 5, 22, 21, 22, 5, 23, 23, 24, 6, 25, 24, 25, 6, 26, 26, 27, 7, 28, 27, 28, 8, 29, 29, 30, 9, 31, 30, 31, 9, 32, 32, 33, 10, 34, 33, 34, 11, 35, 35, 36, 12, 37, 36, 37, 14, 38, 38, 39, 15, 40, 39, 40, 18, 41, 41, 42, 19, 43, 42, 43, 21, 44, 44, 45, 22, 46, 45, 46, 24, 47, 47, 48, 25, 49, 48, 49, 26, 50, 50, 51, 27, 52, 51, 52, 29, 53, 53, 54, 30, 55, 54, 55, 30, 56, 56, 57, 31, 58, 57, 58, 36, 59, 59, 60, 37, 61, 60, 61, 38, 62, 62, 63, 39, 64, 63, 64, 44, 65, 65, 66, 45, 67, 66, 67, 48, 68, 68, 69, 49, 70, 69, 70, 54, 71, 71, 72, 55, 73, 72, 73];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [0, 20, 21, 22, 5], [54, 71, 72, 73, 55], [38, 62, 63, 64, 39], [7, 1, 0, 5, 6], [36, 59, 60, 61, 37], [70, 49, 48, 68, 69], [0, 4, 8, 9, 10], [29, 53, 54, 55, 30], [4, 3, 11, 12, 13], [6, 5, 23, 24, 25], [27, 26, 50, 51, 52], [11, 35, 36, 37, 12], [25, 24, 47, 48, 49], [28, 7, 6, 26, 27], [8, 29, 30, 31, 9], [21, 44, 45, 46, 22], [31, 30, 56, 57, 58], [3, 2, 14, 15, 16], [19, 18, 41, 42, 43], [44, 65, 66, 67, 45], [2, 1, 17, 18, 19], [15, 14, 38, 39, 40], [10, 9, 32, 33, 34]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[55,54],
      [49,48],
      [45,44],
      [39,38],
      [37,36],
      [31,30],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [19,18],
      [15,14],
      [12,11],
      [10,9],
      [9,8],
      [7,6],
      [6,5],
      [5,0],
      [2,1],
      [3,2],
      [4,3],
      [0,4],
      [1,0]];

obj0.userData.angles = [2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881];

obj0.userData.subtrees = [[71,72,73],
      [68,69,70],
      [65,66,67],
      [62,63,64],
      [59,60,61],
      [56,57,58],
      [53,54,55,71,72,73],
      [50,51,52],
      [47,48,49,68,69,70],
      [44,45,46,65,66,67],
      [41,42,43],
      [38,39,40,62,63,64],
      [35,36,37,59,60,61],
      [32,33,34],
      [29,30,31,53,54,55,56,57,58,71,72,73],
      [26,27,28,50,51,52],
      [23,24,25,47,48,49,68,69,70],
      [20,21,22,44,45,46,65,66,67],
      [17,18,19,41,42,43],
      [14,15,16,38,39,40,62,63,64],
      [11,12,13,35,36,37,59,60,61],
      [8,9,10,29,30,31,32,33,34,53,54,55,56,57,58,71,72,73],
      [5,6,7,20,21,22,23,24,25,26,27,28,44,45,46,47,48,49,50,51,52,65,66,67,68,69,70]];

obj0.userData.polytoperoot = [[0,0,-1.05163227216862],
      [0.516995367183729,-0.281084700750499,-0.950902731368115],
      [0.0873780253841527,-0.678573510428322,0.248091270169992]];

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
