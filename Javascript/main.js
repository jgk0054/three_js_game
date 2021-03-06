var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var sceneWidth;
var sceneHeight;
const obj_manager = require('./ObjectManager');

function init() {
    sceneWidth=window.innerWidth;
    sceneHeight=window.innerHeight;
    renderer.setSize(sceneWidth, sceneHeight);
    
    document.body.appendChild(renderer.domElement);
    var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);//helper to rotate around in scene
    orbitControl.addEventListener('change', render);
    camera.position.z = 5;
    window.addEventListener('resize', onWindowResize, false);//resize callback
    obj_manager.init();
    update();
}

function update() {
    //animate
    obj_manager.update();
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