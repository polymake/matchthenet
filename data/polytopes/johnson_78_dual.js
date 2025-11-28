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
obj0.name = "johnson_78_dual";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.833791, 0.515311, 0));
obj0.userData.points.push(new PMPoint(-0.804392, 0.30725, -0.497142));
obj0.userData.points.push(new PMPoint(-0.680424, -0.624145, -0.533083));
obj0.userData.points.push(new PMPoint(-0.792317, -0.264106, -0.590558));
obj0.userData.points.push(new PMPoint(-0.558988, 0, -0.904461));
obj0.userData.points.push(new PMPoint(-0.475012, 0.768586, -0.293574));
obj0.userData.points.push(new PMPoint(-0.554621, 0.554621, -0.554621));
obj0.userData.points.push(new PMPoint(-0.476804, -0.953608, 0));
obj0.userData.points.push(new PMPoint(-0.442465, -0.884931, -0.377911));
obj0.userData.points.push(new PMPoint(-0.332299, -0.537671, -0.869971));
obj0.userData.points.push(new PMPoint(-0.30725, 0.497142, -0.804392));
obj0.userData.points.push(new PMPoint(0, -0.904461, 0.558988));
obj0.userData.points.push(new PMPoint(0, -1.07534, 0));
obj0.userData.points.push(new PMPoint(0, 0, -1.04287));
obj0.userData.points.push(new PMPoint(0, -0.374247, -0.979792));
obj0.userData.points.push(new PMPoint(0, 0.354151, -0.927179));
obj0.userData.points.push(new PMPoint(0.30725, -0.497142, 0.804392));
obj0.userData.points.push(new PMPoint(0.537671, -0.869971, -0.332299));
obj0.userData.points.push(new PMPoint(0.374247, -0.979792, 0));
obj0.userData.points.push(new PMPoint(0.558988, 0, -0.904461));
obj0.userData.points.push(new PMPoint(0.475012, 0.768586, -0.293574));
obj0.userData.points.push(new PMPoint(0.573028, -0.573028, 0.573028));
obj0.userData.points.push(new PMPoint(0.904461, -0.558988, 0));
obj0.userData.points.push(new PMPoint(0.804392, -0.30725, 0.497142));
obj0.userData.points.push(new PMPoint(0.768586, 0.293574, 0.475012));
obj0.userData.points.push(new PMPoint(0.927179, 0, -0.354151));
obj0.userData.points.push(new PMPoint(0.897396, 0, 0.342775));
obj0.userData.points.push(new PMPoint(0.994283, 0, 0));
obj0.userData.points.push(new PMPoint(0.833791, 0.515311, 0));
obj0.userData.points.push(new PMPoint(0.804392, 0.30725, -0.497142));
obj0.userData.points.push(new PMPoint(0.843698, -0.322264, -0.521434));
obj0.userData.points.push(new PMPoint(0.554621, 0.554621, -0.554621));
obj0.userData.points.push(new PMPoint(0.605545, -0.605545, -0.605545));
obj0.userData.points.push(new PMPoint(0.515311, 0, 0.833791));
obj0.userData.points.push(new PMPoint(0.521434, -0.843698, 0.322264));
obj0.userData.points.push(new PMPoint(0.30725, 0.497142, -0.804392));
obj0.userData.points.push(new PMPoint(0.332299, -0.537671, -0.869971));
obj0.userData.points.push(new PMPoint(0, -0.342775, 0.897396));
obj0.userData.points.push(new PMPoint(0, 0, 0.950024));
obj0.userData.points.push(new PMPoint(0, 0.833791, -0.515311));
obj0.userData.points.push(new PMPoint(0, -0.954458, -0.589888));
obj0.userData.points.push(new PMPoint(-0.30725, -0.497142, 0.804392));
obj0.userData.points.push(new PMPoint(-0.427332, -0.854664, 0.364985));
obj0.userData.points.push(new PMPoint(0, 1.03758, 0.641258));
obj0.userData.points.push(new PMPoint(-0.515311, 0, 0.833791));
obj0.userData.points.push(new PMPoint(-0.750768, -0.250256, 0.55959));
obj0.userData.points.push(new PMPoint(-0.64805, -0.594449, 0.50772));
obj0.userData.points.push(new PMPoint(-0.768586, 0.293574, 0.475012));
obj0.userData.points.push(new PMPoint(-0.964512, 0.0955893, 0));
obj0.userData.points.push(new PMPoint(-0.934363, -0.0842515, 0.304825));
obj0.userData.points.push(new PMPoint(-0.904461, -0.558988, 0));
obj0.userData.points.push(new PMPoint(-0.961838, -0.0867289, -0.313788));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 2, 3, 1, 4, 3, 4, 0, 5, 1, 6, 5, 6, 2, 8, 7, 8, 2, 9, 4, 9, 4, 10, 6, 10, 7, 12, 11, 12, 4, 13, 9, 14, 13, 14, 10, 15, 13, 15, 11, 16, 12, 18, 17, 18, 13, 19, 16, 21, 17, 22, 21, 23, 22, 23, 23, 26, 24, 26, 22, 27, 25, 27, 26, 27, 20, 28, 24, 28, 27, 28, 19, 29, 25, 29, 28, 29, 19, 30, 22, 30, 25, 30, 20, 31, 29, 31, 17, 32, 30, 32, 16, 33, 23, 33, 24, 33, 11, 34, 18, 34, 21, 34, 22, 34, 15, 35, 19, 35, 31, 35, 14, 36, 19, 36, 32, 36, 16, 37, 33, 38, 37, 38, 5, 39, 10, 39, 20, 39, 35, 39, 8, 40, 9, 40, 12, 40, 17, 40, 36, 40, 11, 41, 37, 41, 7, 42, 11, 42, 0, 43, 5, 43, 20, 43, 24, 43, 28, 43, 33, 43, 38, 43, 39, 43, 38, 44, 41, 44, 43, 44, 44, 45, 41, 46, 42, 46, 45, 46, 0, 47, 43, 47, 44, 47, 0, 48, 45, 49, 47, 49, 48, 49, 2, 50, 7, 50, 46, 50, 49, 50, 1, 51, 3, 51, 48, 51, 50, 51];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[40, 12, 7, 8], [18, 12, 40, 17], [7, 12, 11, 42], [40, 8, 2, 9], [11, 12, 18, 34], [40, 36, 32, 17], [42, 11, 41, 46], [34, 18, 17, 22], [40, 9, 14, 36], [11, 34, 21, 16], [22, 17, 32, 30], [9, 2, 3, 4], [41, 11, 16, 37], [34, 22, 23, 21], [9, 4, 13, 14], [36, 19, 30, 32], [46, 41, 44, 45], [22, 30, 25, 27], [3, 51, 1, 4], [36, 14, 13, 19], [41, 37, 38, 44], [16, 21, 23, 33], [23, 22, 27, 26], [13, 4, 10, 15], [30, 19, 29, 25], [45, 44, 47, 49], [37, 16, 33, 38], [51, 48, 0, 1], [4, 1, 6, 10], [19, 13, 15, 35], [44, 38, 43], [33, 23, 26, 24], [48, 49, 47, 0], [27, 25, 29, 28], [19, 35, 31, 29], [47, 44, 43], [38, 33, 43], [1, 0, 5, 6], [26, 27, 28, 24], [15, 10, 39, 35], [33, 24, 43], [0, 47, 43], [29, 31, 20, 28], [10, 6, 5, 39], [0, 43, 5], [24, 28, 43], [35, 39, 20, 31], [28, 20, 43], [39, 5, 43], [39, 43, 20], [7, 42, 46, 50], [8, 7, 50, 2], [50, 46, 45, 49], [2, 50, 51, 3], [51, 50, 49, 48]];
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
