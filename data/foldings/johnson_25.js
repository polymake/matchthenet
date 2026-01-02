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
obj0.userData.points.push(new PMPoint(0.593345, 0, 0));
obj0.userData.points.push(new PMPoint(1.07337, 0.348759, 0));
obj0.userData.points.push(new PMPoint(1.25672, 0.913064, 0));
obj0.userData.points.push(new PMPoint(1.07337, 1.47737, 0));
obj0.userData.points.push(new PMPoint(0.593345, 1.82613, 0));
obj0.userData.points.push(new PMPoint(0, 1.82613, 0));
obj0.userData.points.push(new PMPoint(-0.480026, 1.47737, 0));
obj0.userData.points.push(new PMPoint(-0.66338, 0.913064, 0));
obj0.userData.points.push(new PMPoint(-0.480026, 0.348759, 0));
obj0.userData.points.push(new PMPoint(0.296672, -0.513852, 0));
obj0.userData.points.push(new PMPoint(1.65375, 1.354, 0));
obj0.userData.points.push(new PMPoint(0.296672, 2.33998, 0));
obj0.userData.points.push(new PMPoint(-0.542047, 2.06746, 0));
obj0.userData.points.push(new PMPoint(-1.0604, 1.354, 0));
obj0.userData.points.push(new PMPoint(1.13539, 2.06746, 0));
obj0.userData.points.push(new PMPoint(-1.0604, 0.472123, 0));
obj0.userData.points.push(new PMPoint(-0.542047, -0.241335, 0));
obj0.userData.points.push(new PMPoint(1.65375, 0.472123, 0));
obj0.userData.points.push(new PMPoint(1.13539, -0.241335, 0));
obj0.userData.points.push(new PMPoint(-0.296672, -0.513852, 0));
obj0.userData.points.push(new PMPoint(0.890017, -0.513852, 0));
obj0.userData.points.push(new PMPoint(1.8371, 0.7897, 0));
obj0.userData.points.push(new PMPoint(1.4704, 1.91831, 0));
obj0.userData.points.push(new PMPoint(0.890017, 2.33998, 0));
obj0.userData.points.push(new PMPoint(-0.296672, 2.33998, 0));
obj0.userData.points.push(new PMPoint(-1.02207, 1.7187, 0));
obj0.userData.points.push(new PMPoint(-1.24376, 0.7897, 0));
obj0.userData.points.push(new PMPoint(-0.877051, -0.0921818, 0));
obj0.userData.points.push(new PMPoint(1.4704, -0.0921818, 0));
obj0.userData.points.push(new PMPoint(0, -1.0277, 0));
obj0.userData.points.push(new PMPoint(0.113319, -1.07816, 0));
obj0.userData.points.push(new PMPoint(0.593345, -1.42692, 0));
obj0.userData.points.push(new PMPoint(1.07337, -1.07816, 0));
obj0.userData.points.push(new PMPoint(2.43045, 0.7897, 0));
obj0.userData.points.push(new PMPoint(2.6138, 1.354, 0));
obj0.userData.points.push(new PMPoint(2.13378, 1.70276, 0));
obj0.userData.points.push(new PMPoint(2.05077, 1.79495, 0));
obj0.userData.points.push(new PMPoint(1.07337, 2.90428, 0));
obj0.userData.points.push(new PMPoint(0.593345, 3.25304, 0));
obj0.userData.points.push(new PMPoint(0.113319, 2.90428, 0));
obj0.userData.points.push(new PMPoint(0, 2.85383, 0));
obj0.userData.points.push(new PMPoint(-0.725401, 2.63177, 0));
obj0.userData.points.push(new PMPoint(-1.31875, 2.63177, 0));
obj0.userData.points.push(new PMPoint(-1.5021, 2.06746, 0));
obj0.userData.points.push(new PMPoint(-1.64078, 1.23064, 0));
obj0.userData.points.push(new PMPoint(-1.65375, 0.472123, 0));
obj0.userData.points.push(new PMPoint(-1.8371, -0.0921818, 0));
obj0.userData.points.push(new PMPoint(-1.35708, -0.440941, 0));
obj0.userData.points.push(new PMPoint(2.05077, 0.0311815, 0));
obj0.userData.points.push(new PMPoint(1.13539, -1.66825, 0));
obj0.userData.points.push(new PMPoint(0.0512974, -1.66825, 0));
obj0.userData.points.push(new PMPoint(2.67582, 1.9441, 0));
obj0.userData.points.push(new PMPoint(0.0512974, 3.49438, 0));
obj0.userData.points.push(new PMPoint(-1.89912, 2.5084, 0));
obj0.userData.points.push(new PMPoint(0.19632, -1.86786, 0));
obj0.userData.points.push(new PMPoint(0.492992, -2.38171, 0));
obj0.userData.points.push(new PMPoint(1.07337, -2.25834, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 0, 9, 8, 9, 0, 10, 1, 10, 3, 11, 4, 11, 5, 12, 6, 12, 6, 13, 7, 13, 7, 14, 8, 14, 4, 15, 5, 15, 8, 16, 9, 16, 0, 17, 9, 17, 2, 18, 3, 18, 1, 19, 2, 19, 0, 20, 10, 20, 1, 21, 10, 21, 3, 22, 11, 22, 4, 23, 11, 23, 5, 24, 12, 24, 6, 25, 12, 25, 7, 26, 13, 26, 8, 27, 14, 27, 9, 28, 16, 28, 2, 29, 18, 29, 10, 30, 20, 30, 10, 31, 31, 32, 21, 33, 32, 33, 22, 34, 34, 35, 11, 36, 35, 36, 11, 37, 23, 37, 24, 38, 38, 39, 12, 40, 39, 40, 12, 41, 25, 41, 13, 42, 42, 43, 26, 44, 43, 44, 14, 45, 27, 45, 16, 46, 46, 47, 28, 48, 47, 48, 18, 49, 29, 49, 32, 50, 33, 50, 31, 51, 32, 51, 35, 52, 36, 52, 39, 53, 40, 53, 43, 54, 44, 54, 32, 55, 55, 56, 50, 57, 56, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 1, 0], [11, 22, 34, 35, 36], [33, 32, 50], [3, 22, 11], [4, 3, 11], [28, 16, 46, 47, 48], [9, 16, 28], [44, 43, 54], [12, 24, 38, 39, 40], [40, 39, 53], [5, 24, 12], [6, 5, 12], [7, 13, 26], [6, 12, 25], [7, 6, 13], [25, 12, 41], [8, 7, 14], [26, 13, 42, 43, 44], [8, 14, 27], [27, 14, 45], [5, 4, 15], [9, 8, 16], [4, 11, 23], [23, 11, 37], [36, 35, 52], [32, 31, 51], [32, 55, 56, 57, 50], [0, 9, 17], [10, 20, 30], [0, 20, 10], [3, 2, 18], [18, 29, 49], [2, 29, 18], [21, 1, 10], [2, 1, 19], [21, 10, 31, 32, 33]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[50,32],
      [44,43],
      [40,39],
      [36,35],
      [32,31],
      [33,32],
      [18,29],
      [28,16],
      [27,14],
      [26,13],
      [25,12],
      [12,24],
      [23,11],
      [11,22],
      [21,10],
      [10,20],
      [18,2],
      [9,16],
      [8,14],
      [7,13],
      [6,12],
      [12,5],
      [4,11],
      [11,3],
      [1,10],
      [10,0],
      [2,1],
      [3,2],
      [0,9],
      [9,8],
      [5,4],
      [8,7],
      [7,6],
      [6,5],
      [4,3],
      [1,0]];

obj0.userData.angles = [2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      2.76951626538485,
      3.0444533436021,
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

obj0.userData.subtrees = [[55,56,57],
      [54],
      [53],
      [52],
      [51],
      [50,55,56,57],
      [49],
      [46,47,48],
      [45],
      [42,43,44,54],
      [41],
      [38,39,40,53],
      [37],
      [34,35,36,52],
      [31,32,33,50,51,55,56,57],
      [30],
      [29,49],
      [28,46,47,48],
      [27,45],
      [26,42,43,44,54],
      [25,41],
      [24,38,39,40,53],
      [23,37],
      [22,34,35,36,52],
      [21,31,32,33,50,51,55,56,57],
      [20,30],
      [19],
      [18,29,49],
      [17],
      [16,28,46,47,48],
      [15],
      [14,27,45],
      [13,26,42,43,44,54],
      [12,24,25,38,39,40,41,53],
      [11,22,23,34,35,36,37,52],
      [10,20,21,30,31,32,33,50,51,55,56,57]];

obj0.userData.polytoperoot = [[0.564304415075663,-0.0691915425626477,-0.955826448631802],
      [0,-1.61803398874989,-1],
      [-0.91306372359405,-0.348759308518388,0.564304415075662]];

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
