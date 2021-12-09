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
obj0.userData.points.push(new PMPoint(0.541463, 0, 0));
obj0.userData.points.push(new PMPoint(0.613928, 0.536592, 0));
obj0.userData.points.push(new PMPoint(0.0724643, 0.536592, 0));
obj0.userData.points.push(new PMPoint(-0.306964, -0.446045, 0));
obj0.userData.points.push(new PMPoint(-0.11725, -0.806902, 0));
obj0.userData.points.push(new PMPoint(0.424214, -0.806902, 0));
obj0.userData.points.push(new PMPoint(0.731177, -0.360858, 0));
obj0.userData.points.push(new PMPoint(0.873685, -0.236301, 0));
obj0.userData.points.push(new PMPoint(1.3568, 0.00820684, 0));
obj0.userData.points.push(new PMPoint(1.42926, 0.544799, 0));
obj0.userData.points.push(new PMPoint(1.09704, 0.781101, 0));
obj0.userData.points.push(new PMPoint(-0.601914, 0.745978, 0));
obj0.userData.points.push(new PMPoint(-0.674379, 0.209386, 0));
obj0.userData.points.push(new PMPoint(0.496678, 1.23293, 0));
obj0.userData.points.push(new PMPoint(-0.0447854, 1.23293, 0));
obj0.userData.points.push(new PMPoint(0.907327, -1.05141, 0));
obj0.userData.points.push(new PMPoint(1.21429, -0.605366, 0));
obj0.userData.points.push(new PMPoint(-0.931988, -0.774639, 0));
obj0.userData.points.push(new PMPoint(-0.742273, -1.1355, 0));
obj0.userData.points.push(new PMPoint(-0.613928, -1.30884, 0));
obj0.userData.points.push(new PMPoint(-0.0724643, -1.30884, 0));
obj0.userData.points.push(new PMPoint(-0.695057, -0.124596, 0));
obj0.userData.points.push(new PMPoint(-1.00202, -0.570641, 0));
obj0.userData.points.push(new PMPoint(1.83855, 1.12022, 0));
obj0.userData.points.push(new PMPoint(1.50633, 1.35653, 0));
obj0.userData.points.push(new PMPoint(1.92069, 0.433242, 0));
obj0.userData.points.push(new PMPoint(1.99315, 0.969835, 0));
obj0.userData.points.push(new PMPoint(1.31354, 1.45323, 0));
obj0.userData.points.push(new PMPoint(0.830423, 1.20872, 0));
obj0.userData.points.push(new PMPoint(-0.290597, 1.14225, 0));
obj0.userData.points.push(new PMPoint(-0.964976, 1.35163, 0));
obj0.userData.points.push(new PMPoint(-1.08503, 0.50147, 0));
obj0.userData.points.push(new PMPoint(-1.15749, -0.0351223, 0));
obj0.userData.points.push(new PMPoint(0.803642, 1.67897, 0));
obj0.userData.points.push(new PMPoint(0.262178, 1.67897, 0));
obj0.userData.points.push(new PMPoint(1.41448, -1.54276, 0));
obj0.userData.points.push(new PMPoint(1.72144, -1.09672, 0));
obj0.userData.points.push(new PMPoint(0.214385, -1.48114, 0));
obj0.userData.points.push(new PMPoint(0.697498, -1.72565, 0));
obj0.userData.points.push(new PMPoint(-1.55701, -1.10323, 0));
obj0.userData.points.push(new PMPoint(-1.3673, -1.46409, 0));
obj0.userData.points.push(new PMPoint(-0.306964, -1.75488, 0));
obj0.userData.points.push(new PMPoint(0.2345, -1.75488, 0));
obj0.userData.points.push(new PMPoint(2.24783, 1.69565, 0));
obj0.userData.points.push(new PMPoint(1.91561, 1.93195, 0));
obj0.userData.points.push(new PMPoint(2.32164, 0.0693455, 0));
obj0.userData.points.push(new PMPoint(2.39411, 0.605938, 0));
obj0.userData.points.push(new PMPoint(-1.46917, 1.15421, 0));
obj0.userData.points.push(new PMPoint(-1.10611, 0.548561, 0));
obj0.userData.points.push(new PMPoint(-0.218133, 1.67884, 0));
obj0.userData.points.push(new PMPoint(-0.892512, 1.88822, 0));
obj0.userData.points.push(new PMPoint(-1.51598, 1.06085, 0));
obj0.userData.points.push(new PMPoint(-1.58844, 0.524262, 0));
obj0.userData.points.push(new PMPoint(0.306964, 2.18091, 0));
obj0.userData.points.push(new PMPoint(-0.2345, 2.18091, 0));
obj0.userData.points.push(new PMPoint(0.957769, -1.75574, 0));
obj0.userData.points.push(new PMPoint(1.46492, -2.24709, 0));
obj0.userData.points.push(new PMPoint(-1.5253, -1.98199, 0));
obj0.userData.points.push(new PMPoint(-0.900275, -1.65339, 0));
obj0.userData.points.push(new PMPoint(-2.09847, -1.10323, 0));
obj0.userData.points.push(new PMPoint(-2.40544, -1.54928, 0));
obj0.userData.points.push(new PMPoint(-2.21572, -1.91014, 0));
obj0.userData.points.push(new PMPoint(-1.67426, -1.91014, 0));
obj0.userData.points.push(new PMPoint(-0.424214, -2.45122, 0));
obj0.userData.points.push(new PMPoint(0.11725, -2.45122, 0));
obj0.userData.points.push(new PMPoint(2.37293, 1.20749, 0));
obj0.userData.points.push(new PMPoint(2.78222, 1.78292, 0));
obj0.userData.points.push(new PMPoint(2.73095, 1.94016, 0));
obj0.userData.points.push(new PMPoint(2.80341, 2.47675, 0));
obj0.userData.points.push(new PMPoint(2.47119, 2.71305, 0));
obj0.userData.points.push(new PMPoint(1.98808, 2.46854, 0));
obj0.userData.points.push(new PMPoint(3.0274, 0.0923497, 0));
obj0.userData.points.push(new PMPoint(3.09987, 0.628942, 0));
obj0.userData.points.push(new PMPoint(-1.09314, 1.87771, 0));
obj0.userData.points.push(new PMPoint(-1.59733, 1.68029, 0));
obj0.userData.points.push(new PMPoint(-2.28819, -2.44673, 0));
obj0.userData.points.push(new PMPoint(-1.74673, -2.44673, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 4, 5, 5, 6, 1, 7, 6, 7, 1, 8, 8, 9, 9, 10, 2, 11, 10, 11, 3, 12, 0, 13, 12, 13, 2, 14, 3, 15, 14, 15, 6, 16, 7, 17, 16, 17, 4, 18, 5, 19, 18, 19, 5, 20, 6, 21, 20, 21, 0, 22, 4, 23, 22, 23, 10, 24, 11, 25, 24, 25, 9, 26, 10, 27, 26, 27, 11, 28, 2, 29, 28, 29, 3, 30, 12, 31, 30, 31, 12, 32, 13, 33, 32, 33, 14, 34, 15, 35, 34, 35, 16, 36, 17, 37, 36, 37, 6, 38, 16, 39, 38, 39, 18, 40, 19, 41, 40, 41, 20, 42, 21, 43, 42, 43, 24, 44, 25, 45, 44, 45, 26, 46, 27, 47, 46, 47, 31, 48, 12, 49, 48, 49, 30, 50, 31, 51, 50, 51, 32, 52, 33, 53, 52, 53, 34, 54, 35, 55, 54, 55, 16, 56, 36, 57, 56, 57, 41, 58, 19, 59, 58, 59, 40, 60, 60, 61, 61, 62, 41, 63, 62, 63, 42, 64, 43, 65, 64, 65, 24, 66, 44, 67, 66, 67, 44, 68, 68, 69, 69, 70, 45, 71, 70, 71, 46, 72, 47, 73, 72, 73, 31, 74, 48, 75, 74, 75, 62, 76, 63, 77, 76, 77];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [7, 1, 0, 4, 5, 6], [2, 1, 8, 9, 10, 11], [17, 16, 36, 37], [11, 10, 24, 25], [17, 7, 6, 16], [16, 6, 38, 39], [0, 3, 12, 13], [5, 4, 18, 19], [10, 9, 26, 27], [16, 56, 57, 36], [3, 2, 14, 15], [12, 31, 48, 49], [6, 5, 20, 21], [0, 22, 23, 4], [43, 42, 64, 65], [3, 30, 31, 12], [2, 11, 28, 29], [30, 50, 51, 31], [13, 12, 32, 33], [15, 14, 34, 35], [21, 20, 42, 43], [27, 26, 46, 47], [19, 18, 40, 41], [25, 24, 44, 45], [33, 32, 52, 53], [19, 41, 58, 59], [47, 46, 72, 73], [35, 34, 54, 55], [40, 60, 61, 62, 63, 41], [24, 66, 67, 44], [31, 74, 75, 48], [45, 44, 68, 69, 70, 71], [76, 77, 63, 62]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[63,62],
      [48,31],
      [47,46],
      [45,44],
      [44,24],
      [43,42],
      [41,40],
      [19,41],
      [36,16],
      [35,34],
      [33,32],
      [31,30],
      [12,31],
      [27,26],
      [25,24],
      [21,20],
      [19,18],
      [16,6],
      [17,16],
      [15,14],
      [13,12],
      [12,3],
      [2,11],
      [10,9],
      [11,10],
      [4,0],
      [6,5],
      [5,4],
      [7,6],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.21617495235124,
      2.4075746575067,
      2.95019294843432,
      2.48923451380543,
      2.28452070573966,
      2.95019294843432,
      2.48923451380543,
      2.28452070573966,
      2.65015741018271,
      2.87451913743912,
      2.87451913743912,
      2.65015741018271,
      2.65015741018271,
      2.87451913743912,
      2.41186499736283,
      2.87451913743912,
      2.41186499736283,
      2.4075746575067,
      2.4075746575067,
      2.95019294843432,
      2.95019294843432,
      2.65015741018271,
      2.11790891862778,
      2.11790891862778,
      2.48923451380543,
      2.11790891862778,
      2.11790891862778,
      2.48923451380543,
      2.21617495235124,
      2.4075746575067,
      2.4075746575067,
      2.21617495235124,
      2.21617495235124];

