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

   var axes = [[37,36],
      [33,32],
      [29,28],
      [28,12],
      [27,26],
      [23,22],
      [21,20],
      [19,18],
      [7,19],
      [15,14],
      [14,4],
      [13,12],
      [11,10],
      [3,11],
      [9,8],
      [8,3],
      [7,6],
      [6,1],
      [5,4],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.49644023606723,
      2.49644023606723,
      2.49990068208014,
      2.49990068208014,
      2.49644023606723,
      2.49644023606723,
      2.49644023606723,
      2.49990068208014,
      2.49990068208014,
      2.49990068208014,
      2.49990068208014,
      2.41893161835786,
      2.49990068208014,
      2.49990068208014,
      2.49990068208014,
      2.49990068208014,
      2.41893161835786,
      2.37717054350193,
      2.41893161835786,
      2.37717054350193,
      2.41893161835786,
      2.41893161835786,
      2.37717054350193,
      2.37717054350193];

   var subtrees = [[50,51],
      [48,49],
      [46,47],
      [44,45],
      [42,43],
      [40,41],
      [38,39],
      [36,37,50,51],
      [34,35],
      [32,33,48,49],
      [30,31],
      [28,29,44,45,46,47],
      [26,27,42,43],
      [24,25],
      [22,23,40,41],
      [20,21,38,39],
      [18,19,34,35,36,37,50,51],
      [16,17],
      [14,15,30,31,32,33,48,49],
      [12,13,28,29,44,45,46,47],
      [10,11,24,25,26,27,42,43],
      [8,9,20,21,22,23,38,39,40,41],
      [6,7,16,17,18,19,34,35,36,37,50,51],
      [4,5,12,13,14,15,28,29,30,31,32,33,44,45,46,47,48,49]];

   var polytoperoot = [[-0.34721337681457,-0.90901642184917,0],
      [0,-1.10009013694796,0.148119373281199],
      [0.68635220951104,0.0514290277686229,0.381966011250105]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.709143, 0, 0));
   allpoints.push(new PMPoint(0.340008, 0.605494, 0));
   allpoints.push(new PMPoint(-0.286301, 0.558979, 0));
   allpoints.push(new PMPoint(-0.286301, -0.558979, 0));
   allpoints.push(new PMPoint(0.340008, -0.605494, 0));
   allpoints.push(new PMPoint(1.03399, 0.630364, 0));
   allpoints.push(new PMPoint(0.668256, 1.14092, 0));
   allpoints.push(new PMPoint(-0.652602, 0.0825252, 0));
   allpoints.push(new PMPoint(-0.416435, -0.470114, 0));
   allpoints.push(new PMPoint(0.52464, 1.20577, 0));
   allpoints.push(new PMPoint(-0.0701589, 1.11975, 0));
   allpoints.push(new PMPoint(0.668256, -1.14092, 0));
   allpoints.push(new PMPoint(1.03399, -0.630364, 0));
   allpoints.push(new PMPoint(-0.0701589, -1.11975, 0));
   allpoints.push(new PMPoint(0.52464, -1.20577, 0));
   allpoints.push(new PMPoint(1.41647, 0.0507618, 0));
   allpoints.push(new PMPoint(1.66202, 0.628801, 0));
   allpoints.push(new PMPoint(1.64264, 0.785186, 0));
   allpoints.push(new PMPoint(1.25958, 1.24827, 0));
   allpoints.push(new PMPoint(-1.54972, 0.664554, 0));
   allpoints.push(new PMPoint(-1.74452, 0.323151, 0));
   allpoints.push(new PMPoint(-1.77005, 0.121287, 0));
   allpoints.push(new PMPoint(-1.66636, -0.257863, 0));
   allpoints.push(new PMPoint(-0.844, 1.92683, 0));
   allpoints.push(new PMPoint(-1.0341, 1.58278, 0));
   allpoints.push(new PMPoint(-0.307221, 2.16253, 0));
   allpoints.push(new PMPoint(-0.684929, 2.0537, 0));
   allpoints.push(new PMPoint(1.25958, -1.24827, 0));
   allpoints.push(new PMPoint(1.64264, -0.785186, 0));
   allpoints.push(new PMPoint(-1.0341, -1.58278, 0));
   allpoints.push(new PMPoint(-0.844, -1.92683, 0));
   allpoints.push(new PMPoint(-0.684929, -2.0537, 0));
   allpoints.push(new PMPoint(-0.307221, -2.16253, 0));
   allpoints.push(new PMPoint(1.54587, 2.32912, 0));
   allpoints.push(new PMPoint(1.15316, 2.31234, 0));
   allpoints.push(new PMPoint(2.02654, 1.99349, 0));
   allpoints.push(new PMPoint(1.73701, 2.25934, 0));
   allpoints.push(new PMPoint(-1.75024, 1.00263, 0));
   allpoints.push(new PMPoint(-2.40286, 0.657372, 0));
   allpoints.push(new PMPoint(-2.49086, -0.0385349, 0));
   allpoints.push(new PMPoint(-1.94473, -0.535379, 0));
   allpoints.push(new PMPoint(-0.215171, 2.54467, 0));
   allpoints.push(new PMPoint(-0.923673, 2.75234, 0));
   allpoints.push(new PMPoint(1.15316, -2.31234, 0));
   allpoints.push(new PMPoint(1.54587, -2.32912, 0));
   allpoints.push(new PMPoint(1.73701, -2.25934, 0));
   allpoints.push(new PMPoint(2.02654, -1.99349, 0));
   allpoints.push(new PMPoint(-0.923673, -2.75234, 0));
   allpoints.push(new PMPoint(-0.215171, -2.54467, 0));
   allpoints.push(new PMPoint(2.40074, 2.11381, 0));
   allpoints.push(new PMPoint(2.20926, 2.82686, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 3, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 11, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 31, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 12, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 19, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 33, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 12, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 28, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 46, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 39, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 49, 33, undefined, undefined, 0));


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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
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
