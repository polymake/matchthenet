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

   var axes = [[89,88],
      [84,83],
      [82,81],
      [48,80],
      [80,79],
      [78,77],
      [68,67],
      [63,62],
      [60,59],
      [50,49],
      [48,47],
      [44,43],
      [41,40],
      [39,38],
      [36,35],
      [33,32],
      [32,12],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [21,20],
      [19,18],
      [7,19],
      [15,14],
      [14,4],
      [13,12],
      [11,10],
      [3,11],
      [9,8],
      [8,3],
      [7,6],
      [6,1],
      [5,4],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.62346615257866,
      2.58300138997286,
      2.58300138997287,
      2.5351507732236,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.58300138997287,
      2.58300138997287,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.58300138997287,
      2.58300138997286,
      2.58300138997287,
      2.58300138997286,
      2.62346615257866,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.58300138997287,
      2.62346615257866,
      2.63564719798397,
      2.62346615257866,
      2.63564719798397,
      2.62346615257866,
      2.62346615257866,
      2.63564719798397,
      2.63564719798397];

   var subtrees = [[100,101],
      [98,99],
      [96,97],
      [94,95],
      [92,93],
      [90,91],
      [88,89,100,101],
      [85,86,87],
      [83,84,98,99],
      [81,82,96,97],
      [79,80,92,93,94,95],
      [76,77,78,90,91],
      [73,74,75],
      [70,71,72],
      [67,68,69,88,89,100,101],
      [64,65,66],
      [61,62,63,85,86,87],
      [58,59,60,83,84,98,99],
      [55,56,57],
      [52,53,54],
      [49,50,51,81,82,96,97],
      [46,47,48,79,80,92,93,94,95],
      [43,44,45,76,77,78,90,91],
      [40,41,42,73,74,75],
      [37,38,39,70,71,72],
      [34,35,36,67,68,69,88,89,100,101],
      [32,33,61,62,63,64,65,66,85,86,87],
      [29,30,31,58,59,60,83,84,98,99],
      [26,27,28,55,56,57],
      [23,24,25,52,53,54],
      [20,21,22,46,47,48,49,50,51,79,80,81,82,92,93,94,95,96,97],
      [18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [16,17],
      [14,15,34,35,36,37,38,39,67,68,69,70,71,72,88,89,100,101],
      [12,13,32,33,61,62,63,64,65,66,85,86,87],
      [10,11,26,27,28,29,30,31,55,56,57,58,59,60,83,84,98,99],
      [8,9,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,79,80,81,82,92,93,94,95,96,97],
      [6,7,16,17,18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [4,5,12,13,14,15,32,33,34,35,36,37,38,39,61,62,63,64,65,66,67,68,69,70,71,72,85,86,87,88,89,100,101]];

   var polytoperoot = [[-0.313934135342,-0.821890236554165,0],
      [0,-1.21670748175885,-0.138964239098804],
      [0.584815266375175,-0.0436256182449419,0.381966011250106]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.571496, 0, 0));
   allpoints.push(new PMPoint(0.3449, 0.524654, 0));
   allpoints.push(new PMPoint(-0.28721, 0.564501, 0));
   allpoints.push(new PMPoint(-0.28721, -0.564501, 0));
   allpoints.push(new PMPoint(0.3449, -0.524654, 0));
   allpoints.push(new PMPoint(0.963304, 0.416047, 0));
   allpoints.push(new PMPoint(0.749256, 1.01215, 0));
   allpoints.push(new PMPoint(-0.691563, 0.0409554, 0));
   allpoints.push(new PMPoint(-0.35183, -0.526656, 0));
   allpoints.push(new PMPoint(0.688891, 1.05646, 0));
   allpoints.push(new PMPoint(0.0330998, 1.1433, 0));
   allpoints.push(new PMPoint(0.749256, -1.01215, 0));
   allpoints.push(new PMPoint(0.963304, -0.416047, 0));
   allpoints.push(new PMPoint(0.0330998, -1.1433, 0));
   allpoints.push(new PMPoint(0.688891, -1.05646, 0));
   allpoints.push(new PMPoint(1.10879, -0.194733, 0));
   allpoints.push(new PMPoint(1.57116, 0.238122, 0));
   allpoints.push(new PMPoint(1.58792, 0.311111, 0));
   allpoints.push(new PMPoint(1.40761, 0.94758, 0));
   allpoints.push(new PMPoint(-0.654271, 0.678168, 0));
   allpoints.push(new PMPoint(-0.914811, 0.408537, 0));
   allpoints.push(new PMPoint(-0.791684, 0.0543865, 0));
   allpoints.push(new PMPoint(-0.79257, 0.0394354, 0));
   allpoints.push(new PMPoint(-0.956636, -0.297707, 0));
   allpoints.push(new PMPoint(-0.729741, -0.596205, 0));
   allpoints.push(new PMPoint(-0.0189279, 1.22989, 0));
   allpoints.push(new PMPoint(-0.39287, 1.2025, 0));
   allpoints.push(new PMPoint(-0.537099, 0.856408, 0));
   allpoints.push(new PMPoint(0.602899, 1.43098, 0));
   allpoints.push(new PMPoint(0.238904, 1.52092, 0));
   allpoints.push(new PMPoint(-0.0055533, 1.23663, 0));
   allpoints.push(new PMPoint(1.40761, -0.94758, 0));
   allpoints.push(new PMPoint(1.58792, -0.311111, 0));
   allpoints.push(new PMPoint(-0.537099, -0.856408, 0));
   allpoints.push(new PMPoint(-0.39287, -1.2025, 0));
   allpoints.push(new PMPoint(-0.0189279, -1.22989, 0));
   allpoints.push(new PMPoint(-0.0055533, -1.23663, 0));
   allpoints.push(new PMPoint(0.238904, -1.52092, 0));
   allpoints.push(new PMPoint(0.602899, -1.43098, 0));
   allpoints.push(new PMPoint(1.46648, 1.02968, 0));
   allpoints.push(new PMPoint(1.29307, 1.36211, 0));
   allpoints.push(new PMPoint(0.918157, 1.35729, 0));
   allpoints.push(new PMPoint(1.89764, 0.538547, 0));
   allpoints.push(new PMPoint(1.83589, 0.908371, 0));
   allpoints.push(new PMPoint(1.47797, 1.02007, 0));
   allpoints.push(new PMPoint(-0.777398, 1.03232, 0));
   allpoints.push(new PMPoint(-0.877518, 1.04575, 0));
   allpoints.push(new PMPoint(-1.28187, 0.522204, 0));
   allpoints.push(new PMPoint(-1.29566, 0.459627, 0));
   allpoints.push(new PMPoint(-1.14872, -0.185363, 0));
   allpoints.push(new PMPoint(-1.05222, -0.215245, 0));
   allpoints.push(new PMPoint(-1.05599, -0.31599, 0));
   allpoints.push(new PMPoint(-1.27802, -0.939129, 0));
   allpoints.push(new PMPoint(-0.893807, -0.933347, 0));
   allpoints.push(new PMPoint(0.125301, 1.57598, 0));
   allpoints.push(new PMPoint(-0.124588, 1.86789, 0));
   allpoints.push(new PMPoint(-0.444898, 1.28909, 0));
   allpoints.push(new PMPoint(0.847356, 1.71527, 0));
   allpoints.push(new PMPoint(0.808703, 1.8086, 0));
   allpoints.push(new PMPoint(0.152912, 1.89543, 0));
   allpoints.push(new PMPoint(0.918157, -1.35729, 0));
   allpoints.push(new PMPoint(1.29307, -1.36211, 0));
   allpoints.push(new PMPoint(1.46648, -1.02968, 0));
   allpoints.push(new PMPoint(1.47797, -1.02007, 0));
   allpoints.push(new PMPoint(1.83589, -0.908371, 0));
   allpoints.push(new PMPoint(1.89764, -0.538547, 0));
   allpoints.push(new PMPoint(-0.590776, -1.53187, 0));
   allpoints.push(new PMPoint(0.0596074, -1.65272, 0));
   allpoints.push(new PMPoint(0.125301, -1.57598, 0));
   allpoints.push(new PMPoint(0.216297, -1.61938, 0));
   allpoints.push(new PMPoint(0.700325, -2.07029, 0));
   allpoints.push(new PMPoint(0.847356, -1.71527, 0));
   allpoints.push(new PMPoint(1.84139, 1.03449, 0));
   allpoints.push(new PMPoint(2.01029, 1.37964, 0));
   allpoints.push(new PMPoint(1.35193, 1.44421, 0));
   allpoints.push(new PMPoint(2.25555, 0.426848, 0));
   allpoints.push(new PMPoint(2.32591, 0.499338, 0));
   allpoints.push(new PMPoint(2.14561, 1.13581, 0));
   allpoints.push(new PMPoint(-1.21725, 1.61336, 0));
   allpoints.push(new PMPoint(-1.56908, 1.0867, 0));
   allpoints.push(new PMPoint(-1.79348, 0.068061, 0));
   allpoints.push(new PMPoint(-1.69551, -0.557682, 0));
   allpoints.push(new PMPoint(1.12901, 2.3874, 0));
   allpoints.push(new PMPoint(0.496903, 2.42724, 0));
   allpoints.push(new PMPoint(1.51698, -1.67439, 0));
   allpoints.push(new PMPoint(1.88579, -1.12523, 0));
   allpoints.push(new PMPoint(1.84139, -1.03449, 0));
   allpoints.push(new PMPoint(-0.428689, -2.14415, 0));
   allpoints.push(new PMPoint(0.184609, -2.30232, 0));
   allpoints.push(new PMPoint(2.98427, 0.434772, 0));
   allpoints.push(new PMPoint(2.77022, 1.03087, 0));
   allpoints.push(new PMPoint(-1.84965, 1.6484, 0));
   allpoints.push(new PMPoint(-2.13658, 1.15416, 0));
   allpoints.push(new PMPoint(-2.14058, 1.0867, 0));
   allpoints.push(new PMPoint(-1.91398, 0.56205, 0));
   allpoints.push(new PMPoint(-2.33679, 0.24531, 0));
   allpoints.push(new PMPoint(-2.28409, -0.323751, 0));
   allpoints.push(new PMPoint(0.841803, 2.9519, 0));
   allpoints.push(new PMPoint(0.270307, 2.9519, 0));
   allpoints.push(new PMPoint(-0.806833, -2.57265, 0));
   allpoints.push(new PMPoint(-0.263518, -2.7499, 0));

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

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 3, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 11, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 36, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 12, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 19, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 39, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 12, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 48, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 57, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 59, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 73, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 75, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 68, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 69, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 39, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 38, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 77, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 62, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 86, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 49, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 81, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 67, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(68, 88, 89, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 77, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 90, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 59, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 83, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 79, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 80, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(82, 81, 96, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(82, 96, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(101, 89, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 88, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(84, 83, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 98, 99, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(79, 92, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 93, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 80, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 94, 95, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[48].vector);
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
