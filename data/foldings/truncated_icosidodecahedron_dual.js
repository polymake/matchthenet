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

   var axes = [[118,113],
      [116,110],
      [115,100],
      [106,113],
      [103,111],
      [92,110],
      [108,100],
      [97,106],
      [106,74],
      [104,94],
      [103,81],
      [92,102],
      [90,101],
      [77,100],
      [98,87],
      [97,74],
      [84,95],
      [70,94],
      [93,81],
      [92,68],
      [90,77],
      [77,89],
      [76,88],
      [63,87],
      [86,74],
      [85,73],
      [84,60],
      [70,82],
      [68,81],
      [80,68],
      [79,67],
      [65,77],
      [77,53],
      [76,52],
      [63,75],
      [50,74],
      [49,73],
      [72,60],
      [59,71],
      [70,57],
      [68,56],
      [44,68],
      [43,67],
      [41,65],
      [65,53],
      [64,52],
      [63,50],
      [50,62],
      [49,61],
      [47,60],
      [59,34],
      [45,57],
      [56,32],
      [44,56],
      [43,55],
      [54,41],
      [41,53],
      [39,52],
      [38,50],
      [50,27],
      [49,36],
      [47,35],
      [46,34],
      [32,45],
      [45,14],
      [44,32],
      [43,30],
      [20,41],
      [41,29],
      [39,28],
      [18,38],
      [38,27],
      [26,36],
      [35,25],
      [9,35],
      [23,34],
      [32,14],
      [22,32],
      [21,30],
      [29,12],
      [20,29],
      [28,18],
      [6,28],
      [18,27],
      [17,26],
      [26,5],
      [9,25],
      [23,15],
      [8,22],
      [22,14],
      [12,21],
      [21,0],
      [20,12],
      [6,18],
      [18,11],
      [17,5],
      [9,16],
      [15,8],
      [0,15],
      [8,14],
      [12,0],
      [7,12],
      [11,3],
      [6,11],
      [10,5],
      [9,2],
      [0,8],
      [8,4],
      [3,7],
      [7,0],
      [6,3],
      [2,5],
      [4,2],
      [0,4],
      [3,0],
      [1,3],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122,
      2.87783661046122];

   var subtrees = [[121],
      [120],
      [119],
      [118,121],
      [117],
      [116,120],
      [115,119],
      [114],
      [113,118,121],
      [112],
      [111,117],
      [110,116,120],
      [109],
      [108,115,119],
      [107],
      [106,113,114,118,121],
      [105],
      [104,112],
      [103,111,117],
      [102,110,116,120],
      [101,109],
      [100,108,115,119],
      [99],
      [98,107],
      [97,106,113,114,118,121],
      [96],
      [95,105],
      [94,104,112],
      [93,103,111,117],
      [92,102,110,116,120],
      [91],
      [90,101,109],
      [89,100,108,115,119],
      [88,99],
      [87,98,107],
      [86,97,106,113,114,118,121],
      [85,96],
      [84,95,105],
      [83],
      [82,94,104,112],
      [81,93,103,111,117],
      [80,92,102,110,116,120],
      [79,91],
      [78],
      [77,89,90,100,101,108,109,115,119],
      [76,88,99],
      [75,87,98,107],
      [74,86,97,106,113,114,118,121],
      [73,85,96],
      [72,84,95,105],
      [71,83],
      [70,82,94,104,112],
      [69],
      [68,80,81,92,93,102,103,110,111,116,117,120],
      [67,79,91],
      [66],
      [65,77,78,89,90,100,101,108,109,115,119],
      [64,76,88,99],
      [63,75,87,98,107],
      [62,74,86,97,106,113,114,118,121],
      [61,73,85,96],
      [60,72,84,95,105],
      [59,71,83],
      [58],
      [57,70,82,94,104,112],
      [56,68,69,80,81,92,93,102,103,110,111,116,117,120],
      [55,67,79,91],
      [54,66],
      [53,65,77,78,89,90,100,101,108,109,115,119],
      [52,64,76,88,99],
      [51],
      [50,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [49,61,73,85,96],
      [48],
      [47,60,72,84,95,105],
      [46,59,71,83],
      [45,57,58,70,82,94,104,112],
      [44,56,68,69,80,81,92,93,102,103,110,111,116,117,120],
      [43,55,67,79,91],
      [42],
      [41,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [40],
      [39,52,64,76,88,99],
      [38,50,51,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [37],
      [36,49,61,73,85,96],
      [35,47,48,60,72,84,95,105],
      [34,46,59,71,83],
      [33],
      [32,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [31],
      [30,43,55,67,79,91],
      [29,41,42,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [28,39,40,52,64,76,88,99],
      [27,38,50,51,62,63,74,75,86,87,97,98,106,107,113,114,118,121],
      [26,36,37,49,61,73,85,96],
      [25,35,47,48,60,72,84,95,105],
      [24],
      [23,34,46,59,71,83],
      [22,32,33,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [21,30,31,43,55,67,79,91],
      [20,29,41,42,53,54,65,66,77,78,89,90,100,101,108,109,115,119],
      [19],
      [18,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [17,26,36,37,49,61,73,85,96],
      [16,25,35,47,48,60,72,84,95,105],
      [15,23,24,34,46,59,71,83],
      [14,22,32,33,44,45,56,57,58,68,69,70,80,81,82,92,93,94,102,103,104,110,111,112,116,117,120],
      [13],
      [12,20,21,29,30,31,41,42,43,53,54,55,65,66,67,77,78,79,89,90,91,100,101,108,109,115,119],
      [11,18,19,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [10,17,26,36,37,49,61,73,85,96],
      [9,16,25,35,47,48,60,72,84,95,105],
      [8,14,15,22,23,24,32,33,34,44,45,46,56,57,58,59,68,69,70,71,80,81,82,83,92,93,94,102,103,104,110,111,112,116,117,120],
      [7,12,13,20,21,29,30,31,41,42,43,53,54,55,65,66,67,77,78,79,89,90,91,100,101,108,109,115,119],
      [6,11,18,19,27,28,38,39,40,50,51,52,62,63,64,74,75,76,86,87,88,97,98,99,106,107,113,114,118,121],
      [5,10,17,26,36,37,49,61,73,85,96],
      [4,8,9,14,15,16,22,23,24,25,32,33,34,35,44,45,46,47,48,56,57,58,59,60,68,69,70,71,72,80,81,82,83,84,92,93,94,95,102,103,104,105,110,111,112,116,117,120],
      [3,6,7,11,12,13,18,19,20,21,27,28,29,30,31,38,39,40,41,42,43,50,51,52,53,54,55,62,63,64,65,66,67,74,75,76,77,78,79,86,87,88,89,90,91,97,98,99,100,101,106,107,108,109,113,114,115,118,119,121]];

   var polytoperoot = [[6.05464851571386e-16,-0.903249998007828,-0.558239199107112],
      [-0.136846717987934,-1.02253728180133,-0.136846717987934],
      [-0.581044136863554,0.0763932022500223,0.0102237436136074]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.563216, 0, 0));
   allpoints.push(new PMPoint(0.556907, 0.358494, 0));
   allpoints.push(new PMPoint(0.556907, -0.358494, 0));
   allpoints.push(new PMPoint(0.233199, 0.51267, 0));
   allpoints.push(new PMPoint(1.12608, 0.019817, 0));
   allpoints.push(new PMPoint(1.12608, -0.019817, 0));
   allpoints.push(new PMPoint(0.233199, -0.51267, 0));
   allpoints.push(new PMPoint(-0.0957335, 0.655361, 0));
   allpoints.push(new PMPoint(0.484292, 1.01682, 0));
   allpoints.push(new PMPoint(0.87499, 0.523965, 0));
   allpoints.push(new PMPoint(0.87499, -0.523965, 0));
   allpoints.push(new PMPoint(-0.0957335, -0.655361, 0));
   allpoints.push(new PMPoint(0.484292, -1.01682, 0));
   allpoints.push(new PMPoint(0.448215, 1.03323, 0));
   allpoints.push(new PMPoint(-0.370104, 0.424541, 0));
   allpoints.push(new PMPoint(0.83923, 0.579517, 0));
   allpoints.push(new PMPoint(1.1987, 0.678141, 0));
   allpoints.push(new PMPoint(1.1987, -0.678141, 0));
   allpoints.push(new PMPoint(0.606314, -1.01896, 0));
   allpoints.push(new PMPoint(0.448215, -1.03323, 0));
   allpoints.push(new PMPoint(-0.370104, -0.424541, 0));
   allpoints.push(new PMPoint(-0.114652, 1.01341, 0));
   allpoints.push(new PMPoint(-0.636184, 0.18421, 0));
   allpoints.push(new PMPoint(-0.725042, 0.861842, 0));
   allpoints.push(new PMPoint(1.1136, 0.810337, 0));
   allpoints.push(new PMPoint(1.48102, 0.457118, 0));
   allpoints.push(new PMPoint(0.641791, -1.03663, 0));
   allpoints.push(new PMPoint(1.48102, -0.457118, 0));
   allpoints.push(new PMPoint(-0.114652, -1.01341, 0));
   allpoints.push(new PMPoint(-0.636184, -0.18421, 0));
   allpoints.push(new PMPoint(-0.725042, -0.861842, 0));
   allpoints.push(new PMPoint(-0.120961, 1.3719, 0));
   allpoints.push(new PMPoint(-0.676474, 0.973801, 0));
   allpoints.push(new PMPoint(-0.754917, 0.835797, 0));
   allpoints.push(new PMPoint(1.02931, 1.15884, 0));
   allpoints.push(new PMPoint(1.75539, 0.226297, 0));
   allpoints.push(new PMPoint(1.82035, 0.906636, 0));
   allpoints.push(new PMPoint(1.20501, -1.03663, 0));
   allpoints.push(new PMPoint(1.75539, -0.226297, 0));
   allpoints.push(new PMPoint(1.82035, -0.906636, 0));
   allpoints.push(new PMPoint(-0.120961, -1.3719, 0));
   allpoints.push(new PMPoint(-0.676474, -0.973801, 0));
   allpoints.push(new PMPoint(-0.754917, -0.835797, 0));
   allpoints.push(new PMPoint(-0.677868, 1.01341, 0));
   allpoints.push(new PMPoint(0.197122, 1.53738, 0));
   allpoints.push(new PMPoint(-0.969934, 0.315239, 0));
   allpoints.push(new PMPoint(0.932807, 1.50416, 0));
   allpoints.push(new PMPoint(1.57898, 1.28159, 0));
   allpoints.push(new PMPoint(1.85113, 0.881659, 0));
   allpoints.push(new PMPoint(1.1987, -1.39513, 0));
   allpoints.push(new PMPoint(1.76787, -1.01682, 0));
   allpoints.push(new PMPoint(1.85113, -0.881659, 0));
   allpoints.push(new PMPoint(-0.677868, -1.01341, 0));
   allpoints.push(new PMPoint(0.197122, -1.53738, 0));
   allpoints.push(new PMPoint(-0.969934, -0.315239, 0));
   allpoints.push(new PMPoint(-0.444669, 1.52608, 0));
   allpoints.push(new PMPoint(0.52083, 1.69155, 0));
   allpoints.push(new PMPoint(-0.0715544, 2.03238, 0));
   allpoints.push(new PMPoint(-1.29887, 0.45793, 0));
   allpoints.push(new PMPoint(1.56899, 1.31995, 0));
   allpoints.push(new PMPoint(2.08432, 0.368989, 0));
   allpoints.push(new PMPoint(0.87499, -1.5493, 0));
   allpoints.push(new PMPoint(1.76787, -1.05645, 0));
   allpoints.push(new PMPoint(2.08432, -0.368989, 0));
   allpoints.push(new PMPoint(-0.444669, -1.52608, 0));
   allpoints.push(new PMPoint(-0.0715544, -2.03238, 0));
   allpoints.push(new PMPoint(-1.29887, -0.45793, 0));
   allpoints.push(new PMPoint(-0.773602, 1.66877, 0));
   allpoints.push(new PMPoint(-0.193576, 2.03023, 0));
   allpoints.push(new PMPoint(-0.0360771, 2.05005, 0));
   allpoints.push(new PMPoint(-1.31778, 0.81598, 0));
   allpoints.push(new PMPoint(1.19889, 1.74449, 0));
   allpoints.push(new PMPoint(2.40803, 0.523165, 0));
   allpoints.push(new PMPoint(1.12608, -2.05345, 0));
   allpoints.push(new PMPoint(1.51678, -1.5606, 0));
   allpoints.push(new PMPoint(2.40803, -0.523165, 0));
   allpoints.push(new PMPoint(-0.773602, -1.66877, 0));
   allpoints.push(new PMPoint(-0.193576, -2.03023, 0));
   allpoints.push(new PMPoint(-1.31778, -0.81598, 0));
   allpoints.push(new PMPoint(-1.04797, 1.43795, 0));
   allpoints.push(new PMPoint(-0.229653, 2.04664, 0));
   allpoints.push(new PMPoint(0.527139, 2.05005, 0));
   allpoints.push(new PMPoint(-1.87961, 0.776371, 0));
   allpoints.push(new PMPoint(1.47326, 1.97531, 0));
   allpoints.push(new PMPoint(2.41434, 0.881659, 0));
   allpoints.push(new PMPoint(1.48102, -1.61615, 0));
   allpoints.push(new PMPoint(1.84049, -1.71478, 0));
   allpoints.push(new PMPoint(2.41434, -0.881659, 0));
   allpoints.push(new PMPoint(-1.04797, -1.43795, 0));
   allpoints.push(new PMPoint(-0.229653, -2.04664, 0));
   allpoints.push(new PMPoint(-1.87961, -0.776371, 0));
   allpoints.push(new PMPoint(-1.40291, 1.87525, 0));
   allpoints.push(new PMPoint(-0.792521, 2.02682, 0));
   allpoints.push(new PMPoint(0.52083, 2.40854, 0));
   allpoints.push(new PMPoint(1.80219, 1.83262, 0));
   allpoints.push(new PMPoint(2.97721, 0.861842, 0));
   allpoints.push(new PMPoint(1.75539, -1.84697, 0));
   allpoints.push(new PMPoint(2.12281, -1.49375, 0));
   allpoints.push(new PMPoint(2.97721, -0.861842, 0));
   allpoints.push(new PMPoint(-1.40291, -1.87525, 0));
   allpoints.push(new PMPoint(-0.792521, -2.02682, 0));
   allpoints.push(new PMPoint(-0.857894, 2.01727, 0));
   allpoints.push(new PMPoint(-0.798829, 2.38532, 0));
   allpoints.push(new PMPoint(0.197122, 2.56272, 0));
   allpoints.push(new PMPoint(2.01721, 2.35317, 0));
   allpoints.push(new PMPoint(1.6711, -2.19547, 0));
   allpoints.push(new PMPoint(2.46214, -1.94327, 0));
   allpoints.push(new PMPoint(-0.857894, -2.01727, 0));
   allpoints.push(new PMPoint(-0.798829, -2.38532, 0));
   allpoints.push(new PMPoint(-0.954396, 2.36259, 0));
   allpoints.push(new PMPoint(-0.480746, 2.55079, 0));
   allpoints.push(new PMPoint(0.448215, 3.06686, 0));
   allpoints.push(new PMPoint(1.5746, -2.54079, 0));
   allpoints.push(new PMPoint(2.22078, -2.31823, 0));
   allpoints.push(new PMPoint(-0.954396, -2.36259, 0));
   allpoints.push(new PMPoint(-1.30652, 2.43016, 0));
   allpoints.push(new PMPoint(-0.749423, 3.04579, 0));
   allpoints.push(new PMPoint(2.21078, -2.35658, 0));
   allpoints.push(new PMPoint(-1.30652, -2.43016, 0));
   allpoints.push(new PMPoint(-1.19067, 2.98133, 0));
   allpoints.push(new PMPoint(1.84068, -2.78112, 0));

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
   allpoints[102].makesphere(0.02,points_material);
   allpoints[103].makesphere(0.02,points_material);
   allpoints[104].makesphere(0.02,points_material);
   allpoints[105].makesphere(0.02,points_material);
   allpoints[106].makesphere(0.02,points_material);
   allpoints[107].makesphere(0.02,points_material);
   allpoints[108].makesphere(0.02,points_material);
   allpoints[109].makesphere(0.02,points_material);
   allpoints[110].makesphere(0.02,points_material);
   allpoints[111].makesphere(0.02,points_material);
   allpoints[112].makesphere(0.02,points_material);
   allpoints[113].makesphere(0.02,points_material);
   allpoints[114].makesphere(0.02,points_material);
   allpoints[115].makesphere(0.02,points_material);
   allpoints[116].makesphere(0.02,points_material);
   allpoints[117].makesphere(0.02,points_material);
   allpoints[118].makesphere(0.02,points_material);
   allpoints[119].makesphere(0.02,points_material);
   allpoints[120].makesphere(0.02,points_material);
   allpoints[121].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[102].vector);
   faces.vertices.push(allpoints[103].vector);
   faces.vertices.push(allpoints[104].vector);
   faces.vertices.push(allpoints[105].vector);
   faces.vertices.push(allpoints[106].vector);
   faces.vertices.push(allpoints[107].vector);
   faces.vertices.push(allpoints[108].vector);
   faces.vertices.push(allpoints[109].vector);
   faces.vertices.push(allpoints[110].vector);
   faces.vertices.push(allpoints[111].vector);
   faces.vertices.push(allpoints[112].vector);
   faces.vertices.push(allpoints[113].vector);
   faces.vertices.push(allpoints[114].vector);
   faces.vertices.push(allpoints[115].vector);
   faces.vertices.push(allpoints[116].vector);
   faces.vertices.push(allpoints[117].vector);
   faces.vertices.push(allpoints[118].vector);
   faces.vertices.push(allpoints[119].vector);
   faces.vertices.push(allpoints[120].vector);
   faces.vertices.push(allpoints[121].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 0, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 5, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 0, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 5, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 14, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 8, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 3, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 16, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 15, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 11, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 25, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 12, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 0, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 5, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 14, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 3, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 8, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 30, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 5, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 14, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 27, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 34, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 18, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 25, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 12, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 22, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 21, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 26, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 28, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 35, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 29, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 32, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 30, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 36, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 14, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 27, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 34, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 42, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 48, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 18, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 57, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 27, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 34, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 53, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 60, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 52, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 41, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 32, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 55, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 36, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 38, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 45, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 27, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 56, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 67, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 61, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 50, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 57, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 34, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 53, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 60, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 52, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 69, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 41, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 68, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 53, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(72, 60, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 52, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 81, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 62, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 67, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 73, 85, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 50, 75, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 82, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 65, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(59, 71, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(53, 89, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 95, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 75, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(82, 94, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(65, 77, 90, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(80, 68, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(76, 52, 88, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 81, 93, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 74, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 91, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(85, 73, 96, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 87, 98, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(93, 81, 103, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(86, 74, 97, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(89, 100, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(95, 105, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 94, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(90, 77, 101, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(68, 102, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(76, 88, 99, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 111, 103, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(90, 101, 109, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(102, 110, 92, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(98, 87, 107, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 74, 106, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(77, 100, 108, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(94, 112, 104, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(106, 74, 113, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(108, 100, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(111, 117, 103, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(92, 110, 116, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 106, 114, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(100, 119, 115, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(106, 113, 118, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(110, 120, 116, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(118, 113, 121, undefined, undefined, 0));


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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[59].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[53].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[95].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[98].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[106].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[108].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[111].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[92].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[100].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[106].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[110].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[118].vector);
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
