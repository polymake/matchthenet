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

   var axes = [[66,76],
      [66,65],
      [65,64],
      [63,52],
      [59,58],
      [56,42],
      [55,43],
      [39,53],
      [38,52],
      [51,38],
      [35,50],
      [46,30],
      [29,45],
      [43,42],
      [44,43],
      [40,39],
      [39,25],
      [38,37],
      [21,38],
      [35,21],
      [20,34],
      [32,31],
      [30,29],
      [18,30],
      [29,28],
      [25,16],
      [17,25],
      [21,10],
      [11,21],
      [20,6],
      [8,18],
      [18,7],
      [5,17],
      [16,15],
      [17,16],
      [14,5],
      [4,12],
      [10,9],
      [11,10],
      [7,6],
      [3,8],
      [8,7],
      [5,0],
      [1,5],
      [0,4],
      [4,2],
      [2,3],
      [3,1],
      [1,0],
      [0,2],
      [2,1]];

   var angles = [2.80223687625225,
      2.40184625752951,
      2.48923451380543,
      2.82814048148548,
      2.98940664305273,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      3.020016454646,
      2.83296826849485,
      2.93454167480129,
      2.48923451380543,
      2.83692050609424,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.49262695629814,
      2.84140967705754,
      2.83894477010767,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      3.12494135753614,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.62077125190861,
      3.01884158590961,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.82814048148548,
      0.317793291495881,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.87643789410659,
      2.73142419799184,
      2.93454167480129,
      2.84140967705754,
      2.48923451380543,
      2.48923451380542,
      2.83296826849485,
      2.77499229924554,
      2.76756403451538];

   var subtrees = [[77],
      [76,77],
      [75],
      [74],
      [73],
      [70,71,72],
      [67,68,69],
      [64,65,66,75,76,77],
      [63,74],
      [62],
      [61],
      [58,59,60,73],
      [57],
      [56,70,71,72],
      [55,67,68,69],
      [54],
      [53,64,65,66,75,76,77],
      [52,63,74],
      [51,62],
      [50,61],
      [49],
      [48],
      [47],
      [46,58,59,60,73],
      [45,57],
      [42,43,44,55,56,67,68,69,70,71,72],
      [39,40,41,53,54,64,65,66,75,76,77],
      [36,37,38,51,52,62,63,74],
      [35,50,61],
      [34,49],
      [31,32,33,48],
      [28,29,30,45,46,47,57,58,59,60,73],
      [27],
      [26],
      [25,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [24],
      [23],
      [22],
      [21,35,36,37,38,50,51,52,61,62,63,74],
      [20,34,49],
      [19],
      [18,28,29,30,31,32,33,45,46,47,48,57,58,59,60,73],
      [15,16,17,25,26,27,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [14,24],
      [13],
      [12,23],
      [9,10,11,21,22,35,36,37,38,50,51,52,61,62,63,74],
      [6,7,8,18,19,20,28,29,30,31,32,33,34,45,46,47,48,49,57,58,59,60,73],
      [5,14,15,16,17,24,25,26,27,39,40,41,42,43,44,53,54,55,56,64,65,66,67,68,69,70,71,72,75,76,77],
      [4,12,13,23],
      [3,6,7,8,9,10,11,18,19,20,21,22,28,29,30,31,32,33,34,35,36,37,38,45,46,47,48,49,50,51,52,57,58,59,60,61,62,63,73,74]];

   var polytoperoot = [[0.686741432487041,0.454743546308757,-0.148113108572477],
      [3.84137965053829,2.2244764082196,-1.90612788518428],
      [-1.7522787967334,1.11980227646736,-2.22450675997493]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.630343, 0, 0));
   allpoints.push(new PMPoint(0.592318, 0.523244, 0));
   allpoints.push(new PMPoint(1.06447, 0.294552, 0));
   allpoints.push(new PMPoint(-0.0855131, 0.517608, 0));
   allpoints.push(new PMPoint(0.00637043, -0.524585, 0));
   allpoints.push(new PMPoint(0.776325, -0.503904, 0));
   allpoints.push(new PMPoint(1.30068, -0.520782, 0));
   allpoints.push(new PMPoint(1.47876, -0.0273085, 0));
   allpoints.push(new PMPoint(1.42788, 0.672929, 0));
   allpoints.push(new PMPoint(1.18032, 1.13547, 0));
   allpoints.push(new PMPoint(0.663913, 1.04296, 0));
   allpoints.push(new PMPoint(0.44914, 1.02795, 0));
   allpoints.push(new PMPoint(-0.491018, 0.184747, 0));
   allpoints.push(new PMPoint(0.62571, -0.524603, 0));
   allpoints.push(new PMPoint(-0.500879, 0.156047, 0));
   allpoints.push(new PMPoint(-0.804068, -0.272096, 0));
   allpoints.push(new PMPoint(-0.490571, -0.692749, 0));
   allpoints.push(new PMPoint(1.81708, -0.428271, 0));
   allpoints.push(new PMPoint(1.55036, 0.492407, 0));
   allpoints.push(new PMPoint(1.02388, -0.966445, 0));
   allpoints.push(new PMPoint(0.841999, 1.53643, 0));
   allpoints.push(new PMPoint(1.70467, 1.11859, 0));
   allpoints.push(new PMPoint(-0.289491, 1.00095, 0));
   allpoints.push(new PMPoint(0.0128386, -1.04917, 0));
   allpoints.push(new PMPoint(-1.01162, -0.753919, 0));
   allpoints.push(new PMPoint(-1.02326, 0.204546, 0));
   allpoints.push(new PMPoint(-0.0964657, -1.03903, 0));
   allpoints.push(new PMPoint(1.22908, -1.0405, 0));
   allpoints.push(new PMPoint(1.70124, -1.26919, 0));
   allpoints.push(new PMPoint(2.06464, -0.890813, 0));
   allpoints.push(new PMPoint(2.30296, -0.230417, 0));
   allpoints.push(new PMPoint(2.26494, 0.292827, 0));
   allpoints.push(new PMPoint(1.75556, 0.418355, 0));
   allpoints.push(new PMPoint(0.429992, -1.23249, 0));
   allpoints.push(new PMPoint(0.166217, 1.58941, 0));
   allpoints.push(new PMPoint(1.6662, 1.33332, 0));
   allpoints.push(new PMPoint(1.62818, 1.85657, 0));
   allpoints.push(new PMPoint(1.11879, 1.9821, 0));
   allpoints.push(new PMPoint(-1.11445, -1.26837, 0));
   allpoints.push(new PMPoint(-0.656963, -1.52514, 0));
   allpoints.push(new PMPoint(-0.271383, -1.16939, 0));
   allpoints.push(new PMPoint(-1.19817, 0.0741862, 0));
   allpoints.push(new PMPoint(-1.64929, -0.193623, 0));
   allpoints.push(new PMPoint(-1.53399, -0.70542, 0));
   allpoints.push(new PMPoint(1.24092, -1.80763, 0));
   allpoints.push(new PMPoint(2.34143, -0.445149, 0));
   allpoints.push(new PMPoint(2.21062, -1.39472, 0));
   allpoints.push(new PMPoint(2.73709, 0.0641355, 0));
   allpoints.push(new PMPoint(0.718857, -1.67042, 0));
   allpoints.push(new PMPoint(0.287679, 2.09978, 0));
   allpoints.push(new PMPoint(0.560624, 2.27498, 0));
   allpoints.push(new PMPoint(1.48219, 2.36047, 0));
   allpoints.push(new PMPoint(-1.50856, -0.922083, 0));
   allpoints.push(new PMPoint(-1.10808, -1.79295, 0));
   allpoints.push(new PMPoint(-2.03487, -0.549373, 0));
   allpoints.push(new PMPoint(-1.65566, 0.330962, 0));
   allpoints.push(new PMPoint(1.73757, -1.97664, 0));
   allpoints.push(new PMPoint(2.40296, -1.29178, 0));
   allpoints.push(new PMPoint(2.88884, -1.09392, 0));
   allpoints.push(new PMPoint(2.85082, -0.570677, 0));
   allpoints.push(new PMPoint(-0.215045, 1.94978, 0));
   allpoints.push(new PMPoint(0.81001, 2.73654, 0));
   allpoints.push(new PMPoint(1.0393, 2.7934, 0));
   allpoints.push(new PMPoint(-1.95968, -1.18989, 0));
   allpoints.push(new PMPoint(-1.84438, -1.70169, 0));
   allpoints.push(new PMPoint(-1.322, -1.75019, 0));
   allpoints.push(new PMPoint(-1.86848, 0.283018, 0));
   allpoints.push(new PMPoint(-2.38953, 0.221848, 0));
   allpoints.push(new PMPoint(-2.49236, -0.292598, 0));
   allpoints.push(new PMPoint(-0.812594, 0.429936, 0));
   allpoints.push(new PMPoint(-1.03178, 0.906578, 0));
   allpoints.push(new PMPoint(-1.55283, 0.845408, 0));
   allpoints.push(new PMPoint(2.69009, -1.87576, 0));
   allpoints.push(new PMPoint(1.41063, 3.164, 0));
   allpoints.push(new PMPoint(-2.34526, -1.54564, 0));
   allpoints.push(new PMPoint(-1.79927, -2.35088, 0));
   allpoints.push(new PMPoint(-1.28563, -2.45764, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(3, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(3, 2, 1, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(41, 17, 25, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(41, 25, 39, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(41, 39, 40, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(17, 16, 25, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(20, 34, 49, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 29, 30, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 30, 18, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(8, 7, 18, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(29, 28, 45, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(16, 42, 43, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(16, 43, 44, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(16, 44, 25, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(16, 15, 26, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(39, 25, 53, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(40, 39, 54, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(29, 45, 57, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(18, 30, 46, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(11, 10, 21, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(11, 21, 35, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(30, 29, 47, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(76, 77, 66, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(30, 58, 59, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(30, 59, 60, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(30, 60, 46, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(61, 35, 50, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(35, 21, 50, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(32, 31, 48, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(67, 68, 69, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(67, 69, 55, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(67, 55, 43, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(21, 38, 51, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(65, 64, 75, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(52, 74, 63, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(37, 52, 38, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(38, 52, 63, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(51, 38, 62, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(59, 58, 73, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(76, 66, 65, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(44, 43, 55, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(36, 37, 38, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(36, 38, 21, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(36, 21, 10, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(39, 53, 64, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(39, 64, 65, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(39, 65, 66, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(42, 56, 43, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(9, 22, 10, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(4, 12, 23, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(70, 71, 72, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(70, 72, 56, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(70, 56, 42, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(8, 18, 31, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(8, 31, 32, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(8, 32, 33, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(2, 12, 4, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(3, 8, 19, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(3, 11, 2, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(13, 0, 4, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(7, 6, 20, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(20, 6, 34, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(27, 5, 17, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(14, 5, 24, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(14, 1, 5, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(5, 0, 15, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(5, 15, 16, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(5, 16, 17, undefined, undefined, 51));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: foldingLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
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
