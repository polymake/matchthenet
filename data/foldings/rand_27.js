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
      [20,19],
      [18,17],
      [11,10],
      [12,11],
      [8,7],
      [7,6],
      [9,8],
      [3,2],
      [4,3],
      [2,1],
      [0,5],
      [5,4],
      [1,0]];

   var angles = [2.62976716377746,
      2.30659271569982,
      2.58518458929851,
      2.92426362809539,
      1.9655089807669,
      2.09608046594178,
      2.16317199444055,
      2.09801257402587,
      1.87791193732705,
      1.10404467720081,
      1.70176870878062,
      1.37412313791346,
      1.02753734730641,
      1.88477563312489];

   var subtrees = [[48,49],
      [43,44,45,46,47],
      [41,42],
      [39,40],
      [34,35,36,37,38],
      [31,32,33],
      [29,30],
      [25,26,27,28,48,49],
      [22,23,24],
      [19,20,21,43,44,45,46,47],
      [16,17,18,41,42],
      [13,14,15],
      [10,11,12,34,35,36,37,38,39,40],
      [6,7,8,9,25,26,27,28,29,30,31,32,33,48,49]];

   var polytoperoot = [[-0.5786527064259,-1.0730923033106,0.431309575540673],
      [0.0712695087616506,-0.623370194921893,0.863200255593572],
      [-0.396143107724186,0.929693026918994,0.704096001080193]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.15418, 0, 0));
   allpoints.push(new PMPoint(1.247, 0.111125, 0));
   allpoints.push(new PMPoint(1.41055, 1.89492, 0));
   allpoints.push(new PMPoint(-0.0656629, 1.65777, 0));
   allpoints.push(new PMPoint(-0.605789, 1.02133, 0));
   allpoints.push(new PMPoint(0.369518, -0.915724, 0));
   allpoints.push(new PMPoint(0.862425, -1.03119, 0));
   allpoints.push(new PMPoint(0.926736, -1.03209, 0));
   allpoints.push(new PMPoint(1.06998, -0.888821, 0));
   allpoints.push(new PMPoint(-1.02994, 2.38241, 0));
   allpoints.push(new PMPoint(-1.94333, 2.3026, 0));
   allpoints.push(new PMPoint(-2.00763, 2.21668, 0));
   allpoints.push(new PMPoint(-1.53022, -0.572243, 0));
   allpoints.push(new PMPoint(-1.43589, -0.684972, 0));
   allpoints.push(new PMPoint(-0.543561, -0.824401, 0));
   allpoints.push(new PMPoint(1.63893, -0.749739, 0));
   allpoints.push(new PMPoint(2.18672, -0.328633, 0));
   allpoints.push(new PMPoint(1.74549, -0.0689311, 0));
   allpoints.push(new PMPoint(1.41468, 2.15323, 0));
   allpoints.push(new PMPoint(0.393718, 3.46118, 0));
   allpoints.push(new PMPoint(0.0972155, 2.85292, 0));
   allpoints.push(new PMPoint(1.77307, 0.175636, 0));
   allpoints.push(new PMPoint(2.16748, 0.952485, 0));
   allpoints.push(new PMPoint(1.63878, 1.77386, 0));
   allpoints.push(new PMPoint(1.11153, -1.31476, 0));
   allpoints.push(new PMPoint(1.77575, -1.5828, 0));
   allpoints.push(new PMPoint(1.93913, -1.38009, 0));
   allpoints.push(new PMPoint(1.73138, -1.08872, 0));
   allpoints.push(new PMPoint(0.102383, -1.77848, 0));
   allpoints.push(new PMPoint(0.473014, -1.70761, 0));
   allpoints.push(new PMPoint(0.543293, -1.74347, 0));
   allpoints.push(new PMPoint(0.714147, -1.72212, 0));
   allpoints.push(new PMPoint(0.99308, -1.36323, 0));
   allpoints.push(new PMPoint(-1.61937, 2.96517, 0));
   allpoints.push(new PMPoint(-2.19823, 3.42413, 0));
   allpoints.push(new PMPoint(-2.3887, 2.75152, 0));
   allpoints.push(new PMPoint(-2.33788, 2.58701, 0));
   allpoints.push(new PMPoint(-2.14775, 2.26106, 0));
   allpoints.push(new PMPoint(-1.44148, 2.91955, 0));
   allpoints.push(new PMPoint(-1.55276, 2.92822, 0));
   allpoints.push(new PMPoint(2.53989, -0.270891, 0));
   allpoints.push(new PMPoint(2.46372, 0.424225, 0));
   allpoints.push(new PMPoint(1.41911, 3.13005, 0));
   allpoints.push(new PMPoint(1.34631, 3.82553, 0));
   allpoints.push(new PMPoint(1.1168, 3.94846, 0));
   allpoints.push(new PMPoint(1.01065, 3.94477, 0));
   allpoints.push(new PMPoint(0.373494, 3.57095, 0));
   allpoints.push(new PMPoint(1.03005, -1.76194, 0));
   allpoints.push(new PMPoint(1.72373, -1.6754, 0));

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
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 0, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 45, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 47, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 9, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 8, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 40, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 30, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 25, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 32, 33, undefined, undefined, 0));


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
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
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
