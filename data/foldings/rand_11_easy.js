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
      [15,14],
      [11,10],
      [12,11],
      [7,6],
      [8,7],
      [4,3],
      [3,2],
      [2,1],
      [0,5],
      [5,4],
      [1,0]];

   var angles = [2.83259717955025,
      1.64314391456457,
      2.19223062839341,
      2.37300176483085,
      2.39937440574714,
      1.79108828324953,
      1.87909478676899,
      1.94279231898353,
      1.96595860501395,
      1.66791141806978,
      1.66090687576329,
      1.89202468550002];

   var subtrees = [[39,40,41],
      [37,38],
      [32,33,34,35,36],
      [30,31],
      [29],
      [25,26,27,28],
      [23,24],
      [20,21,22],
      [18,19,39,40,41],
      [13,14,15,16,17,37,38],
      [10,11,12,30,31,32,33,34,35,36],
      [6,7,8,9,25,26,27,28,29]];

   var polytoperoot = [[-0.825148902946392,-0.914840308633273,0.274737867144601],
      [-0.63332910518902,-0.856440536828339,-1.11414252636575],
      [1.24735139473511,-0.547406095438378,-0.28826040191745]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.903302, 0, 0));
   allpoints.push(new PMPoint(1.2774, 0.484697, 0));
   allpoints.push(new PMPoint(0.933703, 0.912123, 0));
   allpoints.push(new PMPoint(0.675809, 1.13324, 0));
   allpoints.push(new PMPoint(-0.295139, 1.48623, 0));
   allpoints.push(new PMPoint(-0.0114225, -0.36211, 0));
   allpoints.push(new PMPoint(1.03326, -1.14002, 0));
   allpoints.push(new PMPoint(1.049, -1.14351, 0));
   allpoints.push(new PMPoint(1.0813, -0.694622, 0));
   allpoints.push(new PMPoint(1.46521, 1.71844, 0));
   allpoints.push(new PMPoint(1.45298, 1.84042, 0));
   allpoints.push(new PMPoint(-0.16103, 2.21378, 0));
   allpoints.push(new PMPoint(-1.03453, 1.46139, 0));
   allpoints.push(new PMPoint(-1.11155, 1.36669, 0));
   allpoints.push(new PMPoint(-1.31743, 0.206103, 0));
   allpoints.push(new PMPoint(-1.15338, 0.00505215, 0));
   allpoints.push(new PMPoint(-0.317193, -0.175051, 0));
   allpoints.push(new PMPoint(1.42899, -0.487677, 0));
   allpoints.push(new PMPoint(1.65921, 0.32934, 0));
   allpoints.push(new PMPoint(1.66102, 0.635545, 0));
   allpoints.push(new PMPoint(1.76293, 0.722101, 0));
   allpoints.push(new PMPoint(1.66617, 1.18664, 0));
   allpoints.push(new PMPoint(1.62697, 1.2744, 0));
   allpoints.push(new PMPoint(1.5988, 1.47046, 0));
   allpoints.push(new PMPoint(-0.247306, -1.43203, 0));
   allpoints.push(new PMPoint(-0.346732, -1.6717, 0));
   allpoints.push(new PMPoint(1.01089, -2.08297, 0));
   allpoints.push(new PMPoint(1.26167, -1.73147, 0));
   allpoints.push(new PMPoint(-0.27973, -1.17431, 0));
   allpoints.push(new PMPoint(1.83282, 2.53272, 0));
   allpoints.push(new PMPoint(-0.0935446, 2.31549, 0));
   allpoints.push(new PMPoint(1.57797, 1.55559, 0));
   allpoints.push(new PMPoint(1.93876, 1.24738, 0));
   allpoints.push(new PMPoint(2.53161, 2.1053, 0));
   allpoints.push(new PMPoint(2.19257, 2.37269, 0));
   allpoints.push(new PMPoint(2.05482, 2.35165, 0));
   allpoints.push(new PMPoint(-2.70094, 0.25677, 0));
   allpoints.push(new PMPoint(-2.73343, 0.121257, 0));
   allpoints.push(new PMPoint(1.69431, -0.851203, 0));
   allpoints.push(new PMPoint(2.27796, -0.626982, 0));
   allpoints.push(new PMPoint(1.78806, 0.293606, 0));

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
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x540D6E, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xFFD23F, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 0, 6, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 6, 7, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(15, 14, 37, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(15, 37, 38, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(12, 11, 30, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(12, 30, 31, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(32, 33, 34, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(32, 34, 35, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(32, 35, 36, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(32, 36, 11, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(32, 11, 10, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(5, 4, 10, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 10, 11, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(5, 11, 12, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(25, 26, 27, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(25, 27, 28, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(25, 28, 8, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(25, 8, 7, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(0, 5, 13, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 13, 14, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 14, 15, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 15, 16, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(0, 16, 17, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(2, 1, 18, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(3, 2, 20, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 20, 21, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 21, 22, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(6, 29, 7, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(19, 18, 39, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(19, 39, 40, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(19, 40, 41, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(4, 3, 23, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 23, 24, undefined, undefined, 12));


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
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
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
