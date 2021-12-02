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
obj0.name = "truncated_icosahedron";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(0, 0.979432, 0.201774));
obj0.userData.points.push(new PMPoint(0.326477, 0.854729, 0.403548));
obj0.userData.points.push(new PMPoint(0, 0.979432, -0.201774));
obj0.userData.points.push(new PMPoint(-0.326477, 0.854729, 0.403548));
obj0.userData.points.push(new PMPoint(0.326477, 0.854729, -0.403548));
obj0.userData.points.push(new PMPoint(0.652955, 0.730026, 0.201774));
obj0.userData.points.push(new PMPoint(0.201774, 0.652955, 0.730026));
obj0.userData.points.push(new PMPoint(-0.326477, 0.854729, -0.403548));
obj0.userData.points.push(new PMPoint(0.652955, 0.730026, -0.201774));
obj0.userData.points.push(new PMPoint(-0.652955, 0.730026, 0.201774));
obj0.userData.points.push(new PMPoint(-0.201774, 0.652955, 0.730026));
obj0.userData.points.push(new PMPoint(0.201774, 0.652955, -0.730026));
obj0.userData.points.push(new PMPoint(0.854729, 0.403548, 0.326477));
obj0.userData.points.push(new PMPoint(-0.652955, 0.730026, -0.201774));
obj0.userData.points.push(new PMPoint(0.403548, 0.326477, 0.854729));
obj0.userData.points.push(new PMPoint(-0.201774, 0.652955, -0.730026));
obj0.userData.points.push(new PMPoint(0.854729, 0.403548, -0.326477));
obj0.userData.points.push(new PMPoint(-0.854729, 0.403548, 0.326477));
obj0.userData.points.push(new PMPoint(0.730026, 0.201774, 0.652955));
obj0.userData.points.push(new PMPoint(-0.403548, 0.326477, 0.854729));
obj0.userData.points.push(new PMPoint(0.403548, 0.326477, -0.854729));
obj0.userData.points.push(new PMPoint(0.979432, 0.201774, 0));
obj0.userData.points.push(new PMPoint(-0.854729, 0.403548, -0.326477));
obj0.userData.points.push(new PMPoint(0.201774, 0, 0.979432));
obj0.userData.points.push(new PMPoint(-0.730026, 0.201774, 0.652955));
obj0.userData.points.push(new PMPoint(0.730026, 0.201774, -0.652955));
obj0.userData.points.push(new PMPoint(-0.403548, 0.326477, -0.854729));
obj0.userData.points.push(new PMPoint(-0.979432, 0.201774, 0));
obj0.userData.points.push(new PMPoint(0.730026, -0.201774, 0.652955));
obj0.userData.points.push(new PMPoint(-0.201774, 0, 0.979432));
obj0.userData.points.push(new PMPoint(0.201774, 0, -0.979432));
obj0.userData.points.push(new PMPoint(-0.730026, 0.201774, -0.652955));
obj0.userData.points.push(new PMPoint(0.979432, -0.201774, 0));
obj0.userData.points.push(new PMPoint(0.403548, -0.326477, 0.854729));
obj0.userData.points.push(new PMPoint(-0.730026, -0.201774, 0.652955));
obj0.userData.points.push(new PMPoint(0.730026, -0.201774, -0.652955));
obj0.userData.points.push(new PMPoint(-0.201774, 0, -0.979432));
obj0.userData.points.push(new PMPoint(0.854729, -0.403548, 0.326477));
obj0.userData.points.push(new PMPoint(-0.979432, -0.201774, 0));
obj0.userData.points.push(new PMPoint(-0.403548, -0.326477, 0.854729));
obj0.userData.points.push(new PMPoint(0.403548, -0.326477, -0.854729));
obj0.userData.points.push(new PMPoint(-0.730026, -0.201774, -0.652955));
obj0.userData.points.push(new PMPoint(0.854729, -0.403548, -0.326477));
obj0.userData.points.push(new PMPoint(-0.854729, -0.403548, 0.326477));
obj0.userData.points.push(new PMPoint(0.201774, -0.652955, 0.730026));
obj0.userData.points.push(new PMPoint(-0.403548, -0.326477, -0.854729));
obj0.userData.points.push(new PMPoint(0.652955, -0.730026, 0.201774));
obj0.userData.points.push(new PMPoint(-0.854729, -0.403548, -0.326477));
obj0.userData.points.push(new PMPoint(-0.201774, -0.652955, 0.730026));
obj0.userData.points.push(new PMPoint(0.201774, -0.652955, -0.730026));
obj0.userData.points.push(new PMPoint(0.652955, -0.730026, -0.201774));
obj0.userData.points.push(new PMPoint(-0.652955, -0.730026, 0.201774));
obj0.userData.points.push(new PMPoint(0.326477, -0.854729, 0.403548));
obj0.userData.points.push(new PMPoint(-0.201774, -0.652955, -0.730026));
obj0.userData.points.push(new PMPoint(-0.652955, -0.730026, -0.201774));
obj0.userData.points.push(new PMPoint(-0.326477, -0.854729, 0.403548));
obj0.userData.points.push(new PMPoint(0.326477, -0.854729, -0.403548));
obj0.userData.points.push(new PMPoint(0, -0.979432, 0.201774));
obj0.userData.points.push(new PMPoint(-0.326477, -0.854729, -0.403548));
obj0.userData.points.push(new PMPoint(0, -0.979432, -0.201774));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 0, 3, 2, 4, 1, 5, 1, 6, 2, 7, 4, 8, 5, 8, 3, 9, 3, 10, 6, 10, 4, 11, 5, 12, 7, 13, 9, 13, 6, 14, 7, 15, 11, 15, 8, 16, 9, 17, 12, 18, 14, 18, 10, 19, 11, 20, 12, 21, 16, 21, 13, 22, 14, 23, 17, 24, 19, 24, 16, 25, 20, 25, 15, 26, 17, 27, 22, 27, 18, 28, 19, 29, 23, 29, 20, 30, 22, 31, 26, 31, 21, 32, 23, 33, 28, 33, 24, 34, 25, 35, 26, 36, 30, 36, 28, 37, 32, 37, 27, 38, 29, 39, 34, 39, 30, 40, 35, 40, 31, 41, 32, 42, 35, 42, 34, 43, 38, 43, 33, 44, 36, 45, 41, 45, 37, 46, 38, 47, 41, 47, 39, 48, 44, 48, 40, 49, 42, 50, 46, 50, 43, 51, 44, 52, 46, 52, 45, 53, 49, 53, 47, 54, 51, 54, 48, 55, 51, 55, 49, 56, 50, 56, 52, 57, 55, 57, 53, 58, 54, 58, 56, 59, 57, 59, 58, 59];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[50, 42, 32, 37, 46], [16, 25, 20, 11, 4, 8], [35, 42, 50, 56, 49, 40], [25, 35, 40, 30, 20], [20, 30, 36, 26, 15, 11], [40, 49, 53, 45, 36, 30], [4, 11, 15, 7, 2], [56, 59, 58, 53, 49], [15, 26, 31, 22, 13, 7], [36, 45, 41, 31, 26], [58, 54, 47, 41, 45, 53], [47, 38, 27, 22, 31, 41], [34, 24, 17, 27, 38, 43], [54, 51, 43, 38, 47], [13, 22, 27, 17, 9], [48, 39, 34, 43, 51, 55], [39, 29, 19, 24, 34], [10, 3, 9, 17, 24, 19], [59, 57, 55, 51, 54, 58], [2, 7, 13, 9, 3, 0], [52, 44, 48, 55, 57], [6, 1, 0, 3, 10], [44, 33, 23, 29, 39, 48], [14, 6, 10, 19, 29, 23], [50, 46, 52, 57, 59, 56], [8, 4, 2, 0, 1, 5], [28, 18, 14, 23, 33], [46, 37, 28, 33, 44, 52], [18, 12, 5, 1, 6, 14], [21, 16, 8, 5, 12], [32, 42, 35, 25, 16, 21], [37, 32, 21, 12, 18, 28]];
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
