img = "";
status = "";
objects = [];

function preLoad()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#a7fcef");
    text("Dog", 45, 75);
    noFill();
    stroke("#a7e6fc");
    rect(30, 60, 450, 350);

    fill("#a7fcef");
    text("Cat", 320, 120)
    noFill();
    stroke("#a7e6fc");
    rect(300, 90, 270, 320);

    if(status != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#a7fcef");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#a7e6fc");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objetDetector = ml5.objectDetector('cocossd', modelLoaded);
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
    objects = results;
}