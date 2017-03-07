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

   var axes = [[27,26],
      [18,17],
      [19,18],
      [11,10],
      [12,11],
      [10,9],
      [7,6],
      [8,7],
      [4,3],
      [3,2],
      [2,1],
      [0,5],
      [5,4],
      [1,0]];

   var angles = [1.44692326695147,
      2.62876489421204,
      2.70224852381827,
      2.48630917029956,
      2.44003181058457,
      2.54370282191108,
      0.767476115200593,
      0.761238296923438,
      1.99953150317113,
      1.72050417728165,
      1.37232523309485,
      2.40763927587876,
      2.09019651139716,
      2.51730405730837];

   var subtrees = [[46,47,48,49],
      [42,43,44,45],
      [40,41],
      [38,39],
      [35,36,37],
      [32,33,34],
      [29,30,31],
      [26,27,28,46,47,48,49],
      [22,23,24,25],
      [20,21],
      [16,17,18,19,40,41,42,43,44,45],
      [13,14,15],
      [9,10,11,12,32,33,34,35,36,37,38,39],
      [6,7,8,26,27,28,29,30,31,46,47,48,49]];

   var polytoperoot = [[1.06324019889187,0.377480792443404,0.567538263581926],
      [0.231272210127091,-0.895592232322109,1.92440056460045],
      [-1.60445456704894,-1.31575101052555,-0.419512780123482]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.991472, 0, 0));
   allpoints.push(new PMPoint(0.975321, 0.124688, 0));
   allpoints.push(new PMPoint(0.55093, 1.05791, 0));
   allpoints.push(new PMPoint(0.258557, 1.14055, 0));
   allpoints.push(new PMPoint(0.0404287, 1.03226, 0));
   allpoints.push(new PMPoint(-0.83762, -1.23133, 0));
   allpoints.push(new PMPoint(0.309637, -3.20502, 0));
   allpoints.push(new PMPoint(0.965026, -1.96741, 0));
   allpoints.push(new PMPoint(0.0682728, 1.56939, 0));
   allpoints.push(new PMPoint(-0.124559, 1.48287, 0));
   allpoints.push(new PMPoint(-0.175958, 1.31072, 0));
   allpoints.push(new PMPoint(-0.0698071, 1.08148, 0));
   allpoints.push(new PMPoint(-0.0800007, 1.0407, 0));
   allpoints.push(new PMPoint(-0.991183, -0.203041, 0));
   allpoints.push(new PMPoint(-1.11407, -0.988248, 0));
   allpoints.push(new PMPoint(2.3577, -1.41593, 0));
   allpoints.push(new PMPoint(1.73446, 0.964191, 0));
   allpoints.push(new PMPoint(1.55718, 0.969652, 0));
   allpoints.push(new PMPoint(1.44995, 0.835381, 0));
   allpoints.push(new PMPoint(1.21428, 0.945209, 0));
   allpoints.push(new PMPoint(0.800421, 1.34934, 0));
   allpoints.push(new PMPoint(0.591163, 1.43944, 0));
   allpoints.push(new PMPoint(0.595185, 1.51696, 0));
   allpoints.push(new PMPoint(0.446082, 1.80263, 0));
   allpoints.push(new PMPoint(0.244342, 1.60949, 0));
   allpoints.push(new PMPoint(3.91615, -1.56979, 0));
   allpoints.push(new PMPoint(3.94146, -1.52334, 0));
   allpoints.push(new PMPoint(3.29857, -1.18772, 0));
   allpoints.push(new PMPoint(-1.61523, -1.0671, 0));
   allpoints.push(new PMPoint(-2.60677, -1.10109, 0));
   allpoints.push(new PMPoint(-3.35116, -1.69522, 0));
   allpoints.push(new PMPoint(0.126551, 1.84252, 0));
   allpoints.push(new PMPoint(-0.175183, 2.204, 0));
   allpoints.push(new PMPoint(-0.196045, 1.57297, 0));
   allpoints.push(new PMPoint(-0.774024, 1.28087, 0));
   allpoints.push(new PMPoint(-0.864251, 1.25877, 0));
   allpoints.push(new PMPoint(-1.49479, 0.492794, 0));
   allpoints.push(new PMPoint(-0.208565, 1.56143, 0));
   allpoints.push(new PMPoint(-0.771745, 1.37082, 0));
   allpoints.push(new PMPoint(1.24586, 1.39028, 0));
   allpoints.push(new PMPoint(1.18105, 1.34753, 0));
   allpoints.push(new PMPoint(1.99653, 1.6404, 0));
   allpoints.push(new PMPoint(1.97371, 1.64751, 0));
   allpoints.push(new PMPoint(1.50289, 1.65419, 0));
   allpoints.push(new PMPoint(1.28513, 1.41668, 0));
   allpoints.push(new PMPoint(4.38585, -2.39833, 0));
   allpoints.push(new PMPoint(4.42896, -2.31605, 0));
   allpoints.push(new PMPoint(4.55563, -1.73513, 0));
   allpoints.push(new PMPoint(3.96387, -1.51504, 0));

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

   faces.faces.push(new THREE.Face3(28, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 7, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 31, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 34, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 46, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 48, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 24, 25, undefined, undefined, 0));


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
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
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
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
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
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
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
