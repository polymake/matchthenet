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

   var axes = [[32,31],
      [29,28],
      [25,24],
      [26,25],
      [20,19],
      [14,13],
      [15,14],
      [7,6],
      [8,7],
      [6,5],
      [5,4],
      [3,2],
      [2,1],
      [0,3],
      [1,0]];

   var angles = [2.34618937609313,
      2.60297214227153,
      2.66294806403675,
      2.55736102818121,
      2.32687903855421,
      2.43926392149729,
      1.37787519492333,
      2.16883069016098,
      1.72872922277646,
      2.64308650237334,
      1.3124356367502,
      2.47785755861169,
      2.57660203996596,
      2.42541173787102,
      2.29696831857358];

   var subtrees = [[51,52,53],
      [47,48,49,50],
      [45,46],
      [42,43,44],
      [39,40,41],
      [36,37,38],
      [31,32,33,34,35,51,52,53],
      [28,29,30,47,48,49,50],
      [24,25,26,27,42,43,44,45,46],
      [21,22,23],
      [18,19,20,39,40,41],
      [16,17],
      [12,13,14,15,31,32,33,34,35,36,37,38,51,52,53],
      [9,10,11],
      [4,5,6,7,8,18,19,20,21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,49,50]];

   var polytoperoot = [[-0.293293971147461,0.644859740220135,0.486303375672141],
      [0.36274946494435,1.73578996397538,-0.0266270702374642],
      [-0.252171791598264,0.0284447259149523,-1.58113950688753]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.902952, 0, 0));
   allpoints.push(new PMPoint(0.551121, 0.751879, 0));
   allpoints.push(new PMPoint(0.24551, 0.447602, 0));
   allpoints.push(new PMPoint(-0.598353, -0.445177, 0));
   allpoints.push(new PMPoint(-0.296424, -1.02072, 0));
   allpoints.push(new PMPoint(1.00692, -0.345888, 0));
   allpoints.push(new PMPoint(1.12239, -0.148794, 0));
   allpoints.push(new PMPoint(1.11688, -0.13263, 0));
   allpoints.push(new PMPoint(-0.526817, 1.40314, 0));
   allpoints.push(new PMPoint(-0.756143, 1.36703, 0));
   allpoints.push(new PMPoint(-0.707571, -0.235698, 0));
   allpoints.push(new PMPoint(1.14295, -0.0758678, 0));
   allpoints.push(new PMPoint(1.18446, 0.55912, 0));
   allpoints.push(new PMPoint(0.850866, 1.49632, 0));
   allpoints.push(new PMPoint(0.811091, 1.50553, 0));
   allpoints.push(new PMPoint(0.660751, 1.54153, 0));
   allpoints.push(new PMPoint(-0.463413, 1.45109, 0));
   allpoints.push(new PMPoint(-2.17494, -0.737527, 0));
   allpoints.push(new PMPoint(-1.89111, -1.62393, 0));
   allpoints.push(new PMPoint(-0.319729, -1.81487, 0));
   allpoints.push(new PMPoint(0.157468, -1.67279, 0));
   allpoints.push(new PMPoint(0.304644, -1.69149, 0));
   allpoints.push(new PMPoint(0.854669, -1.15766, 0));
   allpoints.push(new PMPoint(1.62051, -0.312027, 0));
   allpoints.push(new PMPoint(1.98064, -0.0180196, 0));
   allpoints.push(new PMPoint(1.98625, -0.00419226, 0));
   allpoints.push(new PMPoint(1.57455, 0.30949, 0));
   allpoints.push(new PMPoint(0.960218, -1.17049, 0));
   allpoints.push(new PMPoint(1.52309, -0.947677, 0));
   allpoints.push(new PMPoint(1.47518, -0.536483, 0));
   allpoints.push(new PMPoint(1.37918, 1.69557, 0));
   allpoints.push(new PMPoint(1.9025, 2.70004, 0));
   allpoints.push(new PMPoint(1.24964, 3.05712, 0));
   allpoints.push(new PMPoint(0.359398, 2.78555, 0));
   allpoints.push(new PMPoint(0.406352, 2.5582, 0));
   allpoints.push(new PMPoint(1.69362, 0.652158, 0));
   allpoints.push(new PMPoint(1.67982, 1.00994, 0));
   allpoints.push(new PMPoint(1.40111, 1.36965, 0));
   allpoints.push(new PMPoint(-1.81841, -2.3645, 0));
   allpoints.push(new PMPoint(-1.3934, -2.67718, 0));
   allpoints.push(new PMPoint(-0.352659, -1.95953, 0));
   allpoints.push(new PMPoint(2.33128, -0.552057, 0));
   allpoints.push(new PMPoint(2.54917, -0.571756, 0));
   allpoints.push(new PMPoint(2.25966, 0.226998, 0));
   allpoints.push(new PMPoint(1.92259, -0.59509, 0));
   allpoints.push(new PMPoint(2.29522, -0.574058, 0));
   allpoints.push(new PMPoint(0.584136, -1.83837, 0));
   allpoints.push(new PMPoint(1.84214, -1.71357, 0));
   allpoints.push(new PMPoint(1.85986, -1.4264, 0));
   allpoints.push(new PMPoint(1.77146, -1.22628, 0));
   allpoints.push(new PMPoint(1.83392, 1.71239, 0));
   allpoints.push(new PMPoint(2.4429, 2.30481, 0));
   allpoints.push(new PMPoint(2.41885, 2.59152, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(4, 20, 5, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(19, 40, 41, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(19, 41, 20, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(26, 25, 42, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(26, 42, 43, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(26, 43, 44, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(15, 14, 31, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 31, 32, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 32, 33, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 33, 34, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 34, 35, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(14, 13, 36, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 36, 37, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(8, 0, 4, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(8, 4, 5, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(8, 5, 6, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(6, 5, 21, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(6, 21, 22, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(6, 22, 23, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(2, 1, 12, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(27, 8, 7, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(27, 7, 24, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(27, 24, 25, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(27, 25, 26, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(28, 47, 48, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(28, 48, 49, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(28, 49, 50, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(28, 50, 29, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(3, 2, 16, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(31, 51, 52, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(31, 52, 53, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(31, 53, 32, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(7, 6, 28, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(7, 29, 30, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(25, 24, 45, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(25, 45, 46, undefined, undefined, 15));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[25].vector);
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
