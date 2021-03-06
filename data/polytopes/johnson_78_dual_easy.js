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

   allpoints.push(new PMPoint(-0.833791, 0.515311, 0));
   allpoints.push(new PMPoint(-0.804392, 0.30725, -0.497142));
   allpoints.push(new PMPoint(-0.680424, -0.624145, -0.533083));
   allpoints.push(new PMPoint(-0.792317, -0.264106, -0.590558));
   allpoints.push(new PMPoint(-0.558988, 0, -0.904461));
   allpoints.push(new PMPoint(-0.475012, 0.768586, -0.293574));
   allpoints.push(new PMPoint(-0.554621, 0.554621, -0.554621));
   allpoints.push(new PMPoint(-0.476804, -0.953608, 0));
   allpoints.push(new PMPoint(-0.442465, -0.884931, -0.377911));
   allpoints.push(new PMPoint(-0.332299, -0.537671, -0.869971));
   allpoints.push(new PMPoint(-0.30725, 0.497142, -0.804392));
   allpoints.push(new PMPoint(0, -0.904461, 0.558988));
   allpoints.push(new PMPoint(0, -1.07534, 0));
   allpoints.push(new PMPoint(0, 0, -1.04287));
   allpoints.push(new PMPoint(0, -0.374247, -0.979792));
   allpoints.push(new PMPoint(0, 0.354151, -0.927179));
   allpoints.push(new PMPoint(0.30725, -0.497142, 0.804392));
   allpoints.push(new PMPoint(0.537671, -0.869971, -0.332299));
   allpoints.push(new PMPoint(0.374247, -0.979792, 0));
   allpoints.push(new PMPoint(0.558988, 0, -0.904461));
   allpoints.push(new PMPoint(0.475012, 0.768586, -0.293574));
   allpoints.push(new PMPoint(0.573028, -0.573028, 0.573028));
   allpoints.push(new PMPoint(0.904461, -0.558988, 0));
   allpoints.push(new PMPoint(0.804392, -0.30725, 0.497142));
   allpoints.push(new PMPoint(0.768586, 0.293574, 0.475012));
   allpoints.push(new PMPoint(0.927179, 0, -0.354151));
   allpoints.push(new PMPoint(0.897396, 0, 0.342775));
   allpoints.push(new PMPoint(0.994283, 0, 0));
   allpoints.push(new PMPoint(0.833791, 0.515311, 0));
   allpoints.push(new PMPoint(0.804392, 0.30725, -0.497142));
   allpoints.push(new PMPoint(0.843698, -0.322264, -0.521434));
   allpoints.push(new PMPoint(0.554621, 0.554621, -0.554621));
   allpoints.push(new PMPoint(0.605545, -0.605545, -0.605545));
   allpoints.push(new PMPoint(0.515311, 0, 0.833791));
   allpoints.push(new PMPoint(0.521434, -0.843698, 0.322264));
   allpoints.push(new PMPoint(0.30725, 0.497142, -0.804392));
   allpoints.push(new PMPoint(0.332299, -0.537671, -0.869971));
   allpoints.push(new PMPoint(0, -0.342775, 0.897396));
   allpoints.push(new PMPoint(0, 0, 0.950024));
   allpoints.push(new PMPoint(0, 0.833791, -0.515311));
   allpoints.push(new PMPoint(0, -0.954458, -0.589888));
   allpoints.push(new PMPoint(-0.30725, -0.497142, 0.804392));
   allpoints.push(new PMPoint(-0.427332, -0.854664, 0.364985));
   allpoints.push(new PMPoint(0, 1.03758, 0.641258));
   allpoints.push(new PMPoint(-0.515311, 0, 0.833791));
   allpoints.push(new PMPoint(-0.750768, -0.250256, 0.55959));
   allpoints.push(new PMPoint(-0.64805, -0.594449, 0.50772));
   allpoints.push(new PMPoint(-0.768586, 0.293574, 0.475012));
   allpoints.push(new PMPoint(-0.964512, 0.0955893, 0));
   allpoints.push(new PMPoint(-0.934363, -0.0842515, 0.304825));
   allpoints.push(new PMPoint(-0.904461, -0.558988, 0));
   allpoints.push(new PMPoint(-0.961838, -0.0867289, -0.313788));

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
   allpoints[46].makesphere(0.02,points_material);
   allpoints[47].makesphere(0.02,points_material);
   allpoints[48].makesphere(0.02,points_material);
   allpoints[49].makesphere(0.02,points_material);
   allpoints[50].makesphere(0.02,points_material);
   allpoints[51].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[46].vector);
   faces.vertices.push(allpoints[47].vector);
   faces.vertices.push(allpoints[48].vector);
   faces.vertices.push(allpoints[49].vector);
   faces.vertices.push(allpoints[50].vector);
   faces.vertices.push(allpoints[51].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x0EAD69, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(40, 12, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(40, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 12, 40, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(18, 40, 17, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(7, 12, 11, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(7, 11, 42, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(40, 8, 2, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(40, 2, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(11, 12, 18, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(11, 18, 34, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(40, 36, 32, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(40, 32, 17, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(42, 11, 41, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(42, 41, 46, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(34, 18, 17, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(34, 17, 22, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(40, 9, 14, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(40, 14, 36, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(11, 34, 21, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(11, 21, 16, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(22, 17, 32, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(22, 32, 30, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(9, 2, 3, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(9, 3, 4, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(41, 11, 16, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(41, 16, 37, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(34, 22, 23, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(34, 23, 21, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(9, 4, 13, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(9, 13, 14, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(36, 19, 30, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(36, 30, 32, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(46, 41, 44, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(46, 44, 45, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(22, 30, 25, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(22, 25, 27, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(3, 51, 1, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(3, 1, 4, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(36, 14, 13, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(36, 13, 19, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(41, 37, 38, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(41, 38, 44, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(16, 21, 23, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(16, 23, 33, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(23, 22, 27, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(23, 27, 26, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(13, 4, 10, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(13, 10, 15, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(30, 19, 29, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(30, 29, 25, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(45, 44, 47, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(45, 47, 49, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(37, 16, 33, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(37, 33, 38, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(51, 48, 0, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(51, 0, 1, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(4, 1, 6, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(4, 6, 10, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(19, 13, 15, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(19, 15, 35, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(44, 38, 43, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(33, 23, 26, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(33, 26, 24, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(48, 49, 47, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(48, 47, 0, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(27, 25, 29, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(27, 29, 28, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(19, 35, 31, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(19, 31, 29, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(47, 44, 43, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(38, 33, 43, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(1, 0, 5, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(1, 5, 6, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(26, 27, 28, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(26, 28, 24, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(15, 10, 39, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(15, 39, 35, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(33, 24, 43, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(0, 47, 43, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(29, 31, 20, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(29, 20, 28, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(10, 6, 5, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(10, 5, 39, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(0, 43, 5, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(24, 28, 43, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(35, 39, 20, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(35, 20, 31, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(28, 20, 43, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(39, 5, 43, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(39, 43, 20, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(7, 42, 46, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(7, 46, 50, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(8, 7, 50, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(8, 50, 2, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(50, 46, 45, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(50, 45, 49, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(2, 50, 51, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(2, 51, 3, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(51, 50, 49, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(51, 49, 48, undefined, undefined, 54));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[40].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[51].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[48].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[51].vector);
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
