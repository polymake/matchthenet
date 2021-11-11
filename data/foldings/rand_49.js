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
obj0.userData.points.push(new PMPoint(0.826995, 0, 0));
obj0.userData.points.push(new PMPoint(-0.106317, 0.571622, 0));
obj0.userData.points.push(new PMPoint(-0.141193, -0.0675467, 0));
obj0.userData.points.push(new PMPoint(-0.247434, -0.231024, 0));
obj0.userData.points.push(new PMPoint(-0.239103, -0.37734, 0));
obj0.userData.points.push(new PMPoint(3.23832, -0.55369, 0));
obj0.userData.points.push(new PMPoint(-0.179043, 0.66817, 0));
obj0.userData.points.push(new PMPoint(-0.457564, 0.346673, 0));
obj0.userData.points.push(new PMPoint(-0.453826, 0.336657, 0));
obj0.userData.points.push(new PMPoint(-0.155151, -0.0206473, 0));
obj0.userData.points.push(new PMPoint(3.30064, -0.0462146, 0));
obj0.userData.points.push(new PMPoint(3.56351, -0.0310938, 0));
obj0.userData.points.push(new PMPoint(4.87116, 0.949969, 0));
obj0.userData.points.push(new PMPoint(1.04466, 0.870691, 0));
obj0.userData.points.push(new PMPoint(-0.172071, 0.718212, 0));
obj0.userData.points.push(new PMPoint(-0.171615, 0.673341, 0));
obj0.userData.points.push(new PMPoint(-0.591959, 0.0494313, 0));
obj0.userData.points.push(new PMPoint(-0.649541, -0.12021, 0));
obj0.userData.points.push(new PMPoint(-0.537937, -0.206931, 0));
obj0.userData.points.push(new PMPoint(-0.331052, -0.686873, 0));
obj0.userData.points.push(new PMPoint(3.49352, -0.618532, 0));
obj0.userData.points.push(new PMPoint(-0.535185, -0.277627, 0));
obj0.userData.points.push(new PMPoint(-0.780522, -0.408147, 0));
obj0.userData.points.push(new PMPoint(-0.834213, -0.568715, 0));
obj0.userData.points.push(new PMPoint(-0.669156, -0.758125, 0));
obj0.userData.points.push(new PMPoint(-0.383986, -0.665913, 0));
obj0.userData.points.push(new PMPoint(-0.688152, 0.413176, 0));
obj0.userData.points.push(new PMPoint(-0.730799, 0.310556, 0));
obj0.userData.points.push(new PMPoint(-0.604375, 0.239555, 0));
obj0.userData.points.push(new PMPoint(-0.191542, 0.711268, 0));
obj0.userData.points.push(new PMPoint(-0.484775, 0.750086, 0));
obj0.userData.points.push(new PMPoint(-0.696712, 0.493494, 0));
obj0.userData.points.push(new PMPoint(-0.678877, 0.439485, 0));
obj0.userData.points.push(new PMPoint(0.342556, 1.93375, 0));
obj0.userData.points.push(new PMPoint(-0.258178, 1.54157, 0));
obj0.userData.points.push(new PMPoint(-0.32474, 1.28288, 0));
obj0.userData.points.push(new PMPoint(-0.347809, 1.19655, 0));
obj0.userData.points.push(new PMPoint(-0.348517, 1.1948, 0));
obj0.userData.points.push(new PMPoint(-0.341046, 0.960988, 0));
obj0.userData.points.push(new PMPoint(-0.792273, -0.145741, 0));
obj0.userData.points.push(new PMPoint(-0.809441, -0.266189, 0));
obj0.userData.points.push(new PMPoint(-0.521344, -0.918421, 0));
obj0.userData.points.push(new PMPoint(0.0794977, -1.65183, 0));
obj0.userData.points.push(new PMPoint(4.7134, -1.70679, 0));
obj0.userData.points.push(new PMPoint(-0.807259, -0.289456, 0));
obj0.userData.points.push(new PMPoint(-0.879901, -0.205357, 0));
obj0.userData.points.push(new PMPoint(-0.93652, -0.21077, 0));
obj0.userData.points.push(new PMPoint(-1.00456, -0.34311, 0));
obj0.userData.points.push(new PMPoint(-0.989015, -0.476596, 0));
obj0.userData.points.push(new PMPoint(-1.01281, -0.545217, 0));
obj0.userData.points.push(new PMPoint(-1.31427, -0.783099, 0));
obj0.userData.points.push(new PMPoint(-1.26132, -1.49856, 0));
obj0.userData.points.push(new PMPoint(-0.698951, 0.844174, 0));
obj0.userData.points.push(new PMPoint(-0.833582, 0.551887, 0));
obj0.userData.points.push(new PMPoint(-0.642137, 1.53523, 0));
obj0.userData.points.push(new PMPoint(-0.624102, 1.40206, 0));
obj0.userData.points.push(new PMPoint(-0.325809, 1.28132, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 3, 4, 4, 5, 1, 6, 5, 6, 2, 7, 7, 8, 8, 9, 0, 10, 9, 10, 1, 11, 11, 12, 12, 13, 13, 14, 14, 15, 2, 16, 15, 16, 3, 17, 17, 18, 4, 19, 18, 19, 5, 20, 6, 21, 20, 21, 4, 22, 22, 23, 23, 24, 24, 25, 5, 26, 25, 26, 8, 27, 27, 28, 9, 29, 28, 29, 7, 30, 30, 31, 31, 32, 8, 33, 32, 33, 13, 34, 34, 35, 14, 36, 35, 36, 14, 37, 37, 38, 15, 39, 38, 39, 18, 40, 19, 41, 40, 41, 20, 42, 42, 43, 21, 44, 43, 44, 23, 45, 45, 46, 46, 47, 47, 48, 24, 49, 48, 49, 24, 50, 50, 51, 25, 52, 51, 52, 31, 53, 32, 54, 53, 54, 35, 55, 55, 56, 36, 57, 56, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [6, 1, 0, 3, 4, 5], [44, 21, 20, 42, 43], [14, 13, 34, 35, 36], [0, 2, 7, 8, 9, 10], [3, 17, 18, 19, 4], [15, 14, 37, 38, 39], [46, 47, 48, 49, 24, 23, 45], [18, 40, 41, 19], [2, 1, 11, 12, 13, 14, 15, 16], [52, 25, 24, 50, 51], [21, 6, 5, 20], [9, 8, 27, 28, 29], [7, 30, 31, 32, 33, 8], [31, 53, 54, 32], [36, 35, 55, 56, 57], [5, 4, 22, 23, 24, 25, 26]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[36,35],
      [32,31],
      [25,24],
      [24,23],
      [21,20],
      [19,18],
      [15,14],
      [14,13],
      [8,7],
      [9,8],
      [5,4],
      [6,5],
      [4,3],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.16486790655351,
      2.58802129855693,
      1.86853948368778,
      2.43737763613188,
      2.3426904299993,
      2.92878973208113,
      2.11483210636084,
      1.83828739610943,
      2.67489695840465,
      2.58034846110892,
      2.29589877843871,
      2.74732640113006,
      2.13448262612148,
      2.70155667341915,
      2.71209362843165,
      1.84132583940023];

obj0.userData.subtrees = [[55,56,57],
      [53,54],
      [50,51,52],
      [45,46,47,48,49],
      [42,43,44],
      [40,41],
      [37,38,39],
      [34,35,36,55,56,57],
      [30,31,32,33,53,54],
      [27,28,29],
      [22,23,24,25,26,45,46,47,48,49,50,51,52],
      [20,21,42,43,44],
      [17,18,19,40,41],
      [11,12,13,14,15,16,34,35,36,37,38,39,55,56,57],
      [7,8,9,10,27,28,29,30,31,32,33,53,54],
      [3,4,5,6,17,18,19,20,21,22,23,24,25,26,40,41,42,43,44,45,46,47,48,49,50,51,52]];

obj0.userData.polytoperoot = [[0.14486624330544,0.79905765565247,-0.180185327809425],
      [0.0792088001443046,1.47652174077364,1.06168845344866],
      [-1.21768748151578,-0.472746401509079,0.748309828068298]];

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
