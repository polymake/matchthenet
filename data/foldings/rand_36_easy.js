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

   var axes = [[34,33],
      [31,30],
      [24,23],
      [16,15],
      [17,16],
      [18,17],
      [13,12],
      [12,11],
      [9,8],
      [6,5],
      [4,3],
      [0,4],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.11306605276695,
      2.52156069252284,
      2.2870205889502,
      2.54096288135574,
      2.52476359380362,
      2.14052890349855,
      1.62306432004227,
      1.43637262158918,
      2.39709262885985,
      2.15576723725736,
      2.35405995230915,
      2.33113027620223,
      2.17879561510679,
      2.04535114789664,
      2.44071761565734];

   var subtrees = [[51,52,53],
      [49,50],
      [45,46,47,48],
      [42,43,44],
      [39,40,41],
      [36,37,38],
      [32,33,34,35,51,52,53],
      [29,30,31,49,50],
      [26,27,28],
      [22,23,24,25,45,46,47,48],
      [20,21],
      [15,16,17,18,19,36,37,38,39,40,41,42,43,44],
      [10,11,12,13,14,29,30,31,32,33,34,35,49,50,51,52,53],
      [7,8,9,26,27,28],
      [5,6,22,23,24,25,45,46,47,48]];

   var polytoperoot = [[0.69260505990509,0.64974658006371,0.883766075995856],
      [0.743702121273542,-0.0908294102973312,0.615461784772377],
      [0.666115875851037,-0.0230427030522759,-0.808311348198953]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.08051, 0, 0));
   allpoints.push(new PMPoint(1.25211, 0.112053, 0));
   allpoints.push(new PMPoint(0.973059, 0.492893, 0));
   allpoints.push(new PMPoint(0.527187, 0.63337, 0));
   allpoints.push(new PMPoint(-0.179987, -0.1255, 0));
   allpoints.push(new PMPoint(0.624984, -0.806932, 0));
   allpoints.push(new PMPoint(0.798687, -0.882733, 0));
   allpoints.push(new PMPoint(1.18241, -1.27796, 0));
   allpoints.push(new PMPoint(1.73086, -0.10161, 0));
   allpoints.push(new PMPoint(1.76519, 0.219778, 0));
   allpoints.push(new PMPoint(2.23538, 0.894574, 0));
   allpoints.push(new PMPoint(2.1724, 1.1375, 0));
   allpoints.push(new PMPoint(1.44301, 1.5471, 0));
   allpoints.push(new PMPoint(1.39182, 1.495, 0));
   allpoints.push(new PMPoint(0.42761, 0.859299, 0));
   allpoints.push(new PMPoint(0.139579, 0.925907, 0));
   allpoints.push(new PMPoint(-0.204413, 0.926875, 0));
   allpoints.push(new PMPoint(-0.713405, 0.272351, 0));
   allpoints.push(new PMPoint(-0.206671, -0.0737062, 0));
   allpoints.push(new PMPoint(1.16545, 1.5618, 0));
   allpoints.push(new PMPoint(0.500424, 0.878815, 0));
   allpoints.push(new PMPoint(-0.708451, -0.437366, 0));
   allpoints.push(new PMPoint(-0.729574, -1.09143, 0));
   allpoints.push(new PMPoint(0.682696, -1.49001, 0));
   allpoints.push(new PMPoint(0.754015, -1.34247, 0));
   allpoints.push(new PMPoint(1.2772, -1.41164, 0));
   allpoints.push(new PMPoint(1.79297, -1.46423, 0));
   allpoints.push(new PMPoint(2.52318, -0.322221, 0));
   allpoints.push(new PMPoint(3.58905, 0.823914, 0));
   allpoints.push(new PMPoint(3.5257, 1.38842, 0));
   allpoints.push(new PMPoint(2.89456, 1.48786, 0));
   allpoints.push(new PMPoint(2.39308, 1.90923, 0));
   allpoints.push(new PMPoint(1.9773, 2.51446, 0));
   allpoints.push(new PMPoint(1.49671, 2.16811, 0));
   allpoints.push(new PMPoint(1.44947, 1.84864, 0));
   allpoints.push(new PMPoint(-0.238888, 1.33538, 0));
   allpoints.push(new PMPoint(-1.23535, 1.15028, 0));
   allpoints.push(new PMPoint(-1.21502, 0.692629, 0));
   allpoints.push(new PMPoint(0.340047, 1.82221, 0));
   allpoints.push(new PMPoint(0.0199561, 1.7794, 0));
   allpoints.push(new PMPoint(-0.137605, 1.33135, 0));
   allpoints.push(new PMPoint(0.678509, 1.77896, 0));
   allpoints.push(new PMPoint(0.674936, 1.85191, 0));
   allpoints.push(new PMPoint(0.37578, 1.81346, 0));
   allpoints.push(new PMPoint(-0.748627, -1.54914, 0));
   allpoints.push(new PMPoint(-0.723732, -1.86432, 0));
   allpoints.push(new PMPoint(-0.0377045, -2.15022, 0));
   allpoints.push(new PMPoint(0.503085, -1.97635, 0));
   allpoints.push(new PMPoint(3.69994, 2.11093, 0));
   allpoints.push(new PMPoint(3.16829, 2.16922, 0));
   allpoints.push(new PMPoint(2.20565, 2.9981, 0));
   allpoints.push(new PMPoint(2.02641, 3.25855, 0));
   allpoints.push(new PMPoint(1.26911, 2.58497, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
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

   faces.faces.push(new THREE.Face3(18, 17, 36, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(18, 37, 38, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(12, 11, 29, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(12, 29, 30, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(12, 30, 31, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(9, 8, 26, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(9, 26, 27, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(9, 27, 28, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(24, 23, 45, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(24, 45, 46, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(24, 47, 48, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(25, 6, 5, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(25, 5, 22, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(25, 22, 23, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(25, 23, 24, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(17, 16, 39, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(17, 39, 40, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(17, 40, 41, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(34, 33, 51, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(34, 51, 52, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(34, 52, 53, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(0, 4, 15, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(4, 3, 20, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(31, 30, 49, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(31, 49, 50, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(42, 43, 44, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(42, 44, 16, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(42, 16, 15, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(13, 12, 32, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(13, 32, 33, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(13, 33, 34, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(13, 34, 35, undefined, undefined, 15));


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
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[13].vector);
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
