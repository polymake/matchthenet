// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'poly' + divNumber );
var renderer = renderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.appendChild(renderer.domElement);

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
controls.noZoom = controlsNoZoom;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(-1.05163, 0, 0));
   allpoints.push(new PMPoint(1.05163, 0, 0));
   allpoints.push(new PMPoint(0, 1.05163, 0));
   allpoints.push(new PMPoint(0, -1.05163, 0));
   allpoints.push(new PMPoint(-0.571761, 0.571761, 0.571761));
   allpoints.push(new PMPoint(0.790731, 0.169011, 0.571761));
   allpoints.push(new PMPoint(0.790731, -0.571761, 0.169011));
   allpoints.push(new PMPoint(0.790731, -0.169011, -0.571761));
   allpoints.push(new PMPoint(0.571761, 0.571761, 0.571761));
   allpoints.push(new PMPoint(0.571761, -0.169011, 0.790731));
   allpoints.push(new PMPoint(0.571761, 0.790731, 0.169011));
   allpoints.push(new PMPoint(0.571761, 0.571761, -0.571761));
   allpoints.push(new PMPoint(0.571761, -0.571761, -0.571761));
   allpoints.push(new PMPoint(0.571761, 0.169011, -0.790731));
   allpoints.push(new PMPoint(0.571761, -0.571761, 0.571761));
   allpoints.push(new PMPoint(0, 0, -1.05163));
   allpoints.push(new PMPoint(0.169011, 0.571761, 0.790731));
   allpoints.push(new PMPoint(0.169011, 0.790731, -0.571761));
   allpoints.push(new PMPoint(0.169011, -0.790731, 0.571761));
   allpoints.push(new PMPoint(-0.169011, 0.571761, -0.790731));
   allpoints.push(new PMPoint(0.571761, -0.790731, -0.169011));
   allpoints.push(new PMPoint(-0.169011, -0.790731, -0.571761));
   allpoints.push(new PMPoint(0.169011, -0.571761, -0.790731));
   allpoints.push(new PMPoint(-0.169011, -0.571761, 0.790731));
   allpoints.push(new PMPoint(0, 0, 1.05163));
   allpoints.push(new PMPoint(-0.169011, 0.790731, 0.571761));
   allpoints.push(new PMPoint(-0.571761, 0.790731, -0.169011));
   allpoints.push(new PMPoint(0.790731, 0.571761, -0.169011));
   allpoints.push(new PMPoint(-0.571761, -0.571761, -0.571761));
   allpoints.push(new PMPoint(-0.571761, 0.571761, -0.571761));
   allpoints.push(new PMPoint(-0.571761, 0.169011, 0.790731));
   allpoints.push(new PMPoint(-0.790731, 0.571761, 0.169011));
   allpoints.push(new PMPoint(-0.571761, -0.169011, -0.790731));
   allpoints.push(new PMPoint(-0.790731, 0.169011, -0.571761));
   allpoints.push(new PMPoint(-0.571761, -0.790731, 0.169011));
   allpoints.push(new PMPoint(-0.790731, -0.169011, 0.571761));
   allpoints.push(new PMPoint(-0.790731, -0.571761, -0.169011));
   allpoints.push(new PMPoint(-0.571761, -0.571761, 0.571761));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(15, 13, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 7, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 12, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 32, 33, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(15, 33, 29, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(15, 29, 19, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(23, 24, 30, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(23, 30, 35, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(23, 35, 37, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(5, 8, 16, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(5, 16, 24, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(5, 24, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(11, 13, 15, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(11, 15, 19, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(11, 19, 17, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(14, 9, 24, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 24, 23, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(14, 23, 18, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(16, 25, 4, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(16, 4, 30, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(16, 30, 24, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(15, 22, 21, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(15, 21, 28, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(15, 28, 32, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(3, 18, 23, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 23, 37, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(3, 37, 34, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(22, 12, 20, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(22, 20, 3, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(22, 3, 21, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(17, 19, 29, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(17, 29, 26, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(17, 26, 2, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(10, 2, 25, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(10, 25, 16, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(10, 16, 8, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(20, 6, 14, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(20, 14, 18, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(20, 18, 3, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(2, 26, 31, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 31, 4, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(2, 4, 25, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(27, 11, 17, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(27, 17, 2, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(27, 2, 10, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(21, 3, 34, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(21, 34, 36, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(21, 36, 28, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(33, 0, 31, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(33, 31, 26, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(33, 26, 29, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(36, 34, 37, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(36, 37, 35, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(36, 35, 0, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(12, 7, 1, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(12, 1, 6, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(12, 6, 20, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(1, 27, 10, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(1, 10, 8, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(1, 8, 5, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(0, 35, 30, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(0, 30, 4, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(0, 4, 31, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(7, 13, 11, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(7, 11, 27, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(7, 27, 1, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(6, 1, 5, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(6, 5, 9, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(6, 9, 14, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(32, 28, 36, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(32, 36, 0, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(32, 0, 33, undefined, undefined, 23));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
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



   polytopeObjects[divNumber] = obj;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
