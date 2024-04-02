img = "";
status = "";

function preLoad()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("a7fcef");
    text("Dog", 45, 75);
    noFill();
    stroke("#a7e6fc");
    rect(30, 60, 450, 350);

    fill("#a7fcef");
    text("Cat", 320, 120)
    noFill();
    stroke("#a7e6fc");
    rect(300, 90, 270, 320);
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objetDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}