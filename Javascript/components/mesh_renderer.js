const component = require('../gameEngine/Component');
class mesh_renderer extends component{
    constructor(mesh){
        this.mesh = mesh;
        scene.add(this.mesh);
        super();
    }

    init(){

    }

    update(){

    }
}