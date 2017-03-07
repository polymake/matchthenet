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

   var axes = [[50,49],
      [42,41],
      [39,38],
      [33,32],
      [30,29],
      [29,10],
      [28,27],
      [20,19],
      [18,17],
      [4,18],
      [15,14],
      [13,12],
      [10,9],
      [0,10],
      [9,3],
      [8,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.54166236574057,
      2.54166236574057,
      2.54166236574057,
      2.54166236574057,
      2.49371704070067,
      2.49371704070067,
      2.54166236574057,
      2.54166236574057,
      2.49371704070067,
      2.49371704070067,
      2.54166236574057,
      2.54166236574057,
      2.49371704070067,
      2.23727579069214,
      2.49371704070067,
      2.54166236574057,
      2.54166236574057,
      2.49371704070067,
      2.23727579069214,
      2.49371704070067,
      2.49371704070067,
      2.23727579069214,
      2.49371704070067,
      2.23727579069214];

   var subtrees = [[60,61],
      [58,59],
      [56,57],
      [54,55],
      [51,52,53],
      [48,49,50,60,61],
      [46,47],
      [44,45],
      [41,42,43,58,59],
      [38,39,40,56,57],
      [36,37],
      [34,35],
      [31,32,33,54,55],
      [29,30,48,49,50,51,52,53,60,61],
      [26,27,28,46,47],
      [24,25],
      [22,23],
      [19,20,21,44,45],
      [17,18,38,39,40,41,42,43,56,57,58,59],
      [14,15,16,36,37],
      [11,12,13,34,35],
      [9,10,26,27,28,29,30,31,32,33,46,47,48,49,50,51,52,53,54,55,60,61],
      [6,7,8,22,23,24,25],
      [4,5,14,15,16,17,18,19,20,21,36,37,38,39,40,41,42,43,44,45,56,57,58,59]];

   var polytoperoot = [[0,-1.47907783278719,-0.914120372669018],
      [-0.37563003717171,-0.76103679163906,0.137435563417103],
      [-0.718367223886052,0.343371069565081,-0.0620093495153804]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.928907, 0, 0));
   allpoints.push(new PMPoint(0.965948, 0.469467, 0));
   allpoints.push(new PMPoint(0.573921, 0.730399, 0));
   allpoints.push(new PMPoint(0.573921, -0.730399, 0));
   allpoints.push(new PMPoint(0.965948, -0.469467, 0));
   allpoints.push(new PMPoint(1.94442, 0.27463, 0));
   allpoints.push(new PMPoint(2.01263, 0.573483, 0));
   allpoints.push(new PMPoint(1.78277, 0.776286, 0));
   allpoints.push(new PMPoint(0.227665, 1.04958, 0));
   allpoints.push(new PMPoint(-0.219718, 0.902547, 0));
   allpoints.push(new PMPoint(1.71187, 0.922167, 0));
   allpoints.push(new PMPoint(1.69443, 1.22821, 0));
   allpoints.push(new PMPoint(1.41729, 1.35921, 0));
   allpoints.push(new PMPoint(1.78277, -0.776286, 0));
   allpoints.push(new PMPoint(2.01263, -0.573483, 0));
   allpoints.push(new PMPoint(1.94442, -0.27463, 0));
   allpoints.push(new PMPoint(-0.219718, -0.902547, 0));
   allpoints.push(new PMPoint(0.227665, -1.04958, 0));
   allpoints.push(new PMPoint(1.41729, -1.35921, 0));
   allpoints.push(new PMPoint(1.69443, -1.22821, 0));
   allpoints.push(new PMPoint(1.71187, -0.922167, 0));
   allpoints.push(new PMPoint(2.18827, 0.0888788, 0));
   allpoints.push(new PMPoint(4.17704, 1.08379, 0));
   allpoints.push(new PMPoint(4.0678, 1.42282, 0));
   allpoints.push(new PMPoint(1.8723, 1.06946, 0));
   allpoints.push(new PMPoint(0.985407, 1.69857, 0));
   allpoints.push(new PMPoint(0.792568, 1.93686, 0));
   allpoints.push(new PMPoint(0.491083, 1.88142, 0));
   allpoints.push(new PMPoint(-0.684625, 0.827493, 0));
   allpoints.push(new PMPoint(-0.845425, 0.38487, 0));
   allpoints.push(new PMPoint(0.332571, 1.9158, 0));
   allpoints.push(new PMPoint(0.0811519, 2.09117, 0));
   allpoints.push(new PMPoint(-0.193084, 1.9542, 0));
   allpoints.push(new PMPoint(3.43295, 2.61479, 0));
   allpoints.push(new PMPoint(1.4219, 1.66572, 0));
   allpoints.push(new PMPoint(1.8723, -1.06946, 0));
   allpoints.push(new PMPoint(4.0678, -1.42282, 0));
   allpoints.push(new PMPoint(0.491083, -1.88142, 0));
   allpoints.push(new PMPoint(0.792568, -1.93686, 0));
   allpoints.push(new PMPoint(0.985407, -1.69857, 0));
   allpoints.push(new PMPoint(-0.193084, -1.9542, 0));
   allpoints.push(new PMPoint(0.0811519, -2.09117, 0));
   allpoints.push(new PMPoint(0.332571, -1.9158, 0));
   allpoints.push(new PMPoint(1.4219, -1.66572, 0));
   allpoints.push(new PMPoint(3.43295, -2.61479, 0));
   allpoints.push(new PMPoint(1.39451, 4.07759, 0));
   allpoints.push(new PMPoint(0.315876, 2.13295, 0));
   allpoints.push(new PMPoint(-0.726757, 1.82428, 0));
   allpoints.push(new PMPoint(-1.03327, 1.81987, 0));
   allpoints.push(new PMPoint(-1.17594, 1.54856, 0));
   allpoints.push(new PMPoint(-1.30091, 1.44517, 0));
   allpoints.push(new PMPoint(-1.59415, 1.35583, 0));
   allpoints.push(new PMPoint(-1.65588, 1.05557, 0));
   allpoints.push(new PMPoint(0.0650206, 4.31487, 0));
   allpoints.push(new PMPoint(-0.431244, 2.14719, 0));
   allpoints.push(new PMPoint(0.315876, -2.13295, 0));
   allpoints.push(new PMPoint(1.39451, -4.07759, 0));
   allpoints.push(new PMPoint(-0.431244, -2.14719, 0));
   allpoints.push(new PMPoint(0.0650206, -4.31487, 0));
   allpoints.push(new PMPoint(-2.34462, 3.61582, 0));
   allpoints.push(new PMPoint(-1.48198, 1.56621, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(16, 1, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(16, 5, 14, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(16, 14, 15, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(3, 2, 11, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(0, 18, 4, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(3, 26, 27, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 27, 28, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 28, 9, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(21, 5, 4, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(21, 4, 19, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(21, 19, 20, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(0, 10, 29, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(0, 29, 30, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(40, 4, 18, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(40, 18, 38, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(40, 38, 39, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(10, 9, 31, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(10, 32, 33, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(10, 48, 49, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(10, 49, 50, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(10, 50, 29, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(17, 41, 42, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(17, 42, 43, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(17, 43, 18, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(30, 29, 51, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(30, 51, 52, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(30, 52, 53, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(7, 6, 22, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(7, 22, 23, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(15, 14, 36, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(15, 36, 37, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(8, 7, 24, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(8, 24, 25, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(13, 12, 34, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 34, 35, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(20, 19, 44, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(20, 44, 45, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(39, 38, 56, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(39, 56, 57, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(27, 46, 47, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(27, 47, 28, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(33, 32, 54, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(33, 54, 55, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(41, 58, 59, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(41, 59, 42, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(49, 60, 61, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(49, 61, 50, undefined, undefined, 24));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
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
