    class SlingShot{
        constructor(bodyA, pointB){
            var option={
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.004,
                length: 0.5
            }
                this.pointB=pointB;
                this.sling=Constraint.create(option);
                World.add(world,this.sling);
            }
        
            attach(body){
                this.sling.bodyA=body;
            }
        
            fly()
            {
                this.sling.bodyA=null;
            }
        
            display()
            {
                if(this.sling.bodyA)
                {
                    var pointA=this.sling.bodyA.position;
                    var pointB=this.pointB
                    stroke("maroon");
                    strokeWeight(5);		
                    line(pointA.x,pointA.y,pointB.x,pointB.y);
                }
            }
        }