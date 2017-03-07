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

   var axes = [[77,122],
      [115,63],
      [57,109],
      [108,107],
      [98,97],
      [96,95],
      [86,46],
      [78,77],
      [80,79],
      [77,76],
      [32,73],
      [72,71],
      [63,62],
      [64,63],
      [66,65],
      [21,60],
      [58,57],
      [55,54],
      [57,56],
      [56,55],
      [49,14],
      [48,15],
      [45,44],
      [44,43],
      [46,45],
      [47,46],
      [37,8],
      [34,33],
      [35,34],
      [33,32],
      [32,31],
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
      [7,6],
      [6,5],
      [8,7],
      [9,8],
      [5,4],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.77672882547631,
      3.04280887270247,
      3.04280887270247,
      2.68680207558007,
      2.58801829469275,
      2.68680207558007,
      2.77672882547631,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.48923451380543,
      2.48923451380542,
      2.77672882547631,
      2.68680207558007,
      2.48923451380543,
      2.48923451380543,
      2.0344439357957,
      2.77672882547631,
      3.04280887270247,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      3.04280887270247,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.68680207558007,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.68680207558007,
      2.0344439357957,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543];

   var subtrees = [[136,137],
      [134,135],
      [132,133],
      [131],
      [128,129,130],
      [127],
      [125,126],
      [124],
      [123],
      [122,136,137],
      [120,121],
      [117,118,119],
      [116],
      [115,134,135],
      [114],
      [112,113],
      [111],
      [110],
      [109,132,133],
      [101,102,103,104,105,106,107,108,131],
      [99,100],
      [97,98,128,129,130],
      [89,90,91,92,93,94,95,96,127],
      [88],
      [87],
      [86,125,126],
      [84,85],
      [76,77,78,79,80,81,82,83,122,123,124,136,137],
      [75],
      [74],
      [73,120,121],
      [71,72,117,118,119],
      [70],
      [62,63,64,65,66,67,68,69,114,115,116,134,135],
      [61],
      [60,112,113],
      [59],
      [51,52,53,54,55,56,57,58,101,102,103,104,105,106,107,108,109,110,111,131,132,133],
      [50],
      [49,99,100],
      [48,97,98,128,129,130],
      [40,41,42,43,44,45,46,47,86,87,88,89,90,91,92,93,94,95,96,125,126,127],
      [39],
      [38],
      [37,84,85],
      [29,30,31,32,33,34,35,36,73,74,75,76,77,78,79,80,81,82,83,120,121,122,123,124,136,137],
      [28],
      [27,71,72,117,118,119],
      [19,20,21,22,23,24,25,26,60,61,62,63,64,65,66,67,68,69,70,112,113,114,115,116,134,135],
      [11,12,13,14,15,16,17,18,48,49,50,51,52,53,54,55,56,57,58,59,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,128,129,130,131,132,133],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,117,118,119,120,121,122,123,124,125,126,127,136,137]];

   var polytoperoot = [[0.874760616278226,-0.167064411699239,-0.437380308139113],
      [2.6180339887499,0,-1],
      [0.334128823398478,0,0.874760616278226]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.334129, 0, 0));
   allpoints.push(new PMPoint(0.167064, 0.289364, 0));
   allpoints.push(new PMPoint(-0.270316, -0.196396, 0));
   allpoints.push(new PMPoint(-0.373567, -0.514171, 0));
   allpoints.push(new PMPoint(-0.270316, -0.831947, 0));
   allpoints.push(new PMPoint(0, -1.02834, 0));
   allpoints.push(new PMPoint(0.334129, -1.02834, 0));
   allpoints.push(new PMPoint(0.604445, -0.831947, 0));
   allpoints.push(new PMPoint(0.707696, -0.514171, 0));
   allpoints.push(new PMPoint(0.604445, -0.196396, 0));
   allpoints.push(new PMPoint(0.132138, 0.621662, 0));
   allpoints.push(new PMPoint(-0.0914374, 0.869969, 0));
   allpoints.push(new PMPoint(-0.418265, 0.939438, 0));
   allpoints.push(new PMPoint(-0.723507, 0.803535, 0));
   allpoints.push(new PMPoint(-0.890571, 0.514171, 0));
   allpoints.push(new PMPoint(-0.855645, 0.181873, 0));
   allpoints.push(new PMPoint(-0.632069, -0.0664331, 0));
   allpoints.push(new PMPoint(-0.305242, -0.135902, 0));
   allpoints.push(new PMPoint(0.639371, -0.135902, 0));
   allpoints.push(new PMPoint(0.966198, -0.0664331, 0));
   allpoints.push(new PMPoint(1.18977, 0.181873, 0));
   allpoints.push(new PMPoint(1.2247, 0.514171, 0));
   allpoints.push(new PMPoint(1.05764, 0.803535, 0));
   allpoints.push(new PMPoint(0.752394, 0.939438, 0));
   allpoints.push(new PMPoint(0.425566, 0.869969, 0));
   allpoints.push(new PMPoint(0.20199, 0.621662, 0));
   allpoints.push(new PMPoint(0.931272, -0.265865, 0));
   allpoints.push(new PMPoint(-0.597143, -0.265865, 0));
   allpoints.push(new PMPoint(-0.643883, -0.317775, 0));
   allpoints.push(new PMPoint(-0.978012, -0.317775, 0));
   allpoints.push(new PMPoint(-1.24833, -0.514171, 0));
   allpoints.push(new PMPoint(-1.35158, -0.831947, 0));
   allpoints.push(new PMPoint(-1.24833, -1.14972, 0));
   allpoints.push(new PMPoint(-0.978012, -1.34612, 0));
   allpoints.push(new PMPoint(-0.643883, -1.34612, 0));
   allpoints.push(new PMPoint(-0.373567, -1.14972, 0));
   allpoints.push(new PMPoint(0.931272, -0.762477, 0));
   allpoints.push(new PMPoint(0.639371, -1.16425, 0));
   allpoints.push(new PMPoint(-0.305242, -1.16425, 0));
   allpoints.push(new PMPoint(-0.270316, -1.22474, 0));
   allpoints.push(new PMPoint(-0.373567, -1.54251, 0));
   allpoints.push(new PMPoint(-0.270316, -1.86029, 0));
   allpoints.push(new PMPoint(0, -2.05669, 0));
   allpoints.push(new PMPoint(0.334129, -2.05669, 0));
   allpoints.push(new PMPoint(0.604445, -1.86029, 0));
   allpoints.push(new PMPoint(0.707696, -1.54251, 0));
   allpoints.push(new PMPoint(0.604445, -1.22474, 0));
   allpoints.push(new PMPoint(-1.16089, 0.317775, 0));
   allpoints.push(new PMPoint(-1.05764, 0.803535, 0));
   allpoints.push(new PMPoint(-0.688581, 1.13583, 0));
   allpoints.push(new PMPoint(0.213804, 1.00587, 0));
   allpoints.push(new PMPoint(0.380869, 1.29524, 0));
   allpoints.push(new PMPoint(0.345943, 1.62753, 0));
   allpoints.push(new PMPoint(0.122367, 1.87584, 0));
   allpoints.push(new PMPoint(-0.20446, 1.94531, 0));
   allpoints.push(new PMPoint(-0.509702, 1.80941, 0));
   allpoints.push(new PMPoint(-0.676766, 1.52004, 0));
   allpoints.push(new PMPoint(-0.641841, 1.18774, 0));
   allpoints.push(new PMPoint(0.23539, 0.939438, 0));
   allpoints.push(new PMPoint(1.29303, -0.135902, 0));
   allpoints.push(new PMPoint(1.49502, 0.317775, 0));
   allpoints.push(new PMPoint(1.52994, 0.378269, 0));
   allpoints.push(new PMPoint(1.85677, 0.447738, 0));
   allpoints.push(new PMPoint(2.08034, 0.696044, 0));
   allpoints.push(new PMPoint(2.11527, 1.02834, 0));
   allpoints.push(new PMPoint(1.94821, 1.31771, 0));
   allpoints.push(new PMPoint(1.64296, 1.45361, 0));
   allpoints.push(new PMPoint(1.31614, 1.38414, 0));
   allpoints.push(new PMPoint(1.09256, 1.13583, 0));
   allpoints.push(new PMPoint(1.02271, 1.13583, 0));
   allpoints.push(new PMPoint(0.956002, -0.737747, 0));
   allpoints.push(new PMPoint(1.17958, -0.489441, 0));
   allpoints.push(new PMPoint(-1.57516, -0.583641, 0));
   allpoints.push(new PMPoint(-1.57516, -1.08025, 0));
   allpoints.push(new PMPoint(-0.810948, -1.63548, 0));
   allpoints.push(new PMPoint(-1.58246, -1.14972, 0));
   allpoints.push(new PMPoint(-1.85277, -1.34612, 0));
   allpoints.push(new PMPoint(-1.95602, -1.66389, 0));
   allpoints.push(new PMPoint(-1.85277, -1.98167, 0));
   allpoints.push(new PMPoint(-1.58246, -2.17806, 0));
   allpoints.push(new PMPoint(-1.24833, -2.17806, 0));
   allpoints.push(new PMPoint(-0.978012, -1.98167, 0));
   allpoints.push(new PMPoint(-0.874761, -1.66389, 0));
   allpoints.push(new PMPoint(0.673914, -1.15877, 0));
   allpoints.push(new PMPoint(1.00074, -1.0893, 0));
   allpoints.push(new PMPoint(0.931272, -1.29421, 0));
   allpoints.push(new PMPoint(0.931272, -1.79082, 0));
   allpoints.push(new PMPoint(0.167064, -2.34605, 0));
   allpoints.push(new PMPoint(0.230877, -2.37446, 0));
   allpoints.push(new PMPoint(0.334129, -2.69224, 0));
   allpoints.push(new PMPoint(0.604445, -2.88863, 0));
   allpoints.push(new PMPoint(0.938574, -2.88863, 0));
   allpoints.push(new PMPoint(1.20889, -2.69224, 0));
   allpoints.push(new PMPoint(1.31214, -2.37446, 0));
   allpoints.push(new PMPoint(1.20889, -2.05669, 0));
   allpoints.push(new PMPoint(0.938574, -1.86029, 0));
   allpoints.push(new PMPoint(-1.08697, 0.784487, 0));
   allpoints.push(new PMPoint(-1.35728, 0.588091, 0));
   allpoints.push(new PMPoint(-0.723507, 1.13766, 0));
   allpoints.push(new PMPoint(-1.05764, 1.13766, 0));
   allpoints.push(new PMPoint(-0.0373958, 2.23467, 0));
   allpoints.push(new PMPoint(-0.0723218, 2.56697, 0));
   allpoints.push(new PMPoint(-0.295898, 2.81528, 0));
   allpoints.push(new PMPoint(-0.622725, 2.88475, 0));
   allpoints.push(new PMPoint(-0.927967, 2.74884, 0));
   allpoints.push(new PMPoint(-1.09503, 2.45948, 0));
   allpoints.push(new PMPoint(-1.06011, 2.12718, 0));
   allpoints.push(new PMPoint(-0.836529, 1.87888, 0));
   allpoints.push(new PMPoint(-0.843831, 1.80941, 0));
   allpoints.push(new PMPoint(0.0191156, 2.19362, 0));
   allpoints.push(new PMPoint(-0.947082, 1.32365, 0));
   allpoints.push(new PMPoint(1.6108, -0.032651, 0));
   allpoints.push(new PMPoint(1.50755, 0.285124, 0));
   allpoints.push(new PMPoint(2.28234, 1.31771, 0));
   allpoints.push(new PMPoint(2.1836, 0.378269, 0));
   allpoints.push(new PMPoint(1.75352, 0.129963, 0));
   allpoints.push(new PMPoint(1.12307, -1.02711, 0));
   allpoints.push(new PMPoint(1.44989, -0.957642, 0));
   allpoints.push(new PMPoint(1.48482, -0.625344, 0));
   allpoints.push(new PMPoint(-1.82346, -0.807217, 0));
   allpoints.push(new PMPoint(-1.59989, -1.05552, 0));
   allpoints.push(new PMPoint(-1.8877, -1.01382, 0));
   allpoints.push(new PMPoint(-1.8877, -2.31397, 0));
   allpoints.push(new PMPoint(-2.1796, -1.41559, 0));
   allpoints.push(new PMPoint(0.956002, -1.76609, 0));
   allpoints.push(new PMPoint(1.17958, -1.51778, 0));
   allpoints.push(new PMPoint(1.24382, -1.72439, 0));
   allpoints.push(new PMPoint(-1.19022, 1.10226, 0));
   allpoints.push(new PMPoint(-1.52435, 1.10226, 0));
   allpoints.push(new PMPoint(-1.6276, 0.784487, 0));
   allpoints.push(new PMPoint(-1.16336, 1.80941, 0));
   allpoints.push(new PMPoint(-1.13319, 1.64234, 0));
   allpoints.push(new PMPoint(-0.966131, 1.35298, 0));
   allpoints.push(new PMPoint(1.7873, 0.120911, 0));
   allpoints.push(new PMPoint(2.11413, 0.0514416, 0));
   allpoints.push(new PMPoint(-2.22, -1.04875, 0));
   allpoints.push(new PMPoint(-2.18507, -1.38104, 0));

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

   faces.faces.push(new THREE.Face3(27, 9, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 71, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 36, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 5, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 60, 112, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 112, 113, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 128, 129, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 129, 130, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 130, 98, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 84, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 85, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(101, 102, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 103, 104, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 104, 105, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 105, 106, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 106, 107, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 107, 108, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 108, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 56, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 73, 120, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 120, 121, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 125, 126, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 126, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 46, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(77, 76, 122, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 88, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(123, 80, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 77, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 79, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 80, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 81, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(124, 78, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 65, 114, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(93, 94, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 95, 96, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 96, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 45, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 44, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 89, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 90, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 91, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 95, 127, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(137, 77, 122, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(137, 122, 136, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(108, 107, 131, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 63, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 46, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 134, 135, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 135, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 56, 109, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 109, 132, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 132, 133, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 110, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 62, 116, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 71, 117, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 117, 118, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 118, 119, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 97, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 98, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 111, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 99, 100, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 100, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 63, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 65, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 66, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 58, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 13, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 59, 12, undefined, undefined, 0));

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
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[130].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[101].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[123].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[124].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[137].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[131].vector);
   line.vertices.push(allpoints[108].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[132].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[59].vector);
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
