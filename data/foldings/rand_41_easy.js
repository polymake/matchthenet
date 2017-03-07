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

   var axes = [[27,26],
      [18,17],
      [17,16],
      [12,11],
      [13,12],
      [8,7],
      [10,9],
      [7,6],
      [9,8],
      [6,5],
      [0,4],
      [3,2],
      [2,1],
      [4,3],
      [1,0]];

   var angles = [2.42840530694557,
      2.29952672249123,
      2.27111796454887,
      2.48958793803002,
      2.49250954989163,
      1.78247986890153,
      2.00333283668511,
      1.47648772064431,
      2.09666974974252,
      1.07356460228887,
      2.80387687460209,
      1.83231765146121,
      1.85708185314438,
      0.852061407013723,
      2.11605527713245];

   var subtrees = [[49,50,51,52,53],
      [46,47,48],
      [43,44,45],
      [41,42],
      [37,38,39,40],
      [35,36],
      [32,33,34],
      [30,31],
      [28,29],
      [24,25,26,27,49,50,51,52,53],
      [22,23],
      [19,20,21],
      [15,16,17,18,43,44,45,46,47,48],
      [11,12,13,14,37,38,39,40,41,42],
      [5,6,7,8,9,10,24,25,26,27,28,29,30,31,32,33,34,35,36,49,50,51,52,53]];

   var polytoperoot = [[-0.544217720690411,-0.767890297054285,-0.0166496265436013],
      [-1.58730139419933,-0.191897724613575,0.672324242715867],
      [-0.499584284543834,0.830899021723876,-0.942317946419474]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.779499, 0, 0));
   allpoints.push(new PMPoint(0.725923, 0.41278, 0));
   allpoints.push(new PMPoint(-0.603555, 1.7384, 0));
   allpoints.push(new PMPoint(-1.15796, 1.8889, 0));
   allpoints.push(new PMPoint(-1.60396, -0.632016, 0));
   allpoints.push(new PMPoint(-1.12367, -0.836267, 0));
   allpoints.push(new PMPoint(-0.844047, -0.852137, 0));
   allpoints.push(new PMPoint(0.150727, -0.749608, 0));
   allpoints.push(new PMPoint(0.692056, -0.410864, 0));
   allpoints.push(new PMPoint(0.854978, -0.235054, 0));
   allpoints.push(new PMPoint(-0.450406, 1.78664, 0));
   allpoints.push(new PMPoint(1.17906, 2.47402, 0));
   allpoints.push(new PMPoint(0.793802, 2.98268, 0));
   allpoints.push(new PMPoint(-2.06659, 2.58831, 0));
   allpoints.push(new PMPoint(1.00406, -0.102558, 0));
   allpoints.push(new PMPoint(1.31485, 0.145525, 0));
   allpoints.push(new PMPoint(1.3954, 0.337132, 0));
   allpoints.push(new PMPoint(1.35109, 0.528782, 0));
   allpoints.push(new PMPoint(1.22935, 0.801179, 0));
   allpoints.push(new PMPoint(1.22909, 0.802472, 0));
   allpoints.push(new PMPoint(-0.452711, 1.68336, 0));
   allpoints.push(new PMPoint(-2.30423, 1.85968, 0));
   allpoints.push(new PMPoint(-1.6825, -0.375936, 0));
   allpoints.push(new PMPoint(-3.43076, -2.06287, 0));
   allpoints.push(new PMPoint(-0.556232, -2.33575, 0));
   allpoints.push(new PMPoint(-0.506416, -2.2931, 0));
   allpoints.push(new PMPoint(-0.490676, -2.24695, 0));
   allpoints.push(new PMPoint(0.721631, -1.04018, 0));
   allpoints.push(new PMPoint(0.839262, -1.00275, 0));
   allpoints.push(new PMPoint(0.0590037, -1.83225, 0));
   allpoints.push(new PMPoint(0.279648, -1.51654, 0));
   allpoints.push(new PMPoint(0.921394, -0.97602, 0));
   allpoints.push(new PMPoint(0.954156, -0.968041, 0));
   allpoints.push(new PMPoint(1.09005, -0.5558, 0));
   allpoints.push(new PMPoint(0.366278, -1.34125, 0));
   allpoints.push(new PMPoint(0.61589, -1.19005, 0));
   allpoints.push(new PMPoint(1.24068, 2.4649, 0));
   allpoints.push(new PMPoint(1.4808, 2.70008, 0));
   allpoints.push(new PMPoint(1.48259, 2.71672, 0));
   allpoints.push(new PMPoint(0.846077, 3.02228, 0));
   allpoints.push(new PMPoint(1.40856, 2.17222, 0));
   allpoints.push(new PMPoint(1.23707, 2.45134, 0));
   allpoints.push(new PMPoint(1.74809, 0.11879, 0));
   allpoints.push(new PMPoint(1.73865, 0.279559, 0));
   allpoints.push(new PMPoint(1.72889, 0.293147, 0));
   allpoints.push(new PMPoint(1.73079, 0.362881, 0));
   allpoints.push(new PMPoint(1.63959, 0.686379, 0));
   allpoints.push(new PMPoint(1.3518, 0.529896, 0));
   allpoints.push(new PMPoint(0.178914, -2.46291, 0));
   allpoints.push(new PMPoint(0.229815, -2.31012, 0));
   allpoints.push(new PMPoint(0.220019, -2.27785, 0));
   allpoints.push(new PMPoint(0.147998, -2.17759, 0));
   allpoints.push(new PMPoint(-0.133854, -2.10191, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
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
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 0, 5, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 5, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 6, 7, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(10, 8, 9, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(24, 25, 26, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(24, 26, 27, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(24, 27, 6, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(24, 6, 5, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(2, 1, 15, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(13, 12, 37, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(13, 39, 40, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(9, 8, 28, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(9, 28, 29, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(50, 51, 52, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(50, 52, 53, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(50, 53, 27, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(50, 27, 26, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(50, 26, 49, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(17, 16, 43, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(17, 43, 44, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(17, 44, 45, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(3, 2, 19, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(18, 17, 46, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(18, 46, 47, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(18, 47, 48, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(11, 41, 42, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(11, 42, 12, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(7, 6, 30, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(34, 10, 9, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 9, 32, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 32, 33, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(0, 4, 22, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(0, 22, 23, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(8, 7, 35, undefined, undefined, 15));
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
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
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
