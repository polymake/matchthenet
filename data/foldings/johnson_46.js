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
obj0.userData.points.push(new PMPoint(0.648036, 0, 0));
obj0.userData.points.push(new PMPoint(0.648036, 0.648036, 0));
obj0.userData.points.push(new PMPoint(0, 0.648036, 0));
obj0.userData.points.push(new PMPoint(0.324018, -0.561216, 0));
obj0.userData.points.push(new PMPoint(-0.561216, 0.324018, 0));
obj0.userData.points.push(new PMPoint(0.324018, 1.20925, 0));
obj0.userData.points.push(new PMPoint(1.26436, -0.200254, 0));
obj0.userData.points.push(new PMPoint(1.64526, 0.324018, 0));
obj0.userData.points.push(new PMPoint(1.26436, 0.848291, 0));
obj0.userData.points.push(new PMPoint(0.885234, -0.885234, 0));
obj0.userData.points.push(new PMPoint(1.20925, -0.324018, 0));
obj0.userData.points.push(new PMPoint(-0.324018, -0.561216, 0));
obj0.userData.points.push(new PMPoint(-0.561216, 0.972055, 0));
obj0.userData.points.push(new PMPoint(-0.561216, -0.324018, 0));
obj0.userData.points.push(new PMPoint(-0.324018, 1.20925, 0));
obj0.userData.points.push(new PMPoint(1.20925, 0.972055, 0));
obj0.userData.points.push(new PMPoint(0.885234, 1.53327, 0));
obj0.userData.points.push(new PMPoint(1.78863, -0.581161, 0));
obj0.userData.points.push(new PMPoint(2.16953, -0.056888, 0));
obj0.userData.points.push(new PMPoint(2.16953, 0.704924, 0));
obj0.userData.points.push(new PMPoint(1.78863, 1.2292, 0));
obj0.userData.points.push(new PMPoint(1.53327, -0.885234, 0));
obj0.userData.points.push(new PMPoint(0.324018, -1.20925, 0));
obj0.userData.points.push(new PMPoint(0, -1.12243, 0));
obj0.userData.points.push(new PMPoint(-1.12243, 0.648036, 0));
obj0.userData.points.push(new PMPoint(-1.20925, 0.324018, 0));
obj0.userData.points.push(new PMPoint(-1.20925, -0.324018, 0));
obj0.userData.points.push(new PMPoint(0, 1.77047, 0));
obj0.userData.points.push(new PMPoint(1.53327, 1.53327, 0));
obj0.userData.points.push(new PMPoint(0.324018, 1.85729, 0));
obj0.userData.points.push(new PMPoint(2.23727, 0.587598, 0));
obj0.userData.points.push(new PMPoint(2.43311, -0.648899, 0));
obj0.userData.points.push(new PMPoint(2.43311, 1.29694, 0));
obj0.userData.points.push(new PMPoint(1.20925, -1.44645, 0));
obj0.userData.points.push(new PMPoint(0.885234, -1.53327, 0));
obj0.userData.points.push(new PMPoint(-0.648036, -1.12243, 0));
obj0.userData.points.push(new PMPoint(-0.885234, 1.53327, 0));
obj0.userData.points.push(new PMPoint(-1.44645, 1.20925, 0));
obj0.userData.points.push(new PMPoint(-1.82557, 0.524273, 0));
obj0.userData.points.push(new PMPoint(-2.20648, 0, 0));
obj0.userData.points.push(new PMPoint(-1.82557, -0.524273, 0));
obj0.userData.points.push(new PMPoint(1.20925, 2.09449, 0));
obj0.userData.points.push(new PMPoint(0.885234, 2.18131, 0));
obj0.userData.points.push(new PMPoint(2.76155, 0.206692, 0));
obj0.userData.points.push(new PMPoint(2.05221, -1.17317, 0));
obj0.userData.points.push(new PMPoint(2.81402, -0.124626, 0));
obj0.userData.points.push(new PMPoint(2.05221, 1.82121, 0));
obj0.userData.points.push(new PMPoint(2.81402, 0.772663, 0));
obj0.userData.points.push(new PMPoint(0, -1.77047, 0));
obj0.userData.points.push(new PMPoint(0.561216, -2.09449, 0));
obj0.userData.points.push(new PMPoint(-1.44645, 1.85729, 0));
obj0.userData.points.push(new PMPoint(-2.73075, -0.380906, 0));
obj0.userData.points.push(new PMPoint(-2.34984, -0.905179, 0));
obj0.userData.points.push(new PMPoint(-2.34984, 0.905179, 0));
obj0.userData.points.push(new PMPoint(-2.73075, 0.380906, 0));
obj0.userData.points.push(new PMPoint(2.69669, -1.24091, 0));
obj0.userData.points.push(new PMPoint(3.0776, 1.36467, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 1, 2, 0, 3, 2, 3, 0, 4, 1, 4, 0, 5, 3, 5, 2, 6, 3, 6, 1, 7, 7, 8, 2, 9, 8, 9, 4, 10, 1, 11, 10, 11, 0, 12, 4, 12, 3, 13, 5, 13, 0, 14, 5, 14, 3, 15, 6, 15, 2, 16, 6, 17, 16, 17, 7, 18, 8, 19, 18, 19, 8, 20, 9, 21, 20, 21, 10, 22, 11, 22, 4, 23, 10, 23, 4, 24, 12, 24, 5, 25, 13, 25, 5, 26, 14, 27, 26, 27, 6, 28, 15, 28, 16, 29, 17, 29, 6, 30, 17, 30, 8, 31, 19, 31, 18, 32, 19, 32, 20, 33, 21, 33, 10, 34, 22, 34, 10, 35, 23, 35, 12, 36, 24, 36, 13, 37, 25, 38, 37, 38, 26, 39, 39, 40, 27, 41, 40, 41, 17, 42, 29, 42, 17, 43, 30, 43, 19, 44, 31, 44, 18, 45, 32, 45, 19, 46, 32, 46, 21, 47, 33, 47, 20, 48, 33, 48, 23, 49, 35, 50, 49, 50, 37, 51, 38, 51, 40, 52, 41, 53, 52, 53, 39, 54, 40, 55, 54, 55, 32, 56, 45, 56, 33, 57, 48, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2, 3], [4, 1, 0], [0, 3, 5], [5, 3, 13], [5, 13, 25], [3, 2, 6], [3, 6, 15], [2, 1, 7, 8, 9], [13, 37, 38, 25], [32, 45, 56], [32, 18, 45], [8, 7, 18, 19], [52, 53, 41, 40], [54, 55, 40, 39], [37, 51, 38], [19, 32, 46], [8, 19, 31], [17, 29, 42], [21, 33, 47], [33, 20, 48], [21, 20, 33], [31, 19, 44], [33, 48, 57], [16, 29, 17], [9, 8, 20, 21], [30, 17, 43], [19, 18, 32], [6, 17, 30], [2, 16, 17, 6], [15, 6, 28], [27, 26, 39, 40, 41], [22, 10, 34], [11, 10, 22], [10, 23, 35], [35, 23, 49, 50], [10, 4, 23], [11, 1, 4, 10], [12, 36, 24], [24, 4, 12], [0, 5, 14], [0, 12, 4], [14, 5, 26, 27]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[33,48],
      [32,45],
      [40,39],
      [41,40],
      [38,37],
      [35,23],
      [33,20],
      [21,33],
      [19,32],
      [32,18],
      [31,19],
      [30,17],
      [17,29],
      [27,26],
      [25,13],
      [24,12],
      [10,23],
      [22,10],
      [21,20],
      [19,18],
      [8,19],
      [6,17],
      [17,16],
      [15,6],
      [14,5],
      [5,13],
      [4,12],
      [10,4],
      [11,10],
      [9,8],
      [8,7],
      [6,2],
      [3,6],
      [0,5],
      [5,3],
      [4,0],
      [1,4],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

obj0.userData.angles = [2.31472568737513,
      2.31472568737513,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.21594190648781,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.31472568737513,
      2.77832866619902,
      2.31472568737513,
      2.58801829469275,
      2.77672882547631,
      2.31472568737513,
      2.77832866619902,
      2.31472568737513,
      2.21594190648781,
      2.21594190648781,
      2.77672882547631,
      2.21594190648781,
      2.77672882547631,
      2.77832866619902,
      2.21594190648781,
      2.31472568737513,
      2.77832866619902,
      2.21594190648781,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.31472568737513,
      2.77832866619902,
      2.77832866619902,
      2.31472568737513,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.21594190648781,
      2.77672882547631];

obj0.userData.subtrees = [[57],
      [56],
      [54,55],
      [52,53],
      [51],
      [49,50],
      [48,57],
      [47],
      [46],
      [45,56],
      [44],
      [43],
      [42],
      [39,40,41,52,53,54,55],
      [37,38,51],
      [36],
      [35,49,50],
      [34],
      [33,47,48,57],
      [32,45,46,56],
      [31,44],
      [30,43],
      [29,42],
      [28],
      [26,27,39,40,41,52,53,54,55],
      [25,37,38,51],
      [24,36],
      [23,35,49,50],
      [22,34],
      [20,21,33,47,48,57],
      [18,19,31,32,44,45,46,56],
      [16,17,29,30,42,43],
      [15,28],
      [14,26,27,39,40,41,52,53,54,55],
      [13,25,37,38,51],
      [12,24,36],
      [10,11,22,23,34,35,49,50],
      [7,8,9,18,19,20,21,31,32,33,44,45,46,47,48,56,57],
      [6,15,16,17,28,29,30,42,43],
      [5,13,14,25,26,27,37,38,39,40,41,51,52,53,54,55],
      [4,10,11,12,22,23,24,34,35,36,49,50]];

obj0.userData.polytoperoot = [[0.997225555156622,-0.0673528894864194,-0.422532642562969],
      [0.598983089761037,-0.79025971738657,-1],
      [-0.536427899316962,0.388162874448495,-0.628060724028523]];

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
