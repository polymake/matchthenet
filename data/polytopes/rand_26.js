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

   allpoints.push(new PMPoint(-0.142682, 0.614003, 0.0768101));
   allpoints.push(new PMPoint(-0.11703, 0.685885, -0.0832952));
   allpoints.push(new PMPoint(-0.22768, 0.166783, -0.575687));
   allpoints.push(new PMPoint(-0.223032, 0.181747, -0.593735));
   allpoints.push(new PMPoint(0.341309, 0.945288, 0.91855));
   allpoints.push(new PMPoint(1.52774, 2.4905, 0.219153));
   allpoints.push(new PMPoint(0.425422, 1.03347, 0.949481));
   allpoints.push(new PMPoint(-0.181239, 0.200834, -0.619935));
   allpoints.push(new PMPoint(2.63206, 2.98443, -0.486327));
   allpoints.push(new PMPoint(1.62838, 0.297296, -0.26784));
   allpoints.push(new PMPoint(2.28133, 0.746135, -0.205845));
   allpoints.push(new PMPoint(1.06324, 0.377481, 0.567538));
   allpoints.push(new PMPoint(0.709669, -0.0534546, -0.39918));
   allpoints.push(new PMPoint(0.63535, -0.0861571, -0.35405));
   allpoints.push(new PMPoint(0.298147, -0.267079, 0.26984));
   allpoints.push(new PMPoint(0.254871, -0.237354, 0.378551));
   allpoints.push(new PMPoint(0.218902, -0.279615, 0.0302918));
   allpoints.push(new PMPoint(0.0826679, -0.202319, -0.168163));
   allpoints.push(new PMPoint(0.0690003, -0.248494, -0.0637084));
   allpoints.push(new PMPoint(-0.0676085, 0.660959, 0.22407));
   allpoints.push(new PMPoint(0.032475, -0.160339, 0.44112));
   allpoints.push(new PMPoint(-0.0929779, 0.0844671, 0.570126));
   allpoints.push(new PMPoint(-0.245499, 0.110562, 0.219079));
   allpoints.push(new PMPoint(-0.121479, -0.181225, -0.00156323));
   allpoints.push(new PMPoint(-0.294161, -0.0171418, -0.147362));
   allpoints.push(new PMPoint(-0.274306, 0.11241, 0.147012));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(11, 6, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 4, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 21, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 20, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 5, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 7, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 6, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 11, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 10, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 12, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 20, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 23, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 18, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 16, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 15, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 14, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 0, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 25, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(23, 24, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 2, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(23, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 5, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 0, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 4, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 19, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 16, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 12, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 13, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 18, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 17, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 1, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 22, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 25, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 24, 23, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[20].vector);
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
