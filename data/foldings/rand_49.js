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

   var axes = [[42,41],
      [35,34],
      [27,26],
      [25,24],
      [17,16],
      [16,15],
      [15,14],
      [10,9],
      [7,6],
      [8,7],
      [6,5],
      [2,1],
      [3,2],
      [0,4],
      [4,3],
      [1,0]];

   var angles = [2.73408658350995,
      1.93191225890583,
      2.51828743934766,
      2.29566448825315,
      2.55788260057106,
      2.0461089132936,
      1.52228808614994,
      2.22137192636182,
      1.64907808015719,
      1.23190988595221,
      2.18751404042317,
      1.23182060956064,
      1.54131812817842,
      2.89162044959358,
      2.56268197142023,
      2.42004397102109];

   var subtrees = [[56,57],
      [53,54,55],
      [49,50,51,52],
      [46,47,48],
      [43,44,45],
      [39,40,41,42,56,57],
      [37,38],
      [33,34,35,36,53,54,55],
      [30,31,32],
      [26,27,28,29,49,50,51,52],
      [22,23,24,25,46,47,48],
      [19,20,21],
      [14,15,16,17,18,37,38,39,40,41,42,43,44,45,56,57],
      [12,13],
      [9,10,11,33,34,35,36,53,54,55],
      [5,6,7,8,22,23,24,25,26,27,28,29,30,31,32,46,47,48,49,50,51,52]];

   var polytoperoot = [[-0.0613240347757452,-1.12404562558882,-0.475455491636202],
      [-0.725680440139425,-0.820064741192697,-0.0708965676251459],
      [0.212495511002208,-0.259628006915966,0.828078711180942]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.814211, 0, 0));
   allpoints.push(new PMPoint(0.969562, 0.882011, 0));
   allpoints.push(new PMPoint(0.392967, 0.932564, 0));
   allpoints.push(new PMPoint(-0.435658, 0.351729, 0));
   allpoints.push(new PMPoint(-0.755359, -0.236888, 0));
   allpoints.push(new PMPoint(-0.811616, -0.890576, 0));
   allpoints.push(new PMPoint(0.0274466, -1.25602, 0));
   allpoints.push(new PMPoint(0.384749, -1.16473, 0));
   allpoints.push(new PMPoint(-0.41663, 1.06614, 0));
   allpoints.push(new PMPoint(-1.24238, 0.631863, 0));
   allpoints.push(new PMPoint(-0.898949, 0.244817, 0));
   allpoints.push(new PMPoint(-0.889968, 0.211476, 0));
   allpoints.push(new PMPoint(-0.767709, -0.193148, 0));
   allpoints.push(new PMPoint(0.754752, 1.70655, 0));
   allpoints.push(new PMPoint(0.440495, 2.49368, 0));
   allpoints.push(new PMPoint(0.234306, 2.41047, 0));
   allpoints.push(new PMPoint(-0.378794, 1.81218, 0));
   allpoints.push(new PMPoint(-0.334686, 1.31179, 0));
   allpoints.push(new PMPoint(1.45532, -1.06302, 0));
   allpoints.push(new PMPoint(1.72939, -0.745953, 0));
   allpoints.push(new PMPoint(1.79896, 0.686794, 0));
   allpoints.push(new PMPoint(-0.995175, 0.111188, 0));
   allpoints.push(new PMPoint(-1.50759, 0.183179, 0));
   allpoints.push(new PMPoint(-1.76399, -0.0588046, 0));
   allpoints.push(new PMPoint(-1.29533, -0.786228, 0));
   allpoints.push(new PMPoint(-0.21553, -2.20282, 0));
   allpoints.push(new PMPoint(-0.0451773, -2.72892, 0));
   allpoints.push(new PMPoint(0.801585, -2.8961, 0));
   allpoints.push(new PMPoint(0.514723, -1.56318, 0));
   allpoints.push(new PMPoint(-1.23697, -1.14344, 0));
   allpoints.push(new PMPoint(-1.31682, -1.55938, 0));
   allpoints.push(new PMPoint(-0.796747, -1.78155, 0));
   allpoints.push(new PMPoint(-0.746008, 1.44541, 0));
   allpoints.push(new PMPoint(-1.53969, 1.20093, 0));
   allpoints.push(new PMPoint(-1.56594, 0.898833, 0));
   allpoints.push(new PMPoint(-1.54817, 0.807346, 0));
   allpoints.push(new PMPoint(1.96237, 2.48067, 0));
   allpoints.push(new PMPoint(0.615912, 2.6952, 0));
   allpoints.push(new PMPoint(0.330331, 2.73709, 0));
   allpoints.push(new PMPoint(-0.472148, 3.05486, 0));
   allpoints.push(new PMPoint(-0.570849, 3.02484, 0));
   allpoints.push(new PMPoint(-1.04089, 2.41923, 0));
   allpoints.push(new PMPoint(-1.03293, 2.26791, 0));
   allpoints.push(new PMPoint(-1.08067, 2.23985, 0));
   allpoints.push(new PMPoint(-1.12093, 2.18493, 0));
   allpoints.push(new PMPoint(-1.84173, -0.110212, 0));
   allpoints.push(new PMPoint(-1.76482, -0.876693, 0));
   allpoints.push(new PMPoint(-1.70469, -0.894859, 0));
   allpoints.push(new PMPoint(-0.718655, -2.46108, 0));
   allpoints.push(new PMPoint(-0.700585, -2.52124, 0));
   allpoints.push(new PMPoint(-0.606566, -2.6293, 0));
   allpoints.push(new PMPoint(-0.147324, -2.74338, 0));
   allpoints.push(new PMPoint(-1.56792, 1.2629, 0));
   allpoints.push(new PMPoint(-2.16905, 1.3812, 0));
   allpoints.push(new PMPoint(-2.24611, 1.26045, 0));
   allpoints.push(new PMPoint(-1.0439, 3.01296, 0));
   allpoints.push(new PMPoint(-1.09362, 2.40232, 0));

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
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 38, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 25, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 6, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 7, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 48, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 54, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 55, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 36, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 49, 50, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 50, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 41, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 56, 57, undefined, undefined, 0));


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
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[42].vector);
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
