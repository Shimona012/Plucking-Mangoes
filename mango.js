    class Mango{
        constructor(x,y,radius){
            var options={
                isStatic:true,
                restitution:0,
                friction:1
            }
            this.radius=radius;
            this.image=loadImage("Plucking mangoes/mango.png")
            this.body=Bodies.circle(x,y,this.radius,options)
            World.add(world,this.body);
        }
        display(){
            var mangoPos=this.body.position;
            push()
            translate(mangoPos.x,mangoPos.y);
            rotate(this.body.angle)
            fill(255,0,255)
            imageMode(CENTER);
            image(this.image,0,0,this.radius,this.radius);
            pop()
        }
    }