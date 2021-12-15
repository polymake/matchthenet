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
obj0.userData.points.push(new PMPoint(0.542218, 0, 0));
obj0.userData.points.push(new PMPoint(0.271109, 0.469574, 0));
obj0.userData.points.push(new PMPoint(-0.383406, -0.383406, 0));
obj0.userData.points.push(new PMPoint(-0.383406, -0.925623, 0));
obj0.userData.points.push(new PMPoint(0, -1.30903, 0));
obj0.userData.points.push(new PMPoint(0.542218, -1.30903, 0));
obj0.userData.points.push(new PMPoint(0.925623, -0.925623, 0));
obj0.userData.points.push(new PMPoint(0.925623, -0.383406, 0));
obj0.userData.points.push(new PMPoint(0.130773, 0.993316, 0));
obj0.userData.points.push(new PMPoint(-0.338802, 1.26443, 0));
obj0.userData.points.push(new PMPoint(-0.862544, 1.12409, 0));
obj0.userData.points.push(new PMPoint(-1.13365, 0.654515, 0));
obj0.userData.points.push(new PMPoint(-0.993316, 0.130773, 0));
obj0.userData.points.push(new PMPoint(-0.523742, -0.140336, 0));
obj0.userData.points.push(new PMPoint(1.01179, 0.271109, 0));
obj0.userData.points.push(new PMPoint(0.740683, 0.740683, 0));
obj0.userData.points.push(new PMPoint(0.542218, -1.85125, 0));
obj0.userData.points.push(new PMPoint(0.925623, -2.23465, 0));
obj0.userData.points.push(new PMPoint(1.46784, -2.23465, 0));
obj0.userData.points.push(new PMPoint(1.85125, -1.85125, 0));
obj0.userData.points.push(new PMPoint(1.85125, -1.30903, 0));
obj0.userData.points.push(new PMPoint(1.46784, -0.925623, 0));
obj0.userData.points.push(new PMPoint(1.3952, -0.654515, 0));
obj0.userData.points.push(new PMPoint(1.06596, 0.140336, 0));
obj0.userData.points.push(new PMPoint(0.271109, -1.7786, 0));
obj0.userData.points.push(new PMPoint(-0.85298, -0.654515, 0));
obj0.userData.points.push(new PMPoint(-0.523742, -1.44937, 0));
obj0.userData.points.push(new PMPoint(-0.0676929, 1.734, 0));
obj0.userData.points.push(new PMPoint(-0.208029, 2.25774, 0));
obj0.userData.points.push(new PMPoint(-0.677603, 2.52885, 0));
obj0.userData.points.push(new PMPoint(-1.20135, 2.38851, 0));
obj0.userData.points.push(new PMPoint(-1.47245, 1.91894, 0));
obj0.userData.points.push(new PMPoint(-1.33212, 1.3952, 0));
obj0.userData.points.push(new PMPoint(0.130773, 1.53553, 0));
obj0.userData.points.push(new PMPoint(-1.40476, 1.12409, 0));
obj0.userData.points.push(new PMPoint(0.654515, 0.85298, 0));
obj0.userData.points.push(new PMPoint(-1.51706, 0.271109, 0));
obj0.userData.points.push(new PMPoint(1.48137, 0.542218, 0));
obj0.userData.points.push(new PMPoint(1.21026, 1.01179, 0));
obj0.userData.points.push(new PMPoint(2.32082, -1.58014, 0));
obj0.userData.points.push(new PMPoint(1.19673, -2.70423, 0));
obj0.userData.points.push(new PMPoint(1.99158, -0.785287, 0));
obj0.userData.points.push(new PMPoint(0.401881, -2.37499, 0));
obj0.userData.points.push(new PMPoint(1.66631, -0.18494, 0));
obj0.userData.points.push(new PMPoint(1.19673, 0.0861685, 0));
obj0.userData.points.push(new PMPoint(-0.469574, -1.58014, 0));
obj0.userData.points.push(new PMPoint(-0.198465, -2.04971, 0));
obj0.userData.points.push(new PMPoint(-1.12409, -1.12409, 0));
obj0.userData.points.push(new PMPoint(-0.654515, -1.3952, 0));
obj0.userData.points.push(new PMPoint(0.315713, 2.11741, 0));
obj0.userData.points.push(new PMPoint(-1.85586, 1.53553, 0));
obj0.userData.points.push(new PMPoint(0.67299, 0.993316, 0));
obj0.userData.points.push(new PMPoint(0.67299, 1.53553, 0));
obj0.userData.points.push(new PMPoint(-1.87434, 0.85298, 0));
obj0.userData.points.push(new PMPoint(-1.60323, 0.383406, 0));
obj0.userData.points.push(new PMPoint(1.95094, 0.813326, 0));
obj0.userData.points.push(new PMPoint(1.67983, 1.2829, 0));
obj0.userData.points.push(new PMPoint(0.456049, -2.50576, 0));
obj0.userData.points.push(new PMPoint(0.727158, -2.97534, 0));
obj0.userData.points.push(new PMPoint(-0.939149, -1.85125, 0));
obj0.userData.points.push(new PMPoint(-0.66804, -2.32082, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 1, 8, 7, 8, 2, 9, 9, 10, 10, 11, 11, 12, 12, 13, 0, 14, 13, 14, 1, 15, 2, 16, 15, 16, 6, 17, 17, 18, 18, 19, 19, 20, 20, 21, 7, 22, 21, 22, 7, 23, 8, 23, 1, 24, 8, 24, 5, 25, 6, 25, 3, 26, 4, 26, 4, 27, 5, 27, 10, 28, 28, 29, 29, 30, 30, 31, 31, 32, 11, 33, 32, 33, 9, 34, 10, 34, 11, 35, 12, 35, 2, 36, 9, 36, 12, 37, 13, 37, 15, 38, 16, 39, 38, 39, 20, 40, 21, 40, 18, 41, 19, 41, 21, 42, 22, 42, 17, 43, 18, 43, 23, 44, 8, 45, 44, 45, 5, 46, 25, 47, 46, 47, 26, 48, 4, 49, 48, 49, 28, 50, 29, 50, 32, 51, 33, 51, 9, 52, 34, 53, 52, 53, 35, 54, 12, 55, 54, 55, 38, 56, 39, 57, 56, 57, 18, 58, 41, 59, 58, 59, 46, 60, 47, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [19, 20, 21, 22, 7, 6, 17, 18], [0, 3, 4, 5, 6, 7, 8, 1], [20, 40, 21], [11, 10, 28, 29, 30, 31, 32, 33], [10, 9, 34], [0, 2, 9, 10, 11, 12, 13, 14], [41, 19, 18], [8, 7, 23], [24, 1, 8], [6, 5, 25], [12, 11, 35], [3, 26, 4], [41, 18, 58, 59], [42, 22, 21], [2, 1, 15, 16], [39, 38, 56, 57], [2, 36, 9], [29, 28, 50], [52, 53, 34, 9], [45, 8, 23, 44], [16, 15, 38, 39], [18, 17, 43], [5, 46, 47, 25], [13, 12, 37], [33, 32, 51], [5, 4, 27], [12, 35, 54, 55], [26, 48, 49, 4], [60, 61, 47, 46]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[47,46],
      [41,18],
      [39,38],
      [12,35],
      [34,9],
      [33,32],
      [29,28],
      [4,26],
      [25,5],
      [8,23],
      [18,17],
      [22,21],
      [19,18],
      [21,20],
      [16,15],
      [13,12],
      [9,2],
      [12,11],
      [10,9],
      [11,10],
      [5,4],
      [4,3],
      [6,5],
      [1,8],
      [8,7],
      [7,6],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.35619449019234,
      2.97167419886273,
      2.35619449019234,
      2.97167419886273,
      2.97167419886273,
      2.52611294491941,
      2.52611294491941,
      2.97167419886273,
      2.97167419886273,
      2.97167419886273,
      2.52611294491941,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.35619449019234,
      2.52611294491941,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      1.5707963267949,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      1.5707963267949,
      2.97167419886273,
      2.18627603546528,
      2.18627603546528];

obj0.userData.subtrees = [[60,61],
      [58,59],
      [56,57],
      [54,55],
      [52,53],
      [51],
      [50],
      [48,49],
      [46,47,60,61],
      [44,45],
      [43],
      [42],
      [41,58,59],
      [40],
      [38,39,56,57],
      [37],
      [36],
      [35,54,55],
      [34,52,53],
      [28,29,30,31,32,33,50,51],
      [27],
      [26,48,49],
      [25,46,47,60,61],
      [24],
      [23,44,45],
      [17,18,19,20,21,22,40,41,42,43,58,59],
      [15,16,38,39,56,57],
      [9,10,11,12,13,14,28,29,30,31,32,33,34,35,36,37,50,51,52,53,54,55],
      [3,4,5,6,7,8,17,18,19,20,21,22,23,24,25,26,27,40,41,42,43,44,45,46,47,48,49,58,59,60,61]];

obj0.userData.polytoperoot = [[0,-0.925623423611818,0.271108823950793],
      [0,-5.2164055074422,3.68855570773123],
      [-3,1,1.4142135623731]];

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
