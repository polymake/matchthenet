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
obj0.userData.points.push(new PMPoint(0.361983, 0, 0));
obj0.userData.points.push(new PMPoint(0.103424, 0.253335, 0));
obj0.userData.points.push(new PMPoint(-0.258559, 0.253335, 0));
obj0.userData.points.push(new PMPoint(0.0517118, -0.35827, 0));
obj0.userData.points.push(new PMPoint(0.413695, -0.35827, 0));
obj0.userData.points.push(new PMPoint(-0.251172, -0.108572, 0));
obj0.userData.points.push(new PMPoint(0.00738741, -0.361908, 0));
obj0.userData.points.push(new PMPoint(0.649657, 0.219717, 0));
obj0.userData.points.push(new PMPoint(0.391098, 0.473052, 0));
obj0.userData.points.push(new PMPoint(0.361983, 0.506671, 0));
obj0.userData.points.push(new PMPoint(0, 0.506671, 0));
obj0.userData.points.push(new PMPoint(0, -0.71654, 0));
obj0.userData.points.push(new PMPoint(0.816942, -1.65986, 0));
obj0.userData.points.push(new PMPoint(1.17892, -1.65986, 0));
obj0.userData.points.push(new PMPoint(1.23064, -1.30159, 0));
obj0.userData.points.push(new PMPoint(1.46405, -1.03207, 0));
obj0.userData.points.push(new PMPoint(1.81126, -0.929709, 0));
obj0.userData.points.push(new PMPoint(1.75954, -0.571439, 0));
obj0.userData.points.push(new PMPoint(0.709191, 0.102363, 0));
obj0.userData.points.push(new PMPoint(-0.464972, -0.40067, 0));
obj0.userData.points.push(new PMPoint(-0.206412, -0.654006, 0));
obj0.userData.points.push(new PMPoint(-0.506565, -0.0103402, 0));
obj0.userData.points.push(new PMPoint(-0.499178, -0.372248, 0));
obj0.userData.points.push(new PMPoint(1.89338, 0.321779, 0));
obj0.userData.points.push(new PMPoint(2.10717, 0.613877, 0));
obj0.userData.points.push(new PMPoint(1.84862, 0.867212, 0));
obj0.userData.points.push(new PMPoint(0.604897, 0.76515, 0));
obj0.userData.points.push(new PMPoint(0.413695, 0.864941, 0));
obj0.userData.points.push(new PMPoint(0.0517118, 0.864941, 0));
obj0.userData.points.push(new PMPoint(0.00738741, 0.868578, 0));
obj0.userData.points.push(new PMPoint(-0.251172, 0.615243, 0));
obj0.userData.points.push(new PMPoint(1.52613, -1.76223, 0));
obj0.userData.points.push(new PMPoint(1.57784, -1.40396, 0));
obj0.userData.points.push(new PMPoint(-0.361983, -0.71654, 0));
obj0.userData.points.push(new PMPoint(-0.413695, -1.07481, 0));
obj0.userData.points.push(new PMPoint(0.403247, -2.01813, 0));
obj0.userData.points.push(new PMPoint(0.76523, -2.01813, 0));
obj0.userData.points.push(new PMPoint(0.868653, -2.01813, 0));
obj0.userData.points.push(new PMPoint(1.23064, -2.01813, 0));
obj0.userData.points.push(new PMPoint(2.17324, -0.929709, 0));
obj0.userData.points.push(new PMPoint(2.12153, -0.571439, 0));
obj0.userData.points.push(new PMPoint(-0.620241, 0.238564, 0));
obj0.userData.points.push(new PMPoint(-0.868246, -0.025112, 0));
obj0.userData.points.push(new PMPoint(-0.863705, -0.0693529, 0));
obj0.userData.points.push(new PMPoint(-0.856318, -0.43126, 0));
obj0.userData.points.push(new PMPoint(2.06242, 1.15931, 0));
obj0.userData.points.push(new PMPoint(1.80386, 1.41265, 0));
obj0.userData.points.push(new PMPoint(0.560138, 1.31058, 0));
obj0.userData.points.push(new PMPoint(0.346338, 1.01849, 0));
obj0.userData.points.push(new PMPoint(2.39485, 0.833593, 0));
obj0.userData.points.push(new PMPoint(2.13629, 1.08693, 0));
obj0.userData.points.push(new PMPoint(-0.206412, 1.16068, 0));
obj0.userData.points.push(new PMPoint(-0.464972, 0.907341, 0));
obj0.userData.points.push(new PMPoint(1.35529, -1.97597, 0));
obj0.userData.points.push(new PMPoint(1.7025, -2.07834, 0));
obj0.userData.points.push(new PMPoint(1.73993, -2.05432, 0));
obj0.userData.points.push(new PMPoint(1.79164, -1.69605, 0));
obj0.userData.points.push(new PMPoint(-0.775678, -1.07481, 0));
obj0.userData.points.push(new PMPoint(-0.82739, -1.43308, 0));
obj0.userData.points.push(new PMPoint(-0.0104479, -2.3764, 0));
obj0.userData.points.push(new PMPoint(0.351535, -2.3764, 0));
obj0.userData.points.push(new PMPoint(0.454959, -2.3764, 0));
obj0.userData.points.push(new PMPoint(0.816942, -2.3764, 0));
obj0.userData.points.push(new PMPoint(1.12721, -2.27147, 0));
obj0.userData.points.push(new PMPoint(1.4892, -2.27147, 0));
obj0.userData.points.push(new PMPoint(2.46091, -1.14943, 0));
obj0.userData.points.push(new PMPoint(2.4092, -0.791156, 0));
obj0.userData.points.push(new PMPoint(2.35009, 1.37903, 0));
obj0.userData.points.push(new PMPoint(2.09153, 1.63236, 0));
obj0.userData.points.push(new PMPoint(2.75683, 0.833593, 0));
obj0.userData.points.push(new PMPoint(2.49827, 1.08693, 0));
obj0.userData.points.push(new PMPoint(0.713518, -2.62974, 0));
obj0.userData.points.push(new PMPoint(1.0755, -2.62974, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 3, 6, 0, 7, 6, 7, 1, 8, 2, 9, 8, 9, 2, 10, 3, 11, 10, 11, 4, 12, 12, 13, 13, 14, 5, 15, 14, 15, 5, 16, 16, 17, 17, 18, 1, 19, 18, 19, 6, 20, 7, 21, 20, 21, 3, 22, 6, 23, 22, 23, 8, 24, 24, 25, 25, 26, 9, 27, 26, 27, 10, 28, 11, 29, 28, 29, 11, 30, 3, 31, 30, 31, 14, 32, 15, 33, 32, 33, 12, 34, 34, 35, 35, 36, 13, 37, 36, 37, 13, 38, 14, 39, 38, 39, 17, 40, 18, 41, 40, 41, 3, 42, 22, 43, 42, 43, 22, 44, 23, 45, 44, 45, 26, 46, 46, 47, 47, 48, 27, 49, 48, 49, 25, 50, 26, 51, 50, 51, 30, 52, 31, 53, 52, 53, 14, 54, 32, 55, 54, 55, 32, 56, 33, 57, 56, 57, 35, 58, 58, 59, 59, 60, 36, 61, 60, 61, 36, 62, 37, 63, 62, 63, 38, 64, 39, 65, 64, 65, 40, 66, 41, 67, 66, 67, 46, 68, 47, 69, 68, 69, 50, 70, 51, 71, 70, 71, 62, 72, 63, 73, 72, 73];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [0, 4, 5, 1], [0, 3, 6, 7], [7, 6, 20, 21], [9, 8, 24, 25, 26, 27], [2, 1, 8, 9], [11, 10, 28, 29], [15, 5, 4, 12, 13, 14], [3, 2, 10, 11], [6, 3, 22, 23], [19, 1, 5, 16, 17, 18], [18, 17, 40, 41], [47, 46, 68, 69], [3, 11, 30, 31], [33, 15, 14, 32], [3, 42, 43, 22], [23, 22, 44, 45], [12, 34, 35, 36, 37, 13], [31, 30, 52, 53], [41, 40, 66, 67], [27, 26, 46, 47, 48, 49], [59, 60, 61, 36, 35, 58], [39, 38, 64, 65], [14, 13, 38, 39], [32, 14, 54, 55], [33, 32, 56, 57], [26, 25, 50, 51], [37, 36, 62, 63], [51, 50, 70, 71], [72, 73, 63, 62]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xBA3B26, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[63,62],
      [51,50],
      [47,46],
      [41,40],
      [39,38],
      [37,36],
      [36,35],
      [33,32],
      [32,14],
      [31,30],
      [26,25],
      [27,26],
      [23,22],
      [22,3],
      [18,17],
      [14,13],
      [13,12],
      [15,14],
      [3,11],
      [11,10],
      [9,8],
      [6,3],
      [7,6],
      [1,5],
      [5,4],
      [3,2],
      [2,1],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.65489769851502,
      2.65489769851502,
      2.41885840577638,
      2.65489769851502,
      2.65489769851502,
      2.41885840577638,
      2.09439510239319,
      2.65489769851502,
      2.65489769851502,
      2.65489769851502,
      2.41885840577638,
      2.09439510239319,
      2.65489769851502,
      2.41885840577638,
      2.41885840577638,
      2.41885840577638,
      2.09439510239319,
      2.41885840577638,
      2.41885840577638,
      2.65489769851502,
      2.41885840577638,
      2.41885840577638,
      2.65489769851502,
      2.41885840577638,
      2.41885840577638,
      2.41885840577638,
      2.65489769851502,
      2.41885840577638,
      2.65489769851502];

