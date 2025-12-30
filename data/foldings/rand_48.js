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
obj0.userData.points.push(new PMPoint(0.217806, 0, 0));
obj0.userData.points.push(new PMPoint(0.554425, 0.717294, 0));
obj0.userData.points.push(new PMPoint(0.49018, 0.805583, 0));
obj0.userData.points.push(new PMPoint(0.190523, 0.84281, 0));
obj0.userData.points.push(new PMPoint(-0.200542, -0.0185665, 0));
obj0.userData.points.push(new PMPoint(-1.60547, -0.63066, 0));
obj0.userData.points.push(new PMPoint(-1.04996, -0.73388, 0));
obj0.userData.points.push(new PMPoint(0.64515, -0.633701, 0));
obj0.userData.points.push(new PMPoint(0.677638, -0.469454, 0));
obj0.userData.points.push(new PMPoint(0.0575759, 0.864039, 0));
obj0.userData.points.push(new PMPoint(-0.201277, -0.00703336, 0));
obj0.userData.points.push(new PMPoint(0.70833, 0.677208, 0));
obj0.userData.points.push(new PMPoint(1.04592, 0.802313, 0));
obj0.userData.points.push(new PMPoint(1.11699, 1.30945, 0));
obj0.userData.points.push(new PMPoint(0.836089, 1.36673, 0));
obj0.userData.points.push(new PMPoint(0.458053, 1.46399, 0));
obj0.userData.points.push(new PMPoint(0.356702, 1.51819, 0));
obj0.userData.points.push(new PMPoint(-0.328627, 1.11998, 0));
obj0.userData.points.push(new PMPoint(0.0590756, 0.871916, 0));
obj0.userData.points.push(new PMPoint(0.825034, -0.25121, 0));
obj0.userData.points.push(new PMPoint(0.840544, -0.12953, 0));
obj0.userData.points.push(new PMPoint(0.671462, 0.609609, 0));
obj0.userData.points.push(new PMPoint(-3.30621, -2.10469, 0));
obj0.userData.points.push(new PMPoint(-2.93805, -2.23127, 0));
obj0.userData.points.push(new PMPoint(-0.505751, -2.01165, 0));
obj0.userData.points.push(new PMPoint(0.0952195, -1.34938, 0));
obj0.userData.points.push(new PMPoint(0.160344, -1.20869, 0));
obj0.userData.points.push(new PMPoint(0.62144, -1.11635, 0));
obj0.userData.points.push(new PMPoint(0.913526, -1.03556, 0));
obj0.userData.points.push(new PMPoint(1.38284, -1.11568, 0));
obj0.userData.points.push(new PMPoint(1.3275, -0.474517, 0));
obj0.userData.points.push(new PMPoint(0.789098, -0.418236, 0));
obj0.userData.points.push(new PMPoint(-0.383026, 0.997152, 0));
obj0.userData.points.push(new PMPoint(-3.33448, 1.35406, 0));
obj0.userData.points.push(new PMPoint(-1.71975, -0.213726, 0));
obj0.userData.points.push(new PMPoint(1.31495, 0.222312, 0));
obj0.userData.points.push(new PMPoint(1.2321, 0.757274, 0));
obj0.userData.points.push(new PMPoint(1.1699, 0.785234, 0));
obj0.userData.points.push(new PMPoint(1.17092, 0.796146, 0));
obj0.userData.points.push(new PMPoint(1.27876, 1.32764, 0));
obj0.userData.points.push(new PMPoint(1.27559, 1.34616, 0));
obj0.userData.points.push(new PMPoint(1.47289, 1.43578, 0));
obj0.userData.points.push(new PMPoint(0.848921, 2.08986, 0));
obj0.userData.points.push(new PMPoint(0.815796, 1.47985, 0));
obj0.userData.points.push(new PMPoint(-0.128134, 1.88987, 0));
obj0.userData.points.push(new PMPoint(-2.54168, 2.63452, 0));
obj0.userData.points.push(new PMPoint(-2.92523, 2.56778, 0));
obj0.userData.points.push(new PMPoint(0.451816, -2.01852, 0));
obj0.userData.points.push(new PMPoint(0.547743, -1.84592, 0));
obj0.userData.points.push(new PMPoint(0.565012, -1.37013, 0));
obj0.userData.points.push(new PMPoint(-0.474588, -2.78901, 0));
obj0.userData.points.push(new PMPoint(0.366925, -2.45883, 0));
obj0.userData.points.push(new PMPoint(0.430506, -2.21265, 0));
obj0.userData.points.push(new PMPoint(1.57153, -1.17388, 0));
obj0.userData.points.push(new PMPoint(1.74014, -0.98357, 0));
obj0.userData.points.push(new PMPoint(1.79242, -0.773273, 0));
obj0.userData.points.push(new PMPoint(1.37567, -0.426236, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 0, 4, 3, 4, 0, 5, 5, 6, 6, 7, 7, 8, 1, 9, 8, 9, 4, 10, 0, 11, 10, 11, 2, 12, 12, 13, 13, 14, 3, 15, 14, 15, 3, 16, 16, 17, 17, 18, 4, 19, 18, 19, 1, 20, 20, 21, 2, 22, 21, 22, 6, 23, 23, 24, 24, 25, 7, 26, 25, 26, 7, 27, 8, 28, 27, 28, 8, 29, 29, 30, 30, 31, 9, 32, 31, 32, 10, 33, 33, 34, 11, 35, 34, 35, 12, 36, 36, 37, 13, 38, 37, 38, 13, 39, 14, 40, 39, 40, 14, 41, 41, 42, 42, 43, 15, 44, 43, 44, 17, 45, 45, 46, 18, 47, 46, 47, 25, 48, 48, 49, 26, 50, 49, 50, 24, 51, 51, 52, 25, 53, 52, 53, 30, 54, 54, 55, 55, 56, 31, 57, 56, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4], [49, 50, 26, 25, 48], [18, 17, 45, 46, 47], [7, 6, 23, 24, 25, 26], [12, 36, 37, 38, 13], [31, 30, 54, 55, 56, 57], [51, 52, 53, 25, 24], [9, 1, 0, 5, 6, 7, 8], [0, 4, 10, 11], [14, 13, 39, 40], [8, 7, 27, 28], [3, 2, 12, 13, 14, 15], [10, 33, 34, 35, 11], [15, 14, 41, 42, 43, 44], [4, 3, 16, 17, 18, 19], [2, 1, 20, 21, 22], [32, 9, 8, 29, 30, 31]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[31,30],
      [25,24],
      [26,25],
      [18,17],
      [15,14],
      [14,13],
      [13,12],
      [11,10],
      [9,8],
      [8,7],
      [7,6],
      [2,1],
      [4,3],
      [3,2],
      [0,4],
      [1,0]];

