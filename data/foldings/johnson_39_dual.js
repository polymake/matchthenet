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
obj0.userData.points.push(new PMPoint(0.682162, 0, 0));
obj0.userData.points.push(new PMPoint(0.687556, 0.384516, 0));
obj0.userData.points.push(new PMPoint(0.357116, 0.581216, 0));
obj0.userData.points.push(new PMPoint(0.357116, -0.581216, 0));
obj0.userData.points.push(new PMPoint(0.687556, -0.384516, 0));
obj0.userData.points.push(new PMPoint(1.62027, 0.220806, 0));
obj0.userData.points.push(new PMPoint(1.4488, 0.726696, 0));
obj0.userData.points.push(new PMPoint(0.0323249, 0.787109, 0));
obj0.userData.points.push(new PMPoint(-0.308256, 0.608542, 0));
obj0.userData.points.push(new PMPoint(1.37762, 0.853977, 0));
obj0.userData.points.push(new PMPoint(1.03636, 1.26491, 0));
obj0.userData.points.push(new PMPoint(1.4488, -0.726696, 0));
obj0.userData.points.push(new PMPoint(1.62027, -0.220806, 0));
obj0.userData.points.push(new PMPoint(-0.308256, -0.608542, 0));
obj0.userData.points.push(new PMPoint(0.0323249, -0.787109, 0));
obj0.userData.points.push(new PMPoint(1.03636, -1.26491, 0));
obj0.userData.points.push(new PMPoint(1.37762, -0.853977, 0));
obj0.userData.points.push(new PMPoint(2.38152, 0.562986, 0));
obj0.userData.points.push(new PMPoint(2.38691, 0.947502, 0));
obj0.userData.points.push(new PMPoint(0.660093, 1.4961, 0));
obj0.userData.points.push(new PMPoint(0.139296, 1.61484, 0));
obj0.userData.points.push(new PMPoint(-0.653711, 0.439599, 0));
obj0.userData.points.push(new PMPoint(-0.679864, 0.0559356, 0));
obj0.userData.points.push(new PMPoint(-0.0064142, 1.62082, 0));
obj0.userData.points.push(new PMPoint(-0.535194, 1.54519, 0));
obj0.userData.points.push(new PMPoint(2.05686, 1.53767, 0));
obj0.userData.points.push(new PMPoint(1.72642, 1.73437, 0));
obj0.userData.points.push(new PMPoint(2.38691, -0.947502, 0));
obj0.userData.points.push(new PMPoint(2.38152, -0.562986, 0));
obj0.userData.points.push(new PMPoint(0.139296, -1.61484, 0));
obj0.userData.points.push(new PMPoint(0.660093, -1.4961, 0));
obj0.userData.points.push(new PMPoint(-0.535194, -1.54519, 0));
obj0.userData.points.push(new PMPoint(-0.0064142, -1.62082, 0));
obj0.userData.points.push(new PMPoint(1.72642, -1.73437, 0));
obj0.userData.points.push(new PMPoint(2.05686, -1.53767, 0));
obj0.userData.points.push(new PMPoint(2.71196, 0.366286, 0));
obj0.userData.points.push(new PMPoint(3.06907, 0.947502, 0));
obj0.userData.points.push(new PMPoint(0.767064, 2.32383, 0));
obj0.userData.points.push(new PMPoint(0.442272, 2.52972, 0));
obj0.userData.points.push(new PMPoint(-0.929146, 1.34563, 0));
obj0.userData.points.push(new PMPoint(-1.30295, 0.964062, 0));
obj0.userData.points.push(new PMPoint(-1.38433, 0.843047, 0));
obj0.userData.points.push(new PMPoint(-1.59671, 0.352921, 0));
obj0.userData.points.push(new PMPoint(-0.233352, 2.55747, 0));
obj0.userData.points.push(new PMPoint(-0.573933, 2.3789, 0));
obj0.userData.points.push(new PMPoint(2.41397, 2.11889, 0));
obj0.userData.points.push(new PMPoint(1.73181, 2.11889, 0));
obj0.userData.points.push(new PMPoint(0.442272, -2.52972, 0));
obj0.userData.points.push(new PMPoint(0.767064, -2.32383, 0));
obj0.userData.points.push(new PMPoint(-0.573933, -2.3789, 0));
obj0.userData.points.push(new PMPoint(-0.233352, -2.55747, 0));
obj0.userData.points.push(new PMPoint(1.73181, -2.11889, 0));
obj0.userData.points.push(new PMPoint(2.41397, -2.11889, 0));
obj0.userData.points.push(new PMPoint(-1.57839, 1.8701, 0));
obj0.userData.points.push(new PMPoint(-1.92384, 1.70115, 0));
obj0.userData.points.push(new PMPoint(-2.30118, 1.14003, 0));
obj0.userData.points.push(new PMPoint(-2.32733, 0.756369, 0));
obj0.userData.points.push(new PMPoint(-0.541608, 3.16601, 0));
obj0.userData.points.push(new PMPoint(-0.898724, 2.58479, 0));
obj0.userData.points.push(new PMPoint(-0.898724, -2.58479, 0));
obj0.userData.points.push(new PMPoint(-0.541608, -3.16601, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 5, 4, 5, 1, 6, 2, 7, 6, 7, 3, 8, 0, 9, 8, 9, 2, 10, 3, 11, 10, 11, 5, 12, 1, 13, 12, 13, 0, 14, 4, 15, 14, 15, 4, 16, 5, 17, 16, 17, 6, 18, 7, 19, 18, 19, 3, 20, 8, 21, 20, 21, 9, 22, 0, 23, 22, 23, 8, 24, 9, 25, 24, 25, 10, 26, 11, 27, 26, 27, 12, 28, 13, 29, 28, 29, 15, 30, 4, 31, 30, 31, 14, 32, 15, 33, 32, 33, 16, 34, 17, 35, 34, 35, 18, 36, 19, 37, 36, 37, 20, 38, 21, 39, 38, 39, 9, 40, 22, 41, 40, 41, 22, 42, 23, 43, 42, 43, 24, 44, 25, 45, 44, 45, 26, 46, 27, 47, 46, 47, 30, 48, 31, 49, 48, 49, 32, 50, 33, 51, 50, 51, 34, 52, 35, 53, 52, 53, 40, 54, 41, 55, 54, 55, 42, 56, 43, 57, 56, 57, 44, 58, 45, 59, 58, 59, 50, 60, 51, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [5, 1, 0, 4], [2, 1, 6, 7], [0, 3, 8, 9], [13, 1, 5, 12], [3, 2, 10, 11], [0, 14, 15, 4], [3, 20, 21, 8], [17, 5, 4, 16], [0, 9, 22, 23], [31, 4, 15, 30], [9, 8, 24, 25], [9, 40, 41, 22], [14, 32, 33, 15], [23, 22, 42, 43], [7, 6, 18, 19], [13, 12, 28, 29], [11, 10, 26, 27], [20, 38, 39, 21], [17, 16, 34, 35], [31, 30, 48, 49], [25, 24, 44, 45], [40, 54, 55, 41], [32, 50, 51, 33], [43, 42, 56, 57], [19, 18, 36, 37], [27, 26, 46, 47], [44, 58, 59, 45], [61, 51, 50, 60], [53, 35, 34, 52]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[51,50],
      [45,44],
      [43,42],
      [41,40],
      [35,34],
      [33,32],
      [31,30],
      [27,26],
      [25,24],
      [23,22],
      [22,9],
      [21,20],
      [19,18],
      [17,16],
      [15,14],
      [4,15],
      [13,12],
      [11,10],
      [9,8],
      [0,9],
      [8,3],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.51037356804611,
      2.51037356804611,
      2.54217545405268,
      2.54217545405268,
      2.51037356804611,
      2.54217545405268,
      2.54217545405268,
      2.51037356804611,
      2.54217545405268,
      2.51037356804611,
      2.51037356804611,
      2.54217545405268,
      2.51037356804611,
      2.54217545405268,
      2.51037356804611,
      2.51037356804611,
      2.54217545405268,
      2.54217545405268,
      2.51037356804611,
      2.37233297680396,
      2.51037356804611,
      2.54217545405268,
      2.51037356804611,
      2.37233297680396,
      2.51037356804611,
      2.51037356804611,
      2.37233297680396,
      2.51037356804611,
      2.37233297680396];

obj0.userData.subtrees = [[60,61],
      [58,59],
      [56,57],
      [54,55],
      [52,53],
      [50,51,60,61],
      [48,49],
      [46,47],
      [44,45,58,59],
      [42,43,56,57],
      [40,41,54,55],
      [38,39],
      [36,37],
      [34,35,52,53],
      [32,33,50,51,60,61],
      [30,31,48,49],
      [28,29],
      [26,27,46,47],
      [24,25,44,45,58,59],
      [22,23,40,41,42,43,54,55,56,57],
      [20,21,38,39],
      [18,19,36,37],
      [16,17,34,35,52,53],
      [14,15,30,31,32,33,48,49,50,51,60,61],
      [12,13,28,29],
      [10,11,26,27,46,47],
      [8,9,20,21,22,23,24,25,38,39,40,41,42,43,44,45,54,55,56,57,58,59],
      [6,7,18,19,36,37],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,48,49,50,51,52,53,60,61]];

obj0.userData.polytoperoot = [[0,-1.10299000825645,-0.681685314354011],
      [-0.375937991237322,-0.928072403620618,0.0347001580259947],
      [-0.633537761298145,0.256271407734229,-0.00958185838866627]];

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
