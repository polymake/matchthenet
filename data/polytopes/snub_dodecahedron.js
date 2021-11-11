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
obj0.name = "snub_dodecahedron";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.173864, -0.1535, -0.972733));
obj0.userData.points.push(new PMPoint(-0.173864, 0.1535, 0.972733));
obj0.userData.points.push(new PMPoint(0.173864, -0.1535, 0.972733));
obj0.userData.points.push(new PMPoint(0.173864, 0.1535, -0.972733));
obj0.userData.points.push(new PMPoint(-0.511707, -0.393142, -0.763934));
obj0.userData.points.push(new PMPoint(-0.511707, 0.393142, 0.763934));
obj0.userData.points.push(new PMPoint(0.511707, -0.393142, 0.763934));
obj0.userData.points.push(new PMPoint(0.511707, 0.393142, -0.763934));
obj0.userData.points.push(new PMPoint(-0.263339, 0.298274, -0.917434));
obj0.userData.points.push(new PMPoint(-0.263339, -0.298274, 0.917434));
obj0.userData.points.push(new PMPoint(0.263339, 0.298274, 0.917434));
obj0.userData.points.push(new PMPoint(0.263339, -0.298274, -0.917434));
obj0.userData.points.push(new PMPoint(-0.809981, -0.0894751, -0.579591));
obj0.userData.points.push(new PMPoint(-0.809981, 0.0894751, 0.579591));
obj0.userData.points.push(new PMPoint(0.809981, -0.0894751, 0.579591));
obj0.userData.points.push(new PMPoint(0.809981, 0.0894751, -0.579591));
obj0.userData.points.push(new PMPoint(-0.656481, 0.337843, -0.674459));
obj0.userData.points.push(new PMPoint(-0.656481, -0.337843, 0.674459));
obj0.userData.points.push(new PMPoint(0.656481, 0.337843, 0.674459));
obj0.userData.points.push(new PMPoint(0.656481, -0.337843, -0.674459));
obj0.userData.points.push(new PMPoint(-0.1535, -0.972733, -0.173864));
obj0.userData.points.push(new PMPoint(0.1535, 0.972733, -0.173864));
obj0.userData.points.push(new PMPoint(-0.1535, 0.972733, 0.173864));
obj0.userData.points.push(new PMPoint(0.1535, -0.972733, 0.173864));
obj0.userData.points.push(new PMPoint(-0.393142, -0.763934, -0.511707));
obj0.userData.points.push(new PMPoint(0.393142, 0.763934, -0.511707));
obj0.userData.points.push(new PMPoint(-0.393142, 0.763934, 0.511707));
obj0.userData.points.push(new PMPoint(0.393142, -0.763934, 0.511707));
obj0.userData.points.push(new PMPoint(0.298274, -0.917434, -0.263339));
obj0.userData.points.push(new PMPoint(-0.298274, 0.917434, -0.263339));
obj0.userData.points.push(new PMPoint(0.298274, 0.917434, 0.263339));
obj0.userData.points.push(new PMPoint(-0.298274, -0.917434, 0.263339));
obj0.userData.points.push(new PMPoint(-0.0894751, -0.579591, -0.809981));
obj0.userData.points.push(new PMPoint(0.0894751, 0.579591, -0.809981));
obj0.userData.points.push(new PMPoint(-0.0894751, 0.579591, 0.809981));
obj0.userData.points.push(new PMPoint(0.0894751, -0.579591, 0.809981));
obj0.userData.points.push(new PMPoint(0.337843, -0.674459, -0.656481));
obj0.userData.points.push(new PMPoint(-0.337843, 0.674459, -0.656481));
obj0.userData.points.push(new PMPoint(0.337843, 0.674459, 0.656481));
obj0.userData.points.push(new PMPoint(-0.337843, -0.674459, 0.656481));
obj0.userData.points.push(new PMPoint(-0.972733, -0.173864, -0.1535));
obj0.userData.points.push(new PMPoint(0.972733, -0.173864, 0.1535));
obj0.userData.points.push(new PMPoint(0.972733, 0.173864, -0.1535));
obj0.userData.points.push(new PMPoint(-0.972733, 0.173864, 0.1535));
obj0.userData.points.push(new PMPoint(-0.763934, -0.511707, -0.393142));
obj0.userData.points.push(new PMPoint(0.763934, -0.511707, 0.393142));
obj0.userData.points.push(new PMPoint(0.763934, 0.511707, -0.393142));
obj0.userData.points.push(new PMPoint(-0.763934, 0.511707, 0.393142));
obj0.userData.points.push(new PMPoint(-0.917434, -0.263339, 0.298274));
obj0.userData.points.push(new PMPoint(0.917434, -0.263339, -0.298274));
obj0.userData.points.push(new PMPoint(0.917434, 0.263339, 0.298274));
obj0.userData.points.push(new PMPoint(-0.917434, 0.263339, -0.298274));
obj0.userData.points.push(new PMPoint(-0.579591, -0.809981, -0.0894751));
obj0.userData.points.push(new PMPoint(0.579591, -0.809981, 0.0894751));
obj0.userData.points.push(new PMPoint(0.579591, 0.809981, -0.0894751));
obj0.userData.points.push(new PMPoint(-0.579591, 0.809981, 0.0894751));
obj0.userData.points.push(new PMPoint(-0.674459, -0.656481, 0.337843));
obj0.userData.points.push(new PMPoint(0.674459, -0.656481, -0.337843));
obj0.userData.points.push(new PMPoint(0.674459, 0.656481, 0.337843));
obj0.userData.points.push(new PMPoint(-0.674459, 0.656481, -0.337843));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [1, 2, 0, 3, 0, 4, 1, 5, 2, 6, 3, 7, 0, 8, 3, 8, 1, 9, 2, 9, 1, 10, 2, 10, 0, 11, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15, 8, 16, 12, 16, 9, 17, 13, 17, 10, 18, 14, 18, 11, 19, 15, 19, 21, 22, 20, 23, 4, 24, 20, 24, 7, 25, 21, 25, 5, 26, 22, 26, 6, 27, 23, 27, 20, 28, 23, 28, 21, 29, 22, 29, 21, 30, 22, 30, 20, 31, 23, 31, 0, 32, 4, 32, 11, 32, 24, 32, 3, 33, 7, 33, 8, 33, 25, 33, 1, 34, 5, 34, 10, 34, 26, 34, 2, 35, 6, 35, 9, 35, 27, 35, 11, 36, 19, 36, 28, 36, 32, 36, 8, 37, 16, 37, 29, 37, 33, 37, 10, 38, 18, 38, 30, 38, 34, 38, 9, 39, 17, 39, 31, 39, 35, 39, 12, 40, 14, 41, 15, 42, 41, 42, 13, 43, 40, 43, 4, 44, 12, 44, 24, 44, 40, 44, 6, 45, 14, 45, 27, 45, 41, 45, 7, 46, 15, 46, 25, 46, 42, 46, 5, 47, 13, 47, 26, 47, 43, 47, 13, 48, 17, 48, 40, 48, 43, 48, 15, 49, 19, 49, 41, 49, 42, 49, 14, 50, 18, 50, 41, 50, 42, 50, 12, 51, 16, 51, 40, 51, 43, 51, 20, 52, 24, 52, 31, 52, 44, 52, 23, 53, 27, 53, 28, 53, 45, 53, 21, 54, 25, 54, 30, 54, 46, 54, 22, 55, 26, 55, 29, 55, 47, 55, 17, 56, 31, 56, 39, 56, 48, 56, 52, 56, 19, 57, 28, 57, 36, 57, 49, 57, 53, 57, 18, 58, 30, 58, 38, 58, 50, 58, 54, 58, 16, 59, 29, 59, 37, 59, 51, 59, 55, 59];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[13, 17, 9, 1, 5], [56, 48, 40, 44, 52], [12, 16, 8, 0, 4], [19, 11, 3, 7, 15], [58, 50, 42, 46, 54], [10, 2, 6, 14, 18], [35, 39, 31, 23, 27], [45, 53, 57, 49, 41], [26, 34, 38, 30, 22], [43, 47, 55, 59, 51], [29, 21, 25, 33, 37], [28, 20, 24, 32, 36], [43, 51, 40], [40, 51, 12], [56, 17, 48], [48, 17, 13], [51, 16, 12], [51, 59, 16], [44, 12, 4], [13, 5, 47], [39, 17, 56], [24, 44, 4], [52, 44, 24], [47, 26, 55], [16, 59, 37], [24, 4, 32], [47, 5, 26], [59, 55, 29], [39, 56, 31], [31, 56, 52], [5, 1, 34], [9, 17, 39], [5, 34, 26], [59, 29, 37], [55, 22, 29], [48, 43, 40], [34, 1, 10], [13, 43, 48], [16, 37, 8], [44, 40, 12], [13, 47, 43], [4, 0, 32], [52, 24, 20], [31, 52, 20], [26, 22, 55], [1, 2, 10], [22, 21, 29], [9, 39, 35], [34, 10, 38], [23, 31, 20], [11, 32, 0], [0, 8, 3], [23, 20, 28], [1, 9, 2], [37, 33, 8], [8, 33, 3], [2, 9, 35], [57, 36, 19], [0, 3, 11], [35, 27, 6], [36, 32, 11], [22, 30, 21], [27, 23, 53], [21, 54, 25], [33, 7, 3], [36, 11, 19], [21, 30, 54], [53, 23, 28], [14, 6, 45], [2, 35, 6], [30, 58, 54], [10, 18, 38], [27, 53, 45], [33, 25, 7], [30, 38, 58], [6, 27, 45], [28, 36, 57], [53, 28, 57], [38, 18, 58], [54, 46, 25], [49, 57, 19], [41, 49, 42], [25, 46, 7], [49, 19, 15], [14, 45, 41], [46, 15, 7], [46, 42, 15], [42, 49, 15], [50, 14, 41], [50, 41, 42], [18, 50, 58], [18, 14, 50]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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
