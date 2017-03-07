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

   var axes = [[58,57],
      [56,55],
      [49,48],
      [47,46],
      [28,44],
      [41,24],
      [40,39],
      [37,36],
      [35,34],
      [33,32],
      [31,16],
      [15,30],
      [29,28],
      [28,27],
      [24,12],
      [25,24],
      [22,21],
      [20,19],
      [18,17],
      [16,15],
      [6,16],
      [15,5],
      [14,13],
      [12,11],
      [4,12],
      [10,9],
      [8,2],
      [5,3],
      [7,6],
      [6,5],
      [1,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380543,
      2.67794504458899,
      2.67794504458899,
      2.48923451380543,
      2.48923451380543,
      2.48923451380543,
      2.95288212280623,
      2.95288212280623,
      2.95288212280623,
      2.22315446657926,
      2.22315446657926,
      2.48923451380543,
      2.48923451380543,
      2.51327412287183,
      2.95288212280623,
      2.67794504458899,
      2.12437068569194,
      2.12437068569194,
      2.12437068569194,
      2.77672882547631,
      2.77672882547631,
      2.67794504458899,
      2.77672882547631,
      2.12437068569194,
      2.95288212280623,
      2.22315446657926,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.22315446657926,
      2.77672882547631,
      2.12437068569194,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

   var subtrees = [[67],
      [66],
      [63,64,65],
      [60,61,62],
      [57,58,59,67],
      [54,55,56,66],
      [53],
      [52],
      [51],
      [50],
      [48,49,63,64,65],
      [46,47,60,61,62],
      [45],
      [44,57,58,59,67],
      [42,43],
      [41,54,55,56,66],
      [38,39,40,53],
      [36,37,52],
      [34,35,51],
      [32,33,50],
      [31,48,49,63,64,65],
      [30,46,47,60,61,62],
      [27,28,29,44,45,57,58,59,67],
      [26],
      [24,25,41,42,43,54,55,56,66],
      [23],
      [21,22,38,39,40,53],
      [19,20,36,37,52],
      [17,18,34,35,51],
      [15,16,30,31,32,33,46,47,48,49,50,60,61,62,63,64,65],
      [13,14,27,28,29,44,45,57,58,59,67],
      [11,12,24,25,26,41,42,43,54,55,56,66],
      [9,10,23],
      [8,21,22,38,39,40,53],
      [5,6,7,15,16,17,18,19,20,30,31,32,33,34,35,36,37,46,47,48,49,50,51,52,60,61,62,63,64,65],
      [4,11,12,13,14,24,25,26,27,28,29,41,42,43,44,45,54,55,56,57,58,59,66,67]];

   var polytoperoot = [[0.473152200736585,-0.585929065858046,-0.54285213652631],
      [1.61803398874989,-2.61803398874989,-1],
      [-0.584848283814045,-0.94630440147317,1.53115268528721]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.584848, 0, 0));
   allpoints.push(new PMPoint(0.584848, 0.584848, 0));
   allpoints.push(new PMPoint(0, 0.584848, 0));
   allpoints.push(new PMPoint(0.292424, -0.506493, 0));
   allpoints.push(new PMPoint(-0.556224, 0.765576, 0));
   allpoints.push(new PMPoint(-0.899989, 0.292424, 0));
   allpoints.push(new PMPoint(-0.556224, -0.180728, 0));
   allpoints.push(new PMPoint(0.292424, 1.09134, 0));
   allpoints.push(new PMPoint(1.1697, 0, 0));
   allpoints.push(new PMPoint(1.1697, 0.584848, 0));
   allpoints.push(new PMPoint(-0.506493, -0.292424, 0));
   allpoints.push(new PMPoint(-0.214069, -0.798918, 0));
   allpoints.push(new PMPoint(0.798918, -0.798918, 0));
   allpoints.push(new PMPoint(1.09134, -0.292424, 0));
   allpoints.push(new PMPoint(-1.02938, 1.10934, 0));
   allpoints.push(new PMPoint(-1.37314, 0.636189, 0));
   allpoints.push(new PMPoint(-1.37314, -0.0513411, 0));
   allpoints.push(new PMPoint(-1.02938, -0.524493, 0));
   allpoints.push(new PMPoint(0.180728, 1.14107, 0));
   allpoints.push(new PMPoint(-0.375496, 1.3218, 0));
   allpoints.push(new PMPoint(1.09134, 0.877272, 0));
   allpoints.push(new PMPoint(0.798918, 1.38377, 0));
   allpoints.push(new PMPoint(1.67619, 0.292424, 0));
   allpoints.push(new PMPoint(0.0783548, -1.30541, 0));
   allpoints.push(new PMPoint(0.584848, -1.01299, 0));
   allpoints.push(new PMPoint(-0.798918, -0.798918, 0));
   allpoints.push(new PMPoint(1.19026, -1.23354, 0));
   allpoints.push(new PMPoint(1.72454, -0.995665, 0));
   allpoints.push(new PMPoint(1.66341, -0.414021, 0));
   allpoints.push(new PMPoint(-0.49509, 1.34722, 0));
   allpoints.push(new PMPoint(-1.43427, 0.0545449, 0));
   allpoints.push(new PMPoint(-1.50253, 1.45311, 0));
   allpoints.push(new PMPoint(-1.84629, 0.979955, 0));
   allpoints.push(new PMPoint(-1.84629, -0.395106, 0));
   allpoints.push(new PMPoint(-1.50253, -0.868258, 0));
   allpoints.push(new PMPoint(0.361456, 1.6973, 0));
   allpoints.push(new PMPoint(-0.194768, 1.87802, 0));
   allpoints.push(new PMPoint(1.66341, 0.998869, 0));
   allpoints.push(new PMPoint(1.72454, 1.58051, 0));
   allpoints.push(new PMPoint(1.19026, 1.81839, 0));
   allpoints.push(new PMPoint(0.584848, -1.59784, 0));
   allpoints.push(new PMPoint(-0.720563, -1.09134, 0));
   allpoints.push(new PMPoint(-0.428139, -1.59784, 0));
   allpoints.push(new PMPoint(1.66341, -1.57731, 0));
   allpoints.push(new PMPoint(2.1977, -0.6519, 0));
   allpoints.push(new PMPoint(-0.73297, 1.88151, 0));
   allpoints.push(new PMPoint(-1.26726, 1.64363, 0));
   allpoints.push(new PMPoint(-1.95479, 0.697323, 0));
   allpoints.push(new PMPoint(-2.01592, 0.115678, 0));
   allpoints.push(new PMPoint(-2.08417, 1.51424, 0));
   allpoints.push(new PMPoint(-2.08417, -0.929392, 0));
   allpoints.push(new PMPoint(0.239859, 2.26936, 0));
   allpoints.push(new PMPoint(1.66341, 2.16216, 0));
   allpoints.push(new PMPoint(-0.356272, -1.69675, 0));
   allpoints.push(new PMPoint(-0.118393, -2.23104, 0));
   allpoints.push(new PMPoint(0.463251, -2.1699, 0));
   allpoints.push(new PMPoint(2.1977, -1.81519, 0));
   allpoints.push(new PMPoint(2.58904, -1.38056, 0));
   allpoints.push(new PMPoint(2.29661, -0.874069, 0));
   allpoints.push(new PMPoint(-0.794103, 2.46315, 0));
   allpoints.push(new PMPoint(-1.36617, 2.58475, 0));
   allpoints.push(new PMPoint(-1.6586, 2.07825, 0));
   allpoints.push(new PMPoint(-2.48907, 0.935202, 0));
   allpoints.push(new PMPoint(-2.88041, 0.500575, 0));
   allpoints.push(new PMPoint(-2.58799, -0.00591859, 0));
   allpoints.push(new PMPoint(0.225372, -2.70419, 0));
   allpoints.push(new PMPoint(2.76976, -1.93679, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 12, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 44, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 58, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 27, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 12, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 37, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 52, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 62, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 47, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 30, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 63, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 65, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 16, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 49, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 47, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 55, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 20, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 26, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 39, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 56, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 28, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 40, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 4, 13, undefined, undefined, 0));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
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
