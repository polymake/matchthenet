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

   var axes = [[45,52],
      [44,51],
      [50,43],
      [48,39],
      [35,46],
      [45,35],
      [44,34],
      [33,43],
      [40,21],
      [21,39],
      [20,37],
      [35,18],
      [25,35],
      [24,34],
      [33,24],
      [23,32],
      [31,22],
      [30,21],
      [21,29],
      [28,20],
      [20,27],
      [11,26],
      [25,18],
      [24,10],
      [17,24],
      [23,16],
      [15,22],
      [14,21],
      [21,7],
      [7,20],
      [20,13],
      [11,19],
      [10,18],
      [17,10],
      [9,16],
      [15,8],
      [14,7],
      [7,13],
      [11,6],
      [10,5],
      [0,10],
      [9,4],
      [4,8],
      [1,7],
      [7,3],
      [6,0],
      [3,6],
      [0,5],
      [2,4],
      [4,1],
      [1,3],
      [3,0],
      [0,2],
      [2,1],
      [1,0]];

   var angles = [2.94499678040721,
      2.78787694853642,
      2.94727509502682,
      2.78308761817408,
      2.76193919441345,
      2.82345329959487,
      2.88740407920141,
      2.68786760682363,
      2.93304608658766,
      3.09925707071953,
      2.75611074318981,
      2.57531646937433,
      2.93657807313015,
      2.49472987164687,
      2.94673701685301,
      2.76703507329472,
      2.8379537446391,
      3.11246858805287,
      2.5944454044472,
      2.62673981131146,
      2.556291284989,
      3.06530830952719,
      2.9468184772569,
      2.47623908501927,
      1.89807017053655,
      2.98722863872861,
      2.86307497779226,
      2.6097113112812,
      2.56096064741727,
      2.94043051058019,
      2.99918409230455,
      2.95650595122811,
      2.76247870043322,
      2.99602160322152,
      2.52843254146409,
      3.12433329564947,
      2.76420052021337,
      2.67542789389864,
      2.48411350995174,
      2.02075235589819,
      2.97641690051156,
      2.30384490035114,
      2.36545771308113,
      3.07532567799079,
      2.42428729269069,
      1.92502116737046,
      2.89092551141552,
      3.04793020983381,
      1.97255488920452,
      2.82888929265945,
      1.97608461543683,
      3.07911897186214,
      1.97494478057584,
      2.55237580329349,
      2.77903040400567];

   var subtrees = [[57],
      [56],
      [55],
      [54],
      [53],
      [52,57],
      [51,56],
      [50,55],
      [49],
      [48,54],
      [47],
      [46,53],
      [45,52,57],
      [44,51,56],
      [43,50,55],
      [42],
      [41],
      [40,49],
      [39,48,54],
      [38],
      [37,47],
      [36],
      [35,45,46,52,53,57],
      [34,44,51,56],
      [33,43,50,55],
      [32,42],
      [31,41],
      [30,40,49],
      [29,39,48,54],
      [28,38],
      [27,37,47],
      [26,36],
      [25,35,45,46,52,53,57],
      [24,33,34,43,44,50,51,55,56],
      [23,32,42],
      [22,31,41],
      [21,29,30,39,40,48,49,54],
      [20,27,28,37,38,47],
      [19,26,36],
      [18,25,35,45,46,52,53,57],
      [17,24,33,34,43,44,50,51,55,56],
      [16,23,32,42],
      [15,22,31,41],
      [14,21,29,30,39,40,48,49,54],
      [13,20,27,28,37,38,47],
      [12],
      [11,19,26,36],
      [10,17,18,24,25,33,34,35,43,44,45,46,50,51,52,53,55,56,57],
      [9,16,23,32,42],
      [8,15,22,31,41],
      [7,13,14,20,21,27,28,29,30,37,38,39,40,47,48,49,54],
      [6,11,12,19,26,36],
      [5,10,17,18,24,25,33,34,35,43,44,45,46,50,51,52,53,55,56,57],
      [4,8,9,15,16,22,23,31,32,41,42],
      [3,6,7,11,12,13,14,19,20,21,26,27,28,29,30,36,37,38,39,40,47,48,49,54]];

   var polytoperoot = [[-0.872933478500583,-0.281592604391354,0.478552560738051],
      [-1.44590118572238e+48,-2.16844312513303e+47,1.99174923427469e+47],
      [4.8779129535277e+46,-9.03563005214187e+47,-6.29610873128956e+47]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.747077, 0, 0));
   allpoints.push(new PMPoint(0.12802, 0.374117, 0));
   allpoints.push(new PMPoint(0.790705, -0.075941, 0));
   allpoints.push(new PMPoint(0.302824, 0.99076, 0));
   allpoints.push(new PMPoint(-0.811061, 1.19562, 0));
   allpoints.push(new PMPoint(-0.068634, -0.542875, 0));
   allpoints.push(new PMPoint(1.87618, -0.127019, 0));
   allpoints.push(new PMPoint(1.18605, 1.27776, 0));
   allpoints.push(new PMPoint(-0.307393, 1.54337, 0));
   allpoints.push(new PMPoint(-1.22434, 1.011, 0));
   allpoints.push(new PMPoint(0.770962, -0.978576, 0));
   allpoints.push(new PMPoint(-0.697578, -0.94541, 0));
   allpoints.push(new PMPoint(1.19046, -0.885468, 0));
   allpoints.push(new PMPoint(1.68999, 0.967624, 0));
   allpoints.push(new PMPoint(0.66642, 1.81975, 0));
   allpoints.push(new PMPoint(0.0346966, 1.85536, 0));
   allpoints.push(new PMPoint(-1.0841, -0.452923, 0));
   allpoints.push(new PMPoint(-1.26085, 1.63215, 0));
   allpoints.push(new PMPoint(-0.337597, -1.23948, 0));
   allpoints.push(new PMPoint(1.94451, -1.01799, 0));
   allpoints.push(new PMPoint(2.21724, 0.272009, 0));
   allpoints.push(new PMPoint(1.15321, 1.51166, 0));
   allpoints.push(new PMPoint(-0.179438, 2.15696, 0));
   allpoints.push(new PMPoint(-1.6446, 0.18819, 0));
   allpoints.push(new PMPoint(-1.831, 1.10549, 0));
   allpoints.push(new PMPoint(0.485237, -1.72541, 0));
   allpoints.push(new PMPoint(1.69488, -1.16174, 0));
   allpoints.push(new PMPoint(2.22344, -0.377778, 0));
   allpoints.push(new PMPoint(2.30442, -0.117844, 0));
   allpoints.push(new PMPoint(1.87601, 1.11315, 0));
   allpoints.push(new PMPoint(0.7518, 1.85825, 0));
   allpoints.push(new PMPoint(0.0558671, 1.9466, 0));
   allpoints.push(new PMPoint(-1.89374, -0.960532, 0));
   allpoints.push(new PMPoint(-1.78003, 0.749897, 0));
   allpoints.push(new PMPoint(-1.55748, 1.84126, 0));
   allpoints.push(new PMPoint(0.721784, -1.55159, 0));
   allpoints.push(new PMPoint(1.81641, -1.42894, 0));
   allpoints.push(new PMPoint(2.65514, -0.884987, 0));
   allpoints.push(new PMPoint(2.96895, -0.0729807, 0));
   allpoints.push(new PMPoint(2.30315, 1.10099, 0));
   allpoints.push(new PMPoint(1.2989, 1.91336, 0));
   allpoints.push(new PMPoint(0.292765, 2.44282, 0));
   allpoints.push(new PMPoint(-2.34929, -0.0702171, 0));
   allpoints.push(new PMPoint(-2.34719, 0.452264, 0));
   allpoints.push(new PMPoint(-2.20042, 1.58618, 0));
   allpoints.push(new PMPoint(-1.36489, 2.17424, 0));
   allpoints.push(new PMPoint(2.65968, -1.1239, 0));
   allpoints.push(new PMPoint(2.84022, 0.568054, 0));
   allpoints.push(new PMPoint(2.67816, 0.785128, 0));
   allpoints.push(new PMPoint(-2.7058, -0.580131, 0));
   allpoints.push(new PMPoint(-2.38566, 0.722654, 0));
   allpoints.push(new PMPoint(-1.93179, 2.15611, 0));
   allpoints.push(new PMPoint(-1.8518, 2.23192, 0));
   allpoints.push(new PMPoint(3.2989, 0.166232, 0));
   allpoints.push(new PMPoint(-2.61748, -0.182276, 0));
   allpoints.push(new PMPoint(-2.57515, 0.632584, 0));
   allpoints.push(new PMPoint(-2.3602, 1.72215, 0));

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

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 13, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 3, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 1, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 12, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 26, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 27, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 19, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 7, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 8, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 4, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 26, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 7, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 8, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 13, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 22, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 16, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 7, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 4, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 35, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 21, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 21, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 22, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 32, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 16, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 20, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 51, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 20, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 29, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 18, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 43, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 51, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 10, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 18, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 5, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 24, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 10, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 34, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 18, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 34, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 24, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 43, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 39, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 52, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 46, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 39, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 35, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 21, 49, undefined, undefined, 0));


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
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[40].vector);
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
