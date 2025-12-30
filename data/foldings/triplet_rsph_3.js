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
obj0.userData.points.push(new PMPoint(0.747077, 0, 0));
obj0.userData.points.push(new PMPoint(0.12802, 0.374117, 0));
obj0.userData.points.push(new PMPoint(0.790705, -0.075941, 0));
obj0.userData.points.push(new PMPoint(0.302824, 0.99076, 0));
obj0.userData.points.push(new PMPoint(-0.811061, 1.19562, 0));
obj0.userData.points.push(new PMPoint(-0.068634, -0.542875, 0));
obj0.userData.points.push(new PMPoint(1.87618, -0.127019, 0));
obj0.userData.points.push(new PMPoint(1.18605, 1.27776, 0));
obj0.userData.points.push(new PMPoint(-0.307393, 1.54337, 0));
obj0.userData.points.push(new PMPoint(-1.22434, 1.011, 0));
obj0.userData.points.push(new PMPoint(0.770962, -0.978576, 0));
obj0.userData.points.push(new PMPoint(-0.697578, -0.94541, 0));
obj0.userData.points.push(new PMPoint(1.19046, -0.885468, 0));
obj0.userData.points.push(new PMPoint(1.68999, 0.967624, 0));
obj0.userData.points.push(new PMPoint(0.66642, 1.81975, 0));
obj0.userData.points.push(new PMPoint(0.0346966, 1.85536, 0));
obj0.userData.points.push(new PMPoint(-1.0841, -0.452923, 0));
obj0.userData.points.push(new PMPoint(-1.26085, 1.63215, 0));
obj0.userData.points.push(new PMPoint(-0.337597, -1.23948, 0));
obj0.userData.points.push(new PMPoint(1.94451, -1.01799, 0));
obj0.userData.points.push(new PMPoint(2.21724, 0.272009, 0));
obj0.userData.points.push(new PMPoint(1.15321, 1.51166, 0));
obj0.userData.points.push(new PMPoint(-0.179438, 2.15696, 0));
obj0.userData.points.push(new PMPoint(-1.6446, 0.18819, 0));
obj0.userData.points.push(new PMPoint(-1.831, 1.10549, 0));
obj0.userData.points.push(new PMPoint(0.485237, -1.72541, 0));
obj0.userData.points.push(new PMPoint(1.69488, -1.16174, 0));
obj0.userData.points.push(new PMPoint(2.22344, -0.377778, 0));
obj0.userData.points.push(new PMPoint(2.30442, -0.117844, 0));
obj0.userData.points.push(new PMPoint(1.87601, 1.11315, 0));
obj0.userData.points.push(new PMPoint(0.7518, 1.85825, 0));
obj0.userData.points.push(new PMPoint(0.0558671, 1.9466, 0));
obj0.userData.points.push(new PMPoint(-1.89374, -0.960532, 0));
obj0.userData.points.push(new PMPoint(-1.78003, 0.749897, 0));
obj0.userData.points.push(new PMPoint(-1.55748, 1.84126, 0));
obj0.userData.points.push(new PMPoint(0.721784, -1.55159, 0));
obj0.userData.points.push(new PMPoint(1.81641, -1.42894, 0));
obj0.userData.points.push(new PMPoint(2.65514, -0.884987, 0));
obj0.userData.points.push(new PMPoint(2.96895, -0.0729807, 0));
obj0.userData.points.push(new PMPoint(2.30315, 1.10099, 0));
obj0.userData.points.push(new PMPoint(1.2989, 1.91336, 0));
obj0.userData.points.push(new PMPoint(0.292765, 2.44282, 0));
obj0.userData.points.push(new PMPoint(-2.34929, -0.0702171, 0));
obj0.userData.points.push(new PMPoint(-2.34719, 0.452264, 0));
obj0.userData.points.push(new PMPoint(-2.20042, 1.58618, 0));
obj0.userData.points.push(new PMPoint(-1.36489, 2.17424, 0));
obj0.userData.points.push(new PMPoint(2.65968, -1.1239, 0));
obj0.userData.points.push(new PMPoint(2.84022, 0.568054, 0));
obj0.userData.points.push(new PMPoint(2.67816, 0.785128, 0));
obj0.userData.points.push(new PMPoint(-2.7058, -0.580131, 0));
obj0.userData.points.push(new PMPoint(-2.38566, 0.722654, 0));
obj0.userData.points.push(new PMPoint(-1.93179, 2.15611, 0));
obj0.userData.points.push(new PMPoint(-1.8518, 2.23192, 0));
obj0.userData.points.push(new PMPoint(3.2989, 0.166232, 0));
obj0.userData.points.push(new PMPoint(-2.61748, -0.182276, 0));
obj0.userData.points.push(new PMPoint(-2.57515, 0.632584, 0));
obj0.userData.points.push(new PMPoint(-2.3602, 1.72215, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 1, 4, 2, 4, 0, 5, 2, 5, 0, 6, 3, 6, 1, 7, 3, 7, 1, 8, 4, 8, 2, 9, 4, 9, 0, 10, 5, 10, 3, 11, 6, 11, 0, 12, 6, 12, 3, 13, 7, 13, 1, 14, 7, 14, 4, 15, 8, 15, 4, 16, 9, 16, 0, 17, 10, 17, 5, 18, 10, 18, 6, 19, 11, 19, 7, 20, 13, 20, 7, 21, 14, 21, 8, 22, 15, 22, 9, 23, 16, 23, 10, 24, 17, 24, 10, 25, 18, 25, 11, 26, 19, 26, 13, 27, 20, 27, 7, 28, 20, 28, 7, 29, 21, 29, 14, 30, 21, 30, 15, 31, 22, 31, 16, 32, 23, 32, 17, 33, 24, 33, 10, 34, 24, 34, 18, 35, 25, 35, 11, 36, 26, 36, 20, 37, 27, 37, 20, 38, 28, 38, 21, 39, 29, 39, 21, 40, 30, 40, 22, 41, 31, 41, 23, 42, 32, 42, 24, 43, 33, 43, 24, 44, 34, 44, 25, 45, 35, 45, 18, 46, 35, 46, 20, 47, 37, 47, 21, 48, 39, 48, 21, 49, 40, 49, 33, 50, 43, 50, 34, 51, 44, 51, 35, 52, 45, 52, 35, 53, 46, 53, 39, 54, 48, 54, 43, 55, 50, 55, 44, 56, 51, 56, 45, 57, 52, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [3, 1, 0], [11, 3, 6], [0, 6, 3], [4, 1, 8], [20, 13, 27], [2, 1, 4], [7, 3, 13], [7, 1, 3], [14, 1, 7], [0, 12, 6], [11, 26, 36], [20, 27, 37], [6, 19, 11], [28, 7, 20], [4, 8, 15], [2, 4, 9], [19, 26, 11], [21, 7, 29], [15, 8, 22], [7, 13, 20], [15, 22, 31], [0, 2, 5], [23, 16, 32], [0, 5, 10], [14, 7, 21], [9, 4, 16], [25, 35, 45], [14, 21, 30], [30, 21, 40], [31, 22, 41], [23, 32, 42], [9, 16, 23], [28, 20, 38], [34, 51, 44], [47, 20, 37], [21, 29, 39], [35, 18, 46], [33, 43, 50], [44, 51, 56], [0, 10, 17], [25, 18, 35], [10, 5, 18], [17, 24, 33], [17, 10, 24], [10, 34, 24], [10, 18, 25], [24, 34, 44], [33, 24, 43], [50, 43, 55], [48, 39, 54], [45, 52, 57], [35, 46, 53], [21, 39, 48], [45, 35, 52], [40, 21, 49]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[45,52],
      [44,51],
      [50,43],
      [48,39],
      [35,46],
      [45,35],
      [44,34],
      [33,43],
      [40,21],
      [21,39],
      [20,37],
      [35,18],
      [25,35],
      [24,34],
      [33,24],
      [23,32],
      [31,22],
      [30,21],
      [21,29],
      [28,20],
      [20,27],
      [11,26],
      [25,18],
      [24,10],
      [17,24],
      [23,16],
      [15,22],
      [14,21],
      [21,7],
      [7,20],
      [20,13],
      [11,19],
      [10,18],
      [17,10],
      [9,16],
      [15,8],
      [14,7],
      [7,13],
      [11,6],
      [10,5],
      [0,10],
      [9,4],
      [4,8],
      [1,7],
      [7,3],
      [6,0],
      [3,6],
      [0,5],
      [2,4],
      [4,1],
      [1,3],
      [3,0],
      [0,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.94499678040721,
      2.78787694853642,
      2.94727509502682,
      2.78308761817408,
      2.76193919441345,
      2.82345329959487,
      2.88740407920141,
      2.68786760682363,
      2.93304608658766,
      3.09925707071953,
      2.75611074318981,
      2.57531646937433,
      2.93657807313015,
      2.49472987164687,
      2.94673701685301,
      2.76703507329472,
      2.8379537446391,
      3.11246858805287,
      2.5944454044472,
      2.62673981131146,
      2.556291284989,
      3.06530830952719,
      2.9468184772569,
      2.47623908501927,
      1.89807017053655,
      2.98722863872861,
      2.86307497779226,
      2.6097113112812,
      2.56096064741727,
      2.94043051058019,
      2.99918409230455,
      2.95650595122811,
      2.76247870043322,
      2.99602160322152,
      2.52843254146409,
      3.12433329564947,
      2.76420052021337,
      2.67542789389864,
      2.48411350995174,
      2.02075235589819,
      2.97641690051156,
      2.30384490035114,
      2.36545771308113,
      3.07532567799079,
      2.42428729269069,
      1.92502116737046,
      2.89092551141552,
      3.04793020983381,
      1.97255488920452,
      2.82888929265945,
      1.97608461543683,
      3.07911897186214,
      1.97494478057584,
      2.55237580329349,
      2.77903040400567];

obj0.userData.subtrees = [[57],
      [56],
      [55],
      [54],
      [53],
      [52,57],
      [51,56],
      [50,55],
      [49],
      [48,54],
      [47],
      [46,53],
      [45,52,57],
      [44,51,56],
      [43,50,55],
      [42],
      [41],
      [40,49],
      [39,48,54],
      [38],
      [37,47],
      [36],
      [35,45,46,52,53,57],
      [34,44,51,56],
      [33,43,50,55],
      [32,42],
      [31,41],
      [30,40,49],
      [29,39,48,54],
      [28,38],
      [27,37,47],
      [26,36],
      [25,35,45,46,52,53,57],
      [24,33,34,43,44,50,51,55,56],
      [23,32,42],
      [22,31,41],
      [21,29,30,39,40,48,49,54],
      [20,27,28,37,38,47],
      [19,26,36],
      [18,25,35,45,46,52,53,57],
      [17,24,33,34,43,44,50,51,55,56],
      [16,23,32,42],
      [15,22,31,41],
      [14,21,29,30,39,40,48,49,54],
      [13,20,27,28,37,38,47],
      [12],
      [11,19,26,36],
      [10,17,18,24,25,33,34,35,43,44,45,46,50,51,52,53,55,56,57],
      [9,16,23,32,42],
      [8,15,22,31,41],
      [7,13,14,20,21,27,28,29,30,37,38,39,40,47,48,49,54],
      [6,11,12,19,26,36],
      [5,10,17,18,24,25,33,34,35,43,44,45,46,50,51,52,53,55,56,57],
      [4,8,9,15,16,22,23,31,32,41,42],
      [3,6,7,11,12,13,14,19,20,21,26,27,28,29,30,36,37,38,39,40,47,48,49,54]];

obj0.userData.polytoperoot = [[-0.872933478500583,-0.281592604391354,0.478552560738051],
      [-1.44590118572238e+48,-2.16844312513303e+47,1.99174923427469e+47],
      [4.8779129535277e+46,-9.03563005214187e+47,-6.29610873128956e+47]];

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
