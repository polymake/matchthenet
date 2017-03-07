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

   var axes = [[31,30],
      [32,31],
      [26,25],
      [16,15],
      [17,16],
      [12,11],
      [8,7],
      [7,6],
      [9,8],
      [10,9],
      [2,1],
      [0,4],
      [3,2],
      [4,3],
      [1,0]];

   var angles = [2.65216759024706,
      2.84447112317988,
      2.91828882992981,
      1.41749186406384,
      2.50230153727789,
      1.17582117358985,
      2.2338003055922,
      1.89183708056409,
      2.39051204328182,
      2.22909058995924,
      2.63000216439417,
      1.90620519381902,
      1.35308795487101,
      1.56764731958288,
      1.60116154091584];

   var subtrees = [[51,52,53],
      [50],
      [47,48,49],
      [43,44,45,46],
      [39,40,41,42],
      [37,38],
      [33,34,35,36],
      [28,29,30,31,32,50,51,52,53],
      [25,26,27,47,48,49],
      [23,24],
      [20,21,22],
      [19],
      [15,16,17,18,39,40,41,42,43,44,45,46],
      [11,12,13,14,37,38],
      [5,6,7,8,9,10,23,24,25,26,27,28,29,30,31,32,33,34,35,36,47,48,49,50,51,52,53]];

   var polytoperoot = [[-1.19813133831767,0.0142270083184574,0.476785223849882],
      [-0.532306572991255,0.786719833795616,0.736252144838944],
      [0.0635165152596181,0.136678705719491,-0.100125467338325]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.150559, 0, 0));
   allpoints.push(new PMPoint(0.56071, 1.50089, 0));
   allpoints.push(new PMPoint(-0.961618, 2.26524, 0));
   allpoints.push(new PMPoint(-0.808796, 0.652647, 0));
   allpoints.push(new PMPoint(-0.738325, -1.42754, 0));
   allpoints.push(new PMPoint(-0.736563, -1.71936, 0));
   allpoints.push(new PMPoint(0.442395, -1.18912, 0));
   allpoints.push(new PMPoint(0.55406, -0.977639, 0));
   allpoints.push(new PMPoint(0.562797, -0.522464, 0));
   allpoints.push(new PMPoint(0.381911, -0.125922, 0));
   allpoints.push(new PMPoint(-1.80751, 1.95484, 0));
   allpoints.push(new PMPoint(-2.97502, 0.720871, 0));
   allpoints.push(new PMPoint(-2.45286, -0.21485, 0));
   allpoints.push(new PMPoint(-2.16333, -0.178385, 0));
   allpoints.push(new PMPoint(1.6485, 1.54192, 0));
   allpoints.push(new PMPoint(1.66522, 1.57493, 0));
   allpoints.push(new PMPoint(1.36703, 2.30752, 0));
   allpoints.push(new PMPoint(-0.450302, 3.00716, 0));
   allpoints.push(new PMPoint(-1.37491, -0.832237, 0));
   allpoints.push(new PMPoint(0.413663, -0.0125, 0));
   allpoints.push(new PMPoint(1.4213, 0.847502, 0));
   allpoints.push(new PMPoint(1.49143, 0.936318, 0));
   allpoints.push(new PMPoint(1.01407, -0.600756, 0));
   allpoints.push(new PMPoint(1.69751, -0.281282, 0));
   allpoints.push(new PMPoint(0.992788, -0.869701, 0));
   allpoints.push(new PMPoint(1.01687, -0.786567, 0));
   allpoints.push(new PMPoint(0.998416, -0.663937, 0));
   allpoints.push(new PMPoint(-0.535075, -2.7718, 0));
   allpoints.push(new PMPoint(0.808711, -2.07391, 0));
   allpoints.push(new PMPoint(1.03843, -1.78508, 0));
   allpoints.push(new PMPoint(1.02084, -1.73417, 0));
   allpoints.push(new PMPoint(0.662951, -1.30204, 0));
   allpoints.push(new PMPoint(0.687835, -1.2231, 0));
   allpoints.push(new PMPoint(1.08577, -1.16061, 0));
   allpoints.push(new PMPoint(1.20311, -1.05783, 0));
   allpoints.push(new PMPoint(1.00388, -0.935316, 0));
   allpoints.push(new PMPoint(-3.66239, 2.54783, 0));
   allpoints.push(new PMPoint(-3.79725, 1.99239, 0));
   allpoints.push(new PMPoint(1.78174, 1.78938, 0));
   allpoints.push(new PMPoint(1.80049, 1.83042, 0));
   allpoints.push(new PMPoint(1.80774, 2.53751, 0));
   allpoints.push(new PMPoint(1.58858, 2.83442, 0));
   allpoints.push(new PMPoint(1.75056, 1.49302, 0));
   allpoints.push(new PMPoint(2.50491, 1.4829, 0));
   allpoints.push(new PMPoint(2.52037, 1.60595, 0));
   allpoints.push(new PMPoint(1.8644, 1.71597, 0));
   allpoints.push(new PMPoint(1.21106, -0.953708, 0));
   allpoints.push(new PMPoint(1.65077, -0.756524, 0));
   allpoints.push(new PMPoint(1.67878, -0.721139, 0));
   allpoints.push(new PMPoint(1.05614, -1.38958, 0));
   allpoints.push(new PMPoint(1.67794, -1.48334, 0));
   allpoints.push(new PMPoint(1.21518, -1.3489, 0));
   allpoints.push(new PMPoint(1.06487, -1.39059, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
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

   faces.faces.push(new THREE.Face3(11, 37, 38, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(11, 38, 12, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 0, 5, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 5, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 6, 7, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 8, 9, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(3, 2, 15, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 17, 18, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(24, 10, 9, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(24, 9, 23, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(9, 8, 25, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(9, 25, 26, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(9, 26, 27, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(32, 31, 50, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(17, 16, 39, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(17, 39, 40, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(17, 40, 41, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(17, 41, 42, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(30, 51, 52, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(30, 52, 53, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(30, 53, 31, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(0, 4, 19, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(49, 26, 25, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(49, 25, 47, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(49, 47, 48, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(2, 1, 20, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(15, 43, 44, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 44, 45, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 45, 46, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 46, 16, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(6, 28, 29, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(6, 29, 30, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(6, 30, 31, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(6, 31, 32, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(6, 32, 7, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(8, 7, 33, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(8, 33, 34, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(8, 34, 35, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(8, 35, 36, undefined, undefined, 15));


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
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[8].vector);
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
