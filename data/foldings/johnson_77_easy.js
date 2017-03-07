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

   var axes = [[96,68],
      [87,86],
      [84,83],
      [82,81],
      [79,78],
      [74,41],
      [68,67],
      [69,68],
      [66,35],
      [65,64],
      [62,61],
      [29,60],
      [26,56],
      [48,47],
      [49,48],
      [47,46],
      [50,49],
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

   var angles = [2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.12437068569194,
      2.12437068569194,
      2.0344439357957,
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
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
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

   var subtrees = [[107],
      [105,106],
      [104],
      [103],
      [101,102],
      [100],
      [98,99],
      [96,97,107],
      [94,95],
      [93],
      [90,91,92],
      [89],
      [88],
      [85,86,87,105,106],
      [83,84,104],
      [81,82,103],
      [78,79,80,101,102],
      [76,77],
      [74,75,100],
      [71,72,73],
      [70],
      [67,68,69,96,97,98,99,107],
      [66,94,95],
      [64,65,93],
      [63],
      [61,62,90,91,92],
      [59,60,89],
      [57,58],
      [55,56,88],
      [53,54],
      [45,46,47,48,49,50,51,52,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [43,44],
      [40,41,42,74,75,76,77,100],
      [38,39,71,72,73],
      [36,37,70],
      [34,35,66,67,68,69,94,95,96,97,98,99,107],
      [33,64,65,93],
      [31,32],
      [28,29,30,59,60,61,62,63,89,90,91,92],
      [27],
      [24,25,26,55,56,57,58,88],
      [21,22,23,45,46,47,48,49,50,51,52,53,54,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [20,43,44],
      [18,19,40,41,42,74,75,76,77,100],
      [17],
      [14,15,16,33,34,35,36,37,38,39,64,65,66,67,68,69,70,71,72,73,93,94,95,96,97,98,99,107],
      [13],
      [11,12,28,29,30,31,32,59,60,61,62,63,89,90,91,92],
      [9,10,24,25,26,27,55,56,57,58,88],
      [7,8,20,21,22,23,43,44,45,46,47,48,49,50,51,52,53,54,78,79,80,81,82,83,84,85,86,87,101,102,103,104,105,106],
      [5,6,14,15,16,17,18,19,33,34,35,36,37,38,39,40,41,42,64,65,66,67,68,69,70,71,72,73,74,75,76,77,93,94,95,96,97,98,99,100,107]];

   var polytoperoot = [[0.881034593536373,-0.269331334339591,0.224940025699072],
      [1.61803398874989,-1,0],
      [-0.139020581312301,-0.224940025699072,-0.813840658409518]];

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
   allpoints.push(new PMPoint(0.853333, 0.791822, 0));
   allpoints.push(new PMPoint(0.489373, 1.05625, 0));
   allpoints.push(new PMPoint(-0.0394928, 1.05625, 0));
   allpoints.push(new PMPoint(-0.403453, 0.791822, 0));
   allpoints.push(new PMPoint(-0.440049, 0.0935353, 0));
   allpoints.push(new PMPoint(-0.139021, -0.877741, 0));
   allpoints.push(new PMPoint(0.22494, -1.14217, 0));
   allpoints.push(new PMPoint(0.588901, -0.877741, 0));
   allpoints.push(new PMPoint(0.839488, -0.22494, 0));
   allpoints.push(new PMPoint(-0.44988, 0, 0));
   allpoints.push(new PMPoint(-0.44988, -0.44988, 0));
   allpoints.push(new PMPoint(0.923227, 0.72889, 0));
   allpoints.push(new PMPoint(1.2417, -0.403453, 0));
   allpoints.push(new PMPoint(1.60566, -0.139021, 0));
   allpoints.push(new PMPoint(1.46664, 0.288841, 0));
   allpoints.push(new PMPoint(1.21729, 1.05625, 0));
   allpoints.push(new PMPoint(1.07827, 1.48412, 0));
   allpoints.push(new PMPoint(0.628393, 1.48412, 0));
   allpoints.push(new PMPoint(0.0419573, 1.10328, 0));
   allpoints.push(new PMPoint(-0.178513, 1.48412, 0));
   allpoints.push(new PMPoint(-0.628393, 1.48412, 0));
   allpoints.push(new PMPoint(-0.767414, 1.05625, 0));
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
   allpoints.push(new PMPoint(1.45681, 0.382376, 0));
   allpoints.push(new PMPoint(1.36328, 0.822425, 0));
   allpoints.push(new PMPoint(1.96962, -0.403453, 0));
   allpoints.push(new PMPoint(2.4195, -0.403453, 0));
   allpoints.push(new PMPoint(2.78346, -0.139021, 0));
   allpoints.push(new PMPoint(2.92248, 0.288841, 0));
   allpoints.push(new PMPoint(2.78346, 0.716702, 0));
   allpoints.push(new PMPoint(2.4195, 0.981135, 0));
   allpoints.push(new PMPoint(1.96962, 0.981135, 0));
   allpoints.push(new PMPoint(1.60566, 0.716702, 0));
   allpoints.push(new PMPoint(1.50613, -0.767414, 0));
   allpoints.push(new PMPoint(1.8701, -0.502981, 0));
   allpoints.push(new PMPoint(1.07827, 1.934, 0));
   allpoints.push(new PMPoint(0.628393, 1.934, 0));
   allpoints.push(new PMPoint(0.200532, 1.62314, 0));
   allpoints.push(new PMPoint(0.0615115, 1.19528, 0));
   allpoints.push(new PMPoint(-0.178513, 1.934, 0));
   allpoints.push(new PMPoint(-0.628393, 1.934, 0));
   allpoints.push(new PMPoint(-1.05625, 1.62314, 0));
   allpoints.push(new PMPoint(-1.19528, 1.19528, 0));
   allpoints.push(new PMPoint(-0.814439, 0.608839, 0));
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
   allpoints.push(new PMPoint(3.14742, 0.981135, 0));
   allpoints.push(new PMPoint(3.0084, 1.409, 0));
   allpoints.push(new PMPoint(2.55852, 1.409, 0));
   allpoints.push(new PMPoint(2.68394, -0.767414, 0));
   allpoints.push(new PMPoint(3.0479, -0.502981, 0));
   allpoints.push(new PMPoint(3.35035, 0.427861, 0));
   allpoints.push(new PMPoint(3.21133, 0.855723, 0));
   allpoints.push(new PMPoint(3.14742, -0.403453, 0));
   allpoints.push(new PMPoint(3.51139, -0.139021, 0));
   allpoints.push(new PMPoint(3.37236, 0.288841, 0));
   allpoints.push(new PMPoint(0.238786, 1.70906, 0));
   allpoints.push(new PMPoint(-1.018, 1.70906, 0));
   allpoints.push(new PMPoint(-1.42022, 1.88757, 0));
   allpoints.push(new PMPoint(-1.78418, 1.62314, 0));
   allpoints.push(new PMPoint(-1.64516, 1.19528, 0));
   allpoints.push(new PMPoint(-0.913396, -1.27231, 0));
   allpoints.push(new PMPoint(-0.0865181, -1.95355, 0));
   allpoints.push(new PMPoint(0.360897, -2.00058, 0));
   allpoints.push(new PMPoint(-0.628393, -2.38388, 0));
   allpoints.push(new PMPoint(-0.178513, -2.38388, 0));
   allpoints.push(new PMPoint(-1.19528, -1.64516, 0));
   allpoints.push(new PMPoint(-1.05625, -2.07302, 0));
   allpoints.push(new PMPoint(-1.55316, -0.0419573, 0));
   allpoints.push(new PMPoint(3.57529, 1.12016, 0));
   allpoints.push(new PMPoint(3.43627, 1.54802, 0));
   allpoints.push(new PMPoint(3.09492, -0.950397, 0));
   allpoints.push(new PMPoint(3.65137, 0.762187, 0));
   allpoints.push(new PMPoint(3.93925, 0, 0));
   allpoints.push(new PMPoint(3.80023, 0.427861, 0));
   allpoints.push(new PMPoint(-1.018, -2.15894, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(33, 64, 65, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(33, 65, 14, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(5, 33, 14, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(6, 5, 14, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(6, 14, 15, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(6, 15, 16, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(17, 1, 6, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(42, 41, 74, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(42, 74, 75, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(64, 93, 65, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(15, 14, 34, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(15, 34, 35, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(37, 6, 16, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(37, 16, 36, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(2, 8, 20, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(62, 61, 90, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(62, 90, 91, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(62, 91, 92, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(10, 9, 24, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(10, 24, 25, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(10, 25, 26, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(29, 28, 59, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(29, 59, 60, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(29, 60, 89, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(26, 56, 88, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(79, 78, 101, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(79, 101, 102, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(26, 25, 55, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(26, 55, 56, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(87, 86, 105, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(87, 105, 106, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(50, 49, 78, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(50, 78, 79, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(50, 79, 80, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(84, 83, 104, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(47, 46, 81, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(47, 81, 82, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(49, 48, 83, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(49, 83, 84, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(48, 47, 85, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(48, 85, 86, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(48, 86, 87, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(82, 81, 103, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(23, 22, 45, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 45, 46, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 46, 47, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 47, 48, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 48, 49, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 49, 50, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 50, 51, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(23, 51, 52, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(73, 39, 38, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(73, 38, 71, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(73, 71, 72, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(96, 68, 107, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(96, 97, 69, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(96, 69, 68, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(22, 21, 53, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(22, 53, 54, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(95, 66, 35, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(95, 35, 94, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(8, 43, 44, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(8, 44, 20, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(36, 16, 70, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(15, 35, 66, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(16, 15, 38, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(16, 38, 39, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(98, 99, 68, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(98, 68, 67, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(8, 7, 21, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(8, 22, 23, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(35, 34, 67, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(35, 67, 68, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(35, 68, 69, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(10, 26, 57, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(10, 57, 58, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(30, 29, 61, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(30, 61, 62, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(100, 74, 41, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(3, 10, 27, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(12, 11, 28, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(12, 28, 29, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(12, 29, 30, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(12, 30, 63, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(76, 77, 41, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(76, 41, 40, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(0, 4, 13, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(4, 12, 31, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(4, 31, 32, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(18, 40, 41, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(18, 42, 19, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(0, 19, 5, undefined, undefined, 51));


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
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
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
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
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
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[62].vector);
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
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
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
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[66].vector);
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
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[98].vector);
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
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[100].vector);
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
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[76].vector);
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
