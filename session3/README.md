#### DAT505-GitHub session3 ####

* This is about GUI including Scale,Position,Rotation,boxColor,boxOpacity.
* In the homework section, I designed a pair of metal earrings. People can adjust the style of diamond on the earring through GUI.

### Usage ###

```html
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```

For example,there is the GUI in my homework.

```html
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
```
