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

   allpoints.push(new PMPoint(0.225342, 1.0524, 0.225342));
   allpoints.push(new PMPoint(-0.225342, 1.0524, 0.225342));
   allpoints.push(new PMPoint(0.225342, 1.0524, -0.225342));
   allpoints.push(new PMPoint(0.364611, 0.827058, 0.589954));
   allpoints.push(new PMPoint(-0.225342, 1.0524, -0.225342));
   allpoints.push(new PMPoint(-0.364611, 0.827058, 0.589954));
   allpoints.push(new PMPoint(0.364611, 0.827058, -0.589954));
   allpoints.push(new PMPoint(0, 0.687789, 0.815296));
   allpoints.push(new PMPoint(-0.364611, 0.827058, -0.589954));
   allpoints.push(new PMPoint(0.589954, 0.462447, 0.729223));
   allpoints.push(new PMPoint(0, 0.687789, -0.815296));
   allpoints.push(new PMPoint(0.225342, 0.323178, 0.954565));
   allpoints.push(new PMPoint(-0.589954, 0.462447, 0.729223));
   allpoints.push(new PMPoint(0.589954, 0.462447, -0.729223));
   allpoints.push(new PMPoint(0.815296, 0.0978355, 0.589954));
   allpoints.push(new PMPoint(-0.225342, 0.323178, 0.954565));
   allpoints.push(new PMPoint(0.225342, 0.323178, -0.954565));
   allpoints.push(new PMPoint(-0.589954, 0.462447, -0.729223));
   allpoints.push(new PMPoint(0.225342, -0.127507, 0.954565));
   allpoints.push(new PMPoint(-0.815296, 0.0978355, 0.589954));
   allpoints.push(new PMPoint(0.815296, 0.0978355, -0.589954));
   allpoints.push(new PMPoint(-0.225342, 0.323178, -0.954565));
   allpoints.push(new PMPoint(0.954565, -0.127507, 0.225342));
   allpoints.push(new PMPoint(0.589954, -0.266776, 0.729223));
   allpoints.push(new PMPoint(-0.225342, -0.127507, 0.954565));
   allpoints.push(new PMPoint(0.225342, -0.127507, -0.954565));
   allpoints.push(new PMPoint(-0.815296, 0.0978355, -0.589954));
   allpoints.push(new PMPoint(0.954565, -0.127507, -0.225342));
   allpoints.push(new PMPoint(-0.954565, -0.127507, 0.225342));
   allpoints.push(new PMPoint(-0.589954, -0.266776, 0.729223));
   allpoints.push(new PMPoint(0.589954, -0.266776, -0.729223));
   allpoints.push(new PMPoint(-0.225342, -0.127507, -0.954565));
   allpoints.push(new PMPoint(0.729223, -0.492118, 0.364611));
   allpoints.push(new PMPoint(-0.954565, -0.127507, -0.225342));
   allpoints.push(new PMPoint(-0.589954, -0.266776, -0.729223));
   allpoints.push(new PMPoint(0.729223, -0.492118, -0.364611));
   allpoints.push(new PMPoint(-0.729223, -0.492118, 0.364611));
   allpoints.push(new PMPoint(0, -0.492118, -0.815296));
   allpoints.push(new PMPoint(0.589954, -0.71746, 0));
   allpoints.push(new PMPoint(-0.729223, -0.492118, -0.364611));
   allpoints.push(new PMPoint(0.364611, -0.631387, -0.589954));
   allpoints.push(new PMPoint(-0.589954, -0.71746, 0));
   allpoints.push(new PMPoint(-0.364611, -0.631387, -0.589954));
   allpoints.push(new PMPoint(0.225342, -0.85673, -0.225342));
   allpoints.push(new PMPoint(-0.225342, -0.85673, -0.225342));
   allpoints.push(new PMPoint(0.225342, -0.530611, 0.753013));
   allpoints.push(new PMPoint(0.364611, -0.755953, 0.388401));
   allpoints.push(new PMPoint(-0.225342, -0.530611, 0.753013));
   allpoints.push(new PMPoint(0, -0.895223, 0.163059));
   allpoints.push(new PMPoint(-0.364611, -0.755953, 0.388401));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(30, 20, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 27, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 20, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 30, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 25, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 38, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 43, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 35, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 13, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 16, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 40, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 37, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 0, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 5, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 44, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 42, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 11, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 15, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 7, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 24, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 47, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 5, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 12, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 42, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 34, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 8, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 17, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 26, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 33, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 28, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 19, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 29, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 24, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 29, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 36, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 49, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 34, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 28, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 36, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 33, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 39, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 41, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 26, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 34, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 41, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 44, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 41, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 31, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 34, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 26, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 49, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 41, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 10, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 48, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 37, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 16, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 25, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 31, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 45, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 47, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(46, 49, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 6, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 10, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 46, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 48, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 18, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 3, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 32, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 23, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 9, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 11, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 18, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 14, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 23, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 27, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 22, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 32, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 20, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 13, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 6, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 2, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 0, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 9, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 14, 22, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[27].vector);
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