obj0.userData.subtrees = [[76,77],
      [74,75],
      [72,73],
      [68,69,70,71],
      [66,67],
      [64,65],
      [60,61,62,63,76,77],
      [58,59],
      [56,57],
      [54,55],
      [52,53],
      [50,51],
      [48,49,74,75],
      [46,47,72,73],
      [44,45,66,67,68,69,70,71],
      [42,43,64,65],
      [40,41,58,59,60,61,62,63,76,77],
      [38,39],
      [36,37,56,57],
      [34,35,54,55],
      [32,33,52,53],
      [30,31,48,49,50,51,74,75],
      [28,29],
      [26,27,46,47,72,73],
      [24,25,44,45,66,67,68,69,70,71],
      [22,23],
      [20,21,42,43,64,65],
      [18,19,40,41,58,59,60,61,62,63,76,77],
      [16,17,36,37,38,39,56,57],
      [14,15,34,35,54,55],
      [12,13,30,31,32,33,48,49,50,51,52,53,74,75],
      [8,9,10,11,24,25,26,27,28,29,44,45,46,47,66,67,68,69,70,71,72,73],
      [4,5,6,7,16,17,18,19,20,21,22,23,36,37,38,39,40,41,42,43,56,57,58,59,60,61,62,63,64,65,76,77]];

obj0.userData.polytoperoot = [[-0.911618506985401,-0.407688190233245,-0.455809253492701],
      [-3.96880269655148,0,-3.96880269655148],
      [1.61803398874989,2,-1.61803398874989]];

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
