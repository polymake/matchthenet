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

   var axes = [[78,77],
      [68,67],
      [63,62],
      [60,59],
      [50,49],
      [48,47],
      [44,43],
      [41,40],
      [39,38],
      [36,35],
      [33,32],
      [32,12],
      [30,29],
      [27,26],
      [25,24],
      [22,21],
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

   var angles = [2.54496959075427,
      2.54496959075427,
      2.55137255929209,
      2.54496959075427,
      2.54496959075427,
      2.54496959075427,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.5291787130088,
      2.5291787130088,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.55137255929209,
      2.5513725592921,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5476519233436,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5291787130088,
      2.5476519233436,
      2.55413303116489,
      2.5476519233436,
      2.55413303116489,
      2.5476519233436,
      2.5476519233436,
      2.55413303116489,
      2.55413303116489];

   var subtrees = [[90,91],
      [88,89],
      [85,86,87],
      [83,84],
      [81,82],
      [79,80],
      [76,77,78,90,91],
      [73,74,75],
      [70,71,72],
      [67,68,69,88,89],
      [64,65,66],
      [61,62,63,85,86,87],
      [58,59,60,83,84],
      [55,56,57],
      [52,53,54],
      [49,50,51,81,82],
      [46,47,48,79,80],
      [43,44,45,76,77,78,90,91],
      [40,41,42,73,74,75],
      [37,38,39,70,71,72],
      [34,35,36,67,68,69,88,89],
      [32,33,61,62,63,64,65,66,85,86,87],
      [29,30,31,58,59,60,83,84],
      [26,27,28,55,56,57],
      [23,24,25,52,53,54],
      [20,21,22,46,47,48,49,50,51,79,80,81,82],
      [18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [16,17],
      [14,15,34,35,36,37,38,39,67,68,69,70,71,72,88,89],
      [12,13,32,33,61,62,63,64,65,66,85,86,87],
      [10,11,26,27,28,29,30,31,55,56,57,58,59,60,83,84],
      [8,9,20,21,22,23,24,25,46,47,48,49,50,51,52,53,54,79,80,81,82],
      [6,7,16,17,18,19,40,41,42,43,44,45,73,74,75,76,77,78,90,91],
      [4,5,12,13,14,15,32,33,34,35,36,37,38,39,61,62,63,64,65,66,67,68,69,70,71,72,85,86,87,88,89]];

   var polytoperoot = [[-0.337774522666302,-0.884305180874149,0],
      [0,-1.13083132568723,-0.0435994020277065],
      [0.604547296534721,-0.0147267672084448,0.381966011250106]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.632036, 0, 0));
   allpoints.push(new PMPoint(0.361029, 0.570986, 0));
   allpoints.push(new PMPoint(-0.29305, 0.584923, 0));
   allpoints.push(new PMPoint(-0.29305, -0.584923, 0));
   allpoints.push(new PMPoint(0.361029, -0.570986, 0));
   allpoints.push(new PMPoint(1.03166, 0.489659, 0));
   allpoints.push(new PMPoint(0.763798, 1.08653, 0));
   allpoints.push(new PMPoint(-0.691684, 0.0549641, 0));
   allpoints.push(new PMPoint(-0.38175, -0.531301, 0));
   allpoints.push(new PMPoint(0.677322, 1.14367, 0));
   allpoints.push(new PMPoint(0.0147912, 1.17229, 0));
   allpoints.push(new PMPoint(0.763798, -1.08653, 0));
   allpoints.push(new PMPoint(1.03166, -0.489659, 0));
   allpoints.push(new PMPoint(0.0147912, -1.17229, 0));
   allpoints.push(new PMPoint(0.677322, -1.14367, 0));
   allpoints.push(new PMPoint(1.24575, -0.15107, 0));
   allpoints.push(new PMPoint(1.67012, 0.346854, 0));
   allpoints.push(new PMPoint(1.68466, 0.449477, 0));
   allpoints.push(new PMPoint(1.42643, 1.06028, 0));
   allpoints.push(new PMPoint(-0.671188, 0.668094, 0));
   allpoints.push(new PMPoint(-0.90389, 0.403338, 0));
   allpoints.push(new PMPoint(-0.786769, 0.0708792, 0));
   allpoints.push(new PMPoint(-0.788089, 0.0542657, 0));
   allpoints.push(new PMPoint(-0.956246, -0.255524, 0));
   allpoints.push(new PMPoint(-0.768278, -0.553708, 0));
   allpoints.push(new PMPoint(-0.0403577, 1.25137, 0));
   allpoints.push(new PMPoint(-0.390923, 1.21462, 0));
   allpoints.push(new PMPoint(-0.530327, 0.890874, 0));
   allpoints.push(new PMPoint(0.531828, 1.50247, 0));
   allpoints.push(new PMPoint(0.181848, 1.54443, 0));
   allpoints.push(new PMPoint(-0.025915, 1.25968, 0));
   allpoints.push(new PMPoint(1.42643, -1.06028, 0));
   allpoints.push(new PMPoint(1.68466, -0.449477, 0));
   allpoints.push(new PMPoint(-0.530327, -0.890874, 0));
   allpoints.push(new PMPoint(-0.390923, -1.21462, 0));
   allpoints.push(new PMPoint(-0.0403577, -1.25137, 0));
   allpoints.push(new PMPoint(-0.025915, -1.25968, 0));
   allpoints.push(new PMPoint(0.181848, -1.54443, 0));
   allpoints.push(new PMPoint(0.531828, -1.50247, 0));
   allpoints.push(new PMPoint(1.47422, 1.14401, 0));
   allpoints.push(new PMPoint(1.29071, 1.44496, 0));
   allpoints.push(new PMPoint(0.938455, 1.43208, 0));
   allpoints.push(new PMPoint(1.94641, 0.734765, 0));
   allpoints.push(new PMPoint(1.83425, 1.06893, 0));
   allpoints.push(new PMPoint(1.48792, 1.13453, 0));
   allpoints.push(new PMPoint(-0.825204, 0.985152, 0));
   allpoints.push(new PMPoint(-1.61347, 0.98572, 0));
   allpoints.push(new PMPoint(-1.77757, 0.643381, 0));
   allpoints.push(new PMPoint(-1.80404, 0.50659, 0));
   allpoints.push(new PMPoint(-1.77952, 0.127748, 0));
   allpoints.push(new PMPoint(-1.04796, -0.165823, 0));
   allpoints.push(new PMPoint(-1.73979, -0.341698, 0));
   allpoints.push(new PMPoint(-1.86522, -0.700015, 0));
   allpoints.push(new PMPoint(-0.970434, -0.842463, 0));
   allpoints.push(new PMPoint(0.0614877, 1.58882, 0));
   allpoints.push(new PMPoint(-0.603906, 2.20378, 0));
   allpoints.push(new PMPoint(-0.807871, 1.88359, 0));
   allpoints.push(new PMPoint(0.70601, 1.80892, 0));
   allpoints.push(new PMPoint(0.260256, 2.45905, 0));
   allpoints.push(new PMPoint(-0.114841, 2.40053, 0));
   allpoints.push(new PMPoint(0.938455, -1.43208, 0));
   allpoints.push(new PMPoint(1.29071, -1.44496, 0));
   allpoints.push(new PMPoint(1.47422, -1.14401, 0));
   allpoints.push(new PMPoint(1.48792, -1.13453, 0));
   allpoints.push(new PMPoint(1.83425, -1.06893, 0));
   allpoints.push(new PMPoint(1.94641, -0.734765, 0));
   allpoints.push(new PMPoint(-0.870171, -1.98355, 0));
   allpoints.push(new PMPoint(-0.517409, -2.12384, 0));
   allpoints.push(new PMPoint(0.0614877, -1.58882, 0));
   allpoints.push(new PMPoint(-0.0762732, -2.28924, 0));
   allpoints.push(new PMPoint(0.193652, -2.55619, 0));
   allpoints.push(new PMPoint(0.70601, -1.80892, 0));
   allpoints.push(new PMPoint(1.82274, 1.1967, 0));
   allpoints.push(new PMPoint(2.093, 2.06151, 0));
   allpoints.push(new PMPoint(1.71628, 2.10848, 0));
   allpoints.push(new PMPoint(2.29794, 0.708806, 0));
   allpoints.push(new PMPoint(2.69415, 1.39027, 0));
   allpoints.push(new PMPoint(2.48044, 1.70404, 0));
   allpoints.push(new PMPoint(-1.82838, 1.29867, 0));
   allpoints.push(new PMPoint(-2.34688, 0.928855, 0));
   allpoints.push(new PMPoint(-2.43875, 0.454135, 0));
   allpoints.push(new PMPoint(-2.09567, -0.0824298, 0));
   allpoints.push(new PMPoint(0.396588, 2.81336, 0));
   allpoints.push(new PMPoint(-0.201785, 3.03144, 0));
   allpoints.push(new PMPoint(1.77987, -2.20762, 0));
   allpoints.push(new PMPoint(2.05787, -1.94908, 0));
   allpoints.push(new PMPoint(1.82274, -1.1967, 0));
   allpoints.push(new PMPoint(-1.09494, -2.57944, 0));
   allpoints.push(new PMPoint(-0.463091, -2.49957, 0));
   allpoints.push(new PMPoint(3.07269, 1.41903, 0));
   allpoints.push(new PMPoint(3.01313, 2.05311, 0));

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
   allpoints[82].makesphere(0.02,points_material);
   allpoints[83].makesphere(0.02,points_material);
   allpoints[84].makesphere(0.02,points_material);
   allpoints[85].makesphere(0.02,points_material);
   allpoints[86].makesphere(0.02,points_material);
   allpoints[87].makesphere(0.02,points_material);
   allpoints[88].makesphere(0.02,points_material);
   allpoints[89].makesphere(0.02,points_material);
   allpoints[90].makesphere(0.02,points_material);
   allpoints[91].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[82].vector);
   faces.vertices.push(allpoints[83].vector);
   faces.vertices.push(allpoints[84].vector);
   faces.vertices.push(allpoints[85].vector);
   faces.vertices.push(allpoints[86].vector);
   faces.vertices.push(allpoints[87].vector);
   faces.vertices.push(allpoints[88].vector);
   faces.vertices.push(allpoints[89].vector);
   faces.vertices.push(allpoints[90].vector);
   faces.vertices.push(allpoints[91].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
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
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(6, 1, 16, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(6, 16, 17, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(8, 3, 20, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(8, 20, 21, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(5, 4, 14, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(3, 11, 26, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 26, 27, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 27, 28, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(9, 8, 23, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(9, 23, 24, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(4, 34, 35, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 35, 36, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 36, 14, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(11, 10, 29, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(11, 30, 31, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(33, 13, 12, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(33, 12, 32, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(7, 19, 40, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(7, 40, 41, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(7, 41, 42, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(14, 38, 39, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(14, 39, 15, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(32, 12, 61, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 61, 62, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(32, 62, 63, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(19, 18, 43, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(19, 43, 44, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(19, 44, 45, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(33, 32, 64, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(33, 64, 65, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(33, 65, 66, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(20, 48, 21, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(26, 55, 56, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(26, 56, 57, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(26, 57, 27, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(22, 21, 49, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(22, 49, 50, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(22, 50, 51, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(25, 24, 52, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(25, 52, 53, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(25, 53, 54, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(30, 29, 58, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(30, 58, 59, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(30, 59, 60, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(40, 73, 74, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(40, 74, 75, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(40, 75, 41, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(35, 67, 68, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(35, 68, 69, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(35, 69, 36, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(72, 39, 38, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(72, 38, 70, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(72, 70, 71, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(44, 43, 76, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(44, 76, 77, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(44, 77, 78, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(63, 62, 85, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(63, 85, 86, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(63, 86, 87, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(50, 49, 81, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(50, 81, 82, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(67, 88, 89, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(67, 89, 68, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(78, 77, 90, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(78, 90, 91, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(60, 59, 83, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(60, 83, 84, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(47, 79, 80, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(47, 80, 48, undefined, undefined, 34));


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
   line.vertices.push(allpoints[22].vector);
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
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
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
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
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
