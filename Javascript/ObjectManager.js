//Import object types here.
const cube = require('./gameObjects/cube');


let Objects = [];

//Create objects here.
function init(){
    let cube_obj = new cube();
    Objects.add(cube_obj);
}   

function update(){
    for(obj in Objects){
        obj.update();
    }
}