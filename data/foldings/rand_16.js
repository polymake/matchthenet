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

   var axes = [[24,23],
      [19,18],
      [18,17],
      [15,14],
      [8,7],
      [9,8],
      [6,5],
      [0,4],
      [4,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.39990912121351,
      1.84208854254527,
      1.71987114392662,
      2.48267997877059,
      1.34196407275405,
      1.71628467205612,
      1.46609122075164,
      2.42727999770223,
      2.03816869752063,
      1.3716767053542,
      1.82631703039489,
      2.66829548842572];

   var subtrees = [[40,41],
      [39],
      [35,36,37,38],
      [33,34],
      [30,31,32],
      [26,27,28,29],
      [21,22,23,24,25,40,41],
      [16,17,18,19,20,35,36,37,38,39],
      [13,14,15,33,34],
      [10,11,12],
      [7,8,9,26,27,28,29,30,31,32],
      [5,6,21,22,23,24,25,40,41]];

   var polytoperoot = [[0.192769328357159,0.92240756918365,-0.029692552018722],
      [0.0102629143946132,1.1030334509532,0.654197029766188],
      [0.106394792696526,-0.712017726735321,1.19885510622318]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.09039, 0, 0));
   allpoints.push(new PMPoint(0.958134, 0.710979, 0));
   allpoints.push(new PMPoint(0.259664, 0.773817, 0));
   allpoints.push(new PMPoint(-0.408201, 0.318601, 0));
   allpoints.push(new PMPoint(0.255627, -0.893958, 0));
   allpoints.push(new PMPoint(1.14267, -0.726051, 0));
   allpoints.push(new PMPoint(0.676817, 2.27954, 0));
   allpoints.push(new PMPoint(0.653774, 2.31417, 0));
   allpoints.push(new PMPoint(-0.0866648, 1.74477, 0));
   allpoints.push(new PMPoint(1.54026, -0.572277, 0));
   allpoints.push(new PMPoint(1.76525, -0.367473, 0));
   allpoints.push(new PMPoint(2.36046, 1.46794, 0));
   allpoints.push(new PMPoint(-0.463258, 1.50871, 0));
   allpoints.push(new PMPoint(-0.506717, 1.45013, 0));
   allpoints.push(new PMPoint(-0.47909, 0.324728, 0));
   allpoints.push(new PMPoint(-0.474389, 0.292487, 0));
   allpoints.push(new PMPoint(-0.793327, -0.257201, 0));
   allpoints.push(new PMPoint(-0.760868, -0.301038, 0));
   allpoints.push(new PMPoint(-0.0903597, -0.927779, 0));
   allpoints.push(new PMPoint(0.162069, -0.915554, 0));
   allpoints.push(new PMPoint(0.049716, -1.04049, 0));
   allpoints.push(new PMPoint(0.245215, -1.99474, 0));
   allpoints.push(new PMPoint(0.283621, -2.08468, 0));
   allpoints.push(new PMPoint(0.818654, -1.71808, 0));
   allpoints.push(new PMPoint(1.12364, -1.0297, 0));
   allpoints.push(new PMPoint(0.643505, 2.32278, 0));
   allpoints.push(new PMPoint(-0.447326, 2.82353, 0));
   allpoints.push(new PMPoint(-0.869891, 2.20438, 0));
   allpoints.push(new PMPoint(-0.159595, 1.74604, 0));
   allpoints.push(new PMPoint(2.56107, 1.86407, 0));
   allpoints.push(new PMPoint(2.07882, 2.44228, 0));
   allpoints.push(new PMPoint(0.663903, 2.32294, 0));
   allpoints.push(new PMPoint(-1.18848, 0.950333, 0));
   allpoints.push(new PMPoint(-1.11415, 0.300704, 0));
   allpoints.push(new PMPoint(-1.37072, -0.564059, 0));
   allpoints.push(new PMPoint(-1.50542, -1.30146, 0));
   allpoints.push(new PMPoint(-1.18889, -1.39645, 0));
   allpoints.push(new PMPoint(-1.10178, -1.35199, 0));
   allpoints.push(new PMPoint(-0.947796, -1.38997, 0));
   allpoints.push(new PMPoint(0.306151, -2.41439, 0));
   allpoints.push(new PMPoint(1.32843, -3.04337, 0));

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

   faces.faces.push(new THREE.Face3(9, 8, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 32, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 0, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 35, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 37, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 23, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 33, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 5, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 19, 20, undefined, undefined, 0));


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
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
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
