var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(20, 25, 45);
  camera.lookAt(scene.position);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 2000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x < 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      for (var z = -10; z < 10; z += 5) {


      console.log("x:" +x+ ", y:" +y+ ", z:" +z);

  var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

  if ( x >= 0 && y >= 0 && z >= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
  }else if ( x <=0 && y >= 0 && z >= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
  }else if ( x >=0 && y <= 0 && z >= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF00});
  }else if ( x <=0 && y <= 0 && z >= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x0000FF});
  }else if ( x >=0 && y >= 0 && z <= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF00FF});
  }else if ( x <=0 && y >= 0 && z <= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x00FFFF});
  }else if ( x >=0 && y <= 0 && z <= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x008080});
  }else if ( x <=0 && y <= 0 && z <= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFC0CB});
  }else{
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x800000});
  }



      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      scene.add(mesh);
      cubes.push(mesh);

  }
}
}
console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;

  cubes.forEach(function(c,i){
    c.rotation.x = rot;
    c.rotation.y = rot;

  });


  renderer.render(scene, camera);
}

init();
drawFrame();
