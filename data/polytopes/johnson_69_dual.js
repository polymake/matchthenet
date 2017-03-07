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

   allpoints.push(new PMPoint(-0.906601, 0, 0.346291));
   allpoints.push(new PMPoint(-0.596869, 0, 0.965754));
   allpoints.push(new PMPoint(-0.56031, -0.56031, 0.56031));
   allpoints.push(new PMPoint(-0.56031, 0.56031, 0.56031));
   allpoints.push(new PMPoint(-0.482877, -0.616341, 0.565362));
   allpoints.push(new PMPoint(-0.56031, -0.751735, 0.250578));
   allpoints.push(new PMPoint(0, 0.965754, 0.596869));
   allpoints.push(new PMPoint(-0.298434, -0.914775, 0.0824853));
   allpoints.push(new PMPoint(-0.346291, -0.405444, 0.810888));
   allpoints.push(new PMPoint(0, 0.797389, -0.492813));
   allpoints.push(new PMPoint(0, -0.431898, 0.863797));
   allpoints.push(new PMPoint(0, -0.346291, 0.906601));
   allpoints.push(new PMPoint(0, 0.346291, 0.906601));
   allpoints.push(new PMPoint(0, 0.965754, 0.0957124));
   allpoints.push(new PMPoint(0.596869, 0, -0.965754));
   allpoints.push(new PMPoint(0.298434, 0.914775, -0.0824853));
   allpoints.push(new PMPoint(0.482877, -0.616341, 0.565362));
   allpoints.push(new PMPoint(0.346291, -0.405444, 0.810888));
   allpoints.push(new PMPoint(0.346291, 0.906601, 0));
   allpoints.push(new PMPoint(0.56031, 0.751735, -0.250578));
   allpoints.push(new PMPoint(0.56031, -0.56031, 0.56031));
   allpoints.push(new PMPoint(0.56031, 0.56031, 0.56031));
   allpoints.push(new PMPoint(0.906601, 0, 0.346291));
   allpoints.push(new PMPoint(0.906601, 0, -0.346291));
   allpoints.push(new PMPoint(0.965754, 0.596869, 0));
   allpoints.push(new PMPoint(0.56031, 0.56031, -0.56031));
   allpoints.push(new PMPoint(0.56031, -0.56031, -0.56031));
   allpoints.push(new PMPoint(0.965754, -0.596869, 0));
   allpoints.push(new PMPoint(0.56031, -0.751735, 0.250578));
   allpoints.push(new PMPoint(0.482877, 0.616341, -0.565362));
   allpoints.push(new PMPoint(0.346291, 0.405444, -0.810888));
   allpoints.push(new PMPoint(0.346291, -0.906601, 0));
   allpoints.push(new PMPoint(0.596869, 0, 0.965754));
   allpoints.push(new PMPoint(0.298434, -0.914775, 0.0824853));
   allpoints.push(new PMPoint(0, 0.346291, -0.906601));
   allpoints.push(new PMPoint(0, 0.431898, -0.863797));
   allpoints.push(new PMPoint(0, -0.346291, -0.906601));
   allpoints.push(new PMPoint(0, -0.965754, -0.0957124));
   allpoints.push(new PMPoint(0, -0.797389, 0.492813));
   allpoints.push(new PMPoint(-0.346291, 0.906601, 0));
   allpoints.push(new PMPoint(-0.298434, 0.914775, -0.0824853));
   allpoints.push(new PMPoint(-0.346291, 0.405444, -0.810888));
   allpoints.push(new PMPoint(-0.346291, -0.906601, 0));
   allpoints.push(new PMPoint(-0.56031, 0.751735, -0.250578));
   allpoints.push(new PMPoint(-0.482877, 0.616341, -0.565362));
   allpoints.push(new PMPoint(0, -0.965754, -0.596869));
   allpoints.push(new PMPoint(-0.56031, 0.56031, -0.56031));
   allpoints.push(new PMPoint(-0.56031, -0.56031, -0.56031));
   allpoints.push(new PMPoint(-0.596869, 0, -0.965754));
   allpoints.push(new PMPoint(-0.906601, 0, -0.346291));
   allpoints.push(new PMPoint(-0.965754, 0.596869, 0));
   allpoints.push(new PMPoint(-0.965754, -0.596869, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(45, 37, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 7, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 37, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 45, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 42, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 51, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 45, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 7, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 5, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 45, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 4, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 31, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 48, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 28, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 27, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 45, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 4, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 51, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 36, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 11, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 51, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 20, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 32, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 2, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 17, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 32, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 14, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 51, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 27, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 48, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 0, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 27, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 48, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 32, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 27, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 50, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 32, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 48, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 41, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 14, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 1, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 46, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 44, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 14, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 1, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 35, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 12, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 22, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 30, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 29, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 24, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 32, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 50, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 21, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 50, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 25, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 29, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 6, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 19, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 15, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 24, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 24, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 6, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 13, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 18, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 15, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 37, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 33, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 38, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 38, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 10, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 17, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 33, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 28, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 43, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 40, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 44, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 9, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 35, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 9, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 9, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 15, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 40, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 13, 15, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[9].vector);
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
