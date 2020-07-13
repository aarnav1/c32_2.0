class box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);

      if(this.body.speed>3){
        World.remove(world, this.body);
         push();
         this.visibility = this.visibility - 5;
         tint(255, this.visibility);
         pop();
       }
       
    }
  };