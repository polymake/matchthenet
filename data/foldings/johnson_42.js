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

   var axes = [[71,70],
      [65,64],
      [61,60],
      [40,59],
      [57,56],
      [52,51],
      [51,34],
      [49,48],
      [47,46],
      [44,43],
      [41,40],
      [40,28],
      [25,38],
      [34,20],
      [35,34],
      [17,32],
      [29,12],
      [28,27],
      [11,28],
      [26,25],
      [25,24],
      [23,22],
      [20,19],
      [21,20],
      [18,17],
      [17,16],
      [15,14],
      [12,11],
      [13,12],
      [11,5],
      [10,9],
      [4,8],
      [3,7],
      [2,6],
      [5,0],
      [1,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.48923451380543,
      2.67794504458899,
      2.51327412287183,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.51327412287183,
      2.95288212280623,
      2.48923451380542,
      2.51327412287183,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.67794504458899,
      2.51327412287183,
      2.48923451380543,
      2.48923451380542,
      2.95288212280623,
      2.48923451380542,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.48923451380542,
      2.48923451380543,
      2.67794504458899,
      2.67794504458899,
      2.95288212280623,
      2.48923451380542,
      2.48923451380543,
      2.95288212280623,
      2.48923451380543,
      2.67794504458899,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

   var subtrees = [[77],
      [74,75,76],
      [72,73],
      [69,70,71,77],
      [68],
      [67],
      [66],
      [64,65,74,75,76],
      [63],
      [62],
      [60,61,72,73],
      [59,69,70,71,77],
      [56,57,58,68],
      [54,55],
      [51,52,53,66,67],
      [48,49,50,64,65,74,75,76],
      [45,46,47,63],
      [42,43,44,62],
      [40,41,59,60,61,69,70,71,72,73,77],
      [39],
      [38,56,57,58,68],
      [37],
      [36],
      [34,35,51,52,53,54,55,66,67],
      [33],
      [32,48,49,50,64,65,74,75,76],
      [31],
      [30],
      [29,45,46,47,63],
      [27,28,40,41,42,43,44,59,60,61,62,69,70,71,72,73,77],
      [24,25,26,38,39,56,57,58,68],
      [22,23,37],
      [19,20,21,34,35,36,51,52,53,54,55,66,67],
      [16,17,18,32,33,48,49,50,64,65,74,75,76],
      [14,15,31],
      [11,12,13,27,28,29,30,40,41,42,43,44,45,46,47,59,60,61,62,63,69,70,71,72,73,77],
      [9,10,24,25,26,38,39,56,57,58,68],
      [8,22,23,37],
      [7,19,20,21,34,35,36,51,52,53,54,55,66,67],
      [6,16,17,18,32,33,48,49,50,64,65,74,75,76],
      [5,11,12,13,14,15,27,28,29,30,31,40,41,42,43,44,45,46,47,59,60,61,62,63,69,70,71,72,73,77]];

   var polytoperoot = [[0.877501444449895,-0.230664905138395,-0.142558751387298],
      [1.80901699437495,-0.5,-1],
      [-0.490538220036055,0.251381794952049,-1.01308287391169]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.542326, 0, 0));
   allpoints.push(new PMPoint(0.709914, 0.515782, 0));
   allpoints.push(new PMPoint(0.271163, 0.834553, 0));
   allpoints.push(new PMPoint(-0.167588, 0.515782, 0));
   allpoints.push(new PMPoint(0.271163, -0.469668, 0));
   allpoints.push(new PMPoint(1.0728, 0.112756, 0));
   allpoints.push(new PMPoint(0.766602, 1.05514, 0));
   allpoints.push(new PMPoint(-0.224276, 1.05514, 0));
   allpoints.push(new PMPoint(-0.68337, 0.348195, 0));
   allpoints.push(new PMPoint(-0.515782, -0.167588, 0));
   allpoints.push(new PMPoint(0.63405, -0.872694, 0));
   allpoints.push(new PMPoint(1.12949, -0.652111, 0));
   allpoints.push(new PMPoint(1.0728, -0.112756, 0));
   allpoints.push(new PMPoint(-0.469668, -0.271163, 0));
   allpoints.push(new PMPoint(-0.198505, -0.740831, 0));
   allpoints.push(new PMPoint(1.56824, 0.33334, 0));
   allpoints.push(new PMPoint(1.51155, 0.872694, 0));
   allpoints.push(new PMPoint(0.981076, 0.98545, 0));
   allpoints.push(new PMPoint(0.709914, 1.59449, 0));
   allpoints.push(new PMPoint(0.179439, 1.70725, 0));
   allpoints.push(new PMPoint(-0.0917239, 1.23758, 0));
   allpoints.push(new PMPoint(-0.763631, 0.998449, 0));
   allpoints.push(new PMPoint(-0.706943, 0.459094, 0));
   allpoints.push(new PMPoint(-1.2257, 0.348195, 0));
   allpoints.push(new PMPoint(-1.39328, -0.167588, 0));
   allpoints.push(new PMPoint(-0.954533, -0.486359, 0));
   allpoints.push(new PMPoint(-0.131864, -0.832555, 0));
   allpoints.push(new PMPoint(0.231023, -1.23558, 0));
   allpoints.push(new PMPoint(1.56824, -0.33334, 0));
   allpoints.push(new PMPoint(1.0728, -1.19147, 0));
   allpoints.push(new PMPoint(-0.740831, -0.740831, 0));
   allpoints.push(new PMPoint(2.00699, 0.652111, 0));
   allpoints.push(new PMPoint(1.34396, 1.38848, 0));
   allpoints.push(new PMPoint(-0.290229, 1.97841, 0));
   allpoints.push(new PMPoint(-0.561392, 1.50874, 0));
   allpoints.push(new PMPoint(0.542326, 2.11027, 0));
   allpoints.push(new PMPoint(-1.20238, 0.679678, 0));
   allpoints.push(new PMPoint(-1.75617, 0.235439, 0));
   allpoints.push(new PMPoint(-1.44997, -0.706943, 0));
   allpoints.push(new PMPoint(0.59391, -1.63861, 0));
   allpoints.push(new PMPoint(0.996936, -1.27572, 0));
   allpoints.push(new PMPoint(-0.627303, -1.05314, 0));
   allpoints.push(new PMPoint(-0.570614, -1.59249, 0));
   allpoints.push(new PMPoint(-0.0401398, -1.70525, 0));
   allpoints.push(new PMPoint(1.29708, -1.16789, 0));
   allpoints.push(new PMPoint(1.8394, -1.16789, 0));
   allpoints.push(new PMPoint(2.00699, -0.652111, 0));
   allpoints.push(new PMPoint(2.36988, 1.05514, 0));
   allpoints.push(new PMPoint(2.09871, 1.52481, 0));
   allpoints.push(new PMPoint(1.56824, 1.41205, 0));
   allpoints.push(new PMPoint(-0.653116, 2.38144, 0));
   allpoints.push(new PMPoint(-1.14855, 2.16085, 0));
   allpoints.push(new PMPoint(-1.09187, 1.6215, 0));
   allpoints.push(new PMPoint(0.450602, 2.17692, 0));
   allpoints.push(new PMPoint(-0.019066, 2.44808, 0));
   allpoints.push(new PMPoint(-2.25161, 0.0148549, 0));
   allpoints.push(new PMPoint(-2.19492, -0.5245, 0));
   allpoints.push(new PMPoint(-1.66445, -0.637256, 0));
   allpoints.push(new PMPoint(0.0634352, -1.75136, 0));
   allpoints.push(new PMPoint(0.956797, -2.04163, 0));
   allpoints.push(new PMPoint(1.35982, -1.67875, 0));
   allpoints.push(new PMPoint(-0.403027, -2.10828, 0));
   allpoints.push(new PMPoint(2.36988, -1.05514, 0));
   allpoints.push(new PMPoint(2.83954, 1.3263, 0));
   allpoints.push(new PMPoint(2.56838, 1.79597, 0));
   allpoints.push(new PMPoint(-0.122641, 2.49419, 0));
   allpoints.push(new PMPoint(-1.09187, 2.70021, 0));
   allpoints.push(new PMPoint(-2.69036, -0.303916, 0));
   allpoints.push(new PMPoint(0.00674671, -2.29072, 0));
   allpoints.push(new PMPoint(0.502186, -2.5113, 0));
   allpoints.push(new PMPoint(0.865073, -2.10828, 0));
   allpoints.push(new PMPoint(1.31968, -2.44466, 0));
   allpoints.push(new PMPoint(1.72271, -2.08177, 0));
   allpoints.push(new PMPoint(3.37002, 1.43906, 0));
   allpoints.push(new PMPoint(3.42671, 1.97841, 0));
   allpoints.push(new PMPoint(2.93127, 2.19899, 0));
   allpoints.push(new PMPoint(1.03266, -2.62406, 0));

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
   allpoints[74].makesphere(0.02,points_material);
   allpoints[75].makesphere(0.02,points_material);
   allpoints[76].makesphere(0.02,points_material);
   allpoints[77].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[74].vector);
   faces.vertices.push(allpoints[75].vector);
   faces.vertices.push(allpoints[76].vector);
   faces.vertices.push(allpoints[77].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 5, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 51, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 52, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 6, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 28, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 59, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 71, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 47, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 55, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 66, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 40, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 64, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 60, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 46, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 70, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 32, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 64, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 56, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 51, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 38, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 27, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 31, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));


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
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
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
