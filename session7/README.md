#### DAT505-GitHub session7 ####

* This is the close and the cube drop randomly and change the material randomly.
* In the homework section, I realized that the eyeball can follow the mouse to move on the screen.

### Usage ###

```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```

Creates a random set of geometry at random positions.

```html
var groupscale=(Math.random()*-2)+1;
mesh = new THREE.Mesh( geometry, material );
mesh.position.x=(Math.random()*-200)+40;
mesh.position.y=(Math.random()*-100)+50;
mesh.scale.x=groupscale;
  mesh.scale.y=groupscale;
    mesh.scale.z=groupscale;

scene.add( mesh);
cubes.push(mesh);
```

Coordinate mapping of the surfaces of the geometry

```html
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
```

The geometry follows the mouse around the screen

```html
function render() {
	console.log(window.innerHeight)
	cubes.forEach(function(c,i){
cubes[i].rotation.x = mouseY/window.innerHeight*2;
cubes[i].rotation.y = mouseX/window.innerWidth*2;
});
	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
```
