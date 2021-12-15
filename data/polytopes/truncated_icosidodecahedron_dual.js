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
obj0.name = "truncated_icosidodecahedron_dual";
obj0.userData.explodable = 1;
obj0.userData.points = [];
obj0.userData.points.push(new PMPoint(-0.355381, -0.930399, 0));
obj0.userData.points.push(new PMPoint(0.791186, -0.302206, 0.48898));
obj0.userData.points.push(new PMPoint(0, -0.977959, 0));
obj0.userData.points.push(new PMPoint(0, -0.90325, -0.558239));
obj0.userData.points.push(new PMPoint(-0.48898, -0.791186, 0.302206));
obj0.userData.points.push(new PMPoint(0.355381, -0.930399, 0));
obj0.userData.points.push(new PMPoint(0.48898, -0.791186, -0.302206));
obj0.userData.points.push(new PMPoint(0, -0.90325, 0.558239));
obj0.userData.points.push(new PMPoint(-0.791186, -0.302206, -0.48898));
obj0.userData.points.push(new PMPoint(-0.48898, -0.791186, -0.302206));
obj0.userData.points.push(new PMPoint(0.302206, -0.48898, 0.791186));
obj0.userData.points.push(new PMPoint(-0.575018, 0.575018, 0.575018));
obj0.userData.points.push(new PMPoint(-0.575018, -0.575018, -0.575018));
obj0.userData.points.push(new PMPoint(0.575018, -0.575018, -0.575018));
obj0.userData.points.push(new PMPoint(-0.90325, -0.558239, 0));
obj0.userData.points.push(new PMPoint(0.90325, -0.558239, 0));
obj0.userData.points.push(new PMPoint(0.48898, -0.791186, 0.302206));
obj0.userData.points.push(new PMPoint(-0.575018, -0.575018, 0.575018));
obj0.userData.points.push(new PMPoint(0, -0.355381, -0.930399));
obj0.userData.points.push(new PMPoint(-0.791186, -0.302206, 0.48898));
obj0.userData.points.push(new PMPoint(0.302206, -0.48898, -0.791186));
obj0.userData.points.push(new PMPoint(-0.302206, -0.48898, -0.791186));
obj0.userData.points.push(new PMPoint(-0.930399, 0, 0.355381));
obj0.userData.points.push(new PMPoint(0.930399, 0, 0.355381));
obj0.userData.points.push(new PMPoint(0, -0.355381, 0.930399));
obj0.userData.points.push(new PMPoint(0.575018, -0.575018, 0.575018));
obj0.userData.points.push(new PMPoint(-0.302206, -0.48898, 0.791186));
obj0.userData.points.push(new PMPoint(-0.558239, 0, -0.90325));
obj0.userData.points.push(new PMPoint(0.791186, -0.302206, -0.48898));
obj0.userData.points.push(new PMPoint(0.558239, 0, -0.90325));
obj0.userData.points.push(new PMPoint(-0.558239, 0, 0.90325));
obj0.userData.points.push(new PMPoint(-0.930399, 0, -0.355381));
obj0.userData.points.push(new PMPoint(0.558239, 0, 0.90325));
obj0.userData.points.push(new PMPoint(-0.302206, 0.48898, -0.791186));
obj0.userData.points.push(new PMPoint(0.355381, 0.930399, 0));
obj0.userData.points.push(new PMPoint(0, 0.355381, 0.930399));
obj0.userData.points.push(new PMPoint(0.90325, 0.558239, 0));
obj0.userData.points.push(new PMPoint(-0.977959, 0, 0));
obj0.userData.points.push(new PMPoint(0.575018, 0.575018, -0.575018));
obj0.userData.points.push(new PMPoint(0, 0, -0.977959));
obj0.userData.points.push(new PMPoint(0, 0.355381, -0.930399));
obj0.userData.points.push(new PMPoint(0.930399, 0, -0.355381));
obj0.userData.points.push(new PMPoint(0.575018, 0.575018, 0.575018));
obj0.userData.points.push(new PMPoint(0.977959, 0, 0));
obj0.userData.points.push(new PMPoint(-0.791186, 0.302206, 0.48898));
obj0.userData.points.push(new PMPoint(0, 0, 0.977959));
obj0.userData.points.push(new PMPoint(-0.575018, 0.575018, -0.575018));
obj0.userData.points.push(new PMPoint(-0.791186, 0.302206, -0.48898));
obj0.userData.points.push(new PMPoint(-0.90325, 0.558239, 0));
obj0.userData.points.push(new PMPoint(-0.302206, 0.48898, 0.791186));
obj0.userData.points.push(new PMPoint(0.302206, 0.48898, -0.791186));
obj0.userData.points.push(new PMPoint(0, 0.90325, -0.558239));
obj0.userData.points.push(new PMPoint(-0.48898, 0.791186, -0.302206));
obj0.userData.points.push(new PMPoint(0.791186, 0.302206, -0.48898));
obj0.userData.points.push(new PMPoint(0.302206, 0.48898, 0.791186));
obj0.userData.points.push(new PMPoint(0.791186, 0.302206, 0.48898));
obj0.userData.points.push(new PMPoint(0, 0.977959, 0));
obj0.userData.points.push(new PMPoint(-0.48898, 0.791186, 0.302206));
obj0.userData.points.push(new PMPoint(0, 0.90325, 0.558239));
obj0.userData.points.push(new PMPoint(0.48898, 0.791186, -0.302206));
obj0.userData.points.push(new PMPoint(-0.355381, 0.930399, 0));
obj0.userData.points.push(new PMPoint(0.48898, 0.791186, 0.302206));

