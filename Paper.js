class Paper extends BaseClass{

    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display(){
    

    }

}
