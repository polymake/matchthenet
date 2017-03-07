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

   var axes = [[96,95],
      [77,94],
      [90,89],
      [87,69],
      [81,80],
      [79,78],
      [77,76],
      [51,75],
      [73,72],
      [71,70],
      [47,69],
      [65,64],
      [62,38],
      [61,60],
      [59,58],
      [57,56],
      [54,32],
      [53,52],
      [51,50],
      [49,48],
      [25,47],
      [47,46],
      [45,44],
      [43,42],
      [39,38],
      [37,36],
      [18,37],
      [34,16],
      [33,32],
      [31,30],
      [29,28],
      [26,10],
      [25,24],
      [23,22],
      [22,9],
      [21,20],
      [19,18],
      [18,6],
      [17,16],
      [15,14],
      [4,15],
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

   var angles = [2.71039914982383,
      2.71039914982384,
      2.71039914982383,
      2.71039914982384,
      2.71039914982383,
      2.69699128655038,
      2.69902858238642,
      2.71039914982383,
      2.71039914982383,
      2.69699128655038,
      2.69902858238642,
      2.68805111602412,
      2.71039914982383,
      2.71039914982383,
      2.71039914982383,
      2.69699128655038,
      2.68449868983043,
      2.68805111602412,
      2.69902858238642,
      2.69616917835374,
      2.68449868983043,
      2.68805111602412,
      2.67236773031476,
      2.67236773031476,
      2.69902858238642,
      2.69699128655038,
      2.69699128655038,
      2.68449868983043,
      2.67236773031476,
      2.67236773031476,
      2.68805111602412,
      2.67957999423518,
      2.67236773031476,
      2.65761870792341,
      2.65761870792341,
      2.67957999423518,
      2.68805111602412,
      2.68449868983043,
      2.67236773031476,
      2.65761870792341,
      2.65761870792341,
      2.67236773031476,
      2.66551890452118,
      2.65761870792341,
      2.65141765217348,
      2.66676269530584,
      2.67236773031476,
      2.65761870792341,
      2.65141765217348,
      2.65761870792341,
      2.65582886583527,
      2.65141765217348,
      2.65761870792341,
      2.65141765217348];

   var subtrees = [[101],
      [100],
      [99],
      [98],
      [97],
      [95,96,101],
      [93,94,100],
      [92],
      [91],
      [89,90,99],
      [87,88,98],
      [85,86],
      [84],
      [83],
      [82],
      [80,81,97],
      [78,79,95,96,101],
      [76,77,93,94,100],
      [74,75,92],
      [72,73,91],
      [70,71,89,90,99],
      [68,69,87,88,98],
      [66,67],
      [64,65,85,86],
      [62,63,84],
      [60,61,83],
      [58,59,82],
      [56,57,80,81,97],
      [54,55,78,79,95,96,101],
      [52,53,76,77,93,94,100],
      [50,51,74,75,92],
      [48,49,72,73,91],
      [46,47,68,69,70,71,87,88,89,90,98,99],
      [44,45,66,67],
      [42,43,64,65,85,86],
      [40,41],
      [38,39,62,63,84],
      [36,37,58,59,60,61,82,83],
      [34,35,56,57,80,81,97],
      [32,33,54,55,78,79,95,96,101],
      [30,31,52,53,76,77,93,94,100],
      [28,29,50,51,74,75,92],
      [26,27,48,49,72,73,91],
      [24,25,46,47,68,69,70,71,87,88,89,90,98,99],
      [22,23,42,43,44,45,64,65,66,67,85,86],
      [20,21,40,41],
      [18,19,36,37,38,39,58,59,60,61,62,63,82,83,84],
      [16,17,34,35,56,57,80,81,97],
      [14,15,30,31,32,33,52,53,54,55,76,77,78,79,93,94,95,96,100,101],
      [12,13,28,29,50,51,74,75,92],
      [10,11,26,27,48,49,72,73,91],
      [8,9,22,23,24,25,42,43,44,45,46,47,64,65,66,67,68,69,70,71,85,86,87,88,89,90,98,99],
      [6,7,18,19,20,21,36,37,38,39,40,41,58,59,60,61,62,63,82,83,84],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,50,51,52,53,54,55,56,57,74,75,76,77,78,79,80,81,92,93,94,95,96,97,100,101]];

   var polytoperoot = [[0,-0.954458192225596,-0.589887603636199],
      [-0.237425237048063,-0.929936086598306,-0.190570005552051],
      [-0.571594734625782,0.140054204125039,0.0287010374608957]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.602147, 0, 0));
   allpoints.push(new PMPoint(0.577708, 0.491492, 0));
   allpoints.push(new PMPoint(0.193703, 0.456095, 0));
   allpoints.push(new PMPoint(0.235383, -0.554234, 0));
   allpoints.push(new PMPoint(0.582964, -0.385776, 0));
   allpoints.push(new PMPoint(1.18232, 0.0711732, 0));
   allpoints.push(new PMPoint(0.959062, 0.486967, 0));
   allpoints.push(new PMPoint(-0.0474718, 0.757005, 0));
   allpoints.push(new PMPoint(-0.418121, 0.433307, 0));
   allpoints.push(new PMPoint(0.492316, 1.0671, 0));
   allpoints.push(new PMPoint(-0.0143006, 0.780821, 0));
   allpoints.push(new PMPoint(0.909898, -0.578529, 0));
   allpoints.push(new PMPoint(1.18232, -0.0711732, 0));
   allpoints.push(new PMPoint(-0.418121, -0.433307, 0));
   allpoints.push(new PMPoint(-0.127195, -0.68738, 0));
   allpoints.push(new PMPoint(0.527687, -1.06042, 0));
   allpoints.push(new PMPoint(0.888181, -0.611348, 0));
   allpoints.push(new PMPoint(1.53759, 0.51199, 0));
   allpoints.push(new PMPoint(1.16931, 0.791267, 0));
   allpoints.push(new PMPoint(1.13839, 0.810454, 0));
   allpoints.push(new PMPoint(0.631489, 1.07091, 0));
   allpoints.push(new PMPoint(-0.682407, 0.151627, 0));
   allpoints.push(new PMPoint(-0.562275, -0.215469, 0));
   allpoints.push(new PMPoint(-0.315534, 1.02829, 0));
   allpoints.push(new PMPoint(-0.769769, 0.900224, 0));
   allpoints.push(new PMPoint(0.0471662, 1.42294, 0));
   allpoints.push(new PMPoint(-0.174553, 1.1269, 0));
   allpoints.push(new PMPoint(1.25038, -0.729788, 0));
   allpoints.push(new PMPoint(1.53759, -0.51199, 0));
   allpoints.push(new PMPoint(-0.176811, -1.06365, 0));
   allpoints.push(new PMPoint(0.396667, -1.11607, 0));
   allpoints.push(new PMPoint(-0.769769, -0.900224, 0));
   allpoints.push(new PMPoint(-0.215508, -1.05649, 0));
   allpoints.push(new PMPoint(1.0723, -1.2151, 0));
   allpoints.push(new PMPoint(1.1605, -0.865608, 0));
   allpoints.push(new PMPoint(1.7302, -0.0715462, 0));
   allpoints.push(new PMPoint(1.80503, 0.276709, 0));
   allpoints.push(new PMPoint(1.8394, 0.95944, 0));
   allpoints.push(new PMPoint(1.41176, 1.06131, 0));
   allpoints.push(new PMPoint(1.28491, 1.14248, 0));
   allpoints.push(new PMPoint(1.07092, 1.42599, 0));
   allpoints.push(new PMPoint(-0.872202, 0.801381, 0));
   allpoints.push(new PMPoint(-1.04813, 0.253045, 0));
   allpoints.push(new PMPoint(-1.05667, 0.214628, 0));
   allpoints.push(new PMPoint(-1.1295, -0.356615, 0));
   allpoints.push(new PMPoint(-0.24255, 1.39088, 0));
   allpoints.push(new PMPoint(-0.699248, 1.46197, 0));
   allpoints.push(new PMPoint(0.63638, 1.61339, 0));
   allpoints.push(new PMPoint(0.29011, 1.69255, 0));
   allpoints.push(new PMPoint(1.31437, -1.08451, 0));
   allpoints.push(new PMPoint(1.8394, -0.95944, 0));
   allpoints.push(new PMPoint(-0.182938, -1.43617, 0));
   allpoints.push(new PMPoint(0.129802, -1.61538, 0));
   allpoints.push(new PMPoint(-0.699248, -1.46197, 0));
   allpoints.push(new PMPoint(-0.343085, -1.40653, 0));
   allpoints.push(new PMPoint(0.610491, -1.62049, 0));
   allpoints.push(new PMPoint(0.960289, -1.55324, 0));
   allpoints.push(new PMPoint(2.12931, 0.399617, 0));
   allpoints.push(new PMPoint(1.9257, 0.887057, 0));
   allpoints.push(new PMPoint(2.26532, -0.141886, 0));
   allpoints.push(new PMPoint(2.13876, 0.370987, 0));
   allpoints.push(new PMPoint(1.76634, 1.48262, 0));
   allpoints.push(new PMPoint(1.32662, 1.40616, 0));
   allpoints.push(new PMPoint(-1.43611, 0.750938, 0));
   allpoints.push(new PMPoint(-1.3934, 0.393024, 0));
   allpoints.push(new PMPoint(-1.42873, 0.234036, 0));
   allpoints.push(new PMPoint(-1.61899, -0.0721149, 0));
   allpoints.push(new PMPoint(-0.216581, 1.75287, 0));
   allpoints.push(new PMPoint(-0.586837, 1.98986, 0));
   allpoints.push(new PMPoint(-1.05426, 1.49105, 0));
   allpoints.push(new PMPoint(-1.25291, 1.19537, 0));
   allpoints.push(new PMPoint(0.705216, 2.05436, 0));
   allpoints.push(new PMPoint(0.18085, 2.11836, 0));
   allpoints.push(new PMPoint(1.42467, -1.42321, 0));
   allpoints.push(new PMPoint(1.76634, -1.48262, 0));
   allpoints.push(new PMPoint(-0.484425, -1.63373, 0));
   allpoints.push(new PMPoint(-0.164063, -2.06809, 0));
   allpoints.push(new PMPoint(-1.25291, -1.19537, 0));
   allpoints.push(new PMPoint(-1.05426, -1.49105, 0));
   allpoints.push(new PMPoint(0.754931, -2.14053, 0));
   allpoints.push(new PMPoint(1.17752, -1.82356, 0));
   allpoints.push(new PMPoint(3.10005, 0.878742, 0));
   allpoints.push(new PMPoint(3.20398, 0.563866, 0));
   allpoints.push(new PMPoint(2.84576, 1.56477, 0));
   allpoints.push(new PMPoint(-1.96767, 0.657422, 0));
   allpoints.push(new PMPoint(-1.6931, 0.192756, 0));
   allpoints.push(new PMPoint(-1.10811, 1.90424, 0));
   allpoints.push(new PMPoint(-1.0405, 1.5641, 0));
   allpoints.push(new PMPoint(-1.21816, 1.79667, 0));
   allpoints.push(new PMPoint(-1.6751, 1.53161, 0));
   allpoints.push(new PMPoint(0.768674, 3.13505, 0));
   allpoints.push(new PMPoint(2.84576, -1.56477, 0));
   allpoints.push(new PMPoint(-0.753054, -1.86765, 0));
   allpoints.push(new PMPoint(-0.674176, -2.20536, 0));
   allpoints.push(new PMPoint(-1.6751, -1.53161, 0));
   allpoints.push(new PMPoint(-1.21816, -1.79667, 0));
   allpoints.push(new PMPoint(1.77146, -2.72862, 0));
   allpoints.push(new PMPoint(-1.2162, 2.98137, 0));
   allpoints.push(new PMPoint(-1.81904, 2.69714, 0));
   allpoints.push(new PMPoint(-0.327838, -3.231, 0));
   allpoints.push(new PMPoint(-1.81904, -2.69714, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
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
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(0, 15, 4, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(17, 5, 4, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(17, 4, 16, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 9, 22, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 22, 23, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(13, 12, 28, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(13, 28, 29, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(31, 4, 15, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(31, 15, 30, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(9, 8, 24, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(18, 6, 36, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(17, 16, 34, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(17, 34, 35, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(9, 42, 43, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(9, 43, 22, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(14, 33, 15, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(19, 18, 38, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(31, 30, 52, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(31, 52, 53, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(24, 47, 25, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(23, 22, 44, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(23, 44, 45, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(18, 37, 58, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(18, 58, 59, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(29, 28, 50, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(29, 50, 51, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(34, 16, 56, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(34, 56, 57, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(43, 42, 64, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(43, 64, 65, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(33, 32, 54, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(33, 54, 55, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(39, 38, 62, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(39, 62, 63, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(37, 36, 60, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(37, 60, 61, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(46, 68, 69, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(46, 69, 47, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(25, 47, 70, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(25, 70, 71, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(45, 44, 66, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(45, 66, 67, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(59, 58, 82, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(51, 50, 74, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(51, 74, 75, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(49, 48, 72, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(49, 72, 73, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(53, 52, 76, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(53, 76, 77, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(32, 78, 79, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(32, 79, 54, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(62, 38, 84, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(61, 60, 83, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(47, 69, 87, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(47, 87, 88, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(57, 56, 80, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(57, 80, 81, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(65, 64, 85, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(65, 85, 86, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(51, 75, 92, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(73, 72, 91, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(76, 93, 94, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(76, 94, 77, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(71, 70, 89, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(71, 89, 90, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(69, 98, 87, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(81, 80, 97, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(78, 95, 96, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(78, 96, 79, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(77, 94, 100, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(90, 89, 99, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(95, 101, 96, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(2, 7, 20, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(21, 20, 40, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(21, 40, 41, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(26, 10, 48, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 54));


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
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[95].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
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
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
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
