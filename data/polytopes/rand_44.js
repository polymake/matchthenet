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

   allpoints.push(new PMPoint(-0.0792188, 0.325619, 0.175377));
   allpoints.push(new PMPoint(-0.07968, 0.327562, 0.206929));
   allpoints.push(new PMPoint(-3.00155, -2.221, 4.494));
   allpoints.push(new PMPoint(-2.8392, -1.89794, 6.64506));
   allpoints.push(new PMPoint(-0.0459601, 0.229111, -0.0651488));
   allpoints.push(new PMPoint(-0.00667928, 0.28687, 0.0256857));
   allpoints.push(new PMPoint(0.115216, -0.371741, 0.0165066));
   allpoints.push(new PMPoint(0.0164698, -0.249607, -0.20839));
   allpoints.push(new PMPoint(0.0304022, -0.25741, -0.195795));
   allpoints.push(new PMPoint(0.183016, 0.202092, -0.0671578));
   allpoints.push(new PMPoint(0.406671, 0.119664, 0.139574));
   allpoints.push(new PMPoint(0.508007, -0.0528114, 0.355247));
   allpoints.push(new PMPoint(0.209707, 0.00184973, -0.160588));
   allpoints.push(new PMPoint(0.218602, -0.0944227, -0.120339));
   allpoints.push(new PMPoint(0.174237, -0.18666, -0.119141));
   allpoints.push(new PMPoint(0.292733, -0.237904, 0.0612978));
   allpoints.push(new PMPoint(0.319959, -0.216061, 0.0820116));
   allpoints.push(new PMPoint(0.217592, 0.0655368, -0.164066));
   allpoints.push(new PMPoint(0.286266, 0.158424, -0.0730238));
   allpoints.push(new PMPoint(0.0487575, 0.180685, -0.120413));
   allpoints.push(new PMPoint(0.0697783, 0.0475542, -0.218349));
   allpoints.push(new PMPoint(-0.0188682, 0.14379, -0.167571));
   allpoints.push(new PMPoint(-0.167644, -0.191148, -0.284221));
   allpoints.push(new PMPoint(-0.0609781, 0.15255, -0.158477));
   allpoints.push(new PMPoint(-0.0819848, 0.194476, -0.108425));
   allpoints.push(new PMPoint(-0.302593, -0.185546, -0.264214));
   allpoints.push(new PMPoint(-0.262193, -0.0853994, -0.228799));
   allpoints.push(new PMPoint(-0.198628, 0.174166, -0.0480779));
   allpoints.push(new PMPoint(-1.2174, -0.72766, 1.04863));
   allpoints.push(new PMPoint(-0.207069, 0.185308, -0.0161792));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(3, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 6, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 3, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 0, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 11, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 2, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 28, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 25, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 22, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 16, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 12, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 18, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 19, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 22, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 20, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 17, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 24, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 4, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 27, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 24, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 5, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 4, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 24, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 6, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 8, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 26, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 23, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 21, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 18, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 9, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 5, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 0, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 21, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 19, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 29, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 27, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 7, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 13, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 14, 13, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
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