obj0.userData.subtrees = [[72,73],
      [70,71],
      [68,69],
      [66,67],
      [64,65],
      [62,63,72,73],
      [58,59,60,61],
      [56,57],
      [54,55],
      [52,53],
      [50,51,70,71],
      [46,47,48,49,68,69],
      [44,45],
      [42,43],
      [40,41,66,67],
      [38,39,64,65],
      [34,35,36,37,58,59,60,61,62,63,72,73],
      [32,33,54,55,56,57],
      [30,31,52,53],
      [28,29],
      [24,25,26,27,46,47,48,49,50,51,68,69,70,71],
      [22,23,42,43,44,45],
      [20,21],
      [16,17,18,19,40,41,66,67],
      [12,13,14,15,32,33,34,35,36,37,38,39,54,55,56,57,58,59,60,61,62,63,64,65,72,73],
      [10,11,28,29,30,31,52,53],
      [8,9,24,25,26,27,46,47,48,49,50,51,68,69,70,71],
      [6,7,20,21,22,23,42,43,44,45],
      [4,5,12,13,14,15,16,17,18,19,32,33,34,35,36,37,38,39,40,41,54,55,56,57,58,59,60,61,62,63,64,65,66,67,72,73]];

obj0.userData.polytoperoot = [[-0.857291443356757,-0.522160389985015,-0.522160389985015],
      [-6.63843248486975,0.670617864654555,-2.9839073101076],
      [1.09175170953614,0.0917517095361371,-2.40824829046386]];

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
