// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'poly' + divNumber );
var renderer = renderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.appendChild(renderer.domElement);

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
controls.noZoom = controlsNoZoom;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(-0.621403, -0.727489, 0.571747));
   allpoints.push(new PMPoint(-0.747033, -0.164254, 0.839659));
   allpoints.push(new PMPoint(-0.629038, -0.750323, 0.652615));
   allpoints.push(new PMPoint(-0.656323, 0.2718, 0.344908));
   allpoints.push(new PMPoint(-0.159255, 0.449734, -0.406897));
   allpoints.push(new PMPoint(-0.411586, 0.470903, 0.203892));
   allpoints.push(new PMPoint(0.141208, -0.856536, -0.993143));
   allpoints.push(new PMPoint(-0.199399, -1.12113, 0.576623));
   allpoints.push(new PMPoint(0.252825, 0.686751, 0.30902));
   allpoints.push(new PMPoint(0.407237, 0.338573, -0.511715));
   allpoints.push(new PMPoint(0.636172, -0.749171, -0.997728));
   allpoints.push(new PMPoint(1.22855, -0.739259, -0.0291026));
   allpoints.push(new PMPoint(0.67644, 0.283308, -0.0514207));
   allpoints.push(new PMPoint(0.640888, 0.263029, -0.192288));
   allpoints.push(new PMPoint(1.20991, 0.0144665, 1.13447));
   allpoints.push(new PMPoint(1.55779, -0.781655, 0.902768));
   allpoints.push(new PMPoint(0.256049, 0.642042, 0.0208572));
   allpoints.push(new PMPoint(0.184999, 0.55446, -0.397301));
   allpoints.push(new PMPoint(0.862201, 0.311262, 1.19484));
   allpoints.push(new PMPoint(0.513325, 0.529941, 0.713101));
   allpoints.push(new PMPoint(-0.326465, -0.496538, -0.792496));
   allpoints.push(new PMPoint(-0.191418, 0.407371, -0.421654));
   allpoints.push(new PMPoint(-0.439701, -0.291174, -0.693627));
   allpoints.push(new PMPoint(-0.438197, -0.195687, -0.653156));
   allpoints.push(new PMPoint(-0.573265, 0.169683, -0.0516902));
   allpoints.push(new PMPoint(-0.693531, 0.239898, 0.362994));
   allpoints.push(new PMPoint(-0.742213, 0.134084, 0.467253));
   allpoints.push(new PMPoint(-0.582565, -0.267164, -0.229168));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(7, 6, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 11, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 7, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 2, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 11, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 12, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 3, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 19, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 21, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 25, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 3, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 9, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 5, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 8, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 17, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 16, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 12, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 16, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 8, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 19, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 14, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 18, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 1, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 19, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 3, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 25, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 22, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 27, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 26, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 25, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 6, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 20, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 23, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 21, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 4, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 17, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 20, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 0, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 27, 0, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
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



   polytopeObjects[divNumber] = obj;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
