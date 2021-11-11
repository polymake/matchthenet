// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'poly' + divNumber );
var scene = new THREE.Scene();
var renderer = renderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(backgroundColor, 1);
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
obj0.name = "johnson_71_dual";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.882077, 0, 0.336923));
obj0.userData.points.push(new PMPoint(-0.592486, 0, 0.958662));
obj0.userData.points.push(new PMPoint(-0.553767, -0.553767, 0.553767));
obj0.userData.points.push(new PMPoint(-0.553767, 0.553767, 0.553767));
obj0.userData.points.push(new PMPoint(-0.47684, -0.771544, 0.294703));
obj0.userData.points.push(new PMPoint(-0.47684, 0.771544, 0.294703));
obj0.userData.points.push(new PMPoint(-0.298768, -0.483417, 0.782185));
obj0.userData.points.push(new PMPoint(-0.298768, 0.483417, 0.782185));
obj0.userData.points.push(new PMPoint(0, 0.803939, 0.496862));
obj0.userData.points.push(new PMPoint(0, -0.351225, 0.91952));
obj0.userData.points.push(new PMPoint(0, 0.351225, 0.91952));
obj0.userData.points.push(new PMPoint(0, 0, -0.95368));
obj0.userData.points.push(new PMPoint(0.305588, 0.494452, 0.80004));
obj0.userData.points.push(new PMPoint(0.494452, -0.80004, 0.305588));
obj0.userData.points.push(new PMPoint(0.494452, 0.80004, 0.305588));
obj0.userData.points.push(new PMPoint(0.577661, 0.577661, 0.577661));
obj0.userData.points.push(new PMPoint(0.80004, 0.305588, -0.494452));
obj0.userData.points.push(new PMPoint(0.944294, 0, 0.360688));
obj0.userData.points.push(new PMPoint(0.934675, 0, -0.357014));
obj0.userData.points.push(new PMPoint(0.80004, -0.305588, -0.494452));
obj0.userData.points.push(new PMPoint(1.00305, 0.619921, 0));
obj0.userData.points.push(new PMPoint(0.568295, 0.568295, -0.568295));
obj0.userData.points.push(new PMPoint(0.568295, -0.568295, -0.568295));
obj0.userData.points.push(new PMPoint(1.00305, -0.619921, 0));
obj0.userData.points.push(new PMPoint(0.496862, 0, -0.803939));
obj0.userData.points.push(new PMPoint(0.577661, -0.577661, 0.577661));
obj0.userData.points.push(new PMPoint(0.351225, 0.91952, 0));
obj0.userData.points.push(new PMPoint(0.298768, 0.483417, -0.782185));
obj0.userData.points.push(new PMPoint(0.298768, -0.483417, -0.782185));
obj0.userData.points.push(new PMPoint(0.351225, -0.91952, 0));
obj0.userData.points.push(new PMPoint(0.619921, 0, 1.00305));
obj0.userData.points.push(new PMPoint(0.305588, -0.494452, 0.80004));
obj0.userData.points.push(new PMPoint(0, 0.966834, 0));
obj0.userData.points.push(new PMPoint(0, 0.342247, -0.896013));
obj0.userData.points.push(new PMPoint(0, -0.342247, -0.896013));
obj0.userData.points.push(new PMPoint(0, -0.966834, 0));
obj0.userData.points.push(new PMPoint(0, -0.803939, 0.496862));
obj0.userData.points.push(new PMPoint(-0.342247, 0.896013, 0));
obj0.userData.points.push(new PMPoint(-0.342247, -0.896013, 0));
obj0.userData.points.push(new PMPoint(0, 0.958662, -0.592486));
obj0.userData.points.push(new PMPoint(0, -0.958662, -0.592486));
obj0.userData.points.push(new PMPoint(-0.545153, 0.545153, -0.545153));
obj0.userData.points.push(new PMPoint(-0.545153, -0.545153, -0.545153));
obj0.userData.points.push(new PMPoint(-0.576712, 0, -0.933139));
obj0.userData.points.push(new PMPoint(-0.873678, 0, -0.333715));
obj0.userData.points.push(new PMPoint(-0.933139, 0.576712, 0));
obj0.userData.points.push(new PMPoint(-0.933139, -0.576712, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 1, 3, 2, 4, 3, 5, 1, 6, 2, 6, 1, 7, 3, 7, 5, 8, 7, 8, 1, 9, 6, 9, 1, 10, 7, 10, 8, 12, 10, 12, 8, 14, 12, 15, 14, 15, 16, 18, 18, 19, 14, 20, 15, 20, 16, 20, 17, 20, 18, 20, 16, 21, 20, 21, 19, 22, 13, 23, 17, 23, 18, 23, 19, 23, 20, 23, 22, 23, 11, 24, 16, 24, 19, 24, 13, 25, 23, 25, 14, 26, 20, 26, 21, 27, 24, 27, 22, 28, 24, 28, 13, 29, 23, 29, 1, 30, 9, 30, 10, 30, 12, 30, 15, 30, 17, 30, 20, 30, 23, 30, 25, 30, 9, 31, 25, 31, 30, 31, 8, 32, 26, 32, 11, 33, 27, 33, 11, 34, 28, 34, 29, 35, 4, 36, 6, 36, 13, 36, 31, 36, 35, 36, 5, 37, 32, 37, 4, 38, 35, 38, 20, 39, 21, 39, 26, 39, 27, 39, 32, 39, 33, 39, 37, 39, 22, 40, 23, 40, 28, 40, 29, 40, 34, 40, 35, 40, 38, 40, 39, 41, 40, 42, 11, 43, 33, 43, 34, 43, 39, 43, 40, 43, 41, 43, 42, 43, 43, 44, 0, 45, 1, 45, 3, 45, 5, 45, 37, 45, 39, 45, 41, 45, 43, 45, 44, 45, 0, 46, 1, 46, 2, 46, 4, 46, 38, 46, 40, 46, 42, 46, 43, 46, 44, 46, 45, 46];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[40, 35, 38], [29, 35, 40], [40, 38, 46], [40, 46, 42], [29, 40, 23], [38, 4, 46], [23, 40, 22], [4, 2, 46], [40, 42, 43], [13, 29, 23], [40, 43, 34], [13, 23, 25], [22, 40, 28], [2, 6, 1], [42, 46, 43], [40, 34, 28], [6, 9, 1], [43, 46, 44], [31, 25, 30], [2, 1, 46], [23, 22, 19], [9, 31, 30], [46, 1, 0], [23, 19, 18], [44, 46, 45], [25, 23, 30], [34, 43, 11], [46, 0, 45], [30, 23, 17], [11, 43, 33], [23, 18, 20], [43, 44, 45], [9, 30, 1], [17, 23, 20], [43, 45, 41], [1, 30, 10], [33, 43, 39], [18, 16, 20], [0, 1, 45], [43, 41, 39], [16, 21, 20], [45, 1, 3], [33, 39, 27], [1, 10, 7], [30, 17, 20], [27, 39, 21], [1, 7, 3], [30, 20, 15], [10, 30, 12], [41, 45, 39], [12, 30, 15], [39, 45, 37], [45, 3, 5], [21, 39, 20], [45, 5, 37], [26, 20, 39], [15, 20, 14], [14, 20, 26], [39, 37, 32], [39, 32, 26], [38, 35, 36, 4], [4, 36, 6, 2], [6, 36, 31, 9], [36, 13, 25, 31], [36, 35, 29, 13], [10, 12, 8, 7], [12, 15, 14, 8], [8, 14, 26, 32], [5, 8, 32, 37], [7, 8, 5, 3], [22, 28, 24, 19], [19, 24, 16, 18], [24, 27, 21, 16], [11, 33, 27, 24], [34, 11, 24, 28]];
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
