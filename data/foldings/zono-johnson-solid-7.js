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
obj0.userData.points.push(new PMPoint(0.744604, 0, 0));
obj0.userData.points.push(new PMPoint(1.19863, 0.380971, 0));
obj0.userData.points.push(new PMPoint(0.992805, 0.761942, 0));
obj0.userData.points.push(new PMPoint(0.248201, 0.761942, 0));
obj0.userData.points.push(new PMPoint(-0.20583, 0.380971, 0));
obj0.userData.points.push(new PMPoint(-0.20583, -0.380971, 0));
obj0.userData.points.push(new PMPoint(0.248201, -0.761942, 0));
obj0.userData.points.push(new PMPoint(0.992805, -0.761942, 0));
obj0.userData.points.push(new PMPoint(1.19863, -0.380971, 0));
obj0.userData.points.push(new PMPoint(1.2696, -0.275063, 0));
obj0.userData.points.push(new PMPoint(1.72363, 0.105908, 0));
obj0.userData.points.push(new PMPoint(1.77853, 0.258488, 0));
obj0.userData.points.push(new PMPoint(1.5727, 0.639459, 0));
obj0.userData.points.push(new PMPoint(-0.276797, 1.037, 0));
obj0.userData.points.push(new PMPoint(-0.730828, 0.656033, 0));
obj0.userData.points.push(new PMPoint(1.19863, 1.14291, 0));
obj0.userData.points.push(new PMPoint(0.744604, 1.52388, 0));
obj0.userData.points.push(new PMPoint(0, 1.52388, 0));
obj0.userData.points.push(new PMPoint(-0.20583, 1.14291, 0));
obj0.userData.points.push(new PMPoint(-0.785727, 0.503453, 0));
obj0.userData.points.push(new PMPoint(-0.579897, 0.122483, 0));
obj0.userData.points.push(new PMPoint(1.5727, -0.639459, 0));
obj0.userData.points.push(new PMPoint(1.77853, -0.258488, 0));
obj0.userData.points.push(new PMPoint(-0.20583, -1.14291, 0));
obj0.userData.points.push(new PMPoint(0, -1.52388, 0));
obj0.userData.points.push(new PMPoint(0.744604, -1.52388, 0));
obj0.userData.points.push(new PMPoint(1.19863, -1.14291, 0));
obj0.userData.points.push(new PMPoint(-0.579897, -0.122483, 0));
obj0.userData.points.push(new PMPoint(-0.785727, -0.503453, 0));
obj0.userData.points.push(new PMPoint(-0.730828, -0.656033, 0));
obj0.userData.points.push(new PMPoint(-0.276797, -1.037, 0));
obj0.userData.points.push(new PMPoint(2.12137, 0.522997, 0));
obj0.userData.points.push(new PMPoint(1.91554, 0.903968, 0));
obj0.userData.points.push(new PMPoint(1.91501, 0.904655, 0));
obj0.userData.points.push(new PMPoint(1.33511, 1.02714, 0));
obj0.userData.points.push(new PMPoint(-0.274468, 1.47002, 0));
obj0.userData.points.push(new PMPoint(-0.728499, 1.08905, 0));
obj0.userData.points.push(new PMPoint(1.19863, 1.90485, 0));
obj0.userData.points.push(new PMPoint(0.992805, 2.28582, 0));
obj0.userData.points.push(new PMPoint(0.248201, 2.28582, 0));
obj0.userData.points.push(new PMPoint(-0.20583, 1.90485, 0));
obj0.userData.points.push(new PMPoint(1.72363, 1.41797, 0));
obj0.userData.points.push(new PMPoint(1.2696, 1.79895, 0));
obj0.userData.points.push(new PMPoint(-1.12857, 0.238944, 0));
obj0.userData.points.push(new PMPoint(-0.922738, -0.142026, 0));
obj0.userData.points.push(new PMPoint(1.91554, -0.903968, 0));
obj0.userData.points.push(new PMPoint(2.12137, -0.522997, 0));
obj0.userData.points.push(new PMPoint(1.33511, -1.02714, 0));
obj0.userData.points.push(new PMPoint(1.91501, -0.904655, 0));
obj0.userData.points.push(new PMPoint(1.2696, -1.79895, 0));
obj0.userData.points.push(new PMPoint(1.72363, -1.41797, 0));
obj0.userData.points.push(new PMPoint(-0.20583, -1.90485, 0));
obj0.userData.points.push(new PMPoint(0.248201, -2.28582, 0));
obj0.userData.points.push(new PMPoint(0.992805, -2.28582, 0));
obj0.userData.points.push(new PMPoint(1.19863, -1.90485, 0));
obj0.userData.points.push(new PMPoint(-0.785727, -1.02043, 0));
obj0.userData.points.push(new PMPoint(-0.579897, -1.4014, 0));
obj0.userData.points.push(new PMPoint(2.53052, 0.664772, 0));
obj0.userData.points.push(new PMPoint(2.32469, 1.04574, 0));
obj0.userData.points.push(new PMPoint(-0.701304, 1.54292, 0));
obj0.userData.points.push(new PMPoint(-1.15534, 1.16195, 0));
obj0.userData.points.push(new PMPoint(-1.15548, 1.16109, 0));
obj0.userData.points.push(new PMPoint(-1.15781, 0.728082, 0));
obj0.userData.points.push(new PMPoint(1.77853, 1.78237, 0));
obj0.userData.points.push(new PMPoint(1.5727, 2.16334, 0));
obj0.userData.points.push(new PMPoint(-0.276797, 2.56089, 0));
obj0.userData.points.push(new PMPoint(-0.730828, 2.17992, 0));
obj0.userData.points.push(new PMPoint(-1.53772, 0.0971698, 0));
obj0.userData.points.push(new PMPoint(-1.33189, -0.283801, 0));
obj0.userData.points.push(new PMPoint(1.26727, -2.23196, 0));
obj0.userData.points.push(new PMPoint(1.7213, -1.85099, 0));
obj0.userData.points.push(new PMPoint(-0.579897, -1.64637, 0));
obj0.userData.points.push(new PMPoint(-0.785727, -2.02734, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 4, 5, 0, 6, 6, 7, 7, 8, 1, 9, 8, 9, 1, 10, 2, 11, 10, 11, 2, 12, 3, 13, 12, 13, 4, 14, 5, 15, 14, 15, 3, 16, 16, 17, 17, 18, 4, 19, 18, 19, 5, 20, 0, 21, 20, 21, 8, 22, 9, 23, 22, 23, 7, 24, 24, 25, 25, 26, 8, 27, 26, 27, 0, 28, 6, 29, 28, 29, 6, 30, 7, 31, 30, 31, 12, 32, 13, 33, 32, 33, 13, 34, 3, 35, 34, 35, 14, 36, 15, 37, 36, 37, 17, 38, 38, 39, 39, 40, 18, 41, 40, 41, 16, 42, 17, 43, 42, 43, 20, 44, 21, 45, 44, 45, 22, 46, 23, 47, 46, 47, 8, 48, 22, 49, 48, 49, 26, 50, 27, 51, 50, 51, 25, 52, 52, 53, 53, 54, 26, 55, 54, 55, 24, 56, 25, 57, 56, 57, 32, 58, 33, 59, 58, 59, 36, 60, 37, 61, 60, 61, 37, 62, 15, 63, 62, 63, 38, 64, 39, 65, 64, 65, 40, 66, 41, 67, 66, 67, 44, 68, 45, 69, 68, 69, 50, 70, 51, 71, 70, 71, 25, 72, 52, 73, 72, 73];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3, 4, 5], [13, 12, 32, 33], [9, 1, 0, 6, 7, 8], [2, 1, 10, 11], [23, 22, 46, 47], [38, 64, 65, 39], [3, 2, 12, 13], [5, 4, 14, 15], [33, 32, 58, 59], [23, 9, 8, 22], [36, 60, 61, 37], [3, 13, 34, 35], [22, 8, 48, 49], [41, 40, 66, 67], [4, 3, 16, 17, 18, 19], [8, 7, 24, 25, 26, 27], [18, 17, 38, 39, 40, 41], [0, 28, 29, 6], [7, 6, 30, 31], [15, 37, 62, 63], [14, 36, 37, 15], [17, 16, 42, 43], [71, 51, 50, 70], [27, 26, 50, 51], [0, 5, 20, 21], [21, 20, 44, 45], [53, 54, 55, 26, 25, 52], [24, 56, 57, 25], [45, 44, 68, 69], [52, 25, 72, 73]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[52,25],
      [51,50],
      [45,44],
      [41,40],
      [39,38],
      [15,37],
      [37,36],
      [33,32],
      [25,24],
      [26,25],
      [27,26],
      [22,8],
      [23,22],
      [21,20],
      [17,16],
      [18,17],
      [15,14],
      [3,13],
      [13,12],
      [7,6],
      [6,0],
      [8,7],
      [9,8],
      [0,5],
      [4,3],
      [5,4],
      [3,2],
      [2,1],
      [1,0]];

