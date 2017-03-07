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

   var axes = [[31,30],
      [25,24],
      [24,23],
      [20,19],
      [21,20],
      [16,15],
      [13,12],
      [9,8],
      [10,9],
      [6,5],
      [7,6],
      [2,1],
      [3,2],
      [0,4],
      [4,3],
      [1,0]];

   var angles = [2.34418802486869,
      2.39976215107938,
      1.89968435314633,
      2.81553385406811,
      3.08513735510895,
      2.19714995882852,
      1.22254526624931,
      2.22898698568611,
      2.8344477464284,
      1.81487507759712,
      1.79294391616638,
      1.67278901056345,
      2.24389570195179,
      2.54967172820895,
      1.75125693979399,
      2.55208620272609];

   var subtrees = [[55,56,57],
      [51,52,53,54],
      [48,49,50],
      [45,46,47],
      [44],
      [40,41,42,43],
      [37,38,39],
      [33,34,35,36],
      [30,31,32,55,56,57],
      [27,28,29],
      [23,24,25,26,48,49,50,51,52,53,54],
      [18,19,20,21,22,44,45,46,47],
      [15,16,17,40,41,42,43],
      [11,12,13,14,37,38,39],
      [8,9,10,30,31,32,33,34,35,36,55,56,57],
      [5,6,7,23,24,25,26,27,28,29,48,49,50,51,52,53,54]];

   var polytoperoot = [[-0.697277594117613,0.892527983120574,0.0695517003131206],
      [-0.381435064174269,0.783921192256043,0.494053708766405],
      [0.678997462552391,0.541175846709533,-0.334469251698308]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.928564, 0, 0));
   allpoints.push(new PMPoint(0.950444, 0.162481, 0));
   allpoints.push(new PMPoint(-0.242374, 0.841486, 0));
   allpoints.push(new PMPoint(-0.453202, 0.852264, 0));
   allpoints.push(new PMPoint(-0.557053, -1.12645, 0));
   allpoints.push(new PMPoint(0.660085, -0.822012, 0));
   allpoints.push(new PMPoint(0.900079, -0.5225, 0));
   allpoints.push(new PMPoint(0.674836, 1.43371, 0));
   allpoints.push(new PMPoint(0.586537, 1.76684, 0));
   allpoints.push(new PMPoint(-0.714044, 1.01401, 0));
   allpoints.push(new PMPoint(-0.759509, 0.87168, 0));
   allpoints.push(new PMPoint(-1.13835, 0.788109, 0));
   allpoints.push(new PMPoint(-1.52238, -1.11511, 0));
   allpoints.push(new PMPoint(-0.725651, -1.02598, 0));
   allpoints.push(new PMPoint(0.988489, 0.26554, 0));
   allpoints.push(new PMPoint(1.00182, 0.828641, 0));
   allpoints.push(new PMPoint(0.79771, 1.1735, 0));
   allpoints.push(new PMPoint(1.16, -0.469312, 0));
   allpoints.push(new PMPoint(1.80181, -0.272387, 0));
   allpoints.push(new PMPoint(1.83634, -0.103565, 0));
   allpoints.push(new PMPoint(1.29498, 0.166311, 0));
   allpoints.push(new PMPoint(1.04413, 0.219856, 0));
   allpoints.push(new PMPoint(1.40795, -1.57176, 0));
   allpoints.push(new PMPoint(1.47671, -1.5488, 0));
   allpoints.push(new PMPoint(1.50188, -1.31041, 0));
   allpoints.push(new PMPoint(1.40724, -0.962356, 0));
   allpoints.push(new PMPoint(-1.1794, -1.63183, 0));
   allpoints.push(new PMPoint(-0.479659, -2.00351, 0));
   allpoints.push(new PMPoint(0.962272, -1.83695, 0));
   allpoints.push(new PMPoint(0.572449, 2.00214, 0));
   allpoints.push(new PMPoint(-0.238017, 1.9065, 0));
   allpoints.push(new PMPoint(-1.03159, 1.23688, 0));
   allpoints.push(new PMPoint(1.03082, 1.24968, 0));
   allpoints.push(new PMPoint(1.35651, 1.82736, 0));
   allpoints.push(new PMPoint(1.06244, 2.32887, 0));
   allpoints.push(new PMPoint(0.607613, 2.00162, 0));
   allpoints.push(new PMPoint(-2.17452, 0.855166, 0));
   allpoints.push(new PMPoint(-2.78179, 0.250605, 0));
   allpoints.push(new PMPoint(-2.23703, -0.772963, 0));
   allpoints.push(new PMPoint(1.19601, 0.416294, 0));
   allpoints.push(new PMPoint(1.67722, 0.798225, 0));
   allpoints.push(new PMPoint(1.69232, 0.867899, 0));
   allpoints.push(new PMPoint(1.63786, 1.01637, 0));
   allpoints.push(new PMPoint(1.90043, 0.0621083, 0));
   allpoints.push(new PMPoint(2.15501, -0.345496, 0));
   allpoints.push(new PMPoint(1.96599, 0.0927773, 0));
   allpoints.push(new PMPoint(1.90192, 0.0615271, 0));
   allpoints.push(new PMPoint(0.60515, -2.78107, 0));
   allpoints.push(new PMPoint(1.72858, -2.49408, 0));
   allpoints.push(new PMPoint(2.16613, -1.89838, 0));
   allpoints.push(new PMPoint(2.2495, -1.56648, 0));
   allpoints.push(new PMPoint(2.3201, -1.4774, 0));
   allpoints.push(new PMPoint(1.98588, -1.0017, 0));
   allpoints.push(new PMPoint(1.83191, -0.965601, 0));
   allpoints.push(new PMPoint(0.752738, 2.53266, 0));
   allpoints.push(new PMPoint(0.710086, 2.63802, 0));
   allpoints.push(new PMPoint(-0.0225411, 2.73586, 0));

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

   faces.faces.push(new THREE.Face3(24, 23, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 6, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 57, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 43, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 29, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 51, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 36, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));


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
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[2].vector);
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
