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

   var axes = [[78,73],
      [67,76],
      [75,57],
      [55,73],
      [53,71],
      [67,50],
      [63,57],
      [37,63],
      [55,62],
      [62,34],
      [53,61],
      [61,28],
      [60,51],
      [27,60],
      [59,50],
      [25,59],
      [48,58],
      [58,24],
      [37,57],
      [55,34],
      [53,28],
      [27,51],
      [25,50],
      [48,24],
      [37,47],
      [47,12],
      [46,34],
      [11,46],
      [42,28],
      [8,42],
      [27,41],
      [25,39],
      [39,6],
      [38,24],
      [37,12],
      [11,34],
      [33,0],
      [32,31],
      [8,28],
      [27,26],
      [25,6],
      [0,24],
      [22,12],
      [23,22],
      [11,21],
      [21,0],
      [10,20],
      [18,17],
      [8,16],
      [16,15],
      [14,6],
      [0,14],
      [13,12],
      [11,0],
      [10,9],
      [7,2],
      [8,7],
      [0,6],
      [5,4],
      [4,0],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.82445745476126,
      2.82445745476126,
      2.81780799826085,
      2.82445745476126,
      2.81780799826085,
      2.82445745476126,
      2.81089276317114,
      2.80657233610597,
      2.82272391577463,
      2.82272391577463,
      2.81089276317114,
      2.80657233610597,
      2.79869965234532,
      2.79869965234532,
      2.82272391577463,
      2.82272391577463,
      2.82272391577463,
      2.82272391577463,
      2.80452505398937,
      2.81780799826085,
      2.80452505398937,
      2.79045350982654,
      2.81780799826085,
      2.81780799826085,
      2.79869965234532,
      2.79869965234532,
      2.81089276317114,
      2.80657233610597,
      2.79869965234532,
      2.79869965234532,
      2.78280542497469,
      2.81089276317114,
      2.80657233610597,
      2.81089276317114,
      2.79045350982654,
      2.80452505398937,
      2.80452505398937,
      2.79124433582536,
      2.79045350982654,
      2.77962492111537,
      2.80452505398937,
      2.80452505398937,
      2.78280542497469,
      2.77962492111537,
      2.79869965234532,
      2.79869965234532,
      2.79632397742227,
      2.79632397742227,
      2.78280542497469,
      2.77962492111537,
      2.79869965234532,
      2.79869965234532,
      2.77962492111537,
      2.79045350982654,
      2.79632397742227,
      2.79124433582536,
      2.77962492111537,
      2.79045350982654,
      2.77962492111537,
      2.78280542497469,
      2.79124433582536,
      2.77962492111537,
      2.78280542497469,
      2.77962492111537];

   var subtrees = [[81],
      [80],
      [79],
      [78,81],
      [77],
      [76,80],
      [75,79],
      [74],
      [73,78,81],
      [72],
      [71,77],
      [70],
      [69],
      [68],
      [67,76,80],
      [66],
      [65],
      [64],
      [63,74,75,79],
      [62,72,73,78,81],
      [61,70,71,77],
      [60,68,69],
      [59,66,67,76,80],
      [58,64,65],
      [57,63,74,75,79],
      [56],
      [55,62,72,73,78,81],
      [54],
      [53,61,70,71,77],
      [52],
      [51,60,68,69],
      [50,59,66,67,76,80],
      [49],
      [48,58,64,65],
      [47,56,57,63,74,75,79],
      [46,54,55,62,72,73,78,81],
      [45],
      [43,44],
      [42,52,53,61,70,71,77],
      [40,41,51,60,68,69],
      [39,49,50,59,66,67,76,80],
      [38,48,58,64,65],
      [37,47,56,57,63,74,75,79],
      [35,36],
      [34,46,54,55,62,72,73,78,81],
      [33,45],
      [31,32,43,44],
      [29,30],
      [28,42,52,53,61,70,71,77],
      [26,27,40,41,51,60,68,69],
      [25,39,49,50,59,66,67,76,80],
      [24,38,48,58,64,65],
      [22,23,35,36,37,47,56,57,63,74,75,79],
      [21,33,34,45,46,54,55,62,72,73,78,81],
      [19,20,31,32,43,44],
      [17,18,29,30],
      [15,16,26,27,28,40,41,42,51,52,53,60,61,68,69,70,71,77],
      [14,24,25,38,39,48,49,50,58,59,64,65,66,67,76,80],
      [12,13,22,23,35,36,37,47,56,57,63,74,75,79],
      [11,21,33,34,45,46,54,55,62,72,73,78,81],
      [9,10,19,20,31,32,43,44],
      [7,8,15,16,17,18,26,27,28,29,30,40,41,42,51,52,53,60,61,68,69,70,71,77],
      [6,14,24,25,38,39,48,49,50,58,59,64,65,66,67,76,80],
      [4,5,11,12,13,21,22,23,33,34,35,36,37,45,46,47,54,55,56,57,62,63,72,73,74,75,78,79,81]];

   var polytoperoot = [[0,-1.00733223132848,-0.62256555692427],
      [-0.17694956147209,-0.966047016494571,-0.0431596367763334],
      [-0.503761623765928,0.0920895439868399,0.00411424206224703]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.520947, 0, 0));
   allpoints.push(new PMPoint(0.709072, 0.325189, 0));
   allpoints.push(new PMPoint(0.620166, 0.375672, 0));
   allpoints.push(new PMPoint(0.620166, -0.375672, 0));
   allpoints.push(new PMPoint(0.709072, -0.325189, 0));
   allpoints.push(new PMPoint(0.583715, 1.09983, 0));
   allpoints.push(new PMPoint(0.891942, 0.653362, 0));
   allpoints.push(new PMPoint(0.625022, 1.10073, 0));
   allpoints.push(new PMPoint(0.726713, -0.314323, 0));
   allpoints.push(new PMPoint(1.17809, 0.0181279, 0));
   allpoints.push(new PMPoint(0.583715, -1.09983, 0));
   allpoints.push(new PMPoint(0.625022, -1.10073, 0));
   allpoints.push(new PMPoint(0.891942, -0.653362, 0));
   allpoints.push(new PMPoint(-0.0279832, 0.719665, 0));
   allpoints.push(new PMPoint(1.26759, 0.658426, 0));
   allpoints.push(new PMPoint(1.26539, 0.760641, 0));
   allpoints.push(new PMPoint(1.21308, 0.0797438, 0));
   allpoints.push(new PMPoint(1.2673, 0.637708, 0));
   allpoints.push(new PMPoint(0.965856, -0.604063, 0));
   allpoints.push(new PMPoint(1.33221, -0.520863, 0));
   allpoints.push(new PMPoint(-0.0279832, -0.719665, 0));
   allpoints.push(new PMPoint(1.26539, -0.760641, 0));
   allpoints.push(new PMPoint(1.26759, -0.658426, 0));
   allpoints.push(new PMPoint(-0.629456, 1.01936, 0));
   allpoints.push(new PMPoint(-0.613283, 1.04983, 0));
   allpoints.push(new PMPoint(1.64311, 0.66953, 0));
   allpoints.push(new PMPoint(1.89053, 1.12797, 0));
   allpoints.push(new PMPoint(1.8686, 1.16298, 0));
   allpoints.push(new PMPoint(1.75491, 0.223554, 0));
   allpoints.push(new PMPoint(1.63865, 0.580796, 0));
   allpoints.push(new PMPoint(1.68717, -0.397807, 0));
   allpoints.push(new PMPoint(1.73699, -0.0254397, 0));
   allpoints.push(new PMPoint(-0.629456, -1.01936, 0));
   allpoints.push(new PMPoint(-0.613283, -1.04983, 0));
   allpoints.push(new PMPoint(1.89053, -1.12797, 0));
   allpoints.push(new PMPoint(1.64311, -0.66953, 0));
   allpoints.push(new PMPoint(1.8686, -1.16298, 0));
   allpoints.push(new PMPoint(-0.627039, 0.351887, 0));
   allpoints.push(new PMPoint(-0.0591409, 1.42192, 0));
   allpoints.push(new PMPoint(1.83993, 0.349531, 0));
   allpoints.push(new PMPoint(1.92659, 0.403793, 0));
   allpoints.push(new PMPoint(1.22871, 1.4935, 0));
   allpoints.push(new PMPoint(2.09953, -0.716162, 0));
   allpoints.push(new PMPoint(1.83821, -0.0398113, 0));
   allpoints.push(new PMPoint(-0.627039, -0.351887, 0));
   allpoints.push(new PMPoint(-0.0591409, -1.42192, 0));
   allpoints.push(new PMPoint(1.22871, -1.4935, 0));
   allpoints.push(new PMPoint(-1.21409, 0.0342528, 0));
   allpoints.push(new PMPoint(-0.0928657, 2.08854, 0));
   allpoints.push(new PMPoint(-0.125099, 2.08612, 0));
   allpoints.push(new PMPoint(2.58117, 0.091933, 0));
   allpoints.push(new PMPoint(1.17789, 2.16358, 0));
   allpoints.push(new PMPoint(1.21235, 2.1653, 0));
   allpoints.push(new PMPoint(-0.0928657, -2.08854, 0));
   allpoints.push(new PMPoint(-0.125099, -2.08612, 0));
   allpoints.push(new PMPoint(1.17789, -2.16358, 0));
   allpoints.push(new PMPoint(1.21235, -2.1653, 0));
   allpoints.push(new PMPoint(-1.20896, 0.697242, 0));
   allpoints.push(new PMPoint(-0.6713, 1.7103, 0));
   allpoints.push(new PMPoint(2.53714, 0.810795, 0));
   allpoints.push(new PMPoint(1.81581, 1.88007, 0));
   allpoints.push(new PMPoint(-0.6713, -1.7103, 0));
   allpoints.push(new PMPoint(1.81581, -1.88007, 0));
   allpoints.push(new PMPoint(-1.74875, 1.03403, 0));
   allpoints.push(new PMPoint(-1.76318, 1.00972, 0));
   allpoints.push(new PMPoint(-1.25275, 1.96859, 0));
   allpoints.push(new PMPoint(-1.24071, 1.99416, 0));
   allpoints.push(new PMPoint(3.08654, 1.19776, 0));
   allpoints.push(new PMPoint(3.10568, 1.16906, 0));
   allpoints.push(new PMPoint(2.371, 2.25059, 0));
   allpoints.push(new PMPoint(2.35241, 2.27704, 0));
   allpoints.push(new PMPoint(-1.25275, -1.96859, 0));
   allpoints.push(new PMPoint(-1.24071, -1.99416, 0));
   allpoints.push(new PMPoint(2.371, -2.25059, 0));
   allpoints.push(new PMPoint(2.35241, -2.27704, 0));
   allpoints.push(new PMPoint(-0.725471, 2.36743, 0));
   allpoints.push(new PMPoint(1.7498, 2.55353, 0));
   allpoints.push(new PMPoint(-0.725471, -2.36743, 0));
   allpoints.push(new PMPoint(1.7498, -2.55353, 0));
   allpoints.push(new PMPoint(-0.805702, 3.02557, 0));
   allpoints.push(new PMPoint(-0.805702, -3.02557, 0));

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

   faces.faces.push(new THREE.Face3(0, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 0, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 0, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 14, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 24, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 12, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 0, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 45, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 41, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 6, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 16, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 21, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 28, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 34, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 6, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 12, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 24, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 42, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 12, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 24, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 46, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 39, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 51, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 12, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 50, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 51, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 24, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 34, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 28, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 59, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 34, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 28, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 58, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 60, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 47, 57, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 72, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 28, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 57, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 51, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 50, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 63, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 50, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 61, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 62, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 71, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 73, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 57, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 57, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(76, 80, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 78, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 20, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 19, 20, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[10].vector);
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
