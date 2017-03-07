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

   var axes = [[76,98],
      [96,95],
      [88,87],
      [82,54],
      [80,79],
      [77,76],
      [76,75],
      [74,48],
      [73,72],
      [64,37],
      [65,64],
      [60,34],
      [61,60],
      [54,53],
      [55,54],
      [52,51],
      [49,22],
      [48,47],
      [21,48],
      [20,46],
      [43,42],
      [42,41],
      [40,39],
      [37,36],
      [38,37],
      [34,33],
      [35,34],
      [32,31],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
      [6,22],
      [21,20],
      [20,5],
      [4,18],
      [16,15],
      [15,14],
      [14,13],
      [12,11],
      [13,12],
      [11,10],
      [8,7],
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
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.67794504458899,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.0344439357957,
      2.12437068569194,
      2.12437068569194,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275];

   var subtrees = [[107],
      [106],
      [104,105],
      [103],
      [101,102],
      [99,100],
      [97,98,107],
      [95,96,106],
      [94],
      [93],
      [90,91,92],
      [89],
      [86,87,88,104,105],
      [84,85],
      [82,83,103],
      [79,80,81,101,102],
      [78],
      [75,76,77,97,98,99,100,107],
      [74,95,96,106],
      [72,73,94],
      [71],
      [69,70],
      [68],
      [66,67],
      [64,65,90,91,92,93],
      [62,63],
      [60,61,86,87,88,89,104,105],
      [59],
      [58],
      [56,57],
      [53,54,55,82,83,84,85,103],
      [51,52,79,80,81,101,102],
      [49,50,78],
      [47,48,74,75,76,77,95,96,97,98,99,100,106,107],
      [46,72,73,94],
      [44,45],
      [41,42,43,69,70,71],
      [39,40,68],
      [36,37,38,64,65,66,67,90,91,92,93],
      [33,34,35,60,61,62,63,86,87,88,89,104,105],
      [31,32,59],
      [29,30,58],
      [26,27,28,56,57],
      [24,25,53,54,55,82,83,84,85,103],
      [23],
      [20,21,22,46,47,48,49,50,51,52,72,73,74,75,76,77,78,79,80,81,94,95,96,97,98,99,100,101,102,106,107],
      [19],
      [17,18,44,45],
      [9,10,11,12,13,14,15,16,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,58,59,60,61,62,63,64,65,66,67,68,69,70,71,86,87,88,89,90,91,92,93,104,105],
      [7,8,26,27,28,56,57],
      [5,6,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,55,72,73,74,75,76,77,78,79,80,81,82,83,84,85,94,95,96,97,98,99,100,101,102,103,106,107]];

   var polytoperoot = [[0.952861239967913,-0.296766671961165,0.180548717105183],
      [1.61803398874989,-1,0],
      [-0.139020581348206,-0.224940025757167,-0.813840658619707]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.44988, 0, 0));
   allpoints.push(new PMPoint(0.588901, 0.427861, 0));
   allpoints.push(new PMPoint(0.22494, 0.692294, 0));
   allpoints.push(new PMPoint(-0.139021, 0.427861, 0));
   allpoints.push(new PMPoint(0, -0.44988, 0));
   allpoints.push(new PMPoint(0.44988, -0.44988, 0));
   allpoints.push(new PMPoint(0.877741, -0.139021, 0));
   allpoints.push(new PMPoint(1.01676, 0.288841, 0));
   allpoints.push(new PMPoint(1.03878, 0.427861, 0));
   allpoints.push(new PMPoint(1.40274, 0.692294, 0));
   allpoints.push(new PMPoint(1.54176, 1.12016, 0));
   allpoints.push(new PMPoint(1.40274, 1.54802, 0));
   allpoints.push(new PMPoint(1.03878, 1.81245, 0));
   allpoints.push(new PMPoint(0.588901, 1.81245, 0));
   allpoints.push(new PMPoint(0.22494, 1.54802, 0));
   allpoints.push(new PMPoint(0.0859194, 1.12016, 0));
   allpoints.push(new PMPoint(-0.0394928, 1.05625, 0));
   allpoints.push(new PMPoint(-0.403453, 0.791822, 0));
   allpoints.push(new PMPoint(-0.440049, 0.0935353, 0));
   allpoints.push(new PMPoint(-0.139021, -0.877741, 0));
   allpoints.push(new PMPoint(0.22494, -1.14217, 0));
   allpoints.push(new PMPoint(0.588901, -0.877741, 0));
   allpoints.push(new PMPoint(0.839488, -0.22494, 0));
   allpoints.push(new PMPoint(-0.44988, 0, 0));
   allpoints.push(new PMPoint(-0.44988, -0.44988, 0));
   allpoints.push(new PMPoint(1.2417, -0.403453, 0));
   allpoints.push(new PMPoint(1.60566, -0.139021, 0));
   allpoints.push(new PMPoint(1.46664, 0.288841, 0));
   allpoints.push(new PMPoint(1.8306, 0.553274, 0));
   allpoints.push(new PMPoint(1.96962, 0.981135, 0));
   allpoints.push(new PMPoint(1.66717, 1.91198, 0));
   allpoints.push(new PMPoint(1.30321, 2.17641, 0));
   allpoints.push(new PMPoint(1.99164, 1.12016, 0));
   allpoints.push(new PMPoint(2.13066, 1.54802, 0));
   allpoints.push(new PMPoint(1.7667, 1.81245, 0));
   allpoints.push(new PMPoint(1.1778, 2.24031, 0));
   allpoints.push(new PMPoint(0.813841, 2.50474, 0));
   allpoints.push(new PMPoint(0.44988, 2.24031, 0));
   allpoints.push(new PMPoint(0.324468, 2.17641, 0));
   allpoints.push(new PMPoint(-0.0394928, 1.91198, 0));
   allpoints.push(new PMPoint(-0.139021, 1.81245, 0));
   allpoints.push(new PMPoint(-0.502981, 1.54802, 0));
   allpoints.push(new PMPoint(-0.363961, 1.12016, 0));
   allpoints.push(new PMPoint(-0.767414, 0.527389, 0));
   allpoints.push(new PMPoint(-0.502981, 0.163428, 0));
   allpoints.push(new PMPoint(-0.440049, -0.543415, 0));
   allpoints.push(new PMPoint(-0.403453, -1.2417, 0));
   allpoints.push(new PMPoint(-0.0394928, -1.50613, 0));
   allpoints.push(new PMPoint(1.01676, -0.738721, 0));
   allpoints.push(new PMPoint(0.877741, -0.310859, 0));
   allpoints.push(new PMPoint(0.489373, -1.50613, 0));
   allpoints.push(new PMPoint(0.853333, -1.2417, 0));
   allpoints.push(new PMPoint(-0.877741, 0.139021, 0));
   allpoints.push(new PMPoint(-1.14217, -0.22494, 0));
   allpoints.push(new PMPoint(-0.877741, -0.588901, 0));
   allpoints.push(new PMPoint(1.50613, -0.767414, 0));
   allpoints.push(new PMPoint(1.8701, -0.502981, 0));
   allpoints.push(new PMPoint(2.27065, 0.646809, 0));
   allpoints.push(new PMPoint(1.7142, 2.35939, 0));
   allpoints.push(new PMPoint(2.3951, 1.91198, 0));
   allpoints.push(new PMPoint(2.03113, 2.17641, 0));
   allpoints.push(new PMPoint(2.4195, 0.981135, 0));
   allpoints.push(new PMPoint(2.55852, 1.409, 0));
   allpoints.push(new PMPoint(0.549408, 2.8687, 0));
   allpoints.push(new PMPoint(0.185447, 2.60427, 0));
   allpoints.push(new PMPoint(1.44223, 2.60427, 0));
   allpoints.push(new PMPoint(1.07827, 2.8687, 0));
   allpoints.push(new PMPoint(-0.0865181, 2.35939, 0));
   allpoints.push(new PMPoint(-0.403453, 2.17641, 0));
   allpoints.push(new PMPoint(-0.767414, 1.91198, 0));
   allpoints.push(new PMPoint(-0.80401, 1.21369, 0));
   allpoints.push(new PMPoint(-0.774375, -0.844444, 0));
   allpoints.push(new PMPoint(-0.473347, -1.17877, 0));
   allpoints.push(new PMPoint(0.407923, -1.55316, 0));
   allpoints.push(new PMPoint(-0.767414, -1.50613, 0));
   allpoints.push(new PMPoint(-0.628393, -1.934, 0));
   allpoints.push(new PMPoint(-0.178513, -1.934, 0));
   allpoints.push(new PMPoint(0.923227, -1.17877, 0));
   allpoints.push(new PMPoint(0.628393, -1.934, 0));
   allpoints.push(new PMPoint(1.07827, -1.934, 0));
   allpoints.push(new PMPoint(1.21729, -1.50613, 0));
   allpoints.push(new PMPoint(-1.50613, -0.489373, 0));
   allpoints.push(new PMPoint(-1.2417, -0.853333, 0));
   allpoints.push(new PMPoint(-1.2417, 0.403453, 0));
   allpoints.push(new PMPoint(-1.50613, 0.0394928, 0));
   allpoints.push(new PMPoint(2.75906, 2.17641, 0));
   allpoints.push(new PMPoint(2.62004, 2.60427, 0));
   allpoints.push(new PMPoint(2.17016, 2.60427, 0));
   allpoints.push(new PMPoint(2.57808, 1.50099, 0));
   allpoints.push(new PMPoint(0.410387, 3.29657, 0));
   allpoints.push(new PMPoint(-0.0394928, 3.29657, 0));
   allpoints.push(new PMPoint(-0.178513, 2.8687, 0));
   allpoints.push(new PMPoint(0.996823, 2.91573, 0));
   allpoints.push(new PMPoint(-0.913396, -1.27231, 0));
   allpoints.push(new PMPoint(-0.0865181, -1.95355, 0));
   allpoints.push(new PMPoint(0.360897, -2.00058, 0));
   allpoints.push(new PMPoint(-1.19528, -1.64516, 0));
   allpoints.push(new PMPoint(-1.05625, -2.07302, 0));
   allpoints.push(new PMPoint(-0.628393, -2.38388, 0));
   allpoints.push(new PMPoint(-0.178513, -2.38388, 0));
   allpoints.push(new PMPoint(0.628393, -2.38388, 0));
   allpoints.push(new PMPoint(1.07827, -2.38388, 0));
   allpoints.push(new PMPoint(-1.55316, -0.0419573, 0));
   allpoints.push(new PMPoint(2.62004, 3.05415, 0));
   allpoints.push(new PMPoint(2.17016, 3.05415, 0));
   allpoints.push(new PMPoint(0.0964646, -2.36454, 0));
   allpoints.push(new PMPoint(-0.721929, -2.37405, 0));

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

   faces.faces.push(new THREE.Face3(46, 72, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 73, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 46, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 54, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 94, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 6, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 22, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 64, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 90, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 91, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 98, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 76, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 48, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 22, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 37, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 64, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(99, 100, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 77, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(107, 76, 98, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 52, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 51, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 93, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 60, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 86, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 87, 88, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 66, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 89, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(80, 79, 101, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(80, 101, 102, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 95, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(88, 87, 104, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(88, 104, 105, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 56, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 74, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 48, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 39, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 47, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 75, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 76, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 69, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(103, 82, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(84, 85, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 54, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 18, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 55, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 25, 5, undefined, undefined, 0));


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
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
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
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[99].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[107].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[103].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
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
