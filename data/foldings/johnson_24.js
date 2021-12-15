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
obj0.userData.points.push(new PMPoint(0.634262, 0, 0));
obj0.userData.points.push(new PMPoint(1.14739, 0.37281, 0));
obj0.userData.points.push(new PMPoint(1.34339, 0.976028, 0));
obj0.userData.points.push(new PMPoint(1.14739, 1.57925, 0));
obj0.userData.points.push(new PMPoint(0.634262, 1.95206, 0));
obj0.userData.points.push(new PMPoint(0, 1.95206, 0));
obj0.userData.points.push(new PMPoint(-0.513128, 1.57925, 0));
obj0.userData.points.push(new PMPoint(-0.709126, 0.976028, 0));
obj0.userData.points.push(new PMPoint(-0.513128, 0.37281, 0));
obj0.userData.points.push(new PMPoint(0.317131, -0.549287, 0));
obj0.userData.points.push(new PMPoint(-0.579427, -0.257977, 0));
obj0.userData.points.push(new PMPoint(-1.13353, 0.50468, 0));
obj0.userData.points.push(new PMPoint(1.21369, 2.21003, 0));
obj0.userData.points.push(new PMPoint(0.317131, 2.50134, 0));
obj0.userData.points.push(new PMPoint(-0.579427, 2.21003, 0));
obj0.userData.points.push(new PMPoint(-1.13353, 1.44738, 0));
obj0.userData.points.push(new PMPoint(1.76779, 1.44738, 0));
obj0.userData.points.push(new PMPoint(1.76779, 0.50468, 0));
obj0.userData.points.push(new PMPoint(1.21369, -0.257977, 0));
obj0.userData.points.push(new PMPoint(-0.317131, -0.549287, 0));
obj0.userData.points.push(new PMPoint(0.951392, -0.549287, 0));
obj0.userData.points.push(new PMPoint(-1.09256, 0.114832, 0));
obj0.userData.points.push(new PMPoint(-1.32953, 1.1079, 0));
obj0.userData.points.push(new PMPoint(0.70056, 2.58284, 0));
obj0.userData.points.push(new PMPoint(1.72682, 1.83722, 0));
obj0.userData.points.push(new PMPoint(-0.317131, 2.50134, 0));
obj0.userData.points.push(new PMPoint(-1.09256, 1.83722, 0));
obj0.userData.points.push(new PMPoint(1.96379, 0.844158, 0));
obj0.userData.points.push(new PMPoint(1.57179, -0.0985386, 0));
obj0.userData.points.push(new PMPoint(0, -1.09857, 0));
obj0.userData.points.push(new PMPoint(0.317131, -1.18355, 0));
obj0.userData.points.push(new PMPoint(0.951392, -1.18355, 0));
obj0.userData.points.push(new PMPoint(-1.46536, -0.398296, 0));
obj0.userData.points.push(new PMPoint(-0.952236, -0.771106, 0));
obj0.userData.points.push(new PMPoint(-1.75393, 0.63655, 0));
obj0.userData.points.push(new PMPoint(1.5865, 2.72316, 0));
obj0.userData.points.push(new PMPoint(1.07337, 3.09597, 0));
obj0.userData.points.push(new PMPoint(1.79312, 2.46801, 0));
obj0.userData.points.push(new PMPoint(0, 3.05063, 0));
obj0.userData.points.push(new PMPoint(-0.952236, 2.72316, 0));
obj0.userData.points.push(new PMPoint(-1.46536, 2.35035, 0));
obj0.userData.points.push(new PMPoint(2.56701, 1.04016, 0));
obj0.userData.points.push(new PMPoint(2.37101, 1.64337, 0));
obj0.userData.points.push(new PMPoint(2.1922, 0.0333318, 0));
obj0.userData.points.push(new PMPoint(0.121133, -1.78677, 0));
obj0.userData.points.push(new PMPoint(0.634262, -2.15958, 0));
obj0.userData.points.push(new PMPoint(1.14739, -1.78677, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 0, 9, 8, 9, 0, 10, 1, 10, 0, 11, 9, 11, 8, 12, 9, 12, 4, 13, 5, 13, 5, 14, 6, 14, 6, 15, 7, 15, 7, 16, 8, 16, 3, 17, 4, 17, 2, 18, 3, 18, 1, 19, 2, 19, 0, 20, 10, 20, 1, 21, 10, 21, 9, 22, 11, 22, 8, 23, 12, 23, 5, 24, 13, 24, 4, 25, 13, 25, 6, 26, 14, 26, 7, 27, 15, 27, 3, 28, 17, 28, 2, 29, 18, 29, 10, 30, 20, 30, 10, 31, 21, 32, 31, 32, 22, 33, 11, 34, 33, 34, 12, 35, 23, 35, 13, 36, 24, 37, 36, 37, 13, 38, 25, 38, 14, 39, 26, 39, 15, 40, 27, 41, 40, 41, 28, 42, 17, 43, 42, 43, 18, 44, 29, 44, 31, 45, 45, 46, 32, 47, 46, 47];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 1, 0], [0, 20, 10], [10, 20, 30], [0, 9, 11], [32, 31, 45, 46, 47], [9, 22, 11], [9, 8, 12], [5, 4, 13], [8, 23, 12], [26, 14, 39], [6, 5, 14], [7, 6, 15], [6, 14, 26], [7, 15, 27], [8, 7, 16], [5, 13, 24], [12, 23, 35], [27, 15, 40, 41], [24, 13, 36, 37], [4, 25, 13], [13, 25, 38], [11, 22, 33, 34], [4, 3, 17], [3, 28, 17], [17, 28, 42, 43], [3, 2, 18], [18, 29, 44], [2, 29, 18], [21, 1, 10], [2, 1, 19], [21, 10, 31, 32]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[32,31],
      [18,29],
      [17,28],
      [27,15],
      [26,14],
      [13,25],
      [24,13],
      [12,23],
      [11,22],
      [21,10],
      [10,20],
      [18,2],
      [17,3],
      [7,15],
      [6,14],
      [13,4],
      [5,13],
      [12,8],
      [11,9],
      [1,10],
      [10,0],
      [2,1],
      [3,2],
      [4,3],
      [8,7],
      [7,6],
      [6,5],
      [5,4],
      [9,8],
      [0,9],
      [1,0]];

obj0.userData.angles = [2.58801829469275,
      2.31472568737513,
      2.21594190648781,
      2.21594190648781,
      2.31472568737513,
      2.31472568737513,
      2.21594190648781,
      2.31472568737513,
      2.21594190648781,
      2.21594190648781,
      2.31472568737513,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076];

obj0.userData.subtrees = [[45,46,47],
      [44],
      [42,43],
      [40,41],
      [39],
      [38],
      [36,37],
      [35],
      [33,34],
      [31,32,45,46,47],
      [30],
      [29,44],
      [28,42,43],
      [27,40,41],
      [26,39],
      [25,38],
      [24,36,37],
      [23,35],
      [22,33,34],
      [21,31,32,45,46,47],
      [20,30],
      [19],
      [18,29,44],
      [17,28,42,43],
      [16],
      [15,27,40,41],
      [14,26,39],
      [13,24,25,36,37,38],
      [12,23,35],
      [11,22,33,34],
      [10,20,21,30,31,32,45,46,47]];

obj0.userData.polytoperoot = [[0.603218595568756,0.100586917710357,-0.913862056307634],
      [0,-1.61803398874989,-1],
      [-0.976028190276222,-0.372809594707468,0.603218595568755]];

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
