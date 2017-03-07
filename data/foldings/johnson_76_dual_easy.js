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

   var axes = [[93,92],
      [87,86],
      [79,78],
      [56,77],
      [75,74],
      [73,72],
      [70,50],
      [67,66],
      [65,45],
      [62,61],
      [60,59],
      [58,57],
      [56,55],
      [34,54],
      [52,51],
      [32,50],
      [47,46],
      [45,27],
      [2,45],
      [44,43],
      [42,41],
      [40,39],
      [37,21],
      [36,35],
      [34,33],
      [16,32],
      [32,2],
      [31,30],
      [29,28],
      [2,27],
      [26,25],
      [13,26],
      [23,11],
      [22,21],
      [20,19],
      [18,17],
      [16,2],
      [15,14],
      [14,6],
      [2,13],
      [13,5],
      [12,11],
      [10,9],
      [3,10],
      [8,7],
      [6,2],
      [0,6],
      [2,5],
      [4,3],
      [3,0],
      [1,4],
      [0,2],
      [2,1],
      [1,0]];

   var angles = [2.66264388466519,
      2.68449868983043,
      2.66264388466519,
      2.65141765217348,
      2.66264388466519,
      2.68449868983043,
      2.69902858238642,
      2.69699128655038,
      2.71039914982383,
      2.68805111602412,
      2.65141765217348,
      2.66264388466519,
      2.65141765217348,
      2.66264388466519,
      2.69699128655038,
      2.71039914982383,
      2.68805111602412,
      2.71039914982383,
      2.71576555388821,
      2.68449868983043,
      2.69902858238642,
      2.65761870792341,
      2.66264388466519,
      2.65761870792341,
      2.67236773031476,
      2.71039914982383,
      2.71576555388821,
      2.68449868983043,
      2.69902858238642,
      2.71576555388821,
      2.69699128655038,
      2.70287311523343,
      2.67236773031476,
      2.67236773031476,
      2.67236773031476,
      2.68805111602412,
      2.71576555388821,
      2.69699128655038,
      2.70287311523343,
      2.71576555388821,
      2.71039914982383,
      2.68449868983043,
      2.68805111602412,
      2.68805111602412,
      2.69902858238642,
      2.71576555388821,
      2.71039914982383,
      2.71576555388821,
      2.69699128655038,
      2.69902858238642,
      2.70287311523343,
      2.71576555388821,
      2.71576555388821,
      2.71039914982383];

   var subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93,100,101],
      [90,91],
      [88,89],
      [86,87,98,99],
      [84,85],
      [82,83],
      [80,81],
      [78,79,96,97],
      [76,77,94,95],
      [74,75,92,93,100,101],
      [72,73,90,91],
      [70,71,88,89],
      [68,69],
      [66,67,86,87,98,99],
      [65,84,85],
      [63,64],
      [61,62,82,83],
      [59,60,80,81],
      [57,58,78,79,96,97],
      [55,56,76,77,94,95],
      [53,54,74,75,92,93,100,101],
      [51,52,72,73,90,91],
      [50,70,71,88,89],
      [48,49],
      [46,47,68,69],
      [45,65,66,67,84,85,86,87,98,99],
      [43,44,63,64],
      [41,42,61,62,82,83],
      [39,40,59,60,80,81],
      [37,38,57,58,78,79,96,97],
      [35,36,55,56,76,77,94,95],
      [33,34,53,54,74,75,92,93,100,101],
      [32,50,51,52,70,71,72,73,88,89,90,91],
      [30,31,48,49],
      [28,29,46,47,68,69],
      [27,45,65,66,67,84,85,86,87,98,99],
      [25,26,41,42,43,44,61,62,63,64,82,83],
      [23,24,39,40,59,60,80,81],
      [21,22,37,38,57,58,78,79,96,97],
      [19,20,35,36,55,56,76,77,94,95],
      [17,18,33,34,53,54,74,75,92,93,100,101],
      [16,32,50,51,52,70,71,72,73,88,89,90,91],
      [14,15,28,29,30,31,46,47,48,49,68,69],
      [13,25,26,27,41,42,43,44,45,61,62,63,64,65,66,67,82,83,84,85,86,87,98,99],
      [11,12,23,24,39,40,59,60,80,81],
      [9,10,19,20,21,22,35,36,37,38,55,56,57,58,76,77,78,79,94,95,96,97],
      [7,8,17,18,33,34,53,54,74,75,92,93,100,101],
      [6,14,15,16,28,29,30,31,32,46,47,48,49,50,51,52,68,69,70,71,72,73,88,89,90,91],
      [5,13,25,26,27,41,42,43,44,45,61,62,63,64,65,66,67,82,83,84,85,86,87,98,99],
      [3,4,7,8,9,10,11,12,17,18,19,20,21,22,23,24,33,34,35,36,37,38,39,40,53,54,55,56,57,58,59,60,74,75,76,77,78,79,80,81,92,93,94,95,96,97,100,101]];

   var polytoperoot = [[-1.84080397150844e-16,-0.833790842208062,-0.515311079992982],
      [-0.313238596047353,-1.05260468155002,-0.237425238479107],
      [-0.570015605878876,0.161415319224647,0.0364087974648366]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.528257, 0, 0));
   allpoints.push(new PMPoint(0.460319, 1.08041, 0));
   allpoints.push(new PMPoint(0.196493, -0.502687, 0));
   allpoints.push(new PMPoint(0.516677, -0.346598, 0));
   allpoints.push(new PMPoint(1.05235, 0.0661742, 0));
   allpoints.push(new PMPoint(-0.365937, 0.38098, 0));
   allpoints.push(new PMPoint(0.82573, -0.523709, 0));
   allpoints.push(new PMPoint(1.05534, -0.0352588, 0));
   allpoints.push(new PMPoint(-0.401404, -0.360803, 0));
   allpoints.push(new PMPoint(-0.145973, -0.615127, 0));
   allpoints.push(new PMPoint(0.466313, -1.00041, 0));
   allpoints.push(new PMPoint(0.809179, -0.549883, 0));
   allpoints.push(new PMPoint(1.36768, 0.489993, 0));
   allpoints.push(new PMPoint(-0.607883, 0.132531, 0));
   allpoints.push(new PMPoint(-0.498654, -0.206513, 0));
   allpoints.push(new PMPoint(-0.681267, 0.804799, 0));
   allpoints.push(new PMPoint(1.15993, -0.658757, 0));
   allpoints.push(new PMPoint(1.43176, -0.422049, 0));
   allpoints.push(new PMPoint(-0.215123, -0.981221, 0));
   allpoints.push(new PMPoint(0.357137, -1.04558, 0));
   allpoints.push(new PMPoint(-0.788844, -0.773628, 0));
   allpoints.push(new PMPoint(-0.248685, -0.973257, 0));
   allpoints.push(new PMPoint(1.02416, -1.14335, 0));
   allpoints.push(new PMPoint(1.08944, -0.77655, 0));
   allpoints.push(new PMPoint(1.57295, -0.0762462, 0));
   allpoints.push(new PMPoint(1.63885, 0.27381, 0));
   allpoints.push(new PMPoint(1.62744, 0.949975, 0));
   allpoints.push(new PMPoint(-0.756487, 0.736685, 0));
   allpoints.push(new PMPoint(-0.949704, 0.23273, 0));
   allpoints.push(new PMPoint(-0.957115, 0.202663, 0));
   allpoints.push(new PMPoint(-1.04453, -0.356707, 0));
   allpoints.push(new PMPoint(-0.594045, 1.32581, 0));
   allpoints.push(new PMPoint(1.23851, -1.02294, 0));
   allpoints.push(new PMPoint(1.79079, -0.859814, 0));
   allpoints.push(new PMPoint(-0.242437, -1.35976, 0));
   allpoints.push(new PMPoint(0.0858251, -1.56332, 0));
   allpoints.push(new PMPoint(-0.779086, -1.35807, 0));
   allpoints.push(new PMPoint(-0.394365, -1.32371, 0));
   allpoints.push(new PMPoint(0.536208, -1.58074, 0));
   allpoints.push(new PMPoint(0.915344, -1.50694, 0));
   allpoints.push(new PMPoint(1.96542, 0.41604, 0));
   allpoints.push(new PMPoint(1.7106, 0.891821, 0));
   allpoints.push(new PMPoint(2.13334, -0.156876, 0));
   allpoints.push(new PMPoint(1.97654, 0.387137, 0));
   allpoints.push(new PMPoint(1.47564, 1.45595, 0));
   allpoints.push(new PMPoint(-1.2962, 0.740225, 0));
   allpoints.push(new PMPoint(-1.27861, 0.380203, 0));
   allpoints.push(new PMPoint(-1.31473, 0.247772, 0));
   allpoints.push(new PMPoint(-1.53405, -0.0534054, 0));
   allpoints.push(new PMPoint(-0.442244, 1.83178, 0));
   allpoints.push(new PMPoint(-0.937798, 1.37161, 0));
   allpoints.push(new PMPoint(-1.14461, 1.0816, 0));
   allpoints.push(new PMPoint(1.36047, -1.38234, 0));
   allpoints.push(new PMPoint(1.74204, -1.4423, 0));
   allpoints.push(new PMPoint(-0.578638, -1.54992, 0));
   allpoints.push(new PMPoint(-0.25653, -2.05867, 0));
   allpoints.push(new PMPoint(-1.32204, -0.991178, 0));
   allpoints.push(new PMPoint(-1.16474, -1.33657, 0));
   allpoints.push(new PMPoint(0.680467, -2.16535, 0));
   allpoints.push(new PMPoint(1.16217, -1.80405, 0));
   allpoints.push(new PMPoint(2.27326, 0.603552, 0));
   allpoints.push(new PMPoint(2.24562, 0.962942, 0));
   allpoints.push(new PMPoint(2.58101, 0.205358, 0));
   allpoints.push(new PMPoint(2.32569, 0.476689, 0));
   allpoints.push(new PMPoint(1.26165, 1.93893, 0));
   allpoints.push(new PMPoint(2.05246, 1.28263, 0));
   allpoints.push(new PMPoint(1.81094, 1.54446, 0));
   allpoints.push(new PMPoint(-1.86062, 0.695902, 0));
   allpoints.push(new PMPoint(-1.59569, 0.184593, 0));
   allpoints.push(new PMPoint(-0.980193, 1.78803, 0));
   allpoints.push(new PMPoint(-0.922697, 1.4365, 0));
   allpoints.push(new PMPoint(-1.09, 1.69366, 0));
   allpoints.push(new PMPoint(-1.59096, 1.42989, 0));
   allpoints.push(new PMPoint(2.12827, -1.44659, 0));
   allpoints.push(new PMPoint(2.30827, -1.11247, 0));
   allpoints.push(new PMPoint(-0.894317, -1.77249, 0));
   allpoints.push(new PMPoint(-0.850713, -2.15627, 0));
   allpoints.push(new PMPoint(-1.83616, -1.2506, 0));
   allpoints.push(new PMPoint(-1.40168, -1.64161, 0));
   allpoints.push(new PMPoint(1.20133, -2.46749, 0));
   allpoints.push(new PMPoint(1.3783, -2.12417, 0));
   allpoints.push(new PMPoint(2.61235, 0.449204, 0));
   allpoints.push(new PMPoint(2.81114, 0.989672, 0));
   allpoints.push(new PMPoint(1.78783, 1.60694, 0));
   allpoints.push(new PMPoint(1.80084, 1.96291, 0));
   allpoints.push(new PMPoint(2.45166, 1.6841, 0));
   allpoints.push(new PMPoint(1.9216, 1.88304, 0));
   allpoints.push(new PMPoint(-0.672481, 2.31994, 0));
   allpoints.push(new PMPoint(-0.98948, 2.14836, 0));
   allpoints.push(new PMPoint(-1.26728, 2.00751, 0));
   allpoints.push(new PMPoint(-1.63983, 2.00368, 0));
   allpoints.push(new PMPoint(2.34432, -1.76677, 0));
   allpoints.push(new PMPoint(2.80394, -1.40562, 0));
   allpoints.push(new PMPoint(-0.769252, -2.53384, 0));
   allpoints.push(new PMPoint(-0.398961, -2.64373, 0));
   allpoints.push(new PMPoint(-2.04016, -1.78912, 0));
   allpoints.push(new PMPoint(-1.68015, -1.90928, 0));
   allpoints.push(new PMPoint(2.42826, 2.25949, 0));
   allpoints.push(new PMPoint(2.05817, 2.21662, 0));
   allpoints.push(new PMPoint(2.60431, -2.05242, 0));
   allpoints.push(new PMPoint(2.97153, -1.95656, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(4, 0, 3, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 2, 6, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(8, 1, 4, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(8, 4, 7, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(0, 10, 3, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(2, 5, 13, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(12, 4, 3, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(12, 3, 11, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(8, 7, 17, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 17, 18, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(20, 3, 10, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(20, 10, 19, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(6, 2, 16, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(13, 5, 25, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(13, 25, 26, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(12, 11, 23, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(12, 23, 24, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(6, 28, 29, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(6, 29, 14, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(9, 21, 22, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(9, 22, 10, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(2, 13, 27, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(20, 19, 35, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(20, 35, 36, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(16, 2, 32, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(15, 14, 30, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(15, 30, 31, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(13, 26, 41, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(13, 41, 42, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(18, 17, 33, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(18, 33, 34, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(23, 11, 39, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(23, 39, 40, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(29, 28, 46, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(29, 46, 47, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(22, 21, 37, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(22, 37, 38, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(2, 27, 45, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(26, 25, 43, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(26, 43, 44, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(32, 2, 50, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(16, 32, 51, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(16, 51, 52, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(31, 30, 48, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(31, 48, 49, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(42, 41, 61, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(42, 61, 62, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(34, 33, 53, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(34, 53, 54, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(2, 45, 65, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(36, 35, 55, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(36, 55, 56, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(21, 57, 58, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(21, 58, 37, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(45, 27, 66, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(45, 66, 67, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(44, 43, 63, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(44, 63, 64, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(32, 50, 70, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(32, 70, 71, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(40, 39, 59, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(40, 59, 60, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(47, 46, 68, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(47, 68, 69, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(34, 54, 74, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(34, 74, 75, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(45, 84, 85, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(45, 85, 65, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(55, 76, 77, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(55, 77, 56, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(52, 51, 72, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(52, 72, 73, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(61, 82, 83, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(61, 83, 62, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(70, 50, 88, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(70, 88, 89, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(60, 59, 80, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(60, 80, 81, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(57, 78, 79, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(57, 79, 58, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(67, 66, 86, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(67, 86, 87, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(56, 77, 94, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(56, 94, 95, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(73, 72, 90, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(73, 90, 91, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(75, 74, 92, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(75, 92, 93, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(78, 96, 97, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(78, 97, 79, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(87, 86, 98, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(87, 98, 99, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(93, 92, 100, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(93, 100, 101, undefined, undefined, 54));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[93].vector);
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
