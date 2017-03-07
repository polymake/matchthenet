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

   var axes = [[71,70],
      [53,65],
      [64,63],
      [44,59],
      [42,58],
      [40,57],
      [56,40],
      [54,53],
      [53,52],
      [50,34],
      [49,48],
      [29,46],
      [44,43],
      [42,27],
      [40,39],
      [24,40],
      [37,24],
      [36,23],
      [34,33],
      [35,34],
      [31,20],
      [29,15],
      [28,16],
      [15,27],
      [26,13],
      [24,12],
      [13,24],
      [10,23],
      [9,22],
      [21,9],
      [8,20],
      [18,17],
      [16,15],
      [6,16],
      [15,14],
      [5,13],
      [12,11],
      [13,12],
      [10,5],
      [9,1],
      [2,9],
      [8,2],
      [4,6],
      [6,3],
      [5,0],
      [1,5],
      [2,1],
      [3,2],
      [0,4],
      [4,3],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.77832866619902,
      2.48923451380542,
      3.04445334360209,
      2.77832866619902,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.77832866619902,
      2.76951626538485,
      3.04445334360209,
      2.48923451380542,
      2.76951626538485,
      2.77832866619902,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      3.0444533436021,
      2.48923451380542,
      2.77832866619902,
      2.77832866619902,
      2.48923451380542,
      3.0444533436021,
      3.0444533436021,
      2.76951626538485,
      3.04445334360209,
      2.77832866619902,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.76951626538485,
      2.76951626538485,
      2.48923451380543,
      2.48923451380543,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      3.0444533436021,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      3.0444533436021,
      2.76951626538485,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
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

   var polytoperoot = [[0.616258888531194,-0.368078939405361,-0.753833223508864],
      [3.80422606518061,-1.6180339887499,-1],
      [-0.325300909667541,-1.73038471128111,1.56230307688179]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.553435, 0, 0));
   allpoints.push(new PMPoint(0.724456, 0.526348, 0));
   allpoints.push(new PMPoint(0.276717, 0.851649, 0));
   allpoints.push(new PMPoint(-0.171021, 0.526348, 0));
   allpoints.push(new PMPoint(0.276717, -0.479289, 0));
   allpoints.push(new PMPoint(-0.228871, 1.07675, 0));
   allpoints.push(new PMPoint(-0.541341, 0.115066, 0));
   allpoints.push(new PMPoint(0.782305, 1.07675, 0));
   allpoints.push(new PMPoint(1.09478, 0.115066, 0));
   allpoints.push(new PMPoint(0.830152, -0.479289, 0));
   allpoints.push(new PMPoint(-0.541341, -0.115066, 0));
   allpoints.push(new PMPoint(-0.599191, -0.665469, 0));
   allpoints.push(new PMPoint(-0.0936028, -0.890571, 0));
   allpoints.push(new PMPoint(0.647038, 1.26293, 0));
   allpoints.push(new PMPoint(0.37032, 1.74222, 0));
   allpoints.push(new PMPoint(-0.171021, 1.62715, 0));
   allpoints.push(new PMPoint(-0.770212, 1.19182, 0));
   allpoints.push(new PMPoint(-1.04693, 0.712528, 0));
   allpoints.push(new PMPoint(-0.676609, 0.301246, 0));
   allpoints.push(new PMPoint(1.23004, 0.75145, 0));
   allpoints.push(new PMPoint(1.2658, 0.641414, 0));
   allpoints.push(new PMPoint(0.923755, -0.411282, 0));
   allpoints.push(new PMPoint(0.553435, -0.958577, 0));
   allpoints.push(new PMPoint(-0.541341, -1.21587, 0));
   allpoints.push(new PMPoint(-1.04693, -0.340168, 0));
   allpoints.push(new PMPoint(0.447738, -1.00564, 0));
   allpoints.push(new PMPoint(0.923755, 1.74222, 0));
   allpoints.push(new PMPoint(-0.676609, 1.40205, 0));
   allpoints.push(new PMPoint(0, 2.1535, 0));
   allpoints.push(new PMPoint(-1.32365, 1.19182, 0));
   allpoints.push(new PMPoint(1.28789, 1.30185, 0));
   allpoints.push(new PMPoint(1.63612, 0.230131, 0));
   allpoints.push(new PMPoint(1.37149, -0.736583, 0));
   allpoints.push(new PMPoint(1.81923, -0.411282, 0));
   allpoints.push(new PMPoint(1.64821, 0.115066, 0));
   allpoints.push(new PMPoint(1.10687, -0.958577, 0));
   allpoints.push(new PMPoint(-0.0357531, -1.44097, 0));
   allpoints.push(new PMPoint(-1.14053, -0.550403, 0));
   allpoints.push(new PMPoint(-1.41725, -1.02969, 0));
   allpoints.push(new PMPoint(-1.04693, -1.44097, 0));
   allpoints.push(new PMPoint(0.077418, -1.41692, 0));
   allpoints.push(new PMPoint(0.647038, 2.22151, 0));
   allpoints.push(new PMPoint(-0.228871, 2.17756, 0));
   allpoints.push(new PMPoint(-0.770212, 2.29262, 0));
   allpoints.push(new PMPoint(-1.04693, 1.81333, 0));
   allpoints.push(new PMPoint(0.541341, 2.26857, 0));
   allpoints.push(new PMPoint(1.73563, 0.526348, 0));
   allpoints.push(new PMPoint(2.10595, 0.93763, 0));
   allpoints.push(new PMPoint(1.82923, 1.41692, 0));
   allpoints.push(new PMPoint(2.18955, 0, 0));
   allpoints.push(new PMPoint(1.87708, -0.961686, 0));
   allpoints.push(new PMPoint(0.382414, -1.48493, 0));
   allpoints.push(new PMPoint(0.830152, -1.81023, 0));
   allpoints.push(new PMPoint(1.27789, -1.48493, 0));
   allpoints.push(new PMPoint(-0.483491, -1.76628, 0));
   allpoints.push(new PMPoint(-0.599191, -1.76628, 0));
   allpoints.push(new PMPoint(-1.58827, -1.55604, 0));
   allpoints.push(new PMPoint(1.20047, 2.22151, 0));
   allpoints.push(new PMPoint(-0.399891, 2.70391, 0));
   allpoints.push(new PMPoint(0.171021, 2.67985, 0));
   allpoints.push(new PMPoint(2.38267, 1.41692, 0));
   allpoints.push(new PMPoint(2.09595, -0.890571, 0));
   allpoints.push(new PMPoint(2.63729, -0.775505, 0));
   allpoints.push(new PMPoint(2.69514, -0.225102, 0));
   allpoints.push(new PMPoint(0.324564, -2.03533, 0));
   allpoints.push(new PMPoint(1.33574, -2.03533, 0));
   allpoints.push(new PMPoint(-1.10478, -1.99138, 0));
   allpoints.push(new PMPoint(-1.21795, -1.96732, 0));
   allpoints.push(new PMPoint(1.37149, 2.74786, 0));
   allpoints.push(new PMPoint(0.923755, 3.07316, 0));
   allpoints.push(new PMPoint(0.476017, 2.74786, 0));
   allpoints.push(new PMPoint(-0.941232, 2.81897, 0));
   allpoints.push(new PMPoint(3.14288, -0.550403, 0));
   allpoints.push(new PMPoint(0.382414, -2.58573, 0));
   allpoints.push(new PMPoint(0.923755, -2.7008, 0));
   allpoints.push(new PMPoint(1.20047, -2.22151, 0));
   allpoints.push(new PMPoint(0.418167, 3.29826, 0));

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

   faces.faces.push(new THREE.Face3(10, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 49, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 20, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 62, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 63, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 64, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 58, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 27, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 16, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 24, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 15, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 45, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 52, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 24, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 65, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 74, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(53, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 40, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 70, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 59, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 57, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 57, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 40, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 46, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 63, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 40, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 24, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 71, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 53, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 25, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 13, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 23, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 6, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 13, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 10, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 5, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 2, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 9, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 9, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 22, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 34, 35, undefined, undefined, 0));


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
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
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