obj0.userData.angles = [2.66376433188313,
      1.75080257092625,
      2.73876905536278,
      2.95618581857527,
      2.39639542122135,
      2.84637625418645,
      2.48090243930014,
      2.81641226949011,
      1.6737149933669,
      2.35695662091803,
      1.80255799192196,
      2.42182727059046,
      1.94423768071097,
      1.70142667046569,
      3.05361368406596,
      1.96900350113638];

obj0.userData.subtrees = [[54,55,56,57],
      [51,52,53],
      [48,49,50],
      [45,46,47],
      [41,42,43,44],
      [39,40],
      [36,37,38],
      [33,34,35],
      [29,30,31,32,54,55,56,57],
      [27,28],
      [23,24,25,26,48,49,50,51,52,53],
      [20,21,22],
      [16,17,18,19,45,46,47],
      [12,13,14,15,36,37,38,39,40,41,42,43,44],
      [10,11,33,34,35],
      [5,6,7,8,9,23,24,25,26,27,28,29,30,31,32,48,49,50,51,52,53,54,55,56,57]];

obj0.userData.polytoperoot = [[0.539029813700022,0.25147922438413,-0.292295618124709],
      [1.92172204049133,-0.647925653962708,-0.434746056964959],
      [-0.167451267244136,-0.385442170216624,-0.16574485176908]];

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
