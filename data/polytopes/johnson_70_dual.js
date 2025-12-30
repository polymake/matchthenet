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
obj0.name = "johnson_70_dual";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.937139, 0, 0.357955));
obj0.userData.points.push(new PMPoint(-0.650164, 0, 1.05199));
obj0.userData.points.push(new PMPoint(-0.589582, -0.589582, 0.589582));
obj0.userData.points.push(new PMPoint(-0.589582, 0.589582, 0.589582));
obj0.userData.points.push(new PMPoint(-0.574651, -0.770975, 0.256992));
obj0.userData.points.push(new PMPoint(-0.301923, -0.92547, 0.0834495));
obj0.userData.points.push(new PMPoint(-0.574651, 0.770975, 0.256992));
obj0.userData.points.push(new PMPoint(-0.508319, 0.648815, 0.59515));
obj0.userData.points.push(new PMPoint(-0.372206, -0.435786, 0.871572));
obj0.userData.points.push(new PMPoint(-0.508319, -0.648815, 0.59515));
obj0.userData.points.push(new PMPoint(-0.372206, 0.435786, 0.871572));
obj0.userData.points.push(new PMPoint(0, 0.466334, 0.932668));
obj0.userData.points.push(new PMPoint(0, 0.834322, 0.51564));
obj0.userData.points.push(new PMPoint(0, -0.375283, 0.982505));
obj0.userData.points.push(new PMPoint(0, 0.375283, 0.982505));
obj0.userData.points.push(new PMPoint(0.556774, 0, -0.90088));
obj0.userData.points.push(new PMPoint(0.372206, 0.435786, 0.871572));
obj0.userData.points.push(new PMPoint(0.508319, 0.648815, 0.59515));
obj0.userData.points.push(new PMPoint(0.574651, -0.770975, 0.256992));
obj0.userData.points.push(new PMPoint(0.508319, -0.648815, 0.59515));
obj0.userData.points.push(new PMPoint(0.574651, 0.770975, 0.256992));
obj0.userData.points.push(new PMPoint(0.301923, 0.92547, 0.0834495));
obj0.userData.points.push(new PMPoint(0.589582, 0.589582, 0.589582));
obj0.userData.points.push(new PMPoint(0.937139, 0, 0.357955));
obj0.userData.points.push(new PMPoint(0.88654, 0, -0.338628));
obj0.userData.points.push(new PMPoint(0.970587, 0.599856, 0));
obj0.userData.points.push(new PMPoint(0.53892, 0.53892, -0.53892));
obj0.userData.points.push(new PMPoint(0.53892, -0.53892, -0.53892));
obj0.userData.points.push(new PMPoint(0.970587, -0.599856, 0));
obj0.userData.points.push(new PMPoint(0.589582, -0.589582, 0.589582));
obj0.userData.points.push(new PMPoint(0.348024, 0.911138, 0));
obj0.userData.points.push(new PMPoint(0.348024, -0.911138, 0));
obj0.userData.points.push(new PMPoint(0.650164, 0, 1.05199));
obj0.userData.points.push(new PMPoint(0.372206, -0.435786, 0.871572));
obj0.userData.points.push(new PMPoint(0, -0.466334, 0.932668));
obj0.userData.points.push(new PMPoint(0, 0.963201, -0.0954593));
obj0.userData.points.push(new PMPoint(-0.301923, 0.92547, 0.0834495));
obj0.userData.points.push(new PMPoint(0, 0.324456, -0.849436));
obj0.userData.points.push(new PMPoint(0, -0.324456, -0.849436));
obj0.userData.points.push(new PMPoint(0, -0.963201, -0.0954593));
obj0.userData.points.push(new PMPoint(0.301923, -0.92547, 0.0834495));
obj0.userData.points.push(new PMPoint(0, -0.834322, 0.51564));
obj0.userData.points.push(new PMPoint(-0.348024, 0.911138, 0));
obj0.userData.points.push(new PMPoint(-0.348024, -0.911138, 0));
obj0.userData.points.push(new PMPoint(0, 0.92629, -0.572479));
obj0.userData.points.push(new PMPoint(0, -0.92629, -0.572479));
obj0.userData.points.push(new PMPoint(-0.53892, 0.53892, -0.53892));
obj0.userData.points.push(new PMPoint(-0.53892, -0.53892, -0.53892));
obj0.userData.points.push(new PMPoint(-0.556774, 0, -0.90088));
obj0.userData.points.push(new PMPoint(-0.88654, 0, -0.338628));
obj0.userData.points.push(new PMPoint(-0.970587, 0.599856, 0));
obj0.userData.points.push(new PMPoint(-0.970587, -0.599856, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 1, 3, 4, 5, 3, 7, 6, 7, 1, 8, 2, 9, 4, 9, 8, 9, 1, 10, 7, 10, 10, 11, 7, 12, 11, 12, 1, 13, 1, 14, 11, 14, 11, 16, 12, 17, 16, 17, 18, 19, 17, 20, 12, 21, 20, 21, 17, 22, 15, 24, 15, 25, 20, 25, 22, 25, 23, 25, 24, 25, 15, 26, 25, 26, 15, 27, 15, 28, 18, 28, 23, 28, 24, 28, 25, 28, 27, 28, 19, 29, 28, 29, 21, 30, 25, 30, 28, 31, 1, 32, 13, 32, 14, 32, 16, 32, 22, 32, 23, 32, 25, 32, 28, 32, 29, 32, 19, 33, 32, 33, 8, 34, 13, 34, 33, 34, 21, 35, 6, 36, 12, 36, 35, 36, 15, 37, 15, 38, 5, 39, 18, 40, 31, 40, 39, 40, 5, 41, 9, 41, 19, 41, 34, 41, 40, 41, 36, 42, 5, 43, 15, 44, 25, 44, 26, 44, 30, 44, 35, 44, 37, 44, 42, 44, 15, 45, 27, 45, 28, 45, 31, 45, 38, 45, 39, 45, 43, 45, 44, 46, 45, 47, 15, 48, 37, 48, 38, 48, 44, 48, 45, 48, 46, 48, 47, 48, 48, 49, 0, 50, 1, 50, 3, 50, 6, 50, 42, 50, 44, 50, 46, 50, 48, 50, 49, 50, 0, 51, 1, 51, 2, 51, 4, 51, 43, 51, 45, 51, 47, 51, 48, 51, 49, 51, 50, 51];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[45, 39, 5, 43], [40, 39, 45, 31], [45, 43, 51], [45, 51, 47], [31, 45, 28], [43, 5, 4, 51], [28, 45, 27], [51, 4, 9, 2], [45, 47, 48], [40, 31, 28, 18], [45, 48, 38], [19, 18, 28, 29], [27, 45, 15], [2, 9, 8, 1], [47, 51, 48], [45, 38, 15], [8, 34, 13, 1], [48, 51, 49], [19, 29, 32, 33], [51, 2, 1], [28, 27, 15], [34, 33, 32, 13], [51, 1, 0], [28, 15, 24], [49, 51, 50], [29, 28, 32], [38, 48, 15], [51, 0, 50], [32, 28, 23], [15, 48, 37], [28, 24, 25], [48, 49, 50], [13, 32, 1], [23, 28, 25], [48, 50, 46], [1, 32, 14], [37, 48, 44], [24, 15, 25], [0, 1, 50], [48, 46, 44], [25, 15, 26], [50, 1, 3], [15, 37, 44], [1, 14, 11, 10], [32, 23, 25], [15, 44, 26], [3, 1, 10, 7], [32, 25, 22], [14, 32, 16, 11], [46, 50, 44], [32, 22, 17, 16], [44, 50, 42], [50, 3, 7, 6], [25, 26, 44], [50, 6, 36, 42], [25, 44, 30], [22, 25, 20, 17], [20, 25, 30, 21], [42, 36, 35, 44], [21, 30, 44, 35], [5, 39, 40, 41], [5, 41, 9, 4], [9, 41, 34, 8], [41, 19, 33, 34], [41, 40, 18, 19], [11, 16, 17, 12], [17, 20, 21, 12], [36, 12, 21, 35], [6, 7, 12, 36], [10, 11, 12, 7]];
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
