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

   var axes = [[77,50],
      [72,71],
      [36,66],
      [65,50],
      [64,63],
      [61,47],
      [58,57],
      [56,42],
      [53,52],
      [36,51],
      [34,50],
      [49,48],
      [32,47],
      [44,43],
      [42,27],
      [2,42],
      [41,40],
      [39,38],
      [36,21],
      [34,33],
      [16,32],
      [32,2],
      [31,30],
      [29,28],
      [2,27],
      [26,25],
      [13,26],
      [23,11],
      [22,21],
      [20,19],
      [18,17],
      [16,2],
      [15,14],
      [14,6],
      [2,13],
      [13,5],
      [12,11],
      [10,9],
      [3,10],
      [8,7],
      [6,2],
      [0,6],
      [2,5],
      [4,3],
      [3,0],
      [1,4],
      [0,2],
      [2,1],
      [1,0]];

   var angles = [2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658,
      2.68992523420658];

   var subtrees = [[81],
      [79,80],
      [78],
      [77,81],
      [75,76],
      [73,74],
      [71,72,79,80],
      [69,70],
      [67,68],
      [66,78],
      [65,77,81],
      [63,64,75,76],
      [61,62,73,74],
      [59,60],
      [57,58,71,72,79,80],
      [56,69,70],
      [54,55],
      [52,53,67,68],
      [51,66,78],
      [50,65,77,81],
      [48,49,63,64,75,76],
      [47,61,62,73,74],
      [45,46],
      [43,44,59,60],
      [42,56,57,58,69,70,71,72,79,80],
      [40,41,54,55],
      [38,39,52,53,67,68],
      [37],
      [36,51,66,78],
      [35],
      [33,34,50,65,77,81],
      [32,47,48,49,61,62,63,64,73,74,75,76],
      [30,31,45,46],
      [28,29,43,44,59,60],
      [27,42,56,57,58,69,70,71,72,79,80],
      [25,26,38,39,40,41,52,53,54,55,67,68],
      [23,24,37],
      [21,22,36,51,66,78],
      [19,20,35],
      [17,18,33,34,50,65,77,81],
      [16,32,47,48,49,61,62,63,64,73,74,75,76],
      [14,15,28,29,30,31,43,44,45,46,59,60],
      [13,25,26,27,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,79,80],
      [11,12,23,24,37],
      [9,10,19,20,21,22,35,36,51,66,78],
      [7,8,17,18,33,34,50,65,77,81],
      [6,14,15,16,28,29,30,31,32,43,44,45,46,47,48,49,59,60,61,62,63,64,73,74,75,76],
      [5,13,25,26,27,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,79,80],
      [3,4,7,8,9,10,11,12,17,18,19,20,21,22,23,24,33,34,35,36,37,50,51,65,66,77,78,81]];

   var polytoperoot = [[-1.39745646027364e-16,-0.855747051253819,-0.528880763447358],
      [-0.240738579562098,-1.01978498783179,-0.240738579562098],
      [-0.569401310833123,0.127322003750035,0.0300566479164917]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.543418, 0, 0));
   allpoints.push(new PMPoint(0.481148, 1.17802, 0));
   allpoints.push(new PMPoint(0.205475, -0.503074, 0));
   allpoints.push(new PMPoint(0.524783, -0.352527, 0));
   allpoints.push(new PMPoint(1.08381, 0.0572902, 0));
   allpoints.push(new PMPoint(-0.388032, 0.38044, 0));
   allpoints.push(new PMPoint(0.826441, -0.535898, 0));
   allpoints.push(new PMPoint(1.08381, -0.0572902, 0));
   allpoints.push(new PMPoint(-0.388032, -0.38044, 0));
   allpoints.push(new PMPoint(-0.127926, -0.619118, 0));
   allpoints.push(new PMPoint(0.462841, -0.981681, 0));
   allpoints.push(new PMPoint(0.808602, -0.562453, 0));
   allpoints.push(new PMPoint(1.42957, 0.476518, 0));
   allpoints.push(new PMPoint(-0.621525, 0.115669, 0));
   allpoints.push(new PMPoint(-0.498916, -0.215374, 0));
   allpoints.push(new PMPoint(-0.733793, 0.799668, 0));
   allpoints.push(new PMPoint(1.14575, -0.686445, 0));
   allpoints.push(new PMPoint(1.42957, -0.476518, 0));
   allpoints.push(new PMPoint(-0.183622, -0.967716, 0));
   allpoints.push(new PMPoint(0.356767, -1.02501, 0));
   allpoints.push(new PMPoint(-0.733793, -0.799668, 0));
   allpoints.push(new PMPoint(-0.214951, -0.961242, 0));
   allpoints.push(new PMPoint(0.981682, -1.14326, 0));
   allpoints.push(new PMPoint(1.06871, -0.801132, 0));
   allpoints.push(new PMPoint(1.60265, -0.104285, 0));
   allpoints.push(new PMPoint(1.68967, 0.23784, 0));
   allpoints.push(new PMPoint(1.72921, 0.929862, 0));
   allpoints.push(new PMPoint(-0.814009, 0.717851, 0));
   allpoints.push(new PMPoint(-0.965301, 0.195918, 0));
   allpoints.push(new PMPoint(-0.971155, 0.164468, 0));
   allpoints.push(new PMPoint(-1.01776, -0.376948, 0));
   allpoints.push(new PMPoint(-0.68719, 1.34108, 0));
   allpoints.push(new PMPoint(1.19622, -1.03584, 0));
   allpoints.push(new PMPoint(1.72921, -0.929862, 0));
   allpoints.push(new PMPoint(-0.245892, -2.14573, 0));
   allpoints.push(new PMPoint(-0.624666, -2.06747, 0));
   allpoints.push(new PMPoint(0.571968, -2.24948, 0));
   allpoints.push(new PMPoint(2.02307, 0.353884, 0));
   allpoints.push(new PMPoint(1.8176, 0.856958, 0));
   allpoints.push(new PMPoint(2.13563, -0.21026, 0));
   allpoints.push(new PMPoint(2.03221, 0.323226, 0));
   allpoints.push(new PMPoint(1.62578, 1.46335, 0));
   allpoints.push(new PMPoint(-1.3544, 0.660561, 0));
   allpoints.push(new PMPoint(-1.2987, 0.311963, 0));
   allpoints.push(new PMPoint(-1.32398, 0.176134, 0));
   allpoints.push(new PMPoint(-1.50136, -0.129088, 0));
   allpoints.push(new PMPoint(-0.583768, 1.87457, 0));
   allpoints.push(new PMPoint(-1.04002, 1.35275, 0));
   allpoints.push(new PMPoint(-1.21739, 1.04753, 0));
   allpoints.push(new PMPoint(1.48703, -2.17909, 0));
   allpoints.push(new PMPoint(-1.21739, -1.04753, 0));
   allpoints.push(new PMPoint(2.34238, 0.504431, 0));
   allpoints.push(new PMPoint(2.36102, 0.856958, 0));
   allpoints.push(new PMPoint(2.59041, 0.0872031, 0));
   allpoints.push(new PMPoint(2.38184, 0.372024, 0));
   allpoints.push(new PMPoint(1.46669, 1.98296, 0));
   allpoints.push(new PMPoint(2.18398, 1.22732, 0));
   allpoints.push(new PMPoint(1.97541, 1.51215, 0));
   allpoints.push(new PMPoint(-1.88574, 0.546619, 0));
   allpoints.push(new PMPoint(-1.57935, 0.0978112, 0));
   allpoints.push(new PMPoint(-1.11675, 1.76859, 0));
   allpoints.push(new PMPoint(-1.02973, 1.42647, 0));
   allpoints.push(new PMPoint(-1.22483, 1.65353, 0));
   allpoints.push(new PMPoint(-1.67216, 1.34499, 0));
   allpoints.push(new PMPoint(2.18398, -1.22732, 0));
   allpoints.push(new PMPoint(-1.67216, -1.34499, 0));
   allpoints.push(new PMPoint(2.64404, 0.32106, 0));
   allpoints.push(new PMPoint(2.90141, 0.799668, 0));
   allpoints.push(new PMPoint(1.95741, 1.58437, 0));
   allpoints.push(new PMPoint(2.00788, 1.93376, 0));
   allpoints.push(new PMPoint(2.60486, 1.57107, 0));
   allpoints.push(new PMPoint(2.12749, 1.83073, 0));
   allpoints.push(new PMPoint(-0.883405, 2.32791, 0));
   allpoints.push(new PMPoint(-1.16722, 2.11799, 0));
   allpoints.push(new PMPoint(-1.44032, 1.93314, 0));
   allpoints.push(new PMPoint(-1.78865, 1.87578, 0));
   allpoints.push(new PMPoint(2.60486, -1.57107, 0));
   allpoints.push(new PMPoint(-1.78865, -1.87578, 0));
   allpoints.push(new PMPoint(2.66473, 2.11118, 0));
   allpoints.push(new PMPoint(2.3123, 2.13151, 0));
   allpoints.push(new PMPoint(2.66473, -2.11118, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 0, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 4, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 5, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 4, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 3, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 10, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 2, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 5, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 29, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 22, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 13, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 2, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 26, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 11, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 28, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 27, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 2, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 32, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 52, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 42, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 51, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 27, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 40, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 47, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 61, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 59, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 50, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 70, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 63, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 68, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 47, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 73, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 66, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 71, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 63, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 50, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 78, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 71, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(72, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(77, 50, 81, undefined, undefined, 0));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[77].vector);
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
