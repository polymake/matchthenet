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

   var axes = [[162,161],
      [129,160],
      [153,152],
      [144,143],
      [137,98],
      [138,137],
      [135,134],
      [129,128],
      [124,123],
      [121,120],
      [113,74],
      [114,113],
      [109,108],
      [103,102],
      [99,98],
      [97,96],
      [93,92],
      [94,93],
      [90,89],
      [87,86],
      [85,84],
      [79,78],
      [75,74],
      [72,71],
      [70,69],
      [66,65],
      [63,62],
      [64,63],
      [58,57],
      [57,56],
      [51,50],
      [52,51],
      [49,48],
      [45,44],
      [42,41],
      [43,42],
      [39,38],
      [36,35],
      [30,29],
      [31,30],
      [27,26],
      [28,27],
      [21,20],
      [22,21],
      [20,5],
      [15,14],
      [16,15],
      [13,12],
      [2,13],
      [9,8],
      [10,9],
      [8,2],
      [7,6],
      [6,5],
      [4,3],
      [0,4],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678,
      2.67347322717678];

   var subtrees = [[179,180,181],
      [176,177,178],
      [173,174,175],
      [170,171,172],
      [167,168,169],
      [164,165,166],
      [161,162,163,179,180,181],
      [158,159,160,176,177,178],
      [155,156,157],
      [152,153,154,173,174,175],
      [149,150,151],
      [146,147,148],
      [143,144,145,170,171,172],
      [140,141,142],
      [137,138,139,164,165,166,167,168,169],
      [134,135,136,161,162,163,179,180,181],
      [131,132,133],
      [128,129,130,158,159,160,176,177,178],
      [125,126,127],
      [122,123,124,155,156,157],
      [119,120,121,152,153,154,173,174,175],
      [116,117,118],
      [113,114,115,146,147,148,149,150,151],
      [110,111,112],
      [107,108,109,143,144,145,170,171,172],
      [104,105,106],
      [101,102,103,140,141,142],
      [98,99,100,137,138,139,164,165,166,167,168,169],
      [95,96,97,134,135,136,161,162,163,179,180,181],
      [92,93,94,128,129,130,131,132,133,158,159,160,176,177,178],
      [89,90,91,125,126,127],
      [86,87,88,122,123,124,155,156,157],
      [83,84,85,119,120,121,152,153,154,173,174,175],
      [80,81,82],
      [77,78,79,116,117,118],
      [74,75,76,113,114,115,146,147,148,149,150,151],
      [71,72,73,110,111,112],
      [68,69,70,107,108,109,143,144,145,170,171,172],
      [65,66,67,104,105,106],
      [62,63,64,98,99,100,101,102,103,137,138,139,140,141,142,164,165,166,167,168,169],
      [59,60,61],
      [56,57,58,92,93,94,95,96,97,128,129,130,131,132,133,134,135,136,158,159,160,161,162,163,176,177,178,179,180,181],
      [53,54,55],
      [50,51,52,86,87,88,89,90,91,122,123,124,125,126,127,155,156,157],
      [47,48,49,83,84,85,119,120,121,152,153,154,173,174,175],
      [44,45,46,80,81,82],
      [41,42,43,74,75,76,77,78,79,113,114,115,116,117,118,146,147,148,149,150,151],
      [38,39,40,71,72,73,110,111,112],
      [35,36,37,68,69,70,107,108,109,143,144,145,170,171,172],
      [32,33,34],
      [29,30,31,62,63,64,65,66,67,98,99,100,101,102,103,104,105,106,137,138,139,140,141,142,164,165,166,167,168,169],
      [26,27,28,56,57,58,59,60,61,92,93,94,95,96,97,128,129,130,131,132,133,134,135,136,158,159,160,161,162,163,176,177,178,179,180,181],
      [23,24,25],
      [20,21,22,47,48,49,50,51,52,53,54,55,83,84,85,86,87,88,89,90,91,119,120,121,122,123,124,125,126,127,152,153,154,155,156,157,173,174,175],
      [17,18,19],
      [14,15,16,41,42,43,44,45,46,74,75,76,77,78,79,80,81,82,113,114,115,116,117,118,146,147,148,149,150,151],
      [11,12,13,35,36,37,38,39,40,68,69,70,71,72,73,107,108,109,110,111,112,143,144,145,170,171,172],
      [8,9,10,26,27,28,29,30,31,32,33,34,56,57,58,59,60,61,62,63,64,65,66,67,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,158,159,160,161,162,163,164,165,166,167,168,169,176,177,178,179,180,181],
      [5,6,7,20,21,22,23,24,25,47,48,49,50,51,52,53,54,55,83,84,85,86,87,88,89,90,91,119,120,121,122,123,124,125,126,127,152,153,154,155,156,157,173,174,175]];

   var polytoperoot = [[-0.0905341859425005,0.102544628944997,0.984247026619433],
      [0.181597968696005,0.160328477794025,1.01600510131554],
      [0.208371732241254,0.183966389522061,-0.0662742090751588]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.273582, 0, 0));
   allpoints.push(new PMPoint(0.499339, 0.422155, 0));
   allpoints.push(new PMPoint(0.0228871, 0.468789, 0));
   allpoints.push(new PMPoint(-0.129015, 0.241252, 0));
   allpoints.push(new PMPoint(-0.225757, -0.422155, 0));
   allpoints.push(new PMPoint(0.250695, -0.468789, 0));
   allpoints.push(new PMPoint(0.402597, -0.241252, 0));
   allpoints.push(new PMPoint(0.359721, 0.880073, 0));
   allpoints.push(new PMPoint(0.0913309, 0.933119, 0));
   allpoints.push(new PMPoint(-0.0820134, 0.721461, 0));
   allpoints.push(new PMPoint(0.425484, -0.227537, 0));
   allpoints.push(new PMPoint(0.697766, -0.200887, 0));
   allpoints.push(new PMPoint(0.802666, 0.0517851, 0));
   allpoints.push(new PMPoint(-0.402597, 0.241252, 0));
   allpoints.push(new PMPoint(-0.531612, 0, 0));
   allpoints.push(new PMPoint(-0.265806, -0.398156, 0));
   allpoints.push(new PMPoint(-0.106128, 0.710041, 0));
   allpoints.push(new PMPoint(-0.584857, 0.710041, 0));
   allpoints.push(new PMPoint(-0.401296, 0.267902, 0));
   allpoints.push(new PMPoint(-0.0861389, -0.880073, 0));
   allpoints.push(new PMPoint(0.182252, -0.933119, 0));
   allpoints.push(new PMPoint(0.355596, -0.721461, 0));
   allpoints.push(new PMPoint(0.37971, -0.710041, 0));
   allpoints.push(new PMPoint(0.858439, -0.710041, 0));
   allpoints.push(new PMPoint(0.674879, -0.267902, 0));
   allpoints.push(new PMPoint(0.868723, 0.726683, 0));
   allpoints.push(new PMPoint(0.814806, 0.9949, 0));
   allpoints.push(new PMPoint(0.552859, 1.07384, 0));
   allpoints.push(new PMPoint(-0.0135696, 1.18579, 0));
   allpoints.push(new PMPoint(-0.285851, 1.21244, 0));
   allpoints.push(new PMPoint(-0.551657, 0.814285, 0));
   allpoints.push(new PMPoint(0.533066, 1.09173, 0));
   allpoints.push(new PMPoint(0.349505, 1.53387, 0));
   allpoints.push(new PMPoint(0.0115424, 1.19481, 0));
   allpoints.push(new PMPoint(1.07106, 0.104832, 0));
   allpoints.push(new PMPoint(1.15085, 0.366521, 0));
   allpoints.push(new PMPoint(0.957707, 0.560287, 0));
   allpoints.push(new PMPoint(1.00109, -0.571257, 0));
   allpoints.push(new PMPoint(1.22685, -0.149102, 0));
   allpoints.push(new PMPoint(1.07495, 0.0784352, 0));
   allpoints.push(new PMPoint(-0.803893, -0.0266501, 0));
   allpoints.push(new PMPoint(-0.908794, -0.279322, 0));
   allpoints.push(new PMPoint(-0.73545, -0.49098, 0));
   allpoints.push(new PMPoint(-0.668403, 0.639408, 0));
   allpoints.push(new PMPoint(-0.934209, 0.241252, 0));
   allpoints.push(new PMPoint(-0.805195, 0, 0));
   allpoints.push(new PMPoint(-0.595141, -0.726683, 0));
   allpoints.push(new PMPoint(-0.541223, -0.9949, 0));
   allpoints.push(new PMPoint(-0.279277, -1.07384, 0));
   allpoints.push(new PMPoint(0.287152, -1.18579, 0));
   allpoints.push(new PMPoint(0.559433, -1.21244, 0));
   allpoints.push(new PMPoint(0.825239, -0.814285, 0));
   allpoints.push(new PMPoint(-0.259483, -1.09173, 0));
   allpoints.push(new PMPoint(-0.0759227, -1.53387, 0));
   allpoints.push(new PMPoint(0.26204, -1.19481, 0));
   allpoints.push(new PMPoint(1.00794, 1.18867, 0));
   allpoints.push(new PMPoint(0.928155, 1.45035, 0));
   allpoints.push(new PMPoint(0.458511, 1.54318, 0));
   allpoints.push(new PMPoint(1.13067, 0.647744, 0));
   allpoints.push(new PMPoint(1.46863, 0.986806, 0));
   allpoints.push(new PMPoint(1.0259, 1.16893, 0));
   allpoints.push(new PMPoint(-0.414866, 1.45369, 0));
   allpoints.push(new PMPoint(-0.688448, 1.45369, 0));
   allpoints.push(new PMPoint(-0.817463, 1.21244, 0));
   allpoints.push(new PMPoint(0.252236, 1.58395, 0));
   allpoints.push(new PMPoint(-0.217407, 1.67677, 0));
   allpoints.push(new PMPoint(-0.390752, 1.46511, 0));
   allpoints.push(new PMPoint(1.26419, -0.0889339, 0));
   allpoints.push(new PMPoint(1.52614, -0.00999522, 0));
   allpoints.push(new PMPoint(1.62049, 0.459345, 0));
   allpoints.push(new PMPoint(1.47754, -0.617891, 0));
   allpoints.push(new PMPoint(1.62945, -0.390354, 0));
   allpoints.push(new PMPoint(1.50043, -0.149102, 0));
   allpoints.push(new PMPoint(-1.37844, -0.372146, 0));
   allpoints.push(new PMPoint(-1.11263, -0.770303, 0));
   allpoints.push(new PMPoint(-0.84035, -0.743652, 0));
   allpoints.push(new PMPoint(-0.977238, 0.185008, 0));
   allpoints.push(new PMPoint(-1.24563, 0.131961, 0));
   allpoints.push(new PMPoint(-1.38525, -0.325956, 0));
   allpoints.push(new PMPoint(-1.13805, 0.732232, 0));
   allpoints.push(new PMPoint(-1.31139, 0.520574, 0));
   allpoints.push(new PMPoint(-1.20649, 0.267902, 0));
   allpoints.push(new PMPoint(-0.734361, -1.18867, 0));
   allpoints.push(new PMPoint(-0.654573, -1.45035, 0));
   allpoints.push(new PMPoint(-0.184929, -1.54318, 0));
   allpoints.push(new PMPoint(0.688448, -1.45369, 0));
   allpoints.push(new PMPoint(0.962031, -1.45369, 0));
   allpoints.push(new PMPoint(1.09105, -1.21244, 0));
   allpoints.push(new PMPoint(0.021346, -1.58395, 0));
   allpoints.push(new PMPoint(0.49099, -1.67677, 0));
   allpoints.push(new PMPoint(0.664334, -1.46511, 0));
   allpoints.push(new PMPoint(1.47759, 1.09584, 0));
   allpoints.push(new PMPoint(1.38324, 1.56518, 0));
   allpoints.push(new PMPoint(1.12129, 1.64412, 0));
   allpoints.push(new PMPoint(1.1015, 1.66201, 0));
   allpoints.push(new PMPoint(0.996599, 1.91468, 0));
   allpoints.push(new PMPoint(0.724317, 1.94133, 0));
   allpoints.push(new PMPoint(-0.954254, 1.85185, 0));
   allpoints.push(new PMPoint(-1.22006, 1.45369, 0));
   allpoints.push(new PMPoint(-1.09105, 1.21244, 0));
   allpoints.push(new PMPoint(-0.285851, 1.69495, 0));
   allpoints.push(new PMPoint(-0.437753, 1.92248, 0));
   allpoints.push(new PMPoint(-0.914205, 1.87585, 0));
   allpoints.push(new PMPoint(0.157889, 2.05329, 0));
   allpoints.push(new PMPoint(-0.104058, 2.13223, 0));
   allpoints.push(new PMPoint(-0.297196, 1.93846, 0));
   allpoints.push(new PMPoint(1.73724, -0.184026, 0));
   allpoints.push(new PMPoint(1.99025, -0.0799457, 0));
   allpoints.push(new PMPoint(2.01778, 0.192248, 0));
   allpoints.push(new PMPoint(1.60656, -0.859143, 0));
   allpoints.push(new PMPoint(2.08529, -0.859143, 0));
   allpoints.push(new PMPoint(1.90173, -0.417004, 0));
   allpoints.push(new PMPoint(-1.64424, -0.770303, 0));
   allpoints.push(new PMPoint(-1.51523, -1.01155, 0));
   allpoints.push(new PMPoint(-1.24165, -1.01155, 0));
   allpoints.push(new PMPoint(-1.43877, 0.325727, 0));
   allpoints.push(new PMPoint(-1.70071, 0.246788, 0));
   allpoints.push(new PMPoint(-1.75463, -0.0214285, 0));
   allpoints.push(new PMPoint(-0.827917, -1.66201, 0));
   allpoints.push(new PMPoint(-0.723016, -1.91468, 0));
   allpoints.push(new PMPoint(-0.450735, -1.94133, 0));
   allpoints.push(new PMPoint(0.559433, -1.69495, 0));
   allpoints.push(new PMPoint(0.711335, -1.92248, 0));
   allpoints.push(new PMPoint(1.18779, -1.87585, 0));
   allpoints.push(new PMPoint(0.115694, -2.05329, 0));
   allpoints.push(new PMPoint(0.37764, -2.13223, 0));
   allpoints.push(new PMPoint(0.570778, -1.93846, 0));
   allpoints.push(new PMPoint(1.57638, 1.75895, 0));
   allpoints.push(new PMPoint(1.43676, 2.21686, 0));
   allpoints.push(new PMPoint(1.06738, 1.91234, 0));
   allpoints.push(new PMPoint(1.87488, 1.36294, 0));
   allpoints.push(new PMPoint(1.84735, 1.63513, 0));
   allpoints.push(new PMPoint(1.59433, 1.73921, 0));
   allpoints.push(new PMPoint(1.2624, 2.31284, 0));
   allpoints.push(new PMPoint(0.792761, 2.40566, 0));
   allpoints.push(new PMPoint(0.619417, 2.19401, 0));
   allpoints.push(new PMPoint(-1.4239, 1.94467, 0));
   allpoints.push(new PMPoint(-1.59724, 1.73302, 0));
   allpoints.push(new PMPoint(-1.49234, 1.48034, 0));
   allpoints.push(new PMPoint(-0.332852, 2.17516, 0));
   allpoints.push(new PMPoint(-0.506197, 2.38681, 0));
   allpoints.push(new PMPoint(-0.774587, 2.33377, 0));
   allpoints.push(new PMPoint(2.38754, -0.347043, 0));
   allpoints.push(new PMPoint(2.48189, 0.122297, 0));
   allpoints.push(new PMPoint(2.27079, 0.296328, 0));
   allpoints.push(new PMPoint(-1.91783, -0.770303, 0));
   allpoints.push(new PMPoint(-2.14358, -1.19246, 0));
   allpoints.push(new PMPoint(-1.66713, -1.23909, 0));
   allpoints.push(new PMPoint(-1.84808, -0.279322, 0));
   allpoints.push(new PMPoint(-2.02143, -0.49098, 0));
   allpoints.push(new PMPoint(-1.91653, -0.743652, 0));
   allpoints.push(new PMPoint(-0.988822, -2.31284, 0));
   allpoints.push(new PMPoint(-0.519179, -2.40566, 0));
   allpoints.push(new PMPoint(-0.345835, -2.19401, 0));
   allpoints.push(new PMPoint(0.606435, -2.17516, 0));
   allpoints.push(new PMPoint(0.779779, -2.38681, 0));
   allpoints.push(new PMPoint(1.04817, -2.33377, 0));
   allpoints.push(new PMPoint(1.84477, 1.7059, 0));
   allpoints.push(new PMPoint(2.01811, 1.91756, 0));
   allpoints.push(new PMPoint(1.91321, 2.17023, 0));
   allpoints.push(new PMPoint(1.16806, 2.78218, 0));
   allpoints.push(new PMPoint(0.906111, 2.86112, 0));
   allpoints.push(new PMPoint(0.712973, 2.66735, 0));
   allpoints.push(new PMPoint(-1.5288, 2.19735, 0));
   allpoints.push(new PMPoint(-2.00525, 2.24398, 0));
   allpoints.push(new PMPoint(-1.86563, 1.78606, 0));
   allpoints.push(new PMPoint(-1.0486, 2.32119, 0));
   allpoints.push(new PMPoint(-1.31055, 2.40013, 0));
   allpoints.push(new PMPoint(-1.50369, 2.20636, 0));
   allpoints.push(new PMPoint(2.85718, -0.254219, 0));
   allpoints.push(new PMPoint(2.93697, 0.00747028, 0));
   allpoints.push(new PMPoint(2.74383, 0.201236, 0));
   allpoints.push(new PMPoint(-0.894475, -2.78218, 0));
   allpoints.push(new PMPoint(-0.632528, -2.86112, 0));
   allpoints.push(new PMPoint(-0.43939, -2.66735, 0));
   allpoints.push(new PMPoint(2.06511, 2.39777, 0));
   allpoints.push(new PMPoint(1.9361, 2.63902, 0));
   allpoints.push(new PMPoint(1.66252, 2.63902, 0));
   allpoints.push(new PMPoint(1.3612, 2.97595, 0));
   allpoints.push(new PMPoint(1.22158, 3.43386, 0));
   allpoints.push(new PMPoint(0.852193, 3.12934, 0));

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
   allpoints[122].makesphere(0.02,points_material);
   allpoints[123].makesphere(0.02,points_material);
   allpoints[124].makesphere(0.02,points_material);
   allpoints[125].makesphere(0.02,points_material);
   allpoints[126].makesphere(0.02,points_material);
   allpoints[127].makesphere(0.02,points_material);
   allpoints[128].makesphere(0.02,points_material);
   allpoints[129].makesphere(0.02,points_material);
   allpoints[130].makesphere(0.02,points_material);
   allpoints[131].makesphere(0.02,points_material);
   allpoints[132].makesphere(0.02,points_material);
   allpoints[133].makesphere(0.02,points_material);
   allpoints[134].makesphere(0.02,points_material);
   allpoints[135].makesphere(0.02,points_material);
   allpoints[136].makesphere(0.02,points_material);
   allpoints[137].makesphere(0.02,points_material);
   allpoints[138].makesphere(0.02,points_material);
   allpoints[139].makesphere(0.02,points_material);
   allpoints[140].makesphere(0.02,points_material);
   allpoints[141].makesphere(0.02,points_material);
   allpoints[142].makesphere(0.02,points_material);
   allpoints[143].makesphere(0.02,points_material);
   allpoints[144].makesphere(0.02,points_material);
   allpoints[145].makesphere(0.02,points_material);
   allpoints[146].makesphere(0.02,points_material);
   allpoints[147].makesphere(0.02,points_material);
   allpoints[148].makesphere(0.02,points_material);
   allpoints[149].makesphere(0.02,points_material);
   allpoints[150].makesphere(0.02,points_material);
   allpoints[151].makesphere(0.02,points_material);
   allpoints[152].makesphere(0.02,points_material);
   allpoints[153].makesphere(0.02,points_material);
   allpoints[154].makesphere(0.02,points_material);
   allpoints[155].makesphere(0.02,points_material);
   allpoints[156].makesphere(0.02,points_material);
   allpoints[157].makesphere(0.02,points_material);
   allpoints[158].makesphere(0.02,points_material);
   allpoints[159].makesphere(0.02,points_material);
   allpoints[160].makesphere(0.02,points_material);
   allpoints[161].makesphere(0.02,points_material);
   allpoints[162].makesphere(0.02,points_material);
   allpoints[163].makesphere(0.02,points_material);
   allpoints[164].makesphere(0.02,points_material);
   allpoints[165].makesphere(0.02,points_material);
   allpoints[166].makesphere(0.02,points_material);
   allpoints[167].makesphere(0.02,points_material);
   allpoints[168].makesphere(0.02,points_material);
   allpoints[169].makesphere(0.02,points_material);
   allpoints[170].makesphere(0.02,points_material);
   allpoints[171].makesphere(0.02,points_material);
   allpoints[172].makesphere(0.02,points_material);
   allpoints[173].makesphere(0.02,points_material);
   allpoints[174].makesphere(0.02,points_material);
   allpoints[175].makesphere(0.02,points_material);
   allpoints[176].makesphere(0.02,points_material);
   allpoints[177].makesphere(0.02,points_material);
   allpoints[178].makesphere(0.02,points_material);
   allpoints[179].makesphere(0.02,points_material);
   allpoints[180].makesphere(0.02,points_material);
   allpoints[181].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[122].vector);
   faces.vertices.push(allpoints[123].vector);
   faces.vertices.push(allpoints[124].vector);
   faces.vertices.push(allpoints[125].vector);
   faces.vertices.push(allpoints[126].vector);
   faces.vertices.push(allpoints[127].vector);
   faces.vertices.push(allpoints[128].vector);
   faces.vertices.push(allpoints[129].vector);
   faces.vertices.push(allpoints[130].vector);
   faces.vertices.push(allpoints[131].vector);
   faces.vertices.push(allpoints[132].vector);
   faces.vertices.push(allpoints[133].vector);
   faces.vertices.push(allpoints[134].vector);
   faces.vertices.push(allpoints[135].vector);
   faces.vertices.push(allpoints[136].vector);
   faces.vertices.push(allpoints[137].vector);
   faces.vertices.push(allpoints[138].vector);
   faces.vertices.push(allpoints[139].vector);
   faces.vertices.push(allpoints[140].vector);
   faces.vertices.push(allpoints[141].vector);
   faces.vertices.push(allpoints[142].vector);
   faces.vertices.push(allpoints[143].vector);
   faces.vertices.push(allpoints[144].vector);
   faces.vertices.push(allpoints[145].vector);
   faces.vertices.push(allpoints[146].vector);
   faces.vertices.push(allpoints[147].vector);
   faces.vertices.push(allpoints[148].vector);
   faces.vertices.push(allpoints[149].vector);
   faces.vertices.push(allpoints[150].vector);
   faces.vertices.push(allpoints[151].vector);
   faces.vertices.push(allpoints[152].vector);
   faces.vertices.push(allpoints[153].vector);
   faces.vertices.push(allpoints[154].vector);
   faces.vertices.push(allpoints[155].vector);
   faces.vertices.push(allpoints[156].vector);
   faces.vertices.push(allpoints[157].vector);
   faces.vertices.push(allpoints[158].vector);
   faces.vertices.push(allpoints[159].vector);
   faces.vertices.push(allpoints[160].vector);
   faces.vertices.push(allpoints[161].vector);
   faces.vertices.push(allpoints[162].vector);
   faces.vertices.push(allpoints[163].vector);
   faces.vertices.push(allpoints[164].vector);
   faces.vertices.push(allpoints[165].vector);
   faces.vertices.push(allpoints[166].vector);
   faces.vertices.push(allpoints[167].vector);
   faces.vertices.push(allpoints[168].vector);
   faces.vertices.push(allpoints[169].vector);
   faces.vertices.push(allpoints[170].vector);
   faces.vertices.push(allpoints[171].vector);
   faces.vertices.push(allpoints[172].vector);
   faces.vertices.push(allpoints[173].vector);
   faces.vertices.push(allpoints[174].vector);
   faces.vertices.push(allpoints[175].vector);
   faces.vertices.push(allpoints[176].vector);
   faces.vertices.push(allpoints[177].vector);
   faces.vertices.push(allpoints[178].vector);
   faces.vertices.push(allpoints[179].vector);
   faces.vertices.push(allpoints[180].vector);
   faces.vertices.push(allpoints[181].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(160, 176, 177, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(160, 177, 178, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(160, 178, 129, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(162, 161, 179, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(162, 179, 180, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(162, 180, 181, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(158, 159, 160, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(158, 160, 129, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(158, 129, 128, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(138, 137, 164, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(138, 164, 165, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(138, 165, 166, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(135, 134, 161, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(135, 161, 162, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(135, 162, 163, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(153, 152, 173, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(153, 173, 174, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(153, 174, 175, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 2, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(94, 93, 128, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(94, 128, 129, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(94, 129, 130, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(114, 113, 146, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(114, 146, 147, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(114, 147, 148, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 49, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 13, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 96, 134, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 134, 135, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 135, 136, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(154, 121, 120, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(154, 120, 152, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(154, 152, 153, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 63, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 51, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 86, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 87, 88, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 71, 110, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 110, 111, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 111, 112, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 63, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 98, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 99, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 22, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 21, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(108, 143, 144, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(108, 144, 145, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(108, 145, 109, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(99, 98, 137, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 137, 138, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 138, 139, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 80, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 81, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 122, 123, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(86, 123, 124, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(86, 124, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 101, 102, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 102, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 103, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 6, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(144, 143, 170, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(144, 170, 171, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(144, 171, 172, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(98, 167, 168, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(98, 168, 169, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(98, 169, 137, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 46, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(123, 155, 156, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(123, 156, 157, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(123, 157, 124, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(102, 140, 141, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(102, 141, 142, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(102, 142, 103, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 27, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 74, 113, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 113, 114, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 114, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 83, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 84, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 85, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 92, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 93, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 94, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(74, 149, 150, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 150, 151, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 151, 113, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(92, 131, 132, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(92, 132, 133, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(92, 133, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 95, 96, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 96, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(84, 119, 120, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 120, 121, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 121, 85, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 61, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 65, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 66, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 67, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 116, 117, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 117, 118, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 118, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 50, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 89, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 90, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(69, 107, 108, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(69, 108, 109, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(69, 109, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 65, 104, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 104, 105, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 105, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 77, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 79, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(90, 89, 125, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(90, 125, 126, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(90, 126, 127, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 68, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 70, 36, undefined, undefined, 0));


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
   line.vertices.push(allpoints[160].vector);
   line.vertices.push(allpoints[176].vector);
   line.vertices.push(allpoints[177].vector);
   line.vertices.push(allpoints[178].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[160].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[162].vector);
   line.vertices.push(allpoints[161].vector);
   line.vertices.push(allpoints[179].vector);
   line.vertices.push(allpoints[180].vector);
   line.vertices.push(allpoints[181].vector);
   line.vertices.push(allpoints[162].vector);
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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[158].vector);
   line.vertices.push(allpoints[159].vector);
   line.vertices.push(allpoints[160].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[158].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[138].vector);
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[164].vector);
   line.vertices.push(allpoints[165].vector);
   line.vertices.push(allpoints[166].vector);
   line.vertices.push(allpoints[138].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[161].vector);
   line.vertices.push(allpoints[162].vector);
   line.vertices.push(allpoints[163].vector);
   line.vertices.push(allpoints[135].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[153].vector);
   line.vertices.push(allpoints[152].vector);
   line.vertices.push(allpoints[173].vector);
   line.vertices.push(allpoints[174].vector);
   line.vertices.push(allpoints[175].vector);
   line.vertices.push(allpoints[153].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[130].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[146].vector);
   line.vertices.push(allpoints[147].vector);
   line.vertices.push(allpoints[148].vector);
   line.vertices.push(allpoints[114].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[154].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[152].vector);
   line.vertices.push(allpoints[153].vector);
   line.vertices.push(allpoints[154].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[144].vector);
   line.vertices.push(allpoints[145].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[108].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[138].vector);
   line.vertices.push(allpoints[139].vector);
   line.vertices.push(allpoints[99].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[144].vector);
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[170].vector);
   line.vertices.push(allpoints[171].vector);
   line.vertices.push(allpoints[172].vector);
   line.vertices.push(allpoints[144].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[167].vector);
   line.vertices.push(allpoints[168].vector);
   line.vertices.push(allpoints[169].vector);
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[98].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[155].vector);
   line.vertices.push(allpoints[156].vector);
   line.vertices.push(allpoints[157].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[123].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[140].vector);
   line.vertices.push(allpoints[141].vector);
   line.vertices.push(allpoints[142].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[149].vector);
   line.vertices.push(allpoints[150].vector);
   line.vertices.push(allpoints[151].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[131].vector);
   line.vertices.push(allpoints[132].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
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
