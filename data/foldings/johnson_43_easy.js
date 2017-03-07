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

   var axes = [[56,69],
      [65,64],
      [62,61],
      [59,58],
      [57,56],
      [56,55],
      [35,51],
      [49,48],
      [30,46],
      [44,43],
      [42,41],
      [40,25],
      [39,38],
      [20,35],
      [35,34],
      [17,32],
      [31,30],
      [30,29],
      [12,27],
      [25,13],
      [26,25],
      [23,22],
      [21,20],
      [20,19],
      [18,17],
      [17,16],
      [15,14],
      [13,12],
      [12,11],
      [5,13],
      [10,9],
      [8,2],
      [7,3],
      [6,4],
      [1,5],
      [5,0],
      [2,1],
      [3,2],
      [4,3],
      [0,4],
      [1,0]];

   var angles = [2.48923451380543,
      2.95288212280623,
      2.48923451380543,
      2.51327412287183,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.67794504458899,
      2.48923451380542,
      2.48923451380543,
      2.51327412287183,
      2.48923451380543,
      2.48923451380543,
      2.51327412287183,
      2.95288212280623,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.51327412287183,
      2.95288212280623,
      2.67794504458899,
      2.48923451380543,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.67794504458899,
      2.48923451380542,
      2.48923451380542,
      2.67794504458899,
      2.95288212280623,
      2.95288212280623,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.48923451380543,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380542];

   var subtrees = [[75,76,77],
      [74],
      [73],
      [71,72],
      [70],
      [69,75,76,77],
      [66,67,68],
      [64,65,74],
      [61,62,63,73],
      [60],
      [58,59,71,72],
      [55,56,57,69,70,75,76,77],
      [54],
      [52,53],
      [51,66,67,68],
      [48,49,50,64,65,74],
      [47],
      [46,61,62,63,73],
      [43,44,45,60],
      [41,42,58,59,71,72],
      [40,55,56,57,69,70,75,76,77],
      [37,38,39,54],
      [36],
      [34,35,51,52,53,66,67,68],
      [33],
      [32,48,49,50,64,65,74],
      [29,30,31,46,47,61,62,63,73],
      [28],
      [27,43,44,45,60],
      [25,26,40,41,42,55,56,57,58,59,69,70,71,72,75,76,77],
      [24],
      [22,23,37,38,39,54],
      [19,20,21,34,35,36,51,52,53,66,67,68],
      [16,17,18,32,33,48,49,50,64,65,74],
      [14,15,29,30,31,46,47,61,62,63,73],
      [11,12,13,25,26,27,28,40,41,42,43,44,45,55,56,57,58,59,60,69,70,71,72,75,76,77],
      [9,10,24],
      [8,22,23,37,38,39,54],
      [7,19,20,21,34,35,36,51,52,53,66,67,68],
      [6,16,17,18,32,33,48,49,50,64,65,74],
      [5,11,12,13,14,15,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,55,56,57,58,59,60,61,62,63,69,70,71,72,73,75,76,77]];

   var polytoperoot = [[0.709913581148529,-0.501827764061976,-0.581309473612245],
      [1.61803398874989,-1,0],
      [-0.438750722224947,-0.709913581148528,0.606338585526313]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.542326, 0, 0));
   allpoints.push(new PMPoint(0.709914, 0.515782, 0));
   allpoints.push(new PMPoint(0.271163, 0.834553, 0));
   allpoints.push(new PMPoint(-0.167588, 0.515782, 0));
   allpoints.push(new PMPoint(0.271163, -0.469668, 0));
   allpoints.push(new PMPoint(-0.530475, 0.112756, 0));
   allpoints.push(new PMPoint(-0.224276, 1.05514, 0));
   allpoints.push(new PMPoint(0.766602, 1.05514, 0));
   allpoints.push(new PMPoint(1.05811, -0.167588, 0));
   allpoints.push(new PMPoint(1.2257, 0.348195, 0));
   allpoints.push(new PMPoint(-0.530475, -0.112756, 0));
   allpoints.push(new PMPoint(-0.587163, -0.652111, 0));
   allpoints.push(new PMPoint(-0.0917239, -0.872694, 0));
   allpoints.push(new PMPoint(0.740831, -0.740831, 0));
   allpoints.push(new PMPoint(1.01199, -0.271163, 0));
   allpoints.push(new PMPoint(-0.438751, 0.98545, 0));
   allpoints.push(new PMPoint(-0.969225, 0.872694, 0));
   allpoints.push(new PMPoint(-1.02591, 0.33334, 0));
   allpoints.push(new PMPoint(0.63405, 1.23758, 0));
   allpoints.push(new PMPoint(0.362887, 1.70725, 0));
   allpoints.push(new PMPoint(-0.167588, 1.59449, 0));
   allpoints.push(new PMPoint(1.24927, 0.459094, 0));
   allpoints.push(new PMPoint(1.30596, 0.998449, 0));
   allpoints.push(new PMPoint(1.58858, -0.054832, 0));
   allpoints.push(new PMPoint(0.311303, -1.23558, 0));
   allpoints.push(new PMPoint(0.674189, -0.832555, 0));
   allpoints.push(new PMPoint(-1.02591, -0.33334, 0));
   allpoints.push(new PMPoint(-0.530475, -1.19147, 0));
   allpoints.push(new PMPoint(1.10372, -1.14386, 0));
   allpoints.push(new PMPoint(1.59916, -0.923274, 0));
   allpoints.push(new PMPoint(1.54247, -0.383919, 0));
   allpoints.push(new PMPoint(-0.801637, 1.38848, 0));
   allpoints.push(new PMPoint(-1.46466, 0.652111, 0));
   allpoints.push(new PMPoint(1.10372, 1.50874, 0));
   allpoints.push(new PMPoint(0.832555, 1.97841, 0));
   allpoints.push(new PMPoint(0, 2.11027, 0));
   allpoints.push(new PMPoint(1.74471, 0.23851, 0));
   allpoints.push(new PMPoint(2.10759, 0.641537, 0));
   allpoints.push(new PMPoint(1.83643, 1.1112, 0));
   allpoints.push(new PMPoint(0.841777, -1.34834, 0));
   allpoints.push(new PMPoint(-0.454611, -1.27572, 0));
   allpoints.push(new PMPoint(-0.0515841, -1.63861, 0));
   allpoints.push(new PMPoint(-1.46466, -0.652111, 0));
   allpoints.push(new PMPoint(-1.29708, -1.16789, 0));
   allpoints.push(new PMPoint(-0.754751, -1.16789, 0));
   allpoints.push(new PMPoint(1.54247, -1.46263, 0));
   allpoints.push(new PMPoint(2.03791, -0.604502, 0));
   allpoints.push(new PMPoint(-1.24039, 1.70725, 0));
   allpoints.push(new PMPoint(-1.67914, 1.38848, 0));
   allpoints.push(new PMPoint(-1.51155, 0.872694, 0));
   allpoints.push(new PMPoint(1.37488, 1.97841, 0));
   allpoints.push(new PMPoint(0.561392, 2.44808, 0));
   allpoints.push(new PMPoint(0.0917239, 2.17692, 0));
   allpoints.push(new PMPoint(2.37876, 1.1112, 0));
   allpoints.push(new PMPoint(0.0401398, -1.70525, 0));
   allpoints.push(new PMPoint(0.403027, -2.10828, 0));
   allpoints.push(new PMPoint(0.898466, -1.88769, 0));
   allpoints.push(new PMPoint(-0.817497, -1.67875, 0));
   allpoints.push(new PMPoint(-0.414471, -2.04163, 0));
   allpoints.push(new PMPoint(-1.82755, -1.05514, 0));
   allpoints.push(new PMPoint(2.03791, -1.68321, 0));
   allpoints.push(new PMPoint(2.40079, -1.28019, 0));
   allpoints.push(new PMPoint(2.12963, -0.810518, 0));
   allpoints.push(new PMPoint(-1.55916, 2.146, 0));
   allpoints.push(new PMPoint(-1.99791, 1.82723, 0));
   allpoints.push(new PMPoint(1.54247, 2.49419, 0));
   allpoints.push(new PMPoint(1.10372, 2.81296, 0));
   allpoints.push(new PMPoint(0.664967, 2.49419, 0));
   allpoints.push(new PMPoint(-0.127448, -2.22103, 0));
   allpoints.push(new PMPoint(0.841777, -2.42705, 0));
   allpoints.push(new PMPoint(-1.18038, -2.08177, 0));
   allpoints.push(new PMPoint(-0.777358, -2.44466, 0));
   allpoints.push(new PMPoint(2.56838, -1.79597, 0));
   allpoints.push(new PMPoint(-2.0546, 2.36658, 0));
   allpoints.push(new PMPoint(-0.184137, -2.76039, 0));
   allpoints.push(new PMPoint(0.311303, -2.98097, 0));
   allpoints.push(new PMPoint(0.674189, -2.57794, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(26, 5, 13, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(26, 13, 25, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(26, 25, 40, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 23, 8, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 4, 6, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(25, 55, 56, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(25, 56, 57, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(25, 57, 40, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(4, 16, 17, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 18, 6, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(25, 13, 41, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(25, 41, 42, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(19, 34, 35, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(19, 35, 20, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(34, 51, 35, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(11, 27, 12, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(51, 66, 67, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(51, 67, 68, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(51, 68, 35, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(16, 32, 17, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(42, 41, 58, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(42, 58, 59, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(55, 69, 56, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(20, 35, 52, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(20, 52, 53, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(18, 17, 33, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(59, 58, 71, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(59, 71, 72, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(48, 64, 65, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(48, 65, 49, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(43, 60, 44, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(64, 74, 65, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(32, 48, 49, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(32, 49, 50, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(32, 50, 17, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(69, 75, 76, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(69, 76, 77, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(69, 77, 56, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(21, 20, 36, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(62, 61, 73, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(27, 43, 44, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(27, 44, 45, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(27, 45, 12, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(57, 56, 70, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(13, 12, 28, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(39, 38, 54, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(4, 3, 7, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(3, 21, 7, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(30, 29, 46, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(30, 46, 61, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(30, 61, 62, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(30, 62, 63, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(0, 13, 5, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(31, 30, 47, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(22, 37, 38, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(22, 38, 39, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(22, 39, 23, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(10, 9, 24, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(15, 14, 29, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(15, 29, 30, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(15, 30, 31, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(15, 1, 5, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(15, 5, 14, undefined, undefined, 41));


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
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
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
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
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
