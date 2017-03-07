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

   var axes = [[51,50],
      [48,23],
      [14,38],
      [37,36],
      [33,32],
      [29,6],
      [28,7],
      [23,22],
      [24,23],
      [26,25],
      [27,26],
      [20,19],
      [3,18],
      [17,4],
      [15,14],
      [14,13],
      [13,12],
      [12,11],
      [6,5],
      [7,6],
      [8,7],
      [9,8],
      [10,9],
      [4,3],
      [3,0],
      [1,4],
      [2,1],
      [0,2],
      [1,0]];

   var angles = [2.35619449019234,
      2.97167419886273,
      2.97167419886273,
      2.52611294491941,
      2.52611294491941,
      2.52611294491941,
      2.97167419886273,
      2.52611294491941,
      2.18627603546528,
      2.18627603546528,
      2.52611294491941,
      2.35619449019234,
      2.5261129449194,
      2.52611294491941,
      2.52611294491941,
      2.18627603546529,
      1.5707963267949,
      2.18627603546529,
      2.18627603546528,
      2.52611294491941,
      2.18627603546528,
      1.5707963267949,
      2.18627603546528,
      2.35619449019234,
      2.52611294491941,
      2.5261129449194,
      2.18627603546528,
      2.18627603546528,
      2.97167419886273];

   var subtrees = [[60,61],
      [58,59],
      [56,57],
      [55],
      [54],
      [52,53],
      [50,51,60,61],
      [49],
      [48,58,59],
      [47],
      [46],
      [44,45],
      [42,43],
      [40,41],
      [39],
      [38,56,57],
      [32,33,34,35,36,37,54,55],
      [31],
      [30],
      [29,52,53],
      [28,50,51,60,61],
      [22,23,24,25,26,27,46,47,48,49,58,59],
      [21],
      [19,20,44,45],
      [18,42,43],
      [17,40,41],
      [11,12,13,14,15,16,31,32,33,34,35,36,37,38,39,54,55,56,57],
      [5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,46,47,48,49,50,51,52,53,58,59,60,61],
      [3,4,17,18,19,20,40,41,42,43,44,45]];

   var polytoperoot = [[0.654514599661024,-0.271108823950793,-0.654514599661024],
      [1.4142135623731,-5.12057762114871e-16,-1],
      [0.542217647901586,0,0.766811551420464]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.542218, 0, 0));
   allpoints.push(new PMPoint(0.271109, 0.469574, 0));
   allpoints.push(new PMPoint(0, -0.542218, 0));
   allpoints.push(new PMPoint(0.542218, -0.542218, 0));
   allpoints.push(new PMPoint(0.130773, 0.993316, 0));
   allpoints.push(new PMPoint(-0.338802, 1.26443, 0));
   allpoints.push(new PMPoint(-0.862544, 1.12409, 0));
   allpoints.push(new PMPoint(-1.13365, 0.654515, 0));
   allpoints.push(new PMPoint(-0.993316, 0.130773, 0));
   allpoints.push(new PMPoint(-0.523742, -0.140336, 0));
   allpoints.push(new PMPoint(1.06596, -0.140336, 0));
   allpoints.push(new PMPoint(1.53553, 0.130773, 0));
   allpoints.push(new PMPoint(1.67587, 0.654515, 0));
   allpoints.push(new PMPoint(1.40476, 1.12409, 0));
   allpoints.push(new PMPoint(0.881019, 1.26443, 0));
   allpoints.push(new PMPoint(0.411445, 0.993316, 0));
   allpoints.push(new PMPoint(1.01179, -0.271109, 0));
   allpoints.push(new PMPoint(-0.469574, -0.271109, 0));
   allpoints.push(new PMPoint(0, -1.08444, 0));
   allpoints.push(new PMPoint(0.542218, -1.08444, 0));
   allpoints.push(new PMPoint(-0.993316, -0.411445, 0));
   allpoints.push(new PMPoint(-1.60323, 0.925623, 0));
   allpoints.push(new PMPoint(-2.12697, 0.785287, 0));
   allpoints.push(new PMPoint(-2.39808, 0.315713, 0));
   allpoints.push(new PMPoint(-2.25774, -0.208029, 0));
   allpoints.push(new PMPoint(-1.78817, -0.479138, 0));
   allpoints.push(new PMPoint(-1.26443, -0.338802, 0));
   allpoints.push(new PMPoint(-1.40476, 1.12409, 0));
   allpoints.push(new PMPoint(-0.722207, 1.64783, 0));
   allpoints.push(new PMPoint(0.130773, 1.53553, 0));
   allpoints.push(new PMPoint(1.53553, -0.411445, 0));
   allpoints.push(new PMPoint(1.80664, -0.338802, 0));
   allpoints.push(new PMPoint(2.33038, -0.479138, 0));
   allpoints.push(new PMPoint(2.79996, -0.208029, 0));
   allpoints.push(new PMPoint(2.9403, 0.315713, 0));
   allpoints.push(new PMPoint(2.66919, 0.785287, 0));
   allpoints.push(new PMPoint(2.14544, 0.925623, 0));
   allpoints.push(new PMPoint(1.94698, 1.12409, 0));
   allpoints.push(new PMPoint(1.26443, 1.64783, 0));
   allpoints.push(new PMPoint(0.813326, -1.01179, 0));
   allpoints.push(new PMPoint(1.2829, -0.740683, 0));
   allpoints.push(new PMPoint(-0.740683, -0.740683, 0));
   allpoints.push(new PMPoint(-0.271109, -1.01179, 0));
   allpoints.push(new PMPoint(0, -1.62665, 0));
   allpoints.push(new PMPoint(0.542218, -1.62665, 0));
   allpoints.push(new PMPoint(-1.40476, -0.862544, 0));
   allpoints.push(new PMPoint(-2.25774, -0.750247, 0));
   allpoints.push(new PMPoint(-2.66919, 0.785287, 0));
   allpoints.push(new PMPoint(-1.98663, 1.30903, 0));
   allpoints.push(new PMPoint(-0.862544, 1.66631, 0));
   allpoints.push(new PMPoint(-1.40476, 1.66631, 0));
   allpoints.push(new PMPoint(0.0446041, 1.64783, 0));
   allpoints.push(new PMPoint(-0.338802, 2.03124, 0));
   allpoints.push(new PMPoint(1.94698, -0.862544, 0));
   allpoints.push(new PMPoint(2.52885, 1.30903, 0));
   allpoints.push(new PMPoint(1.94698, 1.66631, 0));
   allpoints.push(new PMPoint(1.40476, 1.66631, 0));
   allpoints.push(new PMPoint(-2.12697, 1.3275, 0));
   allpoints.push(new PMPoint(-2.66919, 1.3275, 0));
   allpoints.push(new PMPoint(-0.862544, 2.20852, 0));
   allpoints.push(new PMPoint(-1.40476, 2.20852, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(4, 0, 3, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(17, 1, 4, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 18, 3, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(17, 4, 40, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(17, 40, 41, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(12, 11, 31, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(4, 3, 19, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(18, 42, 43, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(18, 43, 3, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(10, 9, 21, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(33, 32, 54, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(45, 20, 19, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(45, 19, 44, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(27, 26, 46, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(25, 47, 26, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(48, 24, 23, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(23, 22, 49, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(48, 23, 58, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(48, 58, 59, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(37, 36, 55, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(9, 8, 22, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(9, 22, 23, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(9, 23, 24, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(9, 24, 25, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(9, 25, 26, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(9, 26, 27, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(13, 12, 32, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 32, 33, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 33, 34, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 34, 35, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 35, 36, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(8, 7, 28, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(7, 50, 51, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(7, 51, 28, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(60, 61, 51, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(60, 51, 50, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(14, 13, 38, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(14, 38, 56, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(14, 56, 57, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(7, 6, 29, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(15, 14, 39, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(52, 53, 29, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(52, 29, 6, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(5, 30, 6, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(0, 2, 5, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(0, 6, 7, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(0, 7, 8, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 29));


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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
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
