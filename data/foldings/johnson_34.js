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
obj0.userData.points.push(new PMPoint(0.618034, 0, 0));
obj0.userData.points.push(new PMPoint(0.809017, 0.587785, 0));
obj0.userData.points.push(new PMPoint(0.309017, 0.951057, 0));
obj0.userData.points.push(new PMPoint(-0.190983, 0.587785, 0));
obj0.userData.points.push(new PMPoint(0.309017, -0.535233, 0));
obj0.userData.points.push(new PMPoint(0.118034, 1.53884, 0));
obj0.userData.points.push(new PMPoint(-0.5, 1.53884, 0));
obj0.userData.points.push(new PMPoint(-0.690983, 0.951057, 0));
obj0.userData.points.push(new PMPoint(1.22256, 0.128496, 0));
obj0.userData.points.push(new PMPoint(0.873619, 1.20243, 0));
obj0.userData.points.push(new PMPoint(-0.604528, 0.128496, 0));
obj0.userData.points.push(new PMPoint(0.722562, -0.994522, 0));
obj0.userData.points.push(new PMPoint(1.28716, -0.743145, 0));
obj0.userData.points.push(new PMPoint(1.22256, -0.128496, 0));
obj0.userData.points.push(new PMPoint(-0.604528, -0.128496, 0));
obj0.userData.points.push(new PMPoint(-0.669131, -0.743145, 0));
obj0.userData.points.push(new PMPoint(-0.104528, -0.994522, 0));
obj0.userData.points.push(new PMPoint(0.722562, 1.41035, 0));
obj0.userData.points.push(new PMPoint(-0.190983, 2.07407, 0));
obj0.userData.points.push(new PMPoint(-1.10453, 1.41035, 0));
obj0.userData.points.push(new PMPoint(-0.755585, 0.336408, 0));
obj0.userData.points.push(new PMPoint(1.78716, 0.379874, 0));
obj0.userData.points.push(new PMPoint(1.72256, 0.994522, 0));
obj0.userData.points.push(new PMPoint(1.11803, 1.12302, 0));
obj0.userData.points.push(new PMPoint(0.118034, -1.12302, 0));
obj0.userData.points.push(new PMPoint(1.22256, -1.35779, 0));
obj0.userData.points.push(new PMPoint(1.78716, -0.379874, 0));
obj0.userData.points.push(new PMPoint(-0.604528, -1.35779, 0));
obj0.userData.points.push(new PMPoint(-1.16913, 0.122881, 0));
obj0.userData.points.push(new PMPoint(-1.58268, -0.336408, 0));
obj0.userData.points.push(new PMPoint(-1.27366, -0.871641, 0));
obj0.userData.points.push(new PMPoint(1.03158, 1.94558, 0));
obj0.userData.points.push(new PMPoint(0.618034, 2.40487, 0));
obj0.userData.points.push(new PMPoint(0.0534318, 2.15349, 0));
obj0.userData.points.push(new PMPoint(-0.604528, 2.53336, 0));
obj0.userData.points.push(new PMPoint(-1.16913, 2.28199, 0));
obj0.userData.points.push(new PMPoint(-1.10453, 1.66734, 0));
obj0.userData.points.push(new PMPoint(2.28716, 0.743145, 0));
obj0.userData.points.push(new PMPoint(0.0534318, -1.73767, 0));
obj0.userData.points.push(new PMPoint(0.618034, -1.98904, 0));
obj0.userData.points.push(new PMPoint(1.03158, -1.52976, 0));
obj0.userData.points.push(new PMPoint(1.78716, -1.60917, 0));
obj0.userData.points.push(new PMPoint(2.20071, -1.14988, 0));
obj0.userData.points.push(new PMPoint(1.89169, -0.614648, 0));
obj0.userData.points.push(new PMPoint(-1.16913, -1.10642, 0));
obj0.userData.points.push(new PMPoint(-1.89169, -0.871641, 0));
obj0.userData.points.push(new PMPoint(1.22256, 2.53336, 0));
obj0.userData.points.push(new PMPoint(0.118034, 2.76814, 0));
obj0.userData.points.push(new PMPoint(-1.10453, 2.89663, 0));
obj0.userData.points.push(new PMPoint(-0.360114, -2.19696, 0));
obj0.userData.points.push(new PMPoint(-0.0510966, -2.73219, 0));
obj0.userData.points.push(new PMPoint(0.553432, -2.60369, 0));
obj0.userData.points.push(new PMPoint(1.22256, -2.11754, 0));
obj0.userData.points.push(new PMPoint(2.09618, -2.1444, 0));
obj0.userData.points.push(new PMPoint(2.70071, -2.01591, 0));
obj0.userData.points.push(new PMPoint(2.76531, -1.40126, 0));
obj0.userData.points.push(new PMPoint(1.11803, -2.35232, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 1, 5, 3, 6, 6, 7, 4, 8, 7, 8, 1, 9, 2, 9, 2, 10, 3, 10, 0, 11, 4, 11, 5, 12, 12, 13, 1, 14, 13, 14, 0, 15, 15, 16, 5, 17, 16, 17, 3, 18, 6, 18, 6, 19, 7, 19, 7, 20, 8, 20, 4, 21, 8, 21, 9, 22, 22, 23, 2, 24, 23, 24, 5, 25, 12, 25, 12, 26, 13, 26, 13, 27, 14, 27, 16, 28, 17, 28, 15, 29, 29, 30, 16, 31, 30, 31, 18, 32, 32, 33, 6, 34, 33, 34, 19, 35, 35, 36, 7, 37, 36, 37, 22, 38, 23, 38, 25, 39, 39, 40, 12, 41, 40, 41, 26, 42, 42, 43, 13, 44, 43, 44, 16, 45, 28, 45, 30, 46, 31, 46, 32, 47, 33, 47, 33, 48, 34, 48, 35, 49, 36, 49, 39, 50, 50, 51, 40, 52, 51, 52, 40, 53, 41, 53, 42, 54, 54, 55, 43, 56, 55, 56, 40, 57, 52, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [5, 1, 0], [4, 3, 6, 7, 8], [14, 1, 5, 12, 13], [12, 5, 25], [40, 39, 50, 51, 52], [30, 46, 31], [2, 1, 9], [3, 2, 10], [3, 18, 6], [13, 12, 26], [36, 35, 49], [14, 13, 27], [13, 26, 42, 43, 44], [43, 42, 54, 55, 56], [23, 22, 38], [32, 47, 33], [34, 33, 48], [40, 52, 57], [41, 40, 53], [18, 32, 33, 34, 6], [2, 9, 22, 23, 24], [7, 6, 19], [7, 19, 35, 36, 37], [12, 25, 39, 40, 41], [8, 7, 20], [16, 45, 28], [17, 16, 28], [4, 8, 21], [0, 4, 11], [29, 30, 31, 16, 15], [0, 15, 16, 17, 5]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[40,52],
      [43,42],
      [41,40],
      [40,39],
      [36,35],
      [34,33],
      [33,32],
      [31,30],
      [28,16],
      [13,26],
      [12,25],
      [23,22],
      [7,19],
      [6,18],
      [16,15],
      [17,16],
      [14,13],
      [13,12],
      [12,5],
      [2,9],
      [4,8],
      [8,7],
      [7,6],
      [6,3],
      [5,0],
      [1,5],
      [0,4],
      [3,2],
      [2,1],
      [4,3],
      [1,0]];

obj0.userData.angles = [2.48923451380542,
      2.21429743558818,
      2.48923451380543,
      2.21429743558818,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.76417159202267,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.21429743558818,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.21429743558818,
      2.48923451380543];

obj0.userData.subtrees = [[57],
      [54,55,56],
      [53],
      [50,51,52,57],
      [49],
      [48],
      [47],
      [46],
      [45],
      [42,43,44,54,55,56],
      [39,40,41,50,51,52,53,57],
      [38],
      [35,36,37,49],
      [32,33,34,47,48],
      [29,30,31,46],
      [28,45],
      [27],
      [26,42,43,44,54,55,56],
      [25,39,40,41,50,51,52,53,57],
      [22,23,24,38],
      [21],
      [20],
      [19,35,36,37,49],
      [18,32,33,34,47,48],
      [15,16,17,28,29,30,31,45,46],
      [12,13,14,25,26,27,39,40,41,42,43,44,50,51,52,53,54,55,56,57],
      [11],
      [10],
      [9,22,23,24,38],
      [6,7,8,18,19,20,21,32,33,34,35,36,37,47,48,49],
      [5,12,13,14,15,16,17,25,26,27,28,29,30,31,39,40,41,42,43,44,45,46,50,51,52,53,54,55,56,57]];

obj0.userData.polytoperoot = [[0.809016994374948,0.309016994374948,0.5],
      [1.61803398874989,-5.95808196779341e-16,2.61803398874987],
      [-0.499999999999996,-1.80901699437493,0.309016994374947]];

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
