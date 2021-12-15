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
obj0.userData.points.push(new PMPoint(0.930816, 0, 0));
obj0.userData.points.push(new PMPoint(0.289918, 0.614518, 0));
obj0.userData.points.push(new PMPoint(-0.362805, 0.880604, 0));
obj0.userData.points.push(new PMPoint(-0.52762, 0.751075, 0));
obj0.userData.points.push(new PMPoint(-0.0725991, -0.713466, 0));
obj0.userData.points.push(new PMPoint(0.324957, -1.11751, 0));
obj0.userData.points.push(new PMPoint(1.34821, -0.705472, 0));
obj0.userData.points.push(new PMPoint(1.37165, -0.319007, 0));
obj0.userData.points.push(new PMPoint(1.26975, -0.240927, 0));
obj0.userData.points.push(new PMPoint(0.151228, 1.20831, 0));
obj0.userData.points.push(new PMPoint(0.129482, 1.27392, 0));
obj0.userData.points.push(new PMPoint(0.107099, 1.29511, 0));
obj0.userData.points.push(new PMPoint(-0.0915308, 1.40241, 0));
obj0.userData.points.push(new PMPoint(-1.29847, 0.466511, 0));
obj0.userData.points.push(new PMPoint(-1.15427, 0.234756, 0));
obj0.userData.points.push(new PMPoint(-0.1869, -0.692367, 0));
obj0.userData.points.push(new PMPoint(1.31474, -0.15977, 0));
obj0.userData.points.push(new PMPoint(0.223613, 1.22067, 0));
obj0.userData.points.push(new PMPoint(-0.294822, 1.46477, 0));
obj0.userData.points.push(new PMPoint(-0.587042, 1.68082, 0));
obj0.userData.points.push(new PMPoint(-1.33443, 1.30578, 0));
obj0.userData.points.push(new PMPoint(-1.35486, 1.28689, 0));
obj0.userData.points.push(new PMPoint(-1.34344, 0.849196, 0));
obj0.userData.points.push(new PMPoint(0.410615, -1.80188, 0));
obj0.userData.points.push(new PMPoint(0.659738, -2.11114, 0));
obj0.userData.points.push(new PMPoint(1.16212, -1.47351, 0));
obj0.userData.points.push(new PMPoint(2.11633, -0.891217, 0));
obj0.userData.points.push(new PMPoint(2.82935, -0.40949, 0));
obj0.userData.points.push(new PMPoint(2.72428, 0.0950287, 0));
obj0.userData.points.push(new PMPoint(2.35039, 0.100089, 0));
obj0.userData.points.push(new PMPoint(0.658606, 1.57449, 0));
obj0.userData.points.push(new PMPoint(0.370228, 1.81616, 0));
obj0.userData.points.push(new PMPoint(-0.116909, 1.76494, 0));
obj0.userData.points.push(new PMPoint(1.0845, 0.977128, 0));
obj0.userData.points.push(new PMPoint(0.965468, 1.3316, 0));
obj0.userData.points.push(new PMPoint(0.683121, 1.51963, 0));
obj0.userData.points.push(new PMPoint(-0.708426, -1.3074, 0));
obj0.userData.points.push(new PMPoint(-0.0225365, -1.23485, 0));
obj0.userData.points.push(new PMPoint(-1.72872, 0.385297, 0));
obj0.userData.points.push(new PMPoint(-1.54218, -1.27053, 0));
obj0.userData.points.push(new PMPoint(-1.37171, -1.4179, 0));
obj0.userData.points.push(new PMPoint(-0.978705, -1.36092, 0));
obj0.userData.points.push(new PMPoint(-1.35622, 2.44177, 0));
obj0.userData.points.push(new PMPoint(-1.70659, 2.69861, 0));
obj0.userData.points.push(new PMPoint(-2.26113, 2.68519, 0));
obj0.userData.points.push(new PMPoint(-0.670723, 2.16344, 0));
obj0.userData.points.push(new PMPoint(-1.06298, 2.40907, 0));
obj0.userData.points.push(new PMPoint(0.758924, -2.31347, 0));
obj0.userData.points.push(new PMPoint(1.26651, -2.53721, 0));
obj0.userData.points.push(new PMPoint(1.49311, -2.26781, 0));
obj0.userData.points.push(new PMPoint(3.15406, -0.54548, 0));
obj0.userData.points.push(new PMPoint(3.37438, -0.17107, 0));
obj0.userData.points.push(new PMPoint(3.40457, 0.290763, 0));
obj0.userData.points.push(new PMPoint(3.03209, 0.237595, 0));
obj0.userData.points.push(new PMPoint(2.78504, 1.00077, 0));
obj0.userData.points.push(new PMPoint(2.71821, 0.983082, 0));
obj0.userData.points.push(new PMPoint(1.41362, -0.197684, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 6, 7, 7, 8, 1, 9, 8, 9, 2, 10, 10, 11, 11, 12, 3, 13, 12, 13, 4, 14, 14, 15, 0, 16, 15, 16, 1, 17, 2, 18, 17, 18, 3, 19, 19, 20, 20, 21, 21, 22, 4, 23, 22, 23, 6, 24, 24, 25, 7, 26, 25, 26, 7, 27, 27, 28, 28, 29, 8, 30, 29, 30, 12, 31, 31, 32, 13, 33, 32, 33, 11, 34, 34, 35, 12, 36, 35, 36, 15, 37, 16, 38, 37, 38, 14, 39, 39, 40, 40, 41, 15, 42, 41, 42, 21, 43, 43, 44, 22, 45, 44, 45, 20, 46, 21, 47, 46, 47, 25, 48, 48, 49, 26, 50, 49, 50, 28, 51, 51, 52, 52, 53, 29, 54, 53, 54, 30, 55, 55, 56, 8, 57, 56, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [22, 21, 43, 44, 45], [9, 1, 0, 5, 6, 7, 8], [48, 49, 50, 26, 25], [7, 6, 24, 25, 26], [54, 29, 28, 51, 52, 53], [56, 57, 8, 30, 55], [16, 15, 37, 38], [3, 2, 10, 11, 12, 13], [0, 4, 14, 15, 16], [14, 39, 40, 41, 42, 15], [8, 7, 27, 28, 29, 30], [13, 12, 31, 32, 33], [2, 1, 17, 18], [4, 3, 19, 20, 21, 22, 23], [21, 20, 46, 47], [12, 11, 34, 35, 36]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0xE2C833, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[8,30],
      [29,28],
      [26,25],
      [21,20],
      [22,21],
      [15,14],
      [16,15],
      [12,11],
      [13,12],
      [8,7],
      [7,6],
      [4,3],
      [2,1],
      [0,4],
      [3,2],
      [1,0]];

obj0.userData.angles = [1.97043632617866,
      2.65305841045373,
      2.25904290615326,
      1.76598667997528,
      1.51967667348503,
      1.65015017016958,
      2.10741047800714,
      2.3075849530353,
      2.18853948398907,
      0.965392707713689,
      1.47033531514571,
      1.99978530199917,
      2.17460643227892,
      2.41351528163366,
      2.43662070108164,
      2.60193894923024];

obj0.userData.subtrees = [[55,56,57],
      [51,52,53,54],
      [48,49,50],
      [46,47],
      [43,44,45],
      [39,40,41,42],
      [37,38],
      [34,35,36],
      [31,32,33],
      [27,28,29,30,51,52,53,54,55,56,57],
      [24,25,26,48,49,50],
      [19,20,21,22,23,43,44,45,46,47],
      [17,18],
      [14,15,16,37,38,39,40,41,42],
      [10,11,12,13,31,32,33,34,35,36],
      [5,6,7,8,9,24,25,26,27,28,29,30,48,49,50,51,52,53,54,55,56,57]];

obj0.userData.polytoperoot = [[-0.458758690869938,0.070908863537772,-1.01297036248181],
      [0.817729009358884,1.07146123997607,-1.28252932078426],
      [0.925927567442185,0.777490483869496,1.23990050333241]];

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
