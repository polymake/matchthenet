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
obj0.name = "johnson_75_dual";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.873393, 0.539786, 0));
obj0.userData.points.push(new PMPoint(-0.80968, 0.30927, -0.50041));
obj0.userData.points.push(new PMPoint(-0.638719, -0.58589, -0.50041));
obj0.userData.points.push(new PMPoint(-0.76122, -0.25374, -0.56738));
obj0.userData.points.push(new PMPoint(-0.539786, 0, -0.873393));
obj0.userData.points.push(new PMPoint(-0.50041, 0.80968, -0.30927));
obj0.userData.points.push(new PMPoint(-0.56738, 0.56738, -0.56738));
obj0.userData.points.push(new PMPoint(-0.44758, -0.89516, 0));
obj0.userData.points.push(new PMPoint(-0.41056, -0.82112, -0.35066));
obj0.userData.points.push(new PMPoint(-0.30927, -0.50041, -0.80968));
obj0.userData.points.push(new PMPoint(-0.30927, 0.50041, -0.80968));
obj0.userData.points.push(new PMPoint(-0.30927, 0.947989, 0.0854802));
obj0.userData.points.push(new PMPoint(0, -0.873393, 0.539786));
obj0.userData.points.push(new PMPoint(0, 0.873393, 0.539786));
obj0.userData.points.push(new PMPoint(0, 0, 1.00082));
obj0.userData.points.push(new PMPoint(0, -0.35066, 0.91804));
obj0.userData.points.push(new PMPoint(0, 0.44758, 0.89516));
obj0.userData.points.push(new PMPoint(0, 0.977939, -0.09692));
obj0.userData.points.push(new PMPoint(0.30927, -0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(0.30927, 0.947989, 0.0854802));
obj0.userData.points.push(new PMPoint(0.50041, -0.80968, -0.30927));
obj0.userData.points.push(new PMPoint(0.35066, -0.91804, 0));
obj0.userData.points.push(new PMPoint(0.539786, 0, 0.873393));
obj0.userData.points.push(new PMPoint(0.50041, 0.638719, 0.58589));
obj0.userData.points.push(new PMPoint(0.58589, -0.50041, -0.638719));
obj0.userData.points.push(new PMPoint(0.58589, 0.50041, -0.638719));
obj0.userData.points.push(new PMPoint(0.873393, -0.539786, 0));
obj0.userData.points.push(new PMPoint(0.80968, 0.30927, 0.50041));
obj0.userData.points.push(new PMPoint(0.82112, -0.35066, -0.41056));
obj0.userData.points.push(new PMPoint(0.82112, 0.35066, -0.41056));
obj0.userData.points.push(new PMPoint(0.89516, 0, -0.44758));
obj0.userData.points.push(new PMPoint(1.00082, 0, 0));
obj0.userData.points.push(new PMPoint(0.91804, 0, 0.35066));
obj0.userData.points.push(new PMPoint(0.873393, 0.539786, 0));
obj0.userData.points.push(new PMPoint(0.80968, -0.30927, 0.50041));
obj0.userData.points.push(new PMPoint(0.56738, 0.76122, 0.25374));
obj0.userData.points.push(new PMPoint(0.56738, -0.56738, 0.56738));
obj0.userData.points.push(new PMPoint(0.50041, 0.80968, -0.30927));
obj0.userData.points.push(new PMPoint(0.35066, 0.41056, 0.82112));
obj0.userData.points.push(new PMPoint(0.50041, -0.80968, 0.30927));
obj0.userData.points.push(new PMPoint(0.539786, 0, -0.873393));
obj0.userData.points.push(new PMPoint(0.25374, 0.56738, -0.76122));
obj0.userData.points.push(new PMPoint(0.25374, -0.56738, -0.76122));
obj0.userData.points.push(new PMPoint(0.0854802, 0.30927, -0.947989));
obj0.userData.points.push(new PMPoint(-0.09692, 0, -0.977939));
obj0.userData.points.push(new PMPoint(0.0854802, -0.30927, -0.947989));
obj0.userData.points.push(new PMPoint(0, -1.00082, 0));
obj0.userData.points.push(new PMPoint(0, 0.873393, -0.539786));
obj0.userData.points.push(new PMPoint(0, -0.873393, -0.539786));
obj0.userData.points.push(new PMPoint(-0.35066, 0.41056, 0.82112));
obj0.userData.points.push(new PMPoint(-0.30927, -0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(-0.41056, -0.82112, 0.35066));
obj0.userData.points.push(new PMPoint(-0.56738, 0.76122, 0.25374));
obj0.userData.points.push(new PMPoint(-0.50041, 0.638719, 0.58589));
obj0.userData.points.push(new PMPoint(-0.539786, 0, 0.873393));
obj0.userData.points.push(new PMPoint(-0.76122, -0.25374, 0.56738));
obj0.userData.points.push(new PMPoint(-0.638719, -0.58589, 0.50041));
obj0.userData.points.push(new PMPoint(-0.80968, 0.30927, 0.50041));
obj0.userData.points.push(new PMPoint(-0.977939, 0.09692, 0));
obj0.userData.points.push(new PMPoint(-0.947989, -0.0854802, 0.30927));
obj0.userData.points.push(new PMPoint(-0.873393, -0.539786, 0));
obj0.userData.points.push(new PMPoint(-0.947989, -0.0854802, -0.30927));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 2, 3, 1, 4, 3, 4, 0, 5, 1, 6, 5, 6, 2, 8, 7, 8, 2, 9, 4, 9, 4, 10, 6, 10, 5, 11, 11, 13, 14, 15, 13, 16, 14, 16, 11, 17, 12, 18, 15, 18, 13, 19, 17, 19, 20, 21, 14, 22, 18, 22, 13, 23, 20, 24, 20, 26, 22, 27, 23, 27, 24, 28, 26, 28, 25, 29, 28, 30, 29, 30, 26, 31, 30, 31, 27, 32, 31, 32, 27, 33, 29, 33, 31, 33, 22, 34, 26, 34, 32, 34, 19, 35, 23, 35, 33, 35, 18, 36, 34, 36, 19, 37, 25, 37, 33, 37, 16, 38, 22, 38, 23, 38, 12, 39, 21, 39, 26, 39, 36, 39, 24, 40, 25, 40, 30, 40, 25, 41, 24, 42, 10, 43, 40, 43, 41, 43, 4, 44, 43, 44, 9, 45, 40, 45, 42, 45, 44, 45, 7, 46, 12, 46, 21, 46, 5, 47, 10, 47, 17, 47, 37, 47, 41, 47, 8, 48, 9, 48, 20, 48, 42, 48, 46, 48, 16, 49, 12, 50, 15, 50, 7, 51, 12, 51, 0, 52, 11, 52, 13, 53, 49, 53, 52, 53, 14, 54, 49, 54, 50, 54, 54, 55, 50, 56, 51, 56, 55, 56, 0, 57, 53, 57, 54, 57, 0, 58, 55, 59, 57, 59, 58, 59, 2, 60, 7, 60, 56, 60, 59, 60, 1, 61, 3, 61, 58, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[48, 46, 7, 8], [21, 46, 48, 20], [7, 46, 12, 51], [48, 8, 2, 9], [12, 46, 21, 39], [48, 42, 24, 20], [51, 12, 50, 56], [39, 21, 20, 26], [48, 9, 45, 42], [12, 39, 36, 18], [26, 20, 24, 28], [9, 2, 3, 4], [50, 12, 18, 15], [39, 26, 34, 36], [9, 4, 44, 45], [56, 50, 54, 55], [26, 28, 30, 31], [3, 61, 1, 4], [50, 15, 14, 54], [18, 36, 34, 22], [34, 26, 31, 32], [44, 4, 10, 43], [55, 54, 57, 59], [15, 18, 22, 14], [61, 58, 0, 1], [4, 1, 6, 10], [54, 14, 16, 49], [22, 34, 32, 27], [58, 59, 57, 0], [31, 30, 29, 33], [57, 54, 49, 53], [14, 22, 38, 16], [1, 0, 5, 6], [32, 31, 33, 27], [43, 10, 47, 41], [22, 27, 23, 38], [0, 57, 53, 52], [29, 25, 37, 33], [10, 6, 5, 47], [0, 52, 11, 5], [27, 33, 35, 23], [41, 47, 37, 25], [33, 37, 19, 35], [47, 5, 11, 17], [47, 17, 19, 37], [7, 51, 56, 60], [8, 7, 60, 2], [60, 56, 55, 59], [2, 60, 61, 3], [61, 60, 59, 58], [16, 38, 23, 13], [49, 16, 13, 53], [13, 23, 35, 19], [52, 53, 13, 11], [11, 13, 19, 17], [42, 45, 40, 24], [45, 44, 43, 40], [24, 40, 30, 28], [40, 43, 41, 25], [30, 40, 25, 29]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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
