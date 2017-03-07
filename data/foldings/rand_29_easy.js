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

   var axes = [[29,28],
      [30,29],
      [24,23],
      [19,18],
      [15,14],
      [9,8],
      [10,9],
      [7,6],
      [6,5],
      [2,1],
      [4,3],
      [0,4],
      [3,2],
      [1,0]];

   var angles = [2.97881293008939,
      2.43754617886931,
      2.36280280764811,
      1.6150993868352,
      2.32373248264171,
      2.06414736016341,
      1.9981636824188,
      1.88945595003885,
      1.83346333287997,
      2.29442647396239,
      1.90018551008699,
      2.48935637146518,
      2.47378495975357,
      2.26884750496356];

   var subtrees = [[48,49],
      [45,46,47],
      [42,43,44],
      [38,39,40,41],
      [35,36,37],
      [32,33,34],
      [28,29,30,31,45,46,47,48,49],
      [25,26,27],
      [21,22,23,24,42,43,44],
      [17,18,19,20,38,39,40,41],
      [13,14,15,16,35,36,37],
      [11,12],
      [8,9,10,28,29,30,31,32,33,34,45,46,47,48,49],
      [5,6,7,21,22,23,24,25,26,27,42,43,44]];

   var polytoperoot = [[-0.400504008663178,0.348662329737969,0.769036050343946],
      [-0.126330119747488,1.11318883687464,0.729845196557682],
      [0.0179197087029186,0.221333345671283,-0.33448464391423]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.300266, 0, 0));
   allpoints.push(new PMPoint(0.485238, 0.272635, 0));
   allpoints.push(new PMPoint(0.088034, 1.0596, 0));
   allpoints.push(new PMPoint(-0.337424, 0.67055, 0));
   allpoints.push(new PMPoint(-0.461782, -0.577587, 0));
   allpoints.push(new PMPoint(-0.267258, -0.84665, 0));
   allpoints.push(new PMPoint(0.687772, -1.01476, 0));
   allpoints.push(new PMPoint(1.15222, 0.464477, 0));
   allpoints.push(new PMPoint(0.975837, 0.955721, 0));
   allpoints.push(new PMPoint(0.344444, 1.37097, 0));
   allpoints.push(new PMPoint(-1.11261, 0.272408, 0));
   allpoints.push(new PMPoint(-0.595458, -0.438496, 0));
   allpoints.push(new PMPoint(0.163327, 1.45587, 0));
   allpoints.push(new PMPoint(-0.0782374, 1.62363, 0));
   allpoints.push(new PMPoint(-1.51633, 1.27386, 0));
   allpoints.push(new PMPoint(-1.20802, 0.631891, 0));
   allpoints.push(new PMPoint(0.977829, -0.849006, 0));
   allpoints.push(new PMPoint(1.16452, -0.837573, 0));
   allpoints.push(new PMPoint(1.40142, -0.214258, 0));
   allpoints.push(new PMPoint(1.179, 0.291584, 0));
   allpoints.push(new PMPoint(-1.33195, -0.452543, 0));
   allpoints.push(new PMPoint(-1.73013, -1.04299, 0));
   allpoints.push(new PMPoint(-1.5759, -1.7618, 0));
   allpoints.push(new PMPoint(-0.701099, -1.30572, 0));
   allpoints.push(new PMPoint(-0.403915, -1.46333, 0));
   allpoints.push(new PMPoint(0.437803, -1.60587, 0));
   allpoints.push(new PMPoint(0.820323, -1.14672, 0));
   allpoints.push(new PMPoint(1.08704, 1.05561, 0));
   allpoints.push(new PMPoint(1.30446, 1.65225, 0));
   allpoints.push(new PMPoint(0.94297, 1.76367, 0));
   allpoints.push(new PMPoint(0.495212, 1.62349, 0));
   allpoints.push(new PMPoint(1.64996, 0.22449, 0));
   allpoints.push(new PMPoint(1.83444, 1.15944, 0));
   allpoints.push(new PMPoint(1.11453, 1.01146, 0));
   allpoints.push(new PMPoint(-0.372994, 1.98867, 0));
   allpoints.push(new PMPoint(-1.76516, 2.04007, 0));
   allpoints.push(new PMPoint(-1.8011, 1.95163, 0));
   allpoints.push(new PMPoint(1.74421, -0.982801, 0));
   allpoints.push(new PMPoint(2.75689, -0.996792, 0));
   allpoints.push(new PMPoint(2.49047, -0.238352, 0));
   allpoints.push(new PMPoint(2.35359, -0.175209, 0));
   allpoints.push(new PMPoint(-1.54, -1.85026, 0));
   allpoints.push(new PMPoint(-1.05503, -2.26606, 0));
   allpoints.push(new PMPoint(-0.104527, -1.91639, 0));
   allpoints.push(new PMPoint(1.72288, 1.62999, 0));
   allpoints.push(new PMPoint(2.05279, 2.36305, 0));
   allpoints.push(new PMPoint(1.72911, 2.91379, 0));
   allpoints.push(new PMPoint(1.70388, 1.45519, 0));
   allpoints.push(new PMPoint(1.72079, 1.60498, 0));

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
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 22, 23, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(21, 23, 24, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(21, 24, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(21, 6, 5, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(10, 9, 28, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 28, 29, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 29, 30, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(10, 30, 31, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(44, 24, 23, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(44, 23, 42, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(44, 42, 43, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(15, 14, 35, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 35, 36, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(15, 36, 37, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(45, 46, 47, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(45, 47, 30, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(45, 30, 29, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(3, 2, 8, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(0, 4, 11, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(8, 32, 33, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 33, 34, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(8, 34, 9, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(19, 18, 38, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(19, 40, 41, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(27, 7, 6, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(27, 6, 25, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(27, 25, 26, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(4, 3, 13, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 14, 15, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 15, 16, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(48, 49, 29, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(48, 29, 28, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(2, 19, 20, undefined, undefined, 14));


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
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[45].vector);
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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
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
