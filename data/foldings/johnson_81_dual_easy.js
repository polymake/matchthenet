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

   var axes = [[73,72],
      [65,64],
      [59,58],
      [37,57],
      [55,54],
      [36,53],
      [52,51],
      [49,33],
      [46,45],
      [44,28],
      [41,40],
      [39,38],
      [37,23],
      [22,36],
      [36,3],
      [35,34],
      [21,33],
      [30,29],
      [28,16],
      [2,28],
      [27,26],
      [25,24],
      [23,13],
      [3,23],
      [22,3],
      [11,21],
      [21,2],
      [20,19],
      [18,17],
      [2,16],
      [15,14],
      [8,15],
      [3,13],
      [12,3],
      [11,2],
      [10,9],
      [9,5],
      [2,8],
      [8,4],
      [3,7],
      [6,3],
      [5,2],
      [0,5],
      [2,4],
      [3,0],
      [1,3],
      [0,2],
      [2,1],
      [1,0]];

   var angles = [2.65060716463554,
      2.65060716463554,
      2.65060716463554,
      2.65836365045936,
      2.667529400532,
      2.67452478607167,
      2.65060716463554,
      2.65836365045936,
      2.667529400532,
      2.67452478607167,
      2.67452478607167,
      2.667529400532,
      2.67452478607167,
      2.68521498282077,
      2.687565840844,
      2.667529400532,
      2.67452478607167,
      2.67452478607167,
      2.68521498282077,
      2.687565840844,
      2.69401558477236,
      2.69401558477236,
      2.68521498282077,
      2.687565840844,
      2.70105650793354,
      2.68521498282077,
      2.687565840844,
      2.69401558477236,
      2.69401558477236,
      2.70105650793354,
      2.71005884798023,
      2.71005884798023,
      2.70105650793354,
      2.71535391243918,
      2.70105650793354,
      2.71005884798023,
      2.71005884798023,
      2.71535391243918,
      2.71858569304909,
      2.71535391243918,
      2.72532188561006,
      2.71535391243918,
      2.71858569304909,
      2.72532188561006,
      2.72532188561006,
      2.72880342853854,
      2.72532188561006,
      2.72880342853854,
      2.72880342853854];

   var subtrees = [[80,81],
      [78,79],
      [76,77],
      [74,75],
      [72,73,80,81],
      [70,71],
      [68,69],
      [66,67],
      [64,65,78,79],
      [62,63],
      [60,61],
      [58,59,76,77],
      [56,57,74,75],
      [54,55,72,73,80,81],
      [53,70,71],
      [51,52,68,69],
      [49,50,66,67],
      [47,48],
      [45,46,64,65,78,79],
      [44,62,63],
      [42,43],
      [40,41,60,61],
      [38,39,58,59,76,77],
      [37,56,57,74,75],
      [36,53,54,55,70,71,72,73,80,81],
      [34,35,51,52,68,69],
      [33,49,50,66,67],
      [31,32],
      [29,30,47,48],
      [28,44,45,46,62,63,64,65,78,79],
      [26,27,42,43],
      [24,25,40,41,60,61],
      [23,37,38,39,56,57,58,59,74,75,76,77],
      [22,36,53,54,55,70,71,72,73,80,81],
      [21,33,34,35,49,50,51,52,66,67,68,69],
      [19,20,31,32],
      [17,18,29,30,47,48],
      [16,28,44,45,46,62,63,64,65,78,79],
      [14,15,24,25,26,27,40,41,42,43,60,61],
      [13,23,37,38,39,56,57,58,59,74,75,76,77],
      [12,22,36,53,54,55,70,71,72,73,80,81],
      [11,21,33,34,35,49,50,51,52,66,67,68,69],
      [9,10,17,18,19,20,29,30,31,32,47,48],
      [8,14,15,16,24,25,26,27,28,40,41,42,43,44,45,46,60,61,62,63,64,65,78,79],
      [7,13,23,37,38,39,56,57,58,59,74,75,76,77],
      [6,12,22,36,53,54,55,70,71,72,73,80,81],
      [5,9,10,11,17,18,19,20,21,29,30,31,32,33,34,35,47,48,49,50,51,52,66,67,68,69],
      [4,8,14,15,16,24,25,26,27,28,40,41,42,43,44,45,46,60,61,62,63,64,65,78,79],
      [3,6,7,12,13,22,23,36,37,38,39,53,54,55,56,57,58,59,70,71,72,73,74,75,76,77,80,81]];

   var polytoperoot = [[-9.83485101594687e-16,-0.791517917065753,-0.489184975451155],
      [-0.238905393317343,-1.11574362625773,-0.238905393317343],
      [-0.570829241534209,0.116868928965093,0.0250242231135393]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.500273, 0, 0));
   allpoints.push(new PMPoint(0.451988, 1.10039, 0));
   allpoints.push(new PMPoint(0.451988, -1.10039, 0));
   allpoints.push(new PMPoint(0.998624, 0.0438202, 0));
   allpoints.push(new PMPoint(-0.370196, 0.352549, 0));
   allpoints.push(new PMPoint(0.998624, -0.0438202, 0));
   allpoints.push(new PMPoint(-0.370196, -0.352549, 0));
   allpoints.push(new PMPoint(1.33652, 0.42744, 0));
   allpoints.push(new PMPoint(-0.590971, 0.0933631, 0));
   allpoints.push(new PMPoint(-0.460847, -0.221258, 0));
   allpoints.push(new PMPoint(-0.718176, 0.763599, 0));
   allpoints.push(new PMPoint(1.33652, -0.42744, 0));
   allpoints.push(new PMPoint(-0.718176, -0.763599, 0));
   allpoints.push(new PMPoint(1.47708, -0.136221, 0));
   allpoints.push(new PMPoint(1.57915, 0.188589, 0));
   allpoints.push(new PMPoint(1.64715, 0.86739, 0));
   allpoints.push(new PMPoint(-0.789638, 0.690365, 0));
   allpoints.push(new PMPoint(-0.936886, 0.162947, 0));
   allpoints.push(new PMPoint(-0.94149, 0.133803, 0));
   allpoints.push(new PMPoint(-0.964001, -0.413321, 0));
   allpoints.push(new PMPoint(-0.661186, 1.31657, 0));
   allpoints.push(new PMPoint(1.64715, -0.86739, 0));
   allpoints.push(new PMPoint(-0.661186, -1.31657, 0));
   allpoints.push(new PMPoint(1.91764, 0.288205, 0));
   allpoints.push(new PMPoint(1.72476, 0.800698, 0));
   allpoints.push(new PMPoint(1.99512, -0.283473, 0));
   allpoints.push(new PMPoint(1.92478, 0.259577, 0));
   allpoints.push(new PMPoint(1.54195, 1.41325, 0));
   allpoints.push(new PMPoint(-1.34945, 0.638055, 0));
   allpoints.push(new PMPoint(-1.28271, 0.27094, 0));
   allpoints.push(new PMPoint(-1.30377, 0.137679, 0));
   allpoints.push(new PMPoint(-1.48043, -0.190983, 0));
   allpoints.push(new PMPoint(-0.518818, 1.87295, 0));
   allpoints.push(new PMPoint(-1.03269, 1.33824, 0));
   allpoints.push(new PMPoint(-1.22193, 1.01332, 0));
   allpoints.push(new PMPoint(1.54195, -1.41325, 0));
   allpoints.push(new PMPoint(-0.518818, -1.87295, 0));
   allpoints.push(new PMPoint(-1.22193, -1.01332, 0));
   allpoints.push(new PMPoint(-1.03269, -1.33824, 0));
   allpoints.push(new PMPoint(2.25267, 0.426074, 0));
   allpoints.push(new PMPoint(2.287, 0.797625, 0));
   allpoints.push(new PMPoint(2.49009, -0.0167547, 0));
   allpoints.push(new PMPoint(2.28532, 0.29517, 0));
   allpoints.push(new PMPoint(1.35139, 1.95502, 0));
   allpoints.push(new PMPoint(2.1271, 1.16028, 0));
   allpoints.push(new PMPoint(1.91013, 1.46737, 0));
   allpoints.push(new PMPoint(-1.92762, 0.506865, 0));
   allpoints.push(new PMPoint(-1.5706, 0.0335556, 0));
   allpoints.push(new PMPoint(-1.10138, 1.79559, 0));
   allpoints.push(new PMPoint(-1.01885, 1.41934, 0));
   allpoints.push(new PMPoint(-1.23015, 1.66896, 0));
   allpoints.push(new PMPoint(-1.72393, 1.32873, 0));
   allpoints.push(new PMPoint(1.35139, -1.95502, 0));
   allpoints.push(new PMPoint(1.91013, -1.46737, 0));
   allpoints.push(new PMPoint(2.1271, -1.16028, 0));
   allpoints.push(new PMPoint(-1.01885, -1.41934, 0));
   allpoints.push(new PMPoint(-1.10138, -1.79559, 0));
   allpoints.push(new PMPoint(-1.72393, -1.32873, 0));
   allpoints.push(new PMPoint(-1.23015, -1.66896, 0));
   allpoints.push(new PMPoint(2.56024, 0.214819, 0));
   allpoints.push(new PMPoint(2.87444, 0.717582, 0));
   allpoints.push(new PMPoint(1.88924, 1.54695, 0));
   allpoints.push(new PMPoint(1.93849, 1.92898, 0));
   allpoints.push(new PMPoint(2.59954, 1.51845, 0));
   allpoints.push(new PMPoint(2.07786, 1.81412, 0));
   allpoints.push(new PMPoint(-0.799617, 2.3892, 0));
   allpoints.push(new PMPoint(-1.13122, 2.18426, 0));
   allpoints.push(new PMPoint(-1.46492, 1.98016, 0));
   allpoints.push(new PMPoint(-1.85537, 1.91948, 0));
   allpoints.push(new PMPoint(1.93849, -1.92898, 0));
   allpoints.push(new PMPoint(1.88924, -1.54695, 0));
   allpoints.push(new PMPoint(2.07786, -1.81412, 0));
   allpoints.push(new PMPoint(2.59954, -1.51845, 0));
   allpoints.push(new PMPoint(-1.13122, -2.18426, 0));
   allpoints.push(new PMPoint(-0.799617, -2.3892, 0));
   allpoints.push(new PMPoint(-1.85537, -1.91948, 0));
   allpoints.push(new PMPoint(-1.46492, -1.98016, 0));
   allpoints.push(new PMPoint(2.67873, 2.11844, 0));
   allpoints.push(new PMPoint(2.28447, 2.14468, 0));
   allpoints.push(new PMPoint(2.28447, -2.14468, 0));
   allpoints.push(new PMPoint(2.67873, -2.11844, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 4, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 2, 5, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(6, 1, 3, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(0, 7, 3, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(2, 4, 8, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(0, 5, 9, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(6, 3, 12, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(5, 2, 11, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(8, 4, 14, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(8, 14, 15, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(5, 17, 18, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(5, 18, 9, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(7, 13, 3, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(2, 8, 16, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(11, 2, 21, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(10, 9, 19, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(10, 19, 20, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(8, 15, 24, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(8, 24, 25, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(12, 3, 22, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(18, 17, 29, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(18, 29, 30, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(3, 13, 23, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(2, 16, 28, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(15, 14, 26, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(15, 26, 27, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(21, 2, 33, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(11, 21, 34, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(11, 34, 35, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(20, 19, 31, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(20, 31, 32, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(25, 24, 40, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(25, 40, 41, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(22, 3, 36, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(2, 28, 44, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(3, 23, 37, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(13, 39, 23, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(28, 16, 45, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 45, 46, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(27, 26, 42, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(27, 42, 43, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(21, 33, 49, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(21, 49, 50, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(36, 3, 53, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(30, 29, 47, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(30, 47, 48, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(22, 36, 54, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(22, 54, 55, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(28, 62, 63, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(28, 63, 44, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(23, 56, 57, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(23, 57, 37, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(35, 34, 51, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(35, 51, 52, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(40, 60, 61, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(40, 61, 41, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(49, 33, 66, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(49, 66, 67, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(36, 53, 70, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(36, 70, 71, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(38, 58, 59, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(38, 59, 39, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(46, 45, 64, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(46, 64, 65, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(37, 57, 74, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(37, 74, 75, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(52, 51, 68, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(52, 68, 69, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(55, 54, 72, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(55, 72, 73, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(58, 76, 77, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(58, 77, 59, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(65, 64, 78, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(65, 78, 79, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(73, 72, 80, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(73, 80, 81, undefined, undefined, 49));


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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[73].vector);
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
