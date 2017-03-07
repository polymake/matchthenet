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

   var axes = [[25,24],
      [24,23],
      [19,18],
      [17,16],
      [12,11],
      [8,7],
      [7,6],
      [9,8],
      [4,3],
      [5,4],
      [3,2],
      [0,5],
      [2,1],
      [1,0]];

   var angles = [2.6857272487756,
      2.57089617542507,
      1.96014269320638,
      1.95176209508191,
      2.33667464103273,
      1.7442227471046,
      2.35063890565613,
      1.13036840758253,
      1.58562269728262,
      1.4829759680556,
      2.27714932954524,
      1.93144462597173,
      2.11602537098261,
      1.92571145891793];

   var subtrees = [[49],
      [46,47,48],
      [42,43,44,45],
      [39,40,41],
      [37,38],
      [34,35,36],
      [32,33],
      [27,28,29,30,31],
      [22,23,24,25,26,46,47,48,49],
      [18,19,20,21,42,43,44,45],
      [15,16,17,39,40,41],
      [13,14],
      [10,11,12,37,38],
      [6,7,8,9,27,28,29,30,31,32,33,34,35,36]];

   var polytoperoot = [[-0.614167649544642,0.261036170153453,-0.474578025823042],
      [-0.50086063077413,0.862323553352269,-0.984643073259468],
      [0.416608223876349,-0.00955816798767223,-0.220287835328029]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.336344, 0, 0));
   allpoints.push(new PMPoint(0.650801, 0.400306, 0));
   allpoints.push(new PMPoint(0.227866, 1.23807, 0));
   allpoints.push(new PMPoint(-0.894272, 1.22669, 0));
   allpoints.push(new PMPoint(-0.801059, 0.992138, 0));
   allpoints.push(new PMPoint(-0.0820181, -0.471541, 0));
   allpoints.push(new PMPoint(0.170547, -1.39752, 0));
   allpoints.push(new PMPoint(0.515065, -1.851, 0));
   allpoints.push(new PMPoint(0.949992, -1.36284, 0));
   allpoints.push(new PMPoint(1.51578, -0.918054, 0));
   allpoints.push(new PMPoint(1.52727, -0.735185, 0));
   allpoints.push(new PMPoint(1.02836, 0.341991, 0));
   allpoints.push(new PMPoint(-0.727517, -0.156505, 0));
   allpoints.push(new PMPoint(-0.319944, -0.355969, 0));
   allpoints.push(new PMPoint(1.01955, 0.500173, 0));
   allpoints.push(new PMPoint(1.16391, 1.19772, 0));
   allpoints.push(new PMPoint(1.08393, 1.38481, 0));
   allpoints.push(new PMPoint(-1.37628, 1.02502, 0));
   allpoints.push(new PMPoint(-1.60182, 0.313033, 0));
   allpoints.push(new PMPoint(-1.24655, -0.331396, 0));
   allpoints.push(new PMPoint(-1.02379, -0.1371, 0));
   allpoints.push(new PMPoint(0.817494, 1.87582, 0));
   allpoints.push(new PMPoint(0.806509, 1.89459, 0));
   allpoints.push(new PMPoint(0.36881, 2.08409, 0));
   allpoints.push(new PMPoint(-0.302348, 2.12504, 0));
   allpoints.push(new PMPoint(-0.853419, 1.74759, 0));
   allpoints.push(new PMPoint(1.13396, -2.49549, 0));
   allpoints.push(new PMPoint(1.91792, -2.53558, 0));
   allpoints.push(new PMPoint(2.19269, -2.20654, 0));
   allpoints.push(new PMPoint(1.80797, -1.59044, 0));
   allpoints.push(new PMPoint(1.13223, -1.34378, 0));
   allpoints.push(new PMPoint(-0.522913, -0.578842, 0));
   allpoints.push(new PMPoint(-0.471671, -0.869955, 0));
   allpoints.push(new PMPoint(-0.562646, -1.00612, 0));
   allpoints.push(new PMPoint(-1.27351, -1.19631, 0));
   allpoints.push(new PMPoint(-0.353735, -2.05975, 0));
   allpoints.push(new PMPoint(1.68465, -0.0332608, 0));
   allpoints.push(new PMPoint(1.59978, 0.767293, 0));
   allpoints.push(new PMPoint(1.8729, 0.816383, 0));
   allpoints.push(new PMPoint(1.7425, 1.53094, 0));
   allpoints.push(new PMPoint(1.1011, 1.39815, 0));
   allpoints.push(new PMPoint(-2.00108, 0.788858, 0));
   allpoints.push(new PMPoint(-2.49799, 0.329471, 0));
   allpoints.push(new PMPoint(-2.64818, 0.10537, 0));
   allpoints.push(new PMPoint(-2.4213, -0.646115, 0));
   allpoints.push(new PMPoint(0.623791, 2.52359, 0));
   allpoints.push(new PMPoint(0.342018, 2.84665, 0));
   allpoints.push(new PMPoint(0.181486, 2.62984, 0));
   allpoints.push(new PMPoint(0.157892, 2.62116, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
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

   faces.faces.push(new THREE.Face3(31, 9, 8, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(31, 8, 27, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(31, 27, 28, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(31, 28, 29, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(31, 29, 30, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(32, 33, 7, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(32, 7, 6, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(24, 23, 46, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(24, 47, 48, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(18, 42, 43, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 43, 44, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 44, 45, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 45, 19, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(9, 0, 6, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(2, 1, 10, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(0, 5, 13, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(12, 11, 37, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(12, 37, 38, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(3, 2, 15, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(25, 24, 49, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(5, 4, 18, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(5, 18, 19, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(5, 19, 20, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(5, 20, 21, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(17, 16, 39, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(17, 39, 40, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(17, 40, 41, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(34, 35, 36, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 36, 8, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 8, 7, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(4, 3, 22, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 24, 25, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(4, 25, 26, undefined, undefined, 14));


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
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[4].vector);
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
