#### DAT505-GitHub session4 ####

* This is about arraymesh geometries where you can change the color of the geometries at a given position, or you can change the color at random.
* In the homework section, the arraymesh cubes can be randomly rotated and randomly changed color.

### Usage ###

```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

There are codes of orbitcontrols and arraymesh in my homework.

(1)creat orbitcontrols

```html
  controls = new THREE.OrbitControls(camera, renderer.domElement);
```

(2)arraymesh

```html
  for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -35; y < 40; y += 5) {
  }
  }
```
