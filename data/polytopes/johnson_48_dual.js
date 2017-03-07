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

   allpoints.push(new PMPoint(-0.92982, 0.395476, 0.244418));
   allpoints.push(new PMPoint(-0.836119, -0.238639, 0.566644));
   allpoints.push(new PMPoint(-0.814068, -0.147472, 0.604154));
   allpoints.push(new PMPoint(-0.546535, 0, -0.884312));
   allpoints.push(new PMPoint(-0.507956, -0.507956, -0.507956));
   allpoints.push(new PMPoint(-0.607476, 0.358843, -0.761139));
   allpoints.push(new PMPoint(-0.28733, 0.860386, -0.507823));
   allpoints.push(new PMPoint(-0.432093, 0.75977, 0.100512));
   allpoints.push(new PMPoint(-0.319369, 0.59748, -0.786225));
   allpoints.push(new PMPoint(0, -0.7677, -0.474465));
   allpoints.push(new PMPoint(-0.313934, -0.82189, 0));
   allpoints.push(new PMPoint(0, -0.313934, -0.82189));
   allpoints.push(new PMPoint(0, 0.365539, -0.956994));
   allpoints.push(new PMPoint(0, 0.462613, -0.929042));
   allpoints.push(new PMPoint(0.165045, 0.861774, -0.0645328));
   allpoints.push(new PMPoint(0.310946, -0.339648, 0.915101));
   allpoints.push(new PMPoint(0.319369, -0.436019, 0.886013));
   allpoints.push(new PMPoint(0.310946, 0.666596, -0.713035));
   allpoints.push(new PMPoint(0.319369, 0.59748, -0.786225));
   allpoints.push(new PMPoint(0.752241, 0.682807, -0.220492));
   allpoints.push(new PMPoint(0.591455, -0.591455, 0.591455));
   allpoints.push(new PMPoint(0.607476, -0.520304, 0.661351));
   allpoints.push(new PMPoint(0.534097, 0.594725, 0.36756));
   allpoints.push(new PMPoint(0.884312, -0.546535, 0));
   allpoints.push(new PMPoint(0.836119, -0.238639, 0.566644));
   allpoints.push(new PMPoint(0.956994, 0, -0.365539));
   allpoints.push(new PMPoint(0.982917, 0.0871718, -0.321566));
   allpoints.push(new PMPoint(1.00624, 0.163474, 0.101033));
   allpoints.push(new PMPoint(1.0335, 0.0807304, 0.0498941));
   allpoints.push(new PMPoint(0.982917, -0.248633, 0.221777));
   allpoints.push(new PMPoint(0.836119, 0.400099, -0.466856));
   allpoints.push(new PMPoint(0.607476, 0.358843, -0.761139));
   allpoints.push(new PMPoint(0.507956, -0.507956, -0.507956));
   allpoints.push(new PMPoint(0.752241, 0.108146, 0.709328));
   allpoints.push(new PMPoint(0.546535, 0, -0.884312));
   allpoints.push(new PMPoint(0.313934, -0.82189, 0));
   allpoints.push(new PMPoint(0.165045, 0.327677, 0.799654));
   allpoints.push(new PMPoint(0, -0.624073, 0.829253));
   allpoints.push(new PMPoint(0, -0.884312, 0.546535));
   allpoints.push(new PMPoint(0, 0.7677, 0.474465));
   allpoints.push(new PMPoint(-0.319369, -0.436019, 0.886013));
   allpoints.push(new PMPoint(-0.432093, 0.42968, 0.634609));
   allpoints.push(new PMPoint(-0.28733, -0.069434, 0.996658));
   allpoints.push(new PMPoint(-0.591455, -0.591455, 0.591455));
   allpoints.push(new PMPoint(-0.607476, -0.520304, 0.661351));
   allpoints.push(new PMPoint(-0.814068, 0.47442, -0.402089));
   allpoints.push(new PMPoint(-0.836119, 0.400099, -0.466856));
   allpoints.push(new PMPoint(-0.956994, 0, -0.365539));
   allpoints.push(new PMPoint(-0.982917, 0.0871718, -0.321566));
   allpoints.push(new PMPoint(-0.982917, -0.248633, 0.221777));
   allpoints.push(new PMPoint(-1.0335, 0.0807304, 0.0498941));
   allpoints.push(new PMPoint(-0.884312, -0.546535, 0));

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
   faces.faces.push(new THREE.Face3(10, 9, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 35, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 51, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 4, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 9, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 32, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 38, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 43, 51, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 9, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 4, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 35, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 23, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 9, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 11, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 38, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 37, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 40, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 51, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 47, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 21, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 16, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 44, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 1, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 32, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 34, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(51, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 50, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(51, 48, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 23, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 29, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 24, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 11, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 3, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 26, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(47, 48, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 46, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(47, 5, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 3, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 5, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 8, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 34, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 31, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 30, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 13, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 18, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 16, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 15, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 42, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 24, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 33, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 40, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 42, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 2, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(49, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 2, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(49, 0, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 29, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 28, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 27, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 30, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 19, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 0, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 46, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 5, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 46, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 45, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 31, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 18, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 17, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 8, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 6, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 42, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 41, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 0, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 7, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 17, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 6, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 27, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 19, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 33, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 36, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 41, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 39, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 7, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 19, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 14, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 22, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 39, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 36, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 39, 41, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
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
