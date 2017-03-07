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

   allpoints.push(new PMPoint(-0.873393, 0.539786, 0));
   allpoints.push(new PMPoint(-0.80968, 0.30927, -0.50041));
   allpoints.push(new PMPoint(-0.638719, -0.58589, -0.50041));
   allpoints.push(new PMPoint(-0.76122, -0.25374, -0.56738));
   allpoints.push(new PMPoint(-0.539786, 0, -0.873393));
   allpoints.push(new PMPoint(-0.50041, 0.80968, -0.30927));
   allpoints.push(new PMPoint(-0.56738, 0.56738, -0.56738));
   allpoints.push(new PMPoint(-0.44758, -0.89516, 0));
   allpoints.push(new PMPoint(-0.41056, -0.82112, -0.35066));
   allpoints.push(new PMPoint(-0.30927, -0.50041, -0.80968));
   allpoints.push(new PMPoint(-0.30927, 0.50041, -0.80968));
   allpoints.push(new PMPoint(-0.30927, 0.947989, 0.0854802));
   allpoints.push(new PMPoint(0, -0.873393, 0.539786));
   allpoints.push(new PMPoint(0, 0.873393, 0.539786));
   allpoints.push(new PMPoint(0, 0, 1.00082));
   allpoints.push(new PMPoint(0, -0.35066, 0.91804));
   allpoints.push(new PMPoint(0, 0.44758, 0.89516));
   allpoints.push(new PMPoint(0, 0.977939, -0.09692));
   allpoints.push(new PMPoint(0.30927, -0.50041, 0.80968));
   allpoints.push(new PMPoint(0.30927, 0.947989, 0.0854802));
   allpoints.push(new PMPoint(0.50041, -0.80968, 0.30927));
   allpoints.push(new PMPoint(0.539786, 0, 0.873393));
   allpoints.push(new PMPoint(0.35066, 0.41056, 0.82112));
   allpoints.push(new PMPoint(0.50041, 0.80968, -0.30927));
   allpoints.push(new PMPoint(0.56738, -0.56738, 0.56738));
   allpoints.push(new PMPoint(0.56738, 0.76122, 0.25374));
   allpoints.push(new PMPoint(0.80968, -0.30927, -0.50041));
   allpoints.push(new PMPoint(0.80968, 0.30927, -0.50041));
   allpoints.push(new PMPoint(0.873393, 0.539786, 0));
   allpoints.push(new PMPoint(1.00082, 0, 0));
   allpoints.push(new PMPoint(0.91804, 0, 0.35066));
   allpoints.push(new PMPoint(0.91804, 0, -0.35066));
   allpoints.push(new PMPoint(0.80968, 0.30927, 0.50041));
   allpoints.push(new PMPoint(0.80968, -0.30927, 0.50041));
   allpoints.push(new PMPoint(0.873393, -0.539786, 0));
   allpoints.push(new PMPoint(0.56738, 0.56738, -0.56738));
   allpoints.push(new PMPoint(0.56738, -0.56738, -0.56738));
   allpoints.push(new PMPoint(0.50041, 0.638719, 0.58589));
   allpoints.push(new PMPoint(0.539786, 0, -0.873393));
   allpoints.push(new PMPoint(0.35066, -0.91804, 0));
   allpoints.push(new PMPoint(0.50041, -0.80968, -0.30927));
   allpoints.push(new PMPoint(0.30927, 0.50041, -0.80968));
   allpoints.push(new PMPoint(0.30927, -0.50041, -0.80968));
   allpoints.push(new PMPoint(0, 0.35066, -0.91804));
   allpoints.push(new PMPoint(0, -0.35066, -0.91804));
   allpoints.push(new PMPoint(0, 0, -1.00082));
   allpoints.push(new PMPoint(0, -1.00082, 0));
   allpoints.push(new PMPoint(0, 0.873393, -0.539786));
   allpoints.push(new PMPoint(0, -0.873393, -0.539786));
   allpoints.push(new PMPoint(-0.35066, 0.41056, 0.82112));
   allpoints.push(new PMPoint(-0.30927, -0.50041, 0.80968));
   allpoints.push(new PMPoint(-0.41056, -0.82112, 0.35066));
   allpoints.push(new PMPoint(-0.56738, 0.76122, 0.25374));
   allpoints.push(new PMPoint(-0.50041, 0.638719, 0.58589));
   allpoints.push(new PMPoint(-0.539786, 0, 0.873393));
   allpoints.push(new PMPoint(-0.76122, -0.25374, 0.56738));
   allpoints.push(new PMPoint(-0.638719, -0.58589, 0.50041));
   allpoints.push(new PMPoint(-0.80968, 0.30927, 0.50041));
   allpoints.push(new PMPoint(-0.977939, 0.09692, 0));
   allpoints.push(new PMPoint(-0.947989, -0.0854802, 0.30927));
   allpoints.push(new PMPoint(-0.873393, -0.539786, 0));
   allpoints.push(new PMPoint(-0.947989, -0.0854802, -0.30927));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(48, 46, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 46, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 48, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 46, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 12, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 8, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 2, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 46, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 39, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 42, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 36, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 12, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 50, 56, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 40, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 9, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 44, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 20, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 24, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 40, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 36, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 12, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 18, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 34, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 33, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 4, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 45, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 38, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 26, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 50, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 54, 55, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 26, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 31, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 61, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 1, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 45, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 14, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 24, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 33, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 34, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 4, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 10, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 38, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 27, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 54, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 57, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 18, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 21, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 58, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 0, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 6, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 45, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 43, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 14, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 16, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 33, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 30, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 59, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 57, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 31, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 41, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 35, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 54, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 49, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 22, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 28, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 10, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 47, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 32, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 37, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 57, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 53, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 35, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 23, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 5, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 52, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 28, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 25, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 47, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 23, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 23, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 19, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 5, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 11, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 17, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 19, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 51, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 56, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 60, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 56, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 55, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 60, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 61, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(61, 60, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(61, 59, 58, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 22, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 37, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 16, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 13, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 37, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 25, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 53, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 13, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 13, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 19, 17, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[11].vector);
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
