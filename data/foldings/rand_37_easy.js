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

   var axes = [[34,33],
      [19,18],
      [22,21],
      [21,20],
      [20,19],
      [15,14],
      [10,9],
      [9,8],
      [6,5],
      [7,6],
      [2,1],
      [0,4],
      [3,2],
      [4,3],
      [1,0]];

   var angles = [1.90489618207747,
      1.99938360028056,
      2.13303459657764,
      2.21541710909114,
      2.31687845950509,
      1.92910791476829,
      2.72371656104259,
      2.74638392654246,
      2.47674218092765,
      2.72614306590044,
      1.27701856901107,
      1.75028909803568,
      1.42128052373705,
      1.3409799323297,
      2.18938729535497];

   var subtrees = [[52,53],
      [48,49,50,51],
      [45,46,47],
      [41,42,43,44],
      [40],
      [36,37,38,39],
      [32,33,34,35,52,53],
      [29,30,31],
      [26,27,28],
      [24,25],
      [17,18,19,20,21,22,23,40,41,42,43,44,45,46,47,48,49,50,51],
      [13,14,15,16,36,37,38,39],
      [11,12],
      [8,9,10,29,30,31,32,33,34,35,52,53],
      [5,6,7,24,25,26,27,28]];

   var polytoperoot = [[-0.199398790801941,-1.1211312467124,0.576622554716143],
      [0.214094398484492,-0.992154151833453,-0.120780667407157],
      [1.58940738441051,0.294939339400135,0.394582417951547]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.62794, 0, 0));
   allpoints.push(new PMPoint(1.75337, 0.490719, 0));
   allpoints.push(new PMPoint(0.944911, 1.28799, 0));
   allpoints.push(new PMPoint(0.108335, 1.81593, 0));
   allpoints.push(new PMPoint(-0.102899, -0.563272, 0));
   allpoints.push(new PMPoint(-0.0196126, -0.576785, 0));
   allpoints.push(new PMPoint(1.39513, -0.57825, 0));
   allpoints.push(new PMPoint(1.86677, 2.01376, 0));
   allpoints.push(new PMPoint(1.76111, 2.11551, 0));
   allpoints.push(new PMPoint(0.529011, 2.61063, 0));
   allpoints.push(new PMPoint(2.361, 1.54076, 0));
   allpoints.push(new PMPoint(2.02063, 1.75637, 0));
   allpoints.push(new PMPoint(-0.786037, 1.7231, 0));
   allpoints.push(new PMPoint(-1.17549, 1.4762, 0));
   allpoints.push(new PMPoint(-1.10825, -0.23768, 0));
   allpoints.push(new PMPoint(-0.485343, -0.303819, 0));
   allpoints.push(new PMPoint(2.01006, -0.492502, 0));
   allpoints.push(new PMPoint(2.23082, -0.619138, 0));
   allpoints.push(new PMPoint(2.33445, -0.623595, 0));
   allpoints.push(new PMPoint(2.99319, -0.413278, 0));
   allpoints.push(new PMPoint(3.03973, -0.383603, 0));
   allpoints.push(new PMPoint(3.15957, -0.0441793, 0));
   allpoints.push(new PMPoint(2.92937, 0.192658, 0));
   allpoints.push(new PMPoint(0.835595, -0.928199, 0));
   allpoints.push(new PMPoint(1.30946, -0.817901, 0));
   allpoints.push(new PMPoint(-0.234033, -1.1758, 0));
   allpoints.push(new PMPoint(0.168112, -1.43269, 0));
   allpoints.push(new PMPoint(0.827804, -0.946593, 0));
   allpoints.push(new PMPoint(2.2558, 1.90895, 0));
   allpoints.push(new PMPoint(2.41519, 2.19822, 0));
   allpoints.push(new PMPoint(2.13521, 2.52866, 0));
   allpoints.push(new PMPoint(2.12238, 2.53992, 0));
   allpoints.push(new PMPoint(1.95099, 2.77588, 0));
   allpoints.push(new PMPoint(1.45532, 2.87606, 0));
   allpoints.push(new PMPoint(0.827468, 2.96214, 0));
   allpoints.push(new PMPoint(-1.67775, 1.08976, 0));
   allpoints.push(new PMPoint(-1.76939, -0.159995, 0));
   allpoints.push(new PMPoint(-1.73426, -0.198656, 0));
   allpoints.push(new PMPoint(-1.58537, -0.246276, 0));
   allpoints.push(new PMPoint(2.94794, -0.993905, 0));
   allpoints.push(new PMPoint(3.00156, -0.995606, 0));
   allpoints.push(new PMPoint(3.31099, -1.30482, 0));
   allpoints.push(new PMPoint(3.32866, -1.25565, 0));
   allpoints.push(new PMPoint(3.42218, -0.922969, 0));
   allpoints.push(new PMPoint(3.55518, -0.797721, 0));
   allpoints.push(new PMPoint(3.87105, -0.165809, 0));
   allpoints.push(new PMPoint(3.5907, -0.0854945, 0));
   allpoints.push(new PMPoint(2.41286, -1.07032, 0));
   allpoints.push(new PMPoint(3.02904, -1.61052, 0));
   allpoints.push(new PMPoint(3.09268, -1.46774, 0));
   allpoints.push(new PMPoint(2.88431, -1.08311, 0));
   allpoints.push(new PMPoint(2.4237, 3.30089, 0));
   allpoints.push(new PMPoint(2.44409, 3.64586, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(4, 3, 8, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(4, 8, 9, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(52, 53, 34, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 34, 33, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(20, 19, 40, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(21, 20, 41, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 41, 42, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 42, 43, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(21, 43, 44, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(3, 2, 11, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(22, 21, 45, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(22, 45, 46, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(22, 46, 47, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(29, 30, 31, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(29, 31, 9, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(29, 9, 8, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(10, 9, 32, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(10, 32, 33, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(10, 33, 34, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(10, 34, 35, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(0, 4, 13, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(15, 14, 36, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(15, 36, 37, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(15, 37, 38, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(15, 38, 39, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(19, 18, 48, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(19, 48, 49, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(19, 49, 50, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(19, 50, 51, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(25, 7, 6, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(25, 6, 24, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(5, 26, 27, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(5, 27, 28, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(5, 28, 6, undefined, undefined, 15));


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
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[15].vector);
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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[6].vector);
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
