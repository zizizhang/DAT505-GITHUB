DAT505-Assignment
========
#### ZHANG XINZHI(B161006106) ####

#### Content, creativity, process ####

* I was inspired by one of my favorite plants, the dandelion. Every spring, the dandelion will be out of the white fluffy ball flowers. When I blow gently, the petals, or seeds, float into the air and scatter. So I added a blue sky background, but I didn't use sky blue. Because the sky is always grey in China, the protection of the environment has become a deeper meaning of my work. Finally, I created a geometric object like a dandelion flower, which can be rotated by pressing the mouse, and its size can be controlled by the wheel of the mouse.The most difficult part of the whole assignment was to create the shape of the dandelion. After many attempts, I finally decided to present it in the form of a straight line, that is, to draw it in the order of the points pushed in by the geometry.

### Usage ###

```html
<script src="lib/three.min.js"></script>
<script src="lib/Detector.js"></script>
<script src="lib/Coordinates.js"></script>
<script src="lib/OrbitControls.js"></script><!-- Track controller library -->
<script src="lib/stats.min.js"></script>
<script src="lib/dat.gui.min.js"></script>
<script src="lib/tween.min.js"></script><!-- Lightweight JavaScript libraries-->
<script src="lib/utilities.js"></script>
<script src="fonts/helvetiker_regular.typeface.js"></script><!-- Font profile -->
```

This code creates a scene including light,ambientLight,and it specifies a starburst of lines of length and color.

```html
//Create a scene
function createScene() {

    //The first parameter, is the color of the light, while the second parameter, Intensity, is the Intensity of the light source
    var light = new THREE.DirectionalLight(0xFFFFFF, 1.0);

    //The vector of the light source, that is, the position of the light source
    light.position.set(0, 0, 100);

    //Use with a light source such as a point light or a light source such as a parallel light source to soften the shadows or add some extra color to the scene
    var ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(light);//Add a light source to the scene
    scene.add(ambientLight);//Add the ambient light configuration to the scene
    // renders a starburst of lines of length 2
    //var innerColor = 0xff0000; // red
    //var outerColor = 0x0000FF; // blue
    var innerColor = 0x71C671; // green
    var outerColor = 0xFFFFFF; // white
    starburst(2, 200, innerColor, outerColor);

}
```

This code creates the geometry with lines, using different rules,and it adds the meterial to the geometry.

```html
function starburst(r, n, innerColor, outerColor) {
    // var r = 2;//Ball amplification parameter
    var nsqrt = Math.sqrt(n); // calculate two chunks
    for (j = 0; j < nsqrt; j++) {
        for (i = 0; i < nsqrt; i++) {

            var theta = (j / nsqrt) * Math.PI;//Gets the Angle with respect to the Y-axis
            var phi = (i / nsqrt) * Math.PI * 2;//Gets the Angle with respect to the X-axis
            var x = Math.sin(theta) * Math.cos(phi);//Gets the vector value of the X-axis direction
            var y = Math.cos(theta);//Gets the vector value of the Y-axis direction
            var z = -Math.sin(theta) * Math.sin(phi);//Gets the vector value of the Z-axis direction
            var geom = new THREE.Geometry();//Create an instance of geom

            //Vertices of geom add the origin (0,0,0)
            geom.vertices.push(new THREE.Vector3(0, 0, 0));

            var vertex = new THREE.Vector3(x, y, z);//Add (x,y,z) three-dimensional vectors
            //The function normalize means to limit the amount of data that you need to process to a certain amount that you need.
            vertex.normalize();
            //The multiplyScalar method is used to multiply the elements of Matrix3(3x3 matrix) directly with r and to return a new Matrix3(3x3 matrix).
            vertex.multiplyScalar(r);


            geom.vertices.push(vertex);//Add the line to geom
            geom.colors.push(new THREE.Color(innerColor));//Color inner core
            geom.colors.push(new THREE.Color(outerColor));//Color outer
            var mat = new THREE.LineBasicMaterial({//The material of the line
                vertexColors: true,
                linewidth: 20//Sets the width of the line
            });
            //Draw lines in the order of points pushed in by the geometry
            var line = new THREE.Line(geom, mat, THREE.LineStrip);
            scene.add(line);
        }
    }
}
```

This code creates a scene, a camera and it makes screen adaptation. Firstly, it animates the geometry within the scene for the camera.It then creates a WebGL renderer for the scene and camera, and it adds that viewport to the document.body element.

```html
function animate() {
    window.requestAnimationFrame(animate);//Control the animation
    render();//To render the page
}


function render() {

    var delta = clock.getDelta();
    cameraControls.update(delta);//Update controller status
    renderer.render(scene, camera);// Render the scene
}

//Initialize
function init() {
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
    var canvasRatio = canvasWidth / canvasHeight;//Window width to height ratio

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setSize(canvasWidth, canvasHeight);//Renderer size, form size
    //renderer.setClearColor(0xADD8E6, 1.0);
    renderer.setClearColor(0xA4D3EE, 1.0);

    //Set the camera for the perspective projection(field Angle, aspect ratio, the closest distance from the camera to the visual volume, and the furthest distance from the camera to the visual volume)
    camera = new THREE.PerspectiveCamera(40, canvasRatio, 1, 1000);

    camera.position.set(0, 0, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    //Create a new track controller
    cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
}
```

This code adds the rendered content to the page container.

```html
function addToDOM() {
    var container = document.getElementById('container');
    var canvas = container.getElementsByTagName('canvas');//Returns a collection of objects with the tag name "canvas"
    if (canvas.length > 0) {
        container.removeChild(canvas[0]);//Perform erase
    }
    container.appendChild(renderer.domElement);
}
```

This code is to initialize, create scenes, render content added to the page, render, play,and if there is an error popup prompt.
```html
try {
    init();//Initialize
    createScene();
    addToDOM();
    render();
    animate();
} catch (e) {
    var errorMsg = "Error: " + e;
    alert(errorMsg);//Popup error
}
```
