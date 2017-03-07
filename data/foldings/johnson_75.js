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

   var axes = [[85,108],
      [102,101],
      [97,96],
      [90,89],
      [89,58],
      [86,85],
      [85,55],
      [82,81],
      [80,79],
      [77,49],
      [75,74],
      [44,73],
      [71,70],
      [40,69],
      [66,41],
      [62,38],
      [58,57],
      [59,58],
      [55,33],
      [56,55],
      [54,53],
      [51,50],
      [49,48],
      [27,49],
      [45,44],
      [44,22],
      [41,40],
      [40,19],
      [42,41],
      [38,37],
      [39,38],
      [34,15],
      [33,32],
      [14,33],
      [13,31],
      [11,28],
      [28,27],
      [27,26],
      [25,24],
      [22,21],
      [23,22],
      [19,8],
      [20,19],
      [18,17],
      [15,14],
      [6,15],
      [14,13],
      [13,5],
      [4,11],
      [11,10],
      [3,9],
      [8,7],
      [2,8],
      [5,0],
      [1,6],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.67794504458899,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275];

   var subtrees = [[117],
      [116],
      [115],
      [112,113,114],
      [111],
      [109,110],
      [107,108,117],
      [105,106],
      [103,104],
      [101,102,116],
      [99,100],
      [98],
      [96,97,115],
      [95],
      [94],
      [93],
      [91,92],
      [89,90,111,112,113,114],
      [88],
      [85,86,87,107,108,109,110,117],
      [84],
      [81,82,83,105,106],
      [78,79,80,103,104],
      [77,101,102,116],
      [74,75,76,99,100],
      [72,73,98],
      [70,71,96,97,115],
      [68,69,95],
      [66,67,94],
      [64,65],
      [62,63,93],
      [60,61],
      [57,58,59,89,90,91,92,111,112,113,114],
      [55,56,85,86,87,88,107,108,109,110,117],
      [53,54,84],
      [52],
      [50,51,81,82,83,105,106],
      [48,49,77,78,79,80,101,102,103,104,116],
      [47],
      [46],
      [44,45,72,73,74,75,76,98,99,100],
      [43],
      [40,41,42,66,67,68,69,70,71,94,95,96,97,115],
      [37,38,39,62,63,64,65,93],
      [36],
      [34,35,60,61],
      [32,33,55,56,57,58,59,85,86,87,88,89,90,91,92,107,108,109,110,111,112,113,114,117],
      [31,53,54,84],
      [29,30],
      [26,27,28,48,49,50,51,52,77,78,79,80,81,82,83,101,102,103,104,105,106,116],
      [24,25,47],
      [21,22,23,44,45,46,72,73,74,75,76,98,99,100],
      [19,20,40,41,42,43,66,67,68,69,70,71,94,95,96,97,115],
      [17,18,37,38,39,62,63,64,65,93],
      [16],
      [13,14,15,31,32,33,34,35,36,53,54,55,56,57,58,59,60,61,84,85,86,87,88,89,90,91,92,107,108,109,110,111,112,113,114,117],
      [12],
      [10,11,26,27,28,29,30,48,49,50,51,52,77,78,79,80,81,82,83,101,102,103,104,105,106,116],
      [9,24,25,47],
      [7,8,19,20,21,22,23,40,41,42,43,44,45,46,66,67,68,69,70,71,72,73,74,75,76,94,95,96,97,98,99,100,115],
      [5,6,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,84,85,86,87,88,89,90,91,92,93,107,108,109,110,111,112,113,114,117]];

   var polytoperoot = [[0.948536019861961,-0.223918979794513,0.223918979794513],
      [1.61803398874989,-1,0],
      [-0.13838954023921,-0.223918979794513,-0.81014647962275]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.447838, 0, 0));
   allpoints.push(new PMPoint(0.586227, 0.425919, 0));
   allpoints.push(new PMPoint(0.223919, 0.689152, 0));
   allpoints.push(new PMPoint(-0.13839, 0.425919, 0));
   allpoints.push(new PMPoint(0, -0.447838, 0));
   allpoints.push(new PMPoint(0.447838, -0.447838, 0));
   allpoints.push(new PMPoint(0.873757, -0.13839, 0));
   allpoints.push(new PMPoint(1.01215, 0.28753, 0));
   allpoints.push(new PMPoint(0.633039, 0.871304, 0));
   allpoints.push(new PMPoint(-0.0393136, 1.05146, 0));
   allpoints.push(new PMPoint(-0.401622, 0.788228, 0));
   allpoints.push(new PMPoint(-0.438052, 0.0931107, 0));
   allpoints.push(new PMPoint(-0.13839, -0.873757, 0));
   allpoints.push(new PMPoint(0.223919, -1.13699, 0));
   allpoints.push(new PMPoint(0.586227, -0.873757, 0));
   allpoints.push(new PMPoint(0.835677, -0.223919, 0));
   allpoints.push(new PMPoint(-0.447838, 0, 0));
   allpoints.push(new PMPoint(-0.447838, -0.447838, 0));
   allpoints.push(new PMPoint(1.15054, 0.713449, 0));
   allpoints.push(new PMPoint(0.724617, 0.851838, 0));
   allpoints.push(new PMPoint(1.23607, -0.401622, 0));
   allpoints.push(new PMPoint(1.59837, -0.13839, 0));
   allpoints.push(new PMPoint(1.45998, 0.28753, 0));
   allpoints.push(new PMPoint(0.450887, 1.28042, 0));
   allpoints.push(new PMPoint(0.0417669, 1.09827, 0));
   allpoints.push(new PMPoint(-0.177703, 1.47738, 0));
   allpoints.push(new PMPoint(-0.625541, 1.47738, 0));
   allpoints.push(new PMPoint(-0.763931, 1.05146, 0));
   allpoints.push(new PMPoint(-0.763931, 0.524995, 0));
   allpoints.push(new PMPoint(-0.500698, 0.162687, 0));
   allpoints.push(new PMPoint(-0.438052, -0.540949, 0));
   allpoints.push(new PMPoint(-0.401622, -1.23607, 0));
   allpoints.push(new PMPoint(-0.0393136, -1.4993, 0));
   allpoints.push(new PMPoint(1.01215, -0.735368, 0));
   allpoints.push(new PMPoint(0.873757, -0.309448, 0));
   allpoints.push(new PMPoint(0.633039, -1.31914, 0));
   allpoints.push(new PMPoint(-0.873757, 0.13839, 0));
   allpoints.push(new PMPoint(-1.13699, -0.223919, 0));
   allpoints.push(new PMPoint(-0.873757, -0.586227, 0));
   allpoints.push(new PMPoint(1.41377, 1.07576, 0));
   allpoints.push(new PMPoint(1.15054, 1.43807, 0));
   allpoints.push(new PMPoint(0.724617, 1.29968, 0));
   allpoints.push(new PMPoint(1.4502, 0.38064, 0));
   allpoints.push(new PMPoint(2.02429, 0, 0));
   allpoints.push(new PMPoint(1.8859, 0.425919, 0));
   allpoints.push(new PMPoint(1.64519, -0.583774, 0));
   allpoints.push(new PMPoint(0.0885787, 1.54366, 0));
   allpoints.push(new PMPoint(-0.177703, 1.92522, 0));
   allpoints.push(new PMPoint(-0.625541, 1.92522, 0));
   allpoints.push(new PMPoint(-1.05146, 1.61577, 0));
   allpoints.push(new PMPoint(-1.18985, 1.18985, 0));
   allpoints.push(new PMPoint(-0.810742, 0.606076, 0));
   allpoints.push(new PMPoint(-0.77086, -0.840611, 0));
   allpoints.push(new PMPoint(-0.471198, -1.17342, 0));
   allpoints.push(new PMPoint(0.322995, -1.76253, 0));
   allpoints.push(new PMPoint(0.586227, -1.40022, 0));
   allpoints.push(new PMPoint(-0.763931, -1.4993, 0));
   allpoints.push(new PMPoint(-0.625541, -1.92522, 0));
   allpoints.push(new PMPoint(-0.177703, -1.92522, 0));
   allpoints.push(new PMPoint(0.724617, -1.29968, 0));
   allpoints.push(new PMPoint(1.15054, -1.16129, 0));
   allpoints.push(new PMPoint(-1.4993, -0.487152, 0));
   allpoints.push(new PMPoint(-1.23607, -0.84946, 0));
   allpoints.push(new PMPoint(-1.23607, 0.401622, 0));
   allpoints.push(new PMPoint(-1.4993, 0.0393136, 0));
   allpoints.push(new PMPoint(1.01215, 1.86399, 0));
   allpoints.push(new PMPoint(0.586227, 1.7256, 0));
   allpoints.push(new PMPoint(1.51284, 0.450216, 0));
   allpoints.push(new PMPoint(1.77608, 0.812525, 0));
   allpoints.push(new PMPoint(1.77608, 1.33899, 0));
   allpoints.push(new PMPoint(1.51284, 1.7013, 0));
   allpoints.push(new PMPoint(1.73676, -0.564309, 0));
   allpoints.push(new PMPoint(2.16268, -0.425919, 0));
   allpoints.push(new PMPoint(2.47213, 0, 0));
   allpoints.push(new PMPoint(2.61052, 0.425919, 0));
   allpoints.push(new PMPoint(2.24821, 0.689152, 0));
   allpoints.push(new PMPoint(-1.01338, 1.7013, 0));
   allpoints.push(new PMPoint(-0.0393136, 2.35114, 0));
   allpoints.push(new PMPoint(-0.401622, 2.61437, 0));
   allpoints.push(new PMPoint(-0.763931, 2.35114, 0));
   allpoints.push(new PMPoint(-1.41377, 1.879, 0));
   allpoints.push(new PMPoint(-1.77608, 1.61577, 0));
   allpoints.push(new PMPoint(-1.63769, 1.18985, 0));
   allpoints.push(new PMPoint(-0.90925, -1.26653, 0));
   allpoints.push(new PMPoint(0.586227, -2.12484, 0));
   allpoints.push(new PMPoint(1.01215, -1.98645, 0));
   allpoints.push(new PMPoint(1.01215, -1.53861, 0));
   allpoints.push(new PMPoint(-0.0861254, -1.94468, 0));
   allpoints.push(new PMPoint(-0.625541, -2.37306, 0));
   allpoints.push(new PMPoint(-0.177703, -2.37306, 0));
   allpoints.push(new PMPoint(-1.18985, -1.63769, 0));
   allpoints.push(new PMPoint(-1.05146, -2.06361, 0));
   allpoints.push(new PMPoint(-1.54611, -0.0417669, 0));
   allpoints.push(new PMPoint(1.4502, 1.77087, 0));
   allpoints.push(new PMPoint(1.82289, 1.25791, 0));
   allpoints.push(new PMPoint(2.13839, 1.60222, 0));
   allpoints.push(new PMPoint(1.87515, 1.96453, 0));
   allpoints.push(new PMPoint(2.46235, -0.0931107, 0));
   allpoints.push(new PMPoint(2.89805, -0.13839, 0));
   allpoints.push(new PMPoint(3.03644, 0.28753, 0));
   allpoints.push(new PMPoint(-0.84946, 2.31306, 0));
   allpoints.push(new PMPoint(-1.2373, 2.08914, 0));
   allpoints.push(new PMPoint(-0.664855, 2.97668, 0));
   allpoints.push(new PMPoint(-1.02716, 2.71345, 0));
   allpoints.push(new PMPoint(-1.677, 2.24131, 0));
   allpoints.push(new PMPoint(-2.03931, 1.97808, 0));
   allpoints.push(new PMPoint(-0.0393136, -2.02576, 0));
   allpoints.push(new PMPoint(0.223919, -2.38807, 0));
   allpoints.push(new PMPoint(0.724617, -2.55076, 0));
   allpoints.push(new PMPoint(1.15054, -2.41237, 0));
   allpoints.push(new PMPoint(-1.01338, -2.14914, 0));
   allpoints.push(new PMPoint(-0.763931, -2.79897, 0));
   allpoints.push(new PMPoint(-0.401622, -3.06221, 0));
   allpoints.push(new PMPoint(-0.0393136, -2.79897, 0));
   allpoints.push(new PMPoint(2.32054, 2.01134, 0));
   allpoints.push(new PMPoint(-1.2373, 2.53698, 0));
   allpoints.push(new PMPoint(0.633039, -2.57022, 0));

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
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 54, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 31, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 84, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 6, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 15, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 8, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 50, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 81, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 49, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 66, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 43, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 101, 102, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 102, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 69, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(68, 40, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 58, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 89, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(111, 89, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 40, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(85, 55, 107, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(85, 107, 108, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 72, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 73, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(113, 114, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(113, 90, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(113, 89, 112, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 96, 97, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 97, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(85, 108, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 73, 98, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 85, 109, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(86, 109, 110, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 74, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 99, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 115, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(80, 79, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(80, 103, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(69, 95, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(101, 116, 102, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 94, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(82, 81, 105, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(82, 105, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 56, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 55, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 85, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 88, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 15, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 33, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 55, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(91, 92, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(91, 58, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 58, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 27, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(93, 62, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 9, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 28, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 65, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 38, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 11, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 39, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 18, 5, undefined, undefined, 0));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[111].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[101].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[91].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[5].vector);
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
