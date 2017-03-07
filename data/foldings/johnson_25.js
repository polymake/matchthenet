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

   var axes = [[50,32],
      [44,43],
      [40,39],
      [36,35],
      [32,31],
      [33,32],
      [18,29],
      [28,16],
      [27,14],
      [26,13],
      [25,12],
      [12,24],
      [23,11],
      [11,22],
      [21,10],
      [10,20],
      [18,2],
      [9,16],
      [8,14],
      [7,13],
      [6,12],
      [12,5],
      [4,11],
      [11,3],
      [1,10],
      [10,0],
      [2,1],
      [3,2],
      [0,9],
      [9,8],
      [5,4],
      [8,7],
      [7,6],
      [6,5],
      [4,3],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      3.0444533436021,
      2.76951626538485,
      2.76951626538485,
      3.0444533436021,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076,
      1.66236754759076];

   var subtrees = [[55,56,57],
      [54],
      [53],
      [52],
      [51],
      [50,55,56,57],
      [49],
      [46,47,48],
      [45],
      [42,43,44,54],
      [41],
      [38,39,40,53],
      [37],
      [34,35,36,52],
      [31,32,33,50,51,55,56,57],
      [30],
      [29,49],
      [28,46,47,48],
      [27,45],
      [26,42,43,44,54],
      [25,41],
      [24,38,39,40,53],
      [23,37],
      [22,34,35,36,52],
      [21,31,32,33,50,51,55,56,57],
      [20,30],
      [19],
      [18,29,49],
      [17],
      [16,28,46,47,48],
      [15],
      [14,27,45],
      [13,26,42,43,44,54],
      [12,24,25,38,39,40,41,53],
      [11,22,23,34,35,36,37,52],
      [10,20,21,30,31,32,33,50,51,55,56,57]];

   var polytoperoot = [[0.564304415075663,-0.0691915425626478,-0.955826448631802],
      [0,-1.61803398874989,-1],
      [-0.913063723594049,-0.348759308518388,0.564304415075661]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.593345, 0, 0));
   allpoints.push(new PMPoint(1.07337, 0.348759, 0));
   allpoints.push(new PMPoint(1.25672, 0.913064, 0));
   allpoints.push(new PMPoint(1.07337, 1.47737, 0));
   allpoints.push(new PMPoint(0.593345, 1.82613, 0));
   allpoints.push(new PMPoint(0, 1.82613, 0));
   allpoints.push(new PMPoint(-0.480026, 1.47737, 0));
   allpoints.push(new PMPoint(-0.66338, 0.913064, 0));
   allpoints.push(new PMPoint(-0.480026, 0.348759, 0));
   allpoints.push(new PMPoint(0.296672, -0.513852, 0));
   allpoints.push(new PMPoint(1.65375, 1.354, 0));
   allpoints.push(new PMPoint(0.296672, 2.33998, 0));
   allpoints.push(new PMPoint(-0.542047, 2.06746, 0));
   allpoints.push(new PMPoint(-1.0604, 1.354, 0));
   allpoints.push(new PMPoint(1.13539, 2.06746, 0));
   allpoints.push(new PMPoint(-1.0604, 0.472123, 0));
   allpoints.push(new PMPoint(-0.542047, -0.241335, 0));
   allpoints.push(new PMPoint(1.65375, 0.472123, 0));
   allpoints.push(new PMPoint(1.13539, -0.241335, 0));
   allpoints.push(new PMPoint(-0.296672, -0.513852, 0));
   allpoints.push(new PMPoint(0.890017, -0.513852, 0));
   allpoints.push(new PMPoint(1.8371, 0.7897, 0));
   allpoints.push(new PMPoint(1.4704, 1.91831, 0));
   allpoints.push(new PMPoint(0.890017, 2.33998, 0));
   allpoints.push(new PMPoint(-0.296672, 2.33998, 0));
   allpoints.push(new PMPoint(-1.02207, 1.7187, 0));
   allpoints.push(new PMPoint(-1.24376, 0.7897, 0));
   allpoints.push(new PMPoint(-0.877051, -0.0921818, 0));
   allpoints.push(new PMPoint(1.4704, -0.0921818, 0));
   allpoints.push(new PMPoint(0, -1.0277, 0));
   allpoints.push(new PMPoint(0.113319, -1.07816, 0));
   allpoints.push(new PMPoint(0.593345, -1.42692, 0));
   allpoints.push(new PMPoint(1.07337, -1.07816, 0));
   allpoints.push(new PMPoint(2.43045, 0.7897, 0));
   allpoints.push(new PMPoint(2.6138, 1.354, 0));
   allpoints.push(new PMPoint(2.13378, 1.70276, 0));
   allpoints.push(new PMPoint(2.05077, 1.79495, 0));
   allpoints.push(new PMPoint(1.07337, 2.90428, 0));
   allpoints.push(new PMPoint(0.593345, 3.25304, 0));
   allpoints.push(new PMPoint(0.113319, 2.90428, 0));
   allpoints.push(new PMPoint(0, 2.85383, 0));
   allpoints.push(new PMPoint(-0.725401, 2.63177, 0));
   allpoints.push(new PMPoint(-1.31875, 2.63177, 0));
   allpoints.push(new PMPoint(-1.5021, 2.06746, 0));
   allpoints.push(new PMPoint(-1.64078, 1.23064, 0));
   allpoints.push(new PMPoint(-1.65375, 0.472123, 0));
   allpoints.push(new PMPoint(-1.8371, -0.0921818, 0));
   allpoints.push(new PMPoint(-1.35708, -0.440941, 0));
   allpoints.push(new PMPoint(2.05077, 0.0311815, 0));
   allpoints.push(new PMPoint(1.13539, -1.66825, 0));
   allpoints.push(new PMPoint(0.0512974, -1.66825, 0));
   allpoints.push(new PMPoint(2.67582, 1.9441, 0));
   allpoints.push(new PMPoint(0.0512974, 3.49438, 0));
   allpoints.push(new PMPoint(-1.89912, 2.5084, 0));
   allpoints.push(new PMPoint(0.19632, -1.86786, 0));
   allpoints.push(new PMPoint(0.492992, -2.38171, 0));
   allpoints.push(new PMPoint(1.07337, -2.25834, 0));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 22, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 22, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 16, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 16, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 24, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 39, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 24, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 13, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 12, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 12, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 13, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 14, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 14, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 11, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 11, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 35, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 57, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 9, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 20, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 20, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 29, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 29, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 1, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 10, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 32, 33, undefined, undefined, 0));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[21].vector);
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