obj0.userData.pointradii = 0.02;
   <!-- Vertex style -->
obj0.userData.pointmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide, transparent: false } );
obj0.userData.edgeindices = [0, 2, 0, 3, 2, 3, 0, 4, 2, 5, 3, 5, 3, 6, 5, 6, 0, 7, 2, 7, 4, 7, 5, 7, 0, 9, 3, 9, 7, 10, 3, 12, 8, 12, 9, 12, 3, 13, 6, 13, 0, 14, 4, 14, 8, 14, 9, 14, 12, 14, 1, 15, 5, 15, 6, 15, 13, 15, 5, 16, 7, 16, 15, 16, 4, 17, 7, 17, 14, 17, 3, 18, 14, 19, 17, 19, 3, 20, 13, 20, 18, 20, 3, 21, 12, 21, 18, 21, 14, 22, 19, 22, 1, 23, 15, 23, 7, 24, 10, 24, 1, 25, 7, 25, 10, 25, 15, 25, 16, 25, 7, 26, 17, 26, 24, 26, 8, 27, 12, 27, 18, 27, 21, 27, 13, 28, 15, 28, 13, 29, 18, 29, 20, 29, 28, 29, 11, 30, 17, 30, 19, 30, 22, 30, 24, 30, 26, 30, 8, 31, 14, 31, 27, 31, 1, 32, 10, 32, 23, 32, 24, 32, 25, 32, 27, 33, 30, 35, 32, 35, 23, 36, 34, 36, 14, 37, 22, 37, 31, 37, 29, 38, 36, 38, 18, 39, 27, 39, 29, 39, 27, 40, 29, 40, 33, 40, 39, 40, 15, 41, 28, 41, 29, 41, 36, 41, 32, 42, 36, 42, 15, 43, 23, 43, 36, 43, 41, 43, 11, 44, 22, 44, 30, 44, 24, 45, 30, 45, 32, 45, 35, 45, 27, 46, 33, 46, 27, 47, 31, 47, 46, 47, 11, 48, 22, 48, 31, 48, 37, 48, 44, 48, 46, 48, 47, 48, 11, 49, 30, 49, 35, 49, 29, 50, 38, 50, 40, 50, 33, 51, 34, 51, 38, 51, 40, 51, 46, 51, 50, 51, 46, 52, 48, 52, 51, 52, 29, 53, 36, 53, 38, 53, 41, 53, 32, 54, 35, 54, 42, 54, 23, 55, 32, 55, 36, 55, 42, 55, 34, 56, 51, 56, 11, 57, 48, 57, 11, 58, 34, 58, 35, 58, 42, 58, 49, 58, 54, 58, 56, 58, 57, 58, 34, 59, 36, 59, 38, 59, 51, 59, 48, 60, 51, 60, 52, 60, 56, 60, 57, 60, 58, 60, 34, 61, 36, 61, 42, 61, 58, 61];
   <!-- Edge style -->
