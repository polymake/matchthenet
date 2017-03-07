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
      [27,26],
      [24,23],
      [17,16],
      [19,18],
      [18,17],
      [13,12],
      [14,13],
      [9,8],
      [10,9],
      [4,3],
      [6,5],
      [5,4],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.59772835364788,
      1.79252182907156,
      2.58201923370487,
      1.68611520284425,
      1.89762408111413,
      1.80910177329364,
      2.34612993473048,
      1.92696514040402,
      2.49413356891327,
      2.24848405124327,
      1.55657563341054,
      2.05940450779052,
      1.87722765999487,
      2.69255190708836,
      2.62668695777805,
      2.96515721733052];

   var subtrees = [[56,57],
      [51,52,53,54,55],
      [49,50],
      [46,47,48],
      [42,43,44,45],
      [39,40,41],
      [36,37,38],
      [32,33,34,35,56,57],
      [29,30,31],
      [26,27,28,51,52,53,54,55],
      [22,23,24,25,49,50],
      [20,21],
      [16,17,18,19,39,40,41,42,43,44,45,46,47,48],
      [12,13,14,15,32,33,34,35,36,37,38,56,57],
      [8,9,10,11,26,27,28,29,30,31,51,52,53,54,55],
      [3,4,5,6,7,16,17,18,19,20,21,22,23,24,25,39,40,41,42,43,44,45,46,47,48,49,50]];

   var polytoperoot = [[0.0895001780647638,0.662065108132825,-0.137317391843454],
      [-1.01827683179493,1.59642852548719,-0.249031335017293],
      [-0.152408888319868,0.11031339174155,1.33036224229448]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.703515, 0, 0));
   allpoints.push(new PMPoint(0.335286, 0.284729, 0));
   allpoints.push(new PMPoint(-0.418724, -0.25555, 0));
   allpoints.push(new PMPoint(-0.31786, -1.22059, 0));
   allpoints.push(new PMPoint(0.0829641, -0.928849, 0));
   allpoints.push(new PMPoint(0.871986, -0.172483, 0));
   allpoints.push(new PMPoint(0.841989, -0.0741041, 0));
   allpoints.push(new PMPoint(0.338157, 0.728618, 0));
   allpoints.push(new PMPoint(-0.254059, 0.454687, 0));
   allpoints.push(new PMPoint(-0.450297, -0.0833435, 0));
   allpoints.push(new PMPoint(-0.426368, -0.242581, 0));
   allpoints.push(new PMPoint(0.843806, -0.0706038, 0));
   allpoints.push(new PMPoint(0.861651, 0.727408, 0));
   allpoints.push(new PMPoint(0.574028, 0.899574, 0));
   allpoints.push(new PMPoint(0.389546, 0.725298, 0));
   allpoints.push(new PMPoint(-0.150048, -1.54979, 0));
   allpoints.push(new PMPoint(0.502689, -1.63933, 0));
   allpoints.push(new PMPoint(1.69786, -1.59407, 0));
   allpoints.push(new PMPoint(1.49953, -0.85176, 0));
   allpoints.push(new PMPoint(1.48835, -0.73527, 0));
   allpoints.push(new PMPoint(1.44331, -0.569322, 0));
   allpoints.push(new PMPoint(-0.523906, -0.133625, 0));
   allpoints.push(new PMPoint(-1.60912, 0.0307545, 0));
   allpoints.push(new PMPoint(-1.26979, -0.866451, 0));
   allpoints.push(new PMPoint(-0.651001, -1.38043, 0));
   allpoints.push(new PMPoint(-0.693275, 1.20666, 0));
   allpoints.push(new PMPoint(-1.06499, 1.15036, 0));
   allpoints.push(new PMPoint(-1.06277, 0.827472, 0));
   allpoints.push(new PMPoint(0.460668, 0.950872, 0));
   allpoints.push(new PMPoint(-0.02261, 1.34735, 0));
   allpoints.push(new PMPoint(-0.531942, 1.28001, 0));
   allpoints.push(new PMPoint(1.26662, 0.862541, 0));
   allpoints.push(new PMPoint(1.34387, 1.04071, 0));
   allpoints.push(new PMPoint(1.24259, 1.56179, 0));
   allpoints.push(new PMPoint(0.626502, 1.52247, 0));
   allpoints.push(new PMPoint(0.89908, -0.15734, 0));
   allpoints.push(new PMPoint(1.57469, 0.00831542, 0));
   allpoints.push(new PMPoint(1.28578, 0.678655, 0));
   allpoints.push(new PMPoint(1.39712, -2.83261, 0));
   allpoints.push(new PMPoint(1.80837, -2.47325, 0));
   allpoints.push(new PMPoint(1.82154, -1.87793, 0));
   allpoints.push(new PMPoint(2.00727, -1.60596, 0));
   allpoints.push(new PMPoint(2.22889, -0.475071, 0));
   allpoints.push(new PMPoint(2.12446, -0.311348, 0));
   allpoints.push(new PMPoint(1.49438, -0.679884, 0));
   allpoints.push(new PMPoint(0.238828, -2.25395, 0));
   allpoints.push(new PMPoint(1.2074, -2.95477, 0));
   allpoints.push(new PMPoint(1.2174, -2.94819, 0));
   allpoints.push(new PMPoint(-1.88082, 0.205229, 0));
   allpoints.push(new PMPoint(-2.36825, -0.394591, 0));
   allpoints.push(new PMPoint(-0.314999, 1.55431, 0));
   allpoints.push(new PMPoint(-0.640596, 2.07881, 0));
   allpoints.push(new PMPoint(-1.48345, 2.29468, 0));
   allpoints.push(new PMPoint(-1.56266, 1.75432, 0));
   allpoints.push(new PMPoint(-1.56188, 1.74237, 0));
   allpoints.push(new PMPoint(2.34385, 1.61348, 0));
   allpoints.push(new PMPoint(1.95361, 2.06325, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 49, 50, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(23, 50, 24, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(34, 33, 56, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(34, 56, 57, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(18, 17, 39, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(18, 39, 40, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(18, 40, 41, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(10, 9, 26, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(10, 26, 27, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(10, 27, 28, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(14, 13, 32, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 33, 34, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 34, 35, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(13, 12, 36, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(5, 4, 16, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(5, 16, 17, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(5, 17, 18, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(5, 18, 19, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(7, 0, 3, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(7, 3, 4, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(7, 4, 5, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(44, 45, 19, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(44, 19, 18, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(44, 18, 42, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(44, 42, 43, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(51, 52, 53, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(51, 53, 54, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(51, 54, 55, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(51, 55, 27, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(51, 27, 26, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(0, 2, 8, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(6, 5, 20, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(6, 20, 21, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(3, 23, 24, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(3, 25, 4, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(2, 1, 12, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(8, 29, 30, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(8, 30, 31, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(8, 31, 9, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(16, 46, 47, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(16, 47, 48, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(16, 48, 17, undefined, undefined, 16));


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
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
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
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
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
