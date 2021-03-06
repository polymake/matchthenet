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

   var axes = [[58,53],
      [47,56],
      [55,37],
      [35,53],
      [33,51],
      [47,30],
      [43,37],
      [19,43],
      [35,42],
      [42,17],
      [33,41],
      [41,15],
      [40,31],
      [14,40],
      [39,30],
      [13,39],
      [28,38],
      [38,12],
      [19,37],
      [35,17],
      [33,15],
      [14,31],
      [13,30],
      [28,12],
      [19,27],
      [27,7],
      [25,17],
      [6,25],
      [23,15],
      [5,23],
      [14,22],
      [13,21],
      [21,4],
      [20,12],
      [19,7],
      [1,18],
      [6,17],
      [16,0],
      [5,15],
      [14,1],
      [13,4],
      [0,12],
      [11,7],
      [1,11],
      [6,10],
      [10,0],
      [5,9],
      [9,1],
      [8,4],
      [0,8],
      [1,7],
      [6,0],
      [5,1],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481,
      2.80321785608481];

   var subtrees = [[61],
      [60],
      [59],
      [58,61],
      [57],
      [56,60],
      [55,59],
      [54],
      [53,58,61],
      [52],
      [51,57],
      [50],
      [49],
      [48],
      [47,56,60],
      [46],
      [45],
      [44],
      [43,54,55,59],
      [42,52,53,58,61],
      [41,50,51,57],
      [40,48,49],
      [39,46,47,56,60],
      [38,44,45],
      [37,43,54,55,59],
      [36],
      [35,42,52,53,58,61],
      [34],
      [33,41,50,51,57],
      [32],
      [31,40,48,49],
      [30,39,46,47,56,60],
      [29],
      [28,38,44,45],
      [27,36,37,43,54,55,59],
      [26],
      [25,34,35,42,52,53,58,61],
      [24],
      [23,32,33,41,50,51,57],
      [22,31,40,48,49],
      [21,29,30,39,46,47,56,60],
      [20,28,38,44,45],
      [19,27,36,37,43,54,55,59],
      [18,26],
      [17,25,34,35,42,52,53,58,61],
      [16,24],
      [15,23,32,33,41,50,51,57],
      [14,22,31,40,48,49],
      [13,21,29,30,39,46,47,56,60],
      [12,20,28,38,44,45],
      [11,18,19,26,27,36,37,43,54,55,59],
      [10,16,17,24,25,34,35,42,52,53,58,61],
      [9,14,15,22,23,31,32,33,40,41,48,49,50,51,57],
      [8,12,13,20,21,28,29,30,38,39,44,45,46,47,56,60],
      [7,11,18,19,26,27,36,37,43,54,55,59],
      [6,10,16,17,24,25,34,35,42,52,53,58,61],
      [5,9,14,15,22,23,31,32,33,40,41,48,49,50,51,57],
      [4,8,12,13,20,21,28,29,30,38,39,44,45,46,47,56,60],
      [3,6,7,10,11,16,17,18,19,24,25,26,27,34,35,36,37,42,43,52,53,54,55,58,59,61]];

   var polytoperoot = [[4.94312735145427e-15,-0.935540478876378,-0.578195813796961],
      [-0.182590061153846,-1.06890083601838,0],
      [-1.23606797749979,0.211145618000168,1.57158314865147e-14]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.15639, 0, 0));
   allpoints.push(new PMPoint(0.578196, 0.340316, 0));
   allpoints.push(new PMPoint(0.578196, -0.340316, 0));
   allpoints.push(new PMPoint(0.561324, 1.01102, 0));
   allpoints.push(new PMPoint(0.595067, 1.01102, 0));
   allpoints.push(new PMPoint(0.561324, -1.01102, 0));
   allpoints.push(new PMPoint(0.595067, -1.01102, 0));
   allpoints.push(new PMPoint(-0.0168715, 0.670702, 0));
   allpoints.push(new PMPoint(1.17326, 0.670702, 0));
   allpoints.push(new PMPoint(-0.0168715, -0.670702, 0));
   allpoints.push(new PMPoint(1.17326, -0.670702, 0));
   allpoints.push(new PMPoint(-0.611447, 0.981517, 0));
   allpoints.push(new PMPoint(-0.595067, 1.01102, 0));
   allpoints.push(new PMPoint(1.76784, 0.981517, 0));
   allpoints.push(new PMPoint(1.75146, 1.01102, 0));
   allpoints.push(new PMPoint(-0.611447, -0.981517, 0));
   allpoints.push(new PMPoint(-0.595067, -1.01102, 0));
   allpoints.push(new PMPoint(1.76784, -0.981517, 0));
   allpoints.push(new PMPoint(1.75146, -1.01102, 0));
   allpoints.push(new PMPoint(-0.594575, 0.310815, 0));
   allpoints.push(new PMPoint(-0.0168715, 1.35133, 0));
   allpoints.push(new PMPoint(1.75097, 0.310815, 0));
   allpoints.push(new PMPoint(1.17326, 1.35133, 0));
   allpoints.push(new PMPoint(-0.594575, -0.310815, 0));
   allpoints.push(new PMPoint(-0.0168715, -1.35133, 0));
   allpoints.push(new PMPoint(1.75097, -0.310815, 0));
   allpoints.push(new PMPoint(1.17326, -1.35133, 0));
   allpoints.push(new PMPoint(-1.17277, -0.0295011, 0));
   allpoints.push(new PMPoint(0, 2.02204, 0));
   allpoints.push(new PMPoint(-0.0337431, 2.02204, 0));
   allpoints.push(new PMPoint(2.32916, -0.0295011, 0));
   allpoints.push(new PMPoint(1.15639, 2.02204, 0));
   allpoints.push(new PMPoint(1.19013, 2.02204, 0));
   allpoints.push(new PMPoint(0, -2.02204, 0));
   allpoints.push(new PMPoint(-0.0337431, -2.02204, 0));
   allpoints.push(new PMPoint(1.15639, -2.02204, 0));
   allpoints.push(new PMPoint(1.19013, -2.02204, 0));
   allpoints.push(new PMPoint(-1.18964, 0.641201, 0));
   allpoints.push(new PMPoint(-0.611939, 1.68172, 0));
   allpoints.push(new PMPoint(2.34603, 0.641201, 0));
   allpoints.push(new PMPoint(1.76833, 1.68172, 0));
   allpoints.push(new PMPoint(-0.611939, -1.68172, 0));
   allpoints.push(new PMPoint(1.76833, -1.68172, 0));
   allpoints.push(new PMPoint(-1.76784, 0.981517, 0));
   allpoints.push(new PMPoint(-1.78422, 0.952015, 0));
   allpoints.push(new PMPoint(-1.20651, 1.99253, 0));
   allpoints.push(new PMPoint(-1.19013, 2.02204, 0));
   allpoints.push(new PMPoint(2.92423, 0.981517, 0));
   allpoints.push(new PMPoint(2.94061, 0.952015, 0));
   allpoints.push(new PMPoint(2.36291, 1.99253, 0));
   allpoints.push(new PMPoint(2.34653, 2.02204, 0));
   allpoints.push(new PMPoint(-1.20651, -1.99253, 0));
   allpoints.push(new PMPoint(-1.19013, -2.02204, 0));
   allpoints.push(new PMPoint(2.36291, -1.99253, 0));
   allpoints.push(new PMPoint(2.34653, -2.02204, 0));
   allpoints.push(new PMPoint(-0.611939, 2.36235, 0));
   allpoints.push(new PMPoint(1.76833, 2.36235, 0));
   allpoints.push(new PMPoint(-0.611939, -2.36235, 0));
   allpoints.push(new PMPoint(1.76833, -2.36235, 0));
   allpoints.push(new PMPoint(-0.62881, 3.03305, 0));
   allpoints.push(new PMPoint(-0.62881, -3.03305, 0));

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

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 10, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 8, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 12, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 1, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 16, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 4, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 24, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 1, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 4, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 1, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 9, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 17, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 1, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 15, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 17, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 4, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 11, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 12, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 23, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 7, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 12, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 25, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 21, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 22, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 7, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 30, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 31, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 12, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 17, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 15, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 39, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 42, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 15, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 38, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 40, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 27, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 52, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 15, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 19, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 31, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 30, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 19, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 30, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 41, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 53, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 51, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 53, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 43, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 37, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 60, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 61, 58, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
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
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[53].vector);
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
