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

   var axes = [[106,96],
      [92,103],
      [102,88],
      [89,102],
      [100,84],
      [85,100],
      [81,98],
      [98,80],
      [97,77],
      [77,96],
      [75,95],
      [93,92],
      [92,91],
      [89,88],
      [86,65],
      [85,84],
      [82,62],
      [81,80],
      [78,77],
      [77,76],
      [75,55],
      [54,73],
      [71,52],
      [52,70],
      [66,48],
      [47,65],
      [63,46],
      [45,62],
      [59,42],
      [56,40],
      [40,55],
      [38,54],
      [54,37],
      [37,53],
      [35,52],
      [52,34],
      [51,35],
      [34,50],
      [48,28],
      [29,48],
      [47,29],
      [30,47],
      [26,46],
      [45,26],
      [27,45],
      [24,44],
      [21,42],
      [42,20],
      [41,22],
      [22,40],
      [40,21],
      [38,37],
      [37,36],
      [35,34],
      [17,35],
      [34,33],
      [31,15],
      [29,28],
      [30,29],
      [26,25],
      [27,26],
      [24,12],
      [23,11],
      [21,20],
      [10,22],
      [22,21],
      [9,19],
      [18,9],
      [17,8],
      [8,16],
      [7,15],
      [14,7],
      [13,6],
      [6,12],
      [5,11],
      [10,5],
      [9,2],
      [3,9],
      [2,8],
      [8,1],
      [7,3],
      [4,7],
      [0,6],
      [6,4],
      [5,0],
      [1,5],
      [3,2],
      [2,1],
      [4,3],
      [0,4],
      [1,0]];

   var angles = [2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.66913063362575,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.66913063362575,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362575,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.86540068834473,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576,
      2.66913063362576];

   var subtrees = [[115,116,117],
      [114],
      [113],
      [112],
      [111],
      [110],
      [109],
      [108],
      [107],
      [106,115,116,117],
      [105],
      [104],
      [103,114],
      [102,112,113],
      [101],
      [100,110,111],
      [99],
      [98,108,109],
      [97,107],
      [96,106,115,116,117],
      [95,105],
      [94],
      [91,92,93,103,104,114],
      [90],
      [87,88,89,102,112,113],
      [86,101],
      [83,84,85,100,110,111],
      [82,99],
      [79,80,81,98,108,109],
      [76,77,78,96,97,106,107,115,116,117],
      [75,95,105],
      [74],
      [73,94],
      [72],
      [71,91,92,93,103,104,114],
      [70,90],
      [69],
      [68],
      [67],
      [66,87,88,89,102,112,113],
      [65,86,101],
      [64],
      [63,83,84,85,100,110,111],
      [62,82,99],
      [61],
      [60],
      [59,79,80,81,98,108,109],
      [58],
      [57],
      [56,76,77,78,96,97,106,107,115,116,117],
      [55,75,95,105],
      [54,73,74,94],
      [53,72],
      [52,70,71,90,91,92,93,103,104,114],
      [51,69],
      [50,68],
      [49],
      [48,66,67,87,88,89,102,112,113],
      [47,64,65,86,101],
      [46,63,83,84,85,100,110,111],
      [45,61,62,82,99],
      [44,60],
      [43],
      [42,58,59,79,80,81,98,108,109],
      [41,57],
      [40,55,56,75,76,77,78,95,96,97,105,106,107,115,116,117],
      [39],
      [36,37,38,53,54,72,73,74,94],
      [33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [32],
      [31,49],
      [28,29,30,47,48,64,65,66,67,86,87,88,89,101,102,112,113],
      [25,26,27,45,46,61,62,63,82,83,84,85,99,100,110,111],
      [24,44,60],
      [23,43],
      [20,21,22,40,41,42,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117],
      [19,39],
      [18,36,37,38,53,54,72,73,74,94],
      [17,33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [16,32],
      [15,31,49],
      [14,28,29,30,47,48,64,65,66,67,86,87,88,89,101,102,112,113],
      [13,25,26,27,45,46,61,62,63,82,83,84,85,99,100,110,111],
      [12,24,44,60],
      [11,23,43],
      [10,20,21,22,40,41,42,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117],
      [9,18,19,36,37,38,39,53,54,72,73,74,94],
      [8,16,17,32,33,34,35,50,51,52,68,69,70,71,90,91,92,93,103,104,114],
      [7,14,15,28,29,30,31,47,48,49,64,65,66,67,86,87,88,89,101,102,112,113],
      [6,12,13,24,25,26,27,44,45,46,60,61,62,63,82,83,84,85,99,100,110,111],
      [5,10,11,20,21,22,23,40,41,42,43,55,56,57,58,59,75,76,77,78,79,80,81,95,96,97,98,105,106,107,108,109,115,116,117]];

   var polytoperoot = [[-0.809980595541054,0.0894750752440278,0.579590929671123],
      [-0.618033988749895,0,1],
      [0.427318358491737,0.212131774809855,0.264097269564706]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.463857, 0, 0));
   allpoints.push(new PMPoint(0.607197, 0.441154, 0));
   allpoints.push(new PMPoint(0.231928, 0.713802, 0));
   allpoints.push(new PMPoint(-0.14334, 0.441154, 0));
   allpoints.push(new PMPoint(0.231928, -0.401712, 0));
   allpoints.push(new PMPoint(-0.45372, 0.0964413, 0));
   allpoints.push(new PMPoint(-0.191826, 0.90247, 0));
   allpoints.push(new PMPoint(0.917577, 0.0964413, 0));
   allpoints.push(new PMPoint(0.655683, 0.90247, 0));
   allpoints.push(new PMPoint(0.695785, -0.401712, 0));
   allpoints.push(new PMPoint(-0.231928, -0.401712, 0));
   allpoints.push(new PMPoint(-0.59706, 0.537595, 0));
   allpoints.push(new PMPoint(-0.310381, -0.344713, 0));
   allpoints.push(new PMPoint(-0.567094, 0.629822, 0));
   allpoints.push(new PMPoint(0.183442, 1.17512, 0));
   allpoints.push(new PMPoint(0.774238, -0.344713, 0));
   allpoints.push(new PMPoint(1.06092, 0.537595, 0));
   allpoints.push(new PMPoint(0.280415, 1.17512, 0));
   allpoints.push(new PMPoint(1.03095, 0.629822, 0));
   allpoints.push(new PMPoint(0.0885888, -0.842866, 0));
   allpoints.push(new PMPoint(0.463857, -1.11551, 0));
   allpoints.push(new PMPoint(0.839125, -0.842866, 0));
   allpoints.push(new PMPoint(0, -0.803424, 0));
   allpoints.push(new PMPoint(-0.907441, 0.192883, 0));
   allpoints.push(new PMPoint(-0.917577, 0.0964413, 0));
   allpoints.push(new PMPoint(-1.06092, -0.344713, 0));
   allpoints.push(new PMPoint(-0.685649, -0.617361, 0));
   allpoints.push(new PMPoint(-0.335166, 1.34362, 0));
   allpoints.push(new PMPoint(-0.799022, 1.34362, 0));
   allpoints.push(new PMPoint(-0.942362, 0.90247, 0));
   allpoints.push(new PMPoint(-0.240312, 1.36379, 0));
   allpoints.push(new PMPoint(1.22796, -0.248272, 0));
   allpoints.push(new PMPoint(1.29285, -0.176207, 0));
   allpoints.push(new PMPoint(1.66811, 0.0964413, 0));
   allpoints.push(new PMPoint(1.52477, 0.537595, 0));
   allpoints.push(new PMPoint(1.03095, 1.17512, 0));
   allpoints.push(new PMPoint(0.887611, 1.61627, 0));
   allpoints.push(new PMPoint(0.423754, 1.61627, 0));
   allpoints.push(new PMPoint(1.07944, 1.09114, 0));
   allpoints.push(new PMPoint(0.887611, -1.30418, 0));
   allpoints.push(new PMPoint(1.14951, -0.498153, 0));
   allpoints.push(new PMPoint(0.0401025, -1.30418, 0));
   allpoints.push(new PMPoint(-0.463857, -0.803424, 0));
   allpoints.push(new PMPoint(-1.05078, 0.634037, 0));
   allpoints.push(new PMPoint(-1.1094, -0.806029, 0));
   allpoints.push(new PMPoint(-1.3713, 0, 0));
   allpoints.push(new PMPoint(-1.25274, 1.24718, 0));
   allpoints.push(new PMPoint(-0.567094, 1.74534, 0));
   allpoints.push(new PMPoint(0.134956, 1.63643, 0));
   allpoints.push(new PMPoint(1.7166, -0.364875, 0));
   allpoints.push(new PMPoint(1.29285, 0.939307, 0));
   allpoints.push(new PMPoint(1.97849, 0.441154, 0));
   allpoints.push(new PMPoint(1.34133, 1.51983, 0));
   allpoints.push(new PMPoint(0.655683, 2.01798, 0));
   allpoints.push(new PMPoint(0.512343, -1.57683, 0));
   allpoints.push(new PMPoint(1.26288, -1.03153, 0));
   allpoints.push(new PMPoint(1.29285, -0.939307, 0));
   allpoints.push(new PMPoint(-0.335166, -1.03153, 0));
   allpoints.push(new PMPoint(0.415371, -1.57683, 0));
   allpoints.push(new PMPoint(-1.36116, 0.289324, 0));
   allpoints.push(new PMPoint(-0.734135, -1.07868, 0));
   allpoints.push(new PMPoint(-1.48467, -0.53338, 0));
   allpoints.push(new PMPoint(-1.51464, -0.441154, 0));
   allpoints.push(new PMPoint(-1.39608, 0.806029, 0));
   allpoints.push(new PMPoint(-1.1094, 1.68834, 0));
   allpoints.push(new PMPoint(-1.03095, 1.74534, 0));
   allpoints.push(new PMPoint(-0.103237, 1.74534, 0));
   allpoints.push(new PMPoint(2.09187, -0.0922263, 0));
   allpoints.push(new PMPoint(1.7567, 0.939307, 0));
   allpoints.push(new PMPoint(2.12183, 0, 0));
   allpoints.push(new PMPoint(1.83515, 0.882308, 0));
   allpoints.push(new PMPoint(1.19799, 1.96099, 0));
   allpoints.push(new PMPoint(1.11954, 2.01798, 0));
   allpoints.push(new PMPoint(0.191826, 2.01798, 0));
   allpoints.push(new PMPoint(0.936097, -1.7655, 0));
   allpoints.push(new PMPoint(1.03095, -1.74534, 0));
   allpoints.push(new PMPoint(1.49481, -1.74534, 0));
   allpoints.push(new PMPoint(1.63815, -1.30418, 0));
   allpoints.push(new PMPoint(-0.335166, -1.57683, 0));
   allpoints.push(new PMPoint(-0.191826, -2.01798, 0));
   allpoints.push(new PMPoint(0.272031, -2.01798, 0));
   allpoints.push(new PMPoint(-1.53316, -0.994696, 0));
   allpoints.push(new PMPoint(-1.74657, 0.272648, 0));
   allpoints.push(new PMPoint(-2.12183, 0, 0));
   allpoints.push(new PMPoint(-1.97849, -0.441154, 0));
   allpoints.push(new PMPoint(-1.56312, 1.5919, 0));
   allpoints.push(new PMPoint(-0.423754, 2.18649, 0));
   allpoints.push(new PMPoint(-0.799022, 2.45914, 0));
   allpoints.push(new PMPoint(-1.17429, 2.18649, 0));
   allpoints.push(new PMPoint(2.43221, 0.344713, 0));
   allpoints.push(new PMPoint(2.44235, 0.441154, 0));
   allpoints.push(new PMPoint(2.58569, 0.882308, 0));
   allpoints.push(new PMPoint(2.21042, 1.15496, 0));
   allpoints.push(new PMPoint(0.887611, 2.4197, 0));
   allpoints.push(new PMPoint(0.560829, -2.03815, 0));
   allpoints.push(new PMPoint(1.26288, -2.14705, 0));
   allpoints.push(new PMPoint(1.94853, -1.64889, 0));
   allpoints.push(new PMPoint(0.0401025, -2.4197, 0));
   allpoints.push(new PMPoint(-1.90843, -0.722048, 0));
   allpoints.push(new PMPoint(-2.43221, -0.344713, 0));
   allpoints.push(new PMPoint(-1.41978, 2.03305, 0));
   allpoints.push(new PMPoint(-1.22278, 2.64781, 0));
   allpoints.push(new PMPoint(2.89607, 0.537595, 0));
   allpoints.push(new PMPoint(2.63418, 1.34362, 0));
   allpoints.push(new PMPoint(0.984584, -2.22681, 0));
   allpoints.push(new PMPoint(1.72674, -2.14705, 0));
   allpoints.push(new PMPoint(1.80519, -2.09005, 0));
   allpoints.push(new PMPoint(-0.423754, -2.4197, 0));
   allpoints.push(new PMPoint(0.503959, -2.4197, 0));
   allpoints.push(new PMPoint(-2.28888, -0.785867, 0));
   allpoints.push(new PMPoint(-2.57555, 0.0964413, 0));
   allpoints.push(new PMPoint(-1.59804, 2.37516, 0));
   allpoints.push(new PMPoint(-0.847509, 2.92045, 0));
   allpoints.push(new PMPoint(3.03941, 0.978749, 0));
   allpoints.push(new PMPoint(1.11954, -2.5882, 0));
   allpoints.push(new PMPoint(1.49481, -2.86085, 0));
   allpoints.push(new PMPoint(1.87008, -2.5882, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 5, 20, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 20, 21, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 21, 22, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(42, 79, 80, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(42, 80, 81, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(42, 81, 59, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(106, 96, 115, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(106, 115, 116, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(106, 116, 117, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(48, 87, 88, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(48, 88, 89, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(48, 89, 66, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(18, 9, 36, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(18, 37, 38, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(17, 8, 33, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(17, 33, 34, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(17, 34, 35, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(71, 52, 91, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(71, 91, 92, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(71, 92, 93, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(14, 7, 28, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(14, 28, 29, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(14, 29, 30, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(13, 6, 25, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(13, 25, 26, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(13, 26, 27, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(46, 83, 84, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(46, 84, 85, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(46, 85, 63, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(78, 56, 40, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(78, 40, 76, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(78, 76, 77, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(11, 43, 23, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(20, 58, 42, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(10, 1, 5, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(27, 45, 61, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(27, 26, 45, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(21, 42, 59, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(0, 4, 6, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(8, 1, 16, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(40, 21, 55, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(22, 21, 40, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(6, 12, 24, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(45, 26, 62, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(40, 55, 75, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(6, 4, 12, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(26, 25, 46, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(8, 16, 32, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(41, 10, 22, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(4, 3, 7, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(4, 7, 14, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(26, 46, 63, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(24, 44, 60, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(5, 11, 23, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(7, 3, 15, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(0, 11, 5, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(45, 62, 82, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(21, 20, 42, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(0, 6, 13, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(55, 95, 75, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(22, 40, 56, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(41, 22, 57, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(12, 44, 24, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(3, 9, 18, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(30, 47, 64, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(2, 8, 17, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(7, 15, 31, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(34, 33, 50, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(105, 75, 95, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(81, 80, 98, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(34, 50, 68, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(62, 99, 82, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(80, 108, 98, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(9, 2, 19, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(97, 77, 107, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(81, 98, 109, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(17, 35, 51, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(77, 76, 96, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(30, 29, 47, undefined, undefined, 61));

   faces.faces.push(new THREE.Face3(35, 34, 52, undefined, undefined, 62));

   faces.faces.push(new THREE.Face3(47, 65, 86, undefined, undefined, 63));

   faces.faces.push(new THREE.Face3(85, 100, 110, undefined, undefined, 64));

   faces.faces.push(new THREE.Face3(77, 96, 106, undefined, undefined, 65));

   faces.faces.push(new THREE.Face3(47, 29, 65, undefined, undefined, 66));

   faces.faces.push(new THREE.Face3(52, 34, 70, undefined, undefined, 67));

   faces.faces.push(new THREE.Face3(37, 36, 53, undefined, undefined, 68));

   faces.faces.push(new THREE.Face3(9, 19, 39, undefined, undefined, 69));

   faces.faces.push(new THREE.Face3(29, 48, 66, undefined, undefined, 70));

   faces.faces.push(new THREE.Face3(15, 49, 31, undefined, undefined, 71));

   faces.faces.push(new THREE.Face3(35, 52, 71, undefined, undefined, 72));

   faces.faces.push(new THREE.Face3(85, 84, 100, undefined, undefined, 73));

   faces.faces.push(new THREE.Face3(29, 28, 48, undefined, undefined, 74));

   faces.faces.push(new THREE.Face3(51, 35, 69, undefined, undefined, 75));

   faces.faces.push(new THREE.Face3(78, 77, 97, undefined, undefined, 76));

   faces.faces.push(new THREE.Face3(52, 70, 90, undefined, undefined, 77));

   faces.faces.push(new THREE.Face3(28, 67, 48, undefined, undefined, 78));

   faces.faces.push(new THREE.Face3(65, 101, 86, undefined, undefined, 79));

   faces.faces.push(new THREE.Face3(92, 91, 103, undefined, undefined, 80));

   faces.faces.push(new THREE.Face3(93, 92, 104, undefined, undefined, 81));

   faces.faces.push(new THREE.Face3(84, 111, 100, undefined, undefined, 82));

   faces.faces.push(new THREE.Face3(92, 103, 114, undefined, undefined, 83));

   faces.faces.push(new THREE.Face3(37, 53, 72, undefined, undefined, 84));

   faces.faces.push(new THREE.Face3(89, 102, 112, undefined, undefined, 85));

   faces.faces.push(new THREE.Face3(89, 88, 102, undefined, undefined, 86));

   faces.faces.push(new THREE.Face3(88, 113, 102, undefined, undefined, 87));

   faces.faces.push(new THREE.Face3(54, 37, 73, undefined, undefined, 88));

   faces.faces.push(new THREE.Face3(54, 73, 94, undefined, undefined, 89));

   faces.faces.push(new THREE.Face3(38, 54, 74, undefined, undefined, 90));

   faces.faces.push(new THREE.Face3(38, 37, 54, undefined, undefined, 91));


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
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[106].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[105].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[38].vector);
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
