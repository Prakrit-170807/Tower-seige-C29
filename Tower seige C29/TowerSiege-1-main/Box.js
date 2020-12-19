class Box {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false, 
          'restitution':0.1,
          'friction':10,
          'density':4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      rotate(angle);
      rectMode(CENTER);
      fill(186,14,28);
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };