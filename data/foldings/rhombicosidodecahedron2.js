// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

// COMMON_CODE_BLOCK_BEGIN
	 var container = document.getElementById( 'folding' + divNumber );
	 var renderer = foldingRenderers[divNumber];
   renderer.setSize(rendererWidth, rendererHeight);
   renderer.setClearColor(backgroundColor, 1);
   container.insertBefore(renderer.domElement, container.childNodes[0]);

   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(40, rendererWidth/rendererHeight, 0.1, 1000);
   camera.position.set(0, 0, 25);
   camera.lookAt(0, 0, 0);
   camera.up.set(0, 1, 0);

   var controls = new THREE.TrackballControls(camera, container);
	 foldingControls[divNumber] = controls;
foldingCameras[divNumber] = camera;

   controls.noPan = controlsNoPan;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];


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
// COMMON_CODE_BLOCK_END


   var axes = [[81,105],
      [100,76],
      [71,97],
      [93,92],
      [92,67],
      [90,68],
      [87,86],
      [82,81],
      [81,80],
      [76,47],
      [77,76],
      [72,71],
      [71,70],
      [67,66],
      [68,67],
      [38,68],
      [33,62],
      [60,59],
      [29,58],
      [55,30],
      [51,26],
      [50,49],
      [47,23],
      [48,47],
      [46,45],
      [44,43],
      [17,40],
      [40,39],
      [16,38],
      [38,37],
      [15,36],
      [34,33],
      [33,32],
      [30,29],
      [29,28],
      [12,30],
      [26,25],
      [27,26],
      [23,22],
      [24,23],
      [21,8],
      [7,20],
      [6,17],
      [17,16],
      [16,15],
      [15,5],
      [14,13],
      [2,12],
      [12,11],
      [10,9],
      [8,7],
      [4,8],
      [7,3],
      [1,6],
      [5,0],
      [6,5],
      [3,2],
      [2,1],
      [0,4],
      [4,3],
      [1,0]];

	 foldingAxes[divNumber] = axes;


   foldingAngles[divNumber] = [2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
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
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
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
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275];

   foldingSubtrees[divNumber] = [[117],
      [116],
      [115],
      [112,113,114],
      [111],
      [110],
      [108,109],
      [106,107],
      [104,105,117],
      [102,103],
      [100,101,116],
      [98,99],
      [96,97,115],
      [94,95],
      [92,93,111,112,113,114],
      [90,91,110],
      [89],
      [86,87,88,108,109],
      [85],
      [84],
      [83],
      [80,81,82,104,105,106,107,117],
      [79],
      [76,77,78,100,101,102,103,116],
      [75],
      [74],
      [73],
      [70,71,72,96,97,98,99,115],
      [69],
      [66,67,68,90,91,92,93,94,95,110,111,112,113,114],
      [65],
      [63,64],
      [61,62,89],
      [59,60,86,87,88,108,109],
      [57,58,85],
      [55,56,84],
      [53,54],
      [51,52,83],
      [49,50,80,81,82,104,105,106,107,117],
      [47,48,76,77,78,79,100,101,102,103,116],
      [45,46,75],
      [43,44,74],
      [41,42],
      [39,40,70,71,72,73,96,97,98,99,115],
      [37,38,66,67,68,69,90,91,92,93,94,95,110,111,112,113,114],
      [35,36,65],
      [32,33,34,61,62,63,64,89],
      [31],
      [28,29,30,55,56,57,58,59,60,84,85,86,87,88,108,109],
      [25,26,27,51,52,53,54,83],
      [22,23,24,47,48,49,50,76,77,78,79,80,81,82,100,101,102,103,104,105,106,107,116,117],
      [21,45,46,75],
      [20,43,44,74],
      [19],
      [18],
      [15,16,17,35,36,37,38,39,40,41,42,65,66,67,68,69,70,71,72,73,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115],
      [13,14,32,33,34,61,62,63,64,89],
      [11,12,28,29,30,31,55,56,57,58,59,60,84,85,86,87,88,108,109],
      [9,10,25,26,27,51,52,53,54,83],
      [7,8,20,21,22,23,24,43,44,45,46,47,48,49,50,74,75,76,77,78,79,80,81,82,100,101,102,103,104,105,106,107,116,117],
      [5,6,15,16,17,18,19,35,36,37,38,39,40,41,42,65,66,67,68,69,70,71,72,73,90,91,92,93,94,95,96,97,98,99,110,111,112,113,114,115]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1, 0, 0));
   allpoints.push(new PMPoint(1.30902, 0.951057, 0));
   allpoints.push(new PMPoint(0.5, 1.53884, 0));
   allpoints.push(new PMPoint(-0.309017, 0.951057, 0));
   allpoints.push(new PMPoint(0, -1, 0));
   allpoints.push(new PMPoint(1, -1, 0));
   allpoints.push(new PMPoint(-0.0877853, 2.34786, 0));
   allpoints.push(new PMPoint(-0.896802, 1.76007, 0));
   allpoints.push(new PMPoint(-1.26007, 0.64204, 0));
   allpoints.push(new PMPoint(-0.951057, -0.309017, 0));
   allpoints.push(new PMPoint(1.95106, -0.309017, 0));
   allpoints.push(new PMPoint(2.26007, 0.64204, 0));
   allpoints.push(new PMPoint(1.8968, 1.76007, 0));
   allpoints.push(new PMPoint(1.08779, 2.34786, 0));
   allpoints.push(new PMPoint(-0.309017, -1.95106, 0));
   allpoints.push(new PMPoint(0.5, -2.53884, 0));
   allpoints.push(new PMPoint(1.30902, -1.95106, 0));
   allpoints.push(new PMPoint(-0.866025, -0.5, 0));
   allpoints.push(new PMPoint(1.86603, -0.5, 0));
   allpoints.push(new PMPoint(0.906737, 2.45239, 0));
   allpoints.push(new PMPoint(-1.30354, 0.846528, 0));
   allpoints.push(new PMPoint(-0.396802, 3.29892, 0));
   allpoints.push(new PMPoint(-1.3968, 3.29892, 0));
   allpoints.push(new PMPoint(-1.70582, 2.34786, 0));
   allpoints.push(new PMPoint(-2.26007, 0.64204, 0));
   allpoints.push(new PMPoint(-2.56909, -0.309017, 0));
   allpoints.push(new PMPoint(-1.76007, -0.896802, 0));
   allpoints.push(new PMPoint(2.76007, -0.896802, 0));
   allpoints.push(new PMPoint(3.56909, -0.309017, 0));
   allpoints.push(new PMPoint(3.26007, 0.64204, 0));
   allpoints.push(new PMPoint(2.05216, 1.62019, 0));
   allpoints.push(new PMPoint(2.70582, 2.34786, 0));
   allpoints.push(new PMPoint(2.3968, 3.29892, 0));
   allpoints.push(new PMPoint(1.3968, 3.29892, 0));
   allpoints.push(new PMPoint(-0.951057, -0.690983, 0));
   allpoints.push(new PMPoint(-1.26007, -1.64204, 0));
   allpoints.push(new PMPoint(-0.896802, -2.76007, 0));
   allpoints.push(new PMPoint(-0.0877853, -3.34786, 0));
   allpoints.push(new PMPoint(1.08779, -3.34786, 0));
   allpoints.push(new PMPoint(1.8968, -2.76007, 0));
   allpoints.push(new PMPoint(2.26007, -1.64204, 0));
   allpoints.push(new PMPoint(1.95106, -0.690983, 0));
   allpoints.push(new PMPoint(0.802208, 3.44691, 0));
   allpoints.push(new PMPoint(-0.192314, 3.34238, 0));
   allpoints.push(new PMPoint(-1.81035, 2.16681, 0));
   allpoints.push(new PMPoint(-2.21708, 1.25326, 0));
   allpoints.push(new PMPoint(-2.34786, 3.60793, 0));
   allpoints.push(new PMPoint(-2.65688, 2.65688, 0));
   allpoints.push(new PMPoint(-0.396802, 4.29892, 0));
   allpoints.push(new PMPoint(-1.3968, 4.29892, 0));
   allpoints.push(new PMPoint(-3.15688, -1.11803, 0));
   allpoints.push(new PMPoint(-2.34786, -1.70582, 0));
   allpoints.push(new PMPoint(-3.21113, 0.951057, 0));
   allpoints.push(new PMPoint(-3.52015, 0, 0));
   allpoints.push(new PMPoint(3.26007, 1.64204, 0));
   allpoints.push(new PMPoint(2.26007, 1.64204, 0));
   allpoints.push(new PMPoint(3.34786, -1.70582, 0));
   allpoints.push(new PMPoint(4.15688, -1.11803, 0));
   allpoints.push(new PMPoint(4.52015, 0, 0));
   allpoints.push(new PMPoint(4.21113, 0.951057, 0));
   allpoints.push(new PMPoint(3.65688, 2.65688, 0));
   allpoints.push(new PMPoint(3.34786, 3.60793, 0));
   allpoints.push(new PMPoint(2.3968, 4.29892, 0));
   allpoints.push(new PMPoint(1.3968, 4.29892, 0));
   allpoints.push(new PMPoint(-1.05216, -2.62019, 0));
   allpoints.push(new PMPoint(-1.70582, -3.34786, 0));
   allpoints.push(new PMPoint(-1.3968, -4.29892, 0));
   allpoints.push(new PMPoint(-0.396802, -4.29892, 0));
   allpoints.push(new PMPoint(0.906737, -3.45239, 0));
   allpoints.push(new PMPoint(1.3968, -4.29892, 0));
   allpoints.push(new PMPoint(2.3968, -4.29892, 0));
   allpoints.push(new PMPoint(2.70582, -3.34786, 0));
   allpoints.push(new PMPoint(2.30354, -1.84653, 0));
   allpoints.push(new PMPoint(0.214423, 4.25593, 0));
   allpoints.push(new PMPoint(-2.80487, 2.06228, 0));
   allpoints.push(new PMPoint(-3.15688, 4.19572, 0));
   allpoints.push(new PMPoint(-3.96589, 3.60793, 0));
   allpoints.push(new PMPoint(-3.65688, 2.65688, 0));
   allpoints.push(new PMPoint(-1.60471, 4.27706, 0));
   allpoints.push(new PMPoint(-0.0877853, 5.24997, 0));
   allpoints.push(new PMPoint(-0.896802, 5.83776, 0));
   allpoints.push(new PMPoint(-1.70582, 5.24997, 0));
   allpoints.push(new PMPoint(-3.56361, -0.204489, 0));
   allpoints.push(new PMPoint(4.1261, 1.14204, 0));
   allpoints.push(new PMPoint(4.56361, -0.204489, 0));
   allpoints.push(new PMPoint(5.52015, 0, 0));
   allpoints.push(new PMPoint(5.82916, 0.951057, 0));
   allpoints.push(new PMPoint(5.02015, 1.53884, 0));
   allpoints.push(new PMPoint(2.60471, 4.27706, 0));
   allpoints.push(new PMPoint(0.554254, -4.60793, 0));
   allpoints.push(new PMPoint(0.863271, -3.65688, 0));
   allpoints.push(new PMPoint(-1.3968, -5.29892, 0));
   allpoints.push(new PMPoint(-0.396802, -5.29892, 0));
   allpoints.push(new PMPoint(-2.65688, -3.65688, 0));
   allpoints.push(new PMPoint(-2.34786, -4.60793, 0));
   allpoints.push(new PMPoint(1.3968, -5.29892, 0));
   allpoints.push(new PMPoint(2.3968, -5.29892, 0));
   allpoints.push(new PMPoint(3.34786, -4.60793, 0));
   allpoints.push(new PMPoint(3.65688, -3.65688, 0));
   allpoints.push(new PMPoint(-3.74466, 5.00473, 0));
   allpoints.push(new PMPoint(-4.55368, 4.41695, 0));
   allpoints.push(new PMPoint(-1.76007, 4.41695, 0));
   allpoints.push(new PMPoint(-2.56909, 5.00473, 0));
   allpoints.push(new PMPoint(0.5, 6.05899, 0));
   allpoints.push(new PMPoint(-0.309017, 6.64677, 0));
   allpoints.push(new PMPoint(-1.48459, 6.64677, 0));
   allpoints.push(new PMPoint(-2.2936, 6.05899, 0));
   allpoints.push(new PMPoint(6.4712, -0.309017, 0));
   allpoints.push(new PMPoint(6.78022, 0.64204, 0));
   allpoints.push(new PMPoint(-0.188891, -5.27706, 0));
   allpoints.push(new PMPoint(-2.26283, -4.79892, 0));
   allpoints.push(new PMPoint(-1.70582, -6.24997, 0));
   allpoints.push(new PMPoint(-0.896802, -6.83776, 0));
   allpoints.push(new PMPoint(-0.0877853, -6.24997, 0));
   allpoints.push(new PMPoint(3.26283, -4.79892, 0));
   allpoints.push(new PMPoint(-2.75014, 5.10926, 0));
   allpoints.push(new PMPoint(-1.30354, 6.7513, 0));

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

	foldingAllpoints[divNumber] = allpoints;

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
   ];
   var faces_material = new THREE.MeshFaceMaterial ( materials );
   faces_material.side = THREE.DoubleSide;


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(6, 5, 15, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(6, 15, 16, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(6, 16, 17, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(35, 36, 15, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(35, 15, 5, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(10, 9, 25, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(10, 25, 26, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(10, 26, 27, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(16, 15, 37, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(16, 37, 38, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(0, 18, 5, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(4, 3, 7, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 7, 8, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(27, 26, 51, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(27, 51, 52, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(0, 4, 9, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(12, 11, 28, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(12, 28, 29, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(12, 29, 30, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(36, 65, 15, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(37, 66, 67, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(37, 67, 68, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(37, 68, 38, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(90, 91, 38, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(90, 38, 68, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(19, 1, 6, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(17, 16, 39, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(17, 39, 40, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(111, 92, 67, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(48, 47, 76, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(48, 76, 77, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(48, 77, 78, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(42, 6, 17, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(42, 17, 41, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(8, 45, 46, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(8, 46, 21, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(3, 20, 7, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(12, 30, 55, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(12, 55, 56, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(16, 38, 69, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(104, 105, 81, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(104, 81, 80, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(26, 25, 53, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(26, 53, 54, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(72, 40, 39, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(72, 39, 70, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(72, 70, 71, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(4, 8, 21, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(73, 17, 40, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(14, 13, 32, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(14, 33, 34, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(26, 83, 51, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(29, 28, 57, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(29, 57, 58, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(30, 29, 59, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(30, 59, 60, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(68, 67, 92, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(68, 92, 93, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(94, 95, 67, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(94, 67, 66, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(8, 7, 22, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(8, 22, 23, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(8, 23, 24, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(3, 2, 13, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(45, 75, 46, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(24, 23, 47, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(24, 47, 48, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(77, 76, 100, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(77, 100, 101, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(71, 70, 96, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(71, 96, 97, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(2, 12, 31, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(43, 74, 44, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(20, 43, 44, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(20, 44, 7, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(30, 84, 55, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(90, 68, 110, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(33, 32, 61, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(33, 61, 62, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(60, 59, 86, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(60, 86, 87, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(60, 87, 88, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(114, 93, 92, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(114, 92, 112, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(114, 112, 113, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(72, 71, 98, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(72, 98, 99, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(29, 58, 85, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(102, 103, 76, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(102, 76, 47, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(71, 97, 115, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(87, 86, 108, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(87, 108, 109, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(34, 33, 63, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(34, 63, 64, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(23, 22, 49, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(23, 49, 50, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(23, 79, 47, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(82, 81, 106, undefined, undefined, 57));
   faces.faces.push(new THREE.Face3(82, 106, 107, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(105, 117, 81, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(116, 100, 76, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(49, 80, 81, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(49, 81, 82, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(49, 82, 50, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(33, 62, 89, undefined, undefined, 61));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: 1, } );
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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
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
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[111].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[104].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[105].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[116].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);


	var render = function () {

		foldingRenderIds[divNumber]= requestAnimationFrame(render);

//		comment in for automatic explosion
//		explode(updateFactor());

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

	foldingObjects[divNumber] = obj;

});

appendFoldingScript();
