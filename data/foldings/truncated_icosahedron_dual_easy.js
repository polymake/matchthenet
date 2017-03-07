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

   var axes = [[51,58],
      [54,46],
      [43,52],
      [51,42],
      [39,49],
      [48,38],
      [47,37],
      [36,46],
      [44,34],
      [43,33],
      [32,42],
      [31,41],
      [39,29],
      [28,38],
      [18,37],
      [36,26],
      [35,25],
      [24,34],
      [23,33],
      [32,22],
      [31,13],
      [20,30],
      [19,29],
      [28,18],
      [18,27],
      [17,26],
      [9,25],
      [24,15],
      [23,14],
      [13,22],
      [21,13],
      [20,12],
      [19,11],
      [10,18],
      [18,5],
      [17,9],
      [9,16],
      [8,15],
      [7,14],
      [13,6],
      [3,13],
      [6,12],
      [5,11],
      [10,5],
      [4,9],
      [9,2],
      [8,4],
      [7,3],
      [3,6],
      [6,0],
      [5,1],
      [2,5],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149034,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033,
      2.73525476149033];

   var subtrees = [[61],
      [60],
      [59],
      [58,61],
      [57],
      [56],
      [55],
      [54,60],
      [53],
      [52,59],
      [51,58,61],
      [50],
      [49,57],
      [48,56],
      [47,55],
      [46,54,60],
      [45],
      [44,53],
      [43,52,59],
      [42,51,58,61],
      [41,50],
      [40],
      [39,49,57],
      [38,48,56],
      [37,47,55],
      [36,46,54,60],
      [35,45],
      [34,44,53],
      [33,43,52,59],
      [32,42,51,58,61],
      [31,41,50],
      [30,40],
      [29,39,49,57],
      [28,38,48,56],
      [27,37,47,55],
      [26,36,46,54,60],
      [25,35,45],
      [24,34,44,53],
      [23,33,43,52,59],
      [22,32,42,51,58,61],
      [21,31,41,50],
      [20,30,40],
      [19,29,39,49,57],
      [18,27,28,37,38,47,48,55,56],
      [17,26,36,46,54,60],
      [16,25,35,45],
      [15,24,34,44,53],
      [14,23,33,43,52,59],
      [13,21,22,31,32,41,42,50,51,58,61],
      [12,20,30,40],
      [11,19,29,39,49,57],
      [10,18,27,28,37,38,47,48,55,56],
      [9,16,17,25,26,35,36,45,46,54,60],
      [8,15,24,34,44,53],
      [7,14,23,33,43,52,59],
      [6,12,13,20,21,22,30,31,32,40,41,42,50,51,58,61],
      [5,10,11,18,19,27,28,29,37,38,39,47,48,49,55,56,57],
      [4,8,9,15,16,17,24,25,26,34,35,36,44,45,46,53,54,60],
      [3,6,7,12,13,14,20,21,22,23,30,31,32,33,40,41,42,43,50,51,52,58,59,61]];

   var polytoperoot = [[-0.360314318400237,-0.943315132205063,-2.93602041313433e-15],
      [0,-1.06009112528751,-0.218390782199935],
      [0.571499324846415,-0.0786893258332646,0.381966011250112]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.639239, 0, 0));
   allpoints.push(new PMPoint(0.40619, 0.595244, 0));
   allpoints.push(new PMPoint(0.40619, -0.595244, 0));
   allpoints.push(new PMPoint(-0.233049, 0.595244, 0));
   allpoints.push(new PMPoint(1.10855, 0.434019, 0));
   allpoints.push(new PMPoint(-0.233049, -0.595244, 0));
   allpoints.push(new PMPoint(1.10855, -0.434019, 0));
   allpoints.push(new PMPoint(-0.702362, 0.161225, 0));
   allpoints.push(new PMPoint(0, 1.19049, 0));
   allpoints.push(new PMPoint(0.875503, 1.02926, 0));
   allpoints.push(new PMPoint(1.21449, -0.278781, 0));
   allpoints.push(new PMPoint(-0.702362, -0.161225, 0));
   allpoints.push(new PMPoint(0, -1.19049, 0));
   allpoints.push(new PMPoint(0.875503, -1.02926, 0));
   allpoints.push(new PMPoint(-0.808295, 0.874025, 0));
   allpoints.push(new PMPoint(0.639239, 1.19049, 0));
   allpoints.push(new PMPoint(-0.702362, 1.02926, 0));
   allpoints.push(new PMPoint(1.51474, 1.02926, 0));
   allpoints.push(new PMPoint(1.6838, 0.155238, 0));
   allpoints.push(new PMPoint(-0.808295, -0.874025, 0));
   allpoints.push(new PMPoint(0.639239, -1.19049, 0));
   allpoints.push(new PMPoint(-0.702362, -1.02926, 0));
   allpoints.push(new PMPoint(1.51474, -1.02926, 0));
   allpoints.push(new PMPoint(-1.27761, 0.440006, 0));
   allpoints.push(new PMPoint(0.40619, 1.78573, 0));
   allpoints.push(new PMPoint(-0.469313, 1.62451, 0));
   allpoints.push(new PMPoint(1.74779, 0.434019, 0));
   allpoints.push(new PMPoint(1.10855, 1.62451, 0));
   allpoints.push(new PMPoint(1.91685, -0.440006, 0));
   allpoints.push(new PMPoint(-1.27761, -0.440006, 0));
   allpoints.push(new PMPoint(0.40619, -1.78573, 0));
   allpoints.push(new PMPoint(-0.469313, -1.62451, 0));
   allpoints.push(new PMPoint(1.10855, -1.62451, 0));
   allpoints.push(new PMPoint(-1.51066, 1.03525, 0));
   allpoints.push(new PMPoint(-0.233049, 1.78573, 0));
   allpoints.push(new PMPoint(-1.10855, 1.62451, 0));
   allpoints.push(new PMPoint(2.2171, 0.868038, 0));
   allpoints.push(new PMPoint(1.74779, 1.62451, 0));
   allpoints.push(new PMPoint(2.32304, 0.155238, 0));
   allpoints.push(new PMPoint(-1.51066, -1.03525, 0));
   allpoints.push(new PMPoint(-0.233049, -1.78573, 0));
   allpoints.push(new PMPoint(-1.10855, -1.62451, 0));
   allpoints.push(new PMPoint(1.74779, -1.62451, 0));
   allpoints.push(new PMPoint(-1.91685, 0.440006, 0));
   allpoints.push(new PMPoint(0, 2.38097, 0));
   allpoints.push(new PMPoint(-0.702362, 2.21975, 0));
   allpoints.push(new PMPoint(1.98406, 1.46328, 0));
   allpoints.push(new PMPoint(1.51474, 2.21975, 0));
   allpoints.push(new PMPoint(2.55609, -0.440006, 0));
   allpoints.push(new PMPoint(0, -2.38097, 0));
   allpoints.push(new PMPoint(-0.702362, -2.21975, 0));
   allpoints.push(new PMPoint(1.51474, -2.21975, 0));
   allpoints.push(new PMPoint(-2.1499, 1.03525, 0));
   allpoints.push(new PMPoint(-1.3416, 2.21975, 0));
   allpoints.push(new PMPoint(2.62329, 1.46328, 0));
   allpoints.push(new PMPoint(2.2171, 2.05853, 0));
   allpoints.push(new PMPoint(3.0254, -0.0059865, 0));
   allpoints.push(new PMPoint(-1.3416, -2.21975, 0));
   allpoints.push(new PMPoint(2.2171, -2.05853, 0));
   allpoints.push(new PMPoint(-1.10855, 2.81499, 0));
   allpoints.push(new PMPoint(-1.10855, -2.81499, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 6, 3, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 1, 3, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(4, 2, 9, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 12, 6, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(2, 5, 10, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(5, 1, 11, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(8, 4, 15, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(3, 6, 13, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(2, 16, 9, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(7, 3, 14, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(4, 9, 17, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(6, 12, 20, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(10, 5, 18, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(21, 3, 13, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(5, 11, 19, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(8, 15, 24, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(6, 22, 13, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(9, 16, 25, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(7, 14, 23, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(5, 27, 18, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(12, 30, 20, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(17, 9, 26, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(10, 18, 28, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(21, 13, 31, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(19, 11, 29, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(24, 15, 34, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(9, 25, 35, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(13, 22, 32, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(23, 14, 33, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(18, 27, 37, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(20, 30, 40, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(17, 26, 36, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(31, 13, 41, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(28, 18, 38, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(19, 29, 39, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(24, 34, 44, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(35, 25, 45, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(22, 42, 32, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(18, 37, 47, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(23, 33, 43, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(36, 26, 46, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(31, 41, 50, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(28, 38, 48, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(39, 29, 49, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(44, 34, 53, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(32, 42, 51, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(47, 37, 55, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(43, 33, 52, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(36, 46, 54, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(48, 38, 56, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(39, 49, 57, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(42, 58, 51, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(59, 43, 52, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(46, 60, 54, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(61, 51, 58, undefined, undefined, 59));


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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[61].vector);
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
