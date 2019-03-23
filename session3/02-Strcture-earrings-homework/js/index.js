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

  light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);


  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.TorusGeometry( 40, 4, 16, 100 );
  material = new THREE.MeshStandardMaterial({
   color: "#FFFFFF",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;
  mesh.position.y = 20;
  mesh.position.x = -320;
  // Add mesh to scene
  scene.add( mesh );

  geometry1 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material1 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.y = 48;
  mesh1.position.x = -313;
  // Add mesh to scene
  scene.add( mesh1 );

  geometry2 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material2 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh2.position.y = 30;
  mesh2.position.x = -310;
  // Add mesh to scene
  scene.add( mesh2 );

  geometry3 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material3 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh3.position.y = 13;
  mesh3.position.x = -307;
  // Add mesh to scene
  scene.add( mesh3 );

  geometry4 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material4 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;
  mesh4.position.y = -4;
  mesh4.position.x = -302;
  // Add mesh to scene
  scene.add( mesh4 );

  geometry5 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material5 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  mesh5.position.y = -24;
  mesh5.position.x = -295;
  // Add mesh to scene
  scene.add( mesh5 );

  geometry6 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material6 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;
  mesh6.position.y = -40;
  mesh6.position.x = -291;
  // Add mesh to scene
  scene.add( mesh6 );

  geometry7 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material7 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -1000;
  mesh7.position.y = -55;
  mesh7.position.x = -292;
  // Add mesh to scene
  scene.add( mesh7 );

  geometry8 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material8 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh8 = new THREE.Mesh( geometry8, material8 );
  mesh8.position.z = -1000;
  mesh8.position.y = -65;
  mesh8.position.x = -300;
  // Add mesh to scene
  scene.add( mesh8 );

  geometry9 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material9 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh9 = new THREE.Mesh( geometry9, material9 );
  mesh9.position.z = -1000;
  mesh9.position.y = -70;
  mesh9.position.x = -315;
  // Add mesh to scene
  scene.add( mesh9 );

  geometry10 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material10 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh10 = new THREE.Mesh( geometry10, material10 );
  mesh10.position.z = -1000;
  mesh10.position.y = -60;
  mesh10.position.x = -327;
  // Add mesh to scene
  scene.add( mesh10 );

  geometry11 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material11 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh11 = new THREE.Mesh( geometry11, material11 );
  mesh11.position.z = -1000;
  mesh11.position.y = -45;
  mesh11.position.x = -335;
  // Add mesh to scene
  scene.add( mesh11 );

  geometry12 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material12 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh12 = new THREE.Mesh( geometry12, material12 );
  mesh12.position.z = -1000;
  mesh12.position.y = -30;
  mesh12.position.x = -333;
  // Add mesh to scene
  scene.add( mesh12 );

  geometry13 = new THREE.TorusGeometry( 40, 4, 16, 100 );
  material13 = new THREE.MeshStandardMaterial({
   color: "#FFFFFF",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh13 = new THREE.Mesh( geometry13, material13 );
  mesh13.position.z = -1000;
  mesh13.position.y = 125;
  mesh13.position.x = -282;
  // Add mesh to scene
  scene.add( mesh13 );

  geometry14 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material14 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh14 = new THREE.Mesh( geometry14, material14 );
  mesh14.position.z = -1000;
  mesh14.position.y = 152;
  mesh14.position.x = -290;
  // Add mesh to scene
  scene.add( mesh14 );

  geometry15 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material15 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh15 = new THREE.Mesh( geometry15, material15 );
  mesh15.position.z = -1000;
  mesh15.position.y = 139;
  mesh15.position.x = -280;
  // Add mesh to scene
  scene.add( mesh15 );

  geometry16 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material16 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh16 = new THREE.Mesh( geometry16, material16 );
  mesh16.position.z = -1000;
  mesh16.position.y = 125;
  mesh16.position.x = -271;
  // Add mesh to scene
  scene.add( mesh16 );

  geometry17 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material17 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh17 = new THREE.Mesh( geometry17, material17 );
  mesh17.position.z = -1000;
  mesh17.position.y = 110;
  mesh17.position.x = -262;
  // Add mesh to scene
  scene.add( mesh17 );

  geometry18 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material18 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh18 = new THREE.Mesh( geometry18, material18 );
  mesh18.position.z = -1000;
  mesh18.position.y = 94;
  mesh18.position.x = -254;
  // Add mesh to scene
  scene.add( mesh18 );

  geometry19 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material19 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh19 = new THREE.Mesh( geometry19, material19 );
  mesh19.position.z = -1000;
  mesh19.position.y = 78;
  mesh19.position.x = -245;
  // Add mesh to scene
  scene.add( mesh19 );

  geometry20 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material20 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh20 = new THREE.Mesh( geometry20, material20 );
  mesh20.position.z = -1000;
  mesh20.position.y = 60;
  mesh20.position.x = -238;
  // Add mesh to scene
  scene.add( mesh20 );

  geometry21 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material21 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh21 = new THREE.Mesh( geometry21, material21 );
  mesh21.position.z = -1000;
  mesh21.position.y = 44;
  mesh21.position.x = -232;
  // Add mesh to scene
  scene.add( mesh21 );

  geometry22 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material22 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh22 = new THREE.Mesh( geometry22, material22 );
  mesh22.position.z = -1000;
  mesh22.position.y = 28;
  mesh22.position.x = -228;
  // Add mesh to scene
  scene.add( mesh22 );

  geometry23 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material23 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh23 = new THREE.Mesh( geometry23, material23 );
  mesh23.position.z = -1000;
  mesh23.position.y = 12;
  mesh23.position.x = -224;
  // Add mesh to scene
  scene.add( mesh23 );

  geometry24 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material24 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh24 = new THREE.Mesh( geometry24, material24 );
  mesh24.position.z = -1000;
  mesh24.position.y = -4;
  mesh24.position.x = -221;
  // Add mesh to scene
  scene.add( mesh24 );

  //geometry25 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  geometry25 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material25 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh25 = new THREE.Mesh( geometry25, material25 );
  mesh25.position.z = -1000;
  mesh25.position.y = -20;
  mesh25.position.x = -219;
  // Add mesh to scene
  scene.add( mesh25 );

  geometry26 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material26 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh26 = new THREE.Mesh( geometry26, material26 );
  mesh26.position.z = -1000;
  mesh26.position.y = -32;
  mesh26.position.x = -218;
  // Add mesh to scene
  scene.add( mesh26 );

  geometry27 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material27 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh27 = new THREE.Mesh( geometry27, material27 );
  mesh27.position.z = -1000;
  mesh27.position.y = -18;
  mesh27.position.x = -328;
  // Add mesh to scene
  scene.add( mesh27 );


//second
  geometry28 = new THREE.TorusGeometry( 40, 4, 16, 100 );
  material28 = new THREE.MeshStandardMaterial({
   color: "#FFFFFF",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh28 = new THREE.Mesh( geometry28, material28 );
  mesh28.position.z = -1000;
  mesh28.position.y = 125;
  mesh28.position.x = 0;
  // Add mesh to scene
  scene.add( mesh28 );

  geometry29 = new THREE.TorusGeometry( 40, 4, 16, 100 );
  material29 = new THREE.MeshStandardMaterial({
   color: "#FFFFFF",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh29 = new THREE.Mesh( geometry29, material29 );
  mesh29.position.z = -1000;
  mesh29.position.y = 125;
  mesh29.position.x = 120;
  // Add mesh to scene
  scene.add( mesh29 );

  geometry30 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material30 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh30 = new THREE.Mesh( geometry30, material30 );
  mesh30.position.z = -1000;
  mesh30.position.y = 75;
  mesh30.position.x = 6;
  // Add mesh to scene
  scene.add( mesh30 );

  geometry31 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material31 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh31 = new THREE.Mesh( geometry31, material31 );
  mesh31.position.z = -1000;
  mesh31.position.y = 58;
  mesh31.position.x = 6;
  // Add mesh to scene
  scene.add( mesh31 );

  geometry32 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material32 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh32 = new THREE.Mesh( geometry32, material32 );
  mesh32.position.z = -1000;
  mesh32.position.y = 41;
  mesh32.position.x = 6;
  // Add mesh to scene
  scene.add( mesh32 );

  geometry33 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material33 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh33 = new THREE.Mesh( geometry33, material33 );
  mesh33.position.z = -1000;
  mesh33.position.y = 24;
  mesh33.position.x = 6;
  // Add mesh to scene
  scene.add( mesh33 );

  geometry34 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material34 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh34 = new THREE.Mesh( geometry34, material34 );
  mesh34.position.z = -1000;
  mesh34.position.y = 7;
  mesh34.position.x = 6;
  // Add mesh to scene
  scene.add( mesh34 );

  geometry35 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material35 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh35 = new THREE.Mesh( geometry35, material35 );
  mesh35.position.z = -1000;
  mesh35.position.y = -10;
  mesh35.position.x = 6;
  // Add mesh to scene
  scene.add( mesh35 );

  geometry36 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material36 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh36 = new THREE.Mesh( geometry36, material36 );
  mesh36.position.z = -1000;
  mesh36.position.y = -27;
  mesh36.position.x = 6;
  // Add mesh to scene
  scene.add( mesh36 );

  geometry37 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material37 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh37 = new THREE.Mesh( geometry37, material37 );
  mesh37.position.z = -1000;
  mesh37.position.y = -44;
  mesh37.position.x = 6;
  // Add mesh to scene
  scene.add( mesh37 );

  geometry38 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material38 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh38 = new THREE.Mesh( geometry38, material38 );
  mesh38.position.z = -1000;
  mesh38.position.y = -61;
  mesh38.position.x = 6;
  // Add mesh to scene
  scene.add( mesh38 );

  geometry39 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material39 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh39 = new THREE.Mesh( geometry39, material39 );
  mesh39.position.z = -1000;
  mesh39.position.y = -78;
  mesh39.position.x = 6;
  // Add mesh to scene
  scene.add( mesh39 );

  geometry40 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material40 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh40 = new THREE.Mesh( geometry40, material40 );
  mesh40.position.z = -1000;
  mesh40.position.y = -91;
  mesh40.position.x = 6;
  // Add mesh to scene
  scene.add( mesh40 );

  geometry41 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material41 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh41 = new THREE.Mesh( geometry41, material41 );
  mesh41.position.z = -1000;
  mesh41.position.y = 75;
  mesh41.position.x = 126;
  // Add mesh to scene
  scene.add( mesh41 );

  geometry42 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material42 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh42 = new THREE.Mesh( geometry42, material42 );
  mesh42.position.z = -1000;
  mesh42.position.y = 58;
  mesh42.position.x = 126;
  // Add mesh to scene
  scene.add( mesh42 );

  geometry43 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material43 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh43 = new THREE.Mesh( geometry43, material43 );
  mesh43.position.z = -1000;
  mesh43.position.y = 41;
  mesh43.position.x = 126;
  // Add mesh to scene
  scene.add( mesh43 );

  geometry44 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material44 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh44 = new THREE.Mesh( geometry44, material44 );
  mesh44.position.z = -1000;
  mesh44.position.y = 24;
  mesh44.position.x = 126;
  // Add mesh to scene
  scene.add( mesh44 );

  geometry45 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material45 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh45 = new THREE.Mesh( geometry45, material45 );
  mesh45.position.z = -1000;
  mesh45.position.y = 7;
  mesh45.position.x = 126;
  // Add mesh to scene
  scene.add( mesh45 );

  geometry46 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material46 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh46 = new THREE.Mesh( geometry46, material46 );
  mesh46.position.z = -1000;
  mesh46.position.y = -10;
  mesh46.position.x = 126;
  // Add mesh to scene
  scene.add( mesh46 );

  geometry47 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material47 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh47 = new THREE.Mesh( geometry47, material47 );
  mesh47.position.z = -1000;
  mesh47.position.y = -27;
  mesh47.position.x = 126;
  // Add mesh to scene
  scene.add( mesh47 );

  geometry48 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material48 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh48 = new THREE.Mesh( geometry48, material48 );
  mesh48.position.z = -1000;
  mesh48.position.y = -44;
  mesh48.position.x = 126;
  // Add mesh to scene
  scene.add( mesh48 );

  geometry49 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material49 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh49 = new THREE.Mesh( geometry49, material49 );
  mesh49.position.z = -1000;
  mesh49.position.y = -61;
  mesh49.position.x = 126;
  // Add mesh to scene
  scene.add( mesh49 );

  geometry50 = new THREE.TorusKnotGeometry( 6, 2, 100, 16 );
  material50 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh50 = new THREE.Mesh( geometry50, material50 );
  mesh50.position.z = -1000;
  mesh50.position.y = -78;
  mesh50.position.x = 126;
  // Add mesh to scene
  scene.add( mesh50 );

  geometry51 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material51 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh51 = new THREE.Mesh( geometry51, material51 );
  mesh51.position.z = -1000;
  mesh51.position.y = -91;
  mesh51.position.x = 126;
  // Add mesh to scene
  scene.add( mesh51 );

  geometry52 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material52 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh52 = new THREE.Mesh( geometry52, material52 );
  mesh52.position.z = -1000;
  mesh52.position.y = 85;
  mesh52.position.x = -20;
  // Add mesh to scene
  scene.add( mesh52 );

  geometry53 = new THREE.TorusGeometry( 7, 2, 16, 100 );
  material53 = new THREE.MeshStandardMaterial({
   color: "#FFD39B",
   roughness: 0.5,
   metalness: 0.5
 });
  mesh53 = new THREE.Mesh( geometry53, material53 );
  mesh53.position.z = -1000;
  mesh53.position.y = 85;
  mesh53.position.x = 100;
  // Add mesh to scene
  scene.add( mesh53 );

  geometry54 = new THREE.SphereGeometry( 10, 3, 3 );
  material54 = new THREE.MeshNormalMaterial();
  mesh54 = new THREE.Mesh( geometry54, material54 );
  mesh54.position.z = -1000;
  mesh54.position.y = 72;
  mesh54.position.x = 95;
  // Add mesh to scene
  scene.add( mesh54 );

  geometry55 = new THREE.SphereGeometry( 10, 3, 3 );
  material55 = new THREE.MeshNormalMaterial();
  mesh55 = new THREE.Mesh( geometry55, material55 );
  mesh55.position.z = -1000;
  mesh55.position.y = 72;
  mesh55.position.x = -25;
  // Add mesh to scene
  scene.add( mesh55 );

  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;

    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
}

  var gui = new dat.GUI();

  var f1 = gui.addFolder('Scale');
  var f2 = gui.addFolder('Position');
  var f3 = gui.addFolder('Rotation');

  f1.add(controller, 'scaleX', 0.1,10).onChange( function() {
     mesh54.scale.x = (controller.scaleX);
     mesh55.scale.x = (controller.scaleX);
     });
  f1.add(controller, 'scaleY', 0.1,5).onChange( function() {
     mesh54.scale.y = (controller.scaleY);
     mesh55.scale.y = (controller.scaleY);
     });
  f1.add(controller, 'scaleZ', 0.5,10).onChange( function() {
     mesh54.scale.z = (controller.scaleZ);
     mesh55.scale.z = (controller.scaleZ);
  });

  f2.add(controller, 'positionX', -500,500).onChange( function() {
     mesh54.position.x = (controller.positionX);
     mesh55.position.x = (controller.positionX);
     });
  f2.add(controller, 'positionY', -300,300).onChange( function() {
     mesh54.position.y = (controller.positionY);
     mesh55.position.y = (controller.positionY);
     });
  f2.add(controller, 'positionZ', -1500,-500).onChange( function() {
     mesh54.position.z = (controller.positionZ);
     mesh55.position.z = (controller.positionZ);
     });

  f3.add(controller, 'rotationX', -180,180).onChange( function() {
     mesh54.rotation.x = de2ra(controller.rotationX);
     mesh55.rotation.x = de2ra(controller.rotationX);
      });
  f3.add(controller, 'rotationY', -180,180).onChange( function() {
     mesh54.rotation.y = de2ra(controller.rotationY);
     mesh55.rotation.y = de2ra(controller.rotationY);
     });
  f3.add(controller, 'rotationZ', -180,180).onChange( function() {
     mesh54.rotation.z = de2ra(controller.rotationZ);
     mesh55.rotation.z = de2ra(controller.rotationZ);
     });

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh54.rotation.x += 0; //Continuously rotate the mesh
  mesh54.rotation.y += 0;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();
