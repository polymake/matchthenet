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
obj0.userData.points.push(new PMPoint(0, -0.542218, 0));
obj0.userData.points.push(new PMPoint(0.542218, -0.542218, 0));
obj0.userData.points.push(new PMPoint(0.130773, 0.993316, 0));
obj0.userData.points.push(new PMPoint(-0.338802, 1.26443, 0));
obj0.userData.points.push(new PMPoint(-0.862544, 1.12409, 0));
obj0.userData.points.push(new PMPoint(-1.13365, 0.654515, 0));
obj0.userData.points.push(new PMPoint(-0.993316, 0.130773, 0));
obj0.userData.points.push(new PMPoint(-0.523742, -0.140336, 0));
obj0.userData.points.push(new PMPoint(1.06596, -0.140336, 0));
obj0.userData.points.push(new PMPoint(1.53553, 0.130773, 0));
obj0.userData.points.push(new PMPoint(1.67587, 0.654515, 0));
obj0.userData.points.push(new PMPoint(1.40476, 1.12409, 0));
obj0.userData.points.push(new PMPoint(0.881019, 1.26443, 0));
obj0.userData.points.push(new PMPoint(0.411445, 0.993316, 0));
obj0.userData.points.push(new PMPoint(1.01179, -0.271109, 0));
obj0.userData.points.push(new PMPoint(-0.469574, -0.271109, 0));
obj0.userData.points.push(new PMPoint(0, -1.08444, 0));
obj0.userData.points.push(new PMPoint(0.542218, -1.08444, 0));
obj0.userData.points.push(new PMPoint(-0.993316, -0.411445, 0));
obj0.userData.points.push(new PMPoint(-1.60323, 0.925623, 0));
obj0.userData.points.push(new PMPoint(-2.12697, 0.785287, 0));
obj0.userData.points.push(new PMPoint(-2.39808, 0.315713, 0));
obj0.userData.points.push(new PMPoint(-2.25774, -0.208029, 0));
obj0.userData.points.push(new PMPoint(-1.78817, -0.479138, 0));
obj0.userData.points.push(new PMPoint(-1.26443, -0.338802, 0));
obj0.userData.points.push(new PMPoint(-1.40476, 1.12409, 0));
obj0.userData.points.push(new PMPoint(-0.722207, 1.64783, 0));
obj0.userData.points.push(new PMPoint(0.130773, 1.53553, 0));
obj0.userData.points.push(new PMPoint(1.53553, -0.411445, 0));
obj0.userData.points.push(new PMPoint(1.80664, -0.338802, 0));
obj0.userData.points.push(new PMPoint(2.33038, -0.479138, 0));
obj0.userData.points.push(new PMPoint(2.79996, -0.208029, 0));
obj0.userData.points.push(new PMPoint(2.9403, 0.315713, 0));
obj0.userData.points.push(new PMPoint(2.66919, 0.785287, 0));
obj0.userData.points.push(new PMPoint(2.14544, 0.925623, 0));
obj0.userData.points.push(new PMPoint(1.94698, 1.12409, 0));
obj0.userData.points.push(new PMPoint(1.26443, 1.64783, 0));
obj0.userData.points.push(new PMPoint(0.813326, -1.01179, 0));
obj0.userData.points.push(new PMPoint(1.2829, -0.740683, 0));
obj0.userData.points.push(new PMPoint(-0.740683, -0.740683, 0));
obj0.userData.points.push(new PMPoint(-0.271109, -1.01179, 0));
obj0.userData.points.push(new PMPoint(0, -1.62665, 0));
obj0.userData.points.push(new PMPoint(0.542218, -1.62665, 0));
obj0.userData.points.push(new PMPoint(-1.40476, -0.862544, 0));
obj0.userData.points.push(new PMPoint(-2.25774, -0.750247, 0));
obj0.userData.points.push(new PMPoint(-2.66919, 0.785287, 0));
obj0.userData.points.push(new PMPoint(-1.98663, 1.30903, 0));
obj0.userData.points.push(new PMPoint(-0.862544, 1.66631, 0));
obj0.userData.points.push(new PMPoint(-1.40476, 1.66631, 0));
obj0.userData.points.push(new PMPoint(0.0446041, 1.64783, 0));
obj0.userData.points.push(new PMPoint(-0.338802, 2.03124, 0));
obj0.userData.points.push(new PMPoint(1.94698, -0.862544, 0));
obj0.userData.points.push(new PMPoint(2.52885, 1.30903, 0));
obj0.userData.points.push(new PMPoint(1.94698, 1.66631, 0));
obj0.userData.points.push(new PMPoint(1.40476, 1.66631, 0));
obj0.userData.points.push(new PMPoint(-2.12697, 1.3275, 0));
obj0.userData.points.push(new PMPoint(-2.66919, 1.3275, 0));
obj0.userData.points.push(new PMPoint(-0.862544, 2.20852, 0));
obj0.userData.points.push(new PMPoint(-1.40476, 2.20852, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 4, 3, 4, 2, 5, 5, 6, 6, 7, 7, 8, 8, 9, 0, 10, 9, 10, 1, 11, 11, 12, 12, 13, 13, 14, 14, 15, 2, 16, 15, 16, 1, 17, 4, 17, 0, 18, 3, 18, 3, 19, 4, 20, 19, 20, 9, 21, 10, 21, 8, 22, 22, 23, 23, 24, 24, 25, 25, 26, 9, 27, 26, 27, 7, 28, 8, 28, 6, 29, 7, 29, 5, 30, 6, 30, 11, 31, 12, 31, 12, 32, 32, 33, 33, 34, 34, 35, 35, 36, 13, 37, 36, 37, 13, 38, 14, 38, 14, 39, 15, 39, 4, 40, 17, 41, 40, 41, 18, 42, 3, 43, 42, 43, 19, 44, 20, 45, 44, 45, 26, 46, 27, 46, 25, 47, 26, 47, 23, 48, 24, 48, 22, 49, 23, 49, 7, 50, 28, 51, 50, 51, 6, 52, 29, 53, 52, 53, 32, 54, 33, 54, 36, 55, 37, 55, 38, 56, 14, 57, 56, 57, 23, 58, 48, 59, 58, 59, 50, 60, 51, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [4, 1, 0, 3], [17, 1, 4], [0, 18, 3], [17, 4, 40, 41], [12, 11, 31], [4, 3, 19, 20], [18, 42, 43, 3], [10, 9, 21], [33, 32, 54], [45, 20, 19, 44], [27, 26, 46], [25, 47, 26], [48, 24, 23], [23, 22, 49], [48, 23, 58, 59], [37, 36, 55], [9, 8, 22, 23, 24, 25, 26, 27], [13, 12, 32, 33, 34, 35, 36, 37], [8, 7, 28], [7, 50, 51, 28], [60, 61, 51, 50], [14, 13, 38], [14, 38, 56, 57], [7, 6, 29], [15, 14, 39], [52, 53, 29, 6], [5, 30, 6], [0, 2, 5, 6, 7, 8, 9, 10], [2, 1, 11, 12, 13, 14, 15, 16]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[51,50],
      [48,23],
      [14,38],
      [37,36],
      [33,32],
      [29,6],
      [28,7],
      [23,22],
      [24,23],
      [26,25],
      [27,26],
      [20,19],
      [3,18],
      [17,4],
      [15,14],
      [14,13],
      [13,12],
      [12,11],
      [6,5],
      [7,6],
      [8,7],
      [9,8],
      [10,9],
      [4,3],
      [3,0],
      [1,4],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.35619449019234,
      2.97167419886273,
      2.97167419886273,
      2.52611294491941,
      2.52611294491941,
      2.52611294491941,
      2.97167419886273,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.52611294491941,
      2.35619449019234,
      2.5261129449194,
      2.52611294491941,
      2.52611294491941,
      2.18627603546529,
      1.5707963267949,
      2.18627603546529,
      2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      1.5707963267949,
      2.18627603546528,
      2.35619449019234,
      2.52611294491941,
      2.5261129449194,
      2.18627603546528,
      2.18627603546528,
      2.97167419886273];

obj0.userData.subtrees = [[60,61],
      [58,59],
      [56,57],
      [55],
      [54],
      [52,53],
      [50,51,60,61],
      [49],
      [48,58,59],
      [47],
      [46],
      [44,45],
      [42,43],
      [40,41],
      [39],
      [38,56,57],
      [32,33,34,35,36,37,54,55],
      [31],
      [30],
      [29,52,53],
      [28,50,51,60,61],
      [22,23,24,25,26,27,46,47,48,49,58,59],
      [21],
      [19,20,44,45],
      [18,42,43],
      [17,40,41],
      [11,12,13,14,15,16,31,32,33,34,35,36,37,38,39,54,55,56,57],
      [5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,46,47,48,49,50,51,52,53,58,59,60,61],
      [3,4,17,18,19,20,40,41,42,43,44,45]];

obj0.userData.polytoperoot = [[0.654514599661024,-0.271108823950793,-0.654514599661024],
      [1.4142135623731,-5.12057762114871e-16,-1],
      [0.542217647901586,0,0.766811551420464]];

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
