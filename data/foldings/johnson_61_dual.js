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

   var axes = [[26,37],
      [32,22],
      [31,30],
      [16,29],
      [26,13],
      [24,8],
      [8,23],
      [7,22],
      [20,7],
      [16,15],
      [14,13],
      [9,8],
      [8,1],
      [7,6],
      [0,7],
      [5,4],
      [1,5],
      [4,0],
      [3,2],
      [2,1],
      [0,3],
      [1,0]];

   var angles = [2.41238120307526,
      2.41238120307526,
      2.48459060397586,
      2.42375298570627,
      2.40478711991457,
      2.42375298570627,
      2.43054706537055,
      2.40478711991457,
      2.39236857749811,
      2.41935001677238,
      2.40018608257592,
      2.41935001677238,
      2.42375298570627,
      2.40018608257592,
      2.39236857749811,
      2.4856533689412,
      2.41238120307526,
      2.40018608257592,
      2.4856533689412,
      2.41238120307526,
      2.40018608257592,
      2.40478711991457];

   var subtrees = [[44,45],
      [42,43],
      [39,40,41],
      [38],
      [36,37,44,45],
      [35],
      [34],
      [32,33,42,43],
      [30,31,39,40,41],
      [28,29,38],
      [26,27,36,37,44,45],
      [24,25,35],
      [23,34],
      [21,22,32,33,42,43],
      [20,30,31,39,40,41],
      [17,18,19],
      [15,16,28,29,38],
      [13,14,26,27,36,37,44,45],
      [10,11,12],
      [8,9,23,24,25,34,35],
      [6,7,20,21,22,30,31,32,33,39,40,41,42,43],
      [4,5,13,14,15,16,17,18,19,26,27,28,29,36,37,38,44,45]];

   var polytoperoot = [[0,-0.96409581851396,-0.595843984253278],
      [-0.40786580061322,-1.05613165025822,0.0305652289785515],
      [-1.23749916940613,0.477507889575943,-0.0138194305420022]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.17124, 0, 0));
   allpoints.push(new PMPoint(0.936059, 0.420983, 0));
   allpoints.push(new PMPoint(0.25797, 0.429796, 0));
   allpoints.push(new PMPoint(0.25797, -0.429796, 0));
   allpoints.push(new PMPoint(0.936059, -0.420983, 0));
   allpoints.push(new PMPoint(-0.0705641, 1.03078, 0));
   allpoints.push(new PMPoint(-0.571615, 1.04565, 0));
   allpoints.push(new PMPoint(1.75204, 0.978347, 0));
   allpoints.push(new PMPoint(1.28091, 0.991648, 0));
   allpoints.push(new PMPoint(1.15399, 1.05113, 0));
   allpoints.push(new PMPoint(0.628964, 1.46214, 0));
   allpoints.push(new PMPoint(0.0642015, 1.08673, 0));
   allpoints.push(new PMPoint(-0.571615, -1.04565, 0));
   allpoints.push(new PMPoint(-0.0705641, -1.03078, 0));
   allpoints.push(new PMPoint(1.28091, -0.991648, 0));
   allpoints.push(new PMPoint(1.75204, -0.978347, 0));
   allpoints.push(new PMPoint(0.0642015, -1.08673, 0));
   allpoints.push(new PMPoint(0.628964, -1.46214, 0));
   allpoints.push(new PMPoint(1.15399, -1.05113, 0));
   allpoints.push(new PMPoint(-1.19136, 0.0277897, 0));
   allpoints.push(new PMPoint(0.288074, 1.60633, 0));
   allpoints.push(new PMPoint(0.0606609, 2.03156, 0));
   allpoints.push(new PMPoint(2.309, 0.000470601, 0));
   allpoints.push(new PMPoint(1.22736, 1.9879, 0));
   allpoints.push(new PMPoint(0.968803, 1.58086, 0));
   allpoints.push(new PMPoint(0.0606609, -2.03156, 0));
   allpoints.push(new PMPoint(0.288074, -1.60633, 0));
   allpoints.push(new PMPoint(0.968803, -1.58086, 0));
   allpoints.push(new PMPoint(1.22736, -1.9879, 0));
   allpoints.push(new PMPoint(-1.07281, 1.05416, 0));
   allpoints.push(new PMPoint(-1.42901, 0.469147, 0));
   allpoints.push(new PMPoint(-0.420668, 2.06085, 0));
   allpoints.push(new PMPoint(-0.794144, 1.49482, 0));
   allpoints.push(new PMPoint(2.87738, 0.971748, 0));
   allpoints.push(new PMPoint(2.36328, 1.92324, 0));
   allpoints.push(new PMPoint(-0.794144, -1.49482, 0));
   allpoints.push(new PMPoint(-0.420668, -2.06085, 0));
   allpoints.push(new PMPoint(2.36328, -1.92324, 0));
   allpoints.push(new PMPoint(-1.52204, 1.56217, 0));
   allpoints.push(new PMPoint(-2.13511, 1.30001, 0));
   allpoints.push(new PMPoint(-2.08656, 0.635017, 0));
   allpoints.push(new PMPoint(-0.449346, 3.04861, 0));
   allpoints.push(new PMPoint(-0.714875, 2.6592, 0));
   allpoints.push(new PMPoint(-0.714875, -2.6592, 0));
   allpoints.push(new PMPoint(-0.449346, -3.04861, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 7, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 5, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 22, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 7, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 22, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 23, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 37, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 8, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 16, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 43, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 26, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 37, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 41, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 4, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 17, 18, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
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
