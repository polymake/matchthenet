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
obj0.userData.points.push(new PMPoint(1.22782, 0, 0));
obj0.userData.points.push(new PMPoint(1.37766, 0.330239, 0));
obj0.userData.points.push(new PMPoint(1.03236, 0.544266, 0));
obj0.userData.points.push(new PMPoint(0.801832, 0.638439, 0));
obj0.userData.points.push(new PMPoint(0.0948116, 0.4026, 0));
obj0.userData.points.push(new PMPoint(-0.0929052, -0.26026, 0));
obj0.userData.points.push(new PMPoint(0.901427, -0.797171, 0));
obj0.userData.points.push(new PMPoint(0.383055, 1.3423, 0));
obj0.userData.points.push(new PMPoint(-0.119514, 1.38669, 0));
obj0.userData.points.push(new PMPoint(-0.148837, 1.02631, 0));
obj0.userData.points.push(new PMPoint(1.02623, 1.54308, 0));
obj0.userData.points.push(new PMPoint(0.63543, 1.44038, 0));
obj0.userData.points.push(new PMPoint(1.07796, -0.848266, 0));
obj0.userData.points.push(new PMPoint(1.59858, -1.28625, 0));
obj0.userData.points.push(new PMPoint(1.7247, -1.29053, 0));
obj0.userData.points.push(new PMPoint(2.46831, 0.213569, 0));
obj0.userData.points.push(new PMPoint(-0.391323, 0.863097, 0));
obj0.userData.points.push(new PMPoint(-0.744302, 0.101414, 0));
obj0.userData.points.push(new PMPoint(-0.294431, -0.230157, 0));
obj0.userData.points.push(new PMPoint(-0.135764, -0.240696, 0));
obj0.userData.points.push(new PMPoint(2, 1.23346, 0));
obj0.userData.points.push(new PMPoint(1.99264, 1.5711, 0));
obj0.userData.points.push(new PMPoint(1.72004, 1.74461, 0));
obj0.userData.points.push(new PMPoint(1.13327, 1.53798, 0));
obj0.userData.points.push(new PMPoint(-0.201352, -0.376559, 0));
obj0.userData.points.push(new PMPoint(-0.0829305, -1.05347, 0));
obj0.userData.points.push(new PMPoint(0.721886, -1.4534, 0));
obj0.userData.points.push(new PMPoint(0.656161, 1.6401, 0));
obj0.userData.points.push(new PMPoint(0.951183, 2.18778, 0));
obj0.userData.points.push(new PMPoint(0.1561, 2.18455, 0));
obj0.userData.points.push(new PMPoint(-0.16364, 1.51984, 0));
obj0.userData.points.push(new PMPoint(-0.226259, 1.47769, 0));
obj0.userData.points.push(new PMPoint(-0.948192, 1.22817, 0));
obj0.userData.points.push(new PMPoint(-1.07578, 0.900702, 0));
obj0.userData.points.push(new PMPoint(-0.884357, 0.621633, 0));
obj0.userData.points.push(new PMPoint(2.44123, -1.32657, 0));
obj0.userData.points.push(new PMPoint(2.55868, -1.22865, 0));
obj0.userData.points.push(new PMPoint(2.80884, 0.0278584, 0));
obj0.userData.points.push(new PMPoint(2.80474, 0.184098, 0));
obj0.userData.points.push(new PMPoint(1.42769, -2.16856, 0));
obj0.userData.points.push(new PMPoint(1.80807, -2.50378, 0));
obj0.userData.points.push(new PMPoint(2.03059, -2.34397, 0));
obj0.userData.points.push(new PMPoint(2.29818, -1.72162, 0));
obj0.userData.points.push(new PMPoint(-1.08012, 0.143269, 0));
obj0.userData.points.push(new PMPoint(-1.24198, -0.230687, 0));
obj0.userData.points.push(new PMPoint(-0.881549, -0.587257, 0));
obj0.userData.points.push(new PMPoint(2.0573, 1.71339, 0));
obj0.userData.points.push(new PMPoint(2.05843, 2.77974, 0));
obj0.userData.points.push(new PMPoint(1.80604, 2.85868, 0));
obj0.userData.points.push(new PMPoint(1.43136, 2.48543, 0));
obj0.userData.points.push(new PMPoint(-0.267228, 2.50155, 0));
obj0.userData.points.push(new PMPoint(-0.46004, 2.40363, 0));
obj0.userData.points.push(new PMPoint(-0.77948, 1.97171, 0));
obj0.userData.points.push(new PMPoint(-1.25074, 1.67209, 0));
obj0.userData.points.push(new PMPoint(-1.66093, 1.13287, 0));
obj0.userData.points.push(new PMPoint(-1.48255, 0.92494, 0));
obj0.userData.points.push(new PMPoint(3.20435, -0.962428, 0));
obj0.userData.points.push(new PMPoint(2.90793, -1.81762, 0));
obj0.userData.points.push(new PMPoint(3.48002, -1.45467, 0));
obj0.userData.points.push(new PMPoint(3.50109, -1.23945, 0));
obj0.userData.points.push(new PMPoint(3.25254, -1.14913, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 1, 7, 6, 7, 4, 8, 8, 9, 5, 10, 9, 10, 3, 11, 4, 12, 11, 12, 1, 13, 13, 14, 14, 15, 2, 16, 15, 16, 5, 17, 17, 18, 18, 19, 0, 20, 19, 20, 2, 21, 21, 22, 22, 23, 3, 24, 23, 24, 6, 25, 25, 26, 7, 27, 26, 27, 8, 28, 28, 29, 29, 30, 9, 31, 30, 31, 9, 32, 32, 33, 33, 34, 10, 35, 34, 35, 15, 36, 36, 37, 37, 38, 16, 39, 38, 39, 14, 40, 40, 41, 41, 42, 15, 43, 42, 43, 18, 44, 44, 45, 19, 46, 45, 46, 22, 47, 47, 48, 48, 49, 23, 50, 49, 50, 30, 51, 51, 52, 31, 53, 52, 53, 33, 54, 54, 55, 34, 56, 55, 56, 37, 57, 38, 57, 36, 58, 58, 59, 59, 60, 37, 61, 60, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [30, 51, 52, 53, 31], [16, 15, 36, 37, 38, 39], [7, 1, 0, 6], [15, 14, 40, 41, 42, 43], [23, 22, 47, 48, 49, 50], [5, 4, 8, 9, 10], [4, 3, 11, 12], [27, 7, 6, 25, 26], [38, 37, 57], [19, 18, 44, 45, 46], [28, 29, 30, 31, 9, 8], [36, 58, 59, 60, 61, 37], [55, 56, 34, 33, 54], [2, 1, 13, 14, 15, 16], [0, 5, 17, 18, 19, 20], [3, 2, 21, 22, 23, 24], [10, 9, 32, 33, 34, 35]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[37,36],
      [38,37],
      [34,33],
      [31,30],
      [23,22],
      [19,18],
      [15,14],
      [16,15],
      [10,9],
      [9,8],
      [7,6],
      [3,2],
      [0,5],
      [2,1],
      [4,3],
      [5,4],
      [1,0]];

obj0.userData.angles = [1.85310923416046,
      2.45588180384199,
      2.18533623640417,
      2.1524095650078,
      1.61417478020336,
      2.17519297018748,
      1.45637107691569,
      2.47179100488795,
      2.07639538331994,
      2.25784173923716,
      2.08547687199438,
      1.89999062984698,
      2.01304740834438,
      1.66523915839669,
      1.97058157641244,
      2.24349686745961,
      2.87099508776904];

obj0.userData.subtrees = [[58,59,60,61],
      [57],
      [54,55,56],
      [51,52,53],
      [47,48,49,50],
      [44,45,46],
      [40,41,42,43],
      [36,37,38,39,57,58,59,60,61],
      [32,33,34,35,54,55,56],
      [28,29,30,31,51,52,53],
      [25,26,27],
      [21,22,23,24,47,48,49,50],
      [17,18,19,20,44,45,46],
      [13,14,15,16,36,37,38,39,40,41,42,43,57,58,59,60,61],
      [11,12],
      [8,9,10,28,29,30,31,32,33,34,35,51,52,53,54,55,56],
      [6,7,25,26,27]];

obj0.userData.polytoperoot = [[-0.110805836524335,-0.846066505857196,-0.975079193434364],
      [-0.451975863113774,-0.798699990842074,-0.281172163004826],
      [-1.03899176257845,0.509205756540299,0.223694141346939]];

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
