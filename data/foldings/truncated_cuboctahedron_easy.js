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

   var axes = [[69,68],
      [62,61],
      [51,50],
      [50,49],
      [42,41],
      [37,36],
      [32,31],
      [26,25],
      [27,26],
      [28,27],
      [21,20],
      [20,19],
      [19,18],
      [18,17],
      [12,11],
      [11,10],
      [13,12],
      [10,9],
      [7,6],
      [0,5],
      [5,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      2.5261129449194,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.35619449019235,
      2.18627603546528,
      2.35619449019235,
      2.18627603546529,
      2.35619449019235,
      2.18627603546528,
      2.35619449019234,
      2.35619449019234,
      2.18627603546528,
      2.18627603546528,
      2.35619449019234,
      2.52611294491941,
      2.18627603546528,
      2.52611294491941,
      2.18627603546529,
      2.52611294491941,
      2.18627603546528,
      2.5261129449194];

   var subtrees = [[90,91,92,93],
      [88,89],
      [82,83,84,85,86,87],
      [80,81],
      [78,79],
      [72,73,74,75,76,77],
      [66,67,68,69,70,71,90,91,92,93],
      [64,65],
      [60,61,62,63,88,89],
      [58,59],
      [54,55,56,57],
      [52,53],
      [48,49,50,51,80,81,82,83,84,85,86,87],
      [46,47],
      [44,45],
      [40,41,42,43,78,79],
      [36,37,38,39,72,73,74,75,76,77],
      [34,35],
      [30,31,32,33,66,67,68,69,70,71,90,91,92,93],
      [24,25,26,27,28,29,58,59,60,61,62,63,64,65,88,89],
      [22,23],
      [16,17,18,19,20,21,46,47,48,49,50,51,52,53,54,55,56,57,80,81,82,83,84,85,86,87],
      [14,15],
      [8,9,10,11,12,13,34,35,36,37,38,39,40,41,42,43,44,45,72,73,74,75,76,77,78,79],
      [6,7,30,31,32,33,66,67,68,69,70,71,90,91,92,93]];

   var polytoperoot = [[0.825942591020957,0.215739405272267,-0.520840998146612],
      [1,1,-1],
      [-0.305101592874346,0.610203185748691,0.305101592874346]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.431479, 0, 0));
   allpoints.push(new PMPoint(0.647218, 0.373672, 0));
   allpoints.push(new PMPoint(0.431479, 0.747343, 0));
   allpoints.push(new PMPoint(0, 0.747343, 0));
   allpoints.push(new PMPoint(-0.215739, 0.373672, 0));
   allpoints.push(new PMPoint(0, -0.431479, 0));
   allpoints.push(new PMPoint(0.431479, -0.431479, 0));
   allpoints.push(new PMPoint(0.543154, -0.416777, 0));
   allpoints.push(new PMPoint(0.916825, -0.632516, 0));
   allpoints.push(new PMPoint(1.3336, -0.520841, 0));
   allpoints.push(new PMPoint(1.54934, -0.147169, 0));
   allpoints.push(new PMPoint(1.43767, 0.269607, 0));
   allpoints.push(new PMPoint(1.06399, 0.485347, 0));
   allpoints.push(new PMPoint(1.02089, 0.589411, 0));
   allpoints.push(new PMPoint(0.80515, 0.963083, 0));
   allpoints.push(new PMPoint(0.73658, 1.05244, 0));
   allpoints.push(new PMPoint(0.73658, 1.48392, 0));
   allpoints.push(new PMPoint(0.431479, 1.78903, 0));
   allpoints.push(new PMPoint(0, 1.78903, 0));
   allpoints.push(new PMPoint(-0.305102, 1.48392, 0));
   allpoints.push(new PMPoint(-0.305102, 1.05244, 0));
   allpoints.push(new PMPoint(-0.373672, 0.963083, 0));
   allpoints.push(new PMPoint(-0.589411, 0.589411, 0));
   allpoints.push(new PMPoint(-0.632516, 0.485347, 0));
   allpoints.push(new PMPoint(-1.00619, 0.269607, 0));
   allpoints.push(new PMPoint(-1.11786, -0.147169, 0));
   allpoints.push(new PMPoint(-0.902123, -0.520841, 0));
   allpoints.push(new PMPoint(-0.485347, -0.632516, 0));
   allpoints.push(new PMPoint(-0.111675, -0.416777, 0));
   allpoints.push(new PMPoint(-0.215739, -0.80515, 0));
   allpoints.push(new PMPoint(0, -1.17882, 0));
   allpoints.push(new PMPoint(0.431479, -1.17882, 0));
   allpoints.push(new PMPoint(0.647218, -0.80515, 0));
   allpoints.push(new PMPoint(1.0285, -1.04929, 0));
   allpoints.push(new PMPoint(1.44528, -0.937618, 0));
   allpoints.push(new PMPoint(1.81134, 0.485347, 0));
   allpoints.push(new PMPoint(1.81134, 0.916825, 0));
   allpoints.push(new PMPoint(1.43767, 1.13256, 0));
   allpoints.push(new PMPoint(1.06399, 0.916825, 0));
   allpoints.push(new PMPoint(1.54934, -0.894513, 0));
   allpoints.push(new PMPoint(1.98082, -0.894513, 0));
   allpoints.push(new PMPoint(2.19656, -0.520841, 0));
   allpoints.push(new PMPoint(1.98082, -0.147169, 0));
   allpoints.push(new PMPoint(1.96612, -0.0354945, 0));
   allpoints.push(new PMPoint(1.85444, 0.381282, 0));
   allpoints.push(new PMPoint(1.04168, 1.78903, 0));
   allpoints.push(new PMPoint(0.73658, 2.09413, 0));
   allpoints.push(new PMPoint(0.647218, 2.1627, 0));
   allpoints.push(new PMPoint(0.431479, 2.53637, 0));
   allpoints.push(new PMPoint(0, 2.53637, 0));
   allpoints.push(new PMPoint(-0.215739, 2.1627, 0));
   allpoints.push(new PMPoint(-0.305102, 2.09413, 0));
   allpoints.push(new PMPoint(-0.610203, 1.78903, 0));
   allpoints.push(new PMPoint(-0.678773, 1.69966, 0));
   allpoints.push(new PMPoint(-1.05244, 1.48392, 0));
   allpoints.push(new PMPoint(-1.05244, 1.05244, 0));
   allpoints.push(new PMPoint(-0.678773, 0.836705, 0));
   allpoints.push(new PMPoint(-1.0138, -0.937618, 0));
   allpoints.push(new PMPoint(-0.597021, -1.04929, 0));
   allpoints.push(new PMPoint(-1.54934, -0.147169, 0));
   allpoints.push(new PMPoint(-1.76508, -0.520841, 0));
   allpoints.push(new PMPoint(-1.54934, -0.894513, 0));
   allpoints.push(new PMPoint(-1.11786, -0.894513, 0));
   allpoints.push(new PMPoint(-1.42296, 0.381282, 0));
   allpoints.push(new PMPoint(-1.53464, -0.0354945, 0));
   allpoints.push(new PMPoint(-0.305102, -1.48392, 0));
   allpoints.push(new PMPoint(-0.305102, -1.9154, 0));
   allpoints.push(new PMPoint(0, -2.2205, 0));
   allpoints.push(new PMPoint(0.431479, -2.2205, 0));
   allpoints.push(new PMPoint(0.73658, -1.9154, 0));
   allpoints.push(new PMPoint(0.73658, -1.48392, 0));
   allpoints.push(new PMPoint(2.11644, 0.180245, 0));
   allpoints.push(new PMPoint(2.54792, 0.180245, 0));
   allpoints.push(new PMPoint(2.85302, 0.485347, 0));
   allpoints.push(new PMPoint(2.85302, 0.916825, 0));
   allpoints.push(new PMPoint(2.54792, 1.22193, 0));
   allpoints.push(new PMPoint(2.11644, 1.22193, 0));
   allpoints.push(new PMPoint(2.35449, -1.11025, 0));
   allpoints.push(new PMPoint(2.57023, -0.73658, 0));
   allpoints.push(new PMPoint(0.431479, 2.96785, 0));
   allpoints.push(new PMPoint(0, 2.96785, 0));
   allpoints.push(new PMPoint(-0.111675, 2.95314, 0));
   allpoints.push(new PMPoint(-0.485347, 3.16888, 0));
   allpoints.push(new PMPoint(-0.902123, 3.05721, 0));
   allpoints.push(new PMPoint(-1.11786, 2.68354, 0));
   allpoints.push(new PMPoint(-1.00619, 2.26676, 0));
   allpoints.push(new PMPoint(-0.632516, 2.05102, 0));
   allpoints.push(new PMPoint(-2.13875, -0.73658, 0));
   allpoints.push(new PMPoint(-1.92301, -1.11025, 0));
   allpoints.push(new PMPoint(-0.215739, -2.59418, 0));
   allpoints.push(new PMPoint(0, -2.96785, 0));
   allpoints.push(new PMPoint(0.431479, -2.96785, 0));
   allpoints.push(new PMPoint(0.647218, -2.59418, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(7, 0, 6, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(33, 7, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(33, 6, 30, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(33, 30, 31, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(33, 31, 32, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(3, 2, 14, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(10, 9, 34, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(10, 34, 35, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(13, 12, 36, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(11, 10, 40, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(11, 40, 41, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(11, 41, 42, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(11, 42, 43, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(12, 11, 44, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(12, 44, 45, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(72, 73, 74, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(72, 74, 75, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(72, 75, 76, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(72, 76, 77, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(72, 77, 37, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(72, 37, 36, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(42, 41, 78, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(42, 78, 79, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(50, 49, 80, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(50, 80, 81, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(18, 17, 46, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(18, 46, 47, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(69, 68, 90, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(69, 90, 91, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(69, 91, 92, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(69, 92, 93, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(19, 18, 48, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(19, 48, 49, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(19, 49, 50, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(19, 50, 51, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(62, 61, 88, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(62, 88, 89, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(20, 19, 52, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(20, 52, 53, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(32, 31, 66, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 66, 67, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 67, 68, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 68, 69, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 69, 70, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 70, 71, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(51, 50, 82, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(51, 82, 83, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(51, 83, 84, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(51, 84, 85, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(51, 85, 86, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(51, 86, 87, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(4, 3, 16, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(4, 16, 17, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(28, 27, 58, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(28, 58, 59, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(27, 26, 60, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(27, 60, 61, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(27, 61, 62, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(27, 62, 63, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(26, 25, 64, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(26, 64, 65, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(21, 20, 54, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(21, 54, 55, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(21, 55, 56, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(21, 56, 57, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(5, 4, 22, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(5, 22, 23, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(0, 5, 24, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(0, 24, 25, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(0, 25, 26, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(0, 26, 27, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(0, 27, 28, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(0, 28, 29, undefined, undefined, 25));


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
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
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
