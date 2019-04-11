#### DAT505-GitHub session2 ####

* This is about how to change the texture of geometries.
* In the homework section, my composition was inspired by the spatial relationship between the earth, the sky and even the universe, so I used solid colors at the bottom and a shiny texture at the top.

### Usage ###

```html
<script src="build/three.js"></script>
```

For example,there are different materials in my homework.

```html
texture = new THREE.TextureLoader().load('texture/pink.jpg');
  material1 = new THREE.MeshBasicMaterial({ map: texture });
```
```html
material2 = new THREE.MeshBasicMaterial( {wireframe : true} );
```
```html
material3 = new THREE.MeshNormalMaterial();
```
```html
material4 = new THREE.MeshLambertMaterial({
  color: "#DEB887",
  transparent: true,
  opacity: 1
});
```
```html
material5 = new THREE.MeshLambertMaterial({
  color: "#DEB887",
  transparent: true,
  opacity: 1
});
```
```html
texture = new THREE.TextureLoader().load('texture/shining.jpg');
  material6 = new THREE.MeshBasicMaterial({map: texture});
```
```html
texture = new THREE.TextureLoader().load('texture/shining3.jpg');
  material7 = new THREE.MeshBasicMaterial({ map: texture });
```
