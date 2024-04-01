img = "";

function preLoad()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420)
    fill("a7fcef")
    text("Dog", 45, 75);
    noFill();
    stroke("#a7e6fc");
    rect(30, 60, 450, 350);
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}