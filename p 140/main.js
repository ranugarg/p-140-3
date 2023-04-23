music1="";
music2="";
scoreleftWrist=0;
scorerightWrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
    song=loadsound("music.mp3");
    song=loadsound("music2.mp3");
}

function setup()
{
    canvas=createCanvas(400,350);
    canvas.position(450,180);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function modelloaded()
{
    console.log('poseNet is loaded');
}
function draw()
{
    image(video,0,0,400,350);
}

function gotposes(results)
{
    if(results>0)
    {
        
        console.log(results);

        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightWrist=results[0].pose.keypoints[10].score;

        console.log("scorerightWrist = " + scorerightWrist + " scoreleftWrist = " + scoreleftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }

}    
