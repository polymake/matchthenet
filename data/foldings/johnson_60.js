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

   var axes = [[14,33],
      [24,8],
      [19,7],
      [16,5],
      [18,17],
      [4,14],
      [14,13],
      [11,10],
      [10,9],
      [2,8],
      [5,0],
      [7,6],
      [1,7],
      [6,5],
      [0,4],
      [4,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.68680207558007,
      2.41186499736283,
      2.41186499736283,
      2.68680207558007,
      2.0344439357957,
      2.68680207558007,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.41186499736283,
      2.68680207558007,
      2.0344439357957,
      2.68680207558007,
      2.0344439357957,
      2.68680207558007,
      2.0344439357957,
      2.0344439357957,
      2.68680207558007,
      2.0344439357957];

   var subtrees = [[41],
      [40],
      [39],
      [38],
      [35,36,37],
      [34],
      [31,32,33,41],
      [28,29,30],
      [25,26,27],
      [24,40],
      [23],
      [20,21,22],
      [19,39],
      [16,17,18,35,36,37,38],
      [15],
      [12,13,14,31,32,33,34,41],
      [9,10,11,25,26,27,28,29,30],
      [8,24,40],
      [5,6,7,16,17,18,19,20,21,22,23,35,36,37,38,39]];

   var polytoperoot = [[0.876834574727463,0.0170421786913263,0.324388359361242],
      [1.61803398874989,-1,0],
      [-0.217525210331389,-0.351963183726158,-1.27341476150986]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.703926, 0, 0));
   allpoints.push(new PMPoint(0.921452, 0.669474, 0));
   allpoints.push(new PMPoint(0.351963, 1.08323, 0));
   allpoints.push(new PMPoint(-0.217525, 0.669474, 0));
   allpoints.push(new PMPoint(-0.217525, -0.669474, 0));
   allpoints.push(new PMPoint(0.351963, -1.08323, 0));
   allpoints.push(new PMPoint(0.921452, -0.669474, 0));
   allpoints.push(new PMPoint(1.39247, 0.146355, 0));
   allpoints.push(new PMPoint(1.49094, 1.08323, 0));
   allpoints.push(new PMPoint(1.27341, 1.75271, 0));
   allpoints.push(new PMPoint(0.569488, 1.75271, 0));
   allpoints.push(new PMPoint(0.134438, 1.75271, 0));
   allpoints.push(new PMPoint(-0.569488, 1.75271, 0));
   allpoints.push(new PMPoint(-0.787014, 1.08323, 0));
   allpoints.push(new PMPoint(-0.688544, 0.146355, 0));
   allpoints.push(new PMPoint(-0.787014, -1.08323, 0));
   allpoints.push(new PMPoint(-0.569488, -1.75271, 0));
   allpoints.push(new PMPoint(0.134438, -1.75271, 0));
   allpoints.push(new PMPoint(1.39247, -0.146355, 0));
   allpoints.push(new PMPoint(0.569488, -1.75271, 0));
   allpoints.push(new PMPoint(1.27341, -1.75271, 0));
   allpoints.push(new PMPoint(1.49094, -1.08323, 0));
   allpoints.push(new PMPoint(-0.688544, -0.146355, 0));
   allpoints.push(new PMPoint(1.61, 0.815828, 0));
   allpoints.push(new PMPoint(2.19487, 1.08323, 0));
   allpoints.push(new PMPoint(2.41239, 1.75271, 0));
   allpoints.push(new PMPoint(1.8429, 2.16646, 0));
   allpoints.push(new PMPoint(1.49094, 2.42218, 0));
   allpoints.push(new PMPoint(0.921452, 2.83594, 0));
   allpoints.push(new PMPoint(0.351963, 2.42218, 0));
   allpoints.push(new PMPoint(-1.13898, 2.16646, 0));
   allpoints.push(new PMPoint(-1.70847, 1.75271, 0));
   allpoints.push(new PMPoint(-1.49094, 1.08323, 0));
   allpoints.push(new PMPoint(-0.860594, 0.383161, 0));
   allpoints.push(new PMPoint(-0.787014, -2.42218, 0));
   allpoints.push(new PMPoint(-0.217525, -2.83594, 0));
   allpoints.push(new PMPoint(0.351963, -2.42218, 0));
   allpoints.push(new PMPoint(-0.860594, -0.383161, 0));
   allpoints.push(new PMPoint(1.61, -0.815828, 0));
   allpoints.push(new PMPoint(2.08101, 0.292709, 0));
   allpoints.push(new PMPoint(-1.13898, 0.473613, 0));

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

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 18, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 6, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 1, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 22, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 6, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 7, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 8, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 37, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 18, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(36, 17, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 29, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 8, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 13, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 31, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 33, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 38, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 14, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 23, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 15, undefined, undefined, 0));


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
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[15].vector);
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
