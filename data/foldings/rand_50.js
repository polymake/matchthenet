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
      [30,29],
      [31,30],
      [25,24],
      [21,20],
      [14,13],
      [13,12],
      [8,7],
      [9,8],
      [10,9],
      [11,10],
      [6,5],
      [4,3],
      [2,1],
      [0,4],
      [3,2],
      [1,0]];

   var angles = [2.22705781864677,
      2.39994702722626,
      2.37857373578659,
      2.26469888615905,
      2.24959368929796,
      2.30505868079624,
      1.99750919418171,
      1.67460906495279,
      1.76652775128006,
      1.98379865895008,
      1.69119532270053,
      2.32970999741762,
      2.01569994097892,
      2.26770428177483,
      2.08375897556405,
      2.24625074319562,
      2.60502923997951];

   var subtrees = [[58,59,60,61],
      [54,55,56,57],
      [53],
      [49,50,51,52],
      [46,47,48],
      [44,45],
      [40,41,42,43],
      [36,37,38,39],
      [34,35],
      [29,30,31,32,33,53,54,55,56,57,58,59,60,61],
      [27,28],
      [23,24,25,26,49,50,51,52],
      [19,20,21,22,46,47,48],
      [16,17,18],
      [12,13,14,15,40,41,42,43,44,45],
      [7,8,9,10,11,27,28,29,30,31,32,33,34,35,36,37,38,39,53,54,55,56,57,58,59,60,61],
      [5,6,23,24,25,26,49,50,51,52]];

   var polytoperoot = [[-0.0728791816714223,0.00800072651647384,1.34886870580271],
      [0.661243212278618,0.848942113102853,0.772053429693632],
      [-0.502573604157001,0.92032418796405,-0.58153821896603]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.905373, 0, 0));
   allpoints.push(new PMPoint(0.975184, 0.755502, 0));
   allpoints.push(new PMPoint(0.987799, 0.952436, 0));
   allpoints.push(new PMPoint(-0.11998, 0.52294, 0));
   allpoints.push(new PMPoint(-0.0899333, -0.91566, 0));
   allpoints.push(new PMPoint(0.985121, -0.227673, 0));
   allpoints.push(new PMPoint(1.7922, -0.175254, 0));
   allpoints.push(new PMPoint(1.89444, -0.0759889, 0));
   allpoints.push(new PMPoint(1.91273, 0.33013, 0));
   allpoints.push(new PMPoint(1.55135, 0.933672, 0));
   allpoints.push(new PMPoint(1.17813, 1.06824, 0));
   allpoints.push(new PMPoint(-0.740954, 0.591377, 0));
   allpoints.push(new PMPoint(-0.837187, 0.146369, 0));
   allpoints.push(new PMPoint(-0.487088, -0.9311, 0));
   allpoints.push(new PMPoint(-0.356576, -0.848159, 0));
   allpoints.push(new PMPoint(1.03925, -0.20068, 0));
   allpoints.push(new PMPoint(1.77422, -0.191611, 0));
   allpoints.push(new PMPoint(1.78256, -0.183636, 0));
   allpoints.push(new PMPoint(1.07737, 1.15643, 0));
   allpoints.push(new PMPoint(0.591853, 1.4808, 0));
   allpoints.push(new PMPoint(-0.179893, 1.8789, 0));
   allpoints.push(new PMPoint(-0.565398, 0.960998, 0));
   allpoints.push(new PMPoint(-0.130671, -1.06483, 0));
   allpoints.push(new PMPoint(0.0604709, -1.37142, 0));
   allpoints.push(new PMPoint(0.861039, -1.06321, 0));
   allpoints.push(new PMPoint(1.57494, -0.66629, 0));
   allpoints.push(new PMPoint(2.05703, 1.38554, 0));
   allpoints.push(new PMPoint(1.44597, 1.58708, 0));
   allpoints.push(new PMPoint(2.37457, 0.815484, 0));
   allpoints.push(new PMPoint(2.37961, 0.840488, 0));
   allpoints.push(new PMPoint(2.38777, 1.07105, 0));
   allpoints.push(new PMPoint(2.3761, 1.1109, 0));
   allpoints.push(new PMPoint(2.2111, 1.09058, 0));
   allpoints.push(new PMPoint(2.69321, -0.0660396, 0));
   allpoints.push(new PMPoint(2.52808, 0.595103, 0));
   allpoints.push(new PMPoint(1.78418, -0.183539, 0));
   allpoints.push(new PMPoint(1.87518, -0.995278, 0));
   allpoints.push(new PMPoint(2.61545, -0.684423, 0));
   allpoints.push(new PMPoint(2.54258, -0.542944, 0));
   allpoints.push(new PMPoint(-1.62515, 1.04894, 0));
   allpoints.push(new PMPoint(-1.79489, 0.974231, 0));
   allpoints.push(new PMPoint(-2.01493, -0.40342, 0));
   allpoints.push(new PMPoint(-1.91039, -0.485393, 0));
   allpoints.push(new PMPoint(-1.73825, -0.713267, 0));
   allpoints.push(new PMPoint(-0.809728, -1.09369, 0));
   allpoints.push(new PMPoint(0.835684, 2.07625, 0));
   allpoints.push(new PMPoint(0.744936, 2.21554, 0));
   allpoints.push(new PMPoint(-0.133644, 2.0585, 0));
   allpoints.push(new PMPoint(0.663002, -2.17382, 0));
   allpoints.push(new PMPoint(0.783534, -2.22968, 0));
   allpoints.push(new PMPoint(1.15882, -1.97085, 0));
   allpoints.push(new PMPoint(1.40536, -1.65342, 0));
   allpoints.push(new PMPoint(3.35462, 0.556048, 0));
   allpoints.push(new PMPoint(2.84595, 0.323368, 0));
   allpoints.push(new PMPoint(3.00167, 0.356232, 0));
   allpoints.push(new PMPoint(3.3793, 0.493813, 0));
   allpoints.push(new PMPoint(3.34118, 0.513479, 0));
   allpoints.push(new PMPoint(3.40312, 0.659841, 0));
   allpoints.push(new PMPoint(3.44378, 0.646169, 0));
   allpoints.push(new PMPoint(3.87233, 0.801674, 0));
   allpoints.push(new PMPoint(2.91843, 1.81972, 0));

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
   allpoints[58].makesphere(0.02,points_material);
   allpoints[59].makesphere(0.02,points_material);
   allpoints[60].makesphere(0.02,points_material);
   allpoints[61].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[58].vector);
   faces.vertices.push(allpoints[59].vector);
   faces.vertices.push(allpoints[60].vector);
   faces.vertices.push(allpoints[61].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 43, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 57, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 30, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 5, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 39, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 21, 22, undefined, undefined, 0));


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
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
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
