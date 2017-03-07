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

   var axes = [[91,77],
      [90,89],
      [67,82],
      [81,80],
      [80,57],
      [55,77],
      [75,74],
      [53,75],
      [71,70],
      [69,68],
      [67,50],
      [63,57],
      [37,63],
      [55,62],
      [62,34],
      [53,61],
      [61,28],
      [60,51],
      [27,60],
      [59,50],
      [25,59],
      [48,58],
      [58,24],
      [37,57],
      [55,34],
      [53,28],
      [27,51],
      [25,50],
      [48,24],
      [37,47],
      [47,12],
      [46,34],
      [11,46],
      [42,28],
      [8,42],
      [27,41],
      [25,39],
      [39,6],
      [38,24],
      [37,12],
      [11,34],
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

   var angles = [2.80658930677266,
      2.81356823138406,
      2.80658930677266,
      2.80660395582342,
      2.79670544643057,
      2.81238049006229,
      2.80660395582342,
      2.79670544643057,
      2.79972394015752,
      2.79972394015752,
      2.81238049006229,
      2.79080697432692,
      2.78695010465272,
      2.81633962903857,
      2.81957293944472,
      2.79080697432692,
      2.78695010465272,
      2.77726246654796,
      2.77726246654796,
      2.81633962903857,
      2.81957293944472,
      2.82608537044345,
      2.82608537044345,
      2.79080697432692,
      2.81633962903857,
      2.79080697432692,
      2.77544578012184,
      2.81633962903857,
      2.827106343065,
      2.79220976930169,
      2.79670544643057,
      2.81504792694992,
      2.81238049006229,
      2.79220976930169,
      2.79670544643057,
      2.77726246654796,
      2.81504792694992,
      2.81238049006229,
      2.82608537044345,
      2.79080697432692,
      2.81633962903857,
      2.82328947883089,
      2.79972394015752,
      2.79080697432692,
      2.78178757347871,
      2.81633962903857,
      2.82328947883089,
      2.79080697432692,
      2.78893128571119,
      2.81633962903857,
      2.81873110569582,
      2.80857140898441,
      2.80857140898441,
      2.79080697432692,
      2.78893128571119,
      2.81633962903857,
      2.81873110569582,
      2.79670544643057,
      2.81238049006229,
      2.81356823138406,
      2.80736897866073,
      2.79670544643057,
      2.81238049006229,
      2.80224822907373,
      2.80658930677266,
      2.81152041629594,
      2.80224822907373,
      2.80658930677266,
      2.80420724493164];

   var subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [91,100,101],
      [89,90,98,99],
      [87,88],
      [85,86],
      [83,84],
      [82,96,97],
      [80,81,92,93,94,95],
      [78,79],
      [77,91,100,101],
      [76],
      [74,75,87,88,89,90,98,99],
      [72,73],
      [70,71,85,86],
      [68,69,83,84],
      [67,82,96,97],
      [66],
      [65],
      [64],
      [63,78,79,80,81,92,93,94,95],
      [62,76,77,91,100,101],
      [61,72,73,74,75,87,88,89,90,98,99],
      [60,68,69,70,71,83,84,85,86],
      [59,66,67,82,96,97],
      [58,64,65],
      [57,63,78,79,80,81,92,93,94,95],
      [56],
      [55,62,76,77,91,100,101],
      [54],
      [53,61,72,73,74,75,87,88,89,90,98,99],
      [52],
      [51,60,68,69,70,71,83,84,85,86],
      [50,59,66,67,82,96,97],
      [49],
      [48,58,64,65],
      [47,56,57,63,78,79,80,81,92,93,94,95],
      [46,54,55,62,76,77,91,100,101],
      [45],
      [43,44],
      [42,52,53,61,72,73,74,75,87,88,89,90,98,99],
      [40,41,51,60,68,69,70,71,83,84,85,86],
      [39,49,50,59,66,67,82,96,97],
      [38,48,58,64,65],
      [37,47,56,57,63,78,79,80,81,92,93,94,95],
      [35,36],
      [34,46,54,55,62,76,77,91,100,101],
      [33,45],
      [31,32,43,44],
      [29,30],
      [28,42,52,53,61,72,73,74,75,87,88,89,90,98,99],
      [26,27,40,41,51,60,68,69,70,71,83,84,85,86],
      [25,39,49,50,59,66,67,82,96,97],
      [24,38,48,58,64,65],
      [22,23,35,36,37,47,56,57,63,78,79,80,81,92,93,94,95],
      [21,33,34,45,46,54,55,62,76,77,91,100,101],
      [19,20,31,32,43,44],
      [17,18,29,30],
      [15,16,26,27,28,40,41,42,51,52,53,60,61,68,69,70,71,72,73,74,75,83,84,85,86,87,88,89,90,98,99],
      [14,24,25,38,39,48,49,50,58,59,64,65,66,67,82,96,97],
      [12,13,22,23,35,36,37,47,56,57,63,78,79,80,81,92,93,94,95],
      [11,21,33,34,45,46,54,55,62,76,77,91,100,101],
      [9,10,19,20,31,32,43,44],
      [7,8,15,16,17,18,26,27,28,29,30,40,41,42,51,52,53,60,61,68,69,70,71,72,73,74,75,83,84,85,86,87,88,89,90,98,99],
      [6,14,24,25,38,39,48,49,50,58,59,64,65,66,67,82,96,97],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,45,46,47,54,55,56,57,62,63,76,77,78,79,80,81,91,92,93,94,95,100,101]];

   var polytoperoot = [[0,-0.926290369168283,-0.572478931597685],
      [-0.175996953348291,-1.03030411065018,-0.0797221041180882],
      [-0.494417839145641,0.0839539970150791,0.00649612985329364]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.478445, 0, 0));
   allpoints.push(new PMPoint(0.65391, 0.306271, 0));
   allpoints.push(new PMPoint(0.569604, 0.353035, 0));
   allpoints.push(new PMPoint(0.569604, -0.353035, 0));
   allpoints.push(new PMPoint(0.65391, -0.306271, 0));
   allpoints.push(new PMPoint(0.527647, 1.04782, 0));
   allpoints.push(new PMPoint(0.824927, 0.621103, 0));
   allpoints.push(new PMPoint(0.562328, 1.04904, 0));
   allpoints.push(new PMPoint(0.668562, -0.297398, 0));
   allpoints.push(new PMPoint(1.1028, 0.0151533, 0));
   allpoints.push(new PMPoint(0.527647, -1.04782, 0));
   allpoints.push(new PMPoint(0.562328, -1.04904, 0));
   allpoints.push(new PMPoint(0.824927, -0.621103, 0));
   allpoints.push(new PMPoint(-0.0487302, 0.662754, 0));
   allpoints.push(new PMPoint(1.19044, 0.629795, 0));
   allpoints.push(new PMPoint(1.18794, 0.730478, 0));
   allpoints.push(new PMPoint(1.13274, 0.0675831, 0));
   allpoints.push(new PMPoint(1.19041, 0.611456, 0));
   allpoints.push(new PMPoint(0.88796, -0.580647, 0));
   allpoints.push(new PMPoint(1.24714, -0.512377, 0));
   allpoints.push(new PMPoint(-0.0487302, -0.662754, 0));
   allpoints.push(new PMPoint(1.18794, -0.730478, 0));
   allpoints.push(new PMPoint(1.19044, -0.629795, 0));
   allpoints.push(new PMPoint(-0.640438, 0.930428, 0));
   allpoints.push(new PMPoint(-0.627539, 0.957284, 0));
   allpoints.push(new PMPoint(1.56491, 0.639261, 0));
   allpoints.push(new PMPoint(1.83289, 1.11665, 0));
   allpoints.push(new PMPoint(1.81081, 1.15135, 0));
   allpoints.push(new PMPoint(1.67372, 0.196702, 0));
   allpoints.push(new PMPoint(1.56117, 0.557999, 0));
   allpoints.push(new PMPoint(1.60449, -0.400021, 0));
   allpoints.push(new PMPoint(1.6575, -0.0253308, 0));
   allpoints.push(new PMPoint(-0.640438, -0.930428, 0));
   allpoints.push(new PMPoint(-0.627539, -0.957284, 0));
   allpoints.push(new PMPoint(1.83289, -1.11665, 0));
   allpoints.push(new PMPoint(1.56491, -0.639261, 0));
   allpoints.push(new PMPoint(1.81081, -1.15135, 0));
   allpoints.push(new PMPoint(-0.597893, 0.285366, 0));
   allpoints.push(new PMPoint(-0.101052, 1.34158, 0));
   allpoints.push(new PMPoint(1.75412, 0.311538, 0));
   allpoints.push(new PMPoint(1.84435, 0.362832, 0));
   allpoints.push(new PMPoint(1.12693, 1.46173, 0));
   allpoints.push(new PMPoint(2.03147, -0.74266, 0));
   allpoints.push(new PMPoint(1.76037, -0.0391824, 0));
   allpoints.push(new PMPoint(-0.597893, -0.285366, 0));
   allpoints.push(new PMPoint(-0.101052, -1.34158, 0));
   allpoints.push(new PMPoint(1.12693, -1.46173, 0));
   allpoints.push(new PMPoint(-1.14196, -0.0637891, 0));
   allpoints.push(new PMPoint(-0.156549, 2.0333, 0));
   allpoints.push(new PMPoint(-0.189202, 2.0299, 0));
   allpoints.push(new PMPoint(2.50815, 0.00539969, 0));
   allpoints.push(new PMPoint(1.02917, 2.1542, 0));
   allpoints.push(new PMPoint(1.06581, 2.15839, 0));
   allpoints.push(new PMPoint(-0.156549, -2.0333, 0));
   allpoints.push(new PMPoint(-0.189202, -2.0299, 0));
   allpoints.push(new PMPoint(1.02917, -2.1542, 0));
   allpoints.push(new PMPoint(1.06581, -2.15839, 0));
   allpoints.push(new PMPoint(-1.1845, 0.581273, 0));
   allpoints.push(new PMPoint(-0.731627, 1.59833, 0));
   allpoints.push(new PMPoint(2.49669, 0.759221, 0));
   allpoints.push(new PMPoint(1.71749, 1.89726, 0));
   allpoints.push(new PMPoint(-0.731627, -1.59833, 0));
   allpoints.push(new PMPoint(1.71749, -1.89726, 0));
   allpoints.push(new PMPoint(-1.76934, 0.89252, 0));
   allpoints.push(new PMPoint(-1.7824, 0.866639, 0));
   allpoints.push(new PMPoint(-1.35873, 1.81822, 0));
   allpoints.push(new PMPoint(-1.34799, 1.84675, 0));
   allpoints.push(new PMPoint(2.58378, 0.815684, 0));
   allpoints.push(new PMPoint(2.38007, 1.13459, 0));
   allpoints.push(new PMPoint(2.77613, 0.482792, 0));
   allpoints.push(new PMPoint(2.58692, 0.810516, 0));
   allpoints.push(new PMPoint(2.02163, 1.65659, 0));
   allpoints.push(new PMPoint(1.79832, 1.95734, 0));
   allpoints.push(new PMPoint(1.79491, 1.96167, 0));
   allpoints.push(new PMPoint(1.5608, 2.2425, 0));
   allpoints.push(new PMPoint(-1.35873, -1.81822, 0));
   allpoints.push(new PMPoint(-1.34799, -1.84675, 0));
   allpoints.push(new PMPoint(1.79832, -1.95734, 0));
   allpoints.push(new PMPoint(2.02163, -1.65659, 0));
   allpoints.push(new PMPoint(1.5608, -2.2425, 0));
   allpoints.push(new PMPoint(1.79491, -1.96167, 0));
   allpoints.push(new PMPoint(-0.838133, 2.28164, 0));
   allpoints.push(new PMPoint(3.03116, 1.14611, 0));
   allpoints.push(new PMPoint(2.57814, 1.45253, 0));
   allpoints.push(new PMPoint(3.14957, 0.512131, 0));
   allpoints.push(new PMPoint(3.08629, 1.05538, 0));
   allpoints.push(new PMPoint(1.68516, 2.5785, 0));
   allpoints.push(new PMPoint(1.59446, 2.61117, 0));
   allpoints.push(new PMPoint(2.18596, 2.34403, 0));
   allpoints.push(new PMPoint(1.70186, 2.57185, 0));
   allpoints.push(new PMPoint(-0.838133, -2.28164, 0));
   allpoints.push(new PMPoint(1.59446, -2.61117, 0));
   allpoints.push(new PMPoint(1.68516, -2.5785, 0));
   allpoints.push(new PMPoint(1.70186, -2.57185, 0));
   allpoints.push(new PMPoint(2.18596, -2.34403, 0));
   allpoints.push(new PMPoint(-0.856974, 2.37619, 0));
   allpoints.push(new PMPoint(-1.20215, 2.30243, 0));
   allpoints.push(new PMPoint(2.22245, 2.87782, 0));
   allpoints.push(new PMPoint(1.8695, 2.88246, 0));
   allpoints.push(new PMPoint(-1.20215, -2.30243, 0));
   allpoints.push(new PMPoint(-0.856974, -2.37619, 0));

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

   faces.faces.push(new THREE.Face3(0, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 0, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 0, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 24, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 12, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 0, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 45, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 41, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 6, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 16, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 21, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 28, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 34, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 6, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 12, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 24, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 42, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 12, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 24, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 46, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 39, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 51, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 12, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 50, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 51, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 24, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 34, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 28, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 59, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 34, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 28, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 58, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 60, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 47, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 76, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 28, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 57, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 51, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 50, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 63, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 50, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 61, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 74, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 62, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 75, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 87, 88, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 77, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 57, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 80, 81, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(80, 57, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(80, 92, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(82, 96, 97, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(82, 97, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(101, 91, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 77, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 20, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 74, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 89, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(90, 89, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(90, 98, 99, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 80, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 94, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 70, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 85, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(69, 68, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(69, 83, 84, undefined, undefined, 0));


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
   line.vertices.push(allpoints[38].vector);
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
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
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
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
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
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[69].vector);
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
