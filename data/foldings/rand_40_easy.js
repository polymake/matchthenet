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

   var axes = [[31,30],
      [27,26],
      [22,21],
      [18,17],
      [17,16],
      [11,10],
      [12,11],
      [8,7],
      [6,5],
      [2,1],
      [0,6],
      [4,3],
      [5,4],
      [3,2],
      [1,0]];

   var angles = [2.44255189263939,
      2.69035748974695,
      1.64021570196891,
      2.50500111110079,
      2.43879964693862,
      2.68470779671163,
      2.86438033544535,
      2.32655213380833,
      0.876593975479334,
      2.40617066828305,
      0.869609701807941,
      1.82615807947896,
      1.58144373940385,
      2.76034039692882,
      2.35415786313612];

   var subtrees = [[52,53],
      [49,50,51],
      [45,46,47,48],
      [43,44],
      [39,40,41,42],
      [35,36,37,38],
      [33,34],
      [29,30,31,32,52,53],
      [25,26,27,28,49,50,51],
      [20,21,22,23,24,45,46,47,48],
      [16,17,18,19,39,40,41,42,43,44],
      [13,14,15],
      [10,11,12,33,34,35,36,37,38],
      [9],
      [7,8,29,30,31,32,52,53]];

   var polytoperoot = [[1.76549251967444,-0.652993159020806,0.86566955949675],
      [0.854595527174341,0.753847639439284,-0.0190888762281329],
      [-0.733613412530135,0.874048530677339,1.6740996275114]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.77763, 0, 0));
   allpoints.push(new PMPoint(1.78375, 0.0346179, 0));
   allpoints.push(new PMPoint(1.33214, 1.00465, 0));
   allpoints.push(new PMPoint(1.30874, 1.01686, 0));
   allpoints.push(new PMPoint(0.324178, 1.16333, 0));
   allpoints.push(new PMPoint(-0.211329, 0.44325, 0));
   allpoints.push(new PMPoint(0.820649, -0.821313, 0));
   allpoints.push(new PMPoint(2.11478, -0.502821, 0));
   allpoints.push(new PMPoint(2.20252, 0.662481, 0));
   allpoints.push(new PMPoint(1.96305, 1.64974, 0));
   allpoints.push(new PMPoint(1.94446, 1.76327, 0));
   allpoints.push(new PMPoint(1.09143, 1.76295, 0));
   allpoints.push(new PMPoint(2.24628, 0.807202, 0));
   allpoints.push(new PMPoint(2.66049, 0.928081, 0));
   allpoints.push(new PMPoint(2.11602, 1.43752, 0));
   allpoints.push(new PMPoint(-1.60816, -1.01404, 0));
   allpoints.push(new PMPoint(-1.3647, -1.27419, 0));
   allpoints.push(new PMPoint(-0.595519, -1.31757, 0));
   allpoints.push(new PMPoint(-0.310346, -1.1188, 0));
   allpoints.push(new PMPoint(2.24993, -0.378723, 0));
   allpoints.push(new PMPoint(2.66059, -0.33739, 0));
   allpoints.push(new PMPoint(2.99019, 0.327423, 0));
   allpoints.push(new PMPoint(2.6721, 0.530355, 0));
   allpoints.push(new PMPoint(2.25155, 0.626855, 0));
   allpoints.push(new PMPoint(-0.219947, 1.97088, 0));
   allpoints.push(new PMPoint(-0.512142, 2.25749, 0));
   allpoints.push(new PMPoint(-1.25337, 2.2206, 0));
   allpoints.push(new PMPoint(-1.27424, 2.15936, 0));
   allpoints.push(new PMPoint(1.06706, -1.0665, 0));
   allpoints.push(new PMPoint(1.72463, -1.26361, 0));
   allpoints.push(new PMPoint(2.28109, -0.949753, 0));
   allpoints.push(new PMPoint(2.44808, -0.746253, 0));
   allpoints.push(new PMPoint(2.13992, 2.24407, 0));
   allpoints.push(new PMPoint(1.38934, 2.04361, 0));
   allpoints.push(new PMPoint(2.6537, 1.3687, 0));
   allpoints.push(new PMPoint(2.97485, 1.56674, 0));
   allpoints.push(new PMPoint(2.51423, 2.40516, 0));
   allpoints.push(new PMPoint(2.17011, 2.23066, 0));
   allpoints.push(new PMPoint(-1.6711, -1.02901, 0));
   allpoints.push(new PMPoint(-2.29205, -1.64584, 0));
   allpoints.push(new PMPoint(-1.75322, -1.79432, 0));
   allpoints.push(new PMPoint(-1.55193, -1.74067, 0));
   allpoints.push(new PMPoint(-1.4786, -1.76377, 0));
   allpoints.push(new PMPoint(-1.05808, -1.82481, 0));
   allpoints.push(new PMPoint(2.86597, -0.502059, 0));
   allpoints.push(new PMPoint(3.6294, -0.547092, 0));
   allpoints.push(new PMPoint(3.92856, -0.0749817, 0));
   allpoints.push(new PMPoint(3.90589, 0.0506425, 0));
   allpoints.push(new PMPoint(-0.863328, 2.95048, 0));
   allpoints.push(new PMPoint(-1.16677, 3.18878, 0));
   allpoints.push(new PMPoint(-1.25429, 3.09585, 0));
   allpoints.push(new PMPoint(1.93821, -1.63097, 0));
   allpoints.push(new PMPoint(2.13463, -1.70035, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
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
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 33, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(12, 33, 34, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 0, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(16, 39, 40, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(16, 40, 41, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(16, 41, 42, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(16, 42, 17, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(27, 26, 49, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(27, 49, 50, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(27, 50, 51, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(5, 4, 10, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(5, 10, 11, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(5, 11, 12, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(4, 3, 13, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(4, 14, 15, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(22, 21, 45, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(22, 45, 46, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(22, 46, 47, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(22, 47, 48, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(18, 17, 43, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(18, 43, 44, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(0, 6, 16, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(35, 36, 37, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(35, 37, 38, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(35, 38, 11, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(35, 11, 10, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(2, 1, 20, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(6, 5, 25, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(6, 25, 26, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(6, 26, 27, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(6, 27, 28, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(32, 8, 7, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(32, 7, 29, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(32, 29, 30, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(32, 30, 31, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(31, 30, 52, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(31, 52, 53, undefined, undefined, 15));


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
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[31].vector);
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
