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
      [27,26],
      [19,18],
      [18,17],
      [15,14],
      [11,10],
      [8,7],
      [5,4],
      [6,5],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.56710908815514,
      2.40611982189509,
      2.22466651596141,
      2.84316907961655,
      3.02912279411539,
      1.84969981438765,
      2.27071087534333,
      1.74158723805192,
      1.53320949596549,
      1.97956143651506,
      1.54255139276509,
      2.64352422562918,
      2.33474201018333];

   var subtrees = [[45],
      [42,43,44],
      [37,38,39,40,41],
      [36],
      [32,33,34,35,45],
      [29,30,31],
      [25,26,27,28,42,43,44],
      [21,22,23,24],
      [17,18,19,20,36,37,38,39,40,41],
      [13,14,15,16,32,33,34,35,45],
      [9,10,11,12,29,30,31],
      [7,8,25,26,27,28,42,43,44],
      [4,5,6,17,18,19,20,21,22,23,24,36,37,38,39,40,41]];

   var polytoperoot = [[-0.634770072804316,-0.507422436527794,-0.437536200327285],
      [-0.717120392391061,-1.19742934831135,0.143551736131964],
      [0.949172389512118,-0.307744364837064,2.17460791901106]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.70522, 0, 0));
   allpoints.push(new PMPoint(1.38363, 1.19864, 0));
   allpoints.push(new PMPoint(0.00653125, 0.110958, 0));
   allpoints.push(new PMPoint(-0.173826, -0.490958, 0));
   allpoints.push(new PMPoint(0.967033, -0.97027, 0));
   allpoints.push(new PMPoint(1.8761, -1.03892, 0));
   allpoints.push(new PMPoint(1.34298, 1.32133, 0));
   allpoints.push(new PMPoint(-0.151905, 0.888766, 0));
   allpoints.push(new PMPoint(2.62145, -0.518725, 0));
   allpoints.push(new PMPoint(3.24546, 0.851581, 0));
   allpoints.push(new PMPoint(1.66301, 1.46026, 0));
   allpoints.push(new PMPoint(1.40978, 1.32521, 0));
   allpoints.push(new PMPoint(-0.320436, 0.83427, 0));
   allpoints.push(new PMPoint(-0.463606, 0.850605, 0));
   allpoints.push(new PMPoint(-0.705318, -0.0520266, 0));
   allpoints.push(new PMPoint(-0.406213, -0.325954, 0));
   allpoints.push(new PMPoint(0.522171, -1.54785, 0));
   allpoints.push(new PMPoint(0.300135, -2.22993, 0));
   allpoints.push(new PMPoint(0.411341, -2.43973, 0));
   allpoints.push(new PMPoint(1.43417, -2.47831, 0));
   allpoints.push(new PMPoint(-0.410734, -0.820161, 0));
   allpoints.push(new PMPoint(-0.501756, -0.978042, 0));
   allpoints.push(new PMPoint(-0.338173, -1.27285, 0));
   allpoints.push(new PMPoint(0.371096, -1.39023, 0));
   allpoints.push(new PMPoint(1.21265, 1.57701, 0));
   allpoints.push(new PMPoint(-0.117669, 1.53537, 0));
   allpoints.push(new PMPoint(-0.328647, 1.07558, 0));
   allpoints.push(new PMPoint(-0.256605, 0.987774, 0));
   allpoints.push(new PMPoint(3.41468, 1.86106, 0));
   allpoints.push(new PMPoint(3.01012, 2.39749, 0));
   allpoints.push(new PMPoint(2.54901, 2.45347, 0));
   allpoints.push(new PMPoint(-0.575498, 0.870098, 0));
   allpoints.push(new PMPoint(-0.653681, 0.805377, 0));
   allpoints.push(new PMPoint(-0.844569, 0.12755, 0));
   allpoints.push(new PMPoint(-0.841201, 0.0694103, 0));
   allpoints.push(new PMPoint(-0.18806, -1.65927, 0));
   allpoints.push(new PMPoint(-0.24329, -1.71159, 0));
   allpoints.push(new PMPoint(-0.522207, -1.52217, 0));
   allpoints.push(new PMPoint(-0.540324, -1.57752, 0));
   allpoints.push(new PMPoint(-0.524241, -2.21714, 0));
   allpoints.push(new PMPoint(-0.259518, -2.47687, 0));
   allpoints.push(new PMPoint(-0.497089, 1.80332, 0));
   allpoints.push(new PMPoint(-0.61189, 1.45067, 0));
   allpoints.push(new PMPoint(-0.422436, 1.11437, 0));
   allpoints.push(new PMPoint(-1.03388, 0.738733, 0));

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

   faces.faces.push(new THREE.Face3(20, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 5, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 0, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 28, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 34, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 24, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 33, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 44, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));


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
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
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
