var canvas = new fzbric.canvas("myCanvas");

// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
     block_object=Img;
     block_object.scaleToWidth(block_width);
     block_object.scaleToHeight(block_height);
    block_object.set({
        top:block_y,
        left:block_x
    });
    canvas.add(block_object);
    
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x=0;
		console.log("r");
		new_image("rr.jpg");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		console.log("g");
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		console.log("y");
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		console.log("p");
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	console.log("b");
		new_image("br.png");
	}
	
}

