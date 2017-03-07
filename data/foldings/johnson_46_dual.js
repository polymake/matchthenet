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

   var axes = [[72,71],
      [60,59],
      [54,53],
      [50,49],
      [46,45],
      [43,42],
      [35,34],
      [32,31],
      [31,10],
      [30,29],
      [26,25],
      [24,23],
      [20,19],
      [18,17],
      [4,18],
      [15,14],
      [13,12],
      [10,9],
      [0,10],
      [9,3],
      [8,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.50313724561367,
      2.5351507732236,
      2.33921022994151,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.50313724561367,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.5351507732236,
      2.5351507732236,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.50313724561367,
      2.33921022994151,
      2.50313724561367,
      2.33921022994151];

   var subtrees = [[80,81],
      [77,78,79],
      [75,76],
      [73,74],
      [70,71,72,80,81],
      [67,68,69],
      [64,65,66],
      [61,62,63],
      [58,59,60,77,78,79],
      [55,56,57],
      [53,54,75,76],
      [51,52],
      [48,49,50,73,74],
      [45,46,47,70,71,72,80,81],
      [42,43,44,67,68,69],
      [39,40,41],
      [36,37,38],
      [33,34,35,64,65,66],
      [31,32,58,59,60,61,62,63,77,78,79],
      [28,29,30,55,56,57],
      [25,26,27,53,54,75,76],
      [22,23,24,51,52],
      [19,20,21,48,49,50,73,74],
      [17,18,42,43,44,45,46,47,67,68,69,70,71,72,80,81],
      [14,15,16,39,40,41],
      [11,12,13,36,37,38],
      [9,10,28,29,30,31,32,33,34,35,55,56,57,58,59,60,61,62,63,64,65,66,77,78,79],
      [6,7,8,22,23,24,25,26,27,51,52,53,54,75,76],
      [4,5,14,15,16,17,18,19,20,21,39,40,41,42,43,44,45,46,47,48,49,50,67,68,69,70,71,72,73,74,80,81]];

   var polytoperoot = [[0,-1.19853950053886,-0.740738148192339],
      [-0.37084205305535,-0.872084297462969,0.061057309414159],
      [-0.649152622717062,0.274696855652065,-0.0192323734751764]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.742551, 0, 0));
   allpoints.push(new PMPoint(0.753742, 0.409291, 0));
   allpoints.push(new PMPoint(0.404369, 0.622791, 0));
   allpoints.push(new PMPoint(0.404369, -0.622791, 0));
   allpoints.push(new PMPoint(0.753742, -0.409291, 0));
   allpoints.push(new PMPoint(1.64719, 0.222238, 0));
   allpoints.push(new PMPoint(1.71695, 0.524175, 0));
   allpoints.push(new PMPoint(1.47893, 0.722625, 0));
   allpoints.push(new PMPoint(0.0671837, 0.855063, 0));
   allpoints.push(new PMPoint(-0.30214, 0.678302, 0));
   allpoints.push(new PMPoint(1.41146, 0.846889, 0));
   allpoints.push(new PMPoint(1.37463, 1.15458, 0));
   allpoints.push(new PMPoint(1.0834, 1.2605, 0));
   allpoints.push(new PMPoint(1.47893, -0.722625, 0));
   allpoints.push(new PMPoint(1.71695, -0.524175, 0));
   allpoints.push(new PMPoint(1.64719, -0.222238, 0));
   allpoints.push(new PMPoint(-0.30214, -0.678302, 0));
   allpoints.push(new PMPoint(0.0671837, -0.855063, 0));
   allpoints.push(new PMPoint(1.0834, -1.2605, 0));
   allpoints.push(new PMPoint(1.37463, -1.15458, 0));
   allpoints.push(new PMPoint(1.41146, -0.846889, 0));
   allpoints.push(new PMPoint(1.8852, 0.0237879, 0));
   allpoints.push(new PMPoint(2.61039, 0.337123, 0));
   allpoints.push(new PMPoint(2.62158, 0.746413, 0));
   allpoints.push(new PMPoint(2.57207, 0.893651, 0));
   allpoints.push(new PMPoint(2.31587, 1.21303, 0));
   allpoints.push(new PMPoint(1.54869, 1.02456, 0));
   allpoints.push(new PMPoint(0.710608, 1.50255, 0));
   allpoints.push(new PMPoint(0.495356, 1.72548, 0));
   allpoints.push(new PMPoint(0.199299, 1.63392, 0));
   allpoints.push(new PMPoint(-0.68057, 0.521987, 0));
   allpoints.push(new PMPoint(-0.733439, 0.115971, 0));
   allpoints.push(new PMPoint(0.0583313, 1.645, 0));
   allpoints.push(new PMPoint(-0.219794, 1.78167, 0));
   allpoints.push(new PMPoint(-0.467222, 1.59509, 0));
   allpoints.push(new PMPoint(1.95048, 1.69539, 0));
   allpoints.push(new PMPoint(1.82213, 2.0842, 0));
   allpoints.push(new PMPoint(1.04657, 1.5682, 0));
   allpoints.push(new PMPoint(1.54869, -1.02456, 0));
   allpoints.push(new PMPoint(2.45333, -1.2468, 0));
   allpoints.push(new PMPoint(2.44214, -0.83751, 0));
   allpoints.push(new PMPoint(0.199299, -1.63392, 0));
   allpoints.push(new PMPoint(0.495356, -1.72548, 0));
   allpoints.push(new PMPoint(0.710608, -1.50255, 0));
   allpoints.push(new PMPoint(-0.467222, -1.59509, 0));
   allpoints.push(new PMPoint(-0.219794, -1.78167, 0));
   allpoints.push(new PMPoint(0.0583313, -1.645, 0));
   allpoints.push(new PMPoint(1.04657, -1.5682, 0));
   allpoints.push(new PMPoint(1.70428, -2.00579, 0));
   allpoints.push(new PMPoint(2.05366, -1.79229, 0));
   allpoints.push(new PMPoint(2.95976, 0.123622, 0));
   allpoints.push(new PMPoint(3.36413, 0.746413, 0));
   allpoints.push(new PMPoint(3.16377, 1.34229, 0));
   allpoints.push(new PMPoint(2.46527, 1.59424, 0));
   allpoints.push(new PMPoint(0.651144, 2.64389, 0));
   allpoints.push(new PMPoint(0.243754, 2.60294, 0));
   allpoints.push(new PMPoint(-0.0159524, 1.85686, 0));
   allpoints.push(new PMPoint(-0.873239, 1.41424, 0));
   allpoints.push(new PMPoint(-1.17744, 1.3551, 0));
   allpoints.push(new PMPoint(-1.26187, 1.05694, 0));
   allpoints.push(new PMPoint(-1.34793, 0.944736, 0));
   allpoints.push(new PMPoint(-1.61401, 0.785894, 0));
   allpoints.push(new PMPoint(-1.59226, 0.476767, 0));
   allpoints.push(new PMPoint(-0.359792, 2.55915, 0));
   allpoints.push(new PMPoint(-0.755785, 2.66324, 0));
   allpoints.push(new PMPoint(-0.745347, 1.73176, 0));
   allpoints.push(new PMPoint(-0.0159524, -1.85686, 0));
   allpoints.push(new PMPoint(0.290287, -2.73661, 0));
   allpoints.push(new PMPoint(0.627472, -2.50434, 0));
   allpoints.push(new PMPoint(-0.745347, -1.73176, 0));
   allpoints.push(new PMPoint(-0.754199, -2.5217, 0));
   allpoints.push(new PMPoint(-0.384876, -2.69846, 0));
   allpoints.push(new PMPoint(1.71547, -2.41508, 0));
   allpoints.push(new PMPoint(2.45802, -2.41508, 0));
   allpoints.push(new PMPoint(2.99471, 2.06534, 0));
   allpoints.push(new PMPoint(2.59362, 1.98305, 0));
   allpoints.push(new PMPoint(-1.86289, 1.9859, 0));
   allpoints.push(new PMPoint(-2.05039, 1.62191, 0));
   allpoints.push(new PMPoint(-1.56607, 0.997803, 0));
   allpoints.push(new PMPoint(-1.09138, -2.75397, 0));
   allpoints.push(new PMPoint(-0.687015, -3.37676, 0));

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
   allpoints[62].makesphere(0.02,points_material);
   allpoints[63].makesphere(0.02,points_material);
   allpoints[64].makesphere(0.02,points_material);
   allpoints[65].makesphere(0.02,points_material);
   allpoints[66].makesphere(0.02,points_material);
   allpoints[67].makesphere(0.02,points_material);
   allpoints[68].makesphere(0.02,points_material);
   allpoints[69].makesphere(0.02,points_material);
   allpoints[70].makesphere(0.02,points_material);
   allpoints[71].makesphere(0.02,points_material);
   allpoints[72].makesphere(0.02,points_material);
   allpoints[73].makesphere(0.02,points_material);
   allpoints[74].makesphere(0.02,points_material);
   allpoints[75].makesphere(0.02,points_material);
   allpoints[76].makesphere(0.02,points_material);
   allpoints[77].makesphere(0.02,points_material);
   allpoints[78].makesphere(0.02,points_material);
   allpoints[79].makesphere(0.02,points_material);
   allpoints[80].makesphere(0.02,points_material);
   allpoints[81].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[62].vector);
   faces.vertices.push(allpoints[63].vector);
   faces.vertices.push(allpoints[64].vector);
   faces.vertices.push(allpoints[65].vector);
   faces.vertices.push(allpoints[66].vector);
   faces.vertices.push(allpoints[67].vector);
   faces.vertices.push(allpoints[68].vector);
   faces.vertices.push(allpoints[69].vector);
   faces.vertices.push(allpoints[70].vector);
   faces.vertices.push(allpoints[71].vector);
   faces.vertices.push(allpoints[72].vector);
   faces.vertices.push(allpoints[73].vector);
   faces.vertices.push(allpoints[74].vector);
   faces.vertices.push(allpoints[75].vector);
   faces.vertices.push(allpoints[76].vector);
   faces.vertices.push(allpoints[77].vector);
   faces.vertices.push(allpoints[78].vector);
   faces.vertices.push(allpoints[79].vector);
   faces.vertices.push(allpoints[80].vector);
   faces.vertices.push(allpoints[81].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 5, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 18, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 30, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 4, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 10, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 4, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 18, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 58, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 60, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 47, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 68, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 57, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 70, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 72, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 77, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 79, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 53, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 72, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 71, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(74, 50, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 49, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 51, 52, undefined, undefined, 0));


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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[24].vector);
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
