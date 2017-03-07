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

   var axes = [[46,41],
      [44,30],
      [36,43],
      [34,41],
      [23,39],
      [38,30],
      [36,28],
      [18,34],
      [34,26],
      [33,16],
      [23,32],
      [22,30],
      [28,12],
      [20,28],
      [19,27],
      [18,26],
      [25,16],
      [23,15],
      [8,22],
      [22,14],
      [21,13],
      [20,12],
      [19,3],
      [18,11],
      [10,16],
      [15,2],
      [9,15],
      [8,14],
      [3,13],
      [7,12],
      [11,3],
      [6,11],
      [2,10],
      [10,5],
      [9,2],
      [8,4],
      [3,7],
      [7,0],
      [6,3],
      [2,5],
      [4,2],
      [0,4],
      [3,0],
      [1,3],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923,
      2.70669464547923];

   var subtrees = [[49],
      [48],
      [47],
      [46,49],
      [45],
      [44,48],
      [43,47],
      [42],
      [41,46,49],
      [40],
      [39,45],
      [38,44,48],
      [37],
      [36,43,47],
      [35],
      [34,41,42,46,49],
      [33,40],
      [32,39,45],
      [31],
      [30,38,44,48],
      [29],
      [28,36,37,43,47],
      [27,35],
      [26,34,41,42,46,49],
      [25,33,40],
      [24],
      [23,32,39,45],
      [22,30,31,38,44,48],
      [21,29],
      [20,28,36,37,43,47],
      [19,27,35],
      [18,26,34,41,42,46,49],
      [17],
      [16,25,33,40],
      [15,23,24,32,39,45],
      [14,22,30,31,38,44,48],
      [13,21,29],
      [12,20,28,36,37,43,47],
      [11,18,19,26,27,34,35,41,42,46,49],
      [10,16,17,25,33,40],
      [9,15,23,24,32,39,45],
      [8,14,22,30,31,38,44,48],
      [7,12,13,20,21,28,29,36,37,43,47],
      [6,11,18,19,26,27,34,35,41,42,46,49],
      [5,10,16,17,25,33,40],
      [4,8,9,14,15,22,23,24,30,31,32,38,39,44,45,48],
      [3,6,7,11,12,13,18,19,20,21,26,27,28,29,34,35,36,37,41,42,43,46,47,49]];

   var polytoperoot = [[-0.579112372874393,-0.579112372874388,-0.579112372874391],
      [-0.912768408979616,-0.575593527174791,-0.238418645369965],
      [-0.355450766384157,0.550712912259789,0.0312787737853592]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.593787, 0, 0));
   allpoints.push(new PMPoint(0.555012, 0.793367, 0));
   allpoints.push(new PMPoint(0.555012, -0.793367, 0));
   allpoints.push(new PMPoint(-0.203568, 0.557802, 0));
   allpoints.push(new PMPoint(1.18474, 0.0579029, 0));
   allpoints.push(new PMPoint(1.18474, -0.0579029, 0));
   allpoints.push(new PMPoint(-0.203568, -0.557802, 0));
   allpoints.push(new PMPoint(-0.935561, 0.249387, 0));
   allpoints.push(new PMPoint(-0.351772, 1.1328, 0));
   allpoints.push(new PMPoint(1.33295, 0.632897, 0));
   allpoints.push(new PMPoint(1.33295, -0.632897, 0));
   allpoints.push(new PMPoint(-0.935561, -0.249387, 0));
   allpoints.push(new PMPoint(-0.351772, -1.1328, 0));
   allpoints.push(new PMPoint(-0.46056, 1.09309, 0));
   allpoints.push(new PMPoint(0.137567, 1.46914, 0));
   allpoints.push(new PMPoint(2.09153, 0.397332, 0));
   allpoints.push(new PMPoint(1.42437, 1.2196, 0));
   allpoints.push(new PMPoint(2.09153, -0.397332, 0));
   allpoints.push(new PMPoint(1.42437, -1.2196, 0));
   allpoints.push(new PMPoint(-0.46056, -1.09309, 0));
   allpoints.push(new PMPoint(0.137567, -1.46914, 0));
   allpoints.push(new PMPoint(-1.05152, 1.03519, 0));
   allpoints.push(new PMPoint(-0.343786, 2.10099, 0));
   allpoints.push(new PMPoint(0.657373, 1.75617, 0));
   allpoints.push(new PMPoint(1.53652, 1.1907, 0));
   allpoints.push(new PMPoint(1.53652, -1.1907, 0));
   allpoints.push(new PMPoint(0.904569, -1.50663, 0));
   allpoints.push(new PMPoint(-1.05152, -1.03519, 0));
   allpoints.push(new PMPoint(-0.343786, -2.10099, 0));
   allpoints.push(new PMPoint(-1.09029, 1.82856, 0));
   allpoints.push(new PMPoint(-1.63401, 0.919937, 0));
   allpoints.push(new PMPoint(0.591776, 1.85161, 0));
   allpoints.push(new PMPoint(2.1303, 1.1907, 0));
   allpoints.push(new PMPoint(2.1303, -1.1907, 0));
   allpoints.push(new PMPoint(1.32201, -2.18241, 0));
   allpoints.push(new PMPoint(-1.09029, -1.82856, 0));
   allpoints.push(new PMPoint(-1.63401, -0.919937, 0));
   allpoints.push(new PMPoint(-1.6453, 1.03519, 0));
   allpoints.push(new PMPoint(0.388208, 2.40941, 0));
   allpoints.push(new PMPoint(2.72126, 1.1328, 0));
   allpoints.push(new PMPoint(2.09153, -1.98407, 0));
   allpoints.push(new PMPoint(2.72126, -1.1328, 0));
   allpoints.push(new PMPoint(-1.6453, -1.03519, 0));
   allpoints.push(new PMPoint(-1.84887, 1.59299, 0));
   allpoints.push(new PMPoint(0.131216, 2.9447, 0));
   allpoints.push(new PMPoint(2.72126, -1.2486, 0));
   allpoints.push(new PMPoint(-1.84887, -1.59299, 0));
   allpoints.push(new PMPoint(-1.99707, 2.16799, 0));
   allpoints.push(new PMPoint(2.86946, -1.8236, 0));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 0, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 5, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 12, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 5, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 14, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 3, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 2, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 10, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 11, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 15, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 12, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 16, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 14, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 13, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 24, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 3, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 30, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 13, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 32, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 26, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 12, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 16, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 3, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 22, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 28, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 39, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 27, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 30, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 26, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 37, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 16, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 41, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 43, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 45, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 30, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 34, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 47, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 41, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 48, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 41, 49, undefined, undefined, 0));


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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[46].vector);
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
