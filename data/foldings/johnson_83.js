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

   var axes = [[61,31],
      [62,61],
      [58,57],
      [56,55],
      [49,48],
      [44,43],
      [42,41],
      [39,38],
      [35,34],
      [34,33],
      [31,30],
      [32,31],
      [26,5],
      [24,23],
      [23,22],
      [20,19],
      [21,20],
      [22,21],
      [16,15],
      [8,7],
      [10,9],
      [11,10],
      [12,11],
      [13,12],
      [9,8],
      [5,4],
      [6,5],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.7767288254763,
      2.58801829469274,
      2.77672882547631,
      2.77672882547631,
      2.58801829469275,
      2.58801829469275,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.0344439357957,
      2.12437068569195,
      2.0344439357957,
      2.12437068569194,
      2.03444393579571,
      2.58801829469275,
      2.12437068569194,
      2.12437068569194,
      2.0344439357957,
      2.12437068569194,
      2.0344439357957,
      2.0344439357957,
      2.58801829469275,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275,
      2.12437068569194,
      2.58801829469275];

   var subtrees = [[87],
      [84,85,86],
      [82,83],
      [81],
      [79,80],
      [78],
      [77],
      [75,76],
      [73,74],
      [65,66,67,68,69,70,71,72],
      [63,64],
      [61,62,84,85,86,87],
      [60],
      [57,58,59,82,83],
      [55,56,81],
      [52,53,54],
      [50,51],
      [47,48,49,79,80],
      [45,46],
      [43,44,78],
      [41,42,77],
      [38,39,40,75,76],
      [36,37],
      [33,34,35,65,66,67,68,69,70,71,72,73,74],
      [30,31,32,61,62,63,64,84,85,86,87],
      [28,29],
      [26,27,60],
      [18,19,20,21,22,23,24,25,47,48,49,50,51,52,53,54,55,56,57,58,59,79,80,81,82,83],
      [15,16,17,45,46],
      [7,8,9,10,11,12,13,14,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,84,85,86,87],
      [4,5,6,26,27,28,29,60]];

   var polytoperoot = [[0.587610674626365,-0.342484799231769,-0.780463936821457],
      [2.61803398874989,-1,-1.61803398874989],
      [0.448894611110031,-0.726326738142697,1.17522134925273]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.448895, 0, 0));
   allpoints.push(new PMPoint(0.448895, 0.448895, 0));
   allpoints.push(new PMPoint(0, 0.448895, 0));
   allpoints.push(new PMPoint(-0.138716, -0.426924, 0));
   allpoints.push(new PMPoint(0.224447, -0.690778, 0));
   allpoints.push(new PMPoint(0.587611, -0.426924, 0));
   allpoints.push(new PMPoint(-0.263854, 0.812058, 0));
   allpoints.push(new PMPoint(-0.690778, 0.950774, 0));
   allpoints.push(new PMPoint(-1.1177, 0.812058, 0));
   allpoints.push(new PMPoint(-1.38156, 0.448895, 0));
   allpoints.push(new PMPoint(-1.38156, 0, 0));
   allpoints.push(new PMPoint(-1.1177, -0.363163, 0));
   allpoints.push(new PMPoint(-0.690778, -0.501879, 0));
   allpoints.push(new PMPoint(-0.263854, -0.363163, 0));
   allpoints.push(new PMPoint(0.587611, 0.875819, 0));
   allpoints.push(new PMPoint(0.224447, 1.13967, 0));
   allpoints.push(new PMPoint(-0.138716, 0.875819, 0));
   allpoints.push(new PMPoint(0.712748, -0.363163, 0));
   allpoints.push(new PMPoint(1.13967, -0.501879, 0));
   allpoints.push(new PMPoint(1.5666, -0.363163, 0));
   allpoints.push(new PMPoint(1.83045, 0, 0));
   allpoints.push(new PMPoint(1.83045, 0.448895, 0));
   allpoints.push(new PMPoint(1.5666, 0.812058, 0));
   allpoints.push(new PMPoint(1.13967, 0.950774, 0));
   allpoints.push(new PMPoint(0.712748, 0.812058, 0));
   allpoints.push(new PMPoint(0.488301, -1.05394, 0));
   allpoints.push(new PMPoint(0.851464, -0.790088, 0));
   allpoints.push(new PMPoint(-0.40257, -0.790088, 0));
   allpoints.push(new PMPoint(-0.0394063, -1.05394, 0));
   allpoints.push(new PMPoint(-0.690778, 1.39967, 0));
   allpoints.push(new PMPoint(-1.1177, 1.53838, 0));
   allpoints.push(new PMPoint(-1.38156, 1.17522, 0));
   allpoints.push(new PMPoint(-1.38156, -0.726327, 0));
   allpoints.push(new PMPoint(-1.1177, -1.08949, 0));
   allpoints.push(new PMPoint(-0.690778, -0.950774, 0));
   allpoints.push(new PMPoint(-1.74472, -0.263854, 0));
   allpoints.push(new PMPoint(-1.48087, -0.627017, 0));
   allpoints.push(new PMPoint(-1.80848, 0.587611, 0));
   allpoints.push(new PMPoint(-2.07233, 0.224447, 0));
   allpoints.push(new PMPoint(-1.80848, -0.138716, 0));
   allpoints.push(new PMPoint(-1.48087, 1.07591, 0));
   allpoints.push(new PMPoint(-1.74472, 0.712748, 0));
   allpoints.push(new PMPoint(-0.125138, 1.23898, 0));
   allpoints.push(new PMPoint(-0.552062, 1.3777, 0));
   allpoints.push(new PMPoint(0.851464, 1.23898, 0));
   allpoints.push(new PMPoint(0.488301, 1.50284, 0));
   allpoints.push(new PMPoint(2.25737, -0.138716, 0));
   allpoints.push(new PMPoint(2.52123, 0.224447, 0));
   allpoints.push(new PMPoint(2.25737, 0.587611, 0));
   allpoints.push(new PMPoint(1.92976, -0.627017, 0));
   allpoints.push(new PMPoint(2.19361, -0.263854, 0));
   allpoints.push(new PMPoint(1.13967, -0.950774, 0));
   allpoints.push(new PMPoint(1.5666, -1.08949, 0));
   allpoints.push(new PMPoint(1.83045, -0.726327, 0));
   allpoints.push(new PMPoint(2.19361, 0.712748, 0));
   allpoints.push(new PMPoint(1.92976, 1.07591, 0));
   allpoints.push(new PMPoint(1.83045, 1.17522, 0));
   allpoints.push(new PMPoint(1.5666, 1.53838, 0));
   allpoints.push(new PMPoint(1.13967, 1.39967, 0));
   allpoints.push(new PMPoint(0.0418654, -1.10086, 0));
   allpoints.push(new PMPoint(-1.48087, 1.80224, 0));
   allpoints.push(new PMPoint(-1.74472, 1.43907, 0));
   allpoints.push(new PMPoint(-0.552062, 1.82659, 0));
   allpoints.push(new PMPoint(-0.978986, 1.96531, 0));
   allpoints.push(new PMPoint(-1.80848, -0.587611, 0));
   allpoints.push(new PMPoint(-2.2354, -0.726327, 0));
   allpoints.push(new PMPoint(-2.49926, -1.08949, 0));
   allpoints.push(new PMPoint(-2.49926, -1.53838, 0));
   allpoints.push(new PMPoint(-2.2354, -1.90155, 0));
   allpoints.push(new PMPoint(-1.80848, -2.04026, 0));
   allpoints.push(new PMPoint(-1.38156, -1.90155, 0));
   allpoints.push(new PMPoint(-1.1177, -1.53838, 0));
   allpoints.push(new PMPoint(-0.978986, -1.51641, 0));
   allpoints.push(new PMPoint(-0.552062, -1.3777, 0));
   allpoints.push(new PMPoint(-2.17164, 0.851464, 0));
   allpoints.push(new PMPoint(-2.4355, 0.488301, 0));
   allpoints.push(new PMPoint(-1.9273, 1.12283, 0));
   allpoints.push(new PMPoint(-0.218468, 1.67807, 0));
   allpoints.push(new PMPoint(2.88439, 0.488301, 0));
   allpoints.push(new PMPoint(2.62054, 0.851464, 0));
   allpoints.push(new PMPoint(2.3762, 1.12283, 0));
   allpoints.push(new PMPoint(2.19361, 1.43907, 0));
   allpoints.push(new PMPoint(1.92976, 1.80224, 0));
   allpoints.push(new PMPoint(-1.74472, 2.1654, 0));
   allpoints.push(new PMPoint(-2.17164, 2.02669, 0));
   allpoints.push(new PMPoint(-2.17164, 1.57779, 0));
   allpoints.push(new PMPoint(-1.07078, 1.98482, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 0, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 5, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 29, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 5, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 48, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 79, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 61, 62, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 75, 76, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(85, 86, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(85, 62, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(85, 61, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 72, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 34, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 33, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 65, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 66, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 67, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 68, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 69, 70, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(73, 74, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(73, 35, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 61, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 55, 81, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 57, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 82, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 20, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 50, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 52, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 64, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 31, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 55, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 78, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 44, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 57, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 58, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 46, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 24, 25, undefined, undefined, 0));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[85].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[73].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
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
