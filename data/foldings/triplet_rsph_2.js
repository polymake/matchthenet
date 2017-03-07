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

   var axes = [[34,49],
      [33,47],
      [32,46],
      [21,45],
      [45,31],
      [31,44],
      [36,25],
      [24,35],
      [34,23],
      [22,33],
      [33,14],
      [32,21],
      [21,31],
      [31,13],
      [19,30],
      [29,19],
      [11,28],
      [28,18],
      [18,27],
      [26,17],
      [5,26],
      [17,25],
      [24,16],
      [15,23],
      [22,14],
      [7,21],
      [21,13],
      [19,6],
      [12,19],
      [11,18],
      [18,5],
      [5,17],
      [17,10],
      [9,16],
      [15,9],
      [8,14],
      [7,13],
      [3,12],
      [12,6],
      [11,5],
      [5,10],
      [9,2],
      [4,9],
      [8,4],
      [7,3],
      [3,6],
      [2,5],
      [5,1],
      [4,2],
      [0,4],
      [1,3],
      [3,0],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.78585535187642,
      2.59596810798186,
      2.78818788914739,
      2.6319388451968,
      2.46688060764369,
      2.34434003401004,
      2.95351108006961,
      2.93229031485704,
      2.69105474450128,
      2.72545951158495,
      2.79060792986905,
      1.98402840722449,
      2.8323219757992,
      3.07655716888199,
      2.9130691105282,
      2.60943949849834,
      2.40440395091556,
      2.09562925011588,
      2.34850152510449,
      2.5891645959871,
      2.82492302933586,
      2.76327404455594,
      2.3494631281276,
      2.69674913610117,
      2.71792532742339,
      3.09561719625138,
      2.23425655607372,
      3.02696621741647,
      2.74165003970126,
      2.74443428454591,
      2.89129064329666,
      3.10552902704134,
      2.38288737372574,
      3.05876832281564,
      2.70289814960342,
      3.12059963347344,
      2.93224269200818,
      2.53992042220587,
      2.80605729228794,
      2.84998106042012,
      2.52487994505831,
      2.59192853316404,
      2.81078531111667,
      2.52827494891868,
      2.53822020758353,
      2.85054731116352,
      3.06002521956949,
      1.82188715844005,
      2.54842554533725,
      2.35562618986493,
      2.55306662229391,
      2.70448402130353,
      2.70503236239151,
      3.118209002497,
      2.12922595257447];

   var subtrees = [[57],
      [56],
      [55],
      [54],
      [53],
      [52],
      [51],
      [50],
      [49,57],
      [48],
      [47,56],
      [46,55],
      [45,53,54],
      [44,52],
      [43],
      [42],
      [41],
      [40],
      [39],
      [38],
      [37],
      [36,51],
      [35,50],
      [34,49,57],
      [33,47,48,56],
      [32,46,55],
      [31,44,45,52,53,54],
      [30,43],
      [29,42],
      [28,40,41],
      [27,39],
      [26,37,38],
      [25,36,51],
      [24,35,50],
      [23,34,49,57],
      [22,33,47,48,56],
      [21,31,32,44,45,46,52,53,54,55],
      [20],
      [19,29,30,42,43],
      [18,27,28,39,40,41],
      [17,25,26,36,37,38,51],
      [16,24,35,50],
      [15,23,34,49,57],
      [14,22,33,47,48,56],
      [13,21,31,32,44,45,46,52,53,54,55],
      [12,19,20,29,30,42,43],
      [11,18,27,28,39,40,41],
      [10,17,25,26,36,37,38,51],
      [9,15,16,23,24,34,35,49,50,57],
      [8,14,22,33,47,48,56],
      [7,13,21,31,32,44,45,46,52,53,54,55],
      [6,12,19,20,29,30,42,43],
      [5,10,11,17,18,25,26,27,28,36,37,38,39,40,41,51],
      [4,8,9,14,15,16,22,23,24,33,34,35,47,48,49,50,56,57],
      [3,6,7,12,13,19,20,21,29,30,31,32,42,43,44,45,46,52,53,54,55]];

   var polytoperoot = [[-0.59831883089194,0.441556122843216,-0.687699762691556],
      [-1.76488553872054e+47,-3.69069350268683e+46,-3.11301921349873e+47],
      [2.19941584944215e+45,-1.45042224911015e+47,1.59488005303118e+46]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.405653, 0, 0));
   allpoints.push(new PMPoint(-0.165953, 0.945774, 0));
   allpoints.push(new PMPoint(-0.067529, -0.838018, 0));
   allpoints.push(new PMPoint(-0.346841, 0.369516, 0));
   allpoints.push(new PMPoint(1.12575, 0.368812, 0));
   allpoints.push(new PMPoint(-0.637623, -0.321629, 0));
   allpoints.push(new PMPoint(1.3088, -0.889415, 0));
   allpoints.push(new PMPoint(-0.710796, -0.0691223, 0));
   allpoints.push(new PMPoint(-0.37163, 1.00032, 0));
   allpoints.push(new PMPoint(1.67007, -0.089339, 0));
   allpoints.push(new PMPoint(0.131403, 1.35464, 0));
   allpoints.push(new PMPoint(-0.418683, -0.990191, 0));
   allpoints.push(new PMPoint(-0.0633369, -1.40883, 0));
   allpoints.push(new PMPoint(-1.15371, 0.694003, 0));
   allpoints.push(new PMPoint(-0.977582, 0.968261, 0));
   allpoints.push(new PMPoint(-0.0544646, 1.43889, 0));
   allpoints.push(new PMPoint(1.72333, 0.137269, 0));
   allpoints.push(new PMPoint(1.31256, 1.20058, 0));
   allpoints.push(new PMPoint(-0.835909, -1.05659, 0));
   allpoints.push(new PMPoint(-0.431532, -1.27773, 0));
   allpoints.push(new PMPoint(0.683308, -1.99665, 0));
   allpoints.push(new PMPoint(-1.21044, 0.124774, 0));
   allpoints.push(new PMPoint(-0.579089, 1.39586, 0));
   allpoints.push(new PMPoint(-0.493334, 1.43006, 0));
   allpoints.push(new PMPoint(2.47226, -0.247788, 0));
   allpoints.push(new PMPoint(1.5503, 0.432778, 0));
   allpoints.push(new PMPoint(1.40102, 0.700308, 0));
   allpoints.push(new PMPoint(1.11525, 1.66015, 0));
   allpoints.push(new PMPoint(-0.486517, -1.26991, 0));
   allpoints.push(new PMPoint(-1.13366, -0.524563, 0));
   allpoints.push(new PMPoint(-0.190572, -2.19512, 0));
   allpoints.push(new PMPoint(1.27155, -1.70626, 0));
   allpoints.push(new PMPoint(-1.50547, 0.494702, 0));
   allpoints.push(new PMPoint(-1.37869, 1.23502, 0));
   allpoints.push(new PMPoint(-0.127772, 2.59676, 0));
   allpoints.push(new PMPoint(2.06674, 0.73604, 0));
   allpoints.push(new PMPoint(1.55042, 0.441751, 0));
   allpoints.push(new PMPoint(1.55116, 0.441711, 0));
   allpoints.push(new PMPoint(1.74907, 0.665868, 0));
   allpoints.push(new PMPoint(1.2434, 1.94017, 0));
   allpoints.push(new PMPoint(1.11614, 1.9681, 0));
   allpoints.push(new PMPoint(-1.10939, -1.11105, 0));
   allpoints.push(new PMPoint(-1.11475, -1.05356, 0));
   allpoints.push(new PMPoint(-0.318026, -1.99903, 0));
   allpoints.push(new PMPoint(0.063542, -2.53146, 0));
   allpoints.push(new PMPoint(1.35253, -2.66202, 0));
   allpoints.push(new PMPoint(-1.63284, 0.644117, 0));
   allpoints.push(new PMPoint(-1.65884, -0.156532, 0));
   allpoints.push(new PMPoint(-1.46137, 2.24679, 0));
   allpoints.push(new PMPoint(-0.665839, 2.64363, 0));
   allpoints.push(new PMPoint(2.80591, 0.662541, 0));
   allpoints.push(new PMPoint(-0.670523, -2.5677, 0));
   allpoints.push(new PMPoint(-0.424254, -2.8129, 0));
   allpoints.push(new PMPoint(0.74288, -2.93847, 0));
   allpoints.push(new PMPoint(1.85991, -2.47687, 0));
   allpoints.push(new PMPoint(-1.91737, 0.0480393, 0));
   allpoints.push(new PMPoint(-1.84343, 1.55311, 0));

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

   faces.faces.push(new THREE.Face3(8, 14, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 47, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 14, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 47, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 9, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 23, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 16, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 4, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 12, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 52, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 30, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 9, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 6, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 31, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 16, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 5, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 16, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 3, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 6, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 33, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 13, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 19, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 30, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 23, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 49, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 31, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 13, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 21, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 3, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 13, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 7, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 26, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 35, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 21, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 10, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 5, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 5, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 46, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 25, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 25, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 10, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 17, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 17, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 27, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 18, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 28, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 18, 28, undefined, undefined, 0));


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
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[11].vector);
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
