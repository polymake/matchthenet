// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'folding' + divNumber );
var scene = new THREE.Scene();
var renderer = foldingRenderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(backgroundColor, 1);
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
obj0.userData.points.push(new PMPoint(0.669552, 0, 0));
obj0.userData.points.push(new PMPoint(0.56423, 0.610583, 0));
obj0.userData.points.push(new PMPoint(0.0950985, 0.734189, 0));
obj0.userData.points.push(new PMPoint(-0.185957, 0.39734, 0));
obj0.userData.points.push(new PMPoint(-0.185957, -0.39734, 0));
obj0.userData.points.push(new PMPoint(0.0950985, -0.734189, 0));
obj0.userData.points.push(new PMPoint(0.56423, -0.610583, 0));
obj0.userData.points.push(new PMPoint(0.956742, 1.09, 0));
obj0.userData.points.push(new PMPoint(0.374117, 1.41992, 0));
obj0.userData.points.push(new PMPoint(0.0165142, 1.16579, 0));
obj0.userData.points.push(new PMPoint(-0.855509, 0.39734, 0));
obj0.userData.points.push(new PMPoint(-0.750186, -0.213243, 0));
obj0.userData.points.push(new PMPoint(-0.281055, -0.336849, 0));
obj0.userData.points.push(new PMPoint(-0.090858, 1.13153, 0));
obj0.userData.points.push(new PMPoint(-0.576, 1.13153, 0));
obj0.userData.points.push(new PMPoint(-0.833412, 0.56793, 0));
obj0.userData.points.push(new PMPoint(1.44073, 0.251397, 0));
obj0.userData.points.push(new PMPoint(1.06774, 0.971672, 0));
obj0.userData.points.push(new PMPoint(0.0165142, -1.16579, 0));
obj0.userData.points.push(new PMPoint(0.374117, -1.41992, 0));
obj0.userData.points.push(new PMPoint(0.956742, -1.09, 0));
obj0.userData.points.push(new PMPoint(-0.655088, -0.520946, 0));
obj0.userData.points.push(new PMPoint(-0.76041, -1.13153, 0));
obj0.userData.points.push(new PMPoint(-0.090858, -1.13153, 0));
obj0.userData.points.push(new PMPoint(1.06774, -0.971672, 0));
obj0.userData.points.push(new PMPoint(1.44073, -0.251397, 0));
obj0.userData.points.push(new PMPoint(1.16596, 1.67321, 0));
obj0.userData.points.push(new PMPoint(0.81864, 2.01193, 0));
obj0.userData.points.push(new PMPoint(0.408092, 1.8573, 0));
obj0.userData.points.push(new PMPoint(0.295533, 1.85152, 0));
obj0.userData.points.push(new PMPoint(-0.351923, 2.02211, 0));
obj0.userData.points.push(new PMPoint(-0.405642, 1.40485, 0));
obj0.userData.points.push(new PMPoint(-1.62669, 0.145943, 0));
obj0.userData.points.push(new PMPoint(-1.25369, -0.574332, 0));
obj0.userData.points.push(new PMPoint(-0.970891, 1.60899, 0));
obj0.userData.points.push(new PMPoint(-1.51509, 1.00751, 0));
obj0.userData.points.push(new PMPoint(2.09108, 0.736142, 0));
obj0.userData.points.push(new PMPoint(1.65319, 1.17451, 0));
obj0.userData.points.push(new PMPoint(0.408092, -1.8573, 0));
obj0.userData.points.push(new PMPoint(0.81864, -2.01193, 0));
obj0.userData.points.push(new PMPoint(1.16596, -1.67321, 0));
obj0.userData.points.push(new PMPoint(-0.566111, -1.49572, 0));
obj0.userData.points.push(new PMPoint(-0.173598, -1.97513, 0));
obj0.userData.points.push(new PMPoint(0.295533, -1.85152, 0));
obj0.userData.points.push(new PMPoint(1.65319, -1.17451, 0));
obj0.userData.points.push(new PMPoint(2.09108, -0.736142, 0));
obj0.userData.points.push(new PMPoint(1.74374, 1.89697, 0));
obj0.userData.points.push(new PMPoint(1.39933, 2.47114, 0));
obj0.userData.points.push(new PMPoint(0.962931, 2.42622, 0));
obj0.userData.points.push(new PMPoint(0.852615, 2.44931, 0));
obj0.userData.points.push(new PMPoint(0.430458, 2.68837, 0));
obj0.userData.points.push(new PMPoint(-0.0712473, 2.32478, 0));
obj0.userData.points.push(new PMPoint(-2.27703, -0.338802, 0));
obj0.userData.points.push(new PMPoint(-1.83915, -0.777169, 0));
obj0.userData.points.push(new PMPoint(-1.48535, 1.95429, 0));
obj0.userData.points.push(new PMPoint(-2.02047, 1.64196, 0));
obj0.userData.points.push(new PMPoint(0.962931, -2.42622, 0));
obj0.userData.points.push(new PMPoint(1.39933, -2.47114, 0));
obj0.userData.points.push(new PMPoint(1.74374, -1.89697, 0));
obj0.userData.points.push(new PMPoint(0.0607741, -2.19602, 0));
obj0.userData.points.push(new PMPoint(0.26999, -2.77923, 0));
obj0.userData.points.push(new PMPoint(0.852615, -2.44931, 0));
obj0.userData.points.push(new PMPoint(1.54362, 2.88544, 0));
obj0.userData.points.push(new PMPoint(1.06428, 3.35291, 0));
obj0.userData.points.push(new PMPoint(0.713376, 2.84226, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 1, 7, 6, 7, 2, 8, 8, 9, 3, 10, 9, 10, 4, 11, 11, 12, 0, 13, 12, 13, 3, 14, 14, 15, 4, 16, 15, 16, 1, 17, 2, 18, 17, 18, 6, 19, 19, 20, 7, 21, 20, 21, 5, 22, 22, 23, 6, 24, 23, 24, 7, 25, 1, 26, 25, 26, 8, 27, 27, 28, 9, 29, 28, 29, 9, 30, 30, 31, 10, 32, 31, 32, 11, 33, 12, 34, 33, 34, 15, 35, 16, 36, 35, 36, 17, 37, 18, 38, 37, 38, 20, 39, 39, 40, 21, 41, 40, 41, 19, 42, 42, 43, 20, 44, 43, 44, 25, 45, 26, 46, 45, 46, 27, 47, 47, 48, 28, 49, 48, 49, 28, 50, 50, 51, 29, 52, 51, 52, 33, 53, 34, 54, 53, 54, 35, 55, 36, 56, 55, 56, 40, 57, 57, 58, 41, 59, 58, 59, 39, 60, 60, 61, 40, 62, 61, 62, 48, 63, 63, 64, 49, 65, 64, 65];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [0, 5, 6, 7, 1], [21, 7, 6, 19, 20], [21, 20, 39, 40, 41], [59, 41, 40, 57, 58], [27, 47, 48, 49, 28], [9, 8, 27, 28, 29], [3, 2, 8, 9, 10], [5, 22, 23, 24, 6], [0, 4, 11, 12, 13], [4, 3, 14, 15, 16], [10, 9, 30, 31, 32], [29, 28, 50, 51, 52], [49, 48, 63, 64, 65], [60, 61, 62, 40, 39], [19, 42, 43, 44, 20], [12, 11, 33, 34], [16, 15, 35, 36], [34, 33, 53, 54], [36, 35, 55, 56], [2, 1, 17, 18], [18, 17, 37, 38], [26, 25, 45, 46], [26, 1, 7, 25]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[49,48],
      [40,39],
      [41,40],
      [36,35],
      [34,33],
      [29,28],
      [28,27],
      [26,25],
      [20,19],
      [21,20],
      [18,17],
      [16,15],
      [12,11],
      [10,9],
      [9,8],
      [1,7],
      [6,5],
      [7,6],
      [2,1],
      [4,3],
      [0,4],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.39756693418006,
      2.39756693418006,
      2.39756693418006,
      2.37631762579575,
      2.37631762579575,
      2.39756693418006,
      2.39756693418006,
      2.37631762579575,
      2.39756693418006,
      2.39756693418006,
      2.37631762579575,
      2.38754954691591,
      2.38754954691591,
      2.39756693418006,
      2.39756693418006,
      2.38754954691591,
      2.39756693418006,
      2.39756693418006,
      2.38754954691591,
      2.39756693418006,
      2.39756693418006,
      2.39756693418005,
      2.39756693418006];

obj0.userData.subtrees = [[63,64,65],
      [60,61,62],
      [57,58,59],
      [55,56],
      [53,54],
      [50,51,52],
      [47,48,49,63,64,65],
      [45,46],
      [42,43,44],
      [39,40,41,57,58,59,60,61,62],
      [37,38],
      [35,36,55,56],
      [33,34,53,54],
      [30,31,32],
      [27,28,29,47,48,49,50,51,52,63,64,65],
      [25,26,45,46],
      [22,23,24],
      [19,20,21,39,40,41,42,43,44,57,58,59,60,61,62],
      [17,18,37,38],
      [14,15,16,35,36,55,56],
      [11,12,13,33,34,53,54],
      [8,9,10,27,28,29,30,31,32,47,48,49,50,51,52,63,64,65],
      [5,6,7,19,20,21,22,23,24,25,26,39,40,41,42,43,44,45,46,57,58,59,60,61,62]];

obj0.userData.polytoperoot = [[-0.893647707823941,-0.370161000564305,0.111824020800367],
      [-1.07473432952914,0,0.353824961876619],
      [-0.0304316786684576,0.751308114558739,-0.0924354505592963]];

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
