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

   var axes = [[19,18],
      [14,13],
      [12,11],
      [11,10],
      [13,12],
      [8,7],
      [7,6],
      [2,1],
      [0,5],
      [3,2],
      [4,3],
      [5,4],
      [1,0]];

   var angles = [2.60030174685203,
      2.20017731720778,
      2.86359077269999,
      2.33645669999625,
      2.23486702964128,
      0.982729492292557,
      0.747578773155847,
      2.68869421677763,
      1.15413781958312,
      2.6113864606409,
      2.2118696819964,
      1.41454790193753,
      2.24482388651437];

   var subtrees = [[42,43,44,45],
      [39,40,41],
      [37,38],
      [34,35,36],
      [32,33],
      [27,28,29,30,31],
      [25,26],
      [23,24],
      [20,21,22],
      [18,19,42,43,44,45],
      [15,16,17],
      [10,11,12,13,14,32,33,34,35,36,37,38,39,40,41],
      [6,7,8,9,25,26,27,28,29,30,31]];

   var polytoperoot = [[-0.297041708997215,-2.11948086019278,0.13670793498705],
      [-1.67779875528388,-0.224433071194639,0.18976361239173],
      [-0.266407632334193,0.310346478324219,-1.98840218052327]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.19179, 0, 0));
   allpoints.push(new PMPoint(2.06307, 0.221635, 0));
   allpoints.push(new PMPoint(1.9803, 0.63423, 0));
   allpoints.push(new PMPoint(1.25012, 0.97918, 0));
   allpoints.push(new PMPoint(1.02038, 0.934829, 0));
   allpoints.push(new PMPoint(-0.221818, -1.30962, 0));
   allpoints.push(new PMPoint(2.0168, -2.18349, 0));
   allpoints.push(new PMPoint(2.61952, -1.32575, 0));
   allpoints.push(new PMPoint(2.21709, -0.252595, 0));
   allpoints.push(new PMPoint(1.59657, 1.32966, 0));
   allpoints.push(new PMPoint(1.77696, 1.60869, 0));
   allpoints.push(new PMPoint(1.48862, 2.149, 0));
   allpoints.push(new PMPoint(1.47222, 2.15235, 0));
   allpoints.push(new PMPoint(1.44674, 2.15464, 0));
   allpoints.push(new PMPoint(2.59375, 0.777791, 0));
   allpoints.push(new PMPoint(2.65647, 0.830893, 0));
   allpoints.push(new PMPoint(1.71649, 1.13843, 0));
   allpoints.push(new PMPoint(2.22089, 0.116967, 0));
   allpoints.push(new PMPoint(2.61007, 0.652155, 0));
   allpoints.push(new PMPoint(0.546525, 2.13698, 0));
   allpoints.push(new PMPoint(0.344324, 2.10186, 0));
   allpoints.push(new PMPoint(-1.2836, 0.341575, 0));
   allpoints.push(new PMPoint(2.2283, -0.201722, 0));
   allpoints.push(new PMPoint(2.20668, 0.0981967, 0));
   allpoints.push(new PMPoint(0.362973, -3.63487, 0));
   allpoints.push(new PMPoint(0.997217, -3.52012, 0));
   allpoints.push(new PMPoint(3.69537, -2.09127, 0));
   allpoints.push(new PMPoint(3.90566, -1.94683, 0));
   allpoints.push(new PMPoint(4.32936, -1.55549, 0));
   allpoints.push(new PMPoint(4.35961, -1.38717, 0));
   allpoints.push(new PMPoint(4.1783, -1.04791, 0));
   allpoints.push(new PMPoint(2.15276, 2.22456, 0));
   allpoints.push(new PMPoint(1.77664, 2.66183, 0));
   allpoints.push(new PMPoint(2.56114, 1.5482, 0));
   allpoints.push(new PMPoint(2.68477, 1.82951, 0));
   allpoints.push(new PMPoint(2.34654, 2.01274, 0));
   allpoints.push(new PMPoint(2.30282, 2.0682, 0));
   allpoints.push(new PMPoint(2.15699, 2.15752, 0));
   allpoints.push(new PMPoint(1.75376, 2.67482, 0));
   allpoints.push(new PMPoint(1.60111, 2.87923, 0));
   allpoints.push(new PMPoint(1.30752, 2.30543, 0));
   allpoints.push(new PMPoint(2.3342, -0.161564, 0));
   allpoints.push(new PMPoint(3.24948, -0.851402, 0));
   allpoints.push(new PMPoint(2.99344, 0.711108, 0));
   allpoints.push(new PMPoint(2.68788, 0.678592, 0));

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

   faces.faces.push(new THREE.Face3(6, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 26, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 0, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 12, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 44, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 45, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 36, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 23, undefined, undefined, 0));
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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
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
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
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
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
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
