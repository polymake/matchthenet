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

   var axes = [[34,33],
      [28,27],
      [22,21],
      [21,20],
      [18,17],
      [16,15],
      [12,11],
      [9,8],
      [7,6],
      [6,5],
      [3,2],
      [2,1],
      [4,3],
      [0,4],
      [1,0]];

   var angles = [2.2262270484387,
      2.22622785364501,
      2.22622857126376,
      2.06935617604841,
      2.06935582960522,
      2.06935720360592,
      2.30240152812178,
      2.06935639826252,
      2.30240064457076,
      2.22622718929578,
      2.22622954568646,
      2.22622921574593,
      2.3024013852972,
      2.2262262205781,
      2.30240122742504];

   var subtrees = [[47,48,49],
      [44,45,46],
      [41,42,43],
      [38,39,40],
      [35,36,37],
      [32,33,34,47,48,49],
      [29,30,31],
      [26,27,28,44,45,46],
      [23,24,25],
      [20,21,22,38,39,40,41,42,43],
      [17,18,19,35,36,37],
      [14,15,16,32,33,34,47,48,49],
      [11,12,13,29,30,31],
      [8,9,10,26,27,28,44,45,46],
      [5,6,7,20,21,22,23,24,25,38,39,40,41,42,43]];

   var polytoperoot = [[0.910094984747073,0.0940481904099996,-0.199990719818588],
      [1.23720159643962,-0.48842601407569,0.400195495772939],
      [-0.423585159541252,-1.30818937265931,-0.287093399463905]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.01129, 0, 0));
   allpoints.push(new PMPoint(1.22435, 0.583547, 0));
   allpoints.push(new PMPoint(0.685422, 0.892547, 0));
   allpoints.push(new PMPoint(-0.0879728, 0.240953, 0));
   allpoints.push(new PMPoint(-0.213054, -0.583556, 0));
   allpoints.push(new PMPoint(0.325871, -0.892556, 0));
   allpoints.push(new PMPoint(1.09927, -0.240962, 0));
   allpoints.push(new PMPoint(-0.703009, 0.328468, 0));
   allpoints.push(new PMPoint(-1.13093, -0.276368, 0));
   allpoints.push(new PMPoint(-0.413967, -0.463207, 0));
   allpoints.push(new PMPoint(0.597448, 1.1335, 0));
   allpoints.push(new PMPoint(-0.41385, 1.1335, 0));
   allpoints.push(new PMPoint(-0.626902, 0.549957, 0));
   allpoints.push(new PMPoint(1.18223, -0.191267, 0));
   allpoints.push(new PMPoint(1.78595, -0.0448563, 0));
   allpoints.push(new PMPoint(1.95953, 0.67543, 0));
   allpoints.push(new PMPoint(1.84579, 0.986973, 0));
   allpoints.push(new PMPoint(1.24895, 1.42598, 0));
   allpoints.push(new PMPoint(0.69291, 1.14895, 0));
   allpoints.push(new PMPoint(-0.834496, -0.986981, 0));
   allpoints.push(new PMPoint(-0.237659, -1.42599, 0));
   allpoints.push(new PMPoint(0.318382, -1.14896, 0));
   allpoints.push(new PMPoint(0.413845, -1.13351, 0));
   allpoints.push(new PMPoint(1.42514, -1.13351, 0));
   allpoints.push(new PMPoint(1.63819, -0.549963, 0));
   allpoints.push(new PMPoint(-0.990242, 0.879299, 0));
   allpoints.push(new PMPoint(-1.24675, 0.882056, 0));
   allpoints.push(new PMPoint(-1.54575, 0.337523, 0));
   allpoints.push(new PMPoint(0.810503, 1.71706, 0));
   allpoints.push(new PMPoint(0.271574, 2.02606, 0));
   allpoints.push(new PMPoint(-0.501825, 1.37447, 0));
   allpoints.push(new PMPoint(2.25672, -0.450202, 0));
   allpoints.push(new PMPoint(2.49601, -0.357797, 0));
   allpoints.push(new PMPoint(2.57216, 0.258745, 0));
   allpoints.push(new PMPoint(2.04582, 1.70036, 0));
   allpoints.push(new PMPoint(1.59034, 2.1228, 0));
   allpoints.push(new PMPoint(1.3478, 2.03929, 0));
   allpoints.push(new PMPoint(-1.03453, -1.70037, 0));
   allpoints.push(new PMPoint(-0.579048, -2.12281, 0));
   allpoints.push(new PMPoint(-0.336505, -2.03929, 0));
   allpoints.push(new PMPoint(-0.0590257, -2.02097, 0));
   allpoints.push(new PMPoint(0.950547, -2.07999, 0));
   allpoints.push(new PMPoint(1.05243, -1.84458, 0));
   allpoints.push(new PMPoint(-1.9125, 1.6433, 0));
   allpoints.push(new PMPoint(-2.15179, 1.5509, 0));
   allpoints.push(new PMPoint(-2.13313, 0.539772, 0));
   allpoints.push(new PMPoint(3.39629, -0.81846, 0));
   allpoints.push(new PMPoint(3.58437, -0.644024, 0));
   allpoints.push(new PMPoint(3.19268, 0.288338, 0));

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

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 22, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 6, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 28, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 31, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 40, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 22, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 21, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 46, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 28, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 48, 49, undefined, undefined, 0));


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
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[34].vector);
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
