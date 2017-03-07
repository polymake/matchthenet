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

   var axes = [[119,64],
      [103,49],
      [100,99],
      [91,90],
      [86,85],
      [34,81],
      [80,39],
      [75,74],
      [73,72],
      [64,63],
      [65,64],
      [67,66],
      [21,61],
      [56,55],
      [45,44],
      [47,46],
      [49,48],
      [46,45],
      [50,49],
      [41,16],
      [38,37],
      [36,35],
      [37,36],
      [35,34],
      [39,38],
      [34,33],
      [40,39],
      [5,30],
      [29,8],
      [4,28],
      [27,9],
      [24,23],
      [23,22],
      [22,21],
      [21,20],
      [12,11],
      [13,12],
      [14,13],
      [15,14],
      [16,15],
      [17,16],
      [7,6],
      [6,5],
      [8,7],
      [5,4],
      [9,8],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [3.04280887270247,
      2.77672882547631,
      2.68680207558007,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.48923451380543,
      2.48923451380542,
      2.77672882547631,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.68680207558007,
      2.77672882547631,
      2.0344439357957,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.68680207558007,
      2.68680207558007,
      2.77672882547631,
      2.77672882547631,
      3.04280887270247,
      3.04280887270247,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.68680207558007,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.68680207558007,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542];

   var subtrees = [[136,137],
      [134,135],
      [133],
      [132],
      [131],
      [129,130],
      [127,128],
      [124,125,126],
      [121,122,123],
      [120],
      [119,136,137],
      [118],
      [116,117],
      [115],
      [114],
      [113],
      [112],
      [104,105,106,107,108,109,110,111],
      [103,134,135],
      [101,102],
      [93,94,95,96,97,98,99,100,133],
      [85,86,87,88,89,90,91,92,131,132],
      [84],
      [83],
      [82],
      [81,129,130],
      [80,127,128],
      [78,79],
      [76,77],
      [74,75,124,125,126],
      [72,73,121,122,123],
      [71],
      [63,64,65,66,67,68,69,70,118,119,120,136,137],
      [62],
      [61,116,117],
      [60],
      [52,53,54,55,56,57,58,59,115],
      [51],
      [43,44,45,46,47,48,49,50,103,104,105,106,107,108,109,110,111,112,113,114,134,135],
      [42],
      [41,101,102],
      [33,34,35,36,37,38,39,40,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,127,128,129,130,131,132,133],
      [32],
      [31],
      [30,78,79],
      [29,76,77],
      [28,74,75,124,125,126],
      [27,72,73,121,122,123],
      [19,20,21,22,23,24,25,26,61,62,63,64,65,66,67,68,69,70,71,116,117,118,119,120,136,137],
      [11,12,13,14,15,16,17,18,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,134,135],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,121,122,123,124,125,126,127,128,129,130,131,132,133]];

   var polytoperoot = [[0.877860488151632,-0.167656434546675,-0.362986180972935],
      [2.6180339887499,0,-1],
      [0.335312869093349,0,0.877860488151633]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.335313, 0, 0));
   allpoints.push(new PMPoint(0.167656, 0.290389, 0));
   allpoints.push(new PMPoint(-0.271274, -0.197092, 0));
   allpoints.push(new PMPoint(-0.374891, -0.515993, 0));
   allpoints.push(new PMPoint(-0.271274, -0.834895, 0));
   allpoints.push(new PMPoint(0, -1.03199, 0));
   allpoints.push(new PMPoint(0.335313, -1.03199, 0));
   allpoints.push(new PMPoint(0.606587, -0.834895, 0));
   allpoints.push(new PMPoint(0.710204, -0.515993, 0));
   allpoints.push(new PMPoint(0.606587, -0.197092, 0));
   allpoints.push(new PMPoint(0.132607, 0.623865, 0));
   allpoints.push(new PMPoint(-0.0917614, 0.873051, 0));
   allpoints.push(new PMPoint(-0.419747, 0.942767, 0));
   allpoints.push(new PMPoint(-0.72607, 0.806383, 0));
   allpoints.push(new PMPoint(-0.893727, 0.515993, 0));
   allpoints.push(new PMPoint(-0.858677, 0.182517, 0));
   allpoints.push(new PMPoint(-0.634309, -0.0666686, 0));
   allpoints.push(new PMPoint(-0.306324, -0.136384, 0));
   allpoints.push(new PMPoint(0.641636, -0.136384, 0));
   allpoints.push(new PMPoint(0.969622, -0.0666686, 0));
   allpoints.push(new PMPoint(1.19399, 0.182517, 0));
   allpoints.push(new PMPoint(1.22904, 0.515993, 0));
   allpoints.push(new PMPoint(1.06138, 0.806383, 0));
   allpoints.push(new PMPoint(0.75506, 0.942767, 0));
   allpoints.push(new PMPoint(0.427074, 0.873051, 0));
   allpoints.push(new PMPoint(0.202706, 0.623865, 0));
   allpoints.push(new PMPoint(0.934572, -0.266807, 0));
   allpoints.push(new PMPoint(-0.599259, -0.266807, 0));
   allpoints.push(new PMPoint(0.934572, -0.765179, 0));
   allpoints.push(new PMPoint(-0.599259, -0.765179, 0));
   allpoints.push(new PMPoint(0.641636, -1.16837, 0));
   allpoints.push(new PMPoint(-0.306324, -1.16837, 0));
   allpoints.push(new PMPoint(-0.271274, -1.22908, 0));
   allpoints.push(new PMPoint(-0.374891, -1.54798, 0));
   allpoints.push(new PMPoint(-0.271274, -1.86688, 0));
   allpoints.push(new PMPoint(0, -2.06397, 0));
   allpoints.push(new PMPoint(0.335313, -2.06397, 0));
   allpoints.push(new PMPoint(0.606587, -1.86688, 0));
   allpoints.push(new PMPoint(0.710204, -1.54798, 0));
   allpoints.push(new PMPoint(0.606587, -1.22908, 0));
   allpoints.push(new PMPoint(-0.962295, -0.136384, 0));
   allpoints.push(new PMPoint(-1.165, 0.318901, 0));
   allpoints.push(new PMPoint(-0.76112, 1.13986, 0));
   allpoints.push(new PMPoint(-0.985488, 1.38904, 0));
   allpoints.push(new PMPoint(-1.31347, 1.45876, 0));
   allpoints.push(new PMPoint(-1.6198, 1.32238, 0));
   allpoints.push(new PMPoint(-1.78745, 1.03199, 0));
   allpoints.push(new PMPoint(-1.7524, 0.698511, 0));
   allpoints.push(new PMPoint(-1.52804, 0.449325, 0));
   allpoints.push(new PMPoint(-1.20005, 0.379609, 0));
   allpoints.push(new PMPoint(-0.691021, 1.13986, 0));
   allpoints.push(new PMPoint(0.214562, 1.00944, 0));
   allpoints.push(new PMPoint(0.382219, 1.29982, 0));
   allpoints.push(new PMPoint(0.347169, 1.6333, 0));
   allpoints.push(new PMPoint(0.122801, 1.88249, 0));
   allpoints.push(new PMPoint(-0.205185, 1.9522, 0));
   allpoints.push(new PMPoint(-0.511508, 1.81582, 0));
   allpoints.push(new PMPoint(-0.679165, 1.52543, 0));
   allpoints.push(new PMPoint(-0.644115, 1.19195, 0));
   allpoints.push(new PMPoint(0.236224, 0.942767, 0));
   allpoints.push(new PMPoint(1.29761, -0.136384, 0));
   allpoints.push(new PMPoint(1.50031, 0.318901, 0));
   allpoints.push(new PMPoint(1.53536, 0.379609, 0));
   allpoints.push(new PMPoint(1.86335, 0.449325, 0));
   allpoints.push(new PMPoint(2.08772, 0.698511, 0));
   allpoints.push(new PMPoint(2.12277, 1.03199, 0));
   allpoints.push(new PMPoint(1.95511, 1.32238, 0));
   allpoints.push(new PMPoint(1.64879, 1.45876, 0));
   allpoints.push(new PMPoint(1.3208, 1.38904, 0));
   allpoints.push(new PMPoint(1.09643, 1.13986, 0));
   allpoints.push(new PMPoint(1.02633, 1.13986, 0));
   allpoints.push(new PMPoint(0.95939, -0.740362, 0));
   allpoints.push(new PMPoint(1.18376, -0.491176, 0));
   allpoints.push(new PMPoint(-0.848445, -0.491176, 0));
   allpoints.push(new PMPoint(-0.624077, -0.740362, 0));
   allpoints.push(new PMPoint(0.676302, -1.16288, 0));
   allpoints.push(new PMPoint(1.00429, -1.09316, 0));
   allpoints.push(new PMPoint(-0.668975, -1.09316, 0));
   allpoints.push(new PMPoint(-0.340989, -1.16288, 0));
   allpoints.push(new PMPoint(0.934572, -1.29879, 0));
   allpoints.push(new PMPoint(-0.599259, -1.29879, 0));
   allpoints.push(new PMPoint(0.934572, -1.79717, 0));
   allpoints.push(new PMPoint(-0.599259, -1.79717, 0));
   allpoints.push(new PMPoint(0.167656, -2.35436, 0));
   allpoints.push(new PMPoint(-0.606587, -1.86688, 0));
   allpoints.push(new PMPoint(-0.87786, -2.06397, 0));
   allpoints.push(new PMPoint(-0.981478, -2.38288, 0));
   allpoints.push(new PMPoint(-0.87786, -2.70178, 0));
   allpoints.push(new PMPoint(-0.606587, -2.89887, 0));
   allpoints.push(new PMPoint(-0.271274, -2.89887, 0));
   allpoints.push(new PMPoint(0, -2.70178, 0));
   allpoints.push(new PMPoint(0.103617, -2.38288, 0));
   allpoints.push(new PMPoint(0.231695, -2.38288, 0));
   allpoints.push(new PMPoint(0.335313, -2.70178, 0));
   allpoints.push(new PMPoint(0.606587, -2.89887, 0));
   allpoints.push(new PMPoint(0.9419, -2.89887, 0));
   allpoints.push(new PMPoint(1.21317, -2.70178, 0));
   allpoints.push(new PMPoint(1.31679, -2.38288, 0));
   allpoints.push(new PMPoint(1.21317, -2.06397, 0));
   allpoints.push(new PMPoint(0.9419, -1.86688, 0));
   allpoints.push(new PMPoint(-1.17758, 0.286135, 0));
   allpoints.push(new PMPoint(-1.2812, -0.0327667, 0));
   allpoints.push(new PMPoint(-1.42442, 0.130423, 0));
   allpoints.push(new PMPoint(-1.14582, 1.74915, 0));
   allpoints.push(new PMPoint(-1.18087, 2.08263, 0));
   allpoints.push(new PMPoint(-1.40524, 2.33181, 0));
   allpoints.push(new PMPoint(-1.73322, 2.40153, 0));
   allpoints.push(new PMPoint(-2.03954, 2.26514, 0));
   allpoints.push(new PMPoint(-2.2072, 1.97475, 0));
   allpoints.push(new PMPoint(-2.17215, 1.64128, 0));
   allpoints.push(new PMPoint(-1.94778, 1.39209, 0));
   allpoints.push(new PMPoint(-1.85602, 0.379609, 0));
   allpoints.push(new PMPoint(-1.95511, 1.32238, 0));
   allpoints.push(new PMPoint(-1.08911, 1.70795, 0));
   allpoints.push(new PMPoint(0.0191834, 2.20139, 0));
   allpoints.push(new PMPoint(1.61651, -0.0327667, 0));
   allpoints.push(new PMPoint(1.51289, 0.286135, 0));
   allpoints.push(new PMPoint(2.29042, 1.32238, 0));
   allpoints.push(new PMPoint(2.19133, 0.379609, 0));
   allpoints.push(new PMPoint(1.75973, 0.130423, 0));
   allpoints.push(new PMPoint(1.12705, -1.03075, 0));
   allpoints.push(new PMPoint(1.45503, -0.961036, 0));
   allpoints.push(new PMPoint(1.49008, -0.62756, 0));
   allpoints.push(new PMPoint(-1.15477, -0.62756, 0));
   allpoints.push(new PMPoint(-1.11972, -0.961036, 0));
   allpoints.push(new PMPoint(-0.791734, -1.03075, 0));
   allpoints.push(new PMPoint(0.95939, -1.77235, 0));
   allpoints.push(new PMPoint(1.18376, -1.52316, 0));
   allpoints.push(new PMPoint(-0.848445, -1.52316, 0));
   allpoints.push(new PMPoint(-0.624077, -1.77235, 0));
   allpoints.push(new PMPoint(-0.91291, -1.7305, 0));
   allpoints.push(new PMPoint(0.0350497, -3.03525, 0));
   allpoints.push(new PMPoint(1.24822, -1.7305, 0));
   allpoints.push(new PMPoint(-1.84694, 0.345708, 0));
   allpoints.push(new PMPoint(-1.74332, 0.026806, 0));
   allpoints.push(new PMPoint(1.79363, 0.121339, 0));
   allpoints.push(new PMPoint(2.12162, 0.0516239, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 0, 3, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 3, 4, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 4, 5, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 5, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 6, 7, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 8, 9, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(27, 10, 9, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(3, 28, 4, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(27, 9, 72, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(27, 72, 73, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(21, 20, 61, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(28, 74, 75, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(28, 75, 4, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(17, 16, 41, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(21, 61, 116, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(21, 116, 117, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(9, 8, 29, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(5, 4, 30, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(16, 101, 102, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(16, 102, 41, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(74, 124, 125, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(74, 125, 126, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(74, 126, 75, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(8, 76, 77, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(8, 77, 29, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(8, 7, 31, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(5, 30, 78, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(5, 78, 79, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(6, 5, 32, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(50, 49, 103, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(106, 107, 108, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 108, 109, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 109, 110, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 110, 111, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 111, 46, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 46, 45, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 45, 104, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(106, 104, 105, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(49, 134, 135, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(49, 135, 103, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(39, 127, 128, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(39, 128, 80, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(40, 39, 80, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(34, 33, 81, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(49, 48, 112, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(86, 85, 131, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(39, 38, 82, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(35, 34, 83, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(37, 36, 84, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(132, 91, 90, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(87, 88, 89, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 89, 90, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 90, 91, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 91, 92, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 92, 36, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 36, 35, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 35, 85, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(87, 85, 86, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(47, 46, 113, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(67, 66, 118, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(97, 98, 99, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 99, 100, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 100, 38, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 38, 37, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 37, 93, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 93, 94, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 94, 95, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(97, 95, 96, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(100, 99, 133, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(34, 81, 129, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(34, 129, 130, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(65, 64, 119, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(7, 6, 33, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 33, 34, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 34, 35, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 35, 36, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 36, 37, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 37, 38, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 38, 39, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(7, 39, 40, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(64, 136, 137, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(64, 137, 119, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(44, 114, 45, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(55, 115, 56, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(64, 63, 120, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(73, 72, 121, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(73, 121, 122, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(73, 122, 123, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(16, 15, 42, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(22, 21, 62, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(15, 14, 43, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 43, 44, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 44, 45, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 45, 46, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 46, 47, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 47, 48, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 48, 49, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(15, 49, 50, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(23, 22, 63, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 63, 64, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 64, 65, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 65, 66, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 66, 67, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 67, 68, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 68, 69, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(23, 69, 70, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(14, 13, 51, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(24, 23, 71, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(52, 53, 54, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 54, 55, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 55, 56, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 56, 57, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 57, 58, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 58, 59, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 59, 13, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(52, 13, 12, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(11, 60, 12, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(0, 2, 11, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 24, 25, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(2, 25, 26, undefined, undefined, 51));


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
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[131].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[132].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[132].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[100].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[130].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[60].vector);
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
