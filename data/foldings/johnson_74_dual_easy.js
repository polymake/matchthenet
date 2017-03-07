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

   var axes = [[111,110],
      [103,102],
      [101,100],
      [77,99],
      [95,94],
      [93,92],
      [90,69],
      [85,84],
      [83,82],
      [81,80],
      [79,78],
      [77,76],
      [51,75],
      [73,72],
      [71,70],
      [47,69],
      [65,64],
      [62,38],
      [61,60],
      [59,58],
      [57,56],
      [54,32],
      [53,52],
      [51,50],
      [49,48],
      [25,47],
      [47,46],
      [45,44],
      [43,42],
      [39,38],
      [37,36],
      [18,37],
      [34,16],
      [33,32],
      [31,30],
      [29,28],
      [26,10],
      [25,24],
      [23,22],
      [22,9],
      [21,20],
      [19,18],
      [18,6],
      [17,16],
      [15,14],
      [4,15],
      [13,12],
      [11,10],
      [9,8],
      [0,9],
      [2,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658];

   var subtrees = [[120,121],
      [118,119],
      [116,117],
      [114,115],
      [112,113],
      [110,111,120,121],
      [108,109],
      [106,107],
      [104,105],
      [102,103,118,119],
      [100,101,116,117],
      [98,99,114,115],
      [96,97],
      [94,95,112,113],
      [92,93,110,111,120,121],
      [90,91,108,109],
      [88,89],
      [86,87],
      [84,85,106,107],
      [82,83,104,105],
      [80,81,102,103,118,119],
      [78,79,100,101,116,117],
      [76,77,98,99,114,115],
      [74,75,96,97],
      [72,73,94,95,112,113],
      [70,71,92,93,110,111,120,121],
      [68,69,90,91,108,109],
      [66,67],
      [64,65,88,89],
      [62,63,86,87],
      [60,61,84,85,106,107],
      [58,59,82,83,104,105],
      [56,57,80,81,102,103,118,119],
      [54,55,78,79,100,101,116,117],
      [52,53,76,77,98,99,114,115],
      [50,51,74,75,96,97],
      [48,49,72,73,94,95,112,113],
      [46,47,68,69,70,71,90,91,92,93,108,109,110,111,120,121],
      [44,45,66,67],
      [42,43,64,65,88,89],
      [40,41],
      [38,39,62,63,86,87],
      [36,37,58,59,60,61,82,83,84,85,104,105,106,107],
      [34,35,56,57,80,81,102,103,118,119],
      [32,33,54,55,78,79,100,101,116,117],
      [30,31,52,53,76,77,98,99,114,115],
      [28,29,50,51,74,75,96,97],
      [26,27,48,49,72,73,94,95,112,113],
      [24,25,46,47,68,69,70,71,90,91,92,93,108,109,110,111,120,121],
      [22,23,42,43,44,45,64,65,66,67,88,89],
      [20,21,40,41],
      [18,19,36,37,38,39,58,59,60,61,62,63,82,83,84,85,86,87,104,105,106,107],
      [16,17,34,35,56,57,80,81,102,103,118,119],
      [14,15,30,31,32,33,52,53,54,55,76,77,78,79,98,99,100,101,114,115,116,117],
      [12,13,28,29,50,51,74,75,96,97],
      [10,11,26,27,48,49,72,73,94,95,112,113],
      [8,9,22,23,24,25,42,43,44,45,46,47,64,65,66,67,68,69,70,71,88,89,90,91,92,93,108,109,110,111,120,121],
      [6,7,18,19,20,21,36,37,38,39,40,41,58,59,60,61,62,63,82,83,84,85,86,87,104,105,106,107],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,50,51,52,53,54,55,56,57,74,75,76,77,78,79,80,81,96,97,98,99,100,101,102,103,114,115,116,117,118,119]];

   var polytoperoot = [[0,-0.873392837340318,-0.539786459007025],
      [-0.235874764224825,-0.999181535433093,-0.235874764224825],
      [-0.569401310833123,0.127322003750035,0.0300566479164914]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.554623, 0, 0));
   allpoints.push(new PMPoint(0.530348, 0.459241, 0));
   allpoints.push(new PMPoint(0.172057, 0.421256, 0));
   allpoints.push(new PMPoint(0.209712, -0.513447, 0));
   allpoints.push(new PMPoint(0.535604, -0.359796, 0));
   allpoints.push(new PMPoint(1.10616, 0.0584715, 0));
   allpoints.push(new PMPoint(0.890646, 0.459241, 0));
   allpoints.push(new PMPoint(-0.0571901, 0.699214, 0));
   allpoints.push(new PMPoint(-0.396033, 0.388284, 0));
   allpoints.push(new PMPoint(0.442844, 1.00692, 0));
   allpoints.push(new PMPoint(-0.031086, 0.718826, 0));
   allpoints.push(new PMPoint(0.843482, -0.546948, 0));
   allpoints.push(new PMPoint(1.10616, -0.0584715, 0));
   allpoints.push(new PMPoint(-0.396033, -0.388284, 0));
   allpoints.push(new PMPoint(-0.130564, -0.631885, 0));
   allpoints.push(new PMPoint(0.472385, -1.00192, 0));
   allpoints.push(new PMPoint(0.825276, -0.574051, 0));
   allpoints.push(new PMPoint(1.45905, 0.486344, 0));
   allpoints.push(new PMPoint(1.08931, 0.759818, 0));
   allpoints.push(new PMPoint(1.06129, 0.776569, 0));
   allpoints.push(new PMPoint(0.559624, 1.01309, 0));
   allpoints.push(new PMPoint(-0.634341, 0.118055, 0));
   allpoints.push(new PMPoint(-0.509204, -0.219815, 0));
   allpoints.push(new PMPoint(-0.314464, 0.951454, 0));
   allpoints.push(new PMPoint(-0.748924, 0.816157, 0));
   allpoints.push(new PMPoint(-0.00305965, 1.33673, 0));
   allpoints.push(new PMPoint(-0.201726, 1.03615, 0));
   allpoints.push(new PMPoint(1.16938, -0.7006, 0));
   allpoints.push(new PMPoint(1.45905, -0.486344, 0));
   allpoints.push(new PMPoint(-0.187409, -0.98767, 0));
   allpoints.push(new PMPoint(0.364124, -1.04614, 0));
   allpoints.push(new PMPoint(-0.748924, -0.816157, 0));
   allpoints.push(new PMPoint(-0.219384, -0.981064, 0));
   allpoints.push(new PMPoint(1.00192, -1.16683, 0));
   allpoints.push(new PMPoint(1.09074, -0.817652, 0));
   allpoints.push(new PMPoint(1.6357, -0.106435, 0));
   allpoints.push(new PMPoint(1.72452, 0.242744, 0));
   allpoints.push(new PMPoint(1.76486, 0.949036, 0));
   allpoints.push(new PMPoint(1.31856, 1.03778, 0));
   allpoints.push(new PMPoint(1.19752, 1.11012, 0));
   allpoints.push(new PMPoint(0.968272, 1.38808, 0));
   allpoints.push(new PMPoint(-0.830794, 0.732653, 0));
   allpoints.push(new PMPoint(-0.985206, 0.199958, 0));
   allpoints.push(new PMPoint(-0.99118, 0.167859, 0));
   allpoints.push(new PMPoint(-1.03874, -0.384721, 0));
   allpoints.push(new PMPoint(-0.245893, 1.30517, 0));
   allpoints.push(new PMPoint(-0.70136, 1.36874, 0));
   allpoints.push(new PMPoint(0.579568, 1.54442, 0));
   allpoints.push(new PMPoint(0.226188, 1.61469, 0));
   allpoints.push(new PMPoint(1.22089, -1.0572, 0));
   allpoints.push(new PMPoint(1.76486, -0.949036, 0));
   allpoints.push(new PMPoint(-0.206427, -1.34747, 0));
   allpoints.push(new PMPoint(0.101451, -1.53462, 0));
   allpoints.push(new PMPoint(-0.70136, -1.36874, 0));
   allpoints.push(new PMPoint(-0.344521, -1.31893, 0));
   allpoints.push(new PMPoint(0.519948, -1.5545, 0));
   allpoints.push(new PMPoint(0.876788, -1.5047, 0));
   allpoints.push(new PMPoint(2.06479, 0.361181, 0));
   allpoints.push(new PMPoint(1.85508, 0.874629, 0));
   allpoints.push(new PMPoint(2.17967, -0.214595, 0));
   allpoints.push(new PMPoint(2.07412, 0.329891, 0));
   allpoints.push(new PMPoint(1.65931, 1.49352, 0));
   allpoints.push(new PMPoint(1.21308, 1.38229, 0));
   allpoints.push(new PMPoint(-1.38233, 0.674182, 0));
   allpoints.push(new PMPoint(-1.32548, 0.318396, 0));
   allpoints.push(new PMPoint(-1.35128, 0.179766, 0));
   allpoints.push(new PMPoint(-1.53231, -0.13175, 0));
   allpoints.push(new PMPoint(-0.214994, 1.66414, 0));
   allpoints.push(new PMPoint(-0.595805, 1.91322, 0));
   allpoints.push(new PMPoint(-1.06146, 1.38064, 0));
   allpoints.push(new PMPoint(-1.24249, 1.06913, 0));
   allpoints.push(new PMPoint(0.645318, 1.99958, 0));
   allpoints.push(new PMPoint(0.0929723, 2.04979, 0));
   allpoints.push(new PMPoint(1.30971, -1.40638, 0));
   allpoints.push(new PMPoint(1.65931, -1.49352, 0));
   allpoints.push(new PMPoint(-0.517072, -1.52999, 0));
   allpoints.push(new PMPoint(-0.211257, -1.99268, 0));
   allpoints.push(new PMPoint(-1.24249, -1.06913, 0));
   allpoints.push(new PMPoint(-1.06146, -1.38064, 0));
   allpoints.push(new PMPoint(0.625503, -2.09899, 0));
   allpoints.push(new PMPoint(1.08965, -1.79539, 0));
   allpoints.push(new PMPoint(2.48076, 0.557301, 0));
   allpoints.push(new PMPoint(2.31012, 0.874629, 0));
   allpoints.push(new PMPoint(2.56048, 0.0344898, 0));
   allpoints.push(new PMPoint(2.52958, 0.393461, 0));
   allpoints.push(new PMPoint(2.14567, 1.19812, 0));
   allpoints.push(new PMPoint(2.11477, 1.55709, 0));
   allpoints.push(new PMPoint(-1.92462, 0.55789, 0));
   allpoints.push(new PMPoint(-1.61191, 0.0998281, 0));
   allpoints.push(new PMPoint(-1.13978, 1.80506, 0));
   allpoints.push(new PMPoint(-1.05096, 1.45588, 0));
   allpoints.push(new PMPoint(-1.25009, 1.68762, 0));
   allpoints.push(new PMPoint(-1.70665, 1.37273, 0));
   allpoints.push(new PMPoint(0.662716, 2.45914, 0));
   allpoints.push(new PMPoint(0.302459, 2.45374, 0));
   allpoints.push(new PMPoint(2.11477, -1.55709, 0));
   allpoints.push(new PMPoint(2.14567, -1.19812, 0));
   allpoints.push(new PMPoint(-0.806744, -1.74424, 0));
   allpoints.push(new PMPoint(-0.755231, -2.10084, 0));
   allpoints.push(new PMPoint(-1.70665, -1.37273, 0));
   allpoints.push(new PMPoint(-1.25009, -1.68762, 0));
   allpoints.push(new PMPoint(1.00009, -2.35735, 0));
   allpoints.push(new PMPoint(1.32072, -2.19301, 0));
   allpoints.push(new PMPoint(2.95469, 0.845393, 0));
   allpoints.push(new PMPoint(2.50878, 1.17521, 0));
   allpoints.push(new PMPoint(2.89127, -0.108308, 0));
   allpoints.push(new PMPoint(3.0839, 0.411789, 0));
   allpoints.push(new PMPoint(-0.846711, 2.29284, 0));
   allpoints.push(new PMPoint(-1.20553, 2.26022, 0));
   allpoints.push(new PMPoint(-1.53081, 2.05188, 0));
   allpoints.push(new PMPoint(-1.80419, 1.81719, 0));
   allpoints.push(new PMPoint(0.625152, 3.01249, 0));
   allpoints.push(new PMPoint(0.127088, 2.76848, 0));
   allpoints.push(new PMPoint(-0.641863, -2.54653, 0));
   allpoints.push(new PMPoint(-0.297859, -2.4394, 0));
   allpoints.push(new PMPoint(-1.80419, -1.81719, 0));
   allpoints.push(new PMPoint(-1.53081, -2.05188, 0));
   allpoints.push(new PMPoint(0.992968, -2.71757, 0));
   allpoints.push(new PMPoint(1.54729, -2.69925, 0));
   allpoints.push(new PMPoint(-1.9138, 2.45304, 0));
   allpoints.push(new PMPoint(-2.14036, 1.94681, 0));

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

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(0, 15, 4, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(17, 5, 4, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(17, 4, 16, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 9, 22, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 22, 23, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(13, 12, 28, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(13, 28, 29, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(31, 4, 15, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(31, 15, 30, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(9, 8, 24, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(18, 6, 36, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(17, 16, 34, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(17, 34, 35, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(9, 42, 43, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(9, 43, 22, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(14, 33, 15, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(19, 18, 38, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(31, 30, 52, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(31, 52, 53, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(24, 47, 25, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(23, 22, 44, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(23, 44, 45, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(18, 37, 58, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(18, 58, 59, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(29, 28, 50, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(29, 50, 51, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(34, 16, 56, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(34, 56, 57, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(43, 42, 64, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(43, 64, 65, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(33, 32, 54, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(33, 54, 55, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(39, 38, 62, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(39, 62, 63, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(37, 36, 60, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(37, 60, 61, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(46, 68, 69, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(46, 69, 47, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(25, 47, 70, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(25, 70, 71, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(45, 44, 66, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(45, 66, 67, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(59, 58, 82, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(59, 82, 83, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(51, 50, 74, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(51, 74, 75, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(49, 48, 72, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(49, 72, 73, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(53, 52, 76, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(53, 76, 77, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(32, 78, 79, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(32, 79, 54, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(62, 38, 86, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(62, 86, 87, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(61, 60, 84, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(61, 84, 85, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(47, 69, 90, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(47, 90, 91, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(57, 56, 80, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(57, 80, 81, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(65, 64, 88, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(65, 88, 89, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(51, 75, 96, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(51, 96, 97, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(73, 72, 94, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(73, 94, 95, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(76, 98, 99, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(76, 99, 77, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(71, 70, 92, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(71, 92, 93, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(69, 108, 109, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(69, 109, 90, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(81, 80, 102, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(81, 102, 103, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(78, 100, 101, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(78, 101, 79, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(77, 99, 114, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(77, 114, 115, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(93, 92, 110, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(93, 110, 111, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(100, 116, 117, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(100, 117, 101, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(2, 7, 20, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(21, 20, 40, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(21, 40, 41, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(26, 10, 48, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(85, 84, 106, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(85, 106, 107, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(83, 82, 104, undefined, undefined, 56));
   faces.faces.push(new THREE.Face3(83, 104, 105, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(119, 103, 102, undefined, undefined, 57));
   faces.faces.push(new THREE.Face3(119, 102, 118, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(95, 94, 112, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(95, 112, 113, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(110, 120, 121, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(110, 121, 111, undefined, undefined, 59));


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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[100].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[83].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[119].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[95].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[110].vector);
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