obj0.userData.angles = [2.32330757458989,
      2.25789473193594,
      1.76400678324122,
      2.4957456277606,
      2.32330757458989,
      3.07787434096909,
      3.05908989496609,
      1.76400678324122,
      2.32330757458989,
      2.0943951023932,
      2.4957456277606,
      3.05908989496609,
      3.07787434096909,
      3.07787434096909,
      2.4957456277606,
      2.0943951023932,
      2.25789473193594,
      3.05908989496609,
      3.07787434096909,
      2.4957456277606,
      2.32330757458989,
      2.0943951023932,
      2.32330757458989,
      2.32330757458989,
      2.0943951023932,
      2.4957456277606,
      2.32330757458989,
      2.4957456277606,
      2.0943951023932];

obj0.userData.subtrees = [[72,73],
      [70,71],
      [68,69],
      [66,67],
      [64,65],
      [62,63],
      [60,61],
      [58,59],
      [56,57],
      [52,53,54,55,72,73],
      [50,51,70,71],
      [48,49],
      [46,47],
      [44,45,68,69],
      [42,43],
      [38,39,40,41,64,65,66,67],
      [36,37,60,61,62,63],
      [34,35],
      [32,33,58,59],
      [30,31],
      [28,29],
      [24,25,26,27,50,51,52,53,54,55,56,57,70,71,72,73],
      [22,23,46,47,48,49],
      [20,21,44,45,68,69],
      [16,17,18,19,38,39,40,41,42,43,64,65,66,67],
      [14,15,36,37,60,61,62,63],
      [12,13,32,33,34,35,58,59],
      [10,11],
      [6,7,8,9,22,23,24,25,26,27,28,29,30,31,46,47,48,49,50,51,52,53,54,55,56,57,70,71,72,73]];

obj0.userData.polytoperoot = [[-0.335524532335388,0.597659443185807,0.597659443185807],
      [-2.14320011108525,0,2.14320011108525],
      [0.921355677540454,-1.84271135508091,0.921355677540454]];

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
