// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'folding' + divNumber );
var renderer = foldingRenderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.insertBefore(renderer.domElement, container.childNodes[0]);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(zoom, rendererWidth/rendererHeight, 0.1, 1000);

   camera.position.set(0, 0, 5);
   camera.lookAt(0, 0, 0);
   camera.up.set(0, 1, 0);

   // class to allow move points together with labels and spheres
   var PMPoint = function (x,y,z) {
      this.vector = new THREE.Vector3(x,y,z);
      this.sprite = null;
      this.sphere = null;
   }
   PMPoint.prototype.makelabel = function(label) {
      this.sprite = textSprite( label );
      this.sprite.position.copy(this.vector);
   }
   PMPoint.prototype.makesphere = function(radius,material) {
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(radius), material);
      this.sphere.position.copy(this.vector);
   }

   PMPoint.prototype.setX = function(x) {
      this.vector.setX(x);
      if (this.sprite) {
         this.sprite.position.setX(x);
      }
      if (this.sphere) {
         this.sphere.position.setX(x);
      }
   };
   PMPoint.prototype.setY = function(y) {
      this.vector.setY(y);
      if (this.sprite) {
         this.sprite.position.setY(y);
      }
      if (this.sphere) {
         this.sphere.position.setY(y);
      }
   };
   PMPoint.prototype.setZ = function(z) {
      this.vector.setZ(z);
      if (this.sprite) {
         this.sprite.position.setZ(z);
      }
      if (this.sphere) {
         this.sphere.position.setZ(z);
      }
   };
   PMPoint.prototype.set = function(x,y,z) {
      this.vector.set(x,y,z);
      if (this.sprite) {
         this.sprite.position.set(x,y,z);
      }
      if (this.sphere) {
         this.sphere.position.set(x,y,z);
      }
   };
   PMPoint.prototype.add = function(o) {
      if (this.sprite) {
         o.add(this.sprite);
      }
      if (this.sphere) {
         o.add(this.sphere);
      }
   };


   var controls = new THREE.TrackballControls(camera, container);

   controls.noPan = controlsNoPan;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var axes = [[27,41],
      [37,36],
      [32,18],
      [13,27],
      [27,26],
      [23,22],
      [21,20],
      [18,6],
      [19,18],
      [17,16],
      [5,13],
      [13,12],
      [11,10],
      [9,8],
      [6,2],
      [7,6],
      [4,0],
      [1,5],
      [5,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341,
      2.41061314165341];

   var subtrees = [[48,49],
      [46,47],
      [44,45],
      [42,43],
      [40,41,48,49],
      [38,39],
      [36,37,46,47],
      [34,35],
      [32,33,44,45],
      [30,31],
      [28,29],
      [26,27,40,41,42,43,48,49],
      [24,25],
      [22,23,38,39],
      [20,21,36,37,46,47],
      [18,19,32,33,34,35,44,45],
      [16,17,30,31],
      [14,15],
      [12,13,26,27,28,29,40,41,42,43,48,49],
      [10,11,24,25],
      [8,9,22,23,38,39],
      [6,7,18,19,20,21,32,33,34,35,36,37,44,45,46,47],
      [4,5,12,13,14,15,16,17,26,27,28,29,30,31,40,41,42,43,48,49]];

   var polytoperoot = [[-0.508242911564665,-0.508242911564665,0.718764018514738],
      [-0.407495660980206,-0.983781551346603,0.407495660980206],
      [0.792893218813452,-0.378679656440357,-0.121320343559643]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.777985, 0, 0));
   allpoints.push(new PMPoint(0.664051, 0.769597, 0));
   allpoints.push(new PMPoint(0.0881227, 0.595252, 0));
   allpoints.push(new PMPoint(0.0881227, -0.595252, 0));
   allpoints.push(new PMPoint(0.664051, -0.769597, 0));
   allpoints.push(new PMPoint(0.332026, 1.47317, 0));
   allpoints.push(new PMPoint(-0.315341, 1.04169, 0));
   allpoints.push(new PMPoint(1.35391, 0.174345, 0));
   allpoints.push(new PMPoint(1.44204, 0.769597, 0));
   allpoints.push(new PMPoint(-0.412589, 0.928985, 0));
   allpoints.push(new PMPoint(-0.744614, 0.22541, 0));
   allpoints.push(new PMPoint(-0.315341, -1.04169, 0));
   allpoints.push(new PMPoint(0.332026, -1.47317, 0));
   allpoints.push(new PMPoint(1.44204, -0.769597, 0));
   allpoints.push(new PMPoint(1.35391, -0.174345, 0));
   allpoints.push(new PMPoint(-0.744614, -0.22541, 0));
   allpoints.push(new PMPoint(-0.412589, -0.928985, 0));
   allpoints.push(new PMPoint(-0.189609, 2.05037, 0));
   allpoints.push(new PMPoint(-0.572149, 1.58588, 0));
   allpoints.push(new PMPoint(1.31142, 1.20108, 0));
   allpoints.push(new PMPoint(0.907954, 1.64752, 0));
   allpoints.push(new PMPoint(1.85462, -0.159389, 0));
   allpoints.push(new PMPoint(2.18665, 0.544187, 0));
   allpoints.push(new PMPoint(-0.988517, 1.10333, 0));
   allpoints.push(new PMPoint(-1.39198, 0.656892, 0));
   allpoints.push(new PMPoint(-0.572149, -1.58588, 0));
   allpoints.push(new PMPoint(-0.189609, -2.05037, 0));
   allpoints.push(new PMPoint(0.907954, -1.64752, 0));
   allpoints.push(new PMPoint(1.31142, -1.20108, 0));
   allpoints.push(new PMPoint(-1.39198, -0.656892, 0));
   allpoints.push(new PMPoint(-0.988517, -1.10333, 0));
   allpoints.push(new PMPoint(-0.856104, 2.45167, 0));
   allpoints.push(new PMPoint(-1.15548, 1.7336, 0));
   allpoints.push(new PMPoint(0.714565, 1.93767, 0));
   allpoints.push(new PMPoint(0.457757, 2.48185, 0));
   allpoints.push(new PMPoint(1.806, 1.80162, 0));
   allpoints.push(new PMPoint(1.13951, 2.20292, 0));
   allpoints.push(new PMPoint(2.43055, -0.333734, 0));
   allpoints.push(new PMPoint(2.83402, 0.112705, 0));
   allpoints.push(new PMPoint(-1.15548, -1.7336, 0));
   allpoints.push(new PMPoint(-0.856104, -2.45167, 0));
   allpoints.push(new PMPoint(0.457757, -2.48185, 0));
   allpoints.push(new PMPoint(0.714565, -1.93767, 0));
   allpoints.push(new PMPoint(0.109762, 2.76845, 0));
   allpoints.push(new PMPoint(-0.473564, 2.91617, 0));
   allpoints.push(new PMPoint(2.10537, 2.5197, 0));
   allpoints.push(new PMPoint(1.52205, 2.66741, 0));
   allpoints.push(new PMPoint(-0.473564, -2.91617, 0));
   allpoints.push(new PMPoint(0.109762, -2.76845, 0));

   <!-- Vertex style -->
   var points_material = new THREE.MeshBasicMaterial ( {color: 0x000000, } );

   points_material.side = THREE.DoubleSide;

   <!-- POINTS -->
   allpoints[0].makesphere(0.02,points_material);
   allpoints[1].makesphere(0.02,points_material);
   allpoints[2].makesphere(0.02,points_material);
   allpoints[3].makesphere(0.02,points_material);
   allpoints[4].makesphere(0.02,points_material);
   allpoints[5].makesphere(0.02,points_material);
   allpoints[6].makesphere(0.02,points_material);
   allpoints[7].makesphere(0.02,points_material);
   allpoints[8].makesphere(0.02,points_material);
   allpoints[9].makesphere(0.02,points_material);
   allpoints[10].makesphere(0.02,points_material);
   allpoints[11].makesphere(0.02,points_material);
   allpoints[12].makesphere(0.02,points_material);
   allpoints[13].makesphere(0.02,points_material);
   allpoints[14].makesphere(0.02,points_material);
   allpoints[15].makesphere(0.02,points_material);
   allpoints[16].makesphere(0.02,points_material);
   allpoints[17].makesphere(0.02,points_material);
   allpoints[18].makesphere(0.02,points_material);
   allpoints[19].makesphere(0.02,points_material);
   allpoints[20].makesphere(0.02,points_material);
   allpoints[21].makesphere(0.02,points_material);
   allpoints[22].makesphere(0.02,points_material);
   allpoints[23].makesphere(0.02,points_material);
   allpoints[24].makesphere(0.02,points_material);
   allpoints[25].makesphere(0.02,points_material);
   allpoints[26].makesphere(0.02,points_material);
   allpoints[27].makesphere(0.02,points_material);
   allpoints[28].makesphere(0.02,points_material);
   allpoints[29].makesphere(0.02,points_material);
   allpoints[30].makesphere(0.02,points_material);
   allpoints[31].makesphere(0.02,points_material);
   allpoints[32].makesphere(0.02,points_material);
   allpoints[33].makesphere(0.02,points_material);
   allpoints[34].makesphere(0.02,points_material);
   allpoints[35].makesphere(0.02,points_material);
   allpoints[36].makesphere(0.02,points_material);
   allpoints[37].makesphere(0.02,points_material);
   allpoints[38].makesphere(0.02,points_material);
   allpoints[39].makesphere(0.02,points_material);
   allpoints[40].makesphere(0.02,points_material);
   allpoints[41].makesphere(0.02,points_material);
   allpoints[42].makesphere(0.02,points_material);
   allpoints[43].makesphere(0.02,points_material);
   allpoints[44].makesphere(0.02,points_material);
   allpoints[45].makesphere(0.02,points_material);
   allpoints[46].makesphere(0.02,points_material);
   allpoints[47].makesphere(0.02,points_material);
   allpoints[48].makesphere(0.02,points_material);
   allpoints[49].makesphere(0.02,points_material);

   for (index = 0; index < allpoints.length; ++index) {
      allpoints[index].add(obj);
   }
   var faces = new THREE.Geometry();

   <!-- VERTICES -->
   faces.vertices.push(allpoints[0].vector);
   faces.vertices.push(allpoints[1].vector);
   faces.vertices.push(allpoints[2].vector);
   faces.vertices.push(allpoints[3].vector);
   faces.vertices.push(allpoints[4].vector);
   faces.vertices.push(allpoints[5].vector);
   faces.vertices.push(allpoints[6].vector);
   faces.vertices.push(allpoints[7].vector);
   faces.vertices.push(allpoints[8].vector);
   faces.vertices.push(allpoints[9].vector);
   faces.vertices.push(allpoints[10].vector);
   faces.vertices.push(allpoints[11].vector);
   faces.vertices.push(allpoints[12].vector);
   faces.vertices.push(allpoints[13].vector);
   faces.vertices.push(allpoints[14].vector);
   faces.vertices.push(allpoints[15].vector);
   faces.vertices.push(allpoints[16].vector);
   faces.vertices.push(allpoints[17].vector);
   faces.vertices.push(allpoints[18].vector);
   faces.vertices.push(allpoints[19].vector);
   faces.vertices.push(allpoints[20].vector);
   faces.vertices.push(allpoints[21].vector);
   faces.vertices.push(allpoints[22].vector);
   faces.vertices.push(allpoints[23].vector);
   faces.vertices.push(allpoints[24].vector);
   faces.vertices.push(allpoints[25].vector);
   faces.vertices.push(allpoints[26].vector);
   faces.vertices.push(allpoints[27].vector);
   faces.vertices.push(allpoints[28].vector);
   faces.vertices.push(allpoints[29].vector);
   faces.vertices.push(allpoints[30].vector);
   faces.vertices.push(allpoints[31].vector);
   faces.vertices.push(allpoints[32].vector);
   faces.vertices.push(allpoints[33].vector);
   faces.vertices.push(allpoints[34].vector);
   faces.vertices.push(allpoints[35].vector);
   faces.vertices.push(allpoints[36].vector);
   faces.vertices.push(allpoints[37].vector);
   faces.vertices.push(allpoints[38].vector);
   faces.vertices.push(allpoints[39].vector);
   faces.vertices.push(allpoints[40].vector);
   faces.vertices.push(allpoints[41].vector);
   faces.vertices.push(allpoints[42].vector);
   faces.vertices.push(allpoints[43].vector);
   faces.vertices.push(allpoints[44].vector);
   faces.vertices.push(allpoints[45].vector);
   faces.vertices.push(allpoints[46].vector);
   faces.vertices.push(allpoints[47].vector);
   faces.vertices.push(allpoints[48].vector);
   faces.vertices.push(allpoints[49].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 27, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 41, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 27, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 5, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 13, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 13, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 27, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 27, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 41, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 45, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 35, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 37, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 47, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 31, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 17, 4, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: foldingLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);	var render = function () {
		foldingRenderIds[divNumber]= requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	};


	render();

	function computeCentroid(geom) {
		centroid = new THREE.Vector3();
		geom.vertices.forEach(function(v) {
			centroid.add(v);			
		});
		centroid.divideScalar(geom.vertices.length);
		return centroid;
	}

	function explode(factor) {
		var obj, c;
		for (var i = 0; i< all_objects.length; ++i) {
			obj = all_objects[i];
			c = centroids[i];
	
			obj.position.set(c.x*factor, c.y*factor, c.z*factor);
		}	
	}

	var pos = 150* Math.PI;

	function updateFactor() {
		pos++;
		return Math.sin(.01*pos)+1;
	}

	function makelabel(message, x, y, z, params) {
		var spritey = textSprite( message, params );
		spritey.position.set(x, y, z);
		obj.add(spritey);
	}

	function textSprite(message, parameters)
	{
		if ( parameters === undefined ) parameters = {};

		var fontface = "Helvetica";

		var fontsize = parameters.hasOwnProperty("fontsize") ? 
			parameters["fontsize"] : 18;
		fontsize = fontsize*10;

		var canvas = document.createElement('canvas');
		var size = 1000;
		canvas.width = size;
		canvas.height = size;
		var context = canvas.getContext('2d');
		context.font = fontsize + "px " + fontface;

		// text color
		context.fillStyle = "rgba(0, 0, 0, 1.0)";

		context.fillText(message, size/2, size/2);

		// canvas contents will be used for a texture
		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		var spriteMaterial = new THREE.SpriteMaterial(
			{map: texture, useScreenCoordinates: false});
		var sprite = new THREE.Sprite(spriteMaterial);
		return sprite;
	}



   foldingSubtrees[divNumber] = subtrees;
   foldingAngles[divNumber] = angles;
   foldingAxes[divNumber] = axes;
   foldingAllpoints[divNumber] = allpoints;
   foldingObjects[divNumber] = obj;
   foldingControls[divNumber] = controls;
   foldingCameras[divNumber] = camera;
   foldingPolytopeRoots[divNumber] = polytoperoot;
});
appendFoldingScript();
