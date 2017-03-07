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

   var axes = [[30,29],
      [20,19],
      [19,18],
      [14,13],
      [13,12],
      [10,9],
      [12,11],
      [11,10],
      [8,7],
      [7,6],
      [6,5],
      [3,2],
      [0,4],
      [2,1],
      [4,3],
      [1,0]];

   var angles = [1.61053258061164,
      1.9093444285055,
      2.10995017424469,
      2.24235243880905,
      2.82267853172697,
      2.09249944536101,
      2.56536374436945,
      2.05184864862714,
      2.68004810821729,
      2.04501771080353,
      1.67023099174265,
      2.147924435059,
      1.52672297812983,
      2.60351535582564,
      1.30731681991395,
      2.18732828438259];

   var subtrees = [[55,56,57],
      [52,53,54],
      [49,50,51],
      [47,48],
      [44,45,46],
      [43],
      [40,41,42],
      [36,37,38,39],
      [33,34,35],
      [28,29,30,31,32,55,56,57],
      [26,27],
      [22,23,24,25],
      [17,18,19,20,21,49,50,51,52,53,54],
      [15,16],
      [9,10,11,12,13,14,36,37,38,39,40,41,42,43,44,45,46,47,48],
      [5,6,7,8,26,27,28,29,30,31,32,33,34,35,55,56,57]];

   var polytoperoot = [[0.72609174112167,0.84248458033862,0.811100156362022],
      [0.935143856819925,0.705545097907514,-0.337086726927177],
      [-0.579926946691761,0.589414671880261,-0.375145264175804]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.744882, 0, 0));
   allpoints.push(new PMPoint(1.46859, 0.416228, 0));
   allpoints.push(new PMPoint(0.978308, 1.50103, 0));
   allpoints.push(new PMPoint(0.641286, 1.63752, 0));
   allpoints.push(new PMPoint(-0.123552, -0.657906, 0));
   allpoints.push(new PMPoint(1.00752, -1.14886, 0));
   allpoints.push(new PMPoint(1.11603, -1.0223, 0));
   allpoints.push(new PMPoint(1.22867, -0.278572, 0));
   allpoints.push(new PMPoint(1.68964, 1.73401, 0));
   allpoints.push(new PMPoint(2.10052, 1.92677, 0));
   allpoints.push(new PMPoint(2.22895, 2.09776, 0));
   allpoints.push(new PMPoint(1.92938, 2.41055, 0));
   allpoints.push(new PMPoint(1.22831, 2.27829, 0));
   allpoints.push(new PMPoint(0.740821, 1.85436, 0));
   allpoints.push(new PMPoint(1.25992, -0.215397, 0));
   allpoints.push(new PMPoint(1.78776, 0.0858451, 0));
   allpoints.push(new PMPoint(0.404121, 1.6636, 0));
   allpoints.push(new PMPoint(-0.896084, 1.16092, 0));
   allpoints.push(new PMPoint(-1.02046, 1.0241, 0));
   allpoints.push(new PMPoint(-0.980155, 0.544393, 0));
   allpoints.push(new PMPoint(-0.645897, -0.175846, 0));
   allpoints.push(new PMPoint(1.86918, 0.191401, 0));
   allpoints.push(new PMPoint(1.92072, 0.194212, 0));
   allpoints.push(new PMPoint(1.93401, 0.29734, 0));
   allpoints.push(new PMPoint(1.69153, 1.27392, 0));
   allpoints.push(new PMPoint(-0.166927, -1.45074, 0));
   allpoints.push(new PMPoint(1.06699, -2.1868, 0));
   allpoints.push(new PMPoint(1.82832, -1.78695, 0));
   allpoints.push(new PMPoint(1.95163, -1.83219, 0));
   allpoints.push(new PMPoint(2.21849, -1.56725, 0));
   allpoints.push(new PMPoint(2.35625, -1.36588, 0));
   allpoints.push(new PMPoint(1.97675, -0.551496, 0));
   allpoints.push(new PMPoint(1.90534, -0.439642, 0));
   allpoints.push(new PMPoint(1.84951, -0.1509, 0));
   allpoints.push(new PMPoint(1.81365, -0.113771, 0));
   allpoints.push(new PMPoint(2.68132, 1.25739, 0));
   allpoints.push(new PMPoint(2.75757, 1.1867, 0));
   allpoints.push(new PMPoint(2.96207, 1.39805, 0));
   allpoints.push(new PMPoint(2.93661, 2.29616, 0));
   allpoints.push(new PMPoint(2.82946, 2.52146, 0));
   allpoints.push(new PMPoint(2.82877, 2.76544, 0));
   allpoints.push(new PMPoint(1.89843, 2.61351, 0));
   allpoints.push(new PMPoint(2.49787, 1.13462, 0));
   allpoints.push(new PMPoint(1.88275, 2.61049, 0));
   allpoints.push(new PMPoint(1.7463, 2.79706, 0));
   allpoints.push(new PMPoint(1.60755, 2.76716, 0));
   allpoints.push(new PMPoint(1.57067, 2.79366, 0));
   allpoints.push(new PMPoint(1.0536, 3.21281, 0));
   allpoints.push(new PMPoint(-0.952934, 1.8241, 0));
   allpoints.push(new PMPoint(-1.08517, 1.87566, 0));
   allpoints.push(new PMPoint(-1.61097, 1.63524, 0));
   allpoints.push(new PMPoint(-1.81911, 1.31452, 0));
   allpoints.push(new PMPoint(-2.39395, 1.10428, 0));
   allpoints.push(new PMPoint(-2.34904, 0.980838, 0));
   allpoints.push(new PMPoint(2.34646, -2.2999, 0));
   allpoints.push(new PMPoint(2.92341, -2.33709, 0));
   allpoints.push(new PMPoint(2.98598, -2.11458, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
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

   faces.faces.push(new THREE.Face3(57, 30, 29, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(57, 29, 55, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(57, 55, 56, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 0, 5, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 5, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(19, 18, 49, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(19, 49, 50, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(19, 50, 51, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(4, 3, 9, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(5, 26, 27, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 27, 6, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(2, 1, 15, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(7, 6, 28, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(7, 29, 30, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(7, 31, 32, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(35, 8, 7, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(35, 7, 33, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(35, 33, 34, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(36, 37, 38, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(36, 38, 39, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(36, 39, 11, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(36, 11, 10, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(0, 4, 17, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 19, 20, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 20, 21, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(3, 2, 22, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(3, 23, 24, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(12, 11, 40, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(12, 40, 41, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(12, 41, 42, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(9, 43, 10, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(13, 12, 44, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(13, 44, 45, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(13, 45, 46, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(14, 13, 47, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(14, 47, 48, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(20, 19, 52, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(20, 52, 53, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(20, 53, 54, undefined, undefined, 16));


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
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[20].vector);
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
