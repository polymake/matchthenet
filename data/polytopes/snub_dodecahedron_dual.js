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

   allpoints.push(new PMPoint(0.547786, 0, -0.886337));
   allpoints.push(new PMPoint(0.886337, 0.547786, 0));
   allpoints.push(new PMPoint(0.547786, 0, 0.886337));
   allpoints.push(new PMPoint(-0.547786, 0, 0.886337));
   allpoints.push(new PMPoint(-0.886337, -0.547786, 0));
   allpoints.push(new PMPoint(-0.547786, 0, -0.886337));
   allpoints.push(new PMPoint(0, 0.886337, -0.547786));
   allpoints.push(new PMPoint(-0.886337, 0.547786, 0));
   allpoints.push(new PMPoint(0, -0.886337, -0.547786));
   allpoints.push(new PMPoint(0.886337, -0.547786, 0));
   allpoints.push(new PMPoint(0, -0.886337, 0.547786));
   allpoints.push(new PMPoint(0, 0.886337, 0.547786));
   allpoints.push(new PMPoint(0.984247, -0.0905342, 0.102545));
   allpoints.push(new PMPoint(0.928294, 0, 0.354577));
   allpoints.push(new PMPoint(0.772977, 0.432376, -0.450568));
   allpoints.push(new PMPoint(0.819568, 0.175922, -0.533679));
   allpoints.push(new PMPoint(0.819568, -0.175922, 0.533679));
   allpoints.push(new PMPoint(0.772977, -0.432376, 0.450568));
   allpoints.push(new PMPoint(0.717024, 0.341842, 0.597055));
   allpoints.push(new PMPoint(0.717024, -0.341842, -0.597055));
   allpoints.push(new PMPoint(0.573717, 0.573717, -0.573717));
   allpoints.push(new PMPoint(0.573717, 0.573717, 0.573717));
   allpoints.push(new PMPoint(0.597055, 0.717024, 0.341842));
   allpoints.push(new PMPoint(0.597055, -0.717024, -0.341842));
   allpoints.push(new PMPoint(0.573717, -0.573717, 0.573717));
   allpoints.push(new PMPoint(0.341842, 0.597055, 0.717024));
   allpoints.push(new PMPoint(0.573717, -0.573717, -0.573717));
   allpoints.push(new PMPoint(0.533679, -0.819568, 0.175922));
   allpoints.push(new PMPoint(0.450568, 0.772977, -0.432376));
   allpoints.push(new PMPoint(0.533679, 0.819568, -0.175922));
   allpoints.push(new PMPoint(0.266456, -0.387192, -0.875521));
   allpoints.push(new PMPoint(0.432376, 0.450568, -0.772977));
   allpoints.push(new PMPoint(0.341842, -0.597055, -0.717024));
   allpoints.push(new PMPoint(0.450568, -0.772977, 0.432376));
   allpoints.push(new PMPoint(0.354577, -0.928294, 0));
   allpoints.push(new PMPoint(0.984247, 0.0905342, -0.102545));
   allpoints.push(new PMPoint(0, -0.354577, -0.928294));
   allpoints.push(new PMPoint(0.928294, 0, -0.354577));
   allpoints.push(new PMPoint(0.432376, -0.450568, 0.772977));
   allpoints.push(new PMPoint(0.875521, 0.266456, 0.387192));
   allpoints.push(new PMPoint(0.875521, -0.266456, -0.387192));
   allpoints.push(new PMPoint(0.266456, 0.387192, 0.875521));
   allpoints.push(new PMPoint(0.387192, 0.875521, 0.266456));
   allpoints.push(new PMPoint(0.354577, 0.928294, 0));
   allpoints.push(new PMPoint(0.387192, -0.875521, -0.266456));
   allpoints.push(new PMPoint(-0.0905342, -0.102545, -0.984247));
   allpoints.push(new PMPoint(0.102545, -0.984247, 0.0905342));
   allpoints.push(new PMPoint(0.175922, 0.533679, -0.819568));
   allpoints.push(new PMPoint(-0.175922, -0.533679, -0.819568));
   allpoints.push(new PMPoint(0.102545, 0.984247, -0.0905342));
   allpoints.push(new PMPoint(0, 0.354577, 0.928294));
   allpoints.push(new PMPoint(0.0905342, -0.102545, 0.984247));
   allpoints.push(new PMPoint(-0.102545, 0.984247, 0.0905342));
   allpoints.push(new PMPoint(0.0905342, 0.102545, -0.984247));
   allpoints.push(new PMPoint(0.175922, -0.533679, 0.819568));
   allpoints.push(new PMPoint(0, -0.354577, 0.928294));
   allpoints.push(new PMPoint(0, 0.354577, -0.928294));
   allpoints.push(new PMPoint(-0.573717, 0.573717, 0.573717));
   allpoints.push(new PMPoint(-0.0905342, 0.102545, 0.984247));
   allpoints.push(new PMPoint(-0.341842, 0.597055, -0.717024));
   allpoints.push(new PMPoint(-0.175922, 0.533679, 0.819568));
   allpoints.push(new PMPoint(-0.102545, -0.984247, -0.0905342));
   allpoints.push(new PMPoint(-0.387192, 0.875521, -0.266456));
   allpoints.push(new PMPoint(-0.387192, -0.875521, 0.266456));
   allpoints.push(new PMPoint(-0.266456, -0.387192, 0.875521));
   allpoints.push(new PMPoint(-0.432376, 0.450568, 0.772977));
   allpoints.push(new PMPoint(-0.354577, -0.928294, 0));
   allpoints.push(new PMPoint(-0.354577, 0.928294, 0));
   allpoints.push(new PMPoint(-0.717024, 0.341842, -0.597055));
   allpoints.push(new PMPoint(-0.266456, 0.387192, -0.875521));
   allpoints.push(new PMPoint(-0.533679, -0.819568, -0.175922));
   allpoints.push(new PMPoint(-0.432376, -0.450568, -0.772977));
   allpoints.push(new PMPoint(-0.597055, 0.717024, -0.341842));
   allpoints.push(new PMPoint(-0.341842, -0.597055, 0.717024));
   allpoints.push(new PMPoint(-0.450568, -0.772977, -0.432376));
   allpoints.push(new PMPoint(-0.573717, 0.573717, -0.573717));
   allpoints.push(new PMPoint(-0.450568, 0.772977, 0.432376));
   allpoints.push(new PMPoint(-0.533679, 0.819568, 0.175922));
   allpoints.push(new PMPoint(-0.573717, -0.573717, -0.573717));
   allpoints.push(new PMPoint(-0.597055, -0.717024, 0.341842));
   allpoints.push(new PMPoint(-0.772977, 0.432376, 0.450568));
   allpoints.push(new PMPoint(-0.984247, 0.0905342, 0.102545));
   allpoints.push(new PMPoint(-0.573717, -0.573717, 0.573717));
   allpoints.push(new PMPoint(-0.819568, 0.175922, 0.533679));
   allpoints.push(new PMPoint(-0.875521, 0.266456, -0.387192));
   allpoints.push(new PMPoint(-0.717024, -0.341842, 0.597055));
   allpoints.push(new PMPoint(-0.875521, -0.266456, 0.387192));
   allpoints.push(new PMPoint(-0.928294, 0, 0.354577));
   allpoints.push(new PMPoint(-0.928294, 0, -0.354577));
   allpoints.push(new PMPoint(-0.984247, -0.0905342, -0.102545));
   allpoints.push(new PMPoint(-0.772977, -0.432376, -0.450568));
   allpoints.push(new PMPoint(-0.819568, -0.175922, -0.533679));

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
   allpoints[52].makesphere(0.02,points_material);
   allpoints[53].makesphere(0.02,points_material);
   allpoints[54].makesphere(0.02,points_material);
   allpoints[55].makesphere(0.02,points_material);
   allpoints[56].makesphere(0.02,points_material);
   allpoints[57].makesphere(0.02,points_material);
   allpoints[58].makesphere(0.02,points_material);
   allpoints[59].makesphere(0.02,points_material);
   allpoints[60].makesphere(0.02,points_material);
   allpoints[61].makesphere(0.02,points_material);
   allpoints[62].makesphere(0.02,points_material);
   allpoints[63].makesphere(0.02,points_material);
   allpoints[64].makesphere(0.02,points_material);
   allpoints[65].makesphere(0.02,points_material);
   allpoints[66].makesphere(0.02,points_material);
   allpoints[67].makesphere(0.02,points_material);
   allpoints[68].makesphere(0.02,points_material);
   allpoints[69].makesphere(0.02,points_material);
   allpoints[70].makesphere(0.02,points_material);
   allpoints[71].makesphere(0.02,points_material);
   allpoints[72].makesphere(0.02,points_material);
   allpoints[73].makesphere(0.02,points_material);
   allpoints[74].makesphere(0.02,points_material);
   allpoints[75].makesphere(0.02,points_material);
   allpoints[76].makesphere(0.02,points_material);
   allpoints[77].makesphere(0.02,points_material);
   allpoints[78].makesphere(0.02,points_material);
   allpoints[79].makesphere(0.02,points_material);
   allpoints[80].makesphere(0.02,points_material);
   allpoints[81].makesphere(0.02,points_material);
   allpoints[82].makesphere(0.02,points_material);
   allpoints[83].makesphere(0.02,points_material);
   allpoints[84].makesphere(0.02,points_material);
   allpoints[85].makesphere(0.02,points_material);
   allpoints[86].makesphere(0.02,points_material);
   allpoints[87].makesphere(0.02,points_material);
   allpoints[88].makesphere(0.02,points_material);
   allpoints[89].makesphere(0.02,points_material);
   allpoints[90].makesphere(0.02,points_material);
   allpoints[91].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[52].vector);
   faces.vertices.push(allpoints[53].vector);
   faces.vertices.push(allpoints[54].vector);
   faces.vertices.push(allpoints[55].vector);
   faces.vertices.push(allpoints[56].vector);
   faces.vertices.push(allpoints[57].vector);
   faces.vertices.push(allpoints[58].vector);
   faces.vertices.push(allpoints[59].vector);
   faces.vertices.push(allpoints[60].vector);
   faces.vertices.push(allpoints[61].vector);
   faces.vertices.push(allpoints[62].vector);
   faces.vertices.push(allpoints[63].vector);
   faces.vertices.push(allpoints[64].vector);
   faces.vertices.push(allpoints[65].vector);
   faces.vertices.push(allpoints[66].vector);
   faces.vertices.push(allpoints[67].vector);
   faces.vertices.push(allpoints[68].vector);
   faces.vertices.push(allpoints[69].vector);
   faces.vertices.push(allpoints[70].vector);
   faces.vertices.push(allpoints[71].vector);
   faces.vertices.push(allpoints[72].vector);
   faces.vertices.push(allpoints[73].vector);
   faces.vertices.push(allpoints[74].vector);
   faces.vertices.push(allpoints[75].vector);
   faces.vertices.push(allpoints[76].vector);
   faces.vertices.push(allpoints[77].vector);
   faces.vertices.push(allpoints[78].vector);
   faces.vertices.push(allpoints[79].vector);
   faces.vertices.push(allpoints[80].vector);
   faces.vertices.push(allpoints[81].vector);
   faces.vertices.push(allpoints[82].vector);
   faces.vertices.push(allpoints[83].vector);
   faces.vertices.push(allpoints[84].vector);
   faces.vertices.push(allpoints[85].vector);
   faces.vertices.push(allpoints[86].vector);
   faces.vertices.push(allpoints[87].vector);
   faces.vertices.push(allpoints[88].vector);
   faces.vertices.push(allpoints[89].vector);
   faces.vertices.push(allpoints[90].vector);
   faces.vertices.push(allpoints[91].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(58, 51, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 2, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 41, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 36, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 45, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 53, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(56, 53, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 45, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(56, 5, 69, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(55, 51, 58, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 58, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(55, 3, 64, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(41, 2, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 18, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(41, 21, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 32, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 30, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 0, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(75, 59, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 69, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(75, 5, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(64, 3, 85, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 85, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(64, 82, 73, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 51, 55, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 55, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 54, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 0, 53, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 53, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 56, 47, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(71, 5, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 45, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(71, 36, 48, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(58, 50, 60, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 60, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(58, 65, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 2, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 16, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 13, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 40, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 19, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 0, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(88, 84, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(88, 68, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(88, 5, 91, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 83, 87, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 87, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 86, 85, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 38, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 24, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 15, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 0, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 31, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(78, 90, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 91, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(78, 5, 71, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 65, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 57, 80, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 80, 83, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 42, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 43, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 49, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 63, 66, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 66, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 61, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 46, 61, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 61, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 8, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(52, 49, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 6, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 62, 67, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 22, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 42, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 73, 82, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 82, 79, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 79, 63, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(44, 8, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 32, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(44, 26, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(62, 6, 59, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 59, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(62, 75, 72, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(76, 11, 52, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(76, 52, 67, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(76, 67, 77, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 10, 46, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 46, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 34, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(66, 70, 74, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 74, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(66, 8, 61, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(43, 29, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 28, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(43, 6, 49, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(50, 41, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 25, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(50, 11, 60, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(54, 55, 64, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 64, 73, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(54, 73, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 8, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 48, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 36, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 47, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 56, 69, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 69, 59, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(60, 11, 76, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 76, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(60, 57, 65, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 54, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 10, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 33, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(74, 78, 71, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 71, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(74, 48, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 20, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 31, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(28, 47, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 12, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(39, 35, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(81, 7, 84, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 84, 88, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(81, 88, 89, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(87, 81, 89, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 89, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(87, 4, 86, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 9, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 40, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 37, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 18, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 39, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 1, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 72, 75, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 75, 68, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 68, 84, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(82, 85, 86, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(82, 86, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(82, 4, 79, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 23, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 26, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 19, 40, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 35, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 37, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 15, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(83, 80, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(83, 7, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(83, 81, 87, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(89, 88, 91, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(89, 91, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(89, 90, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 17, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 9, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 1, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 29, 43, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 43, 42, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(77, 67, 62, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(77, 62, 72, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(77, 72, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(63, 79, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 4, 70, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(63, 70, 66, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 34, 44, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 44, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 23, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 1, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 14, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 20, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(57, 76, 77, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 77, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(57, 7, 80, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(70, 4, 90, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 90, 78, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(70, 78, 74, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 33, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 27, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 9, 17, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[56].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[55].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[71].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[78].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[44].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[62].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[43].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[54].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[74].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[82].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[83].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[77].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[70].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[24].vector);
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