obj0.userData.edgematerial = new THREE.LineBasicMaterial( { color: 0x000000, depthTest: true, linewidth: polytopeLineWidth, transparent: false } );
obj0.userData.facets = [[3, 2, 0], [5, 2, 3], [3, 0, 9], [0, 2, 7], [3, 9, 12], [7, 2, 5], [5, 3, 6], [0, 7, 4], [9, 0, 14], [6, 3, 13], [4, 7, 17], [9, 14, 12], [3, 12, 21], [7, 5, 16], [0, 4, 14], [5, 6, 15], [3, 21, 18], [7, 16, 25], [4, 17, 14], [6, 13, 15], [13, 3, 20], [17, 7, 26], [12, 14, 8], [16, 5, 15], [21, 12, 27], [3, 18, 20], [26, 7, 24], [8, 14, 31], [16, 15, 25], [21, 27, 18], [7, 25, 10], [14, 17, 19], [15, 13, 28], [12, 8, 27], [13, 20, 29], [17, 26, 30], [7, 10, 24], [14, 19, 22], [15, 28, 41], [8, 31, 27], [20, 18, 29], [26, 24, 30], [31, 14, 37], [25, 15, 1], [18, 27, 39], [13, 29, 28], [17, 30, 19], [10, 25, 32], [14, 22, 37], [1, 15, 23], [39, 27, 40], [28, 29, 41], [19, 30, 22], [10, 32, 24], [15, 41, 43], [27, 31, 47], [18, 39, 29], [30, 24, 45], [25, 1, 32], [31, 37, 48], [23, 15, 43], [27, 47, 46], [39, 40, 29], [30, 45, 35], [1, 23, 32], [37, 22, 48], [40, 27, 33], [41, 29, 53], [22, 30, 44], [24, 32, 45], [31, 48, 47], [43, 41, 36], [27, 46, 33], [53, 29, 38], [44, 30, 11], [45, 32, 35], [47, 48, 46], [23, 43, 36], [29, 40, 50], [30, 35, 49], [32, 23, 55], [22, 44, 48], [41, 53, 36], [40, 33, 51], [29, 50, 38], [30, 49, 11], [32, 55, 42], [44, 11, 48], [53, 38, 36], [33, 46, 51], [35, 32, 54], [46, 48, 52], [23, 36, 55], [40, 51, 50], [49, 35, 58], [32, 42, 54], [52, 48, 60], [55, 36, 42], [50, 51, 38], [49, 58, 11], [48, 11, 57], [36, 38, 59], [46, 52, 51], [35, 54, 58], [48, 57, 60], [36, 59, 34], [52, 60, 51], [54, 42, 58], [42, 36, 61], [38, 51, 59], [11, 58, 57], [61, 36, 34], [59, 51, 34], [57, 58, 60], [51, 60, 56], [42, 61, 58], [51, 56, 34], [61, 34, 58], [60, 58, 56], [58, 34, 56]];
   <!-- Facet style -->
obj0.userData.facetmaterial = new THREE.MeshBasicMaterial( { color: 0x0EAD69, depthFunc: THREE.LessDepth, depthTest: false, depthWrite: false, opacity: 0.4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 0.5, side: THREE.DoubleSide, transparent: true } );
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
