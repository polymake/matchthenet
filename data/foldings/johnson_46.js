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

   var axes = [[43,29],
      [28,42],
      [41,28],
      [26,39],
      [38,26],
      [34,22],
      [33,32],
      [30,19],
      [18,29],
      [28,15],
      [16,28],
      [27,14],
      [26,13],
      [14,26],
      [13,25],
      [12,24],
      [23,12],
      [10,22],
      [9,21],
      [20,9],
      [8,19],
      [18,17],
      [16,15],
      [6,14],
      [14,13],
      [13,5],
      [12,11],
      [4,12],
      [10,4],
      [9,1],
      [2,9],
      [8,2],
      [5,3],
      [7,6],
      [6,5],
      [4,0],
      [1,4],
      [2,1],
      [3,2],
      [0,3],
      [1,0]];

   var angles = [2.31472568737513,
      2.21594190648781,
      2.31472568737513,
      2.21594190648781,
      2.31472568737513,
      2.77672882547631,
      2.58801829469275,
      2.21594190648781,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.31472568737513,
      2.77832866619902,
      2.77832866619902,
      2.31472568737513,
      2.31472568737513,
      2.77832866619902,
      2.31472568737513,
      2.21594190648781,
      2.31472568737513,
      2.77832866619902,
      2.21594190648781,
      2.21594190648781,
      2.77672882547631,
      2.21594190648781,
      2.77672882547631,
      2.77672882547631,
      2.21594190648781,
      2.77832866619902,
      2.77832866619902,
      2.77832866619902,
      2.31472568737513,
      2.58801829469275,
      2.58801829469275,
      2.58801829469275,
      2.77672882547631,
      2.31472568737513,
      2.21594190648781,
      2.77672882547631,
      2.58801829469275,
      2.77672882547631];

   var subtrees = [[57],
      [55,56],
      [54],
      [52,53],
      [51],
      [49,50],
      [46,47,48],
      [44,45],
      [43,57],
      [42,55,56],
      [41,54],
      [40],
      [39,52,53],
      [38,51],
      [37],
      [36],
      [35],
      [34,49,50],
      [32,33,46,47,48],
      [31],
      [30,44,45],
      [29,43,57],
      [28,41,42,54,55,56],
      [27,40],
      [26,38,39,51,52,53],
      [25,37],
      [24,36],
      [23,35],
      [22,34,49,50],
      [21,32,33,46,47,48],
      [20,31],
      [19,30,44,45],
      [17,18,29,43,57],
      [15,16,28,41,42,54,55,56],
      [13,14,25,26,27,37,38,39,40,51,52,53],
      [11,12,23,24,35,36],
      [10,22,34,49,50],
      [9,20,21,31,32,33,46,47,48],
      [8,19,30,44,45],
      [5,6,7,13,14,15,16,17,18,25,26,27,28,29,37,38,39,40,41,42,43,51,52,53,54,55,56,57],
      [4,10,11,12,22,23,24,34,35,36,49,50]];

   var polytoperoot = [[0.445972826046034,-0.357163599820436,-0.601645511853142],
      [1.17557050458495,-1.61803398874989,-1],
      [0,-0.761812535239693,1.23263857507355]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.648036, 0, 0));
   allpoints.push(new PMPoint(0.648036, 0.648036, 0));
   allpoints.push(new PMPoint(0, 0.648036, 0));
   allpoints.push(new PMPoint(0.324018, -0.561216, 0));
   allpoints.push(new PMPoint(-0.616319, 0.848291, 0));
   allpoints.push(new PMPoint(-0.997226, 0.324018, 0));
   allpoints.push(new PMPoint(-0.616319, -0.200254, 0));
   allpoints.push(new PMPoint(0.324018, 1.20925, 0));
   allpoints.push(new PMPoint(1.20925, 0.324018, 0));
   allpoints.push(new PMPoint(0.972055, -0.561216, 0));
   allpoints.push(new PMPoint(-0.561216, -0.324018, 0));
   allpoints.push(new PMPoint(-0.237198, -0.885234, 0));
   allpoints.push(new PMPoint(-1.14059, 1.2292, 0));
   allpoints.push(new PMPoint(-1.5215, 0.704924, 0));
   allpoints.push(new PMPoint(-1.5215, -0.056888, 0));
   allpoints.push(new PMPoint(-1.14059, -0.581161, 0));
   allpoints.push(new PMPoint(0.200254, 1.26436, 0));
   allpoints.push(new PMPoint(-0.416065, 1.46461, 0));
   allpoints.push(new PMPoint(0.972055, 1.20925, 0));
   allpoints.push(new PMPoint(1.20925, 0.972055, 0));
   allpoints.push(new PMPoint(1.20925, -0.324018, 0));
   allpoints.push(new PMPoint(0.648036, -1.12243, 0));
   allpoints.push(new PMPoint(0.324018, -1.20925, 0));
   allpoints.push(new PMPoint(-0.885234, -0.885234, 0));
   allpoints.push(new PMPoint(-0.548581, 1.49278, 0));
   allpoints.push(new PMPoint(-1.78508, 1.29694, 0));
   allpoints.push(new PMPoint(-1.58924, 0.0604381, 0));
   allpoints.push(new PMPoint(-1.78508, -0.648899, 0));
   allpoints.push(new PMPoint(0.0655199, 1.89823, 0));
   allpoints.push(new PMPoint(0.648036, 1.77047, 0));
   allpoints.push(new PMPoint(1.77047, 0.648036, 0));
   allpoints.push(new PMPoint(1.85729, -0.324018, 0));
   allpoints.push(new PMPoint(1.85729, 0.324018, 0));
   allpoints.push(new PMPoint(1.29607, -1.12243, 0));
   allpoints.push(new PMPoint(-0.237198, -1.53327, 0));
   allpoints.push(new PMPoint(-0.561216, -1.44645, 0));
   allpoints.push(new PMPoint(-1.07285, 1.87368, 0));
   allpoints.push(new PMPoint(-2.16598, 0.772663, 0));
   allpoints.push(new PMPoint(-1.40417, 1.82121, 0));
   allpoints.push(new PMPoint(-2.11351, 0.441344, 0));
   allpoints.push(new PMPoint(-1.40417, -1.17317, 0));
   allpoints.push(new PMPoint(-2.16598, -0.124626, 0));
   allpoints.push(new PMPoint(-0.550799, 2.09849, 0));
   allpoints.push(new PMPoint(1.53327, 1.53327, 0));
   allpoints.push(new PMPoint(1.20925, 2.09449, 0));
   allpoints.push(new PMPoint(2.47361, -0.524273, 0));
   allpoints.push(new PMPoint(2.85451, 0, 0));
   allpoints.push(new PMPoint(2.47361, 0.524273, 0));
   allpoints.push(new PMPoint(0.648036, -1.77047, 0));
   allpoints.push(new PMPoint(1.29607, -1.77047, 0));
   allpoints.push(new PMPoint(-2.42956, 1.36467, 0));
   allpoints.push(new PMPoint(-1.92844, 2.20211, 0));
   allpoints.push(new PMPoint(-2.30935, 1.67784, 0));
   allpoints.push(new PMPoint(-2.04866, -1.24091, 0));
   allpoints.push(new PMPoint(-2.69026, -0.505533, 0));
   allpoints.push(new PMPoint(-2.30935, -1.02981, 0));
   allpoints.push(new PMPoint(-0.0692144, 2.53211, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 4, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 10, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 12, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 12, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 24, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 24, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 25, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 25, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 28, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 26, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 15, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 26, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 14, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 14, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 13, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 28, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 56, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 28, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 53, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 26, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 29, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 57, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 22, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 19, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 45, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 2, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 9, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 9, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 32, 33, undefined, undefined, 0));


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
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[9].vector);
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
