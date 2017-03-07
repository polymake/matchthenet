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

   var axes = [[26,25],
      [23,22],
      [20,19],
      [15,14],
      [16,15],
      [14,13],
      [7,6],
      [8,7],
      [4,3],
      [3,2],
      [5,4],
      [2,1],
      [0,5],
      [1,0]];

   var angles = [2.74110122285045,
      2.70295511204459,
      2.40032118709157,
      2.43653682421437,
      2.33894651742408,
      2.40332452245389,
      1.52245879721783,
      1.44146896440693,
      1.65966459515236,
      2.18491007993131,
      0.695018632657763,
      2.31798140395373,
      1.10511502914484,
      1.65639063650827];

   var subtrees = [[49],
      [45,46,47,48],
      [43,44],
      [41,42],
      [37,38,39,40],
      [35,36],
      [31,32,33,34],
      [25,26,27,28,29,30,49],
      [21,22,23,24,45,46,47,48],
      [18,19,20,43,44],
      [13,14,15,16,17,35,36,37,38,39,40,41,42],
      [11,12],
      [9,10],
      [6,7,8,25,26,27,28,29,30,31,32,33,34,49]];

   var polytoperoot = [[-1.67962324439788,-0.476453670396088,0.225223181636185],
      [-0.75740523683706,0.114472769773898,-0.966217013364778],
      [0.540544849119468,-0.579590270368132,-0.492393320000267]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.756711, 0, 0));
   allpoints.push(new PMPoint(1.45428, 0.614407, 0));
   allpoints.push(new PMPoint(1.22906, 1.25992, 0));
   allpoints.push(new PMPoint(-1.72896, 1.42412, 0));
   allpoints.push(new PMPoint(-1.87792, 1.35526, 0));
   allpoints.push(new PMPoint(1.3145, -1.34949, 0));
   allpoints.push(new PMPoint(1.78852, -1.05605, 0));
   allpoints.push(new PMPoint(1.87079, -0.857424, 0));
   allpoints.push(new PMPoint(-0.734939, -1.75473, 0));
   allpoints.push(new PMPoint(0.0384721, -1.8835, 0));
   allpoints.push(new PMPoint(2.11742, -0.35331, 0));
   allpoints.push(new PMPoint(2.11189, 0.189264, 0));
   allpoints.push(new PMPoint(-0.20605, 3.80195, 0));
   allpoints.push(new PMPoint(-0.205856, 3.82091, 0));
   allpoints.push(new PMPoint(-0.220788, 4.28833, 0));
   allpoints.push(new PMPoint(-0.509558, 4.49364, 0));
   allpoints.push(new PMPoint(-1.08187, 4.57158, 0));
   allpoints.push(new PMPoint(2.22295, 0.464933, 0));
   allpoints.push(new PMPoint(2.16685, 1.10101, 0));
   allpoints.push(new PMPoint(1.31327, 1.27508, 0));
   allpoints.push(new PMPoint(1.28296, 1.32637, 0));
   allpoints.push(new PMPoint(1.37907, 1.84132, 0));
   allpoints.push(new PMPoint(1.32732, 2.06524, 0));
   allpoints.push(new PMPoint(0.970486, 2.25255, 0));
   allpoints.push(new PMPoint(2.24466, -1.29903, 0));
   allpoints.push(new PMPoint(2.77891, -1.44259, 0));
   allpoints.push(new PMPoint(2.94722, -1.39422, 0));
   allpoints.push(new PMPoint(2.95877, -1.31433, 0));
   allpoints.push(new PMPoint(2.92669, -1.04698, 0));
   allpoints.push(new PMPoint(2.39025, -0.700618, 0));
   allpoints.push(new PMPoint(1.14709, -2.11547, 0));
   allpoints.push(new PMPoint(1.71105, -2.24025, 0));
   allpoints.push(new PMPoint(2.00874, -2.01623, 0));
   allpoints.push(new PMPoint(1.98992, -1.53201, 0));
   allpoints.push(new PMPoint(0.161971, 3.96619, 0));
   allpoints.push(new PMPoint(0.231853, 4.34851, 0));
   allpoints.push(new PMPoint(0.199907, 4.49818, 0));
   allpoints.push(new PMPoint(0.243529, 4.56251, 0));
   allpoints.push(new PMPoint(0.103931, 4.66826, 0));
   allpoints.push(new PMPoint(-0.190134, 4.6854, 0));
   allpoints.push(new PMPoint(0.226285, 4.35308, 0));
   allpoints.push(new PMPoint(0.236248, 4.39851, 0));
   allpoints.push(new PMPoint(2.27057, 1.34949, 0));
   allpoints.push(new PMPoint(1.76853, 1.5342, 0));
   allpoints.push(new PMPoint(1.83114, 2.1273, 0));
   allpoints.push(new PMPoint(1.80111, 2.20223, 0));
   allpoints.push(new PMPoint(1.72926, 2.23187, 0));
   allpoints.push(new PMPoint(1.68554, 2.216, 0));
   allpoints.push(new PMPoint(2.57415, -1.65435, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
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

   faces.faces.push(new THREE.Face3(13, 35, 36, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(13, 36, 14, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 0, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 5, 9, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(5, 4, 13, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 13, 14, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 15, 16, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 16, 17, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(30, 8, 7, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 7, 25, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 25, 26, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 26, 27, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 27, 28, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(30, 28, 29, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(3, 2, 18, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(23, 22, 45, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(23, 45, 46, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(23, 46, 47, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(23, 47, 48, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(20, 19, 43, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(20, 43, 44, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(31, 32, 33, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(31, 33, 34, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(31, 34, 7, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(31, 7, 6, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(16, 15, 37, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(16, 37, 38, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(16, 38, 39, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(16, 39, 40, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(15, 14, 41, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(15, 41, 42, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(4, 3, 21, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(4, 21, 22, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(26, 25, 49, undefined, undefined, 14));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
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
