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

   var axes = [[97,71],
      [92,91],
      [53,88],
      [87,71],
      [84,83],
      [81,66],
      [78,77],
      [74,73],
      [53,72],
      [51,71],
      [70,69],
      [68,67],
      [47,66],
      [62,61],
      [59,38],
      [58,57],
      [56,55],
      [53,32],
      [51,50],
      [49,48],
      [25,47],
      [47,46],
      [45,44],
      [43,42],
      [39,38],
      [37,36],
      [18,37],
      [34,16],
      [33,32],
      [31,30],
      [29,28],
      [26,10],
      [25,24],
      [23,22],
      [22,9],
      [21,20],
      [19,18],
      [18,6],
      [17,16],
      [15,14],
      [4,15],
      [13,12],
      [11,10],
      [9,8],
      [0,9],
      [2,7],
      [7,6],
      [5,4],
      [4,0],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.71576555388821,
      2.69902858238642,
      2.71576555388821,
      2.71576555388821,
      2.69902858238642,
      2.68449868983043,
      2.68805111602412,
      2.69699128655038,
      2.71576555388821,
      2.71576555388821,
      2.67236773031476,
      2.68805111602412,
      2.67236773031476,
      2.69699128655038,
      2.67236773031476,
      2.69902858238642,
      2.68449868983043,
      2.71576555388821,
      2.71039914982383,
      2.65761870792341,
      2.67236773031476,
      2.66264388466519,
      2.69902858238642,
      2.68449868983043,
      2.66264388466519,
      2.68805111602412,
      2.6792798785425,
      2.71039914982383,
      2.71039914982383,
      2.71039914982383,
      2.69699128655038,
      2.65141765217348,
      2.66264388466519,
      2.68805111602412,
      2.6792798785425,
      2.65141765217348,
      2.66264388466519,
      2.67236773031476,
      2.69902858238642,
      2.69699128655038,
      2.69699128655038,
      2.68449868983043,
      2.65141765217348,
      2.66264388466519,
      2.67236773031476,
      2.65761870792341,
      2.66264388466519,
      2.68805111602412,
      2.68449868983043,
      2.6792798785425,
      2.65761870792341,
      2.66264388466519,
      2.66264388466519,
      2.67236773031476];

   var subtrees = [[101],
      [99,100],
      [98],
      [97,101],
      [95,96],
      [93,94],
      [91,92,99,100],
      [89,90],
      [88,98],
      [87,97,101],
      [85,86],
      [83,84,95,96],
      [81,82,93,94],
      [79,80],
      [77,78,91,92,99,100],
      [75,76],
      [73,74,89,90],
      [72,88,98],
      [71,87,97,101],
      [69,70,85,86],
      [67,68,83,84,95,96],
      [65,66,81,82,93,94],
      [63,64],
      [61,62,79,80],
      [59,60,77,78,91,92,99,100],
      [57,58,75,76],
      [55,56,73,74,89,90],
      [54],
      [53,72,88,98],
      [52],
      [50,51,71,87,97,101],
      [48,49,69,70,85,86],
      [46,47,65,66,67,68,81,82,83,84,93,94,95,96],
      [44,45,63,64],
      [42,43,61,62,79,80],
      [40,41],
      [38,39,59,60,77,78,91,92,99,100],
      [36,37,55,56,57,58,73,74,75,76,89,90],
      [34,35,54],
      [32,33,53,72,88,98],
      [30,31,52],
      [28,29,50,51,71,87,97,101],
      [26,27,48,49,69,70,85,86],
      [24,25,46,47,65,66,67,68,81,82,83,84,93,94,95,96],
      [22,23,42,43,44,45,61,62,63,64,79,80],
      [20,21,40,41],
      [18,19,36,37,38,39,55,56,57,58,59,60,73,74,75,76,77,78,89,90,91,92,99,100],
      [16,17,34,35,54],
      [14,15,30,31,32,33,52,53,72,88,98],
      [12,13,28,29,50,51,71,87,97,101],
      [10,11,26,27,48,49,69,70,85,86],
      [8,9,22,23,24,25,42,43,44,45,46,47,61,62,63,64,65,66,67,68,79,80,81,82,83,84,93,94,95,96],
      [6,7,18,19,20,21,36,37,38,39,40,41,55,56,57,58,59,60,73,74,75,76,77,78,89,90,91,92,99,100],
      [4,5,12,13,14,15,16,17,28,29,30,31,32,33,34,35,50,51,52,53,54,71,72,87,88,97,98,101]];

   var polytoperoot = [[0,-0.904460821897936,-0.558987529425589],
      [-0.161611880910861,-0.958894217993172,-0.237425238479107],
      [-0.568871243560554,0.0903390260361849,0.0223682283177185]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.575868, 0, 0));
   allpoints.push(new PMPoint(0.556387, 0.487301, 0));
   allpoints.push(new PMPoint(0.172569, 0.444002, 0));
   allpoints.push(new PMPoint(0.220307, -0.521536, 0));
   allpoints.push(new PMPoint(0.548062, -0.371529, 0));
   allpoints.push(new PMPoint(1.1499, 0.0459687, 0));
   allpoints.push(new PMPoint(0.942437, 0.474778, 0));
   allpoints.push(new PMPoint(-0.0812645, 0.735136, 0));
   allpoints.push(new PMPoint(-0.424716, 0.388895, 0));
   allpoints.push(new PMPoint(0.459253, 1.08156, 0));
   allpoints.push(new PMPoint(-0.0497519, 0.759856, 0));
   allpoints.push(new PMPoint(0.849838, -0.568651, 0));
   allpoints.push(new PMPoint(1.14532, -0.0857162, 0));
   allpoints.push(new PMPoint(-0.38492, -0.415177, 0));
   allpoints.push(new PMPoint(-0.113499, -0.645856, 0));
   allpoints.push(new PMPoint(0.471745, -0.999116, 0));
   allpoints.push(new PMPoint(0.830314, -0.595715, 0));
   allpoints.push(new PMPoint(1.54222, 0.467526, 0));
   allpoints.push(new PMPoint(1.17222, 0.785246, 0));
   allpoints.push(new PMPoint(1.13884, 0.807372, 0));
   allpoints.push(new PMPoint(0.605774, 1.08742, 0));
   allpoints.push(new PMPoint(-0.65511, 0.0961064, 0));
   allpoints.push(new PMPoint(-0.514686, -0.235868, 0));
   allpoints.push(new PMPoint(-0.374442, 0.986607, 0));
   allpoints.push(new PMPoint(-0.817034, 0.810453, 0));
   allpoints.push(new PMPoint(-0.0358274, 1.42431, 0));
   allpoints.push(new PMPoint(-0.239643, 1.09621, 0));
   allpoints.push(new PMPoint(1.16142, -0.741271, 0));
   allpoints.push(new PMPoint(1.46415, -0.553563, 0));
   allpoints.push(new PMPoint(-0.158619, -0.989699, 0));
   allpoints.push(new PMPoint(0.367151, -1.0409, 0));
   allpoints.push(new PMPoint(-0.700038, -0.85336, 0));
   allpoints.push(new PMPoint(-0.188313, -0.984481, 0));
   allpoints.push(new PMPoint(0.967246, -1.18224, 0));
   allpoints.push(new PMPoint(1.07654, -0.85312, 0));
   allpoints.push(new PMPoint(1.68177, -0.148062, 0));
   allpoints.push(new PMPoint(1.79525, 0.194063, 0));
   allpoints.push(new PMPoint(1.89963, 0.919055, 0));
   allpoints.push(new PMPoint(1.44439, 1.05932, 0));
   allpoints.push(new PMPoint(1.30127, 1.15781, 0));
   allpoints.push(new PMPoint(1.07192, 1.46859, 0));
   allpoints.push(new PMPoint(-0.902587, 0.710241, 0));
   allpoints.push(new PMPoint(-1.0108, 0.15452, 0));
   allpoints.push(new PMPoint(-1.01468, 0.121374, 0));
   allpoints.push(new PMPoint(-1.02265, -0.418293, 0));
   allpoints.push(new PMPoint(-0.334248, 1.37076, 0));
   allpoints.push(new PMPoint(-0.821691, 1.3863, 0));
   allpoints.push(new PMPoint(0.581198, 1.67123, 0));
   allpoints.push(new PMPoint(0.199531, 1.73057, 0));
   allpoints.push(new PMPoint(1.185, -1.08726, 0));
   allpoints.push(new PMPoint(1.71054, -1.03377, 0));
   allpoints.push(new PMPoint(-0.19572, -2.07161, 0));
   allpoints.push(new PMPoint(-0.522299, -2.01422, 0));
   allpoints.push(new PMPoint(0.528988, -2.1721, 0));
   allpoints.push(new PMPoint(2.14514, 0.280682, 0));
   allpoints.push(new PMPoint(1.99291, 0.825992, 0));
   allpoints.push(new PMPoint(2.20267, -0.289356, 0));
   allpoints.push(new PMPoint(2.15165, 0.247952, 0));
   allpoints.push(new PMPoint(1.85831, 1.49344, 0));
   allpoints.push(new PMPoint(1.37366, 1.43904, 0));
   allpoints.push(new PMPoint(-1.45368, 0.580508, 0));
   allpoints.push(new PMPoint(-1.35717, 0.237626, 0));
   allpoints.push(new PMPoint(-1.3701, 0.0978102, 0));
   allpoints.push(new PMPoint(-1.51176, -0.218729, 0));
   allpoints.push(new PMPoint(-0.349893, 1.7567, 0));
   allpoints.push(new PMPoint(-0.780366, 1.96068, 0));
   allpoints.push(new PMPoint(-1.19298, 1.35549, 0));
   allpoints.push(new PMPoint(-1.34033, 1.02653, 0));
   allpoints.push(new PMPoint(0.621077, 2.15729, 0));
   allpoints.push(new PMPoint(0.0457147, 2.18141, 0));
   allpoints.push(new PMPoint(1.36199, -2.15524, 0));
   allpoints.push(new PMPoint(-1.14909, -1.13159, 0));
   allpoints.push(new PMPoint(2.48377, 0.391173, 0));
   allpoints.push(new PMPoint(2.5526, 0.740664, 0));
   allpoints.push(new PMPoint(2.67429, -0.0513863, 0));
   allpoints.push(new PMPoint(2.50782, 0.252835, 0));
   allpoints.push(new PMPoint(2.40401, 1.17622, 0));
   allpoints.push(new PMPoint(2.23087, 1.49237, 0));
   allpoints.push(new PMPoint(-1.95969, 0.392734, 0));
   allpoints.push(new PMPoint(-1.60821, -0.00162721, 0));
   allpoints.push(new PMPoint(-1.31637, 1.77837, 0));
   allpoints.push(new PMPoint(-1.19027, 1.4407, 0));
   allpoints.push(new PMPoint(-1.41944, 1.63592, 0));
   allpoints.push(new PMPoint(-1.81993, 1.2741, 0));
   allpoints.push(new PMPoint(0.608861, 2.52966, 0));
   allpoints.push(new PMPoint(0.287678, 2.69326, 0));
   allpoints.push(new PMPoint(2.11317, -1.37573, 0));
   allpoints.push(new PMPoint(-1.55975, -1.46387, 0));
   allpoints.push(new PMPoint(2.75311, 0.172722, 0));
   allpoints.push(new PMPoint(3.07198, 0.593882, 0));
   allpoints.push(new PMPoint(2.86232, 1.46128, 0));
   allpoints.push(new PMPoint(2.43423, 1.78998, 0));
   allpoints.push(new PMPoint(-1.16685, 2.37441, 0));
   allpoints.push(new PMPoint(-1.41641, 2.12024, 0));
   allpoints.push(new PMPoint(-1.67883, 1.88005, 0));
   allpoints.push(new PMPoint(-2.00706, 1.76811, 0));
   allpoints.push(new PMPoint(2.4698, -1.76544, 0));
   allpoints.push(new PMPoint(-1.60458, -1.99022, 0));
   allpoints.push(new PMPoint(3.00941, 1.96865, 0));
   allpoints.push(new PMPoint(2.6733, 2.05404, 0));
   allpoints.push(new PMPoint(2.43578, -2.29261, 0));

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
   allpoints[92].makesphere(0.02,points_material);
   allpoints[93].makesphere(0.02,points_material);
   allpoints[94].makesphere(0.02,points_material);
   allpoints[95].makesphere(0.02,points_material);
   allpoints[96].makesphere(0.02,points_material);
   allpoints[97].makesphere(0.02,points_material);
   allpoints[98].makesphere(0.02,points_material);
   allpoints[99].makesphere(0.02,points_material);
   allpoints[100].makesphere(0.02,points_material);
   allpoints[101].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[92].vector);
   faces.vertices.push(allpoints[93].vector);
   faces.vertices.push(allpoints[94].vector);
   faces.vertices.push(allpoints[95].vector);
   faces.vertices.push(allpoints[96].vector);
   faces.vertices.push(allpoints[97].vector);
   faces.vertices.push(allpoints[98].vector);
   faces.vertices.push(allpoints[99].vector);
   faces.vertices.push(allpoints[100].vector);
   faces.vertices.push(allpoints[101].vector);

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

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 4, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 9, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 4, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 15, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 6, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 43, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 33, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 30, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 47, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 37, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 55, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 28, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 16, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 42, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 61, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 59, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 57, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 65, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 66, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 47, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 67, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 44, 63, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 63, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 55, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 73, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 50, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 69, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 72, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 38, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(59, 77, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 66, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 81, 82, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 61, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 71, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 69, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 85, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 67, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(68, 83, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(73, 89, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(73, 90, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 93, 94, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 94, 81, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 88, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 77, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 91, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(84, 83, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(84, 95, 96, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 71, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(88, 98, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(92, 91, 99, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(92, 99, 100, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 71, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 7, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 10, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[84].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
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
