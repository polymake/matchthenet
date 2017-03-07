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
      [14,13],
      [13,12],
      [10,9],
      [8,7],
      [6,5],
      [5,4],
      [0,6],
      [2,1],
      [4,3],
      [3,2],
      [1,0]];

   var angles = [3.0452572159231,
      3.00597979319367,
      1.32049096591582,
      1.48796821724435,
      1.01101856027228,
      2.28221758590594,
      2.32682765660382,
      2.17777425798644,
      1.65170007181775,
      1.98014460495314,
      2.30358302918431,
      2.03644763982394];

   var subtrees = [[40,41],
      [37,38,39],
      [34,35,36],
      [32,33],
      [27,28,29,30,31],
      [24,25,26],
      [21,22,23,40,41],
      [19,20],
      [15,16,17,18],
      [11,12,13,14,34,35,36,37,38,39],
      [9,10,32,33],
      [7,8,27,28,29,30,31]];

   var polytoperoot = [[-0.413194777341521,-0.178759335395652,-0.0452894229176765],
      [-1.60806623026019,-1.36852951839345,-2.00748870271855],
      [0.0722814700180894,0.65161242968424,-0.502112033915606]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.283433, 0, 0));
   allpoints.push(new PMPoint(0.41595, 0.0711747, 0));
   allpoints.push(new PMPoint(0.0222494, 0.827701, 0));
   allpoints.push(new PMPoint(-0.271678, 0.757154, 0));
   allpoints.push(new PMPoint(-0.355666, 0.223138, 0));
   allpoints.push(new PMPoint(-0.267206, 0.0635563, 0));
   allpoints.push(new PMPoint(-0.899512, -1.13323, 0));
   allpoints.push(new PMPoint(-0.617948, -1.31999, 0));
   allpoints.push(new PMPoint(1.10487, 0.385742, 0));
   allpoints.push(new PMPoint(1.31682, 1.79957, 0));
   allpoints.push(new PMPoint(0.666019, 2.31296, 0));
   allpoints.push(new PMPoint(0.58391, 2.38622, 0));
   allpoints.push(new PMPoint(0.523982, 2.36318, 0));
   allpoints.push(new PMPoint(-0.467759, 0.915103, 0));
   allpoints.push(new PMPoint(-0.103286, -1.55091, 0));
   allpoints.push(new PMPoint(0.347798, -1.5015, 0));
   allpoints.push(new PMPoint(0.457107, -1.45446, 0));
   allpoints.push(new PMPoint(1.12807, -0.18659, 0));
   allpoints.push(new PMPoint(-1.0573, -0.983639, 0));
   allpoints.push(new PMPoint(-1.02206, -1.02407, 0));
   allpoints.push(new PMPoint(-0.517709, 0.810672, 0));
   allpoints.push(new PMPoint(-0.536684, 0.811704, 0));
   allpoints.push(new PMPoint(-0.579744, 0.226915, 0));
   allpoints.push(new PMPoint(-0.575627, 0.180214, 0));
   allpoints.push(new PMPoint(-1.39413, -0.159192, 0));
   allpoints.push(new PMPoint(-1.3334, -0.700697, 0));
   allpoints.push(new PMPoint(-0.950806, -1.11759, 0));
   allpoints.push(new PMPoint(-1.45575, -1.32241, 0));
   allpoints.push(new PMPoint(-1.99031, -1.9602, 0));
   allpoints.push(new PMPoint(-1.66296, -3.0111, 0));
   allpoints.push(new PMPoint(-0.483576, -1.75342, 0));
   allpoints.push(new PMPoint(2.4843, -0.00776218, 0));
   allpoints.push(new PMPoint(1.41869, 1.84116, 0));
   allpoints.push(new PMPoint(-1.30269, 3.3836, 0));
   allpoints.push(new PMPoint(-1.42003, 3.36376, 0));
   allpoints.push(new PMPoint(-0.197168, 2.14832, 0));
   allpoints.push(new PMPoint(-0.17424, 2.08263, 0));
   allpoints.push(new PMPoint(-1.03576, 1.39755, 0));
   allpoints.push(new PMPoint(-0.483514, 0.925727, 0));
   allpoints.push(new PMPoint(-1.25826, 0.894923, 0));
   allpoints.push(new PMPoint(-1.45459, 0.0862242, 0));

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
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 33, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 36, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 13, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 7, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 25, 26, undefined, undefined, 0));


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
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[6].vector);
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
