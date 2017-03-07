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

   var axes = [[55,54],
      [49,48],
      [45,44],
      [39,38],
      [37,36],
      [31,30],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [19,18],
      [15,14],
      [12,11],
      [10,9],
      [9,8],
      [7,6],
      [6,5],
      [5,0],
      [2,1],
      [3,2],
      [4,3],
      [0,4],
      [1,0]];

   var angles = [2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881,
      2.37904491483881];

   var subtrees = [[71,72,73],
      [68,69,70],
      [65,66,67],
      [62,63,64],
      [59,60,61],
      [56,57,58],
      [53,54,55,71,72,73],
      [50,51,52],
      [47,48,49,68,69,70],
      [44,45,46,65,66,67],
      [41,42,43],
      [38,39,40,62,63,64],
      [35,36,37,59,60,61],
      [32,33,34],
      [29,30,31,53,54,55,56,57,58,71,72,73],
      [26,27,28,50,51,52],
      [23,24,25,47,48,49,68,69,70],
      [20,21,22,44,45,46,65,66,67],
      [17,18,19,41,42,43],
      [14,15,16,38,39,40,62,63,64],
      [11,12,13,35,36,37,59,60,61],
      [8,9,10,29,30,31,32,33,34,53,54,55,56,57,58,71,72,73],
      [5,6,7,20,21,22,23,24,25,26,27,28,44,45,46,47,48,49,50,51,52,65,66,67,68,69,70]];

   var polytoperoot = [[0,0,-1.05163227216862],
      [0.516995367183729,-0.281084700750499,-0.950902731368115],
      [0.0873780253841527,-0.678573510428322,0.248091270169992]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.650803, 0, 0));
   allpoints.push(new PMPoint(0.843179, 0.416109, 0));
   allpoints.push(new PMPoint(0.54621, 0.765344, 0));
   allpoints.push(new PMPoint(0.104593, 0.642343, 0));
   allpoints.push(new PMPoint(0.104593, -0.642343, 0));
   allpoints.push(new PMPoint(0.54621, -0.765344, 0));
   allpoints.push(new PMPoint(0.843179, -0.416109, 0));
   allpoints.push(new PMPoint(-0.27519, 0.899093, 0));
   allpoints.push(new PMPoint(-0.667612, 0.662111, 0));
   allpoints.push(new PMPoint(-0.617184, 0.206466, 0));
   allpoints.push(new PMPoint(0.619886, 1.21781, 0));
   allpoints.push(new PMPoint(0.0807293, 1.58231, 0));
   allpoints.push(new PMPoint(-0.192376, 0.991578, 0));
   allpoints.push(new PMPoint(1.47012, 0.590727, 0));
   allpoints.push(new PMPoint(1.19701, 1.18145, 0));
   allpoints.push(new PMPoint(0.738586, 1.18145, 0));
   allpoints.push(new PMPoint(0.947772, -0.349235, 0));
   allpoints.push(new PMPoint(1.38939, -0.226234, 0));
   allpoints.push(new PMPoint(1.49398, 0.416109, 0));
   allpoints.push(new PMPoint(-0.617184, -0.206466, 0));
   allpoints.push(new PMPoint(-0.667612, -0.662111, 0));
   allpoints.push(new PMPoint(-0.27519, -0.899093, 0));
   allpoints.push(new PMPoint(-0.192376, -0.991578, 0));
   allpoints.push(new PMPoint(0, -1.40769, 0));
   allpoints.push(new PMPoint(0.650803, -1.40769, 0));
   allpoints.push(new PMPoint(0.819316, -1.35607, 0));
   allpoints.push(new PMPoint(1.35847, -0.991578, 0));
   allpoints.push(new PMPoint(1.2848, -0.53911, 0));
   allpoints.push(new PMPoint(-0.34678, 1.54595, 0));
   allpoints.push(new PMPoint(-0.97372, 1.37133, 0));
   allpoints.push(new PMPoint(-1.0474, 0.918861, 0));
   allpoints.push(new PMPoint(-1.10236, 0.807546, 0));
   allpoints.push(new PMPoint(-1.54876, 0.333977, 0));
   allpoints.push(new PMPoint(-1.00961, -0.0305155, 0));
   allpoints.push(new PMPoint(1.01231, 1.45479, 0));
   allpoints.push(new PMPoint(0.96188, 1.91044, 0));
   allpoints.push(new PMPoint(0.527134, 2.05587, 0));
   allpoints.push(new PMPoint(2.00927, 0.95522, 0));
   allpoints.push(new PMPoint(1.9356, 1.40769, 0));
   allpoints.push(new PMPoint(1.49398, 1.53069, 0));
   allpoints.push(new PMPoint(1.76917, -0.482984, 0));
   allpoints.push(new PMPoint(2.16159, -0.246002, 0));
   allpoints.push(new PMPoint(2.11117, 0.209643, 0));
   allpoints.push(new PMPoint(-1.20677, -1.0266, 0));
   allpoints.push(new PMPoint(-0.760365, -1.50017, 0));
   allpoints.push(new PMPoint(-0.325619, -1.35474, 0));
   allpoints.push(new PMPoint(-0.192376, -1.8238, 0));
   allpoints.push(new PMPoint(0.104593, -2.17303, 0));
   allpoints.push(new PMPoint(0.54621, -2.05003, 0));
   allpoints.push(new PMPoint(1.26572, -1.82964, 0));
   allpoints.push(new PMPoint(1.70047, -1.6842, 0));
   allpoints.push(new PMPoint(1.75089, -1.22856, 0));
   allpoints.push(new PMPoint(-0.619886, 2.13667, 0));
   allpoints.push(new PMPoint(-1.07831, 2.13667, 0));
   allpoints.push(new PMPoint(-1.27069, 1.72056, 0));
   allpoints.push(new PMPoint(-1.3535, 1.62808, 0));
   allpoints.push(new PMPoint(-1.74593, 1.3911, 0));
   allpoints.push(new PMPoint(-1.67434, 0.744243, 0));
   allpoints.push(new PMPoint(1.27633, 2.24402, 0));
   allpoints.push(new PMPoint(1.0338, 2.84795, 0));
   allpoints.push(new PMPoint(0.476705, 2.51152, 0));
   allpoints.push(new PMPoint(2.45089, 0.832219, 0));
   allpoints.push(new PMPoint(2.74786, 1.18145, 0));
   allpoints.push(new PMPoint(2.47476, 1.77218, 0));
   allpoints.push(new PMPoint(-1.60244, -1.54331, 0));
   allpoints.push(new PMPoint(-1.38902, -1.94904, 0));
   allpoints.push(new PMPoint(-0.931198, -1.92558, 0));
   allpoints.push(new PMPoint(0.0309174, -2.6255, 0));
   allpoints.push(new PMPoint(0.570074, -2.98999, 0));
   allpoints.push(new PMPoint(0.843179, -2.39927, 0));
   allpoints.push(new PMPoint(-1.4999, 2.63246, 0));
   allpoints.push(new PMPoint(-1.92149, 2.13667, 0));
   allpoints.push(new PMPoint(-1.72912, 1.72056, 0));

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
   allpoints[50].makesphere(0.02,points_material);
   allpoints[51].makesphere(0.02,points_material);
   allpoints[52].makesphere(0.02,points_material);
   allpoints[53].makesphere(0.02,points_material);
   allpoints[54].makesphere(0.02,points_material);
   allpoints[55].makesphere(0.02,points_material);
   allpoints[56].makesphere(0.02,points_material);
   allpoints[57].makesphere(0.02,points_material);
   allpoints[58].makesphere(0.02,points_material);
   allpoints[59].makesphere(0.02,points_material);
   allpoints[60].makesphere(0.02,points_material);
   allpoints[61].makesphere(0.02,points_material);
   allpoints[62].makesphere(0.02,points_material);
   allpoints[63].makesphere(0.02,points_material);
   allpoints[64].makesphere(0.02,points_material);
   allpoints[65].makesphere(0.02,points_material);
   allpoints[66].makesphere(0.02,points_material);
   allpoints[67].makesphere(0.02,points_material);
   allpoints[68].makesphere(0.02,points_material);
   allpoints[69].makesphere(0.02,points_material);
   allpoints[70].makesphere(0.02,points_material);
   allpoints[71].makesphere(0.02,points_material);
   allpoints[72].makesphere(0.02,points_material);
   allpoints[73].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[50].vector);
   faces.vertices.push(allpoints[51].vector);
   faces.vertices.push(allpoints[52].vector);
   faces.vertices.push(allpoints[53].vector);
   faces.vertices.push(allpoints[54].vector);
   faces.vertices.push(allpoints[55].vector);
   faces.vertices.push(allpoints[56].vector);
   faces.vertices.push(allpoints[57].vector);
   faces.vertices.push(allpoints[58].vector);
   faces.vertices.push(allpoints[59].vector);
   faces.vertices.push(allpoints[60].vector);
   faces.vertices.push(allpoints[61].vector);
   faces.vertices.push(allpoints[62].vector);
   faces.vertices.push(allpoints[63].vector);
   faces.vertices.push(allpoints[64].vector);
   faces.vertices.push(allpoints[65].vector);
   faces.vertices.push(allpoints[66].vector);
   faces.vertices.push(allpoints[67].vector);
   faces.vertices.push(allpoints[68].vector);
   faces.vertices.push(allpoints[69].vector);
   faces.vertices.push(allpoints[70].vector);
   faces.vertices.push(allpoints[71].vector);
   faces.vertices.push(allpoints[72].vector);
   faces.vertices.push(allpoints[73].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 22, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 72, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 73, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 63, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 64, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 61, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 49, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 48, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 55, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 37, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 6, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 31, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 46, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 65, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 66, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 67, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 33, 34, undefined, undefined, 0));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[10].vector);
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
