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

   var axes = [[37,36],
      [28,27],
      [22,21],
      [23,22],
      [14,13],
      [15,14],
      [11,10],
      [9,8],
      [10,9],
      [6,5],
      [7,6],
      [0,4],
      [4,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.74348695516218,
      2.50599714146009,
      1.96066202980991,
      2.07116950380924,
      3.03094221515051,
      2.46509028255475,
      3.06577167646486,
      2.68568132614645,
      2.81208622139948,
      2.37749111233038,
      1.41908032370824,
      2.02192891994768,
      2.68249045857535,
      1.58657964765322,
      2.32483899626642,
      2.52567943363138];

   var subtrees = [[56,57],
      [53,54,55],
      [47,48,49,50,51,52],
      [45,46],
      [43,44],
      [40,41,42],
      [39],
      [35,36,37,38,56,57],
      [32,33,34],
      [30,31],
      [25,26,27,28,29,53,54,55],
      [21,22,23,24,45,46,47,48,49,50,51,52],
      [17,18,19,20],
      [12,13,14,15,16,40,41,42,43,44],
      [8,9,10,11,32,33,34,35,36,37,38,39,56,57],
      [5,6,7,25,26,27,28,29,30,31,53,54,55]];

   var polytoperoot = [[-0.536154318881496,2.09298636032655,-0.172012194268826],
      [-1.94907926311179,-0.00248732917083632,0.231386611284926],
      [0.416839216222439,-1.111318957078,3.49928827702934]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.8826, 0, 0));
   allpoints.push(new PMPoint(1.90745, 0.0867696, 0));
   allpoints.push(new PMPoint(1.8604, 0.25511, 0));
   allpoints.push(new PMPoint(1.18363, 0.965615, 0));
   allpoints.push(new PMPoint(-0.0420686, -0.029148, 0));
   allpoints.push(new PMPoint(0.28086, -1.33212, 0));
   allpoints.push(new PMPoint(1.77917, -0.461098, 0));
   allpoints.push(new PMPoint(2.28241, 0.825992, 0));
   allpoints.push(new PMPoint(2.17924, 0.920013, 0));
   allpoints.push(new PMPoint(2.12419, 0.912599, 0));
   allpoints.push(new PMPoint(1.88231, 0.352097, 0));
   allpoints.push(new PMPoint(2.03124, -0.448569, 0));
   allpoints.push(new PMPoint(2.43319, -0.130376, 0));
   allpoints.push(new PMPoint(2.62507, 0.636773, 0));
   allpoints.push(new PMPoint(2.52503, 0.672527, 0));
   allpoints.push(new PMPoint(2.49862, 0.667774, 0));
   allpoints.push(new PMPoint(1.87379, 0.353634, 0));
   allpoints.push(new PMPoint(1.93028, 0.93212, 0));
   allpoints.push(new PMPoint(1.56853, 1.42374, 0));
   allpoints.push(new PMPoint(1.54389, 1.42562, 0));
   allpoints.push(new PMPoint(1.39905, 1.50874, 0));
   allpoints.push(new PMPoint(0.877291, 1.43621, 0));
   allpoints.push(new PMPoint(-1.21879, 0.497304, 0));
   allpoints.push(new PMPoint(-0.0487397, -0.0156147, 0));
   allpoints.push(new PMPoint(-0.196978, -3.03351, 0));
   allpoints.push(new PMPoint(2.20191, -2.05148, 0));
   allpoints.push(new PMPoint(2.49112, -1.82663, 0));
   allpoints.push(new PMPoint(2.4083, -1.0151, 0));
   allpoints.push(new PMPoint(2.1761, -0.785542, 0));
   allpoints.push(new PMPoint(-1.13606, -0.688896, 0));
   allpoints.push(new PMPoint(-1.38349, -1.92627, 0));
   allpoints.push(new PMPoint(2.15098, 1.34521, 0));
   allpoints.push(new PMPoint(1.71095, 1.46699, 0));
   allpoints.push(new PMPoint(1.99084, 0.924571, 0));
   allpoints.push(new PMPoint(2.30279, 0.843453, 0));
   allpoints.push(new PMPoint(2.2924, 0.985783, 0));
   allpoints.push(new PMPoint(2.20386, 1.33756, 0));
   allpoints.push(new PMPoint(2.17553, 1.34613, 0));
   allpoints.push(new PMPoint(1.99072, 0.923134, 0));
   allpoints.push(new PMPoint(2.6946, 0.625118, 0));
   allpoints.push(new PMPoint(2.78714, 0.686159, 0));
   allpoints.push(new PMPoint(2.60526, 0.790551, 0));
   allpoints.push(new PMPoint(2.70149, 0.0557252, 0));
   allpoints.push(new PMPoint(2.69409, 0.622437, 0));
   allpoints.push(new PMPoint(0.00163423, 2.3475, 0));
   allpoints.push(new PMPoint(-2.29795, 1.15129, 0));
   allpoints.push(new PMPoint(1.41044, 1.53067, 0));
   allpoints.push(new PMPoint(1.47496, 1.98266, 0));
   allpoints.push(new PMPoint(1.46945, 2.01175, 0));
   allpoints.push(new PMPoint(1.26289, 2.34974, 0));
   allpoints.push(new PMPoint(0.513117, 2.56682, 0));
   allpoints.push(new PMPoint(0.158323, 2.47559, 0));
   allpoints.push(new PMPoint(3.09918, -1.3372, 0));
   allpoints.push(new PMPoint(3.01872, -1.09467, 0));
   allpoints.push(new PMPoint(2.97463, -0.992961, 0));
   allpoints.push(new PMPoint(2.49935, 1.01968, 0));
   allpoints.push(new PMPoint(2.59188, 1.25786, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 7, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(29, 6, 25, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(29, 25, 26, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(29, 26, 27, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(29, 27, 28, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(23, 22, 45, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(23, 45, 46, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(5, 30, 31, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(5, 31, 6, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(21, 47, 48, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 48, 49, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 49, 50, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 50, 51, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 51, 52, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 52, 22, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(10, 9, 32, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(10, 32, 33, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(10, 33, 34, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(2, 1, 12, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(15, 14, 40, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(15, 40, 41, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(15, 41, 42, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(8, 35, 36, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(8, 36, 37, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(8, 37, 38, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(8, 38, 9, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(36, 56, 57, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(36, 57, 37, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(14, 13, 43, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(14, 43, 44, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(11, 10, 39, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(4, 3, 17, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 17, 18, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(28, 27, 53, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(28, 53, 54, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(28, 54, 55, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(0, 4, 21, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(0, 22, 23, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(0, 23, 24, undefined, undefined, 16));


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
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
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
