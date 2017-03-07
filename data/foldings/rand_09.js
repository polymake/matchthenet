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

   var axes = [[20,19],
      [16,15],
      [13,12],
      [10,9],
      [8,7],
      [6,5],
      [7,6],
      [3,2],
      [0,4],
      [2,1],
      [4,3],
      [1,0]];

   var angles = [2.73937609274247,
      1.78044830002711,
      2.49113123988253,
      2.94445921490215,
      1.49238691065311,
      1.05338323368174,
      1.80811442063462,
      2.36671585014657,
      2.62351899768238,
      1.84822505937349,
      3.01701690042511,
      1.31506700992964];

   var subtrees = [[40,41],
      [36,37,38,39],
      [33,34,35],
      [30,31,32],
      [26,27,28,29],
      [23,24,25],
      [22],
      [18,19,20,21,40,41],
      [14,15,16,17,36,37,38,39],
      [11,12,13,33,34,35],
      [9,10,30,31,32],
      [5,6,7,8,22,23,24,25,26,27,28,29]];

   var polytoperoot = [[-0.186770046314314,1.3202803403193,-0.690873062421814],
      [-1.25490020541672,-0.359654801649912,-1.79550696344407],
      [-0.95710241454564,-1.40528102611797,0.950419085011897]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.877452, 0, 0));
   allpoints.push(new PMPoint(0.956731, 0.343886, 0));
   allpoints.push(new PMPoint(0.930271, 0.669203, 0));
   allpoints.push(new PMPoint(0.5427, 1.28109, 0));
   allpoints.push(new PMPoint(-2.43047, -1.3999, 0));
   allpoints.push(new PMPoint(-0.684771, -1.86245, 0));
   allpoints.push(new PMPoint(1.21538, -1.32038, 0));
   allpoints.push(new PMPoint(1.27259, -1.15859, 0));
   allpoints.push(new PMPoint(0.926607, 1.01027, 0));
   allpoints.push(new PMPoint(0.551957, 1.31805, 0));
   allpoints.push(new PMPoint(2.09723, 0.102956, 0));
   allpoints.push(new PMPoint(1.67413, 1.16885, 0));
   allpoints.push(new PMPoint(1.4629, 1.04664, 0));
   allpoints.push(new PMPoint(0.550939, 1.31829, 0));
   allpoints.push(new PMPoint(0.531415, 1.64393, 0));
   allpoints.push(new PMPoint(-0.415619, 1.89856, 0));
   allpoints.push(new PMPoint(-2.76094, 0.4941, 0));
   allpoints.push(new PMPoint(1.3568, 1.11201, 0));
   allpoints.push(new PMPoint(1.07986, 1.2202, 0));
   allpoints.push(new PMPoint(0.986641, 1.17891, 0));
   allpoints.push(new PMPoint(0.934499, 1.01026, 0));
   allpoints.push(new PMPoint(1.24221, -2.49552, 0));
   allpoints.push(new PMPoint(-1.00248, -3.73097, 0));
   allpoints.push(new PMPoint(0.443095, -3.7453, 0));
   allpoints.push(new PMPoint(0.516579, -3.4967, 0));
   allpoints.push(new PMPoint(2.13092, -2.05757, 0));
   allpoints.push(new PMPoint(2.38629, -2.013, 0));
   allpoints.push(new PMPoint(2.6427, -1.42898, 0));
   allpoints.push(new PMPoint(2.41904, -1.18686, 0));
   allpoints.push(new PMPoint(0.966063, 1.18233, 0));
   allpoints.push(new PMPoint(0.654115, 1.63151, 0));
   allpoints.push(new PMPoint(0.559545, 1.64419, 0));
   allpoints.push(new PMPoint(1.73153, 1.49343, 0));
   allpoints.push(new PMPoint(1.50716, 1.54063, 0));
   allpoints.push(new PMPoint(1.21615, 1.2125, 0));
   allpoints.push(new PMPoint(0.617224, 1.68566, 0));
   allpoints.push(new PMPoint(0.979213, 2.07579, 0));
   allpoints.push(new PMPoint(1.07774, 2.28282, 0));
   allpoints.push(new PMPoint(0.710886, 2.80458, 0));
   allpoints.push(new PMPoint(1.27853, 1.61121, 0));
   allpoints.push(new PMPoint(0.7498, 1.67184, 0));

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

   faces.faces.push(new THREE.Face3(7, 6, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 25, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 7, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 32, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 40, 41, undefined, undefined, 0));


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
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[16].vector);
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
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[20].vector);
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
