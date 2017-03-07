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

   var axes = [[208,207],
      [198,197],
      [181,180],
      [182,181],
      [176,175],
      [161,160],
      [151,150],
      [144,143],
      [142,141],
      [143,142],
      [135,134],
      [136,135],
      [123,122],
      [124,123],
      [125,124],
      [126,125],
      [113,112],
      [112,111],
      [114,113],
      [101,100],
      [102,101],
      [103,102],
      [95,94],
      [93,92],
      [94,93],
      [86,85],
      [81,80],
      [80,79],
      [67,66],
      [68,67],
      [61,60],
      [62,61],
      [54,53],
      [49,48],
      [50,49],
      [42,41],
      [38,37],
      [34,33],
      [33,32],
      [32,31],
      [31,30],
      [30,29],
      [19,18],
      [20,19],
      [21,20],
      [22,21],
      [23,22],
      [24,23],
      [14,13],
      [13,12],
      [15,14],
      [12,11],
      [16,15],
      [9,8],
      [7,6],
      [2,1],
      [3,2],
      [4,3],
      [0,5],
      [5,4],
      [1,0]];

   var angles = [2.48923451380542,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631,
      2.48923451380543,
      2.58801829469275,
      2.58801829469275,
      2.58801829469274,
      2.48923451380542,
      2.48923451380543,
      2.58801829469278,
      2.48923451380543,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469274,
      2.58801829469274,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.58801829469274,
      2.77672882547631,
      2.48923451380543,
      2.77672882547632,
      2.48923451380543,
      2.7767288254763,
      2.48923451380542,
      2.77672882547631,
      2.77672882547632,
      2.48923451380544,
      2.77672882547632,
      2.48923451380542,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469274,
      2.48923451380542,
      2.58801829469274,
      2.48923451380543,
      2.58801829469275,
      2.48923451380542,
      2.58801829469275,
      2.48923451380543,
      2.58801829469275,
      2.58801829469273,
      2.48923451380541,
      2.48923451380542,
      2.58801829469274,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631,
      2.48923451380543,
      2.77672882547631,
      2.48923451380542,
      2.48923451380543,
      2.77672882547631,
      2.77672882547631];

   var subtrees = [[234,235,236,237],
      [232,233],
      [224,225,226,227,228,229,230,231],
      [222,223],
      [220,221],
      [212,213,214,215,216,217,218,219],
      [204,205,206,207,208,209,210,211,234,235,236,237],
      [202,203],
      [200,201],
      [196,197,198,199,232,233],
      [192,193,194,195],
      [190,191],
      [186,187,188,189],
      [184,185],
      [180,181,182,183,222,223,224,225,226,227,228,229,230,231],
      [178,179],
      [174,175,176,177,220,221],
      [172,173],
      [170,171],
      [166,167,168,169],
      [164,165],
      [160,161,162,163,212,213,214,215,216,217,218,219],
      [156,157,158,159],
      [152,153,154,155],
      [150,151,204,205,206,207,208,209,210,211,234,235,236,237],
      [148,149],
      [140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [138,139],
      [130,131,132,133,134,135,136,137,190,191,192,193,194,195],
      [128,129],
      [120,121,122,123,124,125,126,127,178,179,180,181,182,183,184,185,186,187,188,189,222,223,224,225,226,227,228,229,230,231],
      [118,119],
      [116,117],
      [108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [106,107],
      [98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [88,89],
      [84,85,86,87,148,149],
      [82,83],
      [78,79,80,81,138,139,140,141,142,143,144,145,146,147,196,197,198,199,200,201,202,203,232,233],
      [76,77],
      [72,73,74,75],
      [70,71],
      [66,67,68,69,128,129,130,131,132,133,134,135,136,137,190,191,192,193,194,195],
      [64,65],
      [60,61,62,63,118,119,120,121,122,123,124,125,126,127,178,179,180,181,182,183,184,185,186,187,188,189,222,223,224,225,226,227,228,229,230,231],
      [58,59],
      [56,57],
      [52,53,54,55,116,117],
      [48,49,50,51,106,107,108,109,110,111,112,113,114,115,170,171,172,173,174,175,176,177,220,221],
      [46,47],
      [44,45],
      [40,41,42,43,98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237],
      [28,29,30,31,32,33,34,35,76,77,78,79,80,81,82,83,84,85,86,87,88,89,138,139,140,141,142,143,144,145,146,147,148,149,196,197,198,199,200,201,202,203,232,233],
      [26,27],
      [18,19,20,21,22,23,24,25,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,222,223,224,225,226,227,228,229,230,231],
      [10,11,12,13,14,15,16,17,44,45,46,47,48,49,50,51,52,53,54,55,56,57,106,107,108,109,110,111,112,113,114,115,116,117,170,171,172,173,174,175,176,177,220,221],
      [8,9,40,41,42,43,98,99,100,101,102,103,104,105,160,161,162,163,164,165,166,167,168,169,212,213,214,215,216,217,218,219],
      [6,7,36,37,38,39,90,91,92,93,94,95,96,97,150,151,152,153,154,155,156,157,158,159,204,205,206,207,208,209,210,211,234,235,236,237]];

   var polytoperoot = [[0.820018540651645,0.131496087536302,-0.55702636557904],
      [2.61803398874987,3.45504931266056e-15,-1],
      [0.131496087536303,-0.638295417064101,0.344261226557668]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.262992, 0, 0));
   allpoints.push(new PMPoint(0.394488, 0.227758, 0));
   allpoints.push(new PMPoint(0.262992, 0.455516, 0));
   allpoints.push(new PMPoint(0, 0.455516, 0));
   allpoints.push(new PMPoint(-0.131496, 0.227758, 0));
   allpoints.push(new PMPoint(0, -0.262992, 0));
   allpoints.push(new PMPoint(0.262992, -0.262992, 0));
   allpoints.push(new PMPoint(-0.227758, 0.587012, 0));
   allpoints.push(new PMPoint(-0.359254, 0.359254, 0));
   allpoints.push(new PMPoint(-0.371751, 0.334726, 0));
   allpoints.push(new PMPoint(-0.628997, 0.280047, 0));
   allpoints.push(new PMPoint(-0.804973, 0.084606, 0));
   allpoints.push(new PMPoint(-0.832463, -0.176945, 0));
   allpoints.push(new PMPoint(-0.700967, -0.404703, 0));
   allpoints.push(new PMPoint(-0.460711, -0.511672, 0));
   allpoints.push(new PMPoint(-0.203466, -0.456993, 0));
   allpoints.push(new PMPoint(-0.0274902, -0.261551, 0));
   allpoints.push(new PMPoint(0.475757, 0.610099, 0));
   allpoints.push(new PMPoint(0.557026, 0.860219, 0));
   allpoints.push(new PMPoint(0.475757, 1.11034, 0));
   allpoints.push(new PMPoint(0.262992, 1.26492, 0));
   allpoints.push(new PMPoint(0, 1.26492, 0));
   allpoints.push(new PMPoint(-0.212765, 1.11034, 0));
   allpoints.push(new PMPoint(-0.294034, 0.860219, 0));
   allpoints.push(new PMPoint(-0.212765, 0.610099, 0));
   allpoints.push(new PMPoint(0.622246, 0.359254, 0));
   allpoints.push(new PMPoint(0.49075, 0.587012, 0));
   allpoints.push(new PMPoint(0.290482, -0.261551, 0));
   allpoints.push(new PMPoint(0.466458, -0.456993, 0));
   allpoints.push(new PMPoint(0.723704, -0.511672, 0));
   allpoints.push(new PMPoint(0.963959, -0.404703, 0));
   allpoints.push(new PMPoint(1.09546, -0.176945, 0));
   allpoints.push(new PMPoint(1.06796, 0.084606, 0));
   allpoints.push(new PMPoint(0.891989, 0.280047, 0));
   allpoints.push(new PMPoint(0.634744, 0.334726, 0));
   allpoints.push(new PMPoint(-0.131496, -0.49075, 0));
   allpoints.push(new PMPoint(0, -0.718508, 0));
   allpoints.push(new PMPoint(0.262992, -0.718508, 0));
   allpoints.push(new PMPoint(0.394488, -0.49075, 0));
   allpoints.push(new PMPoint(-0.359254, 0.81477, 0));
   allpoints.push(new PMPoint(-0.622246, 0.81477, 0));
   allpoints.push(new PMPoint(-0.753742, 0.587012, 0));
   allpoints.push(new PMPoint(-0.622246, 0.359254, 0));
   allpoints.push(new PMPoint(-0.406032, -0.768917, 0));
   allpoints.push(new PMPoint(-0.148787, -0.714238, 0));
   allpoints.push(new PMPoint(-0.824438, 0.456023, 0));
   allpoints.push(new PMPoint(-1.00041, 0.260582, 0));
   allpoints.push(new PMPoint(-0.913732, -0.559286, 0));
   allpoints.push(new PMPoint(-0.886242, -0.820838, 0));
   allpoints.push(new PMPoint(-0.645986, -0.927806, 0));
   allpoints.push(new PMPoint(-0.433221, -0.773223, 0));
   allpoints.push(new PMPoint(-1.01774, 0.239189, 0));
   allpoints.push(new PMPoint(-1.25799, 0.13222, 0));
   allpoints.push(new PMPoint(-1.28548, -0.129331, 0));
   allpoints.push(new PMPoint(-1.07272, -0.283914, 0));
   allpoints.push(new PMPoint(-1.06022, -0.308442, 0));
   allpoints.push(new PMPoint(-0.928725, -0.536199, 0));
   allpoints.push(new PMPoint(-0.462886, 1.19161, 0));
   allpoints.push(new PMPoint(-0.544155, 0.941488, 0));
   allpoints.push(new PMPoint(-0.0274902, 1.52647, 0));
   allpoints.push(new PMPoint(-0.267745, 1.63344, 0));
   allpoints.push(new PMPoint(-0.480511, 1.47886, 0));
   allpoints.push(new PMPoint(-0.45302, 1.21731, 0));
   allpoints.push(new PMPoint(0.262992, 1.52791, 0));
   allpoints.push(new PMPoint(0, 1.52791, 0));
   allpoints.push(new PMPoint(0.716013, 1.21731, 0));
   allpoints.push(new PMPoint(0.743503, 1.47886, 0));
   allpoints.push(new PMPoint(0.530738, 1.63344, 0));
   allpoints.push(new PMPoint(0.290482, 1.52647, 0));
   allpoints.push(new PMPoint(0.807147, 0.941488, 0));
   allpoints.push(new PMPoint(0.725878, 1.19161, 0));
   allpoints.push(new PMPoint(0.651733, 0.414657, 0));
   allpoints.push(new PMPoint(0.908979, 0.469337, 0));
   allpoints.push(new PMPoint(0.990248, 0.719457, 0));
   allpoints.push(new PMPoint(0.814272, 0.914898, 0));
   allpoints.push(new PMPoint(0.411779, -0.714238, 0));
   allpoints.push(new PMPoint(0.669024, -0.768917, 0));
   allpoints.push(new PMPoint(0.696213, -0.773223, 0));
   allpoints.push(new PMPoint(0.908979, -0.927806, 0));
   allpoints.push(new PMPoint(1.14923, -0.820838, 0));
   allpoints.push(new PMPoint(1.17672, -0.559286, 0));
   allpoints.push(new PMPoint(1.19172, -0.536199, 0));
   allpoints.push(new PMPoint(1.32321, -0.308442, 0));
   allpoints.push(new PMPoint(1.33571, -0.283914, 0));
   allpoints.push(new PMPoint(1.54848, -0.129331, 0));
   allpoints.push(new PMPoint(1.52099, 0.13222, 0));
   allpoints.push(new PMPoint(1.28073, 0.239189, 0));
   allpoints.push(new PMPoint(1.26341, 0.260582, 0));
   allpoints.push(new PMPoint(1.08743, 0.456023, 0));
   allpoints.push(new PMPoint(-0.212765, -0.873091, 0));
   allpoints.push(new PMPoint(-0.294034, -1.12321, 0));
   allpoints.push(new PMPoint(-0.212765, -1.37333, 0));
   allpoints.push(new PMPoint(0, -1.52791, 0));
   allpoints.push(new PMPoint(0.262992, -1.52791, 0));
   allpoints.push(new PMPoint(0.475757, -1.37333, 0));
   allpoints.push(new PMPoint(0.557026, -1.12321, 0));
   allpoints.push(new PMPoint(0.475757, -0.873091, 0));
   allpoints.push(new PMPoint(-0.649736, 1.07632, 0));
   allpoints.push(new PMPoint(-0.825712, 1.27176, 0));
   allpoints.push(new PMPoint(-1.08296, 1.32644, 0));
   allpoints.push(new PMPoint(-1.32321, 1.21947, 0));
   allpoints.push(new PMPoint(-1.45471, 0.991715, 0));
   allpoints.push(new PMPoint(-1.42722, 0.730164, 0));
   allpoints.push(new PMPoint(-1.25124, 0.534722, 0));
   allpoints.push(new PMPoint(-0.993998, 0.480043, 0));
   allpoints.push(new PMPoint(-0.99321, -1.06109, 0));
   allpoints.push(new PMPoint(-0.752955, -1.16806, 0));
   allpoints.push(new PMPoint(-1.08971, -0.363845, 0));
   allpoints.push(new PMPoint(-1.34695, -0.309166, 0));
   allpoints.push(new PMPoint(-1.58721, -0.416134, 0));
   allpoints.push(new PMPoint(-1.7187, -0.643892, 0));
   allpoints.push(new PMPoint(-1.69121, -0.905444, 0));
   allpoints.push(new PMPoint(-1.51524, -1.10089, 0));
   allpoints.push(new PMPoint(-1.25799, -1.15556, 0));
   allpoints.push(new PMPoint(-1.01774, -1.0486, 0));
   allpoints.push(new PMPoint(-1.51954, 0.159711, 0));
   allpoints.push(new PMPoint(-1.54703, -0.101841, 0));
   allpoints.push(new PMPoint(-0.422328, 1.84621, 0));
   allpoints.push(new PMPoint(-0.635094, 1.69162, 0));
   allpoints.push(new PMPoint(0.229755, 1.58115, 0));
   allpoints.push(new PMPoint(0.405731, 1.77659, 0));
   allpoints.push(new PMPoint(0.433221, 2.03815, 0));
   allpoints.push(new PMPoint(0.301725, 2.2659, 0));
   allpoints.push(new PMPoint(0.0614699, 2.37287, 0));
   allpoints.push(new PMPoint(-0.195775, 2.31819, 0));
   allpoints.push(new PMPoint(-0.371751, 2.12275, 0));
   allpoints.push(new PMPoint(-0.399242, 1.8612, 0));
   allpoints.push(new PMPoint(0.898086, 1.69162, 0));
   allpoints.push(new PMPoint(0.685321, 1.84621, 0));
   allpoints.push(new PMPoint(0.847509, 0.98955, 0));
   allpoints.push(new PMPoint(1.08776, 0.882582, 0));
   allpoints.push(new PMPoint(1.34501, 0.937261, 0));
   allpoints.push(new PMPoint(1.52099, 1.1327, 0));
   allpoints.push(new PMPoint(1.54848, 1.39425, 0));
   allpoints.push(new PMPoint(1.41698, 1.62201, 0));
   allpoints.push(new PMPoint(1.17672, 1.72898, 0));
   allpoints.push(new PMPoint(0.919479, 1.6743, 0));
   allpoints.push(new PMPoint(1.01595, -1.16806, 0));
   allpoints.push(new PMPoint(1.2562, -1.06109, 0));
   allpoints.push(new PMPoint(1.28073, -1.0486, 0));
   allpoints.push(new PMPoint(1.52099, -1.15556, 0));
   allpoints.push(new PMPoint(1.77823, -1.10089, 0));
   allpoints.push(new PMPoint(1.95421, -0.905444, 0));
   allpoints.push(new PMPoint(1.9817, -0.643892, 0));
   allpoints.push(new PMPoint(1.8502, -0.416134, 0));
   allpoints.push(new PMPoint(1.60995, -0.309166, 0));
   allpoints.push(new PMPoint(1.3527, -0.363845, 0));
   allpoints.push(new PMPoint(1.81003, -0.101841, 0));
   allpoints.push(new PMPoint(1.78254, 0.159711, 0));
   allpoints.push(new PMPoint(0, -1.79091, 0));
   allpoints.push(new PMPoint(0.262992, -1.79091, 0));
   allpoints.push(new PMPoint(-0.45302, -1.4803, 0));
   allpoints.push(new PMPoint(-0.480511, -1.74185, 0));
   allpoints.push(new PMPoint(-0.267745, -1.89643, 0));
   allpoints.push(new PMPoint(-0.0274902, -1.78947, 0));
   allpoints.push(new PMPoint(0.290482, -1.78947, 0));
   allpoints.push(new PMPoint(0.530738, -1.89643, 0));
   allpoints.push(new PMPoint(0.743503, -1.74185, 0));
   allpoints.push(new PMPoint(0.716013, -1.4803, 0));
   allpoints.push(new PMPoint(-1.69496, 1.09868, 0));
   allpoints.push(new PMPoint(-1.90773, 0.944101, 0));
   allpoints.push(new PMPoint(-1.88024, 0.682549, 0));
   allpoints.push(new PMPoint(-1.63998, 0.575581, 0));
   allpoints.push(new PMPoint(-1.55097, 1.35097, 0));
   allpoints.push(new PMPoint(-1.68247, 1.12321, 0));
   allpoints.push(new PMPoint(-1.05547, 1.58799, 0));
   allpoints.push(new PMPoint(-1.26823, 1.74258, 0));
   allpoints.push(new PMPoint(-1.50849, 1.63561, 0));
   allpoints.push(new PMPoint(-1.53598, 1.37406, 0));
   allpoints.push(new PMPoint(-1.56992, -1.35813, 0));
   allpoints.push(new PMPoint(-1.31267, -1.41281, 0));
   allpoints.push(new PMPoint(-1.98026, -0.671382, 0));
   allpoints.push(new PMPoint(-1.95277, -0.932934, 0));
   allpoints.push(new PMPoint(-1.94846, -0.960123, 0));
   allpoints.push(new PMPoint(-2.02973, -1.21024, 0));
   allpoints.push(new PMPoint(-1.85375, -1.40568, 0));
   allpoints.push(new PMPoint(-1.59651, -1.35101, 0));
   allpoints.push(new PMPoint(-0.391217, 2.49417, 0));
   allpoints.push(new PMPoint(-0.567193, 2.29873, 0));
   allpoints.push(new PMPoint(0.142739, 2.62299, 0));
   allpoints.push(new PMPoint(-0.0332372, 2.81843, 0));
   allpoints.push(new PMPoint(-0.290482, 2.76375, 0));
   allpoints.push(new PMPoint(-0.371751, 2.51363, 0));
   allpoints.push(new PMPoint(0.408694, 2.50616, 0));
   allpoints.push(new PMPoint(0.168438, 2.61313, 0));
   allpoints.push(new PMPoint(0.696213, 2.03815, 0));
   allpoints.push(new PMPoint(0.82771, 2.2659, 0));
   allpoints.push(new PMPoint(0.696213, 2.49366, 0));
   allpoints.push(new PMPoint(0.433221, 2.49366, 0));
   allpoints.push(new PMPoint(1.52395, 1.86227, 0));
   allpoints.push(new PMPoint(1.28369, 1.96924, 0));
   allpoints.push(new PMPoint(1.81147, 1.39425, 0));
   allpoints.push(new PMPoint(1.94296, 1.62201, 0));
   allpoints.push(new PMPoint(1.81147, 1.84977, 0));
   allpoints.push(new PMPoint(1.54848, 1.84977, 0));
   allpoints.push(new PMPoint(1.8595, -1.35101, 0));
   allpoints.push(new PMPoint(2.11674, -1.40568, 0));
   allpoints.push(new PMPoint(2.29272, -1.21024, 0));
   allpoints.push(new PMPoint(2.21145, -0.960123, 0));
   allpoints.push(new PMPoint(1.57566, -1.41281, 0));
   allpoints.push(new PMPoint(1.83291, -1.35813, 0));
   allpoints.push(new PMPoint(2.21576, -0.932934, 0));
   allpoints.push(new PMPoint(2.24325, -0.671382, 0));
   allpoints.push(new PMPoint(-0.212765, -1.94549, 0));
   allpoints.push(new PMPoint(-0.294034, -2.19561, 0));
   allpoints.push(new PMPoint(-0.212765, -2.44573, 0));
   allpoints.push(new PMPoint(0, -2.60031, 0));
   allpoints.push(new PMPoint(0.262992, -2.60031, 0));
   allpoints.push(new PMPoint(0.475757, -2.44573, 0));
   allpoints.push(new PMPoint(0.557026, -2.19561, 0));
   allpoints.push(new PMPoint(0.475757, -1.94549, 0));
   allpoints.push(new PMPoint(-1.6137, 1.3488, 0));
   allpoints.push(new PMPoint(-1.69496, 1.59892, 0));
   allpoints.push(new PMPoint(-1.90773, 1.75351, 0));
   allpoints.push(new PMPoint(-2.17072, 1.75351, 0));
   allpoints.push(new PMPoint(-2.38349, 1.59892, 0));
   allpoints.push(new PMPoint(-2.46476, 1.3488, 0));
   allpoints.push(new PMPoint(-2.38349, 1.09868, 0));
   allpoints.push(new PMPoint(-2.17072, 0.944101, 0));
   allpoints.push(new PMPoint(-2.22517, -1.38622, 0));
   allpoints.push(new PMPoint(-2.04919, -1.58166, 0));
   allpoints.push(new PMPoint(-0.0879163, 3.07568, 0));
   allpoints.push(new PMPoint(-0.345161, 3.021, 0));
   allpoints.push(new PMPoint(0.399984, 2.56831, 0));
   allpoints.push(new PMPoint(0.640239, 2.67528, 0));
   allpoints.push(new PMPoint(0.771735, 2.90304, 0));
   allpoints.push(new PMPoint(0.744245, 3.16459, 0));
   allpoints.push(new PMPoint(0.568269, 3.36003, 0));
   allpoints.push(new PMPoint(0.311024, 3.41471, 0));
   allpoints.push(new PMPoint(0.0707687, 3.30774, 0));
   allpoints.push(new PMPoint(-0.0607273, 3.07999, 0));
   allpoints.push(new PMPoint(2.31219, -1.58166, 0));
   allpoints.push(new PMPoint(2.48816, -1.38622, 0));
   allpoints.push(new PMPoint(-0.131496, -2.82807, 0));
   allpoints.push(new PMPoint(0, -3.05583, 0));
   allpoints.push(new PMPoint(0.262992, -3.05583, 0));
   allpoints.push(new PMPoint(0.394488, -2.82807, 0));

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
   allpoints[122].makesphere(0.02,points_material);
   allpoints[123].makesphere(0.02,points_material);
   allpoints[124].makesphere(0.02,points_material);
   allpoints[125].makesphere(0.02,points_material);
   allpoints[126].makesphere(0.02,points_material);
   allpoints[127].makesphere(0.02,points_material);
   allpoints[128].makesphere(0.02,points_material);
   allpoints[129].makesphere(0.02,points_material);
   allpoints[130].makesphere(0.02,points_material);
   allpoints[131].makesphere(0.02,points_material);
   allpoints[132].makesphere(0.02,points_material);
   allpoints[133].makesphere(0.02,points_material);
   allpoints[134].makesphere(0.02,points_material);
   allpoints[135].makesphere(0.02,points_material);
   allpoints[136].makesphere(0.02,points_material);
   allpoints[137].makesphere(0.02,points_material);
   allpoints[138].makesphere(0.02,points_material);
   allpoints[139].makesphere(0.02,points_material);
   allpoints[140].makesphere(0.02,points_material);
   allpoints[141].makesphere(0.02,points_material);
   allpoints[142].makesphere(0.02,points_material);
   allpoints[143].makesphere(0.02,points_material);
   allpoints[144].makesphere(0.02,points_material);
   allpoints[145].makesphere(0.02,points_material);
   allpoints[146].makesphere(0.02,points_material);
   allpoints[147].makesphere(0.02,points_material);
   allpoints[148].makesphere(0.02,points_material);
   allpoints[149].makesphere(0.02,points_material);
   allpoints[150].makesphere(0.02,points_material);
   allpoints[151].makesphere(0.02,points_material);
   allpoints[152].makesphere(0.02,points_material);
   allpoints[153].makesphere(0.02,points_material);
   allpoints[154].makesphere(0.02,points_material);
   allpoints[155].makesphere(0.02,points_material);
   allpoints[156].makesphere(0.02,points_material);
   allpoints[157].makesphere(0.02,points_material);
   allpoints[158].makesphere(0.02,points_material);
   allpoints[159].makesphere(0.02,points_material);
   allpoints[160].makesphere(0.02,points_material);
   allpoints[161].makesphere(0.02,points_material);
   allpoints[162].makesphere(0.02,points_material);
   allpoints[163].makesphere(0.02,points_material);
   allpoints[164].makesphere(0.02,points_material);
   allpoints[165].makesphere(0.02,points_material);
   allpoints[166].makesphere(0.02,points_material);
   allpoints[167].makesphere(0.02,points_material);
   allpoints[168].makesphere(0.02,points_material);
   allpoints[169].makesphere(0.02,points_material);
   allpoints[170].makesphere(0.02,points_material);
   allpoints[171].makesphere(0.02,points_material);
   allpoints[172].makesphere(0.02,points_material);
   allpoints[173].makesphere(0.02,points_material);
   allpoints[174].makesphere(0.02,points_material);
   allpoints[175].makesphere(0.02,points_material);
   allpoints[176].makesphere(0.02,points_material);
   allpoints[177].makesphere(0.02,points_material);
   allpoints[178].makesphere(0.02,points_material);
   allpoints[179].makesphere(0.02,points_material);
   allpoints[180].makesphere(0.02,points_material);
   allpoints[181].makesphere(0.02,points_material);
   allpoints[182].makesphere(0.02,points_material);
   allpoints[183].makesphere(0.02,points_material);
   allpoints[184].makesphere(0.02,points_material);
   allpoints[185].makesphere(0.02,points_material);
   allpoints[186].makesphere(0.02,points_material);
   allpoints[187].makesphere(0.02,points_material);
   allpoints[188].makesphere(0.02,points_material);
   allpoints[189].makesphere(0.02,points_material);
   allpoints[190].makesphere(0.02,points_material);
   allpoints[191].makesphere(0.02,points_material);
   allpoints[192].makesphere(0.02,points_material);
   allpoints[193].makesphere(0.02,points_material);
   allpoints[194].makesphere(0.02,points_material);
   allpoints[195].makesphere(0.02,points_material);
   allpoints[196].makesphere(0.02,points_material);
   allpoints[197].makesphere(0.02,points_material);
   allpoints[198].makesphere(0.02,points_material);
   allpoints[199].makesphere(0.02,points_material);
   allpoints[200].makesphere(0.02,points_material);
   allpoints[201].makesphere(0.02,points_material);
   allpoints[202].makesphere(0.02,points_material);
   allpoints[203].makesphere(0.02,points_material);
   allpoints[204].makesphere(0.02,points_material);
   allpoints[205].makesphere(0.02,points_material);
   allpoints[206].makesphere(0.02,points_material);
   allpoints[207].makesphere(0.02,points_material);
   allpoints[208].makesphere(0.02,points_material);
   allpoints[209].makesphere(0.02,points_material);
   allpoints[210].makesphere(0.02,points_material);
   allpoints[211].makesphere(0.02,points_material);
   allpoints[212].makesphere(0.02,points_material);
   allpoints[213].makesphere(0.02,points_material);
   allpoints[214].makesphere(0.02,points_material);
   allpoints[215].makesphere(0.02,points_material);
   allpoints[216].makesphere(0.02,points_material);
   allpoints[217].makesphere(0.02,points_material);
   allpoints[218].makesphere(0.02,points_material);
   allpoints[219].makesphere(0.02,points_material);
   allpoints[220].makesphere(0.02,points_material);
   allpoints[221].makesphere(0.02,points_material);
   allpoints[222].makesphere(0.02,points_material);
   allpoints[223].makesphere(0.02,points_material);
   allpoints[224].makesphere(0.02,points_material);
   allpoints[225].makesphere(0.02,points_material);
   allpoints[226].makesphere(0.02,points_material);
   allpoints[227].makesphere(0.02,points_material);
   allpoints[228].makesphere(0.02,points_material);
   allpoints[229].makesphere(0.02,points_material);
   allpoints[230].makesphere(0.02,points_material);
   allpoints[231].makesphere(0.02,points_material);
   allpoints[232].makesphere(0.02,points_material);
   allpoints[233].makesphere(0.02,points_material);
   allpoints[234].makesphere(0.02,points_material);
   allpoints[235].makesphere(0.02,points_material);
   allpoints[236].makesphere(0.02,points_material);
   allpoints[237].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[122].vector);
   faces.vertices.push(allpoints[123].vector);
   faces.vertices.push(allpoints[124].vector);
   faces.vertices.push(allpoints[125].vector);
   faces.vertices.push(allpoints[126].vector);
   faces.vertices.push(allpoints[127].vector);
   faces.vertices.push(allpoints[128].vector);
   faces.vertices.push(allpoints[129].vector);
   faces.vertices.push(allpoints[130].vector);
   faces.vertices.push(allpoints[131].vector);
   faces.vertices.push(allpoints[132].vector);
   faces.vertices.push(allpoints[133].vector);
   faces.vertices.push(allpoints[134].vector);
   faces.vertices.push(allpoints[135].vector);
   faces.vertices.push(allpoints[136].vector);
   faces.vertices.push(allpoints[137].vector);
   faces.vertices.push(allpoints[138].vector);
   faces.vertices.push(allpoints[139].vector);
   faces.vertices.push(allpoints[140].vector);
   faces.vertices.push(allpoints[141].vector);
   faces.vertices.push(allpoints[142].vector);
   faces.vertices.push(allpoints[143].vector);
   faces.vertices.push(allpoints[144].vector);
   faces.vertices.push(allpoints[145].vector);
   faces.vertices.push(allpoints[146].vector);
   faces.vertices.push(allpoints[147].vector);
   faces.vertices.push(allpoints[148].vector);
   faces.vertices.push(allpoints[149].vector);
   faces.vertices.push(allpoints[150].vector);
   faces.vertices.push(allpoints[151].vector);
   faces.vertices.push(allpoints[152].vector);
   faces.vertices.push(allpoints[153].vector);
   faces.vertices.push(allpoints[154].vector);
   faces.vertices.push(allpoints[155].vector);
   faces.vertices.push(allpoints[156].vector);
   faces.vertices.push(allpoints[157].vector);
   faces.vertices.push(allpoints[158].vector);
   faces.vertices.push(allpoints[159].vector);
   faces.vertices.push(allpoints[160].vector);
   faces.vertices.push(allpoints[161].vector);
   faces.vertices.push(allpoints[162].vector);
   faces.vertices.push(allpoints[163].vector);
   faces.vertices.push(allpoints[164].vector);
   faces.vertices.push(allpoints[165].vector);
   faces.vertices.push(allpoints[166].vector);
   faces.vertices.push(allpoints[167].vector);
   faces.vertices.push(allpoints[168].vector);
   faces.vertices.push(allpoints[169].vector);
   faces.vertices.push(allpoints[170].vector);
   faces.vertices.push(allpoints[171].vector);
   faces.vertices.push(allpoints[172].vector);
   faces.vertices.push(allpoints[173].vector);
   faces.vertices.push(allpoints[174].vector);
   faces.vertices.push(allpoints[175].vector);
   faces.vertices.push(allpoints[176].vector);
   faces.vertices.push(allpoints[177].vector);
   faces.vertices.push(allpoints[178].vector);
   faces.vertices.push(allpoints[179].vector);
   faces.vertices.push(allpoints[180].vector);
   faces.vertices.push(allpoints[181].vector);
   faces.vertices.push(allpoints[182].vector);
   faces.vertices.push(allpoints[183].vector);
   faces.vertices.push(allpoints[184].vector);
   faces.vertices.push(allpoints[185].vector);
   faces.vertices.push(allpoints[186].vector);
   faces.vertices.push(allpoints[187].vector);
   faces.vertices.push(allpoints[188].vector);
   faces.vertices.push(allpoints[189].vector);
   faces.vertices.push(allpoints[190].vector);
   faces.vertices.push(allpoints[191].vector);
   faces.vertices.push(allpoints[192].vector);
   faces.vertices.push(allpoints[193].vector);
   faces.vertices.push(allpoints[194].vector);
   faces.vertices.push(allpoints[195].vector);
   faces.vertices.push(allpoints[196].vector);
   faces.vertices.push(allpoints[197].vector);
   faces.vertices.push(allpoints[198].vector);
   faces.vertices.push(allpoints[199].vector);
   faces.vertices.push(allpoints[200].vector);
   faces.vertices.push(allpoints[201].vector);
   faces.vertices.push(allpoints[202].vector);
   faces.vertices.push(allpoints[203].vector);
   faces.vertices.push(allpoints[204].vector);
   faces.vertices.push(allpoints[205].vector);
   faces.vertices.push(allpoints[206].vector);
   faces.vertices.push(allpoints[207].vector);
   faces.vertices.push(allpoints[208].vector);
   faces.vertices.push(allpoints[209].vector);
   faces.vertices.push(allpoints[210].vector);
   faces.vertices.push(allpoints[211].vector);
   faces.vertices.push(allpoints[212].vector);
   faces.vertices.push(allpoints[213].vector);
   faces.vertices.push(allpoints[214].vector);
   faces.vertices.push(allpoints[215].vector);
   faces.vertices.push(allpoints[216].vector);
   faces.vertices.push(allpoints[217].vector);
   faces.vertices.push(allpoints[218].vector);
   faces.vertices.push(allpoints[219].vector);
   faces.vertices.push(allpoints[220].vector);
   faces.vertices.push(allpoints[221].vector);
   faces.vertices.push(allpoints[222].vector);
   faces.vertices.push(allpoints[223].vector);
   faces.vertices.push(allpoints[224].vector);
   faces.vertices.push(allpoints[225].vector);
   faces.vertices.push(allpoints[226].vector);
   faces.vertices.push(allpoints[227].vector);
   faces.vertices.push(allpoints[228].vector);
   faces.vertices.push(allpoints[229].vector);
   faces.vertices.push(allpoints[230].vector);
   faces.vertices.push(allpoints[231].vector);
   faces.vertices.push(allpoints[232].vector);
   faces.vertices.push(allpoints[233].vector);
   faces.vertices.push(allpoints[234].vector);
   faces.vertices.push(allpoints[235].vector);
   faces.vertices.push(allpoints[236].vector);
   faces.vertices.push(allpoints[237].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(7, 0, 6, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(5, 4, 8, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(5, 8, 9, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 5, 10, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(39, 7, 6, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(39, 6, 36, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(39, 36, 37, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(39, 37, 38, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(8, 40, 41, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(8, 41, 42, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(8, 42, 43, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(8, 43, 9, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(30, 29, 76, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 76, 77, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(24, 23, 58, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(24, 58, 59, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(16, 15, 44, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(16, 44, 45, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(12, 11, 46, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(12, 46, 47, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(38, 37, 90, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 90, 91, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 91, 92, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 92, 93, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 93, 94, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 94, 95, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 95, 96, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(38, 96, 97, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(98, 99, 100, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 100, 101, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 101, 102, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 102, 103, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 103, 104, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 104, 105, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 105, 42, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(98, 42, 41, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(15, 14, 48, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(15, 48, 49, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(15, 49, 50, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(15, 50, 51, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(13, 12, 52, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(13, 52, 53, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(13, 53, 54, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(13, 54, 55, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(14, 13, 56, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(14, 56, 57, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(50, 49, 106, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(50, 106, 107, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(108, 109, 110, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 110, 111, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 111, 112, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 112, 113, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 113, 114, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 114, 115, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 115, 49, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(108, 49, 48, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(54, 53, 116, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(54, 116, 117, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(94, 93, 150, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(94, 150, 151, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(93, 92, 152, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(93, 152, 153, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(93, 153, 154, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(93, 154, 155, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(103, 102, 160, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(103, 160, 161, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(103, 161, 162, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(103, 162, 163, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(102, 101, 164, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(102, 164, 165, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(114, 113, 170, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(114, 170, 171, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(112, 111, 172, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(112, 172, 173, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(113, 112, 174, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(113, 174, 175, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(113, 175, 176, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(113, 176, 177, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(176, 175, 220, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(176, 220, 221, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(208, 207, 234, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(208, 234, 235, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(208, 235, 236, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(208, 236, 237, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(182, 181, 222, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(182, 222, 223, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(198, 197, 232, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(198, 232, 233, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(214, 215, 216, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 216, 217, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 217, 218, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 218, 219, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 219, 161, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 161, 160, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 160, 212, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(214, 212, 213, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(150, 204, 205, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 205, 206, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 206, 207, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 207, 208, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 208, 209, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 209, 210, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 210, 211, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(150, 211, 151, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(126, 125, 178, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(126, 178, 179, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(125, 124, 180, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(125, 180, 181, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(125, 181, 182, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(125, 182, 183, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(143, 142, 196, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(143, 196, 197, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(143, 197, 198, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(143, 198, 199, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(142, 141, 200, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(142, 200, 201, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(166, 167, 168, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(166, 168, 169, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(166, 169, 101, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(166, 101, 100, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(124, 123, 184, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(124, 184, 185, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(228, 229, 230, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 230, 231, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 231, 181, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 181, 180, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 180, 224, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 224, 225, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 225, 226, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(228, 226, 227, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(144, 143, 202, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(144, 202, 203, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(95, 94, 156, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(95, 156, 157, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(95, 157, 158, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(95, 158, 159, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(62, 61, 118, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(62, 118, 119, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(136, 135, 190, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(136, 190, 191, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(80, 79, 138, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(80, 138, 139, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(186, 187, 188, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(186, 188, 189, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(186, 189, 123, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(186, 123, 122, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(192, 193, 194, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(192, 194, 195, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(192, 195, 135, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(192, 135, 134, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(120, 121, 122, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 122, 123, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 123, 124, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 124, 125, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 125, 126, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 126, 127, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 127, 61, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(120, 61, 60, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(81, 80, 140, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 140, 141, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 141, 142, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 142, 143, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 143, 144, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 144, 145, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 145, 146, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(81, 146, 147, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(68, 67, 128, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(68, 128, 129, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(86, 85, 148, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(86, 148, 149, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(23, 22, 60, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(23, 60, 61, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(23, 61, 62, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(23, 62, 63, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(31, 30, 78, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(31, 78, 79, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(31, 79, 80, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(31, 80, 81, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(22, 21, 64, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(22, 64, 65, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(32, 31, 82, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(32, 82, 83, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(21, 20, 66, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(21, 66, 67, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(21, 67, 68, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(21, 68, 69, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(33, 32, 84, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(33, 84, 85, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(33, 85, 86, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(33, 86, 87, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(132, 133, 134, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 134, 135, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 135, 136, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 136, 137, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 137, 67, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 67, 66, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 66, 130, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(132, 130, 131, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(20, 19, 70, undefined, undefined, 56));
   faces.faces.push(new THREE.Face3(20, 70, 71, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(34, 33, 88, undefined, undefined, 57));
   faces.faces.push(new THREE.Face3(34, 88, 89, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(4, 3, 18, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 21, 22, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(4, 24, 25, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(72, 73, 74, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(72, 74, 75, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(72, 75, 19, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(72, 19, 18, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(3, 2, 26, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(3, 26, 27, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(2, 1, 28, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 28, 29, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 29, 30, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 30, 31, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 31, 32, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 32, 33, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 33, 34, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(2, 34, 35, undefined, undefined, 61));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[98].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[108].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[150].vector);
   line.vertices.push(allpoints[151].vector);
   line.vertices.push(allpoints[94].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[152].vector);
   line.vertices.push(allpoints[153].vector);
   line.vertices.push(allpoints[154].vector);
   line.vertices.push(allpoints[155].vector);
   line.vertices.push(allpoints[93].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[160].vector);
   line.vertices.push(allpoints[161].vector);
   line.vertices.push(allpoints[162].vector);
   line.vertices.push(allpoints[163].vector);
   line.vertices.push(allpoints[103].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[164].vector);
   line.vertices.push(allpoints[165].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[170].vector);
   line.vertices.push(allpoints[171].vector);
   line.vertices.push(allpoints[114].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[172].vector);
   line.vertices.push(allpoints[173].vector);
   line.vertices.push(allpoints[112].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[174].vector);
   line.vertices.push(allpoints[175].vector);
   line.vertices.push(allpoints[176].vector);
   line.vertices.push(allpoints[177].vector);
   line.vertices.push(allpoints[113].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[176].vector);
   line.vertices.push(allpoints[175].vector);
   line.vertices.push(allpoints[220].vector);
   line.vertices.push(allpoints[221].vector);
   line.vertices.push(allpoints[176].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[208].vector);
   line.vertices.push(allpoints[207].vector);
   line.vertices.push(allpoints[234].vector);
   line.vertices.push(allpoints[235].vector);
   line.vertices.push(allpoints[236].vector);
   line.vertices.push(allpoints[237].vector);
   line.vertices.push(allpoints[208].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[182].vector);
   line.vertices.push(allpoints[181].vector);
   line.vertices.push(allpoints[222].vector);
   line.vertices.push(allpoints[223].vector);
   line.vertices.push(allpoints[182].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[198].vector);
   line.vertices.push(allpoints[197].vector);
   line.vertices.push(allpoints[232].vector);
   line.vertices.push(allpoints[233].vector);
   line.vertices.push(allpoints[198].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[214].vector);
   line.vertices.push(allpoints[215].vector);
   line.vertices.push(allpoints[216].vector);
   line.vertices.push(allpoints[217].vector);
   line.vertices.push(allpoints[218].vector);
   line.vertices.push(allpoints[219].vector);
   line.vertices.push(allpoints[161].vector);
   line.vertices.push(allpoints[160].vector);
   line.vertices.push(allpoints[212].vector);
   line.vertices.push(allpoints[213].vector);
   line.vertices.push(allpoints[214].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[150].vector);
   line.vertices.push(allpoints[204].vector);
   line.vertices.push(allpoints[205].vector);
   line.vertices.push(allpoints[206].vector);
   line.vertices.push(allpoints[207].vector);
   line.vertices.push(allpoints[208].vector);
   line.vertices.push(allpoints[209].vector);
   line.vertices.push(allpoints[210].vector);
   line.vertices.push(allpoints[211].vector);
   line.vertices.push(allpoints[151].vector);
   line.vertices.push(allpoints[150].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[178].vector);
   line.vertices.push(allpoints[179].vector);
   line.vertices.push(allpoints[126].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[180].vector);
   line.vertices.push(allpoints[181].vector);
   line.vertices.push(allpoints[182].vector);
   line.vertices.push(allpoints[183].vector);
   line.vertices.push(allpoints[125].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[142].vector);
   line.vertices.push(allpoints[196].vector);
   line.vertices.push(allpoints[197].vector);
   line.vertices.push(allpoints[198].vector);
   line.vertices.push(allpoints[199].vector);
   line.vertices.push(allpoints[143].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[142].vector);
   line.vertices.push(allpoints[141].vector);
   line.vertices.push(allpoints[200].vector);
   line.vertices.push(allpoints[201].vector);
   line.vertices.push(allpoints[142].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[166].vector);
   line.vertices.push(allpoints[167].vector);
   line.vertices.push(allpoints[168].vector);
   line.vertices.push(allpoints[169].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[166].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[184].vector);
   line.vertices.push(allpoints[185].vector);
   line.vertices.push(allpoints[124].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[228].vector);
   line.vertices.push(allpoints[229].vector);
   line.vertices.push(allpoints[230].vector);
   line.vertices.push(allpoints[231].vector);
   line.vertices.push(allpoints[181].vector);
   line.vertices.push(allpoints[180].vector);
   line.vertices.push(allpoints[224].vector);
   line.vertices.push(allpoints[225].vector);
   line.vertices.push(allpoints[226].vector);
   line.vertices.push(allpoints[227].vector);
   line.vertices.push(allpoints[228].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[144].vector);
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[202].vector);
   line.vertices.push(allpoints[203].vector);
   line.vertices.push(allpoints[144].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[156].vector);
   line.vertices.push(allpoints[157].vector);
   line.vertices.push(allpoints[158].vector);
   line.vertices.push(allpoints[159].vector);
   line.vertices.push(allpoints[95].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[190].vector);
   line.vertices.push(allpoints[191].vector);
   line.vertices.push(allpoints[136].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[138].vector);
   line.vertices.push(allpoints[139].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[186].vector);
   line.vertices.push(allpoints[187].vector);
   line.vertices.push(allpoints[188].vector);
   line.vertices.push(allpoints[189].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[186].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[192].vector);
   line.vertices.push(allpoints[193].vector);
   line.vertices.push(allpoints[194].vector);
   line.vertices.push(allpoints[195].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[192].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[120].vector);
   line.vertices.push(allpoints[121].vector);
   line.vertices.push(allpoints[122].vector);
   line.vertices.push(allpoints[123].vector);
   line.vertices.push(allpoints[124].vector);
   line.vertices.push(allpoints[125].vector);
   line.vertices.push(allpoints[126].vector);
   line.vertices.push(allpoints[127].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[120].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[140].vector);
   line.vertices.push(allpoints[141].vector);
   line.vertices.push(allpoints[142].vector);
   line.vertices.push(allpoints[143].vector);
   line.vertices.push(allpoints[144].vector);
   line.vertices.push(allpoints[145].vector);
   line.vertices.push(allpoints[146].vector);
   line.vertices.push(allpoints[147].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[128].vector);
   line.vertices.push(allpoints[129].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[148].vector);
   line.vertices.push(allpoints[149].vector);
   line.vertices.push(allpoints[86].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[132].vector);
   line.vertices.push(allpoints[133].vector);
   line.vertices.push(allpoints[134].vector);
   line.vertices.push(allpoints[135].vector);
   line.vertices.push(allpoints[136].vector);
   line.vertices.push(allpoints[137].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[130].vector);
   line.vertices.push(allpoints[131].vector);
   line.vertices.push(allpoints[132].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[72].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[2].vector);
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
