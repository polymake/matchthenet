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

   var axes = [[134,133],
      [126,84],
      [114,64],
      [67,112],
      [108,56],
      [106,45],
      [105,46],
      [103,49],
      [95,94],
      [91,90],
      [89,88],
      [84,83],
      [85,84],
      [34,81],
      [80,39],
      [75,74],
      [73,72],
      [64,63],
      [65,64],
      [68,67],
      [67,66],
      [21,61],
      [56,55],
      [57,56],
      [45,44],
      [46,45],
      [47,46],
      [49,48],
      [50,49],
      [41,16],
      [39,38],
      [35,34],
      [37,36],
      [36,35],
      [38,37],
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

   var angles = [2.58801829469275,
      2.77672882547631,
      3.04280887270247,
      3.04280887270247,
      2.77672882547631,
      2.77672882547631,
      3.04280887270247,
      2.77672882547631,
      2.68680207558007,
      2.68680207558007,
      2.68680207558007,
      2.48923451380542,
      2.68680207558007,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.48923451380543,
      2.68680207558007,
      2.48923451380542,
      2.77672882547631,
      2.48923451380542,
      2.68680207558007,
      2.48923451380542,
      2.68680207558007,
      2.48923451380542,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.0344439357957,
      2.0344439357957,
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
      2.48923451380542,
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
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

   var subtrees = [[145,146,147],
      [143,144],
      [141,142],
      [139,140],
      [137,138],
      [135,136],
      [133,134,145,146,147],
      [131,132],
      [130],
      [129],
      [128],
      [127],
      [126,143,144],
      [124,125],
      [122,123],
      [119,120,121],
      [116,117,118],
      [115],
      [114,141,142],
      [113],
      [112,139,140],
      [110,111],
      [109],
      [108,137,138],
      [107],
      [106,135,136],
      [105,133,134,145,146,147],
      [104],
      [103,131,132],
      [101,102],
      [100],
      [99],
      [98],
      [90,91,92,93,94,95,96,97,129,130],
      [82,83,84,85,86,87,88,89,126,127,128,143,144],
      [81,124,125],
      [80,122,123],
      [78,79],
      [76,77],
      [74,75,119,120,121],
      [72,73,116,117,118],
      [71],
      [63,64,65,66,67,68,69,70,112,113,114,115,139,140,141,142],
      [62],
      [61,110,111],
      [60],
      [52,53,54,55,56,57,58,59,108,109,137,138],
      [51],
      [43,44,45,46,47,48,49,50,103,104,105,106,107,131,132,133,134,135,136,145,146,147],
      [42],
      [41,101,102],
      [33,34,35,36,37,38,39,40,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,122,123,124,125,126,127,128,129,130,143,144],
      [32],
      [31],
      [30,78,79],
      [29,76,77],
      [28,74,75,119,120,121],
      [27,72,73,116,117,118],
      [19,20,21,22,23,24,25,26,61,62,63,64,65,66,67,68,69,70,71,110,111,112,113,114,115,139,140,141,142],
      [11,12,13,14,15,16,17,18,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,101,102,103,104,105,106,107,108,109,131,132,133,134,135,136,137,138,145,146,147],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,143,144]];

   var polytoperoot = [[0.908009793221872,-0.166685108168362,-0.422928616046959],
      [2.61803398874989,0,-1],
      [0.333370216336725,0,0.872774557206451]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.33337, 0, 0));
   allpoints.push(new PMPoint(0.166685, 0.288707, 0));
   allpoints.push(new PMPoint(-0.269702, -0.19595, 0));
   allpoints.push(new PMPoint(-0.372719, -0.513004, 0));
   allpoints.push(new PMPoint(-0.269702, -0.830058, 0));
   allpoints.push(new PMPoint(0, -1.02601, 0));
   allpoints.push(new PMPoint(0.33337, -1.02601, 0));
   allpoints.push(new PMPoint(0.603072, -0.830058, 0));
   allpoints.push(new PMPoint(0.706089, -0.513004, 0));
   allpoints.push(new PMPoint(0.603072, -0.19595, 0));
   allpoints.push(new PMPoint(0.131838, 0.620251, 0));
   allpoints.push(new PMPoint(-0.0912298, 0.867993, 0));
   allpoints.push(new PMPoint(-0.417315, 0.937305, 0));
   allpoints.push(new PMPoint(-0.721864, 0.801711, 0));
   allpoints.push(new PMPoint(-0.888549, 0.513004, 0));
   allpoints.push(new PMPoint(-0.853702, 0.18146, 0));
   allpoints.push(new PMPoint(-0.630634, -0.0662823, 0));
   allpoints.push(new PMPoint(-0.304549, -0.135594, 0));
   allpoints.push(new PMPoint(0.637919, -0.135594, 0));
   allpoints.push(new PMPoint(0.964004, -0.0662823, 0));
   allpoints.push(new PMPoint(1.18707, 0.18146, 0));
   allpoints.push(new PMPoint(1.22192, 0.513004, 0));
   allpoints.push(new PMPoint(1.05523, 0.801711, 0));
   allpoints.push(new PMPoint(0.750685, 0.937305, 0));
   allpoints.push(new PMPoint(0.4246, 0.867993, 0));
   allpoints.push(new PMPoint(0.201532, 0.620251, 0));
   allpoints.push(new PMPoint(0.929158, -0.265262, 0));
   allpoints.push(new PMPoint(-0.595787, -0.265262, 0));
   allpoints.push(new PMPoint(0.929158, -0.760746, 0));
   allpoints.push(new PMPoint(-0.595787, -0.760746, 0));
   allpoints.push(new PMPoint(0.637919, -1.1616, 0));
   allpoints.push(new PMPoint(-0.304549, -1.1616, 0));
   allpoints.push(new PMPoint(-0.269702, -1.22196, 0));
   allpoints.push(new PMPoint(-0.372719, -1.53901, 0));
   allpoints.push(new PMPoint(-0.269702, -1.85607, 0));
   allpoints.push(new PMPoint(0, -2.05202, 0));
   allpoints.push(new PMPoint(0.33337, -2.05202, 0));
   allpoints.push(new PMPoint(0.603072, -1.85607, 0));
   allpoints.push(new PMPoint(0.706089, -1.53901, 0));
   allpoints.push(new PMPoint(0.603072, -1.22196, 0));
   allpoints.push(new PMPoint(-0.956719, -0.135594, 0));
   allpoints.push(new PMPoint(-1.15825, 0.317054, 0));
   allpoints.push(new PMPoint(-0.756711, 1.13326, 0));
   allpoints.push(new PMPoint(-0.979779, 1.381, 0));
   allpoints.push(new PMPoint(-1.30586, 1.45031, 0));
   allpoints.push(new PMPoint(-1.61041, 1.31472, 0));
   allpoints.push(new PMPoint(-1.7771, 1.02601, 0));
   allpoints.push(new PMPoint(-1.74225, 0.694464, 0));
   allpoints.push(new PMPoint(-1.51918, 0.446722, 0));
   allpoints.push(new PMPoint(-1.1931, 0.37741, 0));
   allpoints.push(new PMPoint(-0.687017, 1.13326, 0));
   allpoints.push(new PMPoint(0.213319, 1.00359, 0));
   allpoints.push(new PMPoint(0.380004, 1.29229, 0));
   allpoints.push(new PMPoint(0.345157, 1.62384, 0));
   allpoints.push(new PMPoint(0.122089, 1.87158, 0));
   allpoints.push(new PMPoint(-0.203996, 1.94089, 0));
   allpoints.push(new PMPoint(-0.508545, 1.8053, 0));
   allpoints.push(new PMPoint(-0.67523, 1.51659, 0));
   allpoints.push(new PMPoint(-0.640383, 1.18505, 0));
   allpoints.push(new PMPoint(0.234855, 0.937305, 0));
   allpoints.push(new PMPoint(1.29009, -0.135594, 0));
   allpoints.push(new PMPoint(1.49162, 0.317054, 0));
   allpoints.push(new PMPoint(1.52647, 0.37741, 0));
   allpoints.push(new PMPoint(1.85255, 0.446722, 0));
   allpoints.push(new PMPoint(2.07562, 0.694464, 0));
   allpoints.push(new PMPoint(2.11047, 1.02601, 0));
   allpoints.push(new PMPoint(1.94378, 1.31472, 0));
   allpoints.push(new PMPoint(1.63923, 1.45031, 0));
   allpoints.push(new PMPoint(1.31315, 1.381, 0));
   allpoints.push(new PMPoint(1.09008, 1.13326, 0));
   allpoints.push(new PMPoint(1.02039, 1.13326, 0));
   allpoints.push(new PMPoint(0.953832, -0.736072, 0));
   allpoints.push(new PMPoint(1.1769, -0.48833, 0));
   allpoints.push(new PMPoint(-0.84353, -0.48833, 0));
   allpoints.push(new PMPoint(-0.620462, -0.736072, 0));
   allpoints.push(new PMPoint(0.672384, -1.15614, 0));
   allpoints.push(new PMPoint(0.998469, -1.08683, 0));
   allpoints.push(new PMPoint(-0.665099, -1.08683, 0));
   allpoints.push(new PMPoint(-0.339014, -1.15614, 0));
   allpoints.push(new PMPoint(0.929158, -1.29127, 0));
   allpoints.push(new PMPoint(-0.595787, -1.29127, 0));
   allpoints.push(new PMPoint(0.230353, -2.36907, 0));
   allpoints.push(new PMPoint(0.33337, -2.68612, 0));
   allpoints.push(new PMPoint(0.603072, -2.88207, 0));
   allpoints.push(new PMPoint(0.936443, -2.88207, 0));
   allpoints.push(new PMPoint(1.20614, -2.68612, 0));
   allpoints.push(new PMPoint(1.30916, -2.36907, 0));
   allpoints.push(new PMPoint(1.20614, -2.05202, 0));
   allpoints.push(new PMPoint(0.936443, -1.85607, 0));
   allpoints.push(new PMPoint(-0.603072, -1.85607, 0));
   allpoints.push(new PMPoint(-0.872775, -2.05202, 0));
   allpoints.push(new PMPoint(-0.975792, -2.36907, 0));
   allpoints.push(new PMPoint(-0.872775, -2.68612, 0));
   allpoints.push(new PMPoint(-0.603072, -2.88207, 0));
   allpoints.push(new PMPoint(-0.269702, -2.88207, 0));
   allpoints.push(new PMPoint(0, -2.68612, 0));
   allpoints.push(new PMPoint(0.103017, -2.36907, 0));
   allpoints.push(new PMPoint(0.166685, -2.34072, 0));
   allpoints.push(new PMPoint(-0.595787, -1.78675, 0));
   allpoints.push(new PMPoint(0.929158, -1.78675, 0));
   allpoints.push(new PMPoint(-1.17076, 0.284477, 0));
   allpoints.push(new PMPoint(-1.27377, -0.0325768, 0));
   allpoints.push(new PMPoint(-1.41617, 0.129668, 0));
   allpoints.push(new PMPoint(-1.84527, 0.37741, 0));
   allpoints.push(new PMPoint(-1.94378, 1.31472, 0));
   allpoints.push(new PMPoint(-1.57557, 1.64626, 0));
   allpoints.push(new PMPoint(-1.0828, 1.69805, 0));
   allpoints.push(new PMPoint(-0.473698, 2.13684, 0));
   allpoints.push(new PMPoint(0.0190722, 2.18863, 0));
   allpoints.push(new PMPoint(1.60714, -0.0325768, 0));
   allpoints.push(new PMPoint(1.50413, 0.284477, 0));
   allpoints.push(new PMPoint(2.27715, 1.31472, 0));
   allpoints.push(new PMPoint(1.90894, 1.64626, 0));
   allpoints.push(new PMPoint(2.17864, 0.37741, 0));
   allpoints.push(new PMPoint(1.74954, 0.129668, 0));
   allpoints.push(new PMPoint(1.12052, -1.02478, 0));
   allpoints.push(new PMPoint(1.4466, -0.955468, 0));
   allpoints.push(new PMPoint(1.48145, -0.623924, 0));
   allpoints.push(new PMPoint(-1.14808, -0.623924, 0));
   allpoints.push(new PMPoint(-1.11323, -0.955468, 0));
   allpoints.push(new PMPoint(-0.787147, -1.02478, 0));
   allpoints.push(new PMPoint(0.953832, -1.76208, 0));
   allpoints.push(new PMPoint(1.1769, -1.51434, 0));
   allpoints.push(new PMPoint(-0.84353, -1.51434, 0));
   allpoints.push(new PMPoint(-0.620462, -1.76208, 0));
   allpoints.push(new PMPoint(0.769757, -3.17078, 0));
   allpoints.push(new PMPoint(0.298524, -3.01767, 0));
   allpoints.push(new PMPoint(1.24099, -1.72047, 0));
   allpoints.push(new PMPoint(-0.907621, -1.72047, 0));
   allpoints.push(new PMPoint(-0.436387, -3.17078, 0));
   allpoints.push(new PMPoint(-1.83624, 0.343705, 0));
   allpoints.push(new PMPoint(-1.73322, 0.0266507, 0));
   allpoints.push(new PMPoint(-1.61041, 1.64809, 0));
   allpoints.push(new PMPoint(-1.94378, 1.64809, 0));
   allpoints.push(new PMPoint(-1.10991, 1.72001, 0));
   allpoints.push(new PMPoint(-1.37962, 1.91596, 0));
   allpoints.push(new PMPoint(-0.0080459, 2.21059, 0));
   allpoints.push(new PMPoint(-0.277748, 2.40654, 0));
   allpoints.push(new PMPoint(2.27715, 1.64809, 0));
   allpoints.push(new PMPoint(1.94378, 1.64809, 0));
   allpoints.push(new PMPoint(1.78324, 0.120636, 0));
   allpoints.push(new PMPoint(2.10933, 0.0513249, 0));
   allpoints.push(new PMPoint(0.314365, -3.04876, 0));
   allpoints.push(new PMPoint(0.48105, -3.33747, 0));
   allpoints.push(new PMPoint(-1.5074, 1.96514, 0));
   allpoints.push(new PMPoint(-1.7771, 2.16109, 0));
   allpoints.push(new PMPoint(-2.0468, 1.96514, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
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

   faces.faces.push(new THREE.Face3(21, 61, 110, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(21, 110, 111, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(9, 8, 29, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(5, 4, 30, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(16, 101, 102, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(16, 102, 41, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(74, 119, 120, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(74, 120, 121, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(74, 121, 75, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(8, 76, 77, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(8, 77, 29, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(8, 7, 31, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(5, 30, 78, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(5, 78, 79, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(6, 5, 32, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(50, 49, 103, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(137, 138, 108, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(137, 108, 56, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(57, 56, 108, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(135, 136, 106, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(135, 106, 45, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(49, 131, 132, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(49, 132, 103, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(39, 122, 123, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(39, 123, 80, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(40, 39, 80, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(34, 33, 81, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(49, 48, 104, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(91, 90, 129, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(86, 87, 88, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 88, 89, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 89, 38, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 38, 37, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 37, 82, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 82, 83, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 83, 84, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(86, 84, 85, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(67, 112, 139, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(67, 139, 140, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(67, 66, 112, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(46, 133, 134, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(46, 134, 105, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(47, 46, 105, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(92, 93, 94, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 94, 95, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 95, 96, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 96, 97, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 97, 36, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 36, 35, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 35, 90, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(92, 90, 91, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(85, 84, 126, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(95, 94, 130, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(84, 143, 144, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(84, 144, 126, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(84, 83, 127, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(37, 36, 98, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(35, 34, 99, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(39, 38, 100, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(146, 147, 134, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(146, 134, 133, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(146, 133, 145, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(89, 88, 128, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(34, 81, 124, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(34, 124, 125, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(46, 45, 106, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(68, 67, 113, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(65, 64, 114, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(7, 6, 33, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 33, 34, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 34, 35, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 35, 36, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 36, 37, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 37, 38, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 38, 39, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(7, 39, 40, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(64, 141, 142, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(64, 142, 114, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(44, 107, 45, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(55, 109, 56, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(64, 63, 115, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(73, 72, 116, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(73, 116, 117, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(73, 117, 118, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(16, 15, 42, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(22, 21, 62, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(15, 14, 43, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 43, 44, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 44, 45, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 45, 46, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 46, 47, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 47, 48, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 48, 49, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(15, 49, 50, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(23, 22, 63, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 63, 64, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 64, 65, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 65, 66, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 66, 67, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 67, 68, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 68, 69, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 69, 70, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(14, 13, 51, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(24, 23, 71, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(52, 53, 54, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 54, 55, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 55, 56, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 56, 57, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 57, 58, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 58, 59, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 59, 13, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(52, 13, 12, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(11, 60, 12, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(0, 2, 11, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 24, 25, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 25, 26, undefined, undefined, 61));


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
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
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
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
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
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[138].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[137].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[135].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[131].vector);
   line.vertices.push(allpoints[132].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[123].vector);
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
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[91].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[139].vector);
   line.vertices.push(allpoints[140].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[130].vector);
   line.vertices.push(allpoints[95].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[144].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[146].vector);
   line.vertices.push(allpoints[147].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[145].vector);
   line.vertices.push(allpoints[146].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[114].vector);
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
   line.vertices.push(allpoints[141].vector);
   line.vertices.push(allpoints[142].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[118].vector);
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
