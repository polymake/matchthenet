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
obj0.userData.points.push(new PMPoint(0.212841, 0, 0));
obj0.userData.points.push(new PMPoint(0.363343, 0.150502, 0));
obj0.userData.points.push(new PMPoint(0.363343, 0.363341, 0));
obj0.userData.points.push(new PMPoint(0.212841, 0.513843, 0));
obj0.userData.points.push(new PMPoint(0, 0.513843, 0));
obj0.userData.points.push(new PMPoint(-0.1505, 0.363341, 0));
obj0.userData.points.push(new PMPoint(-0.1505, 0.150502, 0));
obj0.userData.points.push(new PMPoint(0.106421, -0.68639, 0));
obj0.userData.points.push(new PMPoint(0.773442, -0.4101, 0));
obj0.userData.points.push(new PMPoint(1.04973, 0.256922, 0));
obj0.userData.points.push(new PMPoint(0.773442, 0.923943, 0));
obj0.userData.points.push(new PMPoint(0.106421, 1.20023, 0));
obj0.userData.points.push(new PMPoint(-0.5606, 0.923943, 0));
obj0.userData.points.push(new PMPoint(-0.83689, 0.256922, 0));
obj0.userData.points.push(new PMPoint(-0.5606, -0.410099, 0));
obj0.userData.points.push(new PMPoint(-0.538709, -0.438459, 0));
obj0.userData.points.push(new PMPoint(-0.43229, -1.12485, 0));
obj0.userData.points.push(new PMPoint(0.645132, -1.12485, 0));
obj0.userData.points.push(new PMPoint(0.751552, -0.438459, 0));
obj0.userData.points.push(new PMPoint(1.46441, -0.339213, 0));
obj0.userData.points.push(new PMPoint(1.05431, 0.221389, 0));
obj0.userData.points.push(new PMPoint(1.48819, 0.795633, 0));
obj0.userData.points.push(new PMPoint(0.801802, 0.902052, 0));
obj0.userData.points.push(new PMPoint(0.702555, 1.61491, 0));
obj0.userData.points.push(new PMPoint(0.141954, 1.20481, 0));
obj0.userData.points.push(new PMPoint(-0.43229, 1.63869, 0));
obj0.userData.points.push(new PMPoint(-0.538709, 0.952302, 0));
obj0.userData.points.push(new PMPoint(-1.25156, 0.853055, 0));
obj0.userData.points.push(new PMPoint(-0.841464, 0.292454, 0));
obj0.userData.points.push(new PMPoint(-1.27535, -0.281789, 0));
obj0.userData.points.push(new PMPoint(-0.58896, -0.388209, 0));
obj0.userData.points.push(new PMPoint(0.631797, -1.14074, 0));
obj0.userData.points.push(new PMPoint(-1.23315, -0.424027, 0));
obj0.userData.points.push(new PMPoint(1.44599, -0.424027, 0));
obj0.userData.points.push(new PMPoint(1.53514, 0.722639, 0));
obj0.userData.points.push(new PMPoint(0.78737, 1.59649, 0));
obj0.userData.points.push(new PMPoint(-0.359296, 1.68564, 0));
obj0.userData.points.push(new PMPoint(-1.23315, 0.93787, 0));
obj0.userData.points.push(new PMPoint(-1.3223, -0.208796, 0));
obj0.userData.points.push(new PMPoint(0.0861219, -2.04542, 0));
obj0.userData.points.push(new PMPoint(-1.43379, -1.4613, 0));
obj0.userData.points.push(new PMPoint(1.64663, -1.4613, 0));
obj0.userData.points.push(new PMPoint(2.41048, 0.131044, 0));
obj0.userData.points.push(new PMPoint(1.82465, 1.79713, 0));
obj0.userData.points.push(new PMPoint(0.232299, 2.56098, 0));
obj0.userData.points.push(new PMPoint(-1.43379, 1.97515, 0));
obj0.userData.points.push(new PMPoint(-2.19764, 0.382798, 0));
obj0.userData.points.push(new PMPoint(0.0960309, -3.10187, 0));
obj0.userData.points.push(new PMPoint(0.641706, -2.1972, 0));
obj0.userData.points.push(new PMPoint(-0.473747, -2.18054, 0));
obj0.userData.points.push(new PMPoint(0.0446646, -3.1011, 0));
obj0.userData.points.push(new PMPoint(-1.94803, -1.20194, 0));
obj0.userData.points.push(new PMPoint(-2.14866, -2.23922, 0));
obj0.userData.points.push(new PMPoint(2.3615, -2.23922, 0));
obj0.userData.points.push(new PMPoint(2.16087, -1.20194, 0));
obj0.userData.points.push(new PMPoint(3.46604, 0.0864683, 0));
obj0.userData.points.push(new PMPoint(2.5907, 0.678063, 0));
obj0.userData.points.push(new PMPoint(2.60256, 2.512, 0));
obj0.userData.points.push(new PMPoint(1.56528, 2.31137, 0));
obj0.userData.points.push(new PMPoint(0.276875, 3.61654, 0));
obj0.userData.points.push(new PMPoint(-0.31472, 2.74121, 0));
obj0.userData.points.push(new PMPoint(-2.14866, 2.75306, 0));
obj0.userData.points.push(new PMPoint(-1.94803, 1.71578, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 0, 7, 6, 7, 0, 8, 1, 8, 1, 9, 2, 9, 2, 10, 3, 10, 3, 11, 4, 11, 4, 12, 5, 12, 5, 13, 6, 13, 6, 14, 7, 14, 0, 15, 7, 15, 0, 16, 8, 17, 16, 17, 8, 18, 1, 19, 18, 19, 9, 20, 2, 21, 20, 21, 10, 22, 3, 23, 22, 23, 11, 24, 4, 25, 24, 25, 12, 26, 5, 27, 26, 27, 13, 28, 6, 29, 28, 29, 14, 30, 7, 31, 30, 31, 8, 32, 17, 32, 16, 33, 17, 33, 18, 34, 19, 34, 20, 35, 21, 35, 22, 36, 23, 36, 24, 37, 25, 37, 26, 38, 27, 38, 28, 39, 29, 39, 17, 40, 32, 40, 17, 41, 33, 41, 18, 42, 34, 42, 20, 43, 35, 43, 22, 44, 36, 44, 24, 45, 37, 45, 26, 46, 38, 46, 28, 47, 39, 47, 40, 48, 32, 49, 48, 49, 17, 50, 40, 51, 50, 51, 33, 52, 41, 53, 52, 53, 42, 54, 34, 55, 54, 55, 43, 56, 35, 57, 56, 57, 44, 58, 36, 59, 58, 59, 45, 60, 37, 61, 60, 61, 46, 62, 38, 63, 62, 63];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5, 6, 7], [32, 40, 48, 49], [40, 17, 50, 51], [35, 43, 56, 57], [33, 52, 53, 41], [36, 44, 58, 59], [38, 46, 62, 63], [34, 42, 54, 55], [37, 45, 60, 61], [38, 26, 46], [39, 28, 47], [17, 33, 41], [32, 17, 40], [34, 18, 42], [35, 20, 43], [36, 22, 44], [37, 24, 45], [32, 8, 17], [19, 18, 34], [21, 20, 35], [23, 22, 36], [25, 24, 37], [27, 26, 38], [29, 28, 39], [16, 33, 17], [0, 16, 17, 8], [8, 1, 0], [19, 1, 8, 18], [2, 1, 9], [2, 9, 20, 21], [3, 2, 10], [3, 10, 22, 23], [4, 3, 11], [4, 11, 24, 25], [5, 4, 12], [5, 12, 26, 27], [6, 5, 13], [6, 13, 28, 29], [7, 6, 14], [7, 14, 30, 31], [0, 7, 15]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[38,46],
      [37,45],
      [36,44],
      [35,43],
      [34,42],
      [41,33],
      [40,17],
      [32,40],
      [39,28],
      [38,26],
      [37,24],
      [36,22],
      [35,20],
      [34,18],
      [17,33],
      [32,17],
      [29,28],
      [27,26],
      [25,24],
      [23,22],
      [21,20],
      [19,18],
      [17,16],
      [8,17],
      [7,14],
      [6,13],
      [5,12],
      [4,11],
      [3,10],
      [2,9],
      [1,8],
      [8,0],
      [0,7],
      [7,6],
      [6,5],
      [5,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.81252379080853,
      2.81252701593628,
      2.81252379080853,
      2.81252701593628,
      2.81252379080853,
      2.81252379080853,
      2.81252701593628,
      2.81252701593628,
      1.49416165612807,
      1.49416064816372,
      1.49416165612807,
      1.49416064816372,
      1.49416165612807,
      1.49416064816372,
      1.49416064816372,
      1.49416165612807,
      2.91055196199249,
      2.91055450379303,
      2.91055196199249,
      2.91055439113728,
      2.91055196199249,
      2.91055439113728,
      2.91055450379305,
      2.91055207464926,
      2.99209146917354,
      2.99209466022918,
      2.99209135651757,
      2.99209255589181,
      2.99209146917354,
      2.99209255589181,
      2.99209146917354,
      2.99209135651756,
      2.79720095752979,
      2.79720150913283,
      2.79720095752979,
      2.79720150913283,
      2.79720127995012,
      2.79720150913283,
      2.79720127995012,
      2.79720150913283];

