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

   var axes = [[18,17],
      [21,20],
      [19,18],
      [17,16],
      [20,19],
      [10,9],
      [11,10],
      [12,11],
      [8,7],
      [7,6],
      [0,5],
      [2,1],
      [5,4],
      [4,3],
      [3,2],
      [1,0]];

   var angles = [2.4129786614889,
      2.25803266424417,
      1.99085635421187,
      2.49754003893402,
      2.34864231242021,
      1.85176532925268,
      2.31635942245741,
      2.22737437185533,
      1.88454891408207,
      2.14395321583502,
      1.91617893164251,
      1.39398543451649,
      0.946714580877346,
      1.50994297235723,
      1.31831016055926,
      2.29094501901775];

   var subtrees = [[56,57],
      [54,55],
      [51,52,53],
      [49,50],
      [46,47,48],
      [41,42,43,44,45],
      [37,38,39,40],
      [34,35,36],
      [32,33],
      [28,29,30,31],
      [25,26,27],
      [22,23,24],
      [15,16,17,18,19,20,21,46,47,48,49,50,51,52,53,54,55,56,57],
      [13,14],
      [9,10,11,12,34,35,36,37,38,39,40,41,42,43,44,45],
      [6,7,8,28,29,30,31,32,33]];

   var polytoperoot = [[1.13413786612538,-0.816018049752969,-0.0874443869890025],
      [0.401426546322465,-0.637305913392627,-0.282165907437585],
      [-0.181834714298956,0.295036777591142,-0.925065564299046]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.2282, 0, 0));
   allpoints.push(new PMPoint(1.44448, 0.661468, 0));
   allpoints.push(new PMPoint(0.995925, 1.0671, 0));
   allpoints.push(new PMPoint(-0.862156, 0.970815, 0));
   allpoints.push(new PMPoint(-1.03394, 0.591064, 0));
   allpoints.push(new PMPoint(0.463882, -0.762126, 0));
   allpoints.push(new PMPoint(1.03741, -0.427166, 0));
   allpoints.push(new PMPoint(1.1058, -0.342892, 0));
   allpoints.push(new PMPoint(2.37107, 1.86217, 0));
   allpoints.push(new PMPoint(2.33033, 1.96977, 0));
   allpoints.push(new PMPoint(1.77765, 2.20937, 0));
   allpoints.push(new PMPoint(1.6755, 2.1251, 0));
   allpoints.push(new PMPoint(0.569516, 2.25004, 0));
   allpoints.push(new PMPoint(-0.730606, 1.1594, 0));
   allpoints.push(new PMPoint(-1.04294, 1.11289, 0));
   allpoints.push(new PMPoint(-1.69764, 1.54218, 0));
   allpoints.push(new PMPoint(-2.45377, 1.8768, 0));
   allpoints.push(new PMPoint(-2.83871, 1.59954, 0));
   allpoints.push(new PMPoint(-2.84221, 1.59023, 0));
   allpoints.push(new PMPoint(-2.10335, 1.08755, 0));
   allpoints.push(new PMPoint(-1.24733, 0.610171, 0));
   allpoints.push(new PMPoint(1.39845, -0.321823, 0));
   allpoints.push(new PMPoint(2.5902, -0.426041, 0));
   allpoints.push(new PMPoint(2.76584, -0.0830184, 0));
   allpoints.push(new PMPoint(-1.01257, 0.377882, 0));
   allpoints.push(new PMPoint(-0.150744, -1.15216, 0));
   allpoints.push(new PMPoint(0.264014, -0.852244, 0));
   allpoints.push(new PMPoint(0.275004, -1.23784, 0));
   allpoints.push(new PMPoint(0.527003, -1.6547, 0));
   allpoints.push(new PMPoint(0.5841, -1.73, 0));
   allpoints.push(new PMPoint(0.970259, -1.56917, 0));
   allpoints.push(new PMPoint(1.20201, -1.55924, 0));
   allpoints.push(new PMPoint(1.55869, -1.45016, 0));
   allpoints.push(new PMPoint(1.75884, 2.29408, 0));
   allpoints.push(new PMPoint(0.849905, 2.65367, 0));
   allpoints.push(new PMPoint(0.0671174, 2.66633, 0));
   allpoints.push(new PMPoint(2.34647, 2.23674, 0));
   allpoints.push(new PMPoint(2.29905, 2.43197, 0));
   allpoints.push(new PMPoint(1.89165, 2.48714, 0));
   allpoints.push(new PMPoint(1.78867, 2.29544, 0));
   allpoints.push(new PMPoint(2.75644, 1.86523, 0));
   allpoints.push(new PMPoint(3.08667, 2.03861, 0));
   allpoints.push(new PMPoint(3.32, 2.38581, 0));
   allpoints.push(new PMPoint(3.24424, 2.43711, 0));
   allpoints.push(new PMPoint(2.44423, 2.21176, 0));
   allpoints.push(new PMPoint(-3.22642, 1.18021, 0));
   allpoints.push(new PMPoint(-3.27367, 1.10186, 0));
   allpoints.push(new PMPoint(-3.2307, 1.0177, 0));
   allpoints.push(new PMPoint(-2.30867, 2.30514, 0));
   allpoints.push(new PMPoint(-2.42554, 2.12158, 0));
   allpoints.push(new PMPoint(-2.99307, 2.06123, 0));
   allpoints.push(new PMPoint(-3.13505, 2.20338, 0));
   allpoints.push(new PMPoint(-3.37345, 1.40716, 0));
   allpoints.push(new PMPoint(-3.22817, 0.984703, 0));
   allpoints.push(new PMPoint(-3.00248, 0.553031, 0));
   allpoints.push(new PMPoint(-2.47609, 2.12219, 0));
   allpoints.push(new PMPoint(-2.88544, 2.0841, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(8, 0, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(20, 19, 46, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(6, 28, 29, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(6, 29, 30, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(6, 30, 31, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(6, 31, 7, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(17, 16, 49, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(17, 49, 50, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(4, 3, 13, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(12, 11, 34, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(12, 34, 35, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(19, 18, 51, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(19, 51, 52, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(19, 52, 53, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(11, 10, 37, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(11, 37, 38, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(11, 38, 39, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(11, 39, 40, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(5, 4, 15, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 15, 16, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 16, 17, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 17, 18, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 18, 19, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 19, 20, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 20, 21, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(21, 20, 54, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(21, 54, 55, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(2, 1, 22, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(9, 41, 42, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(9, 42, 43, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(9, 43, 44, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(9, 44, 45, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(9, 45, 10, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(18, 17, 56, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(18, 56, 57, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(0, 5, 25, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(0, 25, 26, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(0, 26, 27, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(33, 8, 7, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(33, 7, 32, undefined, undefined, 16));


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
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
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
