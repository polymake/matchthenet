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

   var axes = [[93,111],
      [106,86],
      [96,95],
      [63,93],
      [93,92],
      [86,85],
      [87,86],
      [80,50],
      [79,78],
      [46,77],
      [74,47],
      [42,71],
      [66,39],
      [65,64],
      [36,63],
      [63,62],
      [61,60],
      [59,58],
      [54,30],
      [55,54],
      [53,52],
      [50,49],
      [51,50],
      [47,46],
      [46,45],
      [25,47],
      [43,42],
      [42,41],
      [39,38],
      [40,39],
      [37,36],
      [36,35],
      [16,34],
      [33,17],
      [30,29],
      [31,30],
      [28,12],
      [27,26],
      [10,25],
      [25,24],
      [23,22],
      [21,20],
      [19,18],
      [17,16],
      [16,6],
      [7,17],
      [15,14],
      [12,4],
      [13,12],
      [11,10],
      [10,9],
      [3,8],
      [2,7],
      [6,5],
      [7,6],
      [4,0],
      [1,4],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469274,
      2.77672882547631,
      2.77672882547632,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

   var subtrees = [[117],
      [116],
      [114,115],
      [112,113],
      [110,111,117],
      [108,109],
      [106,107,116],
      [105],
      [102,103,104],
      [101],
      [100],
      [99],
      [98],
      [95,96,97,114,115],
      [94],
      [91,92,93,110,111,112,113,117],
      [90],
      [89],
      [88],
      [85,86,87,106,107,108,109,116],
      [84],
      [82,83],
      [80,81,105],
      [78,79,102,103,104],
      [76,77,101],
      [74,75,100],
      [72,73],
      [70,71,99],
      [68,69],
      [66,67,98],
      [64,65,95,96,97,114,115],
      [62,63,91,92,93,94,110,111,112,113,117],
      [60,61,90],
      [58,59,89],
      [56,57],
      [54,55,85,86,87,88,106,107,108,109,116],
      [52,53,84],
      [49,50,51,80,81,82,83,105],
      [48],
      [45,46,47,74,75,76,77,78,79,100,101,102,103,104],
      [44],
      [41,42,43,70,71,72,73,99],
      [38,39,40,66,67,68,69,98],
      [35,36,37,62,63,64,65,91,92,93,94,95,96,97,110,111,112,113,114,115,117],
      [34,60,61,90],
      [33,58,59,89],
      [32],
      [29,30,31,54,55,56,57,85,86,87,88,106,107,108,109,116],
      [28,52,53,84],
      [26,27,49,50,51,80,81,82,83,105],
      [24,25,45,46,47,48,74,75,76,77,78,79,100,101,102,103,104],
      [22,23,44],
      [20,21,41,42,43,70,71,72,73,99],
      [18,19,38,39,40,66,67,68,69,98],
      [16,17,33,34,35,36,37,58,59,60,61,62,63,64,65,89,90,91,92,93,94,95,96,97,110,111,112,113,114,115,117],
      [14,15,32],
      [12,13,28,29,30,31,52,53,54,55,56,57,84,85,86,87,88,106,107,108,109,116],
      [9,10,11,24,25,26,27,45,46,47,48,49,50,51,74,75,76,77,78,79,80,81,82,83,100,101,102,103,104,105],
      [8,22,23,44],
      [5,6,7,16,17,18,19,20,21,33,34,35,36,37,38,39,40,41,42,43,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,89,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115,117],
      [4,12,13,14,15,28,29,30,31,32,52,53,54,55,56,57,84,85,86,87,88,106,107,108,109,116]];

   var polytoperoot = [[0.948536019861961,0.223918979794513,-0.223918979794513],
      [2.61803398874989,1,-1.61803398874989],
      [-0.724617040067447,1.17245499965647,-0.447837959589026]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.447838, 0, 0));
   allpoints.push(new PMPoint(0.447838, 0.447838, 0));
   allpoints.push(new PMPoint(0, 0.447838, 0));
   allpoints.push(new PMPoint(0.223919, -0.387839, 0));
   allpoints.push(new PMPoint(0.873757, -0.13839, 0));
   allpoints.push(new PMPoint(1.13699, 0.223919, 0));
   allpoints.push(new PMPoint(0.873757, 0.586227, 0));
   allpoints.push(new PMPoint(0.223919, 0.835677, 0));
   allpoints.push(new PMPoint(-0.425919, 0.586227, 0));
   allpoints.push(new PMPoint(-0.689152, 0.223919, 0));
   allpoints.push(new PMPoint(-0.425919, -0.13839, 0));
   allpoints.push(new PMPoint(0.611758, -0.611758, 0));
   allpoints.push(new PMPoint(0.835677, -0.223919, 0));
   allpoints.push(new PMPoint(-0.387839, -0.223919, 0));
   allpoints.push(new PMPoint(-0.16392, -0.611758, 0));
   allpoints.push(new PMPoint(1.4993, 0.487152, 0));
   allpoints.push(new PMPoint(1.23607, 0.84946, 0));
   allpoints.push(new PMPoint(1.23607, -0.401622, 0));
   allpoints.push(new PMPoint(1.4993, -0.0393136, 0));
   allpoints.push(new PMPoint(0.735368, 1.01215, 0));
   allpoints.push(new PMPoint(0.309448, 0.873757, 0));
   allpoints.push(new PMPoint(-0.16392, 1.0596, 0));
   allpoints.push(new PMPoint(-0.387839, 0.671757, 0));
   allpoints.push(new PMPoint(-0.788228, 0.84946, 0));
   allpoints.push(new PMPoint(-1.05146, 0.487152, 0));
   allpoints.push(new PMPoint(-1.05146, -0.0393136, 0));
   allpoints.push(new PMPoint(-0.788228, -0.401622, 0));
   allpoints.push(new PMPoint(1.0596, -0.611758, 0));
   allpoints.push(new PMPoint(-0.108889, -0.687501, 0));
   allpoints.push(new PMPoint(0.0732626, -1.09662, 0));
   allpoints.push(new PMPoint(0.518647, -1.04981, 0));
   allpoints.push(new PMPoint(-0.611758, -0.611758, 0));
   allpoints.push(new PMPoint(0.826945, 1.03161, 0));
   allpoints.push(new PMPoint(1.54611, 0.0417669, 0));
   allpoints.push(new PMPoint(1.92522, 0.625541, 0));
   allpoints.push(new PMPoint(1.92522, 1.07338, 0));
   allpoints.push(new PMPoint(1.4993, 1.21177, 0));
   allpoints.push(new PMPoint(1.4993, -0.763931, 0));
   allpoints.push(new PMPoint(1.92522, -0.625541, 0));
   allpoints.push(new PMPoint(1.92522, -0.177703, 0));
   allpoints.push(new PMPoint(0.735368, 1.45998, 0));
   allpoints.push(new PMPoint(0.309448, 1.59837, 0));
   allpoints.push(new PMPoint(0.0462159, 1.23607, 0));
   allpoints.push(new PMPoint(-0.611758, 1.0596, 0));
   allpoints.push(new PMPoint(-1.05146, 1.21177, 0));
   allpoints.push(new PMPoint(-1.47738, 1.07338, 0));
   allpoints.push(new PMPoint(-1.47738, 0.625541, 0));
   allpoints.push(new PMPoint(-1.09827, 0.0417669, 0));
   allpoints.push(new PMPoint(-1.47738, -0.177703, 0));
   allpoints.push(new PMPoint(-1.47738, -0.625541, 0));
   allpoints.push(new PMPoint(-1.05146, -0.763931, 0));
   allpoints.push(new PMPoint(0.611758, -1.0596, 0));
   allpoints.push(new PMPoint(1.0596, -1.0596, 0));
   allpoints.push(new PMPoint(0.120074, -1.54201, 0));
   allpoints.push(new PMPoint(0.565459, -1.49519, 0));
   allpoints.push(new PMPoint(-0.51801, -0.869653, 0));
   allpoints.push(new PMPoint(-0.335858, -1.27877, 0));
   allpoints.push(new PMPoint(1.41822, 1.25858, 0));
   allpoints.push(new PMPoint(1.0091, 1.44073, 0));
   allpoints.push(new PMPoint(1.99149, 0.0885787, 0));
   allpoints.push(new PMPoint(1.94468, 0.533963, 0));
   allpoints.push(new PMPoint(2.37306, 0.625541, 0));
   allpoints.push(new PMPoint(2.37306, 1.07338, 0));
   allpoints.push(new PMPoint(2.06361, 1.4993, 0));
   allpoints.push(new PMPoint(1.63769, 1.63769, 0));
   allpoints.push(new PMPoint(2.37306, -0.625541, 0));
   allpoints.push(new PMPoint(2.37306, -0.177703, 0));
   allpoints.push(new PMPoint(1.63769, -1.18985, 0));
   allpoints.push(new PMPoint(2.06361, -1.05146, 0));
   allpoints.push(new PMPoint(0.873757, 1.8859, 0));
   allpoints.push(new PMPoint(0.447838, 2.02429, 0));
   allpoints.push(new PMPoint(-0.0528601, 1.86161, 0));
   allpoints.push(new PMPoint(-0.316093, 1.4993, 0));
   allpoints.push(new PMPoint(-1.61577, 0.199622, 0));
   allpoints.push(new PMPoint(-1.18985, 0.0612323, 0));
   allpoints.push(new PMPoint(-1.18985, 1.63769, 0));
   allpoints.push(new PMPoint(-1.61577, 1.4993, 0));
   allpoints.push(new PMPoint(-1.92522, 1.07338, 0));
   allpoints.push(new PMPoint(-1.92522, 0.625541, 0));
   allpoints.push(new PMPoint(-1.61577, -1.05146, 0));
   allpoints.push(new PMPoint(-1.18985, -1.18985, 0));
   allpoints.push(new PMPoint(-1.92522, -0.177703, 0));
   allpoints.push(new PMPoint(-1.92522, -0.625541, 0));
   allpoints.push(new PMPoint(0.835677, -1.44744, 0));
   allpoints.push(new PMPoint(0.0269637, -1.98006, 0));
   allpoints.push(new PMPoint(0.414803, -2.20398, 0));
   allpoints.push(new PMPoint(0.747611, -1.90431, 0));
   allpoints.push(new PMPoint(-0.289046, -1.35985, 0));
   allpoints.push(new PMPoint(1.37141, 1.70397, 0));
   allpoints.push(new PMPoint(2.3538, 0.351811, 0));
   allpoints.push(new PMPoint(2.79897, 0.487152, 0));
   allpoints.push(new PMPoint(3.06221, 0.84946, 0));
   allpoints.push(new PMPoint(2.79897, 1.21177, 0));
   allpoints.push(new PMPoint(2.14914, 1.46122, 0));
   allpoints.push(new PMPoint(2.32684, 1.86161, 0));
   allpoints.push(new PMPoint(2.06361, 2.22392, 0));
   allpoints.push(new PMPoint(1.63769, 2.08553, 0));
   allpoints.push(new PMPoint(2.14914, -1.01338, 0));
   allpoints.push(new PMPoint(0.00978633, 1.93118, 0));
   allpoints.push(new PMPoint(-1.91543, 0.53243, 0));
   allpoints.push(new PMPoint(-1.91543, 1.16649, 0));
   allpoints.push(new PMPoint(-2.35114, 1.21177, 0));
   allpoints.push(new PMPoint(-2.61437, 0.84946, 0));
   allpoints.push(new PMPoint(-2.35114, 0.487152, 0));
   allpoints.push(new PMPoint(-1.91543, -0.718652, 0));
   allpoints.push(new PMPoint(0.714465, -2.53679, 0));
   allpoints.push(new PMPoint(1.04727, -2.23712, 0));
   allpoints.push(new PMPoint(-0.196955, -2.3679, 0));
   allpoints.push(new PMPoint(0.190884, -2.59182, 0));
   allpoints.push(new PMPoint(3.42452, 1.11269, 0));
   allpoints.push(new PMPoint(3.16128, 1.475, 0));
   allpoints.push(new PMPoint(2.66059, 1.63769, 0));
   allpoints.push(new PMPoint(2.23467, 1.4993, 0));
   allpoints.push(new PMPoint(2.68915, 2.12484, 0));
   allpoints.push(new PMPoint(2.42592, 2.48715, 0));
   allpoints.push(new PMPoint(0.276413, -2.6299, 0));
   allpoints.push(new PMPoint(2.75216, 1.65715, 0));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 4, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 53, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 47, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 74, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 50, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 80, 81, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 84, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 17, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 34, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 59, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 61, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 39, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 66, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 89, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 90, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 95, 114, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 114, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(93, 92, 110, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(93, 110, 111, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 91, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 92, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 93, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 93, 112, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 112, 113, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 63, 94, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(93, 111, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 35, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 64, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 64, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 95, 96, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 96, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 116, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 77, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 98, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 86, 106, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 106, 107, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(79, 78, 102, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 102, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 103, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 71, 99, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 76, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 85, 108, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(86, 108, 109, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 46, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 105, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 100, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 49, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 54, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 86, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 46, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 7, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 88, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 25, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 56, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 4, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 32, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
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
