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

   var axes = [[70,116],
      [44,101],
      [99,98],
      [85,84],
      [79,78],
      [73,72],
      [71,70],
      [70,69],
      [21,67],
      [62,61],
      [53,52],
      [52,51],
      [51,50],
      [45,44],
      [44,43],
      [42,41],
      [43,42],
      [37,8],
      [35,34],
      [34,33],
      [33,32],
      [27,9],
      [24,23],
      [23,22],
      [22,21],
      [21,20],
      [12,11],
      [13,12],
      [14,13],
      [15,14],
      [16,15],
      [8,7],
      [6,5],
      [7,6],
      [9,8],
      [5,4],
      [4,3],
      [10,9],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.77672882547631,
      3.04280887270247,
      2.68680207558007,
      2.48923451380542,
      2.58801829469275,
      2.48923451380542,
      2.48923451380543,
      2.68680207558007,
      2.77672882547631,
      2.48923451380542,
      2.48923451380542,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380542,
      2.48923451380542,
      2.0344439357957,
      2.77672882547631,
      2.48923451380543,
      2.0344439357957,
      2.48923451380543,
      3.04280887270247,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.68680207558007,
      2.48923451380542,
      2.0344439357957,
      2.48923451380543,
      2.0344439357957,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.0344439357957,
      2.68680207558007,
      2.0344439357957,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542];

   var subtrees = [[126,127],
      [124,125],
      [123],
      [122],
      [119,120,121],
      [118],
      [117],
      [116,126,127],
      [114,115],
      [113],
      [112],
      [104,105,106,107,108,109,110,111],
      [103],
      [102],
      [101,124,125],
      [100],
      [92,93,94,95,96,97,98,99,123],
      [90,91],
      [89],
      [81,82,83,84,85,86,87,88,122],
      [80],
      [78,79,119,120,121],
      [77],
      [69,70,71,72,73,74,75,76,116,117,118,126,127],
      [68],
      [67,114,115],
      [66],
      [58,59,60,61,62,63,64,65,113],
      [57],
      [49,50,51,52,53,54,55,56,103,104,105,106,107,108,109,110,111,112],
      [48],
      [47],
      [46],
      [38,39,40,41,42,43,44,45,92,93,94,95,96,97,98,99,100,101,102,123,124,125],
      [37,90,91],
      [29,30,31,32,33,34,35,36,80,81,82,83,84,85,86,87,88,89,122],
      [28],
      [27,78,79,119,120,121],
      [19,20,21,22,23,24,25,26,67,68,69,70,71,72,73,74,75,76,77,114,115,116,117,118,126,127],
      [11,12,13,14,15,16,17,18,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,103,104,105,106,107,108,109,110,111,112,113],
      [3,4,5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,119,120,121,122,123,124,125]];

   var polytoperoot = [[0.881342137750626,-0.234749984132955,-0.399615927794714],
      [2.61803398874989,0,-1],
      [0.336642740903247,0,0.881342137750625]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.336643, 0, 0));
   allpoints.push(new PMPoint(0.168321, 0.291541, 0));
   allpoints.push(new PMPoint(-0.27235, -0.197874, 0));
   allpoints.push(new PMPoint(-0.376378, -0.51804, 0));
   allpoints.push(new PMPoint(-0.27235, -0.838206, 0));
   allpoints.push(new PMPoint(0, -1.03608, 0));
   allpoints.push(new PMPoint(0.336643, -1.03608, 0));
   allpoints.push(new PMPoint(0.608992, -0.838206, 0));
   allpoints.push(new PMPoint(0.713021, -0.51804, 0));
   allpoints.push(new PMPoint(0.608992, -0.197874, 0));
   allpoints.push(new PMPoint(0.133133, 0.62634, 0));
   allpoints.push(new PMPoint(-0.0921253, 0.876514, 0));
   allpoints.push(new PMPoint(-0.421412, 0.946506, 0));
   allpoints.push(new PMPoint(-0.72895, 0.809581, 0));
   allpoints.push(new PMPoint(-0.897271, 0.51804, 0));
   allpoints.push(new PMPoint(-0.862083, 0.183241, 0));
   allpoints.push(new PMPoint(-0.636825, -0.066933, 0));
   allpoints.push(new PMPoint(-0.307538, -0.136925, 0));
   allpoints.push(new PMPoint(0.644181, -0.136925, 0));
   allpoints.push(new PMPoint(0.973467, -0.066933, 0));
   allpoints.push(new PMPoint(1.19873, 0.183241, 0));
   allpoints.push(new PMPoint(1.23391, 0.51804, 0));
   allpoints.push(new PMPoint(1.06559, 0.809581, 0));
   allpoints.push(new PMPoint(0.758054, 0.946506, 0));
   allpoints.push(new PMPoint(0.428768, 0.876514, 0));
   allpoints.push(new PMPoint(0.20351, 0.62634, 0));
   allpoints.push(new PMPoint(0.938279, -0.267866, 0));
   allpoints.push(new PMPoint(-0.601636, -0.267866, 0));
   allpoints.push(new PMPoint(-0.648728, -0.320166, 0));
   allpoints.push(new PMPoint(-0.98537, -0.320166, 0));
   allpoints.push(new PMPoint(-1.25772, -0.51804, 0));
   allpoints.push(new PMPoint(-1.36175, -0.838206, 0));
   allpoints.push(new PMPoint(-1.25772, -1.15837, 0));
   allpoints.push(new PMPoint(-0.98537, -1.35625, 0));
   allpoints.push(new PMPoint(-0.648728, -1.35625, 0));
   allpoints.push(new PMPoint(-0.376378, -1.15837, 0));
   allpoints.push(new PMPoint(0.938279, -0.768214, 0));
   allpoints.push(new PMPoint(-0.27235, -1.23395, 0));
   allpoints.push(new PMPoint(-0.376378, -1.55412, 0));
   allpoints.push(new PMPoint(-0.27235, -1.87429, 0));
   allpoints.push(new PMPoint(0, -2.07216, 0));
   allpoints.push(new PMPoint(0.336643, -2.07216, 0));
   allpoints.push(new PMPoint(0.608992, -1.87429, 0));
   allpoints.push(new PMPoint(0.713021, -1.55412, 0));
   allpoints.push(new PMPoint(0.608992, -1.23395, 0));
   allpoints.push(new PMPoint(-0.307538, -1.173, 0));
   allpoints.push(new PMPoint(0.644181, -1.173, 0));
   allpoints.push(new PMPoint(-1.16962, 0.320166, 0));
   allpoints.push(new PMPoint(-0.764139, 1.14438, 0));
   allpoints.push(new PMPoint(-0.989397, 1.39455, 0));
   allpoints.push(new PMPoint(-1.31868, 1.46455, 0));
   allpoints.push(new PMPoint(-1.62622, 1.32762, 0));
   allpoints.push(new PMPoint(-1.79454, 1.03608, 0));
   allpoints.push(new PMPoint(-1.75935, 0.701281, 0));
   allpoints.push(new PMPoint(-1.5341, 0.451107, 0));
   allpoints.push(new PMPoint(-1.20481, 0.381115, 0));
   allpoints.push(new PMPoint(-0.693761, 1.14438, 0));
   allpoints.push(new PMPoint(0.215413, 1.01344, 0));
   allpoints.push(new PMPoint(0.383734, 1.30498, 0));
   allpoints.push(new PMPoint(0.348546, 1.63978, 0));
   allpoints.push(new PMPoint(0.123288, 1.88995, 0));
   allpoints.push(new PMPoint(-0.205999, 1.95995, 0));
   allpoints.push(new PMPoint(-0.513537, 1.82302, 0));
   allpoints.push(new PMPoint(-0.681858, 1.53148, 0));
   allpoints.push(new PMPoint(-0.64667, 1.19668, 0));
   allpoints.push(new PMPoint(0.237161, 0.946506, 0));
   allpoints.push(new PMPoint(1.30275, -0.136925, 0));
   allpoints.push(new PMPoint(1.50626, 0.320166, 0));
   allpoints.push(new PMPoint(1.54145, 0.381115, 0));
   allpoints.push(new PMPoint(1.87074, 0.451107, 0));
   allpoints.push(new PMPoint(2.096, 0.701281, 0));
   allpoints.push(new PMPoint(2.13119, 1.03608, 0));
   allpoints.push(new PMPoint(1.96286, 1.32762, 0));
   allpoints.push(new PMPoint(1.65533, 1.46455, 0));
   allpoints.push(new PMPoint(1.32604, 1.39455, 0));
   allpoints.push(new PMPoint(1.10078, 1.14438, 0));
   allpoints.push(new PMPoint(1.0304, 1.14438, 0));
   allpoints.push(new PMPoint(0.963195, -0.743298, 0));
   allpoints.push(new PMPoint(1.18845, -0.493124, 0));
   allpoints.push(new PMPoint(-1.58701, -1.08838, 0));
   allpoints.push(new PMPoint(-1.59436, -1.15837, 0));
   allpoints.push(new PMPoint(-1.86671, -1.35625, 0));
   allpoints.push(new PMPoint(-1.97074, -1.67641, 0));
   allpoints.push(new PMPoint(-1.86671, -1.99658, 0));
   allpoints.push(new PMPoint(-1.59436, -2.19445, 0));
   allpoints.push(new PMPoint(-1.25772, -2.19445, 0));
   allpoints.push(new PMPoint(-0.98537, -1.99658, 0));
   allpoints.push(new PMPoint(-0.881342, -1.67641, 0));
   allpoints.push(new PMPoint(-0.817049, -1.64779, 0));
   allpoints.push(new PMPoint(0.678984, -1.16749, 0));
   allpoints.push(new PMPoint(1.00827, -1.0975, 0));
   allpoints.push(new PMPoint(0.232614, -2.39233, 0));
   allpoints.push(new PMPoint(0.336643, -2.71249, 0));
   allpoints.push(new PMPoint(0.608992, -2.91037, 0));
   allpoints.push(new PMPoint(0.945635, -2.91037, 0));
   allpoints.push(new PMPoint(1.21798, -2.71249, 0));
   allpoints.push(new PMPoint(1.32201, -2.39233, 0));
   allpoints.push(new PMPoint(1.21798, -2.07216, 0));
   allpoints.push(new PMPoint(0.945635, -1.87429, 0));
   allpoints.push(new PMPoint(0.168321, -2.3637, 0));
   allpoints.push(new PMPoint(0.938279, -1.80429, 0));
   allpoints.push(new PMPoint(0.938279, -1.30395, 0));
   allpoints.push(new PMPoint(-1.09343, 1.71472, 0));
   allpoints.push(new PMPoint(-1.15036, 1.75609, 0));
   allpoints.push(new PMPoint(-1.18555, 2.09089, 0));
   allpoints.push(new PMPoint(-1.41081, 2.34106, 0));
   allpoints.push(new PMPoint(-1.74009, 2.41105, 0));
   allpoints.push(new PMPoint(-2.04763, 2.27413, 0));
   allpoints.push(new PMPoint(-2.21595, 1.98259, 0));
   allpoints.push(new PMPoint(-2.18077, 1.64779, 0));
   allpoints.push(new PMPoint(-1.95551, 1.39761, 0));
   allpoints.push(new PMPoint(-1.96286, 1.32762, 0));
   allpoints.push(new PMPoint(0.0192594, 2.21012, 0));
   allpoints.push(new PMPoint(1.62292, -0.0328966, 0));
   allpoints.push(new PMPoint(1.51889, 0.28727, 0));
   allpoints.push(new PMPoint(1.76671, 0.130941, 0));
   allpoints.push(new PMPoint(2.20003, 0.381115, 0));
   allpoints.push(new PMPoint(2.29951, 1.32762, 0));
   allpoints.push(new PMPoint(1.13152, -1.03484, 0));
   allpoints.push(new PMPoint(1.4608, -0.964847, 0));
   allpoints.push(new PMPoint(1.49599, -0.630048, 0));
   allpoints.push(new PMPoint(-1.9019, -2.33138, 0));
   allpoints.push(new PMPoint(1.25317, -1.73736, 0));
   allpoints.push(new PMPoint(1.18845, -1.57904, 0));
   allpoints.push(new PMPoint(0.963195, -1.32886, 0));
   allpoints.push(new PMPoint(2.08688, 0.0269123, 0));
   allpoints.push(new PMPoint(2.19091, 0.347079, 0));

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
   allpoints[118].makesphere(0.02,points_material);
   allpoints[119].makesphere(0.02,points_material);
   allpoints[120].makesphere(0.02,points_material);
   allpoints[121].makesphere(0.02,points_material);
   allpoints[122].makesphere(0.02,points_material);
   allpoints[123].makesphere(0.02,points_material);
   allpoints[124].makesphere(0.02,points_material);
   allpoints[125].makesphere(0.02,points_material);
   allpoints[126].makesphere(0.02,points_material);
   allpoints[127].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[118].vector);
   faces.vertices.push(allpoints[119].vector);
   faces.vertices.push(allpoints[120].vector);
   faces.vertices.push(allpoints[121].vector);
   faces.vertices.push(allpoints[122].vector);
   faces.vertices.push(allpoints[123].vector);
   faces.vertices.push(allpoints[124].vector);
   faces.vertices.push(allpoints[125].vector);
   faces.vertices.push(allpoints[126].vector);
   faces.vertices.push(allpoints[127].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 0, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 10, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 28, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 9, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 36, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 5, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 67, 114, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 114, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 69, 116, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 113, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 103, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(106, 107, 108, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 108, 109, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 109, 110, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 110, 111, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 111, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 52, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 51, 104, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(106, 104, 105, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 70, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 80, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(96, 97, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 98, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 99, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 43, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 42, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 92, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 93, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(96, 94, 95, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(73, 72, 118, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 52, 112, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 82, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 83, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 84, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 86, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 87, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 88, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 34, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(122, 85, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 89, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(99, 98, 123, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 102, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 101, 124, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 124, 125, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 116, 126, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 126, 127, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 90, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 91, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(79, 78, 119, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 119, 120, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(79, 120, 121, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 51, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 55, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 72, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 73, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 63, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 65, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 13, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 66, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 25, 26, undefined, undefined, 0));


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
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[122].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[99].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[2].vector);
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
