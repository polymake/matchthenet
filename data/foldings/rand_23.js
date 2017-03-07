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

   var axes = [[30,29],
      [23,22],
      [16,15],
      [14,13],
      [11,10],
      [10,9],
      [7,6],
      [6,5],
      [4,3],
      [0,4],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [1.9024524358838,
      2.99737405334949,
      2.65433169352835,
      2.48750074653667,
      2.79545234035265,
      1.82108110498668,
      1.7209330210288,
      1.87989534560743,
      1.6144131354519,
      1.80413177847237,
      0.712560306018757,
      0.810911486069044,
      2.87239284966517];

   var subtrees = [[43,44,45],
      [41,42],
      [37,38,39,40],
      [34,35,36],
      [31,32,33],
      [27,28,29,30,43,44,45],
      [25,26],
      [21,22,23,24,41,42],
      [18,19,20],
      [15,16,17,37,38,39,40],
      [12,13,14,34,35,36],
      [8,9,10,11,27,28,29,30,31,32,33,43,44,45],
      [5,6,7,21,22,23,24,25,26,41,42]];

   var polytoperoot = [[-0.634527792251896,0.219803931164132,0.339002894842749],
      [-0.982894509918091,0.180028357225007,0.993369617455022],
      [-0.669664011345187,2.65167283725773,-1.14316500633462]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(2.10378, 0, 0));
   allpoints.push(new PMPoint(2.06935, 1.53927, 0));
   allpoints.push(new PMPoint(0.893203, 1.65962, 0));
   allpoints.push(new PMPoint(0.458376, 0.969598, 0));
   allpoints.push(new PMPoint(-0.0979913, -0.186423, 0));
   allpoints.push(new PMPoint(0.249237, -0.713664, 0));
   allpoints.push(new PMPoint(1.99393, -0.475091, 0));
   allpoints.push(new PMPoint(2.28823, -0.451397, 0));
   allpoints.push(new PMPoint(3.67692, -0.410117, 0));
   allpoints.push(new PMPoint(3.92277, -0.294588, 0));
   allpoints.push(new PMPoint(3.01259, 0.855629, 0));
   allpoints.push(new PMPoint(1.63017, 2.61824, 0));
   allpoints.push(new PMPoint(1.0296, 3.61005, 0));
   allpoints.push(new PMPoint(0.418178, 3.28335, 0));
   allpoints.push(new PMPoint(-0.613841, 0.301332, 0));
   allpoints.push(new PMPoint(-0.444143, -0.0337324, 0));
   allpoints.push(new PMPoint(-0.133411, -0.162964, 0));
   allpoints.push(new PMPoint(-0.69171, 1.06786, 0));
   allpoints.push(new PMPoint(-0.926296, 0.669681, 0));
   allpoints.push(new PMPoint(-0.677387, 0.416182, 0));
   allpoints.push(new PMPoint(-0.370451, -0.383961, 0));
   allpoints.push(new PMPoint(-0.399584, -0.441281, 0));
   allpoints.push(new PMPoint(-0.36589, -1.00596, 0));
   allpoints.push(new PMPoint(-0.135805, -0.975122, 0));
   allpoints.push(new PMPoint(0.186284, -1.17481, 0));
   allpoints.push(new PMPoint(1.14974, -1.5785, 0));
   allpoints.push(new PMPoint(4.2758, -1.26602, 0));
   allpoints.push(new PMPoint(4.46113, -1.12622, 0));
   allpoints.push(new PMPoint(4.69889, -0.87564, 0));
   allpoints.push(new PMPoint(4.0695, -0.280135, 0));
   allpoints.push(new PMPoint(4.06027, -0.241368, 0));
   allpoints.push(new PMPoint(4.03062, 0.208287, 0));
   allpoints.push(new PMPoint(4.02215, 0.285407, 0));
   allpoints.push(new PMPoint(1.04397, 3.68629, 0));
   allpoints.push(new PMPoint(0.210218, 3.86442, 0));
   allpoints.push(new PMPoint(0.200593, 3.69107, 0));
   allpoints.push(new PMPoint(-0.899855, 0.512077, 0));
   allpoints.push(new PMPoint(-0.994435, 0.366483, 0));
   allpoints.push(new PMPoint(-1.14663, 0.113144, 0));
   allpoints.push(new PMPoint(-0.508179, -0.0279256, 0));
   allpoints.push(new PMPoint(-0.752394, -0.991773, 0));
   allpoints.push(new PMPoint(-0.703296, -1.07999, 0));
   allpoints.push(new PMPoint(4.79467, -0.843709, 0));
   allpoints.push(new PMPoint(4.97724, -0.611309, 0));
   allpoints.push(new PMPoint(4.40501, 0.0206983, 0));

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

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 24, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 29, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 43, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 44, 45, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 39, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 40, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(42, 23, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(42, 22, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 6, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 0));


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
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[10].vector);
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
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
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
