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

   var axes = [[89,88],
      [79,78],
      [69,68],
      [59,58],
      [60,59],
      [58,57],
      [49,48],
      [42,41],
      [43,42],
      [41,40],
      [33,32],
      [32,31],
      [31,30],
      [24,23],
      [23,22],
      [22,21],
      [12,11],
      [13,12],
      [14,13],
      [15,14],
      [16,15],
      [8,7],
      [6,5],
      [7,6],
      [5,4],
      [9,8],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380544,
      2.48923451380544,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.03444393579571,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380545,
      2.03444393579569,
      2.48923451380545,
      2.48923451380544,
      2.0344439357957,
      2.48923451380542,
      2.0344439357957,
      2.48923451380541,
      2.48923451380541,
      2.48923451380541,
      2.03444393579568,
      2.03444393579569,
      2.03444393579569,
      2.48923451380544,
      2.48923451380543,
      2.4892345138054,
      2.48923451380542,
      2.48923451380547];

   var subtrees = [[117],
      [116],
      [115],
      [107,108,109,110,111,112,113,114],
      [106],
      [105],
      [104],
      [96,97,98,99,100,101,102,103],
      [95],
      [94],
      [93],
      [85,86,87,88,89,90,91,92,117],
      [84],
      [83],
      [75,76,77,78,79,80,81,82,116],
      [74],
      [73],
      [65,66,67,68,69,70,71,72,115],
      [64],
      [56,57,58,59,60,61,62,63,105,106,107,108,109,110,111,112,113,114],
      [55],
      [54],
      [53],
      [45,46,47,48,49,50,51,52,104],
      [37,38,39,40,41,42,43,44,94,95,96,97,98,99,100,101,102,103],
      [29,30,31,32,33,34,35,36,84,85,86,87,88,89,90,91,92,93,117],
      [28],
      [27],
      [19,20,21,22,23,24,25,26,74,75,76,77,78,79,80,81,82,83,116],
      [11,12,13,14,15,16,17,18,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,105,106,107,108,109,110,111,112,113,114,115],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,117]];

   var polytoperoot = [[0.88165648736982,-0.168381405886714,-0.44082824368491],
      [2.61803398874967,-1.55181715115469e-14,-1],
      [0.336762811773429,0,0.881656487369743]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.336763, 0, 0));
   allpoints.push(new PMPoint(0.168381, 0.291645, 0));
   allpoints.push(new PMPoint(-0.272447, -0.197944, 0));
   allpoints.push(new PMPoint(-0.376512, -0.518225, 0));
   allpoints.push(new PMPoint(-0.272447, -0.838505, 0));
   allpoints.push(new PMPoint(0, -1.03645, 0));
   allpoints.push(new PMPoint(0.336763, -1.03645, 0));
   allpoints.push(new PMPoint(0.60921, -0.838505, 0));
   allpoints.push(new PMPoint(0.713275, -0.518225, 0));
   allpoints.push(new PMPoint(0.60921, -0.197944, 0));
   allpoints.push(new PMPoint(0.13318, 0.626563, 0));
   allpoints.push(new PMPoint(-0.0921582, 0.876827, 0));
   allpoints.push(new PMPoint(-0.421562, 0.946844, 0));
   allpoints.push(new PMPoint(-0.72921, 0.80987, 0));
   allpoints.push(new PMPoint(-0.897591, 0.518225, 0));
   allpoints.push(new PMPoint(-0.86239, 0.183307, 0));
   allpoints.push(new PMPoint(-0.637052, -0.0669568, 0));
   allpoints.push(new PMPoint(-0.307648, -0.136974, 0));
   allpoints.push(new PMPoint(0.644411, -0.136974, 0));
   allpoints.push(new PMPoint(0.973815, -0.0669568, 0));
   allpoints.push(new PMPoint(1.19915, 0.183307, 0));
   allpoints.push(new PMPoint(1.23435, 0.518225, 0));
   allpoints.push(new PMPoint(1.06597, 0.80987, 0));
   allpoints.push(new PMPoint(0.758325, 0.946844, 0));
   allpoints.push(new PMPoint(0.428921, 0.876827, 0));
   allpoints.push(new PMPoint(0.203583, 0.626563, 0));
   allpoints.push(new PMPoint(0.938613, -0.267961, 0));
   allpoints.push(new PMPoint(-0.601851, -0.267961, 0));
   allpoints.push(new PMPoint(0.713275, -1.15879, 0));
   allpoints.push(new PMPoint(0.985722, -1.35673, 0));
   allpoints.push(new PMPoint(1.32248, -1.35673, 0));
   allpoints.push(new PMPoint(1.59493, -1.15879, 0));
   allpoints.push(new PMPoint(1.699, -0.838505, 0));
   allpoints.push(new PMPoint(1.59493, -0.518225, 0));
   allpoints.push(new PMPoint(1.32248, -0.32028, 0));
   allpoints.push(new PMPoint(0.985722, -0.32028, 0));
   allpoints.push(new PMPoint(-0.648959, -0.32028, 0));
   allpoints.push(new PMPoint(-0.985722, -0.32028, 0));
   allpoints.push(new PMPoint(-1.25817, -0.518225, 0));
   allpoints.push(new PMPoint(-1.36223, -0.838505, 0));
   allpoints.push(new PMPoint(-1.25817, -1.15879, 0));
   allpoints.push(new PMPoint(-0.985722, -1.35673, 0));
   allpoints.push(new PMPoint(-0.648959, -1.35673, 0));
   allpoints.push(new PMPoint(-0.376512, -1.15879, 0));
   allpoints.push(new PMPoint(-0.272447, -1.23439, 0));
   allpoints.push(new PMPoint(-0.376512, -1.55467, 0));
   allpoints.push(new PMPoint(-0.272447, -1.87495, 0));
   allpoints.push(new PMPoint(0, -2.0729, 0));
   allpoints.push(new PMPoint(0.336763, -2.0729, 0));
   allpoints.push(new PMPoint(0.60921, -1.87495, 0));
   allpoints.push(new PMPoint(0.713275, -1.55467, 0));
   allpoints.push(new PMPoint(0.60921, -1.23439, 0));
   allpoints.push(new PMPoint(-0.307648, -1.17342, 0));
   allpoints.push(new PMPoint(0.644411, -1.17342, 0));
   allpoints.push(new PMPoint(-1.17004, 0.32028, 0));
   allpoints.push(new PMPoint(-0.764411, 1.14479, 0));
   allpoints.push(new PMPoint(-0.98975, 1.39505, 0));
   allpoints.push(new PMPoint(-1.31915, 1.46507, 0));
   allpoints.push(new PMPoint(-1.6268, 1.32809, 0));
   allpoints.push(new PMPoint(-1.79518, 1.03645, 0));
   allpoints.push(new PMPoint(-1.75998, 0.701531, 0));
   allpoints.push(new PMPoint(-1.53464, 0.451268, 0));
   allpoints.push(new PMPoint(-1.20524, 0.381251, 0));
   allpoints.push(new PMPoint(-0.694009, 1.14479, 0));
   allpoints.push(new PMPoint(0.21549, 1.0138, 0));
   allpoints.push(new PMPoint(0.383871, 1.30545, 0));
   allpoints.push(new PMPoint(0.34867, 1.64036, 0));
   allpoints.push(new PMPoint(0.123332, 1.89063, 0));
   allpoints.push(new PMPoint(-0.206072, 1.96064, 0));
   allpoints.push(new PMPoint(-0.51372, 1.82367, 0));
   allpoints.push(new PMPoint(-0.682102, 1.53203, 0));
   allpoints.push(new PMPoint(-0.6469, 1.19711, 0));
   allpoints.push(new PMPoint(0.237246, 0.946844, 0));
   allpoints.push(new PMPoint(1.5068, 0.32028, 0));
   allpoints.push(new PMPoint(1.542, 0.381251, 0));
   allpoints.push(new PMPoint(1.87141, 0.451268, 0));
   allpoints.push(new PMPoint(2.09674, 0.701531, 0));
   allpoints.push(new PMPoint(2.13195, 1.03645, 0));
   allpoints.push(new PMPoint(1.96356, 1.32809, 0));
   allpoints.push(new PMPoint(1.65592, 1.46507, 0));
   allpoints.push(new PMPoint(1.32651, 1.39505, 0));
   allpoints.push(new PMPoint(1.10117, 1.14479, 0));
   allpoints.push(new PMPoint(1.03077, 1.14479, 0));
   allpoints.push(new PMPoint(1.1541, -1.64837, 0));
   allpoints.push(new PMPoint(1.21842, -1.67701, 0));
   allpoints.push(new PMPoint(1.32248, -1.99729, 0));
   allpoints.push(new PMPoint(1.59493, -2.19523, 0));
   allpoints.push(new PMPoint(1.93169, -2.19523, 0));
   allpoints.push(new PMPoint(2.20414, -1.99729, 0));
   allpoints.push(new PMPoint(2.30821, -1.67701, 0));
   allpoints.push(new PMPoint(2.20414, -1.35673, 0));
   allpoints.push(new PMPoint(1.93169, -1.15879, 0));
   allpoints.push(new PMPoint(1.92434, -1.08877, 0));
   allpoints.push(new PMPoint(-1.58757, -1.08877, 0));
   allpoints.push(new PMPoint(-0.817341, -1.64837, 0));
   allpoints.push(new PMPoint(-1.59493, -1.15879, 0));
   allpoints.push(new PMPoint(-1.86738, -1.35673, 0));
   allpoints.push(new PMPoint(-1.97144, -1.67701, 0));
   allpoints.push(new PMPoint(-1.86738, -1.99729, 0));
   allpoints.push(new PMPoint(-1.59493, -2.19523, 0));
   allpoints.push(new PMPoint(-1.25817, -2.19523, 0));
   allpoints.push(new PMPoint(-0.985722, -1.99729, 0));
   allpoints.push(new PMPoint(-0.881656, -1.67701, 0));
   allpoints.push(new PMPoint(0.168381, -2.36454, 0));
   allpoints.push(new PMPoint(-1.09382, 1.71533, 0));
   allpoints.push(new PMPoint(-1.96356, 1.32809, 0));
   allpoints.push(new PMPoint(-1.15077, 1.75671, 0));
   allpoints.push(new PMPoint(-1.18597, 2.09163, 0));
   allpoints.push(new PMPoint(-1.41131, 2.34189, 0));
   allpoints.push(new PMPoint(-1.74072, 2.41191, 0));
   allpoints.push(new PMPoint(-2.04836, 2.27494, 0));
   allpoints.push(new PMPoint(-2.21674, 1.98329, 0));
   allpoints.push(new PMPoint(-2.18154, 1.64837, 0));
   allpoints.push(new PMPoint(-1.95621, 1.39811, 0));
   allpoints.push(new PMPoint(0.0192663, 2.21091, 0));
   allpoints.push(new PMPoint(2.30033, 1.32809, 0));
   allpoints.push(new PMPoint(2.23934, -2.33221, 0));

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
   allpoints[78].makesphere(0.02,points_material);
   allpoints[79].makesphere(0.02,points_material);
   allpoints[80].makesphere(0.02,points_material);
   allpoints[81].makesphere(0.02,points_material);
   allpoints[82].makesphere(0.02,points_material);
   allpoints[83].makesphere(0.02,points_material);
   allpoints[84].makesphere(0.02,points_material);
   allpoints[85].makesphere(0.02,points_material);
   allpoints[86].makesphere(0.02,points_material);
   allpoints[87].makesphere(0.02,points_material);
   allpoints[88].makesphere(0.02,points_material);
   allpoints[89].makesphere(0.02,points_material);
   allpoints[90].makesphere(0.02,points_material);
   allpoints[91].makesphere(0.02,points_material);
   allpoints[92].makesphere(0.02,points_material);
   allpoints[93].makesphere(0.02,points_material);
   allpoints[94].makesphere(0.02,points_material);
   allpoints[95].makesphere(0.02,points_material);
   allpoints[96].makesphere(0.02,points_material);
   allpoints[97].makesphere(0.02,points_material);
   allpoints[98].makesphere(0.02,points_material);
   allpoints[99].makesphere(0.02,points_material);
   allpoints[100].makesphere(0.02,points_material);
   allpoints[101].makesphere(0.02,points_material);
   allpoints[102].makesphere(0.02,points_material);
   allpoints[103].makesphere(0.02,points_material);
   allpoints[104].makesphere(0.02,points_material);
   allpoints[105].makesphere(0.02,points_material);
   allpoints[106].makesphere(0.02,points_material);
   allpoints[107].makesphere(0.02,points_material);
   allpoints[108].makesphere(0.02,points_material);
   allpoints[109].makesphere(0.02,points_material);
   allpoints[110].makesphere(0.02,points_material);
   allpoints[111].makesphere(0.02,points_material);
   allpoints[112].makesphere(0.02,points_material);
   allpoints[113].makesphere(0.02,points_material);
   allpoints[114].makesphere(0.02,points_material);
   allpoints[115].makesphere(0.02,points_material);
   allpoints[116].makesphere(0.02,points_material);
   allpoints[117].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[78].vector);
   faces.vertices.push(allpoints[79].vector);
   faces.vertices.push(allpoints[80].vector);
   faces.vertices.push(allpoints[81].vector);
   faces.vertices.push(allpoints[82].vector);
   faces.vertices.push(allpoints[83].vector);
   faces.vertices.push(allpoints[84].vector);
   faces.vertices.push(allpoints[85].vector);
   faces.vertices.push(allpoints[86].vector);
   faces.vertices.push(allpoints[87].vector);
   faces.vertices.push(allpoints[88].vector);
   faces.vertices.push(allpoints[89].vector);
   faces.vertices.push(allpoints[90].vector);
   faces.vertices.push(allpoints[91].vector);
   faces.vertices.push(allpoints[92].vector);
   faces.vertices.push(allpoints[93].vector);
   faces.vertices.push(allpoints[94].vector);
   faces.vertices.push(allpoints[95].vector);
   faces.vertices.push(allpoints[96].vector);
   faces.vertices.push(allpoints[97].vector);
   faces.vertices.push(allpoints[98].vector);
   faces.vertices.push(allpoints[99].vector);
   faces.vertices.push(allpoints[100].vector);
   faces.vertices.push(allpoints[101].vector);
   faces.vertices.push(allpoints[102].vector);
   faces.vertices.push(allpoints[103].vector);
   faces.vertices.push(allpoints[104].vector);
   faces.vertices.push(allpoints[105].vector);
   faces.vertices.push(allpoints[106].vector);
   faces.vertices.push(allpoints[107].vector);
   faces.vertices.push(allpoints[108].vector);
   faces.vertices.push(allpoints[109].vector);
   faces.vertices.push(allpoints[110].vector);
   faces.vertices.push(allpoints[111].vector);
   faces.vertices.push(allpoints[112].vector);
   faces.vertices.push(allpoints[113].vector);
   faces.vertices.push(allpoints[114].vector);
   faces.vertices.push(allpoints[115].vector);
   faces.vertices.push(allpoints[116].vector);
   faces.vertices.push(allpoints[117].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 0, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 10, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 28, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 36, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 9, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 8, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 44, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 5, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 115, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 105, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 94, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(89, 88, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 97, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 98, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 99, 100, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 100, 101, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 101, 102, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 102, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 103, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 42, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 59, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(79, 78, 116, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 86, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 87, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 88, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 89, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 90, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 91, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(109, 110, 111, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 111, 112, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 112, 113, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 113, 114, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 114, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 59, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 58, 107, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(109, 107, 108, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 75, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 77, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 79, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 80, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 81, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 66, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 68, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 72, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 13, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 73, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 25, 26, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[2].vector);
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
