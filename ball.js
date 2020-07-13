class ball {
    constructor(x, y, radius){
    var options ={
        isStatic: false,
        restitution: 0.6,
        friction: 0.5,
        density: 1.2

    }

    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world,this.body);
}

display(){
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    
}

    
}