function setup()
{
  createCanvas(500,500);
  
}

function draw()
{
  background(50,50,50)

  button();
    
}

function button()
{
	fill(50,50,255);
	rect(100,100,100,50);

	fill(255,255,255);
	text("Intro",120,125);


	if (mouseX > 100 && mouseX < 100+100 && mouseY > 100 && mouseY < 100+50 && mouseIsPressed)
	{
		window.open("index.html","_self");
	}
}