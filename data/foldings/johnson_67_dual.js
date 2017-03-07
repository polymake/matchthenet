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

   var axes = [[47,35],
      [46,45],
      [26,40],
      [39,38],
      [38,13],
      [12,35],
      [32,31],
      [8,32],
      [30,29],
      [26,6],
      [23,13],
      [1,23],
      [12,22],
      [22,21],
      [8,18],
      [18,1],
      [17,16],
      [14,6],
      [15,14],
      [1,13],
      [12,11],
      [10,9],
      [8,1],
      [3,7],
      [7,6],
      [1,5],
      [5,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.57174440034567,
      2.64650971631116,
      2.57174440034567,
      2.62945446169069,
      2.57174440034567,
      2.57174440034567,
      2.62945446169069,
      2.57174440034567,
      2.62945446169069,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.64650971631116,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.64650971631116,
      2.57174440034567,
      2.62945446169069,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567,
      2.62945446169069,
      2.57174440034567,
      2.57174440034567,
      2.57174440034567];

   var subtrees = [[56,57],
      [54,55],
      [52,53],
      [50,51],
      [48,49],
      [47,56,57],
      [45,46,54,55],
      [43,44],
      [41,42],
      [40,52,53],
      [38,39,48,49,50,51],
      [36,37],
      [35,47,56,57],
      [33,34],
      [31,32,43,44,45,46,54,55],
      [29,30,41,42],
      [27,28],
      [26,40,52,53],
      [24,25],
      [23,36,37,38,39,48,49,50,51],
      [21,22,33,34,35,47,56,57],
      [19,20],
      [18,29,30,31,32,41,42,43,44,45,46,54,55],
      [16,17,27,28],
      [14,15,24,25,26,40,52,53],
      [13,23,36,37,38,39,48,49,50,51],
      [11,12,21,22,33,34,35,47,56,57],
      [9,10,19,20],
      [8,18,29,30,31,32,41,42,43,44,45,46,54,55],
      [6,7,14,15,16,17,24,25,26,27,28,40,52,53],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,38,39,47,48,49,50,51,56,57]];

   var polytoperoot = [[-0.554822604893582,-0.55482260489358,0.554822604893581],
      [-0.309239158139057,-0.746569369596151,0.746569369596151],
      [0.707106781186548,-0.464466094067258,-0.171572875253805]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.784638, 0, 0));
   allpoints.push(new PMPoint(-0.162504, 0.578131, 0));
   allpoints.push(new PMPoint(-0.301209, 0.493466, 0));
   allpoints.push(new PMPoint(-0.301209, -0.493466, 0));
   allpoints.push(new PMPoint(-0.162504, -0.578131, 0));
   allpoints.push(new PMPoint(-0.243756, 1.6848, 0));
   allpoints.push(new PMPoint(-0.602419, 0.986932, 0));
   allpoints.push(new PMPoint(-0.0812519, 1.6848, 0));
   allpoints.push(new PMPoint(-0.834808, 0.0525425, 0));
   allpoints.push(new PMPoint(-0.360704, -0.451805, 0));
   allpoints.push(new PMPoint(-0.602419, -0.986932, 0));
   allpoints.push(new PMPoint(-0.243756, -1.6848, 0));
   allpoints.push(new PMPoint(-0.0812519, -1.6848, 0));
   allpoints.push(new PMPoint(-1.1909, 1.10667, 0));
   allpoints.push(new PMPoint(-1.179, 0.944599, 0));
   allpoints.push(new PMPoint(-1.16914, 0.87264, 0));
   allpoints.push(new PMPoint(-0.937283, 0.220426, 0));
   allpoints.push(new PMPoint(0.86589, 1.10667, 0));
   allpoints.push(new PMPoint(-1.30785, -0.452806, 0));
   allpoints.push(new PMPoint(-0.833924, -0.783917, 0));
   allpoints.push(new PMPoint(-1.179, -0.944599, 0));
   allpoints.push(new PMPoint(-1.1909, -1.10667, 0));
   allpoints.push(new PMPoint(0.86589, -1.10667, 0));
   allpoints.push(new PMPoint(-2.21232, 1.54026, 0));
   allpoints.push(new PMPoint(-1.75558, 0.902266, 0));
   allpoints.push(new PMPoint(-2.13804, 1.6848, 0));
   allpoints.push(new PMPoint(-1.68084, 0.603563, 0));
   allpoints.push(new PMPoint(-1.60297, 0.0306992, 0));
   allpoints.push(new PMPoint(1.24138, 0.637999, 0));
   allpoints.push(new PMPoint(1.01547, 1.17017, 0));
   allpoints.push(new PMPoint(1.0046, 1.19133, 0));
   allpoints.push(new PMPoint(0.703386, 1.6848, 0));
   allpoints.push(new PMPoint(-1.75558, -0.902266, 0));
   allpoints.push(new PMPoint(-2.21232, -1.54026, 0));
   allpoints.push(new PMPoint(-2.13804, -1.6848, 0));
   allpoints.push(new PMPoint(1.01547, -1.17017, 0));
   allpoints.push(new PMPoint(1.24138, -0.637999, 0));
   allpoints.push(new PMPoint(0.703386, -1.6848, 0));
   allpoints.push(new PMPoint(1.0046, -1.19133, 0));
   allpoints.push(new PMPoint(-1.1909, 2.26293, 0));
   allpoints.push(new PMPoint(1.81872, 0.668293, 0));
   allpoints.push(new PMPoint(1.68461, 1.34738, 0));
   allpoints.push(new PMPoint(1.0046, 2.17826, 0));
   allpoints.push(new PMPoint(0.86589, 2.26293, 0));
   allpoints.push(new PMPoint(1.53819, 1.63226, 0));
   allpoints.push(new PMPoint(1.06409, 2.1366, 0));
   allpoints.push(new PMPoint(-1.1909, -2.26293, 0));
   allpoints.push(new PMPoint(0.86589, -2.26293, 0));
   allpoints.push(new PMPoint(1.0046, -2.17826, 0));
   allpoints.push(new PMPoint(1.06409, -2.1366, 0));
   allpoints.push(new PMPoint(1.53819, -1.63226, 0));
   allpoints.push(new PMPoint(-1.2028, 2.425, 0));
   allpoints.push(new PMPoint(-1.77938, 2.38266, 0));
   allpoints.push(new PMPoint(2.01123, 2.1376, 0));
   allpoints.push(new PMPoint(1.53731, 2.46871, 0));
   allpoints.push(new PMPoint(-1.77938, -2.38266, 0));
   allpoints.push(new PMPoint(-1.2028, -2.425, 0));

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

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 22, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 34, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 22, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 1, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 1, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 23, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 23, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 13, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 13, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 57, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 47, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 53, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 32, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 18, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 5, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 13, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 6, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 22, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 35, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 39, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 38, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
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
