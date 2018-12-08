function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
  background(255,0,0)


  button();
    
}

function button()
{
	fill(0,0,255);
	rect(100,100,100,50);

	fill(255,255,255);
	text("Main Menu",120,125);

	if (mouseX > 100 && mouseX < 100+100 && mouseY > 100 && mouseY < 100+50 && mouseIsPressed)
	{
		window.open("2mainmenu.html","_self");
	}
}