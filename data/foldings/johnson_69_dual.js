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

   var axes = [[92,91],
      [89,88],
      [87,86],
      [81,57],
      [79,78],
      [55,79],
      [53,75],
      [71,70],
      [70,50],
      [67,66],
      [65,64],
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

   var angles = [2.80321785608481,
      2.8210710137745,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.81675875066152,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.8210710137745,
      2.8210710137745,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.8210710137745,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.81675875066152,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481];

   var subtrees = [[100,101],
      [98,99],
      [96,97],
      [95],
      [93,94],
      [91,92,100,101],
      [90],
      [88,89,98,99],
      [86,87,96,97],
      [84,85],
      [82,83],
      [81,95],
      [80],
      [78,79,91,92,93,94,100,101],
      [76,77],
      [75,90],
      [74],
      [73],
      [72],
      [70,71,86,87,88,89,96,97,98,99],
      [68,69],
      [66,67,84,85],
      [64,65,82,83],
      [63,80,81,95],
      [62,76,77,78,79,91,92,93,94,100,101],
      [61,74,75,90],
      [60,72,73],
      [59,68,69,70,71,86,87,88,89,96,97,98,99],
      [58,64,65,66,67,82,83,84,85],
      [57,63,80,81,95],
      [56],
      [55,62,76,77,78,79,91,92,93,94,100,101],
      [54],
      [53,61,74,75,90],
      [52],
      [51,60,72,73],
      [50,59,68,69,70,71,86,87,88,89,96,97,98,99],
      [49],
      [48,58,64,65,66,67,82,83,84,85],
      [47,56,57,63,80,81,95],
      [46,54,55,62,76,77,78,79,91,92,93,94,100,101],
      [45],
      [43,44],
      [42,52,53,61,74,75,90],
      [40,41,51,60,72,73],
      [39,49,50,59,68,69,70,71,86,87,88,89,96,97,98,99],
      [38,48,58,64,65,66,67,82,83,84,85],
      [37,47,56,57,63,80,81,95],
      [35,36],
      [34,46,54,55,62,76,77,78,79,91,92,93,94,100,101],
      [33,45],
      [31,32,43,44],
      [29,30],
      [28,42,52,53,61,74,75,90],
      [26,27,40,41,51,60,72,73],
      [25,39,49,50,59,68,69,70,71,86,87,88,89,96,97,98,99],
      [24,38,48,58,64,65,66,67,82,83,84,85],
      [22,23,35,36,37,47,56,57,63,80,81,95],
      [21,33,34,45,46,54,55,62,76,77,78,79,91,92,93,94,100,101],
      [19,20,31,32,43,44],
      [17,18,29,30],
      [15,16,26,27,28,40,41,42,51,52,53,60,61,72,73,74,75,90],
      [14,24,25,38,39,48,49,50,58,59,64,65,66,67,68,69,70,71,82,83,84,85,86,87,88,89,96,97,98,99],
      [12,13,22,23,35,36,37,47,56,57,63,80,81,95],
      [11,21,33,34,45,46,54,55,62,76,77,78,79,91,92,93,94,100,101],
      [9,10,19,20,31,32,43,44],
      [7,8,15,16,17,18,26,27,28,29,30,40,41,42,51,52,53,60,61,72,73,74,75,90],
      [6,14,24,25,38,39,48,49,50,58,59,64,65,66,67,68,69,70,71,82,83,84,85,86,87,88,89,96,97,98,99],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,45,46,47,54,55,56,57,62,63,76,77,78,79,80,81,91,92,93,94,95,100,101]];

   var polytoperoot = [[0,-0.965754173652326,-0.596868904094204],
      [-0.176877716825102,-1.03546018985159,2.45467142202946e-17],
      [-0.518927630227214,0.0886434218636705,0]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.501157, 0, 0));
   allpoints.push(new PMPoint(0.679354, 0.302757, 0));
   allpoints.push(new PMPoint(0.596869, 0.351307, 0));
   allpoints.push(new PMPoint(0.596869, -0.351307, 0));
   allpoints.push(new PMPoint(0.679354, -0.302757, 0));
   allpoints.push(new PMPoint(0.579453, 1.04367, 0));
   allpoints.push(new PMPoint(0.857552, 0.605514, 0));
   allpoints.push(new PMPoint(0.614285, 1.04367, 0));
   allpoints.push(new PMPoint(0.693547, -0.293943, 0));
   allpoints.push(new PMPoint(1.11312, 0.0145554, 0));
   allpoints.push(new PMPoint(0.579453, -1.04367, 0));
   allpoints.push(new PMPoint(0.614285, -1.04367, 0));
   allpoints.push(new PMPoint(0.857552, -0.605514, 0));
   allpoints.push(new PMPoint(-0.0174164, 0.692362, 0));
   allpoints.push(new PMPoint(1.20875, 0.59668, 0));
   allpoints.push(new PMPoint(1.21115, 0.692362, 0));
   allpoints.push(new PMPoint(1.14188, 0.0634189, 0));
   allpoints.push(new PMPoint(1.20793, 0.579993, 0));
   allpoints.push(new PMPoint(0.916751, -0.565229, 0));
   allpoints.push(new PMPoint(1.25887, -0.485413, 0));
   allpoints.push(new PMPoint(-0.0174164, -0.692362, 0));
   allpoints.push(new PMPoint(1.21115, -0.692362, 0));
   allpoints.push(new PMPoint(1.20875, -0.59668, 0));
   allpoints.push(new PMPoint(-0.631194, 1.01322, 0));
   allpoints.push(new PMPoint(-0.614285, 1.04367, 0));
   allpoints.push(new PMPoint(1.55994, 0.587846, 0));
   allpoints.push(new PMPoint(1.82493, 1.01322, 0));
   allpoints.push(new PMPoint(1.80802, 1.04367, 0));
   allpoints.push(new PMPoint(1.64974, 0.178679, 0));
   allpoints.push(new PMPoint(1.55346, 0.516533, 0));
   allpoints.push(new PMPoint(1.59029, -0.368878, 0));
   allpoints.push(new PMPoint(1.63274, -0.0201459, 0));
   allpoints.push(new PMPoint(-0.631194, -1.01322, 0));
   allpoints.push(new PMPoint(-0.614285, -1.04367, 0));
   allpoints.push(new PMPoint(1.82493, -1.01322, 0));
   allpoints.push(new PMPoint(1.55994, -0.587846, 0));
   allpoints.push(new PMPoint(1.80802, -1.04367, 0));
   allpoints.push(new PMPoint(-0.613777, 0.320853, 0));
   allpoints.push(new PMPoint(-0.0174164, 1.39498, 0));
   allpoints.push(new PMPoint(1.72269, 0.276512, 0));
   allpoints.push(new PMPoint(1.80751, 0.320853, 0));
   allpoints.push(new PMPoint(1.21115, 1.39498, 0));
   allpoints.push(new PMPoint(1.9883, -0.673417, 0));
   allpoints.push(new PMPoint(1.72775, -0.0317127, 0));
   allpoints.push(new PMPoint(-0.613777, -0.320853, 0));
   allpoints.push(new PMPoint(-0.0174164, -1.39498, 0));
   allpoints.push(new PMPoint(1.21115, -1.39498, 0));
   allpoints.push(new PMPoint(-1.21065, -0.0304538, 0));
   allpoints.push(new PMPoint(0, 2.08734, 0));
   allpoints.push(new PMPoint(-0.0348328, 2.08734, 0));
   allpoints.push(new PMPoint(2.40438, -0.0304538, 0));
   allpoints.push(new PMPoint(1.19374, 2.08734, 0));
   allpoints.push(new PMPoint(1.22857, 2.08734, 0));
   allpoints.push(new PMPoint(0, -2.08734, 0));
   allpoints.push(new PMPoint(-0.0348328, -2.08734, 0));
   allpoints.push(new PMPoint(1.19374, -2.08734, 0));
   allpoints.push(new PMPoint(1.22857, -2.08734, 0));
   allpoints.push(new PMPoint(-1.22806, 0.661908, 0));
   allpoints.push(new PMPoint(-0.631702, 1.73603, 0));
   allpoints.push(new PMPoint(2.4218, 0.661908, 0));
   allpoints.push(new PMPoint(1.82544, 1.73603, 0));
   allpoints.push(new PMPoint(-0.631702, -1.73603, 0));
   allpoints.push(new PMPoint(1.82544, -1.73603, 0));
   allpoints.push(new PMPoint(-1.13235, 1.01322, 0));
   allpoints.push(new PMPoint(-1.31055, 0.710458, 0));
   allpoints.push(new PMPoint(-1.31288, 0.706249, 0));
   allpoints.push(new PMPoint(-1.47563, 0.394915, 0));
   allpoints.push(new PMPoint(-0.716524, 1.78037, 0));
   allpoints.push(new PMPoint(-0.879274, 1.46904, 0));
   allpoints.push(new PMPoint(-0.535989, 2.08734, 0));
   allpoints.push(new PMPoint(-0.714187, 1.78458, 0));
   allpoints.push(new PMPoint(3.01867, 1.01322, 0));
   allpoints.push(new PMPoint(3.03558, 0.982761, 0));
   allpoints.push(new PMPoint(2.43922, 2.05688, 0));
   allpoints.push(new PMPoint(2.42231, 2.08734, 0));
   allpoints.push(new PMPoint(-0.879274, -1.46904, 0));
   allpoints.push(new PMPoint(-0.716524, -1.78037, 0));
   allpoints.push(new PMPoint(-0.714187, -1.78458, 0));
   allpoints.push(new PMPoint(-0.535989, -2.08734, 0));
   allpoints.push(new PMPoint(2.43922, -2.05688, 0));
   allpoints.push(new PMPoint(2.42231, -2.08734, 0));
   allpoints.push(new PMPoint(-1.32474, 1.30716, 0));
   allpoints.push(new PMPoint(-1.74431, 0.99866, 0));
   allpoints.push(new PMPoint(-1.78686, 0.92203, 0));
   allpoints.push(new PMPoint(-1.82685, 0.402788, 0));
   allpoints.push(new PMPoint(-0.631702, 2.43864, 0));
   allpoints.push(new PMPoint(-0.714187, 2.3901, 0));
   allpoints.push(new PMPoint(-0.728379, 2.38128, 0));
   allpoints.push(new PMPoint(-1.14795, 2.07278, 0));
   allpoints.push(new PMPoint(1.82544, 2.43864, 0));
   allpoints.push(new PMPoint(-0.714187, -2.3901, 0));
   allpoints.push(new PMPoint(-0.631702, -2.43864, 0));
   allpoints.push(new PMPoint(-1.14795, -2.07278, 0));
   allpoints.push(new PMPoint(-0.728379, -2.38128, 0));
   allpoints.push(new PMPoint(1.82544, -2.43864, 0));
   allpoints.push(new PMPoint(-0.649118, 3.13101, 0));
   allpoints.push(new PMPoint(-0.892385, 2.69285, 0));
   allpoints.push(new PMPoint(-0.951584, 2.65257, 0));
   allpoints.push(new PMPoint(-1.2937, 2.57275, 0));
   allpoints.push(new PMPoint(-0.892385, -2.69285, 0));
   allpoints.push(new PMPoint(-0.649118, -3.13101, 0));

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
   faces.faces.push(new THREE.Face3(58, 64, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 34, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 28, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 59, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 34, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 28, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 58, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 66, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 60, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 47, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 77, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 28, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 57, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 51, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 50, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 63, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 50, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 86, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 61, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 62, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 75, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 79, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 91, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 57, 81, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 57, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 96, 97, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(86, 97, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(101, 92, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(101, 91, 100, undefined, undefined, 0));

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

   faces.faces.push(new THREE.Face3(71, 70, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 88, 89, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 82, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 83, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 66, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 84, 85, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 93, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 94, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(89, 88, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(89, 98, 99, undefined, undefined, 0));


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
   line.vertices.push(allpoints[65].vector);
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
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
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
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[72].vector);
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
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[74].vector);
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
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[91].vector);
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
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[89].vector);
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
