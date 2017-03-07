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

   var axes = [[91,90],
      [87,71],
      [82,81],
      [62,80],
      [77,76],
      [75,74],
      [72,55],
      [21,71],
      [68,67],
      [66,65],
      [64,63],
      [62,14],
      [43,61],
      [59,58],
      [57,56],
      [39,55],
      [21,53],
      [51,33],
      [50,49],
      [48,47],
      [46,45],
      [44,14],
      [43,42],
      [41,40],
      [23,39],
      [39,38],
      [21,37],
      [34,33],
      [32,31],
      [17,32],
      [29,15],
      [28,14],
      [27,26],
      [24,10],
      [23,22],
      [21,9],
      [20,19],
      [18,17],
      [17,6],
      [16,15],
      [4,14],
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

   var angles = [2.69061369219015,
      2.71039914982383,
      2.69061369219015,
      2.71039914982383,
      2.66676269530584,
      2.69902858238642,
      2.68449868983043,
      2.71576555388821,
      2.66676269530584,
      2.65582886583527,
      2.69902858238642,
      2.71576555388821,
      2.68449868983043,
      2.66264388466519,
      2.70287311523343,
      2.68449868983043,
      2.71576555388821,
      2.65141765217348,
      2.66264388466519,
      2.65141765217348,
      2.70287311523343,
      2.71576555388821,
      2.68449868983043,
      2.66676269530584,
      2.69902858238642,
      2.68805111602412,
      2.71576555388821,
      2.65141765217348,
      2.66264388466519,
      2.65761870792341,
      2.69902858238642,
      2.71576555388821,
      2.6792798785425,
      2.67957999423518,
      2.69902858238642,
      2.71576555388821,
      2.66551890452117,
      2.65761870792341,
      2.66264388466519,
      2.69902858238642,
      2.71576555388821,
      2.68449868983043,
      2.6861788800548,
      2.70287311523343,
      2.71039914982383,
      2.67520986370487,
      2.67236773031476,
      2.70287311523343,
      2.71039914982383,
      2.69699128655038,
      2.69061369219015,
      2.69902858238642,
      2.68805111602412,
      2.69902858238642];

   var subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [90,91,100,101],
      [88,89],
      [87,98,99],
      [85,86],
      [83,84],
      [81,82,96,97],
      [80,94,95],
      [78,79],
      [76,77,92,93],
      [74,75,90,91,100,101],
      [72,73,88,89],
      [71,87,98,99],
      [69,70],
      [67,68,85,86],
      [65,66,83,84],
      [63,64,81,82,96,97],
      [62,80,94,95],
      [60,61,78,79],
      [58,59,76,77,92,93],
      [56,57,74,75,90,91,100,101],
      [54,55,72,73,88,89],
      [53,71,87,98,99],
      [51,52,69,70],
      [49,50,67,68,85,86],
      [47,48,65,66,83,84],
      [45,46,63,64,81,82,96,97],
      [44,62,80,94,95],
      [42,43,60,61,78,79],
      [40,41,58,59,76,77,92,93],
      [38,39,54,55,56,57,72,73,74,75,88,89,90,91,100,101],
      [37,53,71,87,98,99],
      [35,36],
      [33,34,51,52,69,70],
      [31,32,47,48,49,50,65,66,67,68,83,84,85,86],
      [29,30,45,46,63,64,81,82,96,97],
      [28,44,62,80,94,95],
      [26,27,42,43,60,61,78,79],
      [24,25,40,41,58,59,76,77,92,93],
      [22,23,38,39,54,55,56,57,72,73,74,75,88,89,90,91,100,101],
      [21,37,53,71,87,98,99],
      [19,20,35,36],
      [17,18,31,32,33,34,47,48,49,50,51,52,65,66,67,68,69,70,83,84,85,86],
      [15,16,29,30,45,46,63,64,81,82,96,97],
      [14,28,44,62,80,94,95],
      [12,13,26,27,42,43,60,61,78,79],
      [10,11,24,25,40,41,58,59,76,77,92,93],
      [8,9,21,22,23,37,38,39,53,54,55,56,57,71,72,73,74,75,87,88,89,90,91,98,99,100,101],
      [6,7,17,18,19,20,31,32,33,34,35,36,47,48,49,50,51,52,65,66,67,68,69,70,83,84,85,86],
      [4,5,12,13,14,15,16,26,27,28,29,30,42,43,44,45,46,60,61,62,63,64,78,79,80,81,82,94,95,96,97]];

   var polytoperoot = [[0,-0.833790852259164,-0.515311086204906],
      [-0.190570004403417,-1.00574943764758,-0.313238592271354],
      [-0.568546304103551,0.0982028359671983,0.0305850711359767]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.539725, 0, 0));
   allpoints.push(new PMPoint(0.514138, 0.46149, 0));
   allpoints.push(new PMPoint(0.15468, 0.411496, 0));
   allpoints.push(new PMPoint(0.192318, -0.492006, 0));
   allpoints.push(new PMPoint(0.510915, -0.355038, 0));
   allpoints.push(new PMPoint(1.10384, 0.0480247, 0));
   allpoints.push(new PMPoint(0.883982, 0.465626, 0));
   allpoints.push(new PMPoint(-0.0835984, 0.674922, 0));
   allpoints.push(new PMPoint(-0.392875, 0.353136, 0));
   allpoints.push(new PMPoint(0.40245, 1.02034, 0));
   allpoints.push(new PMPoint(-0.0593978, 0.69494, 0));
   allpoints.push(new PMPoint(0.806738, -0.553458, 0));
   allpoints.push(new PMPoint(1.10153, -0.0701006, 0));
   allpoints.push(new PMPoint(-0.838683, -0.822065, 0));
   allpoints.push(new PMPoint(0.417046, -0.970078, 0));
   allpoints.push(new PMPoint(0.788386, -0.578402, 0));
   allpoints.push(new PMPoint(1.48728, 0.489208, 0));
   allpoints.push(new PMPoint(1.09348, 0.784311, 0));
   allpoints.push(new PMPoint(1.06116, 0.803355, 0));
   allpoints.push(new PMPoint(0.52574, 1.03127, 0));
   allpoints.push(new PMPoint(-1.06459, -0.495801, 0));
   allpoints.push(new PMPoint(-0.35626, 0.902573, 0));
   allpoints.push(new PMPoint(-0.761303, 0.731708, 0));
   allpoints.push(new PMPoint(-0.0862084, 1.31359, 0));
   allpoints.push(new PMPoint(-0.254261, 0.991922, 0));
   allpoints.push(new PMPoint(1.11988, -0.731968, 0));
   allpoints.push(new PMPoint(1.43775, -0.537626, 0));
   allpoints.push(new PMPoint(0.321488, -1.00423, 0));
   allpoints.push(new PMPoint(0.914335, -1.17986, 0));
   allpoints.push(new PMPoint(1.03583, -0.840499, 0));
   allpoints.push(new PMPoint(1.64582, -0.146616, 0));
   allpoints.push(new PMPoint(1.75973, 0.215412, 0));
   allpoints.push(new PMPoint(1.824, 0.988407, 0));
   allpoints.push(new PMPoint(1.33756, 1.08287, 0));
   allpoints.push(new PMPoint(1.19233, 1.16599, 0));
   allpoints.push(new PMPoint(0.930623, 1.44922, 0));
   allpoints.push(new PMPoint(-0.826892, 0.654276, 0));
   allpoints.push(new PMPoint(-0.320551, 1.26373, 0));
   allpoints.push(new PMPoint(-0.782692, 1.27101, 0));
   allpoints.push(new PMPoint(0.494249, 1.59496, 0));
   allpoints.push(new PMPoint(0.11402, 1.62457, 0));
   allpoints.push(new PMPoint(1.13604, -1.09206, 0));
   allpoints.push(new PMPoint(1.70063, -1.04999, 0));
   allpoints.push(new PMPoint(0.0415525, -1.45221, 0));
   allpoints.push(new PMPoint(0.403011, -1.49815, 0));
   allpoints.push(new PMPoint(0.749795, -1.49578, 0));
   allpoints.push(new PMPoint(2.13073, 0.322877, 0));
   allpoints.push(new PMPoint(1.93468, 0.892215, 0));
   allpoints.push(new PMPoint(2.2016, -0.297373, 0));
   allpoints.push(new PMPoint(2.13986, 0.283881, 0));
   allpoints.push(new PMPoint(1.69859, 1.57735, 0));
   allpoints.push(new PMPoint(1.22297, 1.45108, 0));
   allpoints.push(new PMPoint(-1.34473, 0.54987, 0));
   allpoints.push(new PMPoint(-0.331075, 1.63345, 0));
   allpoints.push(new PMPoint(-0.757061, 1.83659, 0));
   allpoints.push(new PMPoint(-1.13631, 1.22815, 0));
   allpoints.push(new PMPoint(-1.26054, 0.904377, 0));
   allpoints.push(new PMPoint(0.50221, 2.08699, 0));
   allpoints.push(new PMPoint(-0.0813902, 2.05416, 0));
   allpoints.push(new PMPoint(1.17781, -1.44581, 0));
   allpoints.push(new PMPoint(1.50696, -1.58199, 0));
   allpoints.push(new PMPoint(-0.292297, -1.8616, 0));
   allpoints.push(new PMPoint(0.424254, -2.02598, 0));
   allpoints.push(new PMPoint(0.918632, -1.80943, 0));
   allpoints.push(new PMPoint(2.58748, 0.506006, 0));
   allpoints.push(new PMPoint(2.42899, 0.857563, 0));
   allpoints.push(new PMPoint(2.62097, -0.0808965, 0));
   allpoints.push(new PMPoint(2.63169, 0.300334, 0));
   allpoints.push(new PMPoint(2.22975, 1.27286, 0));
   allpoints.push(new PMPoint(2.18439, 1.65581, 0));
   allpoints.push(new PMPoint(-1.84541, 0.381417, 0));
   allpoints.push(new PMPoint(-1.2832, 1.62752, 0));
   allpoints.push(new PMPoint(-1.1375, 1.30248, 0));
   allpoints.push(new PMPoint(-1.37049, 1.49655, 0));
   allpoints.push(new PMPoint(-1.74715, 1.10998, 0));
   allpoints.push(new PMPoint(0.439107, 2.57503, 0));
   allpoints.push(new PMPoint(0.0645988, 2.50295, 0));
   allpoints.push(new PMPoint(1.94575, -1.7272, 0));
   allpoints.push(new PMPoint(2.04633, -1.37127, 0));
   allpoints.push(new PMPoint(-0.818815, -1.90443, 0));
   allpoints.push(new PMPoint(0.731038, -2.34084, 0));
   allpoints.push(new PMPoint(1.08035, -2.24241, 0));
   allpoints.push(new PMPoint(3.10393, 0.774153, 0));
   allpoints.push(new PMPoint(2.6683, 1.15996, 0));
   allpoints.push(new PMPoint(2.9415, -0.265454, 0));
   allpoints.push(new PMPoint(3.21015, 0.237148, 0));
   allpoints.push(new PMPoint(-2.07075, -0.0963651, 0));
   allpoints.push(new PMPoint(-1.08827, 2.17279, 0));
   allpoints.push(new PMPoint(-1.44112, 2.0619, 0));
   allpoints.push(new PMPoint(-1.71888, 1.80028, 0));
   allpoints.push(new PMPoint(-1.93393, 1.50794, 0));
   allpoints.push(new PMPoint(0.283431, 3.13572, 0));
   allpoints.push(new PMPoint(-0.169249, 2.78951, 0));
   allpoints.push(new PMPoint(-0.767801, -2.34782, 0));
   allpoints.push(new PMPoint(-0.418623, -2.28267, 0));
   allpoints.push(new PMPoint(0.64867, -2.68636, 0));
   allpoints.push(new PMPoint(1.20227, -2.79912, 0));
   allpoints.push(new PMPoint(-2.284, 0.411324, 0));
   allpoints.push(new PMPoint(-2.46784, 0.107398, 0));
   allpoints.push(new PMPoint(-2.19709, 2.11028, 0));
   allpoints.push(new PMPoint(-2.28634, 1.55241, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 4, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 9, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 4, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 6, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 37, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 14, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 39, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 32, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 15, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 37, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 55, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 39, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 56, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 47, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 40, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 58, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 14, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 33, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 69, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 49, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 67, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 55, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 63, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 53, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 61, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 58, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 76, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 14, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 56, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 74, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 88, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 89, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 63, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 81, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 71, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 80, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 94, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 74, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 90, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 98, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 99, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 7, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 10, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 67, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(68, 85, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 65, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 83, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 82, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 81, 96, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(77, 76, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(77, 92, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(90, 100, 101, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(90, 101, 91, undefined, undefined, 0));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
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
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[90].vector);
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
