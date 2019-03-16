//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#BFEFFF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry( 50, 320, 320 );
  material1 = new THREE.MeshBasicMaterial( {color: "#EEA9B8",wireframe:true } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

	scene.add( mesh1 );

	geometry2 = new THREE.CircleBufferGeometry( 100, 640 );
  material2 = new THREE.MeshBasicMaterial( { color: "#DB7093" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
	mesh2.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh2 );

  geometry3 = new THREE.RingGeometry( 400, 500, 3200 );
  material3 = new THREE.MeshBasicMaterial( { color: "#ADADAD", side: THREE.DoubleSide } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh3.position.y = -100;

  scene.add( mesh3 );

  geometry4 = new THREE.IcosahedronGeometry( 100,1 );
  material4 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  border4 = new THREE.EdgesHelper( mesh4,0xffff00 );
  mesh4.position.z = -1000;

  scene.add( mesh4 );

  x = 0, y = 0; var heartShape = new THREE.Shape();
  heartShape.moveTo( x + 5, y + 5 );
  heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
  heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
  heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
  heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
  heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
  heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
  geometry5 = new THREE.ShapeGeometry( heartShape );
  material5 = new THREE.MeshBasicMaterial( { color: "#FFEC8B" } );
  mesh5 = new THREE.Mesh( geometry5, material5 ) ;
  mesh5.position.z = -500;
  mesh5.position.y = -65;
  mesh5.position.x = -65;

  scene.add( mesh5 );

  geometry6 = new THREE.SphereGeometry( 15, 320, 320 );
  material6 = new THREE.MeshBasicMaterial( {color: "#DDA0DD",wireframe:true } );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -500;
  mesh6.position.y = 80;
  mesh6.position.x = 160;

  scene.add( mesh6 );

  geometry7 = new THREE.CircleBufferGeometry( 22, 640 );
  material7 = new THREE.MeshBasicMaterial( { color: "#B4EEB4" } );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -500;
  mesh7.position.y = 80;
  mesh7.position.x = 160;

  scene.add( mesh7 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;
  mesh2.rotation.x += 0.005; //Continuously rotate the mesh
  mesh2.rotation.y += 0.005;
  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;
  mesh4.rotation.x += 0.005; //Continuously rotate the mesh
  mesh4.rotation.y += 0.005;
  mesh5.rotation.x += 0; //Continuously rotate the mesh
  mesh5.rotation.y += 0.01;
  mesh6.rotation.x += 0.01; //Continuously rotate the mesh
  mesh6.rotation.y += 0.01;
  mesh7.rotation.x += 0.007; //Continuously rotate the mesh
  mesh7.rotation.y += 0.007;

  renderer.setClearColor("#BFEFFF");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
