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

   var axes = [[25,40],
      [19,34],
      [32,31],
      [28,15],
      [12,25],
      [25,11],
      [23,22],
      [20,19],
      [19,18],
      [6,17],
      [15,14],
      [16,15],
      [11,5],
      [13,12],
      [12,11],
      [2,8],
      [4,7],
      [7,6],
      [6,3],
      [5,0],
      [1,5],
      [0,4],
      [3,2],
      [2,1],
      [4,3],
      [1,0]];

   var angles = [2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.0344439357957,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      1.66072307669114,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631,
      2.48923451380542,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      1.66072307669114,
      2.48923451380543];

   var subtrees = [[47],
      [46],
      [45],
      [44],
      [41,42,43],
      [38,39,40,47],
      [37],
      [35,36],
      [33,34,46],
      [31,32,45],
      [29,30],
      [28,44],
      [27],
      [26],
      [25,38,39,40,41,42,43,47],
      [22,23,24,37],
      [21],
      [18,19,20,33,34,35,36,46],
      [17,31,32,45],
      [14,15,16,28,29,30,44],
      [11,12,13,25,26,27,38,39,40,41,42,43,47],
      [10],
      [9],
      [8,22,23,24,37],
      [6,7,17,18,19,20,21,31,32,33,34,35,36,45,46],
      [5,11,12,13,14,15,16,25,26,27,28,29,30,38,39,40,41,42,43,44,47]];

   var polytoperoot = [[0.893003659860292,0.143640933052762,0.429872024790936],
      [0.618033988749895,0,1],
      [-0.210809567883129,-0.76271618175484,0.130287478105452]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.682194, 0, 0));
   allpoints.push(new PMPoint(0.893004, 0.648805, 0));
   allpoints.push(new PMPoint(0.341097, 1.04979, 0));
   allpoints.push(new PMPoint(-0.21081, 0.648805, 0));
   allpoints.push(new PMPoint(0.341097, -0.590797, 0));
   allpoints.push(new PMPoint(-0.0598866, 1.6017, 0));
   allpoints.push(new PMPoint(-0.611793, 1.20071, 0));
   allpoints.push(new PMPoint(1.34948, 0.141836, 0));
   allpoints.push(new PMPoint(0.964312, 1.32726, 0));
   allpoints.push(new PMPoint(-0.667287, 0.141836, 0));
   allpoints.push(new PMPoint(0.797574, -1.09777, 0));
   allpoints.push(new PMPoint(1.42079, -0.820293, 0));
   allpoints.push(new PMPoint(1.34948, -0.141836, 0));
   allpoints.push(new PMPoint(-0.667287, -0.141836, 0));
   allpoints.push(new PMPoint(-0.738595, -0.820293, 0));
   allpoints.push(new PMPoint(-0.11538, -1.09777, 0));
   allpoints.push(new PMPoint(0.61857, 1.673, 0));
   allpoints.push(new PMPoint(-0.270696, 2.2505, 0));
   allpoints.push(new PMPoint(-0.95289, 2.2505, 0));
   allpoints.push(new PMPoint(-1.1637, 1.6017, 0));
   allpoints.push(new PMPoint(-0.889267, 0.577496, 0));
   allpoints.push(new PMPoint(1.9727, 0.419309, 0));
   allpoints.push(new PMPoint(1.90139, 1.09777, 0));
   allpoints.push(new PMPoint(1.2341, 1.2396, 0));
   allpoints.push(new PMPoint(1.34948, -1.49875, 0));
   allpoints.push(new PMPoint(1.9727, -0.419309, 0));
   allpoints.push(new PMPoint(0.130287, -1.2396, 0));
   allpoints.push(new PMPoint(-0.667287, -1.49875, 0));
   allpoints.push(new PMPoint(-1.34574, -0.0705274, 0));
   allpoints.push(new PMPoint(-1.41705, -0.748984, 0));
   allpoints.push(new PMPoint(0.547262, 2.35146, 0));
   allpoints.push(new PMPoint(-0.131195, 2.28015, 0));
   allpoints.push(new PMPoint(-0.270696, 2.93269, 0));
   allpoints.push(new PMPoint(-0.95289, 2.93269, 0));
   allpoints.push(new PMPoint(-1.6017, 2.46131, 0));
   allpoints.push(new PMPoint(-1.8125, 1.8125, 0));
   allpoints.push(new PMPoint(2.5246, 0.820293, 0));
   allpoints.push(new PMPoint(0.245667, -1.49875, 0));
   allpoints.push(new PMPoint(0.456477, -2.14756, 0));
   allpoints.push(new PMPoint(1.13867, -2.14756, 0));
   allpoints.push(new PMPoint(1.9727, -1.77622, 0));
   allpoints.push(new PMPoint(2.42917, -1.26925, 0));
   allpoints.push(new PMPoint(2.08808, -0.678457, 0));
   allpoints.push(new PMPoint(-1.2905, -1.22128, 0));
   allpoints.push(new PMPoint(0.146278, 2.90337, 0));
   allpoints.push(new PMPoint(-1.54369, 2.5916, 0));
   allpoints.push(new PMPoint(1.80596, -2.00572, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 40, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 32, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 34, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 40, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 45, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 25, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 17, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 5, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 28, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 7, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 30, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 15, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 5, undefined, undefined, 0));


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
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
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
