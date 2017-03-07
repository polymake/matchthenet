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
      [17,16],
      [18,17],
      [19,18],
      [13,12],
      [14,13],
      [10,9],
      [6,5],
      [7,6],
      [4,3],
      [0,4],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.4763639913311,
      2.12509585127014,
      2.13165552370713,
      2.24317513186953,
      1.65400901682246,
      2.24974267976729,
      0.829874394891657,
      1.94108974475033,
      1.08557654231518,
      2.67527957734341,
      1.99720055160419,
      2.19530463028872,
      2.38833706847578,
      2.59884641391959];

   var subtrees = [[47,48,49],
      [44,45,46],
      [41,42,43],
      [39,40],
      [36,37,38],
      [33,34,35],
      [30,31,32],
      [28,29],
      [23,24,25,26,27,47,48,49],
      [21,22],
      [15,16,17,18,19,20,39,40,41,42,43,44,45,46],
      [11,12,13,14,33,34,35,36,37,38],
      [8,9,10,30,31,32],
      [5,6,7,23,24,25,26,27,28,29,47,48,49]];

   var polytoperoot = [[0.0998380452421198,0.736998507586353,-0.415493273529893],
      [0.561351976975035,0.882957905587382,-0.70570831329101],
      [0.651589357009367,-0.572120085989293,-0.197513585303337]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.704672, 0, 0));
   allpoints.push(new PMPoint(0.674684, 0.29842, 0));
   allpoints.push(new PMPoint(0.579211, 0.403048, 0));
   allpoints.push(new PMPoint(-0.000233661, 0.00972522, 0));
   allpoints.push(new PMPoint(-0.0461015, -0.215304, 0));
   allpoints.push(new PMPoint(1.08751, -1.68129, 0));
   allpoints.push(new PMPoint(2.17241, -2.29467, 0));
   allpoints.push(new PMPoint(2.63881, -1.91804, 0));
   allpoints.push(new PMPoint(2.92943, -1.72353, 0));
   allpoints.push(new PMPoint(2.29433, 0.211996, 0));
   allpoints.push(new PMPoint(2.27747, 0.546967, 0));
   allpoints.push(new PMPoint(1.96, 0.831405, 0));
   allpoints.push(new PMPoint(0.595057, 1.19332, 0));
   allpoints.push(new PMPoint(0.578923, 0.404781, 0));
   allpoints.push(new PMPoint(-0.229925, 0.418714, 0));
   allpoints.push(new PMPoint(-0.504344, 0.749433, 0));
   allpoints.push(new PMPoint(-0.775417, 0.343269, 0));
   allpoints.push(new PMPoint(-0.809869, 0.225961, 0));
   allpoints.push(new PMPoint(-0.685133, 0.0546178, 0));
   allpoints.push(new PMPoint(-0.117703, -0.186084, 0));
   allpoints.push(new PMPoint(0.578526, 0.404666, 0));
   allpoints.push(new PMPoint(-0.127761, 0.461131, 0));
   allpoints.push(new PMPoint(-0.503208, -1.60169, 0));
   allpoints.push(new PMPoint(-0.961163, -1.76149, 0));
   allpoints.push(new PMPoint(-0.978281, -1.90105, 0));
   allpoints.push(new PMPoint(-0.704785, -2.06645, 0));
   allpoints.push(new PMPoint(2.15403, -2.6439, 0));
   allpoints.push(new PMPoint(-0.590939, -0.503516, 0));
   allpoints.push(new PMPoint(-0.330004, -0.955087, 0));
   allpoints.push(new PMPoint(3.74982, 1.07525, 0));
   allpoints.push(new PMPoint(3.52084, 1.39039, 0));
   allpoints.push(new PMPoint(2.38832, 0.627758, 0));
   allpoints.push(new PMPoint(0.140695, 1.3029, 0));
   allpoints.push(new PMPoint(-0.106227, 1.10213, 0));
   allpoints.push(new PMPoint(-0.0767248, 0.673402, 0));
   allpoints.push(new PMPoint(1.13039, 1.91582, 0));
   allpoints.push(new PMPoint(0.942909, 2.02357, 0));
   allpoints.push(new PMPoint(0.394269, 1.61538, 0));
   allpoints.push(new PMPoint(-1.10263, 0.0700341, 0));
   allpoints.push(new PMPoint(-0.954659, -0.391879, 0));
   allpoints.push(new PMPoint(-1.21735, 0.500047, 0));
   allpoints.push(new PMPoint(-1.24196, 0.278465, 0));
   allpoints.push(new PMPoint(-1.13877, 0.182969, 0));
   allpoints.push(new PMPoint(-0.615325, 1.0477, 0));
   allpoints.push(new PMPoint(-1.18799, 0.673961, 0));
   allpoints.push(new PMPoint(-1.19078, 0.560894, 0));
   allpoints.push(new PMPoint(-1.1373, -2.0573, 0));
   allpoints.push(new PMPoint(-1.18779, -2.15851, 0));
   allpoints.push(new PMPoint(-1.02015, -2.29511, 0));

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
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 6, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 29, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 21, 22, undefined, undefined, 0));


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
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[4].vector);
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
