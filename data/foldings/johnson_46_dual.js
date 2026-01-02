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
obj0.userData.points.push(new PMPoint(0.742551, 0, 0));
obj0.userData.points.push(new PMPoint(0.753742, 0.409291, 0));
obj0.userData.points.push(new PMPoint(0.404369, 0.622791, 0));
obj0.userData.points.push(new PMPoint(0.404369, -0.622791, 0));
obj0.userData.points.push(new PMPoint(0.753742, -0.409291, 0));
obj0.userData.points.push(new PMPoint(1.64719, 0.222238, 0));
obj0.userData.points.push(new PMPoint(1.71695, 0.524175, 0));
obj0.userData.points.push(new PMPoint(1.47893, 0.722625, 0));
obj0.userData.points.push(new PMPoint(0.0671837, 0.855063, 0));
obj0.userData.points.push(new PMPoint(-0.30214, 0.678302, 0));
obj0.userData.points.push(new PMPoint(1.41146, 0.846889, 0));
obj0.userData.points.push(new PMPoint(1.37463, 1.15458, 0));
obj0.userData.points.push(new PMPoint(1.0834, 1.2605, 0));
obj0.userData.points.push(new PMPoint(1.47893, -0.722625, 0));
obj0.userData.points.push(new PMPoint(1.71695, -0.524175, 0));
obj0.userData.points.push(new PMPoint(1.64719, -0.222238, 0));
obj0.userData.points.push(new PMPoint(-0.30214, -0.678302, 0));
obj0.userData.points.push(new PMPoint(0.0671837, -0.855063, 0));
obj0.userData.points.push(new PMPoint(1.0834, -1.2605, 0));
obj0.userData.points.push(new PMPoint(1.37463, -1.15458, 0));
obj0.userData.points.push(new PMPoint(1.41146, -0.846889, 0));
obj0.userData.points.push(new PMPoint(1.8852, 0.0237879, 0));
obj0.userData.points.push(new PMPoint(2.74033, 0.393264, 0));
obj0.userData.points.push(new PMPoint(2.48412, 0.712644, 0));
obj0.userData.points.push(new PMPoint(2.44214, 0.83751, 0));
obj0.userData.points.push(new PMPoint(2.45333, 1.2468, 0));
obj0.userData.points.push(new PMPoint(1.54869, 1.02456, 0));
obj0.userData.points.push(new PMPoint(0.710608, 1.50255, 0));
obj0.userData.points.push(new PMPoint(0.495356, 1.72548, 0));
obj0.userData.points.push(new PMPoint(0.199299, 1.63392, 0));
obj0.userData.points.push(new PMPoint(-0.68057, 0.521987, 0));
obj0.userData.points.push(new PMPoint(-0.733439, 0.115971, 0));
obj0.userData.points.push(new PMPoint(0.0583313, 1.645, 0));
obj0.userData.points.push(new PMPoint(-0.219794, 1.78167, 0));
obj0.userData.points.push(new PMPoint(-0.467222, 1.59509, 0));
obj0.userData.points.push(new PMPoint(2.05366, 1.79229, 0));
obj0.userData.points.push(new PMPoint(1.70428, 2.00579, 0));
obj0.userData.points.push(new PMPoint(1.04657, 1.5682, 0));
obj0.userData.points.push(new PMPoint(1.54869, -1.02456, 0));
obj0.userData.points.push(new PMPoint(2.31587, -1.21303, 0));
obj0.userData.points.push(new PMPoint(2.57207, -0.893651, 0));
obj0.userData.points.push(new PMPoint(0.199299, -1.63392, 0));
obj0.userData.points.push(new PMPoint(0.495356, -1.72548, 0));
obj0.userData.points.push(new PMPoint(0.710608, -1.50255, 0));
obj0.userData.points.push(new PMPoint(-0.467222, -1.59509, 0));
obj0.userData.points.push(new PMPoint(-0.219794, -1.78167, 0));
obj0.userData.points.push(new PMPoint(0.0583313, -1.645, 0));
obj0.userData.points.push(new PMPoint(1.04657, -1.5682, 0));
obj0.userData.points.push(new PMPoint(1.82213, -2.0842, 0));
obj0.userData.points.push(new PMPoint(1.95048, -1.69539, 0));
obj0.userData.points.push(new PMPoint(3.33202, 0.841902, 0));
obj0.userData.points.push(new PMPoint(2.63352, 1.09386, 0));
obj0.userData.points.push(new PMPoint(0.627472, 2.50434, 0));
obj0.userData.points.push(new PMPoint(0.290287, 2.73661, 0));
obj0.userData.points.push(new PMPoint(-0.0159524, 1.85686, 0));
obj0.userData.points.push(new PMPoint(-0.873239, 1.41424, 0));
obj0.userData.points.push(new PMPoint(-1.17744, 1.3551, 0));
obj0.userData.points.push(new PMPoint(-1.26187, 1.05694, 0));
obj0.userData.points.push(new PMPoint(-1.34793, 0.944736, 0));
obj0.userData.points.push(new PMPoint(-1.61401, 0.785894, 0));
obj0.userData.points.push(new PMPoint(-1.59226, 0.476767, 0));
obj0.userData.points.push(new PMPoint(-0.384876, 2.69846, 0));
obj0.userData.points.push(new PMPoint(-0.754199, 2.5217, 0));
obj0.userData.points.push(new PMPoint(-0.745347, 1.73176, 0));
obj0.userData.points.push(new PMPoint(2.45802, 2.41508, 0));
obj0.userData.points.push(new PMPoint(1.71547, 2.41508, 0));
obj0.userData.points.push(new PMPoint(2.46527, -1.59424, 0));
obj0.userData.points.push(new PMPoint(3.16377, -1.34229, 0));
obj0.userData.points.push(new PMPoint(-0.0159524, -1.85686, 0));
obj0.userData.points.push(new PMPoint(0.243754, -2.60294, 0));
obj0.userData.points.push(new PMPoint(0.651144, -2.64389, 0));
obj0.userData.points.push(new PMPoint(-0.745347, -1.73176, 0));
obj0.userData.points.push(new PMPoint(-0.755785, -2.66324, 0));
obj0.userData.points.push(new PMPoint(-0.359792, -2.55915, 0));
obj0.userData.points.push(new PMPoint(-1.75874, 1.89005, 0));
obj0.userData.points.push(new PMPoint(-2.13717, 1.73374, 0));
obj0.userData.points.push(new PMPoint(-1.56607, 0.997803, 0));
obj0.userData.points.push(new PMPoint(-0.687015, 3.37676, 0));
obj0.userData.points.push(new PMPoint(-1.09138, 2.75397, 0));
obj0.userData.points.push(new PMPoint(2.59362, -1.98305, 0));
obj0.userData.points.push(new PMPoint(2.99471, -2.06534, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 6, 7, 2, 8, 7, 8, 3, 9, 0, 10, 9, 10, 2, 11, 11, 12, 3, 13, 12, 13, 5, 14, 14, 15, 1, 16, 15, 16, 0, 17, 4, 18, 17, 18, 4, 19, 19, 20, 5, 21, 20, 21, 6, 22, 22, 23, 7, 24, 23, 24, 7, 25, 25, 26, 8, 27, 26, 27, 3, 28, 28, 29, 9, 30, 29, 30, 10, 31, 0, 32, 31, 32, 9, 33, 33, 34, 10, 35, 34, 35, 12, 36, 36, 37, 13, 38, 37, 38, 14, 39, 39, 40, 15, 41, 40, 41, 18, 42, 42, 43, 4, 44, 43, 44, 17, 45, 45, 46, 18, 47, 46, 47, 19, 48, 48, 49, 20, 50, 49, 50, 23, 51, 24, 52, 51, 52, 29, 53, 53, 54, 30, 55, 54, 55, 10, 56, 56, 57, 31, 58, 57, 58, 31, 59, 59, 60, 32, 61, 60, 61, 34, 62, 62, 63, 35, 64, 63, 64, 36, 65, 37, 66, 65, 66, 40, 67, 41, 68, 67, 68, 42, 69, 69, 70, 43, 71, 70, 71, 45, 72, 72, 73, 46, 74, 73, 74, 57, 75, 75, 76, 58, 77, 76, 77, 62, 78, 63, 79, 78, 79, 67, 80, 68, 81, 80, 81];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [2, 1, 6, 7, 8], [0, 3, 9, 10], [16, 1, 5, 14, 15], [3, 2, 11, 12, 13], [0, 17, 18, 4], [3, 28, 29, 30, 9], [21, 5, 4, 19, 20], [0, 10, 31, 32], [44, 4, 18, 42, 43], [10, 9, 33, 34, 35], [10, 56, 57, 58, 31], [17, 45, 46, 47, 18], [32, 31, 59, 60, 61], [7, 6, 22, 23, 24], [15, 14, 39, 40, 41], [8, 7, 25, 26, 27], [13, 12, 36, 37, 38], [20, 19, 48, 49, 50], [43, 42, 69, 70, 71], [29, 53, 54, 55, 30], [35, 34, 62, 63, 64], [45, 72, 73, 74, 46], [57, 75, 76, 77, 58], [24, 23, 51, 52], [37, 36, 65, 66], [62, 78, 79, 63], [68, 67, 80, 81], [41, 40, 67, 68]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[68,67],
      [63,62],
      [58,57],
      [46,45],
      [43,42],
      [41,40],
      [37,36],
      [35,34],
      [32,31],
      [31,10],
      [30,29],
      [24,23],
      [20,19],
      [18,17],
      [4,18],
      [15,14],
      [13,12],
      [10,9],
      [0,10],
      [9,3],
      [8,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.33921022994151,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.50313724561367,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.33921022994151];

obj0.userData.subtrees = [[80,81],
      [78,79],
      [75,76,77],
      [72,73,74],
      [69,70,71],
      [67,68,80,81],
      [65,66],
      [62,63,64,78,79],
      [59,60,61],
      [56,57,58,75,76,77],
      [53,54,55],
      [51,52],
      [48,49,50],
      [45,46,47,72,73,74],
      [42,43,44,69,70,71],
      [39,40,41,67,68,80,81],
      [36,37,38,65,66],
      [33,34,35,62,63,64,78,79],
      [31,32,56,57,58,59,60,61,75,76,77],
      [28,29,30,53,54,55],
      [25,26,27],
      [22,23,24,51,52],
      [19,20,21,48,49,50],
      [17,18,42,43,44,45,46,47,69,70,71,72,73,74],
      [14,15,16,39,40,41,67,68,80,81],
      [11,12,13,36,37,38,65,66],
      [9,10,28,29,30,31,32,33,34,35,53,54,55,56,57,58,59,60,61,62,63,64,75,76,77,78,79],
      [6,7,8,22,23,24,25,26,27,51,52],
      [4,5,14,15,16,17,18,19,20,21,39,40,41,42,43,44,45,46,47,48,49,50,67,68,69,70,71,72,73,74,80,81]];

obj0.userData.polytoperoot = [[0,-1.19853950053886,-0.74073814819234],
      [-0.37084205305535,-0.872084297462969,0.0610573094141591],
      [-0.649152622717063,0.274696855652065,-0.0192323734751765]];

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
