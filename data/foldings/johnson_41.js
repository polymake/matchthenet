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

   var axes = [[52,51],
      [51,50],
      [49,48],
      [47,46],
      [45,44],
      [41,27],
      [24,39],
      [37,36],
      [35,34],
      [33,32],
      [15,31],
      [30,16],
      [27,26],
      [11,27],
      [25,24],
      [24,23],
      [22,21],
      [20,19],
      [18,17],
      [16,15],
      [15,6],
      [7,16],
      [14,13],
      [12,11],
      [11,4],
      [10,9],
      [3,8],
      [2,7],
      [6,5],
      [7,6],
      [4,0],
      [1,4],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380542,
      2.95288212280623,
      2.95288212280623,
      2.48923451380543,
      2.95288212280623,
      2.48923451380543,
      2.67794504458899,
      2.67794504458899,
      2.67794504458899,
      2.22315446657927,
      2.22315446657926,
      2.67794504458899,
      2.51327412287183,
      2.48923451380542,
      2.48923451380543,
      2.95288212280623,
      2.12437068569194,
      2.12437068569194,
      2.12437068569194,
      2.77672882547631,
      2.77672882547631,
      2.95288212280623,
      2.77672882547631,
      2.12437068569194,
      2.67794504458899,
      2.22315446657926,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.22315446657927,
      2.77672882547631,
      2.12437068569194,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

   var subtrees = [[67],
      [66],
      [65],
      [64],
      [63],
      [62],
      [59,60,61],
      [56,57,58],
      [53,54,55],
      [50,51,52,66,67],
      [48,49,65],
      [46,47,64],
      [43,44,45,63],
      [41,42,62],
      [40],
      [39,59,60,61],
      [38],
      [36,37,56,57,58],
      [34,35,53,54,55],
      [32,33,50,51,52,66,67],
      [31,48,49,65],
      [30,46,47,64],
      [29],
      [28],
      [26,27,41,42,43,44,45,62,63],
      [23,24,25,39,40,59,60,61],
      [21,22,38],
      [19,20,36,37,56,57,58],
      [17,18,34,35,53,54,55],
      [15,16,30,31,32,33,46,47,48,49,50,51,52,64,65,66,67],
      [13,14,29],
      [11,12,26,27,28,41,42,43,44,45,62,63],
      [9,10,23,24,25,39,40,59,60,61],
      [8,21,22,38],
      [5,6,7,15,16,17,18,19,20,30,31,32,33,34,35,36,37,46,47,48,49,50,51,52,53,54,55,56,57,58,64,65,66,67],
      [4,11,12,13,14,26,27,28,29,41,42,43,44,45,62,63]];

   var polytoperoot = [[0.946304401473169,-0.405201007028484,-0.250427994619288],
      [0.854101966249684,-1.09016994374947,-1],
      [-0.308720380805636,0.499520069163329,-0.808240449968965]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.584848, 0, 0));
   allpoints.push(new PMPoint(0.584848, 0.584848, 0));
   allpoints.push(new PMPoint(0, 0.584848, 0));
   allpoints.push(new PMPoint(0.292424, -0.506493, 0));
   allpoints.push(new PMPoint(1.14107, -0.180728, 0));
   allpoints.push(new PMPoint(1.48484, 0.292424, 0));
   allpoints.push(new PMPoint(1.14107, 0.765576, 0));
   allpoints.push(new PMPoint(0.292424, 1.09134, 0));
   allpoints.push(new PMPoint(-0.584848, 0.584848, 0));
   allpoints.push(new PMPoint(-0.584848, 0, 0));
   allpoints.push(new PMPoint(0.798918, -0.798918, 0));
   allpoints.push(new PMPoint(1.09134, -0.292424, 0));
   allpoints.push(new PMPoint(-0.506493, -0.292424, 0));
   allpoints.push(new PMPoint(-0.214069, -0.798918, 0));
   allpoints.push(new PMPoint(1.95799, 0.636189, 0));
   allpoints.push(new PMPoint(1.61422, 1.10934, 0));
   allpoints.push(new PMPoint(1.61422, -0.524493, 0));
   allpoints.push(new PMPoint(1.95799, -0.0513411, 0));
   allpoints.push(new PMPoint(0.960344, 1.3218, 0));
   allpoints.push(new PMPoint(0.40412, 1.14107, 0));
   allpoints.push(new PMPoint(-0.214069, 1.38377, 0));
   allpoints.push(new PMPoint(-0.506493, 0.877272, 0));
   allpoints.push(new PMPoint(-1.14107, 0.765576, 0));
   allpoints.push(new PMPoint(-1.48484, 0.292424, 0));
   allpoints.push(new PMPoint(-1.14107, -0.180728, 0));
   allpoints.push(new PMPoint(0, -1.01299, 0));
   allpoints.push(new PMPoint(0.506493, -1.30541, 0));
   allpoints.push(new PMPoint(1.38377, -0.798918, 0));
   allpoints.push(new PMPoint(-0.798918, -0.798918, 0));
   allpoints.push(new PMPoint(1.07994, 1.34722, 0));
   allpoints.push(new PMPoint(2.01912, 0.0545449, 0));
   allpoints.push(new PMPoint(2.43114, 0.979955, 0));
   allpoints.push(new PMPoint(2.08738, 1.45311, 0));
   allpoints.push(new PMPoint(2.08738, -0.868258, 0));
   allpoints.push(new PMPoint(2.43114, -0.395106, 0));
   allpoints.push(new PMPoint(0.779616, 1.87802, 0));
   allpoints.push(new PMPoint(0.223392, 1.6973, 0));
   allpoints.push(new PMPoint(-0.798918, 1.38377, 0));
   allpoints.push(new PMPoint(-1.72272, 0.82671, 0));
   allpoints.push(new PMPoint(-1.72272, -0.241861, 0));
   allpoints.push(new PMPoint(1.01299, -1.59784, 0));
   allpoints.push(new PMPoint(1.30541, -1.09134, 0));
   allpoints.push(new PMPoint(-0.434627, -1.40433, 0));
   allpoints.push(new PMPoint(-0.196748, -1.93861, 0));
   allpoints.push(new PMPoint(0.384897, -1.87748, 0));
   allpoints.push(new PMPoint(1.8521, 1.64363, 0));
   allpoints.push(new PMPoint(1.31782, 1.88151, 0));
   allpoints.push(new PMPoint(2.60077, 0.115678, 0));
   allpoints.push(new PMPoint(2.53963, 0.697323, 0));
   allpoints.push(new PMPoint(2.98737, 1.16068, 0));
   allpoints.push(new PMPoint(2.98737, 1.74553, 0));
   allpoints.push(new PMPoint(2.43114, 1.92626, 0));
   allpoints.push(new PMPoint(2.43114, -1.34141, 0));
   allpoints.push(new PMPoint(2.98737, -1.16068, 0));
   allpoints.push(new PMPoint(2.98737, -0.575834, 0));
   allpoints.push(new PMPoint(0.779616, 2.46287, 0));
   allpoints.push(new PMPoint(0.223392, 2.6436, 0));
   allpoints.push(new PMPoint(-0.120373, 2.17045, 0));
   allpoints.push(new PMPoint(-2.30436, 0.765576, 0));
   allpoints.push(new PMPoint(-2.42596, 0.193508, 0));
   allpoints.push(new PMPoint(-1.91946, -0.0989157, 0));
   allpoints.push(new PMPoint(0.506493, -1.89026, 0));
   allpoints.push(new PMPoint(0.147017, -2.41176, 0));
   allpoints.push(new PMPoint(1.79097, 2.22527, 0));
   allpoints.push(new PMPoint(3.07392, 0.459443, 0));
   allpoints.push(new PMPoint(3.49386, 1.45311, 0));
   allpoints.push(new PMPoint(2.86577, 2.3176, 0));

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

   faces.faces.push(new THREE.Face3(3, 8, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 4, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 39, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 59, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 60, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 27, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 62, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 34, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 66, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 16, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 31, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 49, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 65, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 64, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 47, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 51, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 7, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 4, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 29, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 4, undefined, undefined, 0));

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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
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
