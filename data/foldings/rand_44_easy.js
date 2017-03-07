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

   var axes = [[29,28],
      [28,27],
      [27,26],
      [23,22],
      [20,19],
      [14,13],
      [15,14],
      [9,8],
      [7,6],
      [8,7],
      [4,3],
      [3,2],
      [5,4],
      [2,1],
      [0,5],
      [1,0]];

   var angles = [2.73223940070335,
      2.68340382783473,
      2.66155057038415,
      2.74640913510847,
      2.08281782414789,
      1.65391796654272,
      2.04598061954475,
      2.71648743565365,
      1.96881406916022,
      2.63105023016469,
      2.30995480872676,
      2.46398047870939,
      2.17624908858026,
      2.24572315806884,
      1.19060036543098,
      0.148039913839314];

   var subtrees = [[56,57],
      [53,54,55],
      [51,52],
      [48,49,50],
      [44,45,46,47],
      [40,41,42,43],
      [37,38,39],
      [34,35,36],
      [30,31,32,33],
      [26,27,28,29,51,52,53,54,55,56,57],
      [24,25],
      [22,23,48,49,50],
      [17,18,19,20,21,44,45,46,47],
      [12,13,14,15,16,37,38,39,40,41,42,43],
      [10,11],
      [6,7,8,9,26,27,28,29,30,31,32,33,34,35,36,51,52,53,54,55,56,57]];

   var polytoperoot = [[-2.8391990563052,-1.89793545054037,6.64506375729003],
      [1.59581397370752,-2.18621449433271,0.207904632275976],
      [4.76986017702483,3.39894952330641,-0.870479930092648]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(2.18124, 0, 0));
   allpoints.push(new PMPoint(6.09092, 4.23041, 0));
   allpoints.push(new PMPoint(6.01371, 4.44364, 0));
   allpoints.push(new PMPoint(5.98802, 4.47507, 0));
   allpoints.push(new PMPoint(5.68039, 4.68009, 0));
   allpoints.push(new PMPoint(5.81406, -4.496, 0));
   allpoints.push(new PMPoint(5.84543, -4.49994, 0));
   allpoints.push(new PMPoint(6.06463, -4.34285, 0));
   allpoints.push(new PMPoint(5.22497, -2.83187, 0));
   allpoints.push(new PMPoint(5.67322, 4.97416, 0));
   allpoints.push(new PMPoint(5.19142, 5.20255, 0));
   allpoints.push(new PMPoint(5.37237, 2.66467, 0));
   allpoints.push(new PMPoint(6.51845, 3.90598, 0));
   allpoints.push(new PMPoint(6.49992, 4.04125, 0));
   allpoints.push(new PMPoint(6.36324, 4.1974, 0));
   allpoints.push(new PMPoint(6.34548, 4.20733, 0));
   allpoints.push(new PMPoint(6.22739, 4.56844, 0));
   allpoints.push(new PMPoint(6.27843, 4.65989, 0));
   allpoints.push(new PMPoint(6.28547, 4.72377, 0));
   allpoints.push(new PMPoint(6.1848, 4.831, 0));
   allpoints.push(new PMPoint(5.93755, 4.82291, 0));
   allpoints.push(new PMPoint(6.34208, 4.2779, 0));
   allpoints.push(new PMPoint(6.23422, 4.4191, 0));
   allpoints.push(new PMPoint(6.23553, 4.43899, 0));
   allpoints.push(new PMPoint(6.23626, 4.54135, 0));
   allpoints.push(new PMPoint(6.00407, -4.56321, 0));
   allpoints.push(new PMPoint(6.10645, -4.51175, 0));
   allpoints.push(new PMPoint(6.1565, -4.46855, 0));
   allpoints.push(new PMPoint(6.09895, -4.34877, 0));
   allpoints.push(new PMPoint(5.83495, -5.02879, 0));
   allpoints.push(new PMPoint(6.05804, -4.92188, 0));
   allpoints.push(new PMPoint(6.062, -4.80969, 0));
   allpoints.push(new PMPoint(5.98757, -4.59463, 0));
   allpoints.push(new PMPoint(6.0994, -4.34493, 0));
   allpoints.push(new PMPoint(6.34541, -4.13624, 0));
   allpoints.push(new PMPoint(6.40593, -4.04004, 0));
   allpoints.push(new PMPoint(6.6149, 4.36446, 0));
   allpoints.push(new PMPoint(6.56537, 4.51501, 0));
   allpoints.push(new PMPoint(6.50984, 4.48265, 0));
   allpoints.push(new PMPoint(6.62272, 3.95118, 0));
   allpoints.push(new PMPoint(6.86073, 4.16425, 0));
   allpoints.push(new PMPoint(6.84739, 4.20614, 0));
   allpoints.push(new PMPoint(6.73539, 4.29073, 0));
   allpoints.push(new PMPoint(6.44378, 4.71606, 0));
   allpoints.push(new PMPoint(6.50437, 4.84265, 0));
   allpoints.push(new PMPoint(6.42275, 4.88133, 0));
   allpoints.push(new PMPoint(6.27734, 4.89455, 0));
   allpoints.push(new PMPoint(6.36235, 4.27627, 0));
   allpoints.push(new PMPoint(6.32229, 4.59447, 0));
   allpoints.push(new PMPoint(6.24815, 4.5205, 0));
   allpoints.push(new PMPoint(6.14949, -4.73827, 0));
   allpoints.push(new PMPoint(6.18979, -4.59792, 0));
   allpoints.push(new PMPoint(6.19203, -4.5957, 0));
   allpoints.push(new PMPoint(6.2422, -4.52059, 0));
   allpoints.push(new PMPoint(6.22403, -4.48055, 0));
   allpoints.push(new PMPoint(6.22485, -4.47428, 0));
   allpoints.push(new PMPoint(6.38369, -4.19712, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
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

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 0, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(0, 5, 10, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(2, 1, 12, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 13, 14, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(5, 4, 17, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(5, 17, 18, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(5, 18, 19, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(5, 19, 20, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(5, 20, 21, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(51, 52, 27, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(51, 27, 26, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(15, 14, 37, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(15, 37, 38, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(15, 38, 39, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(54, 55, 28, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(54, 28, 27, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(54, 27, 53, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(57, 29, 28, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(57, 28, 56, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(8, 7, 26, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 28, 29, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(3, 2, 22, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(14, 13, 40, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(14, 40, 41, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(14, 41, 42, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(14, 42, 43, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(30, 31, 32, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(30, 32, 33, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(30, 33, 7, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(30, 7, 6, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(20, 19, 44, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(20, 44, 45, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(20, 45, 46, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(20, 46, 47, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(36, 9, 8, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(36, 8, 34, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(36, 34, 35, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(22, 48, 49, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(22, 49, 50, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(22, 50, 23, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(4, 3, 24, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(4, 24, 25, undefined, undefined, 16));


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
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[4].vector);
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
