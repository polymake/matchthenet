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
obj0.name = "johnson_72_dual";
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
obj0.userData.points.push(new PMPoint(-0.35066, 0.91804, 0));
obj0.userData.points.push(new PMPoint(0, -0.873393, 0.539786));
obj0.userData.points.push(new PMPoint(0, 0.873393, 0.539786));
obj0.userData.points.push(new PMPoint(0, 0, 1.00082));
obj0.userData.points.push(new PMPoint(0, -0.35066, 0.91804));
obj0.userData.points.push(new PMPoint(0, 0.35066, 0.91804));
obj0.userData.points.push(new PMPoint(0.30927, -0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(0.30927, 0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(0.50041, -0.80968, 0.30927));
obj0.userData.points.push(new PMPoint(0.539786, 0, 0.873393));
obj0.userData.points.push(new PMPoint(0.50041, 0.80968, 0.30927));
obj0.userData.points.push(new PMPoint(0.56738, -0.56738, 0.56738));
obj0.userData.points.push(new PMPoint(0.56738, 0.56738, 0.56738));
obj0.userData.points.push(new PMPoint(0.80968, -0.30927, -0.50041));
obj0.userData.points.push(new PMPoint(0.80968, 0.30927, -0.50041));
obj0.userData.points.push(new PMPoint(0.873393, 0.539786, 0));
obj0.userData.points.push(new PMPoint(1.00082, 0, 0));
obj0.userData.points.push(new PMPoint(0.91804, 0, 0.35066));
obj0.userData.points.push(new PMPoint(0.91804, 0, -0.35066));
obj0.userData.points.push(new PMPoint(0.80968, 0.30927, 0.50041));
obj0.userData.points.push(new PMPoint(0.80968, -0.30927, 0.50041));
obj0.userData.points.push(new PMPoint(0.873393, -0.539786, 0));
obj0.userData.points.push(new PMPoint(0.56738, 0.56738, -0.56738));
obj0.userData.points.push(new PMPoint(0.56738, -0.56738, -0.56738));
obj0.userData.points.push(new PMPoint(0.35066, 0.91804, 0));
obj0.userData.points.push(new PMPoint(0.50041, 0.80968, -0.30927));
obj0.userData.points.push(new PMPoint(0.539786, 0, -0.873393));
obj0.userData.points.push(new PMPoint(0.35066, -0.91804, 0));
obj0.userData.points.push(new PMPoint(0.50041, -0.80968, -0.30927));
obj0.userData.points.push(new PMPoint(0.30927, 0.50041, -0.80968));
obj0.userData.points.push(new PMPoint(0.30927, -0.50041, -0.80968));
obj0.userData.points.push(new PMPoint(0, 1.00082, 0));
obj0.userData.points.push(new PMPoint(0, 0.35066, -0.91804));
obj0.userData.points.push(new PMPoint(0, -0.35066, -0.91804));
obj0.userData.points.push(new PMPoint(0, 0, -1.00082));
obj0.userData.points.push(new PMPoint(0, -1.00082, 0));
obj0.userData.points.push(new PMPoint(0, 0.873393, -0.539786));
obj0.userData.points.push(new PMPoint(0, -0.873393, -0.539786));
obj0.userData.points.push(new PMPoint(-0.30927, 0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(-0.30927, -0.50041, 0.80968));
obj0.userData.points.push(new PMPoint(-0.41056, -0.82112, 0.35066));
obj0.userData.points.push(new PMPoint(-0.56738, 0.56738, 0.56738));
obj0.userData.points.push(new PMPoint(-0.50041, 0.80968, 0.30927));
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
obj0.userData.edgeindices = [0, 1, 2, 3, 1, 4, 3, 4, 0, 5, 1, 6, 5, 6, 2, 8, 7, 8, 2, 9, 4, 9, 4, 10, 6, 10, 5, 11, 14, 15, 14, 16, 12, 17, 15, 17, 13, 18, 16, 18, 12, 19, 14, 20, 17, 20, 18, 20, 13, 21, 17, 22, 19, 22, 18, 23, 21, 23, 21, 26, 25, 26, 26, 27, 27, 28, 24, 29, 25, 29, 27, 29, 20, 30, 23, 30, 26, 30, 28, 30, 20, 31, 22, 31, 28, 31, 19, 32, 24, 32, 27, 32, 31, 32, 25, 33, 24, 34, 21, 35, 26, 36, 33, 36, 35, 36, 24, 37, 25, 37, 19, 38, 32, 39, 34, 39, 38, 39, 33, 40, 37, 40, 34, 41, 37, 41, 11, 42, 13, 42, 35, 42, 10, 43, 40, 43, 9, 44, 41, 44, 4, 45, 37, 45, 43, 45, 44, 45, 7, 46, 12, 46, 38, 46, 5, 47, 10, 47, 36, 47, 40, 47, 42, 47, 8, 48, 9, 48, 39, 48, 41, 48, 46, 48, 13, 49, 16, 49, 12, 50, 15, 50, 7, 51, 12, 51, 49, 52, 0, 53, 11, 53, 13, 53, 52, 53, 14, 54, 49, 54, 50, 54, 54, 55, 50, 56, 51, 56, 55, 56, 0, 57, 52, 57, 54, 57, 0, 58, 55, 59, 57, 59, 58, 59, 2, 60, 7, 60, 56, 60, 59, 60, 1, 61, 3, 61, 58, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[48, 46, 7, 8], [38, 46, 48, 39], [7, 46, 12, 51], [48, 8, 2, 9], [12, 46, 38, 19], [48, 41, 34, 39], [51, 12, 50, 56], [19, 38, 39, 32], [48, 9, 44, 41], [12, 19, 22, 17], [32, 39, 34, 24], [9, 2, 3, 4], [50, 12, 17, 15], [19, 32, 31, 22], [9, 4, 45, 44], [41, 37, 24, 34], [56, 50, 54, 55], [32, 24, 29, 27], [3, 61, 1, 4], [41, 44, 45, 37], [50, 15, 14, 54], [17, 22, 31, 20], [31, 32, 27, 28], [45, 4, 10, 43], [24, 37, 25, 29], [55, 54, 57, 59], [15, 17, 20, 14], [61, 58, 0, 1], [4, 1, 6, 10], [37, 45, 43, 40], [54, 14, 16, 49], [20, 31, 28, 30], [58, 59, 57, 0], [27, 29, 25, 26], [37, 40, 33, 25], [57, 54, 49, 52], [14, 20, 18, 16], [1, 0, 5, 6], [28, 27, 26, 30], [43, 10, 47, 40], [20, 30, 23, 18], [0, 57, 52, 53], [25, 33, 36, 26], [10, 6, 5, 47], [16, 18, 13, 49], [0, 53, 11, 5], [30, 26, 21, 23], [40, 47, 36, 33], [52, 49, 13, 53], [26, 36, 35, 21], [47, 5, 11, 42], [18, 23, 21, 13], [47, 42, 35, 36], [53, 13, 42, 11], [13, 21, 35, 42], [7, 51, 56, 60], [8, 7, 60, 2], [60, 56, 55, 59], [2, 60, 61, 3], [61, 60, 59, 58]];
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