obj0.userData.subtrees = [[62,63],
      [60,61],
      [58,59],
      [56,57],
      [54,55],
      [52,53],
      [50,51],
      [48,49],
      [47],
      [46,62,63],
      [45,60,61],
      [44,58,59],
      [43,56,57],
      [42,54,55],
      [41,52,53],
      [40,48,49,50,51],
      [39,47],
      [38,46,62,63],
      [37,45,60,61],
      [36,44,58,59],
      [35,43,56,57],
      [34,42,54,55],
      [33,41,52,53],
      [32,40,48,49,50,51],
      [30,31],
      [28,29,39,47],
      [26,27,38,46,62,63],
      [24,25,37,45,60,61],
      [22,23,36,44,58,59],
      [20,21,35,43,56,57],
      [18,19,34,42,54,55],
      [16,17,32,33,40,41,48,49,50,51,52,53],
      [15],
      [14,30,31],
      [13,28,29,39,47],
      [12,26,27,38,46,62,63],
      [11,24,25,37,45,60,61],
      [10,22,23,36,44,58,59],
      [9,20,21,35,43,56,57],
      [8,16,17,18,19,32,33,34,40,41,42,48,49,50,51,52,53,54,55]];

obj0.userData.polytoperoot = [[0.256921594727425,0.519662737962967,0.106421142220003],
      [0,0.53939412974229,0],
      [-0.114805,0,0]];

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
