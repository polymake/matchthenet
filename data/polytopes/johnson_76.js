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

   allpoints.push(new PMPoint(0.296767, 0.997253, 0.22494));
   allpoints.push(new PMPoint(-0.153113, 0.997253, 0.22494));
   allpoints.push(new PMPoint(0.296767, 0.997253, -0.22494));
   allpoints.push(new PMPoint(0.435787, 0.772313, 0.588901));
   allpoints.push(new PMPoint(-0.153113, 0.997253, -0.22494));
   allpoints.push(new PMPoint(-0.292134, 0.772313, 0.588901));
   allpoints.push(new PMPoint(0.435787, 0.772313, -0.588901));
   allpoints.push(new PMPoint(-0.517074, 0.858232, 0));
   allpoints.push(new PMPoint(0.0718266, 0.633292, 0.813841));
   allpoints.push(new PMPoint(-0.292134, 0.772313, -0.588901));
   allpoints.push(new PMPoint(-0.656095, 0.633292, 0.363961));
   allpoints.push(new PMPoint(0.660727, 0.408352, 0.727921));
   allpoints.push(new PMPoint(0.0718266, 0.633292, -0.813841));
   allpoints.push(new PMPoint(-0.656095, 0.633292, -0.363961));
   allpoints.push(new PMPoint(0.296767, 0.269331, 0.952861));
   allpoints.push(new PMPoint(-0.517074, 0.408352, 0.727921));
   allpoints.push(new PMPoint(0.660727, 0.408352, -0.727921));
   allpoints.push(new PMPoint(-0.881035, 0.269331, 0.22494));
   allpoints.push(new PMPoint(0.885667, 0.0443913, 0.588901));
   allpoints.push(new PMPoint(-0.153113, 0.269331, 0.952861));
   allpoints.push(new PMPoint(0.296767, 0.269331, -0.952861));
   allpoints.push(new PMPoint(-0.517074, 0.408352, -0.727921));
   allpoints.push(new PMPoint(-0.881035, 0.269331, -0.22494));
   allpoints.push(new PMPoint(0.296767, -0.180549, 0.952861));
   allpoints.push(new PMPoint(-0.742014, 0.0443913, 0.588901));
   allpoints.push(new PMPoint(0.885667, 0.0443913, -0.588901));
   allpoints.push(new PMPoint(-0.153113, 0.269331, -0.952861));
   allpoints.push(new PMPoint(1.02469, -0.180549, 0.22494));
   allpoints.push(new PMPoint(0.660727, -0.319569, 0.727921));
   allpoints.push(new PMPoint(-0.153113, -0.180549, 0.952861));
   allpoints.push(new PMPoint(0.296767, -0.180549, -0.952861));
   allpoints.push(new PMPoint(-0.742014, 0.0443913, -0.588901));
   allpoints.push(new PMPoint(1.02469, -0.180549, -0.22494));
   allpoints.push(new PMPoint(-0.881035, -0.180549, 0.22494));
   allpoints.push(new PMPoint(-0.517074, -0.319569, 0.727921));
   allpoints.push(new PMPoint(0.660727, -0.319569, -0.727921));
   allpoints.push(new PMPoint(-0.153113, -0.180549, -0.952861));
   allpoints.push(new PMPoint(0.799748, -0.544509, 0.363961));
   allpoints.push(new PMPoint(-0.881035, -0.180549, -0.22494));
   allpoints.push(new PMPoint(0.0718266, -0.544509, 0.813841));
   allpoints.push(new PMPoint(-0.517074, -0.319569, -0.727921));
   allpoints.push(new PMPoint(0.799748, -0.544509, -0.363961));
   allpoints.push(new PMPoint(-0.656095, -0.544509, 0.363961));
   allpoints.push(new PMPoint(0.435787, -0.68353, 0.588901));
   allpoints.push(new PMPoint(0.0718266, -0.544509, -0.813841));
   allpoints.push(new PMPoint(0.660727, -0.769449, 0));
   allpoints.push(new PMPoint(-0.656095, -0.544509, -0.363961));
   allpoints.push(new PMPoint(-0.292134, -0.68353, 0.588901));
   allpoints.push(new PMPoint(0.435787, -0.68353, -0.588901));
   allpoints.push(new PMPoint(-0.517074, -0.769449, 0));
   allpoints.push(new PMPoint(0.296767, -0.90847, 0.22494));
   allpoints.push(new PMPoint(-0.292134, -0.68353, -0.588901));
   allpoints.push(new PMPoint(-0.153113, -0.90847, 0.22494));
   allpoints.push(new PMPoint(0.296767, -0.90847, -0.22494));
   allpoints.push(new PMPoint(-0.153113, -0.90847, -0.22494));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(35, 25, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 32, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 25, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 35, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 30, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 45, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 53, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 41, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 16, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 20, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 48, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 44, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 0, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 5, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 43, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 39, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 47, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 14, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 19, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 8, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 29, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 52, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 54, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 5, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 15, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 39, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 29, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 7, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 4, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 15, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 24, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 34, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 47, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 42, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 49, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 10, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 34, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 13, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 22, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 17, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 31, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 22, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 40, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 46, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 33, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 38, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 22, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 38, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 42, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 33, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 38, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 24, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 33, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 17, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 24, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 46, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 54, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 49, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 36, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 40, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 31, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 9, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 51, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 40, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 12, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 26, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 44, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 20, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 30, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 36, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(48, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 54, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(48, 51, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 6, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 12, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 50, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 23, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 39, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 8, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 28, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 37, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 43, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 11, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 14, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 23, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 18, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 28, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 32, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 27, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 37, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 25, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 16, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 6, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 2, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 0, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 3, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 11, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 18, 27, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[27].vector);
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
