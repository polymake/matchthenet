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
obj0.userData.points.push(new PMPoint(0.405653, 0, 0));
obj0.userData.points.push(new PMPoint(-0.165953, 0.945774, 0));
obj0.userData.points.push(new PMPoint(-0.067529, -0.838018, 0));
obj0.userData.points.push(new PMPoint(-0.346841, 0.369516, 0));
obj0.userData.points.push(new PMPoint(1.12575, 0.368812, 0));
obj0.userData.points.push(new PMPoint(-0.637623, -0.321629, 0));
obj0.userData.points.push(new PMPoint(1.3088, -0.889415, 0));
obj0.userData.points.push(new PMPoint(-0.710796, -0.0691223, 0));
obj0.userData.points.push(new PMPoint(-0.37163, 1.00032, 0));
obj0.userData.points.push(new PMPoint(1.67007, -0.089339, 0));
obj0.userData.points.push(new PMPoint(0.131403, 1.35464, 0));
obj0.userData.points.push(new PMPoint(-0.418683, -0.990191, 0));
obj0.userData.points.push(new PMPoint(-0.0633369, -1.40883, 0));
obj0.userData.points.push(new PMPoint(-1.15371, 0.694003, 0));
obj0.userData.points.push(new PMPoint(-0.977582, 0.968261, 0));
obj0.userData.points.push(new PMPoint(-0.0544646, 1.43889, 0));
obj0.userData.points.push(new PMPoint(1.72333, 0.137269, 0));
obj0.userData.points.push(new PMPoint(1.31256, 1.20058, 0));
obj0.userData.points.push(new PMPoint(-0.835909, -1.05659, 0));
obj0.userData.points.push(new PMPoint(-0.431532, -1.27773, 0));
obj0.userData.points.push(new PMPoint(0.683308, -1.99665, 0));
obj0.userData.points.push(new PMPoint(-1.21044, 0.124774, 0));
obj0.userData.points.push(new PMPoint(-0.579089, 1.39586, 0));
obj0.userData.points.push(new PMPoint(-0.493334, 1.43006, 0));
obj0.userData.points.push(new PMPoint(2.47226, -0.247788, 0));
obj0.userData.points.push(new PMPoint(1.5503, 0.432778, 0));
obj0.userData.points.push(new PMPoint(1.40102, 0.700308, 0));
obj0.userData.points.push(new PMPoint(1.11525, 1.66015, 0));
obj0.userData.points.push(new PMPoint(-0.486517, -1.26991, 0));
obj0.userData.points.push(new PMPoint(-1.13366, -0.524563, 0));
obj0.userData.points.push(new PMPoint(-0.190572, -2.19512, 0));
obj0.userData.points.push(new PMPoint(1.27155, -1.70626, 0));
obj0.userData.points.push(new PMPoint(-1.50547, 0.494702, 0));
obj0.userData.points.push(new PMPoint(-1.37869, 1.23502, 0));
obj0.userData.points.push(new PMPoint(-0.127772, 2.59676, 0));
obj0.userData.points.push(new PMPoint(2.06674, 0.73604, 0));
obj0.userData.points.push(new PMPoint(1.55042, 0.441751, 0));
obj0.userData.points.push(new PMPoint(1.55116, 0.441711, 0));
obj0.userData.points.push(new PMPoint(1.74907, 0.665868, 0));
obj0.userData.points.push(new PMPoint(1.2434, 1.94017, 0));
obj0.userData.points.push(new PMPoint(1.11614, 1.9681, 0));
obj0.userData.points.push(new PMPoint(-1.10939, -1.11105, 0));
obj0.userData.points.push(new PMPoint(-1.11475, -1.05356, 0));
obj0.userData.points.push(new PMPoint(-0.318026, -1.99903, 0));
obj0.userData.points.push(new PMPoint(0.063542, -2.53146, 0));
obj0.userData.points.push(new PMPoint(1.35253, -2.66202, 0));
obj0.userData.points.push(new PMPoint(-1.63284, 0.644117, 0));
obj0.userData.points.push(new PMPoint(-1.65884, -0.156532, 0));
obj0.userData.points.push(new PMPoint(-1.46137, 2.24679, 0));
obj0.userData.points.push(new PMPoint(-0.665839, 2.64363, 0));
obj0.userData.points.push(new PMPoint(2.80591, 0.662541, 0));
obj0.userData.points.push(new PMPoint(-0.670523, -2.5677, 0));
obj0.userData.points.push(new PMPoint(-0.424254, -2.8129, 0));
obj0.userData.points.push(new PMPoint(0.74288, -2.93847, 0));
obj0.userData.points.push(new PMPoint(1.85991, -2.47687, 0));
obj0.userData.points.push(new PMPoint(-1.91737, 0.0480393, 0));
obj0.userData.points.push(new PMPoint(-1.84343, 1.55311, 0));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 1, 2, 0, 3, 1, 3, 0, 4, 2, 4, 1, 5, 2, 5, 0, 6, 3, 6, 1, 7, 3, 7, 0, 8, 4, 8, 2, 9, 4, 9, 1, 10, 5, 10, 2, 11, 5, 11, 3, 12, 6, 12, 3, 13, 7, 13, 4, 14, 8, 14, 4, 15, 9, 15, 2, 16, 9, 16, 5, 17, 10, 17, 5, 18, 11, 18, 6, 19, 12, 19, 3, 20, 12, 20, 7, 21, 13, 21, 8, 22, 14, 22, 9, 23, 15, 23, 9, 24, 16, 24, 10, 25, 17, 25, 5, 26, 17, 26, 5, 27, 18, 27, 11, 28, 18, 28, 12, 29, 19, 29, 6, 30, 19, 30, 13, 31, 21, 31, 7, 32, 21, 32, 14, 33, 22, 33, 15, 34, 23, 34, 16, 35, 24, 35, 17, 36, 25, 36, 5, 37, 26, 37, 17, 38, 26, 38, 18, 39, 27, 39, 18, 40, 28, 40, 11, 41, 28, 41, 19, 42, 29, 42, 19, 43, 30, 43, 13, 44, 31, 44, 21, 45, 31, 45, 21, 46, 32, 46, 14, 47, 33, 47, 22, 48, 33, 48, 23, 49, 34, 49, 24, 50, 35, 50, 25, 51, 36, 51, 31, 52, 44, 52, 31, 53, 45, 53, 21, 54, 45, 54, 32, 55, 46, 55, 33, 56, 47, 56, 34, 57, 49, 57];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: foldingLineWidth, transparent: false } );
obj0.userData.facets = [[0, 1, 2], [8, 14, 22], [0, 4, 8], [14, 47, 33], [22, 14, 33], [33, 47, 56], [15, 9, 23], [15, 23, 34], [9, 16, 24], [8, 4, 14], [29, 12, 19], [44, 52, 31], [6, 30, 19], [4, 9, 15], [12, 6, 19], [45, 31, 53], [24, 16, 35], [18, 5, 27], [2, 16, 9], [20, 3, 12], [3, 1, 0], [3, 6, 12], [4, 2, 9], [0, 2, 4], [0, 6, 3], [22, 33, 48], [31, 13, 44], [29, 19, 42], [19, 30, 43], [34, 23, 49], [34, 49, 57], [21, 31, 45], [21, 13, 31], [54, 21, 45], [7, 3, 13], [7, 13, 21], [7, 1, 3], [32, 7, 21], [5, 26, 37], [24, 35, 50], [32, 21, 46], [17, 10, 25], [11, 5, 18], [5, 1, 10], [2, 5, 11], [2, 1, 5], [32, 46, 55], [36, 25, 51], [17, 25, 36], [5, 10, 17], [26, 17, 38], [5, 17, 26], [18, 27, 39], [28, 18, 40], [11, 28, 41], [11, 18, 28]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
obj0.userData.axes = [[34,49],
      [33,47],
      [32,46],
      [21,45],
      [45,31],
      [31,44],
      [36,25],
      [24,35],
      [34,23],
      [22,33],
      [33,14],
      [32,21],
      [21,31],
      [31,13],
      [19,30],
      [29,19],
      [11,28],
      [28,18],
      [18,27],
      [26,17],
      [5,26],
      [17,25],
      [24,16],
      [15,23],
      [22,14],
      [7,21],
      [21,13],
      [19,6],
      [12,19],
      [11,18],
      [18,5],
      [5,17],
      [17,10],
      [9,16],
      [15,9],
      [8,14],
      [7,13],
      [3,12],
      [12,6],
      [11,5],
      [5,10],
      [9,2],
      [4,9],
      [8,4],
      [7,3],
      [3,6],
      [2,5],
      [5,1],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

obj0.userData.angles = [2.78585535187642,
      2.59596810798186,
      2.78818788914739,
      2.6319388451968,
      2.46688060764369,
      2.34434003401004,
      2.95351108006961,
      2.93229031485704,
      2.69105474450128,
      2.72545951158495,
      2.79060792986905,
      1.98402840722449,
      2.8323219757992,
      3.07655716888199,
      2.9130691105282,
      2.60943949849834,
      2.40440395091556,
      2.09562925011588,
      2.34850152510449,
      2.5891645959871,
      2.82492302933586,
      2.76327404455594,
      2.3494631281276,
      2.69674913610117,
      2.71792532742339,
      3.09561719625138,
      2.23425655607372,
      3.02696621741647,
      2.74165003970126,
      2.74443428454591,
      2.89129064329666,
      3.10552902704134,
      2.38288737372574,
      3.05876832281564,
      2.70289814960342,
      3.12059963347344,
      2.93224269200818,
      2.53992042220587,
      2.80605729228794,
      2.84998106042012,
      2.52487994505831,
      2.59192853316404,
      2.81078531111667,
      2.52827494891868,
      2.53822020758353,
      2.85054731116352,
      3.06002521956949,
      1.82188715844005,
      2.54842554533725,
      2.35562618986493,
      2.55306662229391,
      2.70448402130353,
      2.70503236239151,
      3.118209002497,
      2.12922595257447];

obj0.userData.subtrees = [[57],
      [56],
      [55],
      [54],
      [53],
      [52],
      [51],
      [50],
      [49,57],
      [48],
      [47,56],
      [46,55],
      [45,53,54],
      [44,52],
      [43],
      [42],
      [41],
      [40],
      [39],
      [38],
      [37],
      [36,51],
      [35,50],
      [34,49,57],
      [33,47,48,56],
      [32,46,55],
      [31,44,45,52,53,54],
      [30,43],
      [29,42],
      [28,40,41],
      [27,39],
      [26,37,38],
      [25,36,51],
      [24,35,50],
      [23,34,49,57],
      [22,33,47,48,56],
      [21,31,32,44,45,46,52,53,54,55],
      [20],
      [19,29,30,42,43],
      [18,27,28,39,40,41],
      [17,25,26,36,37,38,51],
      [16,24,35,50],
      [15,23,34,49,57],
      [14,22,33,47,48,56],
      [13,21,31,32,44,45,46,52,53,54,55],
      [12,19,20,29,30,42,43],
      [11,18,27,28,39,40,41],
      [10,17,25,26,36,37,38,51],
      [9,15,16,23,24,34,35,49,50,57],
      [8,14,22,33,47,48,56],
      [7,13,21,31,32,44,45,46,52,53,54,55],
      [6,12,19,20,29,30,42,43],
      [5,10,11,17,18,25,26,27,28,36,37,38,39,40,41,51],
      [4,8,9,14,15,16,22,23,24,33,34,35,47,48,49,50,56,57],
      [3,6,7,12,13,19,20,21,29,30,31,32,42,43,44,45,46,52,53,54,55]];

obj0.userData.polytoperoot = [[-0.59831883089194,0.441556122843216,-0.687699762691556],
      [-1.76488553872054e+47,-3.69069350268683e+46,-3.11301921349873e+47],
      [2.19941584944215e+45,-1.45042224911015e+47,1.59488005303118e+46]];

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
