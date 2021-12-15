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
obj0.name = "triplet_zono-johnson-triplet_1";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-1.13121, 0, -0.144028));
obj0.userData.points.push(new PMPoint(-1.13121, 0, 0.144028));
obj0.userData.points.push(new PMPoint(-0.987186, -0.233043, -0.055014));
obj0.userData.points.push(new PMPoint(-0.987186, -0.233043, 0.5211));
obj0.userData.points.push(new PMPoint(-0.987186, 0.233043, -0.5211));
obj0.userData.points.push(new PMPoint(-0.987186, 0.233043, 0.055014));
obj0.userData.points.push(new PMPoint(-0.843157, -0.466086, 0.322057));
obj0.userData.points.push(new PMPoint(-0.843157, -0.466086, 0.610114));
obj0.userData.points.push(new PMPoint(-0.843157, 0.466086, -0.610114));
obj0.userData.points.push(new PMPoint(-0.843157, 0.466086, -0.322057));
obj0.userData.points.push(new PMPoint(-0.754143, -0.322057, -0.199042));
obj0.userData.points.push(new PMPoint(-0.754143, -0.144028, 0.665128));
obj0.userData.points.push(new PMPoint(-0.754143, 0.144028, -0.665128));
obj0.userData.points.push(new PMPoint(-0.754143, 0.322057, 0.199042));
obj0.userData.points.push(new PMPoint(-0.610114, -0.5551, 0.178029));
obj0.userData.points.push(new PMPoint(-0.610114, -0.0890145, -0.576114));
obj0.userData.points.push(new PMPoint(-0.610114, 0.0890145, 0.576114));
obj0.userData.points.push(new PMPoint(-0.610114, 0.5551, -0.178029));
obj0.userData.points.push(new PMPoint(-0.466086, -0.610114, 0.843157));
obj0.userData.points.push(new PMPoint(-0.466086, 0.610114, -0.843157));
obj0.userData.points.push(new PMPoint(-0.377071, -0.288057, 0.898171));
obj0.userData.points.push(new PMPoint(-0.377071, 0.288057, -0.898171));
obj0.userData.points.push(new PMPoint(-0.233043, -0.699129, 0.411072));
obj0.userData.points.push(new PMPoint(-0.233043, -0.699129, 0.699129));
obj0.userData.points.push(new PMPoint(-0.233043, -0.5211, 0.987186));
obj0.userData.points.push(new PMPoint(-0.233043, -0.055014, 0.809157));
obj0.userData.points.push(new PMPoint(-0.233043, 0.055014, -0.809157));
obj0.userData.points.push(new PMPoint(-0.233043, 0.5211, -0.987186));
obj0.userData.points.push(new PMPoint(-0.233043, 0.699129, -0.699129));
obj0.userData.points.push(new PMPoint(-0.233043, 0.699129, -0.411072));
obj0.userData.points.push(new PMPoint(0.233043, -0.699129, 0.411072));
obj0.userData.points.push(new PMPoint(0.233043, -0.699129, 0.699129));
obj0.userData.points.push(new PMPoint(0.233043, -0.5211, 0.987186));
obj0.userData.points.push(new PMPoint(0.233043, -0.055014, 0.809157));
obj0.userData.points.push(new PMPoint(0.233043, 0.055014, -0.809157));
obj0.userData.points.push(new PMPoint(0.233043, 0.5211, -0.987186));
obj0.userData.points.push(new PMPoint(0.233043, 0.699129, -0.699129));
obj0.userData.points.push(new PMPoint(0.233043, 0.699129, -0.411072));
obj0.userData.points.push(new PMPoint(0.377071, -0.288057, 0.898171));
obj0.userData.points.push(new PMPoint(0.377071, 0.288057, -0.898171));
obj0.userData.points.push(new PMPoint(0.466086, -0.610114, 0.843157));
obj0.userData.points.push(new PMPoint(0.466086, 0.610114, -0.843157));
obj0.userData.points.push(new PMPoint(0.610114, -0.5551, 0.178029));
obj0.userData.points.push(new PMPoint(0.610114, -0.0890145, -0.576114));
obj0.userData.points.push(new PMPoint(0.610114, 0.0890145, 0.576114));
obj0.userData.points.push(new PMPoint(0.610114, 0.5551, -0.178029));
obj0.userData.points.push(new PMPoint(0.754143, -0.322057, -0.199042));
obj0.userData.points.push(new PMPoint(0.754143, -0.144028, 0.665128));
obj0.userData.points.push(new PMPoint(0.754143, 0.144028, -0.665128));
obj0.userData.points.push(new PMPoint(0.754143, 0.322057, 0.199042));
obj0.userData.points.push(new PMPoint(0.843157, -0.466086, 0.322057));
obj0.userData.points.push(new PMPoint(0.843157, -0.466086, 0.610114));
obj0.userData.points.push(new PMPoint(0.843157, 0.466086, -0.610114));
obj0.userData.points.push(new PMPoint(0.843157, 0.466086, -0.322057));
obj0.userData.points.push(new PMPoint(0.987186, -0.233043, -0.055014));
obj0.userData.points.push(new PMPoint(0.987186, -0.233043, 0.5211));
obj0.userData.points.push(new PMPoint(0.987186, 0.233043, -0.5211));
obj0.userData.points.push(new PMPoint(0.987186, 0.233043, 0.055014));
obj0.userData.points.push(new PMPoint(1.13121, 0, -0.144028));
obj0.userData.points.push(new PMPoint(1.13121, 0, 0.144028));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 3, 0, 4, 1, 5, 2, 6, 3, 7, 6, 7, 4, 8, 5, 9, 8, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 10, 14, 10, 15, 12, 15, 11, 16, 13, 16, 9, 17, 13, 17, 7, 18, 8, 19, 11, 20, 12, 21, 14, 22, 18, 23, 22, 23, 18, 24, 20, 24, 16, 25, 20, 25, 15, 26, 21, 26, 19, 27, 21, 27, 19, 28, 17, 29, 28, 29, 22, 30, 23, 31, 30, 31, 24, 32, 25, 33, 26, 34, 27, 35, 28, 36, 29, 37, 36, 37, 32, 38, 33, 38, 34, 39, 35, 39, 31, 40, 32, 40, 35, 41, 36, 41, 30, 42, 34, 43, 33, 44, 37, 45, 42, 46, 43, 46, 38, 47, 44, 47, 39, 48, 43, 48, 44, 49, 45, 49, 42, 50, 40, 51, 50, 51, 41, 52, 45, 53, 52, 53, 46, 54, 50, 54, 47, 55, 51, 55, 48, 56, 52, 56, 49, 57, 53, 57, 54, 58, 56, 58, 55, 59, 57, 59, 58, 59];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[2, 0, 4, 12, 15, 10], [1, 0, 2, 6, 7, 3], [4, 0, 1, 5, 9, 8], [12, 4, 8, 19, 27, 21], [8, 9, 17, 29, 28, 19], [5, 1, 3, 11, 16, 13], [14, 22, 23, 18, 7, 6], [2, 10, 14, 6], [10, 15, 26, 34, 43, 46, 42, 30, 22, 14], [3, 7, 18, 24, 20, 11], [15, 12, 21, 26], [9, 5, 13, 17], [20, 24, 32, 38, 33, 25], [21, 27, 35, 39, 34, 26], [31, 40, 32, 24, 18, 23], [13, 16, 25, 33, 44, 49, 45, 37, 29, 17], [16, 11, 20, 25], [22, 30, 31, 23], [42, 46, 54, 50], [43, 34, 39, 48], [44, 33, 38, 47], [27, 19, 28, 36, 41, 35], [40, 51, 55, 47, 38, 32], [28, 29, 37, 36], [49, 44, 47, 55, 59, 57], [30, 42, 50, 51, 40, 31], [35, 41, 52, 56, 48, 39], [41, 36, 37, 45, 53, 52], [46, 43, 48, 56, 58, 54], [45, 49, 57, 53], [54, 58, 59, 55, 51, 50], [58, 56, 52, 53, 57, 59]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x497542, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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
