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

   var axes = [[111,97],
      [110,109],
      [86,102],
      [101,100],
      [100,71],
      [67,97],
      [94,93],
      [62,94],
      [90,89],
      [88,87],
      [86,59],
      [81,71],
      [39,81],
      [67,80],
      [78,77],
      [62,76],
      [76,28],
      [75,60],
      [27,75],
      [74,59],
      [25,74],
      [73,72],
      [72,24],
      [39,71],
      [67,66],
      [50,64],
      [62,28],
      [27,60],
      [25,59],
      [56,24],
      [39,55],
      [55,12],
      [54,53],
      [52,51],
      [11,52],
      [50,49],
      [44,28],
      [8,44],
      [27,43],
      [25,41],
      [41,6],
      [40,24],
      [39,12],
      [36,35],
      [11,36],
      [34,33],
      [33,0],
      [32,31],
      [8,28],
      [27,26],
      [25,6],
      [0,24],
      [22,12],
      [23,22],
      [11,21],
      [21,0],
      [10,20],
      [18,17],
      [8,16],
      [16,15],
      [14,6],
      [0,14],
      [13,12],
      [11,0],
      [10,9],
      [7,2],
      [8,7],
      [0,6],
      [5,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.80019059273487,
      2.82127811781222,
      2.80767600514749,
      2.81220103835114,
      2.79590505971916,
      2.79880239183631,
      2.81816024517101,
      2.80794347021035,
      2.8120657485847,
      2.81578676534309,
      2.81069674658737,
      2.79317434637608,
      2.79317434637608,
      2.7980174961163,
      2.81578676534309,
      2.80871915703927,
      2.80767600514749,
      2.7980174961163,
      2.80019059273487,
      2.81303849271716,
      2.81303849271716,
      2.80679931283349,
      2.80871915703927,
      2.79086369950562,
      2.79590505971916,
      2.82127811781222,
      2.81069674658737,
      2.79880239183631,
      2.81485346541789,
      2.80794347021035,
      2.78995622358571,
      2.78995622358571,
      2.81656218128772,
      2.79446382385753,
      2.79317434637608,
      2.82127811781222,
      2.81180144039733,
      2.81303849271716,
      2.80019059273487,
      2.81552859573866,
      2.81552859573866,
      2.80871915703927,
      2.79086369950562,
      2.81206574858469,
      2.79590505971916,
      2.81578676534309,
      2.80366936866243,
      2.81206574858469,
      2.81069674658737,
      2.80366936866243,
      2.81485346541789,
      2.81069674658737,
      2.79317434637608,
      2.79446382385753,
      2.7980174961163,
      2.80019059273487,
      2.81656218128772,
      2.82127811781222,
      2.80871915703927,
      2.80679931283349,
      2.81303849271716,
      2.81180144039733,
      2.79590505971916,
      2.79880239183631,
      2.81854078924059,
      2.81816024517101,
      2.80794347021035,
      2.81069674658737,
      2.79951493092824,
      2.80019059273487,
      2.8159256746305,
      2.80679931283349,
      2.80767600514749,
      2.80366936866243];

   var subtrees = [[120,121],
      [118,119],
      [116,117],
      [114,115],
      [112,113],
      [111,120,121],
      [109,110,118,119],
      [107,108],
      [105,106],
      [103,104],
      [102,116,117],
      [100,101,112,113,114,115],
      [98,99],
      [97,111,120,121],
      [95,96],
      [93,94,107,108,109,110,118,119],
      [91,92],
      [89,90,105,106],
      [87,88,103,104],
      [86,102,116,117],
      [85],
      [83,84],
      [82],
      [81,98,99,100,101,112,113,114,115],
      [79,80,97,111,120,121],
      [77,78,95,96],
      [76,91,92,93,94,107,108,109,110,118,119],
      [75,87,88,89,90,103,104,105,106],
      [74,85,86,102,116,117],
      [72,73,82,83,84],
      [71,81,98,99,100,101,112,113,114,115],
      [70],
      [68,69],
      [66,67,79,80,97,111,120,121],
      [65],
      [63,64,77,78,95,96],
      [62,76,91,92,93,94,107,108,109,110,118,119],
      [61],
      [60,75,87,88,89,90,103,104,105,106],
      [59,74,85,86,102,116,117],
      [58],
      [56,57,72,73,82,83,84],
      [55,70,71,81,98,99,100,101,112,113,114,115],
      [53,54,68,69],
      [51,52,65,66,67,79,80,97,111,120,121],
      [49,50,63,64,77,78,95,96],
      [47,48],
      [45,46],
      [44,61,62,76,91,92,93,94,107,108,109,110,118,119],
      [42,43,60,75,87,88,89,90,103,104,105,106],
      [41,58,59,74,85,86,102,116,117],
      [40,56,57,72,73,82,83,84],
      [39,55,70,71,81,98,99,100,101,112,113,114,115],
      [37,38],
      [35,36,51,52,53,54,65,66,67,68,69,79,80,97,111,120,121],
      [33,34,47,48,49,50,63,64,77,78,95,96],
      [31,32,45,46],
      [29,30],
      [28,44,61,62,76,91,92,93,94,107,108,109,110,118,119],
      [26,27,42,43,60,75,87,88,89,90,103,104,105,106],
      [25,41,58,59,74,85,86,102,116,117],
      [24,40,56,57,72,73,82,83,84],
      [22,23,37,38,39,55,70,71,81,98,99,100,101,112,113,114,115],
      [21,33,34,35,36,47,48,49,50,51,52,53,54,63,64,65,66,67,68,69,77,78,79,80,95,96,97,111,120,121],
      [19,20,31,32,45,46],
      [17,18,29,30],
      [15,16,26,27,28,42,43,44,60,61,62,75,76,87,88,89,90,91,92,93,94,103,104,105,106,107,108,109,110,118,119],
      [14,24,25,40,41,56,57,58,59,72,73,74,82,83,84,85,86,102,116,117],
      [12,13,22,23,37,38,39,55,70,71,81,98,99,100,101,112,113,114,115],
      [11,21,33,34,35,36,47,48,49,50,51,52,53,54,63,64,65,66,67,68,69,77,78,79,80,95,96,97,111,120,121],
      [9,10,19,20,31,32,45,46],
      [7,8,15,16,17,18,26,27,28,29,30,42,43,44,60,61,62,75,76,87,88,89,90,91,92,93,94,103,104,105,106,107,108,109,110,118,119],
      [6,14,24,25,40,41,56,57,58,59,72,73,74,82,83,84,85,86,102,116,117],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,38,39,47,48,49,50,51,52,53,54,55,63,64,65,66,67,68,69,70,71,77,78,79,80,81,95,96,97,98,99,100,101,111,112,113,114,115,120,121]];

   var polytoperoot = [[0,-0.966113083813104,-0.597090722772472],
      [-0.212377584261369,-1.02632683063145,-0.0141556723897379],
      [-0.513936907143444,0.106328623234435,0.00146654370833557]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.500706, 0, 0));
   allpoints.push(new PMPoint(0.678702, 0.304429, 0));
   allpoints.push(new PMPoint(0.596163, 0.352212, 0));
   allpoints.push(new PMPoint(0.59649, -0.357152, 0));
   allpoints.push(new PMPoint(0.680848, -0.307604, 0));
   allpoints.push(new PMPoint(0.575059, 1.02875, 0));
   allpoints.push(new PMPoint(0.852185, 0.607982, 0));
   allpoints.push(new PMPoint(0.608185, 1.02897, 0));
   allpoints.push(new PMPoint(0.695311, -0.298664, 0));
   allpoints.push(new PMPoint(1.11932, 0.0207682, 0));
   allpoints.push(new PMPoint(0.573597, -1.07975, 0));
   allpoints.push(new PMPoint(0.610828, -1.07997, 0));
   allpoints.push(new PMPoint(0.86418, -0.619136, 0));
   allpoints.push(new PMPoint(-0.00952845, 0.691138, 0));
   allpoints.push(new PMPoint(1.20181, 0.607618, 0));
   allpoints.push(new PMPoint(1.20138, 0.702989, 0));
   allpoints.push(new PMPoint(1.14737, 0.0700111, 0));
   allpoints.push(new PMPoint(1.20141, 0.591244, 0));
   allpoints.push(new PMPoint(0.925558, -0.57732, 0));
   allpoints.push(new PMPoint(1.2787, -0.490637, 0));
   allpoints.push(new PMPoint(-0.0379781, -0.694201, 0));
   allpoints.push(new PMPoint(1.23138, -0.706594, 0));
   allpoints.push(new PMPoint(1.22761, -0.60718, 0));
   allpoints.push(new PMPoint(-0.603201, 1.0125, 0));
   allpoints.push(new PMPoint(-0.587271, 1.04033, 0));
   allpoints.push(new PMPoint(1.55445, 0.610734, 0));
   allpoints.push(new PMPoint(1.80335, 1.04519, 0));
   allpoints.push(new PMPoint(1.78588, 1.07424, 0));
   allpoints.push(new PMPoint(1.66175, 0.201265, 0));
   allpoints.push(new PMPoint(1.5503, 0.539863, 0));
   allpoints.push(new PMPoint(1.61856, -0.361339, 0));
   allpoints.push(new PMPoint(1.64972, -0.00121104, 0));
   allpoints.push(new PMPoint(-0.280301, -0.414895, 0));
   allpoints.push(new PMPoint(-0.126259, -0.736365, 0));
   allpoints.push(new PMPoint(-0.123971, -0.740854, 0));
   allpoints.push(new PMPoint(0.0481327, -1.05873, 0));
   allpoints.push(new PMPoint(1.87845, -1.03186, 0));
   allpoints.push(new PMPoint(1.5909, -0.591553, 0));
   allpoints.push(new PMPoint(1.86023, -1.06583, 0));
   allpoints.push(new PMPoint(-0.605646, 0.335643, 0));
   allpoints.push(new PMPoint(-0.00270179, 1.37613, 0));
   allpoints.push(new PMPoint(1.73181, 0.301517, 0));
   allpoints.push(new PMPoint(1.81673, 0.350084, 0));
   allpoints.push(new PMPoint(1.17442, 1.39654, 0));
   allpoints.push(new PMPoint(2.04579, -0.667981, 0));
   allpoints.push(new PMPoint(1.7472, -0.00956307, 0));
   allpoints.push(new PMPoint(-0.625589, -0.296821, 0));
   allpoints.push(new PMPoint(-0.632201, -0.391963, 0));
   allpoints.push(new PMPoint(-0.632894, -0.40877, 0));
   allpoints.push(new PMPoint(-0.619511, -0.932626, 0));
   allpoints.push(new PMPoint(-0.149783, -1.36377, 0));
   allpoints.push(new PMPoint(-0.0665995, -1.41834, 0));
   allpoints.push(new PMPoint(-0.578987, -1.01431, 0));
   allpoints.push(new PMPoint(-0.164537, -1.35368, 0));
   allpoints.push(new PMPoint(1.23969, -1.44116, 0));
   allpoints.push(new PMPoint(-0.856143, 0.596827, 0));
   allpoints.push(new PMPoint(-0.689187, 0.289636, 0));
   allpoints.push(new PMPoint(0.0197396, 2.04991, 0));
   allpoints.push(new PMPoint(-0.0117102, 2.05022, 0));
   allpoints.push(new PMPoint(2.45511, 0.0107496, 0));
   allpoints.push(new PMPoint(1.12562, 2.06984, 0));
   allpoints.push(new PMPoint(1.15764, 2.0714, 0));
   allpoints.push(new PMPoint(-0.981378, -0.437044, 0));
   allpoints.push(new PMPoint(-1.11442, -0.760372, 0));
   allpoints.push(new PMPoint(-0.0837117, -2.14236, 0));
   allpoints.push(new PMPoint(-0.350771, -1.6668, 0));
   allpoints.push(new PMPoint(-0.122218, -2.14042, 0));
   allpoints.push(new PMPoint(-0.757318, -1.51432, 0));
   allpoints.push(new PMPoint(-0.411743, -1.62035, 0));
   allpoints.push(new PMPoint(1.22818, -2.16628, 0));
   allpoints.push(new PMPoint(1.26761, -2.16583, 0));
   allpoints.push(new PMPoint(-1.20323, 0.699276, 0));
   allpoints.push(new PMPoint(-1.2057, 0.603936, 0));
   allpoints.push(new PMPoint(-0.597855, 1.71532, 0));
   allpoints.push(new PMPoint(2.42458, 0.733064, 0));
   allpoints.push(new PMPoint(1.76182, 1.76625, 0));
   allpoints.push(new PMPoint(-1.21594, -1.09809, 0));
   allpoints.push(new PMPoint(-0.956641, -1.3427, 0));
   allpoints.push(new PMPoint(-0.71089, -1.63553, 0));
   allpoints.push(new PMPoint(-0.719435, -1.73299, 0));
   allpoints.push(new PMPoint(1.88643, -1.78958, 0));
   allpoints.push(new PMPoint(-1.77966, 1.08293, 0));
   allpoints.push(new PMPoint(-1.79774, 1.05427, 0));
   allpoints.push(new PMPoint(-1.55819, 0.614588, 0));
   allpoints.push(new PMPoint(-1.20634, 2.04322, 0));
   allpoints.push(new PMPoint(-1.19008, 2.07174, 0));
   allpoints.push(new PMPoint(2.50505, 0.788706, 0));
   allpoints.push(new PMPoint(2.30268, 1.08217, 0));
   allpoints.push(new PMPoint(2.69807, 0.477142, 0));
   allpoints.push(new PMPoint(2.50781, 0.784489, 0));
   allpoints.push(new PMPoint(2.02544, 1.51392, 0));
   allpoints.push(new PMPoint(1.84327, 1.81587, 0));
   allpoints.push(new PMPoint(1.84074, 1.8198, 0));
   allpoints.push(new PMPoint(1.64285, 2.10803, 0));
   allpoints.push(new PMPoint(-1.69649, -1.23875, 0));
   allpoints.push(new PMPoint(-1.02368, -1.41395, 0));
   allpoints.push(new PMPoint(-1.34108, -2.0443, 0));
   allpoints.push(new PMPoint(1.97523, -1.83441, 0));
   allpoints.push(new PMPoint(2.14075, -1.51064, 0));
   allpoints.push(new PMPoint(1.79339, -2.15541, 0));
   allpoints.push(new PMPoint(1.97272, -1.83908, 0));
   allpoints.push(new PMPoint(-0.585489, 2.40928, 0));
   allpoints.push(new PMPoint(2.92054, 1.11914, 0));
   allpoints.push(new PMPoint(2.47264, 1.39116, 0));
   allpoints.push(new PMPoint(3.05972, 0.515058, 0));
   allpoints.push(new PMPoint(2.97127, 1.04337, 0));
   allpoints.push(new PMPoint(1.79523, 2.4227, 0));
   allpoints.push(new PMPoint(1.70916, 2.46379, 0));
   allpoints.push(new PMPoint(2.25566, 2.13988, 0));
   allpoints.push(new PMPoint(1.8098, 2.41522, 0));
   allpoints.push(new PMPoint(-0.775919, -2.4492, 0));
   allpoints.push(new PMPoint(1.90114, -2.51413, 0));
   allpoints.push(new PMPoint(1.98419, -2.46242, 0));
   allpoints.push(new PMPoint(1.99905, -2.45268, 0));
   allpoints.push(new PMPoint(2.42163, -2.13135, 0));
   allpoints.push(new PMPoint(-0.585183, 2.50465, 0));
   allpoints.push(new PMPoint(-0.93783, 2.50426, 0));
   allpoints.push(new PMPoint(2.36117, 2.66015, 0));
   allpoints.push(new PMPoint(2.0078, 2.70704, 0));
   allpoints.push(new PMPoint(-1.14167, -2.50358, 0));
   allpoints.push(new PMPoint(-0.787771, -2.54632, 0));

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
   allpoints[118].makesphere(0.02,points_material);
   allpoints[119].makesphere(0.02,points_material);
   allpoints[120].makesphere(0.02,points_material);
   allpoints[121].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[118].vector);
   faces.vertices.push(allpoints[119].vector);
   faces.vertices.push(allpoints[120].vector);
   faces.vertices.push(allpoints[121].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(0, 3, 6, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(4, 0, 11, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(11, 0, 21, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(8, 7, 15, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(8, 15, 16, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 14, 24, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(5, 4, 12, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(5, 12, 13, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(0, 24, 40, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(23, 13, 12, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(23, 12, 22, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(21, 0, 33, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(21, 33, 34, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(16, 15, 26, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(16, 26, 27, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(14, 6, 25, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(0, 47, 48, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(0, 48, 33, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(26, 42, 43, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(26, 43, 27, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(25, 6, 41, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(23, 22, 37, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(23, 37, 38, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(8, 16, 28, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(11, 21, 35, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(11, 35, 36, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(32, 31, 45, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(32, 45, 46, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(8, 28, 44, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(11, 36, 51, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(11, 51, 52, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(41, 6, 58, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(22, 12, 39, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(40, 24, 56, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(40, 56, 57, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(8, 44, 61, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(39, 12, 55, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(56, 24, 72, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(56, 72, 73, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(11, 52, 65, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(25, 41, 59, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(43, 60, 27, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(55, 12, 70, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(25, 59, 74, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(27, 60, 75, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(72, 24, 82, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(52, 51, 66, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(52, 66, 67, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(44, 28, 62, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(25, 74, 85, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(66, 79, 80, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(66, 80, 67, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(62, 28, 76, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(73, 72, 83, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(73, 83, 84, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(27, 75, 87, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(27, 87, 88, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(39, 55, 71, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(77, 95, 96, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(77, 96, 78, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(76, 28, 91, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(76, 91, 92, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(39, 71, 81, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(75, 60, 89, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(75, 89, 90, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(74, 59, 86, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(39, 81, 98, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(39, 98, 99, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(86, 59, 102, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(62, 76, 93, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(62, 93, 94, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(67, 80, 97, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(62, 94, 107, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(62, 107, 108, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(67, 97, 111, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(81, 71, 100, undefined, undefined, 56));
   faces.faces.push(new THREE.Face3(81, 100, 101, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(100, 71, 112, undefined, undefined, 57));
   faces.faces.push(new THREE.Face3(100, 112, 113, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(102, 116, 117, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(102, 117, 86, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(121, 111, 97, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(121, 97, 120, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 18, 7, undefined, undefined, 61));

   faces.faces.push(new THREE.Face3(18, 17, 29, undefined, undefined, 62));
   faces.faces.push(new THREE.Face3(18, 29, 30, undefined, undefined, 62));

   faces.faces.push(new THREE.Face3(10, 20, 31, undefined, undefined, 63));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 63));

   faces.faces.push(new THREE.Face3(10, 9, 19, undefined, undefined, 64));
   faces.faces.push(new THREE.Face3(10, 19, 20, undefined, undefined, 64));

   faces.faces.push(new THREE.Face3(94, 93, 109, undefined, undefined, 65));
   faces.faces.push(new THREE.Face3(94, 109, 110, undefined, undefined, 65));

   faces.faces.push(new THREE.Face3(110, 109, 118, undefined, undefined, 66));
   faces.faces.push(new THREE.Face3(110, 118, 119, undefined, undefined, 66));

   faces.faces.push(new THREE.Face3(101, 100, 114, undefined, undefined, 67));
   faces.faces.push(new THREE.Face3(101, 114, 115, undefined, undefined, 67));

   faces.faces.push(new THREE.Face3(90, 89, 105, undefined, undefined, 68));
   faces.faces.push(new THREE.Face3(90, 105, 106, undefined, undefined, 68));

   faces.faces.push(new THREE.Face3(88, 87, 103, undefined, undefined, 69));
   faces.faces.push(new THREE.Face3(88, 103, 104, undefined, undefined, 69));

   faces.faces.push(new THREE.Face3(34, 33, 49, undefined, undefined, 70));
   faces.faces.push(new THREE.Face3(34, 49, 50, undefined, undefined, 70));

   faces.faces.push(new THREE.Face3(36, 35, 53, undefined, undefined, 71));
   faces.faces.push(new THREE.Face3(36, 53, 54, undefined, undefined, 71));

   faces.faces.push(new THREE.Face3(54, 53, 68, undefined, undefined, 72));
   faces.faces.push(new THREE.Face3(54, 68, 69, undefined, undefined, 72));

   faces.faces.push(new THREE.Face3(50, 64, 77, undefined, undefined, 73));
   faces.faces.push(new THREE.Face3(50, 77, 78, undefined, undefined, 73));

   faces.faces.push(new THREE.Face3(49, 63, 64, undefined, undefined, 74));
   faces.faces.push(new THREE.Face3(49, 64, 50, undefined, undefined, 74));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[100].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[110].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[101].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
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
