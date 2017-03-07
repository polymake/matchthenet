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

   var axes = [[49,34],
      [29,46],
      [42,41],
      [37,36],
      [34,33],
      [20,34],
      [30,29],
      [29,16],
      [27,26],
      [25,11],
      [24,23],
      [22,21],
      [7,20],
      [20,19],
      [18,17],
      [16,15],
      [5,16],
      [14,13],
      [11,4],
      [12,11],
      [10,9],
      [8,7],
      [7,6],
      [3,5],
      [5,2],
      [4,0],
      [1,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.22315446657926,
      2.22315446657926,
      2.22315446657926,
      2.12437068569194,
      2.12437068569194,
      2.51327412287183,
      2.12437068569194,
      2.51327412287183,
      2.12437068569194,
      2.22315446657926,
      2.58801829469275,
      2.12437068569194,
      2.77672882547631,
      2.12437068569194,
      2.22315446657926,
      2.77672882547631,
      2.12437068569194,
      2.22315446657926,
      2.12437068569194,
      2.77672882547631,
      2.12437068569194,
      2.58801829469275,
      2.58801829469275,
      2.22315446657927,
      2.77672882547631,
      2.22315446657926,
      2.77672882547631,
      2.12437068569194,
      2.58801829469275,
      2.77672882547631,
      2.77672882547631];

   var subtrees = [[57],
      [56],
      [55],
      [53,54],
      [51,52],
      [49,50,57],
      [47,48],
      [45,46,56],
      [43,44],
      [41,42,55],
      [38,39,40],
      [36,37,53,54],
      [35],
      [33,34,49,50,51,52,57],
      [32],
      [31],
      [29,30,45,46,47,48,56],
      [28],
      [26,27,43,44],
      [25,41,42,55],
      [23,24,38,39,40],
      [21,22,36,37,53,54],
      [19,20,33,34,35,49,50,51,52,57],
      [17,18,32],
      [15,16,29,30,31,45,46,47,48,56],
      [13,14,28],
      [11,12,25,26,27,41,42,43,44,55],
      [9,10,23,24,38,39,40],
      [6,7,8,19,20,21,22,33,34,35,36,37,49,50,51,52,53,54,57],
      [5,15,16,17,18,29,30,31,32,45,46,47,48,56],
      [4,11,12,13,14,25,26,27,28,41,42,43,44,55]];

   var polytoperoot = [[1.02849428324158,-0.270355721668384,-0.167089025044068],
      [0.854101966249684,-1.09016994374947,-1],
      [-0.335533836981485,0.542905152611709,-0.878438989593194]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.635644, 0, 0));
   allpoints.push(new PMPoint(0.635644, 0.635644, 0));
   allpoints.push(new PMPoint(0, 0.635644, 0));
   allpoints.push(new PMPoint(0.317822, -0.550484, 0));
   allpoints.push(new PMPoint(0.317822, 1.18613, 0));
   allpoints.push(new PMPoint(1.24018, -0.196425, 0));
   allpoints.push(new PMPoint(1.6138, 0.317822, 0));
   allpoints.push(new PMPoint(1.24018, 0.832069, 0));
   allpoints.push(new PMPoint(-0.635644, 0.635644, 0));
   allpoints.push(new PMPoint(-0.635644, 0, 0));
   allpoints.push(new PMPoint(0.868306, -0.868306, 0));
   allpoints.push(new PMPoint(1.18613, -0.317822, 0));
   allpoints.push(new PMPoint(-0.550484, -0.317822, 0));
   allpoints.push(new PMPoint(-0.232662, -0.868306, 0));
   allpoints.push(new PMPoint(1.18613, 0.953467, 0));
   allpoints.push(new PMPoint(0.868306, 1.50395, 0));
   allpoints.push(new PMPoint(-0.232662, 1.50395, 0));
   allpoints.push(new PMPoint(-0.550484, 0.953467, 0));
   allpoints.push(new PMPoint(1.75443, -0.570047, 0));
   allpoints.push(new PMPoint(2.12805, -0.0558002, 0));
   allpoints.push(new PMPoint(2.12805, 0.691445, 0));
   allpoints.push(new PMPoint(1.75443, 1.20569, 0));
   allpoints.push(new PMPoint(-1.27129, 0.635644, 0));
   allpoints.push(new PMPoint(-1.27129, 0, 0));
   allpoints.push(new PMPoint(1.50395, -0.868306, 0));
   allpoints.push(new PMPoint(0, -1.10097, 0));
   allpoints.push(new PMPoint(0.550484, -1.41879, 0));
   allpoints.push(new PMPoint(-0.868306, -0.868306, 0));
   allpoints.push(new PMPoint(0.550484, 2.05444, 0));
   allpoints.push(new PMPoint(0, 1.73661, 0));
   allpoints.push(new PMPoint(1.50395, 1.50395, 0));
   allpoints.push(new PMPoint(-0.868306, 1.50395, 0));
   allpoints.push(new PMPoint(2.26867, -0.94367, 0));
   allpoints.push(new PMPoint(2.64229, -0.429423, 0));
   allpoints.push(new PMPoint(2.19449, 0.576362, 0));
   allpoints.push(new PMPoint(2.64229, 1.06507, 0));
   allpoints.push(new PMPoint(2.26867, 1.57931, 0));
   allpoints.push(new PMPoint(-1.87582, 0.832069, 0));
   allpoints.push(new PMPoint(-2.24945, 0.317822, 0));
   allpoints.push(new PMPoint(-1.87582, -0.196425, 0));
   allpoints.push(new PMPoint(0.868306, -1.50395, 0));
   allpoints.push(new PMPoint(1.50395, -1.50395, 0));
   allpoints.push(new PMPoint(-0.317822, -1.65145, 0));
   allpoints.push(new PMPoint(0.232662, -1.96927, 0));
   allpoints.push(new PMPoint(1.41879, 1.82177, 0));
   allpoints.push(new PMPoint(1.10097, 2.37226, 0));
   allpoints.push(new PMPoint(0.232662, 2.60492, 0));
   allpoints.push(new PMPoint(-0.317822, 2.2871, 0));
   allpoints.push(new PMPoint(3.01592, 0.0848245, 0));
   allpoints.push(new PMPoint(2.50167, 0.458447, 0));
   allpoints.push(new PMPoint(2.78292, -1.31729, 0));
   allpoints.push(new PMPoint(3.15654, -0.803045, 0));
   allpoints.push(new PMPoint(3.15654, 1.43869, 0));
   allpoints.push(new PMPoint(2.78292, 1.95294, 0));
   allpoints.push(new PMPoint(1.18613, -2.05444, 0));
   allpoints.push(new PMPoint(0.550484, 2.69008, 0));
   allpoints.push(new PMPoint(3.27446, -0.495866, 0));

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

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 4, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 16, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 42, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 55, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(45, 46, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(45, 29, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 20, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 34, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 57, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 31, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(46, 56, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 36, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 53, 54, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 47, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 43, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 4, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 5, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 28, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
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
