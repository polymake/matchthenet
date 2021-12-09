// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'poly' + divNumber );
var scene = new THREE.Scene();
scene.background = null;
var renderer = renderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
//renderer.setClearColor(backgroundColor, 1);
three.appendChild(renderer.domElement);
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
obj0.name = "zono-johnson-solid-62";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-1.03614, 0.138668, -0.0529664));
obj0.userData.points.push(new PMPoint(-1.01472, -0.173335, -0.280461));
obj0.userData.points.push(new PMPoint(-1.01472, -0.173335, 0.148046));
obj0.userData.points.push(new PMPoint(-1.01472, 0.520004, -0.280461));
obj0.userData.points.push(new PMPoint(-0.993294, -0.485337, -0.0794496));
obj0.userData.points.push(new PMPoint(-0.993294, 0.208002, -0.507957));
obj0.userData.points.push(new PMPoint(-0.843316, 0.104001, 0.306945));
obj0.userData.points.push(new PMPoint(-0.821891, -0.208002, -0.613889));
obj0.userData.points.push(new PMPoint(-0.821891, -0.208002, 0.507957));
obj0.userData.points.push(new PMPoint(-0.821891, 0.485337, -0.613889));
obj0.userData.points.push(new PMPoint(-0.821891, 0.485337, 0.0794496));
obj0.userData.points.push(new PMPoint(-0.800466, -0.520004, -0.412877));
obj0.userData.points.push(new PMPoint(-0.800466, -0.520004, 0.280461));
obj0.userData.points.push(new PMPoint(-0.800466, 0.173335, -0.841384));
obj0.userData.points.push(new PMPoint(-0.77904, 0.554671, 0.0529664));
obj0.userData.points.push(new PMPoint(-0.66805, -0.734258, -0.066208));
obj0.userData.points.push(new PMPoint(-0.646624, 0.768925, -0.293703));
obj0.userData.points.push(new PMPoint(-0.607637, 0.138668, 0.640372));
obj0.userData.points.push(new PMPoint(-0.586212, -0.173335, 0.841384));
obj0.userData.points.push(new PMPoint(-0.586212, 0.520004, 0.412877));
obj0.userData.points.push(new PMPoint(-0.564787, -0.485337, 0.613889));
obj0.userData.points.push(new PMPoint(-0.496647, -0.456922, -0.600648));
obj0.userData.points.push(new PMPoint(-0.475222, -0.768925, -0.399636));
obj0.userData.points.push(new PMPoint(-0.475222, -0.768925, 0.293703));
obj0.userData.points.push(new PMPoint(-0.475222, -0.0755857, -0.828143));
obj0.userData.points.push(new PMPoint(-0.453796, 0.734258, -0.627131));
obj0.userData.points.push(new PMPoint(-0.432371, -0.00625183, -0.854626));
obj0.userData.points.push(new PMPoint(-0.432371, 0.422255, -0.854626));
obj0.userData.points.push(new PMPoint(-0.410945, 0.803591, 0.0397248));
obj0.userData.points.push(new PMPoint(-0.32138, 0.948511, -0.280461));
obj0.userData.points.push(new PMPoint(-0.299955, -0.913844, -0.0794496));
obj0.userData.points.push(new PMPoint(-0.260968, -0.422255, 0.854626));
obj0.userData.points.push(new PMPoint(-0.260968, 0.00625183, 0.854626));
obj0.userData.points.push(new PMPoint(-0.239543, -0.734258, 0.627131));
obj0.userData.points.push(new PMPoint(-0.218117, 0.768925, 0.399636));
obj0.userData.points.push(new PMPoint(-0.128552, -0.636509, -0.613889));
obj0.userData.points.push(new PMPoint(-0.128552, 0.913844, -0.613889));
obj0.userData.points.push(new PMPoint(-0.107127, -0.948511, -0.412877));
obj0.userData.points.push(new PMPoint(-0.107127, -0.948511, 0.280461));
obj0.userData.points.push(new PMPoint(-0.107127, -0.255172, -0.841384));
obj0.userData.points.push(new PMPoint(-0.107127, 0.601842, -0.841384));
obj0.userData.points.push(new PMPoint(-0.0857014, 0.983178, 0.0529664));
obj0.userData.points.push(new PMPoint(-0.064276, 0.242669, -0.867868));
obj0.userData.points.push(new PMPoint(0.064276, -0.242669, 0.867868));
obj0.userData.points.push(new PMPoint(0.0857014, -0.983178, -0.0529664));
obj0.userData.points.push(new PMPoint(0.107127, -0.601842, 0.841384));
obj0.userData.points.push(new PMPoint(0.107127, 0.255172, 0.841384));
obj0.userData.points.push(new PMPoint(0.107127, 0.948511, -0.280461));
obj0.userData.points.push(new PMPoint(0.107127, 0.948511, 0.412877));
obj0.userData.points.push(new PMPoint(0.128552, -0.913844, 0.613889));
obj0.userData.points.push(new PMPoint(0.128552, 0.636509, 0.613889));
obj0.userData.points.push(new PMPoint(0.218117, -0.768925, -0.399636));
obj0.userData.points.push(new PMPoint(0.239543, 0.734258, -0.627131));
obj0.userData.points.push(new PMPoint(0.260968, -0.00625183, -0.854626));
obj0.userData.points.push(new PMPoint(0.260968, 0.422255, -0.854626));
obj0.userData.points.push(new PMPoint(0.299955, 0.913844, 0.0794496));
obj0.userData.points.push(new PMPoint(0.32138, -0.948511, 0.280461));
obj0.userData.points.push(new PMPoint(0.410945, -0.803591, -0.0397248));
obj0.userData.points.push(new PMPoint(0.432371, -0.422255, 0.854626));
obj0.userData.points.push(new PMPoint(0.432371, 0.00625183, 0.854626));
obj0.userData.points.push(new PMPoint(0.453796, -0.734258, 0.627131));
obj0.userData.points.push(new PMPoint(0.475222, 0.0755857, 0.828143));
obj0.userData.points.push(new PMPoint(0.475222, 0.768925, -0.293703));
obj0.userData.points.push(new PMPoint(0.475222, 0.768925, 0.399636));
obj0.userData.points.push(new PMPoint(0.496647, 0.456922, 0.600648));
obj0.userData.points.push(new PMPoint(0.564787, 0.485337, -0.613889));
obj0.userData.points.push(new PMPoint(0.586212, -0.520004, -0.412877));
obj0.userData.points.push(new PMPoint(0.586212, 0.173335, -0.841384));
obj0.userData.points.push(new PMPoint(0.607637, -0.138668, -0.640372));
obj0.userData.points.push(new PMPoint(0.646624, -0.768925, 0.293703));
obj0.userData.points.push(new PMPoint(0.66805, 0.734258, 0.066208));
obj0.userData.points.push(new PMPoint(0.77904, -0.554671, -0.0529664));
obj0.userData.points.push(new PMPoint(0.800466, -0.173335, 0.841384));
obj0.userData.points.push(new PMPoint(0.800466, 0.520004, -0.280461));
obj0.userData.points.push(new PMPoint(0.800466, 0.520004, 0.412877));
obj0.userData.points.push(new PMPoint(0.821891, -0.485337, -0.0794496));
obj0.userData.points.push(new PMPoint(0.821891, -0.485337, 0.613889));
obj0.userData.points.push(new PMPoint(0.821891, 0.208002, -0.507957));
obj0.userData.points.push(new PMPoint(0.821891, 0.208002, 0.613889));
obj0.userData.points.push(new PMPoint(0.843316, -0.104001, -0.306945));
obj0.userData.points.push(new PMPoint(0.993294, -0.208002, 0.507957));
obj0.userData.points.push(new PMPoint(0.993294, 0.485337, 0.0794496));
obj0.userData.points.push(new PMPoint(1.01472, -0.520004, 0.280461));
obj0.userData.points.push(new PMPoint(1.01472, 0.173335, -0.148046));
obj0.userData.points.push(new PMPoint(1.01472, 0.173335, 0.280461));
obj0.userData.points.push(new PMPoint(1.03614, -0.138668, 0.0529664));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 0, 3, 1, 4, 2, 4, 1, 5, 3, 5, 0, 6, 1, 7, 2, 8, 6, 8, 3, 9, 3, 10, 6, 10, 4, 11, 7, 11, 4, 12, 8, 12, 5, 13, 7, 13, 9, 13, 3, 14, 4, 15, 3, 16, 6, 17, 8, 18, 17, 18, 10, 19, 14, 19, 17, 19, 12, 20, 18, 20, 7, 21, 11, 22, 15, 22, 21, 22, 12, 23, 15, 23, 13, 24, 21, 24, 9, 25, 16, 25, 13, 26, 13, 27, 25, 27, 14, 28, 16, 28, 16, 29, 15, 30, 18, 31, 18, 32, 20, 33, 23, 33, 31, 33, 19, 34, 28, 34, 21, 35, 25, 36, 29, 36, 22, 37, 30, 37, 35, 37, 23, 38, 30, 38, 24, 39, 26, 39, 35, 39, 27, 40, 36, 40, 28, 41, 29, 41, 26, 42, 27, 42, 31, 43, 32, 43, 37, 44, 38, 44, 31, 45, 32, 46, 36, 47, 41, 47, 34, 48, 41, 48, 33, 49, 38, 49, 45, 49, 46, 50, 48, 50, 37, 51, 36, 52, 39, 53, 42, 53, 40, 54, 42, 54, 52, 54, 47, 55, 48, 55, 44, 56, 49, 56, 44, 57, 51, 57, 43, 58, 45, 58, 43, 59, 46, 59, 49, 60, 58, 60, 46, 61, 47, 62, 52, 62, 48, 63, 50, 64, 61, 64, 63, 64, 52, 65, 51, 66, 53, 67, 54, 67, 65, 67, 66, 68, 67, 68, 56, 69, 57, 69, 60, 69, 55, 70, 62, 70, 63, 70, 57, 71, 66, 71, 58, 72, 59, 72, 61, 72, 62, 73, 65, 73, 63, 74, 66, 75, 60, 76, 72, 76, 67, 77, 73, 77, 64, 78, 72, 78, 74, 78, 68, 79, 75, 79, 77, 79, 72, 80, 70, 81, 73, 81, 74, 81, 69, 82, 71, 82, 75, 82, 76, 82, 80, 82, 77, 83, 81, 83, 78, 84, 80, 84, 81, 84, 79, 85, 82, 85, 83, 85, 84, 85];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[1, 5, 13, 7], [2, 4, 12, 8], [3, 5, 1, 0], [1, 4, 2, 0], [3, 0, 6, 10], [16, 3, 14, 28], [30, 37, 44, 38], [4, 15, 23, 12], [0, 2, 8, 6], [1, 7, 11, 4], [3, 10, 19, 14], [8, 12, 20, 18], [28, 14, 19, 34], [13, 5, 3, 9], [19, 17, 18, 32, 46, 50, 48, 34], [4, 11, 22, 15], [24, 13, 26, 39], [15, 30, 38, 23], [7, 13, 24, 21], [12, 23, 33, 20], [10, 6, 17, 19], [9, 3, 16, 25], [6, 8, 18, 17], [16, 28, 41, 29], [13, 9, 25, 27], [15, 22, 37, 30], [27, 25, 36, 40], [56, 69, 60, 49], [7, 21, 22, 11], [20, 33, 31, 18], [49, 60, 58, 45], [13, 27, 42, 26], [39, 26, 42, 53], [32, 18, 31, 43], [50, 46, 61, 64], [25, 16, 29, 36], [44, 57, 69, 56], [23, 38, 49, 33], [21, 24, 39, 35], [55, 48, 63, 70], [35, 39, 53, 67, 68, 66, 51, 37], [27, 40, 54, 42], [36, 29, 41, 47], [21, 35, 37, 22], [33, 49, 45, 31], [28, 34, 48, 41], [47, 41, 48, 55], [48, 50, 64, 63], [37, 51, 57, 44], [36, 47, 62, 52], [46, 32, 43, 59], [68, 67, 77, 79], [43, 31, 45, 58], [77, 67, 65, 73], [75, 79, 85, 82], [38, 44, 56, 49], [40, 36, 52, 54], [53, 42, 54, 67], [52, 62, 73, 65], [59, 43, 58, 72], [69, 82, 76, 60], [70, 63, 74, 81], [64, 61, 72, 78], [57, 71, 82, 69], [47, 55, 70, 62], [79, 77, 83, 85], [46, 59, 72, 61], [63, 64, 78, 74], [66, 68, 79, 75], [51, 66, 71, 57], [85, 83, 81, 84], [54, 52, 65, 67], [82, 80, 72, 76], [62, 70, 81, 73], [60, 76, 72, 58], [77, 73, 81, 83], [80, 84, 78, 72], [66, 75, 82, 71], [84, 81, 74, 78], [82, 85, 84, 80]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x2A6B3D, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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

   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj0.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj0.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj0.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
      control.update();
      renderer.render(scene, camera);
   };
if ( THREE.WEBGL.isWebGLAvailable() ) {
	render();
} else {
	var warning = WEBGL.getWebGLErrorMessage();
	three.appendChild( warning );
}

   polytopeObjects[divNumber] = obj0;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
