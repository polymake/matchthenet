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

   var axes = [[97,96],
      [87,86],
      [79,78],
      [72,71],
      [65,64],
      [62,61],
      [58,57],
      [52,51],
      [51,50],
      [43,42],
      [44,43],
      [36,35],
      [37,36],
      [29,28],
      [30,29],
      [26,25],
      [23,22],
      [20,19],
      [19,18],
      [14,13],
      [15,14],
      [10,9],
      [11,10],
      [6,5],
      [7,6],
      [8,7],
      [3,2],
      [2,1],
      [4,3],
      [0,4],
      [1,0]];

   var angles = [2.48923451380543,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542,
      2.48923451380542,
      2.41186499736282,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.41186499736283,
      2.48923451380543,
      2.48923451380543,
      2.41186499736282,
      2.48923451380542,
      2.41186499736282,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.41186499736283,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380542,
      2.48923451380543,
      2.48923451380542];

   var subtrees = [[115,116,117],
      [111,112,113,114],
      [107,108,109,110],
      [103,104,105,106],
      [99,100,101,102],
      [95,96,97,98,115,116,117],
      [92,93,94],
      [88,89,90,91],
      [85,86,87,111,112,113,114],
      [81,82,83,84],
      [78,79,80,107,108,109,110],
      [74,75,76,77],
      [71,72,73,103,104,105,106],
      [67,68,69,70],
      [64,65,66,99,100,101,102],
      [60,61,62,63,95,96,97,98,115,116,117],
      [56,57,58,59,92,93,94],
      [53,54,55],
      [49,50,51,52,85,86,87,88,89,90,91,111,112,113,114],
      [46,47,48],
      [42,43,44,45,78,79,80,81,82,83,84,107,108,109,110],
      [39,40,41],
      [35,36,37,38,71,72,73,74,75,76,77,103,104,105,106],
      [32,33,34],
      [28,29,30,31,64,65,66,67,68,69,70,99,100,101,102],
      [25,26,27,60,61,62,63,95,96,97,98,115,116,117],
      [21,22,23,24,56,57,58,59,92,93,94],
      [17,18,19,20,49,50,51,52,53,54,55,85,86,87,88,89,90,91,111,112,113,114],
      [13,14,15,16,42,43,44,45,46,47,48,78,79,80,81,82,83,84,107,108,109,110],
      [9,10,11,12,35,36,37,38,39,40,41,71,72,73,74,75,76,77,103,104,105,106],
      [5,6,7,8,25,26,27,28,29,30,31,32,33,34,60,61,62,63,64,65,66,67,68,69,70,95,96,97,98,99,100,101,102,115,116,117]];

   var polytoperoot = [[0.652954723657609,-0.730025574164002,-0.201774106167599],
      [1.61803398874989,-1,3.01282016719861e-15],
      [0.124703255661205,0.201774106167599,0.730025574164001]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.403548, 0, 0));
   allpoints.push(new PMPoint(0.528251, 0.383797, 0));
   allpoints.push(new PMPoint(0.201774, 0.620997, 0));
   allpoints.push(new PMPoint(-0.124703, 0.383797, 0));
   allpoints.push(new PMPoint(-0.201774, -0.349483, 0));
   allpoints.push(new PMPoint(0, -0.698966, 0));
   allpoints.push(new PMPoint(0.403548, -0.698966, 0));
   allpoints.push(new PMPoint(0.605322, -0.349483, 0));
   allpoints.push(new PMPoint(-0.519433, 0.4677, 0));
   allpoints.push(new PMPoint(-0.789459, 0.167805, 0));
   allpoints.push(new PMPoint(-0.664756, -0.215992, 0));
   allpoints.push(new PMPoint(-0.270026, -0.299895, 0));
   allpoints.push(new PMPoint(0.159592, 1.02233, 0));
   allpoints.push(new PMPoint(-0.209068, 1.18647, 0));
   allpoints.push(new PMPoint(-0.535545, 0.949273, 0));
   allpoints.push(new PMPoint(-0.493363, 0.547935, 0));
   allpoints.push(new PMPoint(0.673575, -0.299895, 0));
   allpoints.push(new PMPoint(1.0683, -0.215992, 0));
   allpoints.push(new PMPoint(1.19301, 0.167805, 0));
   allpoints.push(new PMPoint(0.922981, 0.4677, 0));
   allpoints.push(new PMPoint(0.896911, 0.547935, 0));
   allpoints.push(new PMPoint(0.939093, 0.949273, 0));
   allpoints.push(new PMPoint(0.612616, 1.18647, 0));
   allpoints.push(new PMPoint(0.243956, 1.02233, 0));
   allpoints.push(new PMPoint(0.673575, -0.998861, 0));
   allpoints.push(new PMPoint(1.04223, -0.834723, 0));
   allpoints.push(new PMPoint(1.00005, -0.433385, 0));
   allpoints.push(new PMPoint(-0.201774, -1.04845, 0));
   allpoints.push(new PMPoint(0, -1.39793, 0));
   allpoints.push(new PMPoint(0.403548, -1.39793, 0));
   allpoints.push(new PMPoint(0.605322, -1.04845, 0));
   allpoints.push(new PMPoint(-0.596504, -0.433385, 0));
   allpoints.push(new PMPoint(-0.638686, -0.834723, 0));
   allpoints.push(new PMPoint(-0.270026, -0.998861, 0));
   allpoints.push(new PMPoint(-1.18419, 0.251707, 0));
   allpoints.push(new PMPoint(-1.45422, -0.0481876, 0));
   allpoints.push(new PMPoint(-1.32951, -0.431985, 0));
   allpoints.push(new PMPoint(-0.934783, -0.515887, 0));
   allpoints.push(new PMPoint(-0.721207, 0.817183, 0));
   allpoints.push(new PMPoint(-1.11594, 0.73328, 0));
   allpoints.push(new PMPoint(-1.15812, 0.331943, 0));
   allpoints.push(new PMPoint(-0.25125, 1.58781, 0));
   allpoints.push(new PMPoint(-0.61991, 1.75195, 0));
   allpoints.push(new PMPoint(-0.946387, 1.51475, 0));
   allpoints.push(new PMPoint(-0.904205, 1.11341, 0));
   allpoints.push(new PMPoint(0.429618, 1.32223, 0));
   allpoints.push(new PMPoint(0.227844, 1.67171, 0));
   allpoints.push(new PMPoint(-0.166886, 1.58781, 0));
   allpoints.push(new PMPoint(1.33833, -0.515887, 0));
   allpoints.push(new PMPoint(1.73306, -0.431985, 0));
   allpoints.push(new PMPoint(1.85776, -0.0481876, 0));
   allpoints.push(new PMPoint(1.58774, 0.251707, 0));
   allpoints.push(new PMPoint(1.56167, 0.331943, 0));
   allpoints.push(new PMPoint(1.51949, 0.73328, 0));
   allpoints.push(new PMPoint(1.12476, 0.817183, 0));
   allpoints.push(new PMPoint(1.30775, 1.11341, 0));
   allpoints.push(new PMPoint(1.34994, 1.51475, 0));
   allpoints.push(new PMPoint(1.02346, 1.75195, 0));
   allpoints.push(new PMPoint(0.654798, 1.58781, 0));
   allpoints.push(new PMPoint(0.631392, -1.4002, 0));
   allpoints.push(new PMPoint(0.95787, -1.6374, 0));
   allpoints.push(new PMPoint(1.32653, -1.47326, 0));
   allpoints.push(new PMPoint(1.36871, -1.07192, 0));
   allpoints.push(new PMPoint(-0.124703, -1.78173, 0));
   allpoints.push(new PMPoint(0.201774, -2.01893, 0));
   allpoints.push(new PMPoint(0.528251, -1.78173, 0));
   allpoints.push(new PMPoint(-0.605322, -1.04845, 0));
   allpoints.push(new PMPoint(-0.807096, -1.39793, 0));
   allpoints.push(new PMPoint(-0.605322, -1.74742, 0));
   allpoints.push(new PMPoint(-0.201774, -1.74742, 0));
   allpoints.push(new PMPoint(-1.85776, -0.0481876, 0));
   allpoints.push(new PMPoint(-1.98247, -0.431985, 0));
   allpoints.push(new PMPoint(-1.65599, -0.669184, 0));
   allpoints.push(new PMPoint(-1.30889, 0.635504, 0));
   allpoints.push(new PMPoint(-1.70362, 0.719407, 0));
   allpoints.push(new PMPoint(-1.97365, 0.419512, 0));
   allpoints.push(new PMPoint(-1.84895, 0.0357148, 0));
   allpoints.push(new PMPoint(-0.744613, 2.13574, 0));
   allpoints.push(new PMPoint(-1.14816, 2.13574, 0));
   allpoints.push(new PMPoint(-1.27286, 1.75195, 0));
   allpoints.push(new PMPoint(0.0752273, 1.82501, 0));
   allpoints.push(new PMPoint(0.033045, 2.22635, 0));
   allpoints.push(new PMPoint(-0.335615, 2.39048, 0));
   allpoints.push(new PMPoint(-0.662092, 2.15329, 0));
   allpoints.push(new PMPoint(2.05954, -0.669184, 0));
   allpoints.push(new PMPoint(2.38602, -0.431985, 0));
   allpoints.push(new PMPoint(2.26131, -0.0481876, 0));
   allpoints.push(new PMPoint(2.25249, 0.0357148, 0));
   allpoints.push(new PMPoint(2.3772, 0.419512, 0));
   allpoints.push(new PMPoint(2.10717, 0.719407, 0));
   allpoints.push(new PMPoint(1.71244, 0.635504, 0));
   allpoints.push(new PMPoint(1.67641, 1.75195, 0));
   allpoints.push(new PMPoint(1.55171, 2.13574, 0));
   allpoints.push(new PMPoint(1.14816, 2.13574, 0));
   allpoints.push(new PMPoint(0.915687, -2.03874, 0));
   allpoints.push(new PMPoint(1.24216, -2.27594, 0));
   allpoints.push(new PMPoint(1.61082, -2.1118, 0));
   allpoints.push(new PMPoint(1.65301, -1.71046, 0));
   allpoints.push(new PMPoint(-0.493363, -1.94587, 0));
   allpoints.push(new PMPoint(-0.535545, -2.3472, 0));
   allpoints.push(new PMPoint(-0.209068, -2.5844, 0));
   allpoints.push(new PMPoint(0.159592, -2.42027, 0));
   allpoints.push(new PMPoint(-2.12779, 0.251707, 0));
   allpoints.push(new PMPoint(-2.52252, 0.167805, 0));
   allpoints.push(new PMPoint(-2.64722, -0.215992, 0));
   allpoints.push(new PMPoint(-2.3772, -0.515887, 0));
   allpoints.push(new PMPoint(-0.542839, 2.48523, 0));
   allpoints.push(new PMPoint(-0.744613, 2.83471, 0));
   allpoints.push(new PMPoint(-1.14816, 2.83471, 0));
   allpoints.push(new PMPoint(-1.34994, 2.48523, 0));
   allpoints.push(new PMPoint(2.78075, -0.515887, 0));
   allpoints.push(new PMPoint(3.05077, -0.215992, 0));
   allpoints.push(new PMPoint(2.92607, 0.167805, 0));
   allpoints.push(new PMPoint(2.53134, 0.251707, 0));
   allpoints.push(new PMPoint(1.28435, -2.67727, 0));
   allpoints.push(new PMPoint(1.67908, -2.76118, 0));
   allpoints.push(new PMPoint(1.88085, -2.41169, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 7, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 61, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 62, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 50, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 86, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 34, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 61, 95, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 95, 96, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 96, 97, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 97, 98, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 64, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 65, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(67, 68, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 69, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 70, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(67, 29, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(99, 100, 101, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 101, 102, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 102, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(99, 65, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(103, 104, 105, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(103, 105, 106, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(103, 106, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(103, 72, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 71, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 72, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(97, 96, 115, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 115, 116, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(97, 116, 117, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(74, 75, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 77, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 36, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 78, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(107, 108, 109, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(107, 109, 110, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(107, 110, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(107, 79, 78, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 86, 111, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 111, 112, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 112, 113, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 113, 114, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 41, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 92, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 92, 93, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 93, 94, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 82, 83, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 83, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 84, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 43, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 51, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 88, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 89, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 90, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 48, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 58, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 23, 24, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[67].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[99].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[103].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[97].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[107].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[3].vector);
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
