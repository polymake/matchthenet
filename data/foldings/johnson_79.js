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

   var axes = [[70,99],
      [84,55],
      [78,48],
      [74,45],
      [73,72],
      [71,70],
      [70,69],
      [68,67],
      [65,64],
      [66,65],
      [62,61],
      [60,59],
      [57,56],
      [55,54],
      [27,55],
      [48,47],
      [47,19],
      [49,48],
      [45,44],
      [46,45],
      [38,37],
      [39,38],
      [40,39],
      [41,40],
      [33,32],
      [13,31],
      [11,28],
      [28,27],
      [27,26],
      [25,24],
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
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.68680207558007,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.58801829469275,
      2.77672882547631,
      2.68680207558007,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
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

   var subtrees = [[107],
      [105,106],
      [104],
      [103],
      [102],
      [100,101],
      [98,99,107],
      [97],
      [95,96],
      [94],
      [92,93],
      [91],
      [88,89,90],
      [85,86,87],
      [84,105,106],
      [82,83],
      [80,81],
      [78,79,104],
      [76,77],
      [74,75,103],
      [72,73,102],
      [69,70,71,98,99,100,101,107],
      [67,68,97],
      [64,65,66,94,95,96],
      [61,62,63,92,93],
      [59,60,91],
      [58],
      [56,57,88,89,90],
      [54,55,84,85,86,87,105,106],
      [53],
      [51,52],
      [50],
      [47,48,49,78,79,80,81,82,83,104],
      [44,45,46,74,75,76,77,103],
      [36,37,38,39,40,41,42,43,64,65,66,67,68,69,70,71,72,73,94,95,96,97,98,99,100,101,102,107],
      [34,35],
      [32,33,61,62,63,92,93],
      [31,59,60,91],
      [29,30],
      [26,27,28,54,55,56,57,58,84,85,86,87,88,89,90,105,106],
      [24,25,53],
      [21,22,23,51,52],
      [19,20,47,48,49,50,78,79,80,81,82,83,104],
      [17,18,44,45,46,74,75,76,77,103],
      [16],
      [13,14,15,31,32,33,34,35,36,37,38,39,40,41,42,43,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,91,92,93,94,95,96,97,98,99,100,101,102,107],
      [12],
      [10,11,26,27,28,29,30,54,55,56,57,58,84,85,86,87,88,89,90,105,106],
      [9,24,25,53],
      [7,8,19,20,21,22,23,47,48,49,50,51,52,78,79,80,81,82,83,104],
      [5,6,13,14,15,16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,91,92,93,94,95,96,97,98,99,100,101,102,103,107]];

   var polytoperoot = [[0.908469931550558,-0.224940025815262,0.29676667203781],
      [1.6180339887499,-1,0],
      [-0.139020581384111,-0.224940025815262,-0.813840658829897]];

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
   allpoints.push(new PMPoint(0.635926, 0.875277, 0));
   allpoints.push(new PMPoint(-0.0394928, 1.05625, 0));
   allpoints.push(new PMPoint(-0.403453, 0.791822, 0));
   allpoints.push(new PMPoint(-0.440049, 0.0935353, 0));
   allpoints.push(new PMPoint(-0.139021, -0.877741, 0));
   allpoints.push(new PMPoint(0.22494, -1.14217, 0));
   allpoints.push(new PMPoint(0.588901, -0.877741, 0));
   allpoints.push(new PMPoint(0.839488, -0.22494, 0));
   allpoints.push(new PMPoint(-0.44988, 0, 0));
   allpoints.push(new PMPoint(-0.44988, -0.44988, 0));
   allpoints.push(new PMPoint(1.15578, 0.716702, 0));
   allpoints.push(new PMPoint(0.727921, 0.855723, 0));
   allpoints.push(new PMPoint(1.2417, -0.403453, 0));
   allpoints.push(new PMPoint(1.60566, -0.139021, 0));
   allpoints.push(new PMPoint(1.46664, 0.288841, 0));
   allpoints.push(new PMPoint(0.452943, 1.28626, 0));
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
   allpoints.push(new PMPoint(0.0859194, -1.57004, 0));
   allpoints.push(new PMPoint(0.22494, -1.9979, 0));
   allpoints.push(new PMPoint(0.588901, -2.26233, 0));
   allpoints.push(new PMPoint(1.03878, -2.26233, 0));
   allpoints.push(new PMPoint(1.40274, -1.9979, 0));
   allpoints.push(new PMPoint(1.54176, -1.57004, 0));
   allpoints.push(new PMPoint(1.40274, -1.14217, 0));
   allpoints.push(new PMPoint(1.03878, -0.877741, 0));
   allpoints.push(new PMPoint(-0.877741, 0.139021, 0));
   allpoints.push(new PMPoint(-1.14217, -0.22494, 0));
   allpoints.push(new PMPoint(-0.877741, -0.588901, 0));
   allpoints.push(new PMPoint(1.42022, 1.08066, 0));
   allpoints.push(new PMPoint(1.15578, 1.44462, 0));
   allpoints.push(new PMPoint(0.727921, 1.3056, 0));
   allpoints.push(new PMPoint(1.45681, 0.382376, 0));
   allpoints.push(new PMPoint(2.03352, 0, 0));
   allpoints.push(new PMPoint(1.8945, 0.427861, 0));
   allpoints.push(new PMPoint(0.0889826, 1.5507, 0));
   allpoints.push(new PMPoint(-0.178513, 1.934, 0));
   allpoints.push(new PMPoint(-0.628393, 1.934, 0));
   allpoints.push(new PMPoint(-1.05625, 1.62314, 0));
   allpoints.push(new PMPoint(-1.19528, 1.19528, 0));
   allpoints.push(new PMPoint(-0.814439, 0.608839, 0));
   allpoints.push(new PMPoint(-0.774375, -0.844444, 0));
   allpoints.push(new PMPoint(-0.473347, -1.17877, 0));
   allpoints.push(new PMPoint(-0.767414, -1.50613, 0));
   allpoints.push(new PMPoint(-0.628393, -1.934, 0));
   allpoints.push(new PMPoint(-0.178513, -1.934, 0));
   allpoints.push(new PMPoint(1.7667, -2.26233, 0));
   allpoints.push(new PMPoint(2.13066, -1.9979, 0));
   allpoints.push(new PMPoint(1.99164, -1.57004, 0));
   allpoints.push(new PMPoint(1.30321, -2.62629, 0));
   allpoints.push(new PMPoint(1.66717, -2.36186, 0));
   allpoints.push(new PMPoint(0.44988, -2.69019, 0));
   allpoints.push(new PMPoint(0.813841, -2.95462, 0));
   allpoints.push(new PMPoint(1.1778, -2.69019, 0));
   allpoints.push(new PMPoint(-0.0394928, -2.36186, 0));
   allpoints.push(new PMPoint(0.324468, -2.62629, 0));
   allpoints.push(new PMPoint(-1.50613, -0.489373, 0));
   allpoints.push(new PMPoint(-1.2417, -0.853333, 0));
   allpoints.push(new PMPoint(-1.2417, 0.403453, 0));
   allpoints.push(new PMPoint(-1.50613, 0.0394928, 0));
   allpoints.push(new PMPoint(1.01676, 1.87248, 0));
   allpoints.push(new PMPoint(0.588901, 1.73346, 0));
   allpoints.push(new PMPoint(1.51974, 0.452269, 0));
   allpoints.push(new PMPoint(1.78418, 0.81623, 0));
   allpoints.push(new PMPoint(1.78418, 1.3451, 0));
   allpoints.push(new PMPoint(1.51974, 1.70906, 0));
   allpoints.push(new PMPoint(-1.018, 1.70906, 0));
   allpoints.push(new PMPoint(-0.0394928, 2.36186, 0));
   allpoints.push(new PMPoint(-0.403453, 2.62629, 0));
   allpoints.push(new PMPoint(-0.767414, 2.36186, 0));
   allpoints.push(new PMPoint(-1.42022, 1.88757, 0));
   allpoints.push(new PMPoint(-1.78418, 1.62314, 0));
   allpoints.push(new PMPoint(-1.64516, 1.19528, 0));
   allpoints.push(new PMPoint(-0.913396, -1.27231, 0));
   allpoints.push(new PMPoint(-1.19528, -1.64516, 0));
   allpoints.push(new PMPoint(-1.05625, -2.07302, 0));
   allpoints.push(new PMPoint(2.43169, -1.66357, 0));
   allpoints.push(new PMPoint(2.03113, -2.62629, 0));
   allpoints.push(new PMPoint(2.3951, -2.36186, 0));
   allpoints.push(new PMPoint(1.7142, -2.80927, 0));
   allpoints.push(new PMPoint(0.185447, -3.05415, 0));
   allpoints.push(new PMPoint(0.549408, -3.31858, 0));
   allpoints.push(new PMPoint(1.07827, -3.31858, 0));
   allpoints.push(new PMPoint(1.44223, -3.05415, 0));
   allpoints.push(new PMPoint(-0.0865181, -2.80927, 0));
   allpoints.push(new PMPoint(-1.55316, -0.0419573, 0));
   allpoints.push(new PMPoint(1.45681, 1.77895, 0));
   allpoints.push(new PMPoint(-0.853333, 2.3236, 0));
   allpoints.push(new PMPoint(-1.24294, 2.09866, 0));
   allpoints.push(new PMPoint(0.996823, -3.36561, 0));

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

   faces.faces.push(new THREE.Face3(31, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 60, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 31, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 74, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(91, 60, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 14, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 13, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 6, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 15, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 8, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 56, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 88, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 89, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 55, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 78, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 50, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 105, 106, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 106, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(80, 81, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(80, 47, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 69, 98, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 98, 99, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 104, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 99, 107, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 65, 94, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 70, 100, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 100, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 40, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 67, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 39, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 67, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 64, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(65, 95, 96, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 70, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 47, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 54, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 86, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(73, 72, 102, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 37, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 43, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 14, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 61, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 92, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 33, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 32, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 61, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 27, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 56, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(103, 74, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 9, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 28, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(76, 77, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(76, 45, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 11, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 46, 18, undefined, undefined, 0));

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
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
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
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[91].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
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
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[48].vector);
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
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[62].vector);
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
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[103].vector);
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
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[76].vector);
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
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
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
