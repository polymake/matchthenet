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

   var axes = [[39,38],
      [36,35],
      [20,19],
      [16,15],
      [17,16],
      [12,11],
      [8,7],
      [9,8],
      [6,5],
      [3,2],
      [5,4],
      [4,3],
      [0,6],
      [2,1],
      [1,0]];

   var angles = [2.60627361607338,
      2.75130357701834,
      2.43967558226485,
      2.44105392657569,
      2.59865161811476,
      1.43248669767952,
      2.05154776311095,
      2.70528738229797,
      2.16457438664418,
      2.44346957297734,
      1.88039308718618,
      1.85921801849238,
      2.6862246860491,
      1.62271979798156,
      2.05064256050178];

   var subtrees = [[52,53],
      [50,51],
      [45,46,47,48,49],
      [41,42,43,44],
      [38,39,40,52,53],
      [33,34,35,36,37,50,51],
      [29,30,31,32],
      [27,28],
      [24,25,26],
      [21,22,23],
      [18,19,20,45,46,47,48,49],
      [15,16,17,38,39,40,41,42,43,44,52,53],
      [13,14],
      [10,11,12,33,34,35,36,37,50,51],
      [7,8,9,27,28,29,30,31,32]];

   var polytoperoot = [[-0.118806154650439,-0.822959041078694,0.230270403592414],
      [-0.946691790937717,-0.751243906714944,1.16942611552395],
      [0.0614234023780542,0.889309628328599,0.621020396779982]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.646021, 0, 0));
   allpoints.push(new PMPoint(0.751005, 0.124206, 0));
   allpoints.push(new PMPoint(-0.195517, 0.950654, 0));
   allpoints.push(new PMPoint(-0.305087, 0.934432, 0));
   allpoints.push(new PMPoint(-0.372626, 0.864628, 0));
   allpoints.push(new PMPoint(-0.385027, 0.788388, 0));
   allpoints.push(new PMPoint(-0.430385, -0.240371, 0));
   allpoints.push(new PMPoint(-0.548636, -0.8456, 0));
   allpoints.push(new PMPoint(0.484132, -0.49082, 0));
   allpoints.push(new PMPoint(0.79982, -0.493415, 0));
   allpoints.push(new PMPoint(1.69147, -1.30684, 0));
   allpoints.push(new PMPoint(2.36747, 0.401691, 0));
   allpoints.push(new PMPoint(-0.627009, 0.311217, 0));
   allpoints.push(new PMPoint(-0.474778, -0.132646, 0));
   allpoints.push(new PMPoint(0.677053, 1.88251, 0));
   allpoints.push(new PMPoint(-0.369559, 1.6975, 0));
   allpoints.push(new PMPoint(-0.430924, 1.37316, 0));
   allpoints.push(new PMPoint(-0.611072, 1.27309, 0));
   allpoints.push(new PMPoint(-1.05732, 1.16632, 0));
   allpoints.push(new PMPoint(-1.16475, 0.997568, 0));
   allpoints.push(new PMPoint(1.85555, 1.3366, 0));
   allpoints.push(new PMPoint(1.51841, 1.57092, 0));
   allpoints.push(new PMPoint(0.942488, 1.52917, 0));
   allpoints.push(new PMPoint(-1.16471, 0.731411, 0));
   allpoints.push(new PMPoint(-1.24388, 0.629248, 0));
   allpoints.push(new PMPoint(-0.6864, 0.346322, 0));
   allpoints.push(new PMPoint(-0.958421, -2.04058, 0));
   allpoints.push(new PMPoint(0.537708, -1.69657, 0));
   allpoints.push(new PMPoint(-0.813834, 0.0301013, 0));
   allpoints.push(new PMPoint(-1.37504, -0.245359, 0));
   allpoints.push(new PMPoint(-1.30997, -1.82482, 0));
   allpoints.push(new PMPoint(-1.23947, -1.90326, 0));
   allpoints.push(new PMPoint(2.21341, -2.75056, 0));
   allpoints.push(new PMPoint(2.3144, -2.72015, 0));
   allpoints.push(new PMPoint(2.68782, -2.12503, 0));
   allpoints.push(new PMPoint(2.92056, -0.502515, 0));
   allpoints.push(new PMPoint(2.74522, 0.240845, 0));
   allpoints.push(new PMPoint(-0.412571, 1.72137, 0));
   allpoints.push(new PMPoint(-0.66612, 1.70646, 0));
   allpoints.push(new PMPoint(-0.869887, 1.50675, 0));
   allpoints.push(new PMPoint(1.1306, 2.2399, 0));
   allpoints.push(new PMPoint(0.370124, 2.31064, 0));
   allpoints.push(new PMPoint(-0.395719, 2.17158, 0));
   allpoints.push(new PMPoint(-0.407507, 1.7288, 0));
   allpoints.push(new PMPoint(-1.00093, 1.44601, 0));
   allpoints.push(new PMPoint(-1.4507, 1.70063, 0));
   allpoints.push(new PMPoint(-2.20418, 1.53285, 0));
   allpoints.push(new PMPoint(-2.84101, 1.23613, 0));
   allpoints.push(new PMPoint(-1.28587, 0.952457, 0));
   allpoints.push(new PMPoint(3.17589, -1.52699, 0));
   allpoints.push(new PMPoint(3.25245, -1.20657, 0));
   allpoints.push(new PMPoint(-0.523696, 2.15014, 0));
   allpoints.push(new PMPoint(-0.850811, 2.18918, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
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
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 33, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(12, 33, 34, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(12, 34, 35, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(12, 36, 37, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 0, 7, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(36, 35, 50, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(36, 50, 51, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(20, 19, 45, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(20, 45, 46, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(20, 47, 48, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(20, 48, 49, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(2, 1, 10, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(0, 6, 13, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(4, 3, 15, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 15, 16, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 16, 17, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(38, 52, 53, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(38, 53, 39, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(17, 16, 38, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(17, 38, 39, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(17, 39, 40, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(5, 4, 18, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 18, 19, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(5, 19, 20, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(3, 2, 21, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(3, 21, 22, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(6, 5, 24, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(6, 24, 25, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(6, 25, 26, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(15, 41, 42, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 42, 43, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 43, 44, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(15, 44, 16, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(28, 9, 8, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(28, 8, 27, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(29, 30, 31, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(29, 31, 32, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(29, 32, 8, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(29, 8, 7, undefined, undefined, 15));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[29].vector);
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
