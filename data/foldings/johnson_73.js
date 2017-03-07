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

   var axes = [[110,109],
      [100,78],
      [99,98],
      [66,94],
      [89,62],
      [90,89],
      [88,87],
      [84,83],
      [78,77],
      [77,48],
      [79,78],
      [73,72],
      [68,41],
      [67,66],
      [66,65],
      [62,61],
      [63,62],
      [60,35],
      [59,58],
      [56,55],
      [29,54],
      [48,25],
      [49,48],
      [26,49],
      [45,22],
      [44,43],
      [41,40],
      [42,41],
      [39,38],
      [36,16],
      [35,34],
      [15,35],
      [14,33],
      [12,30],
      [30,29],
      [29,28],
      [10,26],
      [25,24],
      [26,25],
      [22,21],
      [23,22],
      [20,8],
      [19,18],
      [16,15],
      [6,16],
      [15,14],
      [14,5],
      [4,12],
      [12,11],
      [3,10],
      [10,9],
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

   var angles = [2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.67794504458899,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275];

   var subtrees = [[117],
      [116],
      [114,115],
      [112,113],
      [111],
      [108,109,110,117],
      [107],
      [105,106],
      [103,104],
      [102],
      [100,101,116],
      [97,98,99,114,115],
      [96],
      [95],
      [93,94,112,113],
      [91,92],
      [89,90,108,109,110,111,117],
      [87,88,107],
      [86],
      [83,84,85,105,106],
      [82],
      [80,81],
      [77,78,79,100,101,102,103,104,116],
      [76],
      [74,75],
      [72,73,97,98,99,114,115],
      [70,71],
      [68,69,96],
      [65,66,67,93,94,95,112,113],
      [64],
      [61,62,63,89,90,91,92,108,109,110,111,117],
      [60,87,88,107],
      [58,59,86],
      [57],
      [55,56,83,84,85,105,106],
      [53,54,82],
      [51,52],
      [50],
      [48,49,76,77,78,79,80,81,100,101,102,103,104,116],
      [46,47],
      [45,74,75],
      [43,44,72,73,97,98,99,114,115],
      [40,41,42,68,69,70,71,96],
      [38,39,65,66,67,93,94,95,112,113],
      [36,37,64],
      [34,35,60,61,62,63,87,88,89,90,91,92,107,108,109,110,111,117],
      [33,58,59,86],
      [31,32],
      [28,29,30,53,54,55,56,57,82,83,84,85,105,106],
      [27],
      [24,25,26,48,49,50,51,52,76,77,78,79,80,81,100,101,102,103,104,116],
      [21,22,23,45,46,47,74,75],
      [20,43,44,72,73,97,98,99,114,115],
      [18,19,40,41,42,68,69,70,71,96],
      [17],
      [14,15,16,33,34,35,36,37,38,39,58,59,60,61,62,63,64,65,66,67,86,87,88,89,90,91,92,93,94,95,107,108,109,110,111,112,113,117],
      [13],
      [11,12,28,29,30,31,32,53,54,55,56,57,82,83,84,85,105,106],
      [9,10,24,25,26,27,48,49,50,51,52,76,77,78,79,80,81,100,101,102,103,104,116],
      [7,8,20,21,22,23,43,44,45,46,47,72,73,74,75,97,98,99,114,115],
      [5,6,14,15,16,17,18,19,33,34,35,36,37,38,39,40,41,42,58,59,60,61,62,63,64,65,66,67,68,69,70,71,86,87,88,89,90,91,92,93,94,95,96,107,108,109,110,111,112,113,117]];

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
   allpoints.push(new PMPoint(0.84946, 0.788228, 0));
   allpoints.push(new PMPoint(0.487152, 1.05146, 0));
   allpoints.push(new PMPoint(-0.0393136, 1.05146, 0));
   allpoints.push(new PMPoint(-0.401622, 0.788228, 0));
   allpoints.push(new PMPoint(-0.438052, 0.0931107, 0));
   allpoints.push(new PMPoint(-0.13839, -0.873757, 0));
   allpoints.push(new PMPoint(0.223919, -1.13699, 0));
   allpoints.push(new PMPoint(0.586227, -0.873757, 0));
   allpoints.push(new PMPoint(0.835677, -0.223919, 0));
   allpoints.push(new PMPoint(-0.447838, 0, 0));
   allpoints.push(new PMPoint(-0.447838, -0.447838, 0));
   allpoints.push(new PMPoint(0.919036, 0.725581, 0));
   allpoints.push(new PMPoint(1.23607, -0.401622, 0));
   allpoints.push(new PMPoint(1.59837, -0.13839, 0));
   allpoints.push(new PMPoint(1.45998, 0.28753, 0));
   allpoints.push(new PMPoint(1.21177, 1.05146, 0));
   allpoints.push(new PMPoint(1.07338, 1.47738, 0));
   allpoints.push(new PMPoint(0.625541, 1.47738, 0));
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
   allpoints.push(new PMPoint(0.487152, -1.4993, 0));
   allpoints.push(new PMPoint(0.84946, -1.23607, 0));
   allpoints.push(new PMPoint(-0.873757, 0.13839, 0));
   allpoints.push(new PMPoint(-1.13699, -0.223919, 0));
   allpoints.push(new PMPoint(-0.873757, -0.586227, 0));
   allpoints.push(new PMPoint(1.4502, 0.38064, 0));
   allpoints.push(new PMPoint(1.35709, 0.818692, 0));
   allpoints.push(new PMPoint(1.89804, 0.194419, 0));
   allpoints.push(new PMPoint(1.4993, -0.763931, 0));
   allpoints.push(new PMPoint(1.86161, -0.500698, 0));
   allpoints.push(new PMPoint(1.07338, 1.92522, 0));
   allpoints.push(new PMPoint(0.625541, 1.92522, 0));
   allpoints.push(new PMPoint(1.51143, 1.38427, 0));
   allpoints.push(new PMPoint(0.199622, 1.61577, 0));
   allpoints.push(new PMPoint(0.0612323, 1.18985, 0));
   allpoints.push(new PMPoint(-0.177703, 1.92522, 0));
   allpoints.push(new PMPoint(-0.625541, 1.92522, 0));
   allpoints.push(new PMPoint(-1.05146, 1.61577, 0));
   allpoints.push(new PMPoint(-1.18985, 1.18985, 0));
   allpoints.push(new PMPoint(-0.810742, 0.606076, 0));
   allpoints.push(new PMPoint(-0.77086, -0.840611, 0));
   allpoints.push(new PMPoint(-0.471198, -1.17342, 0));
   allpoints.push(new PMPoint(0.406071, -1.54611, 0));
   allpoints.push(new PMPoint(-0.763931, -1.4993, 0));
   allpoints.push(new PMPoint(-0.625541, -1.92522, 0));
   allpoints.push(new PMPoint(-0.177703, -1.92522, 0));
   allpoints.push(new PMPoint(0.919036, -1.17342, 0));
   allpoints.push(new PMPoint(0.625541, -1.92522, 0));
   allpoints.push(new PMPoint(1.07338, -1.92522, 0));
   allpoints.push(new PMPoint(1.21177, -1.4993, 0));
   allpoints.push(new PMPoint(-1.4993, -0.487152, 0));
   allpoints.push(new PMPoint(-1.23607, -0.84946, 0));
   allpoints.push(new PMPoint(-1.23607, 0.401622, 0));
   allpoints.push(new PMPoint(-1.4993, 0.0393136, 0));
   allpoints.push(new PMPoint(1.88825, 0.473751, 0));
   allpoints.push(new PMPoint(1.79514, 0.911803, 0));
   allpoints.push(new PMPoint(1.93118, -0.438052, 0));
   allpoints.push(new PMPoint(2.23084, -0.105243, 0));
   allpoints.push(new PMPoint(0.237702, 1.7013, 0));
   allpoints.push(new PMPoint(1.21177, 2.35114, 0));
   allpoints.push(new PMPoint(0.84946, 2.61437, 0));
   allpoints.push(new PMPoint(0.487152, 2.35114, 0));
   allpoints.push(new PMPoint(1.52122, 1.47738, 0));
   allpoints.push(new PMPoint(1.52122, 1.92522, 0));
   allpoints.push(new PMPoint(-1.01338, 1.7013, 0));
   allpoints.push(new PMPoint(-1.41377, 1.879, 0));
   allpoints.push(new PMPoint(-1.77608, 1.61577, 0));
   allpoints.push(new PMPoint(-1.63769, 1.18985, 0));
   allpoints.push(new PMPoint(-0.90925, -1.26653, 0));
   allpoints.push(new PMPoint(-0.0861254, -1.94468, 0));
   allpoints.push(new PMPoint(0.359259, -1.99149, 0));
   allpoints.push(new PMPoint(-0.625541, -2.37306, 0));
   allpoints.push(new PMPoint(-0.177703, -2.37306, 0));
   allpoints.push(new PMPoint(-1.18985, -1.63769, 0));
   allpoints.push(new PMPoint(-1.05146, -2.06361, 0));
   allpoints.push(new PMPoint(0.625541, -2.37306, 0));
   allpoints.push(new PMPoint(1.07338, -2.37306, 0));
   allpoints.push(new PMPoint(1.51143, -1.83211, 0));
   allpoints.push(new PMPoint(-1.54611, -0.0417669, 0));
   allpoints.push(new PMPoint(2.33363, 0.426939, 0));
   allpoints.push(new PMPoint(2.51579, 0.83606, 0));
   allpoints.push(new PMPoint(2.18298, 1.13572, 0));
   allpoints.push(new PMPoint(0.586227, 2.97668, 0));
   allpoints.push(new PMPoint(0.223919, 2.71345, 0));
   allpoints.push(new PMPoint(1.51143, 2.01833, 0));
   allpoints.push(new PMPoint(1.475, 2.71345, 0));
   allpoints.push(new PMPoint(1.11269, 2.97668, 0));
   allpoints.push(new PMPoint(-1.677, 2.24131, 0));
   allpoints.push(new PMPoint(-2.03931, 1.97808, 0));
   allpoints.push(new PMPoint(0.0960267, -2.3538, 0));
   allpoints.push(new PMPoint(-0.763931, -2.79897, 0));
   allpoints.push(new PMPoint(-0.401622, -3.06221, 0));
   allpoints.push(new PMPoint(-0.0393136, -2.79897, 0));
   allpoints.push(new PMPoint(-1.01338, -2.14914, 0));
   allpoints.push(new PMPoint(1.52122, -2.37306, 0));
   allpoints.push(new PMPoint(1.52122, -1.92522, 0));
   allpoints.push(new PMPoint(2.81545, 1.16887, 0));
   allpoints.push(new PMPoint(2.48264, 1.46853, 0));
   allpoints.push(new PMPoint(1.03161, 3.02349, 0));
   allpoints.push(new PMPoint(0.00749825, -3.24436, 0));

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

   faces.faces.push(new THREE.Face3(33, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 59, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 33, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 86, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 6, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 16, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 8, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 55, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 83, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 84, 85, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 28, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 54, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 49, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(79, 78, 100, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 100, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(84, 83, 105, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 105, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 77, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 116, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 80, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 81, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 65, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 93, 94, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 66, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 97, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 98, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 99, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 94, 112, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 112, 113, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(110, 109, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(99, 98, 114, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 114, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 102, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 77, 103, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 103, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(110, 90, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(110, 89, 108, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(110, 108, 109, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 75, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(88, 87, 107, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 72, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 73, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 39, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 38, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(111, 89, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 62, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 89, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 46, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(88, 60, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(88, 35, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 44, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 16, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 35, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(91, 92, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(91, 62, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 26, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 55, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 68, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 10, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 30, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 71, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 41, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 12, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 42, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 19, 5, undefined, undefined, 0));


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
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
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
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[110].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[99].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[111].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
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
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
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
