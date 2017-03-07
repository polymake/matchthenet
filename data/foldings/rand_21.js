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

   var axes = [[23,22],
      [19,18],
      [16,15],
      [17,16],
      [11,10],
      [7,6],
      [8,7],
      [2,1],
      [3,2],
      [4,3],
      [5,4],
      [0,5],
      [1,0]];

   var angles = [1.48226370971553,
      2.22858410116491,
      2.24585949023968,
      2.35511181440128,
      0.850934854986403,
      2.55994246573442,
      2.44998313784869,
      1.71549888469503,
      2.06612897692243,
      2.30845992776563,
      2.38989788054232,
      2.61007907492126,
      1.01739871959023];

   var subtrees = [[43,44,45],
      [41,42],
      [37,38,39,40],
      [34,35,36],
      [30,31,32,33],
      [28,29],
      [25,26,27],
      [21,22,23,24,43,44,45],
      [18,19,20,41,42],
      [15,16,17,34,35,36,37,38,39,40],
      [13,14],
      [9,10,11,12,30,31,32,33],
      [6,7,8,25,26,27,28,29]];

   var polytoperoot = [[-0.404820870767902,1.28822968502156,-1.59974745214969],
      [-2.81250563980109,0.651250491181093,0.611047197452766],
      [0.0108772784820562,-1.53650725051164,1.68766588403378]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.773452, 0, 0));
   allpoints.push(new PMPoint(0.0524253, 1.85783, 0));
   allpoints.push(new PMPoint(-0.175161, 2.03661, 0));
   allpoints.push(new PMPoint(-0.199214, 2.02982, 0));
   allpoints.push(new PMPoint(-0.638495, 1.82103, 0));
   allpoints.push(new PMPoint(-1.20552, -0.701859, 0));
   allpoints.push(new PMPoint(-0.570664, -1.29304, 0));
   allpoints.push(new PMPoint(0.724486, -0.689684, 0));
   allpoints.push(new PMPoint(-1.34303, 1.88338, 0));
   allpoints.push(new PMPoint(-1.84283, 1.6874, 0));
   allpoints.push(new PMPoint(-2.0873, 1.13195, 0));
   allpoints.push(new PMPoint(-1.35889, 0.315107, 0));
   allpoints.push(new PMPoint(-0.570651, 2.27934, 0));
   allpoints.push(new PMPoint(-1.31447, 2.02916, 0));
   allpoints.push(new PMPoint(-0.277934, 2.40715, 0));
   allpoints.push(new PMPoint(-0.298092, 2.4027, 0));
   allpoints.push(new PMPoint(-0.557722, 2.29759, 0));
   allpoints.push(new PMPoint(0.139771, 2.3913, 0));
   allpoints.push(new PMPoint(-0.0989821, 2.43605, 0));
   allpoints.push(new PMPoint(-0.138902, 2.41942, 0));
   allpoints.push(new PMPoint(1.19755, 0.546081, 0));
   allpoints.push(new PMPoint(1.2969, 1.9875, 0));
   allpoints.push(new PMPoint(1.01131, 2.24346, 0));
   allpoints.push(new PMPoint(0.322168, 2.32629, 0));
   allpoints.push(new PMPoint(-0.661276, -1.74584, 0));
   allpoints.push(new PMPoint(-0.57087, -1.79271, 0));
   allpoints.push(new PMPoint(0.447222, -2.10767, 0));
   allpoints.push(new PMPoint(-2.00201, -1.45247, 0));
   allpoints.push(new PMPoint(-0.745808, -1.72031, 0));
   allpoints.push(new PMPoint(-2.45443, 2.5923, 0));
   allpoints.push(new PMPoint(-2.60025, 2.74238, 0));
   allpoints.push(new PMPoint(-3.24991, 1.83004, 0));
   allpoints.push(new PMPoint(-3.22307, 1.73181, 0));
   allpoints.push(new PMPoint(-0.868425, 2.73289, 0));
   allpoints.push(new PMPoint(-1.84614, 2.24608, 0));
   allpoints.push(new PMPoint(-1.3232, 2.12465, 0));
   allpoints.push(new PMPoint(-0.260309, 2.44664, 0));
   allpoints.push(new PMPoint(-0.603693, 2.88504, 0));
   allpoints.push(new PMPoint(-0.666658, 2.86631, 0));
   allpoints.push(new PMPoint(-0.849216, 2.76404, 0));
   allpoints.push(new PMPoint(0.732231, 2.75291, 0));
   allpoints.push(new PMPoint(0.0919044, 2.95919, 0));
   allpoints.push(new PMPoint(2.05478, 2.73672, 0));
   allpoints.push(new PMPoint(0.95884, 2.96768, 0));
   allpoints.push(new PMPoint(0.926035, 2.91077, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 7, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 29, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 42, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 40, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 23, 24, undefined, undefined, 0));


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
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[23].vector);
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
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
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
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
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
