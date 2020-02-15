const gameObject = require('../gameEngine/GameObject');
const mesh_renderer = require('../components/mesh_renderer');
const cube_mesh = require('../meshes/cubeMesh');
class cube extends gameObject{ 
    init(){
        let mesh = cube_mesh.getMesh();
        let mesh_ren = new mesh_renderer(mesh);
        this.components.push(mesh_ren);
    }

    update(){

    }
}