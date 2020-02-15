const component = require('./Component');
const trans = require('../components/transform');
class gameObject {
    constructor(startPOS){
        this.components = [];
        this.name='';
        this.id=Math.random();
        this.transform = new trans(startPOS);
        init();
    }

    init(){

    }

    update(){
        //Always update all the components.
        for(component in this.components){
            component.update();
        }
    }
}