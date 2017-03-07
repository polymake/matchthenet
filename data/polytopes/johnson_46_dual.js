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

   allpoints.push(new PMPoint(-0.602844, 0.829744, 0.51281));
   allpoints.push(new PMPoint(-0.518609, 0.515713, 0.761673));
   allpoints.push(new PMPoint(-0.691053, -0.197235, 0.468332));
   allpoints.push(new PMPoint(-0.502079, -0.430032, 0.546607));
   allpoints.push(new PMPoint(-0.376791, -0.986453, 0));
   allpoints.push(new PMPoint(-0.186289, 0.528322, 1.00052));
   allpoints.push(new PMPoint(-0.263959, -0.36037, 0.73229));
   allpoints.push(new PMPoint(0, -1.19854, -0.740738));
   allpoints.push(new PMPoint(0, -0.515797, 0.685378));
   allpoints.push(new PMPoint(0.198091, 0.393286, 0.959764));
   allpoints.push(new PMPoint(0.263959, -0.36037, 0.73229));
   allpoints.push(new PMPoint(0.198091, 1.03432, -0.0774538));
   allpoints.push(new PMPoint(0.263959, 0.493818, -0.649815));
   allpoints.push(new PMPoint(0.487711, 1.01603, 0.211388));
   allpoints.push(new PMPoint(0.502079, -0.430032, 0.546607));
   allpoints.push(new PMPoint(0.609661, -0.609661, -0.609661));
   allpoints.push(new PMPoint(0.691053, -0.197235, 0.468332));
   allpoints.push(new PMPoint(0.812381, -0.205495, 0.183299));
   allpoints.push(new PMPoint(0.812381, 0.0720476, -0.265774));
   allpoints.push(new PMPoint(0.854188, 0.0667237, 0.0412375));
   allpoints.push(new PMPoint(0.691053, 0.330682, -0.385857));
   allpoints.push(new PMPoint(0.641036, 0.713804, 0.441155));
   allpoints.push(new PMPoint(0.502079, 0.296584, -0.629082));
   allpoints.push(new PMPoint(0.376791, -0.986453, 0));
   allpoints.push(new PMPoint(0.573339, -0.927682, -0.354343));
   allpoints.push(new PMPoint(0.487711, 0.643455, 0.814232));
   allpoints.push(new PMPoint(0.354343, -0.573339, -0.927682));
   allpoints.push(new PMPoint(0, 0.38235, -0.767853));
   allpoints.push(new PMPoint(0, -0.376791, -0.986453));
   allpoints.push(new PMPoint(0, -1.14668, 0));
   allpoints.push(new PMPoint(0, 1.19854, 0.740738));
   allpoints.push(new PMPoint(-0.263959, 0.493818, -0.649815));
   allpoints.push(new PMPoint(-0.186289, 1.13117, 0.0250987));
   allpoints.push(new PMPoint(-0.502079, 0.296584, -0.629082));
   allpoints.push(new PMPoint(-0.354343, -0.573339, -0.927682));
   allpoints.push(new PMPoint(-0.518609, 0.911895, 0.120637));
   allpoints.push(new PMPoint(-0.691053, 0.330682, -0.385857));
   allpoints.push(new PMPoint(-0.609661, -0.609661, -0.609661));
   allpoints.push(new PMPoint(-0.812381, 0.0720476, -0.265774));
   allpoints.push(new PMPoint(-0.812381, -0.205495, 0.183299));
   allpoints.push(new PMPoint(-0.854188, 0.0667237, 0.0412375));
   allpoints.push(new PMPoint(-0.573339, -0.927682, -0.354343));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(7, 29, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 4, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 29, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 7, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 29, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 8, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 6, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 41, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 37, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 29, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 23, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 14, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 4, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 3, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 2, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 26, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 15, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 40, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 38, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 24, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 17, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 34, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 28, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 24, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 15, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 38, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 36, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 31, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 22, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 20, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 18, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 28, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 27, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 12, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 8, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 10, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 9, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 14, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 16, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 25, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 5, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 2, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 0, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 17, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 19, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 21, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 20, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 13, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(40, 0, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 36, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 36, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 35, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 32, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 12, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 11, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 13, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 32, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 12, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 5, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 30, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 30, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 32, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 13, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 11, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 25, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 21, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 9, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 25, 30, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[5].vector);
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
