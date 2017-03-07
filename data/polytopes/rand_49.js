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

   allpoints.push(new PMPoint(-0.361799, 0.0925652, 0.522279));
   allpoints.push(new PMPoint(0.00222077, 0.411116, -0.0772389));
   allpoints.push(new PMPoint(-0.0288715, 0.403234, -0.131245));
   allpoints.push(new PMPoint(0.440031, -1.62985, 0.243501));
   allpoints.push(new PMPoint(0.123533, -0.959994, 0.596215));
   allpoints.push(new PMPoint(-0.0704637, 0.154243, 0.579497));
   allpoints.push(new PMPoint(-0.00998753, 0.178453, 0.55968));
   allpoints.push(new PMPoint(0.117235, 0.412875, 0.00812323));
   allpoints.push(new PMPoint(0.385844, -0.535578, 0.65456));
   allpoints.push(new PMPoint(0.0441115, 0.176761, 0.547963));
   allpoints.push(new PMPoint(0.584611, 0.342211, 0.0300926));
   allpoints.push(new PMPoint(1.34302, -0.20698, 0.164743));
   allpoints.push(new PMPoint(0.728798, -0.475218, -1.02259));
   allpoints.push(new PMPoint(0.679477, 0.318862, -0.00305279));
   allpoints.push(new PMPoint(1.3958, -0.398636, 0.343253));
   allpoints.push(new PMPoint(1.16494, -1.18907, 0.14266));
   allpoints.push(new PMPoint(1.19369, -0.362109, 0.428436));
   allpoints.push(new PMPoint(0.395721, 0.252414, -0.473014));
   allpoints.push(new PMPoint(0.838203, -1.95971, -0.0166378));
   allpoints.push(new PMPoint(0.513201, -0.524884, -1.37854));
   allpoints.push(new PMPoint(0.28259, -0.246397, -1.306));
   allpoints.push(new PMPoint(0.517913, -1.61058, -0.776638));
   allpoints.push(new PMPoint(-0.061324, -1.12405, -0.475455));
   allpoints.push(new PMPoint(-0.287602, -0.965925, 0.0116865));
   allpoints.push(new PMPoint(-0.57187, -0.588138, 0.0620488));
   allpoints.push(new PMPoint(-0.537513, -0.504061, -0.350769));
   allpoints.push(new PMPoint(-0.520255, -0.294001, 0.484625));
   allpoints.push(new PMPoint(-0.408709, -0.0051428, -0.756926));
   allpoints.push(new PMPoint(-0.366757, 0.246854, -0.333128));
   allpoints.push(new PMPoint(-0.442684, 0.0492601, 0.505909));

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
   faces.faces.push(new THREE.Face3(22, 21, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 18, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 3, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 22, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 25, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 27, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 12, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 11, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 14, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 11, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 13, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 10, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 4, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 26, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 26, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 29, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 28, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 27, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 20, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 17, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 13, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 0, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 2, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 28, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 2, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 18, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 8, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 7, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 8, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 5, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 0, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 29, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 21, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 19, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 12, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 17, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 2, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 1, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 7, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 16, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 9, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 10, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 6, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[9].vector);
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
