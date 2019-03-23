//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

var de2ra = function(degree){
  return degree*(Math.PI/180);
}

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );

  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    this.positionX = 1;
    this.positionY = 1;
    this.positionZ = -500;

    this.rotationX = 1;
    this.rotationY = 1;
    this.rotationZ = 1;
}

  var gui = new dat.GUI();

  var f1 = gui.addFolder('Scale');
  var f2 = gui.addFolder('Position');
  var f3 = gui.addFolder('Rotation');

  f1.add(controller, 'scaleX', 0.1,5).onChange( function() {
     mesh.scale.x = (controller.scaleX);
     });
  f1.add(controller, 'scaleY', 0.1,5).onChange( function() {
     mesh.scale.y = (controller.scaleY);
     });
  f1.add(controller, 'scaleZ', 0.1,5).onChange( function() {
     mesh.scale.z = (controller.scaleZ);
  });

  f2.add(controller, 'positionX', -500,500).onChange( function() {
     mesh.position.x = (controller.positionX);
     });
  f2.add(controller, 'positionY', -300,300).onChange( function() {
  mesh.position.y = (controller.positionY);
     });
  f2.add(controller, 'positionZ', -500,-400).onChange( function() {
     mesh.position.z = (controller.positionZ);
     });

  f3.add(controller, 'rotationX', -180,180).onChange( function() {
        mesh.rotation.x = de2ra(controller.rotationX);
        });
  f3.add(controller, 'rotationY', -180,180).onChange( function() {
        mesh.rotation.y = de2ra(controller.rotationY);
        });
  f3.add(controller, 'rotationZ', -180,180).onChange( function() {
        mesh.rotation.z = de2ra(controller.rotationZ);
        });

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0; //Continuously rotate the mesh
  mesh.rotation.y += 0;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();
