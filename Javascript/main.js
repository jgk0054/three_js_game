var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var cube;
var sceneWidth;
var sceneHeight;

var GameObjects = [];

function init() {
    sceneWidth=window.innerWidth;
    sceneHeight=window.innerHeight;
    renderer.setSize(sceneWidth, sceneHeight);
    
    document.body.appendChild(renderer.domElement);
    var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);//helper to rotate around in scene
    orbitControl.addEventListener('change', render);
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    window.addEventListener('resize', onWindowResize, false);//resize callback
    update();
}

function update() {
    //animate
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    render();
    requestAnimationFrame(update);//request next update
}
function render() {
    renderer.render(scene, camera);//draw
}

function onWindowResize() {
	//resize & align
	sceneHeight = window.innerHeight;
	sceneWidth = window.innerWidth;
	renderer.setSize(sceneWidth, sceneHeight);
	camera.aspect = sceneWidth/sceneHeight;
	camera.updateProjectionMatrix();
}


init();