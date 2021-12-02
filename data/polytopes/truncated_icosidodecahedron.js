// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-ND 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var three = document.getElementById( 'poly' + divNumber );
var scene = new THREE.Scene();
scene.background = null;
var renderer = renderers[divNumber];
renderer.setSize(rendererWidth, rendererHeight);
renderer.setPixelRatio( window.devicePixelRatio );
//renderer.setClearColor(backgroundColor, 1);
three.appendChild(renderer.domElement);
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
obj0.name = "truncated_icosidodecahedron";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(0.131496, 0.982557, 0.131496));
obj0.userData.points.push(new PMPoint(-0.131496, 0.982557, 0.131496));
obj0.userData.points.push(new PMPoint(0.344261, 0.901288, 0.262992));
obj0.userData.points.push(new PMPoint(0.131496, 0.982557, -0.131496));
obj0.userData.points.push(new PMPoint(0.42553, 0.769792, 0.475757));
obj0.userData.points.push(new PMPoint(-0.131496, 0.982557, -0.131496));
obj0.userData.points.push(new PMPoint(-0.344261, 0.901288, 0.262992));
obj0.userData.points.push(new PMPoint(0.344261, 0.901288, -0.262992));
obj0.userData.points.push(new PMPoint(0.557026, 0.820019, 0.131496));
obj0.userData.points.push(new PMPoint(-0.42553, 0.769792, 0.475757));
obj0.userData.points.push(new PMPoint(0.42553, 0.769792, -0.475757));
obj0.userData.points.push(new PMPoint(0.638295, 0.688522, 0.344261));
obj0.userData.points.push(new PMPoint(0.344261, 0.638295, 0.688522));
obj0.userData.points.push(new PMPoint(-0.344261, 0.901288, -0.262992));
obj0.userData.points.push(new PMPoint(0.557026, 0.820019, -0.131496));
obj0.userData.points.push(new PMPoint(-0.557026, 0.820019, 0.131496));
obj0.userData.points.push(new PMPoint(0.131496, 0.557026, 0.820019));
obj0.userData.points.push(new PMPoint(-0.42553, 0.769792, -0.475757));
obj0.userData.points.push(new PMPoint(0.638295, 0.688522, -0.344261));
obj0.userData.points.push(new PMPoint(-0.638295, 0.688522, 0.344261));
obj0.userData.points.push(new PMPoint(-0.344261, 0.638295, 0.688522));
obj0.userData.points.push(new PMPoint(0.344261, 0.638295, -0.688522));
obj0.userData.points.push(new PMPoint(0.769792, 0.475757, 0.42553));
obj0.userData.points.push(new PMPoint(-0.557026, 0.820019, -0.131496));
obj0.userData.points.push(new PMPoint(0.475757, 0.42553, 0.769792));
obj0.userData.points.push(new PMPoint(-0.131496, 0.557026, 0.820019));
obj0.userData.points.push(new PMPoint(0.131496, 0.557026, -0.820019));
obj0.userData.points.push(new PMPoint(0.901288, 0.262992, 0.344261));
obj0.userData.points.push(new PMPoint(-0.638295, 0.688522, -0.344261));
obj0.userData.points.push(new PMPoint(0.262992, 0.344261, 0.901288));
obj0.userData.points.push(new PMPoint(-0.344261, 0.638295, -0.688522));
obj0.userData.points.push(new PMPoint(0.769792, 0.475757, -0.42553));
obj0.userData.points.push(new PMPoint(-0.769792, 0.475757, 0.42553));
obj0.userData.points.push(new PMPoint(0.688522, 0.344261, 0.638295));
obj0.userData.points.push(new PMPoint(-0.475757, 0.42553, 0.769792));
obj0.userData.points.push(new PMPoint(0.475757, 0.42553, -0.769792));
obj0.userData.points.push(new PMPoint(-0.131496, 0.557026, -0.820019));
obj0.userData.points.push(new PMPoint(0.901288, 0.262992, -0.344261));
obj0.userData.points.push(new PMPoint(-0.901288, 0.262992, 0.344261));
obj0.userData.points.push(new PMPoint(0.820019, 0.131496, 0.557026));
obj0.userData.points.push(new PMPoint(-0.262992, 0.344261, 0.901288));
obj0.userData.points.push(new PMPoint(0.262992, 0.344261, -0.901288));
obj0.userData.points.push(new PMPoint(0.982557, 0.131496, 0.131496));
obj0.userData.points.push(new PMPoint(-0.769792, 0.475757, -0.42553));
obj0.userData.points.push(new PMPoint(0.131496, 0.131496, 0.982557));
obj0.userData.points.push(new PMPoint(-0.688522, 0.344261, 0.638295));
obj0.userData.points.push(new PMPoint(0.688522, 0.344261, -0.638295));
obj0.userData.points.push(new PMPoint(-0.475757, 0.42553, -0.769792));
obj0.userData.points.push(new PMPoint(0.982557, 0.131496, -0.131496));
obj0.userData.points.push(new PMPoint(-0.901288, 0.262992, -0.344261));
obj0.userData.points.push(new PMPoint(0.131496, -0.131496, 0.982557));
obj0.userData.points.push(new PMPoint(-0.820019, 0.131496, 0.557026));
obj0.userData.points.push(new PMPoint(0.820019, 0.131496, -0.557026));
obj0.userData.points.push(new PMPoint(-0.262992, 0.344261, -0.901288));
obj0.userData.points.push(new PMPoint(-0.982557, 0.131496, 0.131496));
obj0.userData.points.push(new PMPoint(0.820019, -0.131496, 0.557026));
obj0.userData.points.push(new PMPoint(-0.131496, 0.131496, 0.982557));
obj0.userData.points.push(new PMPoint(0.131496, 0.131496, -0.982557));
obj0.userData.points.push(new PMPoint(-0.688522, 0.344261, -0.638295));
obj0.userData.points.push(new PMPoint(0.982557, -0.131496, 0.131496));
obj0.userData.points.push(new PMPoint(-0.982557, 0.131496, -0.131496));
obj0.userData.points.push(new PMPoint(0.688522, -0.344261, 0.638295));
obj0.userData.points.push(new PMPoint(-0.131496, -0.131496, 0.982557));
obj0.userData.points.push(new PMPoint(0.131496, -0.131496, -0.982557));
obj0.userData.points.push(new PMPoint(-0.820019, 0.131496, -0.557026));
obj0.userData.points.push(new PMPoint(0.982557, -0.131496, -0.131496));
obj0.userData.points.push(new PMPoint(0.262992, -0.344261, 0.901288));
obj0.userData.points.push(new PMPoint(-0.820019, -0.131496, 0.557026));
obj0.userData.points.push(new PMPoint(0.820019, -0.131496, -0.557026));
obj0.userData.points.push(new PMPoint(-0.131496, 0.131496, -0.982557));
obj0.userData.points.push(new PMPoint(0.901288, -0.262992, 0.344261));
obj0.userData.points.push(new PMPoint(-0.982557, -0.131496, 0.131496));
obj0.userData.points.push(new PMPoint(0.475757, -0.42553, 0.769792));
obj0.userData.points.push(new PMPoint(-0.688522, -0.344261, 0.638295));
obj0.userData.points.push(new PMPoint(0.688522, -0.344261, -0.638295));
obj0.userData.points.push(new PMPoint(-0.131496, -0.131496, -0.982557));
obj0.userData.points.push(new PMPoint(0.769792, -0.475757, 0.42553));
obj0.userData.points.push(new PMPoint(-0.982557, -0.131496, -0.131496));
obj0.userData.points.push(new PMPoint(-0.262992, -0.344261, 0.901288));
obj0.userData.points.push(new PMPoint(0.262992, -0.344261, -0.901288));
obj0.userData.points.push(new PMPoint(-0.820019, -0.131496, -0.557026));
obj0.userData.points.push(new PMPoint(0.901288, -0.262992, -0.344261));
obj0.userData.points.push(new PMPoint(-0.901288, -0.262992, 0.344261));
obj0.userData.points.push(new PMPoint(0.131496, -0.557026, 0.820019));
obj0.userData.points.push(new PMPoint(-0.475757, -0.42553, 0.769792));
obj0.userData.points.push(new PMPoint(0.475757, -0.42553, -0.769792));
obj0.userData.points.push(new PMPoint(-0.688522, -0.344261, -0.638295));
obj0.userData.points.push(new PMPoint(0.769792, -0.475757, -0.42553));
obj0.userData.points.push(new PMPoint(-0.769792, -0.475757, 0.42553));
obj0.userData.points.push(new PMPoint(0.344261, -0.638295, 0.688522));
obj0.userData.points.push(new PMPoint(-0.262992, -0.344261, -0.901288));
obj0.userData.points.push(new PMPoint(0.638295, -0.688522, 0.344261));
obj0.userData.points.push(new PMPoint(-0.901288, -0.262992, -0.344261));
obj0.userData.points.push(new PMPoint(-0.131496, -0.557026, 0.820019));
obj0.userData.points.push(new PMPoint(0.131496, -0.557026, -0.820019));
obj0.userData.points.push(new PMPoint(-0.475757, -0.42553, -0.769792));
obj0.userData.points.push(new PMPoint(0.557026, -0.820019, 0.131496));
obj0.userData.points.push(new PMPoint(-0.769792, -0.475757, -0.42553));
obj0.userData.points.push(new PMPoint(-0.344261, -0.638295, 0.688522));
obj0.userData.points.push(new PMPoint(0.344261, -0.638295, -0.688522));
obj0.userData.points.push(new PMPoint(0.638295, -0.688522, -0.344261));
obj0.userData.points.push(new PMPoint(-0.638295, -0.688522, 0.344261));
obj0.userData.points.push(new PMPoint(0.42553, -0.769792, 0.475757));
obj0.userData.points.push(new PMPoint(-0.131496, -0.557026, -0.820019));
obj0.userData.points.push(new PMPoint(0.557026, -0.820019, -0.131496));
obj0.userData.points.push(new PMPoint(-0.557026, -0.820019, 0.131496));
obj0.userData.points.push(new PMPoint(0.344261, -0.901288, 0.262992));
obj0.userData.points.push(new PMPoint(-0.344261, -0.638295, -0.688522));
obj0.userData.points.push(new PMPoint(-0.638295, -0.688522, -0.344261));
obj0.userData.points.push(new PMPoint(-0.42553, -0.769792, 0.475757));
obj0.userData.points.push(new PMPoint(0.42553, -0.769792, -0.475757));
obj0.userData.points.push(new PMPoint(-0.557026, -0.820019, -0.131496));
obj0.userData.points.push(new PMPoint(-0.344261, -0.901288, 0.262992));
obj0.userData.points.push(new PMPoint(0.344261, -0.901288, -0.262992));
obj0.userData.points.push(new PMPoint(0.131496, -0.982557, 0.131496));
obj0.userData.points.push(new PMPoint(-0.42553, -0.769792, -0.475757));
obj0.userData.points.push(new PMPoint(-0.131496, -0.982557, 0.131496));
obj0.userData.points.push(new PMPoint(-0.344261, -0.901288, -0.262992));
obj0.userData.points.push(new PMPoint(0.131496, -0.982557, -0.131496));
obj0.userData.points.push(new PMPoint(-0.131496, -0.982557, -0.131496));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 1, 0, 2, 0, 3, 2, 4, 1, 5, 3, 5, 1, 6, 3, 7, 2, 8, 6, 9, 7, 10, 4, 11, 8, 11, 4, 12, 5, 13, 7, 14, 8, 14, 6, 15, 12, 16, 13, 17, 10, 18, 14, 18, 9, 19, 15, 19, 9, 20, 10, 21, 11, 22, 13, 23, 15, 23, 12, 24, 16, 25, 20, 25, 21, 26, 22, 27, 17, 28, 23, 28, 16, 29, 24, 29, 17, 30, 18, 31, 19, 32, 22, 33, 24, 33, 20, 34, 21, 35, 26, 36, 30, 36, 31, 37, 32, 38, 27, 39, 33, 39, 25, 40, 34, 40, 26, 41, 35, 41, 27, 42, 28, 43, 29, 44, 32, 45, 34, 45, 31, 46, 35, 46, 30, 47, 37, 48, 42, 48, 43, 49, 44, 50, 38, 51, 45, 51, 37, 52, 46, 52, 36, 53, 47, 53, 38, 54, 39, 55, 40, 56, 44, 56, 41, 57, 43, 58, 47, 58, 42, 59, 49, 60, 54, 60, 55, 61, 50, 62, 56, 62, 57, 63, 49, 64, 58, 64, 48, 65, 59, 65, 50, 66, 51, 67, 52, 68, 53, 69, 57, 69, 55, 70, 59, 70, 54, 71, 61, 72, 66, 72, 67, 73, 68, 74, 63, 75, 69, 75, 61, 76, 70, 76, 60, 77, 71, 77, 62, 78, 63, 79, 64, 80, 65, 81, 68, 81, 67, 82, 71, 82, 66, 83, 73, 84, 78, 84, 74, 85, 79, 85, 80, 86, 74, 87, 81, 87, 73, 88, 82, 88, 72, 89, 83, 89, 75, 90, 76, 91, 77, 92, 80, 92, 78, 93, 83, 93, 79, 94, 86, 95, 90, 95, 91, 96, 86, 97, 92, 97, 84, 98, 93, 98, 85, 99, 94, 99, 87, 100, 88, 101, 89, 102, 91, 102, 90, 103, 94, 103, 96, 104, 100, 104, 101, 105, 96, 106, 102, 106, 95, 107, 103, 107, 97, 108, 98, 109, 101, 109, 99, 110, 100, 110, 105, 111, 108, 111, 105, 112, 109, 112, 104, 113, 110, 113, 106, 114, 107, 115, 108, 115, 112, 116, 114, 116, 111, 117, 115, 117, 113, 118, 114, 118, 116, 119, 117, 119, 118, 119];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[52, 37, 48, 65, 81, 68], [31, 37, 52, 46], [68, 81, 87, 74], [52, 68, 74, 85, 79, 63, 57, 41, 35, 46], [18, 31, 46, 35, 21, 10], [87, 100, 110, 99, 85, 74], [14, 18, 10, 7], [100, 104, 113, 110], [35, 41, 26, 21], [79, 85, 99, 94], [10, 21, 26, 36, 30, 17, 13, 5, 3, 7], [113, 118, 119, 117, 115, 107, 103, 94, 99, 110], [41, 57, 69, 53, 36, 26], [63, 79, 94, 103, 90, 75], [57, 63, 75, 69], [36, 53, 47, 30], [75, 90, 95, 86, 80, 64, 58, 47, 53, 69], [90, 103, 107, 95], [13, 17, 28, 23], [17, 30, 47, 58, 43, 28], [107, 115, 108, 97, 86, 95], [115, 117, 111, 108], [58, 64, 49, 43], [80, 86, 97, 92], [64, 80, 92, 77, 60, 49], [60, 77, 71, 54], [38, 54, 71, 82, 67, 51], [88, 73, 67, 82], [45, 32, 38, 51], [101, 88, 82, 71, 77, 92, 97, 108, 111, 105], [28, 43, 49, 60, 54, 38, 32, 19, 15, 23], [112, 109, 101, 105], [109, 98, 84, 73, 88, 101], [20, 9, 19, 32, 45, 34], [9, 6, 15, 19], [116, 112, 105, 111, 117, 119], [98, 93, 78, 84], [34, 45, 51, 67, 73, 84, 78, 62, 56, 40], [25, 20, 34, 40], [5, 13, 23, 15, 6, 1], [118, 114, 116, 119], [50, 44, 56, 62], [0, 3, 5, 1], [66, 50, 62, 78, 93, 83], [16, 25, 40, 56, 44, 29], [102, 89, 83, 93, 98, 109, 112, 116, 114, 106], [2, 0, 1, 6, 9, 20, 25, 16, 12, 4], [89, 72, 66, 83], [24, 12, 16, 29], [104, 96, 106, 114, 118, 113], [8, 14, 7, 3, 0, 2], [96, 91, 102, 106], [11, 8, 2, 4], [91, 76, 61, 72, 89, 102], [22, 11, 4, 12, 24, 33], [33, 24, 29, 44, 50, 66, 72, 61, 55, 39], [76, 70, 55, 61], [27, 22, 33, 39], [81, 65, 59, 70, 76, 91, 96, 104, 100, 87], [42, 27, 39, 55, 70, 59], [65, 48, 42, 59], [48, 37, 31, 18, 14, 8, 11, 22, 27, 42]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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

   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj0.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj0.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj0.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
      control.update();
      renderer.render(scene, camera);
   };
if ( THREE.WEBGL.isWebGLAvailable() ) {
	render();
} else {
	var warning = WEBGL.getWebGLErrorMessage();
	three.appendChild( warning );
}

   polytopeObjects[divNumber] = obj0;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
