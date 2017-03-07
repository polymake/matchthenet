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

   var axes = [[35,34],
      [29,28],
      [14,13],
      [13,12],
      [11,10],
      [8,7],
      [7,6],
      [6,5],
      [9,8],
      [0,4],
      [2,1],
      [3,2],
      [4,3],
      [1,0]];

   var angles = [2.71365903838622,
      2.42541141473077,
      1.37238626308964,
      1.36894544184187,
      2.57043743280152,
      2.19799751328833,
      1.74794847842585,
      1.58993069842687,
      2.07924360107338,
      2.08935687530181,
      1.11583463843319,
      2.2177951111208,
      2.35143086066025,
      0.962003697418373];

   var subtrees = [[48,49],
      [44,45,46,47],
      [41,42,43],
      [38,39,40],
      [34,35,36,37,48,49],
      [30,31,32,33],
      [28,29,44,45,46,47],
      [25,26,27],
      [23,24],
      [20,21,22],
      [17,18,19],
      [12,13,14,15,16,38,39,40,41,42,43],
      [10,11,34,35,36,37,48,49],
      [5,6,7,8,9,23,24,25,26,27,28,29,30,31,32,33,44,45,46,47]];

   var polytoperoot = [[-1.0426595068017,-0.422539076675,-1.39639013935452],
      [-0.0012566764420341,-1.05304461209319,-0.396549073688866],
      [1.38544857349794,-0.439395200461962,1.16243289526325]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.65399, 0, 0));
   allpoints.push(new PMPoint(1.23167, 1.40415, 0));
   allpoints.push(new PMPoint(0.0878808, 1.6899, 0));
   allpoints.push(new PMPoint(-0.362312, 1.42271, 0));
   allpoints.push(new PMPoint(-0.112724, -0.179296, 0));
   allpoints.push(new PMPoint(-0.436819, -0.824461, 0));
   allpoints.push(new PMPoint(-0.648415, -1.83233, 0));
   allpoints.push(new PMPoint(0.315709, -1.70431, 0));
   allpoints.push(new PMPoint(0.767787, -1.49934, 0));
   allpoints.push(new PMPoint(-0.264709, 2.36133, 0));
   allpoints.push(new PMPoint(-0.64067, 1.72278, 0));
   allpoints.push(new PMPoint(0.528803, 2.90543, 0));
   allpoints.push(new PMPoint(0.240641, 2.93963, 0));
   allpoints.push(new PMPoint(0.171504, 2.94015, 0));
   allpoints.push(new PMPoint(0.0386725, 2.77323, 0));
   allpoints.push(new PMPoint(-0.0852635, 2.42825, 0));
   allpoints.push(new PMPoint(2.65521, 1.42511, 0));
   allpoints.push(new PMPoint(2.42733, 2.45604, 0));
   allpoints.push(new PMPoint(1.97974, 2.88343, 0));
   allpoints.push(new PMPoint(-0.740141, 1.5801, 0));
   allpoints.push(new PMPoint(-1.02013, 1.49694, 0));
   allpoints.push(new PMPoint(-0.195496, 0.0814563, 0));
   allpoints.push(new PMPoint(0.253745, -2.33425, 0));
   allpoints.push(new PMPoint(0.620283, -2.5448, 0));
   allpoints.push(new PMPoint(-1.57986, -0.908079, 0));
   allpoints.push(new PMPoint(-1.57851, -0.9192, 0));
   allpoints.push(new PMPoint(-1.56539, -0.931984, 0));
   allpoints.push(new PMPoint(-1.51006, -1.18969, 0));
   allpoints.push(new PMPoint(-0.79434, -1.90813, 0));
   allpoints.push(new PMPoint(-0.68335, -1.99301, 0));
   allpoints.push(new PMPoint(-0.651944, -2.05563, 0));
   allpoints.push(new PMPoint(-0.0805582, -2.27433, 0));
   allpoints.push(new PMPoint(0.169747, -2.32023, 0));
   allpoints.push(new PMPoint(-0.290054, 2.72702, 0));
   allpoints.push(new PMPoint(-0.851582, 2.15637, 0));
   allpoints.push(new PMPoint(-0.9143, 1.85315, 0));
   allpoints.push(new PMPoint(-0.905187, 1.84663, 0));
   allpoints.push(new PMPoint(0.744555, 3.48548, 0));
   allpoints.push(new PMPoint(0.558659, 3.86512, 0));
   allpoints.push(new PMPoint(0.344559, 4.00267, 0));
   allpoints.push(new PMPoint(0.203071, 4.00707, 0));
   allpoints.push(new PMPoint(-0.302571, 4.35151, 0));
   allpoints.push(new PMPoint(-0.23584, 3.79992, 0));
   allpoints.push(new PMPoint(-1.52667, -1.18197, 0));
   allpoints.push(new PMPoint(-1.65449, -1.46401, 0));
   allpoints.push(new PMPoint(-1.4127, -1.96001, 0));
   allpoints.push(new PMPoint(-0.857511, -1.93842, 0));
   allpoints.push(new PMPoint(-0.276351, 2.93991, 0));
   allpoints.push(new PMPoint(-1.1681, 2.60837, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
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

   faces.faces.push(new THREE.Face3(24, 9, 8, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(24, 8, 23, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 0, 5, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 5, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(4, 3, 10, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(3, 2, 12, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(5, 25, 26, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 26, 27, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 27, 6, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 6, 28, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(12, 38, 39, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(12, 39, 40, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(12, 40, 13, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(46, 47, 29, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(46, 29, 28, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(46, 28, 44, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(46, 44, 45, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(10, 34, 35, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 35, 36, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 36, 37, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 37, 11, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(8, 7, 30, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(8, 30, 31, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(8, 31, 32, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(8, 32, 33, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(0, 4, 20, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(0, 20, 21, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(34, 48, 49, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 49, 35, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(14, 13, 41, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(14, 41, 42, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(14, 42, 43, undefined, undefined, 14));


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
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[14].vector);
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
