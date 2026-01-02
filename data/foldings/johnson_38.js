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
obj0.userData.points.push(new PMPoint(0.635644, 0, 0));
obj0.userData.points.push(new PMPoint(0.635644, 0.635644, 0));
obj0.userData.points.push(new PMPoint(0, 0.635644, 0));
obj0.userData.points.push(new PMPoint(0.317822, -0.550484, 0));
obj0.userData.points.push(new PMPoint(0.317822, 1.18613, 0));
obj0.userData.points.push(new PMPoint(1.24018, -0.196425, 0));
obj0.userData.points.push(new PMPoint(1.6138, 0.317822, 0));
obj0.userData.points.push(new PMPoint(1.24018, 0.832069, 0));
obj0.userData.points.push(new PMPoint(-0.635644, 0.635644, 0));
obj0.userData.points.push(new PMPoint(-0.635644, 0, 0));
obj0.userData.points.push(new PMPoint(0.868306, -0.868306, 0));
obj0.userData.points.push(new PMPoint(1.18613, -0.317822, 0));
obj0.userData.points.push(new PMPoint(-0.550484, -0.317822, 0));
obj0.userData.points.push(new PMPoint(-0.232662, -0.868306, 0));
obj0.userData.points.push(new PMPoint(1.18613, 0.953467, 0));
obj0.userData.points.push(new PMPoint(0.868306, 1.50395, 0));
obj0.userData.points.push(new PMPoint(-0.232662, 1.50395, 0));
obj0.userData.points.push(new PMPoint(-0.550484, 0.953467, 0));
obj0.userData.points.push(new PMPoint(1.75443, -0.570047, 0));
obj0.userData.points.push(new PMPoint(2.12805, -0.0558002, 0));
obj0.userData.points.push(new PMPoint(2.12805, 0.691445, 0));
obj0.userData.points.push(new PMPoint(1.75443, 1.20569, 0));
obj0.userData.points.push(new PMPoint(-1.27129, 0.635644, 0));
obj0.userData.points.push(new PMPoint(-1.27129, 0, 0));
obj0.userData.points.push(new PMPoint(1.50395, -0.868306, 0));
obj0.userData.points.push(new PMPoint(0, -1.10097, 0));
obj0.userData.points.push(new PMPoint(0.550484, -1.41879, 0));
obj0.userData.points.push(new PMPoint(-0.868306, -0.868306, 0));
obj0.userData.points.push(new PMPoint(0.550484, 2.05444, 0));
obj0.userData.points.push(new PMPoint(0, 1.73661, 0));
obj0.userData.points.push(new PMPoint(1.50395, 1.50395, 0));
obj0.userData.points.push(new PMPoint(-0.868306, 1.50395, 0));
obj0.userData.points.push(new PMPoint(2.26867, -0.94367, 0));
obj0.userData.points.push(new PMPoint(2.64229, -0.429423, 0));
obj0.userData.points.push(new PMPoint(2.19449, 0.576362, 0));
obj0.userData.points.push(new PMPoint(2.64229, 1.06507, 0));
obj0.userData.points.push(new PMPoint(2.26867, 1.57931, 0));
obj0.userData.points.push(new PMPoint(-1.87582, 0.832069, 0));
obj0.userData.points.push(new PMPoint(-2.24945, 0.317822, 0));
obj0.userData.points.push(new PMPoint(-1.87582, -0.196425, 0));
obj0.userData.points.push(new PMPoint(0.868306, -1.50395, 0));
obj0.userData.points.push(new PMPoint(1.50395, -1.50395, 0));
obj0.userData.points.push(new PMPoint(-0.317822, -1.65145, 0));
obj0.userData.points.push(new PMPoint(0.232662, -1.96927, 0));
obj0.userData.points.push(new PMPoint(1.41879, 1.82177, 0));
obj0.userData.points.push(new PMPoint(1.10097, 2.37226, 0));
obj0.userData.points.push(new PMPoint(0.232662, 2.60492, 0));
obj0.userData.points.push(new PMPoint(-0.317822, 2.2871, 0));
obj0.userData.points.push(new PMPoint(3.01592, 0.0848245, 0));
obj0.userData.points.push(new PMPoint(2.50167, 0.458447, 0));
obj0.userData.points.push(new PMPoint(2.78292, -1.31729, 0));
obj0.userData.points.push(new PMPoint(3.15654, -0.803045, 0));
obj0.userData.points.push(new PMPoint(3.15654, 1.43869, 0));
obj0.userData.points.push(new PMPoint(2.78292, 1.95294, 0));
obj0.userData.points.push(new PMPoint(1.18613, -2.05444, 0));
obj0.userData.points.push(new PMPoint(0.550484, 2.69008, 0));
obj0.userData.points.push(new PMPoint(3.27446, -0.495866, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 4, 2, 5, 3, 5, 1, 6, 6, 7, 2, 8, 7, 8, 3, 9, 0, 10, 9, 10, 4, 11, 1, 12, 11, 12, 0, 13, 4, 14, 13, 14, 2, 15, 5, 16, 15, 16, 5, 17, 3, 18, 17, 18, 6, 19, 7, 20, 19, 20, 7, 21, 8, 22, 21, 22, 9, 23, 10, 24, 23, 24, 11, 25, 12, 25, 4, 26, 11, 27, 26, 27, 13, 28, 14, 28, 16, 29, 5, 30, 29, 30, 15, 31, 16, 31, 17, 32, 18, 32, 19, 33, 20, 34, 33, 34, 7, 35, 20, 35, 21, 36, 22, 37, 36, 37, 23, 38, 38, 39, 24, 40, 39, 40, 11, 41, 25, 42, 41, 42, 26, 43, 27, 44, 43, 44, 16, 45, 29, 46, 45, 46, 29, 47, 30, 48, 47, 48, 34, 49, 20, 50, 49, 50, 33, 51, 34, 52, 51, 52, 36, 53, 37, 54, 53, 54, 41, 55, 42, 55, 29, 56, 46, 56, 34, 57, 49, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [4, 1, 0], [3, 2, 5], [12, 1, 4, 11], [2, 1, 6, 7, 8], [5, 16, 29, 30], [11, 41, 42, 25], [41, 55, 42], [12, 11, 25], [7, 6, 19, 20], [45, 46, 29, 16], [20, 19, 33, 34], [7, 20, 35], [20, 34, 49, 50], [22, 21, 36, 37], [34, 57, 49], [8, 7, 21, 22], [15, 31, 16], [46, 56, 29], [37, 36, 53, 54], [34, 33, 51, 52], [2, 15, 16, 5], [30, 29, 47, 48], [24, 23, 38, 39, 40], [27, 26, 43, 44], [11, 4, 26, 27], [18, 17, 32], [3, 5, 17, 18], [13, 28, 14], [10, 9, 23, 24], [0, 13, 14, 4], [0, 3, 9, 10]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[49,34],
      [29,46],
      [42,41],
      [37,36],
      [34,33],
      [20,34],
      [30,29],
      [29,16],
      [27,26],
      [25,11],
      [24,23],
      [22,21],
      [7,20],
      [20,19],
      [18,17],
      [16,15],
      [5,16],
      [14,13],
      [11,4],
      [12,11],
      [10,9],
      [8,7],
      [7,6],
      [3,5],
      [5,2],
      [4,0],
      [1,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

obj0.userData.angles = [2.22315446657927,
      2.22315446657927,
      2.22315446657926,
      2.12437068569194,
      2.12437068569194,
      2.51327412287183,
      2.12437068569194,
      2.51327412287183,
      2.12437068569194,
      2.22315446657926,
      2.58801829469275,
      2.12437068569194,
      2.77672882547631,
      2.12437068569194,
      2.22315446657927,
      2.77672882547631,
      2.12437068569194,
      2.22315446657927,
      2.12437068569194,
      2.77672882547631,
      2.12437068569194,
      2.58801829469275,
      2.58801829469275,
      2.22315446657927,
      2.77672882547631,
      2.22315446657927,
      2.77672882547631,
      2.12437068569194,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631];

obj0.userData.subtrees = [[57],
      [56],
      [55],
      [53,54],
      [51,52],
      [49,50,57],
      [47,48],
      [45,46,56],
      [43,44],
      [41,42,55],
      [38,39,40],
      [36,37,53,54],
      [35],
      [33,34,49,50,51,52,57],
      [32],
      [31],
      [29,30,45,46,47,48,56],
      [28],
      [26,27,43,44],
      [25,41,42,55],
      [23,24,38,39,40],
      [21,22,36,37,53,54],
      [19,20,33,34,35,49,50,51,52,57],
      [17,18,32],
      [15,16,29,30,31,45,46,47,48,56],
      [13,14,28],
      [11,12,25,26,27,41,42,43,44,55],
      [9,10,23,24,38,39,40],
      [6,7,8,19,20,21,22,33,34,35,36,37,49,50,51,52,53,54,57],
      [5,15,16,17,18,29,30,31,32,45,46,47,48,56],
      [4,11,12,13,14,25,26,27,28,41,42,43,44,55]];

obj0.userData.polytoperoot = [[1.02849428324158,-0.270355721668384,-0.167089025044068],
      [0.854101966249684,-1.09016994374947,-1],
      [-0.335533836981485,0.542905152611709,-0.878438989593195]];

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
