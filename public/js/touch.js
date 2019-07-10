$(function() {

var num = 181; // the total number of images 
var imgnums = 1;

var currentTranslation = 1;
var lastDistance = 1;
var translationDelta = 1;

// Preload all the images into hidden div
for (var i=1 ; i<=num ; i++) {
    var img = document.createElement('img');
    img.src = './img/360Compress/ts_'+i+'.jpg';
    document.getElementById('preload-imgs').appendChild(img);
}

var swipeOptions=
{
    triggerOnTouchEnd : true,	
    swipeStatus : swipeStatus,
    allowPageScroll:"vertical",
    threshold:75			
}

$(function()
{				
    imgs = $(".img-container"); // the element that will be swipeable
    imgs.swipe( swipeOptions );
});

function swipeStatus(event, phase, direction, distance) {
    var duration = 0;
    if (phase == "end") {
      translationDelta = 1;
    } else {
      translationDelta = lastDistance - distance;
    }

    if(direction == "right") {
    	currentTranslation -= translationDelta;
        if(currentTranslation > 181){
            currentTranslation = currentTranslation -181;
        }
    }
    else if (direction == "left") {
    	currentTranslation += translationDelta;
        if(currentTranslation < 1){
            currentTranslation = currentTranslation +181;
        }
    }
       if(currentTranslation > 181){
            currentTranslation=currentTranslation-181;
        }else if(currentTranslation < 1){
             currentTranslation=currentTranslation+181;
        }
    document.getElementById("ts").src="./img/360Compress/ts_"+currentTranslation+".jpg";

    lastDistance = distance;
}

function changeImg (imgNum) {
    // divide by 8 (or any number) to spread 
    // it out so it doesn't load new img 
    // every single px of swipe distance
    imgNum = Math.floor(imgNum/8); 

    if (imgNum < 1) {
    	imgNum += num;
    }
    if (imgNum > num) {
    	imgNum -= num;
    }

    // change the image src
    document.getElementById("ts").src="./img/360Compress/ts_"+imgNum+".jpg";
    imgnums = imgNum;
}

function changeImgR (imgNum) {

    // divide by 8 (or any number) to spread 
    // it out so it doesn't load new img 
    // every single px of swipe distance
    imgNum = Math.floor(imgNum/8); 

    var num2 = -Math.abs(num); 
    if (imgNum > num2) {
    	imgNum += num;
    }
    if (imgNum <= num2) {
    	imgNum += num*2;
    }

    // change the image src
    document.getElementById("ts").src="./img/360Compress/ts_"+imgNum+".jpg";
    imgnums = imgNum;
}
})