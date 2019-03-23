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
  renderer.setClearColor("#7171C6");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry( 60, 320, 320 );
  texture = new THREE.TextureLoader().load('texture/pink.jpg');
  material1 = new THREE.MeshBasicMaterial({ map: texture });
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.y = 100;

	scene.add( mesh1 );

  geometry2 = new THREE.IcosahedronGeometry( 100,1 );
  material2 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2 = new THREE.EdgesHelper( mesh2,0xffff00 );
  mesh2.position.z = -1000;
  mesh2.position.y = 100;

  scene.add( mesh2 );

  geometry3 = new THREE.TetrahedronGeometry( 90,0 );
  material3 = new THREE.MeshNormalMaterial();
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh3.position.y = -150;

  scene.add( mesh3 );

  geometry4 = new THREE.TetrahedronGeometry( 90,0 );
  material4 = new THREE.MeshLambertMaterial({
    color: "#DEB887",
    transparent: true,
    opacity: 1
  });
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;
  mesh4.position.y = -150;
  mesh4.position.x = -250;

  scene.add( mesh4 );

  geometry5 = new THREE.TetrahedronGeometry( 90,0 );
  material5 = new THREE.MeshLambertMaterial({
    color: "#DEB887",
    transparent: true,
    opacity: 1
  });
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  mesh5.position.y = -150;
  mesh5.position.x = 250;

  scene.add( mesh5 );

  geometry6 = new THREE.OctahedronGeometry( 30,0 );
  texture = new THREE.TextureLoader().load('texture/shining.jpg');
  material6 = new THREE.MeshBasicMaterial({map: texture});
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;
  mesh6.position.y = -45;
  mesh6.position.x = -120;

	scene.add( mesh6 );

  geometry7 = new THREE.OctahedronGeometry( 30,0 );
  texture = new THREE.TextureLoader().load('texture/shining3.jpg');
  material7 = new THREE.MeshBasicMaterial({ map: texture });
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -1000;
  mesh7.position.y = -45;
  mesh7.position.x = 120;

  scene.add( mesh7 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;
  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;
  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;
  mesh4.rotation.x += 0.01; //Continuously rotate the mesh
  mesh4.rotation.y += 0.01;
  mesh5.rotation.x += 0.01; //Continuously rotate the mesh
  mesh5.rotation.y += 0.01;
  mesh6.rotation.x += 0; //Continuously rotate the mesh
  mesh6.rotation.y += 0.01;
  mesh7.rotation.x += 0; //Continuously rotate the mesh
  mesh7.rotation.y += 0.01;


  renderer.setClearColor("#7171C6");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
