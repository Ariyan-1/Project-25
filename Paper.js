class Paper {
  constructor(x, y,radius) {
    var options = {
        setStatic:false,
        restitution:0.3,
        friction:1,
        density:0.3
    }
    this.body = Bodies.circle(x, y,100,options);
    this.radius = 100;
    World.add(world,this.body);
    this.image = loadImage("sprites/paper.png")
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER)
    image(this.image,10,10,this.radius);
    strokeWeight(3);
    stroke("pink");
    fill("pink");
    //ellipse(0,0,this.radius,this.radius);
    pop();
    
  }
};