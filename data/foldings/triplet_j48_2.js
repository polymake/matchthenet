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

   var axes = [[70,69],
      [65,53],
      [63,62],
      [59,44],
      [58,42],
      [57,38],
      [38,56],
      [53,52],
      [54,53],
      [34,50],
      [48,47],
      [46,29],
      [45,44],
      [27,42],
      [39,38],
      [38,24],
      [24,37],
      [23,36],
      [35,34],
      [34,33],
      [20,31],
      [15,29],
      [14,28],
      [27,15],
      [11,26],
      [12,24],
      [24,11],
      [23,10],
      [22,9],
      [9,21],
      [20,8],
      [19,18],
      [15,14],
      [14,6],
      [16,15],
      [11,5],
      [13,12],
      [12,11],
      [5,10],
      [0,9],
      [9,4],
      [4,8],
      [6,2],
      [3,6],
      [1,5],
      [5,0],
      [0,4],
      [4,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.48923451380541,
      2.48923451380543,
      2.48923451380543,
      2.77832866619901,
      2.48923451380542,
      3.04445334360208,
      2.77832866619901,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.77832866619902,
      2.76951626538485,
      3.04445334360209,
      2.48923451380543,
      2.76951626538485,
      2.77832866619901,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      3.0444533436021,
      2.48923451380542,
      2.77832866619903,
      2.77832866619903,
      2.48923451380542,
      3.04445334360211,
      3.04445334360209,
      2.76951626538486,
      3.04445334360211,
      2.77832866619902,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      2.76951626538486,
      2.48923451380542,
      2.48923451380543,
      2.77832866619902,
      2.77832866619903,
      2.77832866619903,
      3.0444533436021,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      3.0444533436021,
      2.76951626538484,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542];

   var subtrees = [[77],
      [74,75,76],
      [73],
      [72],
      [69,70,71,77],
      [68],
      [67],
      [66],
      [65,74,75,76],
      [62,63,64,73],
      [61],
      [60],
      [59,72],
      [58,69,70,71,77],
      [57,68],
      [56,67],
      [55],
      [52,53,54,65,66,74,75,76],
      [51],
      [50,62,63,64,73],
      [47,48,49,61],
      [46,60],
      [43,44,45,59,72],
      [42,58,69,70,71,77],
      [41],
      [38,39,40,56,57,67,68],
      [37,55],
      [36,52,53,54,65,66,74,75,76],
      [33,34,35,50,51,62,63,64,73],
      [32],
      [31,47,48,49,61],
      [30],
      [29,46,60],
      [28,43,44,45,59,72],
      [27,42,58,69,70,71,77],
      [26,41],
      [25],
      [24,37,38,39,40,55,56,57,67,68],
      [23,36,52,53,54,65,66,74,75,76],
      [22,33,34,35,50,51,62,63,64,73],
      [21,32],
      [20,31,47,48,49,61],
      [17,18,19,30],
      [14,15,16,27,28,29,42,43,44,45,46,58,59,60,69,70,71,72,77],
      [11,12,13,24,25,26,37,38,39,40,41,55,56,57,67,68],
      [10,23,36,52,53,54,65,66,74,75,76],
      [9,21,22,32,33,34,35,50,51,62,63,64,73],
      [8,20,31,47,48,49,61],
      [7],
      [6,14,15,16,17,18,19,27,28,29,30,42,43,44,45,46,58,59,60,69,70,71,72,77],
      [5,10,11,12,13,23,24,25,26,36,37,38,39,40,41,52,53,54,55,56,57,65,66,67,68,74,75,76]];

   var polytoperoot = [[-0.851648838080879,0.0575205977984486,0.360850594160193],
      [-3.80422606518062,1.61803398874989,1],
      [0.325300909667542,1.73038471128112,-1.56230307688179]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.553435, 0, 0));
   allpoints.push(new PMPoint(0.724456, 0.526348, 0));
   allpoints.push(new PMPoint(0.276717, 0.851649, 0));
   allpoints.push(new PMPoint(-0.171021, 0.526348, 0));
   allpoints.push(new PMPoint(0.276717, -0.479289, 0));
   allpoints.push(new PMPoint(0.782305, 1.07675, 0));
   allpoints.push(new PMPoint(1.09478, 0.115066, 0));
   allpoints.push(new PMPoint(-0.228871, 1.07675, 0));
   allpoints.push(new PMPoint(-0.541341, 0.115066, 0));
   allpoints.push(new PMPoint(-0.276717, -0.479289, 0));
   allpoints.push(new PMPoint(0.647038, -0.890571, 0));
   allpoints.push(new PMPoint(1.15263, -0.665469, 0));
   allpoints.push(new PMPoint(1.09478, -0.115066, 0));
   allpoints.push(new PMPoint(0.724456, 1.62715, 0));
   allpoints.push(new PMPoint(0.183115, 1.74222, 0));
   allpoints.push(new PMPoint(-0.0936028, 1.26293, 0));
   allpoints.push(new PMPoint(1.23004, 0.301246, 0));
   allpoints.push(new PMPoint(1.60036, 0.712528, 0));
   allpoints.push(new PMPoint(1.32365, 1.19182, 0));
   allpoints.push(new PMPoint(-0.676609, 0.75145, 0));
   allpoints.push(new PMPoint(-0.712362, 0.641414, 0));
   allpoints.push(new PMPoint(-0.37032, -0.411282, 0));
   allpoints.push(new PMPoint(0, -0.958577, 0));
   allpoints.push(new PMPoint(1.09478, -1.21587, 0));
   allpoints.push(new PMPoint(1.60036, -0.340168, 0));
   allpoints.push(new PMPoint(0.105697, -1.00564, 0));
   allpoints.push(new PMPoint(-0.37032, 1.74222, 0));
   allpoints.push(new PMPoint(1.23004, 1.40205, 0));
   allpoints.push(new PMPoint(0.553435, 2.1535, 0));
   allpoints.push(new PMPoint(1.87708, 1.19182, 0));
   allpoints.push(new PMPoint(-0.734459, 1.30185, 0));
   allpoints.push(new PMPoint(-1.08268, 0.230131, 0));
   allpoints.push(new PMPoint(-1.09478, 0.115066, 0));
   allpoints.push(new PMPoint(-1.2658, -0.411282, 0));
   allpoints.push(new PMPoint(-0.818059, -0.736583, 0));
   allpoints.push(new PMPoint(-0.553435, -0.958577, 0));
   allpoints.push(new PMPoint(0.589188, -1.44097, 0));
   allpoints.push(new PMPoint(1.60036, -1.44097, 0));
   allpoints.push(new PMPoint(1.97068, -1.02969, 0));
   allpoints.push(new PMPoint(1.69397, -0.550403, 0));
   allpoints.push(new PMPoint(0.476017, -1.41692, 0));
   allpoints.push(new PMPoint(-0.0936028, 2.22151, 0));
   allpoints.push(new PMPoint(1.60036, 1.81333, 0));
   allpoints.push(new PMPoint(1.32365, 2.29262, 0));
   allpoints.push(new PMPoint(0.782305, 2.17756, 0));
   allpoints.push(new PMPoint(0.0120939, 2.26857, 0));
   allpoints.push(new PMPoint(-1.2758, 1.41692, 0));
   allpoints.push(new PMPoint(-1.55252, 0.93763, 0));
   allpoints.push(new PMPoint(-1.1822, 0.526348, 0));
   allpoints.push(new PMPoint(-1.63612, 0, 0));
   allpoints.push(new PMPoint(-1.32365, -0.961686, 0));
   allpoints.push(new PMPoint(-0.724456, -1.48493, 0));
   allpoints.push(new PMPoint(-0.276717, -1.81023, 0));
   allpoints.push(new PMPoint(0.171021, -1.48493, 0));
   allpoints.push(new PMPoint(1.03693, -1.76628, 0));
   allpoints.push(new PMPoint(1.15263, -1.76628, 0));
   allpoints.push(new PMPoint(2.14171, -1.55604, 0));
   allpoints.push(new PMPoint(-0.647038, 2.22151, 0));
   allpoints.push(new PMPoint(0.953326, 2.70391, 0));
   allpoints.push(new PMPoint(0.382414, 2.67985, 0));
   allpoints.push(new PMPoint(-1.82923, 1.41692, 0));
   allpoints.push(new PMPoint(-2.14171, -0.225102, 0));
   allpoints.push(new PMPoint(-2.08386, -0.775505, 0));
   allpoints.push(new PMPoint(-1.54251, -0.890571, 0));
   allpoints.push(new PMPoint(0.228871, -2.03533, 0));
   allpoints.push(new PMPoint(-0.782305, -2.03533, 0));
   allpoints.push(new PMPoint(1.65821, -1.99138, 0));
   allpoints.push(new PMPoint(1.77138, -1.96732, 0));
   allpoints.push(new PMPoint(0.077418, 2.74786, 0));
   allpoints.push(new PMPoint(-0.37032, 3.07316, 0));
   allpoints.push(new PMPoint(-0.818059, 2.74786, 0));
   allpoints.push(new PMPoint(1.49467, 2.81897, 0));
   allpoints.push(new PMPoint(-2.58944, -0.550403, 0));
   allpoints.push(new PMPoint(-0.647038, -2.22151, 0));
   allpoints.push(new PMPoint(-0.37032, -2.7008, 0));
   allpoints.push(new PMPoint(0.171021, -2.58573, 0));
   allpoints.push(new PMPoint(0.135268, 3.29826, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 10, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 31, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 8, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 6, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 50, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 63, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 47, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 42, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 15, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 28, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 11, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 29, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 45, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 53, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 37, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 75, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 76, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 24, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(69, 77, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 44, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 38, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 56, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 29, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 62, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 24, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 71, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 52, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 26, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 23, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 36, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 52, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 5, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 36, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 5, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 8, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 4, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 9, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 9, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 34, 35, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[22].vector);
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
