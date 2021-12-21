song1="barney.mp3";
song2="bob.mp3";

function setup () {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

}




function preload()
{
song = loadSound(" bob.mp3");
song = loadSound("barney.mp3");
}


