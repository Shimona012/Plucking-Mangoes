		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;
		const Constraint= Matter.Constraint;
		
		var boy,tree,stone,slingshot,boy,tree;
		var m1,m2,m3,m4,m5,m6,m7,m8,m9,ma10;
		var m11,m12,m13;
		var m14,m15,m16,m17;
		var bg;
		var ground;
		var texts;

		function preload()
		{
			bg=loadImage("Plucking mangoes/mango.jpg")
			boy=loadImage("Plucking mangoes/boy.png")
			tree=loadImage("Plucking mangoes/tree.png")
			texts= loadImage("Plucking mangoes/boxx.png")
		}

		function setup() {
			createCanvas(1800, 800);

			engine = Engine.create();
			world = engine.world;

			ground= new Ground(800,800,width*2,10);

	stone=new Stone(300,600,80);

	

	m1= new Mango(1500,290,98);
	m2= new Mango(1500,360,70);
	m3= new Mango(1400,340,110);
	m4= new Mango(1300,380,70);
	m5= new Mango(1200,430,75);
	m6= new Mango(1250,320,70);
	m7= new Mango(1150,370,100);
	m8= new Mango(1350,400,70);
	m9= new Mango(1350,250,70);
	m10= new Mango(1200,200,70);
	m11=new Mango(1400,260,80);
	m12= new Mango(1600,340,50);
	m13= new Mango(1500,450,70);
	m14= new Mango(1350,180,70);
	m15= new Mango(1200,300,60);
	m16= new Mango(1290,270,80);
	m17 = new Mango(1590,430,130);
	slingshot = new SlingShot(stone.body,{x:225,y:630});
		}


		
		function draw() {
			
		background(bg);
		
		Engine.update(engine)
		
		image(boy,185,550,200,300);
		image(tree,1000,120,650,700);
image(texts,265,400,350,200);
		ground.display();
		stone.display();
		
		m1.display();
		m2.display();
		m3.display();
		m4.display();
		m5.display();
		m6.display();
		m7.display();
		m8.display();
		m9.display();
		m10.display();
		m11.display();
		m12.display();
		m13.display();
		m14.display();
		m15.display();
		m16.display();
		m17.display();
		
		slingshot.display();
		
	detectCollision(stone,m1);
	detectCollision(stone,m2);
	detectCollision(stone,m3);
	detectCollision(stone,m4);
	detectCollision(stone,m5);
	detectCollision(stone,m6);
	detectCollision(stone,m7);
	detectCollision(stone,m8);
	detectCollision(stone,m9);
	detectCollision(stone,m10);
	detectCollision(stone,m11);
	detectCollision(stone,m12);
	detectCollision(stone,m13);
	detectCollision(stone,m14);
	detectCollision(stone,m15);
	detectCollision(stone,m16);
	detectCollision(stone,m17);


		
		fill("yellow");
		stroke("green");
		strokeWeight(40);
		textSize(40);
		textFont("Monotype Corsiva")
		text("Press Space to get another shot at this",500,100);
		strokeWeight(4);
		textSize(30);
		text("I want those mangoes..",310,470);
		text("Can you help me get them?",280,500);
		text(" Just drag the stone.",320,540);
		text("* and be careful the stone is a 'bit' dangerous",1200,780);

		}
		function mouseDragged(){
			Body.setPosition(stone.body,{x:mouseX,y:mouseY})
				
			}
			function mouseReleased(){
				slingshot.fly()
			}
			function keyPressed(){
				if(keyCode===32){
			slingshot.attach(stone.body);
				}
			}
			

		function detectCollision(lstone,lmango){
		MangoBodyPosition=lmango.body.position;
		stoneBodyPosition=lstone.body.position;
		
		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
		if (distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false)
		
		}
		}