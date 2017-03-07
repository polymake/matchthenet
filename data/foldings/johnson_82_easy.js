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

   var axes = [[88,87],
      [83,82],
      [80,79],
      [73,45],
      [71,46],
      [41,69],
      [62,61],
      [63,62],
      [56,55],
      [52,51],
      [49,48],
      [45,44],
      [46,45],
      [22,46],
      [42,41],
      [41,40],
      [39,38],
      [36,35],
      [31,30],
      [32,31],
      [27,9],
      [26,25],
      [24,23],
      [4,22],
      [22,21],
      [19,5],
      [17,16],
      [16,15],
      [13,12],
      [14,13],
      [15,14],
      [9,8],
      [10,9],
      [7,3],
      [5,4],
      [4,0],
      [6,5],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.68680207558007,
      2.68680207558007,
      2.58801829469275,
      2.67794504458899,
      2.77672882547631,
      2.67794504458899,
      2.0344439357957,
      2.12437068569194,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.77672882547631,
      2.67794504458899,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.68680207558007,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275];

   var subtrees = [[97],
      [96],
      [94,95],
      [92,93],
      [91],
      [89,90],
      [86,87,88,97],
      [84,85],
      [81,82,83,96],
      [78,79,80,94,95],
      [76,77],
      [75],
      [73,74,92,93],
      [71,72,91],
      [70],
      [68,69,89,90],
      [67],
      [65,66],
      [57,58,59,60,61,62,63,64,84,85,86,87,88,97],
      [55,56,81,82,83,96],
      [53,54],
      [51,52,78,79,80,94,95],
      [48,49,50,76,77],
      [47],
      [44,45,46,71,72,73,74,75,91,92,93],
      [43],
      [40,41,42,68,69,70,89,90],
      [38,39,67],
      [35,36,37,65,66],
      [33,34],
      [30,31,32,55,56,57,58,59,60,61,62,63,64,81,82,83,84,85,86,87,88,96,97],
      [28,29],
      [27,53,54],
      [25,26,51,52,78,79,80,94,95],
      [23,24,48,49,50,76,77],
      [21,22,44,45,46,47,71,72,73,74,75,91,92,93],
      [19,20,43],
      [11,12,13,14,15,16,17,18,30,31,32,33,34,35,36,37,38,39,40,41,42,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,81,82,83,84,85,86,87,88,89,90,96,97],
      [8,9,10,27,28,29,53,54],
      [7,25,26,51,52,78,79,80,94,95],
      [4,5,6,19,20,21,22,23,24,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,91,92,93]];

   var polytoperoot = [[0.589953675968134,-0.266775912128246,-0.729222847072497],
      [1.61803398874989,-0.618033988749894,-1],
      [0.278538342208727,-0.45068450486377,0.729222847072497]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.450685, 0, 0));
   allpoints.push(new PMPoint(0.450685, 0.450685, 0));
   allpoints.push(new PMPoint(0, 0.450685, 0));
   allpoints.push(new PMPoint(-0.139269, -0.428626, 0));
   allpoints.push(new PMPoint(0.225342, -0.693532, 0));
   allpoints.push(new PMPoint(0.589954, -0.428626, 0));
   allpoints.push(new PMPoint(-0.390304, 0.225342, 0));
   allpoints.push(new PMPoint(0.589954, 0.879311, 0));
   allpoints.push(new PMPoint(0.225342, 1.14422, 0));
   allpoints.push(new PMPoint(-0.139269, 0.879311, 0));
   allpoints.push(new PMPoint(0.71559, -0.364611, 0));
   allpoints.push(new PMPoint(1.14422, -0.503881, 0));
   allpoints.push(new PMPoint(1.57284, -0.364611, 0));
   allpoints.push(new PMPoint(1.83775, 0, 0));
   allpoints.push(new PMPoint(1.83775, 0.450685, 0));
   allpoints.push(new PMPoint(1.57284, 0.815296, 0));
   allpoints.push(new PMPoint(1.14422, 0.954565, 0));
   allpoints.push(new PMPoint(0.71559, 0.815296, 0));
   allpoints.push(new PMPoint(0.490248, -1.05814, 0));
   allpoints.push(new PMPoint(0.854859, -0.793238, 0));
   allpoints.push(new PMPoint(-0.428626, 0.139269, 0));
   allpoints.push(new PMPoint(-0.567896, -0.289357, 0));
   allpoints.push(new PMPoint(-0.404175, -0.793238, 0));
   allpoints.push(new PMPoint(-0.0395635, -1.05814, 0));
   allpoints.push(new PMPoint(-0.225342, 0.840989, 0));
   allpoints.push(new PMPoint(-0.615646, 0.615646, 0));
   allpoints.push(new PMPoint(-0.186379, 1.32753, 0));
   allpoints.push(new PMPoint(0.854859, 1.24392, 0));
   allpoints.push(new PMPoint(0.490248, 1.50883, 0));
   allpoints.push(new PMPoint(2.26638, -0.139269, 0));
   allpoints.push(new PMPoint(2.53128, 0.225342, 0));
   allpoints.push(new PMPoint(2.26638, 0.589954, 0));
   allpoints.push(new PMPoint(1.93745, -0.629517, 0));
   allpoints.push(new PMPoint(2.20236, -0.264906, 0));
   allpoints.push(new PMPoint(1.14422, -0.954565, 0));
   allpoints.push(new PMPoint(1.57284, -1.09383, 0));
   allpoints.push(new PMPoint(1.83775, -0.729223, 0));
   allpoints.push(new PMPoint(2.20236, 0.71559, 0));
   allpoints.push(new PMPoint(1.93745, 1.0802, 0));
   allpoints.push(new PMPoint(1.83775, 1.17991, 0));
   allpoints.push(new PMPoint(1.57284, 1.54452, 0));
   allpoints.push(new PMPoint(1.14422, 1.40525, 0));
   allpoints.push(new PMPoint(0.0420323, -1.10525, 0));
   allpoints.push(new PMPoint(-0.793238, 0.404175, 0));
   allpoints.push(new PMPoint(-1.15785, 0.139269, 0));
   allpoints.push(new PMPoint(-1.01858, -0.289357, 0));
   allpoints.push(new PMPoint(-0.474193, -0.730193, 0));
   allpoints.push(new PMPoint(-0.768786, -1.05814, 0));
   allpoints.push(new PMPoint(-0.629517, -1.48677, 0));
   allpoints.push(new PMPoint(-0.178833, -1.48677, 0));
   allpoints.push(new PMPoint(-0.450685, 1.23129, 0));
   allpoints.push(new PMPoint(-0.840989, 1.00595, 0));
   allpoints.push(new PMPoint(0.408652, 1.55594, 0));
   allpoints.push(new PMPoint(-0.00306863, 1.73925, 0));
   allpoints.push(new PMPoint(2.89589, 0.490248, 0));
   allpoints.push(new PMPoint(2.63099, 0.854859, 0));
   allpoints.push(new PMPoint(2.26638, -0.589954, 0));
   allpoints.push(new PMPoint(2.53128, -0.954565, 0));
   allpoints.push(new PMPoint(2.95991, -1.09383, 0));
   allpoints.push(new PMPoint(3.38853, -0.954565, 0));
   allpoints.push(new PMPoint(3.65344, -0.589954, 0));
   allpoints.push(new PMPoint(3.65344, -0.139269, 0));
   allpoints.push(new PMPoint(3.38853, 0.225342, 0));
   allpoints.push(new PMPoint(2.95991, 0.364611, 0));
   allpoints.push(new PMPoint(1.00495, -1.38319, 0));
   allpoints.push(new PMPoint(1.43357, -1.52246, 0));
   allpoints.push(new PMPoint(2.38567, 1.12731, 0));
   allpoints.push(new PMPoint(2.20236, 1.44481, 0));
   allpoints.push(new PMPoint(1.93745, 1.80942, 0));
   allpoints.push(new PMPoint(1.23792, 1.84609, 0));
   allpoints.push(new PMPoint(-1.01858, -0.740042, 0));
   allpoints.push(new PMPoint(-0.567896, -0.740042, 0));
   allpoints.push(new PMPoint(-1.58648, 0, 0));
   allpoints.push(new PMPoint(-1.44721, -0.428626, 0));
   allpoints.push(new PMPoint(-1.20496, 0.587485, 0));
   allpoints.push(new PMPoint(-1.19741, -1.19741, 0));
   allpoints.push(new PMPoint(-1.05814, -1.62604, 0));
   allpoints.push(new PMPoint(-0.544387, 1.67213, 0));
   allpoints.push(new PMPoint(-0.992603, 1.71924, 0));
   allpoints.push(new PMPoint(-1.17591, 1.30752, 0));
   allpoints.push(new PMPoint(3.32452, 0.629517, 0));
   allpoints.push(new PMPoint(3.32452, 1.0802, 0));
   allpoints.push(new PMPoint(2.89589, 1.21947, 0));
   allpoints.push(new PMPoint(4.01805, 0.125637, 0));
   allpoints.push(new PMPoint(3.75315, 0.490248, 0));
   allpoints.push(new PMPoint(4.08207, -0.729223, 0));
   allpoints.push(new PMPoint(4.34697, -0.364611, 0));
   allpoints.push(new PMPoint(4.08207, 0, 0));
   allpoints.push(new PMPoint(1.67255, 2.17404, 0));
   allpoints.push(new PMPoint(1.30794, 1.90913, 0));
   allpoints.push(new PMPoint(-1.40888, -0.5147, 0));
   allpoints.push(new PMPoint(-1.29712, 0.567896, 0));
   allpoints.push(new PMPoint(-1.72574, 0.428626, 0));
   allpoints.push(new PMPoint(-1.40432, 1.90255, 0));
   allpoints.push(new PMPoint(-1.58763, 1.49083, 0));
   allpoints.push(new PMPoint(3.23082, 1.52104, 0));
   allpoints.push(new PMPoint(4.53028, 0.0471094, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(6, 0, 4, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(6, 4, 5, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(3, 25, 26, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(3, 26, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 7, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(20, 6, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(20, 5, 19, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(0, 22, 4, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(15, 14, 30, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(15, 30, 31, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(15, 31, 32, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(21, 44, 45, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(21, 45, 46, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(21, 46, 22, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(14, 13, 33, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(14, 33, 34, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(41, 40, 68, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(41, 68, 69, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(39, 38, 67, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(41, 69, 89, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(41, 89, 90, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(32, 31, 55, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(32, 55, 56, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(22, 46, 71, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(22, 71, 72, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(57, 58, 59, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 59, 60, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 60, 61, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 61, 62, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 62, 63, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 63, 64, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 64, 31, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 31, 30, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(55, 81, 82, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(55, 82, 83, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(55, 83, 56, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(83, 82, 96, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(94, 95, 80, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(94, 80, 79, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(91, 71, 46, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(63, 62, 84, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(63, 84, 85, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(62, 61, 86, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(62, 86, 87, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(62, 87, 88, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(77, 49, 48, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(77, 48, 76, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(88, 87, 97, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(46, 45, 73, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(46, 73, 74, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(24, 23, 48, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(24, 48, 49, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(24, 49, 50, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(92, 93, 73, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(92, 73, 45, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(36, 35, 65, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(36, 65, 66, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(44, 75, 45, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(4, 22, 47, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(19, 5, 43, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(5, 4, 23, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(5, 23, 24, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(51, 78, 79, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(51, 79, 80, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(51, 80, 52, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(13, 12, 35, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(13, 35, 36, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(25, 51, 52, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(25, 52, 26, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(42, 41, 70, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(16, 15, 38, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(16, 38, 39, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(10, 9, 27, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(9, 53, 54, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(9, 54, 27, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(17, 16, 40, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(17, 40, 41, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(17, 41, 42, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(8, 28, 29, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(8, 29, 9, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 41));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[83].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[91].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
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
