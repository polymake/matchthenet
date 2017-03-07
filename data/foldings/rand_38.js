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

   var axes = [[32,31],
      [27,26],
      [22,21],
      [18,17],
      [14,13],
      [12,11],
      [15,14],
      [13,12],
      [9,8],
      [7,6],
      [0,4],
      [2,1],
      [4,3],
      [3,2],
      [1,0]];

   var angles = [2.69715965733831,
      2.54537637237699,
      1.94596742584858,
      2.01379554765377,
      1.51378860287793,
      1.27018789643833,
      1.76523865204759,
      1.20376980296527,
      2.34046180641553,
      1.67128911571556,
      2.37050100990239,
      1.78291302635486,
      2.60262256593874,
      1.95130181732071,
      2.78520010262189];

   var subtrees = [[53],
      [50,51,52],
      [43,44,45,46,47,48,49],
      [40,41,42],
      [37,38,39],
      [35,36],
      [33,34],
      [29,30,31,32,53],
      [25,26,27,28,50,51,52],
      [23,24],
      [20,21,22,43,44,45,46,47,48,49],
      [16,17,18,19,40,41,42],
      [10,11,12,13,14,15,29,30,31,32,33,34,35,36,37,38,39,53],
      [8,9,25,26,27,28,50,51,52],
      [5,6,7,23,24]];

   var polytoperoot = [[0.270293429692607,-0.396525401188855,0.374199665313706],
      [-0.155335060677183,-1.91012168683634,0.760487794319813],
      [0.7417708355398,-0.958340289396729,-2.25555697962617]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.24188, 0, 0));
   allpoints.push(new PMPoint(1.18763, 0.0908483, 0));
   allpoints.push(new PMPoint(0.779676, 0.50185, 0));
   allpoints.push(new PMPoint(-0.0218053, 0.00700593, 0));
   allpoints.push(new PMPoint(0.927157, -0.53189, 0));
   allpoints.push(new PMPoint(1.08964, -0.42421, 0));
   allpoints.push(new PMPoint(1.30632, -0.0995889, 0));
   allpoints.push(new PMPoint(1.3793, 1.02879, 0));
   allpoints.push(new PMPoint(0.575049, 1.53242, 0));
   allpoints.push(new PMPoint(0.237693, 1.40197, 0));
   allpoints.push(new PMPoint(0.135299, 1.45422, 0));
   allpoints.push(new PMPoint(-0.559957, 0.907094, 0));
   allpoints.push(new PMPoint(-0.583102, 0.808936, 0));
   allpoints.push(new PMPoint(-0.507576, 0.620811, 0));
   allpoints.push(new PMPoint(-0.0466827, 0.0084498, 0));
   allpoints.push(new PMPoint(1.33041, -0.0789452, 0));
   allpoints.push(new PMPoint(1.7114, 0.270905, 0));
   allpoints.push(new PMPoint(2.1168, 0.709804, 0));
   allpoints.push(new PMPoint(1.53677, 0.982233, 0));
   allpoints.push(new PMPoint(-0.046529, 0.00388955, 0));
   allpoints.push(new PMPoint(0.19615, -1.12606, 0));
   allpoints.push(new PMPoint(0.904118, -0.570173, 0));
   allpoints.push(new PMPoint(1.629, -1.05084, 0));
   allpoints.push(new PMPoint(1.731, -0.394884, 0));
   allpoints.push(new PMPoint(2.01242, 0.929679, 0));
   allpoints.push(new PMPoint(2.18932, 1.15166, 0));
   allpoints.push(new PMPoint(1.21181, 1.65614, 0));
   allpoints.push(new PMPoint(0.542963, 1.64281, 0));
   allpoints.push(new PMPoint(-2.19053, 1.26777, 0));
   allpoints.push(new PMPoint(-2.72114, 1.15507, 0));
   allpoints.push(new PMPoint(-2.54193, 0.722526, 0));
   allpoints.push(new PMPoint(-0.946071, 0.748977, 0));
   allpoints.push(new PMPoint(-0.788921, -0.964392, 0));
   allpoints.push(new PMPoint(-0.671676, -0.963691, 0));
   allpoints.push(new PMPoint(-0.289465, 1.97104, 0));
   allpoints.push(new PMPoint(-1.28999, 2.40906, 0));
   allpoints.push(new PMPoint(-0.808386, 0.518095, 0));
   allpoints.push(new PMPoint(-1.35027, -0.796809, 0));
   allpoints.push(new PMPoint(-1.16514, -0.848756, 0));
   allpoints.push(new PMPoint(2.3402, 0.0580738, 0));
   allpoints.push(new PMPoint(3.10486, 0.390548, 0));
   allpoints.push(new PMPoint(2.39863, 0.743665, 0));
   allpoints.push(new PMPoint(0.177221, -1.24177, 0));
   allpoints.push(new PMPoint(0.214995, -1.4303, 0));
   allpoints.push(new PMPoint(0.476233, -1.98665, 0));
   allpoints.push(new PMPoint(0.82961, -2.29379, 0));
   allpoints.push(new PMPoint(1.02525, -2.17863, 0));
   allpoints.push(new PMPoint(1.11807, -1.34999, 0));
   allpoints.push(new PMPoint(1.09339, -0.523571, 0));
   allpoints.push(new PMPoint(2.70596, 1.74878, 0));
   allpoints.push(new PMPoint(2.78351, 1.96214, 0));
   allpoints.push(new PMPoint(2.24358, 2.01441, 0));
   allpoints.push(new PMPoint(-2.25016, 0.181561, 0));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 51, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 52, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 28, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 6, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 31, 53, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[0].vector);
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
