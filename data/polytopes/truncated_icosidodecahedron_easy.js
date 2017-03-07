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

   allpoints.push(new PMPoint(0.131496, 0.982557, 0.131496));
   allpoints.push(new PMPoint(-0.131496, 0.982557, 0.131496));
   allpoints.push(new PMPoint(0.344261, 0.901288, 0.262992));
   allpoints.push(new PMPoint(0.131496, 0.982557, -0.131496));
   allpoints.push(new PMPoint(0.42553, 0.769792, 0.475757));
   allpoints.push(new PMPoint(-0.131496, 0.982557, -0.131496));
   allpoints.push(new PMPoint(-0.344261, 0.901288, 0.262992));
   allpoints.push(new PMPoint(0.344261, 0.901288, -0.262992));
   allpoints.push(new PMPoint(0.557026, 0.820019, 0.131496));
   allpoints.push(new PMPoint(-0.42553, 0.769792, 0.475757));
   allpoints.push(new PMPoint(0.42553, 0.769792, -0.475757));
   allpoints.push(new PMPoint(0.638295, 0.688522, 0.344261));
   allpoints.push(new PMPoint(0.344261, 0.638295, 0.688522));
   allpoints.push(new PMPoint(-0.344261, 0.901288, -0.262992));
   allpoints.push(new PMPoint(0.557026, 0.820019, -0.131496));
   allpoints.push(new PMPoint(-0.557026, 0.820019, 0.131496));
   allpoints.push(new PMPoint(0.131496, 0.557026, 0.820019));
   allpoints.push(new PMPoint(-0.42553, 0.769792, -0.475757));
   allpoints.push(new PMPoint(0.638295, 0.688522, -0.344261));
   allpoints.push(new PMPoint(-0.638295, 0.688522, 0.344261));
   allpoints.push(new PMPoint(-0.344261, 0.638295, 0.688522));
   allpoints.push(new PMPoint(0.344261, 0.638295, -0.688522));
   allpoints.push(new PMPoint(0.769792, 0.475757, 0.42553));
   allpoints.push(new PMPoint(-0.557026, 0.820019, -0.131496));
   allpoints.push(new PMPoint(0.475757, 0.42553, 0.769792));
   allpoints.push(new PMPoint(-0.131496, 0.557026, 0.820019));
   allpoints.push(new PMPoint(0.131496, 0.557026, -0.820019));
   allpoints.push(new PMPoint(0.901288, 0.262992, 0.344261));
   allpoints.push(new PMPoint(-0.638295, 0.688522, -0.344261));
   allpoints.push(new PMPoint(0.262992, 0.344261, 0.901288));
   allpoints.push(new PMPoint(-0.344261, 0.638295, -0.688522));
   allpoints.push(new PMPoint(0.769792, 0.475757, -0.42553));
   allpoints.push(new PMPoint(-0.769792, 0.475757, 0.42553));
   allpoints.push(new PMPoint(0.688522, 0.344261, 0.638295));
   allpoints.push(new PMPoint(-0.475757, 0.42553, 0.769792));
   allpoints.push(new PMPoint(0.475757, 0.42553, -0.769792));
   allpoints.push(new PMPoint(-0.131496, 0.557026, -0.820019));
   allpoints.push(new PMPoint(0.901288, 0.262992, -0.344261));
   allpoints.push(new PMPoint(-0.901288, 0.262992, 0.344261));
   allpoints.push(new PMPoint(0.820019, 0.131496, 0.557026));
   allpoints.push(new PMPoint(-0.262992, 0.344261, 0.901288));
   allpoints.push(new PMPoint(0.262992, 0.344261, -0.901288));
   allpoints.push(new PMPoint(0.982557, 0.131496, 0.131496));
   allpoints.push(new PMPoint(-0.769792, 0.475757, -0.42553));
   allpoints.push(new PMPoint(0.131496, 0.131496, 0.982557));
   allpoints.push(new PMPoint(-0.688522, 0.344261, 0.638295));
   allpoints.push(new PMPoint(0.688522, 0.344261, -0.638295));
   allpoints.push(new PMPoint(-0.475757, 0.42553, -0.769792));
   allpoints.push(new PMPoint(0.982557, 0.131496, -0.131496));
   allpoints.push(new PMPoint(-0.901288, 0.262992, -0.344261));
   allpoints.push(new PMPoint(0.131496, -0.131496, 0.982557));
   allpoints.push(new PMPoint(-0.820019, 0.131496, 0.557026));
   allpoints.push(new PMPoint(0.820019, 0.131496, -0.557026));
   allpoints.push(new PMPoint(-0.262992, 0.344261, -0.901288));
   allpoints.push(new PMPoint(-0.982557, 0.131496, 0.131496));
   allpoints.push(new PMPoint(0.820019, -0.131496, 0.557026));
   allpoints.push(new PMPoint(-0.131496, 0.131496, 0.982557));
   allpoints.push(new PMPoint(0.131496, 0.131496, -0.982557));
   allpoints.push(new PMPoint(-0.688522, 0.344261, -0.638295));
   allpoints.push(new PMPoint(0.982557, -0.131496, 0.131496));
   allpoints.push(new PMPoint(-0.982557, 0.131496, -0.131496));
   allpoints.push(new PMPoint(0.688522, -0.344261, 0.638295));
   allpoints.push(new PMPoint(-0.131496, -0.131496, 0.982557));
   allpoints.push(new PMPoint(0.131496, -0.131496, -0.982557));
   allpoints.push(new PMPoint(-0.820019, 0.131496, -0.557026));
   allpoints.push(new PMPoint(0.982557, -0.131496, -0.131496));
   allpoints.push(new PMPoint(0.262992, -0.344261, 0.901288));
   allpoints.push(new PMPoint(-0.820019, -0.131496, 0.557026));
   allpoints.push(new PMPoint(0.820019, -0.131496, -0.557026));
   allpoints.push(new PMPoint(-0.131496, 0.131496, -0.982557));
   allpoints.push(new PMPoint(0.901288, -0.262992, 0.344261));
   allpoints.push(new PMPoint(-0.982557, -0.131496, 0.131496));
   allpoints.push(new PMPoint(0.475757, -0.42553, 0.769792));
   allpoints.push(new PMPoint(-0.688522, -0.344261, 0.638295));
   allpoints.push(new PMPoint(0.688522, -0.344261, -0.638295));
   allpoints.push(new PMPoint(-0.131496, -0.131496, -0.982557));
   allpoints.push(new PMPoint(0.769792, -0.475757, 0.42553));
   allpoints.push(new PMPoint(-0.982557, -0.131496, -0.131496));
   allpoints.push(new PMPoint(-0.262992, -0.344261, 0.901288));
   allpoints.push(new PMPoint(0.262992, -0.344261, -0.901288));
   allpoints.push(new PMPoint(-0.820019, -0.131496, -0.557026));
   allpoints.push(new PMPoint(0.901288, -0.262992, -0.344261));
   allpoints.push(new PMPoint(-0.901288, -0.262992, 0.344261));
   allpoints.push(new PMPoint(0.131496, -0.557026, 0.820019));
   allpoints.push(new PMPoint(-0.475757, -0.42553, 0.769792));
   allpoints.push(new PMPoint(0.475757, -0.42553, -0.769792));
   allpoints.push(new PMPoint(-0.688522, -0.344261, -0.638295));
   allpoints.push(new PMPoint(0.769792, -0.475757, -0.42553));
   allpoints.push(new PMPoint(-0.769792, -0.475757, 0.42553));
   allpoints.push(new PMPoint(0.344261, -0.638295, 0.688522));
   allpoints.push(new PMPoint(-0.262992, -0.344261, -0.901288));
   allpoints.push(new PMPoint(0.638295, -0.688522, 0.344261));
   allpoints.push(new PMPoint(-0.901288, -0.262992, -0.344261));
   allpoints.push(new PMPoint(-0.131496, -0.557026, 0.820019));
   allpoints.push(new PMPoint(0.131496, -0.557026, -0.820019));
   allpoints.push(new PMPoint(-0.475757, -0.42553, -0.769792));
   allpoints.push(new PMPoint(0.557026, -0.820019, 0.131496));
   allpoints.push(new PMPoint(-0.769792, -0.475757, -0.42553));
   allpoints.push(new PMPoint(-0.344261, -0.638295, 0.688522));
   allpoints.push(new PMPoint(0.344261, -0.638295, -0.688522));
   allpoints.push(new PMPoint(0.638295, -0.688522, -0.344261));
   allpoints.push(new PMPoint(-0.638295, -0.688522, 0.344261));
   allpoints.push(new PMPoint(0.42553, -0.769792, 0.475757));
   allpoints.push(new PMPoint(-0.131496, -0.557026, -0.820019));
   allpoints.push(new PMPoint(0.557026, -0.820019, -0.131496));
   allpoints.push(new PMPoint(-0.557026, -0.820019, 0.131496));
   allpoints.push(new PMPoint(0.344261, -0.901288, 0.262992));
   allpoints.push(new PMPoint(-0.344261, -0.638295, -0.688522));
   allpoints.push(new PMPoint(-0.638295, -0.688522, -0.344261));
   allpoints.push(new PMPoint(-0.42553, -0.769792, 0.475757));
   allpoints.push(new PMPoint(0.42553, -0.769792, -0.475757));
   allpoints.push(new PMPoint(-0.557026, -0.820019, -0.131496));
   allpoints.push(new PMPoint(-0.344261, -0.901288, 0.262992));
   allpoints.push(new PMPoint(0.344261, -0.901288, -0.262992));
   allpoints.push(new PMPoint(0.131496, -0.982557, 0.131496));
   allpoints.push(new PMPoint(-0.42553, -0.769792, -0.475757));
   allpoints.push(new PMPoint(-0.131496, -0.982557, 0.131496));
   allpoints.push(new PMPoint(-0.344261, -0.901288, -0.262992));
   allpoints.push(new PMPoint(0.131496, -0.982557, -0.131496));
   allpoints.push(new PMPoint(-0.131496, -0.982557, -0.131496));

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
   allpoints[92].makesphere(0.02,points_material);
   allpoints[93].makesphere(0.02,points_material);
   allpoints[94].makesphere(0.02,points_material);
   allpoints[95].makesphere(0.02,points_material);
   allpoints[96].makesphere(0.02,points_material);
   allpoints[97].makesphere(0.02,points_material);
   allpoints[98].makesphere(0.02,points_material);
   allpoints[99].makesphere(0.02,points_material);
   allpoints[100].makesphere(0.02,points_material);
   allpoints[101].makesphere(0.02,points_material);
   allpoints[102].makesphere(0.02,points_material);
   allpoints[103].makesphere(0.02,points_material);
   allpoints[104].makesphere(0.02,points_material);
   allpoints[105].makesphere(0.02,points_material);
   allpoints[106].makesphere(0.02,points_material);
   allpoints[107].makesphere(0.02,points_material);
   allpoints[108].makesphere(0.02,points_material);
   allpoints[109].makesphere(0.02,points_material);
   allpoints[110].makesphere(0.02,points_material);
   allpoints[111].makesphere(0.02,points_material);
   allpoints[112].makesphere(0.02,points_material);
   allpoints[113].makesphere(0.02,points_material);
   allpoints[114].makesphere(0.02,points_material);
   allpoints[115].makesphere(0.02,points_material);
   allpoints[116].makesphere(0.02,points_material);
   allpoints[117].makesphere(0.02,points_material);
   allpoints[118].makesphere(0.02,points_material);
   allpoints[119].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[92].vector);
   faces.vertices.push(allpoints[93].vector);
   faces.vertices.push(allpoints[94].vector);
   faces.vertices.push(allpoints[95].vector);
   faces.vertices.push(allpoints[96].vector);
   faces.vertices.push(allpoints[97].vector);
   faces.vertices.push(allpoints[98].vector);
   faces.vertices.push(allpoints[99].vector);
   faces.vertices.push(allpoints[100].vector);
   faces.vertices.push(allpoints[101].vector);
   faces.vertices.push(allpoints[102].vector);
   faces.vertices.push(allpoints[103].vector);
   faces.vertices.push(allpoints[104].vector);
   faces.vertices.push(allpoints[105].vector);
   faces.vertices.push(allpoints[106].vector);
   faces.vertices.push(allpoints[107].vector);
   faces.vertices.push(allpoints[108].vector);
   faces.vertices.push(allpoints[109].vector);
   faces.vertices.push(allpoints[110].vector);
   faces.vertices.push(allpoints[111].vector);
   faces.vertices.push(allpoints[112].vector);
   faces.vertices.push(allpoints[113].vector);
   faces.vertices.push(allpoints[114].vector);
   faces.vertices.push(allpoints[115].vector);
   faces.vertices.push(allpoints[116].vector);
   faces.vertices.push(allpoints[117].vector);
   faces.vertices.push(allpoints[118].vector);
   faces.vertices.push(allpoints[119].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0xEE4266, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x888888, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(52, 37, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 48, 65, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 65, 81, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(52, 81, 68, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 37, 52, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(31, 52, 46, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(68, 81, 87, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(68, 87, 74, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(52, 68, 74, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 74, 85, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 85, 79, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 79, 63, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 63, 57, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 57, 41, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 41, 35, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(52, 35, 46, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(18, 31, 46, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 46, 35, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 35, 21, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(18, 21, 10, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(87, 100, 110, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(87, 110, 99, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(87, 99, 85, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(87, 85, 74, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(14, 18, 10, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(14, 10, 7, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(100, 104, 113, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(100, 113, 110, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(35, 41, 26, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(35, 26, 21, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(79, 85, 99, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(79, 99, 94, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(10, 21, 26, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 26, 36, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 36, 30, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 30, 17, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 17, 13, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 13, 5, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 5, 3, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(10, 3, 7, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(113, 118, 119, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 119, 117, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 117, 115, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 115, 107, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 107, 103, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 103, 94, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 94, 99, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(113, 99, 110, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(41, 57, 69, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(41, 69, 53, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(41, 53, 36, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(41, 36, 26, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(63, 79, 94, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(63, 94, 103, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(63, 103, 90, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(63, 90, 75, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(57, 63, 75, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(57, 75, 69, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(36, 53, 47, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(36, 47, 30, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(75, 90, 95, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 95, 86, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 86, 80, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 80, 64, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 64, 58, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 58, 47, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 47, 53, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(75, 53, 69, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(90, 103, 107, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(90, 107, 95, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(13, 17, 28, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(13, 28, 23, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(17, 30, 47, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(17, 47, 58, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(17, 58, 43, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(17, 43, 28, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(107, 115, 108, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(107, 108, 97, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(107, 97, 86, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(107, 86, 95, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(115, 117, 111, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(115, 111, 108, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(58, 64, 49, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(58, 49, 43, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(80, 86, 97, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(80, 97, 92, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(64, 80, 92, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(64, 92, 77, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(64, 77, 60, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(64, 60, 49, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(60, 77, 71, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(60, 71, 54, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(38, 54, 71, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(38, 71, 82, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(38, 82, 67, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(38, 67, 51, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(88, 73, 67, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(88, 67, 82, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(45, 32, 38, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(45, 38, 51, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(101, 88, 82, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 82, 71, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 71, 77, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 77, 92, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 92, 97, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 97, 108, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 108, 111, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(101, 111, 105, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(28, 43, 49, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 49, 60, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 60, 54, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 54, 38, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 38, 32, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 32, 19, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 19, 15, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(28, 15, 23, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(112, 109, 101, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(112, 101, 105, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(109, 98, 84, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(109, 84, 73, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(109, 73, 88, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(109, 88, 101, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(20, 9, 19, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(20, 19, 32, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(20, 32, 45, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(20, 45, 34, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(9, 6, 15, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(9, 15, 19, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(116, 112, 105, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(116, 105, 111, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(116, 111, 117, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(116, 117, 119, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(98, 93, 78, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(98, 78, 84, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(34, 45, 51, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 51, 67, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 67, 73, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 73, 84, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 84, 78, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 78, 62, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 62, 56, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(34, 56, 40, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(25, 20, 34, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(25, 34, 40, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(5, 13, 23, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(5, 23, 15, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(5, 15, 6, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(5, 6, 1, undefined, undefined, 39));

   faces.faces.push(new THREE.Face3(118, 114, 116, undefined, undefined, 40));
   faces.faces.push(new THREE.Face3(118, 116, 119, undefined, undefined, 40));

   faces.faces.push(new THREE.Face3(50, 44, 56, undefined, undefined, 41));
   faces.faces.push(new THREE.Face3(50, 56, 62, undefined, undefined, 41));

   faces.faces.push(new THREE.Face3(0, 3, 5, undefined, undefined, 42));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 42));

   faces.faces.push(new THREE.Face3(66, 50, 62, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(66, 62, 78, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(66, 78, 93, undefined, undefined, 43));
   faces.faces.push(new THREE.Face3(66, 93, 83, undefined, undefined, 43));

   faces.faces.push(new THREE.Face3(16, 25, 40, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(16, 40, 56, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(16, 56, 44, undefined, undefined, 44));
   faces.faces.push(new THREE.Face3(16, 44, 29, undefined, undefined, 44));

   faces.faces.push(new THREE.Face3(102, 89, 83, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 83, 93, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 93, 98, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 98, 109, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 109, 112, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 112, 116, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 116, 114, undefined, undefined, 45));
   faces.faces.push(new THREE.Face3(102, 114, 106, undefined, undefined, 45));

   faces.faces.push(new THREE.Face3(2, 0, 1, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 6, 9, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 9, 20, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 20, 25, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 25, 16, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 16, 12, undefined, undefined, 46));
   faces.faces.push(new THREE.Face3(2, 12, 4, undefined, undefined, 46));

   faces.faces.push(new THREE.Face3(89, 72, 66, undefined, undefined, 47));
   faces.faces.push(new THREE.Face3(89, 66, 83, undefined, undefined, 47));

   faces.faces.push(new THREE.Face3(24, 12, 16, undefined, undefined, 48));
   faces.faces.push(new THREE.Face3(24, 16, 29, undefined, undefined, 48));

   faces.faces.push(new THREE.Face3(104, 96, 106, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(104, 106, 114, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(104, 114, 118, undefined, undefined, 49));
   faces.faces.push(new THREE.Face3(104, 118, 113, undefined, undefined, 49));

   faces.faces.push(new THREE.Face3(8, 14, 7, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(8, 7, 3, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(8, 3, 0, undefined, undefined, 50));
   faces.faces.push(new THREE.Face3(8, 0, 2, undefined, undefined, 50));

   faces.faces.push(new THREE.Face3(96, 91, 102, undefined, undefined, 51));
   faces.faces.push(new THREE.Face3(96, 102, 106, undefined, undefined, 51));

   faces.faces.push(new THREE.Face3(11, 8, 2, undefined, undefined, 52));
   faces.faces.push(new THREE.Face3(11, 2, 4, undefined, undefined, 52));

   faces.faces.push(new THREE.Face3(91, 76, 61, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(91, 61, 72, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(91, 72, 89, undefined, undefined, 53));
   faces.faces.push(new THREE.Face3(91, 89, 102, undefined, undefined, 53));

   faces.faces.push(new THREE.Face3(22, 11, 4, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(22, 4, 12, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(22, 12, 24, undefined, undefined, 54));
   faces.faces.push(new THREE.Face3(22, 24, 33, undefined, undefined, 54));

   faces.faces.push(new THREE.Face3(33, 24, 29, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 29, 44, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 44, 50, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 50, 66, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 66, 72, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 72, 61, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 61, 55, undefined, undefined, 55));
   faces.faces.push(new THREE.Face3(33, 55, 39, undefined, undefined, 55));

   faces.faces.push(new THREE.Face3(76, 70, 55, undefined, undefined, 56));
   faces.faces.push(new THREE.Face3(76, 55, 61, undefined, undefined, 56));

   faces.faces.push(new THREE.Face3(27, 22, 33, undefined, undefined, 57));
   faces.faces.push(new THREE.Face3(27, 33, 39, undefined, undefined, 57));

   faces.faces.push(new THREE.Face3(81, 65, 59, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 59, 70, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 70, 76, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 76, 91, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 91, 96, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 96, 104, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 104, 100, undefined, undefined, 58));
   faces.faces.push(new THREE.Face3(81, 100, 87, undefined, undefined, 58));

   faces.faces.push(new THREE.Face3(42, 27, 39, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(42, 39, 55, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(42, 55, 70, undefined, undefined, 59));
   faces.faces.push(new THREE.Face3(42, 70, 59, undefined, undefined, 59));

   faces.faces.push(new THREE.Face3(65, 48, 42, undefined, undefined, 60));
   faces.faces.push(new THREE.Face3(65, 42, 59, undefined, undefined, 60));

   faces.faces.push(new THREE.Face3(48, 37, 31, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 31, 18, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 18, 14, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 14, 8, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 8, 11, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 11, 22, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 22, 27, undefined, undefined, 61));
   faces.faces.push(new THREE.Face3(48, 27, 42, undefined, undefined, 61));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[68].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[52].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[87].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[100].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[85].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[79].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[99].vector);
   line.vertices.push(allpoints[110].vector);
   line.vertices.push(allpoints[113].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[94].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[75].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[90].vector);
   line.vertices.push(allpoints[103].vector);
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[90].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[107].vector);
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[95].vector);
   line.vertices.push(allpoints[107].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[115].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[115].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[58].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[86].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[80].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[64].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[60].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[88].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[82].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[92].vector);
   line.vertices.push(allpoints[97].vector);
   line.vertices.push(allpoints[108].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[101].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[112].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[88].vector);
   line.vertices.push(allpoints[101].vector);
   line.vertices.push(allpoints[109].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[105].vector);
   line.vertices.push(allpoints[111].vector);
   line.vertices.push(allpoints[117].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[116].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[98].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[84].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[119].vector);
   line.vertices.push(allpoints[118].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[50].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[66].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[93].vector);
   line.vertices.push(allpoints[98].vector);
   line.vertices.push(allpoints[109].vector);
   line.vertices.push(allpoints[112].vector);
   line.vertices.push(allpoints[116].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[102].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[83].vector);
   line.vertices.push(allpoints[89].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[114].vector);
   line.vertices.push(allpoints[118].vector);
   line.vertices.push(allpoints[113].vector);
   line.vertices.push(allpoints[104].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[106].vector);
   line.vertices.push(allpoints[96].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[89].vector);
   line.vertices.push(allpoints[102].vector);
   line.vertices.push(allpoints[91].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[76].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[91].vector);
   line.vertices.push(allpoints[96].vector);
   line.vertices.push(allpoints[104].vector);
   line.vertices.push(allpoints[100].vector);
   line.vertices.push(allpoints[87].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[42].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[65].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[48].vector);
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
